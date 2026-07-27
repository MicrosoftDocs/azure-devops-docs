---
title: Delete and recover packages
description: Learn how to manually delete packages, set up retention policies, and recover deleted packages from the Recycle Bin.
ms.service: azure-artifacts
ms.custom: peer-review-program
ms.topic: how-to
ms.date: 07/09/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Delete and recover packages

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts stores package versions that you publish directly to your feeds and versions saved from upstream sources. Over time, older or unused versions can increase storage usage and make feeds harder to manage. You can delete packages manually or use retention policies to remove older versions automatically. Deleted packages stay in the Recycle Bin for 30 days before Azure Artifacts permanently deletes them.

This article explains how to delete packages, configure retention policies, and restore deleted packages in Azure Artifacts.

## Prerequisites

|    **Product**     |   **Requirements**   |
|--------------------|----------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An [Azure Artifacts feed](../start-using-azure-artifacts.md#create-a-new-feed).<br> - **Permissions:**<br>   &nbsp;&nbsp;&nbsp;&nbsp;- You must be a [Feed Owner](../feeds/feed-permissions.md#feed-roles-and-permissions) to set up retention policies, delete packages and feeds, or restore packages from the recycle bin.<br>   &nbsp;&nbsp;&nbsp;&nbsp;- You must be a [Feed Publisher (Contributor)](../feeds/feed-permissions.md#feed-roles-and-permissions) or higher to unlist, deprecate, or yank packages. |

## Delete packages

In Azure Artifacts, packages are immutable. After you publish a package version to a feed, you can't modify that version or reuse its version number for a new package. This behavior helps preserve package integrity across your feeds and prevents builds or consumers from receiving different content for the same version. Even if you delete the package later, Azure Artifacts keeps the version in the feed's history, and that version number remains permanently reserved.

#### [NuGet](#tab/nuget/)

For NuGet packages, you can either [Unlist](#qa) or [Delete](#qa) a package version. Unlisting hides the package version from search results in Azure Artifacts feeds and on *NuGet.org*, but the package remains in the feed. Deleting a package version moves it to the Recycle Bin and makes it unavailable for installation.

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

1. Run the following command to unlist your package. The **ApiKey** argument is required, but Azure Artifacts treats it as a placeholder value for this operation, so you can use any string:

    ```Command
    nuget.exe delete <PACKAGE_NAME> <PACKAGE_VERSION> -Source <PACKAGE_SOURCE_URL> -ApiKey <ANY_STRING>
    ```

> [!IMPORTANT]
> Azure DevOps interprets the `nuget.exe delete` command as an unlisting operation. Running this command doesn't delete the package from your feed. Instead, it hides the package from search results in Azure Artifacts feeds and on NuGet.org. To delete a package from the feed, use the [REST API](/rest/api/azure/devops/artifactspackagetypes/nuget/delete-package-version) or delete it manually from the web interface.

#### [npm](#tab/npm/)

For npm packages, you can either [Deprecate](#qa) or [Delete](#qa) a package version. Deprecating a package adds a warning message to its metadata so consumers see it when they view or install the package. Deleting a package version moves it to the Recycle Bin and makes it unavailable for installation.

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

1. If you want to delete a package version, run the following command. The `npm unpublish` command removes only the version you specify, not every version of the package:

    ```Command
    npm unpublish <package>@<version>
    ```

#### [Python](#tab/python/)

For Python packages, deleting a package version moves it to the Recycle Bin and makes it unavailable for installation.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you want to delete, and then select **Delete**.

    :::image type="content" source="../media/python-delete-package.png"  alt-text="A screenshot displaying how to delete a Python package in Azure Artifacts." lightbox="../media/python-delete-package.png":::

#### [Maven](#tab/maven/)

For Maven packages, deleting a package version moves it to the Recycle Bin and makes it unavailable for installation.

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you want to delete, and then select **Delete**. 

1. Select **Delete** again to confirm your choice. 

    :::image type="content" source="../media/maven-delete-package.png" alt-text="A screenshot displaying how to delete a Maven package in Azure Artifacts.":::

::: moniker-end

#### [Universal Packages](#tab/universal/)

For Universal Packages, deleting a package version moves it to the Recycle Bin and makes it unavailable for download.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you want to delete, and then select **Delete**.

    :::image type="content" source="../media/universal-package-delete-package.png" alt-text="A screenshot displaying how to delete a Universal Package in Azure Artifacts.":::

#### [Cargo](#tab/cargo/)

For Cargo packages, you can either [Yank](#qa) or [Delete](#qa) a package version. Yanking marks the package version as unavailable for new dependencies without removing it from the feed. Deleting a package version moves it to the Recycle Bin and makes it unavailable for installation.

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the package you wish to delete, and then select **Yank** to mark it as deprecated or **Delete** to move it to the recycle bin.

    :::image type="content" source="../media/delete-cargo-package.png" alt-text="A screenshot displaying how to delete or yank a Cargo package.":::

* * *

## Delete packages permanently

Deleted packages stay in the Recycle Bin for 30 days before Azure Artifacts removes them automatically. During that 30-day window, those packages still count toward your storage usage. If you don't need to restore a package, you can permanently delete it from the Recycle Bin to remove it sooner.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. In the upper-right corner, select **Recycle Bin**.

1. Select the package you want to remove, and then select **Permanently Delete**.

    :::image type="content" source="../media/delete/delete-package-permanently.png" alt-text="A screenshot displaying how to permanently delete a package in Azure Artifacts.":::

1. Select **Permanently Delete** again to confirm your decision.

     :::image type="content" source="../media/delete/delete-package-permanently-confirmation.png" alt-text="A screenshot displaying a confirmation message before you delete a package permanently.":::

## Delete packages automatically with retention policies

As the number of package versions in your feed grows, storage usage can increase rapidly. Retention policies help you manage that growth by automatically removing older package versions that you no longer need.

If you need to keep a package version indefinitely, promote it to a [view](../concepts/views.md). Packages in a view are exempt from retention policies, so these cleanup rules don't delete them. To configure retention policies for your feed, follow these steps:

> [!NOTE]
> Azure Artifacts does not support package demotion. Once a package is promoted to a view, it cannot be reverted back to *@local*.

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, then select the gear icon ![gear icon](../../media/icons/gear-icon.png) in the upper-right corner to access your feed's settings.

1. Select **Feed details**, select **Enable package retention**, and then configure the following settings:

    - **Maximum number of versions per package**: The number of versions to keep for each package.

    - **Days to keep recently downloaded packages**: A package version is deleted only if it wasn't downloaded for the number of days you specify.
    
1. Select **Save** when you're done.

    :::image type="content" source="../media/retention-policy-settings.png" alt-text="A screenshot displaying how to set up retention policies for your feed.":::

::: moniker-end

> [!NOTE]
> When you enable retention policies, Azure Artifacts deletes a package version only when **both** of the following conditions are true:
> - The total number of published versions reaches the **Maximum number of versions per package** limit.
> - A version of that package has not been downloaded within the timeframe specified in **Days to keep recently downloaded packages**.

## Restore deleted packages

Azure Artifacts keeps deleted packages in the Recycle Bin for 30 days before it permanently deletes them. During that time, you can restore a package version if you deleted it by mistake or if a team still depends on it. To restore a package from the Recycle Bin, follow these steps:

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, then select **Recycle Bin**.

1. Select the package you want to restore, and then select **Restore**.

1. Select **Restore** again to confirm your decision.
    
    :::image type="content" source="../media/restore-package.png" alt-text="A screenshot displaying how to restore deleted packages.":::

::: moniker-end

## Q&A

#### What's the difference between deprecating, unlisting, yanking, and deleting a package version?

The action you use depends on the package type and on whether you want to hide a package version, discourage its use, or remove it from the feed:

- **Deprecate** (npm): Adds a warning message to the package metadata. Consumers see the warning when they view or install the package.
- **Unlist** (NuGet): Hides the package version from search results in Azure Artifacts feeds and on NuGet.org, but doesn't remove it from the feed.
- **Yank** (Cargo): Marks the package version as unavailable for new dependencies without deleting it from the feed.
- **Delete**: Moves the package version to the Recycle Bin and makes it unavailable for installation or download. You can restore it for 30 days before Azure Artifacts permanently deletes it.

You can delete package versions from npm, Maven, Python, Cargo, and Universal Packages feeds. Package-type-specific actions such as deprecate, unlist, and yank are available only for the ecosystems that support them.

#### How do I delete all versions of a package?

To delete all versions of a package, select the package in your feed, select **Versions**, and then select the checkbox next to **Version** to select all available versions. Select **Delete**, and then confirm the deletion when prompted.

:::image type="content" source="../media/delete-all-versions.png" alt-text="A screenshot displaying how to delete all versions from a feed.":::

#### What happens to older package versions when I enable retention policies?

When you enable retention policies, Azure Artifacts evaluates existing package versions and newly published versions against the policy settings. Package versions that meet the retention criteria are soft-deleted and moved to the Recycle Bin.

The cleanup job runs once a day. When you enable retention policies for the first time, there can be an initial delay before older package versions are processed.

Deleted packages remain in the Recycle Bin for 30 days before Azure Artifacts permanently deletes them. If you want to stop those packages from counting toward billable storage before the 30-day period ends, permanently delete them from the Recycle Bin by using the web interface or the REST API.

#### What if I don't want to enable retention policies?

Azure Artifacts retention policies are designed to help manage your dependencies and streamline storage cost management. If you don't enable retention policies, you must manage package cleanup manually by monitoring storage usage and deleting package versions as needed. This approach gives you full control over what stays in the feed, but it also requires ongoing maintenance as package versions accumulate.

Azure Artifacts includes 2 GiB of free storage per organization. After you exceed that limit, you can't publish new artifacts until you set up billing and [increase your storage limit](../artifact-storage.md#increase-artifacts-storage-limit).

#### How long does it take for billed storage to update after I delete packages?

Typically, storage consumption should update within 24 hours. However, in some cases, it might take up to 48 hours for the changes to be reflected. The Artifacts usage on your organization's billing page updates once a day, while the Artifact Storage page is updated more frequently, which could lead to a slight discrepancy between the two.

## Related content

- [Limits on package sizes and counts](../reference/limits.md)

- [Monitor Artifacts storage consumption](../artifact-storage.md)

- [Promote packages and manage feed views](../feeds/views.md)
