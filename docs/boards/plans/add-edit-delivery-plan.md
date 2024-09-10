---
title: Add or edit a Delivery Plan in Azure Boards
titleSuffix: Azure Boards
description: Learn how to add or edit a Delivery Plan in Azure Boards.
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.custom: cross-project  
ms.topic: how-to
monikerRange: '>= azure-devops-2022'
ms.date: 05/30/2024
---

# Add or edit a Delivery Plan 

[!INCLUDE [version-gt-eq-2022](../../includes/version-gt-eq-2022.md)] 

Delivery Plans provide a highly interactive calendar view of multiple team backlogs. This article shows how to add and edit a plan. For the use cases, benefits, and interactions you can do, see [Review team Delivery Plans](review-team-plans.md).

> [!NOTE]   
> This article describes how to add or edit Delivery Plans 2.0 which is available for Azure DevOps Services and Azure DevOps Server 2022 and later versions. For information on the Delivery Plans Marketplace extension which supports Azure DevOps Server 2020 and earlier versions, see [Delivery Plans 1.0](../extensions/delivery-plans.md).

## Prerequisites

- **Permissions:**
  - To add or edit a Delivery Plan, be a member of the **Contributors** group for the project where you add the plan. 
  - To add team backlogs to a plan, have **View** permissions to those projects. 
  - To view a Delivery Plan, be a member of the **Project Collection Valid Users** group. Users granted **Stakeholder** access for a private project can view plans. Users granted **Stakeholder** access for a public project can add and view plans.
  - To manage permissions, edit, or delete a plan, be the creator of the plan, or a member of the **Project Administrators**, **Project Collection Administrators** group, or be granted explicit permission through the plan's Security dialog. For more information, see [Manage Delivery Plan permissions](../../organizations/security/set-permissions-access-work-tracking.md).

- **Configuration:**:
  - Set up [teams and team backlogs](../../organizations/settings/add-teams.md).
  - Enable [team product or portfolio backlogs](../../organizations/settings/select-backlog-navigation-levels.md). 
  - Assign [area paths and team area paths](../../organizations/settings/set-area-paths.md).
  - Assign [iteration (sprint) paths and team iterations](../../organizations/settings/set-iteration-paths-sprints.md). 
  	- Assign **Iteration Paths** **Start** and **End Dates** or they don't appear on the plan. 
  	- Select **Iteration Paths** for the team whose backlogs you select, or work items associated with those iteration paths don't appear on the plan.   
  - Define [product backlog items](../backlogs/create-your-backlog.md) or [portfolio backlogs](../backlogs/define-features-epics.md) and assign those items to either a **Start Date** and **End Date** or an **Iteration Path**.

<a id="teams"></a>

## Add a plan  

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select **Boards** > **Delivery Plans**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing how to Open Boards and Delivery Plans.](media/plans/open-plans.png) 

3. Select **New Plan**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing Choose New Plan button.](media/plans/add-plan-new-plan-button.png) 

	All users have permissions to create a plan and manage the plans they create.   
4. Enter a name and description, and specify the team backlogs that you want to appear within your plan.

   When you define your plan, know the following guidelines:
   - **Name and description:** Use the name and description fields to clearly identify your plan within the project.
   - **Team selection:** You can choose one or more teams from any project defined in the organization or collection. There can be up to a maximum of 15 teams.
   - **Active backlogs:** Select one or more active backlogs for a team. If you encounter issues selecting a backlog level, check the Team Backlog settings to ensure the backlog level is enabled for the team. For more information, see [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).
   - **Reordering backlogs:** You can reorder the team backlogs by dragging and dropping them into the desired sequence.
   - **Filtering work items:** To filter for specific work items, specify the field criteria. For example, to exclude bugs from the view, add the following criteria: `Work Item Type <> Bug`.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing Dialog for New Delivery Plan.](media/plans/new-delivery-plan-dialog.png)  

For more information, see [Query fields, operators, and macros in Azure Boards](../queries/query-operators-variables.md).

<a id="field-criteria"></a>

## Edit a plan 

Once you define a plan, you can modify or further customize it.

1. Select **Settings** from your Delivery Plan. 

	:::image type="content" source="media/plans/settings.png" border="true" alt-text="Screenshot of Delivery Plans title and settings button.":::  

2. Choose the page you want to edit based on the [customizations you want to make](#customization-options). In the following example, we add the **Tags** to the **Field criteria**. Only work items that contain the *Build 2021* tag appear in the Delivery Plan. 

	:::image type="content" source="media/plans/plan-settings-field-criteria.png" border="true" alt-text="Screenshot showing Dialog for Plan settings, Field criteria page.":::   

> [!TIP]  
> If you made changes to a plan but don’t see them reflected, try refreshing your browser. Sometimes a browser refresh is necessary to trigger the updates.

<a id="customization-options"></a>

## Plan customization options

Once you open the Plan settings dialog, choose one of the following tabs to set your customization options. 

|Page         | Use to... |
|-------------|-------------------|
|**Overview**|Edit the plan **Name** or **Description**. |
|**[Teams](#teams)** |Add or remove a team backlog. You can add up to 20 backlog levels for Azure DevOps Services or 15 backlog levels for Azure DevOps Server 2022. You can add a mix of backlog levels and teams from any project defined for the organization.  |
|**[Field criteria](#field-criteria)**|Specify field criteria to filter work item types displayed on the plan. All criteria are evaluated as an AND statement. If no fields are specified, then all work item types that appear on the teams backlog level appear on the plan.  |
|**[Markers](#markers)** |Add up to 30 milestone markers to the plan. Specify a label and select a color.  |  
|**[Fields](#fields)** |Add or remove fields from cards to display on the plan, similar to how you [customize them for your board](../../boards/boards/customize-cards.md). You can't add rich-text (HTML) fields, such as the Description field, to a card even if it appears in the list. These field types represent too many challenges to format on a card.    |
|**[Styles](#styles)** |Add styling rules to change card color based on field criteria. |
|**[Tag colors](#tag-colors)**|Add tags and specify a tag color. Optionally enable or disable a tag color. |

<a id="fields"></a>

## Choose fields to appear on cards 
 
Display fields that are relevant for your review purposes or contain keywords that you want to use for filtering your plan. Unlike a board, you can't change the field displayed on the card directly. To make field changes, open the work item.   

> [!TIP]   
> To add a custom field, first [add it to the process used to customize the project](../../organizations/settings/work/add-custom-field.md). 
 
1. Open your plan **Settings**.
2. Select **Fields**. 
3. Check the boxes next to the field you want to appear on the board. 
4. To add a field, select the :::image type="icon" source="../media/icons/green_plus_icon.png" border="false"::: plus icon and enter the name of a field. You can add both default and custom fields, including Boolean fields. The only fields you can't add are rich-text or HTML fields. 

	In the following example, we select all standard fields and add the **Story Points** and **Priority** fields to display on cards. 

	:::image type="content" source="media/plans/plan-settings-fields.png" alt-text="Screenshot showing Dialog for Plan settings, Fields tab.":::

	> [!TIP]  
	> To show the **Title** of the parent work item, choose the **Parent** field. Choosing the **Parent** title from a card opens the parent work item. To change the parent work item, open the child work item and remove the link and add a different parent work item. You can filter your plan based on parent work items, whether the **Parent** field is added to cards or not. 

5. To remove a field, select the :::image type="icon" source="../media/icons/trash-can.png" border="false"::: *delete* icon next to the field.

6. When you're done, select **Save**.

<a id="markers"></a>

## Add milestone markers

1. Open your plan **Settings**.
2. Select **Markers**. 
	:::image type="content" source="media/plans/plan-settings-markers.png" border="true" alt-text="Screenshot of Dialog for Plans settings, Markers tab, two markers defined.":::   
2. Specify a date.
3. Choose a hexadecimal color or select the color palette icon to change to a system-selected color.
   To add more markers, select **+ Add marker**. You can add up to 30 markers. After 30 markers, the **+ Add marker** button is disabled.  
4.	Select **Save**. 

	Markers appear on the plan like the following example. 

	:::image type="content" source="media/plans/markers.png" border="true" alt-text="Screenshot of Plans, Markers appear on calendar.":::

<a id="styles"></a>

## Change card color 

With styling rules, you can change the color of cards when their corresponding work items meet specific field criteria that you set. This functionality is similar to what you can define for a board, as described in [Customize cards](../boards/customize-cards.md). In this case, we highlight the card based on its **Tags** assignment. 

:::image type="content" source="media/plans/card-tag-style.png" border="true" alt-text="Screenshot of a card with style applied.":::   

1. Open your plan **Settings**.
2. Select **Styles**.

	:::image type="content" source="media/plans/plan-settings-styles.png" border="true" alt-text="Screenshot of Dialog for Plans settings, Styles tab, two styles defined.":::   

3. Select **+Add styling rule**.
4. Enter a name for the style and choose a color. 
5. Specify the field criteria. You can add multiple field values. For style purposes, they're all evaluated as a logical `AND`.
 
	For example, here we choose to highlight cards with a **Priority=1**. 

	:::image type="content" source="media/plans/specify-style.png" border="true" alt-text="Screenshot of Dialog for Plans settings, Styles tab, define a new style.":::   

   You can specify up to 10 styles. 
	
	> [!NOTE]   
	> You can't directly select **Title**, **Description**, and other rich-text fields, such as **Assigned To**. Even if you can select a field, you might not be able to specify a value or the specific value you want. For example, you can't specify **Tags** that are either *Empty* or *Not Empty*. 

::: moniker range="azure-devops"

### Set color for an Iteration Path

1. Open your plan **Settings**.
2. Select **Styles**.
3. Specify the  `@CurrentIteration` macro for the desired team.
:::image type="content" source="media/plans/styles-current-iteration.png" alt-text="Screenshot of Dialog for Plans settings, Styles tab, set style using the current iteration macro for the Iteration Path."::: 

For more information, see [Query by date or current iteration](../queries/query-by-date-or-current-iteration.md#create-queries-for-your-teams-current-iteration).

::: moniker-end

<a id="tag-colors"></a>

## Set tag colors

Before you set tag colors, [add tags to backlog items](../queries/add-tags-to-work-items.md) to highlight with color.

1. Open your plan **Settings**.
2. Select **Tag colors**.
3. Select :::image type="icon" source="../../media/icons/add-dark-icon.png" border="false"::: **Add tag color** and choose the tag and color that you want on the cards.  
	:::image type="content" source="media/plans/edit-tags-settings.png" border="true" alt-text="Dialog for Plans settings, Tags tab, add tags, and set color.":::   
4. To enable or disable a tag color, check or uncheck the **Enabled** checkbox.  
5. When you're done, select **Save**.

   > [!TIP]
   > If tags don't display on the cards, select **Fields** and make sure you checked **Show Tags**. 

## Related articles  
<a id="plans-rest-api">  </a>

- [Manage Delivery Plans using the REST API](/rest/api/azure/devops/work/plans/create?view=azure-devops-rest-6.0&preserve-view=true)
- [Review team plans](review-team-plans.md)
- [Filter backlogs, boards, queries, and plans interactively](../backlogs/filter-backlogs-boards-plans.md)
- [Understand backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md)
- [Add teams](../../organizations/settings/add-teams.md)
- [Manage portfolio](portfolio-management.md)
 