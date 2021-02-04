---
ms.technology: devops-collab
ms.topic: conceptual
title: Workplace Messaging Apps with Azure DevOps 
description: Integrate workplace messaging apps like Microsoft Teams and Slack with your Azure DevOps organization
ms.manager: gopinach
ms.author: divais
author: divais
monikerRange: '>= azure-devops-2019'
ms.date: 07/27/2020
---

# Workplace messaging apps 

[!INCLUDE [version](../../includes/version-vsts-plus-azdevserver-2019.md)]


The following integrations help users receive notifications in response to events in Azure DevOps within their workplace messaging apps such as
[Microsoft Teams](https://products.office.com/microsoft-teams/group-chat-software) and [Slack](https://slack.com). 

::: moniker range=">= azure-devops-2020"

Along with receiving notifications, below integrations also help users to complete workflows on Azure DevOps, such as allowing users to approve release deployments and creating work items from their channels. You can use these apps only with a project hosted on Azure DevOps Services.

::: moniker-end

::: moniker range=">= tfs-2017"

## Microsoft Teams

::: moniker-end

::: moniker range=">= azure-devops-2020"

 * [Azure Boards app for Microsoft Teams](../../boards/integrations/boards-teams.md)  
* [Azure Pipelines app for Microsoft Teams](../../pipelines/integrations/microsoft-teams.md)  
* [Azure Repos app for Microsoft Teams](../../repos/integrations/repos-teams.md)  

::: moniker-end

::: moniker range=">= tfs-2017 <= azure-devops-2019"

For projects hosted on Azure DevOps Server 2019, you can use the following integrations to get notifications for events in Azure DevOps.

* [Azure DevOps Server](teams.md)

::: moniker-end

::: moniker range=">= tfs-2017"

## Slack

::: moniker-end

::: moniker range=">= azure-devops-2020"

* [Azure Boards app for Slack](../../boards/integrations/boards-slack.md)
* [Azure Pipelines app for Slack](../../pipelines/integrations/slack.md)  
* [Azure Repos app for Slack](../../repos/integrations/repos-slack.md)

::: moniker-end

::: moniker range=">= tfs-2017 <= azure-devops-2019"

* [Custom app for Slack](slack.md)

::: moniker-end
