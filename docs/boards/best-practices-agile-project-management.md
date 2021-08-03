---
title: Best practices for Agile project management 
titleSuffix: Azure Boards
description: Get started guide for project managers new to Azure Boards to plan and track their projects  
ms.technology: devops-agile
ms.topic: best-practice
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops' 
ms.date: 07/09/2021
---



# Best practices for "light-weight" Agile project management 

[!INCLUDE [temp](includes/version-azure-boards-plus-azure-devops-server-2020.md)]

Azure Boards provides a choice of Agile planning tools, many of which work in combination with each other. This article provides a get-started guide for project managers new to Azure Boards. If you and your teams want to take a minimal tracking approach to plan and manage your projects, start with this guide. Also, if you are moving from waterfall project management to Agile methods, start with this guide.

> [!NOTE]
> If your team is committed to practicing Kanban or Scrum methods, see instead [About Boards and Kanban](boards/kanban-overview.md) or the [tutorials for implementing Scrum](./sprints/scrum-overview.md). 

In this article, we make the following suggestions and guidance: 

> [!div class="checklist"]  
> - Configure your teams to support rollup of development user stories to project management features
> - Define and work in a sprint cadence  
> - Use User Stories and Features to track deliverables 
> - Use your team's Feature and Product backlogs to create your product plan
> - Use tags to support queries and filtering
> - Forecast your product plan to gain insight into when deliverables can ship, set milestones
> - Manage dependencies by linking work items 
> - Assign work to sprints  
> - Review progress and deliverables using the Features backlog, rollup, and delivery plans 
> - Engage with process improvement during sprint planning and retrospectives 



## Configure your teams   

Azure Boards provides each team a set of Agile tools to plan and track work. Each project defines a default team, which you can start using immediately. However, if you have a number of development or feature teams, we recommend that you define a team in Azure DevOps for each feature team. This way, each team can work autonomously while collaborating with each other. 

#### Best practice tips: 

- Configure teams along the value streams your organization wants to deliver
- Define a team for each development group of six to twelve developers 
- Configure development teams to support rollup to project management feature teams 


#### To learn how: 

- [Configure a hierarchy of teams](plans/configure-hierarchical-teams.md) 
- [Add a team, move from one default team to several teams](../organizations/settings/add-teams.md) 
- [Agile culture](/devops/plan/adopting-agile) 
- [Scale Agile to Large Teams](/devops/plan/scaling-agile)

## Configure your sprints 

Sprints&mdash;specified by Iteration Paths&mdash;are defined for a project and then selected by teams. A sprint cadence can vary between one week to four weeks or longer. Also, you can define sprints within a hierarchy that includes release trains. You assign work to sprints that teams commit to deliver at the end of the sprint. These Azure Boards tools rely on sprint assignments to a team [Sprint backlogs, Taskboard, and Forecast](sprints/scrum-overview.md) and [Delivery plans](plans/review-team-plans.md). 

#### Best practice tips: 

- Define a sprint cadence that all teams within your product group will use  
- Define at least six or more iterations that will support planning for the next six to twelve months 
- Determine how teams will use iterations to manage backlog items
	- Unassigned sprint work is assigned to the default backlog, or
	- Unassigned sprint work is assigned to a designated future backlog sprint.


#### To learn how: 

- [About Area and Iteration Paths, Define and assign Iteration Paths](../organizations/settings/about-areas-iterations.md#iteration-path-guidance)
- [Define Iteration Paths and configure team iterations](../organizations/settings/set-iteration-paths-sprints.md) 
 
## Choose the work item types you'll use  

Determine which work item types your team will use to capture customer requirements and development work. If your project is based on the Agile process, we recommend using User Stories, Bugs, and Features.  

> [!NOTE]
> The guidance provided in this article are based on the Agile process. 

If your project is based on another process, such as Basic, Scrum, or CMMI, you have a choice from those shown in the following images. Also, each team can determine how they want to track bugs.

[!INCLUDE [temp](includes/work-item-types.md)]

[!INCLUDE [temp](includes/note-requirements-terms.md)]

#### Best practice tips: 

- Use **Features** to capture customer features you want to ship 
- Quickly add features or requirements from the backlog and fill in details later
- Use **Requirements**&mdash;User Stories (Agile),  Issues (Basic) Product Backlog Items (Scrum), or Requirements (CMMI)&mdash;to break-down Features into work the development team will own 
- Use Bugs to capture code defects 
- Map Requirements to Features to track progress at the project management level 
- Size Requirements to be completed within a sprint 
- Size Features to be completed within a sprint or several sprints 
- Size Epics to be delivered quarterly or to some milestone objective 
- Let Developers use Tasks to break-down their work as needed.


As project managers, you manage the Features and the development team manages the Requirements. By mapping them using parent-child links, you gain visibility into the progress of your features. Each work item you add to your team backlog is automatically assigned the default area path and iteration path set for your team. 

If you have larger initiatives or scenarios that require shipping several Features, you can group these under Epics, again using parent-child links. 

#### To learn how: 

- [Define features and epics](backlogs/define-features-epics.md) 
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Organize your backlog (map or reparent)](backlogs/organize-backlog.md)  


## Create your product plan   

Create your product plan using the Features Backlog. The development team then creates their product plan using the Product Backlog. Periodically you'll want to review and groom your product plans.  


### Features backlog 

Project managers initiate the product plan by adding features to the Features backlog. Each feature should represent a shippable deliverable that addresses a customer need. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Features backlog.](media/best-practices/features-backlog.png)  

### Product backlog 

Development teams add User Stories to their product backlog so that  the User Story is automatically assigned the team's default Area Path and Iteration Path. Then, they can map those stories under each Feature that represents the work they'll do to implement the Feature. Each User Story should be sized so that they can be completed within a sprint.  

> [!div class="mx-imgBorder"]  
> ![Screenshot of Product backlog.](media/best-practices/product-backlog.png)  
 
### Groom each backlog  

Periodically review each backlog to perform these tasks: 
- Define work to be performed 
- Reorder work items using drag-and-drop so that they appear in priority order 
- Open work items and add details 
- Assign work to team members or to sprints
- Capture technical debt and non-feature work required to support a healthy ecosystem of delivery 
- Map unparented work to the Feature they belong to
- (Optional) Estimate size of requirements to help determine team velocity and support forecasting  

> [!TIP]   
> You can monitor team velocity based on estimates assigned to completed work or a simple count of work items completed during sprints. However, to use the Forecast feature, you must assign a value to the Story Points, Effort, or Size field. If you don't want to estimate requirements, you can simply assign a value of 1 to requirement estimates and then use the Forecast tool based on a count of work items. 

#### Best practice tips: 

- Periodically refine your backlog  
- Make sure features and requirements are sized appropriately
- Define the acceptance criteria and the definition of done for features and work 
- Map unmapped work to Features 
- Forecast your backlog  

#### To learn how: 

- [Refine your backlog](backlogs/best-practices-product-backlog.md) 
- [Define features and epics](backlogs/define-features-epics.md)  
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Forecast your product backlog](sprints/forecast.md)  


## Use tags to support queries and filtering 
 
With work item tags, team members can assign ad-hoc tags to work items. You can use these tags to filter backlogs and boards as well as query on work items.  For tags to be useful to the team, provide some general guidance on how your team should use tags. Consider documenting this guidance in a central place, such as the [project wiki](../project/wiki/about-readme-wiki.md). 

The following image illustrates a Kanban board filtered on the *web* keyword which displays cards with the *Web* tag. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Kanban board, Filter using keyword search.](backlogs/media/filter-boards/filter-kb-text-web-services.png)



#### Best practice tips: 

- Have a policy in place about how your teams will use tags
- Indicate how you'll use tags to support queries, filtering, reporting 
- Consider using tags to identify cross-team or cross-project dependencies

#### To learn how: 

- [Add work item tags to categorize and filter lists and boards](queries/add-tags-to-work-items.md)
- [Filter your Kanban board](./backlogs/filter-backlogs-boards-plans.md)
- [Create a Wiki for your project](../project/wiki/wiki-create-repo.md) 


## Forecast and milestone planning  

To gain insight into what features can ship when, use the **Forecast** tool. This tool requires that you provide estimates to the Story Points, Effort, or Size field for each requirement. If you want to forecast on a simple count of work items, then simply assign the value of **1** to requirement estimates.


#### Order the features backlog in priority order 

As project managers, you'll want to always have your features backlog in priority order. This conveys to the development team which features are most important to complete first. 

Here the features backlog shows the sequence of features to ship. 

:::image type="content" source="media/best-practices/feature-backlog-priority-order.png" alt-text="Screenshot of Features backlog, ordered by feature parent.":::

#### Order the requirements backlog based on parent features 

First you want to make sure you are completing the requirements needed to ship features. As shown in the following image, the requirements backlog has been ordered according to the features you want to ship. This ordering assumes that all requirements in a feature must be complete in order to ship it. Also, Story Points have been assigned to each User Story. 

:::image type="content" source="media/best-practices/product-backlog-ordered-parent.png" alt-text="Screenshot of Requirements backlog, ordered by feature parent.":::


#### Forecast the requirements backlog 

With estimates assigned to each requirement, you can set a team velocity. In the example below, we specify 12 for the velocity, equivalent to stating that on average the team can complete 12 Story Points per sprint. The Forecast tool shows which requirements and features the team can complete within the next six sprints. Using the Planning tool, you can quickly assign requirements to the forecasted sprints.  

[!INCLUDE [temp](../includes/lightbox-image.md)] 

> [!div class="mx-imgBorder"]  
> [![Screenshot of Forecast of Requirements backlog, ordered by feature parent.](media/best-practices/forecast-product-backlog-ordered-parent.png)](media/best-practices/forecast-product-backlog-ordered-parent.png#lightbox)

Getting good at estimates and having predictable team velocities are useful team goals for [process improvement](#process-improvement).
 
#### Update your Features board 

With a forecast of when a feature will ship, you can update each feature's iteration path. Quickly assign values to a feature by adding those fields to the card on the Kanban board as shown in the following image. 

:::image type="content" source="media/best-practices/features-board-iteration-path-updates.png" alt-text="Screenshot of Features board with updated iteration paths.":::


#### Milestone planning

Milestone markers aren't used in Azure Boards work tracking, except for Delivery Plans. [Delivery Plans](plans/review-team-plans.md) provide a calendar view and allow you to define a milestone marker. 
However, you can use one or more of the following options to mark a work item as a milestone: 
- Simply prepend or append the word **Milestone** in the title of your work item
- [Add a work item tag](./queries/add-tags-to-work-items.md) labeled **Milestone**   
- [Add a custom field](../organizations/settings/work/customize-process-field.md) labeled **Milestone** and populate it with a pick list of milestones  
- [Link work items](./backlogs/add-link.md) using the Predecessor/Successor or Related link type to a milestone work item 
- [Assign a milestone work item to the sprint](./sprints/assign-work-sprint.md) in which it's targeted for completion. 
 

## Manage dependencies  

In Microsoft Project, you manage tasks that depend on the completion of other tasks by linking them. To manage dependencies in Azure Boards, you can add similar linking by adding Predecessor/Successor link types to work items. You add these links from the Add link dialog for a work item. 


### Add link dialog

Azure Boards supports a number of link types to track related work. Choose the Predecessor/Successor link types to track work with dependencies. The quickest way to add a number of these links is to add a tag to work items that participate in producing or consuming dependencies, create a query based on this tag, and then add the required links from the triage mode of the query results. 

The following Add link dialog illustrates how two work items are linked using the Successor link type. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Add link dialog, successor link type.](media/best-practices/add-link-successor.png)  

### Visualize work item relationships 

::: moniker range="azure-devops"

You can view dependencies and identify dependencies that have issues with Delivery Plans. As shown in the following image, you can toggle the display of dependency lines between linked work items. To learn more, see [Track dependencies using Delivery Plans](plans/track-dependencies.md). 

:::image type="content" source="plans/media/dependencies/dependency-lines.png" alt-text="Screenshot of dependency lines between several work items.":::

::: moniker-end

::: moniker range="< azure-devops"

With the [Work Item Visualization](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) Marketplace extension, you can visualize the link relationships among several work items as shown in the following image. 

[!INCLUDE [temp](../includes/lightbox-image.md)] 

> [!div class="mx-imgBorder"]  
> [![Screenshot of Visualize work item relationships.](media/best-practices/visualize-successor-links-cross-project-wide.png)](media/best-practices/visualize-successor-links-cross-project-wide.png#lightbox)

::: moniker-end

### Minimum Viable Product versus Critical Path Management  

Azure Boards doesn't provide a native view of the critical path. In part, as Agile methodologies favor a Minimum Viable Product (MVP) over Critical Path Management (CPM). By using MVP, you identify the shortest path and dependencies by prioritizing epics, features, stories and tasks. For additional context, see [The Critical Path on Agile Projects](https://www.mountaingoatsoftware.com/blog/the-critical-path-on-agile-projects) and [Running a lean startup on Azure DevOps](https://medium.com/@giladkhen/running-a-lean-startup-on-azure-devops-5934ced2cc42). 

#### Best practice tips: 

- Add a `dependency` tag to work items participating in dependency management
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
 

## Work in sprints   

Sprints allow the development team to focus on completing a pre-selected set of work. Work assign to a sprint appears on the team's sprint backlog. Sprint backlogs are defined only for product backlogs, not for portfolio backlogs.  


#### Sprint burndown chart 

By updating the status of work daily throughout a sprint, you can easily track sprint progress with the Sprint burndown chart, as shown in the following image. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Analytics Sprint burndown chart.](media/best-practices/sprint-burndown-chart.png) 


#### Best practice tips  

Each sprint, perform the following tasks: 

- Plan each sprint with your team  
- Use the team's Sprint backlog to review sprint deliverables 
- Ensure each sprint work item is assigned to a team member 
- Ensure each work item is scoped to be completed within the sprint
- Ensure the acceptance criteria for the work is well defined and understood
- Update the status of sprint work items as work moves from a *New* to *Active* to *Completed* state to track sprint burndown  
- Check in with other teams on dependencies that your team's work depends on 
- Monitor sprint progress using the Sprint burndown chart 

#### To learn how: 

- [Assign backlog items to a sprint](sprints/assign-work-sprint.md) 
- [Configure and monitor sprint burndown](../report/dashboards/configure-sprint-burndown.md) 
- [Define features and epics](backlogs/define-features-epics.md)  



## Review progress and feature deliverables 

The three main tools you'll want to use to review progress and deliverables are: 

- Features Kanban board 
- Features backlog with rollup columns
- Delivery plans

### Features Kanban board 
 
Your Features board is another place to review progress and ensure the continuous flow of deliverables. The following image illustrates a customized Features board. In progress columns have been added such as *Need more info*, *Spec Complete*, *In Progress*, and *Customer Rollout*. These provide a more natural set of states as Features get proposed, researched, designed, developed, and then deployed to production. 

[!INCLUDE [temp](../includes/lightbox-image.md)] 

> [!div class="mx-imgBorder"]  
> [![Screenshot of Features board with customized columns.](media/best-practices/features-board-customized.png)](media/best-practices/features-board-customized.png#lightbox)



### Rollup 

One quick and visual way to monitor progress is from the Features backlog. By adding the rollup progress bar column, you can see what percentage of work items are completed for each feature, as shown in the following image.  

> [!div class="mx-imgBorder"]  
> ![Screenshot of Features backlog showing progress bars column option.](media/best-practices/feature-backlog-progress.png)  
 
### Delivery plans and multiple team deliverables  

To review features delivered across several teams, configure a delivery plan. Delivery plans provide an interactive board to review a calendar schedule of stories or features several teams plan to deliver.  

::: moniker range="azure-devops"  
:::image type="content" source="./plans/media/plans/overview-with-callouts.png " border="false" alt-text="Screenshot with callouts of Delivery Plans, collapsed teams.":::   
::: moniker-end 

::: moniker range="< azure-devops"  
<img src="./extensions/media/plans/plans-view-2.png" alt="Interactive plan elements" />
::: moniker-end  
  
### Best practice tips  

- Customize your Features Kanban board to support your team's processes 
- Add fields to cards so that you can update their values quickly and easily
- Update the Iteration Path (Sprint) of Features as you gain clarity as to when they will ship 
- Review the Features board to talk through status, blocks/issues/risks/changes,and update status
- Use the filter feature to focus on tagged items, assigned by features, a specific sprint and more  
- Add rollup columns to your Feature backlog to monitor overall progress based on work item count completion 
- Use delivery plans to review features being delivered by several teams and discuss cross-team dependencies 

### To learn how: 

- [Add columns to your Kanban board](boards/add-columns.md) 
- [Customize cards](boards/customize-cards.md)
- [Filter your Kanban board](./backlogs/filter-backlogs-boards-plans.md)
- [Display rollup progress or totals](backlogs/display-rollup.md)
- [Review team Delivery Plans](plans/review-team-plans.md)

<a id="process-improvement" /> 

## Process improvement  

At the heart of Agile methods is continuous improvement. To improve your processes, you need to have shared goals and a shared plan. To initiate process improvement activities, consider adding them through regular practices, such as: 

- Sprint planning 
- Setting sprint goals 
- Conducting regular retrospectives 

Consider the following questions when setting goals: 

- *What are you learning about your customers? What do you need to know?* 
- *What data is being measured? Is it actionable? What data needs to be measured?*
- *How is the flow of deliverables? Is it as expected? Where can improvements be made?* 
- *Is your team empowered to do there best? What tools or information would help them improve?*
- *How well is information being shared? How well are teams collaborating?* 
- *How well is your team managing technical debt and closing bugs?*

Some of the Agile tools you can use to support process improvement are team velocity, team dashboards, and the [Retrospectives](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives) Marketplace extension. 
  
### Team velocity 

From the team velocity chart, you can gain an understanding as to how well the team is planning and executing a sprint. As shown in the following example, the velocity chart shows the planned, completed, completed late, and incomplete count of work items for several sprints. Teams can review this chart to help determine how well they are estimating and executing and how they might improve. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Example team velocity chart.](../report/dashboards/media/velocity/analytics-velocity-azure-devops.png) 


### Team dashboards  

Teams can define one or more dashboards to share information and monitor real-time data on work progress. 
 
> [!div class="mx-imgBorder"]  
> ![Screenshot of Example team dashboard.](../report/dashboards/media/dashboard-view-with-widgets.png)  

#### Best practice tips 

- Identify process improvement goals that your team can agree to, write them down and review them periodically  
- Use team dashboards to share information and work tracking charts which you and your team review periodically  
- At sprint planning meetings, have your team identify at least one sprint goal related to process improvement  
- Conduct regular retrospectives to capture what went well, what didn't go well, and actions to improve  
- Maintain an improvement tracking board, such as that available with the [Retrospectives](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives) Marketplace extension. 
 

#### To learn how: 

- [View or configure team velocity](../report/dashboards/team-velocity.md)
- [Add, rename, and delete dashboards](../report/dashboards/dashboards.md)
- [Scaling Agile - Practices that scale](plans/practices-that-scale.md) 
- [Retrospectives Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives) 

## Try this next
> [!div class="nextstepaction"]
> [Configure and customize Azure Boards](configure-customize.md)


## Related articles
- [Manage requirements](../cross-service/manage-requirements.md)
- [Tasks supported by Backlogs, Boards, Taskboards, and Plans](backlogs/backlogs-boards-plans.md) 
- [Work with multi-team ownership of backlog items](backlogs/backlogs-overview.md#multi-team)
- [11 Reasons for using Azure Boards to plan and track your work](get-started/why-use-azure-boards.md)

### Industry articles  

- [Agile and a continuous improvement mindset](https://scrumtraininginstitute.com/agile-scrum-training/agile-team-health-check/#:~:text=At%20the%20core%20of%20Agile%20continuous%20improvement%20is,your%20organization%20can%20develop%20a%20continuous%20improvement%20mindset) 
- [What is KAIZEN™](https://www.kaizen.com/what-is-kaizen.html)
