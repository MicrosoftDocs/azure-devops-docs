---
title: VSS/SDK/Services/Dialogs HostDialogService API | Extensions for Azure DevOps Services
description: Class which manages showing dialogs in the parent frame
ms.assetid: 1b396411-a908-5fee-8a4f-6bae357e54c4
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

# HostDialogService

Class which manages showing dialogs in the parent frame

## Example
[!INCLUDE [x](../../../../../samples/client-services/HostDialogService.md)]

## Methods

* [openDialog()](#opendialog)
* [openMessageDialog()](#openmessagedialog)

<a id="opendialog"></a>
### openDialog()

Open a modal dialog in the host frame which will get its content from a contributed control.

#### Syntax
<pre class='syntax'>
 IPromise&lt;IExternalDialog&gt; <b>openDialog</b>(contributionId, dialogOptions, contributionConfig, postContent)
</pre>

#### Parameters

* `contributionId`: string. The ID of the control contribution to host in the dialog
* `dialogOptions`: [IHostDialogOptions](../../../../VSS/References/VSS_SDK_Interfaces/IHostDialogOptions.md). options.title - title of dialog
* `contributionConfig`: Object. Optional. Initial configuration to pass to the contribution control.
* `postContent`: Object. Optional. Optional data to post to the contribution endpoint. If not specified, a GET request will be performed.

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[IExternalDialog](../../../../VSS/References/VSS_SDK_Interfaces/IExternalDialog.md)&gt;

<a id="openmessagedialog"></a>
### openMessageDialog()

Open a modal dialog in the host frame which will display the supplied message.

#### Syntax
<pre class='syntax'>
 IPromise&lt;IMessageDialogResult&gt; <b>openMessageDialog</b>(message, options)
</pre>

#### Parameters

* `message`: string or JQuery. the message to display in the dialog. If it&#x27;s a string, the message is displayed as plain text (no html). For HTML display, pass in a jQuery object.
* `options`: [IOpenMessageDialogOptions](../../../../VSS/References/VSS_SDK_Interfaces/IOpenMessageDialogOptions.md). Optional. 

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[IMessageDialogResult](../../../../VSS/References/VSS_SDK_Interfaces/IMessageDialogResult.md)&gt;

