---
title: Add markdown content to a team dashboard 
titleSuffix: VSTS & TFS
description: Add and configure the Markdown widget you add to a team dashboard  
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 10/18/2017
---

# Add Markdown to a dashboard

<b>VSTS | TFS 2018 | TFS 2017 | TFS 2015.1-2015.3  </b>  

<a id="markdown-widget">  </a> 

Use the Markdown widget to support your team and stakeholders by adding information such as:  
- Team goals  
- Provide links to team backlogs or boards, metrics, or other items located in a network share such as a OneNote, SharePoint site or wiki pages   
- Important dates or target deadlines  

Here's an example:  

<img src="../../collaborate/_img/markdown-guidance/markdown-widget-configured.png" alt="Web portal, Sample Markdown widget" style="border: 2px solid #C3C3C3;" /> 

## Connect to the web portal for your team project 

To add the markdown widget to a dashboard, you connect to your team project using a [supported web browser](../../tfs-server/requirements.md#supported-browsers). If you don't have a team project yet, create one in [VSTS](../../accounts/create-account-msa-or-work-student.md)<!--- or set one up in an [on-premises TFS](../../accounts/create-team-project.md)-->.

Open a browser window and click the **Dashboards** hub. If you haven't been added as a team member, [get added now](../../work/scale/multiple-teams.md#add-team-members).

![Open the Dashboards hub](_img/dashboards-go-to.png) 

If you don't see the team or team project you want, click the ![project icon](../../work/_img/icons/project-icon.png) project icon to [browse all team projects and teams](../../user-guide/account-home-pages.md).  
 

## Add the markdown widget to a dashboard  

0. Click ![Edit dashboard icon](_img/edit-dashboard-icon.png) to modify a dashboard.  
 
	If you need to add a dashboard, see [Add and manage dashboards](dashboards.md).  

0. Click ![add a widget icon](_img/add-widget-icon.png) to open the widget catalog.  

0. Drag the Markdown widget onto the dashboard where you want it located.  
     
	<img src="_img/widget-markdown-tile.png" alt="Markdown widget" style="border: 2px solid #C3C3C3;" />  

0. Click the ![gear icon](../../_img/icons/gear-icon.png) gear icon to open the configuration dialog for the widget. 

	To edit a markdown widget, you may need to be a team admin, a member of the Project Administrators group, or be granted permissions. To learn more, see (../report/dashboard-permissions.md). 

0. Adjust the widget size as needed to fit the contents of the markdown you'll enter. The largest size is 10 tiles wide by 10 tiles tall. You can always adjust this later. 

	<img src="_img/add-markdown-size.png" alt="Change markdown widget size" style="border: 1px solid #C3C3C3;" />  

0. Enter the text and markdown syntax into the configuration the configuration dialog. For supported syntax, see [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](../../collaborate/markdown-guidance.md).

	Here we show some simple text with a bulleted list of four links

	<img src="_img/add-markdown-configure.png" alt="Configure markdown" style="border: 1px solid #C3C3C3;" /> 

	To link to a wiki page, repository file, hub, or page within the team project, use this format: 

	`/DefaultCollection/Fabrikam%20Fiber/Voice/_wiki?pagePath=%2FHome`
	`/DefaultCollection/Fabrikam%20Fiber/Voice/_git/Fabrikam%20Fiber?path=%2FREADME.md`
	`/DefaultCollection/Fabrikam%20Fiber/Voice/_backlogs?level=Backlog%20items&showParents=false&_a=backlog`

	This renders the following widget: 

	<img src="../../collaborate/_img/markdown-guidance/markdown-widget-configured.png" alt="Web portal, Sample Markdown widget" style="border: 2px solid #C3C3C3;" /> 

	>[!NOTE]  
	>Links to documents on file shares using `file://` are not supported on VSTS or TFS 2017.1 and later versions. This restriction has been implemented for security purposes.
	
0. Optionally, you can choose to point to a file in your repository. 

	<img src="_img/add-markdown-configure-repo-file.png" alt="Configure Markdown widget with a repo file" style="border: 2px solid #C3C3C3;" /> 

0. If you haven't closed the widget catalog yet, do that now.

0. If you want to reposition the markdown widget or other widgets on the dashboard, do that now while you're still in dashboard edit mode. 

0. When you're finished with your changes, click ![Exit edit-dashboard-mode icon](_img/exit-edit-dashboard-mode-icon.png) to exit dashboard editing.

## Related notes

- [Add and manage dashboards](dashboards.md)
- [Add a widget to a dashboard](add-widget-to-dashboard.md)
- [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](../../collaborate/markdown-guidance.md)
- [Widget catalog](widget-catalog.md)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)


