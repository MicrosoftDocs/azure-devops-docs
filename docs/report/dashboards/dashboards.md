---
title: Add, Rename, Delete, and Manage Team Dashboards
titleSuffix: Azure DevOps  
description: See how to create, edit, and delete Azure DevOps dashboards. Find out how to set dashboard permissions and add widgets to dashboards to view progress and trends.
ms.custom: "dashboards" 
ms.subservice: azure-devops-analytics
ms.assetid: B080CEFA-4D94-44B2-99E3-0E3E85616D04  
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.date: 05/07/2025
# customer intent: As a team member, I want to see how to create, edit, and delete Azure DevOps dashboards so that I can view and share information about my projects and teams, such as progress and status updates.
---

# Quickstart: Add, rename, and delete dashboards in Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this quickstart, you create, edit, and delete dashboards in Azure DevOps.

You can use dashboards to offer guidance and keep your team in sync. Configurable team or project dashboards provide visibility across your organization about progress, trends, and the status of work.

Dashboards also offer easy-to-read, real-time information that's easy to access. At a glance, you can use a dashboard to make informed decisions without having to drill down into other parts of your project.

## Prerequisites

[!INCLUDE [Dashboard prerequisites](../includes/dashboard-prerequisites.md)]

## Project and team dashboards

All dashboards are associated with either a team or a project. When you add a dashboard, you can choose to make it a project dashboard or one that's specific to a team.

- Use project dashboards to display information or status updates about a project. Also use a project dashboard when you want to control who can edit the dashboard.
- Use team dashboards to focus on information that's specific to a team.

> [!NOTE]  
> The person who creates a project dashboard owns that dashboard. The owner can set permissions to specify who can edit the dashboard. Members of a project can view all dashboards.
> 
> A team dashboard is owned by the team administrator. Any member of the team can edit a team dashboard.
> 
> All widgets that are available to team dashboards are available for project dashboards. For team-specific widgets, if you can't select a team through the widget, the default project team is used in the widget.

When a project is created, a default team and default team dashboard are created. The dashboard is labeled *Overview*. You can customize this dashboard by adding widgets. For more information, see [Add, move, or delete a widget](#add-move-or-delete-a-widget), later in this article.

## Open the dashboard directory 

In the dashboard directory, you can browse all dashboards. If a dashboard is a team dashboard, you can see which team it belongs to.

To open the dashboard directory, open a web browser and connect to your project. Then select **Overview** > **Dashboards**. 

:::image type="content" source="media/dashboards/open-dashboards-vert.png" alt-text="Screenshot of the dashboard directory. On the side, Dashboards is highlighted. In the main pane, three dashboards are listed.":::

This page lists dashboards in the following order: 

- The dashboard you last visited
- Dashboards in your favorites list
- All dashboards of teams that you belong to
- All dashboards defined for the project in alphabetical order

Select the :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: filter icon to filter the list by keyword or team. Keywords apply to dashboard titles, descriptions, and team names.

:::image type="content" source="media/dashboards/filter-directory.png" alt-text="Screenshot of the dashboard directory. The filter icon is highlighted.":::

If you need to switch to a different project, select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to [browse all projects](../../project/navigation/go-to-project-repo.md).  

## Select a dashboard 

In the dashboard directory, you can select a dashboard from the list.

From an open dashboard, you can select a dashboard from the dashboard selector:

1. To open the selector, select the name of the open dashboard.
1. In the selector list, select the dashboard that you want to open.

:::image type="content" source="media/dashboards/open-dashboard-selector.png" alt-text="Screenshot of a dashboard. The dashboard name is highlighted, and the selector is open. A dashboard in the selector list is highlighted.":::

To return to the dashboard directory, open the dashboard selector, and then select **Browse all dashboards**. 

:::image type="content" source="media/dashboards/browse-all-dashboards.png" alt-text="Screenshot of a dashboard, with the dashboard selector open. In the selector, Browse all dashboards is highlighted.":::

### Add a dashboard to your favorites list

To mark a dashboard as a favorite, take one of the following steps:

- In the dashboard directory, select the star in the dashboard's row.

- In the dashboard selector, hover over the dashboard, and then select the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon.

  :::image type="content" source="media/dashboards/favorite-dashboard.png" alt-text="Screenshot of the dashboard selector. Next to the name of a dashboard, a star is visible and is highlighted.":::

If you mark a dashboard as a favorite, it appears toward the top of the dashboard directory. It also appears under **Favorites** in the dashboard selector and in your [personal favorites list](../../project/navigation/set-favorites.md).

## Add a dashboard 

You can add a new dashboard as needed to support your team's needs. You can also edit and rename any existing dashboards associated with your team.

> [!NOTE]
> There's a limit of 500 dashboards per project. You receive an error message if you try to create a dashboard beyond that limit. To resolve the error, delete unused dashboards.

1. In the dashboard directory, select :::image type="icon" source="media/icons/blue-plus-icon.png" border="false"::: **New Dashboard**. Or, when viewing a dashboard, open the dashboard selector, and then select :::image type="icon" source="media/icons/blue-plus-icon.png" border="false"::: **New dashboard**.

   :::image type="content" source="media/dashboards/open-new-dashboard-dialog.png" alt-text="Screenshot of a dashboard. Next to its name, the down arrow is highlighted. In the expanded selector, New dashboard is highlighted.":::

   If you don't see the :::image type="icon" source="media/icons/blue-plus-icon.png" border="false"::: **New dashboard** option, you're not a team admin for the currently selected team, or you don't have permissions to add and edit dashboards. Either [switch the context to your team](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json), or request to be added as a [team admin](../../organizations/settings/add-team-administrator.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json).

1. Enter the name of the dashboard and a description.

1. Under **Dashboard Type**, select **Project Dashboard** to create a project dashboard. To create a team dashboard, select **Team Dashboard**, and then select a team. For information about creating a team in Azure DevOps, see [Create or add a team](../../organizations/settings/add-teams.md).

   :::image type="content" source="media/dashboards/create-dashboard-project-dialog.png" alt-text="Screenshot of the Create a dashboard dialog. The Name and Description fields are populated. For the type, Project Dashboard is highlighted.":::

1. Select **Create** to create your dashboard. If you return to the dashboard directory, you see the new dashboard in the list.

For information about adding widgets to a dashboard, see [Add, move, or delete a widget](#add-move-or-delete-a-widget), later in this article.

<a id="manage">  </a> 

## Rename and delete dashboards and enable automatic refreshing  

You can rename or delete a dashboard. And when you turn on the automatic refresh setting, the dashboard is automatically refreshed every five minutes.  

> [!NOTE]  
> To delete a project dashboard, you must be a member of the [Project Collection Administrators](../../organizations/security/change-organization-collection-level-permissions.md) group.  

- To rename a dashboard, modify its description, or change its automatic refresh setting, take the following steps:
  1. Open the dashboard.
  1. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions**, and then select :::image type="icon" source="media/icons/gear-icon.png" border="false"::: **Dashboard settings**.
  1. Change the name, description, or automatic refresh setting, and then select **Save**.

- To delete a dashboard, open the dashboard directory, select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More options** for the dashboard, and then select **Delete**.  

  :::image type="content" source="media/dashboards/delete-dashboard.png" alt-text="Screenshot of the dashboard directory. The More options icon for a dashboard is highlighted. In its shortcut menu, Delete is highlighted.":::

- To set permissions for a dashboard, open the dashboard directory, select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More options** for the dashboard, and then select **Security**. For more information, see [Set dashboard permissions](dashboard-permissions.md).

## Add, move, or delete a widget

You can customize a dashboard by adding widgets. Widgets provide access to features and functions. For more information about widgets, see [Out-of-box widget catalog](widget-catalog.md).

When you add widgets to a dashboard, you can configure and resize each widget as needed. You can also move widgets around a dashboard to place them where you want them, and you can delete widgets.

To add, move, or delete a widget, open the dashboard, and then select :::image type="icon" source="media/icons/edit-icon.png" border="false"::: **Edit**. The widget catalog opens.

- To add a widget, drag a widget from the catalog onto your dashboard.

- To rearrange widgets, drag the widget tiles to reorder their sequence on the dashboard.

- To remove a widget, select :::image type="icon" source="media/icons/delete_icon.png" border="false"::: **Delete**.

  :::image type="content" source="media/dashboards/delete-widget.png" alt-text="Screenshot of a query tile widget. The Delete icon is highlighted. In its shortcut menu, Delete is highlighted.":::

When you finish making changes, select **Done Editing** to exit dashboard edit mode.

> [!TIP]   
> When you're in dashboard edit mode, you can add, remove, rearrange, and configure widgets. When you leave edit mode, the widget tiles remain locked, reducing the chance of accidentally moving a widget.

## Extensibility 

By using the REST API service, you can [create a dashboard widget](../../extend/develop/add-dashboard-widget.md). For more information about the REST APIs for dashboards and widgets, see [Dashboards (API)](/rest/api/azure/devops/dashboard/dashboards).
  
## Related content

- [Add widgets to a dashboard](add-widget-to-dashboard.md)
- [FAQs on Azure DevOps dashboards, charts, and reports](faqs.yml)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=AzureDevOps&category=All%20categories&sortBy=Relevance)

