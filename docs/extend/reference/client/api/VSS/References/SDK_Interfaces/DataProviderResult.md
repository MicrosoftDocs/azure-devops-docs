---
title: VSS/References/SDK.Interfaces DataProviderResult API | Extensions for Azure DevOps Services
description: Result structure from calls to GetDataProviderData
ms.assetid: 6b5c41dd-5dac-4489-1107-77c37aa286c6
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

# DataProviderResult

Defined in vss.d.ts


Result structure from calls to GetDataProviderData 

### Members

* `data`: {[key: string]: number}. Property bag of data keyed off of the data provider contribution ID

* `resolvedProviders`: [ResolvedDataProvider](../../../VSS/References/SDK_Interfaces/ResolvedDataProvider.md)[]. List of data providers resolved in the data-provider query

