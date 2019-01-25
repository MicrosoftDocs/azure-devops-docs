---
ms.prod: devops
ms.technology: devops-ecosystem
title: Configure UI Controls | Extensions for Azure DevOps Services
description: How to configure UI controls in your extension for Azure DevOps Services.
ms.assetid: D013BBD0-CC9E-538F-39BD-9433AFCC7A6D
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Configure UI Controls

This example shows the steps before you can add a control to the hub that we created in [Add a hub](../add-hub.md).

1. [Get the Client SDK](https://github.com/Microsoft/vss-sdk) and add it to your project.

	```
	sdk/scripts/VSS.SDK.js
	```

2. Reference the SDK from your HTML page.

	```html
	<head>
		<title>Sample app</title>
		<script src="sdk/scripts/VSS.SDK.js"></script>
	</head>
	```

[!INCLUDE [Control](../../_shared/procedures/use-a-control-js.md)]

## Try these next
* [Use the grid control](./grido.md)
* [Use the menu control](./menubaro.md)
* [Use the treeview control](./treeviewo.md)
* [Use the combo control](./comboo.md)
* [Use the modal dialog control](./modaldialogo.md)
* [Use the splitter control](./splittero.md)
* [Use the wait control](./waitcontrolo.md)
* [Use the pivot filter control](./pivotfiltero.md)
