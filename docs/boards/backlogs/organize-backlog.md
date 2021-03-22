---
title: Organize product backlog into hierarchy of items
titleSuffix: Azure Boards  
description:  Map or parent backlog items to features, and features to epics in Azure Boards or TFS
ms.custom: "boards-backlogs, seodec18" 
ms.technology: devops-agile
ms.assetid: C294ACBD-00A3-4FCF-8777-B354BC0CC1EF  
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 07/09/2020
---


# Organize your backlog, map child work items to parents 

[!INCLUDE [temp](../includes/version-all.md)]

After you've added [features or epics](define-features-epics.md) to your portfolio backlog, you can organize your backlog by mapping backlog items. You can quickly add and group items into a hierarchy. You can also drill up or down within the hierarchy, reorder and reparent items, and filter hierarchical views.  

In this article you'll learn how to:  

::: moniker range=">= tfs-2018"

> [!div class="checklist"]    
> * Open your product backlog or portfolio backlog  
> * View the tree hierarchy  
> * Group backlog items using the Mapping pane  
> * Reparent items using drag-and-drop or the **Change parent** option  

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2017"

> [!div class="checklist"] 
> * Open your product backlog or portfolio backlog  
> * View the tree hierarchy  
> * Group backlog items using the Mapping pane  
> * Reparent items using drag-and-drop

::: moniker-end
 
::: moniker range="tfs-2013"
> [!NOTE]   
> The Epic portfolio backlog is supported in TFS 2015 and later versions.  

::: moniker-end

[!INCLUDE [temp](../includes/setup-backlogs-boards.md)]


[!INCLUDE [temp](../includes/prerequisites.md)]

::: moniker range="azure-devops"  

**Stakeholder** access users for a private project can't use drag and drop to map or reparent work items or change their sprint. 

::: moniker-end


::: moniker range="< azure-devops"  

**Stakeholder** access users can't use drag and drop to map or reparent work items or change their sprint. 

::: moniker-end  

## Open your backlog from the web portal

From your web browser, open your product backlog.  

::: moniker range=">= azure-devops-2020"

1. (1) Check that you have selected the right project, (2) choose **Boards>Backlogs**, and then (3) select the correct team from the team selector menu. 

	> [!div class="mx-imgBorder"]  
	> ![Open Work, Backlogs, for a team](../sprints/media/assign-items-sprint/open-backlogs-backlog-s155-co.png)

    To select another backlog, open the selector and then choose a different team or select the **View Backlog directory** option. Or, enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](../sprints/media/assign-items-sprint/backlog-team-selector-s155.png) 

	> [!TIP]    
	> Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team backlog. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon) appear at the top of the team selector list. 

1. Check that you have selected **Stories** (for Agile), **Issues** (for Basic), **Backlog items** (for Scrum), or **Requirements** (for CMMI) as the backlog level. 

	> [!div class="mx-imgBorder"]  
	> ![Choose product backlog level, Backlog items, Stories, or Requirements](../sprints/media/assign-items-sprint//select-product-backlog-agile-s155.png) 

2. (Optional) To choose which columns should display and in what order, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Column options**. To learn more, see [Change column options](../backlogs/set-column-options.md). 

	> [!div class="mx-imgBorder"]  
	> ![Open Column Options](../sprints/media/assign-items-sprint/open-column-options-s155.png) 

::: moniker-end

::: moniker range="azure-devops-2019"

1. (1) Check that you have selected the right project, (2) choose **Boards>Backlogs**, and then (3) select the correct team from the team selector menu. 

	![Open Work, Backlogs, for a team](../sprints/media/assign-items-sprint/open-work-backlogs-agile.png)

	To choose another team, open the selector and select a different team or choose the :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all backlogs** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](../sprints/media/assign-items-sprint/team-selector-backlogs-agile.png) 

	> [!TIP]    
	> Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team backlog. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon) appear at the top of the team selector list. 

1. Check that you have selected **Backlog items** (for Scrum), **Stories** (for Agile), or **Requirements** (for CMMI) as the backlog level. 

	> [!div class="mx-imgBorder"]  
	> ![Choose product backlog level, Backlog items, Stories, or Requirements](../sprints/media/assign-items-sprint/select-product-backlog-agile.png) 

2. (Optional) To choose which columns should display and in what order, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Column options**. To learn more, see [Change column options](../backlogs/set-column-options.md). 

	> [!div class="mx-imgBorder"]  
	> ![Open Column Options](../sprints/media/assign-items-sprint/open-work-backlogs-column-options-agile.png) 

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"

From your web browser, open your team's product backlog. (1) Select the team from the project/team selector, choose (2) **Work**, (3) **Backlogs**, and then (4) the product backlog, which is **Backlog items** (for Scrum), **Stories** (for Agile), or **Requirements** (for CMMI). 

> [!div class="mx-imgBorder"]
> ![Open the Boards>Backlogs page](../sprints/media/assign-items-sprint/open-work-backlogs-standard.png) 

To choose another team, open the project/team selector and select a different team or choose the **Browse** option. 

> [!div class="mx-imgBorder"]  
> ![Choose another team](../sprints/media/assign-items-sprint/team-selector-backlogs-standard.png) 
	
::: moniker-end

::: moniker range="<= tfs-2015"

From your web browser, open your team's product backlog. Select **Boards>Backlogs**. 

![Boards>backlogs, TFS 2015, 2013 web portal](media/backlogs-boards-plans/open-backlog-tfs-2015.png)

::: moniker-end

[!INCLUDE [temp](../includes/image-differences-with-wits.md)]

## Show parents and expand the tree hierarchy  

::: moniker range=">= azure-devops-2019"

1. To view Parents or a tree hierarchy, choose the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: view options icon and slide **Parents** to **On**.  

	> [!div class="mx-imgBorder"]
	> ![Boards>Backlogs>Open view options and choose Parents ON](media/organize-backlog/show-parents-agile.png)

	The hierarchical view displays. From this view, you can reparent items by drag and drop, moving a child item to a new parent. 

	> [!div class="mx-imgBorder"]
	> ![Hierarchical view](media/organize-backlog/hierarchical-view-agile.png)

1. Use the expand ![expand icon](../media/icons/expand_icon.png) and collapse ![collapse icon](../media/icons/collapse_icon.png) icons to expand or collapse one level of the hierarchy.  

	> [!div class="mx-imgBorder"]  
	> ![Hierarchical view, expand, and collapse icons](media/organize-backlog/expand-collapse-agile.png)  


::: moniker-end


::: moniker range="<= tfs-2018"

From the product backlog page, set **Parents** to **Show** when you want to drill up or down within the hierarchy. You can also drag and drop items to reparent items from this view.   

![Hierarchical view of backlogs](media/org-backlog-intro-show-parents-ts-new-nav.png) 

Use the expand ![expand icon](../media/icons/expand_icon.png) and collapse ![collapse icon](../media/icons/collapse_icon.png) icons to expand or collapse one level of the hierarchy. 
  
![Collapsed hierarchical view](media/org-backlog-collapse-backlog-ts-new-nav.png) 

::: moniker-end


<a id="mapping">  </a>

## Map items to group them under a feature or epic 

If you've already created your backlog, and now you want to organize it, you can do that most easily by mapping child items to parents.   

::: moniker range=">= azure-devops-2019"

1. Choose the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: view options icon and select **Mapping**.  

	> [!div class="mx-imgBorder"]
	> ![Choose the view options icon and select Mapping.](media/organize-backlog/turn-mapping-on-agile.png)

	The Mapping pane displays immediately. 

1. Find Unparented backlog items that may appear at the end of the parented set of backlog items. Parents must be turned on in view options. 

   > [!div class="mx-imgBorder"]
   > ![Map unparented items to a feature](media/organize-backlog/map-unparented-items-agile.png)

2. To map features to epics, select the **Features** backlog from the backlog selector. The Epics Mapping pane will automatically display. 


::: moniker-end


::: moniker range="<= tfs-2018"

To map a backlog item under a feature, you first turn on mapping from your backlog (Backlog items, Stories, or Requirements). Next, find the Unparented backlog items group by turning the Parents control to Show. Unparented backlog items will appear at the end of the parented set of backlog items. 
 
Drag items that are currently unparented to the feature under which they belong. Also, you can drag a backlog item to a different feature to change its parent. This mapping creates parent-child links from feature to user stories, which is captured in the ![Links tab icon](../backlogs/media/icon-links-tab-wi.png) (links) tab.

![Map a backlog item to a portfolio backlog work item](media/org-backlog-map-pbi-to-feature-ts-new-nav.png) 

::: moniker-end

::: moniker range=">= tfs-2017"

You can multi-select backlog and sprint backlog items in the same way as you [multi-select items from query results](../backlogs/bulk-modify-work-items.md).   
::: moniker-end

::: moniker range="tfs-2015"
Multi-select of work items on the backlog and sprint backlogs requires TFS 2015.1 or later versions. This feature works in the same way as [multi-select works within query results](../backlogs/bulk-modify-work-items.md).   
::: moniker-end

::: moniker range=">= tfs-2015"
It's the same process to map features to epics. From the Features backlog, drag features to an epic listed under the mapping pane.  

::: moniker-end


::: moniker range=">= tfs-2015"
<a id="reparent">  </a>

## Change parent (reparent) and reorder items

When you need to change the order or grouping, simply drag the item to its new location. 

You can reparent an item using the mapping pane, or simply drag it within the hierarchy to change its parent.  

> [!div class="mx-imgBorder"]  
> ![Reparent or reorder work items on a backlog](media/organize-backlog/reparent.png) 

 You can only reparent backlog items under other features, and features under other epics. 

Also, to change an item's priority within a group, you can drag the item up or down within its hierarchical group. 
Reordering from a portfolio backlog works the same as when you [moved items into priority order on your product backlog](create-your-backlog.md).   

### Limitations on reordering backlog items owned by other teams

If you find you can't reorder a backlog item, check whether the  :::image type="icon" source="../../media/icons/info.png" border="false":::  info icon appears in the first column as shown in the following image. 

> [!div class="mx-imgBorder"]  
> ![Limitations on reordering multi-team backlog items](media/organize-backlog/multi-team-reorder-limitation.png) 

You can reparent items owned by other teams, but you can't re-order items owned by other teams. For more information, see [Backlogs, portfolios, and Agile project management, Work with multi-team ownership of backlog items](backlogs-overview.md#multi-team). 

::: moniker-end

::: moniker range=">= tfs-2018"
<a id="change-parent-option">  </a>

## Change parent of multiple backlog items 

From the product backlog you can multi-select several work items and choose **Change parent&hellip;** to link the items to a parent work item. 

> [!div class="mx-imgBorder"]  
> ![Change parent of several backlog items](media/organize-backlog/multi-reparent.png)

::: moniker-end

[!INCLUDE [temp](../includes/add-portfolio-backlogs.md)]


[!INCLUDE [temp](../includes/display-rollup-section.md)]


## Related articles  

- [Define features and epics](define-features-epics.md)
- [Work with multi-team ownership of backlog items](backlogs-overview.md#multi-team)
- [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md)
- [Product backlog controls](product-backlog-controls.md)
- [Filter product and portfolio backlogs](filter-backlogs-boards-plans.md)
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)

