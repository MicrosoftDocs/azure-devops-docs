---
ms.technology: devops-ecosystem
title: Extension host navigation service example
description: A sample that shows how to use a host navigation service with an Azure DevOps Services extension
ms.assetid: d23bf2e9-f5c6-4108-8af5-fab62c848ca9
ms.author: chcomley
author: chcomley
ms.topic: article
monikerRange: '>= tfs-2017'
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
See [Host navigation](../../../../../extend/develop/host-navigation.md) for additional samples.