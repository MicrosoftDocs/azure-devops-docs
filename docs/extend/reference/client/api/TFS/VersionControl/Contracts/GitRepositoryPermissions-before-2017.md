---
title: TFS/VersionControl/Contracts GitRepositoryPermissions API (Prior to TFS 2017 Update 1) | Extensions for Azure DevOps Services
ms.assetid: 76e23ee6-0909-4124-8641-dfbdcff63943
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 12/2/2016
---

# Git repository permissions prior to TFS 2017 Update 1

Module path: `TFS/VersionControl/Contracts`

*Note: This list of permissions reflects TFS 2017 RTM and earlier. For users of later versions, see
the [current list of permissions](GitRepositoryPermissions.md).*

### Values

* `None` 
* `Administer` 
* `GenericRead` 
* `GenericContribute` 
* `ForcePush` 
* `CreateBranch` 
* `CreateTag` 
* `ManageNote` 
* `PolicyExempt` 
* `All` This defines the set of bits that are valid for the git permission space. When reading or writing git permissions, these are the only bits paid attention too.
* `BranchLevelPermissions` 
