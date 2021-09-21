---
title: Add, rename, delete, and manage team dashboards
titleSuffix: Azure DevOps  
description: View progress and trends by adding widgets and creating dashboards in Azure DevOps.  
ms.custom: "dashboards" 
ms.technology: devops-analytics
ms.assetid: B080CEFA-4D94-44B2-99E3-0E3E85616D04  
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2015'
ms.date: 09/21/2021
---

# Add, rename, and delete dashboards in Azure DevOps

[!INCLUDE [temp](../includes/version-azure-devops-all.md)]

::: moniker range=">= azure-devops-2020"
Share progress and status with your team using configurable team or project dashboards. Dashboards provide easy-to-read, easy access, real-time information. At a glance, you can make informed decisions without having to drill down into other parts of your project. 
::: moniker-end

::: moniker range="<= azure-devops-2019"
Share progress and status with your team using configurable team dashboards. Dashboards provide easy-to-read, easy access, real-time information. At a glance, you can make informed decisions without having to drill down into other parts of your project. 
::: moniker-end

 
When a project is first created, a default team and default team dashboard is created labeled *Overview*. You can customize this dashboard by adding widgets. Each widget provides access to one or more features or functions. To learn more about each widget, see [Widget catalog](widget-catalog.md). 

::: moniker range="tfs-2015"

> [!NOTE]   
> Multiple team dashboards and the [widget catalog](widget-catalog.md) are available from TFS 2015.1 or later versions. For TFS 2015 and earlier versions, you don't have access to multiple team dashboards. Instead, your home page serves as a [single team dashboard](team-dashboard.md). For information on SharePoint dashboards, see [Project portal dashboards](/previous-versions/azure/devops/report/sharepoint-dashboards/project-portal-dashboards).
::: moniker-end

::: moniker range=">= azure-devops-2020"

## Project and team dashboards

When you add a dashboard, you can choose to make it a project dashboard or one specific to a team. Use project dashboards to display information or status about the project or when you want to control who can edit the dashboard. Use team dashboards to focus information specific to a team. 

> [!NOTE]  
> Project dashboards are owned by the person that created the dashboard. The owner can set permissions as to who can edit the dashboard. Team dashboards are owned by team administrators and can be edited by any member of the team. All dashboards can be viewed by members of the project. All widgets available to team dashboards are available for project dashboards. For team-specific widgets, if you aren't able to select a team through the widget, then the team defaults to the default project team.

::: moniker-end

::: moniker range="<= tfs-2017"
> [!NOTE]   
> For information on SharePoint dashboards, see [Project portal dashboards](/previous-versions/azure/devops/report/sharepoint-dashboards/project-portal-dashboards).
::: moniker-end

[!INCLUDE [temp](../includes/dashboard-prerequisites.md)]  
 

## Open Dashboards 

::: moniker range=">= azure-devops-2020"

All dashboards are associated with either a team or a project. From the **Overview>Dashboards** page, you can browse all dashboards and see which team they belong to, or if they are project dashboard.  
::: moniker-end
::: moniker range="<= azure-devops-2019"  

All dashboards are associated with a team. From the **Overview>Dashboards** page, you can browse all dashboards and see which team they belong to.  

::: moniker-end

::: moniker range=">= azure-devops-2019"  

Open a web browser, connect to your project, and choose **Overview>Dashboards**. The dashboard directory page opens. 

> [!div class="mx-imgBorder"]  
> ![Dashboards Directory, new navigation](media/dashboards/open-dashboards-vert.png)

It lists dashboards in the following order: 
- Your last visited dashboard
- Your favorited dashboards
- All dashboards of teams that you belong to
- All dashboards defined for the project in alphabetical order. 

Choose the :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: filter icon to filter the list by keyword or team. Keywords apply to dashboard titles, descriptions, and team names.

> [!div class="mx-imgBorder"]  
> ![Filter the dashboard directory](media/dashboards/filter-directory.png)   

If you need to switch to a different project, choose the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to [browse all projects](../../project/navigation/go-to-project-repo.md).  

::: moniker-end  


::: moniker range=">= tfs-2015 <= tfs-2018"  
Open a web browser, connect to your project, and choose **Dashboards**. 

![Dashboards directory, previous navigation](media/dashboards-go-to.png) 

If you need to switch to a different project, choose the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to [browse all projects](../../project/navigation/go-to-project-repo.md).  

::: moniker-end



<a id="choose-dashboard" />

## Select a dashboard 

::: moniker range=">= azure-devops-2019"

1. Choose a dashboard from the directory list, or from the selector. To return to the dashboard directory, choose the **Browse all dashboards** option. 
 
	> [!div class="mx-imgBorder"]
	> ![Dashboards, Browse all dashboards option](media/dashboards/browse-all-dashboards.png)  
	 
1. To favorite a dashboard, hover over the dashboard and choose the ![star icon](../../media/icons/icon-favorite-star.png).  

	> [!div class="mx-imgBorder"]
	> ![Dashboards, Favorite a dashboard](media/dashboards/favorite-dashboard.png)  

	Favoriting a dashboard will cause it to appear under **My Favorites dashboards** list on the dashboards directory. Also, it will appear towards the top in the **Dashboards** selector and in your [personal Favorites list](../../project/navigation/set-favorites.md). 

::: moniker-end


::: moniker range=">= tfs-2015  <= tfs-2018"  

1. Select the team whose dashboards you want to view. To switch your team focus, see [Switch project or team](../../project/navigation/go-to-project-repo.md#switch-team-context).

2. From **Dashboards**, choose the name of the dashboard to view it. 

	For example, here we choose to view the Work in Progress dashboard. 

	> [!div class="mx-imgBorder"]  
	> ![Dashboards, Choose a team dashboard](media/dashboards/choose-dashboard.png)  

::: moniker-end  


## Add a dashboard 

Add a new dashboard as needed to support your team's needs. You can also edit and rename any existing dashboards associated with your team.

::: moniker range=">= azure-devops-2020"

1. From the Dashboards directory, choose **New Dashboard**. Or, when viewing a dashboard, open the selector and choose the :::image type="icon" source="media/icons/blue-plus-icon.png" border="false"::: **New Dashboard** option. 

	> [!div class="mx-imgBorder"]  
	> ![Open the create a dashboard dialog](media/dashboards/open-new-dashboard-dialog.png)  

	If you don't see the :::image type="icon" source="media/icons/blue-plus-icon.png" border="false"::: **New Dashboard** option, then you're not a team admin for the currently selected team, or you don't have permissions to add and edit dashboards. Either [switch the context to your team](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json), or request you be added as a [team admin](../../organizations/settings/add-team-administrator.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json). 

2. Enter the name of the dashboard and other information you want to capture. 

	Here we choose to create a Project dashboard. To create a team dashboard, choose **Team Dashboard** and then select a team. To add a team, see [Add a team](../../organizations/settings/add-teams.md). 
	> [!div class="mx-imgBorder"]  
	> ![Create a Project dashboard.](media/dashboards/create-dashboard-project-dialog.png)  

	Choose **Save**. 

3.  The widget catalog opens. You can add one or more widgets to the dashboard. You can then configure and resize each widget as needed. 

4.	You can move the widgets around the dashboard to place them where you want them. 

5.  When you're done making changes, choose **Done Editing**. 

::: moniker-end

::: moniker range="azure-devops-2019"

1. From the Dashboards directory, choose **New Dashboard**. Or, when viewing a dashboard, open the selector and choose the :::image type="icon" source="media/icons/blue-plus-icon.png" border="false"::: **New Dashboard** option. 

	> [!div class="mx-imgBorder"]  
	> ![Open the create a dashboard dialog](media/dashboards/open-new-dashboard-dialog.png)  

	If you don't see the :::image type="icon" source="media/icons/blue-plus-icon.png" border="false"::: **New Dashboard** option, then you're not a team admin for the currently selected team, or you don't have permissions to add and edit dashboards. Either [switch the context to your team](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json), or request you be added as a [team admin](../../organizations/settings/add-team-administrator.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json). 

2. Enter the name of the dashboard and other information you want to capture. 

	> [!div class="mx-imgBorder"]  
	> ![Create a dashboard dialog](media/dashboards/create-dashboard-bug-status.png)  

	Choose **Save**. 

3.  The widget catalog opens. You can add one or more widgets to the dashboard. You can then configure and resize each widget as needed. 

4.	You can move the widgets around the dashboard to place them where you want them. 

5.  When you're done making changes, choose **Done Editing**. 

::: moniker-end

::: moniker range=">= tfs-2015  <= tfs-2018"  

From **Dashboards**, choose :::image type="icon" source="../../boards/media/icons/green_plus_icon.png" border="false"::: **New Dashboard** and enter a dashboard name. 

![Add and name a dashboard](media/dashboards-new-ts.png) 

If you don't see :::image type="icon" source="../../boards/media/icons/green_plus_icon.png" border="false"::: **Edit** icon, then you're not a team admin for the currently selected team, or you don't have permissions to add and edit dashboards. Either [switch the context to your team](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/breadcrumb/dashboards/toc.json), or request you be added as a [team admin](../../organizations/settings/add-team-administrator.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/breadcrumb/dashboards/toc.json). 

With the dashboard selected, you can add [widgets and charts to the dashboard](add-widget-to-dashboard.md). Or, you can [add charts to a team dashboard from the Work, Build, or Test pages](add-charts-to-dashboard.md).
::: moniker-end

<a id="manage">  </a> 

## Rename, delete, and enable auto-refresh  

You can rename or delete a dashboard. When you enable auto-refresh, the dashboard automatically updates every 5 minutes.  

::: moniker range=">= azure-devops-2020"  
> [!NOTE]  
> To delete a project dashboard, you must be a member of the [Project Collection Administrators group](../../organizations/security/set-project-collection-level-permissions.md).  
::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"  
> [!NOTE]  
> You can configure the auto-refresh setting for each dashboard for TFS 2015.2 and later versions. For TFS 2017.1 and later versions, you can [set dashboard permissions](dashboard-permissions.md). 
::: moniker-end


::: moniker range=">= azure-devops-2019"

- To rename a dashboard, modify its description, or change its automatic refresh setting, open the dashboard, choose the ![gear icon](media/icons/gear-icon.png) gear icon, and change the field options shown. Save your changes. 

- To delete a dashboard, open the Dashboards directory, choose  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **More Actions** for the dashboard, and choose **Delete**.  

	> [!div class="mx-imgBorder"]
	> ![Delete a dashboard](media/dashboards/delete-dashboard.png)  

- To set permissions for a dashboard, choose the **Security** option. For details, see [Set dashboard permissions](dashboard-permissions.md).
::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"  
1. To manage dashboards, choose the ![configure icon](media/icons/configure-icon.png) wrench icon.

	![Open Manage dashboards dialog](media/dashboards-configure-ts.png) 

2. Drag and drop the dashboards into the sequence you want them to appear.  

	![Manage dashboards dialog](media/manage-dashboards-ts.png) 

3. (Optional) Select the Auto-refresh checkbox when you want the dashboard to refresh every five minutes. 
 
4. To delete a dashboard, choose the :::image type="icon" source="media/icons/delete_icon.png" border="false"::: delete icon.

5. Choose Save to save your changes. 

You can also [manage dashboard permissions](dashboard-permissions.md).   
::: moniker-end

::: moniker range="tfs-2015"
1. To manage dashboards, choose the :::image type="icon" source="../../media/icons/admin-gear-icon.png" border="false"::: gear icon.
 
	![Open Manage dashboards dialog](media/dashboards-open-manage-dashboards-tfs.png) 

2. Drag and drop the dashboards into the sequence you want them to appear.  

	![Manage dashboards dialog](media/manage-dashboards.png)   

3. (Optional) Select the Auto-refresh checkbox when you want the dashboard to refresh every five minutes. The Auto-refresh feature requires TFS 2015.2 or later version.   

4. To delete a dashboard, choose the :::image type="icon" source="media/icons/delete_icon.png" border="false"::: delete icon.

5. Choose **Save** to save your changes. 
::: moniker-end


## Move or delete a widget 

Just as you have to be a team admin, a project admin, or have the necessary permissions to add items to a dashboard, you must have the [necessary permissions](#permissions) to remove items.  

> [!TIP]   
> When you're in dashboard edit mode, you can remove, rearrange, and configure widgets, as well as add new widgets. Once you leave edit mode, the widget tiles remain locked, reducing the chances of accidentally moving a widget.  

::: moniker range=">= azure-devops-2019"
Choose :::image type="icon" source="media/icons/edit-icon.png" border="false"::: **Edit** to modify your dashboard. 

You can now add widgets or drag tiles to reorder their sequence on the dashboard. 

To remove a widget, choose ![actions icon](../../media/icons/actions-icon.png) **More actions** and select **Delete** .  

> [!div class="mx-imgBorder"]  
> ![Delete a widget from a dashboard](media/dashboards/delete-widget.png) 

When you're finished with your changes, choose **Done Editing** to exit dashboard edit mode.
::: moniker-end

::: moniker range=">= tfs-2015  <= tfs-2018"  
Choose ![Edit dashboard icon](media/edit-dashboard-icon.png) to modify your dashboard. You can then drag tiles to reorder their sequence on the dashboard. 

You can now add widgets or drag tiles to reorder their sequence on the dashboard. 

To remove a widget, choose the widget's ![Trash icon](media/dashboard-trash-icon.png) or ![Delete icon](media/dashboard-delete-icon.png) delete icons. 

When you're finished with your changes, choose ![Exit edit-dashboard-mode icon](media/exit-edit-dashboard-mode-icon.png) to exit dashboard editing.

::: moniker-end

## Extensibility 

Using the REST API service, you can [create a dashboard widget](../../extend/develop/add-dashboard-widget.md). To learn more about the REST APIs for dashboards and widgets, see [Dashboards (API)](/rest/api/azure/devops/dashboard/dashboards).


## Try this next 

As you can see, you can use team dashboards to provide guidance and keep your team in sync, providing visibility across your org about status, trends, and progress. 

> [!div class="nextstepaction"]
> [Add a widget to a dashboard](add-widget-to-dashboard.md)
  
## Related articles

- [Add a team](../../organizations/settings/add-teams.md)
- [Widget catalog](widget-catalog.md)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)


