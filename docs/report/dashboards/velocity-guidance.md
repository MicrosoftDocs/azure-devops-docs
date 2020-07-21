---
title: Velocity metrics and usage guidance
titleSuffix: Azure DevOps 
description: Guidance for working with velocity charts generated for an Azure DevOps team or project 
ms.custom: dashboards
ms.technology: devops-analytics  
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 07/14/2020
---

# Velocity metrics and usage guidance  

[!INCLUDE [temp](../includes/version-azure-devops-all.md)]
 
Velocity metrics provide useful information to support the following team and product management activities:  
- Sprint planning  
- Forecasting future sprints and the backlog items that a team can complete   
- A guide for determining how well the team estimates and meets their planned commitments 

::: moniker range=">= azure-devops-2019"

## Velocity chart types

::: moniker-end


::: moniker range=">= azure-devops-2020"

You have a choice of Velocity charts: the in-context Velocity chart you access from a Backlogs page and the Velocity widget you add to a dashboard. With both these charts, you can quickly determine the following information:  
- **Planned** - calculated based on the amount of work assigned to the sprint prior to the start of the sprint. This count includes work that was moved to a different sprint after the start of the sprint, but doesn't include work that was added later after the sprint started.
	> [!TIP]   
	> To list the work items included in the count, click the velocity bar. A query results page will open with the list of work items included.
- **Completed** - calculated based on the amount of work  assigned to the sprint prior to the start of the sprint and completed prior to the sprint end date..
- **Completed Late**  - calculated based on the amount of work assigned to the sprint prior to the start of the sprint but was completed after the end of the sprint.  
- **Incomplete** - Amount of work not completed, calculated based on the amount of work assigned to the sprint prior to the start of the sprint and has not been set to completed. 

#### [In-context Velocity chart](#tab/in-context)

![Web portal, in-context Velocity chart showing six sprints of in progress and completed work](media/velocity/analytics-velocity-azure-devops.png)

#### [Velocity widget](#tab/widget)

![Example Velocity widget, eight iterations](media/commerce-team-velocity-eight-iterations.png) 

---


You can configure each chart in the following ways: 
- Sum of [Effort, Story Points, or Size fields](../../boards/queries/query-numeric.md) or other supported numeric field assigned to backlog items.
- Count of work items that appear on the backlog
- Number of iterations.   

The widget supports some additional configuration options. To configure or view Velocity charts, see [Configure and view Velocity charts](team-velocity.md).
 

::: moniker-end

::: moniker range="azure-devops-2019"

You have a choice of Velocity charts: the in-context Velocity chart you access from a Backlogs page and the Velocity widget you add to a dashboard. With the velocity widget, you can quickly determine the following information:  
- Planned velocity 
- Actual (completed) velocity 
- Work completed later than planned
- Amount of work not completed   



#### [In-context Velocity chart](#tab/in-context)

![Web portal, Velocity chart showing seven sprints of in progress and completed work](media/team-velocity-chart-web-7-iterations.png)

#### [Velocity widget](#tab/widget)

![Example Velocity widget, eight iterations](media/commerce-team-velocity-eight-iterations.png) 

---

Both of these charts support visualizing team velocity for several sprints. The Velocity widget, however, supports the following configuration options: 
- Sum of [Effort, Story Points, or Size fields](../../boards/queries/query-numeric.md) or other supported numeric field assigned to backlog items.
- Count of work items that appear on the backlog
- Number of iterations   
- Advanced features.

::: moniker-end


::: moniker range="<= tfs-2018"

The in-context Velocity charts are based on the sum of [Effort, Story Points, or Size fields](../../boards/queries/query-numeric.md) assigned to backlog items. These charts are similar to the one shown in the following image. 

![Web portal, Velocity chart showing seven sprints of in progress and completed work](media/team-velocity-chart-web-7-iterations.png)  

To configure or view Velocity charts, see [Configure and view Velocity charts](team-velocity.md).

::: moniker-end


[!INCLUDE [temp](../includes/velocity-activities.md)] 

<a id="minimize-variability" >    </a>

## Minimize variability in your estimates 

Estimates, by their nature, don't reflect reality. They represent a best guess by the team as to the effort required to complete an item, relative to the effort of other items on the backlog.  

By minimizing the size variability of your backlog items, you help strengthen the team's ability to  create more accurate estimates.  Variability increases uncertainty. By minimizing the variability of your estimates, you increase the likelihood of more reliable velocity metrics and forecast results.  

## Velocity is not a KPI 

While velocity provides a measure of a team's ability to deliver work, you shouldn't confuse it as a key performance indicator for the team. 

Velocity simply provides an aid to determine team capacity. Nothing more, nothing less. Asking a team to increase their velocity, basically asks them to accomplish more with the same resources. This request will mostly likely lead to "Story points inflation" and lead to less desirable outcomes. 

::: moniker range="<= tfs-2017"

## Other types of velocity charts

While the velocity chart provides a measure of Effort, Story Points, or Size that gets completed sprint-over-sprint, there may be other types of velocity that you may want to track. You can create similar charts by creating a work item query and [chart the count of or sum of items](../dashboards/charts.md).  

For example, you can create a chart of the number of Product backlog items and bugs completed for the last several sprints. For examples on creating this type of chart, see [Query by numeric fields](../../boards/queries/query-numeric.md).

![Velocity count of backlog items and bugs](media/ALM_VF_VelocityCountItems.png) 

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Forecast your sprints](../../boards/sprints/forecast.md)  

## Related articles  

- [Configure or view velocity chart](team-velocity.md) 
- [Plan your sprint](../../boards/sprints/assign-work-sprint.md) 

### Add other teams

If you work with several teams, and each team wants to work with their own backlog view, velocity chart, and forecast tool, you can [add teams](../../organizations/settings/add-teams.md). Each team then gets access to their own set of Agile tools. Each Agile tool filters work items to only include those items assigned to area paths and iteration paths selected by the team. 
