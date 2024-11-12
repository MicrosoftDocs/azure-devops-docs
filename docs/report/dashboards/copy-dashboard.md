---
title: Copy a dashboard
titleSuffix: Azure DevOps  
description: Learn how to copy a project or team dashboard in Azure DevOps. 
ms.custom: "dashboards, cross-project" 
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '>= azure-devops-2022'
ms.date: 11/22/2023
---

# Copy a dashboard 

[!INCLUDE [version-gt-eq-2022](../../includes/version-gt-eq-2022.md)] 

You can create a new dashboard by copying the widgets from an existing one and adjusting them for a different team or project. This way, you don’t have to start from scratch when you want to make a similar dashboard. To copy a dashboard, you begin with the source dashboard and then select the destination team and the destination project. The copied dashboard has the same widgets as the source dashboard, but you can configure them according to the team you chose.

To create a dashboard for a team or project, see [Add, rename, and delete dashboards](dashboards.md). To add a team or project, see [Add a team](../../organizations/settings/add-teams.md) or [Create a project](../../organizations/projects/create-project.md).

[!INCLUDE [feature-added-2022-1](../../includes/feature-added-2022-1.md)]

<a id="permissions">  </a>

## Prerequisites  

- **Project membership:** Be a [member of the project](../../organizations/accounts/add-organization-users.md).
- **Access:** 
  - Anyone with access to a project, including [Stakeholders](../../organizations/security/get-started-stakeholder.md), can view dashboards. However, to view queries or work items displayed in a dashboard widget, have permissions to view the query and work items. For more information, see [Set permissions on queries and query folders](../../boards/queries/set-query-permissions.md) and [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md).
  - Have at least **Basic** access.
- **Permissions:**
  - Be a member of the team, a [team administrator](../../organizations/settings/add-team-administrator.md), a project administrator, or have [Edit dashboard permissions](../dashboards/dashboard-permissions.md).
  - Have Edit permissions for a shared queries folder, to copy queries to.

## Open the dashboard you want to copy

Do the following steps to open the source dashboard.

1. Sign in to your project (```https://dev.azure.com/{Your_Organization}/{Your_Project}```).
2. Select **Overview** > **Dashboards**. The dashboard directory page opens. 

	:::image type="content" source="media/dashboards/open-dashboards-vert.png" alt-text="Screenshot of Dashboards Directory.":::

	Dashboards get listed in the following order: 
	- Your last visited dashboard
	- Your favorited dashboards
	- All dashboards of teams that you belong to
	- All dashboards defined for the project in alphabetical order. 

	Select the :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: filter icon to filter the list by keyword or team. Keywords apply to dashboard titles, descriptions, and team names.

    :::image type="content" source="media/dashboards/filter-directory.png" alt-text="Screenshot of Filter the dashboard directory."::: 

3.  (Optional) To switch to a different project, select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to [browse all projects](../../project/navigation/go-to-project-repo.md).  

4. (Optional) If you open a dashboard, you can select a different dashboard from the directory list, or from the selector. To return to the dashboard directory, select **Browse all dashboards**. 

    :::image type="content" source="media/dashboards/browse-all-dashboards.png" alt-text="Screenshot of Dashboard selector, Browse all dashboards option.":::
 
## Copy the dashboard 

Do the following steps to copy the source dashboards and create your new dashboard with it.

1. From the Dashboards page, select :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **More actions** and then select **+ Copy Dashboard**.  

	:::image type="content" source="media/copy-dashboard/dashboard-copy-dashboard-selected.png" alt-text="Screenshot of Create a dashboard dialog.":::

2. Enter a **Name** and **Description** for the new dashboard. Make sure you specify a unique name for the dashboard. To copy the dashboard as a team dashboard, select **Team Dashboard** and then select the **Project** and the **Team**. To copy the dashboard as a project dashboard, select **Project Dashboard** and then the **Project**. 

	Here we choose to copy the Fabrikam Fiber project - Fabrikam Team Bug Activity dashboard to the Design Agile project, Design Agile team dashboard. 


	:::image type="content" source="media/copy-dashboard/new-dashboard-dialog.png" alt-text="New dashboard dialog, copy dashboard for a different team.":::

	Check the **Select folder to copy dashboard queries** checkbox to choose the folder into which dashboard queries get copied. Make sure to select a folder where you have permissions to contribute queries. When you copy dashboards to a different project, this checkbox is automatically selected and requires you to select a folder in the project. 
  
3. Select **Create**.

	The page updates to reflect the new dashboard. The widgets and layout appear the same as the copied dashboard.  

	In the background, a folder with the name of the new dashboard gets created in **Shared Queries**. All the queries for the new dashboard get copied to that folder. Query names remain the same. Widgets with a team configuration get updated with the new team. Widgets with a team configuration that are copied from a team dashboard to a project dashboard retain the original configuration.

	:::image type="content" source="media/copy-dashboard/shared-query-folder-created.png" alt-text="Screenshot of Shared Queries folder created with copy dashboard experience.":::

4. (Optional) Open each query and widget in the new dashboard, as needed, to verify or modify the name and configuration. Dashboard widget changes automatically update.  

## Next steps

> [!div class="nextstepaction"]
> [Add a widget to a dashboard](add-widget-to-dashboard.md)
  
## Related articles

- [Add a team](../../organizations/settings/add-teams.md)
- [Widget catalog](widget-catalog.md)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)
 