---
title: TF30022-The New Team Project Wizard could not connect to the Windows SharePoint Services 
titleSuffix: Azure DevOps & TFS
description: The New Team Project Wizard is unable to connect to the server {name} that hosts SharePoint Products while creating a project.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: dd798fbb-8e24-4a33-91f6-7167138d7414
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---

# TF30022: The New Team Project Wizard could not connect to the Windows SharePoint Services server {0}.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when the New Team Project Wizard is unable to connect to the server {*name*} that hosts SharePoint Products while creating a project. An active connection cannot be made due to one of the following conditions:  
  
-   The local computer is not connected to the network.  
  
-   The network is not operational.  
  
-   The server {name} that hosts SharePoint Products is offline.  
  
-   A critical file from the server {name} is missing.  
  
 Because the connection to Team Foundation Server failed, the wizard could not create the SharePoint site on the server.  
  
### To correct this error  
  
1.  Confirm that your local computer is connected to the network and can access network resources.  
  
2.  Contact the administrator for server {*name*} that hosts SharePoint Products to confirm availability of the server on the network.  
  
3.  If the server shows available on the network, review the project creation log and follow any instructions provided.  
  
     The log shows each action taken by the wizard at the time of the failure and may include additional details about the error. To open the log:  
  
    1.  Open Notepad.  
  
    2.  On the **File** menu, click **Open**.  
  
    3.  Navigate to $:\Documents and Settings\\*user name*\Local Settings\Temp\Team Services_TeamProjectCreation_yyyy_mm_dd_hh_mm_ss.log.  
  
    4.  Click **Open**.  
  
    5.  On the **Edit** menu, click **Find**.  
  
    6.  In the **Find what** dialog box, type **Exception** or **Error**, and then click **Find Next**.  
  
    7.  Review the log entries to find network or file related issues.  
  
4.  If the problem persists, contact your Team Foundation Server administrator.