---
title: Define iteration paths or sprint for a project 
titleSuffix: Azure DevOps & TFS
description: Define the iterations or sprints to use when assigning work items in Azure DevOps Services or Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 27631A15-9EB1-4E79-814E-8145BB7707C8
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 07/27/2018
---

# Define iteration paths (aka sprints) 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]


Newly created projects contain a single, root area that corresponds to the project name. Each project typically specifies a predefined set of iterations to help you get started tracking your work. All you need to do is specify the dates. 

You add iteration paths under this root. To understand how the system uses area paths, see [About area and iteration paths](about-areas-iterations.md). 

## Prerequisites
<a name="permissions"></a>
::: moniker range="vsts"
* You must be a member of a project. If you don't have a project yet, [create one](../projects/create-project.md). 
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2018"
* You must be a member of a project. If you don't have a project yet, [create one](../projects/create-project.md).
::: moniker-end
* To create or modify areas or iterations, you must either be a member of the **Project Administrators** group, or your **Create and order child nodes**, **Delete this node**, and **Edit this node** permissions must be set to **Allow** for the area or iteration node that you want to modify.

	If you aren't a project administrator, [get added as one](../security/set-project-collection-level-permissions.md) or have someone provide you with explicit permissions to **Edit project-level information**.   

For naming restrictions on area and iteration paths, see [About areas and iterations, Naming restrictions](about-areas-iterations.md#name-restrictions).


<a id="open-admin-context">  </a>



## Open Project Settings, Project configuration    

From the web portal, open **Project Settings**.

[!INCLUDE [temp](../../_shared/new-navigation.md)]  

# [New navigation](#tab/new-nav)

::: moniker range="vsts"  
You define both areas and iterations for a project from the **Project Settings>Work>Project configuration**. 

0. Choose (1) **Project Settings**, expand **Work** if needed, and choose (2) **Project configuration** and then (3) **Iterations**.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Work>Project Configuration](_img/iterations/open-work-project-config-iterations-vert.png)   

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]   
::: moniker-end

# [Previous navigation](#tab/previous-nav) 

You define both areas and iterations from the **Work** pages of the project admin context. From the user context, you open the admin context by choosing the ![ ](../../_img/icons/gear-icon.png) gear icon. 
<a id="admin-intro-team-services" /> 
::: moniker range=">= tfs-2017"  
From the web portal, open **Project settings**. 

<a id="admin-intro-team-services" /> 

1. From the web portal for the project context, choose the ![ ](../../_img/icons/gear-icon.png) gear icon..  

	> [!div class="mx-imgBorder"]  
	> ![Open Admin context, project level](_img/areas/modify-areas-its-open-admin-context-ts.png)  
	
	If you're currently working from a team context, then hover over the ![gear icon](../../_img/icons/gear_icon.png) and choose **Project settings**.  

	> [!div class="mx-imgBorder"]
	> ![Open Project Settings, horz nav](../../_shared/_img/settings/open-project-settings-horz.png)
	::: moniker-end

2. Choose **Work**.   

::: moniker-end 
<a id="admin-intro-tfs-2015" />
::: moniker range=">= tfs-2013 <= tfs-2015"  

From the web portal, choose the ![ ](../../_img/icons/gear_icon.png) gear icon to open project administration pages. Then, choose **Iterations**.  

![Open the project administration page](../../_shared/_img/settings/open-project-settings-tfs-2015.png)

::: moniker-end

---

<a id="iterations"></a>  
## Add iterations and set iteration dates

From **Iterations**, you can add iterations that teams can then select for their use. You add iterations in the same way you add areas. For more information about working within a sprint cadence, see [Scrum and sprint planning tools](../../boards/sprints/scrum-sprint-planning-tools.md).  

::: moniker range=">= tfs-2017"
<a id="define-sprints-team-services">   </a>

You add and modify area paths from the **Work, Iterations** page from the project admin or settings context.   

For Scrum-based projects, you'll see the following set of sprints. 

> [!div class="mx-imgBorder"]  
> ![Project Settings Context, Work, Iterations page](_img/areas/modify-areas-its-iterations-ts.png) 

0. To schedule the start and end dates for each sprint your teams will use,  Highlight the sprint and choose **Set dates**. Or, you can open the ![ ](../../_img/icons/actions-icon.png) context menu for the iteration path and choose **Edit**.  

	Choose the calendar icon to choose new dates. 

	> [!div class="mx-imgBorder"]  
	> ![Work, Iterations page, scheduled set of sprints](_img/iterations/schedule-sprints-calendar.png) 	

0. When you're finished, you'll have a set of sprints scheduled - like this: 

	> [!div class="mx-imgBorder"]  
	> ![Work, Iterations page, scheduled set of sprints](_img/areas/modify-areas-its-iterations-scheduled-ts.png)

	Your next step is to [choose the sprints each team will use](../../organizations/settings/set-team-defaults.md#activate-team-services). 
::: moniker-end


::: moniker range=">= tfs-2013 <= tfs-2015"

<a id="tfs-2015-iteration-paths" />

1. Open the **Iterations** tab for the project context. 

	For Scrum-based projects, you'll see these set of sprints. 

	<img src="../../boards/sprints/_img/activate-team-sprints.png" alt="Example Iterations for a Team" style="border: 1px solid #C3C3C3;" />  

	You can change the name, location within the tree hierarchy, or set dates for any sprint. Simply open it (double-click or press Enter key) and specify the info you want.

2. Schedule the start and end dates for those sprints you plan to use. 

	<img src="../../boards/sprints/_img/set-sprint-start-end-dates.png" alt="Define start and end dates for a sprint" style="border: 1px solid #C3C3C3;" />  

	After you set the start and end dates for one iteration, the calendar tool automatically attempts to set the next set of dates, based on the same iteration length you specified for the first. For example, if you set a three week sprint for Sprint 1, then when you select the start date for Sprint 2, the calendar tool automatically determines the start and end dates based on the next three weeks. You can accept or change these dates.  

3. To add another sprint, select <b>New child</b> and name it what you want. Here, we call it Sprint 7.  

	<img src="../../boards/sprints/_img/create-new-child-under-sprint.png" alt="Iterations, defaults defined for Agile" style="border: 2px solid #C3C3C3;" />

	Your next step is to [select the sprints each team will use](../../organizations/settings/set-team-defaults.md#activate-sprints-tfs). 
 
::: moniker-end


::: moniker range=">= tfs-2017"

<a name="rename-delete"></a>
## Rename, move, or delete an iteration 

When you rename an iteration, or move the node within the tree hierarchy, the system will automatically update the work items and queries that reference the existing path or paths. 

0. To rename an iteration path, choose the ![ ](../../_img/icons/actions-icon.png) actions icon for the node, and select **Edit**.  

	> [!div class="mx-imgBorder"]  
	> ![Open Work>Project Configuration](_img/iterations/edit-iteration-path.png)  

0. In the dialog that opens, enter the new name. 

	> [!div class="mx-imgBorder"]  
	> ![Open Work>Project Configuration](_img/iterations/edit-iteration-path-dialog.png)

0.  To move the node within the hierarchy, change the Location field. 

0. To delete a node, choose the **Delete** option from the actions menu. 

	> [!NOTE]   
	> When you delete an iteration node, the system automatically updates the existing work items with the node that you enter at the deletion prompt. 

::: moniker-end

## Chart progress by iteration

You can quickly generate [queries](../../boards/queries/using-queries.md) to view the progress for those areas and iterations. As an example, you can [visualize progress of work items assigned to sprints](../../report/dashboards/charts.md) as shown in the following stacked bar chart.  

<img src="_img/areas/ALM_CW_StackedBarChart.png" alt="Stacked bar chart by area" style="border: 1px solid #C3C3C3;" /> 

## Related articles 
As you can see, iterations play a major role in supporting Agile tools and managing work items. You can learn more about working with these fields from these topics: 
 
*	[Set team defaults](set-team-defaults.md)  
*	[Agile tools and sprint definitions ](../../boards/sprints/define-sprints.md)  
*	[Query by date or current iteration](../../boards/queries/query-by-date-or-current-iteration.md)  
*	 [Set permissions and access for work tracking](../security/set-permissions-access-work-tracking.md)
 
 