---
title: Use the .artifactignore file
description: Decide what files are uploaded when you publish Universal Packages and Pipeline Artifacts with the .artifactignore file.
ms.assetid: bbaf8799-d08b-4f1a-9546-4b3b8da40a0b
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: reference
ms.manager: hdixon
ms.author: midenn
author: mitchdenny
ms.date: 10/26/2018
monikerRange: 'azure-devops'
---

# Use the .artifactignore file

The ```.artifactignore``` is a text file that controls what files are uploaded when you publish either a [Universal Package](../quickstarts/universal-packages.md) or a Pipeline Artifact. The format of the ```.artifactignore``` file matches that of the ```.gitignore``` file. Like the ```.gitignore``` file, the ```.artifactignore``` file would typically be checked into your version control repository in the directory from which you upload your artifacts. By using the ```.artifactignore``` file you can avoid needing to copy files into a staging directory before publishing an artifact which can help reduce overall build and pipeline execution times. Here is an example ```.artifactignore``` file:

```
**/*
!src/MyApp/bin/Release/**.*
```

The above ```.artifactignore``` file instructs the Universal Package task/command-line and Pipeline Artifact tasks to ignore all files except the files in the ```src/MyApp/bin/Release``` directory. In this instance the ```.artifactignore``` file would be checked into the root of the repository.

## Syntax

Refer to the [Git guidance](https://git-scm.com/docs/gitignore) on the ```.gitignore``` syntax, the syntax for ```.artifactignore``` is the same.

## Ignored by default

To reduce the chances of the entire ```.git``` folder being uploaded, we automatically ignore this directory. You can unignore by adding the following to your ```.artifactignore``` file:

```
!.git
```