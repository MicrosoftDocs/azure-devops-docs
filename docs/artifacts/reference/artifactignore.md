---
title: Use the .artifactignore file
description: Use .artifactignore to exclude files and folders when you publish Artifacts
ms.assetid: bbaf8799-d08b-4f1a-9546-4b3b8da40a0b
ms.technology: devops-artifacts
ms.topic: reference
ms.date: 05/04/2020
monikerRange: 'azure-devops'
---

# Use the .artifactignore file

The *.artifactignore* is a text file that controls what files are uploaded when you publish either a [Universal Package](../quickstarts/universal-packages.md) or a Pipeline Artifact. The syntax is similar to that of *.gitignore*.

*.artifactignore* is typically checked into your version control repository in the same directory from which you upload your artifacts.

By using *.artifactignore*, you can avoid copying files into a staging directory before publishing your artifact. This can help reduce the overall pipeline execution time.

```
**/*
!src/MyApp/bin/Release/**.*
```

In the above example, we instruct the universal package task and the pipeline artifact task to ignore all files except the ones in the *src/MyApp/bin/Release* directory. To assure the proper execution, *.artifactignore* file should be checked into the root of the repository.

## Syntax

Refer to the [Git documentation](https://git-scm.com/docs/gitignore) for details about the *.gitignore* syntax. The *.artifactignore* follows the same syntax with some minor limitations.

> [!IMPORTANT]
> The plus sign character `+` is not supported in URL paths and some of the semantic versioning metadata for some package types like Maven.

## Ignored by default

To reduce the chances of publishing the *.git* folder, we automatically ignore this path. You can re-include it by adding the following line to your *.artifactignore* file:

```
!.git
```

## Related articles

- [Package graphs](../concepts/package-graph.md)
- [Package componentization](../collaborate-with-packages.md)
- [Limits on package sizes and counts](limits.md)

## Next steps
- [Get started with Azure Artifacts](../start-using-azure-artifacts.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Follow a package for publish alerts](../how-to/follow-package-notifications.md)