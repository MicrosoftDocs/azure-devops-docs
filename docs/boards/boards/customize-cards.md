---
title: Customize cards on a Kanban board
titleSuffix: Azure Boards
description: Learn how to customize cards to provide at-a-glance information of interest to your team in Azure Boards and Azure DevOps. 
ms.custom: boards-kanban, contperf-fy21q3, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 951A73EA-7411-4A2A-B3F0-ACBBC7EFC68F
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 06/05/2023
---
 
# Customize cards on a Kanban board  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

The Kanban board presents work items in the form of cards, where each card represents a work item that facilitates information sharing, progress tracking, and task assignment. These cards provide quick insights for you and your team. You can update a field on a card without having to open the corresponding work item. You can also apply style rules to highlight specific cards and tasks based on your set criteria.

If you're new to working with the Kanban board, see [Kanban overview](../../boards/boards/kanban-overview.md). 

> [!NOTE] 
> This article addresses customization of a Kanban board. For information on customizing a Taskboard, see [Customize sprint Taskboards](../sprints/customize-taskboard.md). 

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]
- See the section, [Card customization sequence](#card-customization-sequence)

## Card customization options  

You can show fields on cards based on what your team frequently refers to or updates when using the Kanban board. You can also add fields with information that you can use to filter the board. 

::: moniker range=">= azure-devops-2019"
> [!NOTE]  
> You can customize a work item type which is different than customizing the card displayed on the Kanban board. You customize a work item type by adding fields, changing the workflow, adding custom rules and more. You can also add custom work item types and custom backlog levels. For details, see [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md). 
::: moniker-end

::: moniker range="< azure-devops-2019"

> [!NOTE]  
> You can customize a work item type which is different than customizing the card displayed on the Kanban board. You customize a work item type by adding fields, changing the workflow, adding custom rules and more. You can also add custom work item types and custom backlog levels. For details, see [Customize the On-premises XML process model](../../reference/on-premises-xml-process-model.md). 
::: moniker-end

Within the [Settings dialog for the Kanban board](#open-your-kanban-board-settings), you have the following customization options. 

::: moniker range=">= azure-devops-2020"
|Setting |Customization action  |
|---------|---------|
|**[Fields](#fields)**  | Add or remove fields from cards. Includes adding the **Parent** field to cards.        |
|**[Styles](#style-rule)**   | Add styling rules to change card color and title style based on field criteria.        |
|**[Tag colors](#assign-tag-colors)**      | Specify a tag color and enable or disable a tag color.        |
|**[Annotations](#enable-or-disable-annotations)**   | Enable or disable annotations to appear on cards.        |
|**[Tests](#configure-inline-tests)**    |Configure how you want tests to appear and behave on the cards.         |
|**[Card reordering](#reorder-cards)**    | Choose expected behavior when reordering cards on the board.        |
::: moniker-end

::: moniker range="<= azure-devops-2019"
|Setting |Customization action  |
|---------|---------|
|**[Fields](#fields)**  | Add or remove fields from cards.      |
|**[Styles](#style-rule)**   | Add styling rules to change card color and title style based on field criteria.        |
|**[Tag colors](#assign-tag-colors)**      | Specify a tag color and enable or disable a tag color.        |
|**[Annotations](#enable-or-disable-annotations)**   | Enable or disable annotations to appear on cards.        |
|**[Tests](#configure-inline-tests)**    |Configure how you want tests to appear and behave on the cards.         |
|**[Card reordering](#reorder-cards)**    | Choose expected behavior when reordering cards on the board.        |
::: moniker-end

> [!NOTE]   
> Each team can customize the cards for their Kanban board. Board settings are not inherited from other teams that they may share portions of area paths. 

## Card customization sequence 

Before you configure the cards, make sure the following tasks are complete, or you might need to revisit your configuration.  

**Process Administrator**: 
1. Add custom work item types that you want to appear on your backlog or board. For details, see [Add and manage work item types](../../organizations/settings/work/customize-process-work-item-type.md).
2. Customize your product and portfolio backlogs to ensure all the work item types you want to have appear on the backlogs and boards. For details see [Customize backlogs & boards](../../organizations/settings/work/customize-process-backlogs-boards.md). 
3. Customize each work item type to have any custom fields you want to show. For details, see [Customize a workflow](../../organizations/settings/work/add-custom-field.md).

**Team Administrator**:
1. Meet with your team and determine how the team wants to manage bugs, similar to requirements or tasks.  
1. [Add any tags](../queries/add-tags-to-work-items.md) you want to customize on cards to work items. 
1. Meet with your team and determine which annotations should appear on cards and how they want to configure inline tests.  
 
## Open your Kanban board settings

If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

You can customize cards that appear on the Kanban board for your product backlog or portfolio backlog such as features and epics. You follow similar steps, however you start from the [corresponding portfolio backlog](../../boards/backlogs/define-features-epics.md).  

::: moniker range=">= azure-devops-2019"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. [Open your Kanban board](kanban-quickstart.md). 
3. Choose the backlog level that you want to customize. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot showing Open backlog level to customize.](media/features-epics/select-portfolio-level.png)  

4. Choose the :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Screenshot showing Open board settings for a team, vert nav.](../../organizations/settings/media/configure-team/open-board-settings.png)  

::: moniker-end 

::: moniker range="tfs-2018"

1. [Open your Kanban board](kanban-quickstart.md).  

2. Choose the backlog level you want to customize. 

3. Choose ![settings icon](../../media/icons/team-settings-gear-icon.png) to open the common configuration settings dialog for the Kanban board. 

   :::image type="content" source="media/add-columns-open-settings-ts.png" alt-text="Screenshot showing Kanban board, open common configuration settings.":::

::: moniker-end
<a id="kanban-board" > </a>
<a id="fields"></a>

## Choose which fields appear on cards 
 
You can edit a card field from the Kanban board, except for read-only fields like the *Change By* and  *Changed Date*. This quick update feature is useful when you need to update many work items at once.

::: moniker range=">= azure-devops-2019"
Do the following steps to update fields. To add a custom field, you must first [add it to the process used to customize the project](../../organizations/settings/work/add-custom-field.md). 
::: moniker-end  

::: moniker range="< azure-devops-2019"  
You can determine which fields appear on each card type. To add a custom field, you must first [add it to the work item type definition](../../reference/add-modify-field.md).  
::: moniker-end  

::: moniker range=">= azure-devops-2019"

1. From the board settings page, choose **Fields** and then choose a work item type to see all the settings that you can modify. Your initial column settings appear similar to the following image. 

	Your choices vary based on the [process](../../boards/work-items/guidance/choose-process.md) used to create your project and whether your team has chosen to [treat bugs like requirements or like tasks](../../organizations/settings/show-bugs-on-backlog.md).     

   :::image type="content" source="media/customize-cards/settings-fields-142.png" alt-text="Screenshot showing Settings,Fields, User Story tab (Agile process).":::

2. Add check mark in the box next to the fields that you want to appear on the board. 

	If you want work estimates to show, check **Show Effort**, which corresponds to the following fields: Effort ([Scrum](../../boards/work-items/guidance/scrum-process.md)), Story Points ([Agile](../../boards/work-items/guidance/agile-process.md)), and Size ([CMMI](../../boards/work-items/guidance/cmmi-process.md)).

3. To add a field, select the :::image type="icon" source="../media/icons/green_plus_icon.png" border="false"::: plus icon and enter the name of a field  you want to add. 

4. To remove a field, select the :::image type="icon" source="../../media/icons/delete-icon.png" border="false"::: delete icon next to the field.

5. When you're done, select **Save**.

::: moniker-end  

::: moniker range=">= azure-devops-2020"
> [!NOTE]  
> To show the **Title** of the parent work item, choose the **Parent** field. Choosing the **Parent** title from a card opens the parent work item. To change the parent work item, open the child work item and remove the link and add a different parent work item. You can filter your board based on parent work items, whether the **Parent** field is added to cards or not.
::: moniker-end

::: moniker range="tfs-2018"  

1. From the board settings page, choose **Fields**  and then a work item type to see all the settings you can modify. Your initial column settings look something like this. 

	Here we choose User Story. Your choices vary based on the [process](../../boards/work-items/guidance/choose-process.md) used to create your project and whether your team has chosen to [treat bugs like requirements or like tasks](../../organizations/settings/show-bugs-on-backlog.md).     

   :::image type="content" source="media/customize-cards/settings-fields-142.png" alt-text="Screenshot showing Settings,Fields, User Story tab (Agile process).":::

2. Enter a check mark in the box next to the fields that you want to have appear on the board. 

	If you want work estimates to show, check **Show Effort**, which corresponds to the following fields: Effort ([Scrum](../../boards/work-items/guidance/scrum-process.md)), Story Points ([Agile](../../boards/work-items/guidance/agile-process.md)), and Size ([CMMI](../../boards/work-items/guidance/cmmi-process.md)).

3. To add a field, choose the :::image type="icon" source="../media/icons/green_plus_icon.png" border="false"::: plus icon and enter the name of a field  you want to add. 

4. To remove a field, choose the :::image type="icon" source="../../media/icons/delete-icon.png" border="false"::: delete icon next to the field.

5. When you're done, select **Save**.

::: moniker-end  

<a id="styles" > </a>

<a id="style-rule" > </a>  

## Define style rules to highlight cards 
 
With styling rules, you can cause cards to change color when their corresponding work items meet criteria that you set. Here, we highlight severity 1 bugs by having the cards display as yellow. 

::: moniker range=">= tfs-2018"
![Screenshot showing styling rule applied to bugs with Severity=1.](media/customize-cards/card-style-s155-solo.png)
::: moniker-end

### Examples of styling rules 

Which rules should you apply to highlight work items? Here are a few examples and their associated criteria.

> [!div class="mx-tdCol2BreakAll"]
> | Work items | Criteria |
> |------------|------------|
> | High priority items | `Priority = 1` |
> | High effort items | `Effort 20` or `Story Points 20` |
> | Stale items unchanged in the last 5 days | `Changed Date @Today-5` |
> |Title contains a key word | `Title Contains Yes` |
> |Severity 1 bugs | `Severity = 1 - Critical   AND   Work Item Type = Bug` |
> |High value business items | `Business Value 50` |
> |Items assigned to specific feature area  | `Area Path Under Fabrikam Fiber\Phone` |
> |Contains specific tag   | `Tags Contain RTM` |
> |Blocked tasks (Scrum process only) | `Blocked = Yes` |

You can apply style rules to change the color of cards on Kanban boards and Taskboards.  

::: moniker range=">= azure-devops-2019"

1. From the board settings page, select **Styles** to specify a style rule. 
2. Select + **Add styling rule**. Select the color to apply to the card and define the criteria for the style rule. 

	In the following example, we show the **Styles** page for the Dashboard. 

   :::image type="content" source="../sprints/media/customize/taskboard-styles-priority.png" alt-text="Screenshot of the Settings, Styles dialog.":::

> [!TIP]
> Note the following information about style rules:
   - The criteria you specify works in a similar fashion as when [constructing a query](../../boards/queries/using-queries.md). 
   - All clauses are considered AND clauses, grouping clauses isn't supported. 
   - Card rules apply to all work items that meet the rule criteria. 
   - Rule color applies to work items based on the order in which rules are listed. If you add more than one style rule, make sure that you move them in the order of most importance. Drag them into the order you want them applied. 
   - You can quickly enable and disable a style rule.

   In the following example, we add a *Stale tasks* rule, which highlights tasks that haven't changed in the last five days.

   :::image type="content" source="../sprints/media/customize/task-board-card-style-rule-stale-tasks.png" alt-text="Screenshot showing Taskboard, Style dialog, and example style rule."::: 

3. To copy or delete a style rule, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Clone** or **Delete**.

4. When you're done, select **Save**.
::: moniker-end  

::: moniker range="tfs-2018"
1. From the Settings dialog, choose **Styles** to specify a style rule. Choose the :::image type="icon" source="../../media/icons/green_plus_icon.png" border="false"::: plus icon to add a style. Select the color to apply to the card and define the criteria for the style rule. 

	In this example, we show the **Styles** dialog for the dashboard. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing Settings, Styles dialog.](../sprints/media/customize/taskboard-styles-priority.png)

	Follow these rules when creating and ordering your style rules:
   - The criteria you specify works in a similar fashion as when [constructing a query](../../boards/queries/using-queries.md) 
   - All clauses are considered AND clauses, grouping clauses isn't supported  
   - Card rules apply to all work items that meet the rule criteria  
   - Rule color applies to work items based on the order in which rules are listed. If you add more than one style rule, make sure that you move them in the order of most importance. Drag them into the order you want them applied.  
   - You can quickly enable and disable a style rule. 

     Here we add a Stale tasks rule that highlights tasks that haven't changed in the last five days.

     ![Screenshot showing Taskboard, Style dialog, example style rule.](../sprints/media/customize/task-board-card-style-rule-stale-tasks.png)   

1. To copy or delete a style rule, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Clone** or **Delete**.

2. When you're done, choose **Save**.
::: moniker-end

## Assign tag colors  

Before you set tag colors, [add tags to backlog items](../../boards/queries/add-tags-to-work-items.md) that you want to highlight with color.   

1. From the Settings dialog, select **Tag colors**, and then **+ Add tag color**. Then, select the tag and the color you want to appear on the cards.  

   :::image type="content" source="media/customize-cards/settings-tag-colors.png" alt-text="Screenshot showing Settings, Tag colors dialog (Kanban).":::

   > [!TIP]
   > If tags don't display on the cards, select **Fields** and make sure that you've checked **Show Tags**. 

2. When you're done, select **Save**.

## Enable or disable annotations

All applicable annotations for the selected board are enabled by default. These annotations include all work item types added to the next level backlog, GitHub, and Tests. Disable any unused annotations or ones that you want to restrict for a specific backlog level. 

When you disable an annotation, you also disable the feature to add the associated object from the Kanban board. For example, if you disable the Tests annotation, you disable the ability to add tests from the currently selected Kanban board.

Complete the following steps to manage annotations.

::: moniker range=">= azure-devops-2019"  

1. From your board settings page, select **Annotations** .
2. Check those annotations that you want enabled. For example, to enable tasks but disable tests, check the following boxes.     

   :::image type="content" source="media/customize-cards/annotate-settings-154.png" alt-text="Screenshot showing Kanban board, Settings dialog, Annotations tab.":::

	> [!NOTE]   
	> GitHub annotations requires Azure DevOps Server 2019 Update 1 or later version. For more information, see [Link GitHub commits, pull requests, and issues to work items](../github/link-to-from-github.md).

3. When you're done, select **Save**.

::: moniker-end

::: moniker range="tfs-2018"  
1. Open the Settings dialog for the Kanban board you want to customize and select **Annotations**
2. Check those annotations that you want enabled. For example, to enable tasks but disable tests, check the following boxes.     
   :::image type="content" source="media/customize-cards/annotate-settings.png" alt-text="Screenshot showing Kanban board, Settings dialog, Annotations tab.":::

3. When you're done, select **Save**.
::: moniker-end

As shown in the following examples, the **Task** and **Test** annotations indicate that two each of tasks and tests are defined for the work item.

> [!div class="mx-tdBreakAll"]  
> | Task annotations  |Test annotations  |No annotations |
> |-------------|----------|----------|    
> |![Task annotations enabled.](media/annotate-task.png) | ![Test annotations enabled.](media/annotate-test.png) | ![Annotations disabled.](media/annotate-none.png) | 

For more information, see [Add tasks or child items as checklists](../../boards/boards/add-task-checklists.md) and [Add, run, and update inline tests](../../boards/boards/add-run-update-tests.md).  

::: moniker range="azure-devops-2019"
> [!NOTE]  
> If your project collection uses the On-premises XML process model to customize work tracking, you can enable work item types that you add to the Task Category to appear as a checklist on your product Kanban board. To learn how, see [Set up your backlogs and boards, Customize your Kanban Board checklist items](../backlogs/set-up-your-backlog.md#customize-checklist-2019). 
::: moniker-end

## Configure inline tests 

You can control the test plan where you create inline tests through the Kanban board. Choose to create a new test plan for each new test that you add or add all new tests to a selected test plan. 

::: moniker range=">= azure-devops-2019"
1. From the board settings page (product backlog only), choose **Annotations**. [Make sure that **Test** annotation is enabled](#enable-or-disable-an-annotation), a requirement to configure inline tests.

2. Select **Tests**, and then choose the options you want. Choose an existing test plan from the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon results.  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing configuring inline tests.](media/customize-cards/settings-tests.png)  

> [!TIP]
> In a test plan, a test case can exist in multiple test suites. For example, you may define several test suites for each product feature and the test cases test scenarios across features. The test case might exist in both feature's test suite with the same configurations and test steps. Because of this setup, the tester might run the same test case multiple times for the same product version. 
> To avoid the redundancies that can occur under this scenario, you should choose **Show same outcome of the tests in multiple suites under the same plan** checkbox. When checked, the Test Points of the same Test Case and configuration, shows the same latest outcome. When the tester runs any one test, the output is synced with all other test points (which are of the same Test Case work item and same configuration) in the Test Plans. The tester can use the outcome and choose not to run the test again.

1. Select **Save**. 
::: moniker-end

::: moniker range="tfs-2018"
1. Open the Settings dialog for the Kanban board (product backlog only) you want to customize. 

2. Choose **Annotations** and make sure that **Test** annotation is enabled, which is a requirement to configure inline tests.

3. Choose **Tests**, and then choose the options you want. To select a test plan, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select one test plan from the query provided.  

	![Screenshot of Settings dialog, Tests tab (Kanban).](media/c-cards-test-settings.png)   

4. Save your changes. 
::: moniker-end

### Open the test plan, test suite from a card

From a card on the Kanban board, you can go to the underlying test plan and test suite under which the tests are created. Choose the :::image type="icon" source="../../media/icons/open-icon.png" border="false"::: open icon to open another browser tab showing **Test** and associated test plan and test suite that controls the inline tests.

:::image type="content" source="media/c-cards-navigate-to-test-suite.png" alt-text="Screenshot showing Test selection from card on board.":::

## Reorder cards

You can drag any work item to any column or swimlane on the Kanban board. You can even change the order of items as you move a card to a new column. 

![GIF Screenshot showing reordering cards while changing columns.](media/8_7_02.gif)

::: moniker range=">= azure-devops-2022"
In addition to the dynamic card reordering, you can also move a card to a specific column position.  
::: moniker-end

> [!NOTE]   
> The last column, typically the **Closed** or **Done** column, is always ordered by *Closed Date* with the most recently closed items appearing towards the top of the column. In all other columns, cards are ordered by the backlog order or they're reordered based on the Card reordering setting selected.

::: moniker range=">= azure-devops-2022"
### Move a card to a specific column position

You can reorder the work items within a Kanban board column by choosing &hellip;**Work items action menu**, selecting **Move to position**, and then specifying a value in the dialog.  

> [!NOTE]   
> The **Move to column position** feature requires you to enable the **New Boards Hub** preview feature. To enable this feature, see [Manage or enable features](../../project/navigation/preview-features.md).
 
Specify a value within the range listed, which corresponds to the number of items currently in the column. 

:::image type="content" source="media/reorder/move-to-position.png" alt-text="Screenshot of Boards, Move to column position dialog.":::
::: moniker-end

### Set the team preference for reordering cards

If you want to preserve the backlog priority when you move a card to a new column, you can change the Kanban board card reordering setting for your team. 

::: moniker range=">= azure-devops-2019"
1. [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

1. Select the  :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Screenshot of open board settings for a team, vert nav.](../../organizations/settings/media/configure-team/open-board-settings.png)  

1. Select **Card reordering** and select from the two reordering  behaviors listed.  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Settings, Card reordering dialog.](../../boards/boards/media/kanban-card-reordering-up1.png) 

	The setting you choose applies to all active Kanban boards for your team.  

1. When you're done with your changes, select **Save**.
::: moniker-end 

::: moniker range="tfs-2018"
1. [Screenshot of an open Kanban board.](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

2. Choose ![settings icon](../../media/icons/team-settings-gear-icon.png) to open the common configuration settings dialog for the Kanban board. 

	![Screenshot showing Kanban board, open common configuration settings.](media/add-columns-open-settings-ts.png)  

3. Choose **Card reordering** and select from the two reordering behaviors listed.  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing the Settings dialog and Card reordering dialog.](../../boards/boards/media/kanban-card-reordering-up1.png) 

	The setting you choose applies to all active Kanban boards for your team.  

4. When you're done with your changes, choose **Save**.

	> [!TIP]
	> You can drag-and-drop work items onto a sprint from any backlog or board. To add sprints to a team backlog, see [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). 

::: moniker-end

## Related articles

::: moniker range=">= azure-devops-2019"
- [Manage and configure team tools](../../organizations/settings/manage-teams.md)
- [Setup your backlogs and boards](../backlogs/set-up-your-backlog.md)
- [Configure status badges](../github/configure-status-badges.md) 
- [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
- [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md)  
- [Set working days](../../organizations/settings/set-working-days.md) 
- [Set up swimlanes](expedite-work.md)
::: moniker-end

::: moniker range="tfs-2018"
- [Manage and configure team tools](../../organizations/settings/manage-teams.md)
- [Setup your backlogs and boards](../backlogs/set-up-your-backlog.md)
- [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
- [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md)  
- [Set working days](../../organizations/settings/set-working-days.md) 
::: moniker-end
