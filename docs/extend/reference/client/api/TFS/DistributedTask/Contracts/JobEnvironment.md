---
title: TFS/DistributedTask/Contracts JobEnvironment API | Extensions for Azure DevOps Services
description: Represents the context of variables and vectors for a job request.
ms.assetid: 5a9745a3-b105-894f-214a-4953d6bb4e4c
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# JobEnvironment

Module path: `TFS/DistributedTask/Contracts`


### Members

* `endpoints`: [ServiceEndpoint](../../../TFS/DistributedTask/Contracts/ServiceEndpoint.md)[]. 

* `mask`: [MaskHint](../../../TFS/DistributedTask/Contracts/MaskHint.md)[]. 

* `options`: {[key: number]: [JobOption](../../../TFS/DistributedTask/Contracts/JobOption.md)}. 

* `systemConnection`: [ServiceEndpoint](../../../TFS/DistributedTask/Contracts/ServiceEndpoint.md). Gets or sets the endpoint used for communicating back to the calling service.

* `variables`: {[key: string]: string}. 

