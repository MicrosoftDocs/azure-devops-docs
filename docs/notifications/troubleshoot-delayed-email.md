---
title: Why are my notification emails delayed
titleSuffix: Azure DevOps 
description: Troubleshooting steps for delayed emails from notifications in Azure DevOps Services and Team Foundation Server (TFS)
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

[!INCLUDE [version-vsts-tfs-2017-on](../boards/_shared/version-vsts-tfs-2017-on.md)]

> [!NOTE]  
> This topic applies to Azure DevOps Services, TFS 2017 Update 1, and later versions. If you work from an on-premises TFS 2017 or earlier versions, see [Set alerts, get notified when changes occur](../work/track/alerts-and-notifications.md). For on-premises TFS, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) in order for team members to see the Notifications option from their organization menu and to receive notifications.

Learn why you may not be receiving an expected notification email, and how to check the notification statistics.

# Emails from Azure DevOps Services subscriptions or notifications are delayed

An email is generated when an [event](oob-supported-event-types.md) occurs within Azure DevOps Services which matches a notification subscription. See the [notifications overview](about-notifications.md) for more information about notification subscriptions.

If you're not receiving an expected notification email, it could be for the following reason:

* Your organization is creating a very large volume notifications

Please perform the following step to determine if it resolves the issue.

## Step 1: Check the notification statistics for unexpectedly high volume

Poorly defined subscription filters or duplicate subscriptions might cause an unexpected high volume of notifications, causing a delay in the processing or delivery of emails. [Learn how to view and analyze notification statistics](howto-view-organization-notification-statistics.md)

## Contact customer support

If you're not able to resolve the issue with the steps above, consider contacting [customer support](troubleshoot-contact-support.md)