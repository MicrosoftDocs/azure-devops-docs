---
title: TF30321-The name you typed is in use 
titleSuffix: Azure DevOps & TFS
description: Display an error when you type a name for the new project that duplicates the name already being used by another project on the same server.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 9cd0bc58-3c58-4129-8099-d8849cece6fc
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---


# TF30321: The name you typed is already used for another project on the Team Foundation Server.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when you type a name for the new project that duplicates the name already being used by another project in the same collection.  There are two likely causes for this problem:  
  
-   There is actually a project with the same name.  
  
-   Someone previously attempted to create a project with the same name, but the wizard did not complete the creation and failed to remove all records of that project.  
  
### To correct this error  
  
-   Type a different name for the new project.  
  
> [!NOTE]
>  If you are sure that the name you typed is not being used by a project on Team Foundation Server, contact your administrator for the server and ask him or her to run the **TFSDeleteProject** command-line utility to free the name.
  
## Related articles
- [Create a project](../../organizations/projects/create-project.md) 