---
title: TF30005-The New Team Project Wizard group... 
titleSuffix: Azure DevOps & TFS
description: Occurs when the New Team Project Wizard is unable to connect to the application-tier server {name} while creating a project.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: eecc6e96-3c39-4cff-aad4-5ab57582ba2e
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 02/22/2017
---

# TF30005: The New Team Project Wizard group security component could not connect to the Team Foundation Server {0}

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when the New Team Project Wizard is unable to connect to the application-tier server {*name*} while creating a project. An active connection cannot be made due to one of the following conditions:  
  
-   A server in the Team Foundation deployment is incorrectly configured. This problem is especially common after a server move, failover, or other maintenance activity.  
  
-   The server {name} that hosts SharePoint Products is offline.  
  
-   A critical file from the server {name} is missing.  
  
 Because the connection to Team Foundation Server failed, the wizard could not create security groups and assign permissions on the server.  
  
### To correct this error  
  
1.  Contact your Team Foundation Server administrator to verify that the server configuration is correct.  
  
2.  If the server configuration is correct, review the project creation log and follow any instructions provided.  
  
     The log shows each action taken by the wizard at the time of the failure and may include additional details about the error. To open the log:  
  
    1.  Start Notepad.  
  
    2.  On the **File** menu, click **Open**.  
  
    3.  Navigate to $:\Documents and Settings\\*user name*\Local Settings\Temp\Team Services_TeamProjectCreation_yyyy_mm_dd_hh_mm_ss.log.  
  
    4.  Click **Open**.  
  
    5.  On the **Edit** menu, click **Find**.  
  
    6.  In the **Find what** dialog box, type **Exception** or **Error**, and then click **Find Next**.  
  
    7.  Review the log entries to find network or file related issues.  
  
3.  If the problem persists, contact your Team Foundation Server administrator.  
    
## Related articles
- [Create a project](../../organizations/projects/create-project.md)