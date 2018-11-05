---
title: Cumulative flow charts
titleSuffix: Azure DevOps & TFS 
description: Configure and view cumulative flow diagrams to improve your Kanban processes 
ms.custom: dashboards
ms.prod: devops  
ms.technology: devops-analytics  
ms.assetid: 9A16EDA7-6249-49E1-84A3-FE7550028E9F  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013' 
ms.date: 03/23/2018  
---

# Configure a cumulative flow chart

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)] 

::: moniker range=">= tfs-2013 <= tfs-2018" 

You use cumulative flow diagrams (CFD) to monitor the flow of work through a system. Use this topic to learn how to: 

> [!div class="checklist"] 
> * View and configure the built-in Cumulative Flow chart (work tracking datastore)     

For usage guidance, see [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md).

::: moniker-end
  
::: moniker range="vsts" 
You use cumulative flow diagrams (CFD) to monitor the flow of work through a system. There are two CFD charts, the one viewed from the Kanban board and the one you access by adding the CFD widget to your dashboard. 

The CFD widget provides more configuration options than those supported by the default CFD charts shown on the backlog and board pages. With the CFD widget, you can monitor the count of work items as they progressively move through various states which you define. You can configure the CFD chart to monitor the flow of epics, features, user stories, product backlog items, or requirements, depending on the process ([Agile](../../boards/work-items/guidance/agile-process.md), [Scrum](../../boards/work-items/guidance/scrum-process.md), or ([CMMI](../../boards/work-items/guidance/cmmi-process.md)) you've selected.

Use this topic to learn how to: 

> [!div class="checklist"] 
> * Install and configure the Cumulative Flow widget (Analytics service)  
> * View and configure the built-in Cumulative Flow chart (work tracking datastore)     

For usage guidance, see [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md).

::: moniker-end

<!---
A few options are available for you to [configure your chart](#configure) or [configure your CFD widget](#configure-widget).
-->
 
::: moniker range="vsts" 

<a id="configure-widget"></a>
## Configure the CFD widget    

> [!NOTE]   
> **Feature availability**: For Azure DevOps, you can add the [CFD widget](../dashboards/widget-catalog.md#cycle-time-widget) to your dashboard. You need to first install the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). You can then [add the widget(s) to your dashboard](../add-widget-to-dashboard.md). You must be an organization owner or a member of the [Project Collection Administrator group](../../organizations/security/set-project-collection-level-permissions.md) to add extensions.  

You will need to be a team administrator or a member of the Project Administrators group to perform these tasks. See 
[Manage teams and configure team tools](../../organizations/settings/add-team-administrator.md) to get added as a team admin. 

1. If you haven't yet configured your Kanban board, do that now. Define the [columns](../../boards/boards/add-columns.md) and [swimlanes](../../boards/boards/expedite-work.md) that support your workflow processes.  

2. If you want fixed scope CFD charts, make sure that you've [defined the sprint iterations](../../boards/sprints/define-sprints.md) for those sprints of interest. 

3. To add a CFD chart to your team dashboard, see [Add a widget to a dashboard](../add-widget-to-dashboard.md). Add the Cumulative Flow Diagram widget. 

	![Cumulative flow diagram widget](_img/cfd-choose-widget.png)  

4. Choose the ![ ](../_img/icons/actions-icon.png) actions icon and select the **Configure** option to open the configuration dialog. Modify the title, and then select the team, backlog level, swimlanes, and time period you want to monitor.  

	<img src="_img/cfd-configure.png" alt="Configure CFD chart" style="border: 2px solid #C3C3C3;" />    

5. For a continuous flow diagram, select Rolling period and specify the number of days you want to view on the chart.  

	Or, for a fixed scope view, choose and specify the Start date. Choose this view if your team employs a Scrumban process or follows a standard sprint process.  

	The main difference between these two types of CFD charts is that the fixed scope CFD will provide information (in most cases) of scope change.   

6. Choose the color. You can distinguish the CFD for different teams by choosing different colors.

7. Choose **Save** when done. The following image shows an example CFD chart showing 30 days of data. 
   
	<img src="_img/cfd-exampe-rolling-30-days.png" alt="Example CFD chart, rolling 30 days" style="border: 2px solid #C3C3C3;" />    

::: moniker-end

::: moniker range=">= tfs-2013"

## View the built-in cumulative flow chart 

[!INCLUDE [temp](../../_shared/new-navigation.md)]  

::: moniker range="vsts"  

You open the built-in (work tracking datastore) CFD for your product or portfolio backlog by choosing the image in the upper-right corner of your **Boards>Boards** page. 

> [!div class="mx-imgBorder"]  
> ![Open CFD, new nav](_img/open-cfd-new-nav.png)

::: moniker-end    

::: moniker range=">= tfs-2013 <= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end  


# [Previous navigation](#tab/previous-nav)
You open the built-in (work tracking datastore) CFD for your product or portfolio backlog by choosing the image in the upper-right corner of your **Work>Backlogs** page. 

![Open CFD, prev nav](/azure/devops/boards/boards/_img/kanban-basics-open-cfd.png)

--- 

The CFD shows the count of items in each Kanban column for the past 30 weeks or less. From this chart you can gain an idea of the amount of work in progress and lead time. Work in progress counts unfinished requirements. Lead time indicates the amount of time it takes to complete a requirement once work has started. 

<img src="../../boards/boards/_img/ALM_KB_CumulativeFlow.png" alt="Kanban board, cumulative flow diagram" style="border: 2px solid #C3C3C3;" />   



<a id="configure"></a>
## Configure the built-in cumulative flow chart   

Each team can set their preferences for the built-in cumulative flow charts.  

For the CFD chart to reflect useful information, you'll want to update the status of work items to reflect progress as it occurs. The quickest way to make these updates is through your [Kanban board](../../boards/boards/kanban-basics.md). 

::: moniker range="vsts"  

1. Open the [backlog level for which you want to configure](../../boards/boards/kanban-quickstart.md) and then open the common configuration dialog. Choose the ![ ](../../boards/_img/icons/team-settings-gear-icon.png) gear icon.  

	> [!div class="mx-imgBorder"]  
	> ![Open Board settings](_img/cfd/open-cfd-settings-new-nav.png)

	If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban boards and CFD charts.  

2. Choose **Cumulative flow** and specify the team's preferences.  

	<img src="_img/cfd-configure-common-settings.png" alt="Kanban board, Common configuration dialog, Cumulative flow" style="border: 2px solid #C3C3C3;" />  

::: moniker-end    

::: moniker range=">= tfs-2013 <= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end  

# [Previous navigation](#tab/previous-nav)

1. Open the backlog level for which you want to configure and then open the common configuration dialog. Choose the ![ ](../../boards/_img/icons/team-settings-gear-icon.png) gear icon.  

	<img src="../../boards/boards/_img/kanban-card-customize-open-settings.png" alt="Kanban board, open common configuration settings" style="border: 2px solid #C3C3C3;" />  

	If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the team Kanban boards and CFD charts.  

2. Choose **Cumulative flow** and specify the team's preferences.  

	<img src="_img/cfd-configure-common-settings.png" alt="Kanban board, Common configuration dialog, Cumulative flow" style="border: 2px solid #C3C3C3;" />  

---



## Try this next
 
> [!div class="nextstepaction"]
> [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md) or
> [Kanban basics](../../boards/boards/kanban-basics.md)




  