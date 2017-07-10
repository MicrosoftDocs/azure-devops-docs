---
title: Agile process workflow | Team Services & TFS  
description: How to guide for using the Agile process to track work using its work item types working in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: d16d04fd-c073-45c0-b1b9-3724f0a7519b  
ms.manager: douge
ms.author: kaelli
ms.date: 04/05/2017
---

# Agile process work item types and workflow  

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b>  

Teams use the work item types (WITs) provided with the Agile process to plan and track progress of software projects. Teams define user stories to manage the backlog of work and then, using the Kanban board, track progress by updating the status of those stories.

<img src="_img/agile-process-plan-wits.png" alt="Agile process, WITs used to plan and track" style="border: 1px solid #CCCCCC;" />

To gain insight into a portfolio of features, scenarios, or user experiences, product owners and program managers can map user stories to features. When teams work in sprints, they define tasks which automatically link to user stories. 

Using the web portal or Microsoft Test Manager, testers can create and run test cases. Bugs and issues are used to track code defects and blocking issues.  

>[!NOTE]  
><b>Feature availability: </b> Work item tracking forms and features available to you differ depending on whether you connect to the cloud or an on-premises Team Foundation Server (TFS), and whether you open the form from the web portal or Visual Studio Team Explorer. Forms and guidance provided in this topic reflect those available with the [new form experience](../process/new-work-item-experience.md) (Team Services and the web portal for TFS 2017 and later versions). 
>
>If you connect to TFS 2015 or earlier versions, or open the form from Visual Studio Team Explorer, see [Add work items (TFS)](../backlogs/add-work-items-tfs.md).  



## Define user stories

User stories define the applications, requirements, and elements that teams need to create. Product owners typically define and stack rank user stories. The team then estimates the effort and work to deliver the highest priority items.

Create user stories from the quick add panel on the [product backlog page](../backlogs/create-your-backlog.md). From that page, you can also drag-and-drop items to reorder them or [map them to features](../backlogs/organize-backlog.md). 

<img src="_img/IC697757.png" alt="Web portal, Agile process, Quick add panel " style="border: 1px solid #CCCCCC;" />

Later, you can open each user story to provide more details and estimate the story points.

![User story work item form ](../backlogs/_img/add-work-item-vsts-user-story-form.png) 

By defining the **Story Points**, teams can use the forecast feature and velocity charts to estimate future sprints or work efforts. By prioritizing the user stories on the backlog page (which is captured in the Stack Rank field), product owners can indicate which items should be given higher priority.

Use the following guidance and that provided for [fields used in common across work item types](#definitions-in-common) when filling out the form.  

<table>
<thead>
<tr><th><p>Field/tab</p></th><th><p>Usage</p></th></tr>
</thead>
<tbody valign="top">
<tr>
	<td><p>[Description](../track/titles-ids-descriptions.md)  </p></td>
	<td><p>For user stories, provide enough detail for estimating how much work will be required to implement the story. Focus on who the feature is for, what users want to accomplish, and why. Don't describe how the feature should be developed. Do provide sufficient details so that your team can write tasks and test cases to implement the item.</p>
	</td>
</tr>
<tr>
	<td><p>[Acceptance Criteria](../track/titles-ids-descriptions.md) </p></td>
	<td><p>Provide the criteria to be met before the bug or user story can be closed. Before work begins, describe the customer acceptance criteria as clearly as possible. Conversations between the team and customers to define the acceptance criteria will help ensure that your team understands your customers' expectations. The acceptance criteria can be used as the basis for acceptance tests so that you can more effectively evaluate whether an item has been satisfactorily completed.</p>

</td>
</tr>
<tr>
	<td><p>[Value Area](../track/planning-ranking-priorities.md)</p></td>
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
</td></tr>
<tr>
	<td width="20%"><p>[Story Points](../track/query-numeric.md)</p></td>
	<td><p>Estimate the amount of work required to complete a user story using any numeric unit of measurement your team prefers.</p><p>Agile [velocity charts and forecast tools](../scrum/velocity-and-forecasting.md) reference the values in this field. For additional guidance, see the [Estimating](https://msdn.microsoft.com/library/hh765979) white paper.</p></td></tr>
<tr>
	<td><p>[Priority](../track/planning-ranking-priorities.md)</p>
</td>
	<td><p>A subjective rating of the user story, feature, or requirement as it relates to the business. Allowed values are:</p><ul><li><p><strong>1</strong>: Product cannot ship without the feature.</p></li><li><p><strong>2</strong>: Product cannot ship without the feature, but it doesn't have to be addressed immediately.</p></li><li><p><strong>3</strong>: Implementation of the feature is optional based on resources, time, and risk.</p></li>
</ul>
</td>
</tr>
<tr>
	<td><p>[Risk](../track/planning-ranking-priorities.md)</p></td>
	<td><p>A subjective rating of the relative uncertainty around the successful completion of a user story. Allowed values are:</p><ul><li><p><strong>1 - High</strong></p></li><li><p><strong>2 - Medium</strong></p></li><li><p><strong>3 - Low</strong></p></li></ul></td>
</tr>


</tbody>
</table>


>[!TIP]    
>Use the [Discussion section](../backlogs/add-work-items.md#discussion) to add and review comments made about the work being performed. This feature is only available from Team Services.   

## Track progress

As work progresses, you change the State field to update the status. Optionally, you can specify a reason. The state and reason fields appear on the work item form in the header area. 

<img src="_img/agile-bug-form-state-reason.png" alt="Bug work item form, header area" style="border: 1px solid #CCCCCC;" /> 


### Agile workflow states 

By updating the workflow, teams know which items are new, in progress, or completed. Most WITs support transition both forward and backward from each workflow state. These diagrams show the main progression and regression states of the user story, bug, and task WITs. 

<div style="float:left;width:240px;margin:12px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">User Story</p>
<img src="_img/ALM_PT_Agile_WF_UserStory.png" title="User Story workflow states, Agile process " alt="User Story workflow states, Agile process" />
</div>

<div style="float:left;width:200px;margin:12px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Bug</p>
<img src="_img/agile-bug-workflow.png" title="Bug workflow states, Agile process" style="padding-left:20px;" alt="Bug workflow states, Agile process" />
</div>

<div style="float:left;width:220px;margin:12px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Task</p>
<img src="_img/ALM_PT_Agile_WF_Task.png" title="Task workflow states, Agile process " style="padding-left:20px;" alt="Task workflow states, Agile process" />
</div>



<div style="clear:left;font-size:100%">
</div>
 
A typical workflow progression for a user story follows:

-   The product owner creates a user story in the **New** state with the default reason, **New user story**  
-   The team updates the status to **Active** when they decide to complete the work during the sprint  
-   A user story is moved to **Resolved** when the team has completed all its associated tasks and unit tests for the story pass  
-   A user story is moved to the **Closed** state when the product owner agrees that the story has been implemented according to the Acceptance Criteria and acceptance tests pass.  


### Update status with Kanban or task boards

Teams can use the [Kanban board](../kanban/kanban-basics.md) to update the status of requirements, and the [sprint task board](../scrum/task-board.md) to update the status of tasks. Dragging items to a new state column updates both the State and Reason fields.

![Track progress on the Kanban board](../kanban/_img/ALM_CC_MoveCard.png)

You can customize the Kanban board to support additional [swim lanes](../kanban/expedite-work.md) or [columns](../kanban/add-columns.md). For additional customization options, see [Customize your work tracking experience](#customize-work-tracking).



## Map user stories to features

When you manage a suite of products or user experiences, you might want to view the scope and progress of work across the product portfolio. You can do this by [defining features](../backlogs/define-features-epics.md) and [mapping user stories to features](../backlogs/organize-backlog.md).

Using portfolio backlogs, you can [drill down from one backlog to another](../scale/portfolio-management.md) to view the level of detail you want. Also, you can use portfolio backlogs to view a rollup of work in progress across several teams when you [setup a hierarchy of teams](../scale/multiple-teams.md).

## Define tasks 

When your team manages their work in sprints, they can use the [sprint backlog page](../scrum/sprint-planning.md) to break down the work to be accomplished into distinct tasks.  

![Sprint backlog, add task](_img/IC697761.png)

Name the task and estimate the work it will take.

<img src="_img/agile-task-form.png" alt="Agile task work item form" style="border: 1px solid #CCCCCC;" /> 

Using Agile processes, teams forecast work and define tasks at the start of each sprint, and each team member performs a subset of those tasks. Tasks can include development, testing, and other kinds of work. For example, a developer can define tasks to implement user stories, and a tester can define tasks to write and run test cases.

When teams estimate work using hours or days, they define tasks and the **Remaining Work** and **Activity** (optional) fields.

<table><thead>
<tr><th><p>Field/tab</p></th><th><p>Usage</p></th></tr></thead>
<tbody valign="top">
<tr>
	<td><p>[Original Estimate](../track/query-numeric.md)</p></td>
	<td><p>The amount of estimated work required to complete a task. Typically, this field doesn't change after it is assigned.</p>
<p>You can specify work in hours or in days. There are no inherent time units associated with this field.</p>
</td>
</tr>

<tr>
	<td width="18%"><p>[Remaining Work](../track/query-numeric.md)</p></td>
	<td><p>The amount of work remaining to complete a task. As work progresses, update this field. It's used to calculate [capacity charts](../scale/capacity-planning.md), the [sprint burndown chart](../scrum/sprint-burndown.md), and the following (TFS only) reports: [Burndown and Burn Rate](https://msdn.microsoft.com/library/dd380678.aspx), [Remaining Work](https://msdn.microsoft.com/library/dd380673.aspx), and [Status on All Iterations](https://msdn.microsoft.com/library/dd380706.aspx).</p><p>If you divide a task into subtasks, specify hours for the subtasks only. You can specify work in any unit of measurement your team chooses.</p></td></tr>



<tr>
	<td><p>[Completed Work](../track/query-numeric.md) </p></td>
	<td><p>The amount of work spent implementing a task.</p></td></tr>
<tr>
	<td><p>[Activity](../track/query-numeric.md) </p></td>
	<td><p>Select the type of activity this task represents when your team estimates sprint capacity by activity.</p></td></tr>
<tr>
	<td><p>[Integrated in Build](../track/build-test-integration.md)</p></td>
	<td><p>Product build number that incorporates the code or fixes a bug.</p></td>

</tr></tbody>
</table>  


If you use [Microsoft Project](../office/create-your-backlog-tasks-using-project.md) to assign resources and track a schedule, you can update these fields using Project.

## Track test progress 

 
### Test user stories

From the web portal or Test Manager, you can [create test cases that automatically link to a user story or bug](../../test/manual-exploratory-testing/getting-started/create-test-cases.md). Or, you can link a user story to a test case from the ![Links tab icon](../backlogs/_img/icon-links-tab-wi.png) (links tab). 

![Test plan web portal](_img/IC793453.png)

The test case contains a number of fields, many of which are automated and integrated with Test Manager and the build process. For a description of each field, see [Query based on build and test integration fields](../track/build-test-integration.md).

<img src="_img/agile-test-case-form.png" alt="Test case form" style="border: 1px solid #CCCCCC;" /> 

The ![Links tab icon](../backlogs/_img/icon-links-tab-wi.png) (links tab) captures the links to user stories and bugs in a test case. By linking user stories and bugs to test cases, the team can track the progress made in testing each item. By defining these links, you support information that appears in the [Stories Overview Report](../../report/sql-reports/stories-overview-report-agile.md) report.

### Track code defects

You can [create bugs from the web portal web portal, Visual Studio, or when testing with Test Manager](../backlogs/manage-bugs.md). 


[!INCLUDE [temp](../_shared/common-work-item-fields.md)]   


## Related notes

[!INCLUDE [temp](../_shared/create-team-project-links.md)]  
  
[!INCLUDE [temp](../_shared/customize-work-tracking.md)]  


### Track issues 

Issues are used to track events that may block progress or shipping a user story. Bugs, on the other hand, are used to track code defects. You can add an issue from the  [New work item widget](../../report/widget-catalog.md#new-work-item-widget) added to a [team dashboard](../../report/dashboards.md), or from the **New** menu on the Queries page. 

![Add work item from a New work item widget](../../_img/alm-feature-new-work-item-widget.png)  

Work items you add from the widget are automatically scoped to your [team's default area and iteration paths](../scale/set-team-defaults.md). To change the team context, see [Switch team context](#team-context).  
 
### Track business value  
You can use the Priority field to differentiate the value of various stories. Or, you can add a custom field to the User Story WIT that tracks the relative value of stories. To learn how, see [Customize a field for a process](../process/customize-process-field.md).


### Backlog list order

The [Stack Rank](../track/planning-ranking-priorities.md) field is used to track the relative ranking of user stories, however by default it doesn't appear on the work item form. The sequence of items on the backlog page is determined according to where you have [added the items or moved the items on the page](../backlogs/create-your-backlog.md#move-items-priority-order). As you drag items, a background process updates this field.


[!INCLUDE [temp](../_shared/switch-team-context-work.md)]  

### Links control, client work item form 

Work item forms displayed in a client and the web portal for TFS 2015 and earlier versions display link tabs and link control restrictions as described in the following table. 

<table>
<thead>
<tr>
<th><p>Tab name</p></th>
<th><p>Work item type</p></th>
<th><p>Link restrictions</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p><strong>All Links</strong></p></td>
<td><p>User story</p>
<p>Bug</p>
<p>Feedback Request</p>
<p>Task</p>
<p>Test Case</p></td>
<td><ul>
<li><p>No restrictions.</p></li>
</ul>
<p></p></td>
</tr>
<tr>
<td><p><strong>Implementation</strong></p></td>
<td><p>User story</p>
<p>Task</p></td>
<td><ul>
<li><p>Allows only <strong>Parent</strong> and <strong>Child</strong> links between user stories and tasks.</p></li>
<li><p>Excludes links to work items in other team projects.</p></li>
</ul>
<p></p></td>
</tr>
<tr>
<td><p><strong>Links</strong></p></td>
<td><p>Issue</p>
<p>Shared steps</p>
<p></p></td>
<td><ul>
<li><p>No restrictions.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Links</strong></p></td>
<td><p>Code Review Request</p></td>
<td><ul>
<li><p>Allows only <strong>Parent</strong> and <strong>Child</strong> links to Code Review Response work items.</p></li>
<li><p>Excludes links to work items in other team projects.</p></li>
</ul>
<p></p></td>
</tr>
<tr>
<td><p><strong>Stories</strong></p></td>
<td><p>Feedback Response</p></td>
<td><ul>
<li><p>Allows only <strong>Related</strong> links to user stories.</p></li>
<li><p>Excludes links to work items in other team projects.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Storyboards</strong></p></td>
<td><p>User Story</p></td>
<td><ul>
<li><p>Allows only <strong>Storyboard</strong> links.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Test Cases</strong></p></td>
<td><p>User story</p>
<p>Bug</p></td>
<td><ul>
<li><p>Allows only <strong>Tested By</strong> links.</p></li>
<li><p>Allows links only to test cases.</p></li>
<li><p>Excludes links to work items in other team projects.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Tested User Stories</strong></p></td>
<td><p>Test case</p></td>
<td><ul>
<li><p>Allows only <strong>Tests</strong> links.</p></li>
<li><p>Allows links only to user stories.</p></li>
<li><p>Excludes links to work items in other team projects.</p></li>
</ul></td>
</tr>
</tbody>
</table>


[!INCLUDE [temp](../_shared/help-support-shared.md)]

