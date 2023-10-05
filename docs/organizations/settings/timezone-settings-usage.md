---
title: Timezone settings and usage
titleSuffix: Azure DevOps  
description: Understand time zones settings and usage in Azure DevOps  
ms.subservice: azure-devops-settings
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 11/17/2021
---

# Time zone settings and usage

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

There are three time zone settings that can be referenced by Azure DevOps:

- Your browser's settings for the time and date formats
- Your organization or server's time and date formats
- Your personal profile **Time and Locale** setting.

Most times displayed in the web portal are based on your browser settings for the time and date formats as well as non-pipeline timezones.

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

- Organization Settings: Usage, Time Range

For work items, the History date-time fields reference the organization's or server's time zone setting.

## On-premises time zone settings

The time zone setting for on-premises Azure DevOps corresponds to the time zone set for the Azure DevOps Server.

## Related articles

- [Change the time zone in Azure DevOps](../accounts/change-time-zone.md)
- [Configure schedules for pipelines](../../pipelines/process/scheduled-triggers.md)

<!--- REMOVED from user profile time zone on 11/17/2021

- Boards: 
  - Project configuration, Iteration Start and End Dates
  - Team configuration, Iteration Start and End Dates
  - Work item form 

-->
