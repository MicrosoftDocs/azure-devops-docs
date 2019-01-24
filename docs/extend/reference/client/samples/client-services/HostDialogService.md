---
ms.prod: devops
ms.technology: devops-ecosystem
title: Azure DevOps Services Host Dialog Service Example
description: A sample that shows how to use a host dialog service with an Azure DevOps Services extension
ms.assetid: 6efd62af-d344-4af2-aecf-663e23aca5d3
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.date: 08/25/2016
---

# Azure DevOps Services Host Dialog Service Example

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