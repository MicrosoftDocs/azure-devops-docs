---
title: Timezone settings and usage
titleSuffix: Azure DevOps  
description: Understand time zones settings and usage in Azure DevOps  
ms.subservice: azure-devops-settings
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 02/29/2024
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

The organization time zone setting is the time zone setting that's used for data that doesn't specify a time zone. All date and time data is stored in UTC and localized using this setting if the time and date isn't localized using profile settings. In other words, when you set your organization to EST, all timestamps that don't follow client localization appear in EST time zone.

Most areas of Azure DevOps localize using your Profile settings, but the following areas don't: 

- Audit TimeStamps are always in UTC.

- Scheduled triggers in code, for example, run with a `cron` job, don't require a time zone to be included. If you don't add a time zone to your trigger, the organization's time zone is used. In classic pipelines, the schedules are in the organization's time zone. For more information about configuring your pipeline to run with a `cron` job, see [Configure schedules for pipelines](../../pipelines/process/scheduled-triggers.md).

If you change the organization time zone, it doesn't retroactively update existing time stamps that aren't localized. For example, if your organization is set to UTC and you set up a YAML pipeline with a `cron` job set to 12PM without including EST, this pipeline runs at 5PM EST. If you change the organization's time zone to EST, then this pipeline runs at midnight. If you specify 5PM EST in the code, after the change, it continues to run at 5PM. 

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
