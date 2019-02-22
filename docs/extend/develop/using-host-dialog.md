---
ms.prod: devops
ms.technology: devops-ecosystem
title: Modal Dialog | Extensions for Azure DevOps Services
description: Use the modal dialog provided by the host
ms.assetid: 59748E0E-2D5E-FF79-ED0E-4B76037A8010
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Modal dialog

The HostDialogService enables you to present a modal dialog to the user and prevent interaction with all parts of web access until the dialog is dismissed. 

<div class="alert alert-info">
    In contrast to the standard dialog control, a modal dialog presented via the HostDialogService prevents interaction by the user on the entire page, not just within the extension.
</div>


### Dialog contents

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

The `uri` property references a page that will be rendered within the content area of the dialog:

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="sdk/scripts/VSS.SDK.js"></script>
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
        <script>
            VSS.init();
            var registrationForm = (function() {
                var callbacks = [];
                
                function inputChanged() {
                    // Execute registered callbacks
                    for(var i = 0; i < callbacks.length; i++) {
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

                var name = document.getElementById("inpName");
                var dateOfBirth = document.getElementById("inpDob");
                var email = document.getElementById("inpEmail");
                
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
            VSS.register("registration-form", registrationForm);
        </script>
    </body>
</html>
``` 

### Showing the dialog

To show the dialog (for example when a user clicks an action on a toolbar or menu), call the `openDialog` function on an instance of the HostDialogService, passing the fully-qualified identifer of the dialog content, for example `my-publisher.my-extension.registration-form` and any dialog options:

```javascript
    VSS.getService(VSS.ServiceIds.Dialog).then(function(dialogService) {
        var extensionCtx = VSS.getExtensionContext();
        // Build absolute contribution ID for dialogContent
        var contributionId = extensionCtx.publisherId + "." + extensionCtx.extensionId + ".registration-form";

        // Show dialog
        var dialogOptions = {
            title: "My Dialog",
            width: 800,
            height: 600
        };

        dialogService.openDialog(contributionId, dialogOptions);
    });
```

### Showing the dialog (advanced) 

A function can be called when the OK button is clicked. This function is specified by `getDialogResult` in the options you provide when showing the dialog.

If a call to `getDialogResult` returns a non-null value, this value is then passed to the function specified by `okCallback` (also in the options) and the dialog is closed.

In this example, the `attachFormChanged` callback gets called when inputs on the form change. Based on the whether the form is valid or not, the OK button is enabled or disabled.

```javascript
    VSS.getService(VSS.ServiceIds.Dialog).then(function(dialogService) {
        var registrationForm;
        var extensionCtx = VSS.getExtensionContext();
        var contributionId = extensionCtx.publisherId + "." + extensionCtx.extensionId + ".registration-form";

        var dialogOptions = {
            title: "Registration Form",
            width: 800,
            height: 600,
            getDialogResult: function() {
                // Get the result from registrationForm object
                return registrationForm ? registrationForm.getFormData() : null;
            },
            okCallback: function (result) {
                // Log the result to the console
                console.log(JSON.stringify(result));
            }
        };

        dialogService.openDialog(contributionId, dialogOptions).then(function(dialog) {
            // Get registrationForm instance which is registered in registrationFormContent.html
            dialog.getContributionInstance("registration-form").then(function (registrationFormInstance) {
            
                // Keep a reference of registration form instance (to be used above in dialog options)
                registrationForm = registrationFormInstance;
                
                // Subscribe to form input changes and update the Ok enabled state
                registrationForm.attachFormChanged(function(isValid) {
                    dialog.updateOkButton(isValid);
                });
                
                // Set the initial ok enabled state
                registrationForm.isFormValid().then(function (isValid) {
                    dialog.updateOkButton(isValid);
                });
            });                            
        });
    });

```

### Enabling or disabling the OK button

Initially, the OK button is disabled. However, you can enable/disable this button by calling the `updateOkButton` method on the dialog: 

```javascript
    dialogService.openDialog(contributionId, dialogOptions).then(function(dialog) {
        // Set true/false to enable/disable ok button
        dialog.updateOkButton(true); 
    });
```

### Passing values to the dialog control 

It is possible pass initial values to dialog content when it is opened in the host dialog.

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
    var dialogOptions = {
        title: "My Dialog Title",
        width: 800,
        height: 600,
        urlReplacementObject: { myId: new Date().getTime() }
    };
```

### Customizing the dialog buttons

The `okText` and `cancelText` attributes can be used to specify alternate titles for the OK and Cancel buttons:

```javascript
    var dialogOptions = {
        title: "My Dialog Title",
        width: 800,
        height: 600,
        okText: "Yes",
        cancelText: "No" 
    };
```

To not show any buttons on the dialog, you can set the `buttons` attribute to `null`:

```javascript
    var dialogOptions = {
        title: "My Dialog Title",
        width: 800,
        height: 600,
        buttons: null
    };
```

