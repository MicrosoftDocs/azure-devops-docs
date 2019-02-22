---
title: TF24023-Team Foundation Server configuration... 
titleSuffix: Azure DevOps & TFS
description: Occurs when the New Team Project Wizard is unable to connect to the Team Foundation Server while creating a project 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 83546f98-1ca6-4b07-afe5-134df7f291bf
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 02/22/2017
---

# TF24023: Team Foundation Server Configuration Failure. The New Team Project Wizard work item component could not connect to the Team Foundation Server {0}.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when the New Team Project Wizard is unable to connect to the Team Foundation Server {*name*} while creating a project. Possible causes of this error include:  
  
-   A server in the Team Foundation deployment is incorrectly configured. This problem is especially common after a server move, failover, or other maintenance activity.  
  
-   The server that hosts Team Foundation Server is offline.  
  
-   A critical file is missing from the server.  
  
 Because the wizard could not connect to the Team Foundation server, the wizard was unable to create the required directory on the server.  
  
### To correct this error  
  
1.  Confirm that your local computer is connected to the network and can access network resources.  
  
2.  Contact your Team Foundation Server administrator to verify that the server configuration is correct.  
  
3.  Contact the administrator for the Team Foundation Server {*name*} to confirm the availability of the server on the network.  
  
4.  If the server is available on the network, review the project creation log, and follow any instructions provided.  
  
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