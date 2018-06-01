---
title: Add an Analytics widget to a dashboard
titleSuffix: VSTS
description: Quickstart guide that shows you how to add an Analytics widget to a dashboard for Visual Studio Team Services 
ms.prod: devops
ms.technology: devops-analytics
ms.manager: douge
ms.reviewer: romik
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: 'vsts'
ms.date: 11/13/2017
---

# Add an Analytics widget to a dashboard

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]
 
The [Analytics Service](what-is-analytics.md) is the reporting platform for Visual Studio Team Services (VSTS). 
Using Analytics, you and your team can gain new insights into the health and status of your work.
Follow this short guide to get started in a few simple steps.

In this topic we walk you through the steps for adding the Analytics-based Velocity widget to a dashboard. For a review of all Analytics-based widgets, see [Widgets based on the Analytics Service](analytics-widgets-vsts.md) 


## Prerequisites

- You will need to have a VSTS account and team project. If you don't have one, see [Sign up for a free VSTS account](../../user-guide/sign-up-invite-teammates.md).
- You will have to have defined several work items. See [Plan and track work](../../user-guide/plan-track-work.md). 

   

## Install the Analytics extension on your VSTS account
1.	Go to the [Analytics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics) in VSTS Market place. 
0.	Click to **Install** the Analytics extension. You might need to log in with your VSTS account.
0. Select a VSTS account where you would like to install this extension and confirm. Learn more about [Installing extensions for VSTS](../../marketplace/install-vsts-extension.md).


## Add the Velocity widget to your dashboard 

To add a widget to a dashboard, you connect to your team project using a [supported web browser](/tfs/server/compatibility#supported-browsers). If you need to add a team project, see [Create a team project](../../accounts/create-team-project.md)

1. Connect to the web portal for your team project and click the Dashboards hub.  
	![Open the Dashboards hub](../dashboards/_img/dashboards-go-to.png)

0. Select any dashboard or [create a new dashboard](../dashboards/dashboards.md).  

0. Click ![Edit dashboard icon](../dashboards/_img/edit-dashboard-icon.png) to modify a dashboard. Click ![add a widget icon](../dashboards/_img/add-widget-icon.png) to add a widget to the dashboard.  

0. In the right pane search box, type **Velocity** to quickly locate the Velocity widget within the widget catalog.  

	![velocity-in-widget-catalog](_img/velocity-in-widget-catalog.png)

0. Click the widget and then click **Add** to add it to the dashboard. Or, you can drag-and-drop it onto the dashboard. Learn more on [adding widgets to dashboard](../dashboards/add-widget-to-dashboard.md)

Congratulations! A new Velocity widget has been added to your dashboard. 

> [!TIP]  
> You'll gain the greatest utility from the Velocity widget by [assigning work to sprints and completing work defined in those sprints](../../work/scrum/sprint-planning.md). To quickly define sprints, see [Schedule sprints](../../work/scrum/define-sprints.md). 
 

##  Learn about your team��s velocity using the Velocity widget 

The Velocity widget will help you learn how much work your team can complete during a sprint. The widget shows the team's velocity by Story Points, work item count, or any custom field. You can also compare the work delivered against your plan and track work completed late. Using the Velocity widget, you will be able to answer questions like:
* On average, what is the velocity of my team?
* Is my team consistently delivering what we planned?
* How much work can we commit to deliver in upcoming sprints? 

**Velocity widget showing 8 sprints of data based on Story Points.**

![Velocity widget](../dashboards/_img/commerce-team-velocity-eight-iterations.png) 

Here, the Velocity widget shows this team has a history of closing stories late. It also shows a discrepency between planned and completed work in the past 4 sprints. The team can drill into the data to determine the root causes. After implementing new practices, the team can use the Velocity widget to track their effectiveness.

Learn more about the Velocity widget in [Configure and view Velocity charts](../dashboards/team-velocity.md).  


## Try this next
> [!div class="nextstepaction"]
> [Configure and view Velocity charts](../dashboards/team-velocity.md?toc=/vsts/report/analytics/toc.json&bc=/vsts/report/analytics/breadcrumb/toc.json)
