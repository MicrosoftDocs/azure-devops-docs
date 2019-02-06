---
title: TF30015-The New Team Project Wizard could not connect to the specified SQL Server Reporting Services server
titleSuffix: Azure DevOps & TFS
description: The New Team Project Wizard was unable to connect to {name}.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 97f7dbf0-20f4-4e8d-94d2-403ca581d0a2
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 02/22/2017
---

# TF30015: The New Team Project Wizard could not connect to the specified SQL Server Reporting Services server {0}.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]


The New Team Project Wizard was unable to connect to {*name*}, the server that hosts SQL Server Reporting Services. The reason for the failed connection cannot be determined at this time.  
  
 Possible causes of this error include:  
  
-   You do not have the required permissions to create a project.  
  
-   A server in the Team Foundation deployment is incorrectly configured. This problem is especially common after a server move, failover, or other maintenance activity.  
  
-   The server that hosts SQL Server Reporting Services is offline.  
  
 Because the wizard could not connect to the server that hosts SQL Server Reporting Services, the wizard was unable to create the SQL Server Reporting Services site on that server.  
  
### To correct this error    
  
1.  Confirm that you have the required permissions to create a project. This includes the required permissions on each server that hosts Team Foundation Server, SharePoint Products, and SQL Server Reporting Services. For more information, see [Create a project](../../organizations/projects/create-project.md).  
  
2.  Contact your Team Foundation Server administrator to verify that the server configuration is correct.  
  
3.  Contact the administrator for the SQL Server Reporting Services server {*name*} to confirm that the server is available on the network.  
  
4.  If the server shows available on the network, review the project creation log and follow any instructions provided.  
  
     The log shows each action taken by the wizard at the time of the failure and may include additional details about the error. To open the log:  
  
    1.  Start Notepad.  
  
    2.  On the **File** menu, click **Open**.  
  
    3.  Navigate to $:\Documents and Settings\\*user name*\Local Settings\Temp\Team Services_TeamProjectCreation_yyyy_mm_dd_hh_mm_ss.log.  
  
    4.  Click **Open**.  
  
    5.  On the **Edit** menu, click **Find**.  
  
    6.  In the **Find what** dialog box, type **Exception** or **Error**, and then click **Find Next**.  
  
    7.  Review the log entries to find network or file related issues.  
  
5.  If the problem persists, contact your Team Foundation Server administrator.  
    
## Related articles
- [Create a project](../../organizations/projects/create-project.md)