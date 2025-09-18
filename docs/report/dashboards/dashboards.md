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
ms.date: 09/18/2025
# customer intent: As a team member, I want to learn how to create, edit, and delete Azure DevOps dashboards so that I can view and share information about my projects and teams, such as progress and status updates.
---

# Quickstart: Add, rename, and delete dashboards in Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This quickstart shows how to create, edit, rename, and delete dashboards in Azure DevOps. It also covers setting permissions, adding widgets, and a few troubleshooting tips to resolve common problems.

What you'll learn:
- Create team and project dashboards.
- Add, configure, move, resize, and remove widgets.
- Set dashboard permissions and sharing options.
- Troubleshoot common dashboard and widget issues.

Quick steps:
1. Open **Overview** > **Dashboards** in your project.
2. Select **New dashboard** to create a team or project dashboard.
3. Use **Edit** to open the widget catalog, drag widgets onto the canvas, then select **Done Editing**.
4. Rename or change refresh settings from **More options** > **Dashboard settings**.
5. Set permissions from **More options** > **Security**.

[!INCLUDE [enable-mcp-server](../../boards/includes/enable-mcp-server.md)]

## Prerequisites

[!INCLUDE [Dashboard prerequisites](../includes/dashboard-prerequisites.md)]

## Project and team dashboards

Dashboards are scoped to either a team or a project.

- Project dashboards surface information at the project level. Use them when you want central control over who can edit dashboards.
- Team dashboards surface information tailored to a team and are typically editable by team members.

> [!NOTE]
> - The user who creates a project dashboard is recorded as its owner and can set permissions for editors. Project dashboard deletion requires membership in the Project Collection Administrators group.
> - Team dashboards are owned by the team administrator; team members can usually edit team dashboards depending on team settings.
> - If a widget is team-scoped and it doesn't offer a team selector, the dashboard uses the project's default team.

When a project is created, Azure DevOps also creates a default team and a default team dashboard named *Overview*. Customize the dashboard by [adding widgets](#add-move-resize-or-delete-widgets).

## Dashboard directory (browse dashboards)

Open the dashboard directory to browse and manage dashboards for the current project:

1. In your project, select **Overview** > **Dashboards**.
2. Use the filter icon to search dashboards by title, description, or team.
3. Use the dashboard selector (top-left) to switch dashboards or to select **Browse all dashboards**.

:::image type="content" source="media/dashboards/open-dashboards-vert.png" alt-text="Screenshot of the dashboard directory. On the side, Dashboards is highlighted. In the main pane, three dashboards are listed.":::

This listing orders dashboards as:
- The dashboard you last visited
- Dashboards in your favorites list
- Dashboards of teams you belong to
- All project dashboards alphabetically

## Select and favorite a dashboard

To open a dashboard, select it from the directory or use the dashboard selector while viewing another dashboard. To add a dashboard to your favorites:

- Select the star in the dashboard row in the directory, or
- Hover over a dashboard in the selector and select the star icon.

Favorited dashboards appear near the top of the directory and in your personal favorites list.

:::image type="content" source="media/dashboards/favorite-dashboard.png" alt-text="Screenshot of the dashboard selector with a favorite star highlighted.":::

## Add a dashboard

You can add a dashboard at any time (subject to project limits).

> [!NOTE]
> There is a limit of 500 dashboards per project. If you reach the limit, delete unused dashboards or consolidate widgets into fewer dashboards.

Steps to create a dashboard
1. In the dashboard directory, select the blue plus icon (**New Dashboard**). Or from any dashboard, open the dashboard selector and select **New dashboard**.
2. Provide a name and optional description.
3. Under **Dashboard Type**, choose **Project Dashboard** or **Team Dashboard** and, if needed, select the team.
4. Select **Create**.

If you don't see **New Dashboard**, you might not have permissions to create dashboards for the selected team. Switch the context to a team where you're a team admin, or request team admin rights. For information about teams, see [Create or add a team](../../organizations/settings/add-teams.md).

:::image type="content" source="media/dashboards/create-dashboard-project-dialog.png" alt-text="Create a dashboard dialog with name and type selected.":::

## Rename, delete, and automatic refresh

Rename or update settings
1. Open the dashboard.
2. Select **More actions** > **Dashboard settings**.
3. Change the name, description, or automatic refresh setting, then select **Save**.

Automatic refresh
- When enabled, dashboards refresh automatically (normally every 5 minutes). Use this for near real-time widgets. Note that heavy refresh activity may affect widget/API quotas for large organizations.

Delete a dashboard
- To delete a project dashboard you must be a member of the Project Collection Administrators group. Team dashboards can be deleted by users who have the appropriate team/dashboard permissions.

:::image type="content" source="media/dashboards/delete-dashboard.png" alt-text="Delete dashboard option in the dashboard directory." lightbox="media/dashboards/delete-dashboard.png":::

## Add, move, resize, or delete widgets

Widgets are configurable tiles that show data, charts, and actions.

To edit widgets:
1. Open the dashboard.
2. Select **Edit** to open the widget catalog.
3. Drag a widget onto the canvas to add it.
4. Use the widget toolbar to configure, resize, or remove a widget.
5. Select **Done Editing** to save layout changes.

- To rearrange widgets, drag tiles to new positions while in edit mode.
- To remove a widget, use the widget's menu and select **Delete**.

:::image type="content" source="media/dashboards/delete-widget.png" alt-text="A widget's delete option highlighted.":::

> [!TIP]
> Use clear dashboard names and descriptions so people can discover the right dashboard. Group related widgets together and avoid adding too many widgets that refresh frequently.

## Extensibility and automation

Developers can create custom widgets and automate dashboard operations:

- Create or extend widgets using the Dashboard widget extension model: [Add a dashboard widget](../../extend/develop/add-dashboard-widget.md).
- Manage dashboards programmatically with the Dashboards REST API.

## Troubleshooting

- I can't create a dashboard: Check that you have the correct team context and team-admin or project-level permissions.
- I can't see or edit a dashboard: Confirm your project membership, team membership, and dashboard permissions (**More options** > **Security**).
- Widget data is stale or empty: Verify the widget's data source and any required permissions for the data (queries, analytics views, or service connections).
- Automatic refresh not updating: Confirm automatic refresh is enabled and that widget sources support refresh; consider manually refreshing the page.
- Can't delete a project dashboard: You must be a member of Project Collection Administrators to delete project-level dashboards.

If you need a precise programmatic view of dashboard permissions or widget ownership, use the dashboards REST API or audit logs.

## Best practices

- Keep dashboards focused: one dashboard per scenario (status, triage, sprint health).
- Limit refresh frequency for dashboards that have expensive widgets or heavy data queries.
- Use descriptive names and short descriptions to make dashboards discoverable.
- Share dashboards by adding links in team wiki pages or pinning them in team channels.

## Accessibility

Design dashboards with accessibility in mind:
- Use meaningful text labels for widgets and charts.
- Ensure color contrast and avoid conveying information by color alone.
- Add textual descriptions where a widget supports it.

## Related content

- [Add widgets to a dashboard](add-widget-to-dashboard.md)
- [Set dashboard permissions](dashboard-permissions.md)
- [Out-of-box widget catalog](widget-catalog.md)
- [Dashboards (API)](/rest/api/azure/devops/dashboard/dashboards)
- [FAQs on Azure DevOps dashboards, charts, and reports](faqs.yml)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=AzureDevOps&category=All%20categories&sortBy=Relevance)

