---
title: Create a team project in VSTS or Team Foundation Server (TFS)
description: Add a team project in VSTS or on-premises Team Foundation Server (TFS)
ms.assetid: 21F3C364-34F4-41B0-9EFC-6D4A141D81E0
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/17/2017
monikerRange: '>= tfs-2015'
---
# Create a team project

**VSTS | TFS 2018 | TFS 2017 | TFS 2015 | [Previous versions](https://msdn.microsoft.com/library/ms181477%28v=vs.120%29.aspx)**  
>[!NOTE]
>If you don't want to manage an on-premises server, you can 
[sign up for VSTS and create a team project](create-account-msa-or-work-student.md). This topic applies to creating a team project when you have an on-premises Team Foundation Server (TFS) deployed.

Create a team project to establish a repository for source code and a place for a group of developers and teams to plan, track progress, and collaborate on building software solutions. Team projects differ from [software application projects or solutions](https://msdn.microsoft.com/library/zfzh36t7.aspx). 

If you have a team project already, and want to start coding an application project, then see one of the following topics:  [Set up Git on your dev machine](../git/gitquickstart.md) or [Develop your app in Team Foundation version control](../git/gitquickstart.md).


>[!IMPORTANT]  
>When you create a team project from the web portal, several process template files are ignored. Specifically, the files that would create a Report Manager site and a SharePoint project portal aren't supported. These features aren't supported for VSTS. 
>
>If you want these features to be to be available on your on-premises TFS, then create your team project from Visual Studio or Team Explorer. For details, see [Process template and plug-in files, Client support for project creation](../work/customize/reference/process-templates/overview-process-template-files.md#client-support).  


## From the web

::: moniker range="vsts"

### VSTS

1.  If you're not a member of the Project Collection Administrators Group, [get added as one](../security/set-project-collection-level-permissions.md). To create team projects you must have the Create new projects permission set to **Allow**.

2. Navigate to the administration overview page by choosing the ![Settings Icon (TFS Web Portal)](_img/rename-team-project/gearicon.png) gear icon at the top of the page.

3. Choose **New team project...**.

    ![New Team Project VSTS](_img/create-team-project/newteamprojectvsts.png)


4. Provide a name for your new team project, select its initial source control type, select a process, and choose with whom to share the project.

    See [choosing the right version control for your project](../tfvc/comparison-git-tfvc.md) and [choose a process](../work/work-items/guidance/choose-process.md) for guidance. 

    ![Create Team Project VSTS](_img/create-team-project/clickcreatevsts.png)

::: moniker-end

::: moniker range=">= tfs-2015"

### TFS

If you're using TFS 2015 Update 2 or later then you can create a team project from the web as well. It's important to note that for team projects created from the web, Reporting and SharePoint integration steps will be skipped when creating the team project. You can still set up [Reporting](../report/admin/add-reports-to-a-team-project.md) and [SharePoint](../tfs-server/admin/add-sharepoint-to-tfs.md) manually after team project creation. 

> [!NOTE]   
> TFS 2018 and later versions no longer support native integration with SharePoint products. If you're planning to upgrade to TFS 2018, read [About SharePoint integration](/vsts/report/sharepoint-dashboards/about-sharepoint-integration) to learn about the options available to you. 

1.  If you're not a member of the Project Collection Administrators Group, [get added as one](../security/set-project-collection-level-permissions.md). To create team projects you must have the Create new projects permission set to **Allow**.

2. Navigate to the administration overview page by hovering over the ![Settings Icon (TFS Web Portal)](_img/rename-team-project/gearicon.png) gear icon at the top of the page and selecting *Server settings*.

3. Select the collection administration page for the collection you want to create the team project in from the left pane, and select *Create a new team project..*.

    ![Collection administration link](_img/create-team-project/createprojecttfs.png)

4. Provide a name for your new Team project, select its initial source control type, and select a process to create a team project.

    See [choosing the right version control for your project](../tfvc/comparison-git-tfvc.md) and [choose a process](../work/work-items/guidance/choose-process.md) for guidance. 

    ![Create team project dialog](_img/create-team-project/clickcreatetfs.png)

::: moniker-end

## From Team Explorer
You can create a team project from Team Explorer after you have connected to an on-premises server. 

> [!NOTE]
> For TFS 2018 and later versions, users will be redirected to the web. They will no longer be able to create a team project from Visual Studio. 
> 
> TFS 2018 and later versions no longer support native integration with SharePoint products. If you're planning to upgrade to TFS 2018, read [About SharePoint integration](/vsts/report/sharepoint-dashboards/about-sharepoint-integration) to learn about the options available to you. 

1.  If you're not a member of the Project Collection Administrators Group, [get added as one](../security/set-project-collection-level-permissions.md). To create team projects you must have the Create new projects permission set to **Allow**.

2.  Ask your TFS administrator about the following resources and get additional permissions as needed:

    -   Which team project collection you should connect to when you create your team project? If you installed TFS using the Basic Server Configuration Wizard, you have only one project collection named **DefaultCollection**. Unless you work in an enterprise organization and will be supporting hundreds of team projects, you should add all your team projects to a single project collection. If you need to create additional collections, see [Manage team project collections](../tfs-server/admin/manage-team-project-collections.md).

    -   Has SQL Server Analysis Services and SQL Server Reporting Services been configured for the deployment? If so, ask your administrator to [add you as a member of the Team Foundation Content Managers group](../report/admin/grant-permissions-to-reports.md) on the server that hosts SQL Server Reporting Services. Without these permissions, you'll be unable to create a team project.

    -   Has a SharePoint Web application been configured for your deployment? If you want to configure a SharePoint portal when you create your team project, ask the SharePoint administrator to give you Full Control permissions on the server that hosts SharePoint Products. Otherwise, you can skip this step and configure a portal at a later time.

3.  Open the same version of Visual Studio as the version of TFS that you're connecting to. If you don't see the Team Explorer pane, open **View\>Team Explorer** from the menu.

    As needed, [Download and install Visual Studio Community](https://www.visualstudio.com/products/visual-studio-community-vs.aspx) to get a free copy of the latest version.

4.  Connect to the server and team project collection where you want to create your team project.

    ![ALM\_CTP\_Connect](_img/IC827208.png)

    You can access Team Explorer for free by installing [Visual Studio Community](https://www.visualstudio.com/downloads/download-visual-studio-vs) or any other Visual Studio version.

    You must connect from a client that is at the same version level as TFS. That is, you must connect to TFS 2015 from a version of Visual Studio 2015.

    ![ALM\_EXL\_Connect](_img/IC680074.png)

    >**Tip:**  If you are running Team Explorer from a server that hosts SharePoint Products and SQL Server Reporting Services, you might need to run Visual Studio as an administrator.

5.  If it's your first time connecting to TFS, you'll need to add TFS to the list of recognized servers.

    ![ALM\_EXL\_AddServer](_img/IC658167.png)

6.  Open the New Team Project Wizard.

    ![New link on Connect page (Team Explorer)](_img/IC779380.png)

7.  Name the team project. Don't specify more than 64 characters.

    ![ALM\_CTP\_NameProject](_img/IC671598.png)

8.  Choose a process template. For a comparison of the default process templates, see [Choose a process](../work/work-items/guidance/choose-process.md).

    ![ALM\_CTP\_SelectTemplate](_img/IC795955.png)

9.  Choose your version control, either Git distributed repositories or TFVC, one centralized repo.

    ![ALM\_CTP\_SelectSource](_img/IC671600.png)

    Not sure which system to use? Learn more about 
	[Git](../git/overview.md) or [TFVC](../tfvc/overview.md). 

	After you've created your team project, you can[add repositories](#git-and-tfvs-repos). 

10. Unless your team project collection is configured to support a SharePoint project portal, you're done.

    ![ALM\_CTP\_Finish](_img/IC795956.png)

    If the Next button is active, you can configure your project portal.

    If the wizard encounters a problem, you'll receive an error message and a link to the project creation log. Review the [log file](faq-create-team-project.md#log-file) for specific errors and exceptions. 

11. When you're finished, you can see your team project in Team Explorer. You can also choose the **Web Access** link to connect to your team project from the web portal.

	<tbody valign="top">
	</tbody>
	
	<table>
	<tbody valign="top">
	<tr>
	<td>![Team Explorer Home page w/ TFVC as source control](_img/IC827209.png)</td>
	<td>![Team Explorer Home page with Git as source control](_img/IC827210.png)</td>
	</tr>
	</tbody>
	</table>

## From the command line or scripts

You can create and get team projects and other VSTS items from the command line or scripts using the VSTS CLI. Check out the [VSTS CLI documentation](https://docs.microsoft.com/en-us/cli/vsts/overview?view=vsts-cli-latest) to learn more.

## Try this next

[Add team members](../security/add-users-team-project.md) to enable other users to connect to your team project.

Also, with the team project created, you can start [developing your app in Team Foundation version control](https://msdn.microsoft.com/library/ms181382.aspx) or [use Git](../git/overview.md).

To start planning work and collaborating as a team, see [Agile tools](../work/backlogs/overview.md).


<a id="git-and-tfvs-repos" />

### Add repositories
From the admin context of the web portal, you can add additional repositories to a team project, either Git (distributed) or TFVC (centralized). While you can create many Git repositories, you can only create a single TFVC repository for a team project.  

![Add repositories to an existing team project](_img/create-team-project-add-repositories.png) 

<blockquote style="font-size: 13px"><b>Feature availability: </b>The ability to work from both Git and TFVC repositories from the same team project is only supported when you connect to VSTS or an on-premises application server that you've upgraded to TFS 2015 Update 1. Additional steps to address permissions may be required. See [Git team projects](../git/team-projects.md) or [TFVC team projects](../git/team-projects.md).</blockquote>  

