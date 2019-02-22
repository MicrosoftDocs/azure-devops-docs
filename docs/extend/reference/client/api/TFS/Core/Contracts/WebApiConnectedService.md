---
title: TFS/Core/Contracts WebApiConnectedService API | Extensions for Azure DevOps Services
ms.assetid: c1f1584a-301d-5e9b-e325-6e65169a6522
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/25/2016
---

# TFS/Core/Contracts WebApiConnectedService

Module path: `TFS/Core/Contracts`

Extends: [WebApiConnectedServiceRef](../../../TFS/Core/Contracts/WebApiConnectedServiceRef.md)

### Members

* `authenticatedBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). The user who did the OAuth authentication to created this service

* `description`: string. Extra description on the service.

* `friendlyName`: string. Friendly Name of service endpoint

* `id`: string. Id/Name of the connection service. For Ex: Subscription ID for Azure Connection

* `kind`: string. The kind of service.

* `project`: [TeamProjectReference](../../../TFS/Core/Contracts/TeamProjectReference.md). The project associated with this service

* `serviceUri`: string. Optional uri to connect directly to the service such as https://windows.azure.com

