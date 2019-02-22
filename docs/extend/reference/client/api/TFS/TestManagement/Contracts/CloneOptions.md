---
title: TFS/TestManagement/Contracts CloneOptions API | Extensions for Azure DevOps Services
ms.assetid: a5e290f2-37f2-791c-b735-3fd9934e845b
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# CloneOptions

Module path: `TFS/TestManagement/Contracts`


### Members

* `cloneRequirements`: boolean. If set to true requirements will be cloned

* `copyAllSuites`: boolean. copy all suites from a source plan

* `copyAncestorHierarchy`: boolean. copy ancestor hierarchy

* `destinationWorkItemType`: string. Name of the workitem type of the clone

* `overrideParameters`: {[key: string]: string}. Key value pairs where the key value is overridden by the value.

* `relatedLinkComment`: string. Comment on the link that will link the new clone  test case to the original Set null for no comment

