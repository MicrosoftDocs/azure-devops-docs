---
title: Change process from Basic to Agile
titleSuffix: Azure Boards
ms.custom: seodec18
description: Change the process for your project from Basic to Agile
ms.technology: devops-agile
ms.prod: devops
ms.topic: conceptual
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: danhellem
monikerRange: 'azure-devops'
ms.date: 06/05/2019
---

# Basic to Agile

[!INCLUDE [temp](../../../_shared/version-vsts-only.md)]

> [!NOTE]     
> This feature is currently in private preview. Please [email us](mailto:dahellem@microsoft.com) if you are interested in participating in the preview.

> [!WARNING]     
> If you have existing work items, this process requires manual updates to work items and board configuration. Please make sure you follow the below steps and images before attempting to change the process used by a project.

## Steps

1. Go to Organization Settings > Process

2. Click on the process that contains the project you want to change. For example, Basic

3. Click on the Projects tab

4. Hover over the project and click the ... context menu. Select "Change Process" and follow the steps in the wizard.
 
  > [!div class="mx-imgBorder"]  
  > ![Wizrd](_img/change-process/change-process-basic-to-agile-wizard.gif)    

5. Update the [board settings](../../../boards/get-started/customize-boards.md) for each board so that the column to state mapping is correct.

  > [!div class="mx-imgBorder"]  
  > ![Scrum Inherited WITs](_img/change-process/change-process-basic-to-agile-board-config.gif)

6. [Create a query](../../../boards/queries/using-queries.md) to get a list of all Issues. Sort the list by state value. Highlight all Issues and do a [change type](../../../boards/backlogs/remove-delete-work-items.md#change-the-work-item-type) to User Story. Next do a [bulk edit](../../../boards/backlogs/bulk-modify-work-items.md) to update work items to the right state for the User Story type. For example: Doing would change to Active. Do this for each state, one state at a time.

7. Adjust query to only show Tasks. Use bulk edit to update state value for all Tasks, one state at a time. Rinse and repeat the same process for Epics.

  > [!div class="mx-imgBorder"]  
  > ![Update Work Items](_img/change-process/change-process-basic-to-agile-update-work-items.gif)

## Reference

- [Bulk modify work items](../../../boards/backlogs/bulk-modify-work-items.md)
- [Change the process used by a project](./manage-process.md#change-the-process-used-by-a-project)
- [Create an inherited process](./manage-process.md#create-an-inherited-process)
- [Add and manage work item types](./customize-process-wit.md)
- [Customize your boards](../../../boards/get-started/customize-boards.md)
- [Create and saved managed queries with the query editor](../../../boards/queries/using-queries.md)