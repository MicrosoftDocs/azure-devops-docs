---
title: Quickstart guide to plan and track work for either the Basic or Agile process
titleSuffix: Azure Boards 
description: Plan and track work in your new team project on Azure Boards
ms.custom: boards-get-started
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 08/23/2019
---


# Plan and track work  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You track your work by creating work items. This article walks you through creating issues and tasks using a Kanban board for the Basic process, or creating user stories and tasks using for the Agile process. 

> [!NOTE]  
> The Basic process is currently only available from Azure DevOps Services. For on-premises deployments, choose the Agile process. 

Choose either the **Basic process** or **Agile process** for guidance depending on what process was selected for your project.  

[!INCLUDE [temp](../_shared/basic-process-note.md)] 

#### [Basic process](#tab/basic-process) 

The Basic process provides three work item types&mdash;epics, issues, and tasks&mdash;to plan and track work. We recommend you start by adding issues to track your user stories, bugs, or feature items. If you need to group them into a hierarchy, you can define epics. If you want to track additional details of work, you can add tasks to an issue. 

> [!div class="mx-tdCol2BreakAll"]
> |Work item types| Backlog hierarchy |
> |------|---------|
> |![Basic process work item types, conceptual image](_img/about-boards/basic-process-epics-issues-tasks-2.png) | ![Hierarchical backlog](_img/about-boards/hierarchy-2.png) |

Within each work item form, you can describe the work to be done, assign work to project contributors, track status, and collaborate with others through the Discussion section. 

Here we show how to add issues and child tasks from the web portal and add details to those work items . 


#### [Agile process](#tab/agile-process) 

The Agile process provides several work item types&mdash;for example, user stories, tasks, bugs, features, and epics among others&mdash;to plan and track work. We recommend you start by adding user stories. If you need to group them into a hierarchy, you can define features. If you want to track additional details of work, you can add tasks to a user story.  

> [!div class="mx-tdCol2BreakAll"]
> |Work item types| Backlog hierarchy |
> |------|---------|
> |![Agile process work item types, conceptual image](_img/about-boards/agile-process-wits.png) | ![Hierarchical backlog](_img/about-boards/agile-hierarchy.png) |

Within each work item form, you can describe the work to be done, assign work to project contributors, track status, and collaborate with others through the Discussion section. 

Here we show how to add user stories and child tasks from the web portal and add details to those work items . 

* * * 



<!---
## Prerequisites

- After you connect to a project, you can add work items. If you don't have a project yet, [create one in Azure DevOps](sign-up-invite-teammates.md). 
- To add issues and tasks to the board, and use all other board features, you must be granted **Basic** access and have been added as a member of the Contributors or Project Administrators group. 
- If you have been granted **Stakeholder** access for a private project and have been added as a member of the Contributors or Project Administrators group, you can view boards, open and modify issues and tasks, and add child tasks to a checklist. However, you can't update the status of an issue or reorder or reparent an issue using drag-and-drop, nor update a field on a card. 
- If you have been granted **Stakeholder** access for a public project, and have been added as a member of the Contributors or Project Administrators group, you have full access to all Boards features. 

For details, see [Default permissions and access for Azure Boards](permissions-access-boards.md)

-->


<a id="define-new-work">  </a>

## Open the Kanban board 

#### [Basic process](#tab/basic-process) 

The Issues Kanban board is the best tool for quickly adding issues and child tasks. To open, choose **Boards>Boards**.  
![Open your Kanban board](_img/track-issues/open-kanban-board-issues.png)  

The Epics Kanban board is the best tool for quickly adding epics and issues that are children of those epics. 
To open the Epics board from the Issues board, choose **Epics** from the board selector. 

> [!div class="mx-imgBorder"]  
> ![Open the epics board](_img/track-issues/choose-epics-board.png)  

#### [Agile process](#tab/agile-process) 

The User Stories Kanban board is the best tool for quickly adding user stories and child tasks. To open, choose **Boards>Boards**.  

![Open your Kanban board](_img/plan-track-work/open-kanban-board-user-stories.png)  

The Features Kanban board is the best tool for quickly adding features and user stories that are children of those features. 
To open the Features board from the User Stories board, choose **Features** from the board selector. 

> [!div class="mx-imgBorder"]  
> ![Open the features board](_img/plan-track-work/choose-features-board.png)  

* * *


## Add issues or user stories 

#### [Basic process](#tab/basic-process) 

1. From the Issues board, choose **New item** and start adding those issues you want to track. 

	> [!div class="mx-imgBorder"]  
	> ![Add new item](_img/track-issues/issues-board-new-item.png) 

2. Enter return and the system assigns a work item ID to the issue. 

	> [!div class="mx-imgBorder"]  
	> ![Added item](_img/track-issues/issues-board-added-item.png) 

3. To track the work you want to manage, add as many issues that you need.  


#### [Agile process](#tab/agile-process) 


1. From the User Stories board, choose **New item** and start adding those stories you want to track. 

	> [!div class="mx-imgBorder"]  
	> ![Add new item](_img/plan-track-work/new-user-story-kanban-board.png) 

1. Enter return and the system assigns a work item ID to the user story. 

	> [!div class="mx-imgBorder"]  
	> ![Added item](_img/plan-track-work/users-stories-board-added-item.png) 

2. To track the work you want to manage, add as many user stories that you need.  

* * *


## Add details to an issue or user story

Choose the issue or user story title to open it. Change one or more field values, add a description, or make a note in the **Discussion** section. You can also choose the ![attachments icon](../_img/icons/icon-attachments-tab-wi.png) **Attachments** tab and drag-and-drop a file to share the file with others.  


#### [Basic process](#tab/basic-process) 

For example, here we assign the issue to Raisa Pokrovskaya and we add a discussion note, at-mentioning Raisa. 

> [!div class="mx-imgBorder"]
> ![Issues work item form, add details ](_img/track-issues/issue-form-add-details.png)

> [!NOTE]  
> You can only assign work to a user who has been added to the project. 

Choose **Save & Close** when done. 

### Field description

<table valign="top" width="100%">
<tbody valign="top" >
<tr>
<th width="20%">Field</th>
<th width="80%">Definition</th>
</tr>
<tr>
    <td width="18%"><p><a href="/azure/devops/boards/queries/titles-ids-descriptions" data-raw-source="[Title](/azure/devops/boards/queries/titles-ids-descriptions)">Title</a> </p></td>
	<td><p>Enter a description of 255 characters or less. You can always modify the title later.</p></td></tr>
<tr>
    <td><p><a href="/azure/devops/boards/queries/query-by-workflow-changes" data-raw-source="[Assigned To](/azure/devops/boards/queries/query-by-workflow-changes)">Assigned To</a></p></td>
	<td><p>Assign the work item to the team member responsible for performing the work. Depending on the context you are working in, the drop-down menu will list only team members or contributors to the project.</p></td></tr>
<tr>
    <td><p><a href="/azure/devops/boards/queries/query-by-workflow-changes" data-raw-source="[State](/azure/devops/boards/queries/query-by-workflow-changes)">State</a></p></td>
	<td><p>When the work item is created, the State defaults to the first state in the workflow. As work progresses, update it to reflect the current state.</p></td></tr>
<tr>
    <td><p><a href="/azure/devops/boards/queries/query-by-workflow-changes" data-raw-source="[Reason](/azure/devops/boards/queries/query-by-workflow-changes)">Reason</a></p></td>
	<td><p>Use the default first. Update it when you change state as need. Each State is associated with a default reason.</p></td></tr>
<tr>
    <td><a href="/azure/devops/organizations/settings/set-area-paths" data-raw-source="[Area](/azure/devops/organizations/settings/set-area-paths)">Area</a></td>
    <td>Choose the area path associated with the product or team, or leave blank until assigned during a planning meeting. To change the dropdown list of areas, see <a href="../../organizations/settings/set-area-paths.md" data-raw-source="[Define area paths and assign to a team](../../organizations/settings/set-area-paths.md)">Define area paths and assign to a team</a>.</td>
</tr>
<tr>
    <td><a href="/azure/devops/organizations/settings/set-area-paths" data-raw-source="[Iteration](/azure/devops/organizations/settings/set-area-paths)">Iteration</a></td>
    <td>Choose the sprint or iteration in which the work is to be completed, or leave it blank and assign it later during a planning meeting. To change the drop-down list of iterations, see <a href="../../organizations/settings/set-iteration-paths-sprints.md" data-raw-source="[Define iteration paths (aka sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)">Define iteration paths (aka sprints) and configure team iterations</a>.</td>
</tr>
<tr>
<td><a href="../queries/titles-ids-descriptions.md" data-raw-source="[Description](../queries/titles-ids-descriptions.md)">Description</a></td> 
<td>Provide enough detail to create shared understanding of scope and support estimation efforts. Focus on the user, what they want to accomplish, and why. Don&#39;t describe how to develop the product. Do provide sufficient details so that your team can write tasks and test cases to implement the item.</td> 
</tr>
<tr>
    <td><p><a href="../queries/planning-ranking-priorities.md" data-raw-source="[Priority](../queries/planning-ranking-priorities.md)">Priority</a></p></td>
	<td><p>A subjective rating of the issue or task it relates to the business. You can specify the following values:</p>
<p><strong>1</strong>: Product cannot ship without the successful resolution of the work item, and it should be addressed as soon as possible.</p>
<p><strong>2</strong>: Product cannot ship without the successful resolution of the work item, but it does not need to be addressed immediately.</p>
<p><strong>3</strong>: Resolution of the work item is optional based on resources, time, and risk.</p>
<p><strong>4</strong>: Resolution of the work item is not required.</p>
</td>
</tr>
<tr>
<td><a href="../queries/query-numeric.md" data-raw-source="[Effort](../queries/query-numeric.md)">Effort</a><br/>
<td>
<a name="estimates"></a>
Provide a relative estimate of the amount of work required to complete an issue. 
<p>Most Agile methods recommend that you set estimates for backlog items based on relative size of work. Such methods include powers of 2 (1, 2, 4, 8) and the Fibonacci sequence (1, 2, 3, 5, 8, etc.). Use any numeric unit of measurement your team prefers. </p>
<p>The estimates you set for <strong>Effort</strong> are used to calculate <a href="../../report/dashboards/team-velocity.md">velocity</a> and to <a href="../sprints/forecast.md">forecast sprints</a>.</p>
</td> 
</tr>
</tbody>
</table>

#### [Agile process](#tab/agile-process) 


For example, here we assign the story to Raisa Pokrovskaya and we add a discussion note, at-mentioning Raisa. 

> [!div class="mx-imgBorder"]
> ![User Story work item form, add details](_img/plan-track-work/user-story-form-add-details.png)

> [!NOTE]  
> You can only assign work to a user who has been added to the project. 

 Choose **Save & Close** when done. 

### Field descriptions

<table valign="top" width="100%">
<tbody valign="top" >
<tr>
<th width="20%">Field</th>
<th width="80%">Definition</th>
</tr>
<tr>
    <td width="18%"><p><a href="/azure/devops/boards/queries/titles-ids-descriptions" data-raw-source="[Title](/azure/devops/boards/queries/titles-ids-descriptions)">Title</a> </p></td>
	<td><p>Enter a description of 255 characters or less. You can always modify the title later.</p></td></tr>
<tr>
    <td><p><a href="/azure/devops/boards/queries/query-by-workflow-changes" data-raw-source="[Assigned To](/azure/devops/boards/queries/query-by-workflow-changes)">Assigned To</a></p></td>
	<td><p>Assign the work item to the team member responsible for performing the work. Depending on the context you are working in, the drop-down menu will list only team members or contributors to the project.</p></td></tr>
<tr>
    <td><p><a href="/azure/devops/boards/queries/query-by-workflow-changes" data-raw-source="[State](/azure/devops/boards/queries/query-by-workflow-changes)">State</a></p></td>
	<td><p>When the work item is created, the State defaults to the first state in the workflow. As work progresses, update it to reflect the current state.</p></td></tr>
<tr>
    <td><p><a href="/azure/devops/boards/queries/query-by-workflow-changes" data-raw-source="[Reason](/azure/devops/boards/queries/query-by-workflow-changes)">Reason</a></p></td>
	<td><p>Use the default first. Update it when you change state as need. Each State is associated with a default reason.</p></td></tr>
<tr>
    <td><a href="/azure/devops/organizations/settings/set-area-paths" data-raw-source="[Area](/azure/devops/organizations/settings/set-area-paths)">Area</a></td>
    <td>Choose the area path associated with the product or team, or leave blank until assigned during a planning meeting. To change the dropdown list of areas, see <a href="../../organizations/settings/set-area-paths.md" data-raw-source="[Define area paths and assign to a team](../../organizations/settings/set-area-paths.md)">Define area paths and assign to a team</a>.</td>
</tr>
<tr>
    <td><a href="/azure/devops/organizations/settings/set-area-paths" data-raw-source="[Iteration](/azure/devops/organizations/settings/set-area-paths)">Iteration</a></td>
    <td>Choose the sprint or iteration in which the work is to be completed, or leave it blank and assign it later during a planning meeting. To change the drop-down list of iterations, see <a href="../../organizations/settings/set-iteration-paths-sprints.md" data-raw-source="[Define iteration paths (aka sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)">Define iteration paths (aka sprints) and configure team iterations</a>.</td>
</tr>
<tr>
<td><a href="../queries/titles-ids-descriptions.md" data-raw-source="[Description](../queries/titles-ids-descriptions.md)">Description</a></td> 
<td>Provide enough detail to create shared understanding of scope and support estimation efforts. Focus on the user, what they want to accomplish, and why. Don&#39;t describe how to develop the product. Do provide sufficient details so that your team can write tasks and test cases to implement the item.</td> 
</tr>
<tr>
    <td><p><a href="../queries/titles-ids-descriptions.md" data-raw-source="[Acceptance Criteria](../queries/titles-ids-descriptions.md)">Acceptance Criteria</a> </p></td>
    <td><p>Provide the criteria to be met before the user story can be closed. Before work begins, describe the customer acceptance criteria as clearly as possible. Conversations between the team and customers to define the acceptance criteria will help ensure that your team understands your customers&#39; expectations. The acceptance criteria can be used as the basis for acceptance tests so that you can more effectively evaluate whether an item has been satisfactorily completed.</p>
</td>
</tr>
<tr>
    <td><p><a href="../queries/planning-ranking-priorities.md" data-raw-source="[Priority](../queries/planning-ranking-priorities.md)">Priority</a></p></td>
	<td><p>A subjective rating of the issue or task it relates to the business. You can specify the following values:</p>
<p><strong>1</strong>: Product cannot ship without the successful resolution of the work item, and it should be addressed as soon as possible.</p>
<p><strong>2</strong>: Product cannot ship without the successful resolution of the work item, but it does not need to be addressed immediately.</p>
<p><strong>3</strong>: Resolution of the work item is optional based on resources, time, and risk.</p>
<p><strong>4</strong>: Resolution of the work item is not required.</p>
</td>
</tr>
<tr>
<tr>
    <td><p><a href="../queries/planning-ranking-priorities.md" data-raw-source="[Value Area](../queries/planning-ranking-priorities.md)">Value Area</a></p></td>
	<td><p>The area of customer value addressed by the epic, feature, requirement, or backlog item. Values include:</p>
        <ul>
        <li>
          <p>
            <strong>Architectural </strong>: Technical services to implement business features that deliver solution 
          </p>
        </li>
        <li>
          <p>
            <strong>Business</strong>: Services that fulfill customers or stakeholder needs that directly deliver customer value to support the business (Default)
          </p>
        </li>
      </ul>
</td>
</tr>
<tr>
<td><a href="../queries/query-numeric.md" data-raw-source="[Story Points](../queries/query-numeric.md)">Story Points</a>
<td>
<a name="estimates"></a>
Provide a relative estimate of the amount of work required to complete an issue.
<p>Most Agile methods recommend that you set estimates for backlog items based on relative size of work. Such methods include powers of 2 (1, 2, 4, 8) and the Fibonacci sequence (1, 2, 3, 5, 8, etc.). Use any numeric unit of measurement your team prefers. </p>
<p>The estimates you set are used to calculate <a href="../../report/dashboards/team-velocity.md" data-raw-source="[velocity](../../report/dashboards/team-velocity.md)">velocity</a> and <a href="../sprints/forecast.md" data-raw-source="[forecast sprints](../sprints/forecast.md)">forecast sprints</a>.</p>
</td> 
</tr>
</tbody>
</table>


* * *


## Update status

#### [Basic process](#tab/basic-process) 

As work starts, drag the issue from the **To Do** column to the **Doing** column. Once completed, move to the **Done** column. 

> [!div class="mx-imgBorder"]  
> ![Update status on Kanban board](_img/track-issues/update-status.png) 

You can add or rename columns as needed, see [Customize your board](customize-boards.md).


#### [Agile process](#tab/agile-process) 


As work starts, drag the user story card from the **Backlog** column to the **Active** column. Once work is ready for review, move to the **Resolved** column. After it is reviewed and accepted, move to the **Closed** column. 

> [!div class="mx-imgBorder"]  
> ![Update status on Kanban board](_img/plan-track-work/update-status.png) 

You can add or rename columns as needed, see [Customize your board](customize-boards.md).


* * *



## Add tasks 

#### [Basic process](#tab/basic-process) 

Task checklists provide a quick and easy way to track elements of work which are important to support completing an issue. 

1. To start adding tasks, choose the ![](../../_img/icons/actions-icon.png) actions icon for the issue and select the  ![plus icon](../../_img/icons/green_plus_icon.png) **Add Task** option.  

	> [!div class="mx-imgBorder"]  
	> ![Choose Add Task from Issues menu](_img/track-issues/add-tasks.png) 

	Enter a title for the task and type Enter when done.

	> [!div class="mx-imgBorder"]  
	> ![Add first task](_img/track-issues/enter-first-task.png) 

1. If you have a number of tasks to add, simply keep typing your task titles and type Enter.   

	> [!div class="mx-imgBorder"]  
	> ![Several tasks added](_img/track-issues/add-several-tasks.png)  

2. You can mark a task as done, expand or collapse the task checklist, or reorder and reparent tasks. 

	> [!div class="mx-tdCol2BreakAll"]  
	> |Mark a task as done |Reorder and reparent tasks | Expand or collapse the checklist| 
	> |------------------|--------------|--------------|  
	> |To mark a task as complete, check the task checkbox. The task State changes to **Done**.<br/>![Mark task as done](_img/track-issues/mark-tasks-as-done.png) |To reorder a task, drag it within the checklist. To reparent a the task, drag it to another issue on the board.<br/>![Drag tasks to reorder them within the list](_img/track-issues/reorder-task.png)  |To expand or collapse a task checklist, simply choose the task annotation.<br/>![Collapse task checklist](_img/track-issues/collapse-task-list.png) |  



#### [Agile process](#tab/agile-process) 


Task checklists provide a quick and easy way to track elements of work which are important to support completing a user story. In addition, you can assign individual tasks to different team members. 

1. To start adding tasks, choose the ![](../../_img/icons/actions-icon.png) actions icon for the story and select the  ![plus icon](../../_img/icons/green_plus_icon.png) **Add Task** option.  

	> [!div class="mx-imgBorder"]  
	> ![Choose Add Task from Issues menu](_img/plan-track-work/add-child-task.png) 

	Enter a title for the task and type Enter when done.

	> [!div class="mx-imgBorder"]  
	> ![Add first task](_img/plan-track-work/prep-images-task.png) 

1. If you have a number of tasks to add, simply keep typing your task titles and type Enter.   

	> [!div class="mx-imgBorder"]  
	> ![Several tasks added](_img/plan-track-work/add-several-tasks.png)  

2. You can mark a task as done, expand or collapse the task checklist, or reorder and reparent tasks. 

	> [!div class="mx-tdCol2BreakAll"]  
	> |Mark a task as done |Reorder and reparent tasks | Expand or collapse the checklist| 
	> |------------------|--------------|--------------|  
	> |To mark a task as complete, check the task checkbox. The task State changes to **Done**.<br/>![Mark task as done](_img/plan-track-work/mark-tasks-as-done.png) |To reorder a task, drag it within the checklist. To reparent a the task, drag it to another issue on the board.<br/>![Drag tasks to reorder them within the list](_img/plan-track-work/reorder-task.png)  |To expand or collapse a task checklist, simply choose the task annotation.<br/>![Collapse task checklist](_img/plan-track-work/collapse-task-list.png) |  


* * *


## Add details to a task

If you have details you want to add about a task, choose the title, to open it. Change one or more field values, add a description, or make a note in the **Discussion** section. Choose **Save & Close** when done. 

#### [Basic process](#tab/basic-process) 


Here we assign the task to Jamal.   

> [!div class="mx-imgBorder"]  
> ![Task form](_img/track-issues/basic-process-task-form.png)  

### Field descriptions

In addition to the fields you can define for an issue, you can specify the following fields for a task to support capacity and time tracking. 
<table valign="top" width="100%">
<tbody valign="top" >
<tr>
<th width="20%">Field</th>
<th width="80%">Definition</th>
</tr>
<tr>
<tr>
    <td><a href="../queries/query-numeric.md" data-raw-source="[Activity](../queries/query-numeric.md)">Activity</a></td>
    <td><p>The type of activity that is required to perform a task.To learn more about how this field is used, see <a href="../sprints/set-capacity.md" data-raw-source="[Capacity planning](../sprints/set-capacity.md)">Capacity planning</a>. Allowed values are:</p><ul><li><p>Deployment</p></li><li><p>Design</p></li><li><p>Development</p></li><li><p>Documentation</p></li><li><p>Requirements</p></li><li><p>Testing</p></li></ul>
</td>
</tr>
<tr>
<td><a href="../queries/query-numeric.md" data-raw-source="[Remaining Work](../queries/query-numeric.md)">Remaining Work</a>
</td>
<td>
<p>The amount of work that remains to finish a task. You can specify work in hours or in days. There are no inherent time units associated with this field even though the taskboard always shows "h" for hours in relationship to Remaining Work.  </p>
<p>Remaining Work is often used to calculate burn down for a sprint. </p>
</td> 
</tr>
</tbody>
</table>


#### [Agile process](#tab/agile-process) 

Here we assign the task to Christie Church.   

> [!div class="mx-imgBorder"]  
> ![Task form](_img/plan-track-work/task-form.png)  


### Field descriptions

In addition to the fields you can define for a user story, you can specify the following fields for a task to support capacity and time tracking. 
<table valign="top" width="100%">
<tbody valign="top" >
<tr>
<th width="20%">Field</th>
<th width="80%">Definition</th>
</tr>
<tr>
<tr>
    <td><a href="../queries/query-numeric.md" data-raw-source="[Activity](../queries/query-numeric.md)">Activity</a></td>
    <td><p>The type of activity that is required to perform a task.To learn more about how this field is used, see <a href="../sprints/set-capacity.md" data-raw-source="[Capacity planning](../sprints/set-capacity.md)">Capacity planning</a>. Allowed values are:</p><ul><li><p>Deployment</p></li><li><p>Design</p></li><li><p>Development</p></li><li><p>Documentation</p></li><li><p>Requirements</p></li><li><p>Testing</p></li></ul>

</td>
</tr>
<tr>
<td><p><a href="../queries/query-numeric.md" data-raw-source="[Original Estimate](../queries/query-numeric.md)">Original Estimate</a></p></td>
<td><p>The amount of estimated work required to complete a task. Typically, this field doesn&#39;t change after it is assigned.</p>
<p>You can specify work in hours or in days. There are no inherent time units associated with this field.</p>
</td>
</tr>
<tr>
<td><p><a href="../queries/query-numeric.md" data-raw-source="[Completed Work](../queries/query-numeric.md)">Completed Work</a> </p></td>
<td><p>The amount of work spent implementing a task.</p></td>
</tr>
<tr>
<td><a href="../queries/query-numeric.md" data-raw-source="[Remaining Work](../queries/query-numeric.md)">Remaining Work</a>
</td>
<td><p>The amount of work remaining to complete a task. As work progresses, update this field. It&#39;s used to calculate <a href="../sprints/set-capacity.md" data-raw-source="[capacity charts](../sprints/set-capacity.md)">capacity charts</a>, the <a href="../sprints/sprint-burndown.md" data-raw-source="[sprint burndown chart](../sprints/sprint-burndown.md)">sprint burndown chart</a>. If you divide a task into subtasks, specify hours for the subtasks only. You can specify work in any unit of measurement your team chooses.</p> 
</td> 
</tr>
</tbody>
</table>

* * *


[!INCLUDE [temp](../_shared/discussion-tip.md)]


## Try this next  
 
> [!div class="nextstepaction"]
> [Customize your board](customize-boards.md)


## Related articles

- [Index to field descriptions](../work-items/guidance/basic-field-reference.md?toc=/azure/devops/boards/get-started/toc.json&bc=/azure/devops/boards/get-started/breadcrumb/toc.json)  
- [Add tags to issues or tasks](../queries/add-tags-to-work-items.md)   
- [Use @mentions in work items](../../notifications/at-mentions.md)
- [Use #ID to link to work items](../../notifications/add-links-to-work-items.md) 

<!---

	
Tasks that you create from the Kanban board will show up on your sprint taskboard. Also, tasks that you create from the [sprint backlog](../sprints/assign-work-sprint.md) or [taskboard](../sprints/task-board.md) will show up within tasks checklists on the Kanban board.  

Tasks that you create from the Kanban board are automatically assigned to the sprint/iteration path of the parent work item under which you define them. 

-->

