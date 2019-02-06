---
title: TFS/Build/Contracts Schedule API | Extensions for Azure DevOps Services
ms.assetid: f8e08d14-45f8-724e-0510-7aefdef8663e
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# Schedule

Module path: `TFS/Build/Contracts`


### Members

* `branchFilters`: string[]. 

* `daysToBuild`: [ScheduleDays](./ScheduleDays.md). Days for a build (flags enum for days of the week)

* `scheduleJobId`: string. The Job ID of the Scheduled job that will queue the scheduled build. Since a single trigger can have multiple schedules and we want a single job to process a single schedule (since each schedule has a list of branches to build), the schedule itself needs to define the Job Id. This value will be filled in when a definition is added or updated.  The UI does not provide it or use it.

* `startHours`: number. Local timezone hour to start

* `startMinutes`: number. Local timezone minute to start

* `timeZoneId`: string. Time zone of the build schedule (string representation of the time zone id)

