---
title: Build source repositories
description: Build source repositories using Azure Pipelines
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 6DFCFEB4-05EC-4A73-9382-A20D161A53D4
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.custom: seodec18
ms.date: 03/06/2019
monikerRange: '>= tfs-2015'
---

# Build source repositories

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

## Configure a repository

At the beginning of a pipeline, the agent downloads files from your repository into a local sources directory.

::: moniker range=">= tfs-2018"
If your pipeline consists of multiple jobs, the agent downloads source files at the beginning of each job. You can specify only one source repository for your entire pipeline.
::: moniker-end

::: moniker range="azure-devops"
**Azure Pipelines:** To specify the source repository, while editing your pipeline, click the **YAML** or **Tasks** tab, then click **Get sources**, and then select the type of repo that contains your source files.
::: moniker-end

::: moniker range="tfs-2018"
**TFS 2018:** To specify the source repository, while editing your pipeline, click the **Tasks** tab, then click **Get sources**, and then select the type of repo that contains your source files.
::: moniker-end

::: moniker range="tfs-2017"
**TFS 2017:** To specify the source repository:

* **TFS 2017.3** Click the **Tasks** tab, then click **Get sources**, and then select the type of repo that contains your source files.

* **TFS 2017 RTM** Click the **Repository** tab, and then select the type of repo that contains your source files.
::: moniker-end

::: moniker range="< tfs-2017"
**TFS 2015:** To specify the source repository, click the **Repository** tab, and then select the type of repo that contains your source files.
::: moniker-end

## Supported repository types

You can choose from the following repository types:

| Repository type | Azure Pipelines (YAML) | Azure Pipelines (classic editor) | Azure DevOps Server 2019, TFS 2018, TFS 2017, TFS 2015.4 | TFS 2015 RTM |
|-|-|-|-|-|
| Azure Repos Git           |Yes|Yes|Yes|Yes|
| Azure Repos TFVC          |No|Yes|Yes|Yes|
| Bitbucket Cloud           |Yes|Yes|No|No|
| Other Git (generic)       |No|Yes|Yes|Yes|
| GitHub                    |Yes|Yes|No|No|
| GitHub Enterprise Server  |Yes|Yes|TFS 2018.2 and higher|No|
| Subversion                |No|Yes|Yes|No|

## Specific repository details

See details about building specific repository types:

- [Build Azure Repos Git repositories](azure-repos-git.md)
- [Build GitHub repositories](github.md)
- [Build TFVC repositories](tfvc.md)

> [!NOTE]
> To build code from Subversion, you must install a Subversion client (`svn`) on your [self-hosted build agents](../agents/agents.md#install) or use [Microsoft-hosted build agents](../agents/hosted.md).

[!INCLUDE [temp](_shared/pipeline-options-for-git.md)]

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Why are some repository types not supported by on-premises installations?

When a pipeline uses a remote, 3rd-party repository host such as Bitbucket Cloud, the repository is configured with webhooks that notify Azure Pipelines Server or TFS when code has changed and a build should be triggered. Since on-premises installations are normally protected behind a firewall, 3rd-party webhooks are unable to reach the on-premises server. As a workaround, you can use the **Other Git** or **External Git** repository type which uses polling instead of webhooks to trigger a build when code has changed.

### How do I reference the directories on the build agent?

Reference directories using build variables such as `$(Build.SourcesDirectory)` and `$(Build.BinariesDirectory)`. To learn more, see [Build variables](../build/variables.md).

[!INCLUDE [temp](../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
