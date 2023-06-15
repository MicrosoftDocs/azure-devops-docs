---
title: What are feed views?
description: Learn about feed views and why it's useful for package release
ms.assetid: 28527A09-8025-4615-A746-9D213CF8202C
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 04/07/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# What are feed views?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Feed views enable developers to share a subset of package-versions with their consumers. A common use of feed views is to share package versions that have been tested and validated but hold back on packages that are still under development and/or didn't meet a certain quality bar.

## Default view

All Artifacts feeds come with three views: `@local`, `@prerelease`, and `@release`. The latter two are suggested views that you can rename or delete as desired. `@local` is the default view that's commonly used in upstream sources.

The `@local` view contains all packages published directly to the feed and all packages [saved from upstream sources](upstream-sources.md#save-packages-from-upstream-sources).

Feed views are read-only, which means that users connected to a view can only use packages that are published to that view and/or packages previously saved from upstream sources. See [package graphs](package-graph.md) to learn how available packages are constructed.

> [!NOTE]
> All feed views in a public project are accessible to everyone on the internet.

## Feed views and upstream sources

Feed views and upstream sources are designed to work together to provide an enterprise-level solution to share and consume packages.
In order for other Azure Artifacts feeds to use your feed as an upstream source, you must set your feed's visibility to **members of your organization**, or **members of your Azure Active Directory**, depending on your scenario. If you choose the latter, all people in your organization will be able to access your feed. In addition, all feeds in your organization and other organizations associated with the same Azure Active Directory tenant will be able to upstream to your feed.

## Release packages with feed views

When creating release packages, it's important to convey three pieces of information: the **nature** of the change, the **risk** of the change, and the **quality** of the change.

:::image type="content" source="media/release-views-quality-nature.png" alt-text="The semantic version breakdown: 1.2.3 represents the nature of change and beta2 represents the quality of change.":::

### Nature and risk of the change

The nature and the risk of the change both pertain to the _change itself_, that is, what you set out to do, they're both known at the outset of the work. If you're introducing new features, making updates to existing features, or patching bugs; this is the **nature** of your change. If you're still making changes to the API portion of your application; this is one facet of the **risk** of your change. Many NuGet users use [Semantic Versioning](https://semver.org) (SemVer) notation to convey these two pieces of information. SemVer is a widely used standard and does a good job of communicating this type of information.

### Quality of the change

The **quality** of the change isn't generally known until the validation process is complete. This comes after your change is built and packaged. Because of this detail, it's not feasible to communicate the quality of the change in the numerical segment of the version number (e.g 1.2.3). There are workarounds to pre-validate (e.g. consume the build's DLLs directly before they're packaged and publish the packages to a "debug" or "CI" environment then validate and republish those packages to a "release" environment) but none that we've seen can truly guarantee that the built package will meet the correct quality standard.

:::image type="content" source="media/release-views-flow.png" alt-text="publishing packages workflow":::

You can use the `@Release` view as a means to convey the quality of your changes. Using the `@Release` view, you can share packages that met your quality bar and allow your consumers to only see the subset of package versions that were tested, validated, and are ready to be consumed.

:::image type="content" source="media/release-views-quality-tags.png" alt-text="deployment semantic version":::

## Related articles

- [Promote a package to a view](../feeds/views.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Configure permissions](../feeds/feed-permissions.md)
