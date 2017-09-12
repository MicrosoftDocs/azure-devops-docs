---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: VSTS Host Dialog Service Example
description: A sample that shows how to use a host dialog service with a VSTS extension
ms.assetid: 6efd62af-d344-4af2-aecf-663e23aca5d3
ms.manager: douge
ms.author: elbatk
ms.date: 08/25/2016
---

```js
    VSS.getService(VSS.ServiceIds.Dialog).then(function(dialogService) {
        var extensionCtx = VSS.getExtensionContext();
        // Build absolute contribution ID for dialogContent
        var contributionId = extensionCtx.publisherId + "." + extensionCtx.extensionId + ".dialogContent";

        // Show dialog
        var dialogOptions = {
            title: "My Dialog Title",
            width: 800,
            height: 600
        };

        dialogService.openDialog(contributionId, dialogOptions);
    });
```

See [Using host dialog](../../../../develop/using-host-dialog.md) for additional samples.