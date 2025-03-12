---
title: Azure Artifacts best practices
description: Learn best practices for publishing, consuming, and managing packages with Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 03/11/2025
ms.custom: engagement-fy23
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Azure Artifacts best practices

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Managing software packages can be a complex and time-consuming process, particularly when working with large-scale projects. Azure Artifacts provides a reliable package management solution that streamlines workflows and enhances team collaboration. 

To make the most of it, following best practices is essential to maintaining package integrity and quality. This article highlights key guidelines for creating, publishing, and consuming packages in Azure Artifacts. Whether you're new to Azure Artifacts or an experienced user, these best practices help you optimize your workflow and ensure project success.

## Prerequisites

|    **Product**     |   **Requirements**   |
|--------------------|----------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An [Azure Artifacts feed](../start-using-azure-artifacts.md#create-a-new-feed). |

## Best practices for package publishers

Following best practices helps ensure consistency, security, and a smooth user experience. Below are key recommendations when publishing packages with Azure Artifacts:

> [!NOTE]
> You must be a **Feed Publisher (Contributor)** or higher to publish packages to a feed. See [Manage Permissions](../feeds/feed-permissions.md#permissions-table) for more details.

- **Use a single feed per repository**:

    A feed is an organizational construct for hosting various types of packages. While you can have multiple feeds for a project, it's best to limit a project to referencing just one feed to minimize potential conflicts. If you want to access packages from multiple feeds or public registries, it's recommended to use upstream sources. See [What are upstream sources?](upstream-sources.md) for more details.

- **Automatically publish newly created packages**:

    Automating the publication of new packages ensures that your latest versions are always available to your team or target consumers without manual intervention. When you publish a package, it's added to the `@local` view of your feed. See [What are feed views?](views.md) for more details.

- **Enable retention policies to automatically clean up old package versions**:

    Over time, old package versions can accumulate, consuming unnecessary storage and slowing down queries. Enabling retention policies allows you to automatically remove older package versions while keeping a specified number of recent versions. This not only optimizes client performance but also helps manage storage costs efficiently. See [retention policies](../how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies) for more details.

- **Use feed views to release packages**:

    Feed views can be used to share a subset of package versions with your consumers. For instance, to make a package available to early adopters, you can select it from your feed and promote it to the `@Prerelease` view. Once you've deemed the package to be of sufficient quality for a full release, you can promote it to the `@Release` view. Packages promoted to a view are exempt from retention policies and won't be subject to deletion. See [What are feed views?](views.md) for more details.

- **Ensure proper access permissions for your views**:

    If your packages are consumed by external teams or across organizations, make sure that the `@Release` and `@Prerelease` views have the appropriate visibility settings. See [Feed views settings](../feeds/feed-permissions.md#feed-views-settings) for more details.

## Best practices for package consumers

This section outlines best practices for consuming packages with Azure Artifacts to ensure efficient usage:

- **Use upstream sources for external packages**:

    If you want to use packages from external feeds or public registries such as *NuGet.org* or *npmjs.com*, it's recommended to use upstream sources. See [What are upstream sources?](upstream-sources.md) and [Set up upstream sources](../how-to/set-up-upstream-sources.md) for more details.

    > [!NOTE]
    > You must be a **Feed and Upstream Reader (Collaborator)** or higher to save packages from upstream sources. See [Manage Permissions](../feeds/feed-permissions.md#permissions-table) for more details.

- **Ensure the order of sources reflects your desired package resolution strategy**:

    The feed checks upstream sources sequentially and will return the package from the first source that contains it. Be mindful of the order to ensure your feed resolves packages from the correct source. See [Order your upstream sources intentionally](upstream-sources.md#2-order-your-upstream-sources-intentionally) and [Search order](upstream-sources.md#search-order) for more details.

- **Add external sources using the feed locator**:

    If sources are in the same Microsoft Entra tenant but not part of your organization, you should use the feed locator. The syntax for the feed locator is as follows: `azure-feed://<organization>/<projectName>/<feed>@<view>`.

## Related content

- [Limits on package versions and sizes](../reference/limits.md)

- [Monitor Artifacts storage consumption](../artifact-storage.md)

- [What are upstream sources?](upstream-sources.md)
