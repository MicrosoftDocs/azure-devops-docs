---
title: Timezone settings and usage
titleSuffix: Azure DevOps  
description: Understand time zones settings and usage in Azure DevOps  
ms.technology: devops-settings
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 03/15/2021
---

# Time zone settings and usage

[!INCLUDE [temp](../../includes/version-all.md)]  

There are two main time zone settings: organization and each user's personal profile. Most times displayed in the web portal are based on the organization's time zone, except for those times noted later is this article. 

By default, all Azure DevOps organizations and user accounts are set to UTC (Coordinated Universal Time) irrespective of what zones they are hosted in. Even if your organization migrated from an on-premises server to Azure DevOps Services, your timezone is set to UTC time.

To configure the time zone settings, see [Change the time zone in Azure DevOps](../accounts/change-time-zone.md).

## Organization time zone

The organization time zone setting is the main time zone setting. This setting is used by Azure DevOps to store all date and time data. In other words, when you set your organization to EST, all timestamps are stored in EST time zone. 
 
The following objects display time stamps using the organization time zone setting. 

- Boards: Work item fields such as Created Date, Changed Date, and other Date-Time fields 
- Repos: 
	- File History
	- Commits, Pushes, Branches, Tags, and Pull Requests 
- Pipelines: 
  - Recent, All, Runs
  - Environment
  - Releases 
  - Library
  - Task groups
- Notifications
- [Export Users](../security/export-users-audit-log.md)

By default, build pipeline `cron` schedules in YAML are in UTC. In classic pipelines, they are in the organization's time zone. To learn more about configuring your pipeline to run with a `cron` job, see [Configure schedules for pipelines](../../pipelines/process/scheduled-triggers.md).


If you change the organization time zone, it impacts future time stamps, but doesn't retroactively update existing time stamps. 

## User profile time zone

The user profile time zone and date-time pattern are used when displaying the following information in the web portal.  

- Boards: 
  - Project configuration, Iteration Start and End Dates
  - Team configuration, Iteration Start and End Dates
  - Work item form 
- Organization Settings: Usage, Time Range

For work items, the History date-time fields reference the organization's time zone setting. 

## On-premises time zone settings

The time zone setting for on-premises Azure DevOps corresponds to the time zone set for the Azure DevOps Server. 

## Related articles

- [Change the time zone in Azure DevOps](../accounts/change-time-zone.md)
- [Configure schedules for pipelines](../../pipelines/process/scheduled-triggers.md)
