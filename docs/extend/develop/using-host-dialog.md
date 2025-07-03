---
ms.subservice: azure-devops-ecosystem
title: Create modal dialogs in Azure DevOps extensions
description: Learn how to implement modal dialogs using HostDialogService in Azure DevOps extensions with the azure-devops-extension-sdk package. Build interactive dialogs with custom content, validation, and user interactions.
ms.assetid: 59748E0E-2D5E-FF79-ED0E-4B76037A8010
ms.topic: how-to
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/02/2025
# customer-intent: As an Azure DevOps extension developer, I want to create modal dialogs that block user interaction with the entire page so I can collect user input, display forms, and provide focused user experiences in my extensions.
---

# Create modal dialogs in extensions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Modal dialogs provide a powerful way to create focused user experiences in Azure DevOps extensions. The HostDialogService lets you present a modal dialog that blocks user interaction with the entire Azure DevOps interface until the dialog gets dismissed. This action ensures that users complete important tasks or provide required information.

Use modal dialogs in your extensions to:
- Collect user input through forms
- Display confirmation messages for critical actions
- Show detailed information that requires user attention
- Guide users through multi-step processes

> [!IMPORTANT]
> When you create modal dialogs with `HostDialogService`, they block interaction with the entire Azure DevOps page, not just your extension. This approach provides a true modal experience but you should use it thoughtfully to avoid disrupting the user workflow.

## Prerequisites 

Before you can create modal dialogs in your Azure DevOps extension, ensure you have the following:

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
| **SDK imports** | Required modules | Import SDK and services: `import * as SDK from "azure-devops-extension-sdk"` and `import { CommonServiceIds, IHostDialogService } from "azure-devops-extension-api"` |

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
    <head>
        <script src="node_modules/azure-devops-extension-sdk/lib/SDK.js"></script>
    </head>
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
        <script type="module">
            import * as SDK from "azure-devops-extension-sdk";
            
            SDK.init();
            const registrationForm = (function() {
                const callbacks = [];
                
                function inputChanged() {
                    // Execute registered callbacks
                    for(let i = 0; i < callbacks.length; i++) {
                        callbacks[i](isValid());
                    }
                }
                
                function isValid() {
                    // Check whether form is valid or not
                    return !!(name.value) && !!(dateOfBirth.value) && !!(email.value);
                }
                
                function getFormData() {
                    // Get form values
                    return {
                        name: name.value,
                        dateOfBirth: dateOfBirth.value,
                        email: email.value  
                    };
                }

                const name = document.getElementById("inpName");
                const dateOfBirth = document.getElementById("inpDob");
                const email = document.getElementById("inpEmail");
                
                name.addEventListener("change", inputChanged);
                dateOfBirth.addEventListener("change", inputChanged);
                email.addEventListener("change", inputChanged);
                
                return {
                    isFormValid: function() {
                        return isValid();   
                    },
                    getFormData: function() {
                        return getFormData();
                    },
                    attachFormChanged: function(cb) {
                         callbacks.push(cb);
                    }
                };
            })();
            
            // Register form object to be used across this extension
            SDK.register("registration-form", registrationForm);
        </script>
    </body>
</html>
``` 

## Show the dialog

To show the dialog (for example, when a user selects an action on a toolbar or menu), call the `openDialog` function on an instance of the HostDialogService, passing the fully qualified identifier of the dialog content, for example `my-publisher.my-extension.registration-form` and any dialog options:

```javascript
    import * as SDK from "azure-devops-extension-sdk";
    
    SDK.getService<IHostDialogService>(CommonServiceIds.HostDialogService).then((dialogService) => {
        const extensionCtx = SDK.getExtensionContext();
        // Build absolute contribution ID for dialogContent
        const contributionId = `${extensionCtx.publisherId}.${extensionCtx.extensionId}.registration-form`;

        // Show dialog
        const dialogOptions = {
            title: "My Dialog",
            width: 800,
            height: 600
        };

        dialogService.openDialog(contributionId, dialogOptions);
    });
```

## Advanced dialog features

A function can be called when the OK button is selected. This function is specified by `getDialogResult` in the options you provide when showing the dialog.

If a call to `getDialogResult` returns a non-null value, this value is then passed to the function specified by `okCallback` (also in the options) and the dialog is closed.

In this example, the `attachFormChanged` callback gets called when inputs on the form change. Based on whether the form is valid or not, the OK button is enabled or disabled.

```javascript
    import * as SDK from "azure-devops-extension-sdk";
    import { CommonServiceIds, IHostDialogService } from "azure-devops-extension-api";
    
    SDK.getService<IHostDialogService>(CommonServiceIds.HostDialogService).then((dialogService) => {
        let registrationForm: any;
        const extensionCtx = SDK.getExtensionContext();
        const contributionId = `${extensionCtx.publisherId}.${extensionCtx.extensionId}.registration-form`;

        const dialogOptions = {
            title: "Registration Form",
            width: 800,
            height: 600,
            getDialogResult: () => {
                // Get the result from registrationForm object
                return registrationForm ? registrationForm.getFormData() : null;
            },
            okCallback: (result: any) => {
                // Log the result to the console
                console.log(JSON.stringify(result));
            }
        };

        dialogService.openDialog(contributionId, dialogOptions).then((dialog) => {
            // Get registrationForm instance which is registered in registrationFormContent.html
            dialog.getContributionInstance("registration-form").then((registrationFormInstance) => {
            
                // Keep a reference of registration form instance (to be used previously in dialog options)
                registrationForm = registrationFormInstance;
                
                // Subscribe to form input changes and update the Ok enabled state
                registrationForm.attachFormChanged((isValid: boolean) => {
                    dialog.updateOkButton(isValid);
                });
                
                // Set the initial ok enabled state
                registrationForm.isFormValid().then((isValid: boolean) => {
                    dialog.updateOkButton(isValid);
                });
            });                            
        });
    });

```

## Control the OK button

Initially, the OK button is disabled. However, you can enable/disable this button by calling the `updateOkButton` method on the dialog: 

```javascript
    dialogService.openDialog(contributionId, dialogOptions).then((dialog) => {
        // Set true/false to enable/disable ok button
        dialog.updateOkButton(true); 
    });
```

## Pass values to the dialog

It's possible to pass initial values to dialog content when it is opened in the host dialog.

```json
    {
        "id": "registration-form",
        "type": "ms.vss-web.control",
        "description": "The content displayed in the dialog",
        "targets": [],
        "properties": {
            "uri": "registration-form.html?id={{myId}}"
        }
    }
```

When the dialog is opened, following options need to be specified to pass `myId`:

```javascript
    const dialogOptions = {
        title: "My Dialog Title",
        width: 800,
        height: 600,
        urlReplacementObject: { myId: new Date().getTime() }
    };
```

## Customize dialog buttons

The `okText` and `cancelText` attributes can be used to specify alternate titles for the OK and Cancel buttons:

```javascript
    const dialogOptions = {
        title: "My Dialog Title",
        width: 800,
        height: 600,
        okText: "Yes",
        cancelText: "No" 
    };
```

To not show any buttons on the dialog, you can set the `buttons` attribute to `[]`:

```javascript
    const dialogOptions = {
        title: "My Dialog Title",
        width: 800,
        height: 600,
        buttons: []
    };
```

## Related resources

If you have a question or are looking for more information, consider going to one of the following areas:

- [Azure DevOps on Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops)
- [Developer Community](https://developercommunity.visualstudio.com/content/problem/post.html?space=21)


