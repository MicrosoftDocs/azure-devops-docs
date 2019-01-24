---
title: VSS/References/VSS.SDK.Interfaces IExternalDialog API | Extensions for Azure DevOps Services
ms.assetid: a688252e-d157-d55c-ee40-cf4c5def92fd
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

# IExternalDialog

Defined in vss.d.ts



### Members

* `getContributionInstance`: (instanceId: string, contextData: any): IPromise&lt;T&gt;. Gets an object registered in the dialog&#x27;s contribution control.

* `close`: (): any. Close the dialog

* `setTitle`: (title: string): any. Update the title of the dialog

* `updateOkButton`: (enabled: boolean): any. Update the enablement of the OK button

