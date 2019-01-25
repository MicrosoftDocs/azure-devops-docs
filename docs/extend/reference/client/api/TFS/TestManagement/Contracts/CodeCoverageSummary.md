---
title: TFS/TestManagement/Contracts CodeCoverageSummary API | Extensions for Azure DevOps Services
description: Represents the code coverage summary results Used to publish or retrieve code coverage summary against a build
ms.assetid: 098e1c8c-a7b6-0deb-a1ce-74efc4ac59c6
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# CodeCoverageSummary

Module path: `TFS/TestManagement/Contracts`


### Members

* `build`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Uri of build for which data is retrieved/published

* `coverageData`: [CodeCoverageData](../../../TFS/TestManagement/Contracts/CodeCoverageData.md)[]. List of coverage data and details for the build

* `deltaBuild`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Uri of build against which difference in coverage is computed

