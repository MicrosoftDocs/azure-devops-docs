---
title: Use Azure Artifacts feeds as a private PowerShell repository
description: How to use Azure Artifacts feeds as a private PowerShell repository
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 08/19/2022
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
- [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider)
- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.
- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-feed) if you don't have one already.

## Create a personal access token

Using a personal access token (PAT) is a great way to authenticate with Azure DevOps without using your primary credentials. See [Use personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) for more details.

1. Navigate to your Azure DevOps organization `https://dev.azure.com/<ORGANIZATION_NAME>/`

1. Select the user settings icon, and then select **Personal access tokens**.

    :::image type="content" source="../media/user-settings-pat.png" alt-text="A screenshot showing how to create a personal access token.":::

1. Select **New Token**

1. Enter a name for your PAT and then choose an **Expiration** date.

1. Select **Custom defined**, and then select **Packaging** > **Read, write & manage**.

1. Select **Create** when you're done. Copy and store your PAT in a safe location.

    :::image type="content" source="../media/config-new-pat.png" alt-text="A screenshot showing how to set up a new personal access token.":::

## Create a module

1. Create a new folder *Get-Hello*. Navigate inside your folder and create a new file *Get-Hello.psm1*.

    ```
    |--- Get-Hello               // Parent folder     
        |--- Get-Hello.psm1     // This will become our PowerShell Module
        |--- Get-Hello.psd1    // This will become our module manifest
    ```

1. Paste the following script into your *Get-Hello.psm1* file:

    ```powershell
    Function Get-Hello{
        Write-Host "Hello from my Azure DevOps Services Package."
    }
    ```

1. Create the module manifest by running the following command in your *Get-Hello* directory path.

    ```powershell
    New-ModuleManifest -Path .\Get-Hello.psd1
    ```

1. Open your *Get-Hello.psd1* file and find the `RootModule` variable. Replace the empty string with the path to your *Get-Hello.psm1* file as follows:

    ```powershell
    RootModule = 'Get-Hello.psm1'
    ```

1. The `FunctionsToExport` section is meant to define the list of functions that will be exported from this module. Add your *Get-Hello* function as follows:

    ```powershell
    FunctionsToExport = @('Get-Hello')
    ```

1. Find the `FileList` section, and add the following list of files that should be packaged with your module.

    ```powershell
    FileList = @('./Get-Hello.psm1')
    ```

## Pack and publish module

1. Create *nuspec* file for your module. This command will create a *Get-Hello.nuspec* file that contains metadata needed to pack the module.

    ```powershell
    nuget spec Get-Hello
    ```

1. Run the following command to pack your module.

    ```powershell
    nuget pack Get-Hello.nuspec
    ```

1. Run the following command to add your feed source URL. NuGet v3 is not supported, make sure you use v2 in your feed source URL.

    - Org-scoped feed:
    
        ```powershell
        nuget sources Add -Name "<FEED_NAME>" -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -username "<USER_NAME>" -password "<PERSONAL_ACCESS_TOKEN>"
        ```

    - Project-scoped feed:
    
        ```powershell
        nuget sources Add -Name "<FEED_NAME>" -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -username "<USER_NAME>" -password "<PERSONAL_ACCESS_TOKEN>"
        ```
    
1. Publish the package to your feed.

    ```powershell
    nuget push -Source "<FEED_NAME>" -ApiKey "<ANY_STRING>" "<PACKAGE_PATH>"
    ```

    :::image type="content" source="../../repos/git/media/artifact-package-powershell.png" alt-text="A screenshot showing the published package.":::

> [!IMPORTANT]
> The version number in your Module Manifest (.psd1) and the .nuspec file must match.

## Connect to feed as a PowerShell repository

1. Open an elevated PowerShell prompt window.

1. Set up your credentials to authenticate with Azure Artifacts. Replace the placeholders with the appropriate information.

    ```powershell
    $patToken = "<PERSONAL_ACCESS_TOKEN>" | ConvertTo-SecureString -AsPlainText -Force
    ```

    ```powershell
    $credsAzureDevopsServices = New-Object System.Management.Automation.PSCredential("<USER_NAME>", $patToken)
    ```

1. Register your PowerShell repository. The `SourceLocation` link can be found by navigating to **Artifacts** > **Connect to Feed** > **NuGet.exe** under **Project setup** source URL.

    - Project-scoped feed:

        ```powershell
        Register-PSRepository -Name "PowershellAzureDevopsServices" -SourceLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -PublishLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -InstallationPolicy Trusted -Credential $credsAzureDevopsServices
        ```

    - Org-scoped feed:

        ```powershell
        Register-PSRepository -Name "PowershellAzureDevopsServices" -SourceLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -PublishLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -InstallationPolicy Trusted -Credential $credsAzureDevopsServices
        ```

    If you're still using the older `visualstudio.com` URLs, use the following command instead:

    - Project-scoped feed:

        ```powershell
        Register-PSRepository -Name "PowershellAzureDevopsServices" -SourceLocation "https://<ORGANIZATION_NAME>.pkgs.visualstudio.com/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -PublishLocation "https://<ORGANIZATION_NAME>.pkgs.visualstudio.com/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -InstallationPolicy Trusted -Credential $credsAzureDevopsServices
        ```

    - Org-scoped feed:

        ```powershell
        Register-PSRepository -Name "PowershellAzureDevopsServices" -SourceLocation "https://<ORGANIZATION_NAME>.pkgs.visualstudio.com/_packaging/<FEED_NAME>/nuget/v2" -PublishLocation "https://<ORGANIZATION_NAME>.pkgs.visualstudio.com/_packaging/<FEED_NAME>/nuget/v2" -InstallationPolicy Trusted -Credential $credsAzureDevopsServices
        ```

    > [!TIP]
    > Certain versions of PowerShell require restarting a new session after executing the `Register-PSRepository` cmdlet to avoid the *Unable to resolve package source* warning.

1. Register your package source:

    - Project-scoped feed:

        ```powershell
        Register-PackageSource -Name "PowershellAzureDevopsServices" -Location "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -ProviderName NuGet -Trusted -SkipValidate -Credential $credsAzureDevopsServices
        ```

    - Org-scoped feed:

        ```powershell
        Register-PackageSource -Name "PowershellAzureDevopsServices" -Location "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -ProviderName NuGet -Trusted -SkipValidate -Credential $credsAzureDevopsServices 
        ```

1. Run the following command to confirm if the repository was registered successfully. This command gets all the registered repositories for the current user:

    ```powershell
    Get-PSRepository
    ```

1. Run the following command if you want to find all modules in the repository.

    ```powershell
    Find-Module -Repository PowershellAzureDevopsServices
    ```

1. Run the following command if you want to install the *Get-Hello* module.

    ```powershell
    Install-Module -Name Get-Hello -Repository PowershellAzureDevopsServices
    ```

If the *Install-Module* command is returning the following error: *Unable to resolve package source*, run the `Register-PackageSource` cmdlet again with the `Trusted` flag as follows:

```powershell
Register-PackageSource -Name "PowershellAzureDevopsServices" -Location "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -ProviderName NuGet -Trusted -Trusted -SkipValidate -Credential $credsAzureDevopsServices
```

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts).

## Register and install module using Azure Pipelines

This example illustrates the process of authenticating and installing a PowerShell Module using a YAML pipeline. To use your personal access token within the pipeline, you should include it as a pipeline variable, as follows:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline and then select **Edit** to edit your pipeline.

1. Select **Variables** at the top right corner, and then select the **+** sign to create a new variable.

1. Provide a **Name** for your variable, and then paste your personal access token in the **Value** textbox. 
 
1. Make sure you select the **Keep this value secret** checkbox. Select **Ok** when you're done. You are now ready to use your variable in your pipeline.

##### [Windows](#tab/windows/)

```yaml
trigger:
- main

pool:
  vmImage: 'Windows-latest'

variables:
  PackageFeedEndpoint: 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2'  ## For project scoped feeds use: 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2'
  PackageFeedEndpointCredential: '{"endpointCredentials": [{"endpoint":"$(PackageFeedEndpoint)", "username":"Admin", "password":"$(AZURE_DEVOPS_PAT)"}]}'

steps:
- powershell: |
    Register-PSRepository -Name "psRepoPipeline" -SourceLocation '$(PackageFeedEndpoint)' -InstallationPolicy Trusted
  displayName: 'Register Azure Artifacts Feed as PSRepository'
  env:
    VSS_NUGET_EXTERNAL_FEED_ENDPOINTS: $(PackageFeedEndpointCredential)

- powershell: |
     echo (Get-PSRepository)
  displayName: 'Get all module repositories'

- powershell: |
    Find-Module -Name "Get-Hello" | Install-Module -Confirm:$false -Force
  displayName: 'Install the Get-Hello PowerShell module'
  env:
    VSS_NUGET_EXTERNAL_FEED_ENDPOINTS: $(PackageFeedEndpointCredential)
```

---

## Related articles

- [Upstream sources](../how-to/set-up-upstream-sources.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
