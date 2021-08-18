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
> You must be a **Contributor** to deprecate packages and an **Owner** to unpublish them.

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
There are two options available to remove a version of a NuGet package from a feed.

1. **Unlist:** Unlisting a package version hides it from the search results, Visual Studio UI and from appearing on NuGet.org.
2. **Delete:**  Deleting a version of a package makes it unavailable to install. Deleted packages can be restored from the Recycle Bin within 30 days of deletion. The packages will be deleted permanently afterwards.

When you publish a particular version of a package to a feed, that version number is permanently reserved. You cannot upload a newer revision package with that same version number, or delete it and upload a new package at the same version.

::: moniker range=">= azure-devops-2019"

### Unlisting or deleting a NuGet package

You must be a **contributor** to unlist a package and an **owner** to delete it.

From within your feed, select the appropriate package and select **Unlist** or **Delete latest**.

> [!div class="mx-imgBorder"]
> ![Unlist or delete nuget packages](../media/delete/unlist-delete-nuget-package-newnav.png)

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

### Unlisting or deleting a NuGet package

You must be a **contributor** to unlist a package and an **owner** to delete it.

Select **Build and Release**, then **Packages**. select the appropriate package and select **Unlist** or **Delete latest**.

> [!div class="mx-imgBorder"]
> ![Unlist or delete nuget package TFS](../media/delete/unlist-delete-nuget-package.png)

::: moniker-end

### Unlisting a NuGet package using NuGet.exe
1. Navigate to your feed and select **Connect to feed**

   ::: moniker range=">= azure-devops-2019"

    > [!div class="mx-imgBorder"] 
    > ![Connect to feed button](../media/connect-to-feed-azure-devops-newnav.png)

   ::: moniker-end

   ::: moniker range=">=tfs-2017 < azure-devops-2019"

    > [!div class="mx-imgBorder"]
    > ![Connect to feed button TFS](../media/connect-to-feed.png)

   ::: moniker-end

2. Select **NuGet.exe** then find and Copy the _Package Source_ URL.

3. Run the following command:

    ```
    nuget.exe delete {your_package_id} {version} -Source {feed URL} -ApiKey key
    ```

NuGet.exe currently only performs the **unlist** packages operation. Azure DevOps Services and TFS interpret the `nuget.exe delete` command as an **unlist** operation. To **delete** a package, you must use the REST API or the web interface.

#### [Python](#tab/python/)
You must be an **owner** to delete a Python package.

From within your feed, select the appropriate package and select **Delete latest**.

> [!div class="mx-imgBorder"]
> ![Unlist or delete a Python package](../media/delete/delete-python-package.png)

#### [Universal](#tab/universal/)
You must be an **owner** to delete a Universal Package.

From within your feed, select the appropriate package and select **Delete latest**.

> [!div class="mx-imgBorder"]
> ![Unlist or delete a Universal package](../media/delete/delete-universal-package.png)

* * *

> [!NOTE]
> Packages that are placed in the recycle bin will be deleted permanently after 30 days. However, these packages still count as part of your storage bill. If you want to delete them sooner, you can navigate to the recycle bin and delete them manually.

## Automatically delete old package versions with retention policies

Over time, the number of versions for each package being hosted in your feed can grow quickly. You can set up retention policies to automatically delete old packages and save storage space.

- **maximum number of versions**: allow you to chose how many versions of a package you want to keep.
- **days to keep recently downloaded packages**. Packages will be deleted only if they have not been downloaded for the number of days set in here.

If you'd like to retain a package indefinitely, you can promote it to a [view](../concepts/views.md). Versions that got promoted to views are exempt from retention policies and will not be deleted.

> [!NOTE]
> Package demotion is not currently supported. If you want this feature to be added to future releases, please feel free to **Suggest a feature** on our [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html). See [Get started with feed views](../feeds/views.md#get-started-with-feed-views) for more information.

To configure retention policies:

::: moniker range=">= azure-devops-2019"

1. Navigate to Azure Artifacts.

    > [!div class="mx-imgBorder"]
    > ![Go to Azure Artifacts](../media/goto-feed-hub-azure-devops-newnav.png)

2. Select the gear icon in your feed and select **Feed settings**.
    > [!div class="mx-imgBorder"]
    > ![Top right of screen, gear icon and then feed settings](../media/feed-settings-azure-devops-newnav.png)

2. From the **Feed details** tab, in the **Retention policies** setting, enter the maximum number of versions per package to retain, and the number of days to keep recently downloaded packages.
    > [!div class="mx-imgBorder"]
    > ![Edit retention policy settings for old packages in Azure DevOps Services or TFS](../media/retention-policy-settings.png)

3. Select **Save**.

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Select **Build and Release**, then **Packages** to navigate to your feed and select the gear icon. 
    > [!div class="mx-imgBorder"]
    > ![Edit an Azure DevOps Services feed in Package](../media/edit-feed-full.png)

2. From the **Retention** tab, enter the maximum number of versions per package to retain.
    > [!div class="mx-imgBorder"]
    > ![Edit retention policy settings for old packages in Azure DevOps Services or TFS](../media/retention-policy-settings-tfs.png)

3. Select **Save**.

::: moniker-end

> [!NOTE]
> When you enable retention policies, a version of a package will be deleted when **both** of the following criteria are met:
> 1. The number of published versions of that package reaches the **maximum number of versions** limit, **AND** 
> 2. A version of that package has not been downloaded within the number of **days to keep recently downloaded packages**.

## Recover a deleted package from the recycle bin

Deleted packages will remain in the recycle bin for 30 days after which it will be permanently deleted. You must be assigned an **owner** role in order for you to recover deleted packages.

::: moniker range=">= azure-devops-2019"

1. Select Azure Artifacts.

    > [!div class="mx-imgBorder"]
    > ![Go to Azure Artifacts](../media/goto-feed-hub-azure-devops-newnav.png)

2. Select "Recycle Bin".

3. Select the appropriate package then select the package version.

4. Select **Restore to feed**.

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Select **Build and Release**, then **Packages** to navigate to your feed and select **Recycle bin**. 
    > [!div class="mx-imgBorder"]
    > ![Recycle Bin TFS](../media/recycle-bin/find-recycle-bin.png)

2. Select the appropriate package then select the package version.
    > [!div class="mx-imgBorder"]
    > ![Recycle Bin package view TFS](../media/recycle-bin/recycle-bin-view.png)

3. Select **Restore to feed**.
    > [!div class="mx-imgBorder"]
    > ![Restore package TFS](../media/recycle-bin/recycle-bin-restore.png)

::: moniker-end

## Q&A

### Q: What happens with old/existing packages when we enable retention policies?

A: Those packages will get soft-deleted and moved to the recycle bin. The deletion job runs once a day but there could be an initial delay after the policy is turned on for the first time due to an influx of packages. Packages remain in the recycle bin for 30 days before they are permanently deleted. To remove the packages from your billable storage, you can chose to delete them manually using the UI or the REST API before the 30 days is up. 

## What's next?

- [Set up upstream sources](./set-up-upstream-sources.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Promote a package to a view](../feeds/views.md)
