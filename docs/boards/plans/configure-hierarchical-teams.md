---
title: Configure hierarchical teams
titleSuffix: Azure Boards
description: Learn how to configure teams to support hierarchical portfolio backlogs for tracking progress across teams in Azure Boards.
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 10/21/2025
ms.custom: sfi-image-nochange
##customer intent: As a project administrator, I want to understand how to create a hierarchy of teams in Azure Boards so feature teams can manage their own backlogs while management teams track and manage overall work.

---

# Configure a hierarchy of teams

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how to configure a hierarchy of teams that supports tailored backlog views for management and feature teams. A hierarchical team structure helps ensure that your organization remains agile, focused, and aligned with its strategic objectives.

Teams can use customized backlog views to prioritize and manage their own work based on their specific goals and responsibilities. Management teams can maintain visibility into feature team backlogs and overall project progress. This structure has the following advantages:

- Enhances collaboration, communication, and teamwork across different functions.
- Streamlines workflow management to simplify processes and reduce bottlenecks, leading to faster decision-making and project execution.
- Supports accountability, efficiency, and productivity across projects by increasing visibility into each team's workload.
- Helps aligns with organizational goals, ensuring that all teams work towards common objectives.

Effective team configuration gives each team a clear and focused view of its responsibilities and priorities. Feature teams can concentrate on their critical tasks without getting overwhelmed by unrelated work items. Customized backlogs provide improved visibility and clear insight into workloads and progress. For more information about how teams can use their backlogs to prioritize and focus on their most critical work items, see [Manage product and portfolio backlogs](portfolio-management.md).

## Prerequisites 

[!INCLUDE [prerequisites-project-admin](../includes/prerequisites-project-admin.md)]

<a id="set_up"></a>
## Add a team for each area

To start setting up a hierarchical team structure, add a team for each feature and management area, or rename teams that already exist. To add a team:

1. In your Azure DevOps project, select **Project settings** > **Teams** from the left navigation menu, and then select **New Team**.

   :::image type="content" source="media/config-teams/open-project-settings-team-new.png" alt-text="Screenshot that shows Project settings, Teams, New Team.":::

1. On the **Create a new team** form, give the team a name, optionally add a description, members, and administrators, and then select **Create**. 

   >[!NOTE]
   >For teams to be well defined, add other team administrators to verify or configure other team settings. For more information, see [Manage and configure team tools](../../organizations/settings/manage-teams.md).

   :::image type="content" source="media/config-teams/create-new-team.png" alt-text="Screenshot that shows creating a team.":::

Select **New Team** for each team you want to add. You can also rename existing teams. Select the team in the **Teams** list, select the **Settings** tab, enter a new name under **Team Details** > **Team name**, and select **Save**.

## Move area paths into a hierarchical structure

Next, move the areas paths into a hierarchical structure with the feature teams under management teams. The following example shows a flat list of area paths compared to a hierarchical area path structure.

| Flat area structure | Hierarchical area structure |
|---------------------|-----------------------------|
| :::image type="content" source="media/config-teams/team-list-flat-structure.png" alt-text="Image showing flat area paths." border="false"::: | :::image type="content" source="media/config-teams/team-list-hierarchy-structure.png" alt-text="Image showing hierarchical area paths." border="false"::: |

To create the hierarchical structure:

1. In **Project Settings**, select **Boards** > **Project configuration** and then select the **Areas** tab.

   :::image type="content" source="media/config-teams/open-project-work-areas-settings.png" alt-text="Screenshot that shows selecting Project Settings, Project configuration, Areas.":::

1. Select the **More actions** icon next to an area path associated with one of the feature teams, and select **Edit**.

   :::image type="content" source="media/config-teams/select-area.png" alt-text="Screenshot that shows selecting an area to edit.":::

1. On the **Edit area** screen under **Location**, select a management team area path, and then select **Save and close**.

   :::image type="content" source="media/config-teams/edit-area-path.png" alt-text="Screenshot that shows editing the area path.":::

Repeat this process for all feature team area paths.

You can use **Project Settings** > **Project configuration** > **Areas** to review the **Area Paths** assigned to each team and change the assignments if necessary.

## Include subarea paths for management teams

The default setting for team backlogs is to exclude subarea paths. For management teams, you can include subarea paths so that backlog items from feature teams are automatically included in the management team backlogs.

> [!NOTE]
> Including subarea paths might hinder a team's ability to reorder or reparent items on their backlog. Including subarea paths can also introduce uncertainties in assignments in the backlog's **Column**, **Done**, and **Lane** fields. For more information, see [Understand issues with shared area paths](#op-issues).

To define area paths for management teams:

1. In **Project settings** > **Teams**, select the management team whose settings you want to modify.

1. On the team's page, select **Iterations and Area Paths**.

   :::image type="content" source="media/config-teams/open-iterations-areas.png" alt-text="Screenshot that shows Iterations and Area Paths.":::

1. The **Team Configuration** > **Boards** page opens. Select the **Areas** tab, and then select **Select area(s)**.

   :::image type="content" source="media/config-teams/choose-management-team.png" alt-text="Screenshot that shows Teams, choose a team.":::

1. On the **Select area(s)** screen, select the area path for the team name you want to include, select the **Include sub areas** checkbox, and then select **Save and close**.

   :::image type="content" source="media/config-teams/include-sub-area-paths.png" alt-text="Screenshot that shows selecting an area.":::

1. On the **Areas** page, verify that only this area path is selected for the team and is the default area path. Remove any other area paths.

   :::image type="content" source="media/config-teams/verify-area-path-assignments.png" alt-text="Screenshot that shows area paths for the management team.":::

Repeat this step for all your management teams. To switch teams, use the team selector in the breadcrumb navigation at the top of the screen.

If you want to enable rollup across all feature teams and management areas to the top-level area, repeat this step for the default team.

## Define a single sprint cadence for all teams 

If your feature teams use Scrum or use sprints to assign work, you can set up a series of sprints for all teams to use. The **Project Settings** > **Boards** > **Project configuration** page shows a set of predefined sprints by default. You can add more sprints and set their dates from **Project Settings** as described in [Add iterations and set iteration dates](../../organizations/settings/set-iteration-paths-sprints.md). You can also rename and edit the default sprints as needed.

Maintaining a single sprint cadence simplifies project administration, but you can create different cadences as needed. For example, some teams may follow a monthly cadence while others follow a three-week cadence.

You can define a node under the top project node for each cadence, for example **Fabrikam Fiber/CY2025** and **Fabrikam Fiber/3Week Sprints**, and then define the sprints under those nodes. The following example defines the start and end dates for the first three sprints corresponding to a three-week cadence.

:::image type="content" source="media/config-teams/iterations-scheduled.png" alt-text="Screenshot that shows Iteration path.":::

<a id="op-issues"></a>
## Understand issues with shared area paths

When you share area paths across two or more teams, conflicts can arise when:

- Reordering or reparenting work items on a backlog or board.
- Updating **Board column**, **Board column done**, and **Board Lane** fields by dragging items to different columns.

### Work item reordering and reparenting

Backlogs and boards support drag-and-drop functionality for reordering and reparenting work items. Changes made in one team's backlogs and boards are automatically reflected in other team backlogs and boards that share the same area path. You might need to refresh the page to see these updates.

You can use drag-and-drop to reorder or reparent only work items that are assigned to your team's area paths. When the **Parents** view option is enabled, work items your team doesn't own might appear in your backlog. An information icon next to these items indicates that the item can't be reordered or reparented because another team owns it.

:::image type="content" source="media/config-teams/information-message-owned-by-other-team.png" alt-text="Screenshot of information message on team ownership.":::

### Board column updates

Because each team can customize their board columns and swimlanes, the values assigned to board fields might differ when a team updates a work item from a different board. Even if the management team and the feature teams configure their [board columns](../boards/add-columns.md) with identical workflow mappings, updates to work items on one team's board don't automatically reflect on another team's board. The card column updates consistently across all boards only when a work item moves to a column that maps to a workflow state.

By design, the team with the longest area path takes precedence in resolving conflicts and determines the values for the **Board Column**, **Board Column Done**, and **Board Lane** fields. If two or more teams share area paths of equal depth, the results are nondeterministic.

The main workaround is to maintain single ownership of work items by [defining area paths and assigning them to a specific team](../../organizations/settings/set-area-paths.md). Alternatively, you can add custom workflow states that all teams can use uniformly. For more information, see [Customize the workflow (Inheritance process)](../../organizations/settings/work/customize-process-workflow.md).

## Next step
> [!div class="nextstepaction"]
> [Review team delivery plans](review-team-plans.md)

## Related content

- [Create and manage your backlog](../backlogs/create-your-backlog.md)  
- [Use backlogs to manage projects](../backlogs/backlogs-overview.md)
- [Organize your backlog and map child work items to parents](../backlogs/organize-backlog.md)  
- [Use your board](../boards/kanban-quickstart.md)
- [Troubleshoot reordering and nesting issues](../backlogs/resolve-backlog-reorder-issues.md)
 
