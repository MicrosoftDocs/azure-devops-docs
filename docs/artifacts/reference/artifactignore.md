---
title: Use the .artifactignore file
description: Use .artifactignore to exclude files and folders when you publish Artifacts
ms.assetid: bbaf8799-d08b-4f1a-9546-4b3b8da40a0b
ms.technology: devops-artifacts
ms.topic: reference
ms.date: 01/11/2022
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Use .artifactignore

The *.artifactignore* is a text file that controls what files are uploaded when you publish a Universal Package or a Pipeline Artifact.

*.artifactignore* is typically checked into your version control repository and the syntax is similar to that of *.gitignore*.

Using the *.artifactignore* file can help reduce your pipeline execution time by avoiding copying files into your staging directory before publishing your artifacts.

## Example

In the following example, we will be ignoring all files except the ones in the *src/MyApp/bin/Release* directory.

```
**/*
!src/MyApp/bin/Release/**.*
```

> [!TIP]
> Make sure you check your *.artifactignore* file into the root of your repository.

## Syntax

The *.artifactignore* follows the same syntax as the [.gitignore](https://git-scm.com/docs/gitignore) with some minor limitations.

> [!IMPORTANT]
> The plus sign character `+` is not supported in URL paths and some of the semantic versioning metadata for some package types like Maven.

## Related articles

- [Package graphs](../concepts/package-graph.md)
- [Package componentization](../collaborate-with-packages.md)
- [Limits on package sizes and counts](limits.md)
