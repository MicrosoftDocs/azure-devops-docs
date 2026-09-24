---
ms.topic: include
ms.author: chcomley
author: chcomley 
ms.date: 07/06/2026
---

## Definitions for common work tracking fields  

<a id="definitions-in-common"></a>

The following fields and tabs appear in most work items. Common tabs include :::image type="icon" source="../backlogs/media/icon-history-tab-wi.png"::: **History**, :::image type="icon" source="../backlogs/media/icon-links-tab-wi.png"::: **Links**, and :::image type="icon" source="../backlogs/media/icon-attachments-tab-wi.png"::: **Attachments**.

For all work item types, **Title** is the only universally required field. When you save a work item, Azure DevOps assigns a unique **ID**. Required fields are highlighted in yellow. For more fields, see [Work item field index](../work-items/guidance/work-item-field.md).   

> [!NOTE]   
> Other fields might be required based on process and project customizations.  

| Field or tab | Usage |
|---|---|
| [Title](../queries/titles-ids-descriptions.md) | Enter a short description (up to 255 characters). You can edit the **Title** later. |
| [Assigned To](../queries/query-by-workflow-changes.md) | Assign the work item to the person responsible for completing it, or leave it unassigned until ownership is clear. |
| [State](../queries/query-by-workflow-changes.md) | On creation, **State** defaults to the first workflow state (such as **New** or **Unassigned**). Update it as work progresses. |
| [Reason](../queries/query-by-workflow-changes.md) | **Reason** explains why the item is in the current **State**. Default values vary by work item type and process. |
| [Area](../queries/query-by-area-iteration-path.md) | Select the area path for the product or team. For details, see [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md). |
| [Iteration](../queries/query-by-area-iteration-path.md) | Select the sprint/iteration for planned completion. For details, see [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). |
| :::image type="icon" source="../backlogs/media/icon-history-tab-wi.png"::: [History](../queries/history-and-auditing.md) tab | View the full change log for the work item, including author, date, and updated fields. You can also add formatted text in **History**. |
| :::image type="icon" source="../backlogs/media/icon-links-tab-wi.png"::: [Links](../backlogs/add-link.md) tab | Add relationships to other artifacts (for example, parent/child work items, changesets, source files, or test results). |
| :::image type="icon" source="../backlogs/media/icon-attachments-tab-wi.png"::: [Attachments](../queries/linking-attachments.md) tab | Add supporting files such as documents, images, logs, or email threads. |
