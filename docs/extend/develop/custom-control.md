---
title: Add a custom control to the work item form | Extensions for Azure DevOps
description: Learn how to extend the work item form by adding a custom control in Azure DevOps.
ms.contentid: 0956ACA7-B1C4-443F-A79A-A62EDD02FC15
ms.subservice: azure-devops-ecosystem
ms.custom: engagement-fy23, devx-track-js
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 09/09/2024
---

# Add a custom control to the work item form

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Custom controls allow you to change how users view and interact with a field on the work item form. The following article walks you through how this sample custom control was built. This article shows you how to build your own custom control.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Prerequisites

Include the azure-devops-extension-sdk in your project:
1. Install the SDK via npm: `npm install azure-devops-extension-sdk`.
2. Initialize it in your JavaScript code: 
    ```javascript
    import * as SDK from "azure-devops-extension-sdk";
    SDK.init();
    ```

## Add the custom control

To add a control to the main page, add a contribution to your [extension manifest](../develop/manifest.md). The type of contribution should be `ms.vss-work-web.work-item-form-control`
and it should target the `ms.vss-work-web.work-item-form` contribution.

```json
"contributions": [
    {  
        "id": "sample-work-item-form-control",
        "type": "ms.vss-work-web.work-item-form-control",
        "description": "Custom work item form control",
        "targets": [
            "ms.vss-work-web.work-item-form"
        ],
        "properties": {
            "name": "My Control",
            "uri": "workItemControl.html",
            "height": 600
        }
    }
],
"manifestVersion": 1.0,
    "scopes": [
        "vso.work"
    ]
```

The work item form adds an IFrame to host the custom control.

### Properties

| Property     | Description           |
|--------------|-----------------------|
| `name`         | Text that appears on the group.   |
| `uri`          | URI to a page that hosts the html that is loaded by the IFrame.
| `height`       | (Optional) Defines the height of the IFrame. When omitted, it's 50 pixels.
| `inputs`       | The values a user provides within the form.

If you want to dynamically resize the IFrame, you can use the `resize method` available in the client SDK.

A custom control on the work item form is another type of [contribution](./contributions-overview.md), like [group & page contribution](./add-workitem-extension.md). The main difference is that a control contribution can take a set of user inputs while group and page contributions can't.

## Control contribution inputs

To define the inputs for your control contribution, use the `inputs` property in the contribution object in the manifest. 

In the following sample you see two inputs: `FieldName` and `Colors`. `FieldName` specifies with which field the control associates. `Colors` configures which colors map to which values in the control. 

The values for the inputs get provided by the users when they add to the work item form. These values get passed to the control contribution when it's loaded on the form.

```json
"inputs": [
    {
        "id": "FieldName",
        "description": "The field associated with the control.",
        "type": "WorkItemField",
        "properties": {
            "workItemFieldTypes": ["String"]
        },
        "validation": {
            "dataType": "String",
            "isRequired": true
        }
    },
    {
        "id": "Colors",
        "description": "The colors that match the values in the control.",
        "type": "string",
        "validation": {
            "dataType": "String",
            "isRequired": false
        }
    }
]
```

The following properties define a user input that the contribution can use:

* **id** - A unique ID for the input.
* **description** - A few sentences describing the input.
* **type (optional)** - The type of input.
  * Valid values: 
    * `WorkItemField` - Indicates that the input is a Work Item field. The value provided by the user for this input should be a reference name for the valid work item field.
* **properties (optional)** - Custom properties for the input.
  * Valid keys:
    * `workItemFieldTypes` - Defines an array of field types that this input supports. Valid values:
        * `String`
        * `Integer`
        * `DateTime`
        * `PlainText`
        * `HTML`
        * `TreePath`
        * `History`
        * `Double`
        * `Guid`
        * `Boolean`
        * `Identity`
        * `PicklistString`
        * `PicklistInteger`
        * `PicklistDouble`
* **validation** - A set of properties that defines which values are considered valid for the input.
    * Valid keys:
        * `dataType` - Defines the data type of the input value. Valid values for this property:
            * `String`
            * `Number`
            * `Boolean`
            * `Field`
        * `isRequired` - A boolean value, which indicates whether the input is required to have a value.

## JavaScript sample

A control extension works like a group or page extension with one difference that it can take certain user inputs. To read the user input values, use `VSS.getConfiguration().witInputs`. The following sample shows how to register an object that's called when events occur on the work item form that may affect your contributed control. It also shows how to read input values provided by user for this control.

```typescript
import { Control } from "control";
import * as SDK from "azure-devops-extension-sdk";
import * as ExtensionContracts from "azure-devops-extension-api/WorkItemTracking/WorkItemTracking";

let control;

const provider = () => {
    return {
        onLoaded: (workItemLoadedArgs) => {
            // create the control
            const config = SDK.getConfiguration();
            const fieldName = config.witInputs["FieldName"];
            const colors = config.witInputs["Colors"];
            control = new Control(fieldName, colors);
        },
        onFieldChanged: (fieldChangedArgs) => {
            const changedValue = fieldChangedArgs.changedFields[control.getFieldName()];
            if (changedValue !== undefined) {
                control.updateExternal(changedValue);
            }
        }
    };
};

SDK.init();
SDK.ready().then(() => {
    SDK.register(SDK.getContributionId(), provider);
});
```

The following screenshot shows a sample custom work item control for the *Priority* field.

> [!div class="mx-imgBorder"]
> ![Screenshot of custom control in work item form.](media/customcontrol.png)
