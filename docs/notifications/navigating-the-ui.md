---
title: Navigating the notifications UI
titleSuffix: Azure DevOps Services & TFS 
description: Navigate and explore the notifications pages in Azure DevOps Services and Team Foundation Server (TFS)  
ms.technology: devops-collab
ms.prod: devops
ms.manager: douge
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/05/2018  
monikerRange: '>= tfs-2017'
---

# Navigating the notifications UI

<b>Azure DevOps Services | Azure DevOps Server 2019 | TFS 2018 | TFS 2017.1 | [Previous versions](../work/track/alerts-and-notifications.md)</b>

> [!NOTE]  
> This topic applies to Azure DevOps Services, TFS 2017 Update 1, and later versions. If you work from an on-premises TFS 2017 or earlier versions, see [Set alerts, get notified when changes occur](../work/track/alerts-and-notifications.md). For on-premises TFS, [you must configure an SMTP server](/tfs/server/admin/setup-customize-alerts) in order for team members to see the Notifications option from their organization menu and to receive notifications.

## The notifications pages

There are the following three notifications pages:

* Personal
* Team
* Project
* Organization or collection (organization for the cloud and project collection for on-prem)

Permissions to manage notifications at each page default are  as follows:

* Organization administrators can manage notifications
* Organization and team administrators can manage team notifications
* Each user can manage their personal notifications


## Navigating to the organization level notifications page

Choose the Notifications page under organization settings.

   # [New navigation](#tab/new-nav)
   ![Navigate to organization notifications page](_img/nav-organization-notifications-hub-newnav.png)

   # [Previous navigation](#tab/previous-nav)
   ![Navigate to organization notifications page](_img/nav-organization-notifications-hub.png)

   ![View organization level notifications page](_img/view-organization-notification-hub.png)

   ---
```
https://dev.azure.com/{organization}/_admin/_notifications
```

## Navigating to the team  or project level notifications page

Choose the Notifications page under project settings.

   # [New navigation](#tab/new-nav)
   ![Navigate to team notifications page](_img/nav-team-notifications-hub-newnav.png)

   # [Previous navigation](#tab/previous-nav)
   ![Navigate to team notifications page](_img/nav-team-notifications-hub.png)

   ![View team level notifications page](_img/view-team-notification-hub.png)

   ---

```
https://dev.azure.com/{organization}/{project}/{team}/_admin/_notifications
```

## Navigating to the personal notifications page
Choose Notifications page under your profile

   # [New navigation](#tab/new-nav)
   ![Navigate to personal notifications page](_img/nav-personal-notifications-hub-newnav.png)

   ![View personal notifications page](_img/view-personal-notification-hub-newnav.png)

   # [Previous navigation](#tab/previous-nav)
   ![Navigate to personal notifications page](_img/nav-personal-notifications-hub.png)

   ---

```
https://dev.azure.com/{organization}/_notifications
```
