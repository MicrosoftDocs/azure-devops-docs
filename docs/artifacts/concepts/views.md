---
title: What are feed views?
description: Learn about feed views and why it's useful for package release
ms.assetid: 28527A09-8025-4615-A746-9D213CF8202C
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 12/23/2020
monikerRange: '>= tfs-2017'
---

# What are feed views?

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

Feed views enable you to share subsets of package-versions with your consumers. A common use of feed views is to share package versions that have been tested and validated but hold back on packages that are still under development and/or didn't meet your quality bar.

## Feed views and upstream sources

Feed views and upstream sources are designed to work together to provide an enterprise-level solution to share and consume packages. 

In order for other Azure Artifacts feeds to use your feed as an upstream source, you must set your feed's view visibility to **members of your organization**, or **members of your Azure Active Directory**, depending on your scenario.

<a name="local"></a>

### The `@local` view

All Artifacts feeds come with three views: `@local`, `@prerelease`, and `@release`. The latter two are suggested views that you can rename or delete as desired. `@local` is the default view that's commonly used in [upstream sources](upstream-sources.md).

The `@local` view contains all packages published directly to the feed (e.g. by `nuget push` or `npm publish`) and all packages [saved from upstream sources](upstream-sources.md#saved-packages). See [package graphs](package-graph.md) to learn how available packages are constructed.

<a name="default-view"></a>

### Default view

Your Artifacts feed must have a default view. When the feed is created, your default view is `@local`. This view is used when other feeds add your feed as an [upstream source](upstream-sources.md). To learn more about why upstream sources require the use of views, check out the [package graphs](package-graph.md) article.

<a name="read-only"></a>

> [!NOTE]
> Feed views are read-only, which means that users connected to a view can only use packages that are published to that view and/or packages previously saved from upstream sources.

## Using feed views to release packages

When creating packages in continuous integration and delivery scenarios, it's important to convey three pieces of information: the **nature** of the change, the **risk** of the change, and the **quality** of the change.

:::image type="content" source="media/release-views-quality-nature.png" alt-text="The semantic version breakdown: 1.2.3 represents the nature of change and beta2 represents the quality of change.":::

### Assess the nature and risk of the change

The nature and the risk of the change both pertain to the _change itself_, that is, what you set out to do, they're both known at the outset of the work. If you're introducing new features, making updates to existing features, or patching bugs; this is the **nature** of your change. If you're still making changes to the API portion of your application; this is one facet of the **risk** of your change. Many NuGet users use [Semantic Versioning](https://semver.org) (SemVer) notation to convey these two pieces of information. SemVer is a widely used standard and does a good job of communicating this type of information.

### Determine and communicate quality of the change

The **quality** of the change isn't generally known until the validation process is complete. This comes after your change is built and packaged. Because of this detail, it's not feasible to communicate the quality in the version number, which is specified during packaging and before validation. There are workarounds to pre-validate (e.g. consume the build's DLLs directly before they're packaged and publish the packages to a "debug" or "CI" environment then validate and republish those packages to a "release" environment) but none that we've seen can truly guarantee that the built package meets the correct quality standard.

:::image type="content" source="media/release-views-flow.png" alt-text="publishing packages workflow":::

`@Release` views enable you to communicate the quality of a package after it's been validated. You create SemVer-compliant packages in CI/CD that communicate the nature and risk of your changes using the package version, then promote the package into a release view to show your consumers that it's of a certain quality (for example, `@prerelease`, `@release`, etc.). So a release view enables your consumers to see only the subset of versions of each package that are tested, validated, and ready to go.

:::image type="content" source="media/release-views-quality-tags.png" alt-text="deployment semantic version":::

## What's next?

- [Promote a package to a view](../feeds/views.md)
- [Understand upstream sources](upstream-sources.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)