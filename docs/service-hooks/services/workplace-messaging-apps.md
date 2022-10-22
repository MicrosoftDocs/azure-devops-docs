---
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
title: Workplace Messaging Apps with Azure DevOps 
description: Integrate workplace messaging apps like Microsoft Teams and Slack with your Azure DevOps organization
ms.manager: gopinach
ms.author: divais
author: divais
monikerRange: '<= azure-devops'
ms.date: 04/04/2022
---

# Workplace messaging apps 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The following integrations help users receive notifications in response to events in Azure DevOps within their workplace messaging apps such as
[Microsoft Teams](https://products.office.com/microsoft-teams/group-chat-software) and [Slack](https://slack.com). 

Along with receiving notifications, below integrations also help users to complete workflows on Azure DevOps, such as allowing users to approve release deployments and creating work items from their channels. You can use these apps only with a project hosted on Azure DevOps Services.

## Microsoft Teams

::: moniker range="azure-devops"

 * [Azure Boards app for Microsoft Teams](../../boards/integrations/boards-teams.md)  
* [Azure Pipelines app for Microsoft Teams](../../pipelines/integrations/microsoft-teams.md)  
* [Azure Repos app for Microsoft Teams](../../repos/integrations/repos-teams.md)  

::: moniker-end

::: moniker range="<azure-devops"

For projects hosted on Azure DevOps Server, you can use the following integrations to get notifications for events in Azure DevOps.

* [Azure DevOps Server](teams.md)

::: moniker-end


## Slack

::: moniker range="azure-devops"

* [Azure Boards app for Slack](../../boards/integrations/boards-slack.md)
* [Azure Pipelines app for Slack](../../pipelines/integrations/slack.md)  
* [Azure Repos app for Slack](../../repos/integrations/repos-slack.md)

::: moniker-end

::: moniker range="< azure-devops"

* [Custom app for Slack](slack.md)

::: moniker-end
