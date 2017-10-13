---
title: Restrict access in VSTS and TFS
description: How to set permissions to grant or restrict access to select build, version control, or work tracking functions VSTS and TFS
ms.assetid: ee4c4a8f-0478-4ade-8b12-4e5ffd0054c7
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.manager: douge
ms.author: billchi
ms.date: 10/6/2017
---

# Restrict access in VSTS and TFS

**VSTS** | **TFS 2017** | **TFS 2015** | **TFS 2013**

You can restrict access to resources that you manage in TFS or VSTS by setting the permission state to Deny through a security group. For a comprehensive list of default groups and permissions, see [Permission reference for Team Foundation Server](../security/permissions.md).

## TFVC

From the Version Control tab in the administration context, you can set permissions for a group or individual.

![Permissions page for TF version control](_img/restrict-access-tfs/readers-permissions.png)  

## Git

For team projects that use Git for version control, you can set the following permissions.

![Permissions page for Git project in admin context](_img/restrict-access-tfs/git-permissions.png)  
For additional information, see [Permission reference for Team Foundation Server](../security/permissions.md).

## Build definitions

From the Build hub, you can set build permissions at the project level for a group or individual.

![Security link in Actions menu on Build page](_img/restrict-access-tfs/build-security.png)  

You can set permissions for the build operations shown in the following image.

![Permissions page for TF version control](_img/restrict-access-tfs/readers-permissions.png)  

Also, you can set permissions by opening the ![Context Menu Icon](_img/context-menu-icon.png) context menu for a build definition.  
For additional information, see [Permission reference for Team Foundation Server](../security/permissions.md).
