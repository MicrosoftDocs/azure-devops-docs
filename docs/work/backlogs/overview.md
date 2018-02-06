---
title: Agile tools - Scrum, Kanban, and more | VSTS & TFS
description: Use the web portal to implement your Scrum or Kanban process, plan and track work, and monitor progress and trends  
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: 28C02AE8-CF8D-4B6E-8301-F46A5622E6C4
ms.manager: douge
ms.author: kaelli
ms.date: 08/15/2017
---

# About Agile tools and Agile project management 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You plan and track your project using the suite of Agile tools you access from the web portal. Agile tools support the core Agile methods&mdash;Scrum and Kanban&mdash;used by software development teams today. Scrum tools support defining and managing work within sprints, setting capacity, and tracking tasks. Kanban tools allow you to manage a continuous flow of work via an interactive sign board.  

You access all Agile tools from the **Work** hub. If you're new to Agile, see [What is Agile?](https://www.visualstudio.com/learn/what-is-agile/) for an overview.

<img src="_img/plan-intro.png" alt="Work hub, product backlog page" style="border: 1px solid #C3C3C3;" />  

Most Agile tools are [scoped to a team](../../teams/about-teams-and-settings.md). This supports team autonomy as well as scaling the system.  

> [!div class="mx-tdBreakAll"]  
> |Backlogs  |Task boards  |Kanban boards  |  Other  | 
> |-------------|----------|---------|---------|   
> |- [Product backlog](create-your-backlog.md)<br/>- [Portfolio (Epics, Features) backlogs](define-features-epics.md)<br/>- [Sprint backlogs](../scrum/sprint-planning.md)|- [Task boards](../scrum/task-board.md)<br/>- [Sprint burndown](../scrum/sprint-burndown.md) <br/>- [Capacity planning](../scale/capacity-planning.md) |- [Kanban board](../kanban/kanban-basics.md)<br/>- [Task checklists](../kanban/add-task-checklists.md)<br/>- [Epics & Features boards](../kanban/kanban-epics-features-stories.md) |- [Delivery plans](../scale/review-team-plans.md)<br/>- [Forecast](../scrum/forecast.md)<br/>- [Velocity](../../report/dashboards/velocity-chart-data-store.md)<br/>|    

>[!NOTE]
>To understand the differences between backlogs, boards and Delivery plans, see [Backlogs, boards, and plans](backlogs-boards-plans.md). 
 

## Kanban method and tools
Kanban uses a visual interactive board to plan and show progress using cards. Your Kanban board is fully customizable to support the workflow used by your team.  

[![Configure Kanban board](_img/overview/gs-planning-configure-kanban.png)](../kanban/kanban-basics.md)[![Update the Kanban board](_img/overview/gs-planning-track-kanban.png)](../kanban/kanban-basics.md)[![Monitor progress](_img/overview/gs-planning-monitor-kanban.png)](../../report/dashboards/cumulative-flow.md)

You update the status of work by dragging card to another column on the Kanban board. You can even change the order of items as you move a card to a new column.   

![Reorder cards while changing columns](https://i3-vso.sec.s-msft.com/dynimg/IC822185.gif)

## Define work items and create your backlog  

You build your project plan by creating a backlog of work items that represent the features, requirements, user stories, or other work to perform. Portfolio backlogs provide support for organizing work in a hierarchical fashion and tracking major product initiatives or scenarios that rely on many stories or requirements.  Different types of work items help you track different types of work, such as user stories, tasks, bugs, issues, and more. 

[![Define stories](_img/overview/gs-planning-define-stories.png)](create-your-backlog.md)[![Organize backlog](_img/overview/gs-planning-organize-backlog.png)](organize-backlog.md)[![Manage bugs](_img/overview/gs-planning-manage-bugs.png)](manage-bugs.md)[![Manage issues](_img/overview/gs-planning-manage-issues.png)](manage-issues-impediments.md)


## Scrum method and tools 
The Scrum method uses sprints to plan work to perform by a team within a specific time period and cadence. To get started, several sprints are predefined for your team.  If you're new to Scrum, get an overview from [What is Scrum?](https://www.visualstudio.com/learn/what-is-scrum/). 

[![Schedule sprints](_img/overview/gs-planning-define-sprints.png)](../scrum/define-sprints.md)[![Plan a sprint](_img/overview/gs-planning-plan-sprint.png)](../scrum/sprint-planning.md)[![Monitor sprint progress](_img/overview/gs-planning-monitor-sprint.png)](../scrum/task-board.md)[![Forecast](_img/overview/gs-planning-forecast.png)](../scrum/forecast.md)

You can quickly assign work items to a sprint by dragging and dropping them from the product backlog to the sprint. 


## Try this next  

Take these tools for a test run by [creating an account on VSTS for free](../../accounts/create-account-msa-or-work-student.md). From there, you're ready to [create your backlog](create-your-backlog.md).  

Once you've started tracking work, you'll want to monitor and track progress, identify trends, and share your plans. See [Charts, dashboards, and widgets](../../report/overview.md). 


## Related notes

You access tools provided by VSTS and TFS by connecting from a client to the server, either in the cloud or on-premises. Some web portal tools require additional Visual Studio Subscriptions or Advanced/VS Enterprise access.  To learn more, see [Permissions and access for work tracking](../../security/permissions-access-work-tracking.md). 

For an overview of all your customization options, see [Customize your work tracking experience](../customize/customize-work.md). 


### Work across team projects 
  
If you work in VSTS and TFS 2017.1 or later version, you can use your account hub to view and quickly navigate to teams, team projects, branches, work items, pull requests and other objects that are relevant to you. For details, see [Work effectively from your account hub](../../user-guide/account-home-pages.md).  
 

 