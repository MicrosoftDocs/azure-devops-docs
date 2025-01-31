---
title: Cache NuGet packages to reduce build time
description: How to cache NuGet packages in Azure Pipelines
ms.topic: conceptual
ms.author: rabououn
author: ramiMSFT
ms.date: 06/06/2023
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Cache NuGet packages

**Azure DevOps Services**

With pipeline caching, you can reduce your build time by caching your dependencies to be reused in later runs. In this article, you learn how to use the [Cache task](/azure/devops/pipelines/tasks/reference/cache-v2) to cache and restore your NuGet packages.

> [!NOTE]
> Pipeline caching is not supported in Classic release pipelines.

## Lock dependencies

To set up the cache task, you must first lock your project's dependencies and create a **package.lock.json** file. The hash of the lock file's content will be used to generate a unique cache key.

To lock your project's dependencies, set the **RestorePackagesWithLockFile** property in your *csproj* file to **true**. NuGet restore generates a lock file **packages.lock.json** at the root directory of your project. Make sure you check your **packages.lock.json** file into your source code.

```XML
<PropertyGroup>
  <RestorePackagesWithLockFile>true</RestorePackagesWithLockFile>
</PropertyGroup>
```

## Cache NuGet packages

We need to create a pipeline variable to point to the location of our packages on the agent running the pipeline.

In this example, the content of the **packages.lock.json** is hashed to produce a dynamic cache key. This ensures that every time the file is modified, a new cache key is generated.

:::image type="content" source="media/cache-key-hash.png" alt-text="A screenshot showing how the cache key is generated in Azure Pipelines.":::

```YAML
variables:
  NUGET_PACKAGES: $(Pipeline.Workspace)/.nuget/packages

- task: Cache@2
  displayName: Cache
  inputs:
    key: 'nuget | "$(Agent.OS)" | **/packages.lock.json,!**/bin/**,!**/obj/**'
    restoreKeys: |
       nuget | "$(Agent.OS)"
       nuget
    path: '$(NUGET_PACKAGES)'
    cacheHitVar: 'CACHE_RESTORED'
```

> [!NOTE]
> Caches are immutable, once a cache is created, its contents cannot be modified.

## Restore cache

This task will only run if the `CACHE_RESTORED` variable is false.

```YAML
- task: NuGetCommand@2
  condition: ne(variables.CACHE_RESTORED, true)
  inputs:
    command: 'restore'
    restoreSolution: '**/*.sln'
```

> [!NOTE]
> If you're using Ubuntu 24.04 or higher, you must use the `NuGetAuthenticate` task with the .NET CLI instead of the `NuGetCommand@2` task. See [Support for newer Ubuntu hosted images](/azure/devops/pipelines/tasks/reference/nuget-command-v2#support-for-newer-ubuntu-hosted-images) for more details.

If you encounter the error message "project.assets.json not found" during your build task, you can resolve it by removing the condition `condition: ne(variables.CACHE_RESTORED, true)` from your restore task. By doing so, the restore command is executed, generating your project.assets.json file. The restore task won't download packages that are already present in your corresponding folder.

> [!NOTE]
> A pipeline can contain one or more caching tasks, and jobs and tasks within the same pipeline can access and share the same cache.

## Performance comparison

Pipeline caching is a great way to speed up your pipeline execution. Here's a side-by-side performance comparison for two different pipelines. Before adding the caching task (right), the restore task took approximately 41 seconds. We added the caching task to a second pipeline (left) and configured the restore task to run when a cache miss is encountered. The restore task in this case took 8 seconds to complete.

:::image type="content" source="media/caching-performance.png" alt-text="A screenshot showing the pipeline performance with and without caching.":::

Below is the full YAML pipeline for reference:

```YAML
pool:
  vmImage: 'windows-latest'

variables:
  solution: '**/*.sln'
  buildPlatform: 'Any CPU'
  buildConfiguration: 'Release'
  NUGET_PACKAGES: $(Pipeline.Workspace)/.nuget/packages

steps:
- task: NuGetToolInstaller@1
  displayName: 'NuGet tool installer'

- task: Cache@2
  displayName: 'NuGet Cache'
  inputs:
    key: 'nuget | "$(Agent.OS)" | **/packages.lock.json,!**/bin/**,!**/obj/**'
    restoreKeys: |
       nuget | "$(Agent.OS)"
       nuget
    path: '$(NUGET_PACKAGES)'
    cacheHitVar: 'CACHE_RESTORED'

- task: NuGetCommand@2
  displayName: 'NuGet restore'
  condition: ne(variables.CACHE_RESTORED, true)
  inputs:
    command: 'restore'
    restoreSolution: '$(solution)'

- task: VSBuild@1
  displayName: 'Visual Studio Build'
  inputs:
    solution: '$(solution)'
    platform: '$(buildPlatform)'
    configuration: '$(buildConfiguration)'
```

This approach is also valid for .NET Core projects if your project uses *packages.lock.json* to lock package versions. You can enable this by setting `RestorePackagesWithLockFile` to `True` in your * Csproj* file, or by using the following command: `dotnet restore --use-lock-file`.

## Related articles

- [Pipeline caching](../release/caching.md)
- [Deploy from multiple branches](../release/deploy-multiple-branches.md)
- [Deploy pull request Artifacts](../release/deploy-pull-request-builds.md)