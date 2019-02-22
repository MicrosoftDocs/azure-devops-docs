---
title: TFS/Work/Contracts TeamSetting API | Extensions for Azure DevOps Services
description: Data contract for TeamSettings
ms.assetid: 75062086-9d67-3e18-5afb-276bb5e99746
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TeamSetting

Module path: `TFS/Work/Contracts`

Extends: [TeamSettingsDataContractBase](../../../TFS/Work/Contracts/TeamSettingsDataContractBase.md)

### Members

* `backlogIteration`: [TeamSettingsIteration](../../../TFS/Work/Contracts/TeamSettingsIteration.md). Default Iteration

* `backlogVisibilities`: {[key: string]: boolean}. Information about categories that are visible on the backlog.

* `bugsBehavior`: [BugsBehavior](../../../TFS/Work/Contracts/BugsBehavior.md). BugsBehavior (Off, AsTasks, AsRequirements, ...)

* `workingDays`: [System_Contracts.DayOfWeek](../../../VSS/Common/Contracts/System/DayOfWeek.md)[]. Days that the team is working

