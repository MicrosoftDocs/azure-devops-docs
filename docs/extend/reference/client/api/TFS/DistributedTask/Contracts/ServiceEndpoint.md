---
title: TFS/DistributedTask/Contracts ServiceEndpoint API | Extensions for Azure DevOps Services
description: Represents an endpoint which may be used by an orchestration job.
ms.assetid: 38c251e5-9a98-d26d-2167-73b385234785
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# ServiceEndpoint

Module path: `TFS/DistributedTask/Contracts`


### Members

* `administratorsGroup`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `authorization`: [EndpointAuthorization](../../../TFS/DistributedTask/Contracts/EndpointAuthorization.md). Gets or sets the authorization data for talking to the endpoint.

* `createdBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). The Gets or sets Identity reference for the user who created the service endpoint

* `data`: {[key: string]: string}. 

* `description`: string. Gets or Sets description of endpoint

* `groupScopeId`: string. 

* `id`: string. Gets or sets the identifier of this endpoint.

* `name`: string. Gets or sets the friendly name of the endpoint.

* `readersGroup`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `type`: string. Gets or sets the type of the endpoint.

* `url`: string. Gets or sets the url of the endpoint.

