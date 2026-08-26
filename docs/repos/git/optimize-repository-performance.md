---
title: Optimize repository performance
titleSuffix: Azure Repos
description: Learn how to analyze Git repository health, address common performance issues, and reduce data transferred during clone and fetch operations.
ms.service: azure-devops-repos
ms.custom: support-driven-update, support
ai-usage: ai-assisted
ms.topic: how-to
ms.date: 08/25/2026
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Optimize repository performance

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Repos provides high performance and reliability for most Git repositories. Git performs best when repositories resemble typical source code projects: files are relatively small, changes are incremental and localized, and directories have a well-organized hierarchy. These conditions allow Git to use delta compression and traverse repository trees efficiently.

When a repository doesn't meet these conditions, Git must read and transfer more and larger objects. As a result, common operations, such as cloning, fetching, and browsing, become slower.

This article explains how to analyze repository health, identify and resolve common causes of performance degradation, and reduce the amount of data transferred during clones and fetches.

For the resource limits that apply to repositories, see [Git limits](limits.md).

## Repository health analysis

Start with the built-in [Health and usage](repo-health.md) panel. It summarizes repository size, object counts, reference counts, and other metrics. It also highlights values that are approaching or exceeding recommended thresholds.

This panel might not be available in older versions of Azure DevOps Server. If you don't see it, consider upgrading to a newer version to access built-in repository health metrics.

### CLI tools

For a closer inspection, run the following tools against a full clone of the repository.

#### git-sizer

Use `git-sizer` for a high-level assessment of repository size and complexity. It calculates repository-wide metrics and assigns a level of concern to each one. Download the latest version from the [releases page](https://github.com/github/git-sizer/releases) and follow [Getting started](https://github.com/github/git-sizer/#getting-started) to run the tool and review its output.


#### git repo structure

Use `git repo structure` as an alternative to `git-sizer`. This experimental command is designed to provide similar functionality natively in mainstream Git. For more information, see the [Git repo documentation](https://git-scm.com/docs/git-repo).

#### git survey

Use `git survey` for path-level analysis. Of these CLI tools, it provides the most detailed breakdown. It ranks the top directories and files by object count, on-disk size, and inflated size. The report helps you identify the largest contributors to repository size and target them for cleanup or restructuring.

This command is included in [Git for Windows](https://github.com/git-for-windows/git) and in [Microsoft's fork of Git](https://github.com/microsoft/git). Availability in other Git distributions may vary.

> [!TIP]
> Repository growth is easiest to interpret over time. Run these tools periodically and compare the results to track growth trends and detect problematic patterns early.

## Common repository performance issues and mitigations

The following patterns are the most common contributors to repository growth and degraded performance.

### Large and frequently updated files

Large files reduce Git performance, whether they're text or binary. The impact is greatest when they change frequently. Because each change usually rewrites a large portion of the file, delta compression becomes ineffective and causes Git to store nearly a full snapshot for each revision. As a result, repository size and object count grow quickly.

#### Recommended actions

- Keep large and frequently updated files out of Git. Store them in Git LFS or [Azure Artifacts](../../artifacts/start-using-azure-artifacts.md), and don't commit build outputs or generated content. For more information, see [Work with large files in your Git repo](manage-large-files.md).
- If a large file must stay in Git and changes often, split it into smaller logical pieces that can be versioned independently.
- To stop new large files from entering the repository, enable the [Maximum file size](repository-settings.md#maximum-file-size-policy) policy.

Use Git LFS only for large files that don't diff well. Moving many small files into LFS doesn't improve performance and can make it worse.

### Oversized or flat directory structures

A directory with many direct entries, both files and subdirectories, is stored as one large tree object. Any change inside it makes Git write a new copy of the entire object. This behavior slows down Git operations and increases repository size over time, even when the changes are small.

Keep the number of direct entries in any single directory manageable. A count above a few hundred is a sign that the structure should be rebalanced.

#### Recommended actions

- Organize entries into a balanced, hierarchical layout. Distribute files and subdirectories evenly so that no single directory contains an excessive number of direct entries.
- If you need to store a large amount of generated data in the repository, partition it into a nested layout such as _year/month/day_.
- Keep generated content in a consistent order within each file. Adding or removing a small amount of data should affect only the related lines, not reorder the rest of the file and create a large diff. For example, always sort list items the same way.

### Unused branches

A large number of branches increases load and slows operations.

#### Recommended actions

- Delete stale or unused branches regularly.
- If your repository legitimately needs a very large number of branches, consider enabling [Limited Refs](repo-health.md#number-of-refs).

Both actions reduce the number of refs that clients and the server negotiate during each fetch.

> [!IMPORTANT]
> Azure Repos storage is append-only on the server. The recommendations in this article prevent rapid future growth, but they don't shrink a repository that has already grown. Previously committed files and directories remain on the server. Force-pushing or deleting a branch doesn't reclaim that space. The only way to remove the data completely is to recreate the repository and migrate just the content you need.

## Speed up clones and fetches

No matter how healthy a repository is, clients can reduce the amount of data they download:

- A **shallow clone** limits how much history is fetched, which works well for CI that only needs the latest commits. Repeated fetching from a shallow clone can lead to reduced performance over time.
- A **partial clone** preserves the full history but downloads file contents only when needed.

For more information about both options, see [Git Partial Clone in Azure DevOps](https://devblogs.microsoft.com/devops/git-partial-clone-now-supported-in-azure-devops/).
