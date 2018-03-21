---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: Clients Services | Extensions for Visual Studio Team Services
description: Client Services provided by Visual Studio Team Services.
ms.assetid: 92736987-875E-4816-B835-F04917B4AF46
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Client Services


A client service provides client-side (web) capability.  An instance of a client service can be acquired via the `VSS.getService` method:

```
  var serviceId = "some service contribution identifier";
  
  VSS.getService(serviceId).then(function(svc) {
       // interact with the service via svc      
  });
```

### Available services

* [Dialog](./api/VSS/SDK/Services/Dialogs/HostDialogService.md)
* [ExtensionData](./api/VSS/SDK/Services/ExtensionData/ExtensionDataService.md)
* [Navigation](./api/VSS/SDK/Services/Navigation/HostNavigationService.md)
