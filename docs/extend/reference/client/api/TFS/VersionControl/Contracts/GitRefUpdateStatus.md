---
title: TFS/VersionControl/Contracts GitRefUpdateStatus API | Extensions for Azure DevOps Services
ms.assetid: 391af512-e9bd-3ff1-527d-fe31fe90ab6f
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitRefUpdateStatus

Module path: `TFS/VersionControl/Contracts`

### Values

* `Succeeded` Indicates that the ref update request was completed successfully.
* `ForcePushRequired` Indicates that the ref update request could not be completed because part of the graph would be disconnected by this change, and the caller does not have ForcePush permission on the repository.
* `StaleOldObjectId` Indicates that the ref update request could not be completed because the old object ID presented in the request was not the object ID of the ref when the database attempted the update. The most likely scenario is that the caller lost a race to update the ref.
* `InvalidRefName` Indicates that the ref update request could not be completed because the ref name presented in the request was not valid.
* `Unprocessed` The request was not processed
* `UnresolvableToCommit` The ref update request could not be completed because the new object ID for the ref could not be resolved to a commit object (potentially through any number of tags)
* `WritePermissionRequired` The ref update request could not be completed because the user lacks write permissions required to write this ref
* `ManageNotePermissionRequired` The ref update request could not be completed because the user lacks note creation permissions required to write this note
* `CreateBranchPermissionRequired` The ref update request could not be completed because the user lacks the permission to create a branch
* `CreateTagPermissionRequired` The ref update request could not be completed because the user lacks the permission to create a tag
* `RejectedByPlugin` The ref update could not be completed because it was rejected by the plugin.
* `Locked` The ref update could not be completed because the ref is locked by another user.
* `RefNameConflict` The ref update could not be completed because, in case-insensitive mode, the ref name conflicts with an existing, differently-cased ref name.
* `RejectedByPolicy` The ref update could not be completed because it was rejected by policy.
* `SucceededNonExistentRef` Indicates that the ref update request was completed successfully, but the ref doesn&#x27;t actually exist so no changes were made.  This should only happen during deletes.
* `SucceededCorruptRef` Indicates that the ref update request was completed successfully, but the passed-in ref was corrupt - as in, the old object ID was bad.  This should only happen during deletes.
