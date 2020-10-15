---
title: Delete and recover packages | Azure Artifacts
description: Recover deleted packages and set up policies to automatically delete packages hosted in Azure DevOps Services and Team Foundation Server (TFS)
ms.technology: devops-artifacts
ms.assetid: 10f5e81f-2518-41b9-92b6-e00c905b59b3
ms.topic: conceptual
ms.date: 10/13/2020
monikerRange: '>= tfs-2017'
---

# Delete and recover packages

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017**

Azure Artifacts keeps all of your artifacts safe for as long as you need them, whether you published them directly or saved them from upstream sources. But, as older artifacts fall out of use, you may want to clean them up or let Azure Artifacts remove them automatically. In this article, you’ll learn how to:

1. Delete packages from Azure Artifacts feeds.
1. Set up retention policies to automatically delete older, unwanted packages from feeds.
1. Recover recently deleted packages from the recycle bin.

> [!NOTE]
> To delete, recover packages and set up retention policies, you need to be an **Owner** of that particular feed.

## Delete packages from Azure Artifacts feeds

#### [Maven](#tab/maven/)
Choose the artifact from the **Packages** page in the **Build and Release** page group and select the appropriate option from the menu:

> [!div class="mx-imgBorder"]
> ![Delete Maven artifact Azure DevOps Services](../media/delete/delete-maven-package.png)

When you publish a particular version of a package to a feed, that version number is permanently reserved. You cannot upload a newer revision package with that same version number, or delete it and upload a new package at the same version.

#### [npm](#tab/npm/)
There are two options available to remove a version of an npm package from a feed.

1. **Deprecate:** deprecating a version of a package adds a deprecation message that most npm clients, and Azure DevOps Services, will show whenever the package is viewed or installed. 
Deprecating a version can help you discourage new usage of it by presenting a warning message when the package is installed.
2. **Unpublish:** Unpublishing a version of a package makes it unavailable to install. Unpublished packages can be restored from the Recycle Bin within 30 days of deletion. After 30 days, the package will be deleted permanently.

When you publish a particular version of a package to a feed, that version number is permanently reserved. You cannot upload a newer revision package with that same version number, or delete it and upload a new package at the same version.

::: moniker range=">= azure-devops-2019"

### Deprecate or unpublish an npm package

You must be a **contributor** to deprecate a package and an **owner** to unpublish it.


From within your feed, select the appropriate package and select **Deprecate** or **Unpublish**.

> [!div class="mx-imgBorder"]
> ![Unpublish npm package](../media/delete/deprecate-unpublish-npm-package-newnav.png)

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

### Deprecate or unpublish an npm package in TFS

You must be a **contributor** to deprecate and an **owner** to unpublish.

Select **Build and Release**, then **Packages**. select the appropriate package and select **Deprecate** or **Unpublish**.

> [!div class="mx-imgBorder"]
> ![Unpublish npm package in TFS](../media/delete/deprecate-unpublish-npm-package.png)

::: moniker-end

### Deprecate or unpublish an npm package using npm
1. You must first [set up your client's npmrc](../npm/npmrc.md).
1. To deprecate a package, run the following command:
    ```
    npm deprecate <package>[@<version>] <message>
    ```
1. To unpublish a package, run the following command:
    ```
    npm unpublish <package>@<version>
    ```

> [!NOTE]
> `npm unpublish` will not unpublish all versions of the package.

See the [deprecate](https://docs.npmjs.com/cli/deprecate) or [unpublish](https://docs.npmjs.com/cli/unpublish) npm documentation for more info.

#### [NuGet](#tab/nuget/)
There are two options available to remove a version of a NuGet package from a feed.

1. **Unlist:** Unlisting a package version hides it from the search results, Visual Studio UI and from appearning on nuget.org.
2. **Delete:**  Deleting a version of a package makes it unavailable to install. Deleted packages can be restored from the Recycle Bin within 30 days of deletion. After 30 days, , the package will be deleted permanently.

When you publish a particular version of a package to a feed, that version number is permanently reserved. You cannot upload a newer revision package with that same version number, or delete it and upload a new package at the same version.

::: moniker range=">= azure-devops-2019"

### Unlisting or deleting a NuGet package

You must be a **contributor** to unlist a package and an **owner** to delete it.

From within your feed, select the appropriate package and select **Unlist** or **Delete**.

> [!div class="mx-imgBorder"]
> ![Unlist or delete nuget packages](../media/delete/unlist-delete-nuget-package-newnav.png)

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

### Unlisting or deleting a NuGet package in Team Foundation Server

You must be a **contributor** to unlist a package and an **owner** to delete it.

Select **Build and Release**, then **Packages**. select the appropriate package and select **Unlist** or **Delete**.

> [!div class="mx-imgBorder"]
> ![Unlist or delete nuget package TFS](../media/delete/unlist-delete-nuget-package.png)

::: moniker-end

### Unlisting a NuGet package using NuGet.exe
1. Navigate to your feed and select **Connect to feed**

   ::: moniker range=">= azure-devops-2019"

    > [!div class="mx-imgBorder"] 
    > ![Connect to feed button](../media/connect-to-feed-azure-devops-newnav.png)

   ::: moniker-end

   ::: moniker range="<= tfs-2018"

    > [!div class="mx-imgBorder"]
    > ![Connect to feed button TFS](../media/connect-to-feed.png)

   ::: moniker-end

2. Select **NuGet.exe** then find and Copy the _Package Source_ URL.

3. Run the following command:

    ```
    nuget.exe delete {your_package_id} {version} -Source {feed URL} -ApiKey key
    ```

NuGet.exe currently only perform the **unlist** packages operation. Azure DevOps Services and TFS interpret the `nuget.exe delete` command as an **unlist** operation. To **delete** a package, you must use the REST API or the web interface.

#### [Python](#tab/python/)
You must be an **owner** to delete a Python package.

Choose the package from **Azure Artifacts** and select _Delete latest_ from the menu:

> [!div class="mx-imgBorder"]
> ![Unlist or delete Universal package](../media/delete/delete-python-package.png)

#### [Universal](#tab/universal/)
You must be an **owner** to delete a Universal Package.

Choose the package from **Azure Artifacts** and select _Delete latest_ from the menu:

> [!div class="mx-imgBorder"]
> ![Unlist or delete Universal package](../media/delete/delete-universal-package.png)

* * *
## Automatically delete old package versions with retention policies

Over time, the number of versions for each package being hosted in Azure Artifacts or Team Foundation Server (TFS) can grow quickly. You can configure retention policies to automatically delete old packages in Azure DevOps Services or TFS to improve client performance and release storage space.

With retention policies, you can set the **maximum number of versions** to retain per package, once that number is hit the oldest version of the package will be deleted. You can also set the number of **days to keep recently downloaded packages**. Packages will only be deleted by retention policies if they have not been downloaded within the number of days set.

If you'd like to retain a package version indefinitely, you can promote it to a [view](../concepts/views.md). Versions that are promoted to views are exempt from retention policies, and are retained *in addition to* those retained by the maximum number of versions retention policy. Retention policies will not delete any version that has been promoted to a view.

> [!NOTE]
> Package demotion is not currently supported. If you want this feature to be added to future releases, please feel free to **Suggest a feature** on our [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html). See [Get started with feed views](../feeds/views.md#get-started-with-feed-views) for more information.

To configure retention policies:

::: moniker range=">= azure-devops-2019"

1. Navigate to Azure Artifacts:

    > [!div class="mx-imgBorder"]
    > ![Go to Azure Artifacts](../media/goto-feed-hub-azure-devops-newnav.png)

2. Select the gear icon in your feed and select **Feed settings**:
    > [!div class="mx-imgBorder"]
    > ![Top right of screen, gear icon and then feed settings](../media/feed-settings-azure-devops-newnav.png)

2. From the **Feed details** tab, in the **Retention policies** setting, enter the maximum number of versions per package to retain, and the number of days to keep recently downloaded packages:
    > [!div class="mx-imgBorder"]
    > ![Edit retention policy settings for old packages in Azure DevOps Services or TFS](../media/retention-policy-settings.png)

3. Click **Save**.

::: moniker-end

::: moniker range="<= tfs-2018"

1. Navigate to your feed from the **Packages** page in the **Build and Release** page group and select the gear icon: 
    > [!div class="mx-imgBorder"]
    > ![Edit an Azure DevOps Services feed in Package](../media/edit-feed-full.png)

2. From the **Retention** tab, enter the maximum number of versions per package to retain:
    > [!div class="mx-imgBorder"]
    > ![Edit retention policy settings for old packages in Azure DevOps Services or TFS](../media/retention-policy-settings-tfs.png)

3. Click **Save**.

::: moniker-end

> [!NOTE]
> When you enable retention policies, a version of a package will be deleted when **both** of the following criteria are met:
> 1. The number of published versions of that package reaches the **maximum number of versions** limit, **AND** 
> 2. A version of that package has not been downloaded within the number of **days to keep recently downloaded packages**.

## Recover a deleted package from the recycle bin

If you've deleted/unpublished an npm package, NuGet package, or Maven artifact from Azure Artifacts, builds that depend on that package will start to fail.  You won't be able to re-push that package to the feed because of [immutability](../artifacts-key-concepts.md#immutability).  In order to recover the package and have builds start working again, a feed owner can recover it from the Recycle Bin.

::: moniker range=">= azure-devops-2019"

1. Navigate to Azure Artifacts:
    > [!div class="mx-imgBorder"]
    > ![Go to Azure Artifacts](../media/goto-feed-hub-azure-devops-newnav.png)

2. Select "Recycle Bin".
    > [!NOTE]
    > Once in the Recycle Bin, you will see any packages that have been deleted from the current feed in the **past 30 days**.

3. Click on a package to get more details such as *Version*, *Deleted date/time*, and *Scheduled permanent deletion*.

4. Select a version to *Restore to feed*.

::: moniker-end

::: moniker range="<= tfs-2018"

1. Find the Recycle Bin in the **Packages** page underneath the **Build and Release** page group in Azure DevOps Services: 
    > [!div class="mx-imgBorder"]
    > ![Azure DevOps Services Recycle Bin](../media/recycle-bin/find-recycle-bin.png)
    
    > [!NOTE]
    > Once in the Recycle Bin, you will see any packages that have been deleted from the current feed in the **past 30 days**.

2. Click a package to get more details such as: *Version*, *Deleted date/time*, and *Scheduled permanent deletion:*
    > [!div class="mx-imgBorder"]
    > ![Azure DevOps Services Recycle Bin package view](../media/recycle-bin/recycle-bin-view.png)

3. Select a version to *Restore to feed:*
    > [!div class="mx-imgBorder"]
    > ![Restore an Azure DevOps Services package with Recycle Bin](../media/recycle-bin/recycle-bin-restore.png)

::: moniker-end