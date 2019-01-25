---
title: TFS/Core/Contracts TeamProject API | Extensions for Azure DevOps Services
description: Represents a Project object.
ms.assetid: 148745ef-ce48-34c7-69eb-5dc2720a15ee
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TeamProject

Module path: `TFS/Core/Contracts`

Extends: [TeamProjectReference](../../../TFS/Core/Contracts/TeamProjectReference.md)

### Members

* `_links`: any. The links to other objects related to this object.

* `capabilities`: {[key: string]: {[key: string]: string}}. Set of capabilities this project has (such as process template &amp; version control).

* `defaultTeam`: [WebApiTeamRef](../../../TFS/Core/Contracts/WebApiTeamRef.md). The shallow ref to the default team.

