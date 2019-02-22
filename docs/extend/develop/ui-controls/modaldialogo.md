---
title: Use the Dialog Control | Extensions for Azure DevOps Services
description: Use the modal dialog control to collect user input or display message in your app for Azure DevOps Services.
ms.assetid: 84F3452D-9EB6-4908-AB52-07903644EDA8
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Use the modal dialog control

This page shows different samples about the modal dialog control.

**Go to [API Reference](../../reference/client/controls/modaldialog.md) for more details.**

<div class="alert alert-warning">
When using this modal dialog, dialog overlay will cover only the area dedicated to the extension due to iframe limitations. If you want the modal dialog cover whole window, see [Using host dialog](../using-host-dialog.md).
</div> 

<a name="basic"></a>
## Simple modal dialog
Below sample use the simplistic modal dialog usage where no button is displayed and `contextText` is specified.
``` typescript
	import Dialogs = require("VSS/Controls/Dialogs");
	
	$("#show").click(()=> {
		Dialogs.show(Dialogs.ModalDialog, {
			title: "My Dialog",
			contentText: "This is the simplistic modal dialog.",
			buttons: null
		});
	});
```

<a name="form"></a>
## Displaying a form in a modal dialog
Below sample shows displaying a form in a modal dialog and getting the result when it is valid.

``` html
	<button id="show">Add person</button>
	<ul class="person-list"></ul>
	<div class="dialog-content">
		<h2 id="header">Registration Form</h2>
		<p>
			<label>Name:</label>
			<input id="inpName"/>
		</p>
		<p>
			<label>DOB:</label>
			<input id="inpDob" />
		</p>
		<p>
			<label>Email:</label>
			<input id="inpEmail" />
		</p>
	</div>
```

``` css
	.dialog-content {
		display: none;
	}
	
	.dialog-content input {
		border: 1px solid #ddd;
		width: 100%;
		outline: none;
		padding: 2px;
	}
```

``` typescript
	import Dialogs = require("VSS/Controls/Dialogs");
	
	$("#show").click(() => {
		// Display the dialog
		var dialog = Dialogs.show(Dialogs.ModalDialog, <Dialogs.IModalDialogOptions>{
			width: 300,
			title: "Register",
			content: $(".dialog-content").clone(),
			okCallback: (result: any) => {
				$("<li />").text(result).appendTo(".person-list");
			}
		});
		
		var dialogElement = dialog.getElement();
		// Monitor input changes
		dialogElement.on("input", "input",(e: JQueryEventObject) => {
			// Set dialog result
			dialog.setDialogResult(getValue(dialogElement));
			// Update enabled status of ok button
			dialog.updateOkButton(!isEmpty(dialogElement));
		});
	});
	
	function isEmpty(parent: JQuery): boolean {
		return parent.find("input").filter((index: number, el: Element) => {
			return !$(el).val();
		}).length > 0;
	}
	
	function getValue(parent: JQuery): string {
		return parent.find("input").map((index: number, el: Element) => {
			return $(el).val();
		}).get().join(" - ");
	}
```

<a name="confirmation"></a>
## Confirmation dialog
Below sample displays how to use modal dialog as a confirmation dialog.

``` typescript
	import Dialogs = require("VSS/Controls/Dialogs");
	
	var filename = "File1.txt";
	
	function showConfirmationDialog(yesCallback: () => void) {
		var dialog = Dialogs.show(Dialogs.ModalDialog, {
			title: "Delete Confirmation",
			content: $("<p/>").addClass("confirmation-text").html(`Are you sure you want to delete <b>${filename}</b>?`),
			buttons: {
				"Yes": () => {
					yesCallback();
					dialog.close();
				},
				"No": () => {
					dialog.close();
				}
			}
		});
	};
	
	$("#delete").click(() => {
		showConfirmationDialog(()=> {
			// Do your delete job here
			$("<p />").text(`${filename} deleted`).appendTo(".log");
		});
	});
```
