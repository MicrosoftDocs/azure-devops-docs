---
title: Add tabs on backlog pages | Extensions for Azure DevOps Services
description: Learn how to create a web page in an iframe, and host it in Azure DevOps Services as a tab on the backlog pages.
ms.assetid: 3D0B51DA-66AA-45C7-B9F1-08973CFF7E5E
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 03/21/2019
---

# Add tabs on backlog pages

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

If you have a web page that can be hosted in an iframe, it can also be hosted in Azure DevOps Services. This webpage would be a tab on the backlog pages.
In this example, we'll add a Hello World tab on the Product Backlog and the Iteration Backlog.

![Tab location on the Azure DevOps Services Product Backlog page](../media/backlog-tab/product-backlog-tab.png)

![Tab location on the Azure DevOps Services Iteration Backlog page](../media/backlog-tab/iteration-backlog-tab.png)

## Create your web page

[!INCLUDE [Web_page](../includes/procedures/create-web-page.md)]

## Update your extension manifest
Update your [extension manifest](../develop/manifest.md) file with the following code:

```json
...

	"contributions": [
		{
	        "id": "Fabrikam.HelloWorld.Backlog.Tabs",
	        "type": "ms.vss-web.tab",
	        "description": "Adds a 'Hello' tab to the Product and Iteration backlog tabs.",
	        "targets": [
	            "ms.vss-work-web.product-backlog-tabs",
				"ms.vss-work-web.iteration-backlog-tabs"
	        ],
	        "properties": {
	            "name": "Hello",
	            "uri": "hello-world.html",
				"registeredObjectId": "backlogTabObject"
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
			"path": "scripts", "addressable": true
		},
		{
			"path": "sdk/scripts", "addressable": true
		},
		{
			"path": "images/logo.png", "addressable": true
		}
	]
...
```

### Contributions
The **contributions** stanza contains information about your tasks.


For each contribution in your extension, the manifest defines
	
* the type of contribution (tab in this case),
* the contribution target (the product or iteration backlog tabs in this case),
* and the properties that are specific to each type of contribution. For a tab, we have

| Property           | Description                                                                                                                         
|--------------------|----------------------------------------------------------------------------------------|                                
| name               | Name of the hub					                                                      |                   
| uri                | Path (relative to the extension's base URI) of the page to surface as the tab       |                   
| registeredObjectId | ID of the object registered for the tab. Include code like the example below in the html file indicated in the "uri" property of the contribution shown previously. | 

### Scopes
It includes the [scopes](./manifest.md#scopes) that your extension requires.
In this case, we need `vso.work` to access work items.

### Files
Include all of the files your extension accesses. <br>
For your files, set `addressable` to `true` unless you include other files that don't need to be URL-addressable.
	
## Example registeredObjectId
```javascript
SDK.register("backlogTabObject", {
    pageTitle: function(state) {
        return "Hello Tab";
    },
	updateContext: function(tabContext) {							 
	},
    isInvisible: function(state) {
        return false;
    },
    isDisabled: function(state) {
        return false;
    }
});
```

Learn about all of the places where you can add a hub in [Extensibility points](../reference/targets/overview.md).

## Next steps

> [!div class="nextstepaction"]
> [Package, Publish, and Install](../publish/overview.md)
or
> [!div class="nextstepaction"]
> [Test and Debug](/previous-versions/azure/devops/extend/test/debug-in-browser)
