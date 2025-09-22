---
title: Track dependencies in Delivery Plans
titleSuffix: Azure Boards
description: Learn how to view and manage work item dependencies using dependency tracking features in Delivery Plans.
ms.service: azure-devops-boards
ms.custom: cross-project  
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '>= azure-devops-2022'
ms.date: 09/03/2025
---


# Track dependencies in Delivery Plans

[!INCLUDE [version-gt-eq-2022](../../includes/version-gt-eq-2022.md)] 

Delivery Plans provide visual dependency tracking for work items linked with **Predecessor/Successor** relationships. Dependency visualization helps you identify scheduling conflicts and manage cross-team dependencies effectively.

Cards display dependency status icons:
- :::image type="icon" source="media/dependencies/dependency-green-icon.png" border="false"::: **Green icon**: No dependency scheduling issues
- :::image type="icon" source="media/dependencies/dependency-red-icon.png" border="false"::: **Red icon**: Dependency scheduling conflicts detected

:::image type="content" source="media/dependencies/dependencies-with-without-issues.png" alt-text="Screenshot of delivery plan showing work items with dependencies and dependency issues.":::

## Prerequisites

| Requirement | Description |
|-------------|-------------|
| **Access** | Member of the **Project Collection Valid Users** group or **Stakeholder** access |
| **Permissions** | **Edit work items in this node** permission set to **Allow** for relevant Area Paths |
| **Configuration** | [Delivery Plan created](add-edit-delivery-plan.md) with teams and backlogs configured |
| **Dependencies** | Work items [linked using Predecessor-Successor link type](../backlogs/add-link.md#link-several-work-items) |

For complete setup requirements, see [Add or edit a Delivery Plan](add-edit-delivery-plan.md#prerequisites).

> [!TIP]  
> You can create dependencies between work items across different projects and teams within the same organization. Dependencies across organizations aren't supported.

## View dependency lines

1. Open your Delivery Plan from **Boards** > **Delivery Plans**.

2. Select the top or bottom edge of a work item card to show its dependency lines. Select again or select elsewhere to hide the lines.

   **No scheduling conflicts** (black lines):
   :::image type="content" source="media/dependencies/dependency-lines-no-issue.png" alt-text="Screenshot of dependency lines showing no scheduling issues.":::

   **Scheduling conflicts** (red lines):
   :::image type="content" source="media/dependencies/dependency-lines.png" alt-text="Screenshot of dependency lines showing scheduling conflicts between work items.":::

   > [!TIP]    
   > Expand both team rows to see dependency lines across teams.

3. To view conflict details, select the :::image type="icon" source="media/dependency-issue-icon.png" border="false"::: issue icon on the work item card.

   :::image type="content" source="media/dependencies/dependency-lines-issue-alert.png" alt-text="Screenshot showing dependency conflict details in a work item card.":::

## View dependency details

For detailed dependency information, select the dependency icon (:::image type="icon" source="media/dependencies/dependency-green-icon.png" border="false"::: or :::image type="icon" source="media/dependencies/dependency-red-icon.png" border="false":::) on any work item card.

:::image type="content" source="media/dependencies/card-dependency-link.png" alt-text="Screenshot of work item card with dependency icon highlighted.":::

The Dependencies dialog shows:
- All predecessor and successor work items
- Dependency status and any scheduling conflicts
- Cross-project dependencies (when applicable)

:::image type="content" source="media/dependencies/dependency-dialog-with-no-issues-cross-project.png" alt-text="Screenshot of Dependencies dialog showing work items with no scheduling conflicts.":::

## Resolve dependency conflicts

Dependency conflicts occur when a successor work item is scheduled to complete before its predecessor. These conflicts appear with red indicators in the Dependencies dialog.

:::image type="content" source="media/dependencies/dependencies-cross-project.png" alt-text="Screenshot of Dependencies dialog showing scheduling conflicts with red indicators.":::

**To resolve conflicts:**

- **Review scheduling**: Check the **Target Date** or **Iteration Path** end dates for conflicting work items
- **Adjust timing**: Modify work item dates or iteration assignments to resolve scheduling conflicts
- **Re-evaluate dependencies**: Consider if dependency relationships are still accurate

> [!NOTE]
> Dependency end dates are determined by either the work item's **Target Date** or the **End Date** of its assigned **Iteration Path**.

## Best practices for dependency tracking

- **Use consistent link types**: Always use Predecessor-Successor links for dependency tracking
- **Regular review**: Check dependency status during sprint planning and reviews
- **Cross-team coordination**: Expand team rows to visualize dependencies across teams
- **Proactive management**: Address red dependency indicators promptly to avoid delays

## Related content

- [Add or edit a Delivery Plan](add-edit-delivery-plan.md)
- [Review team Delivery Plans](review-team-plans.md)
- [Link work items](../backlogs/add-link.md)
- [Use the Dependency Tracker extension](../extensions/dependency-tracker.md)
- [Manage dependencies](../best-practices-agile-project-management.md#manage-dependencies)

