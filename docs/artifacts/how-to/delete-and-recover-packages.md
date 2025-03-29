---
title: Delete and recover packages
description: Learn how to manually delete packages, set up retention policies, and recover deleted packages from the Recycle Bin.
ms.service: azure-devops-artifacts
ms.assetid: 10f5e81f-2518-41b9-92b6-e00c905b59b3
ms.topic: how-to
ms.date: 03/13/2025
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Delete and recover packages

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts securely stores various package types in a feed, whether published directly or saved from upstream sources. As older package versions become less relevant, you can remove them manually or by using retention policies to free up space and reduce costs.

## Prerequisites

|    **Product**     |   **Requirements**   |
|--------------------|----------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An [Azure Artifacts feed](../start-using-azure-artifacts.md#create-a-new-feed).<br> - **Permissions:**<br>   &nbsp;&nbsp;&nbsp;&nbsp;- You must be a [Feed Owner](../feeds/feed-permissions.md#permissions-table) to set up retention policies, delete packages and feeds, or restore packages from the recycle bin.<br>   &nbsp;&nbsp;&nbsp;&nbsp;- You must be a [Feed Publisher (Contributor)](../feeds/feed-permissions.md#permissions-table) or higher to unlist, deprecate, or yank packages. |

## Delete packages

In Azure Artifacts, packages are immutable, meaning their version numbers cannot be reused or modified after publishing. Once you publish a package to a feed, its version number is permanently reserved. Even if you delete the package, its version remains recorded in the feed’s history, and you cannot publish a new package with the same version number.

#### [NuGet](#tab/nuget/)

There are two ways to remove a NuGet package from a feed: [Unlist](#qa) and [Delete](#qa). Unlisting a package version hides it from search results in Azure Artifacts feeds and on *NuGet.org*. Deleting a package version moves it to the recycle bin and makes it unavailable for installation.

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you want to delete, then select **Unlist** to hide it from search results in Azure Artifacts feeds and on *NuGet.org*, or **Delete** to move it to the recycle bin.

    :::image type="content" source="../media/delete/unlist-delete-nuget-package-newnav.png" alt-text="A screenshot displaying how to delete or unlist a NuGet package in Azure Artifacts.":::

::: moniker-end

### Unlist packages (CLI)

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select **Connect to feed** > **NuGet.exe**, then find and copy your **Package Source** URL. It should follow this format: `https://pkgs.dev.azure.com/OrganizationName/ProjectName/_packaging/FeedName/nuget/v3/index.json`.

1. Run the following command to unlist your package. The **ApiKey** argument is required but is treated as a placeholder when publishing to an Azure Artifacts feed, so you can use any string value:

    ```Command
    nuget.exe delete <PACKAGE_NAME> <PACKAGE_VERSION> -Source <PACKAGE_SOURCE_URL> -ApiKey <ANY_STRING>
    ```

> [!IMPORTANT]
> Azure DevOps interprets the `nuget.exe delete` command as an unlisting operation. This means that running the command does not delete the package, but instead hides it from search results in Azure Artifacts feeds and on NuGet.org. To delete a package from your feed, you must use the [REST API](/rest/api/azure/devops/artifactspackagetypes/nuget/delete-package-version) or delete it manually from the web interface.

#### [npm](#tab/npm/)

There are two ways to remove an npm package from a feed: [Deprecate](#qa) or [Delete](#qa) them. Deprecating a package adds a warning message to its metadata, which will be displayed whenever the package is viewed or installed. Deleting a package version, on the other hand, moves it to the recycle bin and makes it unavailable for installation.

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the package you want to delete, then select **Deprecate** or **Delete**.

    :::image type="content" source="../media/npm-deprecate-delete.png" alt-text="A screenshot displaying how to deprecate or delete an npm package in Azure Artifacts.":::

::: moniker-end

### Deprecate or delete packages (CLI)

1. [Set up your project's .npmrc](../npm/npmrc.md).

1. Use the following command to deprecate a package:

    ```Command
    npm deprecate <package>[@<version>] <message>
    ```

1. If you want to delete your package, run the following command. Keep in mind that the `npm unpublish` command does not remove all versions of the package:

    ```Command
    npm unpublish <package>@<version>
    ```

#### [Python](#tab/python/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you want to delete, and then select **Delete**.

    :::image type="content" source="../media/python-delete-package.png"  alt-text="A screenshot displaying how to delete a Python package in Azure Artifacts." lightbox="../media/python-delete-package.png":::

#### [Maven](#tab/maven/)

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you want to delete, and then select **Delete**. 

1. Select **Delete** again to confirm your choice. 

    :::image type="content" source="../media/maven-delete-package.png" alt-text="A screenshot displaying how to delete a Maven package in Azure Artifacts.":::

::: moniker-end

#### [Universal Packages](#tab/universal/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you want to delete, and then select **Delete**.

    :::image type="content" source="../media/universal-package-delete-package.png" alt-text="A screenshot displaying how to delete a Universal Package in Azure Artifacts.":::

#### [Cargo](#tab/cargo/)

There are two ways to remove a Cargo package from a feed: [Yank](#qa) and [Delete](#qa). Yanking a package version marks it as deprecated or unusable, discouraging its use, though it doesn't actually delete the package. Deleting a package version, on the other hand, moves it to the recycle bin and makes it unavailable for installation.

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the package you wish to delete, and then select **Yank** to mark it as deprecated or **Delete** to move it to the recycle bin.

    :::image type="content" source="../media/delete-cargo-package.png" alt-text="A screenshot displaying how to delete or yank a Cargo package.":::

* * *

## Delete packages permanently 

Packages in the recycle bin are automatically deleted after 30 days, but they still count toward your storage usage during this period. To remove them sooner, you can manually delete them from the Recycle Bin by following these steps:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. In the upper-right corner, select **Recycle Bin**.

1. Select the package you want to delete permanently, then select **Permanently Delete**.

    :::image type="content" source="../media/delete/delete-package-permanently.png" alt-text="A screenshot displaying how to permanently delete a package in Azure Artifacts.":::

1. Select **Permanently Delete** again to confirm your decision. Your package will be deleted permanently.

     :::image type="content" source="../media/delete/delete-package-permanently-confirmation.png" alt-text="A screenshot displaying a confirmation message before you delete a package permanently.":::

## Delete packages automatically with retention policies

As the number of package versions in your feed grows, storage usage can increase rapidly. You can set up retention policies to automatically delete old package versions and free up space.

If you need to keep a package indefinitely, promote it to a [view](../concepts/views.md). Packages in a view are exempt from retention policies and will not be subject to deletion. To configure retention policies for your feed, follow the steps below:

> [!NOTE]
> Azure Artifacts does not support package demotion. Once a package is promoted to a view, it cannot be reverted back to *@local*.

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, then select the gear icon ![gear icon](../../media/icons/gear-icon.png) in the upper-right corner to access your feed's settings.

1. Select **Feed details**, check the **Enable package retention** checkbox, and configure the following settings:

    - **Maximum number of versions per package**: The number of versions for each package you wish to retain.

    - **Days to keep recently downloaded packages**: Packages will only be deleted if they haven't been downloaded for the specified number of days specified here.
    
1. Select **Save** when you're done.

    :::image type="content" source="../media/retention-policy-settings.png" alt-text="A screenshot displaying how to set up retention policies for your feed.":::

::: moniker-end

> [!NOTE]
> When retention policies are enabled, a package version will be deleted only when **both** of the following conditions are met:
> - The total number of published versions reaches the **Maximum number of versions per package** limit.
> - A version of that package has not been downloaded within the timeframe specified in **Days to keep recently downloaded packages**.

## Restore deleted packages

Deleted packages remain in the recycle bin for 30 days. After this period, they are permanently deleted. To restore a package from the recycle bin, follow these steps:

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, then select **Recycle Bin**.

1. Select your package, and then select **Restore**.

1. Select **Restore** once more to confirm your decision.
    
    :::image type="content" source="../media/restore-package.png" alt-text="A screenshot displaying how to restore deleted packages.":::

::: moniker-end

## Q&A

##### Q: What is the difference between *Deprecate*, *Unlist*, *Yank*, and *Delete* a package version?

A: *Deprecate* applies to npm packages, *Yank* applies to Cargo packages while *Unlist* applies to NuGet packages. You can *Delete* any of the package types (npm, Maven, Python, Cargo, and Universal Packages) from your Azure Artifacts feed.

- **Deprecate** (npm): When you deprecate a package version, a warning message is added to the package's metadata. Azure Artifacts and most npm clients will display this warning message whenever the package is viewed or installed.

- **Unlist** (NuGet): Unlisting a package version hides it from search results in Azure Artifacts feeds and on NuGet.org.

- **Yank** (Cargo): Yanking a package version marks it as obsolete or deprecated, discouraging its use, but it doesn't delete the package. 

- **Delete**: Deleting a package version moves it to the recycle bin, making it unavailable for installation. Deleted packages can be restored from the recycle bin within 30 days. After this period, they will be permanently deleted.

##### Q: How do I delete all package versions?

A: To delete all versions of a package, select the package from your feed, select **Versions**, and then select the checkbox next to *version*. This will select all versions of that package in your feed. Select **Delete**, then select delete once more to confirm.

:::image type="content" source="../media/delete-all-versions.png" alt-text="A screenshot displaying how to delete all versions from a feed.":::

##### Q: What happens with old or existing packages when we enable retention policies?

A: Old or existing packages will be soft-deleted and moved to the recycle bin. The deletion job runs once a day, but there might be an initial delay after the policy is turned on for the first time due to an influx of packages. 

Packages remain in the recycle bin for 30 days before they're permanently deleted. To remove the packages from your billable storage, you can manually delete them using the web UI or the REST API before the 30-day period ends.

##### Q: What if I don't want to enable retention policies?

A: Azure Artifacts retention policies are designed to help manage your dependencies and streamline storage cost management. If you choose not to enable retention policies, you'll need to manage your storage manually, monitoring consumption and deleting packages as necessary. Azure Artifacts offers 2 GiB of free storage per organization, which allows you to evaluate whether the service fits your workflow. Once you exceed the storage limit, you won't be able to publish new artifacts unless you set up billing and [increase your storage limit](../start-using-azure-artifacts.md#increase-azure-artifacts-storage-limit).

##### Q: How long does it take for the billed storage amount to update after deleting Artifacts?

A: Typically, storage consumption should update within 24 hours. However, in some cases, it might take up to 48 hours for the changes to be reflected. The Artifacts usage on your organization's billing page updates once a day, while the Artifact Storage page is updated more frequently, which could lead to a slight discrepancy between the two.

## Related content

- [Monitor Artifacts storage consumption](../artifact-storage.md)

- [Limits on package sizes and counts](../reference/limits.md)

- [Manage permissions](../feeds/feed-permissions.md)
