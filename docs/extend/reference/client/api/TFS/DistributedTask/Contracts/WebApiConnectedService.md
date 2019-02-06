---
title: TFS/DistributedTask/Contracts WebApiConnectedService API | Extensions for Azure DevOps Services
ms.assetid: 9a53b63d-2324-7f74-80c0-2c492a8fd588
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/25/2016
---

# TFS/DistributedTask/Contracts WebApiConnectedService

Module path: `TFS/DistributedTask/Contracts`

Extends: [WebApiConnectedServiceRef](../../../TFS/DistributedTask/Contracts/WebApiConnectedServiceRef.md)

### Members

* `authenticatedBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). The user who did the OAuth authentication to created this service

* `description`: string. Extra description on the service.

* `friendlyName`: string. Friendly Name of service endpoint

* `id`: string. Id/Name of the connection service. For Ex: Subscription ID for Azure Connection

* `kind`: string. The kind of service.

* `project`: [TeamProjectReference](../../../TFS/DistributedTask/Contracts/TeamProjectReference.md). The project associated with this service

* `serviceUri`: string. Optional uri to connect directly to the service such as https://windows.azure.com

