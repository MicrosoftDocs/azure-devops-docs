---
title: VSS/References/SDK.Interfaces ModuleLoaderConfiguration API | Extensions for Azure DevOps Services
description: AMD javascript module loader configuration
ms.assetid: 5eeed901-c901-5e23-7056-4b037fdabc87
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

# ModuleLoaderConfiguration

Defined in vss.d.ts


AMD javascript module loader configuration 

### Members

* `baseUrl`: string. 

* `contributionPaths`: {[key: string]: [ContributionPath](../../../VSS/References/SDK_Interfaces/ContributionPath.md)}. 

* `paths`: {[key: string]: string}. 

* `shim`: {[key: string]: [ModuleLoaderShimConfiguration](../../../VSS/References/SDK_Interfaces/ModuleLoaderShimConfiguration.md)}. 

* `waitSeconds`: number. The maximum amount of time (in seconds) the AMD loader will wait for scripts to load.

