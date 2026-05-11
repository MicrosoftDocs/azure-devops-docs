---
ms.subservice: azure-devops-ecosystem
title: Extension host navigation service example
description: A sample that shows how to use a host navigation service with an Azure DevOps Services extension
ms.author: chcomley
author: chcomley
ms.topic: sample
monikerRange: '<= azure-devops'
ms.date: 04/03/2026
---

```js
    // Get navigation service
    VSS.getService(VSS.ServiceIds.Navigation).then(function(navigationService) {
        // Get current hash value from host url
        navigationService.getHash().then(function (hash) {
            console.log("Host hash value: " + hash);                        
        });
    });
```
See [Work with URLs](../../../../../extend/develop/work-with-urls.md) for additional samples.