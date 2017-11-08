---
title: Customize area paths | VSTS & TFS
description: Group work items based on team, product, or feature area by defining area paths (VSTS and Team Foundation Server)
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: 97358022-AE19-4775-AE25-47BA24FF3C74
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 08/10/2017
---


# Define area paths  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]


Newly created team projects contain a single, root area that corresponds to the team project name. You add area paths under this root. To understand how the system uses area paths, see [About area and iteration paths](about-areas-iterations.md). 
 

[!INCLUDE [temp](../_shared/image-differences.md)]  

<a id="open-admin-context">  </a>
## Open the administration context for the team project  

From the web portal, open the admin page for the team project.

You define both areas and iterations from the Work hub of the team project admin context. From the user context,you open the admin context by clicking the ![gear icon](../../user-guide/_img/work-tfs-web-portal/IC623347.png) gear Settings icon. The tabs and pages available differ depending on which admin context you access.  

[!INCLUDE [temp](../_shared/learn-about-new-nav-experience.md)] 

To manage areas and iterations you need to be a project administrator or have the **Create child nodes** permission for an area path. If you aren't a project administrator, [get added as one](../scale/add-team-administrator.md) or have someone provide you with explicit permissions to <b>Edit project-level information</b>. 

If you want to add area paths to support teams, you can do that when you [add teams to your team project](../scale/multiple-teams.md).  

Certain [restrictions](about-areas-iterations.md#name-restrictions) apply on names of areas.  


<a id="admin-intro-team-services" /> 

**VSTS**

1. From the web portal for the team project context, click the ![gear icon](../_img/icons/gear_icon.png) gear Settings.   

	<img src="_img/modify-areas-its-open-admin-context-ts.png" alt="Web portal, VSTS, Open Admin context, team project level" style="border: 1px solid #C3C3C3;" />  

	If you're currently working from a team context, then hover over the ![gear icon](../_img/icons/gear_icon.png) and choose Project settings.  

	<img src="_img/modify-areas-its-choose-project-settings-admin-context-ts.png" alt="Default Collection Overview, Projects reference processes" style="border: 1px solid #C3C3C3;" /> 

2. Open the **Work** hub.   
 
**TFS 2017.1**
<a id="admin-intro-tfs-2017-1" /> 

1. From the web portal for the team project context, click the ![gear icon](../_img/icons/gear_icon.png) gear Settings.   

	<img src="_img/modify-areas-its-open-admin-context-tfs-2017-1.png" alt="Web portal, TFS 2017.1, Open Admin context, team project level" style="border: 1px solid #C3C3C3;" />  

	If you're currently working from a team context, then hover over the ![gear icon](../_img/icons/gear_icon.png) and choose Project settings.  

	<img src="_img/modify-areas-its-choose-project-settings-admin-context-tfs-2017-1.png" alt="Web portal, TFS 2017.1, Choose the gear icon to Open Project settings" style="border: 1px solid #C3C3C3;" /> 

2. Open the **Work** hub.  
 
**TFS 2017**
<a id="admin-intro-tfs-2017" /> 

1. From the web portal for the team project context, click the ![gear icon](../_img/icons/gear_icon.png) gear Settings.   

	<img src="_img/modify-areas-its-choose-project-settings-admin-context-tfs-2017.png" alt="Web portal, TFS 2017, Open Admin context, team project level" style="border: 1px solid #C3C3C3;" />  

	If you're currently working from a team context, then hover over the ![gear icon](../_img/icons/gear_icon.png) and choose Project settings. 

	<img src="_img/modify-areas-its-choose-project-settings-admin-context-tfs-2017_v0.png" alt="Web portal, TFS 2017, Choose the gear icon to Open Project settings" style="border: 1px solid #C3C3C3;" /> 

2. Open the **Work** hub.   
 

**TFS 2015**
<a id="admin-intro-tfs-2015" />
 
1. From the web portal user context, click the ![gear icon](../_img/icons/gear_icon.png) gear Settings.   

	<img src="../_img/icons/ALM_OpenAdminContext.png" alt="Open the project administration page" style="border: 1px solid #C3C3C3;" /> 

2. Open the **Work** hub.   

## Add an area 

<a id="add-areas-team-services">   </a>

### Add area paths (VSTS) 

1. Open the **Work, Areas** page for the team project admin context.  

	If you haven't added any areas or teams, you'll see that only one area is defined.   

	<img src="_img/modify-areas-its-areas-ts.png" alt="Areas, defaults defined for team project" style="border: 1px solid #C3C3C3;" />  

2.  Add a new child node to the area you have selected. 

	<img src="_img/m-areas-add-area-path.png" alt="TFS 15, Areas, Create a new area node" style="border: 1px solid #C3C3C3;" /> 

<a id="tfs-15-area-paths" />

### Add area paths (TFS 2017)  

1. Open the Work, Areas page for the team project context. 

	If you haven't added any areas or teams, you'll see that only one area is defined.   

	<img src="_img/modify-areas-its-areas-ts.png" alt="Areas, defaults defined for team project" style="border: 1px solid #C3C3C3;" />  

2. Add a new child node to the area you have selected.  

	<img src="_img/m-areas-add-area-path.png" alt="TFS 15, Areas, Create a new area node" style="border: 1px solid #C3C3C3;" /> 
 


<a id="tfs-2015-area-paths" />

### Add area paths (TFS 2015) 

1. Open the **Areas** tab.  

	<img src="_img/ALM_CW_OpenAreas.png" alt="Open the areas page defined for team project" style="border: 1px solid #C3C3C3;" />  

	From the areas page, you can set the default area path used to filter the backlog.  The default area path is also used when new work items a user creates new work items. 

2. Add a new child node to the area you have selected.</p>

	<img src="_img/ALM_CW_CreateArea.png" alt="Create a new area node" style="border: 2px solid #C3C3C3;" />
 

 
<a name="rename-delete"></a>
### Rename or delete an area or iteration node 

When you rename an area or an iteration, or move the node within the tree hierarchy, the system will automatically update the work items and queries that reference the existing path or paths. 

When you delete an area or an iteration node, the system automatically updates the existing work items with the node that you enter at the deletion prompt. 

## Chart progress by area or iteration

You can quickly generate [queries](../track/using-queries.md) to view the progress for those areas and iterations. As an example, you can [visualize progress of work items assigned to sprints](../../report/dashboards/charts.md) as shown in the following stacked bar chart.  

<img src="_img/ALM_CW_StackedBarChart.png" alt="Stacked bar chart by area" style="border: 1px solid #C3C3C3;" /> 



## Related notes 
As you can see, areas play a major role in supporting Agile tools and managing work items. You can learn more about working with these fields from these topics: 

*	[About areas and iterations](about-areas-iterations.md)  
*	[Add another team](../scale/multiple-teams.md)  
*	[Set team defaults](../scale/set-team-defaults.md)  
*	[Configure team settings and add team administrators](../scale/manage-team-assets.md)   
*	[Agile tools that rely on areas or iterations](../../teams/about-teams-and-settings.md)


 
