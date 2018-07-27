---
title: Define area paths for a project
titleSuffix: VSTS & TFS
description: Group work items based on team, product, or feature area by defining area paths for Visual Studio Team Services or Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 97358022-AE19-4775-AE25-47BA24FF3C74
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 06/19/2018
---


# Define area paths  

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Newly created projects contain a single, root area that corresponds to the project name. You add area paths under this root. You add area paths to support teams and queries based on work items that belong to different areas of the product. To understand how the system uses area paths, see [About area and iteration paths](about-areas-iterations.md). 

## Prerequisites
<a name="permissions"></a>
::: moniker range="vsts"
* You must be a member of a project. If you don't have a project yet, create one in [VSTS](../../accounts/set-up-vs.md). If you haven't been added as a team member, [get added now](../../accounts/add-account-users-assign-access-levels.md). 
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2018"
* You must be a member of a project. If you don't have a project yet, create one in an [on-premises TFS](../projects/create-project.md). If you haven't been added as a team member, [get added now](../security/add-users-team-project.md). 
::: moniker-end
* To create or modify areas or iterations, you must either be a member of the **Project Administrators** group, or your **Create and order child nodes**, **Delete this node**, and **Edit this node** permissions must be set to **Allow** for the area or iteration node that you want to modify.

	If you aren't a project administrator, [get added as one](../security/set-project-collection-level-permissions.md) or have someone provide you with explicit permissions to **Edit project-level information**.   

For naming restrictions on area and iteration paths, see [About areas and iterations, Naming restrictions](about-areas-iterations.md#name-restrictions).

<a id="open-admin-context">  </a>
<a id="admin-intro-team-services" /> 

## Open project settings    

From the web portal, open the **Settings** context for the project.

<!---
# [New navigation](#tab/new-nav)

::: moniker range="vsts"  
You define both areas and iterations from the **Work>Project configuration** hub of the project **Settings** hub. 

0. To open **Settings**, choose the ![](../../_img/icons/settings-icon-vert.png) Settings icon (located toward the bottom of the left-pane).  

0. Under **Work**, choose **Project Configuration**. 

	> [!div class="mx-imgBorder"]  
	> ![Settings hub, Open Work>Project Configuration](_img/areas/open-work-project-configuration.png)   

0. Choose **Areas**.  

	> [!div class="mx-imgBorder"]  
	> ![Settings hub, Open Work>Project Configuration>Areas page](_img/areas/choose-areas.png)   


::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"  
Vertical navigation isn't a supported feature for TFS at this time. 
::: moniker-end

# [Previous navigation](#tab/previous-nav) 

--> 

You define both areas and iterations from the **Work** hub of the project admin context. From the user context, you open the admin context by choosing the ![](../../_img/icons/gear-icon.png) gear icon. The tabs and pages available differ depending on which admin context you access.  

<a id="admin-intro-team-services" /> 
::: moniker range=">= tfs-2017"  

1. From the web portal for the project context, choose the ![](../../_img/icons/gear_icon.png) gear icon.   
	::: moniker range=">= tfs-2018"
	<img src="_img/areas/modify-areas-its-open-admin-context-ts.png" alt="Web portal, VSTS, Open Admin context, project level" style="border: 1px solid #C3C3C3;" />

	If you're currently working from a team context, then hover over the ![gear icon](../../_img/icons/gear_icon.png) and choose **Project settings**.  

	<img src="_img/areas/modify-areas-its-choose-project-settings-admin-context-ts.png" alt="Default Collection Overview, Projects reference processes" style="border: 1px solid #C3C3C3;" />  
	::: moniker-end
	::: moniker range="tfs-2017"
	<a id="admin-intro-tfs-2017-1" /> 
	**TFS 2017.1**

	<img src="_img/areas/modify-areas-its-choose-project-settings-admin-context-tfs-2017.png" alt="Web portal, TFS 2017, Open Admin context, project level" style="border: 1px solid #C3C3C3;" />  

	If you're currently working from a team context, then hover over the ![gear icon](../../_img/icons/gear_icon.png) and choose Project settings. 

	<img src="_img/areas/modify-areas-its-choose-project-settings-admin-context-tfs-2017_v0.png" alt="Web portal, TFS 2017, Choose the gear icon to Open Project settings" style="border: 1px solid #C3C3C3;" />    
	**TFS 2017**   
	<img src="_img/areas/modify-areas-its-choose-project-settings-admin-context-tfs-2017.png" alt="Web portal, TFS 2017, Open Admin context, project level" style="border: 1px solid #C3C3C3;" />
	::: moniker-end
2. Open the **Work** hub.  

::: moniker-end   

::: moniker range=">= tfs-2013 <= tfs-2015"
<!---**TFS 2015** -->
<a id="admin-intro-tfs-2015" />

1. From the web portal user context, choose the ![](../../_img/icons/gear_icon.png) gear icon to open the admin context.   

	<img src="../../_img/icons/ALM_OpenAdminContext.png" alt="Open the project administration page" style="border: 1px solid #C3C3C3;" />  

::: moniker-end


<a id="add-areas-team-services">   </a>
<a id="tfs-15-area-paths" />
## Add an area path 

::: moniker range=">= tfs-2017"  

You add and modify area paths from the **Work, Areas** page from the project admin or settings context.  

If you haven't added any areas or teams, you'll see that only one area is defined.   

<img src="_img/areas/modify-areas-its-areas-ts.png" alt="Areas, defaults defined for project" style="border: 1px solid #C3C3C3;" />  

* To add a child node, highlight the area path and then choose **New child**. Optionally, you can open the ![](../../_img/icons/actions-icon.png) context menu for the area path and choose **New child**.   

	Enter a name (255 characters or less) for the node. For additional name restrictions, see [About areas and iterations, Naming restrictions](about-areas-iterations.md#naming-restrictions). 

	> [!div class="mx-imgBorder"]  
	> ![Add a new area path](_img/areas/m-areas-add-area-path.png) 

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"  

1. Open the **Areas** tab.  

	<img src="_img/areas/ALM_CW_OpenAreas.png" alt="Open the areas page defined for project" style="border: 1px solid #C3C3C3;" />  

	From the areas page, you can set the default area path used to filter the backlog. The default area path is also used when new work items a user creates new work items. 

2. Add a new child node to the area you have selected.</p>

	<img src="_img/areas/ALM_CW_CreateArea.png" alt="Create a new area node" style="border: 2px solid #C3C3C3;" />
 
::: moniker-end
 
::: moniker range=">= tfs-2017"

<a name="rename-delete"></a>
## Rename, move, or delete an area or iteration node 

When you rename an area or an iteration, or move the node within the tree hierarchy, the system will automatically update the work items and queries that reference the existing path or paths.  

0. To rename an area or iteration path, choose the ![](../../_img/icons/actions-icon.png) actions icon for the node, and select **Edit**.  

	> [!div class="mx-imgBorder"]  
	> ![Open Work>Project Configuration](_img/areas/edit-area-rename.png)  
0. In the dialog that opens, enter the new name. 

	> [!div class="mx-imgBorder"]  
	> ![Open Work>Project Configuration](_img/areas/edit-area-rename-dialog.png)

0.  To move the node within the hierarchy, change the Location field. 

0. To delete a node, choose the **Delete** option from the actions menu. 

	> [!NOTE]   
	> When you delete an area node or change the Location field, the system automatically updates the existing work items with the node that you enter at the deletion prompt. 

::: moniker-end


## Chart progress by area 

You can quickly generate [queries](../../work/track/using-queries.md) to view the progress based on an area path. As an example, you can [visualize progress of work items assigned to each team's area path](../../report/dashboards/charts.md) as shown in the following stacked bar chart.  

![Stacked bar chart by area and state](_img/areas/stacked-bar-chart.png)



## Related articles 
As you can see, areas play a major role in supporting Agile tools and managing work items. You can learn more about working with these fields from these topics: 

*	[About areas and iterations](about-areas-iterations.md)  
*	[Add another team](../../work/scale/multiple-teams.md)  
*	[Set team defaults](set-team-defaults.md)  
*	[Configure team settings and add team administrators](../../work/scale/manage-team-assets.md)   
*	[Agile tools that rely on areas or iterations](about-teams-and-settings.md)
*	[Query by area or iteration path](../../work/track/query-by-area-iteration-path.md)  
*	 [Set permissions and access for work tracking](../security/set-permissions-access-work-tracking.md)



