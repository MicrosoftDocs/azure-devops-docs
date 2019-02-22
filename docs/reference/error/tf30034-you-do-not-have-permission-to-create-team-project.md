---
title: TF30034-No permissions to create a new project 
titleSuffix: Azure DevOps & TFS
description: Occurs when a user tries to create a project and doesn't have the required permissions
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 885f02d8-c070-4709-a34d-c891cad30493
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 02/22/2017
---


# TF30034: You do not have permission to create a new project

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error may occur under the following conditions:  
  
-   When the New Team Project Wizard connects to Team Foundation Server to determine whether your user account has been granted permission to create a project.  
  
-   The wizard, while creating a project, encounters another server component (for example, the virtual directory used by Internet Information Services) and does not find the required permissions set on your user account.    
  
 To create a project, you must have the required permissions set on each server that hosts Team Foundation Server, SharePoint Products, and SQL Server Reporting Services. For more information, see [Create a project](../../organizations/projects/create-project.md) .  
  
### To correct this error  
  
-   Contact your Team Foundation Server or project collection administrator and ask that the required permissions be added to your user account. This includes the required permissions on each server that hosts Team Foundation Server, SharePoint Products, and SQL Server Reporting Services.  
  
For more information, see [Add accounts to administer project collections](../../organizations/security/set-project-collection-level-permissions.md).  
  