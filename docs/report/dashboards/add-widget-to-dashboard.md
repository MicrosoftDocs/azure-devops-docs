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
ms.date: 11/02/2023
---


# Add widgets to a dashboard

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Widgets smartly format data to provide access to easily consumable data. You add widgets to your team dashboards to gain visibility into the status and trends occurring as you develop your software project. 

Each widget provides access to a chart, user-configurable information, or a set of links that open a feature or function. 
You can add one or more charts or widgets to your dashboard. Up to 200 widgets total. You add several widgets at a time simply by selecting each one. See [Manage dashboards](dashboards.md#manage) to determine the permissions you need to add and remove widgets from a dashboard.  

[!INCLUDE [temp](../includes/dashboard-prerequisites.md)]  

::: moniker range=">= azure-devops-2019"

> [!NOTE]  
> Widgets specific to a service are disabled if the service they depend on has been disabled. For example, if **Boards** is disabled, New Work item and all work tracking Analytics widgets are disabled and won't appear in the [widget catalog](widget-catalog.md). If Analytics is disabled or not installed, then all Analytics widgets are disabled. 
> 
> To re-enable a service, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md). For Analytics, see [enable or install Analytics](analytics-extension.md)]. 

::: moniker-end

## Open a dashboard 

All dashboards are associated with a team. You must be a team administrator, project administrator, or a team member with permissions to modify a dashboard. 

::: moniker range=">= azure-devops-2019"

1. Open a web browser, connect to your project, and select **Overview** > **Dashboards**. The dashboard directory page opens.  

	:::image type="content" source="media/dashboards/open-dashboards-vert.png" alt-text="Screenshot of web portal, open Dashboards.":::  

	If you need to switch to a different project, select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to [browse all projects](../../project/navigation/go-to-project-repo.md).  

2. Select the dashboard you want to modify. 

::: moniker-end

  

## Add a widget   

::: moniker range=">= azure-devops-2019"

To add widgets to the dashboard, select :::image type="icon" source="media/icons/edit-icon.png" border="false"::: **Edit**. 

The [widget catalog](widget-catalog.md) automatically opens. Add all the widgets that you want and drag their tiles into the sequence you want. 

When you're finished with your additions, select  **Done editing** to exit dashboard editing. The widget catalog closes. You can then [configure the widgets](#configure) as needed.

> [!TIP]   
> When you're in dashboard edit mode, you can remove, rearrange, and configure widgets, as well as add new widgets. Once you leave edit mode, the widget tiles remain locked, reducing the chances of accidentally moving a widget.

To remove a widget, select ![actions icon](../../media/icons/actions-icon.png) **More actions** and select **Delete** from the menu.  

:::image type="content" source="media/dashboards/delete-widget.png" alt-text="Screenshot of delete widget from a dashboard.":::

::: moniker-end



Or, you can drag and drop a widget from the catalog onto the dashboard.

<a id="add-analytics-widget"></a>

::: moniker range=">= azure-devops-2019"

## Add an Analytics widget

This example shows how to add the Velocity widget available from Analytics to a dashboard. 

1. Select ![edit icon](media/icons/edit-icon.png) **Edit** to modify a dashboard. The [widget catalog](widget-catalog.md) opens.  

2. In the right pane search box, enter **Velocity** to quickly locate the Velocity widget within the widget catalog.  

	:::image type="content" source="media/add-widgets/velocity-in-widget-catalog.png" alt-text="Screenshot of Velocity widget in widget catalog.":::  

3. Select the widget, then **Add** to add it to the dashboard. Or, you can drag-and-drop it onto the dashboard. 

4. [Configure the widget](#configure-a-widget). 

::: moniker-end

<a id="configure"></a>

## Configure a widget  

Most widgets support configuration, which might include specifying the title, setting the widget size, and other widget-specific variables.

To configure a widget, add the widget to a dashboard, select open the ![actions icon](../../media/icons/actions-icon.png) menu, and select **Configure**.  

:::image type="content" source="media/add-widgets/configure-widget.png" alt-text="Screenshot of opened dashboard dialog.":::

::: moniker range=">= azure-devops-2020"

For more information about configuring widgets, see the following articles: 
- [Burndown/burnup](configure-burndown-burnup-widgets.md)
- [Cumulative flow](cumulative-flow.md)
- [Lead time or cycle time](cycle-time-and-lead-time.md)
- [Velocity widget](team-velocity.md)
- [Test trend results](configure-test-results-trend.md)

::: moniker-end

::: moniker range="azure-devops-2019"

For more information about configuring widgets, see the following articles: 
- [Burndown/burnup](configure-burndown-burnup-widgets.md)
- [Cumulative flow](cumulative-flow.md)
- [Lead time or cycle time](cycle-time-and-lead-time.md)
- [Velocity widget](team-velocity.md)

::: moniker-end

<a id="move-delete"></a>

## Move or delete a widget 

To move a widget, you need to enable the dashboard edit mode. To delete a widget, select the delete option provided from the widget&#39;s **More actions** menu. 

::: moniker range=">= azure-devops-2019"
Select :::image type="icon" source="media/icons/edit-icon.png" border="false"::: **Edit** to modify your dashboard. You can then add widgets or drag tiles to reorder their sequence on the dashboard. 

To remove a widget, select the ![actions icon](../../media/icons/actions-icon.png) actions icon and then **Delete** it.  

:::image type="content" source="media/dashboards/delete-widget.png" alt-text="Screenshot of delete widget from a dashboard."::: 

When you're finished with your changes, select  **Done Editing** to exit dashboard editing.
  
::: moniker-end






<a id="copy"></a>

## Copy a widget

You can copy a widget to the same dashboard or to another team dashboard. If you want to move widgets you configured to another dashboard, here's how you do it. Before you begin, add the dashboard that you want to copy or move the widget to. Once you copy the widget, you can delete it from the current dashboard.  

::: moniker range=">= azure-devops-2019"
To copy a configured widget to another team dashboard, select the ![Actions icon](../../media/icons/actions-icon.png) actions icon and select **Copy to dashboard** and then the dashboard to copy it to. 

:::image type="content" source="media/add-widgets/copy-to-dashboard.png" alt-text="Screenshot of Copying a widget to another dashboard."::: 

::: moniker-end



## Widget size

Some widgets are presized and can't be changed. Others are configurable through their configuration dialog. 

For example, the Chart for work items widget allows you to select an area size ranging from 2 x 2  to 4 x 4 (tiles).  

:::image type="content" source="media/add-widget-size.png" alt-text="Screenshot of change widget size function.":::

## Extensibility and Marketplace widgets

In addition to the widgets described in the Widget catalog, you can:
- Add widgets from the [Marketplace](https://marketplace.visualstudio.com/search?term=widget&target=AzureDevOps&category=All%20categories&sortBy=Relevance).
- Create your own widgets using the [Widget REST APIs](../../extend/develop/add-dashboard-widget.md).

## Disabled Marketplace widgets 

If your organization owner or project collection administrator disables a marketplace widget, the following notification displays: 

:::image type="content" source="media/widget-catalog-disabled-widget.png" alt-text="Screenshot of Disabled widget extension notification.":::

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


