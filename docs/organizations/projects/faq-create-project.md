---
title: Troubleshoot creating a project - Azure DevOps
titleSuffix: Azure DevOps
ms.custom: seodec18
description: View frequently asked questions (FAQs), like creating a project and how to resolve various errors.
ms.assetid: 90e03b82-a6e8-47af-ad8c-5b134f4e3134
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/19/2017
monikerRange: '>= tfs-2013'
---
# Troubleshoot creating a project

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]    

## Resolve errors

### To resolve permission related errors

::: moniker range="azure-devops"
If you receive an error message that states you don't have permission, go get those permissions: become a member of the [Project Collection Administrators group](../security/set-project-collection-level-permissions.md).  
::: moniker-end

::: moniker range=">= tfs-2018"
If you receive an error message that states you don't have permission, go get those permissions: become a member of the [Project Collection Administrators group](../security/set-project-collection-level-permissions.md) and the [Team Foundation Content Managers group](../../report/admin/grant-permissions-to-reports.md).  
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2017"
If you receive an error message that states you don't have permission, go get those permissions: become a member of the [Project Collection Administrators group](../security/set-project-collection-level-permissions.md), the [Team Foundation Content Managers group](../../report/admin/grant-permissions-to-reports.md), and gain [Full Control permissions](../security/set-sharepoint-permissions.md) on the server that hosts SharePoint Products.   
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"
### To resolve Error TF30169

**Error TF30169: The New Team Project Wizard was unable to download the process template {0}**  indicates that SharePoint site process templates aren't available on the server that hosts SharePoint products.

Contact the system administrator for the server that hosts SharePoint Products and request the required process templates be added to the server. See [Requirements and compatibility](/azure/devops/server/requirements).

::: moniker-end

### To resolve Error TF30321 

**Error TF30321: The name you entered is already used for another project on the Team Foundation Server** indicates that you should use a different name for your project. The name you entered is either in active use or has undergone partial deletion, but not full deletion.  

Even when you've deleted a project, you may get the same name error. If a project create or delete operation doesn't successfully finish, some components could be created or deleted even though others aren't. In this event, you can't reuse the name associated with the project.

::: moniker range=">= tfs-2013 <= tfs-2018"
To verify project deletion or remove remaining components associated with a partially deleted project, use the [Delete project command line tool(TFSDeleteProject)](/azure/devops/server/command-line/tfsdeleteproject-cmd). Then try again to create the project with the same name.

Even with troubleshooting, you might not be able to use the same name. Some components of the deleted project could be scheduled for deletion but not yet deleted.

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"
### To resolve an error message related to a plug-in 

The process template used to create the project contains several XML plug-in files. If one of these files contains a format or other error, an error message appears.

Review the project creation log to determine the plug-in that caused the error. After you discover the problem, you can either contact the developer or vendor that provided the plug-in, or attempt to fix the problem yourself. For more information, see [Customize a process template](../../reference/process-templates/customize-process.md).


### To resolve a problem connecting to a server

If you receive an error message about a problem connecting to a server, retrieving information from a server, or checking permissions to create projects, it could be caused by an incorrectly configured server in the deployment. This problem is especially common after a server move, failover, or other maintenance activity.

Contact the TFS system administrator and request that they verify the server configuration.

::: moniker-end

## Q & A  

::: moniker range=">= tfs-2013 <= tfs-2018"
### Q: How do I add my custom process template to the list?

**A:** You'll need to first [upload your template](../../boards/work-items/guidance/manage-process-templates.md) using the Process Template Manager. To learn more about customizing a process template, go [here](../../reference/process-templates/customize-process.md).

<a id="log-file">  </a>

### Q: Where is the log file located?

**A:** The log file is stored in $:\\Users\\*user name*\\AppData\\Local\\Temp and labeled vso\_TeamProjectCreation\_*yyyy\_mm\_dd\_hh\_mm\_ss*.log.

The log shows each action taken by the wizard at the time of the failure and may include additional details about the error. You can review the log entries to find network or file related issues by searching for **Exception** or **Error**.

::: moniker-end

### Q: How do I delete a project?

**A:** You can delete a project that you no longer use, which helps simplify the navigation to projects that are in use. See [Delete a project](delete-project.md).

::: moniker range=">= tfs-2013 <= tfs-2018"

### Q: How do I add SQL Server Reporting or SharePoint portal resources?

**A:** See [Add reports to a project](../../report/admin/add-reports-to-a-team-project.md).

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2017"
### Q: How do I add SharePoint portal resources?

**A:** See one of these topics:

-   To add a SharePoint web application: [Add SharePoint products to your deployment](/azure/devops/server/admin/add-sharepoint-to-tfs).

-   To configure a project portal to use an existing website or SharePoint site: [Configure a project portal](../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md).

::: moniker-end

### Q: Where can I go if I have more questions?

**A:** You can post a question or search for answers in our [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html), [Stack Overflow](https://stackoverflow.com/questions/tagged/vs-team-services), or through our   [Support](https://www.visualstudio.com/team-services/support/)   portal.



