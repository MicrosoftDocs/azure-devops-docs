---
title: Prevent notification emails to yourself from events
titleSuffix: Azure DevOps 
description: Learn how to exclude the initiator of an event in Azure DevOps Services from receiving notification emails
ms.technology: devops-collab
ms.prod: devops
ms.manager: mijacobs
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/30/2019  
monikerRange: '>= tfs-2017'
---

# Exclude yourself from notification emails of events you started

[!INCLUDE [version-vsts-tfs-2017-on](../_shared/version-tfs-2017-through-vsts.md)]

> [!NOTE]  
> This article applies to Azure DevOps, TFS 2017 Update 1, and later versions. If you work from an on-premises TFS 2017 or earlier versions, see [Set alerts, get notified when changes occur](../work/track/alerts-and-notifications.md). For on-premises TFS, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) in order for team members to see the Notifications option from their organization menu and to receive notifications.

When you create a team role-based notification subscription, you can choose the option, _Skip initiator_. The initiator of the event that triggers the email doesn't receive the notification.

For example, if your team has a subscription for a _pull request created_ event, the user who creates the pull request in the project doesn't receive this notification email. Other members of the team receive the notification email.

This option is good for users who don't want notifications of events that they trigger. However, some users may feel left out when their teammates receive the email and they didn't. Let your team decide which option is best.

![New subscription skip initiator](_img/new-sub-skip-initiator.png)

