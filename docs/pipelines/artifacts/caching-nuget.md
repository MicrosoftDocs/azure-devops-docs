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

## Cache NuGet packages

We will need to create a pipeline variable to point to the location of our packages on the agent running the pipeline. 

In this example, the content of the **packages.lock.json** will be hashed to produce a dynamic cache key. This will ensure that every time the file is modified, a new cache key will be generated.

:::image type="content" source="media/cache-key-hash.png" alt-text="Screenshot showing how the cache key is generated in Azure Pipelines.":::

```YAML
variables:
  NUGET_PACKAGES: ''

- task: Cache@2
  displayName: Cache
  inputs:
    key: 'nuget | "$(Agent.OS)" | **/packages.lock.json'
    path: '$(NUGET_PACKAGES)'
    restoreKeys: |
      nuget | "$(Agent.OS)"
      nuget
    cacheHitVar: 'CACHE_RESTORED'
```

## Restore cache

This task will only run if the `CACHE_RESTORED` variable is false.

```YAML
- task: NuGetCommand@2
  condition: ne(variables.CACHE_RESTORED, true)
  inputs:
    command: 'restore'
    restoreSolution: '**/*.sln'
```
