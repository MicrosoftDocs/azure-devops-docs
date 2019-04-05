---
title: Add markdown content to a team dashboard 
titleSuffix: Azure DevOps
description: Add and configure the Markdown widget you add to a team dashboard  
ms.custom: dashboards
ms.prod: devops
ms.technology: devops-analytics
ms.topic: quickstart
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2015'
ms.date: 11/19/2018 
---

# Add Markdown to a dashboard

[!INCLUDE [temp](../_shared/version-ts-tfs-2015-2016.md)]


<a id="markdown-widget">  </a> 
Use the Markdown widget to support your team and stakeholders by adding information such as:  
- Team goals  
- Provide links to team backlogs or boards, metrics, or other items located in a network share such as a OneNote, SharePoint site or wiki pages   
- Important dates or target deadlines  

Here's an example:  
<img src="../../project/wiki/_img/markdown-guidance/markdown-widget-configured.png" alt="Web portal, Sample Markdown widget" style="border: 2px solid #C3C3C3;" /> 

[!INCLUDE [temp](../_shared/dashboard-prerequisites.md)]  


## Connect to your project 
To add the markdown widget to a dashboard, you connect to your project using a [supported web browser](/tfs/server/compatibility#supported-browsers). 

::: moniker range=">= azure-devops-2019"  
Open a web browser, connect to your project, and  choose **Overview>Dashboards**. 

> [!div class="mx-imgBorder"]  
> ![Web portal, open Dashboards](_img/dashboards/open-dashboards-vert.png)

If you need to switch to a different project, choose the ![ ](../../_img/icons/project-icon.png) Azure DevOps logo to [browse all projects](../../project/navigation/go-to-project-repo.md).  

::: moniker-end  

::: moniker range=">= tfs-2015 <= tfs-2018"

Open a web browser, connect to your project, and  choose **Dashboards**. 

![Open Dashboards](_img/dashboards-go-to.png) 

If you need to switch to a different project, choose the ![ ](../../_img/icons/project-icon.png) Azure DevOps logo to [browse all projects and teams](../../project/navigation/go-to-project-repo.md).  

::: moniker-end


## Add the markdown widget
If you need to add a dashboard, see [Add, rename, and delete dashboards](dashboards.md).  

::: moniker range="tfs-2015"
> [!NOTE]   
> Requires TFS 2015.1 or later version.   
::: moniker-end

::: moniker range=">= azure-devops-2019"
To add the markdown widget to the dashboard, choose ![ ](_img/icons/edit-icon.png) **Edit**. The widget catalog will automatically open.  

0. Add or drag the Markdown widget onto the dashboard where you want it located.  

	<img src="_img/widget-markdown-tile.png" alt="Markdown widget" style="border: 2px solid #C3C3C3;" />  

0. Choose **Done Editing** to exit dashboard editing. This will dismiss the widget catalog. You can then configure the markdown widget as needed.

0. Choose the ![gear icon](../../_img/icons/gear-icon.png) gear icon to open the configuration dialog for the widget. 

	To edit a markdown widget, you may need to be a team admin, a member of the Project Administrators group, or be granted permissions. To learn more, see [Set dashboard permissions](dashboard-permissions.md). 

0. Adjust the widget size as needed to fit the contents of the markdown you'll enter. The largest size is 10 tiles wide by 10 tiles tall. You can always adjust this later. 

	<img src="_img/add-markdown-size.png" alt="Change markdown widget size" style="border: 1px solid #C3C3C3;" />  

0. Enter the text and markdown syntax into the configuration the configuration dialog. For supported syntax, see [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](../../project/wiki/markdown-guidance.md).

	Here we show some simple text with a bulleted list of four links

	<img src="_img/add-markdown-configure.png" alt="Configure markdown" style="border: 1px solid #C3C3C3;" /> 

	> [!TIP]  
	> To link to a wiki page,use the following syntax:<br/>
	> `/ProjectName/_wiki/wikis/WikiRepositoryName?pagePath=/FileName` 
	> 
	> To link to a repository file, page, or image within the project, rich-click the file and use the full URL.

	This renders the following widget: 

	<img src="../../project/wiki/_img/markdown-guidance/markdown-widget-configured.png" alt="Web portal, Sample Markdown widget" style="border: 2px solid #C3C3C3;" /> 

	> [!NOTE]  
	> Links to documents on file shares using `file://` are not supported. This restriction has been implemented for security purposes.
	
0. Optionally, you can choose to point to a file in your repository.  

	<img src="_img/add-markdown-configure-repo-file.png" alt="Configure Markdown widget with a repo file" style="border: 2px solid #C3C3C3;" /> 

::: moniker-end

::: moniker range=">= tfs-2015  <= tfs-2018"  

0. Choose ![Edit dashboard icon](_img/edit-dashboard-icon.png) to modify a dashboard.  

0. Choose ![add a widget icon](_img/add-widget-icon.png) to open the widget catalog.  

0. Drag the Markdown widget onto the dashboard where you want it located.  

	<img src="_img/widget-markdown-tile.png" alt="Markdown widget" style="border: 2px solid #C3C3C3;" />  

0. Choose the ![gear icon](../../_img/icons/gear-icon.png) gear icon to open the configuration dialog for the widget. 

	To edit a markdown widget, you may need to be a team admin, a member of the Project Administrators group, or be granted permissions. To learn more, see [Set dashboard permissions](dashboard-permissions.md). 

0. Adjust the widget size as needed to fit the contents of the markdown you'll enter. The largest size is 10 tiles wide by 10 tiles tall. You can always adjust this later. 

	<img src="_img/add-markdown-size.png" alt="Change markdown widget size" style="border: 1px solid #C3C3C3;" />  

0. Enter the text and markdown syntax into the configuration the configuration dialog. For supported syntax, see [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](../../project/wiki/markdown-guidance.md).

	Here we show some simple text with a bulleted list of four links

	<img src="_img/add-markdown-configure.png" alt="Configure markdown" style="border: 1px solid #C3C3C3;" /> 

	To link to a wiki page, repository file, or page within the project, use this format: 

	`/DefaultCollection/Fabrikam%20Fiber/Voice/_wiki?pagePath=%2FHome`
	`/DefaultCollection/Fabrikam%20Fiber/Voice/_git/Fabrikam%20Fiber?path=%2FREADME.md`
	`/DefaultCollection/Fabrikam%20Fiber/Voice/_backlogs?level=Backlog%20items&showParents=false&_a=backlog`

	This renders the following widget: 

	<img src="../../project/wiki/_img/markdown-guidance/markdown-widget-configured.png" alt="Web portal, Sample Markdown widget" style="border: 2px solid #C3C3C3;" /> 

	> [!NOTE]  
	> Links to documents on file shares using `file://` are not supported on TFS 2017.1 and later versions. This restriction has been implemented for security purposes.
	
0. Optionally, you can choose to point to a file in your repository.

	<img src="_img/add-markdown-configure-repo-file.png" alt="Configure Markdown widget with a repo file" style="border: 2px solid #C3C3C3;" /> 

0. If you haven't closed the widget catalog yet, do that now.

0. If you want to reposition the markdown widget or other widgets on the dashboard, do that now while you're still in dashboard edit mode. 

0. When you're finished with your changes, choose ![Exit edit-dashboard-mode icon](_img/exit-edit-dashboard-mode-icon.png) to exit dashboard editing.
::: moniker-end


## Related articles
- [Add and manage dashboards](dashboards.md)
- [Add a widget to a dashboard](add-widget-to-dashboard.md)
- [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](../../project/wiki/markdown-guidance.md)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)


