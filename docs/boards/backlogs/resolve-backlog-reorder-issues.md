---
title: Fix backlog reorder and nesting issues
titleSuffix: Azure Boards
description: Fix error messages due to nesting issues that occur in a Backlog or Board in Azure Boards & TFS 
ms.custom: "boards-backlogs, seodec18"  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: BDEAA5D4-83A3-49FC-BEEB-EE685E92B68B
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 02/11/2019
---


# Fix "Ordering backlog items is disabled" 

<a id="display-hierarchy">  </a>


[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

<!--- Supports FWLINK https://go.microsoft.com/fwlink/?linkid=529135 --> 

When a product, portfolio, or sprint backlog contains same-category, nested work items&mdash;as described in the next section, [How backlogs and boards display hierarchical (nested) items](#nested)&mdash;the system disables the drag-and-drop reorder feature. It does this as it determines that not all items display under these circumstances.  

To fix this, take the following actions: 

1. Choose the **Create query** link on the backlog page. 

	::: moniker range=">= azure-devops-2019"
	> [!div class="mx-imgBorder"]  
	> ![Create query of backlog](_img/resolve/choose-create-query.png)   
	::: moniker-end
	::: moniker range="<= tfs-2018"
	![Create query of backlog](_img/overview/backlogs-boards-create-query.png)
	::: moniker-end

2. Open the query (choose the link that appears). 

3. Review the list of items to determine which items are nested. For example, the following query shows that a bug is a child of a user story. Because the team has configured their backlog to display user stories and bugs at the same level (Requirements category), this corresponds to a nested item that disables the ordering feature. 

	![Query of backlog with a nested item](_img/overview/backlogs-boards-query-nested-items.png)

4. Remove all parent-child links that exist among nested items. 

5. Return to the backlog page and refresh the page. 


<a id="nested" > </a>

## How backlogs and boards display hierarchical (nested) items 
 
[!INCLUDE [temp](../_shared/display-leaf-nodes.md)]  

Use the Feature work item type when you want to group user stories (Agile), product backlog items (Scrum), or requirements (CMMI). You can [quickly map product backlog items to features](/azure/devops/boards/backlogs/organize-backlog), which creates parent-child links in the background.    

![Create work items using different hierarchy](../../reference/_img/create-hierarchy-with-different-wits.png)  

<a id="leaf-nodes" > </a>  

## When you track bugs as requirements

As mentioned previously, [each team can choose how they want to track bugs](../../organizations/settings/show-bugs-on-backlog.md) to behave like requirements, or tasks, or as neither. 

When you make a bug or requirement a child of another bug or requirement, all items appear on the product backlog page, but only the child bug or requirement appears on the Kanban board. For example, the third user story, *Interim save on long form*, has a child bug, *Save takes too long*. 

The child bug, *Save takes too long*, appears on the Kanban board, but not the parent user story.  

**All bugs and requirements appear on the backlog**  

![Child bug appears on backlog ](../../reference/_img/bugs-appear-on-backlog.png)  

**Only leaf nodes appear on the Kanban board**  

![Kanban board, leaf node bug appears](../../reference/_img/bugs-appear-on-board.png)  

<a id="bugs-as-tasks" > </a>

## When you track bugs as tasks

When you choose to have bugs appear in the backlog with tasks, linking tasks and bugs to their parent requirements groups them accordingly on the sprint backlog and taskboard.  

However, if you create parent-child links between a requirement and a bug, and the bug and a task, as shown here, the task will appear on the sprint backlog and taskboard, but not the bug. 

**Hierarchy of items assigned to the sprint backlog**  

![Sprint backlog query shows linked bug and task ](../../reference/_img/sprint-backlog-hierarchy.png)   

**Only leaf nodes appear on the sprint backlog**  

![Sprint backlog, leaf node task ](../../reference/_img/sprint-backlog-leaf-only.png)  

**Only leaf nodes appear on the taskboard**   
![Sprint board, leaf node task appears](../../reference/_img/bugs-appear-on-taskboard.png)  

Is there a workaround to display intermediate nodes within a hierarchy?  Not at this time. You can always check the entire list of items assigned to a sprint by using the **Create Query** link. 


## Related articles

- [Backlogs, boards, and plans](backlogs-boards-plans.md) 