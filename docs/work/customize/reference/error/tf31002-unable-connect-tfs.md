---
title: TF31002-Unable to connect to VSTS or TFS | VSTS & TFS
description: Receive the error when you try to connect to VSTS to VSTS or an on-premises Team Foundation Server.
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.assetid: b5566a0b-55f8-4c76-aea2-6d1581a2c90d
ms.manager: douge
ms.author: kaelli
ms.date: 01/20/2017
---
# TF31002: Unable to connect to this Team Foundation Server {0}. Team Foundation Server URL: {1}

[!INCLUDE [temp](../../../_shared/dev15-version-header.md)]

You might receive this error when you try to connect to VSTS or an on-premises Team Foundation Server (TFS) from Visual Studio.  
  
##You receive this error when you try to connect to VSTS   
  
|Problem|Resolution|  
|-------------|----------------|  
|You don't have an active account or license.|Check with your account administrator that you're a member of the account and have an active, valid license. See [Assign licenses to users](../../../../accounts/add-account-users-assign-access-levels.md) for details.| 
|Your VSTS account is connected to the Azure Active Directory.|When your VSTS account is connected to a directory that is associated with an Office 365 or Microsoft Azure subscription, only members in the directory can access the account.<br /><br /> Check with your directory administrator to have them [create an organizational account for you or add your account to the directory as external member](https://docs.microsoft.com/azure/active-directory/active-directory-create-users).|  
|You can't switch between different organizational accounts.|If you work with several VSTS accounts that connect to different directories, such as accounts that are created from the Microsoft Azure Preview Portal, the sign-out function might not work as expected. For example, you can't switch between different organizational accounts to connect to multiple accounts that are linked to directory tenants.<br /><br /> When this problem occurs, you see a flashing blank sign in dialog box several times. Then, you receive either TF31002 or TF31003 error after you connect to or add a new connection in "Connect to Team Foundation Server" dialog box.<br /><br /> To resolve this problem, apply the most recent [Visual Studio update](http://www.visualstudio.com/downloads) .<br /><br /> To learn more, see [KB Article ID 2958966, You can't switch between different organizational accounts in Visual Studio Online](https://support.microsoft.com/en-us/help/2958966/you-can-t-switch-between-different-organizational-accounts-in-visual-studio-online).|  
|You want to log into VSTS forrom Visual Studio using a different account.|See [Connect to team projects, Change accounts when you connect to VSTS](../../../../user-guide/connect-team-projects.md).|  
  
### You receive this error when you try to connect to an on-premises TFS from your client computer  
  
 If you determine that you're receiving this error from one computer but not others, or others aren't receiving this error, then check the problem resolutions outlined below.  
  
|Problem|Resolution|  
|-------------|----------------|  
|Your password has expired.|Verify that you typed your user account and password correctly, and that your password hasn't expired.|  
|You've entered an incorrect server URL.|Verify that you have typed the server URL correctly including the server name, port number, and protocol (http/https). See [Connect to team projects](../../../../user-guide/connect-team-projects.md) to learn more.|  
|The TFS configuration has changed.|If the configuration for the on-premises TFS has changed, you must create a new connection. You might also need to [clear the client cache](../../../../user-guide/connect-team-projects.md).|  
|You work remotely and need to connect to a TFS Proxy server to check in files to Team Foundation version control.|You need to [configure Visual Studio to connect to TFS Proxy](../../../../user-guide/connect-team-projects.md).|  
|You're connecting to a later version of TFS than your Visual Studio client version.|Your version of Visual Studio or Team Explorer might be incompatible with Team Foundation Server. You might need to install one or more GDR packs. See [Requirements and compatibility](../../../../accounts/requirements.md) for details.|  
|Your firewall is blocking TFS services.|See [Allow a program to communicate through Windows Firewall](https://technet.microsoft.com/en-us/library/cc766312.aspx).|  
|Visual Studio stops responding when you run a query in Visual Studio.|Your computer might be configured to bypass the proxy server. You should verify the configuration of the BypassProxyOnLocal setting on your computer. For more information, see [BypassProxyOnLocal Configuration](https://msdn.microsoft.com/library/ee248646.aspx).|  
  
### Several users receive this error when they try to connect to an on-premises TFS 
  
 If the problem occurs on more than one computer, you should contact your TFS administrator to confirm whether the server is operational and available on the network.  
  
 As an administrator, you should check the event logs for the application-tier server to try to pinpoint the problem. Also, you can use the following table to determine whether the server is misconfigured. In the table, problems that are more likely to occur appear first. Therefore, you should try the resolutions in the order in which they appear so that you increase the chance that you can solve the problem quickly.  
  
|Problem|Resolution|  
|-------------|----------------|  
|The *TFSService* account password has expired or is incorrect.|Many services for Team Foundation Server will stop running when the service account for Team Foundation has expired. For more information, see [Change the service account or password for Team Foundation Server](../../../../tfs-server/admin/change-service-account-password.md).|  
|The application-tier server for Team Foundation is unavailable.|You should verify whether each required service is running. If a required service is not running, you must restart it. If necessary, set it to start automatically. For more information, see [Stop and start services, application pools, and websites](../../../../tfs-server/admin/stop-start-stuff.md).|  
|The network is unavailable.|You should verify whether your network is operational.|  
|A website identity for Team Foundation is configured incorrectly.|You should verify or correct the server binding assignments that are made to websites for Team Foundation. |  
|Access to a website for Team Foundation has been restricted.|You should verify or correct restrictions that are made to those websites that are based on IP addresses and domain names. |  
|The firewall or ports are configured incorrectly.|You should verify or correct port binding assignments for websites and port assignments for the firewall. First, you should open the administration console for Team Foundation, display the Application Tier page, and review the URL assignments. If necessary, you can click **Change URL** to modify the URL of a website. Next, you should verify the port assignments for Internet Information Services (IIS) and the ports that are allowed through the firewall. For more information, see [Review Server Status and Settings](../../../../tfs-server/admin/stop-start-stuff.md) and [Verify or Correct Port Assignments](../../../../tfs-server/architecture/required-ports.md).|  
|Trust relationships between domains are not configured correctly.|If a group of users cannot access Team Foundation Server, you might have trust issues between domains.|  
|When users connect to different versions of TFS from Visual Studio, for example, they connect to TFS 2012 and then TFS 2008, they can get the TF31002 error.|This can occur because the GUIDs for the TFS 2012 collection are the same as that for TFS 2008. This confuses the local client cache because it tries to maintain the same GUID based local cache for both the 2008 server and the new Project Collection in 2012.<br /><br /> To fix this, you need to run the **TFSConfig ChangeServerID** command. See [TFSConfig ChangeServerID command](../../../../tfs-server/command-line/tfsconfig-cmd.md#changeserverid).|  
  
 If the previous resolutions do not solve the problem, go to the [MSDN Forums - Visual Studio Team System – Team Foundation Server - Administration](http://go.microsoft.com/fwlink/?LinkId=54490).