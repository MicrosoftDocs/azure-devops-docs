---
title: VSS/References/VSS.SDK.Interfaces IContributedMenuSource API | Extensions for Azure DevOps Services
description: Interface for a registered object that contributes menu item(s)
ms.assetid: 3575f71f-0dbe-679d-bb31-4b54bf5bb2e3
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

# IContributedMenuSource

Defined in vss.d.ts


Interface for a registered object that contributes menu item(s) 

### Members

* `getMenuItems`: (context: any): [IContributedMenuItem](../../../VSS/References/VSS_SDK_Interfaces/IContributedMenuItem.md)[] or IPromise&lt;IContributedMenuItem[]&gt;. Get an array of menu items for the given context

* `execute`: (actionContext: any): any. Handle a menu item from this menu source being clicked. This is only invoked when the
contributed menu item does not have an &quot;action&quot; method.

