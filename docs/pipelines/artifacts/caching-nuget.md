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

## Locate the cached directory

With Microsoft hosted agents, each time you run your pipeline, a new agent is assigned for each job in your pipeline. To find the location of the cached directory, add the following PowerShell task to your YAML pipeline. The script will find the location of the cached directory and store it in a pipeline variable `NUGET_PACKAGES`.

```YAML
- task: PowerShell@2
  inputs:
    targetType: 'inline'
    script: |
      $cache = dotnet nuget locals global-packages -l
       
      Write-Host '##vso[task.setvariable variable=NUGET_PACKAGES]$cache'
```

## Add the Cache task

Add the following task to your YAML pipeline:

```YAML
- task: Cache@2
  inputs:
    key: 'nuget | "$(Agent.OS)" | **/packages.lock.json'
    path: '$(NUGET_PACKAGES)'
    restoreKeys: |
      nuget | "$(Agent.OS)"
      nuget
  displayName: Cache NuGet packages
```