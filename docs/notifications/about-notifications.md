---
title: About notifications | VSTS & TFS
description: Understand how notifications or alerts are managed in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: collaborate
ms.assetid: 
toc: show
ms.manager: douge
ms.author: kaelli
ms.date: 08/31/2017
---

# About notifications   

Notifications help you and your team stay informed about activity occuring within your Visual Studio Team Services (VSTS) or Team Foundation Server (TFS) team projects. With notifications, you are notified when changes occur to work items, code reviews, pull requests, source control files, and builds, you can be notified via email. For example, you can get notified whenever a bug that you opened is resolved or a work item is assigned to you. 

You receive notifications based on rules or subscriptions. Subscriptions arise from these areas: 
- Out of the box or default subscriptions
- Ones that an administrator creates for a team or group that you belong to
- Ones that you create for yourself

You can manage your notifications, which you access from your account menu. Other notifications are managed by an administrator at these different levels: 

- Team notifications, managed by a team administrator
- Project notifications, manage by a member of the Project Administrators group
- Account/collection-level notifications, managed by a member of the Project collection Administartors group

## Preferred email address

Notifications are sent by default to the preferred email address for your account profile. This is typically the email address you signed into VSTS or TFS with, but can be managed via your account preferences profile page. 

> [!NOTE]   
> Your preferred email address applies across all of your accounts and cannot be changed on a per-account basis. 


## Integrating with other services 

If your team uses an external service to collaborate&mdash;such as Campfire, Flowdock, or Slack&mdash;you can configure notifications to be sent to these services. These services are supported out of the box:

- [Campfire](/vsts/collaborate/campfire?toc=/vsts/notifications/toc.json&bc=/vsts/notifications/breadcrumb/toc.json) 
- [Flowdock](/vsts/collaborate/flowdock?toc=/vsts/notifications/toc.json&bc=/vsts/notifications/breadcrumb/toc.json) 
- [Hipchat](/vsts/collaborate/hipchat?toc=/vsts/notifications/toc.json&bc=/vsts/notifications/breadcrumb/toc.json) 
- [Slack](/vsts/collaborate/slack?toc=/vsts/notifications/toc.json&bc=/vsts/notifications/breadcrumb/toc.json)  
- [Microsoft Teams](https://marketplace.visualstudio.com/items?itemName=ms-vsts.vss-services-teams)

You can also use a third-party service like Zapier to send notifications to hundreds of other services. Learn more about [Zapier and Team Services integration](../service-hooks/services/zapier.md).


## On-premises SMTP server (TFS)
 
For on-premises TFS, [you must configure an SMTP sever](../tfs-server/admin/setup-customize-alerts.md) in order for team members to see the Notifications option from their account menu and to  receive notifications. 

