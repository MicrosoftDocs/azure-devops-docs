---
title: Git limits
titleSuffix: Azure Repos
description: Resource limits applied to Git operations
ms.assetid: 
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 05/26/2021
monikerRange: 'azure-devops'
ms.subservice: azure-devops-repos-git
---


# Git limits

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

We impose a few resource limits on Git repositories in Azure Repos.
Our goal is to ensure reliability and availability for all customers.
Also, by keeping the amount of data and number of pushes reasonable, you can expect to have a better overall experience with Git.

Git participates in [rate limiting](../../integrate/concepts/rate-limits.md) along with the rest of Azure DevOps.
In addition, we impose limits on the total size of repositories and pushes.

## Repository size

Repositories should be no larger than 250GB. 
To retrieve the size of your repository, execute "git count-objects -vH" in a command prompt, and look for the entry called "size-pack":

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

We recommend keeping your repository below 10GB for optimal operation. 
If your repository exceeds this size consider using [Git-LFS](manage-large-files.md), [Scalar](https://github.com/microsoft/Scalar), or [Azure Artifacts](../../artifacts/index.yml) to refactor your development artifacts.

Azure DevOps continuously reduces the overall size and increases the efficiency of Git repositories by consolidating similar files into packs. 
For repositories nearing 250 GB, the internal limit on pack files can be reached before the optimization process completes.
Any user attempting to write to the repository will see the following error message: “The Git pack file limit has been reached, write operations are temporarily unavailable while the repository is updated.“ 
Write operations will be restored immediately after the job completes.

## Push size

Very large pushes use up a lot of resources, blocking or slowing other parts of the service.
Such pushes often don't map to normal software development activities.
Someone may have inadvertently checked in build outputs or a VM image, for example.
For these reasons and more, pushes are limited to 5GB at a time.

There's one exception where large pushes are normal.
When you migrate a repository from another service into Azure Repos, it comes in as a single push.
We don't intend to block imports, even of very large repositories.
If the repository is more than 5GB, then you must use the web to [Import the repository](import-git-repository.md) instead of the command line.

### Push size for LFS objects
[Git LFS](https://git-lfs.github.com/) doesn't count towards the 5GB repo limit. The 5GB limit is only for files in the actual repo, not blobs stored as part of LFS. If you get failing pushes on the 5GB limit verify your ````.gitattributes```` file includes the extensions of the files you mean to track using LFS and that this file was saved and staged before you staged the large files to be tracked.
