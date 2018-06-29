---
title: Troubleshoot creating a team project
description: Troubleshoot creating a team project, including how to resolve various errors, and view frequently asked questions (FAQ)
ms.assetid: 90e03b82-a6e8-47af-ad8c-5b134f4e3134
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/17/2017
monikerRange: '>= tfs-2015'
---
# Troubleshoot creating a team project

**VSTS** | **TFS 2018** | **TFS 2017** | **TFS 2015** 


## Resolve errors

### To resolve permission related errors
If you receive an error message that states you don't have permission, go get those permissions: become a member of the [Project Collection Administrators group](https://msdn.microsoft.com/library/dd547204.aspx), [Team Foundation Content Managers group](../../report/admin/grant-permissions-to-reports.md), and gain [Full Control permissions](https://msdn.microsoft.com/library/dd547204.aspx) on the server that hosts SharePoint Products.  

### To resolve Error TF30169

**Error TF30169: The New Team Project Wizard was unable to download the process template {0}**  indicates that SharePoint site process templates are not available on the server that hosts SharePoint products.

Contact the system administrator for the server that hosts SharePoint Products and request the required process templates be added to the server. See [Requirements and compatibility](/tfs/server/requirements).

###To resolve Error TF30321 

**Error TF30321: The name you typed is already used for another team project on the Team Foundation Server** indicates that you should use a different name for your team project. The name you entered is either in active use or has undergone partial deletion, but not full deletion.  

Even when you've deleted a team project, you may get the same name error. If a team project create or delete operation doesn't successfully finish, some components could be created or deleted even though others are not. In this event, you can't reuse the name associated with the team project.

To verify project deletion or remove remaining components associated with a partially deleted team project, use the [Delete a team project [TFSDeleteProject]](https://msdn.microsoft.com/library/ms181482). Then try again to create the team project with the same name.

Even with troubleshooting, you might not be able to use the same name. Some components of the deleted team project could be scheduled for deletion but not yet deleted.


### To resolve an error message related to a plug-in 

The process template used to create the team project contains several XML plug-in files. If one of these files contains a format or other error, an error message appears.

Review the project creation log to determine the plug-in that caused the error. After you discover the problem, you can either contact the developer or vendor that provided the plug-in, or attempt to fix the problem yourself. For more information, see [Customize a Process Template](https://msdn.microsoft.com/library/ms243782.aspx).

### To resolve a problem connecting to a server

If you receive an error message about a problem connecting to a server, retrieving information from a server, or checking permissions to create projects, it could be caused by an incorrectly configured server in the deployment. This problem is especially common after a server move, failover, or other maintenance activity.

Contact the TFS system administrator and request that they verify the server configuration.

## Q & A  


### Q: How do I add my custom process template to the list?

**A:** You'll need to first [upload your template](../../work/work-items/guidance/manage-process-templates.md) using the Process Template Manager. To learn more about customizing a process template, go [here](https://msdn.microsoft.com/library/ms243782.aspx).

<a id="log-file">  </a>

### Q: Where is the log file located?

**A:** The log file is stored in $:\\Users\\*user name*\\AppData\\Local\\Temp and labeled vso\_TeamProjectCreation\_*yyyy\_mm\_dd\_hh\_mm\_ss*.log.

The log shows each action taken by the wizard at the time of the failure and may include additional details about the error. You can review the log entries to find network or file related issues by searching for **Exception** or **Error**.

### Q: How do I delete a team project?

**A:** You can delete a team project that you no longer use, which helps simplify the navigation to team projects that are in use. See [Delete a team project](delete-team-project.md).

### Q: How do I add reporting or SharePoint portal resources?

**A:** See one of these topics:

-   To add reporting: [Add reports to a team project](../../report/admin/add-reports-to-a-team-project.md).

-   To add a SharePoint web application: [Add SharePoint products to your deployment](/tfs/server/admin/add-sharepoint-to-tfs).

-   To configure a team project portal to use an existing website or SharePoint site: [Configure a project portal](https://msdn.microsoft.com/library/ms242865.aspx).

### Q: Where can I go if I have more questions?

**A:** You can post a question or search for answers in the [Team Foundation Server - Project Management & Work Item](http://social.msdn.microsoft.com/Forums/tfsworkitemtracking/threads) forum.

