---
title: Copy a dashboard
titleSuffix: Azure DevOps  
description: Copy a project or team dashboard 
ms.custom: "dashboards" 
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: 'azure-devops'
ms.date: 05/07/2021
---

# Copy a dashboard 

[!INCLUDE [temp](../../includes/version-vsts-only.md)] 

intro 


<a id="permissions">  </a>

## Prerequisites  

- You must be a member of a project. If you don't have a project yet, [create one](../../organizations/accounts/set-up-vs.md). 
- If you haven't been added as a project member, [get added now](../../organizations/accounts/add-organization-users.md).
- Anyone with access to a project, including [stakeholders](../../organizations/security/get-started-stakeholder.md), can view dashboards.
- To add, edit, or manage a team dashboard, you must have **Basic** access or greater and be a [team admin](../../organizations/settings/add-team-administrator.md), a project admin, or have [dashboard permissions](../dashboards/dashboard-permissions.md). In general, you need to be a team member for the currently selected team to edit dashboards.


## Open the dashboard 

All dashboards are associated with either a team or a project. From the **Overview>Dashboards** page, you can browse all dashboards and see which team they belong to, or if they are project dashboard.  

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
 
<a id="choose-dashboard" />

## Select a dashboard 

1. Choose a dashboard from the directory list, or from the selector. To return to the dashboard directory, choose the **Browse all dashboards** option. 
 
	> [!div class="mx-imgBorder"]
	> ![Dashboards, Browse all dashboards option](media/dashboards/browse-all-dashboards.png)  
	 
1. To favorite a dashboard, hover over the dashboard and choose the ![star icon](../../media/icons/icon-favorite-star.png).  

	> [!div class="mx-imgBorder"]
	> ![Dashboards, Favorite a dashboard](media/dashboards/favorite-dashboard.png)  

	Favoriting a dashboard will cause it to appear under **My Favorites dashboards** list on the dashboards directory. Also, it will appear towards the top in the **Dashboards** selector and in your [personal Favorites list](../../project/navigation/set-favorites.md). . 
 
## Copy the dashboard 

1. From the Dashboards page, choose **Copy Dashboard**.  

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
 
  

## Try this next 

> [!div class="nextstepaction"]
> [Add a widget to a dashboard](add-widget-to-dashboard.md)
  
## Related articles

- [Add a team](../../organizations/settings/add-teams.md)
- [Widget catalog](widget-catalog.md)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)

 