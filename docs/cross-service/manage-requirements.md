---
title: Manage requirements, Agile
titleSuffix: Azure DevOps
description: Learn about the tools and features available to manage requirements for Agile projects in Azure DevOps. 
ms.subservice: azure-devops-cross-service
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/10/2023
---

# Manage requirements 

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

In this article, learn the key concepts and tasks associated with managing project requirements with Agile tools and features in Azure DevOps.

> [!TIP]
> *Requirements management is a continuous process throughout a project lifecycle&mdash;encompassing the processes of documenting, analyzing, prioritizing, tracking, and collaborating with stakeholders to agree on work to be performed. A single requirement corresponds to a capability which a project outcome&mdash;product, service, architecture, performance&mdash;should conform.*

## Capture requirements  

Use work items to capture requirements. Each work item has a type, which depends on the [process you choose](../boards/work-items/guidance/choose-process.md). You can also create a custom work item type.

[!INCLUDE [temp](../boards/includes/note-requirements-terms.md)] 
 
### Work item types 

Work items let you capture different information and workflows. Each work item has a type, which depends on the process you choose. You can use these default work item types for requirements and defects:

- Agile: User Story and Bug
- Basic: Issue and Bug
- Scrum: Product Backlog Item and Bug
- CMMI: Requirement and Bug

You can customize each process for your Azure DevOps project. You can also decide how to track bugs for each team.

**Default work item types**

[!INCLUDE [temp](../boards/includes/work-item-types.md)]

### Customize work item types  

You can use custom work item types in the following ways:  
- Add custom fields and workflow states
- Add custom rules to support business workflow processes 
- Add custom portfolio backlogs and customize backlogs and boards  
- Add custom controls to work item forms to gain enhanced functionality

### Add work items to product backlog or board 

Capture requirements by adding a Title to a product backlog and add the details later. 

**Capture requirements on the product backlog** 

![Screenshot of adding product backlog item.](media/manage-requirements/add-new-items-agile.png)   

### Work item fields

Each work item supports tracking data contained in work item fields. Also, it captures changes as updates occur within the **History** field and comments made in the **Discussion** section. The following image shows a sample work item form for the User Story work item type.

Use work items to support the following tasks: 
- Add information, update status, assign to team members, link work items, and attach files 
- Assign work to a timebox or sprint  
- Quickly fill in work item fields using work item templates
- Contribute to a queryable discussion thread  
- Prioritize work and triage work items. 

Other features that support end-to-end traceability are the **Development** and **Deployment** sections. These sections support the following tasks and insights:

- Create a new branch or pull request from a work item
- Complete the pull request
- Perform a squash merge
- Create a branch for several work items
- Link a work item to existing development and build objects 
- View the release stages associated with the work item within the work item form in real time 
- View the status of releases within those work items that are associated with commits in the build and release pipelines  

### Import and update requirements using Excel 

You can also use a .csv file or an Excel spreadsheet to import and update your requirements. These tools let you work with a flat list or a tree of work items. For example, you can define a tree of Epics, Features, and User Stories in Excel and then import them to Azure DevOps, as shown in the following image.

**Import requirements from Excel** 

![Screenshot of Excel tree list of requirements to import.](../boards/backlogs/office/media/excel/import-safe-hierarchy-list.png)   

### Functional and nonfunctional requirements 

Work items help you track any work that you or your team need to do. You can use the same work item type for both functional and nonfunctional requirements. Functional requirements describe what your product or service should do. Nonfunctional requirements describe how your product or service should operate. 

You can use tags, the Business Value field, or a custom field to categorize your requirements.
 
### Maintain requirement specifications 

Some requirements need more details than what you can put in the work item. You can use Azure DevOps to store and manage your requirements in an Azure Repos repository. Or, you can use a project wiki to keep your specifications in one place.

You can link or attach your specifications to your requirements.
 
## Analyze and prioritize requirements

Prioritize and refine your backlog to make sure your requirements are clear and well-defined. You can use these Azure Boards tools to help you with the following tasks:

**Product backlog**: Drag and drop work items to reorder them by priority and edit multiple work items at once to change assignments or update fields.
**Query Results, Triage mode**: Review a list of work items and their forms to quickly update them and add details.

**Prioritize feature backlog** 

:::image type="content" source="media/manage-requirements/features-backlog-priority-order.png" alt-text="Screenshot of Features backlog, ordered by feature parent.":::

## Group and organize requirements

Group your requirements by features or business objectives using Azure Boards. You can use portfolio work item types, portfolio backlogs and boards, and a Mapping tool to link your requirements to a higher-level work item.

You can also use work item tags to group your requirements in different ways.

### Epics, features, and portfolio backlogs

Use parent-child links to create a hierarchy of requirements, features, and epics - useful for organizations with multiple teams that want to see how their work contributes to the overall goals and use the portfolio planning tools.

With a hierarchy, you can manage a set of features that different teams work on. You can also see the summary of estimates, progress, and more on the product backlogs.

**Group user stories under Features using Mapping** 

:::image type="content" source="media/manage-requirements/mapping-user-stories-to-features.png" alt-text="Screenshot of mapping user stories under Features using Mapping tool.":::

### Use tags to group work items   
 
Work item tags are labels that team members can add to work items. You can filter backlogs and boards by these tags to see only the work items that match them. You can also use tags in your queries. For example, you can see only the cards with the Web tag on the board by filtering it with the *web* tag, as shown in the following image.

**Filter backlogs and boards based on tags** 

![Screenshot of board, Filter using keyword search.](../boards/backlogs/media/filter-boards/filter-kb-text-web-services.png)

## Implement Kanban or Scrum  

Kanban and Scrum are two major Agile methods that Azure Boards supports. You can also use a hybrid approach like Scrumban that combines elements of both methods.

### Implement Kanban  

Use a Kanban board to visualize your work items on a product or portfolio backlog. The board shows the work items that belong to your team, based on the area and iteration paths you choose.

You can customize your board to match your Kanban practices. For example, you can define columns and swimlanes, set WIP limits, and specify the Definition of Done. You can drag a work item to a different column to update its status as it moves through the stages of your workflow.

**Example board** 

:::image type="content" source="../boards/boards/media/alm-cc-move-card.png" alt-text="Screenshot of board, Agile template, update status of work item."::: 

### Implement Scrum  

Use a sprint backlog and a Taskboard to see the work items that your team has planned for a specific sprint. You can assign work items to a sprint by dragging and dropping them from your requirements backlog. Then, you can view them in a separate **Sprint Backlog**.

**Example sprint backlog** 

![Screenshot of Boards>Sprints>Backlog](../boards/work-items/media/view-add/view-sprint-backlogs.png)    

Use the following Scrum practices to plan and track your work:

- Choose a sprint for your requirements
- Break down your requirements into tasks
- Set how much work each team member can do in a sprint
- Adjust your work to fit your sprint capacity
- Share your sprint plan with others
- Filter, update, and change the status of your tasks
- Monitor your sprint progress with a burndown chart

#### Sprint burndown chart 

The Sprint burndown chart shows you how your sprint is going by updating the work status every day, as you can see in the following image.

**Example Sprint burndown chart** 

![Screenshot of Analytics Sprint burndown chart.](../boards/media/best-practices/sprint-burndown-chart.png) 

## Manage dependencies

In Microsoft Project, you manage tasks that depend on the completion of other tasks by linking them. To manage dependencies in Azure Boards, you can link work items using the Predecessor/Successor link type. Once you've linked work items, you can view link relationships using the [Work Item Visualization](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) Marketplace extension. The following image illustrates link relationships among several work items. 

[!INCLUDE [temp](../includes/lightbox-image.md)] 

[![Screenshot of Visualize work item relationships.](../boards/media/best-practices/visualize-successor-links-cross-project-wide.png)](../boards/media/best-practices/visualize-successor-links-cross-project-wide.png#lightbox)

### Minimum Viable Product versus Critical Path Management  

Azure Boards doesn't have a built-in way to show the critical path because Agile methods prefer a Minimum Viable Product (MVP) over Critical Path Management (CPM). With MVP, you find the shortest and most dependent path by ranking epics, features, stories, and tasks by importance.

## Perform milestone planning

You can use team velocity and forecasting to plan when you can deliver your work.

### Team velocity

Working in sprints helps you understand your team’s velocity. Velocity shows how much work your team can finish in a sprint, based on the number or the size of the completed work items.

**Example team Velocity chart** 

![Screenshot of team velocity chart.](media/manage-requirements/team-velocity.png) 

### Forecast requirements

Use the **Forecast** tool to estimate Story Points, Effort, or Size for each requirement.  

You can also set team velocity based on your estimates. For example, if you say your team can do 12 Story Points per sprint, the Forecast tool shows you which requirements and features you can finish in the next six sprints. You can use the Planning tool to assign requirements to the predicted sprints. 

**Example Forecast of requirements backlog** 

[![Screenshot of Forecast of Requirements backlog, ordered by feature parent.](../boards/media/best-practices/forecast-product-backlog-ordered-parent.png)]

Use a Marketplace extension to integrate your requirements planning with Microsoft Project tools.

#### Milestone markers

Milestone markers aren't used in Azure Boards work tracking, except for Delivery Plans. [Delivery Plans](#delivery-plans-and-multiple-team-deliverables) provide a calendar view and allow you to define a milestone marker. 

You can use one or more of the following options to mark a work item as a milestone: 
- Prepend or append the word **Milestone** in the title of your work item
- Add a work item tag labeled **Milestone**   
- Add a custom field labeled **Milestone** and populate it with a pick list of milestones  
- Link work items using the Predecessor/Successor or Related link type to a milestone work item 
- Assign a milestone work item to the sprint in which it's targeted for completion. 

## Assign requirements to timeboxes 

You can quickly assign work items to a sprint through drag-and-drop from the product backlog to the sprint listed within the Planning pane. 

**Example assign requirements to sprints** 

![Screenshot of drag-drop items onto a sprint.](../boards/sprints/media/define-sprints/drag-drop-backlog-items-to-sprint.png)

## Monitor and report on progress 

To review progress and deliverables, you can use the following tools:

- Features board: Shows the status of each feature and its tasks
- Features backlog: Displays the rollup columns for the features and their child work items
- Delivery plans: Provides a timeline view of the features and their dependencies across different teams

### Features board 
 
You can also use your **Features** board to track progress and ensure the continuous delivery of value. The following image shows an example of a customized Features board. It has added columns for different stages of feature development, such as Need more info, Spec Complete, In Progress, and Customer Rollout. These columns reflect the natural flow of features from proposal to production.

**Example of Features board with customized columns** 

[!INCLUDE [temp](../includes/lightbox-image.md)] 

[![Screenshot of Features board with customized columns.](../boards/media/best-practices/features-board-customized.png)](../boards/media/best-practices/features-board-customized.png#lightbox)

### Rollup 

The **Features backlog** offers a quick and visual way to monitor progress. You can add the **rollup progress bar** column to see the completion percentage of each feature’s work items. The following image shows how the column shows the progress of different features.

**Example of Requirements backlog showing progress rollup** 

![Screenshot of Features backlog showing progress bars column option.](../boards/media/best-practices/feature-backlog-progress.png)  


### Delivery plans and multiple team deliverables  

If you want to see the features that several teams are delivering across a timeline, you can set up a delivery plan. A delivery plan is an interactive board that shows a calendar view of the stories or features that different teams plan to deliver.

**Example of multi-team delivery plan** 

::: moniker range="azure-devops"  
:::image type="content" source="../boards/plans/media/plans/overview-with-callouts.png " border="false" alt-text="Screenshot with callouts of Delivery Plans, collapsed teams.":::   
::: moniker-end 

::: moniker range="< azure-devops"  
<img src="../boards/extensions/media/plans/plans-view-2.png" alt="Interactive plan elements" />
::: moniker-end 
 
## Get notified of changes 

Azure DevOps provides a robust alert system, where project members can [set alerts for themselves, a team, or a project](../organizations/notifications/about-notifications.md). As changes occur to work items, code reviews, source control files, and builds, you can receive email notifications. 
 
## Related articles 

- [What is Agile?](/devops/plan/what-is-agile)
- [Best practices for "light-weight" Agile project management](../boards/best-practices-agile-project-management.md)
- [About work items](../boards/work-items/about-work-items.md) 
- [Create your backlog](../boards/backlogs/create-your-backlog.md)  
- [Link user stories, issues, bugs, and other work items](../boards/backlogs/add-link.md) 
