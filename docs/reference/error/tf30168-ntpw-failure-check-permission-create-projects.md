---
title: TF30168-The New Team Project Wizard failure...  
titleSuffix: Azure DevOps & TFS
description: Occurs when the New Team Project Wizard starts and then checks to see whether your user account has permission set to create a project.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 5ec922a9-9b7a-4ccc-b1c5-5f8432e0c385
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---

# TF30168: The New Team Project Wizard experienced a failure checking your permissions to create projects.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when the New Team Project Wizard starts and then checks to see whether your user account has permission set to create a project. An active connection cannot be made because of one of the following conditions:  
  
-   A server in the Team Foundation deployment is incorrectly configured. This problem is especially common after a server move, failover, or other maintenance activity.  
  
-   A critical file from the server {name} is missing.  
  
-   The server that hosts Team Foundation Server is offline.  
  
 The following procedures will help you correct the problem.  
  
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