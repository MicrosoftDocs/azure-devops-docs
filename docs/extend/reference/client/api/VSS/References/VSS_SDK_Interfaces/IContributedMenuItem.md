---
title: VSS/References/VSS.SDK.Interfaces IContributedMenuItem API | Extensions for Azure DevOps Services
description: An individual contributed menu item
ms.assetid: 9c3dd62c-f01b-f91f-03ca-9d7b7f32a2a3
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

# IContributedMenuItem

Defined in vss.d.ts


An individual contributed menu item 

### Members

* `id`: string. Optional. Menu-item specific identifier

* `text`: string. Optional. Text to display in the menu item

* `title`: string. Optional. Tooltip to display for the menu item

* `separator`: boolean. Optional. Set to true if this menu item is just a separator

* `disabled`: boolean. Optional. Set to true if this menu item should be disabled

* `icon`: string. Optional. Url to an icon image or css class for the image cell

* `noIcon`: boolean. Optional. If true, do not render an icon or space for an icon.

* `childItems`: [IContributedMenuItem](../../../VSS/References/VSS_SDK_Interfaces/IContributedMenuItem.md)[]. Optional. If this menu item has a sub menu, these are the contributed child items

* `groupId`: string. Optional. ID of the menu group that this item should be placed in.

* `action`: (actionContext: any): void. Optional. Method invoked when the menu item is clicked.

