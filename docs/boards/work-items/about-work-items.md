---
title: Understand how to use work items to track user stories & more
titleSuffix: Azure Boards
description: How to use Azure Boards work items to plan, track, & collaborate with others when developing software apps in Azure DevOps. 
ms.custom: work-items, seodec18, contperf-fy20q4
ms.technology: devops-agile
ms.assetid:  
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Track user stories, issues, bugs, and other work items in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Track the features and requirements you're developing, code defects or bugs, and other details using work items. Work items are similar to GitHub issues, but offer different types to track various types of information.

If you're just getting started, read the information provided in this article. To jump right in and start tracking work on a Kanban board, see [Plan and track work](../get-started/plan-track-work.md). For a quick reference to various work item tasks and key concepts, see [Work item quick reference](quick-ref.md).

## Plan and track work

::: moniker range=">= azure-devops-2019"

Use work items to track anything you need to track. Each work item represents an object stored in the work item data store. Each work item is based on a work item type. And work item types have a unique identifier within an organization or project collection. The available work item types depend on the [process you used when creating your project](guidance/choose-process.md) (Agile, Basic, Scrum, or CMMI).  

::: moniker-end

::: moniker range="< azure-devops-2019"

Use work items to track anything you need to track. Each work item represents an object stored in the work item data store. Each work item is based on a work item type. And work item types have a unique identifier within an organization or project collection. The available work item types depend on the [process you used when your project was created](guidance/choose-process.md) (Agile, Scrum, or CMMI). 

::: moniker-end

#### Tasks you can do using work items

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


<a id="permissions-access" />

## Required permissions and access

As a member added to the Contributors group of a project, you can use most features provided under **Boards** or **Work**. Users with Basic access have full access to all features. Users with Stakeholder access are limited to certain features. For details, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). 

To learn more about permissions and access, see [Permissions and access for work tracking](../../organizations/security/permissions-access-work-tracking.md) and [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).  

To add users to a project, see [Add users to a project or team](../../organizations/security/add-users-team-project.md).


<a id="wit" />

## Work item types (WITs)

To track different types of work, different WITs are defined. The work item types available are based on the [process used when your project was created](../../boards/work-items/guidance/choose-process.md)&mdash;Agile, Basic, Scrum, or CMMI&mdash;as illustrated in the following images. The items in your backlog might be called user stories (agile), issues (Basic), product backlog items (Scrum), or requirements (CMMI). All four types are similar: they describe the customer value of the work and the work to do.    

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

 
Along with the work items types that appear on backlogs and boards, there are work item types that track testing, reviews, and feedback. These types, listed in the following table by category, are available for all processes. 


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
 
<a id="form" />

## Work item form 

Each work item supports tracking data contained in work item fields. Also, it captures changes as updates are made within the **History** field and comments made in the **Discussion** section. To learn more about each field, see [Work item field index](./guidance/work-item-field.md). 

Each form contains multiple controls, as shown below and described in [Work item form controls](work-item-form-controls.md). 

![Screenshot of Work item form to track features or user stories.](../backlogs/media/add-work-item-vsts-user-story-form.png)


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


<a id="assign" />
<a id="assign-work-items"></a>

## Assign work items to a project member

You can only assign a work item to one person at a time. The **Assigned To** field is a person-name field designed to hold a user identity recognizable by the system. Within the work item form, choose the **Assigned To** field to select a project member. Or, you can begin typing the name of a project member to quickly focus your search to a select few. 

![Web work item form, Assign to field](../media/assign-work-items.png)  

Anyone who has write access to a project can assign work items, including users with [Basic and Stakeholder access](#permissions-access).   

**Note the following:**

- You can assign a work item only to users that have been [added to a project or team](../../organizations/security/add-users-team-project.md)  
- You can assign a work item to one and only one user at a time. If work is split across two or more users, consider creating separate work items that you'll assign to each user responsible for the work to complete 
- Over time, the drop-down menu of person-name fields will display the names you have most recently selected  
- Some drop-down menus that support assignment from a team backlog or board are automatically limited to users assigned to the team   
- The system shows the display name and adds the user name when required to disambiguate identical display names  
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

<a id="assign-to-sprint"></a>

## Assign work items to a sprint 

To schedule work items to be worked on during a specific time period, you assign the **Iteration Path**. First, you define the Iteration Paths for use in the project, and then each team selects the Iteration Paths that they'll use. To learn more, see [Assign work to sprints](../sprints/assign-work-sprint.md). 


<a id="link"> </a>

## Link work items to other work or objects

As shown in the following image, you can link work items to other work items. Depending on the work item type, the link type differs. Also, special link types support a hierarchy of work items using parent-child links and predecessor-successor links to track dependencies. 

![Work item link types, conceptual image](../queries/media/link-type-reference/linkscontrol-work-item-link-types.png)
 
Also, several tools support linking to other objects, such as builds, releases, commits, pull requests, and more. The following image demonstrates. 

::: moniker range=">= azure-devops-2019"
![Artifact-to-artifact link types](../queries/media/link-tracking-artifact-to-artifact-link-types.png)  
::: moniker-end
::: moniker range="tfs-2018"
![Artifact-to-artifact link types](../backlogs/media/git/link-tracking-artifact-to-artifact-link-types.png)  
::: moniker-end

For a complete list of link types and supported features, see [Linking, traceability, and managing dependencies](../queries/link-work-items-support-traceability.md) and [Link type reference](../queries/link-type-reference.md). 


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
