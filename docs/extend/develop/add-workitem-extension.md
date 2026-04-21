---
title: Extend the work item form
titleSuffix: Azure DevOps
description: Add groups, pages, menu actions, observers, and controls to the work item form in Azure DevOps extensions.
ms.assetid: bffc76b7-f6ba-41f0-8460-ccb44d45d670
ai-usage: ai-assisted
ms.subservice: azure-devops-ecosystem
ms.topic: how-to
ms.custom: UpdateFrequency3
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
---

# Extend the work item form

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use extensions to customize the work item form by adding groups, pages, menu actions, observers, or custom controls.

[!INCLUDE [extension-samples-tip](../includes/extension-samples-tip.md)]

* [Add a group](#addagroup)
* [Add a page (tab)](#addapage) 
* [Add a menu action](#addmenuaction)
* [Add a custom control](./custom-control.md)
* [Listen for events](#listenforevents)
* [Configure contributions](#showcontributions)

For the full source code, see the **UI** example in the [Azure DevOps extension samples](https://github.com/Microsoft/vso-extension-samples/tree/master/ui) on GitHub.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

<a name="addagroup"></a>

## Add a group

:::image type="content" source="media/add-workitem-extension-group.png" alt-text="Screenshot that shows the toolbar item in work item form.":::

To add a group to the main page, add a contribution to your extension manifest with type `ms.vss-work-web.work-item-form-group` targeting `ms.vss-work-web.work-item-form`:

 ```json
"contributions": [
    {  
        "id": "sample-work-item-form-group",
        "type": "ms.vss-work-web.work-item-form-group",
        "description": "Custom work item form group",
        "targets": [
            "ms.vss-work-web.work-item-form"
        ],
        "properties": {
            "name": "My Group",
            "uri": "workItemGroup.html",
            "height": 600
        }
    }
]
```

### Properties

| Property     | Description           |
|--------------|-----------------------|
| `name`       | Text that appears on the group.   |
| `uri`        | URI to the HTML page loaded in the IFrame. |
| `height`     | (Optional) Height of the group. Default is 100%. |

### JavaScript sample

This example registers a provider that responds to work item form events. It uses the `WorkItemFormService` to read field values when the work item loads.

```typescript
import { IWorkItemFormService, WorkItemTrackingServiceIds } from "azure-devops-extension-api/WorkItemTracking";
import * as SDK from "azure-devops-extension-sdk";

async function getWorkItemFormService(): Promise<IWorkItemFormService> {
    return await SDK.getService<IWorkItemFormService>(WorkItemTrackingServiceIds.WorkItemFormService);
}

SDK.init();

SDK.ready().then(() => {
    SDK.register(SDK.getContributionId(), () => {
        return {
            // Called when the active work item is modified
            onFieldChanged: (args) => {
                console.log("onFieldChanged", JSON.stringify(args));
            },

            // Called when a new work item is being loaded in the UI
            onLoaded: async (args) => {
                const service = await getWorkItemFormService();
                const values = await service.getFieldValues([
                    "System.Id", "System.Title", "System.State", "System.CreatedDate"
                ]);
                console.log("onLoaded", JSON.stringify(values));
            },

            // Called when the active work item is being unloaded in the UI
            onUnloaded: (args) => {
                console.log("onUnloaded", JSON.stringify(args));
            },

            // Called after the work item has been saved
            onSaved: (args) => {
                console.log("onSaved", JSON.stringify(args));
            },

            // Called when the work item is reset to its unmodified state (undo)
            onReset: (args) => {
                console.log("onReset", JSON.stringify(args));
            },

            // Called when the work item has been refreshed from the server
            onRefreshed: (args) => {
                console.log("onRefreshed", JSON.stringify(args));
            }
        };
    });
});
```

[!INCLUDE [Events](../includes/add-workitem-extension-sharedevents.md)]

<a name="addapage"></a>

## Add a page

A new page is rendered as a tab on the work item form. New pages appear next to the **Details** tab.

:::image type="content" source="media/add-workitem-extension-page.png" alt-text="Screenshot that shows the new page as a tab on the work item form.":::

To add a page to the work item form, add a contribution to your extension manifest with type `ms.vss-work-web.work-item-form-page` targeting `ms.vss-work-web.work-item-form`:

```json
"contributions": [
    {  
        "id": "sample-work-item-form-page",
        "type": "ms.vss-work-web.work-item-form-page",
        "description": "Custom work item form page",
        "targets": [
            "ms.vss-work-web.work-item-form"
        ],
        "properties": {
            "name": "My Page",
            "uri": "workItemPage.html"
        } 
    }
]
```

### Properties

| Property     | Description           |
|--------------|-----------------------|
| `name`       | Text that appears on the tab page.   |
| `uri`        | URI to the HTML page loaded in the IFrame. |

### JavaScript sample

See the JavaScript sample in the form group section. The name of the registered object should match the `id` of the contribution.

[!INCLUDE [Events](../includes/add-workitem-extension-sharedevents.md)]

<a name="showcontributions"></a>

## Configure contributions

In Azure DevOps Services, group extensions appear at the end of the second column by default, and page contributions appear as the last tab. Control contributions aren't shown by default - users must manually add them to the form. In Azure DevOps Server, see [Configure work item form extensions](./configure-workitemform-extensions.md) to show, hide, or move contributions.

<a name="addmenuaction"></a>

## Add menu action

:::image type="content" source="media/add-workitem-extension-toolbar.png" alt-text="Screenshot that shows how to add an item to the work item toolbar.":::

To add an item to the work item toolbar, add this contribution to your extension manifest. The item appears in the vertical ellipsis (**...**) dropdown menu.

 ```json
"contributions": [
    {  
       "id": "sample-work-item-menu",  
       "type": "ms.vss-web.action",  
       "description": "Sample toolbar item which updates the title of a work item",  
       "targets": [  
           "ms.vss-work-web.work-item-context-menu"  
       ],  
       "properties": {  
           "text": "Try me!",  
           "title": "Updates the title of the work item from the extension",  
           "toolbarText": "Try me!",  
           "icon": "images/show-properties.png",  
           "uri": "menu-workItemToolbarButton.html"  
       }  
    }
]
```

### Properties

| Property     | Description           |
|--------------|-----------------------|
| `text`         | Text that appears on the toolbar item. |
| `title`        | Tooltip text that appears on the menu item. |
| `toolbarText`  | Text that appears when the item is being hovered over. |
| `uri`          | URI to a page that registers the toolbar action handler. |
| `icon`         | URL to an icon that appears on the menu item. Relative URLs are resolved using `baseUri`. |
| `group`        | Determines where the menu item appears, related to others. Toolbar items with the same group name are grouped and divided by a separator from the rest of the items. |
| `registeredObjectId` | (Optional) Name of the registered menu action handler. Defaults to the contribution ID. |

<a name="listenforevents"></a>  

## Listen for events

Observers listen to work item events without any UI on the form. Use observers to listen for the `onSaved` event, since observers live outside the form and aren't destroyed when the form dialog closes.

 ```json
"contributions": [
    {  
        "id": "sample-work-item-form-observer",
        "type": "ms.vss-work-web.work-item-notifications",
        "description": "Gets events about the current work item form for the 'Try Me!' toolbar button",
        "targets": [
            "ms.vss-work-web.work-item-form"
        ],
        "properties": {
            "uri": "myformobserver.html"
        }
    }
]
```

### Properties

| Property     | Description           |
|--------------|-----------------------|
| `uri`        | URI to a page that hosts the scripts listening to events. |

[!INCLUDE [Events](../includes/add-workitem-extension-sharedevents.md)]

### JavaScript sample

The following example registers an observer by using the modern SDK:

```typescript
import * as SDK from "azure-devops-extension-sdk";

SDK.init();

SDK.ready().then(() => {
    SDK.register(SDK.getContributionId(), () => {
        return {
            onFieldChanged: (args) => {
                // Handle field changes
            },
            onLoaded: (args) => {
                // Handle work item loaded
            },
            onUnloaded: (args) => {
                // Handle work item unloaded
            },
            onSaved: (args) => {
                // Handle work item saved
            },
            onReset: (args) => {
                // Handle work item reset (undo)
            },
            onRefreshed: (args) => {
                // Handle work item refreshed
            }
        };
    });
});
```

## Compatibility notes

### Action vs. action-provider

Use `ms.vss-web.action-provider` when dynamically loading menu items by using `getMenuItems` on the menu handler. Use `ms.vss-web.action` when your menu items are static and defined in the manifest.

### Deprecated patterns

The following patterns are no longer supported:

- `require("VSS/Events/Document")` - not supported with New Boards Hub
- `SDK.js` script tag with `usePlatformScripts: true` - use the npm package `azure-devops-extension-sdk` instead

## Related content

- [Add a custom control to the work item form](custom-control.md)
- [Configure work item form extensions (on-premises)](configure-workitemform-extensions.md)
- [Extension manifest reference](manifest.md)
- [Contribution model](contributions-overview.md)
