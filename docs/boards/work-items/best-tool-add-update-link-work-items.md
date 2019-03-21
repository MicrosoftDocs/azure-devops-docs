---
title: What is the best tool to add, update, or link user stories, bugs, issues, and other work items? 
titleSuffix: Azure Boards
description: Learn which tool is best use to add or update one or more user stories, bugs, issues, and other work items in Azure Boards & TFS 
ms.custom: boards-work-items, seodec18
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelli
monikerRange: '>= tfs-2013'
ms.date: 02/01/2019
---

# Best tool to add, update, and link work items 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)] 

Azure Boards provides you several tools&mdash;many designed to perform a single task and others that support several tasks. This article provides a guide to the best tool for specific tasks that will help you work most efficiently. 


## Work item form 

If you want to make a single update to one work item, you can do that from within the work item form. When you want to add or update several work items at a time, then you'll want to use a backlog or query. 

[Work item form controls](work-item-form-controls.md) | [Work item field index](guidance/work-item-field.md)

**Best tool for**: 
- [Updating a work item field for a single work item](../backlogs/add-work-items.md)  
- [Adding to the discussion, mentioning others in the discussion](view-add-work-items.md#capture-comments-in-the-discussion-section)
- [Choosing to follow or unfollow a work item](follow-work-items.md) 
- [Driving Git development, creating a branch](../backlogs/connect-work-items-to-git-dev-ops.md)
- [Adding a link to another work item or external object](../backlogs/add-link.md) 
- [Copying or cloning a work item](../backlogs/copy-clone-work-items.md) 
- [Deleting the work item](../backlogs/remove-delete-work-items.md#delete-work-items) 

**Additional supported tasks**: 
- [Share information](../queries/share-plans.md)
- [Copy the work item URL](../backlogs/copy-clone-work-items.md#copy-the-url)
- [Capturing the work item to use as a template](../backlogs/work-item-template.md#capture)
- [Updating fields of the work item by applying an existing template](../backlogs/work-item-template.md#apply) 

::: moniker range=">= azure-devops-2019" 
## Work Items  

Use the [Work Items](view-add-work-items.md) page to quickly focus on work items of interest to you. 

**Best tool for**: 
- Listing and filtering work items of interest to you, specifically work items that meet the following criteria: 
	- That are assigned to you
	- That you chose to follow
	- Where you were mentioned
	- That you've recently viewed or updated
	- That has been recently updated, completed, or created for the project. 

**Additional supported tasks**: 
- [Add a work item](view-add-work-items.md)  
- [Restore work items from the recycle bin](../backlogs/remove-delete-work-items.md#restore-work-items)  
- [View work items through a mobile browser](../..//project/navigation/mobile-work.md)

::: moniker-end

## Boards 

The two types of Kanban boards, product backlog and portfolio backlogs, provide the quickest means for adding user stories and portfolio work item types. You can also quickly add and update the status of child items within a hierarchy. As shown in the following image for the Agile process, when you add tasks to user stories, users stories to features, or features to epics, you automatically create parent-child links between the work items.   

> [!div class="mx-imgBorder"]  
> ![Agile process, hierarchy of work items types](_img/best-tool/agile-process-plan-wits.png)

[Product backlog board](../boards/kanban-quickstart.md) | [Features or Epics board](../boards/kanban-epics-features-stories.md) | [Customize cards](../boards/customize-cards.md)

**Best tool for**: 
- [Implementing Kanban methods](../boards/best-practices-kanban.md)  
- Viewing the flow of work from inception to completion  
- Quickly adding [product backlog](../boards/kanban-quickstart.md) and [portfolio backlog](../boards/kanban-epics-features-stories.md) items 
- Updating the status of backlog items  
- Adding linked child items ([task checklists](../boards/add-task-checklists.md), [user stories or features](../boards/kanban-epics-features-stories.md))  
- [Filtering work items to focus on different views](../boards/filter-kanban-board.md) 
- Adding, running, and updating [inline test cases](../boards/add-run-update-tests.md))


**Additional supported tasks**:  
::: moniker range=">= azure-devops-2019" 
- [Assigning a work item, updating a field displayed on a card](../boards/kanban-quickstart.md#update-fields-from-the-card)  
- [Monitoring cumulative flow](../../report/dashboards/cumulative-flow.md)  
- [Monitoring lead time and cycle time control charts](../..//report/dashboards/cycle-time-and-lead-time.md)  
::: moniker-end  

::: moniker range="<= tfs-2018"  
- [Assigning a work item, updating a field displayed on a card](../boards/kanban-quickstart.md#update-fields-from-the-card)  
- [Monitoring cumulative flow](../../report/dashboards/cumulative-flow.md)  
::: moniker-end  

[!INCLUDE [temp](../_shared/setup-backlogs-boards.md)]

## Backlogs

You can quickly add and prioritize your product and portfolio backlogs, which list work items either as a flat or hierarchical list. You can also quickly add and reparent child items within a hierarchy.   

[Product backlog](../backlogs/create-your-backlog.md) | [Portfolio backlogs](../backlogs/define-features-epics.md) 

**Best tool for**: 
- [Managing your product backlog, developing your project plan](../backlogs/best-practices-product-backlog.md)
- Quickly adding [product](../backlogs/create-your-backlog.md) and [portfolio backlog items](../backlogs/define-features-epics.md)     
- [Moving backlog items in priority order](../backlogs/create-your-backlog.md#move-items-priority-order) 
- [Creating, viewing, and modifying a hierarchy of backlog items](../backlogs/define-features-epics.md) 
- [Organizing your backlog, linking or mapping backlog items to portfolio backlog items](../backlogs/organize-backlog.md)
- [Planning a sprint](../sprints/assign-work-sprint.md) 
- [Forecasting work](../sprints/forecast.md) 
- [Emailing a list of backlog items](email-work-items.md)

**Additional supported tasks**:  
::: moniker range=">= azure-devops-2019" 
- [Bulk modifying work items](../backlogs/bulk-modify-work-items.md)  
	- [Change work item type](../backlogs/remove-delete-work-items.md#change-type)  
	- [Move work item to a different project](../backlogs/remove-delete-work-items.md#move)  
	- [Assign work items, change the iteration](../backlogs/bulk-modify-work-items.md#assign-to)  
	- [Add or remove tags](../queries/add-tags-to-work-items.md#bulk-add-or-remove-tags)
	- [Delete work items](../backlogs/remove-delete-work-items.md#delete)  
- [Creating a Git branch from one or more work items](../backlogs/connect-work-items-to-git-dev-ops.md)  
- [Monitoring team velocity](../../report/dashboards/velocity-chart-data-store.md)  
::: moniker-end  

::: moniker range=">= tfs-2017 <= tfs-2018"  
- [Bulk modifying work items](../backlogs/bulk-modify-work-items.md)
	- [Assign work items, change the iteration](../backlogs/bulk-modify-work-items.md#assign-to)
 	- [Delete work items](../backlogs/remove-delete-work-items.md#delete)  
 	- [Add or remove tags](../queries/add-tags-to-work-items.md#bulk-add-or-remove-tags)
- [Creating a Git branch from one or more work items](../backlogs/connect-work-items-to-git-dev-ops.md)
- [Restoring work items from the recycle bin](../backlogs/remove-delete-work-items.md#restore-work-items) 
- [Monitoring team velocity](../../report/dashboards/velocity-chart-data-store.md) 
::: moniker-end  

::: moniker range="tfs-2015"  
- [Bulk modifying work items](../backlogs/bulk-modify-work-items.md)
- [Assigning work items, change the iteration](../backlogs/bulk-modify-work-items.md#assign-to)
- [Adding or removing tags](../queries/add-tags-to-work-items.md#bulk-add-or-remove-tags)
- [Restoring work items from the recycle bin](../backlogs/remove-delete-work-items.md#restore-work-items) 
- [Monitoring team velocity](../../report/dashboards/velocity-chart-data-store.md)  
::: moniker-end  


::: moniker range="tfs-2013"
- [Bulk modifying work items](../backlogs/bulk-modify-work-items.md)  
- [Assigning work items, change the iteration](../backlogs/bulk-modify-work-items.md#assign-to)  
- [Adding or removing tags](../queries/add-tags-to-work-items.md#bulk-add-or-remove-tags)
- [Monitoring team velocity](../../report/dashboards/velocity-chart-data-store.md) 
::: moniker-end


## Sprints 

Sprint tools provide teams a focused view of work items they've assigned to a specific sprint. You can add tasks to work items and prioritize your sprint backlog.  

[Sprint backlog](../sprints/add-tasks.md) | [Taskboard](../sprints/task-board.md) | [Capacity](../sprints/set-capacity.md)  
 
**Best set of tools for**: 
- [Implementing Scrum methods](../sprints/best-practices-scrum.md)  
- [Adding tasks to backlog items](../sprints/add-tasks.md)  
- [Configuring team capacity](../sprints/set-capacity.md)  
- [Monitoring and adjusting team capacity](../sprints/adjust-work.md)  
- [Updating remaining work, and task status](../sprints/task-board.md)  
- [Emailing or sharing a sprint plan](../sprints/share-plan.md)

**Additional supported tasks**: 
- [Monitoring sprint burndown](../sprints/sprint-burndown.md)  
- [Bulk modifying work items](../backlogs/bulk-modify-work-items.md)  


## Queries

Queries enable you to filter work items within or across projects for the purposes of listing, updating, or sharing work items.

- [Queries](../queries/view-run-query.md) | [Query operators](../queries/query-operators-variables.md) 

**Best tool for**:  
- [Listing items to perform bulk updates, assign or reassign](../backlogs/bulk-modify-work-items.md)
- Listing a [tree of parent-child related work item](../queries/linking-attachments.md#tree) or [dependent work items](../queries/linking-attachments.md#dependents)
- [Triaging work items (review, set priority, update)](../queries/triage-work-items.md)
- [Creating simple progress and trend charts](../../report/dashboards/charts.md)
- [Emailing a list work items](email-work-items.md)

**Additional supported tasks**: 
- Create a chart and add it to a dashboard
- Create a chart to get a count of items or sum a field
- Create a chart that shows a burndown or burnup over time

## Plans 

When you want to review the schedule of stories or features your teams plan to deliver, use  [Delivery Plans](../plans/review-team-plans.md). Plans show scheduled work items that are assigned to sprints of selected teams against a calendar view. 

**Best tool for**: 
- [Viewing product or portfolio work items assigned to several teams against a calendar schedule](../plans/review-team-plans.md)  

**Additional supported tasks**: 
- [Moving a work item to a different iteration](../plans/review-team-plans.md)


## Office integration tools  

> [!NOTE]   
> Starting with Azure DevOps Server 2019 and Visual Studio 2019, the Team Foundation plug-in for Office is deprecating support for Office Project and Storyboarding with PowerPoint.  


<table width="100%">
<tbody valign="top">
<tr>
<th width="30%">Office application</th>
<th width="70%">Best tool for:</th>
</tr>

<tr>
<td>[**Excel**](../backlogs/office/bulk-add-modify-work-items-excel.md) </td>
<td> 
<ul>
<li>Adding or updating many work items and their fields</li>
<li>Adding or changing hierarchical links between work items</li>
</ul>
</td>
</tr>

<tr>
<td>[**Project**](../backlogs/office/create-your-backlog-tasks-using-project.md) </td>
<td>
<ul> 
<li>Importing a project plan to a project</li>
<li>Adding tasks to Project and publishing them as work items</li>
<li>Creating or updating parent-child links or predecessor-successor </li>links
</ul>
</td>
</tr>

<tr>
<td>[**Storyboarding with PowerPoint**](../backlogs/office/storyboard-your-ideas-using-powerpoint.md)   </td>
<td> 
<ul>
<li>Storyboarding features and user interface changes </li>
<li>[Linking your storyboard to a work item](../backlogs/office/storyboard-your-ideas-using-powerpoint.md#link-your-storyboard-to-a-backlog-item)</li>
<li>[Adding and sharing storyboard shapes](../backlogs/office/add-share-storyboard-shapes.md)</li>
</ul>
</td>
</tr>
</tbody>
</table>


## Test tools, test artifacts, and bugs
Testing tools used several work item types&mdash;such as test plans, test suites, test cases, and more. You create and manage them from **Test Plans/Test** or using one or more test tools. Several of these tools also support creating bugs.  


<table width="100%">
<tbody valign="top">
<tr>
<th width="30%">Test tool</th>
<th width="70%">Best tool for:</th>
</tr>
<tr>
<td>[Test Plans](../../test/create-a-test-plan.md) </td>
<td> 
<ul>
<li>[Test Plans and Test Suites](../../test/create-a-test-plan.md)</li>
<li>[Test Cases](../../test/create-test-cases.md)</li>
<li>[Test Cases, grid view](../../test/reference-qa.md#q-is-there-a-way-to-quickly-add-multiple-test-cases-at-the-same-time)</li>
<li>[Shared Steps, Shared Parameters](../../test/repeat-test-with-different-data.md)</li>
<li>[Delete test artifacts](../backlogs/delete-test-artifacts.md)</li>
</ul>
<p>**Additional supported tasks**:</p>
<ul>
<li>[Track test status](../../test/track-test-status.md)</li>
<li>[Order manual tests within suites](/azure/devops/release-notes/2016/jun-01-team-services#ordering-of-tests-in-test-hub)</li>
<li>[Export test plans and test suites](../../test/reference-qa.md#testcases)</li>
<li>[Assign testers to test cases](../../test/user-acceptance-testing.md#assign-and-invite-testers)</li>
</ul>
</td>
</tr>

<tr>
<td>[Test Runner](../../test/run-manual-tests.md)</td>
<td> 
<ul>
<li>[Running tests, adding bugs](../../test/run-manual-tests.md) </li>
</ul>
</td>
</tr>

<tr>
<td>[Test & Feedback extension](../../test/connected-mode-exploratory-testing.md) </td>
<td> 
<ul>
<li>[Exploratory testing, capture feedback in connected mode](../../test/connected-mode-exploratory-testing.md)</li>
<li>[Adding bugs, tasks, and test cases linked to a work item](../../test/explore-workitems-exploratory-testing.md)</li>
<li>[Requesting feedback](../../test/request-stakeholder-feedback.md)</li>
<li>[Providing feedback](../../test/provide-stakeholder-feedback.md)</li>
</ul>
<p>**Additional supported tasks**: </p>
<ul>
<li>[Updating existing bugs](../../test/add-to-bugs-exploratory-testing.md)</li>
<li>[Capture feedback in standalone mode](../../test/standalone-mode-exploratory-testing.md)</li>
<li>[Capture screen recordings of your app during testing](../../test/reference-qa.md#q-can-i-capture-screen-recordings-of-my-app)</li>
</ul>
</td>
</tr>
</tbody>
</table>

<


## Other tools 


<table width="100%">
<tbody valign="top">
<tr>
<th width="30%">Tool</th>
<th width="70%">Best tool for:</th>



</tr>

<tr>
<td>[Adhoc search](../queries/search-box-queries.md) </td>
<td> 
<ul>
<li>Find a specific work item using its ID or a keyword</li>
<li>Find one or more work items across all projects in a fast, flexible manner</li>
<li>Perform full text search across all work item fields</li>
<li>Review work items assigned to a specific team member</li>
<li>Search against specific work item fields to quickly narrow down a list of work items</li>
<li>Determine what key words will support a managed search.</li>
</ul>
</td>
</tr>

<tr>
<td>[Work item templates](../backlogs/work-item-template.md) </td>
<td> 
<ul>
<li>Capture templates</li>
<li>Apply templates to update work items</li>
<li>Use templates to create work items</li>
<li>Manage work item templates.</li>
</ul>
</td>
</tr>
<tr>
<td>**Request and capture feedback**</td>
<td> 
<ul>
<li>[Request feedback](../../project/feedback/get-feedback.md)</li>
<li>[Give feedback using Microsoft Feedback Client](../../project/feedback/give-feedback.md)</li>
</ul>
</td>
</tr>
<tr>
<td>**Notifications**</td>
<td> 
<ul>
<li>[Manage personal notifications](../../notifications/howto-manage-personal-notifications.md)</li>
<li>[Manage team and project notifications](../../notifications/howto-manage-team-notifications.md)</li>
<li>[Manage organization notifications](../../notifications/howto-manage-organization-notifications.md)</li>
</ul>
</td>
</tr>
<tr>
<td>**Favorites**</td>
<td> 
<ul>
<li>[Set personal and team favorites](../../project/navigation/set-favorites.md)  </li>
</ul>
</td>
</tr>
</tbody>
</table>




## Marketplace extensions 

A number of additional tools become available when you install one of the [Extensions for Azure DevOps, Boards category](https://marketplace.visualstudio.com/search?target=AzureDevOps&category=Boards&sortBy=Downloads). 

### [TFS Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power)

Provides you access to these additional tools through the Team Explorer plug-in for Visual Studio. Additional requirements may apply.

-   Process Template Editor
-   Additional check-in policies for Team Foundation Version Control
-   Team Explorer enhancements including Team Members
-   Team Foundation Power Tool Command Line
-   Test Attachment Cleaner
-   Work Item Templates

## Related articles 

- [Navigate in the web portal](../../project/navigation/index.md)
- [Navigate in Team Explorer](../../user-guide/work-team-explorer.md)
- [Configure a Burndown or Burnup widget](../..//report/dashboards/configure-burndown-burnup-widgets.md)

