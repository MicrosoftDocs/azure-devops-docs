---
title: About default processes and process templates
titleSuffix: Azure Boards
description: Learn about choosing a process or process template based on the process model you use in your Azure Boards project. 
ms.custom: work-items 
ms.service: azure-devops-boards
ms.assetid: 702EE9E5-7AEA-49B6-9DB0-B12A882979C8
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 05/02/2023
---


# About default processes and process templates

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Azure Boards offers various processes to choose from for managing work items. Selecting the right process is essential for optimizing the workflow and ensuring the success of a project. In this article, we explore the different processes available Azure Boards and provide guidance on how to choose the most suitable one for your project.

[!INCLUDE [temp](../../../includes/choose-process-introduction.md)]

[!INCLUDE [temp](../../includes/note-configure-customize.md)]

The work tracking objects contained within the default processes and process templates&mdash;Basic, Agile, Capability Maturity Model Integration (CMMI), and Scrum&mdash;are the same and summarized in this article.

[!INCLUDE [temp](../../includes/get-latest-process-templates.md)]

## Default processes

The default processes differ mainly in the work item types (WITs) they provide for planning and tracking work. 

**Basic** is the most lightweight and is in a selective Preview. 
**Scrum** is the next most lightweight. **Agile** supports many Agile method terms, and **CMMI** provides the most support for formal processes and change management. 

[!INCLUDE [temp](../../includes/note-basic-process.md)]

:::row:::
   :::column span="2":::
   
   **Basic**

   Choose [Basic](../../get-started/plan-track-work.md) when your team wants the simplest model that uses Issues, Tasks, and Epics to track work. 

 Tasks support tracking Remaining Work.

   :::column-end:::
   :::column span="2":::
   
   ![Basic work item types](../../get-started/media/about-boards/basic-process-epics-issues-tasks-2.png)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
   
   **Agile**

   Choose [Agile](agile-process.md) when your team uses Agile planning methods, including Scrum,
   and tracks development and test activities separately. This process works great if you want to track user stories and (optionally) bugs on the Kanban board, or track bugs and tasks on the taskboard.  

   You can learn more about Agile methodologies at the
   [Agile Alliance](https://www.agilealliance.org/).
   
 Tasks support tracking Original Estimate, Remaining Work, and Completed Work.

   :::column-end:::
   :::column span="2":::
   
   ![Agile work item types](media/ALM_PT_Agile_WIT_Artifacts.png)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
   
   **Scrum**

   
   Choose [Scrum](scrum-process.md) when your team practices Scrum. This process works great for tracking  product backlog items (PBIs) and bugs on the Kanban board. You can also break down PBIs and bugs into tasks on the taskboard.
   
   This process supports the Scrum methodology as defined by the [Scrum organization](https://www.scrum.org/).

   Tasks support tracking remaining work only.

   :::column-end:::
   :::column span="2":::
   
   ![Scrum work item types](media/ALM_PT_Scrum_WIT_Artifacts.png)
   :::column-end:::
:::row-end:::
---
:::row::: 
   :::column span="2":::
   
   **CMMI**

   Choose [CMMI](cmmi-process.md) when your team follows more formal project methods
   that require a framework for process improvement and an auditable record of decisions. With this process,
   you can track requirements, change requests, risks, and reviews.
   
   
   This process supports [formal change management activities](./cmmi/guidance-background-to-cmmi.md).
   Tasks support tracking Original Estimate, Remaining Work, and Completed Work.
   
   :::column-end:::
   :::column span="2":::
   
   ![CMMI work item types](media/ALM_PT_CMMI_WIT_Artifacts.png)
   :::column-end:::
  :::row-end:::
---

If you need more than two or three backlog levels, you can add more based on the process model you use: 
- **Inheritance**: [Customize your backlogs or boards for a process](../../../organizations/settings/work/customize-process-backlogs-boards.md)  
- **Hosted XML or On-premises XML**: [Add portfolio backlogs](../../../reference/add-portfolio-backlogs.md)  
	
<a id="main-distinctions"></a>

## Main distinctions among the default processes

The default processes are designed to meet the needs of most teams. 
If your team has unusual needs and connects to an on-premises server, 
you can customize a process, and then create the project. 
Or, you can create a project from a process and then customize the project.  

The following table summarizes the main distinctions between the WITs and states used by the four default processes.  

:::row:::
   :::column span="1":::
   Tracking area
   :::column-end:::
   :::column span="1":::
   Basic
   :::column-end:::
   :::column span="1":::
   Agile
   :::column-end:::
   :::column span="1":::
   Scrum
   :::column-end:::
   :::column span="1":::
   CMMI
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   
   Workflow states
   :::column-end:::
   :::column span="1":::
   
   
   - To Do
   - Doing
   - Done
   
   :::column-end:::
   :::column span="1":::
   
   
   - New
   - Active
   - Resolved
   - Closed
   - Removed
   
   :::column-end:::
      :::column span="1":::
   
   
   - New
   - Approved
   - Committed
   - Done
   - Removed
   :::column-end:::   
   :::column span="1":::
   
   
   - Proposed
   - Active
   - Resolved
   - Closed
   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   Product planning (see note 1)
   :::column-end:::
   :::column span="1":::
   
   
   - Issue
   
   :::column-end:::
   :::column span="1":::
   
   
   - User story
   - Bug (optional)
   
   :::column-end:::
   :::column span="1":::
   
   
   - Product backlog item
   - Bug (optional)
   
   :::column-end:::
   :::column span="1":::
   
   
   - Requirement
   - Bug (optional)
   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   Portfolio backlogs (2)
   :::column-end:::
   :::column span="1":::
   
   
   - Epic
   
   :::column-end:::
   :::column span="1":::
   
   
   - Epic
   - Feature
   
   :::column-end:::
   :::column span="1":::
   
 
   - Epic
   - Feature
   
   :::column-end:::
   :::column span="1":::
   
   
   - Epic
   - Feature
   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   Task and sprint planning (3)
   :::column-end:::
   :::column span="1":::
   
   
   - Task
   
   :::column-end:::
   :::column span="1":::
   
   
   - Task
   - Bug (optional)
   
   :::column-end:::
      :::column span="1":::
   
   
   - Task
   - Bug (optional)
   
   
   :::column-end:::
   :::column span="1":::
   
  
   - Task
   - Bug (optional)
   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   Bug backlog management (1)
   :::column-end:::
   :::column span="1":::
   
  
   - Issue
   
   :::column-end:::
   :::column span="1":::
   
  
   - Bug
   
   :::column-end:::
   :::column span="1":::
   
   
   - Bug
   
   :::column-end:::
   :::column span="1":::
   
   
   - Bug
   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   Issue and risk management 
   :::column-end:::
   :::column span="1":::
   
  
   - Issue
   
   :::column-end:::
   :::column span="1":::
   
  
   - Issue
   
   :::column-end:::
   :::column span="1":::
   
   
   - Impediment
   
   :::column-end:::
   :::column span="1":::
   
   
   - Issue
   - Risk
   - Review
   
   :::column-end:::
:::row-end:::
---

> [!NOTE]  
> 1. You can add these WITs from the [product backlog](../../backlogs/create-your-backlog.md) or [Kanban board](../../boards/kanban-overview.md). The product backlog shows a single view of the current backlog of work that can be dynamically re-ordered and grouped. Product owners can quickly prioritize work and outline dependencies and relationships.  
> Also, each team can configure how they want [bugs to show up on their backlogs and boards](../../../organizations/settings/show-bugs-on-backlog.md).  
> 2. With portfolio backlogs you can define a hierarchy of backlogs to understand the scope of work across several teams and see how that work rolls up into broader initiatives. Each team can configure which [portfolio backlogs appear for their use](../../../organizations/settings/select-backlog-navigation-levels.md).  
> 3. You can define tasks from the [sprint backlog and taskboard](../../sprints/assign-work-sprint.md). 
With capacity planning, teams can quickly determine if they are over or under capacity for a sprint.  

<a id="workflow-states"></a>

### Workflow states, transitions, and reasons

Workflow states support tracking the status of work as it moves from a new state to a closed or a done state. Each workflow consists of a set of states, the valid transitions between the states, and the reasons for transitioning the work item to the selected state.

> [!IMPORTANT]  
> For Azure DevOps Services and Azure DevOps Server 2019, the default workflow transitions support any state to any state transition. You can customize these workflows to restrict some transitions .See [Customize work tracking objects to support your team's processes](../../../reference/customize-work.md).  
> 
> Also, you can view the supported workflow transitions for each work item type by installing the [State Model Visualization](https://marketplace.visualstudio.com/items?itemName=taavi-koosaar.StateModelVisualization) Markeplace extension. This extension adds a new hub under Boards labeled **State Visualizer**. On that page you can choose a work item type and view the workflow state model.  

The following diagrams show the typical forward progression of 
those WITs used to track work and code defects for the three default processes. 
They also show some of the regressions to former states and transitions to removed states. 
Each image shows only the default reason associated with the transition. 

#### [Agile process](#tab/agile-process) 

:::row:::
   :::column span="1":::
   
   #### User story
   ![User story workflow states, Agile process](media/ALM_PT_Agile_WF_UserStory.png)
   :::column-end:::
   :::column span="1":::
   
   #### Feature
   ![Feature workflow states, Agile process](media/ALM_PT_Agile_WF_Feature.png)
   :::column-end:::
   :::column span="1":::
   
   #### Epic
   ![Epic workflow states, Agile process](media/ALM_PT_Agile_WF_Epic.png)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   #### Bug
   ![Bug workflow states, Agile process](media/ALM_PT_Agile_WF_Bug.png)
   :::column-end:::
   :::column span="1":::
   
   #### Task
   ![Task workflow states, Agile process](media/ALM_PT_Agile_WF_Task.png)
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
:::row-end:::


#### [Basic process](#tab/basic-process) 

> [!NOTE]  
> The Basic process is available when you create a new project from Azure DevOps Services or [Azure DevOps Server 2019.1](https://go.microsoft.com/fwlink/?LinkId=2097609). For earlier on-premises deployments, choose Agile, Scrum, or CMMI process. 


:::row:::
   :::column span="1":::
   
   #### Epic, Issue, Task hierarchy
   ![Basic process work item hierarchy](../../get-started/media/track-issues/basic-process-epics-issues-tasks.png)
   :::column-end:::
   :::column span="1":::
   
   #### Epic, Issue, Task workflow 
   ![Basic process workflow](../../get-started/media/track-issues/basic-process-workflow.png)
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
:::row-end:::


#### [Scrum process](#tab/scrum-process) 

:::row:::
   :::column span="1":::
   
   #### Product backlog item
   ![Screenshot of product backlog item workflow states, Scrum process.](media/alm-pt-scrum-wf-pbi.png)
   :::column-end:::
   :::column span="1":::
   
   #### Feature
   ![Feature workflow states, Scrum process](media/ALM_PT_Scrum_WF_Feature.png)
   :::column-end:::
   :::column span="1":::
   
   #### Epic
   ![Epic workflow states, Scrum process](media/ALM_PT_Scrum_WF_Epic.png)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   #### Bug
   ![Screenshot of bug workflow states, Scrum process.](media/alm-pt-scrum-wf-bug.png)
   :::column-end:::
   :::column span="1":::
   
   #### Task
   ![Screenshot of task workflow states, Scrum process.](media/alm-pt-scrum-wf-task.png)
   :::column-end:::
   :::column span="1":::
     
   :::column-end:::
:::row-end:::


#### [CMMI process](#tab/cmmi-process) 

:::row:::
   :::column span="1":::
   
   #### Requirement
   ![Requirement workflow states, CMMI process](media/ALM_PT_CMMI_WF_Requirement.png)
   :::column-end:::
   :::column span="1":::
   
   #### Feature
   ![Feature workflow states, CMMI process](media/ALM_PT_CMMI_WF_Feature.png)
   :::column-end:::
   :::column span="1":::
   
   #### Epic
   ![Epic workflow states, CMMI process](media/ALM_PT_CMMI_WF_Epic.png)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   #### Bug
   ![Bug workflow states, CMMI process](media/ALM_PT_CMMI_WF_Bug.png)
   :::column-end:::
   :::column span="1":::
   
   #### Task
   ![Task workflow states, CMMI process](media/ALM_PT_CMMI_WF_Task.png)
   :::column-end:::
   :::column span="1":::
     
   :::column-end:::
:::row-end:::


* * *

Most WITs used by Agile tools, ones that appear on backlogs and boards, support any-to-any transitions. You can update the status of a work item using the Kanban board or the taskboard by dragging it to its corresponding state column.

You can change the workflow to support other states, transitions, and reasons. For more information, see [Customize your work tracking experience](../../../reference/customize-work.md).

<a id="removed-closed-done"></a>

### Work item states

When you change the state of a work item to `Removed`, `Closed`, or `Done`, the system responds as follows: 

* **`Closed`** / **`Done`**: Work items in this state don't appear on the portfolio backlog and backlog pages. However, they do appear on the sprint backlog pages, Kanban board, and taskboard. Also, when you change the portfolio backlog view to show backlog items, for example, to view Features to Product Backlog Items, work items in the closed and done state appear.   
* **`Removed`**: Work items in this state don't appear on any backlog or board.   

Your project maintains work items as long as the project is active. Even if you set work items to `Closed`, `Done`, or `Removed`, the data store keeps a record. You can use a record to create queries or reports.  

[!INCLUDE [temp](../../includes/note-closed-items.md)]

If you need to permanently delete work items, see [Remove or delete work items](../../backlogs/remove-delete-work-items.md).


<a id="wits-all"></a>

## WITs added to all processes 

The following WITs are added to all processes except the Basic process.  

  ![Work item types used by Test Plans, Microsoft Test Managers, My Work, and Feedback](media/ALM_PT_WITS_shared.png)

Your team can create and work with these types using the corresponding tool: 

|Tool  |Work item types  |
|---------|---------|
|Microsoft Test Manager     |   `Test Plan`, `Test Suite`, `Test Case Shared Steps`, `Shared Parameters`      |
|Request Feedback     |   `Feedback Request`, `Feedback Response`      |
|My Work (from Team Explorer), Code Review    | `Code Review Request`, `Code Review Response`        |

Work items from these type definitions aren't meant to be created manually and are then added to the  `Hidden Types` category. 
Work item types added to the `Hidden Types` category don't appear in the menus that create new work items.   

<a id="test-experience"></a>

### WITs that support the test experience  

WITs that support the test experience and work with Test Manager and the web portal are linked together using the link types shown in the following picture. 

![Test management work item types](media/ALM_PT_WITS_TestExperience.png)

From the web portal or Microsoft Test Manager, you can view which test cases are defined for a test suite and view which test suites are defined for a test plan. However, these objects aren't connected to each other through link types. Customize these WITs as you would any other WIT. For more information, see [Customize work tracking objects to support your team's processes](../../../reference/customize-work.md). 

If you change the workflow for the test plan and test suite, you might need to update the process configuration as described here. For definitions of each test field, see [Query based on build and test integration fields](../../queries/build-test-integration.md).

## Related articles

<a id="term-note"></a>

- [Customize your work tracking experience](../../../reference/customize-work.md).    
- [Upload/download process templates](manage-process-templates.md)   
- [Configure features after an Azure DevOps Server upgrade](/previous-versions/azure/devops/reference/upgrade/configure-features-after-upgrade)  
- [Azure DevOps support page](https://azure.microsoft.com/support/devops/)
