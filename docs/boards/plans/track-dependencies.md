---
title: Track dependencies using Delivery Plans 
titleSuffix: Azure Boards
description: Learn how to track dependencies within teams, across teams, and across projects using Delivery Plans 
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: 'azure-devops'
ms.date: 05/06/2021
---



# Track dependencies using Delivery Plans 

[!INCLUDE [temp](../includes/version-all.md)] 

With Delivery Plans, you can track dependencies that have been added to work items. Dependency tracking supports the Predecessor/Successor link type between work items. The following image shows dependency lines between a work item and several of its predecessor work items. 

:::image type="content" source="media/dependencies/dependency-lines.png" alt-text="Screenshot of dependency lines between several work items.":::

 
To view dependencies, you must first define the Delivery Plan and dependencies between work items. To learn how, see [Add or edit a Delivery Plans](add-edit-delivery-plan.md) and [Link user stories, issues, bugs, and other work items](../backlogs/add-link.md#link-several-work-items). 


> [!TIP]  
> You can create dependencies between work items in different projects within the same organization, but not in projects in different organizations. 

## Prerequisites

- To view a Delivery Plan, you must be a member of the Project Collection Valid Users group. Users granted **Stakeholder** access for a private project can view plans. Users granted **Stakeholder** access for a public project can add and view plans.  
- To open or modify a work item or add work items, you must have the **Edit work items in this node** set to **Allow** for the Area Paths assigned to the work item.  

## Show dependency lines for a work item 

1. Open the delivery plan from **Boards>Delivery Plans**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot to Open Boards>Plans.](media/plans/open-plans.png) 

1. To view dependency lines for a work item, click the bottom of its card. To dismiss the lines, click the bottom of the card again, or anywhere else within the plan. 

	Dependency lines that have no issues show up as black lines. 

	:::image type="content" source="media/dependencies/dependency-lines.png" alt-text="Screenshot of dependency lines between several work items.":::

	> [!TIP]    
	> Dependency lines show between work items that exist on the same backlog for a team, but not for work items that exist in different projects and team backlogs.

	Dependency lines that have issues, show up with red lines. The issues indicate that the successor work item is scheduled to end later than the predecessor work item.  

	:::image type="content" source="media/dependencies/dependency-lines-with-issues.png" alt-text="Screenshot of dependency lines that show issues between several work items.":::

## Open the dependency summary for a work item 

To drill down into specific dependencies, open the Dependencies dialog for the work item. Hover over the card and then choose the :::image type="icon" source="../media/icons/dependency-links.png" border="false"::: link icon. 

For example, here we choose the link icon for a work item with dependencies to several work items within the same project.   

:::image type="content" source="media/dependencies/card-dependency-link.png" alt-text="Screen shot of card and link icon.":::

The Dependencies dialog indicates that the work item has four predecessors and no issues.

:::image type="content" source="media/dependencies/dependency-dialog-no-issues.png" alt-text="Dependencies dialog for a work item with four predecessors and no issues.":::

## Identify dependency issues 

When issues exist, they are highlighted in red. The issue always has to do with an end date for a successor work item occurring before the end date of the predecessor work item. The end date is determined by either the Target Date for the work item or the End Date of the work item's assigned Iteration Path. 

For example, the following Dependencies dialog indicates that two predecessor work items are scheduled to complete before the successor work item is scheduled to complete. A red exclamation mark and red colored arrows indicate there is an issue with the dependency.   

When the dependency is to a work item in another project, the project information is shown as well as other link relationships. 

:::image type="content" source="media/dependencies/dependencies-cross-project.png" alt-text="Dependencies dialog for a work item with dependencies-cross-project.":::


## Related articles  

- [Add or edit a Delivery Plan](add-edit-delivery-plan.md)
- [Review team Delivery Plans](review-team-plans.md)
- [Interactively filter your backlogs, boards, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md)  
 
 