---
title: Build source repositories
description: Build source repositories using Azure Pipelines
ms.topic: reference
ms.assetid: 6DFCFEB4-05EC-4A73-9382-A20D161A53D4
ms.date: 06/28/2019
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
| [Azure Repos Git](azure-repos-git.md)  |Yes|Yes|Yes|Yes|
| [Azure Repos TFVC](tfvc.md)            |No|Yes|Yes|Yes|
| [Bitbucket Cloud](bitbucket.md)        |Yes|Yes|No|No|
| Other Git (generic)                    |No|Yes|Yes|Yes|
| [GitHub](github.md)                    |Yes|Yes|No|No|
| GitHub Enterprise Server  |Yes|Yes|TFS 2018.2 and higher|No|
| Subversion                |No|Yes|Yes|No|

## FAQ

### Why are some cloud version control systems not supported by on-premises installations?

When a pipeline uses a remote, 3rd-party repository host such as Bitbucket Cloud, the repository is configured with webhooks that notify Azure Pipelines Server or TFS when code has changed and a build should be triggered. Since on-premises installations are normally protected behind a firewall, 3rd-party webhooks are unable to reach the on-premises server. As a workaround, you can use the **Other Git** or **External Git** repository type which uses polling instead of webhooks to trigger a build when code has changed.

