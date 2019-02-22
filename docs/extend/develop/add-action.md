---
ms.prod: devops
ms.technology: devops-ecosystem
title: Add an Action | Extensions for Azure DevOps Services
description: Add an action for your extension that extends Azure DevOps Services.
ms.assetid: 7b117bbf-f188-41ce-8ff6-3723ebccea81
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/22/2016
---

# Add a menu action
In this example, we'll add an action to the query context menu in the work item queries hub.

## Prerequisites for this article

- You'll need to create a web app for your action, which can be found in the [hub example](./add-hub.md).
- If you haven't, take a look at the [write your first extension tutorial](../get-started/node.md) to learn about the basics.

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
| Property           | Description                                                                                                                         
|--------------------|-----------------------------------------------------------------------------------------------------------------|
| text               | Text that will appear on the menu item.                                                                         |                  
| title              | Tooltip text that will appear on the menu item.                                                                 |                   
| icon               | URL to an icon that will appear on the menu item. Relative URLs are resolved using baseUri.                     |                   
| groupId            | Determines where this menu item will appear in relation to the others. [How to discover menu group identifiers](../test/discover-menu-group-ids.md). |
| uri                | URI to a page that registers the menu action handler (see below).                                               |                   
| registeredObjectId | (Optional) Name of the registered menu action handler. Defaults to the contributor id.                          |                   

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

> We aliased `lib` to be `node_modules/vss-web-extension-sdk/lib` in our `vss-extension.json` manifest file.

```typescript
<script src="lib/VSS.SDK.min.js"></script>
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

## Next Steps

Now that you've written your extension, the next steps are to Package, Publish, and Install your extension. You can also check out the 
documentation for Testing and Debugging your extension. 

* [Package, publish, and install extensions](../publish/overview.md)
* [Testing and debugging extensions](../test/debug-in-browser.md)
