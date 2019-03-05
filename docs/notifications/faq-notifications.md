---
title: Notifications FAQs
titleSuffix: Azure DevOps
description: General q and a about notifications set in Azure DevOps Services or Team Foundation Server 
ms.prod: devops
ms.technology: devops-collab
toc: show
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/10/2018
monikerRange: '>= tfs-2015'
---

# FAQs on notifications

[!INCLUDE [version-vsts-tfs-2015-on](../boards/_shared/version-vsts-tfs-2015-on.md)]

## Can I receive emails in plain text?
No. This was supported in earlier versions of Azure DevOps Services and TFS, but all emails are now HTML formatted.

## How can I avoid receiving any notifications for activity in an organization?

Because of custom subscriptions created by other users and admins, there is no way to completely avoid receiving any notifications, but you can do the following two actions to minimize the number you receive:

- Unsubscribe from all default and admin-created team and group subscriptions
- Disable or remove all custom subscriptions

## Why do some emails have multiple recipients on the To line? 

A default or team/group subscription can have multiple recipients depending on how it is configured. Assuming each of these recipients has permission to the resource the event is related to, the recipients are grouped together in one email.

Previously each recipient would receive their own individually-addressed email, which could result in the same user getting multiple emails because of their membership in multiple groups.

## Related articles

- [About notifications](about-notifications.md)
- [Manage personal notifications](howto-manage-team-notifications.md)
- [Unsubscribe from a notification](unsubscribe-default-notification.md)
