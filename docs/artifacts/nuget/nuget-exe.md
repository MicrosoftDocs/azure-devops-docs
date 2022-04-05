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

[!INCLUDE [nuget-recommended-version](../includes/nuget/nuget-recommended-version.md)]

## Project setup (NuGet 4.8.2 or later)

1. Select **Artifacts** and then select your feed.

::: moniker range=">= azure-devops-2019"

2. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing the connect to feed button":::

3. Select **NuGet.exe** from the left panel.

4. If this is your first time using Azure Artifacts with NuGet.exe, select **Get the tools** in the top-right corner and follow the instructions to set up the credential provider and NuGet. 

5. Follow the instructions in the **Project setup** to set up your config file.

   :::image type="content" source="../media/nuget-azure-devops-newnav.png" alt-text="Screenshot showing how to set up your project's config file":::

::: moniker-end

::: moniker range="tfs-2018"

2. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed.png" alt-text="Screenshot showing the connect to feed button in TFS":::

3. Follow the highlighted steps to get the tools, add the feed to your local NuGet configuration, and push your package.

    :::image type="content" source="../media/nugeturl.png" alt-text="Screenshot showing how to push your package using NuGet.exe in TFS":::
   
::: moniker-end

> [!NOTE]
> Azure Artifacts Credential Provider is supported in NuGet version 4.8.2 or later. See [Creating a NuGet credential provider](/nuget/reference/extensibility/nuget-exe-credential-providers#creating-a-nugetexe-credential-provider) for more information.


::: moniker range="azure-devops"

## Project setup (NuGet 2)

With NuGet version 2, you must use a Personal Access Tokens to authenticate to your feed. To do so, we must first get the package source URL:

1. Select **Artifacts** and then select your feed. 

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing the connect to feed button":::

1. Select **NuGet.exe** from the left panel.
   
1. Copy your package source URL, and then replace `/v3/index.json` with `/v2`.

    :::image type="content" source="../media/nuget-consume-url-azure-devops-newnav.png" alt-text="Screenshot showing the source URL":::

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