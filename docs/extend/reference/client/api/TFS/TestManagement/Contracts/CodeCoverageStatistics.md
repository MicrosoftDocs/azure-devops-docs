---
title: TFS/TestManagement/Contracts CodeCoverageStatistics API | Extensions for Azure DevOps Services
description: Represents the code coverage statistics for a particular coverage label (modules, statements, blocks, etc.)
ms.assetid: 278a764a-6310-1a0b-06ca-9fcd6991637f
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# CodeCoverageStatistics

Module path: `TFS/TestManagement/Contracts`


### Members

* `covered`: number. Covered units

* `delta`: number. Delta of coverage

* `isDeltaAvailable`: boolean. Is delta valid

* `label`: string. Label of coverage data (&quot;Blocks&quot;, &quot;Statements&quot;, &quot;Modules&quot;, etc.)

* `position`: number. Position of label

* `total`: number. Total units

