---
title: Connect to Azure Artifacts feeds with NuGet CLI
description: How to connect to an Azure Artifacts feed with NuGet CLI
ms.assetid: 10665DBC-846E-4192-8CAB-D5A4C6E40C65
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 04/22/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Connect to Azure Artifacts feeds (NuGet.exe)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to publish and download NuGet packages from various sources, including feeds and public registries. You can use private Azure Artifacts feeds to share packages privately with your team or specific users. Additionally, you can create public feeds to make packages publicly accessible, allowing you to share them openly with anyone on the internet. This article will guide you through connecting to your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

- Install the [latest NuGet version](https://www.nuget.org/downloads).

- Install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

## Project setup

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **NuGet.exe** from the left panel.

1. If this is your first time using Azure Artifacts with NuGet.exe, make sure you've installed the prerequisites, otherwise select **Get the tools** in the top-right corner to install them.

1. Add a *nuget.config* file to your project, and place it in the same folder as your *.csproj* or *.sln* file. Paste the following snippet into it, and be sure to replace the placeholders with the appropriate values specific to your scenario:

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



> [!IMPORTANT]
> [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider) requires NuGet `4.8.0.5385` or later. Azure Artifacts recommends using NuGet version `5.5.x` or later as it includes crucial bug fixes related to cancellations and timeouts.

::: moniker range="azure-devops"

## Legacy project setup

If you're using an older version of NuGet, follow the instructions below to connect to your feed:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **NuGet.exe** from the left panel.

1. Copy your source URL, and then replace `/v3/index.json` with `/v2`. Your updated source URL should resemble the following:

    - **Project-scoped feed**:
    
        ```
        https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2
        ```
    
    - **Organization-scoped feed**:
    
        ```
        https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2
        ```

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat), and make sure you scope it to the right organization you want to access and select one of the following scopes: **Packaging (read)**, **Packaging (read and write)**, or **Packaging (read, write, and manage)**.

1. Run the following command in a command prompt window to add your feed source to your *nuget.config* file:

    ```Command
    nuget sources add -name <FEED_NAME> -source <SOURCE_URL> -username <ANY_STRING_BUT_NOT_NULL> -password <YOUR_PERSONAL_ACCESS_TOKEN>
    ```

1. If your organization is connected to Microsoft Entra ID, you must first authenticate with your AD credentials and then add your personal access token using the *setapikey* command:

    ```Command
    nuget sources add -name <FEED_NAME> -source <SOURCE_URL> -username <AZURE_ACTIVE_DIRECTORY_USERNAME> -password <AZURE_ACTIVE_DIRECTORY_PASSWORD>
    
    nuget setapikey <YOUR_PERSONAL_ACCESS_TOKEN> -source <SOURCE_URL> 
    ```

::: moniker-end



## Related articles

- [Publish NuGet packages (NuGet.exe)](./publish.md)
- [Publish NuGet packages (dotnet)](./dotnet-exe.md)
- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)
