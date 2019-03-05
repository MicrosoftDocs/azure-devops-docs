---
title: Navigate in Visual Studio Team Explorer 
titleSuffix: Azure DevOps 
description: Download TFS clients, navigate in Team Explorer for Azure DevOps Services & Team Foundation Server 
keywords: Download TFS clients 
ms.technology: devops-new-user
ms.prod: devops
ms.assetid: fd7a5cf7-7916-4fa0-b5e6-5a83cf377a02
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013'
ms.date: 12/04/2018
---

# Navigate in Visual Studio Team Explorer

**Visual Studio 2019 | Visual Studio 2017 | Visual Studio 2015**

You use Team Explorer to coordinate your code efforts with other team members to develop a software project. In addition, you can manage work and that is assigned to you, your team, or your projects. Team Explorer is a plug-in that installs with Visual Studio and Team Explorer Everywhere is a plug-in that installs with Eclipse. Developers can effectively collaborate using Team Explorer connected to projects hosted on Azure DevOps Services or an on-premises Azure DevOps Server (previously named Team Foundation Server (TFS)).

> [!TIP]  
> You can install the latest version of Visual Studio clients from the [Visual Studio downloads page](https://visualstudio.microsoft.com/downloads/?utm_medium=microsoft&utm_source=docs.microsoft.com&utm_campaign=button+cta&utm_content=download+vs2017). 
> 
> Additional options for connecting to Azure DevOps Services or TFS include:  
> - [Team Explorer Everywhere](../java/download-eclipse-plug-in.md)
> - [Azure DevOps Plugin for Android Studio](../java/download-android-studio-plug-in.md)  
> - [Azure DevOps Plugin for IntelliJ](../java/download-intellij-plug-in.md)
> - [Visual Studio Code](../java/vscode-extension.md)  

> For information about compatibility among client and server versions, see [Requirements and compatibility](/azure/devops/server/requirements).

If you don't need Visual Studio, but want to connect to a project in Azure DevOps, you can install the free [Visual Studio Community](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs).

## Prerequisites 

- You must have a project in Azure DevOps. If you need to add a project, see [Create a project](../organizations/projects/create-project.md).
- You must be a member of the project you connect to. To get added, see [Add users to a project or team](../organizations/security/add-users-team-project.md).

## Connect to a project or repository

Team Explorer connects Visual Studio to projects in Azure DevOps. You can manage source code, work items, and builds. The operations available to you depend on which source control option&mdash;Git or Team Foundation version control (TFVC) &mdash;was selected to manage source code when the project was created.

> [!TIP]  
> If you open Visual Studio and the Team Explorer pane doesn't appear, choose the **View>Team Explorer** menu option from the tool bar.

From the **Connect** page, you can select the projects you want to connect to and quickly switch connection to a different project and or repository. For details, see [Connect to a project](../organizations/projects/connect-to-projects.md).

![Team Explorer, Connect](_img/vs-2019-te/manage-connections.png)


The Git and TFVC repos support different pages and functions. For a comparison of the two version control systems, see [Choosing the right version control for your project](../repos/tfvc/comparison-git-tfvc.md). 

## Git version control and repository 

The following images show the pages available when you connect to a Git repository from Team Explorer. 

>  [!div class="mx-tdCol2BreakAll"]  
> |Visual Studio 2019| Visual Studio 2017 | Visual Studio 2015 |  
> |------|---------|---------|  
> | ![Visual studio 2019, Team Explorer Home page with Git as source control](_img/vs-2019-te/te-git-full.png) |![Visual studio 2017, Team Explorer Home page with Git as source control](_img/vs-2017-te/te-git-full.png) | ![Visual Studio 2015, Team Explorer Home page w/ TFVC as source control](_img/IC827210.png) |  

To learn more about each page, see the following articles. 

<table width="100%">
<tbody valign="top">
<tr>
<th width="33%">Home & Builds</th>
<th width="33%">Git version control</th>
<th width="34%">Work Items</th>
</tr>

<tr>
<td> 
<p>**Home**</p>
<ul>
<li>[Web portal](../project/navigation/index.md)</li>
<li>[Task Board](../boards/sprints/task-board.md)</li>
<li>[Team Room](../notifications/collaborate-in-a-team-room.md)</li>
</ul>
<p>**Builds**</p>
<ul>
<li>[Create build pipelines](../pipelines/tasks/index.md)</li>
<li>[View and manage builds](../pipelines/overview.md)</li>
<li>[Manage the build queue](../pipelines/agents/pools-queues.md)</li>
<li>[Install Continuous Delivery (CD) Tools for Visual Studio](../pipelines/apps/cd/azure/aspnet-core-to-acr.md#install-continuous-delivery-cd-tools-for-visual-studio-2017)</li>
<li>[Configure and execute Continuous Delivery (CD) for your app](../pipelines/apps/cd/azure/aspnet-core-to-acr.md#configure-and-execute-continuous-delivery-cd-for-your-app)</li>
</ul>
</td>

<td> 
<ul>
<li>[Create a new repo](../repos/git/creatingrepo.md)</li>
<li>[Clone an existing repo](../repos/git/clone.md)</li>
<li>**Changes**: [Save work with commits](../repos/git/commits.md)</li>
<li>**Branches**: [Create work in branches](../repos/git/branches.md)</li>
<li>**Pull Requests**: [Review code with pull requests](../repos/git/pullrequest.md)</li>
<li>**Sync**: [Update code with fetch and pull](../repos/git/pulling.md)</li>
<li>**Tags**: [Work with Git tags](../repos/git/git-tags.md)</li>
<li>[Git preferences](../repos/git/git-config.md)</li>
<li>[Git command reference](../repos/git/command-prompt.md)</li>
</ul>
</td>

<td> 
<p>**Default experience** (Visual Studio 2019 only)</p>
<ul>
<li>[View and add work items](../boards/work-items/view-add-work-items.md)</li>
<li>[Set the Work Items experience in Visual Studio](../boards/work-items/set-work-item-experience-vs.md)</li>
</ul>
<p>**Legacy experience** (All versions of Visual Studio)</p>
<ul>
<li>[Add work items](../boards/backlogs/add-work-items.md)</li>
<li>[Query editor](../boards/queries/using-queries.md)</li>
<li>[Query folders](../boards/queries/organize-queries.md)</li>
<li>[Query permissions](../boards/queries/set-query-permissions.md)</li>
<li>[Open query in Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)</li>
<li>[Open query in Project](../boards/backlogs/office/create-your-backlog-tasks-using-project.md)</li>
<li>[Email query results using Outlook](../boards/queries/share-plans.md)</li>
<li>[Create reports from query in Excel](../report/excel/create-status-and-trend-excel-reports.md) (TFS only)</li>
</ul>
</td>

</tr>
</tbody>
</table>

## Team Foundation version control 

The following images show the pages available when you connect to a Git repository from Team Explorer. 

>  [!div class="mx-tdCol2BreakAll"]  
> |Visual Studio 2019| Visual Studio 2017 | Visual Studio 2015 |  
> |------|---------|---------|
> | ![Visual Studio 2019, Team Explorer Home page w/ TFVC as source control](_img/vs-2019-te/te-tfvc.png) | ![Visual Studio 2017, Team Explorer Home page w/ TFVC as source control](_img/vs-2017-te/te-tfvc.png) | ![Visual Studio 2015, Team Explorer Home page w/ TFVC as source control](_img/IC827209.png) |  

To learn more about each page, see the following articles. 

<table width="100%">
<tbody valign="top">
<tr>
<th width="33%">Home & Builds</th>
<th width="33%">TFVC</th>
<th width="34%">Work Items</th>
</tr>

<tr>
<td> 
<p>**Home**</p>
<ul>
<li>[Web portal](../project/navigation/index.md)</li>
<li>[Task Board](../boards/sprints/task-board.md)</li>
<li>[Team Room](../notifications/collaborate-in-a-team-room.md)</li>
</ul>
<p>**Builds**</p>
<ul>
<li>[Create build pipelines](../pipelines/tasks/index.md)</li>
<li>[View and manage builds](../pipelines/overview.md)</li>
<li>[Manage the build queue](../pipelines/agents/pools-queues.md)</li>
<li>[Install Continuous Delivery (CD) Tools for Visual Studio](../pipelines/apps/cd/azure/aspnet-core-to-acr.md#install-continuous-delivery-cd-tools-for-visual-studio-2017)</li>
<li>[Configure and execute Continuous Delivery (CD) for your app](../pipelines/apps/cd/azure/aspnet-core-to-acr.md#configure-and-execute-continuous-delivery-cd-for-your-app)</li>
</ul>
</td>

<td> 
<ul>
<li>[Configure workspace](../repos/tfvc/share-your-code-in-tfvc-vs.md#configure-your-workspace)</li>
<li>**My Work**: [Suspend/resume work](../repos/tfvc/suspend-your-work-manage-your-shelvesets.md)  &#124; [Code review](../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md)</li>
<li>**Pending Changes**: [Manage pending changes](../repos/tfvc/develop-code-manage-pending-changes.md) &#124; [Find shelvesets](../repos/tfvc/suspend-your-work-manage-your-shelvesets.md) &#124; [Resolve conflicts](../repos/tfvc/resolve-team-foundation-version-control-conflicts.md)</li>
<li>**Source Control Explorer**: [Add/view files and folders](../repos/tfvc/add-files-server.md)</li>
<li>[Add Check-In Policies](/azure/devops/repos/tfvc/add-check-policies)</li>
<li>[Version control commands](/azure/devops/repos/tfvc/use-team-foundation-version-control-commands)</li>
</ul>
</td>

<td> 

<p>**Default experience** (Visual Studio 2019 only)</p> 
<ul>
<li>[View and add work items](/azure/devops/boards/work-items/view-add-work-items)</li>
<li>[Set the Work Items experience in Visual Studio](/azure/devops/boards/work-items/set-work-item-experience-vs)</li>
</ul>
<p>**Legacy experience** (All versions of Visual Studio)</p> 
<ul>
<li>[Add work items](../boards/backlogs/add-work-items.md)</li>
<li>[Query editor](../boards/queries/using-queries.md)</li>
<li>[Query folders](../boards/queries/organize-queries.md)</li>
<li>[Query permissions](../boards/queries/set-query-permissions.md)</li>
<li>[Open query in Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)</li>
<li>[Open query in Project](../boards/backlogs/office/create-your-backlog-tasks-using-project.md)</li>
<li>[Email query results using Outlook](../boards/queries/share-plans.md)</li>
<li>[Create reports from query in Excel](../report/excel/create-status-and-trend-excel-reports.md) (TFS only)</li>

</ul>
</td>

</tr>
</tbody>
</table>



## Team Explorer plug-in for Eclipse

If you work in Eclipse or on a non-Windows platform, you can [install the Team Explorer plug-in for Eclipse](/../java/download-eclipse-plug-in#_install-the-tee-plugin-for-eclipse). Once installed, you can share your Eclipse projects by adding them to Azure DevOps Services or TFS using [Git](../repos/git/share-your-code-in-git-eclipse.md) or [TFVC](../repos/tfvc/share-your-code-in-tfvc-eclipse.md).


> [!div class="mx-tdBreakAll"]  
> |Home page with Git (Eclipse) |Home page with TFVC (Eclipse) |
> |-------------|----------|
> |![Eclipse, Team Explorer, Git source control](_img/work-team-explorer/tee-git-10.2018.png) |![Eclipse, Team Explorer, TFVC source control](_img/work-team-explorer/tee-tfvc-10.2018.png) |


To learn more about each page, see the following articles. 

<table width="100%">
<tbody valign="top">
<tr>
<th width="33%">Home & Builds</th>
<th width="33%">Version control</th>
<th width="34%">Work Items</th>
</tr>

<tr>
<td> 
<p>**Home**</p> 
<ul>
<li>[Web portal](../project/navigation/index.md)</li>
</ul>
<p>**Builds**</p> 
<ul>
<li>[Create build pipelines](../pipelines/tasks/index.md)</li>
<li>[View and manage builds](../pipelines/overview.md)</li>
<li>[Manage the build queue](../pipelines/agents/pools-queues.md)</li>
<li>[Install Continuous Delivery (CD) Tools for Visual Studio](../pipelines/apps/cd/azure/aspnet-core-to-acr.md#install-continuous-delivery-cd-tools-for-visual-studio-2017)</li>
<li>[Configure and execute Continuous Delivery (CD) for your app](../pipelines/apps/cd/azure/aspnet-core-to-acr.md#configure-and-execute-continuous-delivery-cd-for-your-app)</li>
</ul>
</td>


<td> 
<p>**Git repo**</p> 
<ul>
<li>[Share your code](../repos/git/share-your-code-in-git-eclipse.md)</li>
<li>[Git preferences](../repos/git/git-config.md)</li>
<li>[Git command reference](../repos/git/command-prompt.md)</li>
</ul>
<p>**TFVC repo**</p> 
<ul>
<li>[Share your code](../repos/tfvc/share-your-code-in-tfvc-eclipse.md)</li>
<li>[Pending changes](../repos/tfvc/develop-code-manage-pending-changes.md)</li>
<li>[Source Control Explorer](../repos/tfvc/add-files-server.md)</li>
<li>[Add Check-In Policies](../repos/tfvc/add-check-policies.md)</li>
<li>[Version control commands](../repos/tfvc/use-team-foundation-version-control-commands.md)</li>
</ul>
</td>

<td> 
<ul>
<li>[Add work items](../boards/backlogs/add-work-items.md)</li>
<li>[Query editor](../boards/queries/using-queries.md)</li>
<li>[Query folders](../boards/queries/organize-queries.md)</li>
<li>[Query permissions](../boards/queries/set-query-permissions.md)</li>
</ul>
</td>


</tr>
</tbody>
</table>


::: moniker range=">= tfs-2018 <= azure-devops-2019"

## Reports 

> [!NOTE]  
> Some pages, such as **Reports**, only appear when an on-premises TFS is configured with the required resources, such as SQL Server Reporting Services and SharePoint.

The **Reports** page opens the [Reporting Services report site](../report/sql-reports/reporting-services-reports.md). This page appears only when your project has been configured with SQL Server Analysis Services and Reporting Services. Also, the option to **Create Report in Microsoft Excel** appears only when reporting has been configured for the project.

If your project is missing one or more pages, you may be able to [add functionality to your on premises TFS deployment](/azure/devops/server/admin/config-tfs-resources).

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2017"

## Reports and Documents  

> [!NOTE]  
> Some pages, such as **Reports** and **Documents**, only appear when an on-premises TFS is configured with the required resources, such as SQL Server Reporting Services and SharePoint.

The **Reports** page opens the [Reporting Services report site](../report/sql-reports/reporting-services-reports.md). This page appears only when your project has been configured with SQL Server Analysis Services and Reporting Services. Also, the option to **Create Report in Microsoft Excel** appears only when reporting has been configured for the project.

From the **Documents** page, you can [open project portal](../report/sharepoint-dashboards/share-information-using-the-project-portal.md) and [manage documents and document libraries](../report/sharepoint-dashboards/manage-documents-and-document-libraries.md). This page appears only if your project has been configured with a SharePoint Products portal.
  
If your project is missing one or more pages, you may be able to [add functionality to your on premises TFS deployment](/azure/devops/server/admin/config-tfs-resources).

::: moniker-end


## Settings  

From the **Settings** page, you can configure administrative features for either a project or project collection. To learn more about each page, see the following articles. Most of the links open to a web portal administration page. Not all settings are available from the Team Explorer plug-in for Eclipse. 

<table width="100%">
<tbody valign="top">
<tr>
<th width="33%">Project</th>
<th width="34%">Project Collection</th>
<th width="33%">Other</th>
</tr>

<tr>
<td> 
<ul>
<li>[Security, Group Membership](../organizations/security/set-project-collection-level-permissions.md)</li>
<li>[Security, Source Control (TFVC)](../organizations/security/set-git-tfvc-repository-permissions.md)</li>
<li>[Work Item Areas](../organizations/settings/set-area-paths.md)</li>
<li>[Work Item Iterations](../organizations/settings/set-iteration-paths-sprints.md)</li>
<li>[Portal Settings](../report/sharepoint-dashboards/configure-or-add-a-project-portal.md)</li>
<li>[Project Alerts](../notifications/howto-manage-team-notifications.md)</li>
</ul>
</td>

<td> 
<ul>
<li>[Security, Group Membership](../organizations/security/set-project-collection-level-permissions.md)</li>
<li>[Source Control (TFVC)](../repos/tfvc/decide-between-using-local-server-workspace.md)</li>
<li>[Process Template Manager](../boards/work-items/guidance/manage-process-templates.md)</li>
</ul>
</td>

<td> 
<ul>
<li>[Git Global Settings](../repos/git/git-config.md)</li>
<li>[Git Repository Settings](../repos/git/git-config.md)</li>
</ul>
</td>

</tr>
</tbody>
</table>


To learn more about settings, see [About team, project, and organizational-level settings](../organizations/settings/about-settings.md).


## Refresh Team Explorer or Team Explorer Everywhere

If data doesn't appear as expected, the first thing to try is to refresh your client. Refreshing your client updates the local cache with changes that were made in another client or in TFS. To refresh Team Explorer, do one of the following actions:

- To refresh a page that you are currently viewing, choose ![ ](../boards/_img/icons/te-refresh-query-icon.png) **Refresh** icon in the menu bar (or choose the F5 key).
- To refresh the project you currently have selected, choose ![](_img/work-team-explorer/IC547418.png) **Home**, and then choose ![Refresh icon](../boards/_img/icons/te-refresh-query-icon.png) **Refresh** icon (or choose the F5 key).
- To refresh the set of teams defined for the project that you currently have selected, choose the Connect icon, and then choose ![ ](../boards/_img/icons/te-refresh-query-icon.png) **Refresh** icon (or choose the F5 key).

[!INCLUDE [temp](_shared/when-to-refresh-client.md)]

[!INCLUDE [temp](../_shared/images-not-appearing-vs.md)] 


## Related articles

- [Troubleshoot connection](troubleshoot-connection.md?toc=/azure/devops/user-guide/toc.json&bc=/azure/devops/user-guide/breadcrumb/toc.json)  
- [Create a project](../organizations/projects/create-project.md)


### Additional tools provided with TFS Power Tools 

By installing [TFS Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power), you gain access to these additional tools through the Team Explorer plug-in for Visual Studio:

-   Process Template Editor
-   Additional check-in policies for Team Foundation Version Control
-   Team Explorer enhancements including Team Members
-   Team Foundation Power Tool Command Line
-   Test Attachment Cleaner
-   Work Item Templates

Additional requirements may apply.
