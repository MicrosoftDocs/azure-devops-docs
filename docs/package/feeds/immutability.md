---
title: Understand immutability of packages
description: Immutable packages lead to predictable builds in VSTS or Team Foundation Server
ms.assetid: d8a522c4-cc96-4e41-9fdd-5e55a7ea8345
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 09/01/2017
monikerRange: '>= tfs-2017'
---
 

# Understand immutability of packages

**VSTS | TFS 2017**

Once you publish a particular version of a package to a feed, that version number is permanently reserved. 
You cannot upload a newer revision package with that same version number, or delete it and upload a new package at the same version.

In NuGet, trying to publish a `package@version` to a feed that already contains that `package@version` returns a "409 conflict" exception.

<!-- In npm, trying to publish a `package@version` to a feed that already contains that `package@version` returns a 403 error: "You cannot publish over the previously published version `version`." -->

## Package caching requires immutability
Many package clients, including NuGet<!--  and npm -->, keep a local cache of packages on your machine. 
Once a client has cached a particular `package@version`, it will return that copy on future install/restore requests.
If, on the server, you replace `package@version` (rev 1) with a new `package@version` (rev 2), the client is unable to tell the difference.
This can lead to indeterminate build results from different machines.
For example, a developer's machine and the build agent might have cached different revisions of the package, leading to unexpected build results.

## Dealing with broken and incorrect packages

If a package is broken, buggy, or shares unintended content (like secrets), the best response is to prepare a fix and publish it as a new version.
Then, depending on the severity of the issue and how widely depended-on the package is, you can [unlist or delete](../nuget/unlist-delete.md) the package to make it unavailable for consumption.
