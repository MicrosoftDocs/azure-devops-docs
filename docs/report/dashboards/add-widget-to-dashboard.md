---
title: Add a widget to a team dashboard 
titleSuffix: Azure DevOps
description: Learn how to select and configure widgets that you add to a team dashboard in Azure DevOps.
ms.custom: dashboards
ms.subservice: azure-devops-analytics
ms.assetid: 0869DB42-6983-49A2-855C-2678CFFF4967
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.date: 04/04/2022
---


# Add widgets to a dashboard

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Widgets smartly format data to provide access to easily consumable data. You add widgets to your team dashboards to gain visibility into the status and trends occurring as you develop your software project. 

Each widget provides access to a chart, user-configurable information, or a set of links that open a feature or function. 
You can add one or more charts or widgets to your dashboard. Up to 200 widgets total. You add several widgets at a time simply by selecting each one. See [Manage dashboards](dashboards.md#manage) to determine the permissions you need to add and remove widgets from a dashboard.  

[!INCLUDE [temp](../includes/dashboard-prerequisites.md)]  

::: moniker range=">= azure-devops-2019"

> [!NOTE]  
> Widgets specific to a service are disabled if the service they depend on has been disabled. For example, if **Boards** is disabled, New Work item and all work tracking Analytics widgets are disabled and won't appear in the widget catalog. If Analytics is disabled or not installed, then all Analytics widgets are disabled. 
> 
> To re-enable a service, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md). For Analytics, see [enable or install Analytics](analytics-extension.md)]. 

::: moniker-end


## Open a dashboard 

All dashboards are associated with a team. You need to be a team administrator, project administrator, or a team member with permissions to modify a dashboard. 

::: moniker range=">= azure-devops-2019"

1. Open a web browser, connect to your project, and select **Overview>Dashboards**. The dashboard directory page opens.  

	> [!div class="mx-imgBorder"]  
	> ![Web portal, open Dashboards](media/dashboards/open-dashboards-vert.png)

	If you need to switch to a different project, select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to [browse all projects](../../project/navigation/go-to-project-repo.md).  

1. Select the dashboard you want to modify. 

::: moniker-end

::: moniker range="tfs-2018"  
Open a web browser, connect to your project, and select **Dashboards**. 

![Dashboards directory, previous navigation](media/dashboards-go-to.png) 

Select the team whose dashboards you want to view. To switch your team focus, see [Switch project or team focus](../../project/navigation/go-to-project-repo.md).

Select the name of the dashboard to modify it. 

For example, here we select to view the Work in Progress dashboard. 

> [!div class="mx-imgBorder"]  
> ![Dashboards, Select a team dashboard](media/dashboards/choose-dashboard.png)  

If you need to switch to a different project, select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to [browse all projects](../../project/navigation/go-to-project-repo.md).  
::: moniker-end  


## Add a widget   

::: moniker range=">= azure-devops-2019"

To add widgets to the dashboard, select :::image type="icon" source="media/icons/edit-icon.png" border="false"::: **Edit**. 

The widget catalog will automatically open.  Add all the widgets that you want and drag their tiles into the sequence you want. 

When you're finished with your additions, select  **Done Editing** to exit dashboard editing. The widget catalog will close. You can then [configure the widgets](#configure) as needed.

> [!TIP]   
> When you're in dashboard edit mode, you can remove, rearrange, and configure widgets, as well as add new widgets. Once you leave edit mode, the widget tiles remain locked, reducing the chances of accidentally moving a widget.

To remove a widget, select ![actions icon](../../media/icons/actions-icon.png) **More actions** and select **Delete** from the menu.  

> [!div class="mx-imgBorder"]  
> ![Delete a widget from a dashboard](media/dashboards/delete-widget.png) 

::: moniker-end

::: moniker range="tfs-2018"  
Select ![Edit dashboard icon](media/edit-dashboard-icon.png) to modify a dashboard. Select ![add a widget icon](media/add-widget-icon.png) to add a widget to the dashboard.  

The [widget catalog](widget-catalog.md) describes all available widgets, many of which are scoped to the selected team context.  

::: moniker-end

Or, you can drag and drop a widget from the catalog onto the dashboard.

<a id="add-analytics-widget" />

::: moniker range=">= azure-devops-2019"

## Add an Analytics widget

This example shows how to add the Velocity widget available from Analytics to a dashboard. 

1. Select ![edit icon](media/icons/edit-icon.png) **Edit** to modify a dashboard. The widget catalog opens.  

4. In the right pane search box, type **Velocity** to quickly locate the Velocity widget within the widget catalog.  

	> [!div class="mx-imgBorder"]  
	> ![Velocity widget in widget catalog](media/add-widgets/velocity-in-widget-catalog.png)

5. Select the widget, then **Add** to add it to the dashboard. Or, you can drag-and-drop it onto the dashboard. 

6. Next, configure the widget. For details, see the following articles: 
	- [Configure burndown or burnup](configure-burndown-burnup-widgets.md)
	- [Configure cumulative flow](cumulative-flow.md)  
	- [Configure lead/cycle time](cycle-time-and-lead-time.md)  
	- [Configure velocity](team-velocity.md)  
	- [Configure test trend results](configure-test-results-trend.md)  

::: moniker-end


<a id="configure" />

## Configure a widget  

Most widgets support configuration, which may include specifying the title, setting the widget size, and other widget-specific variables.

To configure a widget, add the widget to a dashboard, select open the ![actions icon](../../media/icons/actions-icon.png) menu, and select **Configure**.  

> [!div class="mx-imgBorder"]  
> ![Open the create a dashboard dialog](media/add-widgets/configure-widget.png) 


::: moniker range=">= azure-devops-2020"

Additional information is provided to configure the following widgets: 
- [Burndown/burnup](configure-burndown-burnup-widgets.md)
- [Cumulative flow](cumulative-flow.md)
- [Lead time or cycle time](cycle-time-and-lead-time.md)
- [Velocity widget](team-velocity.md)
- [Test trend results](configure-test-results-trend.md)

::: moniker-end

::: moniker range="azure-devops-2019"

Additional information is provided to configure the following widgets: 
- [Burndown/burnup](configure-burndown-burnup-widgets.md)
- [Cumulative flow](cumulative-flow.md)
- [Lead time or cycle time](cycle-time-and-lead-time.md)
- [Velocity widget](team-velocity.md)

::: moniker-end


<a id="move-delete" />

## Move or delete a widget 

To move a widget, you need to enable the dashboard edit mode. To delete a widget, select the delete option provided from the widget&#39;s **More actions** menu. 


::: moniker range=">= azure-devops-2019"
Select :::image type="icon" source="media/icons/edit-icon.png" border="false"::: **Edit** to modify your dashboard. You can then add widgets or drag tiles to reorder their sequence on the dashboard. 

To remove a widget, select the ![actions icon](../../media/icons/actions-icon.png) actions icon and select the **Delete** option from the menu.  

> [!div class="mx-imgBorder"]  
> ![Delete a widget from a dashboard](media/dashboards/delete-widget.png) 

When you're finished with your changes, select  **Done Editing** to exit dashboard editing.
  
::: moniker-end


::: moniker range="tfs-2018"  
Select ![Edit dashboard icon](media/edit-dashboard-icon.png) to modify your dashboard. You can then drag tiles to reorder their sequence on the dashboard. 

To remove a widget, select the ![actions icon](../../media/icons/actions-icon.png) actions icon and select the **Delete** option from the menu.  

> [!div class="mx-imgBorder"]  
> ![Delete a widget from a dashboard](media/dashboards/delete-widget.png) 

::: moniker-end


::: moniker range="tfs-2018"  

When you're finished with your changes, select ![Exit edit-dashboard-mode icon](media/exit-edit-dashboard-mode-icon.png) to exit dashboard editing.

::: moniker-end

<a id="copy" />

## Copy a widget

You can copy a widget to the same dashboard or to another team dashboard. If you want to move widgets you've configured to another dashboard, here's how you do it. Before you begin, add the dashboard you want to copy or move the widget to. Once you've copied the widget, you can delete it from the current dashboard.  


::: moniker range=">= azure-devops-2019"
To copy a configured widget to another team dashboard, select the ![Actions icon](../../media/icons/actions-icon.png) actions icon and select **Copy to dashboard** and then the dashboard to copy it to. 

> [!div class="mx-imgBorder"]  
> ![Copy a widget to another dashboard](media/add-widgets/copy-to-dashboard.png) 

::: moniker-end

::: moniker range="tfs-2018"

To copy a configured widget to another team dashboard, select 
the ![Actions icon](../../media/icons/actions-icon.png) actions icon and select **Add to dashboard** and then the dashboard to copy it to. 

<img src="media/dashboards-copy-widget.png" alt="Copy a widget to another team dashboard" />  

::: moniker-end


## Widget size

Some widgets are pre-sized and can't be changed. Others are configurable through their configuration dialog. 

For example, the Chart for work items widget allows you to select an area size ranging from 2 x 2  to 4 x 4 (tiles).  

<img src="media/add-widget-size.png" alt="Change widget size" />  

## Extensibility and Marketplace widgets

In addition to the widgets described in the Widget catalog, you can:
- Add widgets from the [Marketplace](https://marketplace.visualstudio.com/search?term=widget&target=AzureDevOps&category=All%20categories&sortBy=Relevance).
- Create your own widgets using the [Widget REST APIs](../../extend/develop/add-dashboard-widget.md).

## Disabled Marketplace widgets 

If your organization owner or project collection administrator disables a marketplace widget, you'll see the following image: 

<img src="media/widget-catalog-disabled-widget.png" alt="Disabled widget extension notification" />   

To regain access to it, request your admin to reinstate or reinstall the widget. 


## Next steps

> [!div class="nextstepaction"]
> [Review the widget catalog](widget-catalog.md)
> or
> [Review Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)
 
## Related articles

::: moniker range=">= azure-devops-2019"
- [FAQs on Azure DevOps dashboards, charts, and reports](faqs.yml)
- [Analytics-based widgets](../dashboards/analytics-widgets.md)
- [What is Analytics?](../powerbi/what-is-analytics.md)
- [Burndown guidance](burndown-guidance.md)
- [Cumulative flow & lead/cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md)
::: moniker-end

::: moniker range="tfs-2018"
- [FAQs on Azure DevOps dashboards, charts, and reports](faqs.yml)
- [Burndown guidance](burndown-guidance.md)
- [Cumulative flow & lead/cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md)
::: moniker-end


