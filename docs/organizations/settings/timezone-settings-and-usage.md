---
title: Timezone settings and usage
titleSuffix: Azure DevOps  
description: Understand time zones settings and usage in Azure DevOps  
ms.technology: devops-settings
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 02/01/2021
---

# Time zone settings and usage

[!INCLUDE [temp](../../includes/version-all.md)]  

There are two main time zone settings: organization and each user's personal profile. Most times displayed in the web portal are based on the organization's time zone, except for those noted later is this article. 

By default, all Azure DevOps organizations and user accounts are set to UTC (Coordinated Universal Time) irrespective of what zones they are hosted in. Even if your organization migrated from an on-premises server to Azure DevOps Services, you'll still be set to UTC time.

To configure the time zone settings, see [Change the time zone in Azure DevOps](../accounts/change-time-zone.md).

## Organization time zone

The organization time zone setting is the main time zone setting. This time zone setting is used by Azure DevOps to store all date/time data. In other words, when you set your organization to EST, all timestamps are stored in EST time zone. 
 
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

By default, build pipeline `cron` schedules in YAML are in UTC. In classic pipelines, they are in the organization's time zone. To learn more about configuring your pipeline to run with a `cron` job, see [Configure schedules for pipelines](../../pipelines/process/scheduled-triggers.md).


If you change the organization time zone, it impacts time stamps going forward, but doesn't retroactively update existing time stamps. 

## User profile time zone

The user profile time zone and date-time pattern is used when displaying the following information in the web portal.  

- Boards: 
  - Project configuration, Iteration Start and End Dates
  - Team configuration, Iteration Start and End Dates
  - Work item form (TBD, it's not completely clear)   
- Organization Settings: Usage, Time Range

For work items, the History date-time fields reference the organization's time zone setting. 

## On-premises time zone settings

To be determined. 

## Related articles

- [Change the time zone in Azure DevOps](../accounts/change-time-zone.md)
- [Configure schedules for pipelines](../../pipelines/process/scheduled-triggers.md)
 

<!---

## Pipelines 

Review any `cron` schedules in your YAML file. 

The Scheduled runs windows displays the times converted to the local time zone set on the computer used to browse to the Azure DevOps portal. In this example the screenshot was taken in the EST time zone.

 
Agent pools
Deployment pools 
Triggers

Scheduled triggers defined using the pipeline settings UI take precedence over YAML scheduled triggers.

Where are all the areas where a date/timestamp is made? 
Auditing timestamp - Org 
Usage Time range - Looks like user profile time zone


Boards - Create/Change work item - Org time zone  

WIthin work item form - uses the Date/Time pattern of User Profile, but Change Date, Created Date, and other work item fields are set based on Organization time zone. 

Delivery PLans - Last changed - Org time


## Test results automation

I have automated test running in my CI/CD build pipeline, but the time in DevOps is UTC and my assertions tests check the local time. Is there a way to set a time zone in my build pipeline?


Yes. For example this simple BASH script run using a Microsoft Hosted Agent:

```
echo "checking date"
date
echo "setting date to Asia/Kolkata"
sudo timedatectl set-timezone "Asia/Kolkata"
date
```

The results as seen in the log:

```
2019-07-05T20:26:48.5992486Z checking date
2019-07-05T20:26:48.5992954Z Fri Jul  5 20:26:48 UTC 2019
2019-07-05T20:26:48.5993264Z setting date to Asia/Kolkata
2019-07-05T20:26:48.9107025Z Sat Jul  6 01:56:48 IST 2019
```

As you can see, you can manipulate the local time on the agent. I do not agree with the other poster that this is necessarily a bad thing to do in the context of running tests.

You put some extra code in your tests to account for the local / target time or you could add 1 line into your build agent and achieve the same thing.



-->