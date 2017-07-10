---
title: TFS/WorkItemTracking/ExtensionContracts IWorkItemFieldChangedArgs API | Extensions for Visual Studio Team Services
description: Interface defining the arguments for the &#x27;onFieldChanged&#x27; notification sent by the ActiveWorkItemService
ms.assetid: af50cfca-f26b-c17a-68d1-e423437c3598
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
generated: true
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# IWorkItemFieldChangedArgs

Module path: `TFS/WorkItemTracking/ExtensionContracts`

Extends: [IWorkItemChangedArgs](../../../TFS/WorkItemTracking/ExtensionContracts/IWorkItemChangedArgs.md)

### Members

* `changedFields`: {[key: string]: any}. Set of fields that have been changed.  &#x27;key&#x27; is the field reference name.

