---
title: TFS/VersionControl/Contracts GitRefUpdateResult API | Extensions for Azure DevOps Services
ms.assetid: c16c67c3-9bd1-1e1f-2e31-1ff7aa78e861
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitRefUpdateResult

Module path: `TFS/VersionControl/Contracts`


### Members

* `customMessage`: string. Custom message for the result object For instance, Reason for failing.

* `name`: string. Ref name

* `newObjectId`: string. New object ID

* `oldObjectId`: string. Old object ID

* `rejectedBy`: string. Name of the plugin that rejected the updated.

* `repositoryId`: string. Repository ID

* `success`: boolean. True if the ref update succeeded, false otherwise

* `updateStatus`: [GitRefUpdateStatus](../../../TFS/VersionControl/Contracts/GitRefUpdateStatus.md). Status of the update from the TFS server.

