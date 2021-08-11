---
title: Add panels on backlog pages | Extensions for Azure DevOps Services
description: Extend Azure DevOps Services with panels on backlogs.
ms.assetid: 34f01da42-5a98-4bc5-981e-3f8d1ffdf163
ms.technology: devops-ecosystem
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 08/22/2016
---

# Add panels on backlog pages

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

Here, we add a simple Hello World extension as a panel on the Portfolio backlog, Product backlog, and Iteration backlog.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

<!---
![panel extension on the Azure DevOps Services Portfolio backlog page](../media-procedures/backlog-pane/portfolio-backlog-pane.png)
-->

![Open panel extension on the Azure DevOps Services Stories backlog page](media/add-panel-intro-show-mapping-hello-world.png)

The custom panel opens in the same space that the mapping panel opens if it were selected.  

![panel extension on the Azure DevOps Services Portfolio backlog page](media/add-panel-show-custom-panel.png)


There are three types of backlogs that can be targets for panel extensions: Portfolio backlogs, Product backlogs, and Iteration backlogs. For the Agile template, this breakdown is as below. This is representative of Scrum and CMMI as well. For custom templates, please consult your process to see which backlogs are requirement or portfolio category. 

<!---
![backlog panel contribution point breakdown](../media-procedures/backlog-pane/backlogPaneContributionPointBreakdown.png)
-->

![backlog panel contribution point breakdown](media/add-panel-show-three-types.png)

See the [Azure DevOps Services Extension Samples](https://github.com/Microsoft/vsts-extension-samples/tree/master/backlogs-panel) on GitHub for the full source of an example extension.

## Update your extension manifest

Update your [extension manifest](../develop/manifest.md) file with the following code:

```json
...
	"contributions": [
		{
			"id": "Fabrikam.HelloWorld.Backlogs.Panel",
			"type": "ms.vss-work-web.backlog-panel",
			"description": "Adds a 'Hello' panel to Product and Iteration backlog pages.",
			"targets": [
				"ms.vss-work-web.requirement-backlog-toolpane",
				"ms.vss-work-web.portfolio-backlog-toolpane",
				"ms.vss-work-web.iteration-backlog-toolpane"
			],
			"properties": {
				"title": "Hello Panel Pane",
				"name": "Hello Panel",
				"uri": "index.html",
				"registeredObjectId": "backlogPanelObject"
			}
		}
	],
	"scopes": [ 
		"vso.work" 
	]
... 
```

### Contribution
For each contribution in your extension, the manifest defines
* the type of contribution (backlog panel in this case),
* the contribution target (the requirements, portfolio, and iteration backlogs in this case),
* and the properties that are specific to each type of contribution. For panels, we have


| Property           | Description                                                                                                                         
|--------------------|----------------------------------------------------------------------------------------|                
| title              | Tooltip text that appears on the menu item                                        |                   
| name               | What appears in the dropdown for panel selection					                  |                   
| uri                | Path (relative to the extension's base URI) of the page to surface as the panel     |                   
| registeredObjectId | Id of the object registered for the panel                                             |    


Learn about all of the places where you can add an extension in the [contributions reference](/previous-versions/azure/devops/extend/reference/targets/overview).

### Scopes
Include the [scopes](manifest.md#scopes) that your extension requires.
In this case, we need `vso.work` to access work items.



## Get selection events
To get selection events (information about what work items are selected) implement this interface on your registered object.

```javascript
...
	IContributedPanel {
		workItemSelectionChanged: (selectedWorkItems) => void;
	}
...
```

## Next steps

> [!div class="nextstepaction"]
> [Package, Publish, and Install](../publish/overview.md)
or
> [!div class="nextstepaction"]
> [Test and Debug](https://docs.microsoft.com/previous-versions/azure/devops/extend/test/debug-in-browser)
