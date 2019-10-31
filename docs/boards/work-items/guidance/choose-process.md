---
title: Choose a process such as Basic, Agile, Scrum, or CMMI
titleSuffix: Azure Boards
description: Choose a process or process template, work with project artifacts in Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: work-items 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 702EE9E5-7AEA-49B6-9DB0-B12A882979C8
ms.topic: conceptual
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 09/18/2019
---

# Choose a process 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Anytime you create a project, you must choose a process or process template based on the process model you use. 
- A **process** defines the building blocks of the work item tracking system and supports the Inheritance process model for Azure Boards. This model supports customization of projects through a WYSIWYG user interface. 
- A **process template** defines the building blocks of the work item tracking system as well as other sub-systems you access through Azure Boards or an on-premises Azure DevOps Server or Team Foundation Server (TFS). It supports Hosted XML and On-premises XML process models which support customization of projects through the modification and import of XML definition files. 

For details on creating a project using the process of your choice, see [Create a project](../../../organizations/projects/create-project.md). To learn more about process models, see [Customize your work tracking experience](../../../reference/customize-work.md). 


::: moniker range=">= azure-devops-2019"

> [!TIP]  
> To view and manage Inherited process models, see [Manage processes](/azure/devops/organizations/settings/work/manage-process).

::: moniker-end

[!INCLUDE [temp](../../_shared/get-latest-process-templates.md)]


The work tracking objects contained within the default processes and process templates&mdash;Basic, Agile, CMMI, and Scrum&mdash;are the same and are summarized below. The Basic process is available from Azure DevOps Server 2019.1 and later versions. For simplicity, they are referred to as a "process."


<a id="template_intro"></a>

::: moniker range=">= azure-devops-2019"

## Basic, Agile, Scrum, and CMMI

The default processes differ mainly in the work item types (WITs) they provide for planning and tracking work. 

Basic is the most lightweight and is in a selective Preview. 
Scrum is the next most light-weight. Agile supports many Agile method terms, and CMMI, which stands for Capability Maturity Model Integration, provides the most support for formal processes and change management. 

::: moniker-end

::: moniker range="azure-devops-2019"

> [!NOTE]   
> The Basic process is available with [Azure DevOps Server 2019 Update 1](https://go.microsoft.com/fwlink/?LinkId=2097609) and later versions.  

::: moniker-end

::: moniker range="<= tfs-2018"

## Agile, Scrum, and CMMI

The default processes differ mainly in the work item types (WITs) they provide for planning and tracking work. 
Scrum is the next most light-weight. Agile supports many Agile method terms, and CMMI, which stands for Capability Maturity Model Integration, provides the most support for formal processes and change management. 

::: moniker-end

Choose the process that provides the best fit for your team.  

::: moniker range="<= tfs-2015"

> [!NOTE]    
> Epics are supported on Azure Boards and TFS 2015 and later versions. Each team can choose the backlog levels that are active as described in [Select backlog navigation levels for your team](../../../organizations/settings/select-backlog-navigation-levels.md).  

::: moniker-end

<table valign="top" width="100%">
<tbody>
            <tr valign="top">
            <td>
            <p><b>Basic</b></p>
            <p>Choose <a href="../../get-started/plan-track-work.md" data-raw-source="[Basic](../../get-started/plan-track-work.md)">Basic</a> when your team wants the simplest model that uses Issues, Tasks, and Epics to track work. Note: Basic is currently in a selective Preview for new users of Azure Boards only.</p>
             <p>Tasks support tracking Remaining Work.</p>
            </td>
        <td>
            <img src="../../get-started/_img/about-boards/basic-process-epics-issues-tasks-2.png" alt="Basic work item types"/>
        </td>
        </tr>
            <tr valign="top">
            <td>
            <p><b>Agile</b></p>
            <p>Choose <a href="agile-process.md" data-raw-source="[Agile](agile-process.md)">Agile</a> when your team uses Agile planning methods, including Scrum,
            and tracks development and test activities separately. This process works great if you want to track user stories and
            (optionally) bugs on the Kanban board, or track bugs and tasks on the taskboard.</p>
                <p>You can learn more about Agile methodologies at the
                <a href="http://www.agilealliance.org/">Agile Alliance</a>.
                </p>
             <p>Tasks support tracking Original Estimate, Remaining Work, and Completed Work.</p>
            </td>
        <td>
            <img src="_img/ALM_PT_Agile_WIT_Artifacts.png" alt="Agile work item types"/>
        </td>
        </tr>
    <tr valign="top">
        <td width="40%">
            <p><b>Scrum</b></p>
            <p>
                Choose <a href="scrum-process.md" data-raw-source="[Scrum](scrum-process.md)">Scrum</a> when your team practices Scrum. This process works great if you want to track product backlog items (PBIs) and
                bugs on the Kanban board, or break PBIs and bugs down into tasks on the taskboard.
            </p>
            <p>This process supports the Scrum methodology as defined by the <a href="https://www.scrum.org/" data-raw-source="[Scrum organization](https://www.scrum.org/)">Scrum organization</a>.</p>
            <p>Tasks support tracking remaining work only.</p>
        </td>
            <td width="60%">
            <img src="_img/ALM_PT_Scrum_WIT_Artifacts.png" alt="Scrum work item types"/>
            </td>
            </tr>
    <tr valign="top"> 
        <td>
            <p><b>CMMI</b></p>
            <p>Choose <a href="cmmi-process.md" data-raw-source="[CMMI](cmmi-process.md)">CMMI</a> when your team follows more formal project methods
            that require a framework for process improvement and an auditable record of decisions. With this process,
            you can track requirements, change requests, risks, and reviews.
            </p>
            <p>
            This process supports <a href="https://msdn.microsoft.com/library/ee461556.aspx" data-raw-source="[formal change management activities](https://msdn.microsoft.com/library/ee461556.aspx)">formal change management activities</a>.
            Tasks support tracking Original Estimate, Remaining Work, and Completed Work.
            </p>
            </td>
            <td>
            <img src="_img/ALM_PT_CMMI_WIT_Artifacts.png" alt="CMMI work item types"/>
            </td>
      </tr>
</tbody>
</table>

If you need more than two or three backlog levels, you can add more based on the process model you use: 
- **Inheritance**: [Customize your backlogs or boards for a process](../../../organizations/settings/work/customize-process-backlogs-boards.md)  
- **Hosted XML or On-premises XML**: [Add portfolio backlogs](../../../reference/add-portfolio-backlogs.md).  
	
<a id="main-distinctions"></a>

## Main distinctions among the default processes

The default processes are designed to meet the needs of most teams. 
If your team has unusual needs and connects to an on-premises server, 
you can customize a process and then create the project. 
Or, you can create a project from a process and then customize the project.  

The following table summarizes the main distinctions between the WITs and states 
used by the three default processes.  

<table valign="top">
<tbody>
    <tr>
        <td width="22%">
            <b>Tracking area</b>
        </td>
        <td width="18%">
            <b>Basic</b>
        </td>
        <td width="18%">
            <b>Agile</b>
        </td>
        <td width="24%">
            <b>Scrum</b>
        </td>
        <td width="18%">
            <b>CMMI</b>
        </td>
    </tr>
    <tr>
        <td>
            Workflow states
        </td>
    </td>
    <td>
    <ul>
    <li>To Do</li>
    <li>Doing</li>
    <li>Done</li>
    </ul>
    </td>
    <td>
    <ul>
    <li>New</li>
    <li>Active</li>
    <li>Resolved</li>
    <li>Closed</li>
    <li>Removed</li>
    </ul>
    </td>
   <td>
    <ul>
        <li>New</li>
        <li>Approved</li>
        <li>Committed</li>
        <li>Done</li>
        <li>Removed</li>
    </ul>
    <td>
    <ul>
    <li>Proposed</li>
    <li>Active</li>
    <li>Resolved</li>
    <li>Closed</li>
    </ul>
    </td>
    </tr>
    <tr>
    <td>
    Product planning (see note 1)
    </td>
    <td>
    <ul>
    <li>Issue</li>
    </ul>
    </td>
    <td>
    <ul>
    <li>User story</li>
    <li>Bug (optional)</li>
    </ul>
    </td>
    <td>
    <ul>
    <li>Product backlog item</li>
    <li>Bug (optional)</li>
    </ul>
    </td>
    <td>
    <ul>
    <li>Requirement</li>
    <li>Bug (optional)</li>
    </ul>
    </td>
    </tr>
    <tr>
    <td>
    Portfolio backlogs (2)
    </td>
    <td>
    <ul>
    <li>Epic</li>
    </ul>
    </td>
    <td>
    <ul>
    <li>Epic</li>
    <li>Feature</li>
    </ul>
    </td>
    <td>
     <ul>
    <li>Epic</li>
    <li>Feature</li>
    </ul>
    </td>
    <td>
    <ul>
    <li>Epic</li>
    <li>Feature</li>
    </ul>
    </td>
    </tr>
    <tr>
    <td>
    Task and sprint planning (3)
    </td>
    <td>
   <ul>
    <li>Task</li>
    </ul>
    </td>
    <td>
   <ul>
    <li>Task</li>
    <li>Bug (optional)</li>
    </ul>
    </td>
               <td>
                   <ul>
                       <li>Task</li>
    <li>Bug (optional)</li>
                   </ul>
               </td>
    <td>
      <ul>
    <li>Task</li>
    <li>Bug (optional)</li>
    </ul>
    </td>
    </tr>
    <tr>
    <td>
    Bug backlog management (1)
    </td>
    <td>
      <ul>
    <li>Issue</li>
    </ul>
    </td>
    <td>
      <ul>
    <li>Bug</li>
    </ul>
    </td>
    <td>
        <ul>
    <li>Bug</li>
    </ul>
    </td>
    <td>
        <ul>
    <li>Bug</li>
    </ul>
    </td>
    </tr>
    <tr>
    <td>
    Issue and risk management 
    </td>
    <td>
      <ul>
    <li>Issue</li>
    </ul>
    </td>
    <td>
      <ul>
    <li>Issue</li>
    </ul>
    </td>
        <td>
            <ul>
                <li>Impediment</li>
            </ul>
        </td>
    <td>
    <ul>
    <li>Issue</li>
    <li>Risk</li>
            <li>Review</li>
    </ul>
    </td>
    </tr>
</tbody>
</table>

**Notes:**

1.  You can add these WITs from the [product backlog](../../backlogs/create-your-backlog.md) or [Kanban board](../../boards/kanban-basics.md). 
    The product backlog shows a single view of the current backlog of work that can be dynamically re-ordered and grouped. 
    Product owners can quickly prioritize work and outline dependencies and relationships.

    Also, each team can configure how they want [bugs to show up on their backlogs and boards](../../../organizations/settings/show-bugs-on-backlog.md).

2.  With portfolio backlogs you can define a hierarchy of backlogs to understand the scope of work across several teams and see how that work rolls up into broader initiatives.
    Each team can configure which [portfolio backlogs appear for their use](../../../organizations/settings/select-backlog-navigation-levels.md).

3.  You can define tasks from the [sprint backlog and taskboard](../../sprints/assign-work-sprint.md). 
    With capacity planning, teams can quickly determine if they are over or under capacity for a sprint.  
 

<a id="workflow-states"></a>

### Workflow states, transitions, and reasons

Workflow states support tracking the status of work as it moves from a new state to a closed or a done state. 

Each workflow consists of a set of states, the valid transitions between the states, and the reasons for transitioning the work item to the selected state. 

The following diagrams show the typical forward progression of 
those WITs used to track work and code defects for the three default processes. 
They also show some of the regressions to former states and transitions to removed states. 
Each image shows only the default reason associated with the transition. 


#### [Basic process](#tab/basic-process) 

<table valign="top">
<tbody>
<tr>
<td>
<h4>Epic, Issue, Task hierarchy</h4>
<img src="../../get-started/_img/track-issues/basic-process-epics-issues-tasks.png" alt="Basic process work item hierarchy"/>
</td>
<td>
<h4>Epic, Issue, Task workflow </h4>
<img src="../../get-started/_img/track-issues/basic-process-workflow.png" alt="Basic process workflow"/>
</td>
<td>   </td>
</tr>
</tbody>
</table>


> [!NOTE]  
> The Basic process is available when you create a new project from Azure DevOps Services or [Azure DevOps Server 2019.1](https://go.microsoft.com/fwlink/?LinkId=2097609). For earlier on-premises deployments, choose Agile, Scrum, or CMMI process. 

#### [Agile process](#tab/agile-process) 

<table valign="top">
<tbody>
<tr>
<td>
<h4>User story</h4>
<img src="_img/ALM_PT_Agile_WF_UserStory.png" alt="User story workflow states, Agile process"/>
</td>
<td>
<h4>Feature</h4>
<img src="_img/ALM_PT_Agile_WF_Feature.png" alt="Feature workflow states, Agile process"/>
</td>
<td>
<h4>Epic</h4>
<img src="_img/ALM_PT_Agile_WF_Epic.png" alt="Epic workflow states, Agile process"/>
</td>
</tr>
<tr>
<td>
<h4>Bug</h4>
<img src="_img/ALM_PT_Agile_WF_Bug.png" alt="Bug workflow states, Agile process"/>
</td>
<td>
<h4>Task</h4>
<img src="_img/ALM_PT_Agile_WF_Task.png" alt="Task workflow states, Agile process"/>
</td>
<td>   </td>
</tr>
</tbody>
</table>


#### [Scrum process](#tab/scrum-process) 

<table valign="top">
<tbody>
<tr>
<td>
<h4>Product backlog item</h4>
<img src="_img/ALM_PT_Scrum_WF_PBI.png" alt="Product backlog item workflow states, Scrum process"/>
</td>
<td>
<h4>Feature</h4>
<img src="_img/ALM_PT_Scrum_WF_Feature.png" alt="Feature workflow states, Scrum process"/>
</td>
<td>
<h4>Epic</h4>
<img src="_img/ALM_PT_Scrum_WF_Epic.png" alt="Epic workflow states, Scrum process"/>
</td>
</tr>
<tr>
<td>
<h4>Bug</h4>
<img src="_img/ALM_PT_Scrum_WF_Bug.png" alt="Bug workflow states, Scrum process"/>
</td>
<td>
<h4>Task</h4>
<img src="_img/ALM_PT_Scrum_WF_Task.png" alt="Task workflow states, Scrum process"/>
</td>
<td>  </td>
</tr>
<tr>
</tbody>
</table>


#### [CMMI process](#tab/cmmi-process) 

<table valign="top">
<tbody>
<tr>
        <td>
<h4>Requirement</h4>
<img src="_img/ALM_PT_CMMI_WF_Requirement.png" alt="Requirement workflow states, CMMI process"/>
</td>
<td>
<h4>Feature</h4>
<img src="_img/ALM_PT_CMMI_WF_Feature.png" alt="Feature workflow states, CMMI process"/>
</td>
<td>
<h4>Epic</h4>
<img src="_img/ALM_PT_CMMI_WF_Epic.png" alt="Epic workflow states, CMMI process"/>
</td>
</tr>
<tr>
<td>
<h4>Bug</h4>
<img src="_img/ALM_PT_CMMI_WF_Bug.png" alt="Bug workflow states, CMMI process"/>
</td>
<td>
<h4>Task</h4>
<img src="_img/ALM_PT_CMMI_WF_Task.png" alt="Task workflow states, CMMI process"/>
</td>
<td>  </td>
</tr>
<tr>
</tbody>
</table>


* * *



Most WITs used by Agile tools, ones that appear on backlogs and boards, support any-to-any transitions. You can update the status of a work item using the Kanban board or the taskboard by dragging it to its corresponding state column.

You can change the workflow to support additional states, transitions, and reasons. To learn more, see [Customize your work tracking experience](../../../reference/customize-work.md).


<a id="removed-closed-done"></a>

### Removed, Closed, and Done states  

When you change the state of a work item to Removed, Closed, or Done, the system responds like this: 

*   **Closed** or **Done**: Work items in this state don't appear on the portfolio backlog and backlog pages. However, they do appear on the sprint backlog pages, Kanban board, and taskboard. Also, when you change the portfolio backlog view to show backlog items, for example, to view Features to Product Backlog Items, items in the closed and done state will appear.   
*   **Removed**: Work items in this state don't appear on any backlog or board.   

Work items are maintained in a project as long as the project is active. 
Even if you set them to Closed, Done, or Removed, a record is kept in the data store. 
You can use a record to create queries or reports.  

If you need to permanently delete work items, see [Remove or delete work items](../../backlogs/remove-delete-work-items.md).


<a id="wits-all"></a>

## Work item types added to all processes 

The following WITs are added to all processes except the Basic process.  

  ![Work item types used by Test Plans, Microsoft Test Managers, My Work, and Feedback](_img/ALM_PT_WITS_Shared.png)

Teams create and work with these types using the corresponding tool: 

*   Test Plan, Test Suite, Test Case Shared Steps, and Shared Parameters: Microsoft Test Manager.
*   Feedback Request and Feedback Response: Request feedback.  
*   Code Review Request and Code Review Response: My Work (from Team Explorer) and Code Review Request.  

Work items from these type definitions are not meant to be created manually and therefore are added to the Hidden Types category. 
Work item types that are added to the Hidden Types category don't appear in the menus used to create new work items.   

::: moniker range="tfs-2013"

> [!NOTE]    
>**Feature availability**:  If you upgraded your project from TFS 2013 or an earlier version to a later version of TFS, you might have to add WITs that didn't exist in the earlier versions. For more information, see [Configure features after a TFS upgrade](../../../reference/configure-features-after-upgrade.md).  
>
>The following WITs were added with the indicated TFS version: 
>- Shared Parameters added with TFS 2013.2  
>- Test Plan and Test Suite added with TFS 2013.3  

::: moniker-end

<a id="test-experience"></a>

### WITs that support the test experience  

WITs that support the test experience and work with Test Manager and the web portal are linked together using the link types shown in the following picture. 

![Test management work item types](_img/ALM_PT_WITS_TestExperience.png)

From the web portal or Microsoft Test Manager, you can view which test cases are defined for a test suite, 
and which test suites are defined for a test plan. 
However, these objects aren't connected to each other through link types. 
You can customize these WITs as you would any other WIT. 
See [Customize work tracking objects to support your team's processes](../../../reference/customize-work.md). 

If you change the workflow for the test plan and test suite, you might need to update the process configuration as described here. For definitions of each test field, see [Query based on build and test integration fields](../../queries/build-test-integration.md).

## Related articles

<a id="term-note"></a>

You can customize a process before or after you create a project that uses that project. The methods you use depend on the process model you use. To learn more, see [Customize your work tracking experience](../../../reference/customize-work.md).    
 
- [Upload/download process templates](manage-process-templates.md)  
- [Changes made to process templates](changes-to-process-templates.md)  
- [Configure features after a TFS upgrade](../../../reference/configure-features-after-upgrade.md)  


If you have additional questions, see [Azure DevOps support page](https://azure.microsoft.com/support/devops/).
