---
ms.prod: devops
ms.technology: devops-ecosystem
title: VSTS Extension Host Navigation Service Example
description: A sample that shows how to use a host navigation service with a VSTS extension
ms.assetid: d23bf2e9-f5c6-4108-8af5-fab62c848ca9
ms.topic: conceptual
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 08/17/2016
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
See [Host navigation](../../../../develop/host-navigation.md) for additional samples.