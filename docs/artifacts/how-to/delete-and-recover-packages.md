---
title: Delete and recover packages
description: How to recover deleted packages and set up retention policies
ms.technology: devops-artifacts
ms.assetid: 10f5e81f-2518-41b9-92b6-e00c905b59b3
ms.custom: contperf-fy21q2
ms.topic: conceptual
ms.date: 08/17/2021
monikerRange: '>= tfs-2017'
---

# Delete and recover packages

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017**

Azure Artifacts safely stores different types of packages in your feed whether you published them directly or saved them from upstream sources. But, as older package versions fall out of use, you may want to clean them up either manually or automatically using retention policies. 

In this article, you will learn how to:

> [!div class="checklist"]  
> * Delete packages from feeds.
> * Set up retention policies to automatically delete older packages.
> * Recover recently deleted packages from the recycle bin.

> [!NOTE]
> To delete/recover packages or set up retention policies, you must be a feed **Owner**.

## Delete packages

#### [Maven](#tab/maven/)

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**, and then select your feed.

1. Select the package you want to delete, and then select **Delete latest**. Select **Delete** to confirm. 

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops-2019"

1. Select **Build and Release**, and then select **Packages**.

1. Select your feed, and then select the package you want to delete.

1. Select **Delete latest** to delete the latest version of your package.

    :::image type="content" source="../media/delete/delete-maven-package.png" alt-text="Screenshot showing the delete latest button to delete packages from feeds.":::  

In Azure Artifacts, packages are immutable. When you publish a package to your feed, its version number will be reserved permanently. You cannot upload a new package with that same version number even if you delete it from your feed.

::: moniker-end

#### [npm](#tab/npm/)

There are two options to delete an npm package from your feed:

1. **Deprecate:** when you deprecate a package version, a warning message is added to the package's metadata. Azure Artifacts and most npm clients will display the warning message whenever the package is viewed or installed. 
2. **Unpublish:** Unpublishing a package version makes it unavailable to install. Unpublished packages can be restored from the Recycle Bin within 30 days of deletion, after which the package will be permanently deleted.

In Azure Artifacts, packages are immutable. When you publish a package to your feed, its version number will be reserved permanently. You cannot upload a new package with that same version number even if you delete it from your feed.

> [!NOTE]
> You must be a **Contributor** to deprecate a package and an **Owner** to unpublish it.

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**, and then select your feed.

1. Select the package you want to delete/deprecate, and then select **Deprecate** or **Unpublish latest**.

    :::image type="content" source="../media/delete/deprecate-unpublish-npm-package-newnav.png" alt-text="Screenshot showing the deprecate and unpublish latest buttons.":::

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Select **Build and Release**.

1. Select **Packages**, and then select the package you want to delete. 

1. Select **Deprecate** or **Unpublish latest**.

    :::image type="content" source="../media/delete/deprecate-unpublish-npm-package.png" alt-text="Screenshot showing the deprecate and unpublish latest buttons TFS.":::

::: moniker-end

#### Deprecate or unpublish an npm package using the CLI

- You must first [set up your client's npmrc](../npm/npmrc.md).

- Deprecate:

    ```Command
    npm deprecate <package>[@<version>] <message>
    ```

- Unpublish latest:

    ```Command
    npm unpublish <package>@<version>
    ```

> [!NOTE]
> `npm unpublish` will not unpublish all versions of the package. See [deprecate](https://docs.npmjs.com/cli/deprecate) or [unpublish](https://docs.npmjs.com/cli/unpublish) documentation for more details.

#### [NuGet](#tab/nuget/)

There are two options available to delete a NuGet package from your feed.

1. **Unlist:** unlisting a package version hides it from the search results in Artifacts feeds an NuGet.org.
2. **Delete:**  deleting a package version makes it unavailable to install. Deleted packages can be restored from the Recycle Bin within 30 days of deletion, after which the package will be permanently deleted.

In Azure Artifacts, packages are immutable. When you publish a package to your feed, its version number will be reserved permanently. You cannot upload a new package with that same version number even if you delete it from your feed.

> [!NOTE]
> You must be a **Contributor** to unlist a package and an **Owner** to delete it.

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**, and then select your feed.

1. Select the package you want to delete/deprecate, and then select **Unlist** or **Delete latest**.

    :::image type="content" source="../media/delete/unlist-delete-nuget-package-newnav.png" alt-text="Screenshot showing the unlist and delete latest for NuGet packages.":::

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Select **Build and Release**.

1. Select **Packages**, and then select the package you want to delete. 

1. Select **Unlist** or **Delete latest**.

    :::image type="content" source="../media/delete/unlist-delete-nuget-package.png" alt-text="Screenshot showing the unlist and delete latest for NuGet packages in TFS.":::

::: moniker-end

### Unlist a NuGet package with NuGet.exe

1. Select **Artifacts**, and the navigate to your feed. Select **Connect to feed**.

   ::: moniker range=">= azure-devops-2019"

     :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot highlighting the connect to a feed button.":::

   ::: moniker-end

   ::: moniker range=">=tfs-2017 < azure-devops-2019"

    :::image type="content" source="../media/connect-to-feed.png" alt-text="Screenshot highlighting the connect to a feed button TFS.":::

   ::: moniker-end

2. Select **NuGet.exe**, and then find and Copy your **Package Source** URL.

3. Run the following command:

    ```Command
    nuget.exe delete <PACKAGE_NAME> <PACKAGE_VERSION> -Source <PACKAGE_SOURCE_URL> -ApiKey <KEY>
    ```

> [!NOTE]
> Azure DevOps and TFS interpret the `nuget.exe delete` command as an **unlist** operation. To delete a package, you must use the REST API or the web interface.

#### [Python](#tab/python/)

1. Select **Artifacts**, and then select your feed.

1. Select the package you want to delete, and then select **Delete latest**.

> [!NOTE]
> You must be a feed **Owner** to delete a Python package.

:::image type="content" source="../media/delete/delete-python-package.png" alt-text="Screenshot highlighting the delete latest button - Python.":::

#### [Universal Package](#tab/universal/)

1. Select **Artifacts**, and then select your feed.

1. Select the package you want to delete, and then select **Delete latest**.

> [!NOTE]
> You must be a feed **Owner** to delete a Universal Package.

:::image type="content" source="../media/delete/delete-universal-package.png" alt-text="Screenshot highlighting the delete latest button - Universal Packages.":::

* * *

> [!NOTE]
> Packages sent to the Recycle Bin will be deleted permanently after 30 days. However, these packages still count as part of your storage bill. If you want to delete them sooner, you can navigate to the Recycle Bin and delete them manually.

## Delete packages automatically with retention policies

Over time, the number of versions for each package hosted in your feed can grow quickly. To free up some storage space, you can set up retention policies to automatically delete old packages.

If you'd like to retain a package indefinitely, you can promote it to a [view](../concepts/views.md). Packages promoted to a view are exempt from retention policies and will not be deleted.

> [!NOTE]
> Package demotion is not supported. If you want this feature to be added to future releases, feel free to **Suggest a feature** on our [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html) page.

To configure retention policies:

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**.

    :::image type="content" source="../media/goto-feed-hub-azure-devops-newnav.png" alt-text="Screenshot highlighting the Artifacts button.":::

1. Select the gear icon in your feed, and then select **Feed settings**.

    :::image type="content" source="../media/feed-settings-azure-devops-newnav.png" alt-text="Screenshot highlighting feed settings.":::

1. Select the **Feed details** tab, and then check the **Enable package retention** checkbox. Enter the maximum number of versions per package to retain, and the number of days to keep recently downloaded packages.

    :::image type="content" source="../media/retention-policy-settings.png" alt-text="Screenshot showing how to enable retention policies for your feed.":::

    - **Maximum number of versions per package**: how many versions of a package you want to keep.
    - **Days to keep recently downloaded packages**. packages will be deleted only if they have not been downloaded for the number of days set in here.

1. Select **Save** when you are done.

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Select **Build and Release**.

1. Select **Packages**, and then select the gear icon to access your feed's settings. 

    :::image type="content" source="../media/edit-feed-full.png" alt-text="Screenshot showing how access the feed's settings - TFS.":::


1. From the **Retention** tab, enter the maximum number of versions per package to retain, and the number of days to keep recently downloaded packages.

    :::image type="content" source="../media/retention-policy-settings-tfs.png" alt-text="Screenshot showing retention policies - TFS.":::

    - **Maximum number of versions per package**: how many versions of a package you want to keep.
    - **Days to keep recently downloaded packages**. packages will be deleted only if they have not been downloaded for the number of days set in here.
    
1. Select **Save** when you are done.

::: moniker-end

> [!NOTE]
> When you enable package retention, a version of a package will be deleted when **both** of the following criteria are met:
> 1. The number of published versions reaches the **Maximum number of versions per package** limit.
> **AND** 
> 2. A version of that package has not been downloaded for the period defined in: **Days to keep recently downloaded packages**.

## Recover deleted packages

Deleted packages will remain in the Recycle Bin for 30 days after which it will be permanently deleted. You must be a feed **Owner** to recover deleted packages.

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**.

    :::image type="content" source="../media/goto-feed-hub-azure-devops-newnav.png" alt-text="Screenshot of how to access Azure Artifacts.":::

1. Select **Recycle Bin**.

    :::image type="content" source="../media/artifacts-recycle-bin.png" alt-text="Screenshot of the recycle bin button.":::

1. Select the appropriate package then select the package version you want to delete.

1. Select **Restore to feed**.

    :::image type="content" source="../media/restore-packages.png" alt-text="Screenshot of how to restore deleted packages.":::

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Select **Build and Release**, and then select **Packages**. 

1. Select **Recycle bin**

    :::image type="content" source="../media/recycle-bin/find-recycle-bin.png" alt-text="Screenshot of how to access the recycle bin - TFS.":::

1. Select the appropriate package then select the package version you want to delete.

    :::image type="content" source="../media/recycle-bin/recycle-bin-view.png" alt-text="Screenshot showing the package in the recycle bin - TFS.":::

1. Select **Restore to feed**.

    :::image type="content" source="../media/recycle-bin/recycle-bin-restore.png" alt-text="Screenshot showing the restore to feed button - TFS.":::

::: moniker-end

## Q&A

### Q: What happens with old/existing packages when we enable retention policies?

A: Those packages will get soft-deleted and moved to the recycle bin. The deletion job runs once a day but there could be an initial delay after the policy is turned on for the first time due to an influx of packages. Packages remain in the recycle bin for 30 days before they are permanently deleted. To remove the packages from your billable storage, you can chose to delete them manually using the UI or the REST API before the 30 days is up. 

## What's next?

- [Set up upstream sources](./set-up-upstream-sources.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Promote a package to a view](../feeds/views.md)
