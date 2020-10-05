---
title: Manage change, Agile methods
titleSuffix: Azure DevOps
description: Learn about the tools and features available to manage change when using Agile methods  
ms.technology: devops-agile 
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 10/05/2020
---



# Manage change 

[!INCLUDE [temp](../includes/version-vsts-only.md)]


Become familiar with the essential concepts to manage projects using Agile tools. Gain an overview of Azure DevOps tools and features to manage requirements. This article maps Agile requirements management tasks by project managers to the tools Azure DevOps supports. More detailed information is provided under [Related articles](#related-articles).   

Since Agile methods emphasize " Responding to change over following a plan", ... 
The point is that when does change occur? Everything is iterative. Good practice is to constantly refine the backlog to ensure acceptance criteria is well defined and your team is building the software your customers want.  Where does change arise? 
- Business needs change  
- Feature requirement changed - new information arises 
- Resources changed
- New dependencies arose


Minimize these types of change: 
- Poorly understood acceptance criteria 
- what more? 


From the point of this article, the change to track is those that occur once a sprint starts. 
ANd, in keeping with agile, want to keep it lightweight. The focus here is to gain insight into the types of changes that are occuring, where they arise, and how they impact the team in their ability to deliver. 



> [!NOTE]
> *Change management is defined as the methods and manners in which a company describes and implements change within both its internal and external processes. ... Developing a structured approach to change is critical to help ensure a beneficial transition while mitigating disruption. Asq.org*

Where does change come from: 
- business needs 
- pulse surveys 
- Sponsorship 
- Change management culture

= Insights into change 
- Measure churn 
- 


Iterative 

Agile requirements management supports the following scenarios.   

> [!div class="checklist"]  
> - Define and track status of change requirements  
 
> - Determine what can ship and when  
> - Monitor and report on progress  
> - Control Scope Changes 
> - Identify planned, completed, and incomplete work 
> - Minimize scope creep  
> - Support a change management process


Agile change management is built on the following four main values:   

> [!div class="checklist"]  
> - Individuals & interactions over processes & tools
> - Working software over comprehensive documentation
> - Customer collaboration over contract negotiation
> - Responding to change over following a plan

Early engagement of change manager
Consistent communication
Senior leader engagement
Early wins

 risk reduction approach to software development


## Track changes   

 changes should be added to the backlog, tag 
Keep the process lightweight and eliminate as much waste as possible.

Log change to the backlog or change tracker
Eliminate as many approvals as possible
Have a light change control form, if necessary
Keep the stakeholders and operations involved


## Minimize scope creep 


 
 
 
## Gain insight to support team deliverables
 


### Use tags to track types of changes   
  


#### Velocity insight into team deliverable  
  

**Example team Velocity chart** 

> [!div class="mx-imgBorder"]  
> ![Screenshot of team velocity chart.](media/manage-requirements/team-velocity.png) 

 
 

## Get notified of changes 

Azure DevOps provides a robust alert system, allowing project members to set alerts for themselves, a team, or a project.   

As changes occur to work items, code reviews, source control files, and builds, you can receive email notifications. For example, you can set an alert to be notified whenever a bug that you opened is resolved or a work item is assigned to you. You can set personal alerts, team, project, or organization alerts.
 

<a id="related-articles" />


## Related articles 

To learn more about any of the concepts introduced in this article, refer to the following articles. 

#### Industry articles

- [5 Implications for Change Management in an Agile World](https://www.imaworldwide.com/blog/5-implications-for-change-management-in-an-agile-world)
- [Change Management meets Agile, how does that work?](https://www.andchange.com/themes/change-management-meets-agile/)
- [Managing Change Requests in Scrum](https://www.infoq.com/news/2008/12/change-requests-in-scrum/)

- [Identify And Avoid Project Scope Creep](https://thedigitalprojectmanager.com/scope-creep/)

<!--- 
 
 
#### Agile and Agile culture

- [What is Agile?](/azure/devops/learn/agile/what-is-agile)
- [Agile culture](../boards/plans/agile-culture.md) 
- [Best practices for "light-weight" Agile project management](../boards/best-practices-agile-project-management.md)
- [Scaling Agile - Practices that scale](../boards/plans/practices-that-scale.md) 


#### Work items, work item types, and process models 

- [About work items](../boards/work-items/about-work-items.md) 
- [Add work item tags to categorize and filter lists and boards](../boards/queries/add-tags-to-work-items.md)
- [Choose a process](../boards/work-items/guidance/choose-process.md)
- [About process customization and inherited processes](../organizations/settings/work/inheritance-process-model.md) 
- [Bulk add or modify work items with Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)
- [About Area and Iteration Paths (sprints)](../organizations/settings/about-areas-iterations.md) 
- [Work tracking, process, and project limits](../organizations/settings/work/object-limits.md)


#### Backlogs and boards

- [Create your backlog](../boards/backlogs/create-your-backlog.md)  
- [Organize your backlog](../boards/backlogs/organize-backlog.md)  
- [Define features and epics](../boards/backlogs/define-features-epics.md) 
- [Refine your backlog](../boards/backlogs/best-practices-product-backlog.md) 
- [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md) 
- [Tasks supported by Backlogs, Boards, Taskboards, and Plans](../boards/backlogs/backlogs-boards-plans.md)
- [Configure and customize Azure Boards](../boards/configure-customize.md)

#### Kanban 

- [Start using your Kanban board](../boards/boards/kanban-quickstart.md)
- [Add columns to your Kanban board](../boards/boards/add-columns.md) 
- [Customize cards](../boards/boards/customize-cards.md)
- [Filter your Kanban board](../boards/boards/filter-kanban-board.md)
- [Kanban best practices](../boards/boards/best-practices-kanban.md)

#### Scrum

- [Assign backlog items to a sprint](../boards/sprints/assign-work-sprint.md) 
- [Configure and monitor sprint burndown](../report/dashboards/configure-sprint-burndown.md) 
- [Scrum and best practices](../boards/sprints/best-practices-scrum.md)  

#### Dependency management 

- [Link user stories, issues, bugs, and other work items](../boards/backlogs/add-link.md) 
- [Triage work items](../boards/queries/triage-work-items.md) 

#### Milestone planning 

- [View or configure team velocity](../report/dashboards/team-velocity.md)
- [Forecast your product backlog](../boards/sprints/forecast.md) 
- [The Critical Path on Agile Projects](https://www.mountaingoatsoftware.com/blog/the-critical-path-on-agile-projects)
- [Running a lean startup on Azure DevOps](https://medium.com/@giladkhen/running-a-lean-startup-on-azure-devops-5934ced2cc42) 

#### Monitor and report on progress

- [Display rollup progress or totals](../boards/backlogs/display-rollup.md)
- [Review team Delivery Plans](../boards/plans/review-team-plans.md)

#### Maintain specifications and share information 

- [About Wikis, READMEs, and Markdown](../project/wiki/about-readme-wiki.md)
- [Share information within work items and social tools](../boards/queries/share-plans.md)


#### Notifications

- [Default and supported notifications](../notifications/oob-built-in-notifications.md) 
- [Manage personal notifications](../notifications/manage-your-personal-notifications.md)
- [Manage notifications for a team or group](../notifications/manage-team-group-notifications.md)

--> 