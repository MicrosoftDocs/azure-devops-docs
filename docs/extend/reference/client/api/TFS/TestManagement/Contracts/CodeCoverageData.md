---
title: TFS/TestManagement/Contracts CodeCoverageData API | Extensions for Azure DevOps Services
description: Represents the build configuration (platform, flavor) and coverage data for the build
ms.assetid: c3b58257-ba88-89df-4a81-285219d8be16
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# CodeCoverageData

Module path: `TFS/TestManagement/Contracts`


### Members

* `buildFlavor`: string. Flavor of build for which data is retrieved/published

* `buildPlatform`: string. Platform of build for which data is retrieved/published

* `coverageStats`: [CodeCoverageStatistics](../../../TFS/TestManagement/Contracts/CodeCoverageStatistics.md)[]. List of coverage data for the build

