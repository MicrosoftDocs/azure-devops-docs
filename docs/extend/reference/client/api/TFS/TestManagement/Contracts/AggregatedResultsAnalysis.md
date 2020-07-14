---
title: TFS/TestManagement/Contracts AggregatedResultsAnalysis API | Extensions for Azure DevOps Services
description: Data representation of an aggregated results analysis.
ms.assetid: cbe09142-90da-811a-493d-cf1c52073f66
ms.technology: devops-ecosystem
generated: true
author: chcomley
ms.topic: article
ms.author: chcomley
ms.date: 08/04/2016
---

# AggregatedResultsAnalysis

Module path: `TFS/TestManagement/Contracts`


### Members

* `duration`: any. 

* `previousBuild`: [BuildReference](../../../TFS/TestManagement/Contracts/BuildReference.md). 

* `resultsByOutcome`: {[key: number]: [AggregatedResultsByOutcome](../../../TFS/TestManagement/Contracts/AggregatedResultsByOutcome.md)}. 

* `resultsDifference`: [AggregatedResultsDifference](../../../TFS/TestManagement/Contracts/AggregatedResultsDifference.md). 

* `totalTests`: number. 

