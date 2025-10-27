---
title: Key concepts for Sprints and Scrum tools in Azure Boards 
titleSuffix: Azure Boards
description: Learn about key concepts and glossary of terms for Sprints and Scrum tools in Azure Boards.
ms.custom: boards-sprints, engagement-fy23 
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
--- 

# Sprints and Scrum key concepts in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

This article gives a short dictionary of terms and the tools you use to track work with Sprints and Scrum. Also review [Agile glossary](../work-items/agile-glossary.md) and [Project management and navigation glossary](../../project/navigation/glossary.md).  

[!INCLUDE [temp](../../includes/glossary-terms/agile-tools.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/bugs.md)] 

## Burndown and burnup charts

Burndown and burnup charts help you visually track work completed over time. Burndown charts start with the total planned work and graph remaining work as the team completes tasks. As time progresses, remaining work decreases.

Burnup charts show the total work completed over time and help you illustrate delivery rate.

For guidance, see [Burndown and burnup guidance](../../report/dashboards/burndown-guidance.md).

## Team and individual capacity

Capacity maps to the actual task time (hours or days) available to an individual or a team. Azure DevOps provides a Capacity tool for each team's sprint so you can set individual capacity and days off when you create tasks and estimate work.

Setting capacity shows total team hours or days for the sprint and displays each team member's capacity bar. Learn more: [Set sprint capacity](set-capacity.md).

::: moniker range="<=azure-devops"
:::image type="content" source="media/capacity/set-capacity-web-team.png" alt-text="Screenshot that shows the team capacity page.":::
::: moniker-end

## Capacity bars

Capacity bars let you quickly see who is over, at, or under capacity. Capacity bars update when you:

- assign tasks with nonzero remaining work,
- change remaining work, or
- change dates within the sprint cycle.

Individual and team capacity reflect capacity from the current day through the end of the sprint.

|Capacity colors |Capacity bars |
|----------------|--------------|
|![Screenshot that shows capacity colors.](media/capacity-planning-tool-color-chart.png) | ![Screenshot that shows Capacity bars.](media/ALM_DS_CapacityBars_S.png) |

For details, see [Adjust work to fit sprint capacity](adjust-work.md).

## Daily scrum meetings

Daily Scrum meetings keep teams focused on what they need to do to meet sprint commitments. The Scrum Master enforces the meeting structure and helps the team start on time and finish in 15 minutes or less. See [Scrum best practices, Daily scrum meeting](best-practices-scrum.md#daily-scrum-meetings).

<a id="forecast"></a>

## Forecast

Use the Forecast tool to plan sprints. Forecast shows backlog items that teams can complete in future sprints based on estimates and velocity.

For example, a velocity of 20 indicates the work shown takes about five sprints to complete. See [Forecast your product backlog](forecast.md).

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the team backlog Forecast view.](media/forecast-s125.png)

[!INCLUDE [temp](../../includes/glossary-terms/iterations.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/product-backlog.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/product-backlog-item.md)] 

## Product owner role

Product owners act as the interface between customers and the team. They respond to team questions about implementation, define acceptance criteria, and help reduce the need for detailed specifications.

## Scrum Master role

Scrum Masters help create and maintain healthy teams by coaching and guiding Scrum practices. They remove impediments and drive improvements in team productivity. See [Scrum best practices, Role of the Scrum Master](best-practices-scrum.md#scrum-master-role).

[!INCLUDE [temp](../../includes/glossary-terms/sprints.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/sprint-backlogs.md)]  

<a id="sbc"></a>

## Sprint burndown chart

The team uses the sprint burndown chart to track progress toward completing the work estimated during sprint planning. The ideal trend line indicates a steady decrease in remaining work. The blue area in the chart shows actual activity: task additions and reductions as the team updates task remaining work.

See [Monitor sprint burndown](../../report/dashboards/configure-sprint-burndown.md). 

::: moniker range="<=azure-devops"
:::image type="content" source="../../report/dashboards/media/burndown/analytics-burndown-remaining-work-s159.png" alt-text="Screenshot that shows the Sprint burndown chart.":::
::: moniker-end

## Sprint goals

Sprint goals focus sprint activities and summarize what the team plans to accomplish by the sprint end. See [Scrum best practices, Set sprint goals](best-practices-scrum.md#set-sprint-goals).

## Sprint planning

Sprint planning occurs at the sprint start when the product owner and the team agree on sprint goals and work. See [Scrum best practices, Sprint planning meetings](best-practices-scrum.md#assign-work-sprint-meeting).

## Sprint retrospective meetings

At sprint end, the team demonstrates completed work, stakeholders accept user stories that meet expectations, and everyone identifies improvements. See [Scrum best practices, Sprint retrospective meeting](best-practices-scrum.md#sprint-retrospective-meeting).

## Task

A task is a work item that tracks estimated and remaining work. In Scrum, teams often define tasks between 4 and 12 hours. Tasks help monitor sprint burndown, manage team capacity, and drive Taskboard activity. Tasks link to parent product backlog items or user stories. See [Add tasks to backlog items](add-tasks.md).

<a id="taskboard"></a>

## Taskboard

A Taskboard provides an interactive view for the work required to complete a team's sprint backlog. During the sprint, update task status and remaining work daily or several times a week to keep the sprint burndown chart smooth. See [Taskboard](task-board.md).

![Screenshot that shows the taskboard.](media/ALM_DS_Task_board_S.png)

[!INCLUDE [temp](../../includes/glossary-terms/teams.md)] 

## Team member

A team member is someone added to a project and assigned to one or more teams. Team-scoped Agile tools—capacity planning, team alerts, and dashboard widgets—automatically reference team members for planning and notifications.

To add users to a team, see [Add users to a project or specific team](../../organizations/security/add-users-team-project.md).

## Technical debt

Technical debt includes work required to deploy and maintain production-quality code: bugs, performance and operational issues, accessibility gaps, and similar items. See [What is Agile Development?](/devops/plan/what-is-agile-development).

## Triage meetings

Triage meetings help teams review and organize backlog and bug work. Product owners typically run triage meetings with team leads, business analysts, and stakeholders to identify risks, acceptance criteria, and priorities.

[!INCLUDE [temp](../../includes/glossary-terms/user-story.md)] 

## Velocity and velocity chart

Velocity helps teams understand how much work they can complete in a sprint cadence. After several sprints, teams use the velocity chart and Forecast to estimate future sprint capacity.

The built-in velocity chart sums Story Points (Agile), Effort (Scrum), or Size (CMMI) for each sprint. The green bar shows completed story effort; the blue portion shows estimated effort not yet completed. See [View and work with the built-in team velocity chart](../../report/dashboards/team-velocity.md).

::: moniker range="<=azure-devops"
:::image type="content" source="../../report/dashboards/media/velocity/analytics-velocity-azure-devops.png" alt-text="Screenshot that shows Velocity.":::
::: moniker-end

Each team has one velocity chart. Velocity varies with team capacity and over time, but averages become useful for forecasting when teams reduce variability in backlog item sizing. See [Add tasks to backlog items](add-tasks.md).

## Related content 

- [About Sprints and Scrum](scrum-overview.md) 
- [Scrum best practices](best-practices-scrum.md)  
- [Agile glossary](../work-items/agile-glossary.md)
- [Project management and navigation glossary](../../project/navigation/glossary.md)
- [What is Scrum?](/devops/plan/what-is-scrum)
