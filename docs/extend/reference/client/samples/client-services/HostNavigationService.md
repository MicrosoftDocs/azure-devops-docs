---
ms.prod: devops
ms.technology: devops-ecosystem
title: Azure DevOps Services Extension Host Navigation Service Example
description: A sample that shows how to use a host navigation service with an Azure DevOps Services extension
ms.assetid: d23bf2e9-f5c6-4108-8af5-fab62c848ca9
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.date: 08/17/2016
---

# Azure DevOps Services Extension Host Navigation Service Example

```js
    // Get navigation service
    VSS.getService(VSS.ServiceIds.Navigation).then(function(navigationService) {
        // Get current hash value from host url
        navigationService.getHash().then(function (hash) {
            console.log("Host hash value: " + hash);                        
        });
    });
```
See [Host navigation](../../../../develop/host-navigation.md) for additional samples.