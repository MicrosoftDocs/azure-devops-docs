---
title: Best practices when working with Azure Artifacts
description: Best practices to publish and consume packages from Artifacts feeds
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 03/09/2021
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Azure Artifacts: best practices

This article contains some general guidance and best practices when it comes to producing and consuming packages in Azure Artifacts.

## Create and publish packages

Follow these guidelines and best practices when creating or publishing your packages.

- **Each repository should only reference one feed**:

    A feed is an organizational construct to host packages. You can have multiple feeds for a project but a particular project should only reference one feed. If you want to use packages from multiple feeds, use [upstream sources](upstream-sources.md) to access packages from multiple feeds through a single upstream.

- **Automatically publish newly created packages to your feed**:

    This will populate the `@local` view of your feed. See [Feed views](views.md) to learn more about feed views and upstream sources.

- **Enable retention policies to automatically clean up old package versions**:

    Deleting old package versions improves client performance and releases storage space. You can choose how many versions of a package to retain when setting up your [retention policy](../how-to/delete-and-recover-packages.md#automatically-delete-old-package-versions-with-retention-policies).

- **Promote your package to the correct view**:

    When a package is ready for early adopters, select that package from within your feed and promote it to the `@prerelease` view. When the package is deemed of sufficient quality to be released, promote that package to the `@release` view.
    
    Promoting package versions to a view ensures they won't be deleted by retention policies. For more information on views, check out the [Feed views](views.md) article.

- **If external teams are consuming your packages, ensure that `@release` and `@prerelease` views are visible across the organizations**:

    If these views aren't visible, teams won't have access to your packages.

## Consume packages

Follow these guidelines and best practices when consuming packages from feeds and upstream sources.

- **Configure upstream sources for your feed**:

    If you want to consume packages from public registries such as NuGet.org or npmjs.com, you should consider adding upstream sources to your feed.
    
    For more information, see [Understand upstream sources](upstream-sources.md) and [how to configure upstream sources](../how-to/set-up-upstream-sources.md).

- **Sources not in your organization but in the same AAD tenant should be added using the feed locator**:

    The feed locator uses the following syntax: `azure-feed://<organization>/<projectName>/<feed>@<view>`

- **Ensure that the order of the sources matches your desired package resolution order**:

    The feed will check each upstream in order, returning the package from the first source that can provide it.

- **To avoid confusion, we recommend placing any public upstreams FIRST in your resolution order**:

    This prevents other sources from overriding well-known packages with altered or incompatible versions.

## Next steps

> [!div class="nextstepaction"]
> [Get started with Azure Artifacts](../start-using-azure-artifacts.md)
> [Artifacts storage breakdown](../artifact-storage.md)
> [What are feeds?](feeds.md)
> [What are feed views?](views.md)
> [Understand upstream sources](upstream-sources.md)
