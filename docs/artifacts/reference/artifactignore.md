---
title: Use the .artifactignore file
description: Learn how to use the .artifactignore file to exclude specific files and folders when publishing artifacts in Azure Pipelines.
ms.assetid: bbaf8799-d08b-4f1a-9546-4b3b8da40a0b
ms.service: azure-devops-artifacts
ms.topic: reference
ms.date: 05/19/2025
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Use the *.artifactignore* file

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

The `artifactignore` file works similarly to a `gitignore` file but serves a different purpose. Instead of specifying files to be ignored by Git, it's used in Azure Pipelines to control which files are excluded when publishing pipeline artifacts or Universal Packages. This file can help reduce your pipeline execution and improve its efficiency by preventing unnecessary files from being copied into the staging directory before publishing.

The *artifactignore* file has a similar syntax to that of a *gitignore* file and is typically stored in your version control system. However, unlike *gitignore*, the *artifactignore* file doesn't always need to be in the root of your repository. Its location depends on the path specified in the publish task. If placed incorrectly, the task won't recognize it, leading to unintended results. For example, if the path is *$(System.DefaultWorkingDirectory)/bin/artifacts*, the *artifactignore* file should be placed in the */bin/artifacts* directory.

> [!Note]
> The *artifactignore* file does not work with the [PublishBuildArtifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) task, use the [PublishPipelineArtifact](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1) task instead.

## Syntax

The *.artifactignore* follows the same syntax as the [.gitignore](https://git-scm.com/docs/gitignore) with a few exceptions. The plus sign character `+` isn't supported in URL paths, and certain package types, such as Maven, may have limitations with semantic versioning metadata.

> [!Note]
> By default, the *.gitignore* file is ignored unless you have an *.artifactignore* file. To include it, simply create an empty *.artifactignore* file.

## Example

In this example, all files will be ignored except for those located in the *src/MyApp/bin/Release* directory.

```artifactignore
**/*
!src/MyApp/bin/Release/**.*
```

To include multiple files or folders when everything else is excluded, start with a blanket exclude pattern `(**/*)`, then add one `!` prefixed rule for each file or directory you want to keep. In the example below, the `dist` folder and all its contents along with `package.json` and `.npmrc` are included:

```artifactignore
# Exclude everything
**/*

# Re-include the top-level dist folder, its contents, and the specific files
!dist/
!dist/**
!package.json
!.npmrc
```

> [!IMPORTANT]
> The *.artifactignore* file must be placed in the directory specified in the `targetPath` argument in your [Publish Pipeline Artifacts](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1) task.

## Related content

- [Publish and download pipeline artifacts](../../pipelines/artifacts/pipeline-artifacts.md)

- [Publish and download Universal Packages](../../pipelines/artifacts/universal-packages.md)

- [Artifact sources](../../pipelines/release/artifacts.md)

