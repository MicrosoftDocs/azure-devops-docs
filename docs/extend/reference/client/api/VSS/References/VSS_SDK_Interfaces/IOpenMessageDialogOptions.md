---
title: VSS/References/VSS.SDK.Interfaces IOpenMessageDialogOptions API | Extensions for Azure DevOps Services
description: Used by IHostDialogService.openMessageDialog().
ms.assetid: 21a31ff8-ee59-07a2-14d7-8898ef676d1c
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

# IOpenMessageDialogOptions

Defined in vss.d.ts


Used by IHostDialogService.openMessageDialog(). 

### Members

* `buttons`: [IMessageDialogButton](../../../VSS/References/VSS_SDK_Interfaces/IMessageDialogButton.md)[]. Optional. Array of buttons to show. Default is [Button.Ok, Button.Cancel]

* `escapeButton`: [IMessageDialogButton](../../../VSS/References/VSS_SDK_Interfaces/IMessageDialogButton.md). Optional. Button to use when the user presses the Esc key. Default is the last button.

* `requiredTypedConfirmation`: string. Optional. If this is set, the user will be presented with a text box. Non-rejecting buttons will be disabled until the user types in this string.

* `title`: string. Optional. Text for the title bar of the dialog. Default is &quot;Confirm&quot;.

* `width`: number. Optional. Width of dialog in px.

* `height`: number. Optional. Height of dialog in px.

* `useBowtieStyle`: boolean. Optional. Use Bowtie styling. Default is true.

