---
title: Connect to Azure Artifacts feeds - dotnet
description: Learn how to connect to Azure Artifacts feeds - dotnet
ms.service: azure-devops-artifacts
ms.custom: devx-track-dotnet
ms.topic: how-to
ms.date: 04/09/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Connect to an Azure Artifacts feed (dotnet)

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Artifacts enables developers to seamlessly publish packages to feeds and share them privately or publicly, depending on the feed’s visibility settings. This guide walks you through setting up your project and authenticating with your Azure Artifacts feed.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-feed).<br> - Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).<br> - Download and install the [.NET Core SDK](https://dotnet.microsoft.com/en-us/download). |

## Connect to a feed

::: moniker range="azure-devops"

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **dotnet** from the **NuGet** section.

1. Add a *nuget.config* file to your project. Place it in the same folder as your *.csproj* or *.sln* file, and paste the snippet provided in the **Project setup** section into it. Your *nuget.config* file should look similar to the following:

    - **Project-scoped feed**:

        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```

    - **Organization-scoped feed**:

        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```

::: moniker-end

::: moniker range="azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **dotnet** from the left.

1. Add a *nuget.config* file to your project. Place it in the same folder as your *.csproj* or *.sln* file, and paste the snippet provided in the **Project setup** section into it.

    :::image type="content" source="../media/connect-to-feed-dotnet-server-2020-and-2022.png" alt-text="A screenshot displaying how to connect to a feed in Azure DevOps Server 2020 and 2022.":::

::: moniker-end

## Authenticate using Service Principals

You can use a service principal to authenticate with your Azure Artifacts feed. To do this, set the [ARTIFACTS_CREDENTIALPROVIDER_FEED_ENDPOINTS](https://github.com/microsoft/artifacts-credprovider/blob/master/README.md#environment-variables) environment variable as shown below. 

This variable should define the feed URL, the service principal’s application (client) ID, and either the certificate subject name or the path to the certificate file (only one of these two is required).

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

* * *

## Related content

- [Publish NuGet packages (dotnet)](dotnet-exe.md)

- [Restore NuGet packages (dotnet)](restore-nuget-packages-dotnet.md)

- [Publish NuGet packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)


