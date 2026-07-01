---
title: Edit user stories and other work items in bulk
titleSuffix: Azure Boards
description: Bulk modify work items in Azure Boards to update fields, reassign work, move items to sprints, and add or remove tags without opening each item.
ms.service: azure-devops-boards
ms.custom: boards-backlogs, linked-from-support, copilot-scenario-highlight
ms.author: chcomley
author: chcomley
ms.topic: how-to
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 07/01/2026
#customer intent: As a team lead, I want to make the same change to many work items at once so I can assign items, update fields, and manage sprints efficiently.
---

# Modify work items in bulk in Azure Boards 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use bulk modify to update many work items at once without opening each one individually. From the web portal, you can:

- Update field values across selected items
- Reassign work to a team member
- Move items to a sprint or iteration
- Add or remove tags
- Change the work item type or move items to another project

Available options depend on your access level and permissions.

> [!TIP]
> To add work items in bulk, or to set different values per item, use [CSV import](../queries/import-work-items-from-csv.md) instead. The web portal bulk edit applies the same value to all selected items.

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [prerequisites](../includes/prerequisites-work-items.md)]

## Supported tasks

**Contributors** can complete all the following tasks. Members with **Stakeholder** access are limited to multi-select, bulk edit, change type, email, and copy as HTML/copy to clipboard. For more information, see [Get started as a Stakeholder](../../organizations/security/get-started-stakeholder.md).

::: moniker range="<=azure-devops"

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
   - [Multi-select — query results](#multi-select)
   - [Multi-select — backlog](#multi-select)
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
   - [Delete](remove-delete-work-items.md#delete)<sup>1</sup>
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Copy, clone, change type, move, or send email
   :::column-end:::
   :::column span="1":::
   - [Clone or copy a single item](copy-clone-work-items.md#copy-clone)<sup>2</sup>
   - [Copy as HTML/Copy to clipboard](copy-clone-work-items.md)
   - [Send email with selected items](../work-items/email-work-items.md)
   - [Change work item type](move-change-type.md#change-type)<sup>1</sup>
   - [Move items to another project](move-change-type.md#move)<sup>1,3</sup>
   :::column-end:::
:::row-end:::

> [!NOTE]
> - **Hidden work item types**: Some bulk actions aren't available for [hidden type category](../work-items/agile-glossary.md#hidden-types) work items. This category includes test cases, shared steps, shared parameters, code review requests and responses, and feedback requests and responses.
> - **Copy vs. Clone (single item only)**: Both actions apply to one work item at a time, from a query results list or the [Actions menu](remove-delete-work-items.md) on the work item form. Use **Copy work item** to copy an item and change its type. Use **Clone** to create an identical copy of the same type.
> - **Move work items permission**: To move items to another project, be a member of the **Project Administrators** group or have explicit [Move work items](../../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions) permission.

::: moniker-end

<a id="multi-select"> </a>  
<a id="edit"> </a>  

## Select work items for bulk edit

Select multiple work items from query results, the backlog, or sprint backlogs. The process for selecting multiple work items works the same way across all three. To build a targeted list, see [Define a work item query](../queries/using-queries.md).

From the backlog context menu, you can:

- Change priority with **Change position**
- Move items to a sprint with **Move to iteration**
- Assign items to a team member
- [Map items to a feature](organize-backlog.md#mapping)

The available menu options differ between the backlog and query results, as shown in the following section.

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

Use the following keyboard shortcuts to select work items:

- **Sequential items**: Select the first item, hold **Shift**, and select the last item in the range.
- **Nonsequential items**: Hold **Ctrl** and select each item individually.

To open the context menu, select :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: or :::image type="icon" source="../media/icons/context_menu.png":::, and then choose an option.

The following example moves several nonsequential items to the current sprint using the context menu.

::: moniker range="<=azure-devops"

:::image type="content" source="media/bulk-modify/move-iteration.png" alt-text="Screenshot of Product backlog context menu with Move to iteration selected for multiple work items.":::

::: moniker-end

> [!TIP]
> You can also drag selected items to a new position in the backlog or onto a sprint in the **Planning** pane. To use the **Planning** pane, enable it from the view options menu. To create a query from the current backlog for further bulk updates in Excel, use the **Create Query** feature.

<a id="move-iteration"> </a>
<a id="assign-to"> </a>  

## Reassign work items

1. Select the work items you want to reassign.
1. Open the context menu on any selected item by selecting :::image type="icon" source="../media/icons/actions-icon.png" border="false":::, and then select **Assign to** or **Move to iteration**.

   :::image type="content" source="media/bulk-modify/assign-from-query.png" alt-text="Screenshot of Query Results page context menu with Assign to and Move to iteration highlighted.":::

1. Select a team member (**Assign to**) or a sprint (**Move to iteration**), and then confirm.

For more information about the **Assign To** and **Iteration Path** fields, see [Workflow and board fields](../queries/query-by-workflow-changes.md#workflow-fields) and [Query by area or iteration path](../queries/query-by-area-iteration-path.md).

<a id="edit-fields"> </a>  

## Edit field values in bulk

::: moniker range="<=azure-devops"

1. Select the work items you want to update, and then choose **Edit** from the context menu.

1. In the **Edit work items** dialog, select a field, enter or select the new value, and optionally add a description for audit purposes. Repeat for each field to update. For a full list of available fields, see the [Work item field index](../work-items/guidance/work-item-field.md).

   :::image type="content" source="media/bulk-modify/edit-work-items-new-text-editor.png" alt-text="Screenshot of Edit work items dialog with a field selected and a value entered.":::

1. Select **Save changes**.

   :::image type="content" source="media/bulk-modify/query-results-bulk-save-items.png" alt-text="Screenshot of Query results page with Save items highlighted.":::

   > [!NOTE]
   > When you bulk modify work items from the **backlog**, the changes save automatically. When you work from **query results**, items shown in bold have unsaved local changes - select **Save items** to commit them.

::: moniker-end

[!INCLUDE [move work items to sprint](../includes/assign-to-sprint.md)]

<a id="rich-text"> </a> 

## Modify rich-text fields in bulk

Rich-text fields accept HTML syntax for formatting. They include **Description**, **Acceptance Criteria**, **Repro Steps**, and other fields listed in [Example queries for select fields](../queries/query-index-quick-ref.md#example-queries-for-select-fields).

To bulk update rich-text fields, use one of the following options:

- **Direct entry**: In the bulk edit dialog, select the field and enter your text with HTML syntax in the **Value** field.
- **Work item template**: Create a template with the formatted text, and then apply it to selected work items. For more information, see [Use work item templates](work-item-template.md) and [Sample work item templates — Add guidance in a rich-text field](../work-items/work-item-template-examples.md#rich-text).

<a id="tags"></a>

## Modify tags in bulk

1. Select the work items you want to tag.
1. Open the context menu, select **Edit**, and then in the **Edit work items** dialog, select **Tags (Add)** or **Tags (Remove)**.
1. Enter or select the tags to add or remove, and then select **Save changes**.

   :::image type="content" source="media/bulk-modify/edit-tags-dialog.png" alt-text="Screenshot of Edit work items dialog with Tags (Add) selected and a tag value entered.":::

> [!NOTE]
> To add new tags, you need the **Create tag definition** permission at the project level. By default, the **Contributors** group has this permission.

## Migrate or change a large number of work items

For large-scale or organizational moves, use the [Work item batch operations](/rest/api/azure/devops/wit/work%20items#operations) REST API.

You can't move work items to a different organization or collection. To migrate work item data, export and then import it by using [Excel](office/bulk-add-modify-work-items-excel.md) or [CSV import](../queries/import-work-items-from-csv.md).

## Add multiple values to a field

If you use a [custom control that supports multiple values](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-extensions-multivalue-control), use Excel to bulk edit that field. The web portal supports selecting only a single value per field and doesn't support bulk editing multi-value fields.

<a id="use-ai-assistance"></a>

## Use AI to bulk modify work items

If you configure the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md), you can describe bulk changes in natural language instead of selecting and editing items manually.

| Task | Example prompt |
|------|----------------|
| Reassign items | `Reassign all active user stories in Sprint 12 from <Jamal> to <Raisa> in project <Contoso>` |
| Change priority | `Set priority to 1 for all bugs tagged "regression" in project <Contoso>` |
| Add tags in bulk | `Add tag "security-review" to all active work items in area path <Contoso\\Auth> ` |
| Move items to a sprint | `Move all uncommitted user stories from Sprint 5 to Sprint 6 in project <Contoso>` |
| Close completed items | `Close all resolved bugs in <Contoso> that have been resolved for more than 14 days` |
| Bulk update area paths | `Move all work items in area path <Contoso\\OldTeam> to <Contoso\\NewTeam>` |
| Remove stale tags | `Remove tag "sprint-goal" from all work items in completed sprints in project <Contoso>` |
| Set story points | `Set story points to 3 for all user stories in <Contoso> that are sized as Small and have no story points` |
| Bulk assign to iteration | `Assign all unparented tasks in <Contoso\\Backend> to the current sprint` |
| Update multiple fields | `For all active bugs in area path <Contoso\\Frontend>, set priority to 2 and add tag "frontend-triage"` |

> [!NOTE]
> If you're using Visual Studio Code, [agent mode](/visualstudio/ide/copilot-chat-context#agent-mode) is especially helpful for complex bulk operations.

## Related content

- [Add a link to a work item](add-link.md)
- [Copy or clone work items](copy-clone-work-items.md)
- [Change work item type or move to another project](move-change-type.md)
- [Use work item templates](work-item-template.md)
- [Import work items from CSV](../queries/import-work-items-from-csv.md)
