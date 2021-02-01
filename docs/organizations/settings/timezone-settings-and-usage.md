---
title: Timezone settings and usage
titleSuffix: Azure DevOps  
description: Understand timezones settings and usage in Azure DevOps  
ms.technology: devops-settings
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 02/01/2021
---

# Time zone settings and usage

[!INCLUDE [temp](../../includes/version-all.md)]  

There are two main timezone settings, however, there are other areas where time can be set. This articles seeks to clarify settings and usage.   
 
By default all AzureDevOps accounts are set by UTC (Coordinated Universal Time) irrespective of what zones they are hosted in. Even if you migrate from TFS to AzureDevOps you will be still in UTC time.

Changing the timezone will not change the timezone for all the users (Users have an individual preference to choose their timezone)

There seems to be a bit of confusion about time zone settings in VSTS. The confusion comes from the fact that there are two places where time zone settings can be configured for VSTS users: VSTS account time zone setting and VSTS user profile time zone setting.

Clarify how time zones are used across Azure DevOps - Builds, Release, triggers, etc. Boards 


## Organization time zone

The organization time zone setting is the main time zone setting. This time zone setting is used by Azure DevOps to store all date/time data. In other words, when you set your VSTS account time zone to EST, all timestamps in VSTS will be stored in EST time zone. Another good example of when VSTS account time zone setting is used is when you configure iteration dates, build/release schedules, etc. Account time zone setting is configured on the Account Settings page: https://*.visualstudio.com/_admin/_home/settings.

## User profile time zone

Your user profile time zone setting is used to display the Azure time stamps for when a user browses Azure DevOps using time zone configured for that specific user. For example, if the organization time zone is set to EST, but my user profile setting is PST, then when I'm browsing Azure DevOps all date/time fields are displayed in PST time zone.
 
## Pipelines 

Review any `cron` schedules in your YAML file. By default, `cron` schedules in YAML are in UTC. In classic pipelines, they are in the organization's time zone. To learn more about configuring your pipeline to run on with a cron job, see [Configure schedules for pipelines](../../pipelines/process/scheduled-triggers.md).

The Scheduled runs windows displays the times converted to the local time zone set on the computer used to browse to the Azure DevOps portal. In this example the screenshot was taken in the EST time zone.


Agent pools
Deployment pools 
Triggers

Scheduled triggers defined using the pipeline settings UI take precedence over YAML scheduled triggers.

Where are all the areas where a date/timestamp is made? 
Auditing timestamp - Org 
Usage
Boards - Create/Change work item - Org time zone 
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



## On-premises time zone settings


## Related articles

- [Change the time zone in Azure DevOps](../accounts/change-time-zone.md)
- [Configure schedules for pipelines](../../pipelines/process/scheduled-triggers.md)
 