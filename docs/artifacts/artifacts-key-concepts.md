---
title: Azure Artifacts key concepts 
description: Understand the key Azure Artifacts concepts, including feeds, views, upstream sources, permissions, immutability, and package storage.
ms.service: azure-artifacts
ms.topic: concept-article
ms.date: 09/11/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Azure Artifacts key concepts 

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts helps teams host, share, and manage packages to streamline collaboration and package distribution. This article introduces the core concepts you need to understand before you publish, consume, or manage packages with Azure Artifacts.

## Feeds

Feeds are organizational constructs that provide a structured way to store, manage, and share packages while controlling access. A feed isn't limited to a single package type and can host various package types such as npm, NuGet, Maven, Python, Cargo, and Universal Packages.

You can scope feeds to a project or to an organization. Only project-scoped feeds hosted in a public project can be made public, and you can't convert organization-scoped feeds to project-scoped feeds. For more information, see [What are Azure Artifacts feeds?](concepts/feeds.md) and [Feed scopes](feeds/project-scoped-feeds.md).

## Feed views

Feed views let you share a selected subset of package versions with consumers. A common use case is sharing only tested and validated package versions while holding back versions that are still in development or don't meet your quality bar.

Every feed includes three views by default: `@local`, `@prerelease`, and `@release`. You can rename or delete the latter two, but `@local` is the default view and contains every package published directly to the feed as well as every package saved from upstream sources. For more information, see [What are feed views?](concepts/views.md)

## Upstream sources

Upstream sources let you store packages from multiple origins in a single feed. This includes packages you publish directly and packages saved from external feeds or public registries such as *NuGet.org* or *npmjs.com*. When you enable an upstream source on your feed, Azure Artifacts automatically saves a copy of any package installed by a collaborator or higher from that source.

For public package managers that support multiple feeds, such as NuGet and Maven, the order in which feeds are queried can vary. For example, NuGet sends parallel queries to all configured feeds and uses the first valid response it receives, which can lead to nondeterministic behavior. Upstream sources remove this uncertainty by searching the feed and its upstream sources in a fixed order: packages published directly to the feed, then packages already saved from an upstream source, and finally packages available from each upstream source, searched in the order they appear in the feed's configuration.

> [!NOTE]
> To take full advantage of the fast lookup feature, reference only one feed in your configuration file. For more information, see [Package graphs in Azure Artifacts](concepts/package-graph.md).

## Permissions and roles

You control access to a feed through feed roles such as Reader, Collaborator, Contributor, and Owner. These roles determine who can view packages, save packages from upstream sources, publish new packages, and manage feed settings. For more information, see [Feed roles and permissions](feeds/feed-permissions.md#feed-roles-and-permissions).

## Immutability

After you publish a specific version of a package to a feed, that version number is permanently reserved. You can't upload a newer revision of the package under the same version number, and you can't delete it and republish a new package with that same version number.

## Retention and the Recycle Bin

You can delete packages manually, or you can configure retention policies so a feed automatically removes older, unpromoted package versions as new ones are published. Deleted packages are placed in the Recycle Bin and remain there for 30 days before Azure Artifacts permanently deletes them. Only a feed owner can restore packages from the Recycle Bin.

You must also be a feed owner to delete a feed. Deleted feeds remain in the Recycle Bin for 30 days before they're permanently deleted, and the feed name becomes available for reuse once that happens. For more information, see [Delete and recover packages](how-to/delete-and-recover-packages.md).

## Indexing

Azure Artifacts maintains an index of every package in each feed, which enables fast list operations. This indexing differs from file shares, where the client must open each package and examine its metadata unless the file share is configured to provide an index the client recognizes.

## Well-formedness

Azure Artifacts validates every published package to ensure its integrity and correctness, which helps prevent invalid packages from entering your development environment. If your existing workflow publishes malformed packages, revise it before you migrate to Azure Artifacts so your packages pass validation.

## Symbols

Symbol files map compiled binaries back to their source code so you can debug native executables. Azure Artifacts provides a dedicated symbol server where you can publish and consume symbol files alongside your packages. For more information, see [Symbols overview](concepts/symbols.md).

## Storage and billing

Azure Artifacts bills storage per organization based on the total size of all packages across every feed. You can monitor consumption at the organization level and set alerts as you approach your storage limits. For more information, see [Monitor Azure Artifacts storage consumption](artifact-storage.md) and [Limits on package sizes and counts](reference/limits.md).

## Related content

- [Azure Artifacts best practices](concepts/best-practices.md)

- [What are Azure Artifacts feeds?](concepts/feeds.md)

- [What are upstream sources?](concepts/upstream-sources.md)
