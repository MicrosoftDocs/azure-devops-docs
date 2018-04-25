---
title: Notifications FAQs
titleSuffix: VSTS & TFS
description: General q and a about notifications set in Visual Studio Team Services or Team Foundation Server 
ms.prod: devops
ms.technology: devops-collab
toc: show
ms.topic: conceptual
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 09/01/2017
monikerRange: '>= tfs-2015'
---



# FAQs on notifications

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

## Can I receive emails in plain text? 
No. This was supported in earlier versions of VSTS and TFS, but all emails are now HTML formatted.

## How can I avoid receiving any notifications for activity in an account? 
Because of custom subscriptions created by other users and admins, there is no way to completely avoid receiving any notifications, but you can do these two actions to minimize the number you receive: 
- Unsubscribe from all default and admin-created team and group subscriptions
- Disable or remove all custom subscriptions.

## Why do some emails have multiple recipients on the To line? 

A default or team/group subscription can have multiple recipients depending on how it is configured. Assuming each of these recipients has permission to the resource the event is related to, the recipients are grouped together in one email. 

Previously each recipient would receive their own individually-addressed email, which could result in the same user getting multiple emails because of their membership in multiple groups. 


## Related notes

- [About notifications](about-notifications.md)
- [Manage personal notifications](/vsts/collaborate/manage-team-notifications?toc=/vsts/notifications/toc.json&bc=/vsts/notifications/breadcrumb/toc.json) 
- [Unsubscribe from a notification](unsubscribe-default-notification.md) 






