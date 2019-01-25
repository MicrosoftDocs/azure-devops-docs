---
title: TFS/VersionControl/Contracts GitItemRequestData API | Extensions for Azure DevOps Services
ms.assetid: 393af0f2-79a6-6514-fa7f-3f4d9d05f38b
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitItemRequestData

Module path: `TFS/VersionControl/Contracts`


### Members

* `includeContentMetadata`: boolean. Whether to include metadata for all items

* `includeLinks`: boolean. Whether to include the _links field on the shallow references

* `itemDescriptors`: [GitItemDescriptor](../../../TFS/VersionControl/Contracts/GitItemDescriptor.md)[]. Collection of items to fetch, including path, version, and recursion level

* `latestProcessedChange`: boolean. Whether to include shallow ref to commit that last changed each item

