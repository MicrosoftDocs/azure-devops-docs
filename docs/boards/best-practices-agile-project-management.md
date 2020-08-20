---
title: Best practices for Agile project management 
titleSuffix: Azure Boards
description: Guidance for project managers new to Azure Boards to plan and track their projects  
ms.technology: devops-agile
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 08/07/2020
---



# Best practices for "light-weight" Agile project management 

[!INCLUDE [temp](includes/version-all.md)]

As a project manager new to Azure Boards, you have a choice of Agile planning tools. 

How choose the tools and methods that will support your team? 
How choose the most light-weight tracking methods? 
Main thing is that your development team will use a product backlog; project management will use a Kanban board to track Features. 

Introduce you to key features to support traditional project management activities 
Best practices tips here "light-weight" 
Light-weight - minimal tracking, status updates, minimal estimation 


Use the guidance provided in this article to get started. Light-weight 

> [!div class="checklist"]  
> - Configure your teams
> - Configure your sprints
> - Choose the work item types you'll use
> - Review, prioritize, estimate, and update your product plan
> - Use tags to support queries and filtering
> - Work in sprints
> - Forecast and milestone planning
> - Manage dependencies
> - Review progress and feature deliverables 
> - Process improvement


You can start from a bottom-up or top-down approach, choose one for your initial planning.

> [!NOTE]
> If your team is committed to practicing Kamban or Scrum methods, see [About Boards and Kanban](boards/kanban-overview.md) or the [tutorials for implementing Scrum](/sprints/scrum-overview.md). 


Goals to consider: 
- Autonomy
- Alignment 
- Continuous flow of deliverables 
- Predictable  

General guidance: 
Choose how you'll share specs, sprint goals, project goals, and guidance to new team members 
Basic guidance:
- [Track work with user stories, issues, bugs, features, and epics](backlogs/backlogs-boards-plans.md) 
- [Tasks supported by Backlogs, Boards, Taskboards, and Plans](backlogs/backlogs-boards-plans.md) 

- 


#### To learn more: 

- [Agile culture](plans/agile-culture.md)  
- [Scaling Agile - Practices that scale](plans/practices-that-scale.md)  
 

## Configure your teams   

Azure Boards provides teams the tools to plan and track work. Each project defines a default team, which you can start using immediately. However, if you have a number of development or feature teams, you should consider defining a team in Azure DevOps for each feature team.   

#### Best practice tips: 

- Configure teams along the value streams your organization wants to deliver
- Define a team for each development group of 6 to 12 developers 
- Configure development teams to support rollup to project management feature teams 


#### To learn how: 

- [Configure a hierarchy of teams](plans/configure-hierarchical-teams.md) 
- [Add a team, move from one default team to several teams](../organizations/settings/add-teams.md)  
 

## Configure your sprints 

Sprints&mdash;specified by Iteration Paths&mdash;are defined for a project and then selected by teams. A sprint cadence can vary between one week to four weeks or longer. You assign work to sprints that teams will deliver at the end of the sprint.  

#### Best practice tips: 

- Define a sprint cadence that all teams within your product group will use  
- Define at least six to twelve iterations that will support planning for six to twelve months 
- Determine how teams will use iterations to manage backlog items
	- Unassigned sprint work is assigned to the default backlog
	- Unassigned sprint work is assigned to a Future backlog 



#### To learn how: 

- [End-to-end sequence to define and assign Iteration Paths](../organizations/settings/about-areas-iterations.md#guidance)
- [How many iterations should a team define?](../organizations/settings/about-areas-iterations.md#how-many-iterations-should-a-team-define)
- [Define Iteration Paths and configure team iterations](../organizations/settings/set-iteration-paths-sprints.md) 
 
 

## Choose the work item types you'll use  

Determine which work item types your team will use to capture customer requirements and development work. Based on your project and the process used to create it, you have a choice from those shown in the following images. Also, each team can determine how they want to track bugs. 

[!INCLUDE [temp](includes/work-item-types.md)]

[!INCLUDE [temp](includes/note-requirements-terms.md)]

#### Best practice tips: 

- Use **Features** to capture customer features you want to ship 
- Quickly add features or requirements from the backlog and fill in details later
- Use **Requirements**&mdash;User Stories, Product Backlog Items, Issues, or Requirements&mdash;to break-down Features into work the development team will own 
- Map Requirements to Features to track progress at the project management level 
- Size development work to be completed within a sprint 
- Size feature deliverables to be completed within a sprint or within several sprints 
- Size Epics to be delivered quarterly or to some milestone objective
- Let Developers use Tasks to break-down their work as needed.


As project managers, you manage your features and the development team manages the requirements. By mapping them using parent-child links, you gain visibility into the progress of your features. Each work item you add to your team backlog is automatically assigned the default area path and iteration path set for your team. 

If you have larger initiatives or scenarios that require shipping several Features, you can group these under Epics, again using parent-child links. 

#### To learn how: 

- [Define features and epics](backlogs/define-features-epics.md) 
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Organize your backlog (map or reparent)](backlogs/organize-backlog.md)  

 

## Review and update your product plan   

Periodically you'll want to review and groom your product plan. The main tools you'll use are your team's Product Backlog or Feature Backlog and Board. 

Use your backlog to perform the following tasks: 

- Define work to be performed
- Open work items and add details 
- Assign work to team members or to sprints
- Reorder work items using drag-and-drop so that they appear in priority order 
- Capture technical debt and non-feature work required to support a healthy ecosystem of delivery 
- (Optional) Estimate requirements to gage team velocity and support forecasting 

> [!TIP]   
> You can monitor team velocity based on estimates assigned to completed work or a simple count of work items completed during sprints. However, to use the Forecast feature, you must assign a value to the Story Points, Effort, or Size field. IF you don't want to estimate requirements, you can simply assign a value of 1 to requirement estimates and then use the Forecast tool based on a count of work items. 

#### Best practice tips: 

- Periodically refine your backlog  
- Make sure features and requirements are sized appropriately
- Define the acceptance criteria and the definition of done for features and work 
- Map unmapped work to the Features and Epics 
- Forecast your backlog 

#### To learn how: 

- [Refine your backlog](backlogs/best-practices-product-backlog.md) 
- [Define features and epics](backlogs/define-features-epics.md)  
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Forecast your product backlog](sprints/forecast.md)  


## Use tags to support queries and filtering 
 
With work item tags team members can assign ad-hoc tags to work items. You can use these tags to filter backlogs and boards as well as query on work items.  For tags to be useful to the team, provide some general guidance on how your team should use tags. Consider documenting this guidance in a central place, such as the [project wiki](../project/wiki/about-readme-wiki.md). 
 
#### Best practice tips: 

- Have a policy in place about how your teams will use tags
- Indicate how you'll use tags to support queries, filtering, reporting 
- Consider using tags to identify cross-team or cross-project dependencies

#### To learn how: 

- [Add work item tags to categorize and filter lists and boards](queries/add-tags-to-work-items.md)

## Forecast and milestone planning  

To gain insight into what features can ship when, you can use the **Forecast** tool. This tool requires that you provide estimates to the Story Points, Effort, or Size field for each requirement. If you want to forecast on a simple count of work items, then simply assign the value of **1** to requirement estimates.


#### Order the features backlog in priority order 

As project managers, you'll want to always have your features backlog in priority order. This conveys to the development team which features are most important to complete first. 

Here the features backlog shows the sequence of features to ship. 

:::image type="content" source="media/best-practices/feature-backlog-priority-order.png" alt-text="Requirements backlog, ordered by feature parent":::

#### Order the requirements backlog based on parent features 

First you want to make sure you are completing the requirements needed to ship features. As shown in the following image, the requirements backlog has been ordered according to the features you want to ship. This assumes that all requirements in a feature must be complete in order to ship it. 

:::image type="content" source="media/best-practices/product-backlog-ordered-parent.png" alt-text="Requirements backlog, ordered by feature parent":::


#### Forecast the requirements backlog 

With estimates assigned to each requirement, and plugging in 12 as a velocity, the Forecast tool shows which requirements and features the team can complete within the next six sprints. Using the Planning tool, you can quickly assign requirements to the forecasted sprints.  

:::image type="content" source="media/best-practices/forecast-product-backlog-ordered-parent.png" alt-text="Forecast of Requirements backlog, ordered by feature parent":::

#### Update your Features board 

With a forecast of when a feature will ship, you can update each feature's iteration path. 

> [!TIP]    
> Quickly assign values to a feature by adding those fields to the card on the Kanban board. TO learn how, see [Customize cards](boards/customize-cards.md). 

:::image type="content" source="media/best-practices/features-board-iteration-path-updates.png" alt-text="Features board, updated iteration paths":::


#### Milestone planning

Milestone markers aren't used in Azure Boards work tracking, except for Delivery Plans. [Delivery Plans](plans/review-team-plans.md) provide a calendar view and allow you to define a milestone marker. 
However, you can use one or more of the following options to mark a work item as a milestone: 
- Simply prepend or append the word **Milestone** in the title of your work item
- [Add a work item tag](/azure/devops/boards/queries/add-tags-to-work-items) labeled **Milestone**   
- [Add a custom field](/azure/devops/organizations/settings/work/customize-process-field) labeled **Milestone** and populate it with a pick list of milestones  
- [Link work items](/azure/devops/boards/backlogs/add-link) using the Predecessor/Successor or Related link type to a milestone work item 
- [Assign the milestone work item to the sprint](/azure/devops/boards/sprints/assign-work-sprint) in which it's targeted for completion. 
 

## Manage dependencies  

In Microsoft Project, you manage tasks that depend on the completion of other tasks by linking them. To manage dependencies in Azure Boards, you can add similar linking by adding Predecessor/Successor link types to work items. You add these links from the Add link dialog for a work item. 

> [!div class="mx-imgBorder"]  
> ![Add link dialog, successor link type. ](media/best-practices/add-link-successor.png)  


#### Best practice tips: 

- Use **Predecessor/Successor** link types to track dependencies of work owned by other teams or within other projects
- Create queries to track, add, and triage dependencies 
- Use the [Dependency Tracker](https://marketplace.visualstudio.com/items?itemName=ms-eswm.dependencytracker) Marketplace extension to view work that you have dependencies on from other teams 
- Use the [Work Item Visualization](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) Marketplace extension to visualize dependencies 

> [!NOTE]   
> Marketplace extensions are not supported features of Azure Boards and therefore not supported by the product team. For questions, suggestions, or issues you have when using these extensions, visit their corresponding extension page. 

#### To learn how:

- [Link user stories, issues, bugs, and other work items](backlogs/add-link.md) 
- [Triage work items](queries/triage-work-items.md) 
- [Plan and track dependencies using the Dependency Tracker](extensions/dependency-tracker.md)
 

> [!NOTE] 
> Azure Boards doesn't provide a native view of the critical path. In part, as Agile methodologies favor a Minimum Viable Product (MVP) over Critical Path Management (CPM). By using MVP, you identify the shortest path and dependencies by prioritizing epics, features, stories and tasks. For additional context, see [The Critical Path on Agile Projects](https://www.mountaingoatsoftware.com/blog/the-critical-path-on-agile-projects) and [Running a lean startup on Azure DevOps](https://medium.com/@giladkhen/running-a-lean-startup-on-azure-devops-5934ced2cc42). 
 

## Work in sprints (development team)   

Sprints allow the development team to focus on completing a pre-selected set of work. Work assign to a sprint appears on the team's sprint backlog. Sprint backlogs are defined only for product backlogs, not for portfolio backlogs.  

#### Best practice tips  

Each sprint, perform the following tasks: 

- Plan each sprint with your team  
- Use the team's Sprint backlog to review sprint deliverables 
- Ensure each sprint work item is assigned to a team member 
- Ensure each work item is scoped to be completed within the sprint
- Ensure the acceptance criteria for the work is well defined and understood
- Update the status of sprint work items to track sprint burndown 
- Check in with other teams on dependencies that your team's work depends on 
- Monitor sprint progress using the Sprint burndown chart 

#### To learn how: 

- [Assign backlog items to a sprint](sprints/assign-work-sprint.md) 
- [Configure and monitor sprint burndown](../report/dashboards/configure-sprint-burndown.md) 
- [Define features and epics](backlogs/define-features-epics.md)  

#### Sprint burndown chart 

> [!div class="mx-imgBorder"]  
> ![Sprint burndown chart ](media/best-practices/sprint-burndown-chart.png) 


## Review progress and feature deliverables 

The three main tools you'll want to review progress and deliverables are: 

- Features Kanban board 
- Features backlog with rollup columns
- Delivery plans

### Features Kanbanboard 
 
Your Features board is another place to review progress and ensure the continuous flow of deliverables. The following image illustrates a customized Features board. In progress columns have been added such as *Need more info*, *Spec Complete*, *In Progress*, and *Customer Rollout*. These provide a more natural set of states as Features get proposed, researched, designed, developed, and then deployed to production. 

> [!div class="mx-imgBorder"]  
> ![Features board, customized](media/best-practices/features-board-customized.png) 


### Rollup 

One quick and visual way to monitor progress is from the Features backlog. By adding the rollup progress bar column, you can see what percentage of work items are completed for each feature, as shown in the following image.  

> [!div class="mx-imgBorder"]  
> ![Features backlog, progress bars](media/best-practices/feature-backlog-progress.png)  
 
### Delivery plans and multiple team deliverables  

To review features delivered across several teams, configure a delivery plan. Delivery plans provide an interactive board to review a calendar schedule of stories or features several teams plan to deliver.  

> [!div class="mx-imgBorder"]  
> ![Delivery plan](boards/plans/media/plans_view2.png) 
  
### Best practice tips  

- Customize your Features Kanban board to support your team's processes 
- Add fields to cards so that you can update their values quickly and easily
- Update the Iteration Path (Sprint) of Features as you gain clarity as to when they will ship 
- Review the Features board to talk through status, blocks/issues/risks/changes,and update status
- Use the filter feature to focus on tagged items, assigned by features, a specific sprint and more  
- Add rollup columns to your Feature backlog to monitor overall progress based on work item count completion 
- Use delivery plans to review features being delivered by several teams and discuss cross-team dependencies 

### To learn how: 

- [Display rollup progress or totals](backlogs/display-rollup.md)
- [Add columns to your Kanban board](boards/add-columns.md) 
- [Customize cards](boards/customize-cards.md)
- [Filter your Kanban board](boards/filter-kanban-board.md)
- [Review team Delivery Plans](plans/review-team-plans.md)


## Process improvement  

To improve your processes, you need to have shared goals and a shared plan. At the heart of Agile methods is continuous improvement. This is often accomplished through regular practices, such as: 

- Sprint planning 
- Setting sprint goals 
- Conducting regular retrospectives 

Consider the following areas when setting goals: 
- What are you learning about your customers? What do you need to know? 
- What data is being measured? Is it actionable? What data needs to be measured?
- How is the flow of deliverables? Is it as expected? Where can improvements be made? 
- Is your team empowered to do there best? What tools or information would help them improve?
- How well is information being shared? How well are teams collaborating? 
- How well is your team managing technical debt and closing bugs? 

Some of the Agile tools you can use to support process improvement are team velocity, team dashboards, and the [Retrospectives](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives) Marketplace extension. 
  
### Team velocity 

From the team velocity chart, you can gain an understanding as to how well the team is planning and executing a sprint. As shown in the following example, the velocity chart shows the planned, completed, completed late, and incomplete count of work items for several sprints. Teams can review this chart to help determine how well they are estimating and executing and how they might improve. 

> [!div class="mx-imgBorder"]  
> ![Example team velocity chart](../report/dashboards/media/velocity/analytics-velocity-azure-devops.png) 


### Retrospective tracking board 


#### Best practice tips  
- Identify process improvement goals that your team can agrees to, write them down and review them periodically
- Use team dashboards  
- At sprint planning meetings, have your team identify at least one sprint goal related to process improvement 
- Conduct regular retrospectives to capture what went well, what didn't go well, and actions to improve 
- Consider maintaining an improvement tracking board, such as that available with the [Retrospectives](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives) Marketplace extension 

- 

#### To learn how: 



- [Scaling Agile - Practices that scale](plans/practices-that-scale.md) 
- 
## Related articles

- [Configure and customize Azure Boards](configure-customize.md) 
- [Visibility across teams](plans/visibility-across-teams.md) 
- [Work with multi-team ownership of backlog items](backlogs/backlogs-overview.md#multi-team)


### Industry articles  
- [](https://www.belatrixsf.com/blog/agile-and-a-continuous-improvement-mindset) 
- [What is KAIZEN™](https://www.kaizen.com/what-is-kaizen.html)

<!---

 
*What are useful process improvement goals for a dev team? feature team?* 
Make your team accountable. ...
Measure results. ...

--> 