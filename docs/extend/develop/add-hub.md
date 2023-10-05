---
title: Add a Hub | Extensions for Azure DevOps Services
description: Extend Azure DevOps Services with your own hub.
ms.assetid: 0d06c2d8-402f-4373-a2d3-2513ae278443
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/28/2022
---

# Add a hub

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

In this article, we'll create a new hub that displays in Azure Boards after the *Sprints* and *Queries* hubs.

:::image type="content" source="../reference/targets/media/work/azure-boards.png" alt-text="Screen shot showing location of new hub in Azure Boards.":::

## Structure of an extension

```no-highlight
|--- README.md
|--- sdk    
	|--- node_modules           
	|--- scripts
		|--- SDK.js       
|--- images                        
	|--- icon.png                           
|--- scripts                        	// not used in this tutorial
|--- hello-world.html				// html page to be used for your hub  
|--- vss-extension.json				// extension's manifest
```

## Get the client SDK: `SDK.js`

The core SDK script, SDK.js, enables web extensions to communicate to the host, Azure DevOps Services, frame. This script also initializes, notifies that the extension loaded, or gets context about the current page. Get the Client SDK `SDK.js` file and add it to your web app. 
Place it in the `home/sdk/scripts` folder.

Use the 'npm install' command via the command line (requires [Node](https://nodejs.org/en/download/)) to retrieve the SDK:

```no-highlight
npm install azure-devops-extension-sdk
```

> [!NOTE]
> For more information, see [Azure DevOps Web Extension SDK](https://github.com/Microsoft/azure-devops-extension-sdk).

## Your hub page: `hello-world.html`

* Every hub displays a web page
* Check out the targetable hub groups in the [extension points reference](../reference/targets/overview.md#hubs)

Create a `hello-world.html` file in the `home` directory of your extension.
Reference the SDK and call *init()* and *notifyLoadSucceeded()*.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Hello World</title>
	<script src="sdk/scripts/SDK.js"></script>
</head>
<body>
	<script type="text/javascript">SDK.init();</script>
	<h1>Hello World</h1>
	<script type="text/javascript">SDK.notifyLoadSucceeded();</script>
</body>
</html>
```

## Your extension's manifest file: `vss-extension.json`

* ***Every*** extension must have an extension manifest file
* Read the [Extension manifest reference](../develop/manifest.md)
* Find out more about the contribution points in [Extensibility points](../reference/targets/overview.md)

Create a json file (`vss-extension.json`, for example) in the `home` directory with the following contents:

```json
	{
		"manifestVersion": 1,
		"id": "sample-extension",
		"version": "0.1.0",
		"name": "My first sample extension",
		"description": "A sample Visual Studio Services extension.",
		"publisher": "fabrikamdev",
		"categories": ["Azure Boards"],
		"targets": [
			{
				"id": "Microsoft.VisualStudio.Services"
				}
			],
		"icons": {
			"default": "images/logo.png"
		 },
		"contributions": [
			{
				"id": "Fabrikam.HelloWorld",
				"type": "ms.vss-web.hub",
				"description": "Adds a 'Hello' hub to the Work hub group.",
				"targets": [
					"ms.vss-work-web.work-hub-group"
					],
				"properties": {
					"name": "Hello",
					"order": 99,
					"uri": "hello-world.html"
				}
			}
		],
		"scopes": [
			"vso.work"
		],
		"files": [
			{
				"path": "hello-world.html", "addressable": true
			},
			{
				"path": "sdk/scripts", "addressable": true
			},
			{
				"path": "images/logo.png", "addressable": true
			}
		]
	}
```

> [!NOTE]
> Change the **publisher** to your publisher name. To create a publisher, see [Package, publish, and install](../publish/overview.md). 

### Icons

The **icons** stanza specifies the path to your extension's icon in your manifest. 

Add a square image titled `logo.png`, as shown in the extension manifest.

### Contributions

The **contributions** stanza adds your contribution - the Hello hub - to your extension manifest.

For each contribution in your extension, the manifest defines the following:

- type of contribution, hub
- contribution target, the work hub group (check out all of the [targetable hub groups](../reference/targets/overview.md#targetable-hub-groups)),
- the properties specific to each type of contribution. A hub has the following properties.

| Property | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| name     | Name of the hub.                                                            |  
| order    | Placement of the hub in the hub group.                                      |  
| uri      | Path (relative to the extension base URI) of the page to surface as the hub. |

### Scopes

Include the [scopes](../develop/manifest.md#scopes) that your extension requires.

In this case, we need `vso.work` to access work items.

### Files

The **files** stanza states the files that you want to include in your package - your HTML page, your scripts, the SDK script, and your logo.

Set `addressable` to `true` unless you include other files that don't need to be URL-addressable.

>[!NOTE]
>For more information about the **extension manifest file**, such as properties and function, check out the [extension manifest reference](../develop/manifest.md).

## Next steps

> [!div class="nextstepaction"]
> [Package, publish, and install extensions](../publish/overview.md)

## Related articles

- [Testing and debugging extensions](/previous-versions/azure/devops/extend/test/debug-in-browser)
- [Extension manifest reference](../develop/manifest.md)
- [Azure DevOps web extension SDK](https://github.com/Microsoft/azure-devops-extension-sdk)
- [Azure DevOps Formula Design System](https://developer.microsoft.com/azure-devops/)

