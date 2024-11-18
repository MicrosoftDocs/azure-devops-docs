---
title: Delete and recover packages
description: How to manually delete packages, set up retention policies, and recover deleted packages from the Recycle Bin.
ms.service: azure-devops-artifacts
ms.assetid: 10f5e81f-2518-41b9-92b6-e00c905b59b3
ms.topic: conceptual
ms.date: 10/05/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Delete and recover packages

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts securely stores various package types within your feed, whether you've published them directly or saved them from upstream sources. As older package versions become less relevant, you may consider removing them through manual deletion or by using retention policies. In this article, you'll learn how to:

> [!div class="checklist"]  
> * Delete packages from your feed.
> * Set up retention policies.
> * Manually delete packages permanently.
> * Recover recently deleted packages.

> [!NOTE]
> To delete/recover packages or set up retention policies, you must be a **Feed Owner**.

## Delete packages

In Azure Artifacts, packages are immutable. Once you publish a package to your feed, its version number is reserved permanently. Even if you delete it from your feed, you cannot publish a new package with the same version number.

#### [NuGet](#tab/nuget/)

> [!NOTE]
> You must be a **Feed Publisher (Contributor)** to unlist a package and a **Feed Owner** to delete it.

There are two available choices for removing a NuGet package from your feed, [Unlist](#qa) and [Delete](#qa). Unlisting a package version hides it from the search results in Azure Artifacts feeds and on NuGet.org, while deleting a package version sends it to the recycle bin and makes it unavailable for installation.

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you wish to delete, and then select **Unlist** or **Delete**.

    :::image type="content" source="../media/delete/unlist-delete-nuget-package-newnav.png" alt-text="A screenshot showing how to delete or unlist a NuGet package.":::

::: moniker-end



### Unlist packages using NuGet.exe

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed** > **NuGet.exe**, and then find and copy your **Package Source** URL. It should resemble this format: *"https://pkgs.dev.azure.com/OrganizationName/ProjectName/_packaging/FeedName/nuget/v3/index.json"*.

1. Run the following command to unlist your NuGet package:

    ```Command
    nuget.exe delete <PACKAGE_NAME> <PACKAGE_VERSION> -Source <PACKAGE_SOURCE_URL> -ApiKey <KEY>
    ```

> [!NOTE]
> Azure DevOps and Visual Studio Team Foundation Server interpret the `nuget.exe delete` command as an unlisting operation. To delete a package, you must use the [REST API](/rest/api/azure/devops/artifactspackagetypes/nuget/delete-package-version) or delete it manually from the web interface.

#### [npm](#tab/npm/)

> [!NOTE]
> You must be a **Feed Publisher (Contributor)** to deprecate a package and a **Feed Owner** to delete it.

For npm packages in your feed, you have the option to [Deprecate](#qa) or [Delete](#qa) them. Deprecating a package adds a warning message to the package's metadata to be displayed whenever the package is viewed or installed. Deleting a package version, on the other hand, sends it to the Recycle Bin and makes it unavailable for installation.

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you wish to delete, and then select **Deprecate** or **Delete**.

    :::image type="content" source="../media/npm-deprecate-delete.png" alt-text="A screenshot showing how to deprecate or delete an npm package.":::

::: moniker-end



### Deprecate or Delete packages CLI

1. [Set up your project's .npmrc](../npm/npmrc.md).

1. Use the following command to deprecate an npm package:

    ```Command
    npm deprecate <package>[@<version>] <message>
    ```

1. If you want to delete your npm package, run the following command:

    ```Command
    npm unpublish <package>@<version>
    ```

> [!NOTE]
> The `npm unpublish` command does not remove all versions of the package. For more information, see the [deprecate](https://docs.npmjs.com/cli/deprecate) or [unpublish](https://docs.npmjs.com/cli/unpublish) documentation.

#### [Python](#tab/python/)

> [!NOTE]
> You must be a **Feed Owner** to delete a Python package.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package that you want to delete, and then select **Delete**.

    :::image type="content" source="../media/python-delete-package.png" alt-text="A screenshot showing how to delete a Python package.":::

#### [Maven](#tab/maven/)

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package that you want to delete, and then select **Delete**. 

1. Select **Delete** one more time to confirm your choice. 

    :::image type="content" source="../media/maven-delete-package.png" alt-text="A screenshot showing how to delete a Maven package.":::

::: moniker-end



#### [Universal Packages](#tab/universal/)

> [!NOTE]
> You must be a **Feed Owner** to delete a Universal Package.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package that you want to delete, and then select **Delete**.

    :::image type="content" source="../media/universal-package-delete-package.png" alt-text="A screenshot showing how to delete a Universal Package.":::

#### [Cargo](#tab/cargo/)

> [!NOTE]
> You must be a **Feed Publisher (Contributor)** to yank a package and a **Feed Owner** to delete it.

There are two available choices for your Cargo package in your feed when it comes to deletion: [Yank](#qa) and [Delete](#qa). Yanking a package version marks is as unusable or deprecated. Yanking a package version doesn't delete it but effectively discourages its use. Deleting a package version on the other hand, sends it to the recycle bin and makes it unavailable for installation.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you wish to delete, and then select **Delete** or **Yank**.

    :::image type="content" source="../media/delete-cargo-package.png" alt-text="A screenshot showing how to delete or yank a Cargo package.":::

* * *

## Delete packages permanently 

Packages placed in the **Recycle Bin** are permanently deleted after 30 days, but they continue to contribute to your storage costs during that time.  If you wish to remove them before this period, you can manually delete them from the Recycle Bin by following these steps:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Recycle Bin** from the upper-right corner.

    :::image type="content" source="../media/delete/recycle-bin.png" alt-text="A screenshot showing how to access the recycle bin in Azure Artifacts.":::

1. Select the package you want to permanently delete, and then select **Permanently Delete**.

    :::image type="content" source="../media/delete/delete-package-permanently.png" alt-text="A screenshot showing how to permanently delete a package in Azure Artifacts.":::

1. Select **Permanently Delete** once more to confirm your decision. Your package will be deleted permanently.

     :::image type="content" source="../media/delete/delete-package-permanently-confirmation.png" alt-text="A screenshot showing a confirmation message before you delete a package permanently.":::

## Delete packages automatically with retention policies

The number of versions for each package hosted in your feed can grow quickly. To free up storage space, you can set up retention policies to automatically delete old packages.

If you want to retain a package indefinitely, you can promote it to a [view](../concepts/views.md). Packages promoted to a view are exempt from retention policies and will not be subject to deletion. To configure retention policies for your feed, please follow the steps below:

> [!NOTE]
> Azure Artifacts does not support package demotion.

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select the gear icon ![gear icon](../../media/icons/gear-icon.png) from the upper-right corner to access your feed's settings.

1. Select **Feed details**, and then check the **Enable package retention** checkbox. Provide values for both the **Maximum number of versions per package** and **Days to keep recently downloaded packages**.

    - **Maximum number of versions per package**: The number of versions for each package you wish to retain.

    - **Days to keep recently downloaded packages**: Packages will only be deleted if they haven't been downloaded for the specified number of days specified here.
    
1. Select **Save** when you're done.

    :::image type="content" source="../media/retention-policy-settings.png" alt-text="A screenshot showing how to set up retention policies for your feed.":::

::: moniker-end



> [!NOTE]
> When you enable retention policies, a version of a package will be deleted when **both** of the following conditions are met:
> - The number of published versions reaches the **Maximum number of versions per package** limit.
> - A version of that package has not been downloaded for the period specified in **Days to keep recently downloaded packages**.

## Restore deleted packages

Deleted packages remain in the Recycle Bin for 30 days. After this period, they'll be permanently deleted. You must be a feed **Owner** to restore deleted packages.

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Recycle Bin**.

1. Select your package, and then select **Restore**.

    :::image type="content" source="../media/restore-package.png" alt-text="A screenshot showing how to restore deleted packages.":::

1. Select **Restore** once more to confirm your decision.

::: moniker-end



## Q&A

##### Q: What is the difference between *Deprecate*, *Unlist*, *Yank*, and *Delete* a package version?

A: *Deprecate* applies to npm packages, *Yank* applies to Cargo packages while *Unlist* applies to NuGet packages. You can also *Delete* any of the package types (npm, Maven, Python, Cargo, and Universal Packages):

- **Deprecate** (npm): When you deprecate a package version, a warning message is added to the package's metadata. Azure Artifacts and most npm clients will display this warning message whenever the package is viewed or installed.

- **Unlist** (NuGet): Unlisting a package version hides it from the search results in Azure Artifacts feeds and on NuGet.org.

- **Yank** (Cargo): Yanking a package version marks it as obsolete or deprecated, discouraging its use, but it doesn't delete the package. 

- **Delete**: Deleting a package version makes it unavailable to install. Deleted packages can be restored from the Recycle Bin within 30 days of deletion. After this period, the packages will be permanently deleted.

##### Q: What happens with old or existing packages when we enable retention policies?

A: Old or existing packages will be soft-deleted and moved to the Recycle Bin. The deletion job runs once a day, but there might be an initial delay after the policy is turned on for the first time because of an influx of packages. 

Packages remain in the Recycle Bin for 30 days before they're permanently deleted. To remove the packages from your billable storage, you can choose to delete them manually by using the UI or the REST API before the 30 days are up.

##### Q: How long does it take for the billed storage amount to update after deleting Artifacts?

A: Typically, storage consumption should be updated within 24 hours, although in certain cases it might take up to 48 hours for the changes to be reflected. The Artifacts usage on the billing page of your organization is updated once a day. However, The Artifact Storage page is updated more frequently, which may lead to a minor discrepancy between the information displayed on the two pages.

## Related articles

- [Artifacts storage consumption](../artifact-storage.md)
- [Promote a package to a view](../feeds/views.md)
- [Manage permissions](../feeds/feed-permissions.md)
