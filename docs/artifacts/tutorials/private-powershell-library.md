---
title: Use an Azure Artifacts feed as a private PowerShell repository
description: Learn how to use an Azure Artifacts feed as a private PowerShell repository
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 07/03/2024
monikerRange: 'azure-devops'
"recommendations": "true"
zone_pivot_groups: powershell-versions
---

# Use an Azure Artifacts feed as a private PowerShell repository

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure Artifacts provides a convenient solution for sharing PowerShell scripts. By using Azure Artifacts feeds, you can seamlessly publish your PowerShell modules from the command line and control access to them through your feed settings. 
This article guides you through setting up your Azure Artifacts feed as a private PowerShell repository to store and share your PowerShell modules.

::: zone pivot="psresourceget"  

In this article, you'll learn how to:

>[!div class="checklist"]
> * Create a Personal Access Token
> * Create a PowerShell module
> * Create a SecretStore vault and register a repository
> * Publish and consume packages from a feed

## Prerequisites

- Create an Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Create a [new feed](../get-started-nuget.md#create-feed) if you don't have one already.

- Install [PSResourceGet](/powershell/gallery/powershellget/install-powershellget).

- Install the [SecretManagement and SecretStore](/powershell/utility-modules/secretmanagement/get-started/using-secretstore) modules.

> [!NOTE]
> Azure Artifacts Credential Provider is not supported with PSResourceGet.

## Create a personal access token

A personal access token acts as your digital identity and serves as an alternative password to authenticate you with Azure DevOps.

1. Navigate to your Azure DevOps organization `https://dev.azure.com/<ORGANIZATION_NAME>/`

1. Select the user settings icon, select **Personal access tokens**, and then select **New Token**.

1. Enter a name for your PAT, set an **Expiration** date, select **Custom defined**, and then select **Packaging** > **Read, write & manage**.

1. Select **Create** when you're done, and make sure you copy and store your PAT in a safe location.

    :::image type="content" source="../media/config-new-pat.png" alt-text="A screenshot that shows how to set up a new personal access token.":::

## Create a PowerShell module

If you don't have your own module, follow the instructions in this section to create a sample PowerShell module. Otherwise, skip to the next step:

1. Create a new folder *PowerShell-Demo*. Navigate into your folder and create a new file *PowerShell-Demo.psm1*.

1. Paste the following script into your *PowerShell-Demo.psm1* file:

    ```powershell
    Function PowerShell-Demo{
        Write-Host "Hello World!"
    }
    ```

1. Generate the module manifest by running the following command in your *PowerShell-Demo* directory:

    ```powershell
    New-ModuleManifest -Path .\PowerShell-Demo.psd1
    ```

1. Open your *PowerShell-Demo.psd1* file and locate the `RootModule` variable. This setting specifies the main script file that PowerShell loads when the module is imported. Replace the empty string with the path to your *PowerShell-Demo.psm1* file:

    ```powershell
    RootModule = 'PowerShell-Demo.psm1'
    ```

1. The `FunctionsToExport` section specifies which functions are accessible to users when they import your module. Include your *PowerShell-Demo* function:

    ```powershell
    FunctionsToExport = @('PowerShell-Demo')
    ```

1. Locate the `FileList` section, which lists the files included when packaging the module. Add the file you wish to package with your module:

    ```powershell
    FileList = @('./PowerShell-Demo.psm1')
    ```

## Register a repository

1. Run the following command to create a credential object. Replace the placeholders with the correct information.

    ```powershell
    $username = "<USER_NAME>"
    $patToken = "<PERSONAL_ACCESS_TOKEN>" | ConvertTo-SecureString -AsPlainText -Force

    $credentials = New-Object System.Management.Automation.PSCredential($username, $patToken)
    ```

1. Ensure that *SecretManagement* and *SecretStore* are installed, then run the following command to create a vault and add a secret:

    ```powershell
    Register-SecretVault -Name "MySecretVault" -ModuleName Microsoft.PowerShell.SecretStore -DefaultVault

    Set-Secret -Name "MyCredential" -Secret $credentials -Vault "MySecretVault"

    $CredentialInfo = [Microsoft.PowerShell.PSResourceGet.UtilClasses.PSCredentialInfo]::new('MySecretVault', 'MyCredential')
    ```

1. To verify if the vault and secret were successfully created, run the following command to list all your secrets:

    ```powershell
    PS > Get-SecretInfo
    
    Name            Type         VaultName
    ----            ----         ---------
    MyCredential    PSCredential MySecretVault

    ```

1. Run the following command to register your PowerShell repository. You can find the `SourceLocation` link by navigating to **Artifacts** > **Connect to Feed** > **NuGet.exe**, under the **Project setup** section > source URL.

    - Project-scoped feed:

        ```powershell
        Register-PSResourceRepository -Name "PowershellPSResourceRepository" `
            -Uri "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" `
            -Trusted `
            -CredentialInfo $CredentialInfo
        ```

    - Organization-scoped feed:

        ```powershell
        Register-PSResourceRepository -Name "PowershellPSResourceRepository" `
            -Uri "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" `
            -Trusted `
            -CredentialInfo $CredentialInfo
        ```

    > [!TIP]
    > Some versions of PowerShell may require starting a new session after running the `Register-PSResourceRepository` cmdlet to prevent encountering the *Unable to resolve package source* warning.

1. To verify if the repository was successfully registered, run the following command to retrieve all registered repositories for the current user:

    ```powershell
    Get-PSResourceRepository
    ```

> [!NOTE]
> If you encounter the error: *Response status code does not indicate success: 404 (Not Found).*, make sure that your source URL points to `nuget/v3/index.json` instead of `nuget/v2`.

## Publish a package

Run the following command to publish the package to your feed:

```powershell
Publish-PSResource -Path <PACKAGE_PATH> -Repository <REPOSITORY_NAME> -ApiKey (Get-Secret <SECRET_NAME>) 
```

**Example**:

```powershell
PS C:\AzureDevOps\Demos\PowerShellDemo> Publish-PSResource -Path .\scripts\ -Repository FabrikamFiberFeed -ApiKey (Get-Secret MyNewCredential) -verbose
VERBOSE: Performing the operation "Publish-PSResource" on target "Publish resource
'C:\AzureDevOps\Demos\PowerShellDemo\scripts\' from the machine".
VERBOSE: The newly created nuspec is:
C:\Users\xxxx\AppData\Local\Temp\xxxxxxxxx\PowerShell-Demo.nuspec
VERBOSE: credential successfully read from vault and set for repository: FabrikamFiberFeed
VERBOSE: Successfully packed the resource into a .nupkg
VERBOSE: Successfully published the resource to
'https://pkgs.dev.azure.com/ramiMSFTDevOps/DemoProject/_packaging/FabrikamFiberFeed/nuget/v3/index.json'
VERBOSE: Deleting temporary directory 'C:\Users\xxxx\AppData\Local\Temp\xxxxxxx'
```

:::image type="content" source="media/publish-psresource-example-package.png" alt-text="A screenshot displaying the PowerShell demo package published to the feed.":::

## Install a package

1. To confirm if the module is available in your repository, use the following command to search for it:

    ```powershell
    Find-PSResource -Name <RESOURCE_NAME> -Repository <REPOSITORY_NAME> -verbose
    ```

1. Run the following command to install the latest stable version of your module:

    ```powershell
    Install-PSResource <MODULE_NAME>
    ```

> [!TIP]
> If you encounter the error: *Exception calling "WriteObject".*, start a new PowerShell window and run `Get-SecretInfo`. Enter your vault password before running *Find-PSResource* and *Install-PSResource*, as the SecretStore timeout period can expire. The default *PasswordTimeout* is 900 seconds, but you can modify this value as needed. See [Use the SecretStore in automation](/powershell/utility-modules/secretmanagement/how-to/using-secrets-in-automation) for more details.

:::zone-end



::: zone pivot="powershelget"

In this article, you'll learn how to:

>[!div class="checklist"]
> * Create a Personal Access Token
> * Create, package, and publish a PowerShell module
> * Connect to a feed as a PowerShell repository
> * Register and install a PowerShell module using Azure Pipelines

## Prerequisites

- Create an Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Create a [new feed](../get-started-nuget.md#create-feed) if you don't have one already.

- Install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).

- Install [NuGet](https://www.nuget.org/downloads).

## Create a personal access token

A personal access token acts as your digital identity and serves as an alternative password to authenticate you with Azure DevOps.

1. Navigate to your Azure DevOps organization `https://dev.azure.com/<ORGANIZATION_NAME>/`

1. Select the user settings icon, select **Personal access tokens**, and then select **New Token**.

1. Enter a name for your PAT, set an **Expiration** date, select **Custom defined**, and then select **Packaging** > **Read, write & manage**.

1. Select **Create** when you're done, and make sure you copy and store your PAT in a safe location.

    :::image type="content" source="../media/config-new-pat.png" alt-text="A screenshot that shows how to set up a new personal access token.":::

## Create a PowerShell module

If you don't have your own module, follow the instructions in this section to create a sample PowerShell module. Otherwise, skip to the next step:

1. Create a new folder *Get-Hello*. Navigate into your folder and create a new file *Get-Hello.psm1*.

1. Paste the following script into your *Get-Hello.psm1* file:

    ```powershell
    Function Get-Hello{
        Write-Host "Hello Azure DevOps!"
    }
    ```

1. Generate the module manifest by running the following command in your *Get-Hello* directory:

    ```powershell
    New-ModuleManifest -Path .\Get-Hello.psd1
    ```

1. Open your *Get-Hello.psd1* file and locate the `RootModule` variable. This setting specifies the main script file that PowerShell loads when the module is imported. Replace the empty string with the path to your *Get-Hello.psm1* file:

    ```powershell
    RootModule = 'Get-Hello.psm1'
    ```

1. The `FunctionsToExport` section specifies which functions are accessible to users when they import your module. Include your *Get-Hello* function:

    ```powershell
    FunctionsToExport = @('Get-Hello')
    ```

1. Find the `FileList` section, which specifies the files included when packaging the module. Add the file you wish to package with your module:

    ```powershell
    FileList = @('./Get-Hello.psm1')
    ```

## Package and publish a module

1. Generate a *nuspec* file for your module. This command creates a *Get-Hello.nuspec* file containing the necessary metadata for packing the module:

    ```powershell
    nuget spec Get-Hello
    ```

1. Run the following command to package your module:

    ```powershell
    nuget pack Get-Hello.nuspec
    ```

1. Run the following command to add your feed source URL. Make sure that you use V2 in your feed source URL, as NuGet V3 is not supported.

    - Organization-scoped feed:
    
        ```powershell
        nuget sources Add -Name "<FEED_NAME>" -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -username "<USER_NAME>" -password "<PERSONAL_ACCESS_TOKEN>"
        ```

    - Project-scoped feed:
    
        ```powershell
        nuget sources Add -Name "<FEED_NAME>" -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -username "<USER_NAME>" -password "<PERSONAL_ACCESS_TOKEN>"
        ```
    
1. Publish the package to your feed:

    ```powershell
    nuget push -Source "<FEED_NAME>" -ApiKey "<ANY_STRING>" "<PACKAGE_PATH>"
    ```

> [!IMPORTANT]
> The version number in your *Module Manifest (.psd1)* must be identical to the version number in your *.nuspec* file.

## Connect to a feed as a PowerShell repository

This section guides you through authenticating with a feed as a PowerShell repository and consuming a module hosted in your feed:

1. In a PowerShell prompt window, run the following command to set up your credentials. Replace the placeholders with the appropriate information.

    ```powershell
    $patToken = "<PERSONAL_ACCESS_TOKEN>" | ConvertTo-SecureString -AsPlainText -Force

    $credsAzureDevopsServices = New-Object System.Management.Automation.PSCredential("<USER_NAME>", $patToken)
    ```

1. Register your PowerShell repository. You can find the `SourceLocation` link by navigating to **Artifacts** > **Connect to Feed** > **NuGet.exe**, under the **Project setup** section > source URL.

    - Project-scoped feed:

        ```powershell
        Register-PSRepository -Name <REPOSITORY_NAME> -SourceLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -PublishLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -InstallationPolicy Trusted -Credential $credsAzureDevopsServices
        ```

    - Organization-scoped feed:

        ```powershell
        Register-PSRepository -Name <REPOSITORY_NAME> -SourceLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -PublishLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -InstallationPolicy Trusted -Credential $credsAzureDevopsServices
        ```

    > [!TIP]
    > Some versions of PowerShell may require starting a new session after running the `Register-PSRepository` cmdlet to prevent encountering the *Unable to resolve package source* warning.

1. Register your package source:

    - Project-scoped feed:

        ```powershell
        Register-PackageSource -Name <REPOSITORY_NAME> -Location "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -ProviderName NuGet -Trusted -SkipValidate -Credential $credsAzureDevopsServices
        ```

    - Organization-scoped feed:

        ```powershell
        Register-PackageSource -Name <REPOSITORY_NAME> -Location "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -ProviderName NuGet -Trusted -SkipValidate -Credential $credsAzureDevopsServices 
        ```

    > [!NOTE]
    > Register-PSRepository: Used for registering a PowerShell repository to find and install modules.
    > Register-PackageSource: Used to register a package source for finding and publishing packages.

1. To verify if the repository was successfully registered, run the following command to retrieve all registered repositories for the current user:

    ```powershell
    Get-PSRepository
    ```

1. Run the following command to install the *Get-Hello* module.

    ```powershell
    Install-Module -Name <PACKAGE_NAME> -Repository <REPOSITORY_NAME>
    ```

> [!NOTE]
> If your organization uses a firewall or a proxy server, make sure that you allow access to [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts).

## Install a package from your pipeline

This example walks you through authenticating with an Azure Artifacts feed and installing a PowerShell module from your pipeline. To use your personal access token, add it as a pipeline variable, as shown below:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit** to modify your pipeline.

1. Select **Variables** at the top right corner, and then select **New variable**.

1. Enter a **Name** for your variable, and then paste your personal access token into the **Value** textbox. 
 
1. Make sure that you select the **Keep this value secret** checkbox. Select **Ok** when you're done.

1. Add a second variable for your *userName*. Enter a **Name** for your variable, then input your userName in the **Value** textbox.

1. Select **Save** when you're done.

```yaml
trigger:
- main

pool:
  vmImage: 'Windows-latest'

variables:
  PackageFeedEndpoint: 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2' ## For organization scoped feeds use'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2'

steps:
- powershell: |
    $pat = ConvertTo-SecureString ${env:pat_token} -AsPlainText -Force
    $credential = New-Object System.Management.Automation.PSCredential("${env:userName}", $pat)
    Register-PSRepository -Name <REPOSITORY_NAME> -SourceLocation "$(PackageFeedEndpoint)" -InstallationPolicy Trusted -Credential $credential
  displayName: 'Register PSRepository'
  env:
    pat_token: $patToken
    userName: $userName

- powershell: |
    nuget install <PACKAGE_NAME> -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json"
  displayName: 'Install module'
```
:::zone-end




## Related articles

- [Upstream sources](../how-to/set-up-upstream-sources.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
