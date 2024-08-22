---
title: Git limits
titleSuffix: Azure Repos
description: Resource limits applied to Git operations
ms.assetid: 
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 08/22/2024
monikerRange: 'azure-devops'
ai-usage: ai-assisted
ms.subservice: azure-devops-repos-git
---


# Git limits

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

We impose resource limits on Git repositories in Azure Repos to ensure reliability and availability for all customers. By keeping data sizes and the number of pushes reasonable, you can expect a better overall experience with Git.

Git participates in [rate limiting](../../integrate/concepts/rate-limits.md) along with the rest of Azure DevOps Services. Additionally, we impose limits on the total size of repositories, pushes, and the length of file and directory paths.

## Repository size

Repositories should be no larger than 250 GB. To retrieve the size of your repository, execute `git count-objects -vH` in a command prompt, and look for the entry called "size-pack":

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

We recommend keeping your repository below 10 GB for optimal performance. If your repository exceeds this size, consider using [Git-LFS](manage-large-files.md), [Scalar](https://github.com/microsoft/Scalar), or [Azure Artifacts](../../artifacts/index.yml) to manage your development artifacts.

Azure Repos continuously reduces the overall size and increases the efficiency of Git repositories by consolidating similar files into packs. For repositories nearing 250 GB, the internal limit on pack files can be reached before the optimization process completes. When this limit is reached, users attempting to write to the repository see the following error message: "The Git pack file limit has been reached, write operations are temporarily unavailable while the repository is updated." Write operations get restored immediately after the optimization job completes.

Files should be no larger than 100 MB. This limit helps ensure optimal performance and reliability of the Git repository. Large files can significantly slow down repository operations, such as cloning, fetching, and pushing changes. If you need to store large files, consider using [Git LFS (Large File Storage)](https://git-lfs.github.com/), which is designed to handle large files efficiently by storing them outside the main repository and only keeping references to them within the repository. This approach helps maintain the performance and manageability of your Git repository.

## Push size

Large pushes consume significant resources, blocking or slowing other parts of the service. These pushes often don't align with typical software development activities and might include items like build outputs or VM images. Therefore, pushes are limited to 5 GB at a time.

There's one exception where large pushes are normal: migrating a repository from another service into Azure Repos. Such migrations come in as a single push, and we don't intend to block imports, even for large repositories. If the repository exceeds 5 GB, you must use the web to [import the repository](import-git-repository.md) instead of the command line.

### Push size for LFS objects

[Git LFS](https://git-lfs.github.com/) doesn't count towards the 5-GB repository limit. The 5-GB limit applies only to files in the actual repository, not to blobs stored with LFS. If you encounter failing pushes due to the 5-GB limit, ensure your `.gitattributes` file includes the extensions of the files you intend to track with LFS. Ensure this file is saved and staged before you stage the large files to be tracked.

## Path length

Azure Repos enforces a push policy that limits the length of paths in a Git repository by rejecting pushes that introduce excessively long paths. Unlike the [Maximum path length policy](repository-settings.md#maximum-path-length-policy), you can't disable or override it, as it enforces the maximum values supported by our platform.

The following limits are enforced:
- Total path length: 32,766 characters
- Path component length (folder or file name): 4,096 characters

This policy only affects newly introduced paths in a push. It doesn't apply if you change an existing file, but it does apply if you create a new file, rename, or move an existing one.

If any commits being pushed introduce paths that exceed these limits, the push is rejected with one of the following error messages:
- `VS403729: The push was rejected because commit '6fbe8dc700fdb33ef512e2b9e35436faf555de76' contains a path, which exceeds the maximum length of 32766 characters.`
- `VS403729: The push was rejected because commit 'd23277abfe2d8dcbb88456da880de631994dabb4' contains a path component, which exceeds the maximum length of 4096 characters.`
