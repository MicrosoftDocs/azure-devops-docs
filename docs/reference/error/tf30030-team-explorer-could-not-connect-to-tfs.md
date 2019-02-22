---
title: TF30030-Team Explorer could not connect... titleSuffix: Azure DevOps & TFS
description: Occurs when Team Explorer is not synchronized with or cannot establish a connection to the server that hosts SharePoint Products.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: c93d61bf-718f-4dc0-b77a-6c596c9fff1d
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 02/22/2017
---

# TF30030: Team Explorer could not connect to Team Foundation Server.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when Team Explorer is not synchronized with or cannot establish a connection to the server that hosts SharePoint Products. This error may occur under the following conditions, listed in the most likely order of occurrence:  
  
-   Team Explorer that is running on the local computer has not been refreshed to reflect recent changes.  
  
-   You do not have sufficient user permissions to connect to the server that hosts SharePoint Products.  
  
-   The network is not operational.  
  
-   The application-tier server is offline.  
  
 You can use the procedures in the following table to correct the problem.  
  
### To correct this error when Team Explorer has not been refreshed  
  
1.  In Team Explorer, click the **Documents** node.  
  
2.  Under the **View** menu,click **Refresh**.  
  
3.  Retry the action that you were performing when you encountered this error.  
  
### To correct this error when caused by insufficient permissions  
  
-   Contact your Team Foundation Server administrator and request that they add the necessary permissions to your user account.  
  
### To correct this error when caused by network problems  
  
1.  Confirm that your network cable is securely connected to the network port on your computer.  
  
2.  If the problem persists, contact your network administrator.  
  
### To correct this error when caused by Team Foundation Server being offline  
  
-   Contact the Team Foundation Server administrator and ask that the application-tier server be restarted.  
  
## Related articles
-  [Add an administrator](../../organizations/security/set-project-collection-level-permissions.md)   
-  [Connect to projects](../../organizations/projects/connect-to-projects.md)