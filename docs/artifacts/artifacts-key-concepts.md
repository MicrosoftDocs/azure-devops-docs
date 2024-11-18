---
title: Key concepts for Azure Artifacts
description: Important concepts for Azure Artifacts
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 01/12/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Key concepts for Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

## Immutability

Once you publish a particular version of a package to a feed, that version number is permanently reserved. You cannot upload a newer revision package with that same version number, or delete it and upload a new package with the same version number.

Many package clients, including NuGet and npm, keep a local cache of packages on your machine. Once a client has cached a particular package version, it will return that copy on future install/restore requests.

If, on the server side, you replace a package version v1 with a new version v2, the client is unable to tell the difference. This can lead to indeterminate build results from different machines. For example, a developer's machine and the build agent might have cached different revisions of the package, leading to unexpected build results.

If a package is broken, buggy, or shares unintended content (like secrets), the best approach is to prepare a fix and publish it as a new version. Then, depending on the severity of the issue and how widely depended-on the package is, you can delete the package to make it unavailable for consumption.

The only way to work around the immutability constraint is to create a new feed and publish the desired package version to the new feed.

> [!NOTE]
> Deleted feeds remain in the recycle bin for 30 days then are deleted permanently. The feed name becomes available once the feed is permanently deleted.

## Indexing

Azure Artifacts maintain an index of all the packages in each feed, which enables fast list operations. List operations on your file shares require the client to open every package and examine its metadata unless your file share has been configured to provide an index that the client understands.

## Well-formedness

Azure Artifacts validate all the published packages to ensure they're well formed. This prevents invalid packages from entering your development and build environments. However, any workflow that publishes malformed packages will break when migrating to Azure Artifacts.

## Recycle Bin

Packages can be deleted manually or by setting up retention policies for your feed. Deleted packages remain in the recycle bin for 30 days then get deleted permanently. Feed owners can recover the deleted packages from the Recycle Bin.

## Related articles

- [Package graphs](./concepts/package-graph.md)
- [Use artifactignore](./reference/artifactignore.md)
- [Packages componentization](./collaborate-with-packages.md)
