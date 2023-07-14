---
title: Manage and organize your queries in Azure Boards and Azure DevOps
titleSuffix: Azure Boards  
description: Learn how to manage your queries by using favorites and folders in Azure Boards and Azure DevOps.
ms.custom: boards-queries, contperf-fy23 
ms.service: azure-devops-boards
ms.assetid: BAD9F638-3F26-4FE3-8A7D-F5C0793BE8AC  
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 02/02/2023
---


# Manage and organize queries in Azure Boards and Azure DevOps  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019.md](../../includes/version-vs-gt-eq-2019.md)]

Organize your personal or shared queries by adding a query folder. You can then add queries to or move existing queries into those folders. You can create queries and query folders from the web portal or from a supported client, such as Visual Studio Team Explorer.

> [!NOTE]  
> To create and manage queries in Visual Studio 2019, you need to [Set the Work Items experience](../work-items/set-work-item-experience-vs.md) to the legacy option. Also, you can perform bulk drag-and-drop of queries into query folders from Visual Studio but not from the web portal. 

 
[!INCLUDE [temp](../includes/prerequisites-queries.md)]

## Open a query 

[!INCLUDE [temp](../includes/open-queries.md)] 



<a id="flat-list-query"/>
<a id="save" />

## Run, edit, and save a query  

The easiest way to define a query is to start with an existing shared query. 
The following example shows how to find all closed bugs by modifying the 
*Active Bugs* shared query provided with the Agile process template. Examples are based on the user interface provided through the web portal. 


#### [Browser](#tab/browser/)

::: moniker range=">= azure-devops-2019"  

1. Open a shared query. For example, from the web portal, open the *Active Bugs* or similar flat list query.   

   > [!div class="mx-imgBorder"]  
   > ![Run Active bugs query](media/view-run-queries/run-active-bugs.png)  

   > [!TIP]  
   > If you're working in Visual Studio Team Explorer, open the **Work** page to access your queries and shared queries. If Team Explorer isn't visible, choose **View>Team Explorer** from the top level menu.   

1. Edit the query to find closed bugs and then run the query. 
   Use ![Insert new filter line](media/3.png) to insert a clause above the current clause. Use ![Remove this filter line](media/4.png) to delete a clause.  Queries are automatically scoped to the current project. To find work items defined in several projects, see [Query across projects](using-queries.md#across-projects). 

   > [!div class="mx-imgBorder"]
   > ![Web portal, Queries page, new queries experience, Editor view of a Flat List Query](media/using-queries-new-vsts-exp.png) 

2. Save the query to your **My Queries** folder.  

   > [!div class="mx-imgBorder"]  
   > ![Save As query dialog, new experience](media/view-run-queries/save-as-new-exp.png)  

   To save a query to the **Shared Queries** folder, you need to be a member of the [Project Administrators group](../../organizations/security/add-users-team-project.md), or have your **Contribute** permissions on the folder set to **Allow**. For more information, see [Set query permissions](set-query-permissions.md).  

::: moniker-end

::: moniker range="tfs-2018"  

1. Open a shared query. For example, from the web portal, open the *Active Bugs* or similar flat list query.   

   ![Web portal, Boards>Queries, Open Shared queries, Active Bugs](media/using-queries-active-bugs-ts.png)  

   > [!TIP]  
   > If you're working in Visual Studio Team Explorer, open the **Work** page to access your queries and shared queries. If Team Explorer isn't visible, choose **View>Team Explorer** from the top level menu.   

1. Edit the query to find closed bugs and then run the query. 
   Use ![Insert new filter line](media/3.png) to insert a clause above the current clause. Use ![Remove this filter line](media/4.png) to delete a clause.  Queries are automatically scoped to the current project. To find work items defined in several projects, see [Query across projects](using-queries.md#across-projects).      
	
   ![Web portal, Queries page, Editor view of a Flat List Query](media/query-active-bugs-editor-vso.png)  

2. Save the query to your **My Queries** folder.  
	
   ![Save Query As](media/6.png)  

   To save a query to the **Shared Queries** folder, you need to be a member of the [Project Administrators group](../../organizations/security/add-users-team-project.md), or have your **Contribute** permissions on the folder set to **Allow**. For more information, see [Set query permissions](set-query-permissions.md).  

::: moniker-end  


#### [Visual Studio](#tab/visual-studio/)

To save a query as a new query, open the query results and then from the toolbar choose <strong>File>Save *QueryName* As...</strong>.

:::image type="content" source="media/organize-queries/visual-studio-save-query-as.png" alt-text="Screenshot, Visual Studio, File menu, save query as.":::

Specify the file name and folder location to use to save the query. 

:::image type="content" source="media/organize-queries/visual-studio-save-query-as-dialog.png" alt-text="Screenshot, Visual Studio, Save Query As dialog.":::


To save the query as a `.wiq` file, choose the **File** radio button and specify the file location. 

:::image type="content" source="media/organize-queries/visual-studio-save-query-as-wiq-file.png" alt-text="Screenshot, Visual Studio, Save Query As a WIQ file dialog.":::



* * * 


<a id="view-rename-delete" />

## Rename or delete a query



#### [Browser](#tab/browser/)

::: moniker range=">= azure-devops-2019"

From either the **Favorites** or **All** page, choose the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon of a query to run, edit, rename, or delete the query. 

![New query experience, Favorites page, query context menu](media/view-run-queries/query-context-menu-favorites-page.png)  

For shared queries, you can also choose to do one of these tasks: 
- **Add to team queries**: Select the team to add the query as a team favorite
- **Security...**: to set permissions for the query. For more information, see [Set query permissions](set-query-permissions.md).   
- **Add to dashboard**: Adds a Query tile widget to the team dashboard you select. For more information, see [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md). 

::: moniker-end

::: moniker range="tfs-2018"  

Choose the :::image type="icon" source="../media/icons/context_menu.png" border="false"::: context menu icon of a query to edit, rename, or delete the query.

![Web portal, Boards>Queries, Open Shared queries, Active Bugs](media/using-queries-active-bugs-ts.png)

::: moniker-end


#### [Visual Studio](#tab/visual-studio/)


From the **Work Items** page, open the context menu for the query you want to run, edit, rename, or delete and choose the corresponding option. 

:::image type="content" source="../media/team-explorer/open-query-from-team-explorer.png" alt-text="Screenshot, Visual Studio, open context menu and choose option.":::


* * * 
 
## Add a query folder and move items into a folder 

> [!TIP]   
> You need **Delete** permissions to rename or move a shared query or folder, and **Contribute** permissions for the folder where you move the query to. To view or set permissions, see [Set permissions on queries and query folders](set-query-permissions.md).



#### [Browser](#tab/browser/)

::: moniker range=">= azure-devops-2019"

You add query folders from the **Boards>Queries>All** page. 
 
1. Choose **All**. Expand **My Queries** or Shared Queries depending on where you want to add a query folder. 
 
1. To add a folder, choose the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon for an existing folder or the top container folder, and choose **New folder**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Actions menu, choose New folder](media/organize-queries/select-new-folder.png)

2. Enter the name for the folder in the New folder dialog. If you want to change the location of the folder, select it from the Folder drop down menu.  

	<img src="media/organize-queries/new-folder-dialog.png" alt="Enter the name and location of the folder." />

3. To move items into a folder, drag-and-drop a query onto the folder. From the web portal, you can only drag a single query from outside a folder into a folder. 

	Optionally, you can choose **More commands** :::image type="icon" source="../media/icons/actions-icon.png" border="false":::   for an existing query, choose **Edit**, and then choose **Save As**. In the Save query as dialog, choose the folder you want to save the query in. 

	<img src="media/organize-queries/save-query-as-dialog.png" alt="Save query as dialog" />
  
::: moniker-end


::: moniker range="tfs-2018"

You add query folders from the **Boards>Queries** page.

1. To add a folder, choose the :::image type="icon" source="../media/icons/context_menu.png" border="false"::: context menu for an existing folder or the top container folder and select **New query folder**. 

	Enter the name for the folder in the New query folder dialog.  

	![New query folder link on queries context menu](media/set-query-perm-new-folder.png)   

1. To move items into a folder, drag-and-drop a query onto the folder.  From the web portal, you can only drag a single query from outside a folder into a folder. 

	Optionally, you can choose the :::image type="icon" source="../media/icons/context_menu.png" border="false"::: context icon for an existing query and choose **Rename**. In the Rename query dialog, select the folder you want to save the query in. 

	![Rename query dialog](media/organize-queries/rename-query-old-experience.png) 

::: moniker-end


#### [Visual Studio](#tab/visual-studio/)

> [!NOTE]  
> To create and manage queries in Visual Studio 2019, you need to [Set the Work Items experience](../work-items/set-work-item-experience-vs.md) to the legacy option.

All changes you make to your query folder structure in Visual Studio appear in the web portal by refreshing your browser. 


1. From the **Work Items** page, open the context menu for **My Queries**, **Team Queries**, or an existing query folder, and choose **New Folder**.  

	:::image type="content" source="media/organize-queries/visual-studio-new-folder.png" alt-text="Screenshot, Visual Studio, open context menu and choose New Folder.":::

	A **New Folder** is added under the area you selected. Select the folder to rename it. 

1. To move queries into a folder, drag-and-drop a query onto the folder.  You can select multiple queries and drag them into a folder or from one folder into another folder.   

* * * 
 


<a id="favorite-query">  </a>


## Save a query as a team favorite

To save a shared query as a team favorite, you must be a member of the team.

To add a query to a dashboard, open the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon (or :::image type="icon" source="media/22.png" border="false"::: context icon) menu for the query and [add it to a specific dashboard](../../report/dashboards/dashboards.md) or as a team favorite. 

Share queries with your team by adding them to a folder under the **Shared Queries** container. To save a query to a **Shared Queries** folder, get added to the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) or have your [permissions set for a folder under Shared Queries](set-query-permissions.md). 

You can only add shared queries to dashboards or as team favorites, and only if you have [team administrator or project administrator permissions](../../organizations/settings/manage-teams.md). 

1. To save a query as a team favorite, open :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **More actions** or :::image type="icon" source="media/22.png" border="false"::: the context menu for the query from  the **Queries** page. 

1. Choose **Add to team favorites**, and then select from the teams listed. Only teams for which you're a member are listed.

	:::image type="content" source="media/organize-queries/save-query-team-favorite.png" alt-text="Screenshot of Save query as a team favorite.":::


<a id="add-query-dashboard">  </a>

## Add a query tile to a dashboard  

A query tile displays a count of the work items in a query. You can also quickly open the query from the dashboard. You can add a query tile to a dashboard from the **Queries** page using the following steps, or by following the steps outlined in [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md). 
 
> [!NOTE]   
> You can only add a shared query to a dashboard. And, to add or edit a widget of a team dashboard, you must be a member of the team or be [granted permissions to edit the dashboard](../../report/dashboards/dashboard-permissions.md).

1. To add a query to a dashboard from the **Queries** page, open the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon (or :::image type="icon" source="media/22.png" border="false"::: context icon) menu for the query.

	:::image type="content" source="media/organize-queries/save-query-dashboard.png" alt-text="Screenshot of More actions menu, select Add to dashboard.":::

1. From the **Select a dashboard** dialog, choose the dashboard you want to add the query to. 

	:::image type="content" source="media/organize-queries/select-dashboard.png" alt-text="Screenshot of Select a dashboard dialog.":::

1. Open the dashboard, and verify the query tile was added. You can configure the query tile to change the default color and to specify the color for the tile based on a conditional rule you specify.  

	:::image type="content" source="media/organize-queries/configure-query-tile-widget.png" alt-text="Screenshot of Configure dialog for query tile widget.":::
 
## Related articles

- [Query FAQs](query-faqs.yml)  
- [Set query permissions](set-query-permissions.md)  
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)
- [Change project-level permissions](../../organizations/security/change-project-level-permissions.md) 

