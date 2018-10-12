---
title: View organization-level notifications statistics
titleSuffix: Azure DevOps Services & TFS 
description: View organization-level notifications statistics in Azure DevOps Services or Team Foundation Server (TFS)
ms.technology: devops-collab
ms.prod: devops
ms.manager: douge
ms.reviewer: wismythe
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 10/11/2018
monikerRange: '>= tfs-2017'
---

# Analyze organization-level notifications statistics

<b>Azure DevOps Services | TFS 2018 | TFS 2017.1 | [Previous versions](../work/track/alerts-and-notifications.md)</b>

> [!NOTE]  
> This topic applies to Azure DevOps Services, TFS 2017 Update 1, and later versions. If you work from an on-premises TFS 2017 or earlier versions, see [Set alerts, get notified when changes occur](../work/track/alerts-and-notifications.md). For on-premises TFS, [you must configure an SMTP server](/tfs/server/admin/setup-customize-alerts) in order for team members to see the Notifications option from their organization menu and to receive notifications.

## View notification statistics for organization

Notification statistics show the top 10 most active subscriptions and the top event initiators in your organization for the current day. Administrators should periodically review statistics to ensure there are no unintended high volume subscriptions or event initiators.

1. [Navigate to the organization notifications settings page](navigating-the-ui.md#navigating-to-the-organization-level-notifications-page).
2. Select the **Statistics** tab.
3. Analyze the most active subscriptions and top event initiators.

    ![Organization notification settings delivery option](_img/view-organization-notification-stats.png)

Notes:

* A context menu (`...`) on the most active subscriptions provides the option to edit, disable, or delete the subscription
* Both email and service hooks subscriptions are eligible for the most active subscriptions
* The integer subscription ID is shown in the description for a custom email subscription
* Results are not a sliding 24-hour window and reset at the beginning of each day (00:00 UTC)