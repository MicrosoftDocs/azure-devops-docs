---
title:  Analytics Service widgets 
titleSuffix: Azure DevOps Services
description: Learn about the widgets generated from data from the Analytics Service that you can add to a dashboard in Azure DevOps 
ms.prod: devops
ms.technology: devops-analytics
ms.manager: jillfra
ms.reviewer: romik
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 11/19/2018
---


# Widgets based on the Analytics Service

[!INCLUDE [temp](../../_shared/version-azure-devops.md)]

The Analytics extension includes several dashboard widgets that take advantage of the power of the Analytics Service. Once you install the Analytics extension you can add Widgets to your dashboard. Using widgets, you and your team can gain valuable insights into the health and status of your work. 

> [!NOTE]   
> You need to first install the [Analytics Marketplace extension](../analytics/analytics-extension.md). 

You can then [add the widget(s) to your dashboard](../add-widget-to-dashboard.md). You must be an organization owner or a member of the [Project Collection Administrator group](../../organizations/security/set-project-collection-level-permissions.md) to add extensions.

 
You can then [add the widget(s) to your dashboard](../add-widget-to-dashboard.md). You must be an organization owner or a member of the [Project Collection Administrator group](../../organizations/security/set-project-collection-level-permissions.md) to add extensions.

If **Boards** is disabled, then all widgets associated with work item tracking, including those based on the Analytics Service, will also be disabled. To re-enable a service, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md).

## Burndown
The Burndown widget lets you display a trend of remaining work across multiple teams and multiple sprints. You can use it to create a release burndown, a bug burndown, or a burndown on any scope of work over time. It will help you answer questions like: 

* Will we complete the scope of work by the targeted completion date? If not, what is the projected completion date?
* What kind of scope creep does my project have?
* What is the projected completion date for my project?

**Burndown widget showing a release Burndown**

![Burndown Widget - Release Burndown Example](./_img/burndown-ax-catalog.png)



To learn more, see [Configure a Burndown or Burnup widget](../dashboards/configure-burndown-burnup-widgets.md).  

## Burnup
The Burnup widget lets you display a trend of completed work across multiple teams and multiple sprints. You can use it to create a release burnup, a bug burnup, or a burnup on any scope of work over time. When completed work meets total scope, your project is done! 

**Burnup widget showing a release Burnup**

![Burnup Widget - Release Burnup Example](./_img/burnup-ax-catalog.png)

To learn more, see [Configure a Burndown or Burnup widget](../dashboards/configure-burndown-burnup-widgets.md).  

## Cumulative Flow Diagram (CFD)
The CFD widget shows the count of work items (over time) for each column of a Kanban board. This allows you to see patterns in your team's development cycle over time. It will help you answer questions like: 
* Is there a bottleneck in my process? 
* Am I consistently delivering value to my users? 

**Cumulative flow diagram widget showing 30 days of data**

![Cumulative flow diagram widget](./_img/cdf-big-widget.png) 

To learn more, see [Cumulative flow diagram widget](../dashboards/cumulative-flow.md).  

## Cycle Time
The Cycle time widget will help you analyze the time it takes for your team to complete work items once they begin actively working on them. A lower cycle time is typically indicative of a healthier team process. Using the Cycle time widget you will be able to answer questions like: 
* On average, how long does it take my team to build a feature or fix a bug? 
* Are bugs costing my team a lot of development time?

**Cycle time widget showing 30 days of data**

![Cycle time widget](../dashboards/_img/cycle-time-planning.png) 

To learn more, see [Cycle time and lead time control charts](../dashboards/cycle-time-and-lead-time.md).  

## Lead Time
The Lead time widget will help you analyze the time it takes to deliver work from your backlog. Lead time measures the total time elapsed from the creation of work items to their completion. Using the Lead time widget you will be able to answer questions like: 
* How long does it take for work requested by a customer to be delivered?
* Did work items take longer than usual to complete?


**Lead time widget showing 60 days of data**

![Lead time widget](../dashboards/_img/lead-time-control-chart.png) 

To learn more, see [Cycle time and lead time control charts](../dashboards/cycle-time-and-lead-time.md). 

## Velocity
 The Velocity widget will help you learn how much work your team can complete during a sprint. The widget shows the team's velocity by Story Points, work item count, or any custom field. You can also compare the work delivered against your plan and track work completed late. Using the Velocity widget, you will be able to answer questions like:
* On average, what is the velocity of my team?
* Is my team consistently delivering what we planned?
* How much work can we commit to deliver in upcoming sprints? 


**Velocity widget showing 8 sprints of data based on Story Points**

![Velocity widget](./_img/Velocity-ax-catalog.png)
 

To learn more, see [Configure and view Velocity widgets](../dashboards/team-velocity.md).  

## Test Results Trend (Advanced)
With the Test Results Trend (Advanced) widget, you can track the test quality of your pipelines over time. Tracking test quality and improving test collateral are essential tasks to maintaining a healthy DevOps pipeline.  

The widget shows a trend of your test results for either build or release pipelines. You can track the daily count of tests, pass rates, and test duration. The highly configurable widget allows you to use it for a wide variety of scenarios. 

You can find outliers in your test results and answer questions like:
- *What tests taking longer to run than usual?*
- *What micro services are affecting my pass rate?*

**Test trend widget showing passed test results and pass rate for the last 7 days grouped by Priority**

![test trend widget by priority](../dashboards/_img/test-results-trend-widget/passed-bypriority-pass.png)

To learn more, see [Configure a test results widget](../dashboards/configure-test-results-trend.md).
