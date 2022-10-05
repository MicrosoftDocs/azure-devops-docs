---
title: Visualize the status of work by using swimlanes
titleSuffix: Azure Boards
ms.global_help.title: Add swimlanes
description: Learn how to use swimlanes to differentiate different types of work you track on the Kanban board in Azure Board.
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: 0BBD90C3-7156-4027-B100-9E46F5BD53FB
ms.author: kaelli
author: KathrynEE
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Speed up your team's work by using swimlanes in your Kanban board

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

Your Kanban board helps you visualize the flow of work as it moves from defined to completed. When you add swimlanes, you can also visualize the status of work that supports different service-level classes. You can create a swimlane to represent any other dimension that supports your tracking needs.    

For example, you can create three swimlanes&mdash;Expedite, Standard, and Parked&mdash;to track high-priority work, standard work, and work that's currently blocked.  

![Conceptual image of Kanban board showing three swimlanes](media/ALM_EW_IntroChart_3C.png) 

> [!TIP]
> Type **o** to expand all swimlanes and **u** to collapse all swimlanes. To move the focus up or down, enter the ↑↓ up/down arrows. For more tips, see [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md).

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]

## Types of swimlanes  

You can use swimlanes to sort work on your Kanban board to track items that you differentiate as follows: 
*	High priority items  
*	Service-level class  
*	Date-driven requirement  
*	Dependency for or from another team   
*	Blocked items  
*	Technical debt or other engineering work that's not a specific user story  

## Track work in swimlanes  

Once you've set up your swimlanes, you can drag items into a swimlane and also reorder them within the lane.  

> [!TIP]  
> When you have many swimlanes or cards on your board, you may encounter slow performance when dragging a card. We recommend that you use swimlanes in conjunction with card styles, tags, and board filters to manage your work items. If you have a lot of cards in the default lane, place that lane lower on the board to enhance performance when dragging a card to another swimlane.  

> [!div class="mx-imgBorder"]
> ![Screenshot of Kanban board, Drag items into a swimlane. ](media/expedite/swimlanes-move-item.png)  

You can also focus on a single swimlane by collapsing all other lanes.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Kanban board, Collapsed swimlanes.](media/expedite/collapse-lanes.png)  

[!INCLUDE [temp](../includes/note-kanban-boards-teams.md)]
	
## Add or remove a swimlane 

So, what swimlanes will support your tracking needs?  

Once you've identified one or two, add them to your Kanban board.  

::: moniker range=">= azure-devops-2019"

1. [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

1. Choose the  :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Screenshot of gear icon to open board settings for a team.](../../organizations/settings/media/configure-team/open-board-settings.png)  

2. Choose **Swimlanes** and then choose the :::image type="icon" source="../media/icons/green_plus_icon.png" border="false"::: plus icon and enter the name of the swimlane you want to add.  

	> [!div class="mx-imgBorder"]
	> ![Kanban board settings dialog, Add a swimlane](media/expedite/settings-swimlanes-add.png)  

	The default lane appears unlabeled on the Kanban board. You can rename it to anything you like, however, you can't delete it. Also, you can rename it directly from the Kanban board. 
    
3. To reorder your swimlanes, grab the lane and move it up or down.   

   > [!div class="mx-imgBorder"]
   > ![Kanban board settings dialog, Reorder a swimlane](media/expedite/swimlanes-reorder.png)  

4. If you need to delete a swimlane, first move all items out of the lane. Then open the Settings dialog, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false":::  actions icon and select **Remove**. 
	
   > [!div class="mx-imgBorder"]
   > ![Kanban board settings dialog, Remove a swimlane](media/expedite/swimlanes-remove.png)  

5. When done with your changes, choose **Save**.  

::: moniker-end 


::: moniker range="tfs-2018"  

1. [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.  

2. Choose the :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: gear icon to open the common configuration settings dialog for the Kanban board. 

	![Screenshot of Kanban board, open common configuration settings.](media/add-columns-open-settings-ts.png)  

3. Choose **Swimlanes** and then choose the :::image type="icon" source="../media/icons/green_plus_icon.png" border="false"::: plus icon and enter the name of the swimlane you want to add.  

	> [!div class="mx-imgBorder"]
	> ![Kanban board settings dialog, Add a swimlane](media/expedite/settings-swimlanes-add.png)  

	The default lane appears unlabeled on the Kanban board. You can rename it to anything you like, however, you can't delete it. Also, you can rename it directly from the Kanban board. 
    
4. To reorder your swimlanes, grab the lane and move it up or down. 

   > [!div class="mx-imgBorder"]
   > ![Kanban board settings dialog, Reorder a swimlane](media/expedite/swimlanes-reorder.png)  

5. If you need to delete a swimlane, first move all items out of the lane. Then open the Settings dialog, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false":::  actions icon and select **Remove**. 
	
   > [!div class="mx-imgBorder"]
   > ![Kanban board settings dialog, Remove a swimlane](media/expedite/swimlanes-remove.png)  

6. When done with your changes, choose **Save**.  

::: moniker-end  

## Query for work items based on swimlane

You can track which work items have been added to a Kanban board swimlane by creating a query and using the [Board Lane field](../queries/query-by-workflow-changes.md#kanban_query_fields).  


## Related articles

As you can see, swimlanes provides another way to organize and visualize the flow of work using [Kanban](kanban-basics.md). Here are a few more options you have for customizing the look and feel of your Kanban board.   

* [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md)
* [Query by assignment or workflow changes](../queries/query-by-workflow-changes.md#kanban_query_fields)
* [Add columns](add-columns.md)  
* [Split columns](split-columns.md)   
* [Customize cards](../../boards/boards/customize-cards.md)   

### REST API resources

To programmatically interact with the Kanban board and other team settings, see the [REST API, Boards reference](/rest/api/azure/devops/work/boards).


