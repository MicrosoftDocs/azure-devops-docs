---
title: TF31003-You don't have permission to connect 
titleSuffix: Azure DevOps & TFS
description: Receive the error when you try to connect to Azure DevOps Services or Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: bfec0879-44e7-4cf1-825b-c9e6520f4d56
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 02/22/2017
---

# TF31003: Your user account does not have permission to connect to the Team Foundation Server {0}

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

You might receive this error when you try to connect to Azure DevOps Services or an on-premises Team Foundation Server (TFS).  
  
|Problem|Resolution|  
|-------------|----------------|  
|You can't switch between different organizational accounts.|If you work with several Azure DevOps Services organizations that connect to different directories, such as accounts that are created from the Microsoft Azure Preview Portal, the sign-out function might not work as expected. For example, you can't switch between different organizational accounts to connect to multiple accounts that are linked to directory tenants.<br /><br /> When this problem occurs, you see a flashing blank sign in dialog box several times. Then, you receive either TF31002 or TF31003 error after you connect to or add a new connection in "Connect to Team Foundation Server" dialog box.<br /><br /> To resolve this problem, apply the most recent [Visual Studio update](http://www.visualstudio.com/downloads).<br /><br /> To learn more, see [KB Article ID 2958966](http://support.microsoft.com/kb/2958966).|  
|You have multiple Microsoft accounts that you use to connect to Azure DevOps Services. You may have used another account for one purpose and it was cached.|To run Visual Studio under an account that is different from your logged on Windows account, open the context menu for `devenv.exe` to access your run as options.<br /><br /> ![Context menu for Visual Studio devenv.exe](_img/alm_cnt_runas.png "ALM_CNT_RunAs")<br /><br /> <br /><br /> The executable is in this folder: *Drive*:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\IDE\\.|  
|Your web browser has cached a cookie based on old, different, or out of date credentials.|Try clearing the cookies for your browser, or try logging off your client computer or workstation and logging back on.|  
|Your password in Active Directory or [Azure Active Directory](http://azure.microsoft.com/services/active-directory) has expired.|Verify that your password is active.<br /><br /> If you didn't log off after your password expired, you might still be able to use your account on your machine, but not authenticate with other systems. Try changing your password.<br /><br /> Or, if you recently changed your password, but still have some service using your old credentials, it might be causing your account to lock for some period of time. Try logging off your client computer and logging back on.|  
|Your user account doesn't have sufficient permissions to connect.|Check with your Azure DevOps Services organization owner or TFS administrator or that you have the necessary permissions to connect. For Azure DevOps Services, you must have an active, valid license. See [Assign licenses to users](../../organizations/accounts/add-organization-users.md) for details.|  
  
## Related articles 
- [Add users to projects](../../organizations/security/add-users-team-project.md)   
- [Assign licenses to users](../../organizations/accounts/add-organization-users.md)
- [Connect to projects](../../organizations/projects/connect-to-projects.md)