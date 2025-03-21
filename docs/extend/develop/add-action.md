---
ms.subservice: azure-devops-ecosystem
ms.custom: devx-track-js
title: Add an Action | Extensions for Azure DevOps
description: Add an action for your extension that extends Azure DevOps.
ms.assetid: 7b117bbf-f188-41ce-8ff6-3723ebccea81
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 08/22/2016
---

# Add a menu action

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this example, we add an action to the query context menu in the work item queries hub.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Prerequisites

- [Develop a web extension](../get-started/node.md).
- [Create a web app for your action](./add-hub.md).

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
| text               | Text that appears on the menu item.                                                                         |                  
| title              | Tooltip text that appears on the menu item.                                                                 |                   
| icon               | URL to an icon that appears on the menu item. Relative URLs are resolved using baseUri.                     |                   
| groupId            | Determines where this menu item appears in relation to the others. |
| uri                | URI to a page that registers the menu action handler (see below).                                               |                   
| registeredObjectId | (Optional) Name of the registered menu action handler. Defaults to the contributor ID.                          |                   

Learn about all of the places where you can add actions in [Extensibility points](../reference/targets/overview.md).

## Your HTML page

Your menu action is represented by a JavaScript script embedded in an HTML file. Save the following contents in a file and location that matches the reference to it 
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
			It is only in the background to handle the contributed menu item being selected.
		</div>
	</body>
	</html>
```

## Your JavaScript
The script below registers the handler object to handle the action, place it in the `head` section of the previous HTML page.

> We aliased `lib` to be `node_modules/azure-devops-extension-sdk/lib` in our `sdk-extension.json` manifest file.

```typescript
<script src="lib/SDK.min.js"></script>
<script>
    SDK.init();

    // Use an IIFE to create an object that satisfies the IContributedMenuSource contract
    var menuContributionHandler = (function () {
        "use strict";
        return {
            // This is a callback that gets invoked when a user selects the newly contributed menu item
            // The actionContext parameter contains context data surrounding the circumstances of this
            // action getting invoked.
            execute: function (actionContext) {
                alert("Hello, world");
            }
        };
    }());

    // Associate the menuContributionHandler object with the "myAction" menu contribution from the manifest.
    SDK.register(SDK.getContributionId(), menuContributionHandler);
</script>
```

[!INCLUDE [tip-for-more-information](../includes/tip-for-more-information.md)]

## Next steps

Now that you've written your extension, the next steps are to Package, Publish, and Install your extension. You can also check out the 
documentation for Testing and Debugging your extension. 

* [Package, publish, and install extensions](../publish/overview.md)
* [Testing and debugging extensions](/previous-versions/azure/devops/extend/test/debug-in-browser)
