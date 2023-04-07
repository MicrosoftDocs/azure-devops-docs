---
title: Best practices when working with Azure Artifacts
description: Best practices when publishing and consuming packages with Azure Artifacts
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 04/07/2023
ms.custom: contperf-fy23, engagement-fy23
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Azure Artifacts: best practices

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Managing software packages can be a complex and time-consuming process, particularly when working with large-scale projects. Fortunately, Azure Artifacts provides a robust platform for package management that can help streamline the process and improve collaboration among development teams. However, to get the most out of Azure Artifacts, it's essential to follow best practices that ensure the integrity and quality of your packages. In this article, we'll cover some of the most important best practices for producing, consuming, and managing packages in Azure Artifacts. Whether you're a seasoned developer or just starting with Azure Artifacts, these tips will help you optimize your workflow and ensure the success of your projects.

## Create and publish packages

Creating and publishing packages is a critical step in any package management workflow. In this section, we'll cover best practices for creating and publishing packages in Azure Artifacts.

- **Each repository should only reference one feed**:

    A feed is a fundamental organizational structure for hosting packages. While you can have multiple feeds for a project, it's best to limit a project to referencing just one feed. If you want to use packages from multiple feeds, it's recommended to use [upstream sources](upstream-sources.md). This enables you to access packages from multiple feeds and public registries.

- **Automatically publish newly created packages to your feed**:

    This will update the `@local` view of your feed with the new packages. See [Feed views](views.md) to learn more about feed views and upstream sources.

- **Enable retention policies to automatically clean up old package versions**:

    By deleting older package versions, you can optimize client performance and free up storage space. When setting up your [retention policies](../how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies) you have the flexibility to select the number of versions of a package to keep. This allows you to easily manage package versions and improve your package management workflow.

- **Promote your package to the correct view**:

    To make a package available to early adopters, you can select it from your feed and promote it to the @prerelease view. Once you've deemed the package to be of sufficient quality for a full release, you can promote it to the @release view. By promoting package versions to a view, you can prevent them from being deleted by retention policies. To learn more about feed views, check out the [Feed views](views.md) article.

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
