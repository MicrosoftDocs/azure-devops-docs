---
title: TFS/WorkItemTracking/ExtensionContracts IWorkItemNotificationListener API | Extensions for Azure DevOps Services
description: Interface defining notifications provided by the ActiveWorkItemService
ms.assetid: 89693eba-80ca-e407-7b8f-b9c39a568861
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# IWorkItemNotificationListener

Module path: `TFS/WorkItemTracking/ExtensionContracts`


### Members

* `onLoaded`: (workItemLoadedArgs: [IWorkItemLoadedArgs](../../../TFS/WorkItemTracking/ExtensionContracts/IWorkItemLoadedArgs.md)): void. Called when an extension is loaded

* `onFieldChanged`: (fieldChangedArgs: [IWorkItemFieldChangedArgs](../../../TFS/WorkItemTracking/ExtensionContracts/IWorkItemFieldChangedArgs.md)): void. Called when a field is modified

* `onSaved`: (savedEventArgs: [IWorkItemChangedArgs](../../../TFS/WorkItemTracking/ExtensionContracts/IWorkItemChangedArgs.md)): void. Called when a work item is saved

* `onRefreshed`: (refreshEventArgs: [IWorkItemChangedArgs](../../../TFS/WorkItemTracking/ExtensionContracts/IWorkItemChangedArgs.md)): void. Called when a work item is refreshed

* `onReset`: (undoEventArgs: [IWorkItemChangedArgs](../../../TFS/WorkItemTracking/ExtensionContracts/IWorkItemChangedArgs.md)): void. Called when a work item is reset (undo back to unchanged state)

* `onUnloaded`: (unloadedEventArgs: [IWorkItemChangedArgs](../../../TFS/WorkItemTracking/ExtensionContracts/IWorkItemChangedArgs.md)): void. Called when a work item is unloaded

