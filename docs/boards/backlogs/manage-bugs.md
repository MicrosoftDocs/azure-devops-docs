---
title: Define, capture, triage, and manage bugs or code defects
titleSuffix: Azure Boards 
description: Define, capture, and triage bugs, code defects, and software issues to manage technical debt and maintain software quality 
ms.custom: "boards-backlogs, contperf-fy21q4-portal"
ms.technology: devops-agile
ms.assetid: 6E5710EE-21C8-4264-AD65-A827D186F134
ms.author: kaelli
author: KathrynEE
ms.topic: how-to
ms.date: 04/30/2021 
---

# Define, capture, triage, and manage bugs

[!INCLUDE [temp](../includes/version-all.md)]

How do you track and manage defects in your code? How do you make sure software problems and customer feedback get addressed quickly to support high-quality software deployments? And, how do you do make good progress on new features while addressing your technical debt? 

At a minimum, you need a way to capture your software issues, stack rank them, assign them to a team member, and track progress. You'll want to manage your code defects in ways that align with your Agile practices. 

To support these scenarios, Azure Boards provides a Bug work item type. The Bug work item type shares all the standard features of other work item types with a few more. For an overview of standard features, see [Track work with user stories, issues, bugs, features, and epics](../work-items/about-work-items.md).

Extra features for managing bugs include the following:

- Option for each team to choose how they want to track bugs 
- Test tools to capture bugs 
- Built-in integration across Azure DevOps to track bugs linked to builds, releases, and tests


[!INCLUDE [temp](../includes/basic-process-bug-note.md)]  


## Bug work item type 

The following image shows the Bug work item type for the Scrum process. The Bug work item type for Agile and CMMI processes tracks similar information. It is designed to appear on the product backlog along with requirements or on the Taskboard along with tasks.  

[!INCLUDE [temp](../includes/image-differences-with-wits.md)] 

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]  
> ![Bug work item type, form for Scrum process, Azure DevOps Server 2020 and cloud service. ](media/manage-bugs/bug-work-item-type.png)
::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops-2020"
![Bug work item type, form for Scrum process, Azure DevOps Server 2019 and earlier versions to TFS 2017.](media/manage-bugs-scrum-bug-from-ts.png)
::: moniker-end

::: moniker range="< tfs-2017"
![Bug work item type, form for Scrum process, TFS 2013 and TFS 2015 versions.](media/scrum-bug-wi-form.png) 
::: moniker-end

::: moniker range=">= tfs-2017"
> [!TIP]
> Use the [Discussion section](../work-items/work-item-form-controls.md#discussion) to add and review comments made about the work being performed to resolve the bug.  
::: moniker-end

## Fields specific to Bugs  

The Bug work item type uses some bug-specific fields. Use the fields described in the following table to capture both the initial issue and ongoing discoveries. For information about fields specific to the CMMI process Bug, see [Bugs, issues, and risks field reference](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md). For information about all other fields, see [Work item field index](../work-items/guidance/work-item-field.md). 


---
:::row:::
   :::column span="1":::
      **Field, Group, or Tab** 
   :::column-end:::
   :::column span="3":::
      **Usage**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Steps to Reproduce](../queries/titles-ids-descriptions.md)  
      (friendly name=Repro Steps)
   :::column-end:::
   :::column span="3":::
      Use to capture enough information so that other team members can fully understand the code defect. Include actions taken to find or reproduce the bug and expected behavior.   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [System Info](../queries/titles-ids-descriptions.md)  
      [Found In Build](../queries/build-test-integration.md) 
   :::column-end:::
   :::column span="3":::
       Information about the software and system configuration that is relevant to the bug and tests to apply.  The **System Info** and **Found in Build** fields are automatically filled in when a bug is created using a testing tool. These fields specify information about the software environment and build where the bug occurred. To learn more about defining the software environments, see [Test different configurations](../../test/test-different-configurations.md). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Acceptance Criteria](../queries/titles-ids-descriptions.md)
   :::column-end:::
   :::column span="3":::
      Provide the criteria to meet before the bug can be closed. Before work begins, describe the customer acceptance criteria as clearly as possible. Teams should use this criteria as the basis for acceptance tests, and to evaluate whether an item has been satisfactorily completed.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Integrated in Build](../queries/build-test-integration.md) 
   :::column-end:::
   :::column span="3":::
      Specifies the name of the build that incorporates the code that fixes the bug. This field should be specified when you resolve the bug. 
      For on-premises Azure DevOps, to access a drop-down menu of all builds that have been run, you can update the `FIELD` definitions for **Found in Build** and **Integrated in Build** to reference a global list. The global list is automatically updated with each build that is run. To learn more, see [Query based on build and test integration fields](../queries/build-test-integration.md).  
      For information about how to define build numbers, see [build number format options](../../pipelines/build/options.md). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Priority](../queries/planning-ranking-priorities.md)<sup>1</sup>
   :::column-end:::
   :::column span="3":::
      - **1**: Product should not ship without the successful resolution of the work item. The bug should be addressed as soon as possible.
      - **2**: Product should not ship without the successful resolution of the work item, but it does not need to be addressed immediately.
      - **3**: Resolution of the work item is optional based on resources, time, and risk.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Severity](../queries/planning-ranking-priorities.md)<sup>1</sup>
   :::column-end:::
   :::column span="3":::
      A subjective rating of the impact of a bug on the project or software system. For example: If choosing a remote link (a rare event) causes an application or web page to crash (a severe customer experience), you might specify **Severity = 2 - High** and **Priority = 3**.  Allowed values and suggested guidelines are: 
      - **1 - Critical**: Must fix. A defect that causes termination of one or more system components or the complete system, or causes extensive data corruption. And, there are no acceptable alternative methods to achieve required results.
      - **2 - High**: Consider fix. A defect that causes termination of one or more system components or the complete system, or causes extensive data corruption. However, an acceptable alternative method exists to achieve required results.
      - **3 - Medium**: (Default) A defect that causes the system to produce incorrect, incomplete, or inconsistent results.
      - **4 - Low**: A minor or cosmetic defect that has acceptable workarounds to achieve required results. 
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      [Deployment](#deployment-control)
   :::column-end:::
   :::column span="3":::
      The **Deployment** control supports links to and display of releases that contain work items. To use the control, you must enable settings for the release. To learn more, see [Link work items to releases](#deployment-control) later in this article.  
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="1":::
      [Development](#development-control) 
   :::column-end:::
   :::column span="3":::
      The **Development** control supports linking to and displaying links made to development objects. These objects include Git commits and pull requests, or TFVC changesets and versioned items. You can define links from the work item or from the commits, pull requests, or other development objects. To learn more, see [Link work items to development](#development-control) later in this article. 
   :::column-end:::
:::row-end:::
---
::: moniker-end


#### Notes: 

<sup>1</sup> To change the menu selection or picklist, see [Customize the work tracking experience](../../reference/customize-work.md). The customization method depends on the process model used by your project. 


## Choose how your team tracks bugs

When determining how your team will track bug, consider the following factors.

- Size of your team. Smaller teams will want to maintain a lightweight footprint and tracking bugs as requirements may be the most lightweight.
- Organization requirements to track work. If your team is required to track hours, then tracking bugs as tasks aligns with this requirement.
- How your team prioritizes work. If your team relies on the product backlog to order work, tracking bugs as requirements supports this activity. 
- Tools your team wants to use such as the Planning pane, velocity chart, forecast, rollup, and delivery plans. Tracking bugs as tasks precludes use of several of these tools.  

The following table summarizes the three options teams have to track bugs. To learn more and to set the option for your team, see [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md). 

[!INCLUDE [temp](../includes/show-bugs-matrix-options.md)] 

<a id="customize"> </a>

## Customize your bug work item type 

You can customize your bug work item type or create another work item types to track software issues or customer feedback. With all work item types, you can customize the following elements: 

- Add or remove custom fields 
- Add custom controls or custom tabs within the work item form
- Customize the workflow states 
- Add conditional rules 
- Choose the backlog level the work item type appears 
  
Before you customize your process, we recommend you review [Configure and customize Azure Boards](../configure-customize.md). 

::: moniker range="azure-devops"
To customize your particular process, see [Customize an inheritance process](/azure/devops/organizations/settings/work/inheritance-process-model).  
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"
To customize your particular process, see [Customize an inheritance process](/azure/devops/organizations/settings/work/inheritance-process-model) or [Customize the On-premises XML process model](/azure/devops/reference/on-premises-xml-process-model). 
::: moniker-end

::: moniker range="<= tfs-2018"
To customize your particular process, see [Customize the On-premises XML process model](/azure/devops/reference/on-premises-xml-process-model). 
::: moniker-end



## Add or capture bugs 

You can define bugs from several different Azure DevOps tools. These include backlogs and boards and testing tools.  

> [!TIP]   
> By default, the only required field when creating a bug is the **Title** field. You can quickly add bugs in the same way you add user stories or product backlog items using Azure Boards. If you want to make some fields required, you can do that by adding conditional rules based on a state change. To learn more, see [Add a rule to a work item type (Inheritance process)](../../organizations/settings/work/custom-rules.md). 

### Add a bug from your backlog or board 

If your team chose to *manage bugs with requirements*, you can define bugs from your product backlog or Kanban board. To learn more, see [Create your product backlog](create-your-backlog.md) or [Start using your Kanban board](../boards/kanban-quickstart.md). 

- **Add a bug from the product backlog**  
	> [!div class="mx-imgBorder"]  
	> ![From product backlog, Add bug.](media/manage-bugs/add-bug-from-backlog.png)  

- **Add a bug from the product backlog**  
	> [!div class="mx-imgBorder"]  
	> ![From Kanban board, Add bug.](media/manage-bugs/add-bug-from-board.png)  

> [!TIP]    
> When you add a bug from your product backlog or Kanban board, the bug is automatically assigned the default Area Path and Iteration Path defined for the team. To learn more, see [Team defaults referenced by backlogs and boards](../../organizations/settings/about-teams-and-settings.md#team-defaults-referenced-by-backlogs-and-boards).


### Add a bug from your Sprint backlog or Taskboard 

If your team chose to *manage bugs with tasks*, you can define bugs from your Kanban board, product backlog, Sprint backlog, or Sprint Taskboard. You add a bug as a child to a product backlog work item.  

- **Add a linked child bug from the Kanban board**  
    You add a bug in the same way you add a task to a backlog item. To learn more, see [Add task checklists](../boards/add-task-checklists.md). 
	> [!div class="mx-imgBorder"]  
	> ![From Kanban board, Add child bug to backlog item.](media/manage-bugs/add-child-bug-from-board.png)  

- **Add a linked child bug from the Sprint Backlog**  
	You add a bug in the same way you add a task to a Sprint backlog. To learn more, see [Add tasks to backlog items](../sprints/add-tasks.md). 
	> [!div class="mx-imgBorder"]  
	> ![From Sprint backlog, Add child bug to backlog item.](media/manage-bugs/add-bug-sprint-backlog.png) 

### Create a bug from a testing tool 

The two testing tools you can use to add bugs while testing include the web portal Test Runner and the Test & Feedback extension.  

- **Test Runner**: When running manual tests, you can choose to **Create bug**. To learn more, see [Run manual tests](../../test/run-manual-tests.md).  
	> [!div class="mx-imgBorder"]  
	> ![Test Runner, Create bug feature.](media/manage-bugs/test-runner-create-bug.png)

- **Test & Feedback extension**: When running exploratory tests, you can choose to **Create bug** or **Create task**. To learn more, see [Exploratory testing with the Test & Feedback extension](../../test/connected-mode-exploratory-testing.md) 
	![Test & Feedback extension, Create bug or task feature.](../../test/media/connected-mode-exploratory-testing/create-bugs-02.png)  



<a id="fix-resolve-close">  </a>

## Bug lifecycle and workflow states

As with all other work item types, the Bug work item type has a well-defined workflow. Each workflow consists of three or more **States** and a **Reason**. Reasons specify why the item transitioned from one State to another. The following images illustrate the default bug workflow defined for the [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), and [CMMI](../work-items/guidance/cmmi-process.md) processes.


| Agile | Scrum | CMMI | 
|------------|------------|-----------| 
| ![Bug workflow states, Agile process template](../work-items/guidance/media/ALM_PT_Agile_WF_Bug.png) | ![Bug workflow states, Scrum process template](../work-items/guidance/media/ALM_PT_Scrum_WF_Bug.png) |  ![Bug workflow states, CMMI process template](../work-items/guidance/media/ALM_PT_CMMI_WF_Bug.png) |  

For Scrum bugs, you simply change the **State** from *Committed* (similar to *Active*) to *Done*. For Agile and CMMI, you first resolve the bug, indicating that the bug has been fixed. Typically, the person who created the bug then verifies the fix and updates the State from *Resolved* to *Closed*. If more work has been found after a bug has been resolved or closed, it can be reactivated by setting the State to Committed or Active.

::: moniker range=">= azure-devops-2020"  
> [!NOTE]  
> The Agile process bug work item type previously had a rule which reassigned the bug to the person who created it. This rule has been [removed from the default system process](../work-items/guidance/changes-to-process-templates.md). You can reinstate this automation by adding a rule. For an Inheritance process, see [Apply rules to workflow states, Automate reassignment based on state change](../../organizations/settings/work/apply-rules-to-workflow-states.md#reassign).
 
::: moniker-end  

### Verify a fix 

To verify a fix, a developer or tester should attempt to reproduce the bug and look for more unexpected behavior. If necessary, they should reactivate the bug.

When verifying a bug resolution, you may find that the bug was not completely fixed or you may disagree with the resolution. In this case, discuss the bug with the person who resolved it, come to an agreement, and possibly reactivate the bug. If you reactivate a bug, include the reasons for reactivating the bug in the bug description.


<a id="close">  </a>

### Close a bug  

You close a bug once it's verified as fixed. However, you may also close a bug for one of these reasons:

- **Deferred** - deferring a fix until the next product release
- **Duplicate** - bug has already been reported, you can link each bug with the Duplicate/Duplicate of link type and close one of the bugs  
- **As Designed** - feature works as designed
- **Cannot Reproduce** - tests prove that the bug can't be reproduced
- **Obsolete** - the bug's feature is no longer in the product
- **Copied to Backlog** - a PBI or user story has been opened to track the bug

> [!TIP]   
> Once a bug has been closed and the fix is actively released in deployments, recommended practice is to never reopen it due to regression. Instead, you should consider opening a new bug and link to the older, closed bug. 

::: moniker range=">= tfs-2017"
It's always a good idea to describe any more details for closing a bug in the **Discussion** field to avoid future confusion as to why the bug was closed. 
::: moniker-end

::: moniker range=">= azure-devops-2020"

### Automate bug closure when merging pull requests 

If your team uses a Git repository, you can set the State in linked bugs and other work items to close upon successful merging of pull requests. For more information, see [Set work item state in pull request](#set-state-pr) later in this article. 
::: moniker-end

## List and triage bugs  

Most teams, regardless of the option they chose to track bugs, define one or more bug queries. With queries, you can list active bugs, unassigned bugs, stale bugs, bug trends, and more. You can then add queries and query charts to your team dashboards to monitor bug status and progress. 

### Bug queries

Open a shared query or [use the query editor](../queries/using-queries.md) to create useful bug queries, such as the following:
- Active bugs by priority (```State <> Done``` or ```State <> Closed```)
- In Progress bugs (```State = Committed``` or ```State = Active```)
- Bugs to fix for a target release (```Tags Contains RTM```)
- Recent bugs - bugs opened within the last three weeks (```Created Date > @Today-21```) 

Once you have the queries of interest to your team, you can [create status or trend charts](../../report/dashboards/charts.md). You can also add the chart you create to a [dashboard](../../report/dashboards/dashboards.md).  

### Triage mode in query results

Once you've started coding and testing, you'll want to hold periodic triage meetings to review and prioritize your bugs. Typically, the project owner runs the bug triage meetings, and team leads, business analysts and other stakeholders who can speak about specific project risks attend them.

The project owner can define a shared query for new and reopened bugs to list bugs to be triaged. 

From the query results page, you can quickly move up and down within the list of bug work items using the up and down arrows. As you review each bug, you can assign it, add details, or set priority. To learn more, see [Triage work items](../queries/triage-work-items.md). 


> [!div class="mx-imgBorder"]  
> ![Screenshot of Query Results, Active Bugs, and Triage mode Right pane.](media/manage-bugs/bug-triage-mode.png)  


### Prioritize and assign bugs to a sprint 

If your team *tracks bugs as requirements*, you can view the list of active bugs from your backlog. With the [filter function](filter-backlogs-boards-plans.md), you can focus solely on bugs. From the product backlog, you can also perform the following tasks:  

- [Prioritize bugs on your backlog](create-your-backlog.md#reorder-your-backlog), stack rank against other items (stack ranking is disabled when filtering is enabled)  
- [Assign bugs to a sprint](../sprints/assign-work-sprint.md) from your backlog using the **Planning** pane  
- [Parent bugs to Features](organize-backlog.md#map-items-to-group-them-under-a-feature-or-epic) or other portfolio backlog items using the **Mapping** pane 
- [View rollup of work to portfolio backlog items](display-rollup.md).

If your team *tracks bugs as tasks*, you'll use managed queries to list and triage bugs. Then, within each sprint, you'll see those bugs that are assign to the sprint from the Sprint backlog or [Taskboard](../sprints/task-board.md).  

<a id="task-board-items"/> 

### Taskboard items versus query list items

You may notice and wonder why the items shown on a sprint Taskboard may differ from those listed in a query created from its corresponding sprint backlog. 

It's possible to assign tasks or bugs to an iteration but not have them linked to a parent backlog item. These items will show up in the created query, but might not show up on the Taskboard itself. The system runs the query and then applies a few background processes before displaying Taskboard items.

These reasons can cause work items that belong to the Task Category to not appear on a sprint backlog or Taskboard:  
- The task or bug hasn't been linked to a parent backlog item. Only those bugs and tasks that you have linked to a parent product backlog item (Scrum), user story (Agile), or requirement (CMMI) whose iteration path is set to the sprint will appear on the sprint backlog page.  
- The task or bug is a parent of another task or bug, or the user story is a parent of another user story. If you've created a hierarchy of tasks, bugs, or user stories, [only the child-level tasks or the child-level stories at the bottom of the hierarchy appear](resolve-backlog-reorder-issues.md#leaf-nodes).  
- The task's or bug's linked parent corresponds to a backlog item defined for another team. Or, the area path of the task's or bug's parent backlog item differs from the task's or bug's area path.  


## Create inline tests linked to bugs  

When your team *tracks bugs as requirements*, you can use the Kanban board to add tests to verify bug fixes. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Kanban board, 3 columns showing inline tests added and linked to bugs.](media/manage-bugs/add-tests-inline-kanban-board.png) 


## Update bug status 

You can update the bug status by dragging and dropping bugs to a new column on a board. 

- If your team *tracks bugs as requirements*, you use the Kanban board as shown in the following image.  To learn more, see [Start using your Kanban board](../boards/kanban-quickstart.md#update-status).  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Kanban board, drag and drop to update status.](media/manage-bugs/kanban-board-update-status.png) 

- If your team *tracks bugs as tasks*, you use the Taskboard. To learn more, see [Update and monitor your Taskboard](../sprints/task-board.md).  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Taskboard, drag and drop to update status.](../sprints/media/alm_tb_move_to_done.png) 

### Customize your board to track intermediate states 

You can add intermediate columns to track your bug status on the board. You can also define queries that filter based on the status of a Board Column. To learn more, see the following articles: 

::: moniker range=">= azure-devops-2020"

- [Add columns to your Kanban board](../boards/add-columns.md)
- [Customize a sprint Taskboard](../sprints/customize-taskboard.md)
- [Kanban board change queries](../queries/query-by-workflow-changes.md#kanban-board-change-queries)

::: moniker-end

::: moniker range="< azure-devops-2020"

- [Add columns to your Kanban board](../boards/add-columns.md)
- [Kanban board change queries](../queries/query-by-workflow-changes.md#kanban-board-change-queries)

::: moniker-end

### Automate bug reassignment based on workflow state 

To automate select actions, add custom rules to your Bug work item type. For example, you can add a rule as shown in the following image. This rule specifies to reassign a bug to the person who opened the bug once it is resolved. Typically, that person verifies that the bug is fixed and closes the bug. To learn more, see [Apply rules to workflow states (Inheritance process)](../../organizations/settings/work/apply-rules-to-workflow-states.md).

> [!div class="mx-imgBorder"]  
> ![Screenshot of rule defined to reassign bug based on resolved state.](media/manage-bugs/rule-reassigned-resolved-bug.png) 


<a id="set-state-pr">  </a>

::: moniker range=">= azure-devops-2020"
### Set work item state in pull request
::: moniker-end

[!INCLUDE [temp](../../includes/set-work-item-state-pull-request.md)] 

## Integration across Azure DevOps 

One of the methods used by Azure DevOps to support integration is to link objects to other objects.  In addition to linking work items to work items, you can also link work items to other objects such as builds, releases, branches, commits, and pull requests as illustrated in the following image. 

> [!div class="mx-imgBorder"]  
> ![Conceptual image that shows link types used to link work items to build and release objects.]( ../../notifications/media/types-of-work-item-links.png) 
 
You can add a link from the work item or from the build and release objects. 


<a id="development-control" />

### Link work items to development 

The **Development** control supports linking to and displaying links made to builds, Git commits and pull requests. Or, when a TFVC repository is used, it supports links to changesets and versioned items. Choosing the link opens the corresponding item in a new browser tab. To learn more, see [Drive Git development from a work item](connect-work-items-to-git-dev-ops.md).  
> [!div class="mx-imgBorder"]  
> ![Development control on work item form with sample links to build, pull requests, and commits.](media/manage-bugs/development-links.png)  

<a id="deployment-control" />

### Link work items to releases   

The **Deployment** control supports links to and display of releases that contain the work items. For example, the following image shows several releases that contain links to the current work item. You can expand each release to see details about each stage. You can choose the link for each release and stage to open the corresponding release or stage. To learn more, see [Link work items to deployments](../work-items/work-item-deployments-control.md).  
> [!div class="mx-imgBorder"]  
> ![Deployment control on work item form with sample releases.](media/manage-bugs/deployment-section-with-releases.png)  

### Link work items to pipeline runs 

Pipelines are often defined to automatically run when a new commit occurs to a Git repository. Work items associated with the commit pipelines will show up as part of the pipeline run if you customize your pipeline settings. To learn more, see [Customize your pipeline](../../pipelines/customize-pipeline.md).  

> [!div class="mx-imgBorder"]  
> ![Screenshot of Pipeline Settings, Automatically link work items in this run from selected branch.](media/manage-bugs/pipeline-settings.png) 
 
### Create or edit a work item upon a build failure

If you use classic pipelines (not YAML), you can create work items on a build failure. For details, see [Build options, Create a work item on failure](../../pipelines/build/options.md). 
<!---There is a Developer community post about it and a stack overflow workaround though

### Create or edit a work item upon a test failure

You can also create/edit a work item on a test failure as well.

Review test results - Azure Pipelines | Microsoft Docs

You can create work items on a build failure in classic Pipelines, but not in YAML :( There is a Developer community post about it and a stack overflow workaround though…
Build options - Azure Pipelines | Microsoft Docs

--> 
 

 

## Monitor bug status, assignments, and trends

You can track the bug status, assignments, and trends using queries that you can then chart and add to a dashboard. For example, here are two examples showing active bug trends by State and Active Bugs by Priority over time.

> [!div class="mx-imgBorder"]  
> ![Screenshot of two active bug query charts, Bug Trends by State and by Priority.](media/manage-bugs/query-charts-active-bugs.png) 

<!---
![Bug trend chart from query](media/manage-bugs-trend-chart.png)   ![Bug snapshot by priority](media/manage-bugs-priority-chart.png)   
-->

To learn more about queries, charts, and dashboards; see [About managed queries](../queries/about-managed-queries.md) and [Charts](../../report/dashboards/charts.md), and [Dashboards](../../report/dashboards/dashboards.md).   


::: moniker range=">= azure-devops-2019"

### Use Analytics views and the Analytics service to create bug reports

The Analytics service is the reporting platform for Azure DevOps, replacing the previous platform based on SQL Server Reporting Services.  

Analytics views provide pre-built filters to view work items. Four Analytic views are supported for bug reporting. You can use these as defined or further edit them to create a custom, filtered view. 

- Bugs - All history by month
- Bugs - Last 26 weeks
- Bugs - Last 30 days
- Bugs - Today 

To learn more about using Analytic views, see [What are Analytics views](../../report/powerbi/what-are-analytics-views.md) and [Create an active bugs report in Power BI based on a custom Analytics view](../../report/powerbi/active-bugs-sample-report.md).

You can use Power BI to create more complex reports than what you can get from a query. To learn more, see [Connect with Power BI Data Connector](../../report/powerbi/data-connector-connect.md). 

::: moniker-end  

::: moniker range="<= azure-devops-2020"  

### Pre-defined SQL Server bug reports

The following reports are supported for Agile and CMMI processes.  

- [Bug Status](../../report/sql-reports/bug-status-report.md)  
- [Bug Trends](../../report/sql-reports/bug-trends-report.md)  
- [Reactivations](../../report/sql-reports/reactivations-report.md)  

These report require you have SQL Server Analysis Services and SQL Server Reporting Services configured for your project. To learn how to add SQL Server reports for a project, see [Add reports to a project](../../report/admin/add-reports-to-a-team-project.md).  

::: moniker-end  


### Marketplace extensions 

There are a number of bug-related Marketplace extensions. See [Marketplace for Azure DevOps](https://marketplace.visualstudio.com/search?term=bug&target=AzureDevOps&category=All%20categories&sortBy=Installs). 

For additional information on extensions, see [Azure Boards extensions developed by Microsoft](../extensions/index.md).


## Try this next

> [!div class="nextstepaction"]
> [Triage work items](../queries/triage-work-items.md) 

## Related articles 

- [Use templates to add and update work items](work-item-template.md)  
- [Move, change type, or delete work items](remove-delete-work-items.md) 
- [Copy or clone a work item](copy-clone-work-items.md#copy-clone)

### Product backlog and Kanban board

- [Backlogs, portfolios, and Agile project management](backlogs-overview.md) 
- [Create your backlog](create-your-backlog.md)  
- [Define features and epics](define-features-epics.md)  
- [Organize your backlog, map child work items to parents](organize-backlog.md)  
- [Interactively filter backlogs, boards, queries, and plans](filter-backlogs-boards-plans.md)  
- [Forecast your product backlog](../sprints/forecast.md)  
- [Refine your backlog](best-practices-product-backlog.md)  

### Kanban board

- [About Boards and Kanban](../boards/kanban-overview.md) 
- [Kanban board quickstart](../boards/kanban-quickstart.md) 
- [Reorder cards](../boards/reorder-cards.md) 
- [Add task checklists](../boards/add-task-checklists.md) 
- [Kanban best practices](../boards/best-practices-kanban.md) 

### Sprint backlog and Taskboard 

- [Scrum and working with sprints best practices](../sprints/best-practices-scrum.md)  
- [Assign backlog items to a sprint](../sprints/assign-work-sprint.md)  
- [Add tasks](../sprints/add-tasks.md)  
- [Update the Taskboard](../sprints/task-board.md)  

### Integration within Azure DevOps

- [Link user stories, issues, bugs, and other work items](add-link.md) 
- [Follow a work item or pull request](../work-items/follow-work-items.md)
- [Configure run or build numbers](../../pipelines/process/run-number.md)

### Industry resources  

- [Good and Bad Technical Debt (and how TDD helps)](https://blog.crisp.se/2013/10/11/henrikkniberg/good-and-bad-technical-debt) by Henrik Kniberg  
- [Managing Technical Debt](https://www.infoq.com/articles/managing-technical-debt) posted by Sven Johann & Eberhard Wolff  

 
