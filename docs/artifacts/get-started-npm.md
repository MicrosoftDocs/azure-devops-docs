---
title: Use npm to store JavaScript packages in Azure DevOps Services
description: Use npm to store your JavaScript packages in Azure DevOps Services or Team Foundation Server. This guide will walk you through creating a feed, setting up you .npmrc files, building your project and publish your npm package to your feed.
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: 5BFBA0C3-85ED-40C9-AC5F-F686923160D6
ms.custom: contentperfq4
ms.date: 06/19/2020
monikerRange: '>= tfs-2017'
---

# Get started with npm packages in Azure Artifacts

**Azure DevOps Services** | **TFS 2018** | **TFS 2017**

This quickstart will show you how to create your Azure Artifact feed, set up your `.npmrc` files to store your feed URLs and credentials, build your project and publish your npm package to your feed.

::: moniker range=">=tfs-2017 <= tfs-2018"

## License the Azure Artifacts extension

### Install Azure Artifacts in TFS

Azure Artifacts is installed by default for TFS 2017 customers. To use Azure Artifacts, you must upgrade to TFS 2017.

> [!NOTE]
> If the Azure Artifacts extension has been removed, you can install it from the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed).

::: moniker-end

::: moniker range="azure-devops-2019" 

## Assign Azure Artifacts in Azure DevOps Services

Each organization gets five free licenses. If you need more than five licenses, go to the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed) and select **Get**. Select **Buy** and purchase the additional licenses that you need.  

Assign your licenses by following these instructions:

1. Go to your organization and select **Admin settings** on the lower left of the UX.
2. Select **Users**.
3. Select the user or users you want to assign the Azure Artifacts extension to, and select **Manage extensions**.
4. If you're selecting multiple users, select **Assign extensions** and choose the Azure Artifacts extension. If you're selecting only one user, select the Azure Artifacts box under **Extensions** and select **Save changes**.

If you have a Visual Studio Enterprise license, you already have access to Azure Artifacts and don't need to be assigned a license. Just ensure that you've been assigned the "Visual Studio Enterprise" access level.

1. Go to your account, go to the **Users** page, and select **Package Management**.
2. Select **Assign**, enter the users you want to assign licenses to, and then select **Ok**.

If you have a Visual Studio Enterprise license, you already have access to Package Management and don't need to be assigned a license. Just ensure that you've been assigned the "Visual Studio Enterprise" access level.

::: moniker-end

::: moniker range=">=tfs-2017 <= tfs-2018"

### Assign licenses in TFS

Each organization gets five free licenses. If you need more than five licenses, go to the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed) and select **Get**. Select **Buy** and purchase the additional licenses that you need.  

If you aren't sure, you can select **Start 30-day free trial**. Every user in your organization is then granted access to Azure Artifacts for 30 days. After the 30-day trial period, your organization reverts back to five entitled users, and you must assign licenses to individual users.  If you need additional licenses at this point, you can purchase them from this same dialog box in the Marketplace.

> [!NOTE]
> If you selected **Start 30 day free trial** and are still in the trial period, every user is granted access. Licenses don't need to be assigned until the trial period ends. 

1. From any collection in TFS, hover over the settings menu and select the **Users** page. Then select **Package Management**.

   > [!div class="mx-imgBorder"]
   > ![Users page in TFS](media/users-hub-tfs.png)

1. Select **Assign**, enter the users you want to assign licenses, and then select **Ok**.

   * Users with Visual Studio Enterprise subscriptions get Azure Artifacts for free. Make sure that your Visual Studio Enterprise subscribers have the [VS Enterprise](../organizations/security/access-levels.md) access level. See [Change access levels](../organizations/security/change-access-levels.md) for more information on how to set up permissions and change access levels.

   * Users who are using an instance of TFS that's disconnected from the internet (and thus can't purchase licenses from the Marketplace) can still assign licenses purchased through an enterprise agreement.

::: moniker-end

## Create a feed

A feed is a container that allows users to group packages and control who can access them by modifying the feed permissions.

Feeds are not package type dependent. Azure Artifacts currently supports the storage of all the following package types in a single feed:

* NuGet                      
* npm                        
* Maven
* Python
* Universal


On your first visit to **Azure Artifacts**, you're welcomed with an image that prompts you to create a new feed. Select the **Create feed** button.

In the dialog box:
* **Name**: Give the feed a name.
* **Visibility**: Choose who can read and contribute (or update) packages in your feed. An organization-visible feed is created with permissions that allow all users in the organization to see and use your feed (recommended). A private feed is created with permissions such that only you have access.
* **Upstream sources**: Selecting **Use packages from public sources through this feed** will add both the public npm `registry.npmjs.org` and NuGet `packages.nuget.org` packages as upstreams to your feed. When upstreams are enabled, your client (that is, npm and NuGet) can fetch packages from the public registry through your private feed, and your private feed will cache those packages for you. If you select **Use packages published to this feed**, your feed is created without connectivity to public registries. You can connect them later if you want.

When you're done, select **Create**.

::: moniker range=">= azure-devops-2019"

> [!div class="mx-imgBorder"] 
> ![New feed dialog box Azure DevOps 2019](media/new-feed-dialog.png)

::: moniker-end

::: moniker range="<= tfs-2018"

> [!div class="mx-imgBorder"]
> ![New feed dialog box TFS](media/new-feed-dialog.png)

::: moniker-end

You can change these settings later by editing the feed.

[!INCLUDE [edit-feed](includes/edit-feed.md)]

## Set up your .npmrc files

All Azure Artifacts feeds require authentication. You'll need to store credentials for the feed before you can install or publish packages. npm uses [.npmrc configuration files](https://docs.npmjs.com/files/npmrc) to store feed URLs and credentials.

### Find your .npmrc files

We recommend that you use two .npmrc files:

1. One **_.npmrc_** should live at the root of your git repo adjacent to your project's **_package.json_**.

   1. From your **Artifacts** page, click _Connect to Feed_

      ::: moniker range=">= azure-devops-2019"
    
      > [!div class="mx-imgBorder"] 
      > ![Connect to feed button in Azure Artifacts devops 2019](media/connect-to-feed-azure-devops-newnav.png)

      ::: moniker-end

      ::: moniker range=">= tfs-2018 < azure-devops-2019"
        
      > [!div class="mx-imgBorder"] 
      > ![Connect to feed button in Azure Artifacts TFS 2018](media/connect-to-feed.png)

      ::: moniker-end

      ::: moniker range="= tfs-2017"

      > [!div class="mx-imgBorder"] 
      > ![Connect to feed button in Azure Artifacts TFS 2017](media/connect-to-feed.png)

      ::: moniker-end

   3. Select **npm**.

   4. Select **Get the tools** in the upper-right corner

   5. Follow steps **1** and **2** to download Node.js, npm, and the artifacts credential provider.

   6. Select **Windows** if you are on a Windows Machine, or **Other** if you are on macOS or Linux.
   
   7. Follow the instructions in the **Project setup**, **Restore packages**, and **Publish packages** sections to publish.npm-azure

      ::: moniker range=">= azure-devops-2019"

      > [!div class="mx-imgBorder"] 
      > ![Connect to feed from Azure Artifacts devops 2019](media/npm-azure-devops-newnav.png)

      ::: moniker-end

      ::: moniker range=">= tfs-2018 < azure-devops-2019"

      > [!div class="mx-imgBorder"]
      > ![Connect to feed from Azure Artifacts TFS 2018](media/connect-to-feed-npm-registry.png)

      ::: moniker-end

      ::: moniker range="= tfs-2017"

      > [!div class="mx-imgBorder"]
      > ![Connect to feed from Azure Artifacts TFS 2017](media/connect-to-feed-npm-registry.png)

      ::: moniker-end
        
2. On your development machine, you will also have a **_.npmrc_** in $home for Linux or Mac systems or $env.HOME for win systems.  This **_.npmrc_** should contain credentials for all of the registries that you need to connect to.  The NPM client will look at your project's **_.npmrc_**, discover the registry, and fetch matching credentials from $home/.npmrc or $env.HOME/.npmrc.  Credential acquisition will be discussed in the next section.

This enables you to share the project's .npmrc file with the whole team while keeping your credentials secure.

### Set up authentication on your development machine

At this point, you should have a project-specific .npmrc file that contains only your feed's registry information that you discovered from the **Connect to feed** dialog box. There should be no credentials in this file. The file is usually adjacent to your project's package.json file.

> [!IMPORTANT]
> There can be only a single "registry=" line in your .npmrc file.  Multiple registries are possible with [scopes](npm/scopes.md) and [upstream sources](npm/upstream-sources.md).

#### Windows

If you're developing on Windows, we recommend that you use `vsts-npm-auth` to fetch credentials and inject them into your ~/.npmrc file on a periodic basis. The easiest way to set this up is to install `vsts-npm-auth` globally (that is, `npm install -g vsts-npm-auth`) and then add a run script in your project's package.json file.

```json
"scripts": {
    "refreshVSToken": "vsts-npm-auth -config .npmrc"
}
```

#### Linux or Mac

If you're developing on Linux or Mac, `vsts-npm-auth` is not supported. We recommend generating a token in the following manner for your $HOME/.npmrc file.

[!INCLUDE [](./includes/npm/npmrc.md)]

> [!NOTE]
> If you have npmjs.com configured as an upstream and the package name/version exists in the public registry, you'll be blocked from publication. We don't support overriding packages that exist in the public registry. See [packages from npmjs.com](npm/upstream-sources.md) for more details.

## Build your project

At this point, your project should have a package.json file and an .npmrc file adjacent to each other. Run `npm install` from the directory that contains both of these files. npm will discover your feed in the .npmrc file in the current working directory. It will then fetch credentials from your home directory's .npmrc file that you configured in [Create a feed](#create-a-feed).

## Publish an npm package

You can now publish the npm package:

1. Browse to the directory that contains your package's package.json file.

1. Run `npm publish`.

The `npm publish` command will authenticate to the feed using the .npmrc configuration files that you had to setup in this [previous step](#set-up-your-npmrc-files). See the [npm CLI docs](https://docs.npmjs.com/cli/publish) for more information.

If you have followed all of the steps up to this point, your npm package should be available now in your feed.

> [!IMPORTANT]
> Ensure that your working folder has an `.npmrc` file with a `registry=` line, as described in the **Connect to feed** screen in your feed. The build does not support using the `publishConfig` property to specify the registry to which you're publishing. If you include the `publishConfig` property in your package.json file, the build will fail with potentially an unrelated authentication error.

## Next steps

Check out the [Azure Artifacts landing page](./index.yml) to learn about other topics.
