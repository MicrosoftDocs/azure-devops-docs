---
title: Definition of Done on the Kanban board
titleSuffix: Azure Boards
ms.global_help.title: Definition of Done
description: Support teams shared understanding by providing a definition for what "done" means for each column of the Kanban board  
ms.custom: boards-kanban 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: f5b9223e-5be2-4df7-a735-02f0cb59a46b
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2015'
ms.date: 02/14/2019
---

# Definition of Done

[!INCLUDE [temp](../_shared/version-vsts-tfs-2015-on.md)]  

As your team updates the status of work as it progresses from one stage to the next, it helps that they agree on what "done" means. By specifying the Definition of Done criteria for each Kanban column, you help share the essential tasks to complete before moving an item into a downstream stage. 
Also, you'll have implemented one of the core Kanban tenets: **make processes and policies explicit.**

When set, team members can quickly double-check the done criteria.

::: moniker range=">= tfs-2017" 
> [!div class="mx-imgBorder"]
> ![Definition of Done](_img/columns/move-doing-done-dod-develop.png)
::: moniker-end   
::: moniker range="tfs-2015" 
![Definition of Done](_img/ALM_DD_IntroImage.png)
::: moniker-end   

If you're just getting started, review [Kanban basics](kanban-basics.md) to get an overview of how to implement Kanban.

[!INCLUDE [temp](../_shared/prerequisites-team-settings.md)]

## Specify the Definition of Done for a column 

::: moniker range=">= azure-devops-2019"

0.  [Open your Kanban board](kanban-quickstart.md). 

	If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

0. Choose the ![](../../_img/icons/blue-gear.png) gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Open board settings for a team, vert nav](../../organizations/settings/_img/configure-team/open-board-settings.png)  

2. Choose **Columns** and then a column tab to configure the Definition of Done for that column. 

	> [!div class="mx-imgBorder"]
	> ![Kanban board, Configure Definition of Done](_img/columns/definition-of-done-defined.png)  

0. When done with your changes, choose **Save**.

::: moniker-end 

::: moniker range=">= tfs-2017 <= tfs-2018" 
0. [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

0. Choose ![settings icon](../../_img/icons/team-settings-gear-icon.png) to open the common configuration settings dialog for the Kanban board. 

	![Kanban board, open common configuration settings](_img/add-columns-open-settings-ts.png)  

0. Choose **Columns** and then a column tab to configure the Definition of Done for that column. You can specify the Definition of Done for each intermediate column on your team's Kanban board.   

	> [!div class="mx-imgBorder"]
	> ![Kanban board, Configure Definition of Done](_img/columns/definition-of-done-defined.png)  

0. When done with your changes, choose **Save**.  
::: moniker-end  
::: moniker range="tfs-2015"  
0. [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

0. Choose ![settings icon](../../_img/icons/team-settings-gear-icon.png) to open the common configuration settings dialog for the Kanban board. 

	![Kanban board, open common configuration settings](_img/add-columns-open-settings-ts.png)  

    **For TFS 2015.1 and later versions**   

0. Choose **Columns** and then a column tab to configure the Definition of Done for that column. You can specify the Definition of Done for each intermediate column on your team's Kanban board.  

    <img src="_img/vso-kanban-board-definition-of-done-no-tags.png"   alt="Kanban board, Coding column tab, Definition of done]" style="border: 1px solid #C3C3C3;" />     
	**For TFS 2015**  
0. Choose **Edit Definition** within an intermediate column tab and specify  the Definition of Done for that column.  

	![Edit Definition](_img/ALM_DD_EditDefinition.png)    	 

0. Enter text that defines your team's Definition of Done.    
	![Definition Text](_img/ALM_DD_DefinitionText.png)  

::: moniker-end   

Team members can quickly check that they have met the criteria by choosing the Information tooltip ![](_img/ALM_DD_InfoIcon.png) info icon.  



## Related articles

- [Add, rename, move, and delete columns](add-columns.md)
- [Work in Progress limits](wip-limits.md)  
- [Add swimlanes, expedite work](expedite-work.md)
- [Split columns](split-columns.md) 
- [Customize cards](../../boards/boards/customize-cards.md)
