---
title: Notification FAQs
titleSuffix: Azure DevOps
description: General questions and answers about notifications set in Azure DevOps or Team Foundation Server 
ms.technology: devops-collab
toc: show
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 12/30/2019
monikerRange: '>= tfs-2015'
---

# Frequently asked questions (FAQs) on notifications

[!INCLUDE [version-vsts-tfs-2017-on](../includes/version-tfs-2017-through-vsts.md)]

## Can I receive emails in plain text?
No. Plain text was supported in earlier versions of Azure DevOps and TFS, but all emails are now HTML formatted.

## How can I avoid receiving any notifications for activity in an organization?

Because of custom subscriptions, there's no way to completely avoid receiving any notifications. However, you can do the following  actions to minimize the amount you receive:

- Unsubscribe from all default and admin-created team and group subscriptions
- Disable or remove all custom subscriptions

## Why do some emails have multiple recipients on the To line? 

A default or team or group subscription can have multiple recipients, depending on how it's configured. When all users have permission to the resource related to the event, they get combined in one email.

Previously, each recipient received an individually addressed email, which could result in the same user getting multiple emails because of their membership in multiple groups.

## Related articles

- [About notifications](about-notifications.md)
- [Manage personal notifications](./manage-team-group-notifications.md)
- [Unsubscribe from a notification](unsubscribe-default-notification.md)