---
title: TFS/Work/Contracts TeamFieldValues API | Extensions for Azure DevOps Services
description: Essentially a collection of team field values
ms.assetid: 0994f3c2-2d2d-dd04-e71c-933b66cb68f8
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TeamFieldValues

Module path: `TFS/Work/Contracts`

Extends: [TeamSettingsDataContractBase](../../../TFS/Work/Contracts/TeamSettingsDataContractBase.md)

### Members

* `defaultValue`: string. The default team field value

* `field`: [FieldReference](../../../TFS/Work/Contracts/FieldReference.md). Shallow ref to the field being used as a team field

* `values`: [TeamFieldValue](../../../TFS/Work/Contracts/TeamFieldValue.md)[]. Collection of all valid team field values

