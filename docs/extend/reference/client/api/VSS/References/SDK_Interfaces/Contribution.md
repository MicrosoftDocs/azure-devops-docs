---
title: VSS/References/SDK.Interfaces Contribution API | Extensions for Azure DevOps Services
description: An individual contribution made by an extension
ms.assetid: a907ad7e-405a-24c8-79bb-4a33eebd82dc
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# Contribution

Defined in vss.d.ts


An individual contribution made by an extension 

### Members

* `constraints`: [ContributionConstraint](../../../VSS/References/SDK_Interfaces/ContributionConstraint.md)[]. List of constraints (filters) that should be applied to the availability of this contribution

* `description`: string. 

* `id`: string. 

* `properties`: any. Properties/attributes of this contribution

* `targets`: string[]. The IDs of the contribution(s) that this contribution targets. (parent contributions)

* `type`: string. ID of the Contribution Type

