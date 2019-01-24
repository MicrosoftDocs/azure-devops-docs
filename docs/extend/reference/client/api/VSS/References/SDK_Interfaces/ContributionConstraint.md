---
title: VSS/References/SDK.Interfaces ContributionConstraint API | Extensions for Azure DevOps Services
description: Specifies a constraint that can be used to dynamically include/exclude a given contribution
ms.assetid: 94a0b2af-66bf-1931-3f37-3bdd0b5d29ee
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

# ContributionConstraint

Defined in vss.d.ts


Specifies a constraint that can be used to dynamically include/exclude a given contribution 

### Members

* `group`: number. An optional property that can be specified to group constraints together. All constraints within a group are AND&#x27;d together (all must be evaluate to True in order for the contribution to be included). Different groups of constraints are OR&#x27;d (only one group needs to evaluate to True for the contribution to be included).

* `inverse`: boolean. If true, negate the result of the filter (include the contribution if the applied filter returns false instead of true)

* `name`: string. Name of the IContributionFilter class

* `properties`: any. Properties that are fed to the contribution filter class

