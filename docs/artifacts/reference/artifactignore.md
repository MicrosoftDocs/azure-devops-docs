---
title: Use the .artifactignore file
description: Use .artifactignore to exclude files and folders when you publish Artifacts
ms.assetid: bbaf8799-d08b-4f1a-9546-4b3b8da40a0b
ms.service: azure-devops-artifacts
ms.topic: reference
ms.date: 01/26/2022
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Use .artifactignore

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

The *.artifactignore* is a text file that controls which files are uploaded when you publish a Universal Package or a Pipeline Artifact.

*.artifactignore* is typically checked into your version control repository and the syntax is similar to that of *.gitignore*.

Using the *.artifactignore* file can help reduce your pipeline execution time by avoiding copying files into your staging directory before publishing your artifacts.

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

