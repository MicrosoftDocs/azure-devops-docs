---
title: TF30016-No permissions to create a SQL Server Reporting Services site | TFS
description: Occurs when the permissions granted to the user account are not sufficient to enable to create the reporting site.
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.assetid: edb242fd-5839-440d-9ee1-f24e0b279137
ms.manager: douge
ms.author: kaelli
ms.date: 02/22/2017
---

# TF30016: You do not have permission to create a new SQL Server Reporting Services site on the server {0}.

**TFS 2017 | TFS 2015 | TFS 2013**

This error occurs when the permissions granted to your user account on the SQL Server Reporting Services server {*name*} are not sufficient to enable you to create the reporting site. You use the reporting site as the team project Report site. You must be granted specific permission by the SQL Server Reporting Services administrator.  
  
### To correct this error  
  
-   Contact the administrator for the SQL Server Reporting Services server {*name*} and ask that your user account be assigned the role of **Content Manager**.  See also [Grant permissions to view or create reports](../../../../report/admin/grant-permissions-to-reports.md)
  
You must also have the **Full Control** permission set on the server that hosts SharePoint Products. Your Team Foundation Server administrator may also be able to grant you the required permissions.  
  
## Related notes
- [Create a team project](../../../../accounts/create-team-project.md)
- [Grant permissions to view or create reports](../../../../report/admin/grant-permissions-to-reports.md)