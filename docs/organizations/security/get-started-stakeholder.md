---
title: Get started with Stakeholder access
titleSuffix: VSTS & TFS  
description: Add & update work items, approve releases, view work tracking progress with Stakeholder access
ms.technology: devops-new-user
ms.prod: devops
ms.assetid: D76507F1-3154-4EE5-A23A-9179C2F5A365
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 03/01/2018
---

# Get started as a Stakeholder

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

With Stakeholder access, you can add and modify work items, approve releases, and view dashboards. You can check project status and provide direction, feedback, feature ideas, and business alignment to a team. 

Use this topic to learn:

> [!div class="checklist"]
> * How to sign-in to an account
> * How to add a work item
> * How to view the product backlog and add new work to it
> * How to view work in progress on the Kanban board
> * Find work assigned to you, or query for other work items
> * Understand the set of features you have access to

## First time signing in

::: moniker range=">= tfs-2013"

1. Click the link provided in the email invitation you should have received. Or, open a browser window and enter the URL for the web portal.
	::: moniker range="vsts"  
	`http://AccountName.visualstudio.com/DefaultCollection/ProjectName`
	::: moniker-end
	::: moniker range="<= tfs-2018"
  	`http://ServerName:8080/tfs/DefaultCollection/ProjectName`  	

  	For example, to connect to the server named *FabrikamPrime* and project named *Contoso*, type ```http://FabrikamPrime:8080/tfs/DefaultCollection/Contoso```.
	::: moniker-end

2.  Enter your credentials. If you aren't able to sign in, ask the account owner or project administrator to add you as a member of the team project with Stakeholder access. 

::: moniker-end

<a id="create-work-item">  </a>

## Add a work item

You might see different work item types in your view based on the process selected for your team project: [Scrum](../../work/work-items/guidance/scrum-process.md), [Agile](../../work/work-items/guidance/agile-process.md), or [CMMI](../../work/work-items/guidance/cmmi-process.md). 
 
::: moniker range="vsts"	
> [!TIP]    
> Use the [Work Items page](../../work/work-items/view-add-work-items.md) which supports personalized views of work items assigned to you or ones you've recently viewed or updated. Also, you can add work items from this page.  
::: moniker-end
    
::: moniker range="vsts || >= tfs-2017"

From the Work hub, choose a work item, for example User Story, from the New Work Item list of options. Click the ![pin icon](../../work/_img/icons/pin-icon.png) pin icon to have it show up within the Work hub drop down menu.   

<img src="../../work/backlogs/_img/add-work-items-choose-user-story.png" alt="Web portal, project page, Work hub, Add a work item" style="border: 1px solid #CCCCCC;" />  

Enter a title and then save the work item. Before you can change the State from its initial default, you must save it. For descriptions of each field, see [Work item field index](../../work/work-items/guidance/work-item-field.md). 

<img src="../../work/backlogs/_img/add-new-work-item-vsts-user-story.png" alt="Agile process, User story work item form" style="border: 1px solid #CCCCCC;" />

>[!NOTE]  
>A caution icon on a tab indicates values that violate validation rules. You must correct information on that tab in order to save the work item. 
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"

From the Queries page, choose a work item from the New drop down menu.

<img src="_img/stakholder-add-work-item-tfs-queries-page.png" alt="TFS 2015, TFS 2013-Queries page, Add a work item" style="border: 1px solid #CCCCCC;" />  

Enter a title and then save the work item. Before you can change the State from its initial default, you must save it. 

::: moniker-end

You can [add existing tags to any work item to support filter backlogs and queries](../../work/track/add-tags-to-work-items.md).

Work items you add are automatically scoped to your [team's area and iteration paths](../../organizations/settings/set-team-defaults.md). To change the team context, see [Switch team project or team focus](../settings/switch-team-context.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json).
	
> [!NOTE]  
> Depending on the process chosen when the team project was created&mdash;[Scrum](../../work/work-items/guidance/scrum-process.md), 
[Agile](../../work/work-items/guidance/agile-process.md), or [CMMI](../../work/work-items/guidance/cmmi-process.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called product backlog items (Scrum), user stories (Agile), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>	
> For an overview of all three processes, see [Choose a process](../../work/work-items/guidance/choose-process.md). 


<a id="check-backlog">  </a> 
## Check the backlog or add new work  

From your web browser, open your product backlog from the **Work** hub, **Backlogs** page. Work appears in the backlog in priority order. 
 
::: moniker range=">= tfs-2017"
!["Web portal, choose Work hub, Backlogs](../../work/backlogs/_img/cyb-open-backlog-tfs-2017.png)
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2015"
![Work hub, backlogs, TFS 2015, 2013 web portal](../../work/backlogs/_img/backlogs-boards-plans/open-backlog-tfs-2015.png)
::: moniker-end

::: moniker range=">= tfs-2017"
> [!TIP]    
> If you don't see the team or team project you want, click the ![ ](../../_img/icons/project-icon.png) project icon to [browse all team projects and teams](../../project/navigation/work-across-projects.md). 
::: moniker-end

To view or edit a work item, select it and choose Enter.

To add a new item, select the type and then name it. Your items are added to the bottom of the list.  

<img src="../../work/backlogs/_img/create-backlog-add-new-items-ts.png" alt="Add work items to the backlog" style="border: 1px solid #C3C3C3;" />   

## Check work in progress

To view the team's work status, click **Board** to open the Kanban board. Click the title of an item to open or edit it. 

> [!div class="mx-imgBorder"]
> ![View Kanban board](_img/work-as-a-stakeholder-view-kanban-board.png) 

<a id="query">  </a>

## Find work assigned to you, or query for other work items 

::: moniker range="vsts"

Click the **Work** hub, and then the **Work Items** page. 

> [!div class="mx-imgBorder"]
> ![Work hub, Work Items page ](../../work/work-items/_img/view-add/work-items-hub.png)

Choose **Assigned to me** from the drop-down menu, you can focus on relevant items inside a team project using one of the seven pivots as described next. Additionally, you can filter and sort each pivot view. For details, see [View and add work items using the Work Items page](../../work/work-items/view-add-work-items.md).  

> [!div class="mx-imgBorder"]
> ![Work hub, Work Items page, Choose Assigned to Me](_img/stakeholder/work-items-assigned-to-me.png)

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

Open the Queries page to see the list of work items assigned to you.  

<img src="_img/work-as-a-stakeholder-query.png" alt="Queries page, items assigned to you" style="border: 1px solid #CCCCCC;" /> 

Or, open any of the queries defined in the Shared Queries folder.  

<img src="_img/work-as-a-stakeholder-open-shared-query.png" alt="Run a shared query" style="border: 1px solid #CCCCCC;" />  

And, you can [create new queries or edit existing queries](../../work/track/using-queries.md) and save them under My Queries folder.  

<img src="_img/work-as-a-stakeholder-edit-query.png" alt="Query Editor" style="border: 1px solid #CCCCCC;" />

::: moniker-end

<a id="feature-access">  </a>

## Stakeholder feature access

::: moniker range="vsts"

The following features are available to Stakeholders from the web portal.

> [!div class="mx-tdBreakAll"]
> |Work  |Account, Dashboards, Wiki, and Notifications|
> |-------------|----------|  
> |- [View, create, and modify work items](#create-work-item) <sup>1</sup><br/>- [View, add, and modify items on backlogs](#check-backlog) <sup>2</sup><br/>- [View, and modify items on sprint backlogs](../../work/scrum/assign-work-sprint.md) <sup>2</sup><br/>- [View, and modify items on the task board](../../work/scrum/task-board.md) <sup>2, 3</sup><br/>- [View, and modify items (Kanban)](../../work/kanban/kanban-basics.md)  <sup>2, 3</sup><br/>- [Add tasks to the checklist (Kanban)](../../work/kanban/add-task-checklists.md) <sup>5, 3</sup><br/>- [Follow changes made to work items](../../work/work-items/follow-work-items.md) <br/>- [View the cumulative flow diagram](../../report/dashboards/cumulative-flow.md)<br/>- [View, create, and save queries](#query) <sup>4</sup> <br/>- [Submit, view, and change feedback responses](../../project/feedback/give-feedback.md)<br/>- [Change work item type](../../work/backlogs/remove-delete-work-items.md)|- [Navigate to teams, team projects, and more](../../project/navigation/work-across-projects.md)<br/>- [View project welcome pages](../../project/wiki/project-vision-status.md) <sup>6</sup><br/>- [View team dashboards](../../report/dashboards.md) <br/>- [Manage personal notifications](../../notifications/manage-personal-notifications.md)<br/>- [Invite users and assign licenses](../accounts/add-organization-users-from-user-hub.md) <sup>7</sup><br/>- [View wiki pages](../accounts/add-organization-users-from-user-hub.md) <sup>8</sup><br/><br/>**Build & Release**<br/>- [View releases](../../pipelines/release/approvals/index.md) <sup>5</sup><br/>- [Approve a release](../../pipelines/release/approvals/index.md) |

**Notes:**

1. Stakeholders can assign existing tags to work items, but not create new tags.
2. Stakeholders cannot change the backlog priority order (all items are added at the end of the backlog), assign items to an iteration using drag and drop, use the mapping pane or forecasting.
3. Stakeholders cannot move cards on the board to update status, set the values of fields shown on cards, or set or view  team capacity.
4. Stakeholders can save queries under My Queries but cannot save under Shared Queries.
5. Stakeholders can only view and approve releases.
6. Stakeholders cannot view markdown README files defined for repositories.
7. In order to add users and assign licenses, stakeholders must be added to the [Project Collection Administrators](/tfs/server/admin/add-administrator-tfs) group. To learn more, see [Manage users and access](../accounts/add-organization-users-from-user-hub.md).
8. Stakeholders have read-only permissions to wiki pages. These permissions can't be changed.

::: moniker-end

::: moniker range="tfs-2018"

The following features are available to Stakeholders from the web portal.

> [!div class="mx-tdBreakAll"]
> |Work  |Account, Dashboards, Wiki, and Notifications|
> |-------------|----------|  
> |- [View, create, and modify work items](#create-work-item) <sup>1</sup><br/>- [View, add, and modify items on backlogs](#check-backlog) <sup>2</sup><br/>- [View, and modify items on sprint backlogs](../../work/scrum/assign-work-sprint.md) <sup>2</sup><br/>- [View, and modify items on the task board](../../work/scrum/task-board.md) <sup>2, 3</sup><br/>- [View, and modify items (Kanban)](../../work/kanban/kanban-basics.md)  <sup>2, 3</sup><br/>- [Add tasks to the checklist (Kanban)](../../work/kanban/add-task-checklists.md) <sup>5, 3</sup><br/>- [Follow changes made to work items](../../work/work-items/follow-work-items.md) <br/>- [View the cumulative flow diagram](../../report/dashboards/cumulative-flow.md)<br/>- [View, create, and save queries](#query) <sup>4</sup> <br/>- [Submit, view, and change feedback responses](../../project/feedback/give-feedback.md)<br/>- [Change work item type](../../work/backlogs/remove-delete-work-items.md)|- [Navigate to teams, team projects, and more](../../project/navigation/work-across-projects.md)<br/>- [View project welcome pages](../../project/wiki/project-vision-status.md) <sup>6</sup><br/>- [View team dashboards](../../report/dashboards.md) <br/>- [Manage personal notifications](../../notifications/manage-personal-notifications.md)<br/>- [View wiki pages](../accounts/add-organization-users-from-user-hub.md) <sup>7</sup><br/><br/>**Build & Release**<br/>- [View releases](../../pipelines/release/approvals/index.md) <sup>5</sup><br/>- [Approve a release](../../pipelines/release/approvals/index.md) |

**Notes:**

1. Stakeholders can assign existing tags to work items, but not create new tags.
2. Stakeholders cannot change the backlog priority order (all items are added at the end of the backlog), assign items to an iteration using drag and drop, use the mapping pane or forecasting.
3. Stakeholders cannot move cards on the board to update status, set the values of fields shown on cards, or set or view  team capacity.
4. Stakeholders can save queries under My Queries but cannot save under Shared Queries.
5. Stakeholders can only view and approve releases.
6. Stakeholders cannot view markdown README files defined for repositories.
7. Stakeholders have read-only permissions to wiki pages. These permissions can't be changed.
 
::: moniker-end


::: moniker range=">= tfs-2013 <= tfs-2017"

The following features are available to Stakeholders from the web portal of the listed TFS or later version. Those not annotated are available from all versions. To determine your platform or TFS version, see [Platform and version support](../../user-guide/provide-feedback.md#platform-version).   

> [!div class="mx-tdBreakAll"]
> |Work  |Account, Dashboards, and Notifications|
> |-------------|----------|  
> |- [View, create, and modify work items](#create-work-item) <sup>1</sup><br/>- [View, add, and modify items on backlogs](#check-backlog) <sup>2</sup><br/>- [View, and modify items on sprint backlogs](../../work/scrum/assign-work-sprint.md) <sup>2</sup><br/>- [View, and modify items on the task board](../../work/scrum/task-board.md) <sup>2, 3</sup><br/>- [View, and modify items (Kanban)](../../work/kanban/kanban-basics.md)  <sup>2, 3</sup><br/>- [Add tasks to the checklist (Kanban)](../../work/kanban/add-task-checklists.md) <sup>2, 3</sup> (TFS 2015.1)<br/>- [Follow changes made to work items](../../work/work-items/follow-work-items.md) (TFS 2017)<br/>- [View the cumulative flow diagram](../../report/dashboards/cumulative-flow.md)<br/>- [View, create, and save queries](#query) <sup>4</sup><br/>- [Submit, view, and change feedback responses](../../project/feedback/give-feedback.md) |- [Navigate to teams, team projects, and more](../../project/navigation/work-across-projects.md) (TFS 2017)<br/>- [View project welcome pages](../../project/wiki/project-vision-status.md) <sup>6</sup> (TFS 2017)<br/>- [View team dashboards](../../report/dashboards.md) (TFS 2015)<br/>- [Manage personal notifications](../../notifications/manage-personal-notifications.md) (TFS 2017) <br/>- [Set personal alerts for changes to work items](../../work/track/alerts-and-notifications.md) (TFS 2013, 2015)<br/><br/>- **Build & Release**<br/>- [View releases](../../pipelines/release/approvals/index.md) <sup>5</sup> (TFS 2015.2)<br/>- [Approve a release](../../pipelines/release/approvals/index.md) <sup>5</sup> (TFS 2015.2) |

**Notes:**   
1. Stakeholders can assign existing tags to work items, but not create new tags.  
2. Stakeholders cannot change the backlog priority order (all items are added at the end of the backlog), assign items to an iteration using drag and drop, use the mapping pane or forecasting.
3. Stakeholders cannot move cards on the board to update status, set the values of fields shown on cards, or set or view  team capacity.
4. Stakeholders can save queries under My Queries but cannot save under Shared Queries.
5. Stakeholders can only view and approve releases.  
6. Stakeholders cannot view markdown README files defined for repositories.  


::: moniker-end

If you choose a feature that's not available to you as a stakeholder, you'll receive an error message indicating that you have insufficient permissions when you try to complete the task. 

### Features stakeholders can't access 

If you need access to the following features&mdash;which support the daily work of product owners, team leads, developers, testers, and project administrators&mdash;you need to be have Basic access:  
- Change the priority of an item within a backlog  
- Delete work items or move work items to another team project
- Create shared queries, view charts, and modify the home page  
- View Delivery Plans (a Marketplace extension)    
- Access the full set of features of the Code, Build, Test, and Release hubs  
- Participate in team rooms, which capture interactive, detailed conversations about the project.  

> [!NOTE]   
> Stakeholders can view administrative pages that support managing permissions, area and iteration paths, and more; however, for the most part, they can't modify any objects on these pages. The one exception is their ability to [manage users and access](../accounts/add-organization-users-from-user-hub.md).  


## Related articles

For a comparison chart of Stakeholder vs Basic access, see this [feature matrix](https://visualstudio.microsoft.com/team-services/compare-features/). See also these quickstart guides: 

- [Add work items](../../work/backlogs/add-work-items.md)  
- [Create your backlog](../../work/backlogs/create-your-backlog.md)
- [Kanban quickstart](../../work/kanban/kanban-quickstart.md)

If you want to provide a group of users access to provide feedback, then you don't need to give them Stakeholder access. Instead, simply [give reviewers permissions to provide feedback](../../project/feedback/give-permissions-feedback.md). 