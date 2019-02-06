---
title: TFS/DistributedTask/Contracts TaskAgentPool API | Extensions for Azure DevOps Services
ms.assetid: 2f24f7ca-f6ae-ff04-014b-91864e223175
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TaskAgentPool

Module path: `TFS/DistributedTask/Contracts`

Extends: [TaskAgentPoolReference](../../../TFS/DistributedTask/Contracts/TaskAgentPoolReference.md)

### Members

* `administratorsGroup`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). Gets the administrators group for this agent pool.

* `autoProvision`: boolean. Gets or sets a value indicating whether or not a queue should be automatically provisioned for each project collection or not.

* `createdBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). Gets the identity who created this pool. The creator of the pool is automatically added into the administrators group for the pool on creation.

* `createdOn`: Date. Gets the date/time of the pool creation.

* `groupScopeId`: string. Gets the scope identifier for groups/roles which are owned by this pool.

* `isHosted`: boolean. Gets or sets a value indicating whether or not this pool is managed by the service.

* `properties`: any. 

* `provisioned`: boolean. Gets a value indicating whether or not roles have been provisioned for this pool.

* `serviceAccountsGroup`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). Gets the service accounts group for this agent pool.

* `size`: number. Gets the current size of the pool.

