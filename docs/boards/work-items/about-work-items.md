---
title: Understand how to use work items to track user stories & more
titleSuffix: Azure Boards
description: Learn how Azure Boards supports work items to plan, track, & collaborate with others when developing software apps in Azure DevOps. 
ms.custom: work-items, engagement-fy23
ms.service: azure-devops-boards
ms.assetid:  
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 01/04/2023
---

# About work items such as features, user stories, bugs, tasks in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Track the features and requirements you're developing, code defects or bugs, and other details using work items. Work items are similar to GitHub issues, but offer different types to track different types of information.

::: moniker range=">= azure-devops-2019"

You use work items to track anything you need to track. Each work item represents an object stored in the work item data store. Each work item is based on a work item type. And work item types have a unique identifier within an organization or project collection. The available work item types depend on the [process you used when creating your project](guidance/choose-process.md) (Agile, Basic, Scrum, or CMMI).  

::: moniker-end

::: moniker range="< azure-devops-2019"

You use work items to track anything you need to track. Each work item represents an object stored in the work item data store. Each work item is based on a work item type. And work item types have a unique identifier within an organization or project collection. The available work item types depend on the [process you used when your project was created](guidance/choose-process.md) (Agile, Scrum, or CMMI). 

::: moniker-end

If you're just getting started, read the information provided in this article. To jump right in and start tracking work on a Kanban board, see [Plan and track work](../get-started/plan-track-work.md). For a quick reference to various work item tasks and key concepts, see [Work item quick reference](quick-ref.md).


<a id="wit" />

## Work item types to track work

To track different types of work, you choose a specific work item type. The work item types available to you differ depending on the [process used when your project was created](../../boards/work-items/guidance/choose-process.md)--**Agile**, **Basic**, **Scrum**, or **CMMI**--as illustrated in the following images. The items in your backlog might be called User Stories (Agile), Issues (Basic), Product Backlog Items (Scrum), or Requirements (CMMI). All four types are similar. They describe the customer value of the work and the work to do.    

[!INCLUDE [temp](../includes/work-item-types.md)]

Each work item type belongs to a category. Categories are used to group work item types and determine which types appear on backlogs and boards. 

> [!div class="mx-tdBreakAll"]  
> |Category | Work item type | Controls backlogs/boards |
> |----------|----------------|--------------------------|
> |Epic| Epic | Epic portfolio backlogs and boards |
> |Feature| Feature | Feature portfolio backlogs and boards |
> |Requirement| User Story (Agile)<br/>Issue (Basic)<br/>Product Backlog Item (Scrum)<br/>Requirement (CMMI)| Product backlogs and boards and Sprints backlog  |
> |Task | Task | Sprints Taskboards  |
> |Bug | Bug | Dependent on [how bugs are tracked](#track)  | 
> | N/A| Issue (Agile and CMMI)<br/>Impediment (Scrum)| Used to track non-work project elements that can impact work getting done.  |

For a list of other work item types available, see [Work item types to track testing, reviews, and feedback ](#wit-other) later in this article. 

 
<a id="form" />

## Work item form 

The work item form shows the fields used to track information related to the work item.  In general, you define and update a work item through it's work item form, although other methods are available to bulk import, export, update, and work items.  

Each work item form contains several tabs. The **Details** tab contains the common fields, other fields defined for the work item type, and the **Discussion** control.  

Common fields defined for all work item types display at the top of the work item form. As shown in the following image, these fields include the following fields: **Title**, **Assigned To**, **State**, **Reason**, **Area**, and **Iteration**.  You can update these fields at any time. 

:::image type="content" source="media/about-work-items/common-fields-basic.png" alt-text="Screenshot of common fields in work item form for all work item types.":::

<a id="assign-to-sprint"></a>

|Field| Default | Description | 
|-----|--------|--------------|
|**ID**| System assigned |The unique identifier that Azure DevOps assigns to a work item. Work item IDs are unique across all projects defined for an organization or project collection. | 
|**Title**| Required |A short description that summarizes what the work item is and helps team members distinguish it from other work items in a list. | 
|**Assigned To**| None |The name of a team member who currently owns the work item. For more information, see [Assign work](#assign-work) later in this article. | 
|**State**| New (Agile)<br/>To Do (Basic)<br/>New (Scrum)<br/>Proposed (CMMI) |The current state of the work item. All newly created work items are assigned to the work flow state associated with the *Proposed* workflow category This field allows you to update the status of a work item as it progresses from new or active to a done, closed, or completed state. | 
|**Reason**| New (Agile)<br/>Added to backlog (Basic)<br/>New backlog item (Scrum)<br/>New (CMMI) |The reason why the work item is in the current state. Each transition from one workflow state to another is associated with a corresponding reason.  | 
|**Area** Path| user-dependent | Specifies a project-configured path used to group work items by product feature or team areas.  The default assignment depends on the web page used to define the work item. When created from a team backlog or board, then the team's default assignment is used.   | 
|**Iteration** Path| user-dependent | Specifies a project-configured path used to group work items by named sprints or time periods.  The default assignment depends on the web page used to define the work item. When created from a team backlog or board, then the team's default assignment is used.<br/><br/>To schedule work items to be worked on during a specific time period, you assign the **Iteration Path**. First, you define the Iteration Paths for use in the project, and then each team selects the Iteration Paths that they'll use. To learn more, see [Assign work to sprints](../sprints/assign-work-sprint.md).  |
|**Tags**| None | Tags are user-definable keywords or phrases that users can define or select from a list of added tags. Tags isn't a field similar to other fields, but a control available at the top of each work item form. To learn more, see [Add work item tags to categorize and filter lists and boards](../queries/add-tags-to-work-items.md).  | 

To learn more about each field, see [Work item field index](./guidance/work-item-field.md).  

<a id="workflow-states">  </a> 

### State, Workflow, and Reason  

Workflow states define how a work item progresses from its creation to closure. The four main states that are defined for the User Story (Agile process) describe a user story's progression. The workflow states are *New*, *Active*, *Resolved*, and *Closed*. The *Removed* state supports removing a work item from appearing on the backlog. To learn more, see [Move, change, or delete work items](../backlogs/remove-delete-work-items.md#remove).)

The following images illustrate the natural progressions and regressions for User Stories (Agile), Issues (Basic), Product Backlog Items (Scrum), or Requirements (CMMI). Similar progressions and regressions are defined for other work item types for each process.  
 
[!INCLUDE [temp](../includes/four-process-workflow.md)] 
 

### Area and Iteration Path

You assign work items to an **Area Path** to group work items by team, product, or feature area. And, you assign work items to an **Iteration Path** to group work into sprints, milestones, or other event-specific or time-related period. Both these fields allow you to define a hierarchy of paths.

You define area and iteration paths for a project. Teams can then choose which paths are used to support their backlog and other Agile tools. To understand how Agile tools use area and iteration paths, see [Agile tools that rely on areas and iterations](../../organizations/settings/about-areas-iterations.md). 


<a id="assign" />
<a id="assign-work-items"></a>

## Assign work 

You can only assign a work item to one person at a time. The **Assigned To** field is an identity field designed to hold a user identity that has been added to the project. Within the work item form, choose the **Assigned To** field to select a project member. Or, you can begin typing the name of a project member to quickly focus your search to a select few.  

![Web work item form, Assign to field](../media/assign-work-items.png)  

**Note the following:**

- You can assign a work item only to users that have been [added to a project or team](../../organizations/security/add-users-team-project.md)  
- You can assign a work item to one and only one user at a time. If work is split across two or more users, consider creating separate work items that you'll assign to each user responsible for the work to complete. 
- Over time, the drop-down menu of identity fields display the names you have most recently selected.  
- Some drop-down menus that support assignment from a team backlog or board are automatically limited to users assigned to the team. 
- The system shows the display name and adds the user name when required to disambiguate identical display names.  
- You can assign several work items at once from the backlog or query results, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md) for details. 

::: moniker range="azure-devops" 

### Integration with Azure Active Directory 

When your system is configured with Azure Active Directory (Azure AD), then the system will synchronize person-name fields with these directories. Person-name fields include Activated By, Assigned To, Closed By, Created By, and Resolved By. 

You can grant access to a project by adding security groups that you created in Azure AD or by adding accounts to existing or custom groups defined from the collection setting **Security** pages. For more information, see [Add or delete users using Azure Active Directory](/azure/active-directory/fundamentals/add-users-azure-active-directory).
::: moniker-end

::: moniker range="<= azure-devops-2019" 

### Integration with Active Directory

When Azure DevOps Server is configured with Active Directory (AD), Azure DevOps synchronizes person-name fields with these directories. Person-name fields include Activated By, Assigned To, Closed By, Created By, and Resolved By. 

You can grant access to a project by adding security groups you create in AD or by adding accounts to existing or custom groups defined in the collection setting **Security** pages. To learn more, see [Set up groups for use in Azure DevOps Server deployments](/azure/devops/server/admin/setup-ad-groups). 
::: moniker-end

 
::: moniker range="<= azure-devops-2019"

> [!NOTE]    
>To minimize the list of names that appear in the drop-down menus of person-name fields, you can scope the field to only those groups that you want to appear in the menu. You do this by adding one or more of the following child elements to the **FIELD** definition in the work item type definition: **ALLOWEDVALUES**, **PROHIBITEDVALUES**, and **VALIDUSER**. For details, see [Define pick lists](../../reference/xml/define-pick-lists.md).

::: moniker-end


## Discussion control  

With the **Discussion** control, project members can  add and review comments made about the work being performed. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Discussion section within a work item form,](../backlogs/media/discussion-section.png)   

The rich text editor tool bar displays below the text entry area. It appears when you click your cursor within each text box that supports text formatting. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Discussion section, New Rich Text Editor toolbar.](../queries/media/share-plans/discussion-rich-text-editor-toolbar.png)  

To learn more, see [View and add work items](view-add-work-items.md#capture-comments-in-the-discussion-section).



::: moniker range=">= azure-devops-2019"

## Deployment, Development, and Related Work controls

The **Deployment**, **Development** and **Related Work** controls are special controls available in most work tracking forms. The following table provides a short description of each control. 

| Control | Description | 
|---------|-------------|
|**Deployment** | Provides a quick view of whether a feature or user story has been deployed and to what stage. You gain visual insight into the status of a work item as it is deployed to different release environments and quick navigation to each release stage and run. To learn more, see [Link work items to builds and deployments](work-item-deployments-control.md).<br/> ![Screenshot of Deployment control.](media/deployments-control/deployment-control-intro.png)  | 
|**Development** | records all Git development processes that support completion of the work item. This control can show your team information needed to take the next development step and minimize navigational steps to accomplish common development tasks. It also supports traceability, providing visibility into all the branches, commits, pull requests, and builds related to the work item. To learn more, see [Drive Git development from a work item ](../backlogs/connect-work-items-to-git-dev-ops.md).<br/>  ![Screenshot of Development control.](media/about-work-items/development-control.png)                 | 
|**Related Work** | Provides a quick view of linked work items, and supports adding a link to a parent work item. Can quickly add and remove linked work items.  ![Screenshot of Related Work control.](media/about-work-items/related-work-control.png)  | 


::: moniker-end


::: moniker range="tfs-2018"

## Development and Related Work controls

The **Development** and **Related Work** controls are used to support common linking tasks to development objects or other work items. These controls are available in most work items used to track work.  

| Control | Description | 
|---------|-------------|
|**Development** |                   | 

::: moniker-end


## History, Links, and Attachment tabs

The **History**, **Links**, and **Attachment** tabs appear in all work item forms.  

<a id="history"> </a>

### Review changes made to the work item through the History tab

The :::image type="icon" source="../media/icons/icon-history-tab-wi.png" border="false"::: **History** tab maintains a record of changes made to a work item over time. A record is made when changes are made to any of the [common fields](#common-fields), description or other rich-text fields, **Discussion** control entries, or addition or removal of links or attachments.  

The state change history diagram appears first. To see the entire history of state changes, choose **Show all**.

:::image type="content" source="../queries/media/state-change-history-diagram.png" alt-text="Screenshot of Work item form, Web portal, State change history diagram (web portal only).":::

Choose an entry in the left pane to view the details of changes made.

:::image type="content" source="../queries/media/hist-audit-wi-form.png" alt-text="Screenshot of Work item form, History tab, Web portal, Details.":::

To learn more, see [Query work item history and discussion fields](../queries/history-and-auditing.md). 

<a id="link"> </a>

### Link work items to other work or objects

From the :::image type="icon" source="../media/icons/icon-links-tab-wi.png" border="false"::: **Links** tab, you can add, remove, or view work items or other objects linked to the work item. Different link types are used to link to different objects, or to link to other work items. 

:::image type="content" source="media/about-work-items/links-tab.png" alt-text="Screenshot of Work item form, Links tab.":::

To learn more about linking, see the following articles: 
-  [Link user stories, issues, bugs, and other work items](../backlogs/add-link.md)
-  [Linking, traceability, and managing dependencies](../queries/link-work-items-support-traceability.md) 
-  [Link type reference](../queries/link-type-reference.md)

 

<a id="portal-clients"></a>  

## Track work in the web portal 

You can add and update work items from the web portal. To track work using other clients, see [Best tools for adding, updating, and linking work items](best-tool-add-update-link-work-items.md). 


## Web portal and clients that support tracking work items  

You can add and update work items from the web portal and various clients. For an overview of all clients that connect to your project, see [Tools and clients that connect to Azure DevOps](../../user-guide/tools.md). 

### Web portal 

Use the web portal to accomplish the following tasks. 

[!INCLUDE [temp](../includes/page-work-item-tasks.md)] 


<a id="track"> </a>

## Track bugs as requirements or tasks 

Many Scrum teams treat bugs the same as any backlog item or user story. Others see bugs as work that belongs to implementing a story, and then treat them as a task. Bugs, like product backlog items (PBIs) and user stories, represent work that needs doing. So, should you track your bugs along with other items in the product backlog items? Or, should you track your bugs as tasks linked to those backlog items? How does your team estimate work?  

Based on how your team answers these questions, they can choose how they want to track bugs from one of these three choices. To change the team setting, see [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md). 

For an overview of all team settings, see [Manage teams and configure team tools](../../organizations/settings/manage-teams.md).




<a id="queries" />

## Find or list work items 

Use the search box to do an impromptu search for finding specific work items based on select field criteria. Or, create a query to do a managed search, which lists work items based on your query criteria. With managed searches, you can do other tasks, such as a work items triage, creating a trend or status chart, adding to the dashboard, and more. 

To learn more, see these articles: 
- [About managed queries](../queries/about-managed-queries.md) 
- [View, run, or email a query](../queries/view-run-query.md)  
- [About managed queries](../queries/about-managed-queries.md) 
- [Work item query charts](../../report/dashboards/charts.md)  

<a id="templates" />

## Use work item templates to quickly fill in forms

With work item templates, you can quickly create work items that have pre-populated values for your team's commonly used fields. For example, create a task template that sets the area path, iteration path, and discipline or activity whenever you use it to create a task.  

To learn more, see [Use templates to add and update work items](../backlogs/work-item-template.md).

Once you have a template defined, you can share it via email or a [dashboard](../../report/dashboards/add-markdown-to-dashboard.md).  


<a id="customize" />

## Customize a work item type 

::: moniker range="azure-devops"
You can add or modify the fields contained within a work item type or add a custom work item type. To learn more, see [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md). 
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"
You can add or modify the fields contained within a work item type or add a custom work item type. To learn more, see:
- For project collections that use the Inheritance process model: [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md).  
- For project collections that use the On-premises XML process model: [Customize the On-premises XML process model](../../reference/on-premises-xml-process-model.md). 
::: moniker-end

::: moniker range="tfs-2018"
You can add or modify the fields contained within a work item type or add a custom WIT. To learn more, see [Customize the On-premises XML process model](../../reference/on-premises-xml-process-model.md). 
::: moniker-end




<a id="wit-other" />

## Work item types to track testing, reviews, and feedback 
 
Along with the work items types that appear on backlogs and boards, there are work item types that track testing, reviews, and feedback. These types, listed in the following table by category, are available for most all processes. 


:::row:::
   :::column span="1":::
      **Category**
   :::column-end:::
   :::column span="1":::
      **Work item type**
   :::column-end:::
   :::column span="2":::
       **Used to track specified types of work**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Code Review Request
   :::column-end:::
   :::column span="1":::
      Code Review Request
   :::column-end:::
   :::column span="2":::
       Tracks a code review request against code maintained in a [Team Foundation version control (TFVC) repository](../../repos/tfvc/index.yml). To learn more, see [Day in the life of a Developer: Suspend work, fix a bug, and conduct a code review](../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Code Review Response
   :::column-end:::
   :::column span="1":::
      Code Review Response
   :::column-end:::
   :::column span="2":::
       A code review response is created for each person who's requested to provide review comments.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Feedback Request
   :::column-end:::
   :::column span="1":::
      Feedback Request
   :::column-end:::
   :::column span="2":::
       Feedback requests track requests for feedback generated through the feedback request form. See [Get feedback](../../project/feedback/get-feedback.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Feedback Response
   :::column-end:::
   :::column span="1":::
      Feedback Response
   :::column-end:::
   :::column span="2":::
       A feedback response is created for each person and for each item for which feedback is provided through the Microsoft Feedback Client. See [Get feedback](../../project/feedback/get-feedback.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Shared Step
   :::column-end:::
   :::column span="1":::
      Shared Step
   :::column-end:::
   :::column span="2":::
       Shared steps are used to [repeat tests with different data](../../test/repeat-test-with-different-data.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Shared Parameter
   :::column-end:::
   :::column span="1":::
      Shared Parameter
   :::column-end:::
   :::column span="2":::
       Shared Parameters specify different data and parameters for running manual test cases. See [Repeat a test with different data](../../test/repeat-test-with-different-data.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Test Case
   :::column-end:::
   :::column span="1":::
      Test Case
   :::column-end:::
   :::column span="2":::
       Each test case [defines a manual test](../../test/create-test-cases.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Test Plan
   :::column-end:::
   :::column span="1":::
      Test Plan
   :::column-end:::
   :::column span="2":::
       Test plan group test suites and individual test cases together. Test plans include static test suites, requirement-based suites, and query-based suites.To learn more, see [Create test plans and test suites](../../test/create-a-test-plan.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Test Suite
   :::column-end:::
   :::column span="1":::
      Test Suite
   :::column-end:::
   :::column span="2":::
       Test suites group test cases into separate testing scenarios within a single test plan. Grouping test cases makes it easier to see which scenarios are complete. See [Create test plans and test suites](../../test/create-a-test-plan.md). 
   :::column-end:::
:::row-end::: 


Ideally, work items are only created from the specific tool designed to support their usage. So, to prevent users from creating work items manually, there's a Hidden Types category. All of the categories listed in the previous table are added to the Hidden Types category except for the Test Case category. 
 

<a id="permissions-access" />

## Required permissions and access 

As a member added to the Contributors group of a project, you can use most features provided under the **Boards** or **Work** hub. The following table summarizes the permissions that impact project member's ability to view and edit work items. 

| Permission | Level |  
|-----|--------| 
|**View work items in this node**| Area path | 
|**Edit work items in this node**| Area path | 
|**Create tag definition**| Project |   
|**Change work item type**| Project |  
|**Move work items out of this project**| Project |  
|**Delete and restore work items**| Project | 
|**Permanently delete work items**| Project |  

Users with Basic access have full access to all features. Users with Stakeholder access are limited to certain features. For details, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). 

To learn more about permissions and access, see [Permissions and access for work tracking](../../organizations/security/permissions-access-work-tracking.md) and [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).  

To add users to a project, see [Add users to a project or team](../../organizations/security/add-users-team-project.md).


## Tasks you can do using work items

- Use different [work item types (WITs)](#wit) to track different types of information. Specific tools include:  
	- [Add backlog items](../backlogs/create-your-backlog.md), such as Issues (Basic process), User Stories (Agile), Product Backlog Items (Scrum), Requirements (CMMI)
	- [Define Features and Epics](../backlogs/define-features-epics.md)
	- [Define, triage, and manage Bugs](../backlogs/manage-bugs.md)
	- [Add Tasks to backlog items](../sprints/add-tasks.md)
- Update the [work item form](#form) to add information, update status, reassign another project member or sprint, link work items, attach files, and add comments  
- [Specify how bugs should be tracked](#track), either as requirements or as tasks
- Add and modify work items using the [web portal and other supported clients](#portal-clients)
- [Assign a work item](#assign) to one and only one project member 
- [Assign work items to a sprint](#assign-to-sprint) via the iteration path
- [Link work items to other work items or Azure DevOps objects](#link) 
- Run [impromptu search or queries to find or list work items](#queries)  
- [Capture and apply work item templates](#templates) to quickly fill in work item field
- [Add and customize work item types](#customize)
- [Modify work items](#permissions-access) 



## Try this next 

> [!div class="nextstepaction"]
> [Add a work item](../backlogs/add-work-items.md?toc=/azure/devops/boards/work-items/toc.json&bc=/azure/devops/boards/work-items/breadcrumb/toc.json)


## Related articles 

- [Web portal navigation](../../project/navigation/index.md) 
- [Backlogs, portfolios, and Agile project management](../backlogs/backlogs-overview.md) 
- [About Kanban and Agile project management](../boards/kanban-overview.md) 
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)
- [Agile, Scrum, and CMMI processes](./guidance/choose-process.md)  
- [Work item field index](./guidance/work-item-field.md)
- [Use categories to group work item types](../../reference/xml/use-categories-to-group-work-item-types.md)
