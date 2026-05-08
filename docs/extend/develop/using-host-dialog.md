---
ms.subservice: azure-devops-ecosystem
title: Create modal dialogs in Azure DevOps extensions
description: Learn how to implement modal dialogs in Azure DevOps extensions with the azure-devops-extension-sdk package. Build interactive dialogs with custom content, validation, and user interactions.
ms.topic: how-to
ms.custom: UpdateFrequency3
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
# customer-intent: As an Azure DevOps extension developer, I want to create modal dialogs that block user interaction with the entire page so I can collect user input, display forms, and provide focused user experiences in my extensions.
---

# Create modal dialogs in extensions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Modal dialogs provide a powerful way to create focused user experiences in Azure DevOps extensions. The dialog service lets you present a modal dialog that blocks user interaction with the entire Azure DevOps interface until the dialog gets dismissed. This action ensures that users complete important tasks or provide required information.

Use modal dialogs in your extensions to:
- Collect user input through forms
- Display confirmation messages for critical actions
- Show detailed information that requires user attention
- Guide users through multi-step processes

> [!IMPORTANT]
> When you create modal dialogs, they block interaction with the entire Azure DevOps page, not just your extension. This approach provides a true modal experience but you should use it thoughtfully to avoid disrupting the user workflow.

## Prerequisites 

| Category | Requirement | Details |
|----------|-------------|---------|
| **Extension setup** | Working extension project | A valid `vss-extension.json` manifest file |
| | Marketplace registration | Extension registered with Visual Studio Marketplace for testing and deployment |
| | Development knowledge | Understanding of [Azure DevOps extension development basics](../get-started/node.md) |
| **Development environment** | Node.js and npm | Node.js version 14 or later with npm installed |
| | Code editor | Visual Studio Code or other IDE recommended |
| | Azure DevOps access | Access to an Azure DevOps organization for testing |
| **Required packages** | Extension SDK | Install: `npm install azure-devops-extension-sdk` |
| | Extension API | Install: `npm install azure-devops-extension-api` |
| **Extension permissions** | Manifest scopes | Include appropriate scopes in `vss-extension.json`, for example: `"vso.work"`, `"vso.project"` |
| **SDK imports** | Required modules | Import SDK: `import * as SDK from "azure-devops-extension-sdk"` and services: `import { CommonServiceIds, IHostPageLayoutService } from "azure-devops-extension-api"` |

## Dialog contents

To start, declare a contribution of type `ms.vss-web.control` in your extension manifest. This contribution represents the content displayed within the dialog. 

```json
    {
        "id": "registration-form",
        "type": "ms.vss-web.control",
        "description": "The content to be displayed in the dialog",
        "targets": [],
        "properties": {
            "uri": "registration-form.html"
        }
    }
```

The `uri` property references a page that is rendered within the content area of the dialog:

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h2 id="header">Register now</h2>
        <p>
            <label>Name:</label>
            <input id="inpName" />
        </p>
        <p>
            <label>Date of birth:</label>
            <input id="inpDob" />
        </p>
        <p>
            <label>Email address:</label>
            <input id="inpEmail" />
        </p>
        <div id="root"></div>
        <script type="text/javascript" src="registration-form.js" charset="utf-8"></script>
    </body>
</html>
```

The corresponding JavaScript file (`registration-form.js`) initializes the SDK, retrieves any configuration passed from the host, and calls `SDK.notifyLoadSucceeded()` when ready:

```javascript
import * as SDK from "azure-devops-extension-sdk";

SDK.init();
SDK.ready().then(() => {
    // Retrieve configuration passed through the dialog options
    const config = SDK.getConfiguration();
    console.log("Dialog configuration:", config);

    SDK.notifyLoadSucceeded();
});
```

> [!NOTE]
> Bundle your JavaScript with a tool like webpack so the `import` statement resolves correctly at runtime. The HTML page references the bundled output file (for example, `registration-form.js`). 

## Show the dialog

To show the dialog (for example, when a user selects an action on a toolbar or menu), call the `openCustomDialog` method on the `IHostPageLayoutService`:

```javascript
import * as SDK from "azure-devops-extension-sdk";
import { CommonServiceIds, IHostPageLayoutService } from "azure-devops-extension-api";

const dialogService = await SDK.getService<IHostPageLayoutService>(CommonServiceIds.HostPageLayoutService);
const extensionCtx = SDK.getExtensionContext();

// Build absolute contribution ID for dialog content
const contributionId = `${extensionCtx.publisherId}.${extensionCtx.extensionId}.registration-form`;

// Show dialog
dialogService.openCustomDialog(contributionId, {
    title: "My Dialog",
    configuration: {
        // Pass initial data to the dialog content
        message: "Please fill out the registration form."
    },
    onClose: (result) => {
        if (result !== undefined) {
            console.log("Dialog result:", result);
        }
    }
});
```

## Handle dialog results

The `onClose` callback in the dialog options receives the result when the dialog is dismissed. Use the `configuration` option to pass initial data to the dialog content.

In this example, the host page opens a custom dialog and handles the result when the dialog closes:

```javascript
import * as SDK from "azure-devops-extension-sdk";
import { CommonServiceIds, IHostPageLayoutService } from "azure-devops-extension-api";

const dialogService = await SDK.getService<IHostPageLayoutService>(CommonServiceIds.HostPageLayoutService);
const extensionCtx = SDK.getExtensionContext();
const contributionId = `${extensionCtx.publisherId}.${extensionCtx.extensionId}.registration-form`;

dialogService.openCustomDialog(contributionId, {
    title: "Registration Form",
    configuration: {
        defaultName: "Contoso User"
    },
    onClose: (result) => {
        if (result !== undefined) {
            // User completed the dialog
            console.log("Registration data:", JSON.stringify(result));
        } else {
            // User dismissed the dialog without completing
            console.log("Dialog was dismissed.");
        }
    }
});
```

In the dialog content page, use `SDK.getConfiguration()` to retrieve the data passed from the host. The dialog content page can't directly communicate back to the host except through the `onClose` result:

```javascript
import * as SDK from "azure-devops-extension-sdk";

SDK.init();
SDK.ready().then(() => {
    const config = SDK.getConfiguration();
    
    // Use configuration values passed from the host
    if (config.defaultName) {
        document.getElementById("inpName").value = config.defaultName;
    }

    SDK.notifyLoadSucceeded();
});
```

## Show a message dialog

For simple confirmation dialogs with OK and Cancel buttons, use `openMessageDialog` instead of a custom dialog:

```javascript
import * as SDK from "azure-devops-extension-sdk";
import { CommonServiceIds, IHostPageLayoutService } from "azure-devops-extension-api";

const dialogService = await SDK.getService<IHostPageLayoutService>(CommonServiceIds.HostPageLayoutService);

dialogService.openMessageDialog("Are you sure you want to proceed?", {
    title: "Confirm Action",
    showCancel: true,
    onClose: (result) => {
        // result is true if OK was selected, false if Cancel
        if (result) {
            console.log("User confirmed.");
        } else {
            console.log("User canceled.");
        }
    }
});
```

## Pass values to the dialog

Pass initial values to dialog content by using the `configuration` option. The dialog content page retrieves these values with `SDK.getConfiguration()`.

```javascript
// Host page: pass configuration when opening the dialog
dialogService.openCustomDialog(contributionId, {
    title: "My Dialog Title",
    configuration: {
        itemId: 42,
        timestamp: new Date().getTime()
    },
    onClose: (result) => {
        if (result !== undefined) {
            console.log("Dialog result:", result);
        }
    }
});
```

```javascript
// Dialog content page: retrieve configuration
import * as SDK from "azure-devops-extension-sdk";

SDK.init();
SDK.ready().then(() => {
    const config = SDK.getConfiguration();
    console.log("Item ID:", config.itemId);
    console.log("Timestamp:", config.timestamp);

    SDK.notifyLoadSucceeded();
});
```

## Customize dialog buttons

For message dialogs, the `okText` and `cancelText` properties specify alternate titles for the OK and Cancel buttons:

```javascript
dialogService.openMessageDialog("Do you want to save changes?", {
    title: "Save Changes",
    showCancel: true,
    okText: "Yes",
    cancelText: "No",
    onClose: (result) => {
        if (result) {
            console.log("User selected Yes.");
        }
    }
});
```

## Enable light dismiss

For custom dialogs, set `lightDismiss` to `true` so that selecting outside the dialog closes it:

```javascript
dialogService.openCustomDialog(contributionId, {
    title: "My Dialog Title",
    lightDismiss: true,
    onClose: (result) => {
        console.log("Dialog closed.");
    }
});
```

> [!NOTE]
> Light dismiss is enabled by default (`true`). Set it to `false` to require the user to explicitly close the dialog.

## Related resources

If you have a question or are looking for more information, consider going to one of the following areas:

- [Azure DevOps on Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops)
- [Developer Community](https://developercommunity.visualstudio.com/content/problem/post.html?space=21)


