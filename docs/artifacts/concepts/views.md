---
title: What are feed views?
description: Learn what Azure Artifacts feed views are, and how it's useful for package release.
ms.assetid: 28527A09-8025-4615-A746-9D213CF8202C
ms.service: azure-devops-artifacts
ms.topic: overview
ms.date: 12/09/2025
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# What are feed views?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Feed views allow developers to share a specific subset of package versions with consumers. This is useful when you want to provide access to packages that have been tested and validated, while withholding those still under development or that don’t meet your quality standards.

## Default view

Every Artifacts feed includes three views by default: `@local`, `@prerelease`, and `@release`. The latter two are suggested views that you can rename or delete as needed.

`@local` is the default view and is commonly used in upstream sources. You can change the default view in **Feed Settings** > **Views**, but note that this does not enable direct publishing to that view. Packages can only be published to the base feed, where they will be available in the *@Local* view.

The @local view contains:
- All packages published directly to the feed.
- All packages saved from [upstream sources](upstream-sources.md#save-packages-from-upstream-sources).

Feed views are **read-only**, which means that users connected to a view can only use packages that are published to that view and/or packages previously saved from upstream sources. See [package graphs](package-graph.md) to learn how package graphs are constructed.

> [!Note]
> Azure Artifacts only supports publishing and restoring packages from and to the default view: *@Local*.

## Feed views and upstream sources

Feed views and upstream sources are designed to work together to provide an enterprise-level solution for sharing and consuming packages.
To allow other Azure Artifacts feeds to use your feed as an upstream source, you must set your feed's visibility to **members of your organization**, or **members of your Microsoft Entra ID**, depending on your scenario. 

If you choose Microsoft Entra ID, all people in your organization will be able to access your feed, and all feeds in your organization and other organizations associated with the same Microsoft Entra tenant will be able to upstream to your feed.

> [!NOTE]
> All feed views in a public feed are accessible to everyone on the internet.

## Release packages with feed views

When releasing packages, it's important to communicate three key aspects:

When creating release packages, it's important to convey three pieces of information: 

- **Nature of the change**: What type of change is being introduced.

- **Risk of the change**: How disruptive or breaking the change might be.

- **Quality of the change**: Whether the package meets your validation standards.

:::image type="content" source="media/release-views-quality-nature.png" alt-text="A screenshot displaying the semantic version breakdown.":::

#### Nature and risk of the change

Both nature and risk relate to the intent of the change, which is known at the start of development:

- **Nature**: Are you adding new features, updating existing ones, or fixing bugs?

- **Risk**: Does the change affect critical components like APIs or introduce breaking changes?

Most teams use [Semantic Versioning](https://semver.org) (SemVer) to convey this information. SemVer is widely adopted and effective for signaling nature and risk.

```Example
1.2.3
│ │ └─ Patch (bug fixes)
│ └── Minor (new features)
└──── Major (breaking changes)
```

#### Quality of the change

The **quality** of the change isn't generally known until the validation process is complete. This is determined after validation, once the package is built and tested. Because of this, it's not feasible to communicate the quality of the change in the numerical segment of the version number (e.g 1.2.3). 

 While workarounds exist to prevalidate (for example, consuming the build's DLLs directly before they're packaged and publishing the packages to a "debug" or "CI" environment, then validating and republishing those packages to a "release" environment), they don’t guarantee the final package meets quality standards.

:::image type="content" source="media/release-views-flow.png" alt-text="A diagram representing the workflow for publishing packages.":::

Instead, you can use feed views to communicate quality. Using the `@Release` view, you can share only packages that have passed validation and met your quality bar. This allows your consumers to see only the subset of package versions that were tested, validated, and are ready to be consumed. This approach ensures consumers access stable, production-ready packages. See [Promote packages and manage feed views](../feeds/views.md) for more details.

## Related content

- [Manage permissions](../feeds/feed-permissions.md)

- [Set up upstream sources](../how-to/set-up-upstream-sources.md)

- [Delete and recover packages](../how-to/delete-and-recover-packages.md)

