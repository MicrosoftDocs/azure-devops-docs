---
ms.prod: devops
ms.technology: devops-ecosystem
title: Clients Services | Extensions for Azure DevOps Services
description: Client Services provided by Azure DevOps Services.
ms.assetid: 92736987-875E-4816-B835-F04917B4AF46
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# Client Services


A client service provides client-side (web) capability.  An instance of a client service can be acquired via the `VSS.getService` method:

```js
  var serviceId = "some service contribution identifier";
  
  VSS.getService(serviceId).then(function(svc) {
       // interact with the service via svc      
  });
```

### Available services

* [Dialog](./api/VSS/SDK/Services/Dialogs/HostDialogService.md)
* [ExtensionData](./api/VSS/SDK/Services/ExtensionData/ExtensionDataService.md)
* [Navigation](./api/VSS/SDK/Services/Navigation/HostNavigationService.md)
