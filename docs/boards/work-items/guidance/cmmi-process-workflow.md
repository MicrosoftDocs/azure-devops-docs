---
title: CMMI process work item types & workflow
titleSuffix: Azure Boards
ms.custom: work-items
description: How to guide for using the CMMI process  work item types and workflow to track work in Azure Boards, Azure DevOps, & Team Foundation Server   
ms.technology: devops-agile
ms.prod: devops
ms.assetid: b5b7b488-3248-485c-b896-a2c6f824a219
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 12/20/2018
---

# CMMI process work item types and workflow


[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Teams use the work item types (WITs) provided with the MSF for CMMI Process Improvement 2015 (CMMI) process to plan and track progress of software projects. Teams define requirements to manage the backlog of work and then, using the Kanban board, track progress by updating the status of requirements.
 
![CMMI process work item types, conceptual image](_img/cmmi-process-plan-wits.png)

To gain insight into a portfolio of requirements, product owners can map requirements to features. When teams work in iterations, they define tasks that automatically link to requirements.

Using Microsoft Test Manager and the web portal, testers create and run test cases and define bugs to track code defects.

To support additional CMMI processes, teams can track change requests, risks, issues, and notes captured in review meetings. If you are new to the CMMI process, review the section [Plan and track work with CMMI](cmmi-process.md#start-using) to get started. 

  
[!INCLUDE [temp](../../_shared/note-work-item-form-differences.md)] 

## Define requirements 

Create requirements from the quick add panel on the [product backlog page](../../backlogs/create-your-backlog.md). Alternatively, you can bulk add requirements using [Excel](../../backlogs/office//bulk-add-modify-work-items-excel.md) or [Project](../../backlogs/office/create-your-backlog-tasks-using-project.md).

<img src="_img/cmmi-quick-add-panel.png" alt="CMMI process, Quick add panel on the requirements backlog page" style="border: 2px solid #C3C3C3;" />


Later, you can open each requirement to provide more details and estimate its size.

![Requirement work item form](_img/cmmi-requirement-form.png)  

Requirements specify the functions and product elements that teams need to create. Product owners typically define and stack rank requirements on the product backlog page. The team then scopes the size of the effort to deliver the highest priority items.

Use the following guidance and that provided for [fields used in common across work item types](#definitions-in-common) when filling out the form. For additional guidance, see [Plan a project](cmmi/guidance-plan-a-project-cmmi.md).

<table>
<tbody valign="top">
  <tr>
    <th width="22%">Field</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td>
      <p>
        [Description](../../queries/titles-ids-descriptions.md)
      </p>
    </td>
    <td>
      <p>Provide enough detail for estimating how much work will be required to implement the requirement. Focus on who the requirement is for, what users want to accomplish, and why. Don't describe how the requirement should be developed. Do provide sufficient details so that your team can write tasks and test cases to implement the item.</p>
      <p>In HTML fields, you can add rich text and images. </p>
      <p>
        
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <p>[Impact Assessment](cmmi/guidance-requirements-field-reference-cmmi.md)</p>
    </td>
    <td>
      <p>The customer impact of not implementing this requirement. You might include details from the Kano model about whether this requirement is in the surprise, required, or obvious categories. You capture this information in the rich-text HTML field which corresponds to Impact Assessment.</p>
      <p>
        
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <p>[Requirement Type](cmmi/guidance-requirements-field-reference-cmmi.md) (Required) </p>
    </td>
    <td>
      <p>The kind of requirement to implement. You can specify one of the following values: </p>
      <ul>
        <li>
          <p>
            <strong>Business Objective </strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Feature</strong> (default)</p>
        </li>
        <li>
          <p>
            <strong>Functional</strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Interface </strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Operational </strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Quality of Service </strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Safety </strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Scenario </strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Security</strong>
          </p>
        </li>
      </ul>
    </td>
  </tr>


<tr>
	<td><p>[Value area](../../queries/planning-ranking-priorities.md)</p></td>
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
    <td>
      <p>
        [Size](../../queries/query-numeric.md) </p>
    </td>
    <td>

 

      <p>Estimate the amount of work required to complete a requirement using any numeric unit of measurement your team prefers. </p><p> By defining the **Size** for requirements, teams can use the Agile [velocity charts](../../../report/dashboards/velocity-chart-data-store.md) and [forecast](../../sprints/forecast.md) tools to estimate future iterations or work efforts. The Kanban [Cumulative Flow Diagram](../../boards/kanban-basics.md) references the values in this field. For additional guidance, see the [Estimating](https://msdn.microsoft.com/library/hh765979) white paper.</p>
    </td>
  </tr>
<tr>
	<td><p>[Original Estimate](../../queries/query-numeric.md) </p></td>
	<td><p>The amount of estimated work required to complete a task. Typically, this field doesn't change after it is assigned.</p>
<p>You can specify work in hours or in days. There are no inherent time units associated with this field.</p>
</td>
</tr>

<tr>
	<td><p>[Start Date/Finish Date](../../queries/query-by-date-or-current-iteration.md) </p></td>
	<td><p>The target dates for when the work will start or finish. These fields are filled in by [Microsoft Project](../../backlogs/office/create-your-backlog-tasks-using-project.md) when you use it for scheduling.</p>
<p>You can specify work in hours or in days. There are no inherent time units associated with this field.</p>
</td>
</tr>


  <tr>
    <td>
      <p>
        [Priority](../../queries/planning-ranking-priorities.md) (Required)</p>
    </td>
    <td>
      <p>A subjective rating of the requirement as it relates to the business. Allowed values are:</p>
      <ul>
        <li>
          <p>
            <strong>1</strong>: Product cannot ship without the item.</p>
        </li>
        <li>
          <p>
            <strong>2</strong>: (default) Product cannot ship without the item, but it doesn't have to be addressed immediately. </p>
        </li>
        <li>
          <p>
            <strong>3</strong>: Implementation of the item is optional based on resources, time, and risk.  </p>
        </li>
      </ul>
      <p>
        
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <p>
       [Triage](../../queries/planning-ranking-priorities.md) (Required) </p>
    </td>
    <td>
      <p>Indicates the type of triage decision that is pending for the work item. Use this field when the work item is in the Proposed state and specify one of the following values: <strong>Pending</strong> (default), <strong>More Info</strong>, <strong>Info Received</strong>, and <strong>Triaged</strong>.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>
        [Blocked](../../queries/planning-ranking-priorities.md)</p>
    </td>
    <td>
      <p>Indicates whether a team member is prevented from making progress toward implementing a requirement or task or resolving a bug, change request, or risk. If an issue has been opened to track a blocking problem, you can create a link to the issue. You can specify <strong>Yes</strong> of <strong>No</strong>.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>
        [Committed](../../queries/planning-ranking-priorities.md) (Required)  </p>
    </td>
    <td>
      <p>Indicates whether the requirement is committed in the project or not. You can specify <strong>Yes</strong> or <strong>No</strong> (default).</p>
    </td>
  </tr>

  <tr>
    <td>
      <p>
        [Integrated In](../../queries/build-test-integration.md)  </p>
    </td>
    <td>
      <p>Product build number that incorporates the requirement, change request, or fixes a bug.</p>
    </td>
  </tr>

  <tr>
    <td>
      <p>
        [User Acceptance Test](cmmi/guidance-requirements-field-reference-cmmi.md) (Required) </p>
    </td>
    <td>
      <p>The status of the user acceptance test for a requirement. You can specify one of the following values:   </p>
          <ul>
            <li>
<p>
  <strong>Pass</strong>
</p>
            </li>
            <li>
<p>
  <strong>Fail</strong>
</p>
            </li>
            <li>
<p>
  <strong>Not Ready</strong>  (default)</p>
            </li>
            <li>
<p>
  <strong>Ready</strong>
</p>
            </li>
            <li>
<p>
  <strong>Skipped</strong>
</p>
            </li>
            <li>
<p>
  <strong>Info Received</strong>
</p>
            </li>
          </ul>
	<p>You specify Not Ready when the requirement is in the Active state, and you specify Ready when the requirement is in the Resolved state.</p>
    </td>
  </tr>


  <tr>
    <td>
      <p>
        [Subject Matter Experts](cmmi/guidance-requirements-field-reference-cmmi.md) 
      </p>
    </td>
    <td>
          <p>The names of team members who are familiar with the customer area that this requirement represents.</p>
    </td>
  </tr>
</tbody>
</table>


[!INCLUDE [temp](../../_shared/discussion-tip.md)] 

## Track progress

As work progresses, you change the State field to update the status. Optionally, you can specify a reason. The state and reason fields appear on the work item form in the header area. 

<img src="_img/agile-bug-form-state-reason.png" alt="Bug work item form, header area" style="border: 1px solid #C3C3C3;" /> 

### CMMI workflow states 

These diagrams show the main progression and regression states for the Requirement, Bug, and Task WITs. 

> [!div class="mx-tdBreakAll"]  
> |Requirement  |Bug |Task |  
> |-------------|----------|---------| 
> |<img src="_img/IC757081.png" title="Requirement workflow states, CMMI process" alt="Requirement workflow states, CMMI process" /> |<img src="_img/IC757084.png" title="Bug workflow states, CMMI process" alt="Bug workflow states, CMMI process" /> |<img src="_img/IC757087.png" title="Task workflow states, CMMI process" alt="Task workflow states, CMMI process" /> |

The typical workflow progression for a requirement is:  
-   The product owner creates a requirement in the **Proposed** state with the default reason, **New requirement**.  
-   The product owner updates the status to **Active** when they begin work to implement it.  
-   The team updates the status to **Resolved** when code development is finished and system tests have passed.  
-   Lastly, the team or product owner moves the requirement to **Closed** when the product owner agrees that it has been implemented according to the Acceptance Criteria and passed all validation tests.  

### Update status with Kanban or taskboards

Teams can use the [Kanban board](../../boards/kanban-basics.md) to update the status of requirements, and the [sprint taskboard](../../sprints/task-board.md) to update the status of tasks. Dragging items to a new state column updates both the State and Reason fields.

<img src="../../boards/_img/ALM_CC_MoveCard.png" alt="Web portal, Track progress on the Kanban board" style="border: 2px solid #C3C3C3;" />

You can customize the Kanban board to support additional [swim lanes](../../boards/expedite-work.md) or [columns](../../boards/add-columns.md). For additional customization options, see [Customize your work tracking experience](#customize-work-tracking).

## Map requirements to features

hen you manage a suite of products or user experiences, you might want to view the scope and progress of work across the product portfolio. You can do this by [defining features](../../backlogs/define-features-epics.md) and [mapping requirements to features](../../backlogs/organize-backlog.md).

Using portfolio backlogs, you can [drill down from one backlog to another](../../plans/portfolio-management.md) to view the level of detail you want. Also, you can use portfolio backlogs to view a rollup of work in progress across several teams when you [setup a hierarchy of teams](../../../organizations/settings/add-teams.md).

The feature work item contains similar fields provided for requirements and includes additional fields, as the following table describes.


## Define tasks


When your team manages their work in sprints, they can use the [sprint backlog page](../../sprints/assign-work-sprint.md) to break down the work to be accomplished into distinct tasks.  

<img src="_img/IC697755.png" alt="Web portal, Add task link on a sprint backlog page" style="border: 2px solid #C3C3C3;" />

Name the task and estimate the work it will take.

![CMMI Task work item form](_img/cmmi-task-form.png)

When teams estimate work they define tasks and estimate the hours or days to complete tasks. Teams forecast work and define tasks at the start of an iteration, and each team member performs a subset of those tasks. Tasks can include development, testing, and other kinds of work. For example, a developer can define tasks to implement requirements, and a tester can define tasks to write and run test cases. By linking tasks to requirements and bugs, they see the progress made on these items. For additional guidance, see [Iteration activities](cmmi/guidance-iteration-activities.md).

<table>
<thead>
<tr>
<th><p>Field</p></th>
<th><p>Usage</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p>[Task Type](cmmi/guidance-requirements-field-reference-cmmi.md) </p></td>
<td><p>Select the kind of task to implement from the allowed values:</p>
<ul>
<li><p><strong>Corrective Action</strong></p></li>
<li><p><strong>Mitigation Action</strong></p></li>
<li><p><strong>Planned</strong></p></li>
</ul></td>
</tr>
<tr>
<td><p>[Discipline](../../queries/query-numeric.md)</p></td>
<td><p>Select the discipline this task represents when your team estimates sprint capacity by activity.</p>
<ul>
<li><p><strong>Analysis</strong></p></li>
<li><p><strong>Development</strong></p></li>
<li><p><strong>Test</strong></p></li>
<li><p><strong>User Education</strong></p></li>
<li><p><strong>User Experience</strong></p></li>
</ul>
<p>This field is also used to calculate capacity by discipline. It is assigned to `type=&quot;Activity&quot;` in the ProcessConfiguration file. (2)</p>
<p>For additional guidance, see [Implement development tasks](cmmi/guidance-implement-development-tasks.md).</p></td>
</tr>
<tr>
<td><p>[Original Estimate](../../queries/query-numeric.md) </p></td>
<td><p>The amount of estimated work required to complete a task. Typically, this field doesn't change after it is assigned.</p></td>
</tr>
<tr>
<td><p>[Remaining Work](../../queries/query-numeric.md)</p></td>
<td>

<p>The amount of work remaining to complete a task. As work progresses, update this field. It's used to calculate [capacity charts](../../sprints/set-capacity.md), the [sprint burndown chart](../../sprints/sprint-burndown.md), and the [Sprint Burndown](https://msdn.microsoft.com/library/ff731588.aspx) report. </p><p>If you divide a task into subtasks, specify hours for the subtasks only. You can specify work in any unit of measurement your team chooses.</p>

</td>
</tr>
<tr>
<td><p>[Completed Work](../../queries/query-numeric.md)</p></td>
<td><p>The amount of work that has been spent implementing a task.</p></td>
</tr>
</tbody>
</table>


## Track test progress 

### Test requirements

From the web portal or Test Manager, you can [create test cases that automatically link to a requirement or bug](../../../test/create-test-cases.md).  Or, you can link a requirement to a test case from the ![Links tab icon](../../backlogs/_img/icon-links-tab-wi.png) (links tab). 

![Select the test suite and add a test case](_img/IC793453.png)  

The test case contains a number of fields, many of which are automated and integrated with Test Manager and the build process. For a description of each field, see [Query based on build and test integration fields](../../queries/build-test-integration.md).  

<img src="_img/agile-test-case-form.png" alt="Web portal, Test case work item form" style="border: 2px solid #C3C3C3;" />

The ![Links tab icon](../../backlogs/_img/icon-links-tab-wi.png) (links tab) lists all the requirements and bugs in a test case. By using linking, the team can track the progress made in testing each item and supports information that appears in the [Requirements Overview Report](../../../report/sql-reports/requirements-overview-report-cmmi.md) report.

### Track code defects

You can [create bugs from the web portal web portal, Visual Studio, or when testing with Test Manager](../../backlogs/manage-bugs.md). 


## Track change requests, risks, issues, and notes captured in review meetings

In addition to the requirement, feature, task, and bug WITs, you can track information recommended by the CMMI process with the following WITS.

-  [Change request](cmmi/guidance-change-request-field-reference-cmmi.md) to [manage proposed changes](cmmi/guidance-manage-change.md) to any work product that is under change control.  
-   [Issue](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) to track an event or situation that might block work or is blocking work on the product. [Issues differ from risks](cmmi/guidance-manage-issues-cmmi.md) in that teams identify issues spontaneously, generally during daily team meetings. 
-   [Risk](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) to track the probability  and degree of variance between actual and desired outcomes. When you [manage risks](cmmi/guidance-manage-risks.md), you strategically minimize the variance between the outcome that you want and the actual outcome.  
-   [Review](cmmi/guidance-review-meeting-field-reference-cmmi.md) to document the results of a design or code review. Team members can [capture the details of how the design or code meets standards](cmmi/guidance-implement-development-tasks.md) in areas of name correctness, code relevance, extensibility, code complexity, algorithmic complexity, and code security.  
<br/>
You can add an issue from the  [New work item widget](../../../report/dashboards/widget-catalog.md#new-work-item-widget) added to a [team dashboard](../../../Report/dashboards.md), or from the **New** menu on the Queries page. 

![Add work item from a New work item widget](_img/cmmi-new-work-item-widget.png)  

Work items you add from the widget are automatically scoped to your team's default area and iteration paths. To change the team context, see [Switch team context](../../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/plans/toc.json&bc=/azure/devops/boards/plans/breadcrumb/toc.json).  


[!INCLUDE [temp](../../_shared/common-work-item-fields.md)]   

## Customize work item types
[!INCLUDE [temp](../../_shared/customize-work-tracking.md)] 

## Related articles 

[!INCLUDE [temp](../../_shared/create-team-project-links.md)]  


### Backlog list order

The [Stack Rank](../../queries/planning-ranking-priorities.md) field is used to track the relative ranking of requirements, features, or epics. However, by default it doesn't appear on the work item form. The sequence of items on the backlog page is determined according to where you have [added the items or moved the items on the page](../../backlogs/create-your-backlog.md#move-items-priority-order). As you drag items, a background process updates this field.  

This field doesn't appear on the work item form. 


  

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
<td><p>Requirement</p>
<p>Bug</p>
<p>Change Request</p>
<p>Feedback Request</p>
<p>Issue</p>
<p>Review</p>
<p>Risk</p>
<p>Shared Steps</p>
<p>Task</p>
<p>Test Case</p></td>
<td><ul>
<li><p>No restrictions.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Implementation</strong></p></td>
<td><p>Task</p></td>
<td><ul>
<li><p>Allows only <strong>Parent</strong> and <strong>Child</strong> links between requirements and tasks.</p></li>
<li><p>Excludes links to work items in other projects.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Links</strong></p></td>
<td><p>Code Review Request</p></td>
<td><ul>
<li><p>Allows only <strong>Parent</strong> and <strong>Child</strong> links to Code Review Response work items.</p></li>
<li><p>Excludes links to work items in other projects.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Requirements</strong></p></td>
<td><p>Change Request</p></td>
<td><ul>
<li><p>Allows only <strong>Affects</strong> link type to link change requests to requirements.</p></li>
<li><p>Excludes links to work items in other projects.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Stories</strong></p></td>
<td><p>Feedback Response</p></td>
<td><ul>
<li><p>Allows only <strong>Related</strong> links to requirements.</p></li>
<li><p>Excludes links to work items in other projects.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Storyboards</strong></p></td>
<td><p>Requirement</p></td>
<td><ul>
<li><p>Allows only <strong>Storyboard</strong> links.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Test Cases</strong></p></td>
<td><p>Requirement</p>
<p>Bug</p></td>
<td><ul>
<li><p>Allows only <strong>Tested By</strong> links.</p></li>
<li><p>Allows links only to test cases.</p></li>
<li><p>Excludes links to work items in other projects.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Tested Requirements</strong></p></td>
<td><p>Test case</p></td>
<td><ul>
<li><p>Allows only <strong>Tests</strong> links.</p></li>
<li><p>Allows links only to requirements.</p></li>
<li><p>Excludes links to work items in other projects.</p></li>
</ul></td>
</tr>
</tbody>
</table>


