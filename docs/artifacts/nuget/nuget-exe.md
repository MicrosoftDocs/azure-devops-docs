---
title: Connect to a feed - NuGet.exe
description: How to connect to an Azure Artifacts feed
ms.assetid: 10665DBC-846E-4192-8CAB-D5A4C6E40C65
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 07/11/2022
monikerRange: '<= azure-devops'
---

# Connect to Azure Artifacts feeds (NuGet.exe)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts allows developers to both publish and download NuGet packages from various sources, including feeds and public registries. You can use it to privately share packages with your team or specific users and also make them publicly accessible, allowing you to share them openly with anyone on the internet. This article will guide you through the process of connecting to your feed.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Install the [latest NuGet version](https://www.nuget.org/downloads).

- Install [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

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

::: moniker range="tfs-2018"

1. Navigate to your project `http://ServerName:8080/tfs/DefaultCollection/<ProjectName>`.

1. Select **Build and Release**, and then select **Packages**.

1. Select your feed from the dropdown menu, and then select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed.png" alt-text="Screenshot showing the connect to feed button in TFS":::

1. Select **NuGet** from the left panel. Make sure you've installed the prerequisites if this is your first time using Azure Artifacts with NuGet.exe, otherwise select **Get the tools** to download and install them.

1. Run the command highlighted in step number two (2) to add your feed source URL to your *nuget.config* file.

    :::image type="content" source="../media/nugeturl.png" alt-text="A screenshot showing how to connect to your feed with NuGet in TFS.":::

::: moniker-end

> [!IMPORTANT]
> [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider) requires NuGet `4.8.0.5385` or later. Azure Artifacts recommends using NuGet version `5.5.x` or later as it includes crucial bug fixes related to cancellations and timeouts.

::: moniker range="azure-devops"

## Legacy project setup (NuGet v2)

1. Select **Artifacts** and then select your feed.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing the connect to feed button":::

1. Select **NuGet.exe** from the left panel.

1. Copy your source URL, and then replace `/v3/index.json` with `/v2`.

    :::image type="content" source="../media/nuget-consume-url-azure-devops-newnav.png" alt-text="Screenshot showing the source URL":::

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat). Scope your PAT to the organization(s) you want to access and to one of the following scopes: Packaging (read), Packaging (read and write), or Packaging (read, write, and manage).

1. Run the following command in an elevated command prompt window to add your package source:

    ```Command
    nuget sources add -name <Feed_Name> -source <Feed_URL> -username <Any_String_But_Not_Null> -password <Personal_Access_Token>
    ```

1. If your organization is connected to Microsoft Entra ID, you must first authenticate with your AD credentials and then add your personal access token using the *setapikey* command:

    ```Command
    nuget sources add -name <Feed_Name> -source <Feed_URL> -username <Azure_Active_Directory_UserName> -password <Azure_Active_Directory_Password>
    
    nuget setapikey <Personal_Access_Token> -source <Feed_URL> 
    ```

::: moniker-end

::: moniker range="tfs-2018"

## Legacy project setup (NuGet v2)

1. Select **Build and Release** > **Packages**.

1. Select your feed from the dropdown menu.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed.png" alt-text="Screenshot of the connect to feed button in TFS":::

1. Select **NuGet** and then copy your source URL. Replace `/v3/index.json` with `/v2`.

    :::image type="content" source="../media/nuget-consume-url.png" alt-text="Screenshot showing how to get the source URL":::

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat). Scope your PAT to the organization(s) you want to access and to one of the following scopes: Packaging (read), Packaging (read and write), or Packaging (read, write, and manage).

1. Run the following command in an elevated command prompt window to add your package source:

    ```Command
    nuget sources add -name <Feed_Name> -source <Feed_URL> -username <Any_String_But_Not_Null> -password <Personal_Access_Token>
    ```

1. If your organization is connected to Microsoft Entra ID, you must first authenticate with your AD credentials and then add your personal access token using the *setapikey* command:

    ```Command
    nuget sources add -name <Feed_Name> -source <Feed_URL> -username <Azure_Active_Directory_UserName> -password <Azure_Active_Directory_Password>
    
    nuget setapikey <Personal_Access_Token> -source <Feed_URL> 
    ```

::: moniker-end

## Related articles

- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)
- [Publish NuGet packages from the command line (NuGet.exe)](./publish.md)
- [Publish NuGet packages from the command line (dotnet)](./dotnet-exe.md)
- [NuGet.org upstream source](./upstream-sources.md)
