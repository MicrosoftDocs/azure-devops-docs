---
title: Build source repositories
description: Build source repositories using Azure Pipelines
ms.topic: reference
ms.assetid: 6DFCFEB4-05EC-4A73-9382-A20D161A53D4
ms.date: 07/07/2020
monikerRange: '>= tfs-2015'
---

# Supported source repositories

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

Azure Pipelines, Azure DevOps Server, and TFS integrate with a number of version control systems. When you use any of these version control systems, you can configure a pipeline to build, test, and deploy your application.

YAML pipelines are a new form of pipelines that have been introduced in Azure DevOps Server 2019 and in Azure Pipelines. YAML pipelines only work with certain version control systems. The following table shows all the supported version control systems and the ones that support YAML pipelines.

| Repository type | Azure Pipelines (YAML) | Azure Pipelines (classic editor) | Azure DevOps Server 2019, TFS 2018, TFS 2017, TFS 2015.4 | TFS 2015 RTM |
|-|-|-|-|-|
| [Azure Repos Git](azure-repos-git.md)  |Yes|Yes|Yes|Yes
| [Azure Repos TFVC](tfvc.md)            |No|Yes|Yes|Yes
| [GitHub](github.md)                    |Yes|Yes|No|No
| [GitHub Enterprise Server](github-enterprise.md)     |Yes|Yes|TFS 2018.2 and higher|No
| [Bitbucket Cloud](bitbucket.md)        |Yes|Yes|No|No
| [Bitbucket Server](on-premises-bitbucket.md) |No|Yes|Yes|Yes
| Subversion                |No|Yes|Yes|No|
