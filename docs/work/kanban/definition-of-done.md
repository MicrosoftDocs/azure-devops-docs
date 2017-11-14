---
title: Definition of Done | VSTS & TFS
description: Support teams shared understanding by providing a definition for what "done" means for each column of the Kanban board when working in VSTS or Team Foundation Server
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: f5b9223e-5be2-4df7-a735-02f0cb59a46b
ms.manager: douge
ms.author: kaelli
ms.date: 10/20/2017
---


# Definition of Done

<b>VSTS | TFS 2018 | TFS 2017 | TFS 2015</b> 

As your team updates the status of work as it progresses from one stage to the next, it helps that they agree on what “done” means. By specifying the Definition of Done criteria for each Kanban column, you help share the essential tasks to complete before moving an item into a downstream stage. 

Also, you'll have implemented one of the core Kanban tenets: **make processes and policies explicit.**

When set, team members can quickly double-check the done criteria.

![Definition of Done](_img/ALM_DD_IntroImage.png)

If you're just getting started, review [Kanban basics](kanban-basics.md) to get an overview of how to access your board and implement Kanban.

## Specify the Definition of Done for a column
 
1. From your Kanban board, click ![settings icon](../_img/icons/team-settings-gear-icon.png) and as needed, click Columns.  

	<img src="../customize/_img/kanban-card-customize-open-settings.png" alt="Kanban board, open common configuration settings" style="border: 2px solid #C3C3C3;" />

	If you're not a team administrator, [get added as one](../scale/add-team-administrator.md). Only team or project administrators can customize the Kanban board.

2. Open the Definition of Done for the column that applies to the criteria you'll enter. You can specify the Definition of Done for each intermediate column on your team's Kanban board. 

	**VSTS and TFS 2015.1 and later versions**  
	Click a column tab and enter the Definition of Done for that column. Enter text that defines your [team's Definition of Done](#definition-of-done). 

	<img src="_img/vso-kanban-board-definition-of-done-no-tags.png" alt="Kanban board, Coding column tab, Definition of done]" style="border: 1px solid #C3C3C3;" />  

	**TFS 2015**   

	![Edit Definition](_img/ALM_DD_EditDefinition.png)
	
	Enter text that defines your [team's Definition of Done](#definition-of-done).

	![Definition Text](_img/ALM_DD_DefinitionText.png)

4. Team members can quickly check that they have met the criteria by clicking the Information tooltip ![Info Icon](_img/ALM_DD_InfoIcon.png) icon.


## Related Kanban notes
See these choices for further options to customize the Kanban board:

- [Add, rename, move, and delete columns ](add-columns.md)
- [Work in Progress limits](wip-limits.md)  
- [Add swimlanes, expedite work](expedite-work.md)
- [Split columns](split-columns.md) 
- [Customize cards ](../customize/customize-cards.md)


