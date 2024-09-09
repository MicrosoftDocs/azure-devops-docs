---
title: Use the .artifactignore file
description: Learn how to use the .artifactignore file to exclude specific files and folders when publishing artifacts in Azure Pipelines.
ms.assetid: bbaf8799-d08b-4f1a-9546-4b3b8da40a0b
ms.service: azure-devops-artifacts
ms.topic: reference
ms.date: 09/09/2024
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Use the .artifactignore file

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

The `artifactignore` file works similarly to a `gitignore` file but serves a different purpose. Instead of specifying files to be ignored by Git, it is used in Azure Pipelines to control which files are excluded when publishing pipeline artifacts or Universal Packages. This file can help reduce your pipeline execution and improve its efficiency by preventing unnecessary files from being copied into the staging directory before publishing.

The *artifactignore* file has a similar syntax to that of a *gitignore* file and is typically stored in your version control system. However, unlike *gitignore*, the *artifactignore* file doesn't always need to be in the root of your repository. Its location depends on the path specified in the publish task. If placed incorrectly, the task won't recognize it, leading to unintended results. For example, if the path is *$(System.DefaultWorkingDirectory)/bin/artifacts*, the *artifactignore* file should be placed in the */bin/artifacts* directory.

## Example

In the following example, we will be ignoring all files except the ones in the *src/MyApp/bin/Release* directory.

```artifactignore
**/*
!src/MyApp/bin/Release/**.*
```

> [!IMPORTANT]
> The *.artifactignore* file must be in the directory provided to the `targetPath` argument in your [Publish Pipeline Artifacts](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1) task.

## Syntax

The *.artifactignore* follows the same syntax as the [.gitignore](https://git-scm.com/docs/gitignore) with some minor limitations. The plus sign character `+` is not supported in URL paths and some of the semantic versioning metadata for some package types like Maven.

> [!Note]
> The *.gitignore* file is ignored by default if you don't have an *.artifactignore* file. You can re-include it by creating an empty *.artifactignore* file.

## Related articles

- [Publish and download pipeline artifacts](../../pipelines/artifacts/pipeline-artifacts.md)
- [Limits on package sizes and counts](limits.md)
- [Package componentization](../collaborate-with-packages.md)

