---
title: TFS/WorkItemTracking/ExtensionContracts IWorkItemLoadedArgs API | Extensions for Azure DevOps Services
description: Interface defining the arguments for the &#x27;onLoaded&#x27; notification sent by the ActiveWorkItemService
ms.assetid: 963f7b3a-f0de-f879-f801-84a820ceb50b
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# IWorkItemLoadedArgs

Module path: `TFS/WorkItemTracking/ExtensionContracts`

Extends: [IWorkItemChangedArgs](../../../TFS/WorkItemTracking/ExtensionContracts/IWorkItemChangedArgs.md)

### Members

* `isNew`: boolean. &#x27;true&#x27; if the work item is a &#x27;new&#x27;, unsaved work item, &#x27;false&#x27; otherwise.

