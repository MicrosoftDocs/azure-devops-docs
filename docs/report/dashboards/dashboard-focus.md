---
title: Design effective dashboards  
titleSuffix: Azure DevOps
description: Learn about useful and actionable dashboards that you can create when working in Azure DevOps.
ms.service: azure-devops-boards
ms.custom: dashboards, engagement-fy23 
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
ms.date: 08/19/2024
---


# Design effective dashboards in Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

To keep your team and stakeholders informed and projects on track, actionable dashboards in Azure DevOps are essential. This article explores how to design effective dashboards that align with your business objectives.

## Choose a dashboard focus 

When you determine the focus of a dashboard, it's crucial to identify the information needs of its intended audience. Your goal is to create dashboards that provide insights and help identify actions to take.

::: moniker range=">= azure-devops-2020"

The focus of your dashboard determines whether you create a team or project dashboard, as shown in the following table.

| **Focus** | **Description** | **Dashboard type** |
|-----------|-----------------|--------------------|
|[**Stakeholder**](#stakeholder-dashboard)|Share team and organizational goals, information, links to work item templates to create bugs or new feature requests, and more. |Team or Project | 
|[**Personal**](#personal-dashboard)|Help each team member to focus on their backlog and current work.| Project or Team |
|[**Team**](#team-dashboard)|Provide information for a team to monitor status, track progress, identify bottlenecks, and ensure backlog items are well defined. |Team |
|[**Sprint**](#sprint-dashboard)|Review in daily stand-ups to ensure the team is on track to meet sprint goals and address any issues that affect those goals.|Team |
|[**Release**](#release-dashboard)|Monitor status and track progress toward a major release that might involve contributions from several teams. |Project |
|[**Test and deploy**](#test-deploy-dashboard)| Monitor continuous integration, builds, deployments, and releases. | Project or Team|  

::: moniker-end 

::: moniker range="< azure-devops-2020"

The following table lists several types of dashboards you might want to create.  

| **Focus** | **Description** | 
|-----------|-----------------|
|[**Stakeholder**](#stakeholder-dashboard)|Share team and organizational goals, information, links to work item templates to create bugs or new feature requests, and more. |
|[**Personal**](#personal-dashboard)|Help each team member to focus on their backlog and current work.| 
|[**Team**](#team-dashboard)|Provide information for a team to monitor status, track progress, identify bottlenecks, and ensure backlog items are well defined. |
|[**Sprint**](#sprint-dashboard)|Review in daily stand ups to ensure the team is on track to meet sprint goals and address any issues that affect those goals.|
|[**Release**](#release-dashboard)|Monitor status and track progress toward a major release, which might involve contributions from several teams. |
|[**Test and deploy**](#test-deploy-dashboard)| Monitor continuous integration, builds, deployments, and releases. | 

::: moniker-end 

::: moniker range=">= azure-devops-2020"

## Choose a dashboard type and create it

When a team gets created, a default dashboard named *Overview* also gets created without any widgets. This default dashboard is always a **Team** dashboard that you can edit and rename. When you add a dashboard, choose the type based on the following guidance:

- **Project**: Select this type to include information for more than one team or if the content isn't team-focused.
- **Team**: Select this type to include team-specific widgets.

Review the [Out Of Box widget catalog](widget-catalog.md) to determine which widgets are configurable for a single team or multiple teams.

::: moniker-end 
::: moniker range=">= azure-devops-2022"
Once you choose your dashboard type, [create a dashboard](dashboards.md). You can also streamline your process by [copying another team's dashboard](copy-dashboard.md) and updating it for your team.
::: moniker-end 
::: moniker range="azure-devops-2020"
Once you choose your dashboard type, [create a dashboard](dashboards.md).
::: moniker-end 

::: moniker range="< azure-devops-2020"

## Configure widgets 

When a team gets created, a default dashboard named *Overview* also gets created without any widgets. This default dashboard is always a **Team** dashboard that you can edit and rename. Review the [Out Of Box widget catalog](widget-catalog.md) to determine which widgets are configurable for a single team or multiple teams.

::: moniker-end 

## Share the dashboard with your team and stakeholders

After creating your dashboard, share the URL with your team and stakeholders. Specify the actions you want them to take and request feedback to make it more actionable and insightful.

To view or edit dashboards, the following conditions must be met:
- All project members can view all dashboards unless specific restrictions are applied using a security command line tool. For more information, see [Security namespace and permission reference](../../organizations/security/namespace-reference.md#dashboard-previleges-namespace).
- All project members with **Basic** access can create a dashboard.
- All team members with **Basic** access can create a team dashboard unless permissions were revoked. For details, see [Set dashboard permissions, Set default team dashboard permissions](dashboard-permissions.md#set-default-team-dashboard-permissions).
- All team members can edit all team dashboards unless the **Edit dashboard** permission was revoked for a specific dashboard or all team dashboards. For details, see [Set dashboard permissions](dashboard-permissions.md).
- Some dashboard charts and widgets contain data subject to their own permissions and access levels. For more information, see [FAQs on Azure DevOps dashboards, charts, and reports](faqs.yml#are-there-restrictions-on-what-charts-or-data-project-members-can-view-in-a-dashboard).

## Review and fine tune 

After creating your dashboard, fine-tune it based on feedback. Update queries as needed to refine results. Periodically review your dashboards to ensure they deliver the information you, your team, and stakeholders need.

The following table describes the dashboard types:

:::row:::
   :::column span="1":::
   **Dashboard type**
   :::column-end:::
   :::column span="2":::
   **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   <a id="stakeholder-dashboard">  </a>

   **Stakeholder dashboard**
   :::column-end:::
   :::column span="2":::
   Stakeholders include any project members interested in your work. Use a combination of markdown widgets and team-focused widgets to address: 
    - Team goals
    - Team information
    - Team members and key contacts
    - Links to work item templates
    - Team guidance linked to wiki content
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="personal-dashboard">  </a>
   **Personal dashboard**
   :::column-end:::
   :::column span="2":::
   Set up a personal focus dashboard for all team members using the **Assigned to me** widget and other query tiles or charts that reference an `Assigned To = @Me` query clause.<br>
   The following image shows a personal dashboard titled *My Work Focus*. Each team member can review this dashboard for work assigned to them, work they're following, or work where they're mentioned.<br>
   :::image type="content" source="media/dashboard-focus/my-work-focus.png" alt-text="Screenshot of Dashboard work query tiles and query charts.":::<br>
   The following list provides more information for each widget shown in the dashboard. For more information on constructing queries for these examples, see [Example query charts](../../boards/queries/example-query-charts.md).<br>
    - **Current sprint:** Work assigned to `@Me` for the current sprint.
    - **Next sprint:** Work assigned to `@Me` for the next sprint.
    - **Completed last sprint:** Work completed last sprint assigned to `@Me`.
    - **My backlog:** Work assigned to `@Me` new, proposed, or active.
    - **I created last 30 days:** Active work with the following clauses: `Created By = @Me` and `Created Date >= @Today-30`.
    - **I recently updated:** Active work whose `ID In @MyRecentActivity`.
    - **Work I'm following:** Active work whose `ID In @MyFollows`.
    - **My backlog state:** Stacked area chart showing work assigned to `@Me` for the past four weeks (query chart).
    - **My work - Current sprint by work item type:** Active work by type assigned to `@Me` for the current sprint (query chart).
    - **My backlog by work item type:** Work assigned to `@Me` by type (query chart). 
    - **New work < 7 days:** Active work assigned to `@Me` and `Created Date >= @Today-7` (query chart).
   Select any query tile or widget to quickly navigate to the query and view a complete list of work items. Consider adding the following widgets to the personal focus dashboard:
   - **New Work Item**: Create new work items.
   - **Work Links**: Access links to a team's Backlog, Board, current sprint Taskboard, and the queries page.
   - **Assigned to Me**: View a list of work items assigned to the currently signed-in user, as shown in the following image.<br>
   :::image type="content" source="media/dashboard-focus/work-assigned-to-me.png" alt-text="Screenshot of Dashboard, Assigned to me widget.":::
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="team-dashboard">  </a>

   **Team dashboard**
   :::column-end:::
   :::column span="2":::
   Create your team dashboard to help members meet goals, monitor status, track progress, identify bottlenecks, and ensure backlog items are well defined. Include one or more of the following team-scoped widgets:<br>
  - [CFD chart](cumulative-flow.md)<br>
  - [Velocity](team-velocity.md)<br>
  - [Cycle time](cycle-time-and-lead-time.md)<br>
  - [Lead time](cycle-time-and-lead-time.md)<br>
   Velocity helps teams understand how well they're planning and executing sprints. Lead and cycle time show the average time for work to move from inception to completion. Consider adding a [pivot table](charts.md#add-a-pivot-table) to quickly see the number of work items and their assignments. Use these charts to determine if the team needs to better balance the workload.<br>
  :::image type="content" source="media/dashboard-focus/load-balance-work.png" alt-text="Screenshot of Dashboard, Assigned work pivot and stacked bar chart widgets.":::<br>
   If your team manages code, tests, builds, and releases using Azure DevOps, add these widgets to your team dashboard:<br>
  - [Code tile](widget-catalog.md#code-tile-widget)<br>
  - [Test results trend (Advanced)](widget-catalog.md#test-results-trend-advanced)<br>
  - [Pull request (Team)](widget-catalog.md#pull-request-widget)<br>
  - [Build history](widget-catalog.md#build-history-widget)<br>
  - [Deployment status (Build pipeline)](widget-catalog.md#deployment-status-widget)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="sprint-dashboard">  </a>

   **Sprint dashboard**
   :::column-end:::
   :::column span="2":::
   Azure DevOps offers several sprint and team-specific widgets to track sprint progress, including Sprint overview, Sprint capacity, and Sprint burndown. Sprint capacity is useful only if your team tracks work using tasks and sets the Sprint capacity as described in [Determine and set sprint capacity](../../boards/sprints/set-capacity.md).<br>
    The following image shows a sample sprint focus dashboard.<br>
    :::image type="content" source="media/dashboard-focus/sprint-focus.png" alt-text="Screenshot of Dashboard, Sprint focus query tiles, Team Velocity, and Sprint Burndown widgets.":::<br>
    This sprint dashboard includes several query tiles and the following widgets:
    - [Sprint overview chart](widget-catalog.md#sprint-overview-widget)
    - [New work items](widget-catalog.md#new-work-item-widget)
    - [Velocity](team-velocity.md) (team-configurable)
    - [Sprint burndown chart](configure-sprint-burndown.md) (team-configurable)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="release-dashboard">  </a>

   **Release dashboard**
   :::column-end:::
   :::column span="2":::
   Major software releases often involve contributions from multiple teams. Release burndown and burnup charts help product managers track progress across teams. These charts are highly configurable, allowing you to choose teams, backlog work items or work item types, field criteria, countdown metrics, and time intervals. For more information, see [Configure a burndown or burnup widget](configure-burndown-burnup-widgets.md).<br>
    > [!NOTE]
    > Analytics-based charts use the `WorkItemsSnapshot` EntitySet, which models data as daily snapshots. Data aggregates based on assignments made on the date they're assigned. To filter a Burndown/Burnup widget by field or tag assignments, assign them before the period you want to monitor. Otherwise, the widget doesn't register them until the date they're applied.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="test-deploy-dashboard">  </a>

   **Test & deploy dashboard**
   :::column-end:::
   :::column span="2":::
   Create a dedicated dashboard to track the progress of tests, builds, and deployments by adding the following widgets:
    - [Build history](widget-catalog.md#build-history-widget)
    - [Deployment status (Build pipeline)](widget-catalog.md#deployment-status-widget)
    - [Release Pipeline overview](widget-catalog.md#release-definition-widget)
    - [Requirements quality](widget-catalog.md#requirements-quality-widget)<br>
    **Build History**
    :::image type="content" source="media/dashboard-focus/release-pipeline-widget.png" alt-text="Screenshot of Release pipeline overview chart.":::<br>
    **Release pipeline overview**
    :::image type="content" source="media/dashboard-focus/release-pipeline-widget.png" alt-text="Screenshot of Release pipeline overview chart.":::<br>
    **Deployment status** 
    :::image type="content" source="media/dashboard-focus/deployment-status-widget.png" alt-text="Screenshot of Deployment status widget.":::
   :::column-end:::
:::row-end:::

## Extend your dashboard visibility 

Add boards and dashboards as tabs to your Teams channel. For more information, see [Configure Azure DevOps tabs in Microsoft Teams](../../boards/integrations/boards-teams.md#configure-azure-devops-services-tabs-in-microsoft-teams).

## Related articles

- [Explore example query charts](../../boards/queries/example-query-charts.md)
- [Read FAQs about dashboards, charts, and reports](faqs.yml)
- [Review the test progress report](../../test/progress-report.md)
- [Check pipeline reports](../../pipelines/reports/pipelinereport.md)
- [Analyze test analytics](../../pipelines/test/test-analytics.md)
- [Browse the widget catalog](widget-catalog.md)
- [Find marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)
