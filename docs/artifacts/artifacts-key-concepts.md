---
title: Key concepts for Azure Artifacts
description: Key concepts for Azure Artifacts within Azure DevOps Services and Team Foundation Server
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: conceptual
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 2/6/2018
monikerRange: '>= tfs-2017'
---

# Key concepts for Azure Artifacts

<!--  ## Feeds Add this later -->

## Immutability

Once you publish a particular version of a package to a feed, that version number is permanently reserved. You cannot upload a newer revision package with that same version number, or delete it and upload a new package at the same version.

Many package clients, including NuGet and npm, keep a local cache of packages on your machine. 
Once a client has cached a particular `package@version`, it will return that copy on future install/restore requests.
If, on the server, you replace `package@version` (rev 1) with a new `package@version` (rev 2), the client is unable to tell the difference. This can lead to indeterminate build results from different machines. For example, a developer's machine and the build agent might have cached different revisions of the package, leading to unexpected build results.

If a package is broken, buggy, or shares unintended content (like secrets), the best response is to prepare a fix and publish it as a new version. Then, depending on the severity of the issue and how widely depended-on the package is, you can delete the package to make it unavailable for consumption.

The only way to work around the immutability constraint is to create a new feed and publish the desired package version to the new feed.

## Recycle Bin

If you've deleted/unpublished an npm package, NuGet package, or Maven artifact from Azure DevOps Services, builds that depend on that package will start to fail.  You won't be able to repush that package to the feed because of [immutability](#immutability).  In order to recover the package and have builds start working again, you can recover it from the Recycle Bin.

Once in the Recycle Bin, you will see any packages that have been deleted from the current feed in the **past 30 days**.

