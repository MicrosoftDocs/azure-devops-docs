---
title: Why are my notification emails delayed
titleSuffix: Azure DevOps 
description: Troubleshooting steps for delayed emails from notifications in Azure DevOps.
ms.technology: devops-collab
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/30/2019 
monikerRange: '>= tfs-2017'
---


# Emails from subscriptions or notifications are delayed

[!INCLUDE [version-vsts-tfs-2017-on](../includes/version-tfs-2017-through-vsts.md)]

You might not receive an expected notification email. Learn how to check the notification statistics.

An email is generated when an [event](oob-supported-event-types.md) occurs within Azure DevOps Services that matches a notification subscription. For more information about notification subscriptions, see the [notifications overview](about-notifications.md).

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

If you're not receiving an expected notification email, it could be for the following reason:

* Your organization creates a high volume of notifications

Do the following step to determine if the issue resolves.

## Check the notification statistics for unexpectedly high volume

Poorly defined subscription filters or duplicate subscriptions might cause an unexpected high volume of notifications, causing a delay in the processing or delivery of emails. [Learn how to view and analyze notification statistics](view-organization-notification-statistics.md)

## Contact customer support

If you can't resolve the issue with the previously mentioned steps, consider contacting [customer support](troubleshoot-contact-support.md).
