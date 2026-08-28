---
title: Azure Artifacts best practices
description: Learn best practices for publishing, consuming, and managing packages with Azure Artifacts.
ms.service: azure-artifacts
ms.topic: best-practice
ms.date: 08/25/2026
ms.custom: engagement-fy23
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Azure Artifacts best practices

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts gives teams one place to publish, store, share, and consume packages. As your number of feeds, packages, and consumers grows, a few early decisions can make package management either straightforward or harder to maintain. This article brings together the practices that help you keep package restores predictable, release packages with more control, and manage feeds more easily over time.

## Core guidance

- Use one feed in each client configuration file, and enable upstream sources on that feed when you also need public registries or additional internal sources. This approach keeps configuration files simpler and helps your feed provide more predictable restore behavior. For more information, see [What are upstream sources?](upstream-sources.md)

- Treat feed views as release channels. Publish new versions to `@local`, validate them there, and then promote the versions that are ready for broader use to `@prerelease` or `@release`. This approach helps you separate package versions that are still being evaluated from versions that are ready to share with more consumers. For more information, see [What are feed views?](views.md)

- Configure feed permissions deliberately. Decide who can publish packages, who can save packages from upstream sources, and who can consume packages from shared views. Clear role boundaries help protect the feed and reduce accidental changes. For more information, see [Feed roles and permissions](../feeds/feed-permissions.md#feed-roles-and-permissions).

- Enable retention policies before old package versions begin to accumulate. Older versions can build up quickly, especially in active feeds. Retention policies help control storage growth and reduce the effort required to keep feeds manageable. For more information, see [Delete packages automatically with retention policies](../how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies).

## Best practices for package publishers

Following best practices helps ensure consistency, security, and a smooth user experience. Below are key recommendations when publishing packages with Azure Artifacts:

> [!NOTE]
> You must be a **Feed Publisher (Contributor)** or higher to publish packages to a feed. See [Feed roles and permissions](../feeds/feed-permissions.md#feed-roles-and-permissions) for more details.

- **Use a single feed per repository**:

    A feed is an organizational construct that can host multiple package types. While a project can use multiple feeds, it's usually better to keep a repository connected to one primary feed to reduce conflicts and simplify package management. If you need packages from additional feeds or public registries, use upstream sources instead of adding multiple feeds directly to each client configuration.

- **Automatically publish newly created packages**:

    Automating the publication of new packages helps ensure that the latest versions are available to your team or target consumers without manual intervention. When you publish a package, Azure Artifacts adds it to the `@local` view of your feed. See [What are feed views?](views.md) for more details.

- **Enable retention policies to automatically clean up old package versions**:

    Over time, old package versions can accumulate, consume storage, and make feeds harder to manage. Retention policies let you automatically remove older package versions while keeping a specified number of recent versions. This process helps control storage growth and keep feeds easier to maintain. See [Delete packages automatically with retention policies](../how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies) for more details.

- **Use feed views to release packages**:

    Feed views let you share a subset of package versions with consumers. For example, you might promote a package to `@prerelease` for early adopters, and then promote it to `@release` when it's ready for broader use. Packages promoted to a view are exempt from retention policies. See [What are feed views?](views.md) for more details.

- **Ensure proper access permissions for your views**:

    If your packages are consumed by external teams or across organizations, ensure that the `@release` and `@prerelease` views have the appropriate visibility settings. See [Feed views settings](../feeds/feed-permissions.md#feed-views-settings) for more details.

## Best practices for package consumers

When you consume packages, aim to make restores predictable and make it clear where packages come from.

- **Use one feed in your client configuration**:

    To help your feed provide a deterministic restore, ensure that your client configuration references only one feed with upstream sources enabled. This approach keeps your config files simpler and reduces the chance of unexpected package resolution results. For more information, see [What are upstream sources?](upstream-sources.md)

- **Use upstream sources for external packages**:

    If you use packages from external feeds or public registries such as *NuGet.org* or *npmjs.com*, use upstream sources instead of adding those sources separately to every client configuration. This approach gives your team one consistent way to restore both internal and external dependencies through the same feed. For more information, see [What are upstream sources?](upstream-sources.md) and [Set up upstream sources](../how-to/set-up-upstream-sources.md).

    > [!NOTE]
    > You must be a **Feed and Upstream Reader (Collaborator)** or higher to save packages from upstream sources. See [Feed roles and permissions](../feeds/feed-permissions.md#feed-roles-and-permissions) for more details.

- **Order upstream sources intentionally**:

    The feed checks upstream sources sequentially and returns the package from the first source that contains it. If you use multiple upstream sources, order them so the feed resolves packages from the source you intend. This ordering matters most when you use a mix of public registries and internal feeds, or when your organization republishes customized open-source packages internally. For more information, see [Order your upstream sources intentionally](upstream-sources.md#order-your-upstream-sources-intentionally) and [Search order](upstream-sources.md#search-order).

- **Use feed views to control what consumers see**:

    If your team promotes validated package versions through feed views, use those views to share only the package versions that are intended for a given audience. For example, you might keep newly published packages in `@local`, share preview builds through `@prerelease`, and share approved packages through `@release`.

- **Use the feed locator for cross-organization sources in the same tenant**:

    If sources are in the same Microsoft Entra tenant but aren't part of your organization, use the feed locator. The syntax is `azure-feed://<organization>/<projectName>/<feed>@<view>`.

## Related content

- [Limits on package versions and sizes](../reference/limits.md)

- [Monitor Artifacts storage consumption](../artifact-storage.md)

- [What are upstream sources?](upstream-sources.md)
