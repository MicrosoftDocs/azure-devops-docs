---
title: Connect to a feed - NuGet.exe
description: How to connect to an Azure Artifacts feed
ms.assetid: 10665DBC-846E-4192-8CAB-D5A4C6E40C65
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 10/18/2021
monikerRange: '<= azure-devops'
---

# Connect to Azure Artifacts feeds

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

## Project setup

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts** and then select your feed.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing the connect to feed button":::

1. Select **NuGet.exe** from the left panel.

1. If this is your first time using Azure Artifacts with NuGet.exe, select **Get the tools** in the top-right corner and follow the instructions to download and install NuGet and Azure Artifacts Credential Provider.

1. Follow the instructions in the **Project setup** to set up your nuget.config file.

   :::image type="content" source="../media/nuget-azure-devops-newnav.png" alt-text="Screenshot showing how to set up your project's config file":::

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Build and Release** > **Packages**.

1. Select your feed from the dropdown menu.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed.png" alt-text="Screenshot showing the connect to feed button in TFS":::

1. Select **NuGet** from the left panel.

1. If this is your first time using Azure Artifacts with NuGet, select the link under **Get the tools** to download and install NuGet and the Credential Provider.

1. Run the command highlighted in step number two to add your feed URL to your nuget.config file.

    :::image type="content" source="../media/nugeturl.png" alt-text="Screenshot showing how to push your package using NuGet.exe in TFS":::

1. Run the command highlighted in step number three if you want to publish your NuGet package.

::: moniker-end

> [!NOTE]
> Azure Artifacts Credential Provider is supported with NuGet 4.8.2 or later. See [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider) for more information.

::: moniker range="azure-devops"

## Legacy project setup (NuGet v2)

1. Select **Artifacts** and then select your feed.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing the connect to feed button":::

1. Select **NuGet.exe** from the left panel.

1. Copy your package source URL, and then replace `/v3/index.json` with `/v2`.

    :::image type="content" source="../media/nuget-consume-url-azure-devops-newnav.png" alt-text="Screenshot showing the source URL":::

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat). Scope your PAT to the organization(s) you want to access and to one of the following scopes: Packaging (read), Packaging (read and write), or Packaging (read, write, and manage).

1. Run the following command in an elevated command prompt window to add your package source:

    ```Command
    nuget sources add -name <Feed_Name> -source <Feed_URL> -username <Any_String_But_Not_Null> -password <Personal_Access_Token>
    ```

1. If your organization is connected to Azure Active Directory, you must first authenticate with your AD credentials, and then add your personal access token using the *setapikey* command:

    ```Command
    nuget sources add -name <Feed_Name> -source <Feed_URL> -username <Azure_Active_Directory_UserName> -password <Azure_Active_Directory_Password>
    
    nuget setapikey <Personal_Access_Token> -source <Feed_URL> 
    ```

::: moniker-end

::: moniker range="tfs-2018"

## Project setup (NuGet 2)

With NuGet version 2, you must use a Personal Access Tokens to authenticate to your feed. To do so, we must first get the feed URL:

1. Navigate to your feed, and then select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed.png" alt-text="Screenshot of the connect to feed button in TFS":::

1. Select **NuGet** and then copy your NuGet package source URL. Replace `/v3/index.json` with `/v2`. 

    :::image type="content" source="../media/nuget-consume-url.png" alt-text="Screenshot showing how to get the package source URL":::

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat). Scope your PAT to the organization(s) you want to access and to one of the following scopes: Packaging (read), Packaging (read and write), or Packaging (read, write, and manage).

Run the following command in an elevated command prompt window to add your package source:

```Command
nuget sources add -name <Feed_Name> -source <Feed_URL> -username <Any_String_But_Not_Null> -password <Personal_Access_Token>
```

If your organization is connected to Azure Active Directory, you must first authenticate with your AD credentials, and then add your personal access token using the *setapikey* command:

```Command
nuget sources add -name <Feed_Name> -source <Feed_URL> -username <Azure_Active_Directory_UserName> -password <Azure_Active_Directory_Password>

nuget setapikey <Personal_Access_Token> -source <Feed_URL> 
```

::: moniker-end

## Related articles

- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)
- [Publish a NuGet package using the command line](./publish.md)
- [NuGet.org upstream source](./upstream-sources.md)