---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Add an Action | Extensions for Visual Studio Team Services
description: Add an action for your extension that extends Visual Studio Team Services.
ms.assetid: 7b117bbf-f188-41ce-8ff6-3723ebccea81
ms.manager: douge
ms.author: elbatk
ms.date: 08/22/2016
ms.topic: get-started-article
---

# Add a menu action
In this example, we'll add an action to the query context menu in the work item queries hub.

## Prerequisites for this article
- You'll need to create a web app for your action, which can be found in the [hub example](./add-hub.md).
- If you haven't, take a look at the [write your first extension tutorial](../get-started/node.md) to learn about things such as:
    - **The client SDK: [VSS.sdk.js](../get-started/node.md#client-sdk)**
    - **The [extension manifest](../get-started/node.md#extension-manifest)**
    - **General extension file structure**

## Update extension manifest file

Below is the code snippet that adds your action to the contributions section of your [extension manifest](../develop/manifest.md).
```json
...
    "contributions": [
        {
            "id": "myAction",
            "type": "ms.vss-web.action",
            "description": "Run in Hello hub action",
            "targets": [
                "ms.vss-work-web.work-item-query-menu"
            ],
            "properties": {
                "text": "Run in Hello hub",
                "title": "Run in Hello hub",
                "icon": "images/icon.png",
                "groupId": "actions",
                "uri": "action.html"
            }
        }
    ]
...
```

### Properties
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>```text```</td>
<td>Text that will appear on the menu item.</td>
</tr>
<tr>
<td>```title```</td>
<td>Tooltip text that will appear on the menu item.</td>
</tr>
<tr>
<td>```icon```</td>
<td>URL to an icon that will appear on the menu item. Relative URLs are resolved using baseUri.</td>
</tr>
<tr>
<td>```groupId```</td>
<td>Determines where this menu item will appear in relation to the others. [How to discover menu group identifiers](../test/discover-menu-group-ids.md)</td>
</tr>
<tr>
<td>```uri```</td>
<td>URI to a page that registers the menu action handler (see below).</td>
</tr>
<tr>
<td>```registeredObjectId```</td>
<td>(Optional) Name of the registered menu action handler. Defaults to the contribution id.</td>
</tr>
</tbody>
</table>

Learn about all of the places where you can add actions in the [contributions reference](../reference/targets/overview.md).

## Your HTML page

Your menu action will be represented by a JavaScript script embedded in an HTML file. Save the following contents in a file and location that matches the reference to it 
in your extension's manifest file.

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Action Sample</title>
	</head>
	<body>
		<div>
			The end user doesn't see the content on this page.
			It is only in the background to handle the contributed menu item being clicked.
		</div>
	</body>
	</html>
```

## Your JavaScript
The script below registers the handler object to handle the action, place it in the `head` section of the HTML page above.
```html
<script src="sdk/scripts/VSS.SDK.js"></script>
<script>
    VSS.init();

    // Use an IIFE to create an object that satisfies the IContributedMenuSource contract
    var menuContributionHandler = (function () {
        "use strict";
        return {
            // This is a callback that gets invoked when a user clicks the newly contributed menu item
            // The actionContext parameter contains context data surrounding the circumstances of this
            // action getting invoked.
            execute: function (actionContext) {
                alert("Hello, world");
            }
        };
    }());

    // Associate the menuContributionHandler object with the "myAction" menu contribution from the manifest.
    VSS.register("myAction", menuContributionHandler);
</script>
```

## Next Steps:

Now that you've written your extension, the next steps are to Package, Publish, and Install your extension. You can also check out the 
documentation for Testing and Debugging your extension. 

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
