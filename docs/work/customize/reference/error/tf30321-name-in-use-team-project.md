---
title: TF30321-The name you typed is already used for another team project  titleSuffix: VSTS & TFS
description: Display an error when you type a name for the new team project that duplicates the name already being used by another team project on the same server.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 9cd0bc58-3c58-4129-8099-d8849cece6fc
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---


# TF30321: The name you typed is already used for another team project on the Team Foundation Server.

[!INCLUDE [temp](../../../_shared/dev15-version-header.md)]

This error occurs when you type a name for the new team project that duplicates the name already being used by another team project in the same collection.  There are two likely causes for this problem:  
  
-   There is actually a team project with the same name.  
  
-   Someone previously attempted to create a team project with the same name, but the wizard did not complete the creation and failed to remove all records of that team project.  
  
### To correct this error  
  
-   Type a different name for the new team project.  
  
> [!NOTE]
>  If you are sure that the name you typed is not being used by a team project on Team Foundation Server, contact your administrator for the server and ask him or her to run the **TFSDeleteProject** command-line utility to free the name.

## Related articles
- [Create a team project](../../../../accounts/create-team-project.md) 