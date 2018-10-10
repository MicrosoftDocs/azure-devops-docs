---
title: Understand the basics of how notifications work in Azure DevOps Services and TFS
description: Understand how notifications or alerts are managed in Azure DevOps Servicesor Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-collab
toc: show
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 09/01/2017
monikerRange: '>= tfs-2017'
---


# About notifications   

**Azure DevOps Services | TFS 2018 | TFS 2017**

Notifications help you and your team stay informed about activity occuring within your Azure DevOps Servicesor Team Foundation Server (TFS) projects. With notifications, you are notified when changes occur to work items, code reviews, pull requests, source control files, and builds, you can be notified via email. For example, you can get notified whenever a bug that you opened is resolved or a work item is assigned to you. 

You receive notifications based on rules or subscriptions. Subscriptions arise from these areas: 
- Out of the box or default subscriptions
- Ones that an administrator creates for a team or group that you belong to
- Ones that you create for yourself

You can manage your notifications, which you access from your organization menu. Other notifications are managed by an administrator at these different levels: 

- Team notifications, managed by a team administrator
- Project notifications, managed by a member of the Project Administrators group
- Organization/collection-level notifications, managed by a member of the Project Collection Administartors group

## Preferred email address

Notifications are sent by default to the preferred email address for your organization profile. This is typically the email address you signed into Azure DevOps Services or TFS with, but can be managed via your organization preferences profile page. 

> [!NOTE]   
> Your preferred email address applies across all of your organizations and cannot be changed on a per-organization basis. 


## Integrating with other services 

If your team uses an external service to collaborate&mdash;such as Campfire, Flowdock, or Slack&mdash;you can configure notifications to be sent to these services. These services are supported out of the box:

- [Campfire](../service-hooks/services/campfire.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json) 
- [Flowdock](../service-hooks/services/flowdock.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json) 
- [Hipchat](../service-hooks/services/hipchat.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json) 
- [Slack](../service-hooks/services/slack.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)  
- [Microsoft Teams](../service-hooks/services/teams.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)

You can also use a third-party service like Zapier to send notifications to hundreds of other services. Learn more about [Zapier and Azure DevOps Services integration](../service-hooks/services/zapier.md).

::: moniker range=">= tfs-2015 < vsts"

## On-premises SMTP server (TFS)
 
For on-premises TFS, [you must configure an SMTP server](/tfs/server/admin/setup-customize-alerts) in order for team members to see the Notifications option from their organization menu and to  receive notifications. 

::: moniker-end