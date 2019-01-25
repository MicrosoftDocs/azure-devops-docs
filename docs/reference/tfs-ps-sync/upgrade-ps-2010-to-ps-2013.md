---
title: Upgrade Project Server 2010 to Project Server 2013
titleSuffix: TFS 
description: Upgrade Microsoft Project Server 2010 to Microsoft Project Server 2013 when using Team Foundation Server & Project Server
ms.technology: devops-agile
ms.assetid: d28658f8-d503-4e67-95e3-ab304462daa9
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Upgrade Microsoft Project Server 2010  to Microsoft Project Server 2013
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

You can upgrade to Microsoft Project Server 2013 from a Project Server 2010 deployment that integrates with Visual Studio Team Foundation Server 2013 (TFS) by following the instructions provided in this topic.  
  
> [!NOTE]
>  You cannot upgrade directly from Project Server 2007 to Project Server 2013. Instead, you first upgrade the app-tier and web-tier servers to Project Server 2010, then upgrade the required databases to Project Server 2013. For information about how to upgrade from Project Server 2007 to Project Server 2010, see the following resources on Microsoft TechNet:  
>   
>  -   [Upgrade and Migration for Project Server 2010 TechNet Resource Center](http://go.microsoft.com/fwlink/?LinkId=262119)  
> -   [Microsoft Project Server 2010 Upgrade SuperFlow Center](http://go.microsoft.com/fwlink/p/?LinkId=253657)  
  
## Upgrade process  
  
#### Upgrade Project Server 2010 to Project Server 2013  
  
-   Follow the instructions provided on Microsoft TechNet (above) to upgrade your Project Server 2010 deployment.  
  
#### Synchronize Project Server and Active Directory security groups  
  
-   If you have moved from Windows authentication to Claims Based Authentication, synchronize the Active Directory security groups with Project Server.  
  
     For instructions, see [Manage security group synchronization with Active Directory in Project Server 2013](http://technet.microsoft.com/library/gg750243.aspx).  
  
#### Set or verify database permissions  
  
-   Add the service account of the web application pool for Project Server, and grant the following required permissions: **Alter any Schema**, **Create Table**, **Delete**, **Execute**, **Insert**, **Select**, and **Update**.  
  
     See [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
#### Add required accounts to security groups  
  
-   Add user and service accounts to the required security groups.  
  
     For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
#### Register the new PWA  
  
1.  Open a Command Prompt window on a computer that has either Visual Studio or Team Explorer installed, and enter:  
  
    ```  
    cd %programfiles%\Microsoft Visual Studio 11.0\Common7\IDE  
    ```  
  
     On a 64-bit edition of Windows, replace **%programfiles%** with **%programfiles(x86)%**.  
  
2.  Enter the following command:  
  
    ```  
    TfsAdmin ProjectServer /RegisterPwa /tfs:TfsURL /previousPWA:URLFor2010 /PWA:URLFor2013  
    ```  
  
     For more information, see [Register an instance of PWA](register-pwa.md).  
  
## Related articles  
 [Update an existing installation](update-version-compatibility-requirements.md)   
 [Synchronize TFS with Project Server](synchronize-tfs-project-server.md)