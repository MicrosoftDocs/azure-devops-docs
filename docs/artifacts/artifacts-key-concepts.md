---
title: Azure Artifacts key concepts 
description: Understand the key concepts in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 02/12/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Azure Artifacts key concepts 

[!INCLUDE [version-gt-eq-2020](../includes/version-gt-eq-2020.md)]

Azure Artifacts enable developers to host and share various types of packages to streamline collaboration and package distribution. This article covers the key concepts when working with Azure Artifacts.

## Feeds

Azure Artifacts feeds are organizational constructs that provide a structured way to store, manage, and share packages while controlling access. Feeds are not limited to specific package types and can host various types, such as npm, NuGet, Maven, Python, Cargo, and Universal Packages.
Feeds can be scoped to a project or an organization. However, only project-scoped feeds can be set as public, and organization-scoped feeds cannot be converted to project-scoped feeds.

## Feed views

Feed views allow developers to share a selected subset of package versions with their consumers. A common use case is sharing only tested and validated package versions while holding back those still in development or not meeting a specific quality standard.

By default, feeds include three views: `@local`, `@prerelease`, and `@release`. The latter two can be renamed or deleted as needed. `@local` is the default view, commonly used in upstream sources, and it contains all packages published directly to the feed as well as those saved from upstream sources.

## Upstream sources

Upstream sources allow you to store packages from multiple sources within a single feed. This includes both packages you publish and those saved from external feeds and public registries such as NuGet.org or npmjs.com. When an upstream source is enabled on your feed, Azure Artifacts automatically saves a copy of any package installed by a collaborator or higher from the upstream source.

For public package managers that support multiple feeds, such as NuGet and Maven, the order in which feeds are queried can vary. For example, NuGet sends parallel queries to all configured feeds and selects the first valid response it receives, which can sometimes lead to nondeterministic behavior.

Upstream sources help mitigate this nondeterministic behavior by searching the feed and its upstream sources in the following order:

1. Packages published directly to the feed.

1. Packages saved from an upstream source.

1. Packages available from upstream sources. Each upstream source is searched in the order they appear in the feed's configuration.

> [!NOTE]
> To take full advantage of the fast lookup feature, we recommend that you include only one feed in your configuration file.

## Immutability

Once you publish a specific version of a package to a feed, that version number is permanently reserved. You cannot upload a newer revision of the package with that same version number, nor can you delete it and upload a new package with the same version number.

## Indexing

Azure Artifacts maintain an index of all the packages in each feed, which enables fast list operations. This is different from file shares, where the client must open each package and examine its metadata unless the file share has been configured to provide an index that the client recognizes.

## Well-formedness

Azure Artifacts validates all the published packages to ensure integrity and correctness. This helps prevent invalid packages from entering your development environment. If you have a workflow that publishes malformed packages and plan to migrate to Azure Artifacts, it’s important to revise your workflow during the transition to ensure your packages pass the validation checks in Azure Artifacts.

## Recycle Bin

Packages can be deleted manually or by setting up retention policies for your feed. Deleted packages remain in the recycle bin for 30 days before they are automatically deleted permanently. Only feed owners can recover the deleted packages from the recycle bin.

You must be a feed owner also to delete feeds. Deleted feeds remain in the recycle bin for 30 days before they are automatically deleted permanently. Once the feed is permanently deleted, the feed name becomes available.

## Related content

- [What are feeds?](./concepts/feeds.md)

- [Feed views](./concepts/views.md)

- [Azure Artifacts Upstream Sources](./concepts/upstream-sources.md)

- [Delete and recover packages](./how-to/delete-and-recover-packages.md)
