---
title: Definition of Done on the Kanban board
titleSuffix: Azure Boards and TFS
ms.global_help.title: Definition of Done
description: Support teams shared understanding by providing a definition for what "done" means for each column of the Kanban board  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: f5b9223e-5be2-4df7-a735-02f0cb59a46b
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2015'
ms.date: 03/20/2018
---


# Definition of Done

**Azure Boards | TFS 2018 | TFS 2017 | TFS 2015**


As your team updates the status of work as it progresses from one stage to the next, it helps that they agree on what "done" means. By specifying the Definition of Done criteria for each Kanban column, you help share the essential tasks to complete before moving an item into a downstream stage. 
Also, you'll have implemented one of the core Kanban tenets: **make processes and policies explicit.**

When set, team members can quickly double-check the done criteria.

![Definition of Done](_img/ALM_DD_IntroImage.png)

If you're just getting started, review [Kanban basics](kanban-basics.md) to get an overview of how to access your board and implement Kanban.




## Specify the Definition of Done for a column

1. From your Kanban board, click ![settings icon](../_img/icons/team-settings-gear-icon.png) and as needed, click Columns.  

	![Kanban board, open common configuration settings](../../boards/boards/_img/customize-cards/open-config-dialog.png)

	If you're not a team administrator, [get added as one](../../organizations/settings/add-team-administrator.md). Only team or project administrators can customize the Kanban board.

2. Open the Definition of Done for the column that applies to the criteria you'll enter. You can specify the Definition of Done for each intermediate column on your team's Kanban board.

3. 	Choose a column tab and enter the Definition of Done for that column. Enter text that defines your [team's Definition of Done](#definition-of-done).    

    ::: moniker range=">= tfs-2017"	    
    <img src="_img/vso-kanban-board-definition-of-done-no-tags.png" alt="Kanban board, Coding column tab, Definition of done]" style="border: 1px solid #C3C3C3;" />    
    ::: moniker-end   
    ::: moniker range="tfs-2015"   
    **For TFS 2015.1 and later versions**    
    <img src="_img/vso-kanban-board-definition-of-done-no-tags.png"   alt="Kanban board, Coding column tab, Definition of done]" style="border: 1px solid #C3C3C3;" />     
	**For TFS 2015**  
	![Edit Definition](_img/ALM_DD_EditDefinition.png)    	 
	Enter text that defines your [team's Definition of Done](#definition-of-done).    
	![Definition Text](_img/ALM_DD_DefinitionText.png)  
    ::: moniker-end     
4. Team members can quickly check that they have met the criteria by clicking the Information tooltip ![Info Icon](_img/ALM_DD_InfoIcon.png) icon.  


## Related articles
See these choices for further options to customize the Kanban board:

- [Add, rename, move, and delete columns ](add-columns.md)
- [Work in Progress limits](wip-limits.md)  
- [Add swimlanes, expedite work](expedite-work.md)
- [Split columns](split-columns.md) 
- [Customize cards ](../../boards/boards/customize-cards.md)



