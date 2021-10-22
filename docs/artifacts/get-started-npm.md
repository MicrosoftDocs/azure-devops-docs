---
title: publish and download npm packages
description: How to set up your .npmrc config file to publish and download npm packages from your feed.
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: 5BFBA0C3-85ED-40C9-AC5F-F686923160D6
ms.custom: contperf-fy20q4, conterperfq3, contperf-fy21q3
ms.date: 10/22/2021
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Get started with npm packages in Azure Artifacts

With Azure Artifacts, you can publish and download npm packages from feeds and public registries such as npmjs.com. This quickstart will guide you through creating your own feed, setting up your project, and publishing and downloading npm packages to and from your Azure Artifacts feed.

::: moniker range=">=tfs-2017 <= tfs-2018"

## License the Azure Artifacts extension

To use Azure Artifacts in TFS, you must upgrade to Visual Studio Team Foundation Server 2017. If the Azure Artifacts extension has been removed, you can install it from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed).

### Assign licenses in Team Foundation Server

Each organization gets five free licenses. If you need more than five licenses, go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed), and select **Get it free**.

If you aren't sure, you can select **Start 30-day free trial**. Every user in your organization is then granted access to Azure Artifacts for 30 days. After the 30-day trial period, your organization reverts back to five entitled users, and you must assign licenses to individual users. If you need additional licenses at this point, you can purchase them from Visual Studio Marketplace. If you have a license for Visual Studio Enterprise, you already have access to Azure Artifacts and don't need to be assigned a license. Just ensure that you've been assigned the "Visual Studio Enterprise" access level.

> [!NOTE]
> If you selected **Start 30 day free trial** and are still in the trial period, every user is granted access. Licenses don't need to be assigned until the trial period ends. 

1. From any collection in Team Foundation Server, hover over the settings menu and select **Users**. Then select **Package Management**.

    :::image type="content" source="media/users-hub-tfs.png" alt-text="Screenshot showing the user page in TFS":::

1. Select **Assign**, enter the users you want to assign licenses, and then select **OK**.

   * Users with Visual Studio Enterprise subscriptions get Azure Artifacts for free. Make sure that your Visual Studio Enterprise subscribers have the appropriate access level. For more information, see [Change access levels](../organizations/security/change-access-levels.md).

   * Users who are using an instance of Team Foundation Server that's disconnected from the internet (and thus can't purchase licenses from Visual Studio Marketplace) can still assign licenses purchased through an enterprise agreement.

::: moniker-end

## Create a feed

A feed is an organizational construct that allows users to store their packages and control who can access them. Azure Artifacts support storing several package types in a single feed such as NuGet, npm, Maven, Python, and Universal packages.

[!INCLUDE [](includes/create-feed.md)]

You can change these settings later by editing your feed's settings.

[!INCLUDE [edit-feed](includes/edit-feed.md)]

::: moniker range=">= azure-devops-2019"

## Set up your .npmrc files

> [!NOTE]
> `vsts-npm-auth` is not supported in TFS and Azure DevOps Server.

We recommend having two .npmrc files. The first one should be placed in the same directory as your package.json file. The second one should be placed in the **$home** directory (Linux/MacOS) or **$env.HOME** (Windows) to store your credentials. The npm client then will be able to look up this file and fetch your credentials for authentication. This enables you to share your config file while keeping your credentials secure.

1. Select **Artifacts**, and then select **Connect to feed**.

    :::image type="content" source="media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to a feed":::

1. Select **npm**. If this is your first time using Azure Artifacts, select **Get the tools** and then follow the steps to download Node.js and setup the credential provider. 

1. Follow the instructions in the **Project setup** to set up your project.

    :::image type="content" source="media/npm-azure-devops-newnav.png" alt-text="Screenshot showing how to set up your project":::
        
### Set up authentication on your development machine

At this point, you should have a project-specific .npmrc file. This file contains only your feed's registry information that you discovered from the **Connect to feed** dialog box. There should be no credentials in this file. The file is usually stored in the same location as your project's package.json file.

> [!IMPORTANT]
> There can be only a single `registry=` line in your .npmrc file. Multiple registries are possible with [scopes](npm/scopes.md) and [upstream sources](npm/upstream-sources.md).

#### Windows

If you're developing on Windows, we recommend that you use `vsts-npm-auth` to fetch credentials and inject them into your ~/.npmrc file on a periodic basis. The easiest way to set this up is to install `vsts-npm-auth` globally (that is, `npm install -g vsts-npm-auth`), and then add a run script in your project's package.json file.

```json
"scripts": {
    "refreshVSToken": "vsts-npm-auth -config .npmrc"
}
```

#### Linux/Mac

If you're developing on Linux or Mac, `vsts-npm-auth` isn't supported. Instead, generate a token in the following manner for your $HOME/.npmrc file.

[!INCLUDE [](./includes/npm/npmrc.md)]

::: moniker-end

## Build your project

At this point, your project should have a package.json file and a .npmrc file in the same folder. Run `npm install` from the directory that contains both of these files. npm discovers your feed in the .npmrc file in the current working directory. It then fetches the credentials from your home directory's .npmrc file that you configured in the "Create a feed" section.

> [!NOTE]
> If you are using Yarn, run the following command to set the yarn registry: 
>
> `yarn config set registry "https://pkgs.dev.azure.com/<yourOrganization>/_packaging/<yourFeed>/npm/registry/"`


## Publish npm packages

You can now publish the npm package:

1. Browse to the directory that contains your package's package.json file.

1. Run `npm publish`.

This command authenticates to the feed by using the .npmrc configuration files that you had to set up earlier. For more information, see the [npm CLI docs](https://docs.npmjs.com/cli/publish).

Your npm package should now be available in your feed.

> [!IMPORTANT]
> Ensure that your working folder has an `.npmrc` file with a `registry=` line, as described in the **Connect to feed** screen in your feed. The build doesn't support using the `publishConfig` property to specify the registry to which you're publishing. If you include the `publishConfig` property in your package.json file, the build might fail with an unrelated authentication error.

## Download npm packages

[!INCLUDE [](includes/npm/install.md)]

## Next steps

> [!div class="nextstepaction"]
> [Publish npm packages (YAML/Classic)](../pipelines/artifacts/npm.md)
> [Use packages from npmjs.com](./npm/upstream-sources.md)
> [Use npm scopes](npm/scopes.md)
> [Use npm audit](npm/npm-audit.md)
