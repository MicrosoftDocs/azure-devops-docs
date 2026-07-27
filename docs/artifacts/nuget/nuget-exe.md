---
title: Connect to Azure Artifacts feeds with NuGet.exe
description: Learn how to authenticate to Azure Artifacts feeds with NuGet.exe.
ms.service: azure-artifacts
ms.topic: how-to
ms.custom: pat-reduction
ms.date: 07/10/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Connect to Azure Artifacts feeds by using NuGet.exe

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts helps you store and manage your packages from a single feed. You can share packages within your team, across organizations, or publicly.
This article shows you how to set up your project and authenticate to your Azure Artifacts feed by using NuGet.exe.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-a-feed).<br> - Download and install [nuget.exe](https://www.nuget.org/downloads) version `4.8.0.5385` or later. We recommend NuGet *5.5.x* or later, which includes important bug fixes for cancellations and timeouts. |

## Set up the Azure Artifacts Credential Provider

The Azure Artifacts Credential Provider enables secure authentication to your Azure Artifacts feeds. To use it with nuget.exe, you must first add it to NuGet’s plugin search path. For details, see [Plugin Installation and discovery](https://github.com/NuGet/Home/wiki/NuGet-cross-plat-authentication-plugin#plugin-installation-and-discovery). Once the plugin is added, follow the installation steps for your operating system below:

#### [Windows](#tab/windows/)

Use one of the following methods to install the Azure Artifacts Credential Provider:

### Manual installation

1. Download the latest [Microsoft.NetFx48.NuGet.CredentialProvider.zip](https://github.com/Microsoft/artifacts-credprovider/releases) release.

1. Extract the zip file.

1. Copy the `netfx` folder from the extracted archive to `%UserProfile%/.nuget/plugins/`. The `netfx` folder is required for nuget.exe compatibility.

### Install using the helper script

Alternatively, you can use the helper script to automate the installation. Make sure you have [PowerShell 5.1 or later](/powershell/scripting/install/installing-powershell), and then run:

```powershell
iex "& { $(irm https://aka.ms/install-artifacts-credprovider.ps1) } -AddNetfx"
```

For more information, see the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider?tab=readme-ov-file#azure-artifacts-credential-provider) repository.

#### [Linux/Mac](#tab/linuxmac/)

Make sure you complete the [prerequisites for Linux self-contained installs](https://github.com/microsoft/artifacts-credprovider?tab=readme-ov-file#for-linux-self-contained-installs), and then use one of the following methods to install the Azure Artifacts Credential Provider:

### Manual installation

1. Download the latest [Microsoft.NetFx48.NuGet.CredentialProvider.tar.gz](https://github.com/Microsoft/artifacts-credprovider/releases) release.

1. Extract the tar file.

1. Copy the `netfx` folder from the extracted archive to `$HOME/.nuget/plugins`. The `netfx` folder supports MSBuild scenarios.

### Install using the helper script

The helper script automatically installs the `netcore` version. If you need both `netcore` and `netfx` binaries for scenarios such as mono MSBuild, use the manual installation method instead.

1. Run one of the following commands:
    - Using wget:
    
        ```bash
        wget -qO- https://aka.ms/install-artifacts-credprovider.sh | bash
        ```
    
    - Using curl:
    
        ```bash
        sh -c "$(curl -fsSL https://aka.ms/install-artifacts-credprovider.sh)"
        ```

For more information, see the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider?tab=readme-ov-file#azure-artifacts-credential-provider) repository.

***

## Project setup

Follow these steps to set up your project and add your feed to your `nuget.config` file so NuGet knows where to restore and publish packages. The feed URL you use depends on whether your feed is scoped to a project or to the organization.

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **NuGet.exe** from the left navigation pane.

1. Add a `nuget.config` file to your project in the same folder as your `.csproj` or `.sln` file, and then paste the provided snippet into it. Your `nuget.config` file should resemble one of the following examples:

    - **Project-scoped feed**:
    
        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<SOURCE_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```
    
    - **Organization-scoped feed**:
    
        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<SOURCE_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```

::: moniker-end

::: moniker range="=azure-devops-2022"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **NuGet.exe** from the left navigation pane.

1. Add a `nuget.config` file to your project in the same folder as your `.csproj` or `.sln` file, and then paste the snippet provided in the **Project setup** section into your file.

::: moniker-end

> [!NOTE]
> The [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider) requires NuGet version `4.8.0.5385` or later. Azure Artifacts recommends NuGet `5.5.x` or later for the best compatibility and reliability.

::: moniker range="azure-devops"

## Legacy project setup

If you're using an older version of NuGet that doesn't support the recommended v3 flow, you can still connect to your feed by using the older v2 endpoint and a Personal Access Token (PAT). Use this approach only when you can't move to a newer client.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **NuGet.exe** from the left.

1. Copy your source URL from the **Project setup** section, and then replace `/v3/index.json` with `/v2`. Your updated source URL should look like one of the following:

    - **Project-scoped feed**:
    
        ```
        https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2
        ```
    
    - **Organization-scoped feed**:
    
        ```
        https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2
        ```

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat). Scope the token to the organization you want to access, and then select one of the following scopes based on your needs: **Packaging (read)**, **Packaging (read and write)**, or **Packaging (read, write, and manage)**.

1. Run the following command in a command prompt window to add your feed source to your *nuget.config* file:

    ```CLI
    nuget sources add -name <FEED_NAME> -source <SOURCE_URL> -username <ANY_STRING_BUT_NOT_NULL> -password <YOUR_PERSONAL_ACCESS_TOKEN>
    ```

1. If your organization is connected to Microsoft Entra ID, first authenticate with your Microsoft Entra credentials, and then add your personal access token by using the `setapikey` command:

    ```CLI
    nuget sources add -name <FEED_NAME> -source <SOURCE_URL> -username <AZURE_ACTIVE_DIRECTORY_USERNAME> -password <AZURE_ACTIVE_DIRECTORY_PASSWORD>
    
    nuget setapikey <YOUR_PERSONAL_ACCESS_TOKEN> -source <SOURCE_URL> 
    ```

::: moniker-end

## Authenticate by using service principals

Use service principal authentication for automation scenarios where interactive sign-in isn't appropriate. To authenticate with an Azure Artifacts feed by using a service principal, set the [ARTIFACTS_CREDENTIALPROVIDER_FEED_ENDPOINTS](https://github.com/microsoft/artifacts-credprovider/blob/master/README.md#environment-variables) environment variable as shown in the following examples.

The variable specifies your feed URL, the service principal application (client) ID, and either the certificate subject name or the certificate file path. You only need one of the certificate values.

#### [Windows](#tab/windows/)

```powershell
$env:ARTIFACTS_CREDENTIALPROVIDER_FEED_ENDPOINTS = @'{
    "endpointCredentials": [
        {
            "endpoint": "<FEED_URL>",
            "clientId": "<SERVICE_PRINCIPAL_APPLICATION_(CLIENT)_ID>",
            "clientCertificateSubjectName": "<SERVICE_PRINCIPAL_CERTIFICATE_NAME>",
            "clientCertificateFilePath": "<SERVICE_PRINCIPAL_CERTIFICATE_PATH>"
        }
    ]
}
'@
```

#### [Linux/macOS](#tab/linuxmac/)

```bash
export ARTIFACTS_CREDENTIALPROVIDER_FEED_ENDPOINTS='{
    "endpointCredentials": [
        {
            "endpoint": "<FEED_URL>",
            "clientId": "<SERVICE_PRINCIPAL_APPLICATION_(CLIENT)_ID>",
            "clientCertificateSubjectName": "<SERVICE_PRINCIPAL_CERTIFICATE_NAME>",
            "clientCertificateFilePath": "<SERVICE_PRINCIPAL_CERTIFICATE_PATH>"
        }
    ]
}'
```

***

## Related content

- [Publish NuGet packages (NuGet.exe)](publish.md)

- [Publish NuGet packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)

- [Restore NuGet packages (NuGet.exe)](restore-nuget-packages-nuget-exe.md)

