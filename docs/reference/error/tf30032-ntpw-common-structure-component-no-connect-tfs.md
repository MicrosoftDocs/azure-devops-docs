---
title: TF30032-The New Team Project Wizard can't connect to TFS
description: Occurs when the New Team Project Wizard is unable to connect to the application-tier {name} when creating a project.
ms.technology: devops-agile
ms.assetid: 889f7f5e-9610-47f4-b6a0-592325b75151
ms.author: kaelli
author: KathrynEE
ms.topic: troubleshooting
ms.date: 01/20/2017
---

# TF30032: The New Team Project Wizard common structure component could not connect to the Team Foundation Server {0}. 


[!INCLUDE [temp](../../includes/version-vsts-tfs-all-versions.md)]

This error occurs when the New Team Project Wizard is unable to connect to the application-tier {*name*} when creating a project. An active connection cannot be made because of one of the following conditions:  
  
- A server in the Team Foundation deployment is incorrectly configured. This problem is especially common after a server move, failover, or other maintenance activity.  
  
- A critical file from the server {name} is missing.  
  
  Because the connection to Team Foundation Server failed, the wizard could not create the project data objects on the application-tier server.  
  
### To correct this error  
  
1.  Contact your Team Foundation Server administrator to verify that the server configuration is correct. Your administrator can verify by using the **/view** option of the **TfsAdmin ConfigureConnections** command to. For more information, see [Settings Command](/previous-versions/visualstudio/visual-studio-2013/bb778396(v=vs.120)).  
  
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