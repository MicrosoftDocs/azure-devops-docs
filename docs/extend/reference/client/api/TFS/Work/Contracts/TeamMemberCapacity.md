---
title: TFS/Work/Contracts TeamMemberCapacity API | Extensions for Azure DevOps Services
description: Represents capacity for a specific team member
ms.assetid: aa768dd8-d65f-ba8b-7770-857396e07015
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TeamMemberCapacity

Module path: `TFS/Work/Contracts`

Extends: [TeamSettingsDataContractBase](../../../TFS/Work/Contracts/TeamSettingsDataContractBase.md)

### Members

* `activities`: [Activity](../../../TFS/Work/Contracts/Activity.md)[]. Collection of capacities associated with the team member

* `daysOff`: [DateRange](../../../TFS/Work/Contracts/DateRange.md)[]. The days off associated with the team member

* `teamMember`: [Member](../../../TFS/Work/Contracts/Member.md). Shallow Ref to the associated team member

