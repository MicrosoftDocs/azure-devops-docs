---
title: TF30169-The New Team Project Wizard was unable to download the process template {0}. | TFS
description: Provides the list of errors when the New Team Project Wizard unable to download the process template.
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.assetid: 6fda9d67-bbdc-432d-949a-2814e499b2c3
ms.manager: douge
ms.author: kaelli
ms.date: 01/20/2017
---
# TF30169: The New Team Project Wizard was unable to download the process template {0}.


**TFS 2015 | TFS 2013**

The New Team Project Wizard encountered a problem downloading or extracting the process template {*name*} selected to create the team project. This error can occur due to one of the following conditions:  
  
-   Process templates are not available on the server that hosts SharePoint Products.  
  
-   The server {name} that hosts SharePoint Products is offline.  
  
-   The local computer does not have sufficient space in the temporary storage on the hard disk to store the entire process template file. A process template file can be up to 100 megabytes, which may be more space than is available on the local hard disk.  
  
-   Your user account does not have sufficient permission to write data to the temporary storage directory on the local computer.  
  
-   The hard disk on the local computer is not available.  
  
 Because the connection to Team Foundation Server failed, the wizard could not download the process template.  
  
### To correct this error  
  
1.  Confirm that your local computer is connected to the network and can access network resources.  
  
2.  Contact the administrator for the server that hosts SharePoint Products to confirm the availability of the server on the network and request that the process templates be added to the server. For more information, see [Retrieve and Restore Missing Site Templates](https://msdn.microsoft.com/library/bb909677.aspx).  
  
3.  If the server is available on the network and the process templates are available on the server, review the amount of available storage space for program downloads onto your local hard disk. For information about how to increase the available download space, see the online Help for your operating system.  
  
4.  Contact the administrator for the local computer to confirm that your user account has sufficient permissions to write data to the storage area for local program downloads and that the local hard disk is functioning correctly.  
  
## Related notes 
- [Create a team project](../../../../accounts/create-team-project.md)