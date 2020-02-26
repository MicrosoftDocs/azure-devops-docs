---
title: VSS/References/VSS.SDK.Interfaces IHostDialogService API | Extensions for Azure DevOps Services
description: Service which manages showing dialogs in the parent frame
ms.assetid: 8f15dcd0-c8e1-ba70-5a9b-daa6f4c97f38
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# IHostDialogService

Defined in vss.d.ts


Service which manages showing dialogs in the parent frame 

### Members

* `openDialog`: (contributionId: string, dialogOptions: [IHostDialogOptions](./IHostDialogOptions.md), contributionConfig: Object, postContent: Object): IPromise&lt;[IExternalDialog](./IExternalDialog.md)&gt;. Open a modal dialog in the host frame, which gets its content from a contributed control.

* `openMessageDialog`: (message: string, options: [IOpenMessageDialogOptions](./IOpenMessageDialogOptions.md)): IPromise&lt;[IMessageDialogResult](./IMessageDialogResult.md)&gt;. Open a modal dialog in the host frame, which displays the supplied message.

