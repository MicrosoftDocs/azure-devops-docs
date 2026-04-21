---
ms.subservice: azure-devops-ecosystem
ms.custom: devx-track-js, UpdateFrequency3
title: Add a menu action
titleSuffix: Azure DevOps
description: Add a context menu action to your Azure DevOps extension.
ms.assetid: 7b117bbf-f188-41ce-8ff6-3723ebccea81
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ai-usage: ai-assisted
---

# Add a menu action

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this example, we add an action to the query context menu in the work item queries hub.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Prerequisites

- [Develop a web extension](../get-started/node.md).
- [Create a web app for your action](./add-hub.md).

## Update the extension manifest

Add your action to the contributions section of your [extension manifest](../develop/manifest.md).
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

Your menu action is represented by a JavaScript script embedded in an HTML file. Save the following contents in a file and location that matches the reference to it in your extension's manifest file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Action Sample</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
    <script>
        window.requirejs.config({
            enforceDefine: true,
            paths: {
                'SDK': './lib/SDK.min'
            }
        });
        window.requirejs(['SDK'], function (SDK) {
            SDK.init();
            SDK.ready().then(() => {
                // Register the menu action handler
                SDK.register(SDK.getContributionId(), {
                    execute: function (actionContext) {
                        alert("Hello, world");
                    }
                });
            });
        });
    </script>
</head>
<body>
    <div>
        The end user doesn't see the content on this page.
        It runs in the background to handle the contributed menu item being selected.
    </div>
</body>
</html>
```

[!INCLUDE [tip-for-more-information](../includes/tip-for-more-information.md)]

## Next steps

Package, publish, and install your extension.

* [Package, publish, and install extensions](../publish/overview.md)
* [Testing and debugging extensions](/previous-versions/azure/devops/extend/test/debug-in-browser)
