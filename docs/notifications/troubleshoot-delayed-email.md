---
title: Why are my notification emails delayed
titleSuffix: Azure DevOps 
description: Troubleshooting steps for delayed emails from notifications in Azure DevOps and Team Foundation Server (TFS)
ms.technology: devops-collab
ms.prod: devops
ms.manager: mijacobs
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/19/2019 
monikerRange: '>= tfs-2017'
---


# Emails from subscriptions or notifications are delayed

[!INCLUDE [version-vsts-tfs-2017-on](../_shared/version-tfs-2017-through-vsts.md)]

You might not receive an expected notification email. In this article, learn how to check the notification statistics.

An email is generated when an [event](oob-supported-event-types.md) occurs within Azure DevOps Services that matches a notification subscription. For more information about notification subscriptions, see the [notifications overview](about-notifications.md).

> [!NOTE]  
> This article applies to Azure DevOps, TFS 2017 Update 1, and later versions. If you work from an on-premises TFS 2017 or earlier versions, see [Set alerts, get notified when changes occur](../work/track/alerts-and-notifications.md). For on-premises TFS, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) in order for team members to see the Notifications option from their organization menu and to receive notifications.



If you're not receiving an expected notification email, it could be for the following reason:

* Your organization creates a high volume of notifications

Do the following step to determine if the issue resolves.

## Check the notification statistics for unexpectedly high volume

Poorly defined subscription filters or duplicate subscriptions might cause an unexpected high volume of notifications, causing a delay in the processing or delivery of emails. [Learn how to view and analyze notification statistics](view-organization-notification-statistics.md)

## Contact customer support

If you're not able to resolve the issue with the steps above, consider contacting [customer support](troubleshoot-contact-support.md)