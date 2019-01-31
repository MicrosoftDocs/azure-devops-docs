---
title: Git limits
titleSuffix: Azure Repos
description: Resource limits applied to Git operations
ms.assetid: 
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 04/23/2018
monikerRange: 'azure-devops'
---


# Git limits

#### Azure Repos

We impose a few resource limits on Git repositories in Azure Repos.
Our goal is to ensure reliability and availability for all customers.
Also, by keeping the amount of data and number of pushes reasonable, you can expect to have a better overall experience with Git.

Git participates in [rate limiting](../../integrate/concepts/rate-limits.md) along with the rest of Azure DevOps.
In addition, we impose limits on the total size of repositories and pushes.

## Repository size

Repositories should generally be no larger than 10GB.
You can run `git count-objects -vH` in a command prompt, and look for the entry called "size-pack" to determine how large your repository is:

```
D:\my-repo>git count-objects -vH

count: 482
size: 551.67 KiB
in-pack: 100365
packs: 25
size-pack: 642.76 MiB   <-- size of repository
prune-packable: 83
garbage: 0
size-garbage: 0 bytes
```

In uncommon circumstances, repositories may be larger than 10GB.
For instance, the Windows repository is at least 300GB.
For that reason, we do not have a hard block in place.
If your repository grows beyond 10GB, consider using [Git-LFS](manage-large-files.md), [GVFS](https://gvfs.io), or [Azure Artifacts](../../artifacts/index.md) to refactor your development artifacts.

## Push size

Very large pushes use up a lot of resources, blocking or slowing other parts of the service.
Such pushes often don't map to normal software development activities.
Someone may have inadvertently checked in build outputs or a VM image, for example.
For these reasons and more, pushes are limited to 5GB at a time.

There's one exception where large pushes are normal.
When you migrate a repository from another service into Azure Repos, it comes in as a single push.
We don't intend to block imports, even of very large repositories.
If the repository is more than 5GB, then you must use the web to [Import the repository](import-git-repository.md) instead of the command line.
