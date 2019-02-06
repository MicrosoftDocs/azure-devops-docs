---
title: VSS/References/VSS.SDK.Interfaces IMessageDialogButton API | Extensions for Azure DevOps Services
description: Represents a button used in IHostDialogService.openMessageDialog().
ms.assetid: b07f3d2b-4b81-73ef-4b9c-0a6fd2249e8c
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

# IMessageDialogButton

Defined in vss.d.ts


Represents a button used in IHostDialogService.openMessageDialog(). 

### Members

* `id`: string. Used as HTML ID of the button.

* `text`: string. Text to display on the button.

* `reject`: boolean. Optional. When true, the dialog&#x27;s promise is rejected instead of resolved when this button is clicked.

* `style`: string. Optional. Specifies how the button should look. 
Possible values: 
  (undefined) - Default
  &quot;warning&quot; - Red

