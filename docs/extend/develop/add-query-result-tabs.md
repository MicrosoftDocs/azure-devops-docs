---
title: Add tabs on query results | Extensions for Azure DevOps Services
description: Extend Azure DevOps Services with your own query results tab.
ms.assetid: b3a55a38-f4c0-464f-b689-86582c430b84
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 05/15/2018
---

# Add tabs on query result pages

If you have a web page that can be hosted in an iframe, it can be hosted in Azure DevOps Services as a tab on the query result pages.
In this example, we'll add a simple Hello World tab on query results.

![Tab location on the Azure DevOps Services Query Results](../reference/targets/vss/work/web/_img/queryResultsPivotTab.png)

## Create your web page

[!INCLUDE [Web_page](../_shared/procedures/create-web-page.md)]

## Update your extension manifest
Update your [extension manifest](../develop/manifest.md) file with the following code:

```json
...

	"contributions": [
		{
            "id": "Fabrikam.HelloTab.Query.Tabs",
            "type": "ms.vss-web.tab",
            "description": "Adds a 'Hello' tab to the query results",
            "targets": [
                "ms.vss-work-web.query-tabs"
            ],
            "properties": {
                "uri": "hello-query-tab.html",
                "title": "Hello",
                "name": "Hello"
            }
        }
	],
	"scopes": [
		"vso.work"
	],
	"files": [
		{
			"path": "hello-query-tab.html", "addressable": true
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
* the contribution target (the query tabs in this case),
* and the properties that are specific to each type of contribution. For a tab, we have

| Property           | Description                                                                                                                         
|--------------------|----------------------------------------------------------------------------------------|                                
| name               | Name of the tab			                                                      |                   
| uri                | Path (relative to the extension's base URI) of the page to surface as the tab       |                   
| title              | Title of the tab to display                                                          | 

### Scopes
It includes the [scopes](./manifest.md#scopes) that your extension requires.
In this case, we need `vso.work` to access work items.

### Files
Include all of the files your extension will access. <br>
For your files, set `addressable` to `true` unless you include other files that don't need to be URL-addressable.
	
## Example
```javascript
VSS.register(VSS.getContribution(), {
    pageTitle: function(state) {
        return "Hello";
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

Learn about all of the places where you can add a hub in the [contributions reference](../reference/targets/overview.md).

## Next Steps:

Now that you've written your extension, the next steps are to Package, Publish, and Install it. You can also check out the documentation for Testing and Debugging your extension. 

<div name="row" style="padding-top:15px">
    <div style="vertical-align:top;display:inline-block;float:left;width:50%">
        <div class="index-button" align="right" style="padding-right:10px">
        <a href="../publish/overview.md"><button style="background-color:#4CAF50;border:none;color:white;padding:15px;font-size:16px;margin:4px;cursor:pointer;border-radius:8px;">Package, Publish, and Install</button></a>
        </div>
    </div>
    <div style="vertical-align:top;display:inline-block;float:left;width:50%">
        <div class="index-button" align="left" style="padding-left:10px">
        <a href="../test/debug-in-browser.md"><button style="background-color:#4CAF50;border:none;color:white;padding:15px;font-size:16px;margin:4px;cursor:pointer;border-radius:8px;">Testing and Debugging</button></a>
        </div>
    </div>
</div>
