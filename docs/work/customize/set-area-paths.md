---
title: Define area paths
titleSuffix: VSTS & TFS 
description: Group work items based on team, product, or feature area by defining area paths for Visual Studio Team Services or Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 97358022-AE19-4775-AE25-47BA24FF3C74
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: quickstart
ms.date: 03/20/2018
---


# Define area paths  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Newly created team projects contain a single, root area that corresponds to the team project name. You add area paths under this root. To understand how the system uses area paths, see [About area and iteration paths](about-areas-iterations.md). 

## Prerequisites
<a name="permissions"></a>
::: moniker range="vsts"
* You must be a member of a team project. If you don't have a team project yet, create one in [VSTS](../../organizations/accounts/set-up-vs.md). If you haven't been added as a team member, [get added now](../../organizations/accounts/add-account-users-from-user-hub.md). 
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2018"
* You must be a member of a team project. If you don't have a team project yet, create one in an [on-premises TFS](../../organizations/accounts/create-team-project.md). If you haven't been added as a team member, [get added now](../../organizations/security/add-users-team-project.md). 
::: moniker-end
* To create or modify areas or iterations, you must either be a member of the **Project Administrators** group, or your **Create and order child nodes**, **Delete this node**, and **Edit this node** permissions must be set to **Allow** for the area or iteration node that you want to modify.

	If you aren't a project administrator, [get added as one](../../organizations/security/set-project-collection-level-permissions.md) or have someone provide you with explicit permissions to **Edit project-level information**.   

For naming restrictions on area and iteration paths, see [About areas and iterations, Naming restrictions](about-areas-iterations.md#name-restrictions).

<a id="open-admin-context">  </a>
<a id="admin-intro-team-services" /> 
## Open the administration context for the team project  

From the web portal, open the admin page for the team project.

You define both areas and iterations from the **Work** hub of the team project admin context. From the user context, you open the admin context by clicking the ![](../../_img/icons/gear-icon.png) gear icon. The tabs and pages available differ depending on which admin context you access.  

<a id="admin-intro-team-services" /> 
::: moniker range="vsts || >= tfs-2017 <= tfs-2018"  

1. From the web portal for the team project context, click the ![](../_img/icons/gear_icon.png) gear icon.   
	::: moniker range="vsts || >= tfs-2018"
	<img src="_img/modify-areas-its-open-admin-context-ts.png" alt="Web portal, VSTS, Open Admin context, team project level" style="border: 1px solid #C3C3C3;" />

	If you're currently working from a team context, then hover over the ![gear icon](../_img/icons/gear_icon.png) and choose **Project settings**.  

	<img src="_img/modify-areas-its-choose-project-settings-admin-context-ts.png" alt="Default Collection Overview, Projects reference processes" style="border: 1px solid #C3C3C3;" />  
	::: moniker-end
	::: moniker range="tfs-2017"
	<a id="admin-intro-tfs-2017-1" /> 
	**TFS 2017.1**

	<img src="_img/modify-areas-its-choose-project-settings-admin-context-tfs-2017.png" alt="Web portal, TFS 2017, Open Admin context, team project level" style="border: 1px solid #C3C3C3;" />  

	If you're currently working from a team context, then hover over the ![gear icon](../_img/icons/gear_icon.png) and choose Project settings. 

	<img src="_img/modify-areas-its-choose-project-settings-admin-context-tfs-2017_v0.png" alt="Web portal, TFS 2017, Choose the gear icon to Open Project settings" style="border: 1px solid #C3C3C3;" />    
	**TFS 2017**   
	<img src="_img/modify-areas-its-choose-project-settings-admin-context-tfs-2017.png" alt="Web portal, TFS 2017, Open Admin context, team project level" style="border: 1px solid #C3C3C3;" />
	::: moniker-end
2. Open the **Work** hub.  

::: moniker-end   

::: moniker range=">= tfs-2013 <= tfs-2015"
<!---**TFS 2015** -->
<a id="admin-intro-tfs-2015" />

1. From the web portal user context, click the ![gear icon](../_img/icons/gear_icon.png) gear Settings.   

	<img src="../_img/icons/ALM_OpenAdminContext.png" alt="Open the project administration page" style="border: 1px solid #C3C3C3;" /> 

2. Click the **Areas** tab.   

::: moniker-end


<a id="add-areas-team-services">   </a>
<a id="tfs-15-area-paths" />
## Add an area path 

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"  

1. Open the **Work, Areas** page for the team project admin context.  

	If you haven't added any areas or teams, you'll see that only one area is defined.   

	<img src="_img/modify-areas-its-areas-ts.png" alt="Areas, defaults defined for team project" style="border: 1px solid #C3C3C3;" />  

2.  Add a new child node to the area you have selected. 

	<img src="_img/m-areas-add-area-path.png" alt="TFS 15, Areas, Create a new area node" style="border: 1px solid #C3C3C3;" /> 

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"  

1. Open the **Areas** tab.  

	<img src="_img/ALM_CW_OpenAreas.png" alt="Open the areas page defined for team project" style="border: 1px solid #C3C3C3;" />  

	From the areas page, you can set the default area path used to filter the backlog.  The default area path is also used when new work items a user creates new work items. 

2. Add a new child node to the area you have selected.</p>

	<img src="_img/ALM_CW_CreateArea.png" alt="Create a new area node" style="border: 2px solid #C3C3C3;" />
 
::: moniker-end
 
::: moniker range="vsts || >= tfs-2017 <= tfs-2018"

<a name="rename-delete"></a>
## Rename or delete an area or iteration node 

When you rename an area or an iteration, or move the node within the tree hierarchy, the system will automatically update the work items and queries that reference the existing path or paths. 

When you delete an area or an iteration node, the system automatically updates the existing work items with the node that you enter at the deletion prompt. 

::: moniker-end

## Chart progress by area or iteration

You can quickly generate [queries](../track/using-queries.md) to view the progress for those areas and iterations. As an example, you can [visualize progress of work items assigned to sprints](../../report/dashboards/charts.md) as shown in the following stacked bar chart.  

<img src="_img/ALM_CW_StackedBarChart.png" alt="Stacked bar chart by area" style="border: 1px solid #C3C3C3;" /> 


## Related articles 
As you can see, areas play a major role in supporting Agile tools and managing work items. You can learn more about working with these fields from these topics: 

*	[About areas and iterations](about-areas-iterations.md)  
*	[Add another team](../scale/multiple-teams.md)  
*	[Set team defaults](../../organizations/settings/set-team-defaults.md)  
*	[Configure team settings and add team administrators](../scale/manage-team-assets.md)   
*	[Agile tools that rely on areas or iterations](../../organizations/settings/about-teams-and-settings.md)



