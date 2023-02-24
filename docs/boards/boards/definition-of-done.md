---
title: Definition of Done on the Kanban board
titleSuffix: Azure Boards
ms.global_help.title: Definition of Done
description: Learn how to support your team's shared understanding. Build this understanding by providing a definition for what "done" means for each column of the Kanban board. 
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: f5b9223e-5be2-4df7-a735-02f0cb59a46b
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Specify the Definition of Done criteria for your Kanban columns

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

As your team updates the status of work as it progresses from one stage to the next, it helps that they agree on what "done" means. Help your team agree what "done" means by specifying the Definition of Done criteria for each Kanban column. Defining what "done" means helps you identify the essential tasks to complete before moving an item into a downstream stage. 
Also, you'll have implemented one of the core Kanban tenets: **make processes and policies explicit.**

When set, team members can quickly double-check the done criteria.

> [!div class="mx-imgBorder"]
> ![Definition of Done](media/columns/move-doing-done-dod-develop.png)


If you're just getting started, review [Kanban basics](kanban-basics.md) to get an overview of how to implement Kanban.

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]

## Add the Definition of Done to a column 

::: moniker range=">= azure-devops-2019"

1. [Open your Kanban board](kanban-quickstart.md). 

   If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

1. Choose the  :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Open board settings for a team, vert nav](../../organizations/settings/media/configure-team/open-board-settings.png)  

2. Choose **Columns** and then a column tab to configure the Definition of Done for that column. 

	> [!div class="mx-imgBorder"]
	> ![Kanban board, Configure Definition of Done](media/columns/definition-of-done-defined.png)  

3. When done with your changes, choose **Save**.

::: moniker-end 

::: moniker range="tfs-2018" 

1. [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

2. Choose ![settings icon](../../media/icons/team-settings-gear-icon.png) to open the common configuration settings dialog for the Kanban board. 

	![Kanban board, open common configuration settings](media/add-columns-open-settings-ts.png)  

3. Choose **Columns** and then a column tab to configure the Definition of Done for that column. You can specify the Definition of Done for each intermediate column on your team's Kanban board.   

	> [!div class="mx-imgBorder"]
	> ![Kanban board, Configure Definition of Done](media/columns/definition-of-done-defined.png)  

4. When done with your changes, choose **Save**.  
   ::: moniker-end  


Team members can quickly check that they've met the criteria by choosing the Information tooltip :::image type="icon" source="media/ALM_DD_InfoIcon.png" border="false"::: info icon.  


## Related articles

- [Add, rename, move, and delete columns](add-columns.md)
- [Work in Progress limits](wip-limits.md)  
- [Add swimlanes, speed up work](expedite-work.md)
- [Split columns](split-columns.md) 
- [Customize cards](../../boards/boards/customize-cards.md)
