---
title: Add a Hub | Extensions for Azure DevOps Services
description: Extend Azure DevOps Services with your own hub.
ms.assetid: 0d06c2d8-402f-4373-a2d3-2513ae278443
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

# Add a hub

We'll create a new hub that displays in the Work hub group, after the Backlogs and Queries hubs.

![Location of a new hub in Azure DevOps Services](../_shared/procedures/_img/hub-location.png)

## Structure of an extension
```no-highlight
|--- README.md
|--- sdk    
	|--- node_modules           
	|--- scripts
		|--- VSS.SDK.js       
|--- images                        
	|--- icon.png                           
|--- scripts                        	// not used in this tutorial
|--- hello-world.html				// html page to be used for your hub  
|--- vss-extension.json				// extension's manifest
```
## Get the client SDK: `VSS.SDK.js`
The core SDK script, VSS.SDK.js, enables web extensions to communicate to the host Azure DevOps Services frame and to perform operations like 
initializing, notifying extension is loaded or getting context about the current page. Get the Client SDK `VSS.SDK.js` file and add it to your web app. 
Place it in the `home/sdk/scripts` folder.

Use the 'npm install' command via the command line (requires [Node](https://nodejs.org/en/download/)) to retrieve the SDK:

```no-highlight
npm install vss-web-extension-sdk
```

> To learn more about the SDK, visit the [Client SDK GitHub Page](https://github.com/Microsoft/vss-sdk).

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
	<script src="sdk/scripts/VSS.SDK.js"></script>
</head>
<body>
	<script type="text/javascript">VSS.init();</script>
	<h1>Hello World</h1>
	<script type="text/javascript">VSS.notifyLoadSucceeded();</script>
</body>
</html>
```

## Your extension's manifest file: `vss-extension.json`

* ***Every*** extension must have an extension manifest file
* Please read the [extension manifest reference](../develop/manifest.md)
* Find out more about the contribution points in the [extension points reference](../reference/targets/overview.md)

Create a json file (`vss-extension.json`, for example) in the `home` directory with the following contents:

```json
	{
		"manifestVersion": 1,
		"id": "sample-extension",
		"version": "0.1.0",
		"name": "My first sample extension",
		"description": "A sample Visual Studio Services extension.",
		"publisher": "fabrikamdev",
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

>[!NOTE]
>The **publisher** here will need to be changed to your publisher name. To create a publisher now, visit [Package/Publish/Install](../publish/overview.md). 


### Icons
The **icons** stanza specifies the path to your extension's icon in your manifest. 

> **You will need to add a square image titled `logo.png` as shown in the extension manifest.**

### Contributions
The **contributions** stanza adds your contribution - the Hello hub - to your extension manifest.

For each contribution in your extension, the manifest defines
- the type of contribution, hub, 
- the contribution target, the work hub group, (check out all of the [targetable hub groups](../reference/targets/overview.md#targetable-hub-groups))
- and the properties that are specific to each type of contribution. For a hub, we have

| Property           | Description                                                                                                                         
|--------------------|----------------------------------------------------------------------------------------|                                
| name               | Name of the hub.					                                                      |                   
| order              | Placement of the hub in the hub group.       										  |                   
| uri 				 | Path (relative to the extension's baseUri) of the page to surface as the hub.          | 

### Scopes
Include the [scopes](../develop/manifest.md#scopes) that your extension requires.
In this case, we need `vso.work` to access work items.

### Files
The **files** stanza states the files that you want to include in your package - your HTML page, your scripts, the SDK script and your logo.
Set `addressable` to `true` unless you include other files that don't need to be URL-addressable.

>[!NOTE]
>For more information about the **extension manifest file**, such as its properties and what they do, check out the [extension manifest reference](../develop/manifest.md).


## Next Steps

Now that you've written your extension, the next steps are to Package, Publish, and Install your extension. You can also check out the 
documentation for Testing and Debugging your extension. 

* [Package, publish, and install extensions](../publish/overview.md)
* [Testing and debugging extensions](../test/debug-in-browser.md)

