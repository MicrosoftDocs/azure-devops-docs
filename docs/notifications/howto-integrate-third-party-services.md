---
title: How to integrate with third party services
titleSuffix: Azure DevOps 
description: How to integrate third party services such as Slack, Microsoft Teams and others with Azure DevOps Services and Team Foundation Server (TFS)
ms.technology: devops-collab
ms.prod: devops
ms.manager: jillfra
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/10/2018  
monikerRange: '>= tfs-2017'
---

# Integrate third party services

[!INCLUDE [version-vsts-tfs-2017-on](../boards/_shared/version-vsts-tfs-2017-on.md)]

> [!NOTE]  
> This topic applies to Azure DevOps Services, TFS 2017 Update 1, and later versions. If you work from an on-premises TFS 2017 or earlier versions, see [Set alerts, get notified when changes occur](../work/track/alerts-and-notifications.md). For on-premises TFS, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) in order for team members to see the Notifications option from their organization menu and to receive notifications.

Integrate with your favorite services by notifying them when events happen in Azure DevOps Services. See the following examples:

* [Send Azure DevOps Services notifications to a Slack channel](../service-hooks/services/slack.md)
* [Send Azure DevOps Services notifications to a Microsoft Teams channel](../service-hooks/services/teams.md)
* [Send Azure DevOps Services notifications to a Trello board](../service-hooks/services/trello.md)
* [Send Azure DevOps Services notifications to a HipChat room](../service-hooks/services/hipchat.md)
* [Send Azure DevOps Services notifications to Azure Service Bus](../service-hooks/services/azure-service-bus.md)

Or, integrate with any endpoint by [Sending Azure DevOps Services notifications to a generic WebHook](../service-hooks/services/webhooks.md). [Learn about all the integration options](../service-hooks/index.md).