---
title: Manage and organize your queries in Azure Boards and Azure DevOps
titleSuffix: Azure Boards
description: Learn how to manage your queries by using favorites and folders in Azure Boards and Azure DevOps.
ms.custom: boards-queries, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: BAD9F638-3F26-4FE3-8A7D-F5C0793BE8AC
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 10/27/2025
---

# Manage and organize queries in Azure Boards and Azure DevOps  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019.md](../../includes/version-vs-gt-eq-2019.md)]

You can organize your personal or shared queries by adding query folders. You can then add queries to or move existing queries into those folders. You can create queries and query folders from the web portal or from a supported client, such as Visual Studio Team Explorer.

::: moniker range="azure-devops"

[!INCLUDE [note-new-boards-hub-default-images](../includes/note-new-boards-hub-default-images.md)]

::: moniker-end

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-queries.md)]

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

## Open a query 

[!INCLUDE [temp](../includes/open-queries.md)] 

## Copy, edit, and save a query  

You can copy a query within the same project by selecting a query and saving it with a new name using the **Save as** option.  

To define a query efficiently, start with an existing shared query. The following example shows how to find all closed bugs by modifying the *Active Bugs* shared query that comes with the Agile process template. The examples use the web portal interface. 

#### [Browser](#tab/browser/)

::: moniker range="< azure-devops"  

1. Open a shared query. For example, from the web portal, open the *Active Bugs* or similar flat list query.   

    :::image type="content" source="media/view-run-queries/run-active-bugs.png" alt-text="Screenshot of the query selection.":::

   > [!TIP]  
   > If you work in Visual Studio Team Explorer, open the **Work** page to access your queries and shared queries. If Team Explorer isn't visible, select **View > Team Explorer** from the top level menu.   

1. Edit the query to find closed bugs and then run the query. 
   Use ![Insert new filter line](media/3.png) to insert a clause above the current clause. Use ![Remove this filter line](media/4.png) to delete a clause. Queries automatically scope to the current project. To find work items defined in several projects, see [Query across projects](using-queries.md). 

    :::image type="content" source="media/using-queries-new-vsts-exp.png" alt-text="Screenshot of the query editor.":::

1. Save the query to your **My Queries** folder.  

    :::image type="content" source="media/view-run-queries/save-as-new-exp.png" alt-text="Screenshot of Save As query dialog, new experience.":::
   
   To save a query to the **Shared Queries** folder, you need to be a member of the [Project Administrators group](../../organizations/security/add-users-team-project.md), or have your **Contribute** permissions on the folder set to **Allow**. For more information, see [Set query permissions](set-query-permissions.md).  

::: moniker-end

::: moniker range="azure-devops"

1. Open a shared query. For example, from the web portal, open the *Active Bugs* or similar flat list query.   

    :::image type="content" source="media/view-run-queries/select-active-bugs-new-boards-hubs.png" alt-text="Screenshot of the query selection list.":::

   > [!TIP]  
   > If you work in Visual Studio Team Explorer, open the **Work** page to access your queries and shared queries. If Team Explorer isn't visible, select **View > Team Explorer** from the top level menu.   

1. Edit the query to find closed bugs and then run the query. 
   Use ![Insert new filter line](media/3.png) to insert a clause above the current clause. Use ![Remove this filter line](media/4.png) to delete a clause. Queries automatically scope to the current project. To find work items defined in several projects, see [Query across projects](using-queries.md). 

    :::image type="content" source="media/view-run-queries/edit-query-new-boards-hubs.png" alt-text="Screenshot of edit query dialog.":::

1. Select **Save as** in the more actions ![More actions](../../media/icons/more-actions.png) menu.

    > [!NOTE]
    > If you disable the **New Boards Hubs** feature, the **Save As** selection appears at the top of the page.

1. Save the query to your **My Queries** folder.  

    :::image type="content" source="media/view-run-queries/save-as-new-boards-hubs.png" alt-text="Screenshot of Save As query dialog, new boards hubs experience.":::

   To save a query to the **Shared Queries** folder, you need to be a member of the [Project Administrators group](../../organizations/security/add-users-team-project.md), or have your **Contribute** permissions on the folder set to **Allow**. For more information, see [Set query permissions](set-query-permissions.md). 

::: moniker-end

#### [Visual Studio](#tab/visual-studio/)

> [!IMPORTANT]
> We strongly recommend that everyone uses the [default view](../work-items/view-add-work-items.md?view=azure-devops&preserve-view=true&tabs=visual-studio#view-work-items) instead of this legacy view. This view helps you quickly access a list of work items based on your assignment, following, mentioned, or recent updates. We no longer enhance the legacy view and expect to remove it in a future release of Visual Studio.

To save a query as a new query, open the query results and then from the toolbar select <strong>File > Save *QueryName* As...</strong>.

:::image type="content" source="media/organize-queries/visual-studio-save-query-as.png" alt-text="Screenshot of Visual Studio > File menu save query as selection.":::

Specify the query name and folder location for the query. 

:::image type="content" source="media/organize-queries/visual-studio-save-query-as-dialog.png" alt-text="Screenshot of Visual Studio, Save Query As dialog.":::

To save the query as a `.wiq` file, select the **File** radio button and specify the file location. 

:::image type="content" source="media/organize-queries/visual-studio-save-query-as-wiq-file.png" alt-text="Screenshot of Visual Studio, Save Query As a WIQ file dialog.":::

---

## Rename or delete a query

#### [Browser](#tab/browser/)

From either the **Favorites** or **All** page, select the  :::image type="icon" source="../media/icons/more-actions.png" border="false"::: actions icon of a query to run, edit, rename, or delete the query. 

::: moniker range="< azure-devops"

![Screenshot of new query experience, Favorites page, query context menu.](media/view-run-queries/query-context-menu-favorites-page.png) 

::: moniker-end

::: moniker range="azure-devops"

:::image type="content" source="media/view-run-queries/query-context-menu-new-boards-hubs.png" alt-text="Screenshot of query context menu.":::

::: moniker-end
 

For shared queries, you can also choose to perform one of these tasks: 
- **Add to team queries**: Select the team to add the query as a team favorite
- **Security...**: Set permissions for the query. For more information, see [Set query permissions](set-query-permissions.md).   
- **Add to dashboard**: Adds a Query tile widget to the team dashboard you select. For more information, see [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md). 

#### [Visual Studio](#tab/visual-studio/)

> [!IMPORTANT]
> We strongly recommend that everyone uses the [default view](../work-items/view-add-work-items.md?view=azure-devops&preserve-view=true&tabs=visual-studio#view-work-items) instead of this legacy view. This view helps you quickly access a list of work items based on your assignment, following, mentioned, or recent updates. We no longer enhance the legacy view and expect to remove it in a future release of Visual Studio.

From the **Work Items** page, open the context menu for the query you want to run, edit, rename, or delete and select the corresponding option. 

:::image type="content" source="../media/team-explorer/open-query-from-team-explorer.png" alt-text="Screenshot of Visual Studio, open context menu and choose option.":::

---
 
## Add a query folder and move items into a folder 

> [!TIP]   
> You need **Delete** permissions to rename or move a shared query or folder, and **Contribute** permissions for the folder where you move the query to. To view or set permissions, see [Set permissions on queries and query folders](set-query-permissions.md).

#### [Browser](#tab/browser/)

::: moniker range="< azure-devops"

You add query folders from the **Boards > Queries > All** page. 
 
1. Select **All**. Expand **My Queries** or Shared Queries depending on where you want to add a query folder. 
 
1. To add a folder, select the actions icon for an existing folder or the top container folder, and select **New folder**. 

    :::image type="content" source="media/organize-queries/select-new-folder.png" alt-text="Screenshot of Open Actions menu, choose New folder.":::

1. Enter the name for the folder in the New folder dialog. If you want to change the location of the folder, select it from the Folder drop down menu.  

    :::image type="content" source="media/organize-queries/new-folder-dialog.png" alt-text="Screenshot of new folder dialog.":::

1. To move items into a folder, drag-and-drop a query onto the folder. From the web portal, you can only drag a single query from outside a folder into a folder. 

    Optionally, you can select **More commands** :::image type="icon" source="../media/icons/actions-icon.png" border="false":::   for an existing query, select **Edit**, and then select **Save As**. In the **Save query** as dialog, select the folder you want to save the query in. 

    :::image type="content" source="media/organize-queries/save-query-as-dialog.png" alt-text="Screenshot of Save query as dialog.":::
  
::: moniker-end

::: moniker range="azure-devops"

You add query folders from the **Boards > Queries > All** page. 
 
1. Select **All**. Expand **My Queries** or Shared Queries depending on where you want to add a query folder. 
 
1. To add a folder, select **New folder**. 

    :::image type="content" source="media/view-run-queries/select-new-folder-new-boards-hubs.png" alt-text="Screenshot of New folder selection.":::
    
1. Enter the name for the folder in the New folder dialog. If you want to change the location of the folder, select it from the Folder drop down menu.  

    :::image type="content" source="media/view-run-queries/new-folder-dialog-new-boards-hubs.png" alt-text="Screenshot of new folder dialog.":::

1. To move items into a folder, drag-and-drop a query onto the folder. From the web portal, you can only drag a single query from outside a folder into a folder. 

    Optionally, you can select **More commands** :::image type="icon" source="../media/icons/actions-icon.png" border="false":::   for an existing query, select **Edit**, and then select **Save As**. In the **Save query** as dialog, select the folder you want to save the query in. 
    
    :::image type="content" source="media/view-run-queries/save-as-dialog-new-boards-hubs.png" alt-text="Screenshot of Save query as dialog.":::

::: moniker-end

#### [Visual Studio](#tab/visual-studio/)

> [!IMPORTANT]
> We strongly recommend that everyone uses the [default view](../work-items/view-add-work-items.md?view=azure-devops&preserve-view=true&tabs=visual-studio#view-work-items) instead of this legacy view. This view helps you quickly access a list of work items based on your assignment, following, mentioned, or recent updates. We no longer enhance the legacy view and expect to remove it in a future release of Visual Studio.

All changes you make to your query folder structure in Visual Studio appear in the web portal when you refresh your browser. 

1. From the **Work Items** page, open the context menu for **My Queries**, **Team Queries**, or an existing query folder, and select **New Folder**.  

    :::image type="content" source="media/organize-queries/visual-studio-new-folder.png" alt-text="Screenshot of Visual Studio, open context menu and choose New Folder.":::

    A **New Folder** appears under the area you selected. To rename a folder, select the folder.

1. To move queries into a folder, drag-and-drop a query onto the folder. You can select multiple queries and drag them into a folder or from one folder into another folder.   

---
 

## Save a query as a team favorite

To save a shared query as a team favorite, you must be a member of the team.

You can add a shared query to team favorites. You share queries with your team by adding them to a folder under the **Shared Queries** container. To save a query to a **Shared Queries** folder, get added to the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) or have your [permissions set for a folder under Shared Queries](set-query-permissions.md). 

You can only add shared queries as team favorites if you have [team administrator or project administrator permissions](../../organizations/settings/manage-teams.md). 

::: moniker range="< azure-devops"

1. To save a query as a team favorite, open **More actions** :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: or the :::image type="icon" source="media/22.png" border="false"::: context menu for the query from the **Queries** page. 

1. Select **Add to team favorites**, and then select from the teams listed. Only teams for which you're a member appear in the list.

    :::image type="content" source="media/organize-queries/save-query-team-favorite.png" alt-text="Screenshot of Save query as a team favorite.":::

::: moniker-end

::: moniker range="azure-devops"

1. To save a query as a team favorite, open the **More actions** :::image type="icon" source="../media/icons/more-actions.png" border="false"::: context menu for the query from the **Shared Queries** on the **Queries** page. 

1. Select **Add to team favorites**, and then select from the teams listed. Only teams for which you're a member appear in the list.

    :::image type="content" source="media/organize-queries/save-query-team-favorite-new-boards-hubs.png" alt-text="Screenshot of Save query as a team favorite.":::

::: moniker-end

## Add a query tile to a dashboard  

A query tile displays a count of the work items in a query. You can also quickly open the query from the dashboard. You can add a query tile to a dashboard from the **Queries** page using the following steps, or by following the steps outlined in [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md). 
 
> [!NOTE]   
> You must be a member of the team or have [permissions to edit the dashboard](../../report/dashboards/dashboard-permissions.md).

::: moniker range="< azure-devops"

1. To add a query to a dashboard from the **Queries** page, open the **More actions** menu :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon (or :::image type="icon" source="media/22.png" border="false"::: context icon) for the query.

    :::image type="content" source="media/organize-queries/save-query-dashboard.png" alt-text="Screenshot of More actions menu, select Add to dashboard.":::

1. From the **Select a dashboard** dialog, select the dashboard you want to add the query to. 

    :::image type="content" source="media/organize-queries/select-dashboard.png" alt-text="Screenshot of Select a dashboard dialog.":::

1. Open the dashboard, and verify that the query tile appears. You can configure the query tile to change the default color and to specify the color for the tile based on a conditional rule you specify.  

    :::image type="content" source="media/organize-queries/configure-query-tile-widget.png" alt-text="Screenshot of Configure dialog for query tile widget.":::

::: moniker-end

::: moniker range="azure-devops"

1. To add a query to a dashboard from the **Queries** page, open the **More actions** menu :::image type="icon" source="../media/icons/more-actions.png" border="false"::: for the query.

    :::image type="content" source="media/organize-queries/save-query-dashboard-new-boards-hubs.png" alt-text="Screenshot of More actions menu, select Add to dashboard.":::

1. From the **Select a dashboard** dialog, select the dashboard you want to add the query to. 

    :::image type="content" source="media/organize-queries/select-dashboard.png" alt-text="Screenshot of Select a dashboard dialog.":::

1. Open the dashboard, and verify that the query tile appears. You can configure the query tile to change the default color and to specify the color for the tile based on a conditional rule you specify.  

    :::image type="content" source="media/organize-queries/configure-query-tile-widget.png" alt-text="Screenshot of Configure dialog for query tile widget.":::

::: moniker-end
 
## Related content

- [Query FAQs](query-faqs.yml)  
- [Set query permissions](set-query-permissions.md)  
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)
- [Change project-level permissions](../../organizations/security/change-project-level-permissions.md)
