---
title: Feature overview for Azure DevOps
titleSuffix: Azure DevOps 
description: Comprehensive index to all features for Azure DevOps
ms.prod: devops
ms.technology: devops-new-user  
ms.article: quickstart
ms.assetid: 330E6DA5-3DC9-432D-B3CA-BF999F151733
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: reference
ms.date: 04/05/2019
monikerRange: '>= tfs-2013'
---

# What are the features in Azure DevOps?

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Learn about all the features available to help you plan and track your projects and code, build, test, and release your software applications in Azure DevOps.  

If you're new to Azure DevOps, see our overview articles that are designed to give beginners an understanding of the server-client structure and tools supported. For a description of the core services supported through the web portal, see [Essential services](services.md).

> [!NOTE]  
> Some features are platform-dependent, based on the following two platforms:
> 
>- **Azure DevOps Services** - cloud service
>- **Azure DevOps Server** - on-premises

## Access and supported clients

<table>
<tbody>
<tr valign="top">
<td width="30%">


<p><b>Browsers</b></p>
[Connect to the web portal](../organizations/projects/connect-to-projects.md) from the latest versions of these supported browsers:  
- Chrome  
- Microsoft Edge    
- Firefox   
- Internet Explorer   
- Safari (Mac)        
<br/>


<p><b>Integrated Development Environments (IDE)
</b></p>
Track work and integrate with your code, build, and test environments from the following clients:   
- [Eclipse (Team Explorer Everywhere)](/../java/download-eclipse-plug-in)       
- [Visual Studio](https://visualstudio.microsoft.com/downloads/)      
- [Android Studio](/../java/download-android-studio-plug-in)     
- [IntelliJ](/../java/download-intellij-plug-in)   
- [Visual Studio Code](/../java/vscode-extension)   
 
To learn how to connect, see [Connect to a project](../organizations/projects/connect-to-projects.md).  
<br/>
<p><b>Office integration clients</b></p>
Use features supported by these familiar clients to manage your project and illustrate your requirements.  
- [Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)  
- [Project](../boards/backlogs/office/create-your-backlog-tasks-using-project.md)  
- [PowerPoint - Storyboarding](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md)   


</td>
<td width="30%">


<p><b>Manage users and groups</b></p>
<p>Add members to your project adds them to the Contributor group. When managing a large group of users, use [built-in groups to manage users and their permissions](../organizations/security/permissions.md).</p>
<br/>
<p><b>Add team members </b></p>
<p>To share and contribute to your project, add users to [Azure DevOps Services](../organizations/accounts/add-team-members.md) or your [TFS](../organizations/settings/add-teams.md#add-team-members).</p>
![Manage users, add team members](_img/features/alm-feature-manage-members.png)  
<br/>

<p><b>Azure Active Directory (Azure AD) (Azure DevOps Services)</b></p>
<p>Control who can access your team's critical resources and key business assets by [managing access with Azure Active Directory groups](../organizations/accounts/manage-azure-active-directory-groups.md). </p>

</td>
<td width="30%">


<p><b>Access levels</b></p>
<p>All users that you add to your Azure DevOps organization or to your TFS project have access to Basic features by default, except [Stakeholders](../organizations/security/get-started-stakeholder.md) who have access to a limited set of features, or those added to the Advanced access level in TFS.</p>
- [Manage users (Azure DevOps Services)](../organizations/accounts/add-organization-users.md)
- [Change access levels (TFS)](../organizations/security/change-access-levels.md)  
<br/>
<p><b>Permissions</b></p>
<p>Control access to specific features by setting permissions for a user or group.</p>

- [Area and iteration paths](../organizations/security/set-permissions-access-work-tracking.md)  
- [Build & Release](../pipelines/policies/set-permissions.md)  
- [Git](../organizations/security/set-git-tfvc-repository-permissions.md)  
- [TFVC](../organizations/security/set-git-tfvc-repository-permissions.md)  
- [Dashboards](../report/dashboard-permissions.md)   
- [Queries](../boards/queries/set-query-permissions.md)   
- [Manage teams and configure team tools](../organizations/settings/manage-teams.md)  
- [Test](../organizations/security/set-project-collection-level-permissions.md)  
- [Work item tags](../organizations/security/permissions.md#tags)  


</td>
</tr>
</tbody>
</table>


<a id="agile-tools"></a>

##Agile tools to plan and track work  

<a id="backlogs"></a>

###Backlogs

<table>
<tbody>
<tr valign="top">
<td width="320">

<p><b>Create your backlog</b></p>
<p>Plan your project by [adding a work item for each user story or requirement](../boards/backlogs/create-your-backlog.md) you plan to develop.  </p>
![Build your backlog of user stories and requirements](_img/features/features-quick-add-panel.png)  
 <br/>


<p><b>Organize your backlog</b></p>
<p>[Group items into a hierarchical list using portfolio backlogs](../boards/backlogs/organize-backlog.md) and quickly reorder and re-parent items to effectively manage your deliverables. </p>

<p><b>Forecast</b></p>

<p>Use the [forecast](../boards/sprints/forecast.md) tool to estimate work to be completed in future sprints. </p>
 <br/>

<p><b>Storyboard</b></p>
<p>Visualize your ideas and user stories and support greater understanding of them by [storyboarding them with PowerPoint](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md), also link your storyboards to your backlog work items.  </p>





</td>
<td width="320">
<p><b>Move work item to a different project (Azure DevOps Services)</b></p>
<p>Choose the ![Change project icon](../boards/_img/icons/change-team-project-icon.png) Change project menu option, ![Actions icon](../boards/_img/icons/actions-icon.png) Actions menu in a work item form to [move the work item to a different project](../boards/backlogs/remove-delete-work-items.md#move). </p>

<p><b>Full screen mode</b></p>
<p>Choose ![full screen icon](../boards/_img/icons/fullscreen_icon.png) or ![exit full screen icon](../boards/_img/icons/exitfullscreen_icon.png)  to enter or exit full screen mode.  </p>


<p><b>Backlog and board settings</b></p>
<p>Choose ![Settings icon](../boards/_img/icons/team-settings-gear-icon.png)  to configure team backlogs and boards, including [show bugs on backlogs and boards](../organizations/settings/show-bugs-on-backlog.md) and [set team backlog levels](../organizations/settings/select-backlog-navigation-levels.md).  </p>
![Backlog and board settings](_img/features/alm-feature-team-settings-gear-icon.png)  
<br/>



<p><b>View portfolio backlog hierarchy</b></p>
<p>Use [**Parents Show/Hide**](../boards/backlogs/organize-backlog.md) to drill down into the backlog hierarchy.   </p>


<p><b>Multi-team backlog ownership</b></p>
<p>Easily view and track items [owned by other teams](../boards/backlogs/backlogs-overview.md#multi-team) and quickly reorder and re-parent items to effectively manage your backlog. </p>


</td>

<td width="30%">
<p><b>Change work item type (Azure DevOps Services)</b></p>
<p>If you added a task instead of a bug and want to change the work item type to bug, you can. Choose the ![Change type icon](../boards/_img/icons/change-type-icon.png) Change type option from the ![Actions icon](../boards/_img/icons/actions-icon.png) Actions menu in a work item form to [change the work item type](../boards/backlogs/remove-delete-work-items.md#change-type). </p>

<p><b>Filter your backlog</b></p>
<p>Use **Show/Hide in progress** to only show or hide items which have moved from the new or proposed state to active or in progress state.     </p>
<p>Additionally, you can list a subset of items based on keywords [keywords](../boards/backlogs/filter-backlogs.md) or [tags](../boards/queries/add-tags-to-work-items.md). </p>
![Filter based on keywords or tags](_img/features/alm-feature-filter-backlog.png)  
 <br/>

<p><b>Request feedback</b></p>
<p>[Request feedback on working software](../project/feedback/get-feedback.md) and easily track responses that capture interaction with video, verbal, or type-written comments.  </p>
![Request feedback](_img/features/feature-request-feedback.png)  
 <br/>

<p><b>Feedback client</b></p>
<p>Provide the free [Microsoft feedback client](../project/feedback/give-feedback.md) to capture their responses to your feedback requests. </p>

</td>
</tr>
</tbody>
</table>

<a id="bugs-tasks-issue-tracking"></a>

### Bug, task, and issue tracking


<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Track issues and other types of work</b></p>
<p>Different types of work items [track different types of work](../boards/backlogs/add-work-items.md) - such as bugs, test cases, risks, issues, and more. </p>
![Add new work item widget](_img/features/alm-feature-new-work-item-widget.png)  

 <br/>

<p><b>Bulk modify</b></p>
<p>Quickly change one or more fields in several work items using [bulk modify in the web portal](../boards/backlogs/bulk-modify-work-items.md) or [bulk modify using Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md). </p>

<p><b>Copy or clone a work item</b></p>
<p>[Copy an existing work item](../boards/backlogs/copy-clone-work-items.md#copy-clone) or bulk copy several using [Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md).</p>
![Copy or clone a work item](_img/features/alm-index-copy-clone-work-item.png)  
 <br/>

<p><b>Follow a work item </b></p>
<p>Choose the ![Follow icon](../boards/_img/icons/follow-icon.png)/![Following icon](../boards/_img/icons/following-icon.png) Follow/Following icons to quickly [start or stop tracking changes made to a work item](../boards/work-items/follow-work-items.md).  </p>
![Follow a work item control](_img/features/alm-feature-follows.png)  
<br/>

<p><b>Rich text comments</b></p>
<p>Describe and comment on work using [formatted text, hyperlinks, and inline images](../boards/backlogs/add-work-items.md). Choose ![full screen icon](../boards/_img/icons/fullscreen_icon.png) or ![exit full screen icon](../boards/_img/icons/exitfullscreen_icon.png)  to expand or contract the viewing area. </p>


<p><b>Clear HTML formatting </b></p>
<p>Use the ![Remove format](../boards/_img/icons/remove-formatting-icon.png) icon or CTRL+Spacebar to remove formatting from highlighted text.</p>



<p><b>Attachments</b></p>
<p>To support collaboration of work in progress, [add emails, documents, images, log files, or other file types](../boards/queries/share-plans.md#attach-files) to work items.  </p>


</td>
<td width="33%">


<p><b>Estimates and time tracking</b></p>
<p>Track [estimated, completed, and remaining work](https://msdn.microsoft.com/library/dd997792.aspx) for tasks and other work items. Several reports and dashboards provide charts that display data based on team capacity and remaining work.</p>



<p><b>New work item experience</b></p>
<p>The [new work item experience](../reference/process/new-work-item-experience.md) provides access to a more modern form, additional features, and the ability to add fields and apply other customizations to the work item type. </p>


<p><b>Manage bugs</b></p>
<p>[Capture and triage bugs](../boards/backlogs/manage-bugs.md) using different kinds of tools. </p>


<p><b>Choose how you want to track bugs</b></p>
<p>Each team can [choose to manage bugs on their backlog or along with tasks](../organizations/settings/show-bugs-on-backlog.md). </p>


<p><b>Share plans and information</b></p>
<p>Share information using work items and [generate summary lists with links to backlogs or queries](../boards/queries/share-plans.md). </p>


<p><b>Remove or delete a work item</b></p>
<p>Remove work items from the backlog by changing their State to Removed. Or, [move them to the recycle bin or permanently delete them](../boards/backlogs/remove-delete-work-items.md).</p>
![Recycle bin icon](../boards/backlogs/_img/recycle-bin-icon.png)  
 <br/>

<p><b>Tags</b></p>
<p>[Add tags to work items](../boards/queries/add-tags-to-work-items.md) to filter backlogs and queries. [Bulk update work items](../boards/backlogs/bulk-modify-work-items.md#tags) or [use work item templates](../boards/backlogs/work-item-template.md) to add or remove tags. </p>
![Add tags to filter backlogs, boards, and queries](_img/features/alm-feature-tags.png)  
<br/>

<p><b>Work item templates</b></p>
<p>Quickly add new work items based on templates [with  pre-populate values for your team's commonly used fields](../boards/backlogs/work-item-template.md). </p>

<p><b>History & auditing</b></p>
<p>Review and query [work item change history](../boards/queries/history-and-auditing.md) to learn of past decisions and support future ones.</p>




</td>
<td width="33%">
<p><b>Discussion </b></p>
<p>[Add or review comments](../boards/backlogs/add-work-items.md) added to a work item. Start by choosing the ![Discussions icon](../boards/backlogs/_img/icon-discussions-wi.png) discussion icon.  </p>


<p><b>Integrate Git development with work tracking </b></p>
<p>Drive Git development and stay in sync as a team to complete backlog items and tasks using the [Git Development section](../boards/backlogs/connect-work-items-to-git-dev-ops.md). Add branches, create pull requests, and view all development done to support the specific work item.  </p>
![Work item form Development section](_img/features/alm-feature-git-dev-section.png)  
<br/>


<p><b>Verify a bug, rerun test case</b></p>
<p>Choose the **Verify** option from the bug work item form context menu to launch the relevant test case in the web runner. For more information, see [Run tests for web apps](../test/run-manual-tests.md). </p>


<p><b>Link work items  </b></p>
<p>Track related work, dependencies, and changes made over time by [linking work items](../boards/queries/link-work-items-support-traceability.md). </p>
![Link control, web portal](_img/features/alm-feature-links-control.png)  
<br/>

<p><b>Add or modify a field </b></p>
<p>Add a custom field ([Azure DevOps Services](../organizations/settings/work/customize-process.md) | [TFS](../reference/add-modify-field.md) to support tracking additional data requirements or modify an existing field to apply optional rules. </p>


<p><b>Restrict access</b></p>
<p>[Limit who can create or modify work items or a work item field](https://msdn.microsoft.com/library/dn249791.aspx) based on area path, work item type, or based on your specific conditions. </p>


<p><b>Field index </b></p>
<p>Find descriptions and usage information for each field from the [work item field index](../boards/work-items/guidance/work-item-field.md). </p>



</td>
</tr>
</tbody>
</table>

::: moniker range="azure-devops"

<a id="customize-vsts">  </a>

### Customize (Azure DevOps Services)


<table>
<tbody>
<tr valign="top">
<td width="33%">

<p><b>Create an inherited process</b></p>
<p>The first step in customizing a project is to [create an inherited process](../organizations/settings/work/manage-process.md#create-inherited-process). You can only customize inherited processes.  </p>
![Customize process](_img/features/customize-vsts-process.png)   
<br/>

<p><b>New work item experience </b></p>
<p>The [new work item experience](../reference/process/new-work-item-experience.md) provides access to a more modern form, additional features, and the ability to add fields and apply other customizations to the work item type. </p>

<p><b>Customize a process</b></p>
<p>Customizations you make to an inherited process automatically update all team projects that reference that process. You can customize your project as follows:</p>
<ul>
<li>[Add and modify fields](../organizations/settings/work/customize-process-field.md)</li>
<li>[Modify the web form layout](../organizations/settings/work/customize-process-form.md)</li>
<li>[Modify the workflow states](../organizations/settings/work/customize-process-workflow.md) </li>
<li>[Add a custom work item type](../organizations/settings/work/customize-process-wit.md) </li>
<li>[Add a custom control](../organizations/settings/work/custom-controls-process.md) </li>
</ul>

<p><b>Change the process used by a project</b></p>
<p>To apply customizations to one or more team projects, you [change the process they reference to a customized inherited process](../organizations/settings/work/manage-process.md#migrate).  </p>

<p><b>Enable/disable a process</b></p>
<p>To make sure no one creates a project from a process that you don't want used, [you can disable it](../organizations/settings/work/manage-process.md#enable-process).  </p>



</td>

<td width="33%">

<p><b>Add or modify a field</b></p>
<p>[Add a custom field](../organizations/settings/work/customize-process-field.md) to support tracking additional data requirements or modify an existing field to apply optional rules. </p>
![Add field](_img/features/index-add-field.png)   
<br/>

<p><b>Remove a field from a form</b></p>
<p>You can [remove a custom field and select inherited fields from a work item form](../organizations/settings/work/customize-process-field.md#remove-field). You can also [relabel the fields](../organizations/settings/work/customize-process-field.md#rename-field) that appear on the form.   </p>

<p><b>Area path pick lists</b></p>
<p>Change the [pick list of area paths](../organizations/settings/set-area-paths.md) to support grouping work items by team, product, or feature area. </p>
![Hierarchical area paths](_img/features/alm-feature-area-paths.png)   
<br/>

<p><b>Sprint/iteration pick lists</b></p>
<p>Change the [pick list of iteration paths](../boards/sprints/define-sprints.md) to support grouping work into sprints, milestones, or other event-specific or time-related period. Activate sprints for each team. </p>
![Iterations or sprints](_img/features/alm-feature-define-sprints.png)  
<br/>
</td>


<td width="33%">




<p><b>Review fields</b></p>
<p>You can [review the list of fields](../organizations/settings/work/customize-process-field.md#review-fields) defined for a process, their data type, and the WITs which reference them. For descriptions and usage of each field, see [Work item field index](../boards/work-items/guidance/work-item-field.md). </p>

<p><b>Delete a field from the collection</b></p>
<p>You can [delete a custom field](../organizations/settings/work/customize-process-field.md#delete-field) if you find it's no longer required. </p>



<p><b>Customize the web form</b></p>
<p>For each work item type, you can [add custom pages to group additional custom fields](../organizations/settings/work/customize-process-form.md) and you can organize your forms by placing logically related groups and HTML fields on separate pages within a form.    </p>
![Add custom group](_img/features/index-add-group.png)   
<br/>

<p><b>Add a custom work item type</b></p>
<p>You can [add and modify a custom work item type](../organizations/settings/work/customize-process-wit.md).    </p>

<p><b>Customize the workflow</b></p>
<p>For each work item type, you can [add custom workflow states to support your business tracking needs](../organizations/settings/work/customize-process-workflow.md).    </p>


<p><b>Delete a process</b></p>
<p>Delete those inherited processes that you no longer want used. Simply choose the Delete option from its context menu.  </p>

<p><b>Set process permissions</b></p>
<p>To customize a process, add custom fields, or change the layout of a work item form, you must be a member of the Project Collection Administrators group or be [granted explicit permissions to edit a specific process](../organizations/security/set-permissions-access-work-tracking.md#process-permissions).  </p>

</td>


</tr>
</tbody>
</table>

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

<a id="customize-tfs"></a>

### Customize (TFS)

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Add or modify a field </b></p>
<p>[Add or modify a field](../reference/add-modify-field.md) to support work tracking and reporting by editing the WIT definition.</p>


<p><b>Add rules to a field </b></p>
<p>Apply [various rules to custom fields](../reference/xml/apply-rule-work-item-field.md) to qualify the value it can have, to copy a value, to specify a default, to restrict who can modify it, to enforce pattern matching, or to enforce conditional values.  </p>


<p><b>Remove a field </b></p>
<p>[Stop tracking a field by removing the field](../reference/add-modify-field.md) from the work item form of select work item types. </p>


</td>
<td width="33%">


<p><b>Area path pick lists</b></p>
<p>Change the [pick list of area paths](../organizations/settings/set-area-paths.md) to support grouping work items by team, product, or feature area. </p>

<p><b>Sprint/iteration pick lists</b></p>
<p>Change the [pick list of iteration paths](../boards/sprints/define-sprints.md) to support grouping work into sprints, milestones, or other event-specific or time-related period.</p>


<p><b>Custom pick lists </b></p>
<p>[Define or modify pick list values](https://msdn.microsoft.com/library/ms194947.aspx) by editing the work item type definition.</p>
</td>
<td width="33%">



<p><b>Modify the workflow </b></p>
<p>[Design your custom workflow](https://msdn.microsoft.com/library/ms194981.aspx) by adding states, transitions, reasons, and optional actions.</p>


<p><b>Change the work item form </b></p>
<p>[Change the layout of your work item form](https://msdn.microsoft.com/library/ms194952.aspx) by adding fields, custom controls, or tabs.</p>

<p><b>Add a custom work item type </b></p>
<p>[Add a custom work item type](https://msdn.microsoft.com/library/ms404855.aspx) to track different data requirements.</p>


</td>
</tr>
</tbody>
</table>

::: moniker-end

<a id="kanban"></a>

### Kanban

<table>
<tbody>
<tr valign="top">
<td width="33%">

<p><b>Kanban basics</b></p>
<p>Use your Kanban board to [visualize and track the flow of work](../boards/boards/kanban-basics.md) from idea to completion as well as quickly update work item fields</p>
![Update fields on cards](../boards/boards/_img/ALM_KB_UpdateFieldOnCard.png)  
<br/>

<p><b>Drag-n-drop</b></p>
<p>[Drag and drop items](../boards/boards/reorder-cards.md) on the Kanban board to update status and to reorder and reparent items.  </p>

<p><b>Add task checklists</b></p>
<p>Add and mark tasks as done with [lightweight tasks checklists](../boards/boards/add-task-checklists.md). </p>
![Track tasks with a checklist](../boards/backlogs/_img/overview/kanban-task-checklist.png)  
<br/>

<p><b>Filter</b></p>
<p>[Use key words to filter and find items](../boards/boards/filter-kanban-board.md#text-filter) on the Kanban board.</p>

![Kanban board filter](_img/features/alm-feature-kanban-filter.png)  
<br/>



</td>
<td width="33%">


<p><b>Set WIP limits</b></p>
<p>[Set constraints on the amount of work your team undertakes at each work stage](../boards/boards/wip-limits.md) to gain access to sprint backlogs and task boards.</p>


<p><b>Split columns</b></p>
<p>Turn on split columns to [track the lag between when items are done in one state and work actually starts in a new state](../boards/boards/split-columns.md). </p>

<p><b>Map your workflow</b></p>
<p>[Customize columns to support your team's workflow](../boards/boards/add-columns.md) and track work from start to finish. </p>
![Add columns to map your workflow](_img/features/alm-feature-kanban-flow.png)  
<br/>

<p><b>Expedite work with swimlanes </b></p>
<p>Use [swimlanes](../boards/boards/expedite-work.md) to track work at different service-level classes. </p>


<p><b>Definition of done</b></p>
<p>Support your team to be in sync by [specifying requirements to fulfill prior to handoff of items to a downstream work stage](../boards/boards/definition-of-done.md).</p>  

<p><b>Filter by field values or parent work items</b></p>
<p>Choose the ![Kanban field filter icon](../boards/_img/icons/kanban-filter-icon.png) field filter icon to [filter the board based on assignment, iteration, work item type, or tags](../boards/boards/filter-kanban-board.md#field-filter). </p>
![Kanban board filter](_img/features/alm-feature-kanban-filter-fields.png)  
<br/>

<p><b>Cumulative Flow Diagram </b></p>
<p>With the CFD, you can [monitor the count of work items as they progressively move through various states which you define](../report/dashboards/cumulative-flow.md).  </p>
</td>


<td width="33%">

<p><b>Customize cards</b></p>
<p>[Add fields to cards](../boards/boards/customize-cards.md) that you can edit directly on your Kanban and task boards.</p>  
![Customized card with added work item fields and styling rules](../boards/boards/_img/kanban-board-card-style-rule-example.png)  
<br/>

<p><b>Live updates </b></p>
<p>[Enable live updates](../boards/boards/kanban-basics.md#live-updates) to automatically refresh your Kanban board when changes are made by others or to the board settings. </p>
![Live updates](_img/features/alm-feature-live-updates.png)  
<br/>


<p><b>Add inline tests </b></p>
<p>[Add, run, and update tests](../boards/boards/add-run-update-tests.md) with inline test on your Kanban board.   </p>

<p><b>Add checklists to features and epics</b></p>
<p>Add and mark user stories and other work items as done from your [Kanban features or epics boards](../boards/boards/kanban-epics-features-stories.md). </p>

<p><b>Set team's card reorder preference </b></p>
<p>You can preserve the backlog priority when you move a card to a new column by setting your team's [Kanban board card reordering setting](../boards/boards/reorder-cards.md).  </p>

<p><b>Enable/disable card annotations</b></p>
<p>Turn on or off [task checklists or inline tests](../boards/boards/customize-cards.md#annotations) for your Kanban board. </p>

<p><b>Configure inline tests</b></p>
<p>Configure how new inline tests are added to the Kanban board: [create a new test plan/test suite or choose an existing test plan](../boards/boards/customize-cards.md#tests). </p>

</td>



</tr>
</tbody>
</table>

<a id="scale"></a>

###Scale

<table>
<tbody>
<tr valign="top">
<td width="33%">
<p><b>Add another team</b></p>
<p>[Add and structure teams](../organizations/settings/add-teams.md) and organize work to support team autonomy and organizational alignment. Teams can manage their work independently of one another while the organization gains visibility across all teams. </p>
![Multiple teams](_img/features/alm-feature-multiple-teams.png)  
<br/>
<p><b>Set team defaults</b></p>
<p>Several Agile tools reference the team's default area path, iteration path, and activated sprints to automatically filter the set of work items they display. [Understand how defaults are used](../organizations/settings/about-teams-and-settings.md).</p>

</td>
<td width="33%">


<p><b>Set up a team hierarchy</b></p>
<p>By [configuring your teams and backlogs into an hierarchical structure](../boards/plans/portfolio-management.md), program owners can more easily track progress across teams, manage portfolios, and generate rollup data. </p>


<p><b>Autonomy and alignment</b></p>
<p>As your organization grows, your tools can grow to support a [culture of team autonomy and organizational alignment](../boards/plans/agile-culture.md). </p>


<p><b>Scale your tools and practices</b></p>
<p>Incrementally adopt [practices that scale](../boards/plans/practices-that-scale.md) to create greater rhythm and flow within your organization, engage customers, improve project visibility, and develop a productive workforce.</p>

</td>
<td width="33%">


<p><b>Portfolio management</b></p>
<p>Manage a [portfolio of backlogs](../boards/plans/portfolio-management.md) and gain insight into each team's progress as well as the progress of all programs.</p>

![Portfolio management](_img/features/alm-feature-portfolio-management.png)
<br/>


<p><b>Scaled Agile Framework</b></p>
<p>Structure team projects to support [epics, release trains, and multiple backlogs to support the Scaled Agile Framework](../boards/plans/scaled-agile-framework.md). </p>


</td>
</tr>
</tbody>
</table>  


<a id="scrum"></a>

###Scrum



<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Define sprints</b></p>
<p>[Schedule and activate your team's sprints](../boards/sprints/define-sprints.md) to gain access to sprint backlogs and task boards.</p>

<p><b>Select team sprints, set team defaults</b></p>
<p>Several tools reference the team's default and active iteration paths or sprints. For the Agile tools to work best, each team needs to [set their team area path(s)](../organizations/settings/set-area-paths.md) and [iteration paths](../organizations/settings/set-iteration-paths-sprints.md) to support their work tracking activities. </p>


<p><b>Plan sprints</b></p>
<p>Build your sprint backlog, add tasks, and load balance work across your team as you [plan your sprint](../boards/sprints/assign-work-sprint.md).</p>


<p><b>Track work on your task board</b></p>
<p>Use your [task board](../boards/sprints/task-board.md) during your daily Scrum meetings to view  and update progress.  </p>

</td>
<td width="33%">



<p><b>Velocity & forecasting</b></p>
<p>Use [velocity charts](../report/dashboards/team-velocity.md) and [forecast](../boards/sprints/forecast.md) tools  to estimate work that can be completed in future sprints. </p>
![Team velocity chart](_img/features/alm-feature-team-velocity-chart.png)  
<br/>

<p><b>Sprint burndown charts</b></p>
<p>Monitor progress and review team patterns from [sprint burndown charts](../boards/sprints/sprint-burndown.md).</p>
![Sprint burndown chart](_img/features/alm-index-sprint-burndown-widget.png)   



</td>
<td width="33%">



<p><b>Manage resources</b></p>
<p>Use [capacity planning tools](../boards/sprints/set-capacity.md) to track individual, team, and activity over and under capacity for a sprint.</p>
![Capacity bars](../boards/sprints/_img/ALM_DS_CapacityBars_S.png)  



</td>
</tr>
</tbody>
</table>


<a id="workflow"></a>

### Workflow




<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>What is workflow? </b></p>
<p>You use workflow to track the progress of work as it moves from new, active, to complete or closed. Each workflow consists of a set of states, the valid transitions between the states, and the reasons for transitioning the work item to the selected state.  </p>
![User story workflow](../boards/work-items/guidance/_img/ALM_PT_Agile_WF_Bug.png)   

<br/>


<p><b>Default workflows</b></p>
<p>Each process [defines the workflow](../boards/work-items/guidance/choose-process.md#main-distinctions) for each work item type to track progress from newly defined, to in progress, to completed or closed. </p>





</td>
<td width="33%">

<p><b>Kanban workflow</b></p>
<p>You can fully customize your Kanban board to map the workflow your team uses by [adding and renaming columns](../boards/boards/add-columns.md)</p>
![Add columns to map your workflow](_img/features/alm-feature-kanban-flow.png)  
<br/>

<p><b>Customize the workflow</b></p>
<p>For Azure DevOps Services: [add custom workflow states to support your business tracking needs](../organizations/settings/work/customize-process-workflow.md).  For TFS: [Design your custom workflow](https://msdn.microsoft.com/library/ms194981.aspx) by adding states, transitions, reasons, and optional actions.</p>

 <p><b>States  </b></p>
<p>States allow you to [track the status of work](https://msdn.microsoft.com/library/ms194981.aspx). For  example, a bug moves from **Active**, **Resolved**, and **Closed** to correspond to when it's defined, fixed, and verified as fixed.</p>

<p><b>Transitions</b></p>
<p>Transitions specify the [valid progressions and regressions from state to state](https://msdn.microsoft.com/library/ms194981.aspx) for a work item type.</p>

<p><b>Reasons</b></p>
<p>Each transition [specifies a default reason as well as optional reasons](https://msdn.microsoft.com/library/ms194981.aspx) for tracking the change in state.  </p>



</td>
<td width="33%">

<p><b>Update fields during workflow changes (TFS)  </b></p>
<p>You can [define rules that change a field value](https://msdn.microsoft.com/library/ms194981.aspx) whenever you change the state, perform a transition, or select a reason.   </p>

<p><b>Apply workflow conditional field rules (TFS)  </b></p>
<p>You can define rules that [change a field value based on the contents of other fields](../reference/xml/apply-rule-work-item-field.md) during workflow changes. </p>


<p><b>Restrict who can make changes during workflow transitions (TFS)  </b></p>
<p>Set a condition field rule that applies to a group to [restrict who can make changes to a workflow or a field](../reference/xml/apply-rule-work-item-field.md).  </p>


<p><b>Event-generated workflow changes or field assignments (TFS)</b></p>
<p>[Add an action](https://msdn.microsoft.com/library/ms194990.aspx) to a custom workflow definition to automatically transition work items or specify a field value based on an internal TFS event or external event. </p>

<p><b>Visual workflow design tool (TFS)</b></p>
<p>You can change the workflow or view the workflow state diagram  by using the [Process Editor](https://visualstudiogallery.msdn.microsoft.com/898a828a-af00-42c6-bbb2-530dc7b8f2e1), a power tool for Visual Studio. </p>

</td>
</tr>
</tbody>
</table>  



<a id="alerts"></a>

## Alerts and notifications


<table>
<tbody>
<tr valign="top">
<td width="30%">

<p><b>Personal and team notifications or alerts</b></p>
<p>Get notified as changes occur to work items, code reviews, source control files, and builds by setting [personal notifications](../notifications/howto-manage-personal-notifications.md) or [team notifications](../notifications/howto-manage-team-notifications.md).</p>
![Open Notifications from Organization menu](_img/features/features-notifications-option.png)  
<br/>

<p><b>Share queries and sprint plans</b></p>
<p>Email a query or [sprint plan](../boards/sprints/assign-work-sprint.md).  </p>
![Share queries, backlogs, and sprint plans with the email control](_img/features/alm-feature-email-control.png)  
<br/>
<p><b>Quick alerts to team members  </b></p>
<p>Use the **@mention** control to send email to team members to bring them into a discussion around work changes, pull requests, or other items.  </p>
![@mentions control sends email to team members with links](_img/features/alm-feature-at-mention-control_305.png)  


<p><b>Client feature flag updates</b></p>
<p>Alert flag within the IDE automatically notifies you of the latest client changes.</p>
![Visual Studio feature notification flag](_img/features/alm-feature-notifications-in-vs.png)  
<br/>


</td>
<td width="30%">

<p><b>Follow a work item </b></p>
<p>Choose the ![Follow icon](../boards/_img/icons/follow-icon.png)/![Following icon](../boards/_img/icons/following-icon.png) icons to quickly [start or stop tracking changes made to a work item](../boards/work-items/follow-work-items.md).  </p>
![Follow a work item control](_img/features/alm-feature-follows.png)  
<br/>


<p><b>Follow a pull request</b></p>
<p>To [track the progress of a single pull request](../boards/work-items/follow-work-items.md), choose the ![Follow icon](../boards/_img/icons/follow-icon.png) option from the context menu. </p>
![Follow a pull request](_img/features/features-follow-pull-request.png)  
<br/>

<p><b>Manage work items you follow  </b></p>
<p>From the **Work>Queries** page you can view the list of work items that you're following.  </p>
![Followed work items list](_img/features/alm-feature-followed-work-items.png)  
<br/>


<p><b>Frequent on-line feature updates</b></p>
<p>Check the [News](/visualstudio/releasenotes/vs2017-relnotes) for product updates, or read about them by accessing the News link in your web portal.</p>

 <br/>

</td>

</tr>
</tbody>
</table>



<a id="code"></a>
## Code

<a id="code-git"></a>

### Code: Git

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Get started with Git in Visual Studio </b></p>
<p>To get started working with Git, [clone a repository, add code, and create branches in Azure DevOps Services](../repos/git/create-new-repo.md) or [Visual Studio](../repos/git/gitquickstart.md). Learn how to commit, publish, and conduct a pull request of your changes. </p>
![Visual Studio Git UI pages](_img/features/features-git-vs-ui.png)  
<br/>

<p><b>Clone repositories</b></p>
<p>To work locally, you [clone a repository](../repos/git/clone.md). </p>

<p><b>Commit changes</b></p>
<p>Enter commit messages and [quickly push your local changes to the shared repo](../repos/git/pushing.md).</p>
![Commit and push changes](_img/features/alm-feature-git-dev-commit-push.png)  
<br/>

<p><b>Pull requests</b></p>
<p>Use [pull requests to review and merge branch code to a master branch](../repos/git/pull-requests.md).   </p>
<p><b>Sync</b></p>

<p>Quickly [sync your local branch with a shared repo](../repos/git/pulling.md).</p>


</td>
<td width="33%">
<p><b>Get started using Eclipse</b></p>
<p>[Work with Git repositories](../repos/git/share-your-code-in-git-eclipse.md) using the Team Explorer Everywhere IDE for Eclipse.  </p>

<p><b>Add reviewers to get feedback </b></p>
<p>Use the [**@mention** control to add reviewers](../notifications/at-mentions.md) to your pull request to get their feedback about your changes.  </p>
![@mentions control sends email to team members with links](_img/features/alm-feature-at-mention-control_305.png)  
<br/>


<p><b>Resolve Git merge conflicts</b></p>
<p>Merge conflicts occur when commits have changes to the same files as other newer commits in the branch history. Learn how to [prevent and resolve merge conflicts](../repos/git/merging.md).   </p>

<p><b>Code search</b></p>
<p>Maximize cross-team collaboration and code sharing by finding code across all the projects to which you have access. Narrow down your results and focus in on code by using [filters, preview code, view history, compare versions, and more](../project/search/overview.md) </p>
![Search code box](_img/features/features-index-code-search-vsts.png)  


<p><b>Get notified about pull requests</b></p>
<p>Subscribe to email alerts to get notified about [new pull requests, changes, approvals, and rejections](../repos/git/pull-requests.md#notifications).</p>

<p><b>Set branch policies </b></p>
<p>To improve code quality, [set branch policies to require code reviews or  automatically add reviewers](../repos/git/branch-policies.md). </p>

<p><b>Automatically build pull requests </b></p>
<p>Set a branch policy to [automatically generate a build for a pull request to selected branches](../repos/git/branch-policies.md).</p>

<p><b>Create Git repositories </b></p>
<p>When you create a project with Git as your version control system, you automatically create a Git repo. You can [Create additional Git repos](../repos/git/repo-rename.md) from the admin context. </p>


<p><b>Rename a Git repository </b></p>
<p>[Rename Git repos](../repos/git/repo-rename.md) from the admin context. </p>

</td>
<td width="33%">

<p><b>Integrate Git development with work tracking  </b></p>
<p>Drive Git development and stay in sync as a team to complete backlog items and tasks using the [Git Development section](../boards/backlogs/connect-work-items-to-git-dev-ops.md). Add branches, create pull requests, and view all development performed to support the specific work item.  </p>
![Work item form Development section](_img/features/alm-feature-git-dev-section.png)  
<br/>


<p><b>Quickly link work items to pull requests </b></p>
<p>Use the [**#ID** control to link work items](../notifications/add-links-to-work-items.md) to your pull request to support tracking work.    </p>

<p><b>Get started using Xcode </b></p>
<p>[Work with Git repositories](../repos/git/share-your-code-in-git-xcode.md) using the Xcode IDE.  </p>

<p><b>Git commands</b></p>
<p>Use [Git command line tools](../repos/git/command-prompt.md) when you need to perform select manual tasks or to automate work using a script.</p>



<p><b>Bypass a branch policy</b></p>
<p>Grant an [Exempt from policy enforcement permission](../repos/git/branch-policies.md) to a user or group.</p>

<p><b>Rebase a branch</b></p>
<p>Before merging a branch into master, you may choose to first [rebase your branch onto the latest commit in master](../repos/git/rebase.md).</p>



<p><b>Git permissions</b></p>
<p>Set permissions on a [Git project, repository, or branch](../organizations/security/permissions.md#git-repo) from the context menu or from the web portal administration page.</p>


</td>
</tr>
</tbody>
</table>



<a id="code-tfvc"></a>

### Code: TFVC

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Get started with TFVC in Visual Studio </b></p>
<p>[Develop and share your code](../repos/tfvc/share-your-code-in-tfvc-vs.md). Learn how to configure your workspace, check-in your code, compare file changes, and view file history. </p>
![Visual Studio Git UI pages](_img/features/features-tfvc-ui-vs.png)  
<br/>

<p><b>Set up local or server workspaces</b></p>
<p>[Create a local workspace](https://msdn.microsoft.com/library/ms181384.aspx) that maps to the code base of interest. </p>


<p><b>Resolve conflicts</b></p>
<p>[Support for Resolve conflicts that arise](https://msdn.microsoft.com/library/ms181432.aspx) when several people work concurrently on a file.</p>

<p><b>Compare files and folders</b></p>
<p>[Compare server folders and local folders](https://msdn.microsoft.com/library/bb385981.aspx) to each other, and view the differences between the contents of each folder.</p>

</td>
<td width="33%">


<p><b>Track changesets</b></p>
<p>Find information about which [branches have received a particular set of changes and when those changes were merged](https://msdn.microsoft.com/library/dd405662.aspx).</p>

<p><b>Request code review</b></p>
<p>Increase overall code quality and reduce the risk of creating bugs by [requesting a code review when you check-in code](https://msdn.microsoft.com/library/hh474795.aspx#code_review_request).</p>

<p><b>Review history of a file</b></p>
<p>[Get detailed information about what changes have been made to your files](https://msdn.microsoft.com/library/ms245475.aspx).</p>

<p><b>Suspend work</b></p>
<p>[Use shelvesets](https://msdn.microsoft.com/library/ms181403.aspx) when you need to set aside some or all of your work in progress. </p>

<p><b>Manage branches, isolate risk</b></p>
<p>Use branches and locks to [isolate risk introduced by work done by different teams](https://msdn.microsoft.com/library/ms181423.aspx).</p>

<p><b>Merge branches</b></p>
<p>[Integrate work completed in different branches](https://msdn.microsoft.com/library/ms181428.aspx) during certain phases of your project.</p>



<p><b>Set check-in and check-out policies</b></p>
<p>Enforce practices that lead to better code and more efficient group development by [setting check-in/check-out rules](https://msdn.microsoft.com/library/ms182076.aspx).</p>


</td>
<td width="33%">


<p><b>Code search</b></p>
<p>Find code across all the projects to which you have access. Narrow down your results and focus in on code by using [filters, preview code, view history, compare versions, and more](../project/search/overview.md) </p>
![Search code box](_img/features/features-index-code-search-vsts.png)  
<br/>



<p><b>Subscribe to alerts when check-ins occur</b></p>
<p>Get notified when someone checks in code to your TFVC project by [subscribing to receive email alerts](https://msdn.microsoft.com/library/ms181407.aspx#alerts).</p>

<p><b>Version control locks</b></p>
<p>[Lock files or folders](https://msdn.microsoft.com/library/ms181418.aspx) when you need to prevent them from being checked out or modified. </p>


<p><b>Download files from the server</b></p>
<p>[Get the latest files from the server](https://msdn.microsoft.com/library/ms181387.aspx) on a regular basis so that the code you develop is compatible with the code developed by others on your team.</p>


<p><b>TFVC permissions</b></p>
<p>Set permissions on [select code management tasks](../organizations/security/permissions.md#tfvc) from the context menu for TFVC files or folders or the admin context for the project.</p>


</td>
</tr>
</tbody>
</table>

::: moniker range="azure-devops"

<a id="package-management"></a>

## Azure Artifacts (Azure DevOps Services)

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>What is Azure Artifacts?</b></p>
<p>Azure Artifacts is the new name for what was previously Package Management. Azure Artifacts helps you [manage code sharing by automating common tasks for discovering, consuming, and sharing components](../artifacts/overview.md).</p>

<p><b>Create feeds </b></p>
<p>[Create feeds](../artifacts/feeds/create-feed.md) to share code through packages.</p>

<p><b>Move existing file shares to the cloud</b></p>
<p>Eliminate dependencies on on-premises file shares and hosted instances of NuGet.Server by [moving your packages to Azure DevOps Services](../artifacts/nuget/move-from-fileshares.md).</p>



</td>
<td width="33%">

<p><b>Discover and consume packages </b></p>
<p>[Consume packages](../artifacts/nuget/consume.md) by connecting to a feed.</p>

<p><b>Publish packages to feeds</b></p>
<p>[Publish packages](../artifacts/nuget/publish.md) to share code with your team and your organization.</p>

<p><b>Add identities to your feeds </b></p>
<p>[Give teams and service identities](../artifacts/feeds/feed-permissions.md) access to your feeds.</p>


</td>
<td width="33%">

<p><b>Bootstrap the developer environment</b></p>
<p>Increase your team's velocity and decrease the amount of code duplication across your organization. Access a set of tools and conventions for integrating Azure DevOps Services NuGet into your workflow by [getting the NuGet VSS.PackageManagement.Bootstrap package](../artifacts/nuget/bootstrap-nuget.md).</p>


<p><b>Remove a NuGet package from a feed </b></p>
<p>[Unlist or remove a package][Delete packages and recover deleted packages from the recycle bin in Azure Artifacts](../artifacts/how-to/delete-and-recover-packages.md) you no longer want users to discover.</p>

<p><b>Secure feeds </b></p>
<p>Control who can [contribute to or consume from a feed](../artifacts/feeds/feed-permissions.md).</p>
</td>
</tr>
</tbody>
</table>

::: moniker-end

## Continuous delivery


<a id="build"></a>

### Build

<table>
<tbody>
<tr valign="top">
<td width="32%">


<p><b>Define builds</b></p>
<p>Start from a build template and customize your build from there. Build for [Windows](../pipelines/apps/windows/dot-net.md), [iOS](../pipelines/apps/mobile/xcode-ios.md), Android, Java (Ant, Maven, or Gradle), or Linux using the same domain-specific languages you use every day on your dev machine. [Build Xamarin apps](../pipelines/apps/mobile/xamarin.md) for both iOS and Android and run tests on the Xamarin Test Cloud as part of the build.</p>

<p><b>Customize build process using scripts</b></p>
<p>[Use a script](../pipelines/scripts/powershell.md) to add your team's business logic to your build process.</p>


<p><b>Build agents and agent pools </b></p>
<p>At least one [agent](../pipelines/agents/agents.md) is require to build your code. As you scale your system with more code, people, and builds, you'll need more build agents organized within [agent pools](../pipelines/agents/pools-queues.md). You can use both on-premises or Microsoft-hosted agent pools.</p>


<p><b>Gated check-in (TFVC, Azure DevOps Services) </b></p>
<p>Use [gated check-in](../pipelines/build/triggers.md#gated) to protect against breaking changes when checking code into TFVC.  </p>


<p><b>Branch policies (Git)</b></p>
<p>Improve code quality by [setting branch policies](../repos/git/branch-policies.md) to ensure build are never broken or getting the right people to review changes. </p>


</td>
<td width="38%">
<p><b>Specify your build steps</b></p>
<p>Add steps to specify what you [want to build](../pipelines/tasks/index.md#build), the [tests to run](../pipelines/tasks/index.md#test), and [all the other steps](../pipelines/tasks/index.md) needed to complete the process.</p>

pipelines\tasks\build\_img
<p>![](../pipelines/tasks/build/_img/android-build.png)&#160;&#160;[Build an Android app using Gradle](../pipelines/tasks/build/gradle.md)</p>
<p>![](../pipelines/tasks/build/_img/android-signing.png)&#160;&#160;[Sign and align Android APK files](../pipelines/tasks/build/android-signing.md)</p>
<p>![](../pipelines/tasks/build/_img/ant.png)&#160;&#160;[Build with Apache Ant](../pipelines/tasks/build/ant.md) </p>
<p>![](../pipelines/tasks/build/_img/gradle.png)&#160;&#160;[Build using a Gradle wrapper script](../pipelines/tasks/build/gradle.md)  </p>
<p>![](../pipelines/tasks/build/_img/grunt.png)&#160;&#160;[Grunt: The JavaScript Task Runner](../pipelines/tasks/build/grunt.md) </p>
<p>![](https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/Gulp/icon.png?raw=true)&#160;&#160;[Gulp: Node.js task-based build system](../pipelines/tasks/build/gulp.md)</p>
<p>![](https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/PublishSymbols/icon.png?raw=true)&#160;&#160;[Index source code and publish symbols](../pipelines/tasks/build/index-sources-publish-symbols.md)</p>
<p>![](https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/Maven/icon.png?raw=true)&#160;&#160;[Build with Apache Maven](../pipelines/tasks/build/maven.md)</p>
<p>![](../pipelines/tasks/build/_img/msbuild.png)&#160;&#160;[Build with MSbuild](../pipelines/tasks/build/msbuild.md)</p>
<p>![](https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/SonarQubePreBuild/icon.png?raw=true)&#160;&#160;[SonarQube for MSbuild](http://go.microsoft.com/fwlink/?LinkId=620063)</p>
<p>![](../pipelines/tasks/build/_img/visual-studio-build.png)&#160;&#160;[Visual Studio and MSbuild](../pipelines/tasks/build/visual-studio-build.md)</p>
<p>![](../pipelines/tasks/build/_img/xamarin-android.png)&#160;&#160;[Build an Android app with Xamarin](../pipelines/tasks/build/xamarin-android.md) </p>
<p>![](../pipelines/tasks/build/_img/xamarin-ios.png)&#160;&#160;[Build an iOS app with Xamarin on macOS](../pipelines/tasks/build/xamarin-ios.md) </p>


<p><b>Build variables</b></p>
<p>Use [predefined variables](../pipelines/build/variables.md) or add your custom variables when configuring your build definition or your build scripts.</p>


</td>
<td width="30%">


<p><b>Continuous integration builds</b></p>
<p>[Define a CI build](../pipelines/build/triggers.md#ci) that compiles and tests your solutions whenever your team checks in code.</p>


<p><b>Build summary charts</b></p>
<p>View real-time build status and [add build summary charts to your dashboards](../report/add-widget-to-dashboard.md).  </p>
![build summary chart](_img/features/alm-feature-build-summary-widget.png)  
<br/>


<p><b>Code coverage charts </b></p>
<p>From the Code Coverage tab on a Build summary page, you can view percentage of code coverage as well as upload code coverage data in Jacoco or Cobertura formats.</p>


<p><b>Audit changes </b></p>
<p>Determine who [changed what in the build definition and when they did it](../pipelines/build/history.md). </p>


<p><b>Build retention policies</b></p>
<p>[Define policies to automatically delete old completed builds ](../pipelines/policies/retention.md) to minimize clutter.</p>

<p><b>Build permissions</b></p>
<p>Determine who can [define, delete, and manage builds](../organizations/security/permissions.md#build).</p>


</td>
</tr>
</tbody>
</table>

<a id="release"></a>

### Release

<table>
<tbody>
<tr valign="top">
<td width="33%">

<p><b>Automate deployments</b></p>
<p>Reduce time-to-market and respond to customer feedback with greater agility by [automating your release process](../pipelines/overview.md). Deploy applications across platforms to all environments of the pipeline with just one selection.</p>
![Release Manager](_img/features/alm-feature-release-1.png)  
<br />


<p><b>When to use Azure Pipelines or Build &amp; Release in TFS?</b></p>
<p>Evaluate how Azure Pipelines and Build &amp; Release in TFS can help you in [your development and deployment efforts](../pipelines/overview.md).</p>


<p><b>Release definitions</b></p>
<p>Add a release definition by [choosing the build version, target release environments, and tasks](../pipelines/apps/cd/deploy-webdeploy-webapps.md).</p>


<p><b>Release environments</b></p>
<p>[Define and clone release environments](../pipelines/release/environments.md), logical entities that represent where you want to deploy a release, such as a collection of servers, a cloud, multiple clouds, or an app store.</p>


<p><b>Artifacts</b></p>
<p>A release is fundamentally defined by [versioned artifacts that make up the release](../pipelines/release/artifacts.md). As you deploy the release to various environments, you deploy and validate the same artifacts on all environments. </p>


<p><b>Tasks</b></p>
<p>Automate release deployment by [defining the events that trigger a release](../pipelines/release/triggers.md#release-triggers).</p>

<p><b>Agents and agent pools</b></p>
<p>Agent pools are the execution containers that specify the security context and runtime environment for the [agents that run when you deploy a release](../pipelines/agents/agents.md).</p>

</td>
<td width="33%">
<p><b>Works for any app</b></p>
<p>Deploy [any type of application across multiple platforms](../pipelines/overview.md) including Windows and Linux, whether on-premises or in the cloud.</p>

<p><b>Approval workflows</b></p>
<p>Streamline your application release workflow by [routing pre- and post-deployment approvals](../pipelines/release/approvals/index.md) to multiple approvers or teams.</p>

<p><b>Release notifications</b></p>
<p>Receive email messages as releases occur. Approvers receive notifications automatically when a release is waiting for approval. </p>

<p><b>Full traceability</b></p>
<p>Monitor the status of your release pipelines and track every deployment in each of the environments. Retain full audit history of all activities performed on a release with detailed release logs and approval tracking.</p>

<p><b>Release logs</b></p>
<p>View or download log files as zip files. Log files contain the status for each step or task of a release, for each of the environments in the release definition. Each completed release--succeeded, failed, or abandoned--[includes a live log file, details, and history for each step or task](../pipelines/release/define-multistage-release-process.md#monitor-and-track-deployments).</p>

<p><b>Triggers</b></p>
<p>Automate release deployment by [defining the events that trigger a release](../pipelines/release/triggers.md#release-triggers).</p>

<p><b>Variables</b></p>
<p>Lookup the description for all [release system, global, and agent variables](../pipelines/process/tasks.md).</p>

</td>
<td width="33%">

<p><b>Release names </b></p>
<p>Specify the [naming and numbering scheme you want used when adding releases](../pipelines/release/index.md#numbering).</p>

<p><b>Global configuration properties</b></p>
<p>Simplify management of custom values that you use to configure multiple releases by [specifying custom values for any of the tasks in any of the environments of a release definition](../pipelines/release/variables.md).</p>

<p><b>View test results</b></p>
<p>Open the **Tests** tab to view a summary of the test results, including pass/fail percentages and run duration. Sort the test results into groups or filter the results to show just passed, failed, or other results.</p>
![View test results for a release](_img/features/devops-feature-release-view-tests.png)
<br />

<p><b>Add release summary to dashboard (Azure DevOps Services) </b></p>
<p>[Add a release summary chart](../report/dashboards/widget-catalog.md#release-definition-widget) to a team dashboard. </p>

<p><b>Extend and customize</b></p>
<p>[Create workflows tailored to your process](../pipelines/release/index.md) by customizing our tasks, or extend with your own custom tasks.</p>
![Customize release definition process](_img/features/alm-feature-release-3.png)  
<br />

<p><b>Manage permissions</b></p>
<p>Grant or deny permissions to [manage release definitions, environments approvers, or release permissions](../pipelines/policies/permissions.md#release-permissions). Set permissions for users, groups, or per release definition. </p>

</td>
</tr>
</tbody>
</table>


<a id="test"></a>

### Test

<table>
<tbody>
<tr valign="top">
<td width="33%">

<p><b>Comprehensive testing</b></p>
<p>[Perform exploratory, manual, system, and user acceptance tests for any app, in any language](../test/index.md). Using Visual Studio or 3rd-party test frameworks, you can include automated tests with builds and releases for continuous integration and deployment. </p>

<p><b>Unit testing with Git</b></p>
<p>Create [unit tests](/visualstudio/test/create-unit-tests-menu) and run them frequently to make sure your code is working properly.</p>
![view tests in test explorer](_img/features/alm-feature-test-unittests.png)  
<br />

<p><b>Manual test plans and test cases</b></p>
<p>Get started by [creating test plans and test cases](../test/create-test-cases.md) to track manual testing for sprints or milestones.</p>

<p><b>Shared steps and shared parameters</b></p>
<p>[Create shared steps](https://msdn.microsoft.com/library/dd286655.aspx) to include often repeated sequence of steps in your manual test cases, such as logging in. Repeat manual tests with different data using [shared parameters](../test/repeat-test-with-different-data.md). </p>

</td>
<td width="33%">

<p><b>Coded UI testing</b></p>
<p>Use Visual Studio to create [coded UI tests](https://msdn.microsoft.com/library/dd286726.aspx) to test your application's user interface.</p>

<p><b>Run test with your builds for continuous integration</b></p>
<p>Use continuous integration builds to [run tests automatically](../pipelines/languages/dotnet-core.md#run-your-tests).</p>

<p><b>Review automated test results after a build</b></p>
<p>[Review your test results](../pipelines/test/review-continuous-test-results-after-build.md) to analyze any problems that were found.</p>

<p><b>Quickly assign configurations to test plan, test suite, or test case  </b></p>
<p>From the context menu of a test plan, test suite, or test case, you can assign a configuration.  </p>
![Assign configuration to test object](_img/features/alm-features-test-configuration.png)  
<br/>


</td>
<td width="33%">

<p><b>Exploratory testing</b></p>
<p>Explore user stories without test cases or test steps using [Test Manager and exploratory testing](../test/index.md).</p>
![Exploratory testing](_img/features/features-exploratory-testing.png)  
<br/>
<p>Or, [download and install the Test &amp; Feedback extension](../test/perform-exploratory-tests.md). Capture screenshots, annotate them, and submit bugs while you explore your web app - all directly from your Chrome browser. </p>

<p><b>Record and play back manual tests</b></p>
<p>With Microsoft Test Manager, you can [record your keystrokes and gestures while you test an application](../test/mtm/record-play-back-manual-tests.md). The next time you run the test, you can play back your actions quickly and accurately.</p>



<p><b>Track test status and test results</b></p>
<p>Quickly [view the status](../test/track-test-status.md) of your testing using lightweight charts.</p>
![Test charts](_img/features/features-test-results.png)  
<br />


<p><b>Test environments</b></p>
<p>[Specify a combination of hardware and software](../test/test-different-configurations.md) that represents a user or machine environment in which your app runs.</p>

<p><b>Test permissions</b></p>
<p>Set permissions on who can [manage test configurations, test environments, and publish and delete test results](../organizations/security/set-project-collection-level-permissions.md).</p>



</td>
</tr>
</tbody>
</table>

<a id="dashboards"></a>
##Dashboards and reports  

<a id="charts"></a>

### Charts and dashboards

<table>
<tbody>
<tr valign="top">
<td width="33%">

<p><b>Multiple team dashboards</b></p>
<p>Each team can create several [team dashboards](../report/dashboards/dashboards.md) to help keep both the team and stakeholders in sync. Each dashboard tile provides quick access to the progress of builds, status of work items, or latest code changes. </p>
![Add a dashboard control](_img/features/alm-feature-add-a-dashboard.png)  
 <br/>


<p><b>Build history charts</b></p>
<p>[Add build history charts to your dashboards](../report/dashboards/add-charts-to-dashboard.md#build-history).  </p>
![build summary chart](_img/features/alm-feature-build-summary-widget.png)  
 <br/>



<p><b>Test charts</b></p>
<p>Track the status of your [test progress and test runs](../test/track-test-status.md). Optionally add these charts to a dashboard.  </p>
![Test run chart](_img/features/alm-feature-test-chart.png)  
 <br/>

<p><b>Test quality trend charts</b></p>
<p>Add [failure and duration charts for tests run as part of your build](../report/dashboards/add-charts-to-dashboard.md#test-quality) to your team dashboard. </p>
![Test quality failure and duration charts](_img/features/alm-dashboards-test-quality-failure-duration-charts.png)  
 <br/>

</td>
<td width="33%">

<p><b>Restrict or allow team members to manage dashboards (Azure DevOps Services)</b></p>
<p>Set permissions to [restrict or allow team members to manage dashboards](../report/dashboards/dashboards.md#manage).  </p>


<p><b>Capacity planning and tracking</b></p>
<p>Easily track how much work your team has completed and has left to do in a sprint by adding the [sprint capacity chart widget](../report/dashboards/widget-catalog.md#sprint-capacity-widget) to your dashboard.  </p>
![Sprint capacity chart](_img/features/alm-feature-capacity-widget.png)  
<br/>


<p><b>Share dashboards with stakeholders</b></p>
<p>Grant non-licensed users access as Stakeholders ([Azure DevOps Services](../organizations/accounts/add-organization-users.md) | [TFS](../organizations/security/change-access-levels.md)) so they can view progress, run queries, and contribute ideas.  </p>

<p><b>Velocity charts</b></p>
<p>[Team velocity](../report/dashboards/team-velocity.md) tracks the total estimated effort (story points or size) of backlog items (user stories or requirements) completed or still in progress within each sprint. </p>
![Team velocity chart](_img/features/alm-feature-team-velocity-chart.png)  

<br/>

<p><b>Sprint burndown charts</b></p>
<p>Monitor progress and review team patterns from [sprint burndown charts](../boards/sprints/sprint-burndown.md)</p>
![Sprint burndown chart](_img/features/alm-index-sprint-burndown-widget.png)  
<br/>

<p><b>Add release summary to dashboard (Azure DevOps Services) </b></p>
<p>[Add a release summary chart](../report/dashboards/widget-catalog.md#release-definition-widget) to a team dashboard. </p>

</td>
<td width="33%">
<p><b>Edit dashboard mode</b></p>
<p>Add, remove, move, and configure widgets by [choosing the Edit dashboard icon](../report/dashboards/dashboards.md). Choose the checkmark icon to exit.  </p>
![Edit dashboard icon](../report/dashboards/_img/edit-dashboard-icon.png) | ![Exit dashboard edit mode icon](../report/dashboards/_img/exit-edit-dashboard-mode-icon.png)  
<br/>

<p><b>Auto-refresh dashboards </b></p>
<p>You can [enable auto-refresh for any team dashboard](../report/dashboards/dashboards.md#manage), and it automatically updates every five minutes. This is a useful feature for when your dashboard serves as a team wallboard.   </p>


<p><b>Widget catalog</b></p>
<p>Add [widgets](../report/dashboards/widget-catalog.md) to your dashboard to provide  information and monitor the data your team needs.</p>
![add a widget icon](../report/dashboards/_img/add-widget-icon.png)  
<br/>

<p><b>Work item query charts</b></p>
<p>View the status of work in progress by [charting the results of a flat-list query](../report/dashboards/charts.md). You can create several types of charts&mdash;such as pie, column, or trend&mdash;for the same query. Optionally add these charts to a dashboard.</p>



<p><b>Drag-n-drop layout</b></p>
<p>Configure the layout to your specifications by [dragging tiles into the sequence you want](../report/dashboards/dashboards.md). </p>

<p><b>Cumulative flow diagrams</b></p>
<p>Track the progress of work on your backlogs [through the CFD charts](../report/dashboards/cumulative-flow.md).  </p>

<p><b>Power BI dashboards (Azure DevOps Services)</b></p>
<p>You can create dashboards, individual reports, or explore data collected for your Visual Studio Online account once you [connect to Power BI](../report/powerbi/report-on-vso-with-power-bi-vs.md). </p>


</td>
</tr>
</tbody>
</table>

::: moniker range="azure-devops"

<a id="power-bi">  </a>

### Power BI dashboards and reports (Azure DevOps Services)

<table>
<tbody>
<tr valign="top">
<td width="50%">


<p><b>Basic Power BI concepts</b></p>
<p>The 3 major building blocks of Power BI are [dashboards, reports, and datasets](https://powerbi.microsoft.com/documentation/powerbi-service-basic-concepts/). </p>


<p><b>Get started </b></p>
<p>You can [create dashboards, individual reports, or explore data](../report/powerbi/report-on-vso-with-power-bi-vs.md) collected for your organization once you connect to Power BI. </p>


 

</td>
<td width="50%">

<p><b>Connect to Power BI</b></p>
<p>[Steps required to authorize Power BI to access your organization](../report/powerbi/data-connector-connect.md).</p>


<p><b>Available data</b></p>
<p>The [Power BI Data Connector](../report/powerbi/data-connector-connect.md) supports building reports to track status and trend work items.</p>

</td>

</tr>
</tbody>
</table>

::: moniker-end

::: moniker range=">= tfs-2013"

<a id="sql-server-reports">  </a>

### SQL Server Reports (TFS)

<table>
<tbody>
<tr valign="top">
<td width="33%">

<p><b>Reporting Services reports</b></p>
<p>You can [analyze the progress and quality of your project by using the out-of-the-box reports in SQL Server Reporting Services](https://msdn.microsoft.com/library/dd380714.aspx). These reports aggregate metrics from work items, version control, test results, and builds. They are uploaded when you create a project based on the process - [Agile, Scrum, or CMMI](../boards/work-items/guidance/choose-process.md) - that you choose.   </p>

<p><b>Add Reporting Services reports</b></p>
<p>If you need to add reporting services to a project or on-premises TFS after you've created your team projects, you can by [adding a report server and uploading reports](../report/admin/add-reports-to-a-team-project.md).</p>

<p><b>Manage the data warehouse</b></p>
<p>The reporting warehouse is a traditional data warehouse that consists of a [relational database and an Analysis Services database](../report/admin/manage-reports-data-warehouse-cube.md). You manage it through the following activities:</p>

- [Manually process the data warehouse](../report/admin/manually-process-data-warehouse-and-cube.md)  
- [Rebuild the data warehouse](../report/admin/rebuild-data-warehouse-and-cube.md)  
- [Resolve schema conflicts](../report/admin/resolve-schema-conflicts.md)  
- [Change a process control setting](../report/admin/change-a-process-control-setting.md)  
<br/>
</td>
<td width="33%">

<p><b>Build reports</b></p>
<p>Build reports track the quality of software under development. By defining tests to run automatically as part of each build definition and instrumenting tests to gather code coverage data, you can gain insight about the quality of the builds, tests, and code.</p>

- [Build Quality Indicators](https://msdn.microsoft.com/library/dd380683.aspx) (Agile & CMMI)  
- [Build Success Over Time](https://msdn.microsoft.com/library/dd380643.aspx)  
- [Build Summary](https://msdn.microsoft.com/library/dd380708.aspx)  

<br/>

<p><b>Test and bug reports</b></p>
<p>Test planning reports support monitoring the test progress and coverage of backlog items or user stories. Bug tracking reports illustrate the team's capacity to find and resolve bugs.</p>

- [Test Case Readiness](https://msdn.microsoft.com/library/dd380713.aspx)  
- [Test Plan Progress](https://msdn.microsoft.com/library/dd380702.aspx)  
- [Bug Status](https://msdn.microsoft.com/library/dd380736.aspx) (Agile & CMMI)  
- [Bug Trends](https://msdn.microsoft.com/library/dd380674.aspx) (Agile & CMMI)  
- [Reactivations](https://msdn.microsoft.com/library/dd380731.aspx) (Agile & CMMI)  

<br/>

<p><b>Required team activities to generate useful reports</b></p>
<p>To gain useful, actionable information from your reports, [team members must perform certain activities](../report/admin/review-team-activities-for-useful-reports.md). </p>


</td>
<td width="33%">

<p><b>Project management </b></p>
<p>Project management reports provide insight into how much work the team is tackling within a sprint or release, and the rate of their progress. By linking work items and updating specific fields as work is performed, you can track the progress of individual stories and be able to more accurately estimate future activities. </p>

<p>*Scrum reports*</p>
- <a href="https://msdn.microsoft.com/library/dn641200.aspx">Backlog Overview</a>  
- <a href="https://msdn.microsoft.com/library/ff731579.aspx">Release Burndown</a>  
- <a href="https://msdn.microsoft.com/library/ff731588.aspx">Sprint Burndown</a>  
- <a href="https://msdn.microsoft.com/library/ff731575.aspx">Velocity</a>  
<br/>
<p>*Agile and CMMI*</p>

- <a href="https://msdn.microsoft.com/library/dd380678.aspx">Burndown and Burn Rate</a>  
- <a href="https://msdn.microsoft.com/library/dd380673.aspx">Remaining Work</a>  
- <a href="https://msdn.microsoft.com/library/ee461517.aspx">Requirements Overview</a> (CMMI)  
- <a href="https://msdn.microsoft.com/library/ee461582.aspx">Requirements Progress</a> (CMMI)  
- <a href="https://msdn.microsoft.com/library/dd380706.aspx">Status of All Iterations</a> (similar to Velocity)  
- <a href="https://msdn.microsoft.com/library/dd380641.aspx">Stories Overview</a>   (Agile)   
- <a href="https://msdn.microsoft.com/library/dd380641.aspx">Stories Progress</a> (Agile)  
- <a href="https://msdn.microsoft.com/library/ee707132.aspx">Unplanned Work</a>  

<br/>

<p><b>Set permissions to view or create reports</b></p>
<p>Enable members of your team to [view or manage Reporting Services reports](../report/admin/grant-permissions-to-reports.md). To create or modify reports, you need to grant them access to read databases. </p>




</td>
</tr>
</tbody>
</table>

::: moniker-end

<a id="widgets"></a>

### Widgets

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>What is a widget?</b></p>
<p>You build your dashboards by adding information tiles or widgets. The [widget catalog](../report/dashboards/widget-catalog.md) provides a number of predefined widgets.</p>

<p><b>Drag-and-drop widgets</b></p>
<p>Drag widgets, tiles, or charts anywhere on a dashboard to [configure the layout you want](../report/dashboards/dashboards.md). </p>

<h4><i>Informational content and other links</i></h4>


<p><b>Markdown widget</b></p>
<p>Adds a configurable tile to your dashboard to [display any type of information, guidance, or links](../report/dashboards/widget-catalog.md#markdown-widget) that you want using markdown syntax.   </p>
![Markdown widget](_img/features/alm-feature-markdown-widget.png)  
<br/>


<p><b>Team member </b></p>
<p>Opens the team's quick dialog to [add or remove team members](../report/dashboards/widget-catalog.md#team-members-widget).</p>
![Team member widget](_img/features/alm-feature-manage-members-widget.png)  

<p><b>Team rooms </b></p>
<p>Provides [status and access to a team room](../report/dashboards/widget-catalog.md#team-room-widget), an archived space to discuss work in progress, ask questions, share status, and clarify issues that arise.  </p>

<p><b>Visual Studio widget</b></p>
<p>[Provides links to open or download Visual Studio](../report/dashboards/widget-catalog.md#visual-studio-widget). The Visual Studio IDE client comes with the Team Explorer plug-in which provides quick access to several features (some of which aren't available through the web portal). </p>


<p><b>Welcome widget</b></p>
<p>Provides quick access to [getting started info on how to track work, code, build, and test](../report/dashboards/widget-catalog.md#how-to-widget). </p>
![How to links widget](../report/dashboards/_img/widget-how-to.png)  
<br/>

<h4><i>Code widgets</i></h4>

<p><b>Code tile </b></p>
<p>Configurable tile to display [status and links to a Git or TFVC code repository, branch, or folder](../report/dashboards/widget-catalog.md#code-tile-widget).
 </p>

<p><b>Pull request </b></p>
<p>Adds a configurable tile to display [active pull requests requested by the team, or assigned to or requested by the person logged in](../report/dashboards/widget-catalog.md#pull-request-widget). You select the Git repository for the pull requests of interest.  </p>
![Pull request widget](_img/features/feature-widget-pull-request.png)


</td>
<td width="33%">


<h4><i>Plan and track work</i></h4>


<p><b>Assigned to me widget  </b></p>
<p>Provides quick access to [work items assigned to the logged in user](../report/dashboards/widget-catalog.md#assigned-to-me-widget). </p>


<p><b>Chart for work items</b></p>
<p>Adds a configurable tile to display the [chart for a shared query](../report/dashboards/widget-catalog.md#chart-wit-widget).  </p>
![Chart work widget](_img/features/alm-feature-chart-work.png)  
<br/>

<p><b>New work item </b></p>
<p>[Add work items](../report/dashboards/widget-catalog.md#new-work-item-widget) pre-scoped to your team's default area and iteration paths.</p>
![Add new work item widget](_img/features/alm-feature-new-work-item-widget.png)  
<br/>


<p><b>Other links widget</b></p>
<p>Provides quick access links from a team dashboard to [request feedback, define sprints, and modify your team's area paths](../report/dashboards/widget-catalog.md#other-links-widget).</p>
![Request feedback](_img/features/alm-feature-widget-other-links.png)  
<br/>

<p><b>Query tile </b></p>
<p>Configurable tile to display the [results and link to a shared query](../report/dashboards/widget-catalog.md#query-tile-widget). </p>
![Query tile widget](_img/features/alm-feature-widget-query-tile.png)  
<br/>

<p><b>Query results </b></p>
<p>Adds a configurable [query results list](../report/dashboards/widget-catalog.md#query-results-widget) to a team dashboard. </p>

<p><b>Requirements quality </b></p>
<p>Displays a configurable widget that you can use to [track quality continuously from a build or release definition](../report/dashboards/widget-catalog.md#requirements-quality-widget).</p>

</td>
<td width="33%">


<h4><i>Plan and track work (continued)</i></h4>

<!---
<p><b>Cumulative flow diagram (Azure DevOps Services)  </b></p>
<p>Configurable tile to display the [cumulative flow for a product or portfolio backlog](../report/dashboards/cumulative-flow.md).
</p>
-->

<p><b>Sprint burndown </b></p>
<p>Adds [a burndown chart](../report/dashboards/widget-catalog.md#sprint-burndown-widget) for tracking a team's Scrum progress for the current sprint. </p>


<p><b>Sprint capacity </b></p>
<p>Adds [a chart for tracking remaining capacity](../report/dashboards/widget-catalog.md#sprint-capacity-widget) when tracking a team's Scrum progress for the current sprint. </p>
![Sprint capacity chart](_img/features/alm-feature-capacity-widget.png)  
<br/>

<p><b>Sprint overview </b></p>
<p>Displays a visual overview of the [current sprint progress](../report/dashboards/widget-catalog.md#sprint-overview-widget) for tracking a team's Scrum progress for the current sprint, indicating the number of backlog items in progress, completed, or not started.</p>

<p><b>Work links </b></p>
<p>Provides quick access links from a team dashboard to open the [team backlog, Kanban board, task board, and queries](../report/dashboards/widget-catalog.md#work-links-widget).   </p>


<h4><i>Build and test widgets</i></h4>

<p><b>Chart for build history </b></p>
<p>Configurable tile to display the [histogram for a specific build definition](../report/dashboards/widget-catalog.md#build-history-widget).
 </p>

<p><b>Deployment status (Azure DevOps Services)</b></p>
<p>Configurable tile that shows you a consolidated view of the [deployment status and test pass rate across multiple environments for a recent set of builds](../report/dashboards/widget-catalog.md#deployment-status-widget).  
 </p>

<p><b>Release definition overview</b></p>
<p>Configurable tile to view and track the status of a release definition. The widget [shows the release as a series of environments, with the name of the release and the date or time it was started](../report/dashboards/widget-catalog.md#release-definition-widget).
 </p>

<p><b>Test trend results </b></p>
<p>Provides [trend of test results](../report/dashboards/widget-catalog.md#test-results-widget), such as passed or failed tests, for a selected build definition.</p>
![Test results trend widget](../report/dashboards/_img/widgets-test-trend-results.png)
<br/>


<h4><i>Extensibility</i></h4>

<p><b>Marketplace widgets</b></p>
<p>You can find additional widgets by browsing the [Marketplace](https://marketplace.visualstudio.com/search?term=webpage%20widget&target=vsts&sortby=relevance.)</p>


<p><b>Dashboard widget SDK  </b></p>
<p>[Create a dashboard widget](../extend/develop/add-dashboard-widget.md) using the REST API service. </p>

</td>
</tr>
</tbody>
</table>


<a id="extensibility"></a>

## Extensibility

<a id="marketplace"></a>

### Marketplace

<blockquote style="font-size: 13px"><b>Feature availability: </b>You can add Marketplace extensions from the web portal for Azure DevOps Services or TFS 2015.2 or later version or for Visual Studio or Visual Studio Code.
</blockquote> 

<table>
<tbody>
<tr valign="top">
<td width="55%">


<p><b>What is the Marketplace?</b></p>
<p>From the [Marketplace](https://marketplace.visualstudio.com/), you can extend the functionality available to you by installing free extensions or purchasing a subscription or paid extension. Extensions support adding new capabilities to Visual Studio, Visual Studio Code, Azure DevOps Services, or TFS.  </p>

![Featured extensions for Azure DevOps Services](_img/features/featured-extensions.png)

</td>
<td width="45%">


<p><b>Subscriptions</b></p>
<p>[Visual Studio subscriptions](https://visualstudio.microsoft.com/products/how-to-buy-vs) are a way for you to get the Visual Studio IDE, team collaboration benefits like Azure DevOps Services and TFS, and subscriber benefits like dev/test use of Windows, Windows Server, and SQL Server. </p>

<p><b>Extensions</b></p>
<p>You can [get and quickly install extensions](../marketplace/get-vsts-extensions.md) to add functionality to Visual Studio, Visual Studio Code, or Azure DevOps Services.</p>

<p><b>Try extensions for free</b></p>
<p>You can [start a trial extension for free](../billing/try-additional-features-vs.md).</p>


<p><b>Get extensions for...</b></p>
<ul>
<li>[Azure DevOps Services](https://marketplace.visualstudio.com/#vsts)</li>
<li>[Visual Studio](https://marketplace.visualstudio.com/#vs)</li>
<li>[Visual Studio Code](https://marketplace.visualstudio.com/#vscode)</li>
</ul>
<br/>

<p><b>Get cloud subscriptions</b></p>
<p>Buy [cloud subscriptions](https://marketplace.visualstudio.com/#VSSubscriptions) in the Marketplace.</p>

</td>

</tr>
</tbody>
</table>


<a id="rest-apis"></a>

### REST APIs


<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Get started with REST APIs</b></p>
<p>Learn the basic patterns for [using the REST APIs](../integrate/get-started/rest/basics.md) for Azure DevOps Services and TFS.</p>

<p><b>Authorization</b></p>
<p>Get authorization from your customers to access Azure DevOps Services resources using [OAuth 2.0](../integrate/get-started/Authentication/oauth.md).</p>

<p><b>REST API reference</b></p>
<p>Use the [REST APIs](../integrate/index.md) to work with Azure DevOps Services and TFS resources.</p>

</td>
<td width="33%">

<p><b>.NET client libraries</b></p>
<p>For .NET developers building Windows apps and services that integrate with Visual Studio Online,
[client libraries](../integrate/get-started/client-libraries/dotnet.md) are available
for integrating with work item tracking, version control, build, and other services are now available.
These packages replace the traditional TFS Client OM installer and make it easy to acquire and redistribute
the libraries needed by your app or service.</p>

</td>
<td width="33%">

<p><b>REST API samples</b></p>
<p>Here are a number of [samples](https://github.com/Microsoft/vso-extension-samples) that work with the REST APIs directly.</p>

<p><b>C# client library samples</b></p>
<p>Here are a few quick [samples](../integrate/get-started/client-libraries/samples.md) to help you get started with the client libraries.</p>


</td>
</tr>
</tbody>
</table>

<a id="service-hooks"></a>

### Service hooks

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Integrate with service hooks</b></p>
<p>[Service hooks](../service-hooks/overview.md) enable you to perform tasks on other services
when events happen in your Visual Studio Online projects</p>

<p><b>Create integrations</b></p>
<p>Integrate other services like [HipChat](../service-hooks/services/hipchat.md),
[Slack](../service-hooks/services/slack.md),
and [UserVoice](../service-hooks/services/uservoice.md) with Azure DevOps
using [service hooks](../service-hooks/overview.md).</p>


</td>

<td width="33%">

![service hooks](_img/features/alm-feature-service-hooks.png)

</td>
<td width="33%">

<p><b>Authorize</b></p>
<p>[Authorize](../service-hooks/authorize.md) other services to access your organization using the industry standard OAuth 2.0.
Oauth 2.0 provides safe, secure access to your resources like work items, source code and build results by those other services.</p>

</td>
</tr>
</tbody>
</table>

<a id="global"></a>

## Global


<table>
<tbody>
<tr valign="top">
<td width="33%">

<p><b>Web portal preferences </b></p>
<p><p>Choose your name to access [your profile settings](../organizations/settings/set-your-preferences.md) and set your web portal preferences which include language (currently only English is supported for Azure DevOps), date and time pattern, and time zone.</p>
![Profile drop down menu](_img/features/features-global-profile.png)  
<br/>


<p><b>Language Interface Packs (LIPs)</b></p>
<p>By using a [Windows Language Interface Pack (LIP)](https://msdn.microsoft.com/library/ms246590.aspx), you can install a language version of Windows, and then install various User Interface Language Packs. Language packs switch your English Visual Studio Professional user interface into any of these languages and have a majority of the user interface localized. </p>

</td>
<td width="33%">

<p><b>Localized content</b></p>
<p>Most content that supports Azure DevOps Services and TFS is localized into the following 14 languages.</p>


<ul>
<li>[English](https://msdn.microsoft.com/library/fda2bad5.aspx)</li>
<li>[Brazilian Portuguese](https://msdn.microsoft.com/pt-br/library/fda2bad5.aspx)</li>
<li>[Chinese Simplified](https://msdn.microsoft.com/v/library/fda2bad5.aspx)</li>
<li>[Chinese Traditional](https://msdn.microsoft.com/zh-tw/library/fda2bad5.aspx)</li>
<li>[Czech](https://msdn.microsoft.com/cs-cz/library/fda2bad5.aspx)</li>
<li>[German](https://msdn.microsoft.com/de-de/library/fda2bad5.aspx)</li>
<li>[French](https://msdn.microsoft.com/fr-fr/library/fda2bad5.aspx)</li>
<li>[Italian](https://msdn.microsoft.com/it-it/library/fda2bad5.aspx)</li>
<li>[Japanese](https://msdn.microsoft.com/ja-jp/library/fda2bad5.aspx)</li>
<li>[Korean](https://msdn.microsoft.com/ko-kr/library/fda2bad5.aspx)</li>
<li>[Polish](https://msdn.microsoft.com/pl-pl/library/fda2bad5.aspx)</li>
<li>[Russian](https://msdn.microsoft.com/ru-ru/library/fda2bad5.aspx)</li>
<li>[Spanish](https://msdn.microsoft.com/es-es/library/fda2bad5.aspx)</li>
<li>[Turkish](https://msdn.microsoft.com/tr-tr/library/fda2bad5.aspx)</li>
</ul>

<br/>
<blockquote>Currently, the visualstudio.com content is only available in English.</blockquote>

</td>
<td width="33%">

<p><b>Visual Studio language pack</b></p>
<p>Install the [language pack](http://www.microsoft.com/download/details.aspx?id=48157) to [switch the UI display to different languages](https://msdn.microsoft.com/library/ms246590.aspx).  Visual Studio provides localized UI support for these 14 languages.</p>
<ul>
<li><a href="http://msdn.microsoft.com/library/dd831853.aspx">English</a></li>
<li><a href="http://msdn.microsoft.com/pt-br/library/dd831853.aspx">Brazilian Portuguese</a></li>
<li><a href="http://msdn.microsoft.com/zh-cn/library/dd831853.aspx">Chinese Simplified</a></li>
<li><a href="http://msdn.microsoft.com/zh-tw/library/dd831853.aspx">Chinese Traditional</a></li>
<li><a href="http://msdn.microsoft.com/cs-cz/library/dd831853.aspx">Czech</a></li>
<li><a href="http://msdn.microsoft.com/de-de/library/dd831853.aspx">German</a></li>
<li><a href="http://msdn.microsoft.com/fr-fr/library/dd831853.aspx">French</a></li>
<li><a href="http://msdn.microsoft.com/it-it/library/dd831853.aspx">Italian</a></li>
<li><a href="http://msdn.microsoft.com/ja-jp/library/dd831853.aspx">Japanese</a></li>
<li><a href="http://msdn.microsoft.com/ko-kr/library/dd831853.aspx">Korean</a></li>
<li><a href="http://msdn.microsoft.com/pl-pl/library/dd831853.aspx">Polish</a></li>
<li><a href="http://msdn.microsoft.com/ru-ru/library/dd831853.aspx">Russian</a></li>
<li><a href="http://msdn.microsoft.com/es-es/library/dd831853.aspx">Spanish</a></li>
<li><a href="http://msdn.microsoft.com/tr-tr/library/dd831853.aspx">Turkish</a></li>
</ul>
<br/>

<p><b>Eclipse plug-in language support </b></p>
<p>[Install Team Explorer Everywhere](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs#d-team-explorer-everywhere), which includes language support for English, French, German, Japanese, and Simplified Chinese.   </p>

</td>
</tr>
</tbody>
</table>





<a id="monitor"></a>

## Monitor

<a id="app-insights"></a>

### Application Insights (Preview)

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>What is Application Insights</b></p>
<p>Application Insights, an extensible analytics service that monitors your live web application, supports developers to continuously improve the performance and usability of apps. With it you can [detect and diagnose performance issues, and understand what users actually do with your app](https://azure.microsoft.com/en-in/documentation/articles/app-insights-overview/). </p>


<p><b>Web site availability monitoring </b></p>
<p>Know when your site or service goes down by [setting up tests and performance thresholds to monitor both uptime and responsiveness](https://azure.microsoft.com/documentation/articles/app-insights-monitor-web-app-availability/). </p>

<p><b>Web site performance & usage </b></p>
<p>Open the Performance blade to see [request, response time, dependency and other data](https://azure.microsoft.com/documentation/articles/app-insights-monitor-performance-live-website-now/#view-performance-telemetry).</p>


<p><b>Power BI integration</b></p>
<p>[Get even more flexible views of your telemetry](https://azure.microsoft.com/blog/application-insights-content-pack-for-power-bi/), and present your web app telemetry alongside data from devices and other business sources.</p>


</td>
<td width="33%">

<p><b>Dashboard</b></p>
<p>Get the full picture with [customizable dashboards that track application health alongside usage metrics and app crashes](/azure/application-insights/app-insights-overview). Within the dashboard, you can filter, search, and drill down to an event instance for more detail or to segment data.</p>
![Application insight dashboard blades](_img/features/features-app-insights-dashboard-blades.png)  
<br/>




<p><b>Diagnose failures and exceptions</b></p>
<p>Quickly diagnose causes and [correlate failed requests with exceptions and other events at both the client and server](https://azure.microsoft.com/documentation/articles/app-insights-asp-net-exceptions/).</p>
</td>
<td width="33%">


<p><b>Usage analysis</b></p>
<p>Gain a clear view of [where your users are coming from and how they use your app ](https://azure.microsoft.com/documentation/articles/app-insights-overview-usage/). Add custom instrumentation to determine usage patterns and next version investment areas.  </p>

<p><b>Diagnose dependency issues</b></p>
<p>See how long your application [waits for dependencies and how often a dependency call fails](https://azure.microsoft.com/en-in/documentation/articles/app-insights-dependencies/). Dependencies are external components that your app calls such as an HTTP service, database, or file system. </p>


<p><b>Custom data collectors </b></p>
<p>Add custom data collectors to your app using the [Application Insights API to customize your telemetry data](https://azure.microsoft.com/documentation/articles/app-insights-api-custom-events-metrics/).   </p>


<p><b>Continuous data export</b></p>
<p>Perform custom analysis on your telemetry through [continuous export of your data](https://azure.microsoft.com/documentation/articles/app-insights-export-telemetry/). </p>



</td>
</tr>
</tbody>
</table>

<a id="hockeyapp"></a>

### HockeyApp


<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Get HockeyApp for mobile app development</b></p>
<p>Distribute mobile apps for testing, collect user metrics and feedback, and respond to crashes more easily by [adding HockeyApp to your Agile, continuous integration, and continuous delivery workflows](https://visualstudio.microsoft.com/app-center/). </p>

<p><b>Simplified distribution </b></p>
<p>[Manage distribution of development and production versions of your apps](http://support.hockeyapp.net/kb/app-management-2/how-to-organize-development-and-production-apps-for-distribution) and use independent bundle identifiers that can run in parallel on the same device.</p>


<p><b>Integrate with Azure DevOps Services and TFS</b></p>
<p>[Integrate HockeyApp directly in Azure DevOps Services or TFS](https://visualstudio.microsoft.com/app-center/) to upload your Android, iOS, or Windows builds. </p>



</td>
<td width="33%">


<p><b>Comprehensive dashboard </b></p>
<p>Manage all your apps, users, and devices from a single dashboard. Monitor crashes and feedback as well. As an admin, you'll have full control over which user can see and install which app. </p>

![Hockeyapp dashboard](_img/features/features-hockeyapp-dashboard.png)  
<br/>




</td>
<td width="33%">

<p><b>Invite or recruit testers</b></p>
<p>[Invite beta testers and distribute your beta versions](http://support.hockeyapp.net/kb/app-management-2/how-to-invite-beta-testers) through the dashboard.</p>


<p><b>Usage</b></p>
<p>[Get advanced metrics](http://support.hockeyapp.net/kb/third-party-bug-trackers-services-and-webhooks/how-to-use-hockeyapp-with-status-board) to understand the testing performed on your app. See which devices were tested, which testers used the app for how long, and which language was tested. </p>

<p><b>Crash reports</b></p>
<p>Get the information you need to analyze and respond to crashes by getting [symbolicated stack traces and environment details](http://support.hockeyapp.net/kb/app-management-2/what-data-is-collected-with-crash-reports).
 </p>


<p><b>Webhooks</b></p>
<p>Use webhooks to [receive notifications about new versions, crash groups, and feedback](http://support.hockeyapp.net/kb/third-party-bug-trackers-services-and-webhooks/how-to-use-hockeyapp-webhooks). </p>


</td>
</tr>
</tbody>
</table>


<a id="navigation"></a>

## Navigation


<a id="web-portal"></a>

### Web portal

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Operational hubs</b></p>
<p>Each hub&mdash;[Home, Code, Work, build, and Test](../project/navigation/index.md)&mdash;supports specialized functions to share information, view and create dashboards, collaborate on code, plan and track work, build and test your applications, plus much, much more.</p>
![Operational hubs](_img/features/alm-feature-op-hubs-2.png)  
<br/>

<p><b>Project page </b></p>
<p>To view and quickly navigate to teams, team projects, branches, work items, pull requests and other objects that are relevant to you, use your [Project page](../project/navigation/work-across-projects.md). </p>

<p><b>Your profile and preferences</b></p>
<p>Choose your name to access [your profile settings](../organizations/settings/set-your-preferences.md), set preferences, [create personal access tokens (Azure DevOps Services)](../repos/git/command-prompt.md#pat), [set alerts](../boards/queries/alerts-and-notifications.md), and log-in or out.</p>
![Profile drop down menu](_img/features/alm-index-my-profile-menu.png)  
<br/>

<p><b>Switch team context</b></p>
<p>Navigate to a different team or project from the top row.</p>
![Switch team context](_img/features/alm-feature-switch-team-context.png)  
<br/>


<p><b>Change team settings</b></p>
<p>Customize features to meet your team needs by [configuring your team assets](../organizations/settings/manage-teams.md).</p>
![Switch team context](_img/features/alm-feature-team-settings-gear-icon.png)  
<br/>


<p><b>Keyboard shortcuts</b></p>
<p>Increase your productivity by working with [hot keys and shortcuts](../project/navigation/keyboard-shortcuts.md).</p>

</td>
<td width="33%">


<p><b>Home</b></p>
<p>Provide team guidance through [Welcome](../project/wiki/markdown-guidance.md) (Markdown format) pages and add team [dashboards](../report/dashboards/dashboards.md) to monitor progress and trends. </p>

<p><b>Code</b></p>
<p>Manage source code using distributed [Git repositories](../repos/git/index.md) or [Team Foundation version control](../repos/tfvc/index.md).  to </p>

<p><b>Work</b></p>
<p>Plan and track work by [creating a product backlog](../boards/backlogs/create-your-backlog.md), and managing work using [Kanban](../boards/boards/kanban-basics.md) or [Scrum](../boards/sprints/assign-work-sprint.md) processes. Find work items you want to review or update by [creating queries](../boards/queries/using-queries.md), or visualize progress by [creating query-based charts](../report/dashboards/charts.md)  </p>

<p><b>Build</b></p>
<p>[Define and monitor builds](../pipelines/overview.md) and set up continuous builds to improve the quality of your app. </p>


<p><b>Test</b></p>
<p>[Create and run manual tests](../test/create-a-test-plan.md) for your app.</p>

<p><b>Package (Azure DevOps Services, Preview)</b></p>
<p>Share code as binary assets and control dependencies by [subscribing to and working with Azure Artifacts feeds](../artifacts/overview.md).</p>

<p><b>Release (Azure DevOps Services, Preview)</b></p>
<p>Manage the release of your app by [deploying it to a specific environment for each separate release step](../pipelines/overview.md), and by controlling the process through approvals for each step.</p>


<p><b>Code search</b></p>
<p>[Search within your code branches (TFVC) and repositories (Git)](../project/search/overview.md) to find files, commits, and more using powerful filters to obtain rich results. </p>
![Search code box](_img/features/features-index-code-search-vsts.png)  
<br/>
<p><b>Find work items</b></p>
<p>When in the Work hub, [enter IDs or keywords to start a query](../boards/queries/using-queries.md) to find  work items that you want to review, triage, or update.</p>
![Search work item box](_img/features/alm-index-search-work-items-vsts.png)  
<br/>




</td>
<td width="33%">

<p><b>Collection-project-team structure</b></p>
<p>The [collection-project-team structure](../organizations/projects/about-projects.md) provides teams a high-level of autonomy to configure their tools in ways that work for them. It also supports administrative tasks to occur at the appropriate level.</p>
![Single collection-project-team conceptual image](_img/web-portal-organization-project-team-concept.png)
<br/>

<p><b>My favorites</b></p>
<p>From any context, you can drag folders, queries, or builds to My favorites when working in the Code, Work, or Build hubs to provide quick access to those items. </p>


<p><b>Team favorites</b></p>
<p>From your team context, drag shared queries, builds, and folders to Team favorites to provide quick access to those items. </p>
![Drag items to team favorites](_img/features/alm-index-team-favorites.png)  
<br/>



<p><b>Project admin context</b></p>
<p>Open the admin context to [add teams](../organizations/settings/add-teams.md) and [manage permissions](../organizations/security/change-individual-permissions.md). From any project hub, choose the ![gear icon](../boards/_img/icons/gear_icon.png) gear icon to open the admin context.</p>
![Admin context](_img/features/alm-feature-admin-context.png)  
<br/>


<p><b>Project collection admin context</b></p>
<p>From the collection admin context, you can [manage collection-level permissions](../organizations/security/set-project-collection-level-permissions.md), and set build policies, and [manage extensions](../extend/overview.md). Choose the ![gear icon](../boards/_img/icons/gear_icon.png) gear icon to open the admin context, and then choose DefaultCollection. </p>


</td>
</tr>
</tbody>
</table>


<a id="search"></a>

## Search, queries, and filters

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Quick work item search</b></p>
<p>Find work items based on [ID, assignment, changed date, or keyword](http://msdn.microsoft.com/library/cc668120.aspx). </p>
![Search work item box](_img/features/alm-index-search-work-items-vsts.png)  
<br/>


<p><b>Code search</b></p>
<p>[Find code based on keywords and semantic search filters](../project/search/overview.md) across your Git repositories.</p>
![Search code box](_img/features/features-index-code-search-vsts.png)  

<p><b>CodeLens search</b></p>
<p>[Find references and changes to your code, linked bugs, work items, code reviews, and unit tests](http://msdn.microsoft.com/library/dn269218.aspx).</p>

<p><b>Work item queries</b></p>
<p>Open shared queries or create your own query using the query editor [to list work items or show hierarchical or dependent items](../boards/queries/using-queries.md).  </p>

><b>Manage risks and dependencies</b></p>
<p>Link work items to [track related work, dependencies, and changes made over time](../boards/queries/link-work-items-support-traceability.md).</p>

<p><b>History & auditing</b></p>
<p>Review and query [work item change history](../boards/queries/history-and-auditing.md) to learn of past decisions and support future ones.</p>


<p><b>Bulk add or modify using Excel </b></p>
<p>[Bulk add items to track or modify multiple field values](../boards/backlogs/office/bulk-add-modify-work-items-excel.md) using Excel.</p>

</td>
<td width="33%">

<p><b>Charts</b></p>
<p>[Turn your queries into a status or trend chart](../report/dashboards/charts.md) and share them with your team, organization, and stakeholders.</p>
![Create status and trend charts from flat list queries](_img/features/alm-feature-test-chart.png)  
<br/>


<p><b>Tags</b></p>
<p>[Add tags to work items](../boards/queries/add-tags-to-work-items.md) to filter backlogs and queries. Bulk update work items to add or remove tags: [Azure DevOps Services](../boards/backlogs/bulk-modify-work-items.md#tags) | [TFS](../boards/backlogs/office/bulk-add-modify-work-items-excel.md). </p>
![Add tags to filter backlogs, boards, and queries](_img/features/alm-feature-tags.png)  
<br/>

<p
</td>
<td width="33%">


<p><b>Bulk modify</b></p>
<p>[Edit or update multiple work items](../boards/backlogs/bulk-modify-work-items.md) from any backlog or query result. Supported tasks include:  </p>
<ul>
<li style="margin-bottom:0px">Modify field values </li>
<li style="margin-bottom:0px">Add or remove tags  </li>
<li style="margin-bottom:0px">Reassign </li>
<li style="margin-bottom:0px">Move to an iteration</li>
<li style="margin-bottom:0px">Delete</li>
<li style="margin-bottom:0px">Link to a new or existing work item </li>
<li style="margin-bottom:0px">Change work item type </li>
<li style="margin-bottom:0px">Move to another project</li>
<li style="margin-bottom:0px">Create a new Git branch</li>
</ul>
<br/>

<p><b>Query by date or current iteration</b></p>
<p>List work items based on [when changes occurred or if they belong to the team's current sprint](../boards/queries/query-by-date-or-current-iteration.md). </p>

<p><b>Query by workflow</b></p>
<p>[Find and list work items based on their current state](../boards/queries/query-by-workflow-changes.md), such as new, in progress, resolved, done, or closed. </p>

<p><b>Query by Kanban board change</b> </p>
<p>Track status and trends of work items based on [changes made to the Kanban board](../boards/queries/query-by-workflow-changes.md). </p>



</td>
</tr>
</tbody>
</table>


<a id="security"></a>

## Security

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Manage users and groups</b></p>
<p>[Add users to built-in groups](../organizations/security/permissions.md) to grant them access to your project. Optionally, create groups to customize access based on your business requirements.</p>

<p><b>Permission states</b></p>
<p>Understand how [Allow, Deny, Not set and other permissions states](../organizations/security/about-permissions.md) control access to features and objects. </p>
![permission states](_img/features/alm-feature-permission-states.png)  
<br/>

<p><b>Manage work access (Azure DevOps Services)</b></p>
<p>[Control user access with a directory](../organizations/accounts/manage-azure-active-directory-groups.md) to enforce policies about accessing company resources.  </p>

<p><b>Azure Active Directory (Azure DevOps Services) </b></p>
<p>Easily control access to your team's critical resources and key business assets with [Azure Active Directory groups](../organizations/accounts/manage-azure-active-directory-groups.md).</p>

<p><b>Set up groups (TFS)</b></p>
<p>[Create Windows or Active Directory groups](/azure/devops/server/admin/setup-ad-groups) to manage access to your team projects and collections.  </p>

<p><b>Built-in groups</b></p>
<p>Understand the [permissions granted to built-in groups](../organizations/security/permissions.md#groups) and use them to manage access to your team projects and collections.</p>



</td>
<td width="33%">

<p><b>DevOps permissions</b></p>
<p>Grant or restrict access to: </p>
<ul>
<li>[Git repositories](../organizations/security/set-git-tfvc-repository-permissions.md)</li>
<li>[Git branches](../repos/git/branch-permissions.md)</li>
<li>[TFVC source code and folders](../organizations/security/set-git-tfvc-repository-permissions.md)</li>
<li>[Build](../pipelines/policies/set-permissions.md)</li>
<li>[Test](../organizations/security/set-project-collection-level-permissions.md))</li>
<li>[Release](../pipelines/policies/set-permissions.md)</li>
</ul>
<br/>

<p><b>Work item tracking permissions</b></p>
<p>Control access to specific features by setting permissions for a user or group.</p>

<ul>
<li>[Area and iteration paths](../organizations/security/set-permissions-access-work-tracking.md)</li>
<li>[Query permissions](../boards/queries/set-query-permissions.md)</li>
<li>[Work item tags](../organizations/security/permissions.md#tags)</li>
<li>[Move work items to another project](../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions)</li>
<li>[Permanently delete work items](../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions)</li>
<li>[Provide feedback through the Microsoft Feedback client](../project/feedback/give-permissions-feedback.md)</li>
</ul>
<br/>


<p><b>Team admin role and permissions</b></p>
<p>Add users as team administrators to enable them to [configure team settings and manage team assets](../organizations/settings/manage-teams.md).</p>


<p><b>Manage administrative permissions </b></p>
<p>[Add users to one of the following built-in groups] to provide them permissions assigned to that group: </p>
<ul>
<li>[Project Administrators](../organizations/security/set-project-collection-level-permissions.md), who manage shared features for a project </li>
<li>[Project Collection Administrators](../organizations/security/set-project-collection-level-permissions.md), who manage collection-level features </li>
<li>[Team Foundation Server Administrators](/azure/devops/server/admin/add-administrator-tfs), who manage on-premises application servers </li>
</ul>
<br/>

<p><b>Restrict access</b></p>
<p>You can restrict access to several features and tasks by setting the permission state to Deny to individual users or a security group.</p>


</td>
<td width="33%">


<p><b>Stakeholder access</b></p>
<p>[Grant stakeholders, non-licensed users, limited access](../organizations/security/change-access-levels.md) to contribute ideas and access team dashboards.</p>

<p><b>Query permissions</b></p>
<p>Grant permissions to [create shared queries and query folders](../boards/queries/set-query-permissions.md).</p>
![Query permissions](_img/features/features-query-permissions.png)  
<br/>

<p><b>Process permissions</b></p>
<p>To customize a process, add custom fields, or change the layout of a work item form, you must be a member of the Project Collection Administrators group or be [granted explicit permissions to edit a specific process](../organizations/security/set-permissions-access-work-tracking.md#process-permissions).  </p>

<p><b>Valid users</b></p>
<p>Understand how [valid user groups are populated and the permissions they're granted](../organizations/security/about-permissions.md#validusers).</p>


<p><b>Permission reference</b></p>
<p>[Provide or restrict access](../organizations/security/permissions.md) for practically any feature, function, or object at the collection or project level. </p>

<p><b>SharePoint permissions (TFS)</b></p>
<p>Grant permissions to [view and contribute to SharePoint project portals](https://msdn.microsoft.com/library/bb558971.aspx).</p>

<p><b>SQL Server reporting permissions (TFS)</b></p>
<p>Grant permissions to [view and author Excel and SQL Server reports](../report/admin/grant-permissions-to-reports.md).</p>





</td>
</tr>
</tbody>
</table>





<a id="setup"></a>

## Set up and installation


<table>
<tbody>
<tr valign="top">
<td width="33%">

<p><b>Free developer offers</b></p>
<p>To get started, [download and install Visual Studio](https://visualstudio.microsoft.com/products/free-developer-offers-vs.aspx) an integrated development environment (IDE) that works with Azure DevOps Services and TFS. </p>


<p><b>Migrate from on-premises to hosted</b></p>
<p>You can [migrate source code and work items](https://visualstudio.microsoft.com/articles/adopting-vsts) from an on-premises TFS to the cloud. </p>

</td>
<td width="33%">

<p><b>Sign up for Azure DevOps Services </b></p>
<p>[Store your code, tests, and test results in the cloud with Azure DevOps Services](https://visualstudio.microsoft.com/docs/setup-admin/team-services/sign-up-for-visual-studio-team-services), as well as plan your project and track progress. </p>



<p><b>Install TFS </b></p>
<p>[Download and install the latest version of Team Foundation Server](https://visualstudio.microsoft.com/downloads). TFS provides the collaboration hub to support your teams DevOps tasks. at the center of the Microsoft devops solution. </p>




</td>
<td width="33%">
<p><b>Email configuration (TFS)</b></p>
<p>For feedback requests, alerts, and other special controls to work, you must [configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) for your on-premises TFS. </p>

<p><b>Automated, scheduled backups (TFS)</b></p>
<p>Reduce the risk of lost data by [scheduling automated backups of the data store](/azure/devops/server/admin/backup/config-backup-sched-plan).</p>

<p><b>Built-in SQL Server database (TFS)</b></p>
<p>For small teams, you can install [TFS using SQL Server Express which installs with TFS](/azure/devops/server/install/single-server).  </p>


</td>
</tr>
</tbody>
</table>



<a id="teams-team-projects-processes"></a>

## Teams, team projects, and processes

<a id="processes"></a>

### Processes and process guidance


<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>What is a process?</b></p>
<p>A [process defines the building blocks](../boards/work-items/guidance/choose-process.md) of the work item tracking system as well as other sub-systems you access through your project.  </p>


<p><b>Compare and choose a process</b></p>
<p>Compare the three core system processes--[Agile, Scrum, CMMI](../boards/work-items/guidance/choose-process.md)--before you choose one to create a project. </p>


<p><b>Agile process </b></p>
<p>Choose [Agile](../boards/work-items/guidance/agile-process.md) when your team uses Agile planning methods, including Scrum, and tracks development and test activities separately. With Agile, you can track user stories and bugs on the Kanban board, or track bugs and tasks on the task board.</p>
![Agile process work item types](_img/features/features-agile-wits.png)  
<br/>

<p><b>Customize a process (Azure DevOps Services) </b></p>
<p>Customizations you make to an inherited process automatically update all team projects that reference that process. You can customize your project as follows:</p>
<ul>
<li>[Add and modify fields](../organizations/settings/work/customize-process-field.md)</li>
<li>[Modify the web form layout](../organizations/settings/work/customize-process-form.md)</li>
<li>[Modify the workflow states](../organizations/settings/work/customize-process-workflow.md) </li>
<li>[Add a custom work item type](../organizations/settings/work/customize-process-wit.md) </li>
</ul>

<p><b>Manage processes (Azure DevOps Services) </b></p>
<p>[Create inherited processes and migrate team projects to use them](../organizations/settings/work/manage-process.md). Set the default process and enable, disable, or delete processes you no longer want to use.   </p>




</td>
<td width="33%">


<p><b>Kanban process tools</b></p>
<p>You can use the Kanban board with any process--Agile, Scrum, CMMI--or project that you select or create. Agile Kanban tools support working with the [Kanban board](../boards/boards/kanban-basics.md), [adding task checklists](../boards/boards/add-task-checklists.md), [setting WIP limits](../boards/boards/wip-limits.md), [custom columns](../boards/boards/add-columns.md), [split columns](../boards/boards/split-columns.md), [custom swimlanes](../boards/boards/expedite-work.md), and [customizing cards](../boards/boards/customize-cards.md). </p>


<p><b>Scrum process</b></p>
<p>Choose [Scrum](../boards/work-items/guidance/scrum-process.md) when your team practices Scrum and you want to track product backlog items (PBIs) and bugs on the Kanban board, or break PBIs and bugs down into tasks on the task board. </p>
![Scrum process work item types](_img/features/features-scrum-wits.png)   
<br/>

<p><b>Scrum work items and workflow process guidance</b></p>
<p>Plan and track your work using the [work item types and workflow supported by the Scrum process](../boards/work-items/guidance/scrum-process-workflow.md).  </p>

<p><b>Agile work items and workflow process guidance</b></p>
<p>Plan and track your work using the [work item types and workflow supported by the Agile process](../boards/work-items/guidance/agile-process-workflow.md).  </p>

<p><b>Work item field index</b></p>
<p>For descriptions and usage of each field used by the core and inherited processes, see [Work item field index](../boards/work-items/guidance/work-item-field.md).   </p>


</td>
<td width="33%">
<p><b>Scrum process tools</b></p>
<p>Scrum processes can be used with any process--Agile, Scrum, CMMI--or project that you select or create. Agile Scrum tools support [sprint planning](../boards/sprints/assign-work-sprint.md), [capacity planning](../boards/sprints/set-capacity.md), [task boards](../boards/sprints/task-board.md), and [burndown charts](../boards/sprints/sprint-burndown.md).  </p>


<p><b>Manage processes (Azure DevOps Services) </b></p>
<p>[Add users to built-in groups](../organizations/security/permissions.md) to grant them access to your project. Optionally, create groups to customize access based on your business requirements.</p>

<p><b>CMMI process</b></p>
<p>Choose [CMMI](../boards/work-items/guidance/cmmi-process.md) when your team follows more formal project methods that require a framework for process improvement and an auditable record of decisions. CMMI supports tracking requirements, change requests, risks, and reviews.</p>
![CMMI work item types](_img/features/features-cmmi-wits.png)  
<br/>


<p><b>CMMI work items and workflow process guidance</b></p>
<p>Plan and track your work using the [work item types and workflow supported by the CMMI process](../boards/work-items/guidance/cmmi-process-workflow.md).  </p>


</td>
</tr>
</tbody>
</table>

<a id="process-templates"></a>

::: moniker range=">= tfs-2013 <= tfs-2018"

### Process templates (TFS)

<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>What is a process template?</b></p>
<p>A process template is the forerunner and on-premises version of a process. It provides the  building blocks of the work item tracking system as well as other sub-systems you access through your project. Process templates support full [customization of all its objects](https://msdn.microsoft.com/library/ms243782.aspx). </p>

<p><b>Manage process templates </b></p>
<p>[Download and upload process templates](../boards/work-items/guidance/manage-process-templates.md) to support customization and upgrade of your work tracking experience and team projects. </p>


</td>


<td width="33%">

<p><b>Process template files</b></p>
<p>You customize the initial configuration of team projects by [customizing one or more process template files](https://msdn.microsoft.com/library/ms243856.aspx). By customizing these files, you can define the initial configuration of all team projects that are created from the process template. </p>


<p><b>Configure Features Wizard</b></p>
<p>Use the Configure Features Wizard to [configure team projects after a TFS upgrade to access new features](../reference/configure-features-after-upgrade.md).  </p>

</td>
<td width="33%">

<p><b>Changes made to process templates</b></p>
<p>For a catalog of changes, see [Changes made to process templates](../boards/work-items/guidance/changes-to-process-templates.md).</p>



<p><b>Customize the Microsoft Project field mapping file </b></p>
<p>You can [customize how work item fields that are defined in Team Foundation map to fields in Microsoft Project](https://msdn.microsoft.com/library/ms404686.aspx). And, you can change how specific fields are published.  </p>


</td>
</tr>
</tbody>
</table>

::: moniker-end

<a id="team-projects"></a>

### Team projects


<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>What is a project?</b></p>
<p>A [project](../organizations/projects/create-project.md) provides a repository for source code and a place for a group of developers to plan, track progress, and collaborate on building software solutions. A project lives within a project collection. You can grant permissions to and customize a project to support your business needs. </p>

<p><b>Create a project </b></p>
<p>You can [create a project hosted in the cloud (Azure DevOps Services)](sign-up-invite-teammates.md), avoiding maintenance and administrative overhead, or [create a project on an on-premises TFS](../organizations/projects/create-project.md).</p>


<p><b>Rename a project</b></p>
<p>[Rename a project](../organizations/projects/rename-project.md) as needed to reflect changes that occur within your org.</p>

<p><b>Delete a project</b></p>
<p>Simplify the navigation to team projects that are in use by [deleting team projects you no longer use](../organizations/projects/delete-project.md). </p>

</td>
<td width="33%">

<p><b>Collection-project-team structure</b></p>
<p>The [collection-project-team structure](../organizations/projects/about-projects.md) provides teams a high-level of autonomy to configure their tools in ways that work for them. It also supports administrative tasks to occur at the appropriate level.</p>
![Single collection-project-team conceptual image](_img/web-portal-organization-project-team-concept.png)
<br/>

<p><b>Change the process (Azure DevOps Services) </b></p>
<p>You [change the process of a project](../organizations/settings/work/manage-process.md) to apply customizations you've made to an inherited process. You can [add and modify fields and modify the layout of each work item type](../organizations/settings/work/customize-process.md) defined for that process.  </p>


</td>
<td width="33%">

<p><b>View your work across teams and team projects</b></p>
<p>From your [Project page](../project/navigation/work-across-projects.md), you can view and quickly navigate to teams, team projects, branches, work items, pull requests and other objects that are relevant to you and that are stored in different team projects within the organization or collection. </p>

<p><b>Customize a project (TFS) </b></p>
<p>You customize a project defined on an on-premises TFS by [modifying definition files for work item types or process configuration, or changing field attributes](../reference/customize-work.md).  </p>

<p><b>Update a project after an upgrade (TFS)</b></p>
<p>Some features added when you upgrade your on-premises application server may require you to [configure features to access them](../reference/configure-features-after-upgrade.md). </p>


<p><b>Upload reports (TFS) </b></p>
<p>[Upload the latest reports provided for your process](../report/admin/upload-reports.md) or add reports after you've already created a project by adding SQL Server Reporting Services.  </p>
</td>
</tr>
</tbody>
</table>



<a id="teams"></a>

### Teams


<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>What is a team?</b></p>
<p>A team is an organizing unit used to support a number of [team-configurable tools](../organizations/settings/manage-teams.md) to plan and manage work and facilitate collaboration.  </p>

<p><b>Add team members</b></p>
<p>Add organizations-[Azure DevOps Services](../organizations/accounts/add-team-members.md) | [TFS](../organizations/security/add-users-team-project.md)--to a team to enable users to share code, plan and track work, and access other team assets and resources. </p>
![Manage users, add team members](_img/features/alm-feature-manage-members.png)  
<br/>


<p><b>Add a team</b></p>
<p>As your organization grows, consider moving from your [default team of one to two or more teams](../organizations/settings/add-teams.md) to support feature-focused groups within your org.</p>


<p><b>Add a team admin</b></p>
<p>Add users to the team admin role to enable them to [Manage teams and configure team tools](../organizations/settings/add-team-administrator.md). Team settings can only be configured by a team or project admin. </p>


<p><b>Support stakeholders</b></p>
<p>Members within your org who don't have a license or contribute to developing the code base [can track project priorities and provide direction, feature ideas, and business alignment to a team](../organizations/security/get-started-stakeholder.md).  </p>
</td>
<td width="33%">

<p><b>Team dashboards</b></p>
<p>Share progress, status, and guidance with your team using [configurable team dashboards](../report/dashboards/dashboards.md).  </p>
![Team dashboards](_img/features/alm-feature-add-a-dashboard-2.png)   
<br/>

<p><b>Team welcome page</b></p>
<p>Provide in-project guidance through the [Welcome page and other pages you format using Markdown](../project/wiki/markdown-guidance.md).  </p>




<p><b>Setup a team hierarchy</b></p>
<p>By [configuring your teams and backlogs into an hierarchical structure](../boards/plans/portfolio-management.md), program owners can more easily track progress across teams, manage portfolios, and generate rollup data. </p>

<p><b>Set team defaults</b></p>
<p>Several Agile tools reference the team's default area path, iteration path, and activated sprints to automatically filter the set of work items they display. Understand how defaults are used](../organizations/settings/about-teams-and-settings.md).</p>

<p><b>Select team sprints</b></p>
<p>[Select your team's sprints](../boards/sprints/define-sprints.md) to gain access to sprint backlogs and task boards.</p>
![Set start and end dates for a sprint](_img/features/features-team-sprints-2.png)  
<br/>
</td>
<td width="33%">

<p><b>Configure team settings</b></p>
<p>Configure, customize, and manage all [team-related activities](../organizations/settings/manage-teams.md)</p>




<p><b>Team alerts</b></p>
<p>As changes occur to work items, code reviews, source control files, and builds, your team can automatically [receive email notifications for alerts](../boards/queries/alerts-and-notifications.md) that you define.  </p>


<p><b>Team rooms</b></p>
<p>Team rooms, like chat rooms, provide teams with a [space to discuss work in progress, ask questions, share status, and clarify issues](../notifications/collaborate-in-a-team-room.md) that arise. Use team rooms to foster and capture communication among team members, both near and far.</p>


<p><b>Team groups</b></p>
<p>A [team group is created](../organizations/settings/about-teams-and-settings.md#team-group) when you create a team. Use this group in queries or to set permissions for your team.  </p>
</td>
</tr>
</tbody>
</table>




<a id="traceability"></a>


##Traceability


<table>
<tbody>
<tr valign="top">
<td width="50%">


<p><b>Work item history & auditing</b></p>
<p>Review and query [work item change history](../boards/queries/history-and-auditing.md) to learn of past decisions and support future ones. </p>


<p><b>Manage risks and dependencies</b></p>
<p>Link work items to [track related work, dependencies, and changes made over time](../boards/queries/link-work-items-support-traceability.md). [Create queries](../boards/queries/using-queries.md) based on link type to monitor dependencies.</p>
![Links control](_img/features/features-wit-link-tab.png)  
<br/>


<p><b>Rich text comments</b></p>
<p>Describe and comment on work to perform using [formatted text, hyperlinks, and inline images](../boards/backlogs/add-work-items.md).  </p>

<p><b>Discussion (Azure DevOps Services) </b></p>
<p>[Add or review comments](../boards/backlogs/add-work-items.md) added to a work item. Start by choosing the ![Discussions icon](../boards/backlogs/_img/icon-discussions-wi.png) discussion icon.  </p>
![Discussion section](_img/features/alm-feature-add-work-items-discussion.png)  
<br/>


<p><b>Storyboard</b></p>
<p>[Link your storyboards to you backlog work items](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md).  </p>

</td>

<td width="50%">

<p><b>Git code changes </b></p>
<p>[Get detailed information about what changes have been made to your local and centralized branches and repositories](../repos/git/history.md), compare files and folders, review history of commits and file changes. </p>

<p><b>Integrate Git development with work tracking (Azure DevOps Services) </b></p>
<p>Drive Git development and stay in sync as a team to complete backlog items and tasks using the [Git Development section](../boards/backlogs/connect-work-items-to-git-dev-ops.md). Add branches, create pull requests, and view all development performed to support the specific work item.  </p>
![Work item form Development section](_img/features/alm-feature-git-dev-section.png)  
<br/>
<p><b>TFVC code changes </b></p>
<p>[Get detailed information about what changes have been made to your files](https://msdn.microsoft.com/library/ms245475.aspx), compare files and folders, view where and when changesets have been merged, and view file changes using annotate.</p>

<p><b>Build changes</b></p>
<p>Determine who [changed what in the build definition and when they did it](../pipelines/build/history.md).</p>

<p><b>Release audit history</b></p>
<p>Retain full audit history of all activities performed on a release with detailed release logs and approval tracking.</p>

<p><b>Release logs</b></p>
<p>View or download log files as zip files. Log files contain the status for each step or task of a release, for each of the environments in the release definition. Each completed release--succeeded, failed, or abandoned--[includes a live log file, details, and history for each step or task](../pipelines/release/define-multistage-release-process.md#monitor-and-track-deployments). </p>

</td>
</tr>
</tbody>
</table>



## Related articles

We add new features frequently. We'll work to keep this list up-to-date. Other resources you might want to bookmark:
- [Azure DevOps Services - Features update](/../../release-notes.md)
- [Microsoft devops blog](https://blogs.msdn.microsoft.com/devops/)  

<br/>
Get started today using our cloud offering, [Azure DevOps Services](https://visualstudio.microsoft.com/team-services/), or our [on-premises TFS server](https://visualstudio.microsoft.com/downloads/).  

<!---   
### We welcome your feedback

Send suggestions on **[UserVoice](https://developercommunity.visualstudio.com/content/idea/post.html?space=21)**, and follow us on **[Twitter](https://twitter.com/AzureDevOps) @AzureDevOps**.

See also our [comprehensive feedback and support page](provide-feedback.md).

--> 
