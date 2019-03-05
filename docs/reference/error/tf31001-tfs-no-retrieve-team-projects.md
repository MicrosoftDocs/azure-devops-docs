---
title: TF31001-Team Foundation cannot retrieve...
titleSuffix: Azure DevOps & TFS
description: Occurs when Team Explorer can't display the list of projects defined on a Team Foundation Server. 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: a8f6ad82-e1e0-4659-8e97-c88ece4c23f5
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---

# TF31001: Team Foundation cannot retrieve the list of projects from Team Foundation Server {0}

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when Team Explorer can't display the list of projects defined in the collection. The specific error message that TFS returns should help you determine the cause of the problem.  
  
 As a first step, determine whether this problem occurs on one or multiple computers.is local to your computer, or if other team members are experiencing this error condition. If the problem occurs on more than one computer,, you should contact the administrator for Team Foundation Server to confirm whether the server is operational and available on the network.  
  
 **When the problem occurs on only one computer**  
  
 You may be able to resolve the problem if you review and address the following likely causes:  
  
|Symptom|Problem/Resolution|  
|-------------|-------------------------|  
|When configuration information changes for a deployment of Team Foundation Server, the cache on client computers must be cleared.|Follow the steps in "To clear the cache on client computers for Team Foundation" later in this topic.|  
|An error appears that resembles the following text:<br /><br /> TF31001: Team Foundation cannot retrieve the list of projects from Team Foundation Server*ServerName*. Team Foundation Server returned the following error: Access to the temp directory is denied.|Antivirus or firewall software on your client computer may be blocking services for Team Foundation Server. Disable the antivirus software or firewall to determine whether that change corrects the problem.|  
  
 **When the problem occurs on multiple computers**  
  
As an administrator, you should check the event logs for the application-tier server to try to pinpoint the problem. Also, you can use the following table to determine whether the server is misconfigured.  
  
> [!IMPORTANT]  
> If a TF31002 error appears in addition to one or more TF31001 errors, you should also review the information in [TF31002: Unable to connect to this Team Foundation Server {0}. Team Foundation Server URL: {1}.](tf31002-unable-connect-tfs.md).  
  
|Problem|Resolution|  
|-------------|----------------|
|An error appears that resembles the following text:<br /><br /> TF31001: Team Foundation cannot retrieve the list of projects from Team Foundation Server*ServerName*. Team Foundation Server returned the following error: The request failed with HTTP status 403: Forbidden.|This error may occur when IP restrictions are enabled on the website for Team Foundation Server. You should remove these restrictions. For more information, see [Verify or Correct IP Address and Domain Name Restrictions](https://msdn.microsoft.com/library/bb909653.aspx). **Note:**  By default, Team Foundation Server is configured to grant all computers access to all Web sites for Team Foundation. Before you revert any settings to the default value, you should investigate why the settings were changed. Many organizations deny access to match their infrastructure requirements or security policies.|  
|TF31001: Team Foundation cannot retrieve the list of projects from Team Foundation Server*ServerName*. The Team Foundation Server returned the following error: The request failed with HTTP status 503: service unavailable.|Required application pools and services might not be running.  For more information, see [Stop and start services, application pools, and websites](/azure/devops/server/admin/stop-start-stuff).|  
|An error appears that resembles the following text:<br /><br /> TF31001: Team Foundation cannot retrieve the list of projects from Team Foundation Server*ServerName*. Team Foundation Server returned the following error: The request failed with HTTP status 503: TF30059: Fatal error when initializing web service.|The TCP/IP protocol for SQL Server is disabled. For information about how to enable the TCP/IP protocol, see [Enable TCP/IP Network Protocol for SQL Server](https://technet.microsoft.com/library/hh231672%28v=sql.110%29.aspx).|  
  
 If the previous resolutions do not solve the problem, check the forum for administering Team Foundation Server. For more information, see the following page on the Microsoft website: [MSDN Forums - Visual Studio Team System &mdash;Team Foundation Server - Administration](http://go.microsoft.com/fwlink/?LinkId=54490).  
  
<a name="clearcache"></a> 
##  To clear the cache on your client computer  
  
1.  Log on to your client computer for Team Foundation by using the credentials of the user whose cache you want to clear.  
  
2.  Close any open instances of Visual Studio.  
  
3.  Open a browser, and browse to one of the following folders, depending on the operating system that is running on the client computer:  
  
    -   **Windows 8**  
  
         *Drive* **:\Users\\** *UserName* **\AppData\Local\Microsoft\Team Foundation\4.0\Cache**  
  
    -   **Windows Vista or Windows 7**  
  
         *Drive* **:\Users\\** *UserName* **\AppData\Local\Microsoft\Team Foundation\2.0\Cache**  
  
    -   **Windows XP or Windows Server 2003**  
  
         *Drive* **:\Documents and Settings\\** *UserName* **\Local Settings\Application Data\Microsoft\Team Foundation\2.0\Cache**  
  
4.  Delete the contents of the Cache directory, including all subfolders.  
  
## Related articles 
- [TF31002: Unable to connect to this Team Foundation Server {0}. Team Foundation Server URL: {1}.](tf31002-unable-connect-tfs.md)