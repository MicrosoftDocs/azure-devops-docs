---
title: Use Azure Artifacts feeds as a private PowerShell repository
description: How to use Azure Artifacts feeds as a private PowerShell repository
ms.technology: devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.reviewer: amullans
ms.date: 07/18/2022
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Use an Azure Artifacts feed as a private PowerShell repository

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure Artifacts provides an easy way to share PowerShell scripts across teams to promote collaboration and maximize effectiveness. By storing PowerShell modules in a private repository, you can give members of your team the ability to download or update those scripts quickly using the command line.

This article will guide you through setting up your Azure Artifacts feed as a private PowerShell repository to store and share your PowerShell modules. You'll learn how to:

>[!div class="checklist"]
> * Create a Personal Access Token
> * Create a new feed to store PowerShell modules
> * Create, package, and publish PowerShell modules
> * Connect to a feed with PowerShell
> * Use the private PowerShell repository with Azure Pipelines

## Prerequisites

- [NuGet.exe](https://www.nuget.org/downloads)
- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.
- A private project. [create a project](../../organizations/projects/create-project.md), if you don't have one already.

## Create a personal access token

Using a personal access token (PAT) is a great way to authenticate with Azure DevOps without using your primary credentials. See [Use personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) for more details.

1. Navigate to you Azure DevOps organization `https://dev.azure.com/<ORGANIZATION_NAME>/`

1. Select the user settings icon, and then select **Personal access tokens**.

    :::image type="content" source="../media/user-settings-pat.png" alt-text="A screenshot showing how to create a personal access token.":::

1. Select **New Token**

1. Enter a name for your PAT and then choose an **Expiration** date.

1. Select **Custom defined**, and then select **Packaging** > **Read, write & manage**.

1. Select **Create** when you are done. Copy and store your PAT in a safe location.

    :::image type="content" source="../media/config-new-pat.png" alt-text="A screenshot showing how to set up a new personal access token.":::

## Create the feed

A feed is a central repository that can store multiple packages of different types. To store our packages, the PowerShell Modules in this scenario, we will need to create a new feed.

1. Navigate to **Azure Artifacts** from your organization.

    > [!div class="mx-imgBorder"]
    > ![Azure Artifacts](../media/goto-feed-hub-azure-devops-newnav.png)

2. Select **Create Feed**

    > [!div class="mx-imgBorder"]
    > ![Create feed](../media/new-feed-button-azure-devops-newnav.png)

3. In the dialog, provide a feed name and chose your visibility, scope and upstream sources.
 
    > [!div class="mx-imgBorder"]
    > ![new feed dialog box](../media/new-feed-with-scope-dialog.png)
    
4. Select **Create**. 

Now that you've created a feed that will act as your PowerShell repository, let's create and package a PowerShell module.

## Creating, packaging, and sending a module

These next steps will be using a simple `Get-Hello` script that simply writes "Hello from my Azure DevOps Services Package."

### Create the file structure

Create a folder named `Get-Hello`. Within that folder create a `Get-Hello.psm1` file:

``` 
|--- Get-Hello                     
    |--- Get-Hello.psm1     // This will become our PowerShell Module
    |--- Get-Hello.psd1     // This will become our module manifest
```

### Create and populate the PowerShell module and module manifest

1. Paste the following script into your newly created `Get-Hello.psm1` file:

    ```powershell
    Function Get-Hello{
        Write-Host "Hello from my Azure DevOps Services Package."
    }
    ```

2. Create the module manifest by running the following command in your `Get-Hello` directory path. This will write the module manifest to your `Get-Hello.psd1` file.

    ```powershell
    New-ModuleManifest -Path .\Get-Hello.psd1
    ```

3. Find the **Nested Modules** field in your `Get-Hello.psd1` file and paste in the path to your `Get-Hello.psm1` file. You may also need to define your `RootModule` when creating your own Module Manifests. To do so, paste the following snippet in your `Get-Hello.psd1`
    
    ```powershell
    RootModule = 'Get-Hello.psm1'
    ```

4. The `FunctionsToExport = @()` section is meant to define the module's exported functions. This is simply a list of all exported functions. The following is an example from `PowerShellGet.psd1`:

    ```powershell
    FunctionsToExport = @('Install-Module',
                          'Find-Module',
                          'Save-Module',
                          'Update-Module',
                          'Publish-Module', 
                          'Get-InstalledModule',
                          'Uninstall-Module',
                          'Find-Command', 
                          'Find-DscResource', 
                          'Find-RoleCapability',
                          'Install-Script',
                          'Find-Script',
                          'Save-Script',
                          'Update-Script',
                          'Publish-Script', 
                          'Get-InstalledScript',
                          'Uninstall-Script',
                          'Test-ScriptFileInfo',
                          'New-ScriptFileInfo',
                          'Update-ScriptFileInfo',
                          'Get-PSRepository',
                          'Set-PSRepository',                      
                          'Register-PSRepository',
                          'Unregister-PSRepository',
                          'Update-ModuleManifest')
    ```
    
    > [!TIP]
    > Your module manifest should export the `Get-Hello` function you created in Step 1.
    
5. It is also possible to define a list of files as part of your module. Just add this list under `FileList=@()`.

    ```powershell
    FileList = @('PSModule.psm1',
                 'PSGet.Format.ps1xml',
                 'PSGet.Resource.psd1')
    ```       

### Package and publish the module

We now have the module and the module manifest. We are ready to package it and publish it to our Azure Artifacts feed.

1. In an elevated PowerShell prompt, run the following snippet:

    ```powershell
    nuget spec Get-Hello
    ```

    The `spec` command will create a `Get-Hello.nuspec` file. This specifies the information that NuGet needs to package our module. Few things to keep in mind here:

   * The version number on the Module Manifest and the .nuspec file must match.
   * By default, if we leave the sample dependencies, NuGet will install jQuery.

    Here is the `Get-Hello.nuspec` file:

     ```xml
     <?xml version="1.0"?>
     <package >
     <metadata>
       <id>Get-Hello</id>
       <version>1.0.0</version>
       <authors>frantot</authors>
       <owners>frantot</owners>
       <requireLicenseAcceptance>false</requireLicenseAcceptance>
       <description>The module says hello to the user</description>
       <releaseNotes>This is the newest I know of.</releaseNotes>
       <copyright>Copyright 2019</copyright>
       <tags>PSModule</tags>
       <dependencies>
       </dependencies>
     </metadata>
     </package>
     ```

2. Now that we have both the PowerShell module and the NuGet spec file, we are ready to to pack it and publish it.

    - Package the module:
    
    ```powershell
    nuget pack Get-Hello.nuspec
    ```

    - Add the new package source to your NuGet configuration file:
    
    ```powershell
    nuget sources Add -Name "PowershellModules" -Source "https://pkgs.dev.azure.com/<org_name>/_packaging/<feed_name>/nuget/v3/index.json" -username "<user_name>" -password "<personal_access_token(PAT)>"
    ```
    
    If you're still using the older `visualstudio.com` URLs, use the following command instead:

    ```powershell
    nuget sources Add -Name "PowershellModules" -Source "https://<org_name>.pkgs.visualstudio.com/_packaging/<feed_name>/nuget/v3/index.json" -username "<user_name>" -password "<personal_access_token_you_created>"
    ```

    - Publish the NuGet package to your feed:
    
    ```powershell
    nuget push -Source "PowershellModules" -ApiKey AzureDevOpsServices "your .nupkg path. eg: .\Get-Hello.1.0.0.nupkg"
    ```

Our PowerShell module is now available in our feed.

> [!div class="mx-imgBorder"]
> ![uploaded package](../../repos/git/media/artifact-package-powershell.png)

> [!NOTE]
> Your `NuGet.config` file is located at `%appdata%\NuGet\NuGet.Config` for Windows, and at `~/.config/NuGet/NuGet.Config` or `~/.nuget/NuGet/NuGet.Config` for Mac/Linux (depending on the OS distribution).

## Connecting to the feed as a PowerShell repo

We now have a private repository within Azure Artifacts that we can push our PowerShell modules to and we have a module that we can install. In the next step, we will connect to our new Azure Artifacts feed so we can publish our own modules as well as install other modules published by members on our team.

> [!IMPORTANT]
> PowerShell does not support version 3 of NuGet.

1. Open an elevated PowerShell prompt window.

1. Set up authentication to access Azure Artifacts feeds. Replace the placeholders with your personal access token and email:

    ```powershell
    $patToken = "YOUR PERSONAL ACCESS TOKEN" | ConvertTo-SecureString -AsPlainText -Force
    ```

    ```powershell
    $credsAzureDevopsServices = New-Object System.Management.Automation.PSCredential("YOUR EMAIL", $patToken)
    ```

1. Register your PowerShell repository. The `SourceLocation` link can also be found by selecting **Connect to Feed** then **NuGet.exe** from the feed's page in Azure Artifacts.

    - Project-scoped feed:

    ```powershell
    Register-PSRepository -Name "PowershellAzureDevopsServices" -SourceLocation "https://pkgs.dev.azure.com/<org_name>/<project_name>/_packaging/<feed_name>/nuget/v2" -PublishLocation "https://pkgs.dev.azure.com/<org_name>/<project_name>/_packaging/<feed_name>/nuget/v2" -InstallationPolicy Trusted -Credential $credsAzureDevopsServices
    ```
    
    - Org-scoped feed:

    ```powershell
    Register-PSRepository -Name "PowershellAzureDevopsServices" -SourceLocation "https://pkgs.dev.azure.com/<org_name>/_packaging/<feed_name>/nuget/v2" -PublishLocation "https://pkgs.dev.azure.com/<org_name>/_packaging/<feed_name>/nuget/v2" -InstallationPolicy Trusted -Credential $credsAzureDevopsServices
    ```
    
    If you're still using the older `visualstudio.com` URLs, use the following command instead:

    - Project-scoped feed:

    ```powershell
    Register-PSRepository -Name "PowershellAzureDevopsServices" -SourceLocation "https://<org_name>.pkgs.visualstudio.com/<project_name>/_packaging/<feed_name>/nuget/v2" -PublishLocation "https://<org_name>.pkgs.visualstudio.com/<project_name>/_packaging/<feed_name>/nuget/v2" -InstallationPolicy Trusted -Credential $credsAzureDevopsServices
    ```
   
    - Org-scoped feed:
    
    ```powershell
    Register-PSRepository -Name "PowershellAzureDevopsServices" -SourceLocation "https://<org_name>.pkgs.visualstudio.com/_packaging/<feed_name>/nuget/v2" -PublishLocation "https://<org_name>.pkgs.visualstudio.com/_packaging/<feed_name>/nuget/v2" -InstallationPolicy Trusted -Credential $credsAzureDevopsServices
    ```

    > [!NOTE]
    > In some versions of PowerShell, you must start a new session after you run the `Register-PSRepository` cmdlet to avoid the `Unable to resolve package source` warning.

1. Register your package source:

    - Project-scoped feed:

    ```powershell
    Register-PackageSource -Name "PowershellAzureDevopsServices" -Location "https://pkgs.dev.azure.com/<org_name>/<project_name>/_packaging/<feed_name>/nuget/v2" -ProviderName NuGet -Trusted -SkipValidate -Credential $credsAzureDevopsServices
    ```
    
    - Org-scoped feed:

    ```powershell
    Register-PackageSource -Name "PowershellAzureDevopsServices" -Location "https://pkgs.dev.azure.com/<org_name>/_packaging/<feed_name>/nuget/v2" -ProviderName NuGet -Trusted -SkipValidate -Credential $credsAzureDevopsServices 
    ```

1. To confirm that the repository was registered successfully run the `Get-PSRepository` cmdlet. This command gets all module repositories registered for the current user:

    ```powershell
    Get-PSRepository
    ```

1. Find modules in our repository:

    ```powershell
    Find-Module -Repository PowershellAzureDevopsServices
    ```

    Our `Get-Hello` module should be one of the entries in the previous cmdlet's return message. To install it, run the following command:
    
    ```powershell
    Install-Module -Name Get-Hello -Repository PowershellAzureDevopsServices
    ```

    If the *Install-Module* command is returning an error *Unable to resolve package source*, run the `Register-PackageSource` cmdlet again with the `Trusted` flag as follows:
        
    ```powershell
    Register-PackageSource -Name "PowershellAzureDevopsServices" -Location "https://pkgs.dev.azure.com/<org_name>/_packaging/<feed_name>/nuget/v2" -ProviderName NuGet -Trusted -Trusted -SkipValidate -Credential $credsAzureDevopsServices
    ```

    You can check for your module by running the following command:
    
    ```powershell
    Get-Module -ListAvailable Get-Hello
    ```

We now have our private PowerShell repository to publish and download our packages to and from our feed and best of all, available to everyone on our team.

## Use the private PowerShell repository in Azure Pipelines

The following example shows how to install a PowerShell Module from the private PowerShell repository.

```yaml
variables:
  PackageFeedEndpoint: https://pkgs.dev.azure.com/<org_name>/_packaging/<feed_name>/nuget/v2 # Org-scoped feed.
  # Project-scoped feed:https://pkgs.dev.azure.com/<org_name>/<project_name>/_packaging/<feed_name>/nuget/v2 
  
  # Construct a JSON object that contains the package feed endpoint URL and the personal access token (PAT) to pass them to the Azure Artifacts credential provider. 
  # See https://github.com/microsoft/artifacts-credprovider#environment-variables for more details.
  PackageFeedEndpointCredential: '{"endpointCredentials": [{"endpoint":"$(PackageFeedEndpoint)", "username":"OPTIONAL", "password":"ACCESS TOKEN"}]}'
  
steps:
  # NOTE: To prevent possible 'Unable to resolve package source' errors when trying to install modules from your
  # Azure Artifacts feed, call Register-PSRepository in a separate PowerShell task to the Install-Module call.
  - powershell: |
      Register-PSRepository -Name "PowershellAzureDevopsServices" -SourceLocation "$(PackageFeedEndpoint)" -PublishLocation "$(PackageFeedEndpoint)" -InstallationPolicy Trusted
    displayName: Register Azure Artifacts Feed as PSRepository
    env:
      # This environment variable passes the credentials to the credential provider.
      VSS_NUGET_EXTERNAL_FEED_ENDPOINTS: $(PackageFeedEndpointCredential)
      
  - powershell: |
      Install-Module -Name Get-Hello -Repository PowershellAzureDevopsServices
    displayName: Install Get-Hello PowerShell module
    env:
      # The credentials must be set on every task that interacts with your private PowerShell repository.
      VSS_NUGET_EXTERNAL_FEED_ENDPOINTS: $(PackageFeedEndpointCredential)
      
  - powershell: |
        Get-Hello
    displayName: Execute Get-Hello
```

## Credit

Credit to this [article on Medium](https://medium.com/@jsrice7391/using-vsts-for-your-companys-private-powershell-library-e333b15d58c8) that was used as a source for this tutorial.

## Related articles

- [Project-scoped vs org-coped feeds](../feeds/project-scoped-feeds.md)
- [Feed permissions](../feeds/feed-permissions.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
