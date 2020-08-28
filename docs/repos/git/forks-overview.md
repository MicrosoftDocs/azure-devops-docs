---
title: Forks overview
titleSuffix: Azure Repos     
description: Learn about forks in Azure DevOps Services & TFS  
ms.technology: devops-code-git 
ms.assetid: 36A4986E-BFB8-422B-BFC9-8A0CB75D0603    
ms.topic: overview
ms.date: 06/01/2020
monikerRange: '>= tfs-2018'
---

# Forks overview

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018**

Forks are a great way to isolate experimental, risky, or confidential changes from the original codebase. A fork is a complete copy of a repository, including all files, commits, and (optionally) branches. The new fork acts as if someone cloned the original repository, then pushed to a new, empty repository.
After a fork has been created, new files, folders, and branches are not shared between the repositories unless a pull request carries them along. Once you're ready to share those changes, it's easy to use [pull requests](pull-requests-overview.md) to push the changes back to the original repository.

## The forking workflow

When working with forks, you typically use the following workflow:

1. [Create a fork](forks.md#create-fork)
2. [Clone it locally](forks.md#clone-locally)
3. [Make your changes locally and push them to a branch](forks.md#push-changes)
4. [Create and complete a PR to upstream](forks.md#create-pr)
5. [Sync your fork to the latest from upstream](forks.md#sync-fork)


## Learn more

- [Learn more about forks](forks.md)