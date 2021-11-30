---
title: Caching NuGet packages
description: Cache NuGet packages in Azure Pipelines
ms.topic: conceptual
ms.author: rabououn
author: ramiMSFT
ms.date: 11/22/2021
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# How to cache NuGet packages to reduce the build time

With pipeline caching, you can reduce your build time by caching your dependencies to be used in later runs. In this article, we will walk through the steps to cache and restore NuGet packages.

## Lock dependencies

To set up the cache task we must first lock our project' dependencies and create a **package.lock.json** file. We will use the hash of the content of this file to generate a unique key for our cache. 

To lock your project's dependencies, set the **RestorePackagesWithLockFile** property in your `csproj` file to true. NuGet restore will generate a lock file **packages.lock.json** at your project's root directory.

```XML
<PropertyGroup>
  <RestorePackagesWithLockFile>true</RestorePackagesWithLockFile>
</PropertyGroup>
```

 Make sure to check in the **packages.lock.json** file to your source code repository.
