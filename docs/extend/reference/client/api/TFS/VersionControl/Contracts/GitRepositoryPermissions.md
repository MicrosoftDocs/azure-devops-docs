---
title: TFS/VersionControl/Contracts GitRepositoryPermissions API | Extensions for Azure DevOps Services
ms.assetid: 5835337b-b733-9dad-eca1-7bf7bb916b81
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 12/2/2016
---

# Git repository permissions

Module path: `TFS/VersionControl/Contracts`

*Note: This list of permissions changed in TFS 2017 Update 1. For users of earlier versions, see
the [previous list of permissions](GitRepositoryPermissions-before-2017.md).*

### Values

* `None` 
* `GenericRead` 
* `GenericContribute` 
* `ForcePush`
* `EditPolicies`
* `CreateBranch` 
* `CreateRepository`
* `DeleteRepository`
* `RenameRepository`
* `CreateTag`
* `ManageNote` 
* `ManagePermissions`
* `PolicyExempt` 
* `RemoveOthersLocks`
* `BranchLevelPermissions` This is the set of bits that are valid for branches.  
* `All` This defines the set of bits that are valid for the Git permission space. When reading or writing git permissions, these are the only bits paid attention too.
