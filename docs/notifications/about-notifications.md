---
title: Get started with notifications in Azure DevOps
description: Understand how notifications or alerts are managed in Azure DevOps
ms.technology: devops-collab
toc: show
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/30/2019
monikerRange: '>= tfs-2013'
---

# About notifications

[!INCLUDE [version-all](../includes/version-all.md)]

Notifications help you and your team stay informed about activity that occurs within your Azure DevOps projects. You're notified when changes occur to work items, code reviews, pull requests, source control files, and builds. You can be notified via email. For example, you can get notified whenever you resolve a bug or are assigned a work item.

You receive notifications based on rules or subscriptions. Subscriptions arise from the following instances:

- Out of the box or default
- Created by an administrator for a team or group that you belong to
- Created by you

You can manage your notifications, which you access from your organization menu. Other notifications are managed by an administrator at the following levels:

- Team notifications, managed by a team administrator
- Project notifications, managed by a member of the Project Administrators group
- Organization/collection-level notifications, managed by a member of the Project Collection Administrators group

## Preferred email address

The preferred email address for your organization profile gets notifications, by default. It's typically the email address you signed into Azure DevOps with. You can manage this email address via your organization preferences profile page.

> [!NOTE]
> Your preferred email address applies across all of your organizations and cannot be changed on a per-organization basis.

::: moniker range=">= tfs-2017 < azure-devops"

## Integrating with other services 

If your team uses an external service to collaborate&mdash;such as Campfire, Flowdock, or Slack&mdash;you can configure notifications to be sent to these services. These services are supported out of the box:

- [Campfire](../service-hooks/services/campfire.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json) 
- [Flowdock](../service-hooks/services/flowdock.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json) 
- [HipChat](../service-hooks/services/hipchat.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json) 
- [Slack](../service-hooks/services/slack.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)  
- [Microsoft Teams](../service-hooks/services/teams.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)

You can also use a third-party service like Zapier to send notifications to hundreds of other services. Learn more about [Zapier and Azure DevOps Services integration](../service-hooks/services/zapier.md).

::: moniker-end

::: moniker range="< azure-devops"

## On-premises SMTP server
 
For on-premises Azure DevOps, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) in order for team members to see the Notifications option from their organization menu and to  receive notifications.

::: moniker-end

## Related articles

* [Default and supported notifications](oob-built-in-notifications.md)
* [Supported event types](oob-supported-event-types.md)
* [FAQs](faq-notifications.md)
* [Default permissions and access set for collaboration tools](../project/wiki/wiki-readme-permissions.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)
* [Azure DevOps data protection overview](../organizations/security/data-protection.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)
* [Microsoft Teams Integration](https://marketplace.visualstudio.com/items?itemname=ms-vsts.vss-services-teams)