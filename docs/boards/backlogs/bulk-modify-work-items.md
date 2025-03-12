---
title: Edit user stories and other work items in bulk
titleSuffix: Azure Boards
description: Learn how to make the same change to many work items in Azure Boards using the bulk modify feature in Azure Boards.
ms.service: azure-devops-boards
ms.custom: boards-backlogs, linked-from-support
ms.assetid: 152CAFE0-2360-470A-98AC-F613A67C24D2
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 10/18/2024
#customer intent: As a team lead, I want to learn how to make changes to multiple work items at once to assign items to team members or sprints.
---

# Modify work items in bulk in Azure Boards 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use bulk modify when you need to quickly make the same change to many work items. For example, you might want to change the priority of several bugs or reassign several tasks to the same team member. Use the web portal to quickly modify one or more fields for work items that contain the same value.  

> [!TIP]
> To add work items in bulk or update multiple fields with different values, use [CSV Import](../queries/import-work-items-from-csv.md). You can't complete a bulk add of work items through the web portal.

With bulk modify, you can edit fields and add or remove tags. You can also reassign work or move work to a specific sprint. You can also use bulk modify to change the work item type or move work items to other projects. The options available to you depend on the platform you work from and the permissions assigned to you.

## Prerequisites

[!INCLUDE [prerequisites](../includes/prerequisites-work-items.md)]

## Supported tasks

Team members who belong to the Contributors group can complete the following tasks. Members provided with Stakeholder access can run multi-select, bulk edit, change type, email, and copy as HTML/copy to clipboard actions. For more information, see [Get started as a Stakeholder](../../organizations/security/get-started-stakeholder.md).  

::: moniker range=">= azure-devops-2019"

:::row:::
   :::column span="1":::
   **Area**
   :::column-end:::
   :::column span="1":::
   **Task**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   Multi-select work items  
   :::column-end:::
   :::column span="1":::
   - [Multi-select-query results](#multi-select)
   - [Multi-select-backlog](#multi-select)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Link work items 
   :::column-end:::
   :::column span="1":::
   - [Link to a new item](add-link.md)
   - [Link to an existing item](add-link.md)
   - [New branch](connect-work-items-to-git-dev-ops.md)<sup>1</sup>
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Bulk edit/update/delete
   :::column-end:::
   :::column span="1":::
   - [Edit fields](#edit)
   - [Assign to](#assign-to)
   - [Move to iteration](#move-iteration)
   - [Change position](create-your-backlog.md#move-items-priority-order)
   - [Change parent](organize-backlog.md#reparent)
   - [Add/remove tags](#tags)
   - [Update from template](work-item-template.md)<sup>1</sup>
   - [Delete](remove-delete-work-items.md#delete) <sup>1</sup>
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Copy, clone, change type, move, or email work items  
   :::column-end:::
   :::column span="1":::
   - [Clone or copy a single item](copy-clone-work-items.md#copy-clone) <sup>2</sup>
   - [Copy as HTML/Copy to clipboard](copy-clone-work-items.md)
   - [Send email with selected items](../work-items/email-work-items.md)
   - [Change work item type](move-change-type.md#change-type)<sup>1</sup>
   - [Move items to another project](move-change-type.md#move)<sup>1, 3</sup>
   :::column-end:::
:::row-end:::

> [!NOTE]  
> - You can't perform certain functions on work items whose [work item types](../work-items/about-work-items.md) belong to the [hidden types category](../work-items/agile-glossary.md#hidden-types). This category includes all work items that track tests (such as test cases, shared steps, and shared parameters), code review requests and responses, and feedback requests and responses.
> - You can choose to copy or clone a single work item from a query results list or from the [Actions menu of the work item form](remove-delete-work-items.md). You can only perform a clone or copy action for a single work item. Choose Copy work item when you want to create a copy of a work item and change its work item type. Choose Clone when you want to create another instance of the work item without changes to its work item type.
> - Be a member of the Project Administrators group or be granted explicit permissions to [**Move work items**](../../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions).  

::: moniker-end

<a id="multi-select"> </a>  
<a id="edit"> </a>  

## Edit multiple work items in bulk

To start a bulk edit, begin by multi-selecting the work items you want to modify. Select them from query results or the backlog. You can craft your query using the query editor or search box. For more information, see [Define a work item query](../queries/using-queries.md).

Multi-select of work items on the backlog and sprint backlogs works in the same way as multi-select works within query results.

You can use bulk modify by selecting work items from the backlog page or query results list. From the backlog page context menu, change the backlog priority of several items: **Change position** or **Move to iteration**. Then,  assign them to a team member, move them to a different sprint, or [map them to a feature](organize-backlog.md#mapping).

The menu options available to you change depending on the platform you work from and whether you work from a backlog page or query results list.  

:::row:::
   :::column span="1":::
   **Backlog menu**  

   :::image type="content" source="media/bulk-m-backlog-menu-options-ts.png" alt-text="Screenshot of Backlog multi-select menu.":::
   :::column-end:::
   :::column span="1":::
   **Query results multi-select menu**  

   :::image type="content" source="media/bulk-m-query-results-menu-options-ts.png" alt-text="Screenshot of Query results multi-select menu.":::
   :::column-end:::
:::row-end:::

### Select multiple items and open the context menu

To select several items in a sequence, select the first item of the sequence, hold down **Shift**, and select the last item of the sequence. To select several nonsequential items, hold down **Ctrl** and select the items to be selected one after the other. You can either drag the selected items to a new position within the backlog or to a different sprint if the `Planning` side pane is enabled.

To open the context menu, select (:::image type="icon" source="../media/icons/actions-icon.png" border="false":::) or (:::image type="icon" source="../media/icons/context_menu.png":::), and then choose the option from the menu.

This example uses the context menu to move several nonsequential items to the current sprint.

::: moniker range=">= azure-devops-2019"  

:::image type="content" source="media/bulk-modify/move-iteration.png" alt-text="Screenshot of Product backlog context menu, where you can move several backlog items to a different iteration.":::

::: moniker-end  

> [!TIP]  
> Use the backlog **Create Query** feature to create a query with the backlog items. You can then open the query within the web portal or [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) to perform additional bulk updates.  

<a id="move-iteration"> </a>
<a id="assign-to"> </a>  

## Reassign work items 

With work items selected, open the context menu for any selected item, and reassign all of them. You can assign them to a member of your team or to another sprint or iteration at the same time.

:::image type="content" source="media/bulk-modify/assign-from-query.png" alt-text="Screenshot of Queries Results page where a context menu can assign work items to a team member.":::

For more information about the *Assign To* and *Iteration Path* fields, see [Workflow and board fields](../queries/query-by-workflow-changes.md#workflow-fields) and [Query by area or iteration path](../queries/query-by-area-iteration-path.md).

<a id="edit-fields"> </a>  

## Edit one or more fields

To assign or modify several fields, choose **Edit** from the context menu of one of the selected work items. Enter a value for each field that you want to update.  

::: moniker range=">= azure-devops-2019"

1. For audit purposes, you can add a description for your bulk update task. For more information about each field, see the [Work item field index](../work-items/guidance/work-item-field.md).

   :::image type="content" source="media/bulk-modify/edit-work-items-new-text-editor.png" alt-text="Screenshot of Edit work items dialog.":::  

1. From the Query results page, save all work items that you bulk-modified. When you bulk modify items from the backlog, they're automatically saved. Work items shown in bold text indicate that local changes aren't saved to the data store. The **Save items** button might be in a different place in the UI than shown in the following picture, depending on the layout of your browser and the specific version in use.

   :::image type="content" source="media/bulk-modify/query-results-bulk-save-items.png" alt-text="Screenshot of Query results page with Save items selected.":::

::: moniker-end

[!INCLUDE [move work items to sprint](../includes/assign-to-sprint.md)]

<a id="rich-text"> </a> 

## Modify rich-text fields in bulk

Rich-text fields support entry of HTML syntax tags to support formatting. Rich-text fields correspond to the **Description**, **Acceptance Criteria**, **Repos Steps**, and others listed in [Example queries for select fields](../queries/query-index-quick-ref.md#example-queries-for-select-fields).

You can bulk update a rich-text field by using the bulk modify tool, selecting the field, and entering the text with syntax in the **Value** field. Or, you can create a work item template with the text you want to use and complete a bulk update by applying the template to the selected work items. For more information, see [Use work item templates](work-item-template.md).

For an example using templates showing entry of HTML formatted syntax, see [Sample work item templates, Add guidance in a rich-text field](../work-items/work-item-template-examples.md#rich-text).

<a id="tags"></a>

## Modify tags in bulk 

From the **Edit work items** dialog, select **Tags (Add)** or **Tags (Remove)**.  

This example adds the *Service* tag to the selected work items.

:::image type="content" source="media/bulk-modify/edit-tags-dialog.png" alt-text="Screenshot of Edit work items dialog where you can add tags.":::

## Related articles

To add fields or customize a work item form, see [Customize your work tracking experience](../../reference/customize-work.md). The method you use depends on the process model that supports your project.  

### Migrate or change a large number of work items

For large scale, organizational moves, use the REST API calls for [Work item batch operations](/rest/api/azure/devops/wit/work%20items#operations).

At this time, you can't move work items to a different organization or collection. You can only migrate work item information by exporting and then importing them using [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).

### Add multiple values to a field  

If you implemented a [custom control that supports multiple values](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-extensions-multivalue-control), you can use Excel to bulk edit the field. You can't modify it using the web portal. You can only select a single value for the field.
