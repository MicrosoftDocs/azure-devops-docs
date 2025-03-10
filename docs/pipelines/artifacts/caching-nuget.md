---
title: Cache NuGet packages
description: Learn how to cache NuGet packages in Azure Pipelines
ms.topic: how-to
ms.author: rabououn
author: ramiMSFT
ms.date: 03/10/2025
monikerRange: ">= azure-devops-2020"
"recommendations": "true"
---

# Cache NuGet packages

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

Pipeline caching helps reduce build time by storing dependencies for reuse in future runs. In this article, you learn how to use the [Cache task](/azure/devops/pipelines/tasks/reference/cache-v2) to cache and restore your NuGet packages.

> [!NOTE]
> Pipeline caching is not supported in Classic release pipelines.

## Prerequisites

| **Product**       | **Requirements** |
|-------------------|------------------|
| **Azure DevOps**  | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> - **Permissions:**<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project, you must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).  |


## Lock dependencies

Before setting up the cache task, you need to lock your project's dependencies and generate a **package.lock.json** file. The unique cache key is derived from the hash of the content of this lock file to ensure consistency across builds.

To lock your project's dependencies, add the **RestorePackagesWithLockFile** property to your *csproj* file and set it to **true**. When you run `nuget restore`, it will generate a **packages.lock.json** file in your project's root directory. Make sure you check your **packages.lock.json** file into your source code.

```XML
<PropertyGroup>
  <RestorePackagesWithLockFile>true</RestorePackagesWithLockFile>
</PropertyGroup>
```

## Cache NuGet packages

To cache NuGet packages, define a pipeline variable that points to the location of the packages on the agent running the pipeline.

In the example below, the content of the **packages.lock.json** is hashed to generate a dynamic cache key. This ensures that whenever the file changes, a new cache key is created.

:::image type="content" source="media/cache-key-hash.png" alt-text="A screenshot displaying how the cache key is generated in Azure Pipelines.":::

```YAML
variables:
  NUGET_PACKAGES: $(Pipeline.Workspace)/.nuget/packages

- task: Cache@2
  displayName: Cache v2 task 
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

The following task will only run if the `CACHE_RESTORED` variable is **false**. This means that if a cache hit occurs (i.e., the packages are already available in the cache), the restore step is skipped to save time and resources. If no cache is found, the restore command runs to download the necessary dependencies.

```YAML
- task: NuGetCommand@2
  condition: ne(variables.CACHE_RESTORED, true)
  inputs:
    command: 'restore'
    restoreSolution: '**/*.sln'
```

> [!NOTE]
> If you're using Ubuntu 24.04 or later, you must use the `NuGetAuthenticate` task with the .NET CLI instead of the `NuGetCommand@2` task. See [Support for newer Ubuntu hosted images](/azure/devops/pipelines/tasks/reference/nuget-command-v2#support-for-newer-ubuntu-hosted-images) for more details.

#### Handle "project.assets.json not found" errors

If you encounter the error *"project.assets.json not found"* during your build task, remove the condition `condition: ne(variables.CACHE_RESTORED, true)` from your restore task. This ensures the restore command runs and generates the *project.assets.json* file. The restore task will not re-download packages already present in your corresponding folder.

> [!NOTE]
> A pipeline can include multiple caching tasks, and jobs and tasks within the same pipeline can access and share the same cache.

## Performance comparison

Pipeline caching significantly reduces the time required to restore dependencies, leading to faster builds. The following comparison illustrates the impact of caching on pipeline execution time for two different pipelines:

- **Without caching (right)**: The restore task took approximately 41 seconds. 

- **With caching (left)**: We added the caching task to a second pipeline and configured the restore task to run only when a cache miss occurs. The restore task in this case completed in just 8 seconds.

:::image type="content" source="media/caching-performance.png" alt-text="A screenshot displaying the pipeline performance with and without caching.":::

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

This approach also applies to .NET Core projects, provided your project uses *packages.lock.json* to lock package versions. You can enable this by setting `RestorePackagesWithLockFile` to `True` in your * Csproj* file, or by running the following command: `dotnet restore --use-lock-file`.

## Related content

- [Pipeline caching](../release/caching.md)

- [Deploy pull request Artifacts (Classic)](../release/deploy-pull-request-builds.md)

- [Deploy to different stages (Classic)](../release/deploy-multiple-branches.md)
