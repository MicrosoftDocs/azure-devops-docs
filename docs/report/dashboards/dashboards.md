---
title: Add, Rename, Delete, and Manage Team Dashboards
titleSuffix: Azure DevOps  
description: Learn how to create, edit, and delete Azure DevOps dashboards. Find out how to set dashboard permissions and add widgets to dashboards to view progress and trends.
ms.custom: "dashboards"
ms.subservice: azure-devops-analytics
ms.assetid: B080CEFA-4D94-44B2-99E3-0E3E85616D04
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.update: 90-days
ms.date: 01/12/2026
# customer intent: As a team member, I want to learn how to create, edit, and delete Azure DevOps dashboards so that I can view and share information about my projects and teams, such as progress and status updates.
---

# Quickstart: Add, rename, and delete dashboards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This quickstart shows how to create, edit, rename, and delete dashboards in Azure DevOps. It also covers permissions, adding widgets, and troubleshooting common issues.

Learn how to do the following tasks:
- Create team and project dashboards
- Add, configure, move, resize, and remove widgets
- Set dashboard permissions and sharing options
- Troubleshoot common dashboard and widget issues

Quick steps:
1. In your project, open **Overview** > **Dashboards**
2. Select **New dashboard** to create a team or project dashboard
3. Select **Edit**, open the widget catalog, drag widgets onto the canvas, then select **Done Editing**
4. Open **More options** > **Dashboard settings** to rename or change refresh settings
5. Open **More options** > **Security** to set permissions

## Prerequisites

[!INCLUDE [Dashboard prerequisites](../includes/dashboard-prerequisites.md)]

[!INCLUDE [enable-mcp-server](../../boards/includes/enable-mcp-server.md)]

## Project and team dashboards

Dashboards belong to either a team or a project.

- Use project dashboards to surface information at the project level and to control who can edit dashboards.
- Use team dashboards to surface information tailored to a team; team members typically edit these dashboards.

> [!NOTE]
> - The user who creates a project dashboard becomes its owner and can set editor permissions. Deleting a project dashboard requires membership in the Project Collection Administrators group.
> - Team administrators own team dashboards; team members can usually edit them depending on team settings.
> - If a widget is team-scoped and lacks a team selector, the dashboard uses the project's default team.

When a project is created, Azure DevOps also creates a default team and a default team dashboard named *Overview*. Customize that dashboard by [adding widgets](#add-move-resize-or-delete-widgets).

## Dashboard directory (browse dashboards)

Open the dashboard directory to browse and manage dashboards for the current project:

1. In your project, select **Overview** > **Dashboards**.
2. Use the filter icon to search dashboards by title, description, or team.
3. Use the dashboard selector (top-left) to switch dashboards or to select **Browse all dashboards**.

:::image type="content" source="media/dashboards/open-dashboards-vert.png" alt-text="Screenshot of the dashboard directory. On the side, Dashboards is highlighted. In the main pane, three dashboards are listed.":::

The directory lists dashboards in this order:
- The dashboard you last visited
- Dashboards in your favorites list
- Dashboards of teams you belong to
- All project dashboards alphabetically

## Select and favorite a dashboard

Open a dashboard from the directory or use the dashboard selector while viewing another dashboard. To add a dashboard to your favorites:

- Select the star in the dashboard row in the directory, or
- Hover over a dashboard in the selector and select the star icon.

Favorited dashboards appear near the top of the directory and in your personal favorites list.

:::image type="content" source="media/dashboards/favorite-dashboard.png" alt-text="Screenshot of the dashboard selector with a favorite star highlighted.":::

## Add a dashboard

You can add a dashboard at any time (subject to project limits).

> [!NOTE]
> There's a limit of 500 dashboards per project. If you reach the limit, delete unused dashboards or consolidate widgets into fewer dashboards.

Steps to create a dashboard:
1. In the dashboard directory, select the blue plus icon (**New Dashboard**). Or from any dashboard, open the dashboard selector and select **New dashboard**.
2. Provide a name and optional description.
3. Under **Dashboard Type**, choose **Project Dashboard** or **Team Dashboard**, and if needed, select the team.
4. Select **Create**.

If you don't see **New dashboard**, you might not have permissions to create dashboards for the selected team. Switch context to a team where you're a team admin, or request team-admin rights. For help, see [Create or add a team](../../organizations/settings/add-teams.md).

:::image type="content" source="media/dashboards/create-dashboard-project-dialog.png" alt-text="Create a dashboard dialog with name and type selected.":::

## Rename, delete, and automatic refresh

Rename or update settings:
1. Open the dashboard you want to change.
2. Select **More actions** (⋯) > **Dashboard settings**.
3. Change the name, description, or automatic refresh setting, then select **Save**.

Automatic refresh:
- When enabled, dashboards refresh automatically (typically every 5 minutes). Use automatic refresh for near real‑time widgets. Frequent refreshes across many dashboards can increase widget/API activity for large organizations.

Delete a dashboard:
1. Open **Overview** > **Dashboards** to show the dashboard directory.
2. In the directory, either:
    - Hover a dashboard row and open More actions (⋯) > **Delete**, or
    - Open the dashboard, then open **More actions** (⋯) on the dashboard and choose **Delete**.
3. Confirm the delete action in the dialog.

> [!IMPORTANT]
> - To delete a project dashboard, you must be a member of the Project Collection Administrators group.
> - To delete a **team** dashboard, you must have the appropriate team/dashboard permissions (team admin or explicitly granted delete rights).

The following screenshot shows the Delete action entry in the dashboard directory. Use the previous steps to navigate to the directory or the dashboard itself before following the screenshot.

:::image type="content" source="media/dashboards/delete-dashboard.png" alt-text="Delete dashboard option in the dashboard directory." lightbox="media/dashboards/delete-dashboard.png":::

## Add, move, resize, or delete widgets

Widgets display data, charts, and actions on a dashboard.

To edit widgets:
1. Open the dashboard.
2. Select **Edit** to open the widget catalog.
3. Drag a widget onto the canvas to add it.
4. Use the widget toolbar to configure, resize, or remove a widget.
5. Select **Done Editing** to save layout changes.

- Rearrange widgets by dragging tiles to new positions while in edit mode.
- Remove a widget from its menu by selecting **Delete**.

:::image type="content" source="media/dashboards/delete-widget.png" alt-text="A widget's delete option highlighted.":::

> [!TIP]
> Use clear dashboard names and descriptions so people can discover the right dashboard. Group related widgets together and avoid adding too many widgets that refresh frequently.

## Extensibility and automation

Developers can create custom widgets and automate dashboard tasks:

- Create or extend widgets using the Dashboard widget extension model: [Add a dashboard widget](../../extend/develop/add-dashboard-widget.md).
- Manage dashboards programmatically with the Dashboards REST API.

## Troubleshooting

- I can't create a dashboard: Check that you selected the correct team context and that you have team‑admin or project‑level permissions.
- I can't see or edit a dashboard: Verify project membership, team membership, and dashboard permissions (open **More options** > **Security**).
- Widget data is stale or empty: Verify the widget's data source and any required permissions (queries, analytics views, or service connections).
- Automatic refresh not updating: Confirm automatic refresh is enabled and that each widget's source supports refresh; try a manual page refresh.
- Can't delete a project dashboard: You must belong to Project Collection Administrators to delete project dashboards.

For a programmatic view of dashboard permissions or widget ownership, use the Dashboards REST API or check audit logs.

## Best practices

- Keep dashboards focused: create one dashboard per scenario (status, triage, sprint health).
- Limit refresh frequency for dashboards that include expensive widgets or heavy queries.
- Use descriptive names and short descriptions to make dashboards discoverable.
- Share dashboards by adding links in team wiki pages or pinning them in team channels.

## Accessibility

Design dashboards for accessibility:
- Use meaningful text labels for widgets and charts.
- Ensure sufficient color contrast and avoid conveying information by color alone.
- Add textual descriptions where a widget supports them.

## Related content

- [Add widgets to a dashboard](add-widget-to-dashboard.md)
- [Set dashboard permissions](dashboard-permissions.md)
- [Out-of-box widget catalog](widget-catalog.md)
- [Dashboards (API)](/rest/api/azure/devops/dashboard/dashboards)
- [FAQs on Azure DevOps dashboards, charts, and reports](faqs.yml)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=AzureDevOps&category=All%20categories&sortBy=Relevance)

