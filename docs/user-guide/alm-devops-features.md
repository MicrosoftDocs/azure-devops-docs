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
ms.date: 05/28/2019
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
<a href="../organizations/projects/connect-to-projects.md" data-raw-source="[Connect to the web portal](../organizations/projects/connect-to-projects.md)">Connect to the web portal</a> from the latest versions of these supported browsers:<br/>- Chrome<br/>- Microsoft Edge<br/>- Firefox<br/>- Internet Explorer<br/>- Safari (Mac)<br/><br/>


<p><b>Integrated Development Environments (IDE)
</b></p>
Track work and integrate with your code, build, and test environments from the following clients:<br/>- <a href="/../java/download-eclipse-plug-in" data-raw-source="[Eclipse (Team Explorer Everywhere)](/../java/download-eclipse-plug-in)">Eclipse (Team Explorer Everywhere)</a><br/>- <a href="https://visualstudio.microsoft.com/downloads/" data-raw-source="[Visual Studio](https://visualstudio.microsoft.com/downloads/)">Visual Studio</a><br/>- <a href="/../java/download-android-studio-plug-in" data-raw-source="[Android Studio](/../java/download-android-studio-plug-in)">Android Studio</a><br/>- <a href="/../java/download-intellij-plug-in" data-raw-source="[IntelliJ](/../java/download-intellij-plug-in)">IntelliJ</a><br/>- <a href="/../java/vscode-extension" data-raw-source="[Visual Studio Code](/../java/vscode-extension)">Visual Studio Code</a><br/>
To learn how to connect, see <a href="../organizations/projects/connect-to-projects.md" data-raw-source="[Connect to a project](../organizations/projects/connect-to-projects.md)">Connect to a project</a>.<br/><br/>
<p><b>Office integration clients</b></p>
Use features supported by these familiar clients to manage your project and illustrate your requirements.<br/>- <a href="../boards/backlogs/office/bulk-add-modify-work-items-excel.md" data-raw-source="[Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)">Excel</a><br/>- <a href="../boards/backlogs/office/create-your-backlog-tasks-using-project.md" data-raw-source="[Project](../boards/backlogs/office/create-your-backlog-tasks-using-project.md)">Project</a><br/>- <a href="../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md" data-raw-source="[PowerPoint - Storyboarding](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md)">PowerPoint - Storyboarding</a><br/>

</td>
<td width="30%">


<p><b>Manage users and groups</b></p>
<p>Add members to your project adds them to the Contributor group. When managing a large group of users, use <a href="../organizations/security/permissions.md" data-raw-source="[built-in groups to manage users and their permissions](../organizations/security/permissions.md)">built-in groups to manage users and their permissions</a>.</p>
<br/>
<p><b>Add team members </b></p>
<p>To share and contribute to your project, add users to <a href="../organizations/accounts/add-team-members.md" data-raw-source="[Azure DevOps Services](../organizations/accounts/add-team-members.md)">Azure DevOps Services</a> or your <a href="../organizations/settings/add-teams.md#add-team-members" data-raw-source="[TFS](../organizations/settings/add-teams.md#add-team-members)">TFS</a>.</p>
<img src="_img/features/alm-feature-manage-members.png" alt="Manage users, add team members"/><br/><br/>

<p><b>Azure Active Directory (Azure AD) (Azure DevOps Services)</b></p>
<p>Control who can access your team&#39;s critical resources and key business assets by <a href="../organizations/accounts/manage-azure-active-directory-groups.md" data-raw-source="[managing access with Azure Active Directory groups](../organizations/accounts/manage-azure-active-directory-groups.md)">managing access with Azure Active Directory groups</a>. </p>

</td>
<td width="30%">


<p><b>Access levels</b></p>
<p>All users that you add to your Azure DevOps organization or to your TFS project have access to Basic features by default, except <a href="../organizations/security/get-started-stakeholder.md" data-raw-source="[Stakeholders](../organizations/security/get-started-stakeholder.md)">Stakeholders</a> who have access to a limited set of features, or those added to the Advanced access level in TFS.</p>
- <a href="../organizations/accounts/add-organization-users.md" data-raw-source="[Manage users (Azure DevOps Services)](../organizations/accounts/add-organization-users.md)">Manage users (Azure DevOps Services)</a>
- <a href="../organizations/security/change-access-levels.md" data-raw-source="[Change access levels (TFS)](../organizations/security/change-access-levels.md)">Change access levels (TFS)</a><br/><br/>
<p><b>Permissions</b></p>
<p>Control access to specific features by setting permissions for a user or group.</p>

- <a href="../organizations/security/set-permissions-access-work-tracking.md" data-raw-source="[Area and iteration paths](../organizations/security/set-permissions-access-work-tracking.md)">Area and iteration paths</a><br/>- <a href="../pipelines/policies/set-permissions.md" data-raw-source="[Build &amp; Release](../pipelines/policies/set-permissions.md)">Build &amp; Release</a><br/>- <a href="../organizations/security/set-git-tfvc-repository-permissions.md" data-raw-source="[Git](../organizations/security/set-git-tfvc-repository-permissions.md)">Git</a><br/>- <a href="../organizations/security/set-git-tfvc-repository-permissions.md" data-raw-source="[TFVC](../organizations/security/set-git-tfvc-repository-permissions.md)">TFVC</a><br/>- <a href="../report/dashboard-permissions.md" data-raw-source="[Dashboards](../report/dashboard-permissions.md)">Dashboards</a><br/>- <a href="../boards/queries/set-query-permissions.md" data-raw-source="[Queries](../boards/queries/set-query-permissions.md)">Queries</a><br/>- <a href="../organizations/settings/manage-teams.md" data-raw-source="[Manage teams and configure team tools](../organizations/settings/manage-teams.md)">Manage teams and configure team tools</a><br/>- <a href="../organizations/security/set-project-collection-level-permissions.md" data-raw-source="[Test](../organizations/security/set-project-collection-level-permissions.md)">Test</a><br/>- <a href="../organizations/security/permissions.md#tags" data-raw-source="[Work item tags](../organizations/security/permissions.md#tags)">Work item tags</a><br/>

</td>
</tr>
</tbody>
</table>


<a id="agile-tools"></a>

## Agile tools to plan and track work  

<a id="backlogs"></a>

### Backlogs

<table>
<tbody>
<tr valign="top">
<td width="320">

<p><b>Create your backlog</b></p>
<p>Plan your project by <a href="../boards/backlogs/create-your-backlog.md" data-raw-source="[adding a work item for each user story or requirement](../boards/backlogs/create-your-backlog.md)">adding a work item for each user story or requirement</a> you plan to develop.  </p>
<img src="_img/features/features-quick-add-panel.png" alt="Build your backlog of user stories and requirements"/><br/> <br/>


<p><b>Organize your backlog</b></p>
<p><a href="../boards/backlogs/organize-backlog.md" data-raw-source="[Group items into a hierarchical list using portfolio backlogs](../boards/backlogs/organize-backlog.md)">Group items into a hierarchical list using portfolio backlogs</a> and quickly reorder and re-parent items to effectively manage your deliverables. </p>

<p><b>Forecast</b></p>

<p>Use the <a href="../boards/sprints/forecast.md" data-raw-source="[forecast](../boards/sprints/forecast.md)">forecast</a> tool to estimate work to be completed in future sprints. </p>
 <br/>

<p><b>Storyboard</b></p>
<p>Visualize your ideas and user stories and support greater understanding of them by <a href="../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md" data-raw-source="[storyboarding them with PowerPoint](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md)">storyboarding them with PowerPoint</a>, also link your storyboards to your backlog work items.  </p>





</td>
<td width="320">
<p><b>Move work item to a different project (Azure DevOps Services)</b></p>
<p>Choose the <img src="../boards/_img/icons/change-team-project-icon.png" alt="Change project icon"/> Change project menu option, <img src="../boards/_img/icons/actions-icon.png" alt="Actions icon"/> Actions menu in a work item form to <a href="../boards/backlogs/remove-delete-work-items.md#move" data-raw-source="[move the work item to a different project](../boards/backlogs/remove-delete-work-items.md#move)">move the work item to a different project</a>. </p>

<p><b>Full screen mode</b></p>
<p>Choose <img src="../boards/_img/icons/fullscreen_icon.png" alt="full screen icon"/> or <img src="../boards/_img/icons/exitfullscreen_icon.png" alt="exit full screen icon"/>  to enter or exit full screen mode.  </p>


<p><b>Backlog and board settings</b></p>
<p>Choose <img src="../boards/_img/icons/team-settings-gear-icon.png" alt="Settings icon"/>  to configure team backlogs and boards, including <a href="../organizations/settings/show-bugs-on-backlog.md" data-raw-source="[show bugs on backlogs and boards](../organizations/settings/show-bugs-on-backlog.md)">show bugs on backlogs and boards</a> and <a href="../organizations/settings/select-backlog-navigation-levels.md" data-raw-source="[set team backlog levels](../organizations/settings/select-backlog-navigation-levels.md)">set team backlog levels</a>.  </p>
<img src="_img/features/alm-feature-team-settings-gear-icon.png" alt="Backlog and board settings"/><br/><br/>



<p><b>View portfolio backlog hierarchy</b></p>
<p>Use <a href="../boards/backlogs/organize-backlog.md" data-raw-source="[**Parents Show/Hide**](../boards/backlogs/organize-backlog.md)"><strong>Parents Show/Hide</strong></a> to drill down into the backlog hierarchy.   </p>


<p><b>Multi-team backlog ownership</b></p>
<p>Easily view and track items <a href="../boards/backlogs/backlogs-overview.md#multi-team" data-raw-source="[owned by other teams](../boards/backlogs/backlogs-overview.md#multi-team)">owned by other teams</a> and quickly reorder and re-parent items to effectively manage your backlog. </p>


</td>

<td width="30%">
<p><b>Change work item type (Azure DevOps Services)</b></p>
<p>If you added a task instead of a bug and want to change the work item type to bug, you can. Choose the <img src="../boards/_img/icons/change-type-icon.png" alt="Change type icon"/> Change type option from the <img src="../boards/_img/icons/actions-icon.png" alt="Actions icon"/> Actions menu in a work item form to <a href="../boards/backlogs/remove-delete-work-items.md#change-type" data-raw-source="[change the work item type](../boards/backlogs/remove-delete-work-items.md#change-type)">change the work item type</a>. </p>

<p><b>Filter your backlog</b></p>
<p>Use <strong>Show/Hide in progress</strong> to only show or hide items which have moved from the new or proposed state to active or in progress state.     </p>
<p>Additionally, you can list a subset of items based on keywords <a href="../boards/backlogs/filter-backlogs.md" data-raw-source="[keywords](../boards/backlogs/filter-backlogs.md)">keywords</a> or <a href="../boards/queries/add-tags-to-work-items.md" data-raw-source="[tags](../boards/queries/add-tags-to-work-items.md)">tags</a>. </p>
<img src="_img/features/alm-feature-filter-backlog.png" alt="Filter based on keywords or tags"/><br/> <br/>

<p><b>Request feedback</b></p>
<p><a href="../project/feedback/get-feedback.md" data-raw-source="[Request feedback on working software](../project/feedback/get-feedback.md)">Request feedback on working software</a> and easily track responses that capture interaction with video, verbal, or type-written comments.  </p>
<img src="_img/features/feature-request-feedback.png" alt="Request feedback"/><br/> <br/>

<p><b>Feedback client</b></p>
<p>Provide the free <a href="../project/feedback/give-feedback.md" data-raw-source="[Microsoft feedback client](../project/feedback/give-feedback.md)">Microsoft feedback client</a> to capture their responses to your feedback requests. </p>

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
<p>Different types of work items <a href="../boards/backlogs/add-work-items.md" data-raw-source="[track different types of work](../boards/backlogs/add-work-items.md)">track different types of work</a> - such as bugs, test cases, risks, issues, and more. </p>
<img src="_img/features/alm-feature-new-work-item-widget.png" alt="Add new work item widget"/><br/>
 <br/>

<p><b>Bulk modify</b></p>
<p>Quickly change one or more fields in several work items using <a href="../boards/backlogs/bulk-modify-work-items.md" data-raw-source="[bulk modify in the web portal](../boards/backlogs/bulk-modify-work-items.md)">bulk modify in the web portal</a> or <a href="../boards/backlogs/office/bulk-add-modify-work-items-excel.md" data-raw-source="[bulk modify using Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)">bulk modify using Excel</a>. </p>

<p><b>Copy or clone a work item</b></p>
<p><a href="../boards/backlogs/copy-clone-work-items.md#copy-clone" data-raw-source="[Copy an existing work item](../boards/backlogs/copy-clone-work-items.md#copy-clone)">Copy an existing work item</a> or bulk copy several using <a href="../boards/backlogs/office/bulk-add-modify-work-items-excel.md" data-raw-source="[Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)">Excel</a>.</p>
<img src="_img/features/alm-index-copy-clone-work-item.png" alt="Copy or clone a work item"/><br/> <br/>

<p><b>Follow a work item </b></p>
<p>Choose the <img src="../boards/_img/icons/follow-icon.png" alt="Follow icon"/>/<img src="../boards/_img/icons/following-icon.png" alt="Following icon"/> Follow/Following icons to quickly <a href="../boards/work-items/follow-work-items.md" data-raw-source="[start or stop tracking changes made to a work item](../boards/work-items/follow-work-items.md)">start or stop tracking changes made to a work item</a>.  </p>
<img src="_img/features/alm-feature-follows.png" alt="Follow a work item control"/><br/><br/>

<p><b>Rich text comments</b></p>
<p>Describe and comment on work using <a href="../boards/backlogs/add-work-items.md" data-raw-source="[formatted text, hyperlinks, and inline images](../boards/backlogs/add-work-items.md)">formatted text, hyperlinks, and inline images</a>. Choose <img src="../boards/_img/icons/fullscreen_icon.png" alt="full screen icon"/> or <img src="../boards/_img/icons/exitfullscreen_icon.png" alt="exit full screen icon"/>  to expand or contract the viewing area. </p>


<p><b>Clear HTML formatting </b></p>
<p>Use the <img src="../boards/_img/icons/remove-formatting-icon.png" alt="Remove format"/> icon or CTRL+Spacebar to remove formatting from highlighted text.</p>



<p><b>Attachments</b></p>
<p>To support collaboration of work in progress, <a href="../boards/queries/share-plans.md#attach-files" data-raw-source="[add emails, documents, images, log files, or other file types](../boards/queries/share-plans.md#attach-files)">add emails, documents, images, log files, or other file types</a> to work items.  </p>


</td>
<td width="33%">


<p><b>Estimates and time tracking</b></p>
<p>Track <a href="https://msdn.microsoft.com/library/dd997792.aspx" data-raw-source="[estimated, completed, and remaining work](https://msdn.microsoft.com/library/dd997792.aspx)">estimated, completed, and remaining work</a> for tasks and other work items. Several reports and dashboards provide charts that display data based on team capacity and remaining work.</p>



<p><b>New work item experience</b></p>
<p>The <a href="../reference/process/new-work-item-experience.md" data-raw-source="[new work item experience](../reference/process/new-work-item-experience.md)">new work item experience</a> provides access to a more modern form, additional features, and the ability to add fields and apply other customizations to the work item type. </p>


<p><b>Manage bugs</b></p>
<p><a href="../boards/backlogs/manage-bugs.md" data-raw-source="[Capture and triage bugs](../boards/backlogs/manage-bugs.md)">Capture and triage bugs</a> using different kinds of tools. </p>


<p><b>Choose how you want to track bugs</b></p>
<p>Each team can <a href="../organizations/settings/show-bugs-on-backlog.md" data-raw-source="[choose to manage bugs on their backlog or along with tasks](../organizations/settings/show-bugs-on-backlog.md)">choose to manage bugs on their backlog or along with tasks</a>. </p>


<p><b>Share plans and information</b></p>
<p>Share information using work items and <a href="../boards/queries/share-plans.md" data-raw-source="[generate summary lists with links to backlogs or queries](../boards/queries/share-plans.md)">generate summary lists with links to backlogs or queries</a>. </p>


<p><b>Remove or delete a work item</b></p>
<p>Remove work items from the backlog by changing their State to Removed. Or, <a href="../boards/backlogs/remove-delete-work-items.md" data-raw-source="[move them to the recycle bin or permanently delete them](../boards/backlogs/remove-delete-work-items.md)">move them to the recycle bin or permanently delete them</a>.</p>
<img src="../boards/backlogs/_img/recycle-bin-icon.png" alt="Recycle bin icon"/><br/> <br/>

<p><b>Tags</b></p>
<p><a href="../boards/queries/add-tags-to-work-items.md" data-raw-source="[Add tags to work items](../boards/queries/add-tags-to-work-items.md)">Add tags to work items</a> to filter backlogs and queries. <a href="../boards/backlogs/bulk-modify-work-items.md#tags" data-raw-source="[Bulk update work items](../boards/backlogs/bulk-modify-work-items.md#tags)">Bulk update work items</a> or <a href="../boards/backlogs/work-item-template.md" data-raw-source="[use work item templates](../boards/backlogs/work-item-template.md)">use work item templates</a> to add or remove tags. </p>
<img src="_img/features/alm-feature-tags.png" alt="Add tags to filter backlogs, boards, and queries"/><br/><br/>

<p><b>Work item templates</b></p>
<p>Quickly add new work items based on templates <a href="../boards/backlogs/work-item-template.md" data-raw-source="[with  pre-populate values for your team&#39;s commonly used fields](../boards/backlogs/work-item-template.md)">with  pre-populate values for your team&#39;s commonly used fields</a>. </p>

<p><b>History &amp; auditing</b></p>
<p>Review and query <a href="../boards/queries/history-and-auditing.md" data-raw-source="[work item change history](../boards/queries/history-and-auditing.md)">work item change history</a> to learn of past decisions and support future ones.</p>




</td>
<td width="33%">
<p><b>Discussion </b></p>
<p><a href="../boards/backlogs/add-work-items.md" data-raw-source="[Add or review comments](../boards/backlogs/add-work-items.md)">Add or review comments</a> added to a work item. Start by choosing the <img src="../boards/backlogs/_img/icon-discussions-wi.png" alt="Discussions icon"/> discussion icon.  </p>


<p><b>Integrate Git development with work tracking </b></p>
<p>Drive Git development and stay in sync as a team to complete backlog items and tasks using the <a href="../boards/backlogs/connect-work-items-to-git-dev-ops.md" data-raw-source="[Git Development section](../boards/backlogs/connect-work-items-to-git-dev-ops.md)">Git Development section</a>. Add branches, create pull requests, and view all development done to support the specific work item.  </p>
<img src="_img/features/alm-feature-git-dev-section.png" alt="Work item form Development section"/><br/><br/>


<p><b>Verify a bug, rerun test case</b></p>
<p>Choose the <strong>Verify</strong> option from the bug work item form context menu to launch the relevant test case in the web runner. For more information, see <a href="../test/run-manual-tests.md" data-raw-source="[Run tests for web apps](../test/run-manual-tests.md)">Run tests for web apps</a>. </p>


<p><b>Link work items  </b></p>
<p>Track related work, dependencies, and changes made over time by <a href="../boards/queries/link-work-items-support-traceability.md" data-raw-source="[linking work items](../boards/queries/link-work-items-support-traceability.md)">linking work items</a>. </p>
<img src="_img/features/alm-feature-links-control.png" alt="Link control, web portal"/><br/><br/>

<p><b>Add or modify a field </b></p>
<p>Add a custom field (<a href="../organizations/settings/work/customize-process.md" data-raw-source="[Azure DevOps Services](../organizations/settings/work/customize-process.md)">Azure DevOps Services</a> | <a href="../reference/add-modify-field.md" data-raw-source="[TFS](../reference/add-modify-field.md)">TFS</a> to support tracking additional data requirements or modify an existing field to apply optional rules. </p>


<p><b>Restrict access</b></p>
<p><a href="https://msdn.microsoft.com/library/dn249791.aspx" data-raw-source="[Limit who can create or modify work items or a work item field](https://msdn.microsoft.com/library/dn249791.aspx)">Limit who can create or modify work items or a work item field</a> based on area path, work item type, or based on your specific conditions. </p>


<p><b>Field index </b></p>
<p>Find descriptions and usage information for each field from the <a href="../boards/work-items/guidance/work-item-field.md" data-raw-source="[work item field index](../boards/work-items/guidance/work-item-field.md)">work item field index</a>. </p>



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
<p>The first step in customizing a project is to <a href="../organizations/settings/work/manage-process.md#create-inherited-process" data-raw-source="[create an inherited process](../organizations/settings/work/manage-process.md#create-inherited-process)">create an inherited process</a>. You can only customize inherited processes.  </p>
<img src="_img/features/customize-vsts-process.png" alt="Customize process"/><br/><br/>

<p><b>New work item experience </b></p>
<p>The <a href="../reference/process/new-work-item-experience.md" data-raw-source="[new work item experience](../reference/process/new-work-item-experience.md)">new work item experience</a> provides access to a more modern form, additional features, and the ability to add fields and apply other customizations to the work item type. </p>

<p><b>Customize a process</b></p>
<p>Customizations you make to an inherited process automatically update all team projects that reference that process. You can customize your project as follows:</p>
<ul>
<li><a href="../organizations/settings/work/customize-process-field.md" data-raw-source="[Add and modify fields](../organizations/settings/work/customize-process-field.md)">Add and modify fields</a></li>
<li><a href="../organizations/settings/work/customize-process-form.md" data-raw-source="[Modify the web form layout](../organizations/settings/work/customize-process-form.md)">Modify the web form layout</a></li>
<li><a href="../organizations/settings/work/customize-process-workflow.md" data-raw-source="[Modify the workflow states](../organizations/settings/work/customize-process-workflow.md)">Modify the workflow states</a> </li>
<li><a href="../organizations/settings/work/customize-process-wit.md" data-raw-source="[Add a custom work item type](../organizations/settings/work/customize-process-wit.md)">Add a custom work item type</a> </li>
<li><a href="../organizations/settings/work/custom-controls-process.md" data-raw-source="[Add a custom control](../organizations/settings/work/custom-controls-process.md)">Add a custom control</a> </li>
</ul>

<p><b>Change the process used by a project</b></p>
<p>To apply customizations to one or more team projects, you <a href="../organizations/settings/work/manage-process.md#migrate" data-raw-source="[change the process they reference to a customized inherited process](../organizations/settings/work/manage-process.md#migrate)">change the process they reference to a customized inherited process</a>.  </p>

<p><b>Enable/disable a process</b></p>
<p>To make sure no one creates a project from a process that you don&#39;t want used, <a href="../organizations/settings/work/manage-process.md#enable-process" data-raw-source="[you can disable it](../organizations/settings/work/manage-process.md#enable-process)">you can disable it</a>.  </p>



</td>

<td width="33%">

<p><b>Add or modify a field</b></p>
<p><a href="../organizations/settings/work/customize-process-field.md" data-raw-source="[Add a custom field](../organizations/settings/work/customize-process-field.md)">Add a custom field</a> to support tracking additional data requirements or modify an existing field to apply optional rules. </p>
<img src="_img/features/index-add-field.png" alt="Add field"/><br/><br/>

<p><b>Remove a field from a form</b></p>
<p>You can <a href="../organizations/settings/work/customize-process-field.md#remove-field" data-raw-source="[remove a custom field and select inherited fields from a work item form](../organizations/settings/work/customize-process-field.md#remove-field)">remove a custom field and select inherited fields from a work item form</a>. You can also <a href="../organizations/settings/work/customize-process-field.md#rename-field" data-raw-source="[relabel the fields](../organizations/settings/work/customize-process-field.md#rename-field)">relabel the fields</a> that appear on the form.   </p>

<p><b>Area path pick lists</b></p>
<p>Change the <a href="../organizations/settings/set-area-paths.md" data-raw-source="[pick list of area paths](../organizations/settings/set-area-paths.md)">pick list of area paths</a> to support grouping work items by team, product, or feature area. </p>
<img src="_img/features/alm-feature-area-paths.png" alt="Hierarchical area paths"/><br/><br/>

<p><b>Sprint/iteration pick lists</b></p>
<p>Change the <a href="../boards/sprints/define-sprints.md" data-raw-source="[pick list of iteration paths](../boards/sprints/define-sprints.md)">pick list of iteration paths</a> to support grouping work into sprints, milestones, or other event-specific or time-related period. Activate sprints for each team. </p>
<img src="_img/features/alm-feature-define-sprints.png" alt="Iterations or sprints"/><br/><br/>
</td>


<td width="33%">




<p><b>Review fields</b></p>
<p>You can <a href="../organizations/settings/work/customize-process-field.md#review-fields" data-raw-source="[review the list of fields](../organizations/settings/work/customize-process-field.md#review-fields)">review the list of fields</a> defined for a process, their data type, and the WITs which reference them. For descriptions and usage of each field, see <a href="../boards/work-items/guidance/work-item-field.md" data-raw-source="[Work item field index](../boards/work-items/guidance/work-item-field.md)">Work item field index</a>. </p>

<p><b>Delete a field from the collection</b></p>
<p>You can <a href="../organizations/settings/work/customize-process-field.md#delete-field" data-raw-source="[delete a custom field](../organizations/settings/work/customize-process-field.md#delete-field)">delete a custom field</a> if you find it&#39;s no longer required. </p>



<p><b>Customize the web form</b></p>
<p>For each work item type, you can <a href="../organizations/settings/work/customize-process-form.md" data-raw-source="[add custom pages to group additional custom fields](../organizations/settings/work/customize-process-form.md)">add custom pages to group additional custom fields</a> and you can organize your forms by placing logically related groups and HTML fields on separate pages within a form.    </p>
<img src="_img/features/index-add-group.png" alt="Add custom group"/><br/><br/>

<p><b>Add a custom work item type</b></p>
<p>You can <a href="../organizations/settings/work/customize-process-wit.md" data-raw-source="[add and modify a custom work item type](../organizations/settings/work/customize-process-wit.md)">add and modify a custom work item type</a>.    </p>

<p><b>Customize the workflow</b></p>
<p>For each work item type, you can <a href="../organizations/settings/work/customize-process-workflow.md" data-raw-source="[add custom workflow states to support your business tracking needs](../organizations/settings/work/customize-process-workflow.md)">add custom workflow states to support your business tracking needs</a>.    </p>


<p><b>Delete a process</b></p>
<p>Delete those inherited processes that you no longer want used. Simply choose the Delete option from its context menu.  </p>

<p><b>Set process permissions</b></p>
<p>To customize a process, add custom fields, or change the layout of a work item form, you must be a member of the Project Collection Administrators group or be <a href="../organizations/security/set-permissions-access-work-tracking.md#process-permissions" data-raw-source="[granted explicit permissions to edit a specific process](../organizations/security/set-permissions-access-work-tracking.md#process-permissions)">granted explicit permissions to edit a specific process</a>.  </p>

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
<p><a href="../reference/add-modify-field.md" data-raw-source="[Add or modify a field](../reference/add-modify-field.md)">Add or modify a field</a> to support work tracking and reporting by editing the WIT definition.</p>


<p><b>Add rules to a field </b></p>
<p>Apply <a href="../reference/xml/apply-rule-work-item-field.md" data-raw-source="[various rules to custom fields](../reference/xml/apply-rule-work-item-field.md)">various rules to custom fields</a> to qualify the value it can have, to copy a value, to specify a default, to restrict who can modify it, to enforce pattern matching, or to enforce conditional values.  </p>


<p><b>Remove a field </b></p>
<p><a href="../reference/add-modify-field.md" data-raw-source="[Stop tracking a field by removing the field](../reference/add-modify-field.md)">Stop tracking a field by removing the field</a> from the work item form of select work item types. </p>


</td>
<td width="33%">


<p><b>Area path pick lists</b></p>
<p>Change the <a href="../organizations/settings/set-area-paths.md" data-raw-source="[pick list of area paths](../organizations/settings/set-area-paths.md)">pick list of area paths</a> to support grouping work items by team, product, or feature area. </p>

<p><b>Sprint/iteration pick lists</b></p>
<p>Change the <a href="../boards/sprints/define-sprints.md" data-raw-source="[pick list of iteration paths](../boards/sprints/define-sprints.md)">pick list of iteration paths</a> to support grouping work into sprints, milestones, or other event-specific or time-related period.</p>


<p><b>Custom pick lists </b></p>
<p><a href="https://msdn.microsoft.com/library/ms194947.aspx" data-raw-source="[Define or modify pick list values](https://msdn.microsoft.com/library/ms194947.aspx)">Define or modify pick list values</a> by editing the work item type definition.</p>
</td>
<td width="33%">



<p><b>Modify the workflow </b></p>
<p><a href="https://msdn.microsoft.com/library/ms194981.aspx" data-raw-source="[Design your custom workflow](https://msdn.microsoft.com/library/ms194981.aspx)">Design your custom workflow</a> by adding states, transitions, reasons, and optional actions.</p>


<p><b>Change the work item form </b></p>
<p><a href="https://msdn.microsoft.com/library/ms194952.aspx" data-raw-source="[Change the layout of your work item form](https://msdn.microsoft.com/library/ms194952.aspx)">Change the layout of your work item form</a> by adding fields, custom controls, or tabs.</p>

<p><b>Add a custom work item type </b></p>
<p><a href="https://msdn.microsoft.com/library/ms404855.aspx" data-raw-source="[Add a custom work item type](https://msdn.microsoft.com/library/ms404855.aspx)">Add a custom work item type</a> to track different data requirements.</p>


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
<p>Use your Kanban board to <a href="../boards/boards/kanban-basics.md" data-raw-source="[visualize and track the flow of work](../boards/boards/kanban-basics.md)">visualize and track the flow of work</a> from idea to completion as well as quickly update work item fields</p>
<img src="../boards/boards/_img/ALM_KB_UpdateFieldOnCard.png" alt="Update fields on cards"/><br/><br/>

<p><b>Drag-n-drop</b></p>
<p><a href="../boards/boards/reorder-cards.md" data-raw-source="[Drag and drop items](../boards/boards/reorder-cards.md)">Drag and drop items</a> on the Kanban board to update status and to reorder and reparent items.  </p>

<p><b>Add task checklists</b></p>
<p>Add and mark tasks as done with <a href="../boards/boards/add-task-checklists.md" data-raw-source="[lightweight tasks checklists](../boards/boards/add-task-checklists.md)">lightweight tasks checklists</a>. </p>
<img src="../boards/backlogs/_img/overview/kanban-task-checklist.png" alt="Track tasks with a checklist"/><br/><br/>

<p><b>Filter</b></p>
<p><a href="../boards/boards/filter-kanban-board.md#text-filter" data-raw-source="[Use key words to filter and find items](../boards/boards/filter-kanban-board.md#text-filter)">Use key words to filter and find items</a> on the Kanban board.</p>

<img src="_img/features/alm-feature-kanban-filter.png" alt="Kanban board filter"/><br/><br/>



</td>
<td width="33%">


<p><b>Set WIP limits</b></p>
<p><a href="../boards/boards/wip-limits.md" data-raw-source="[Set constraints on the amount of work your team undertakes at each work stage](../boards/boards/wip-limits.md)">Set constraints on the amount of work your team undertakes at each work stage</a> to gain access to sprint backlogs and task boards.</p>


<p><b>Split columns</b></p>
<p>Turn on split columns to <a href="../boards/boards/split-columns.md" data-raw-source="[track the lag between when items are done in one state and work actually starts in a new state](../boards/boards/split-columns.md)">track the lag between when items are done in one state and work actually starts in a new state</a>. </p>

<p><b>Map your workflow</b></p>
<p><a href="../boards/boards/add-columns.md" data-raw-source="[Customize columns to support your team&#39;s workflow](../boards/boards/add-columns.md)">Customize columns to support your team&#39;s workflow</a> and track work from start to finish. </p>
<img src="_img/features/alm-feature-kanban-flow.png" alt="Add columns to map your workflow"/><br/><br/>

<p><b>Expedite work with swimlanes </b></p>
<p>Use <a href="../boards/boards/expedite-work.md" data-raw-source="[swimlanes](../boards/boards/expedite-work.md)">swimlanes</a> to track work at different service-level classes. </p>


<p><b>Definition of done</b></p>
<p>Support your team to be in sync by <a href="../boards/boards/definition-of-done.md" data-raw-source="[specifying requirements to fulfill prior to handoff of items to a downstream work stage](../boards/boards/definition-of-done.md)">specifying requirements to fulfill prior to handoff of items to a downstream work stage</a>.</p><br/>
<p><b>Filter by field values or parent work items</b></p>
<p>Choose the <img src="../boards/_img/icons/kanban-filter-icon.png" alt="Kanban field filter icon"/> field filter icon to <a href="../boards/boards/filter-kanban-board.md#field-filter" data-raw-source="[filter the board based on assignment, iteration, work item type, or tags](../boards/boards/filter-kanban-board.md#field-filter)">filter the board based on assignment, iteration, work item type, or tags</a>. </p>
<img src="_img/features/alm-feature-kanban-filter-fields.png" alt="Kanban board filter"/><br/><br/>

<p><b>Cumulative Flow Diagram </b></p>
<p>With the CFD, you can <a href="../report/dashboards/cumulative-flow.md" data-raw-source="[monitor the count of work items as they progressively move through various states which you define](../report/dashboards/cumulative-flow.md)">monitor the count of work items as they progressively move through various states which you define</a>.  </p>
</td>


<td width="33%">

<p><b>Customize cards</b></p>
<p><a href="../boards/boards/customize-cards.md" data-raw-source="[Add fields to cards](../boards/boards/customize-cards.md)">Add fields to cards</a> that you can edit directly on your Kanban and task boards.</p><br/><img src="../boards/boards/_img/kanban-board-card-style-rule-example.png" alt="Customized card with added work item fields and styling rules"/><br/><br/>

<p><b>Live updates </b></p>
<p><a href="../boards/boards/kanban-basics.md#live-updates" data-raw-source="[Enable live updates](../boards/boards/kanban-basics.md#live-updates)">Enable live updates</a> to automatically refresh your Kanban board when changes are made by others or to the board settings. </p>
<img src="_img/features/alm-feature-live-updates.png" alt="Live updates"/><br/><br/>


<p><b>Add inline tests </b></p>
<p><a href="../boards/boards/add-run-update-tests.md" data-raw-source="[Add, run, and update tests](../boards/boards/add-run-update-tests.md)">Add, run, and update tests</a> with inline test on your Kanban board.   </p>

<p><b>Add checklists to features and epics</b></p>
<p>Add and mark user stories and other work items as done from your <a href="../boards/boards/kanban-epics-features-stories.md" data-raw-source="[Kanban features or epics boards](../boards/boards/kanban-epics-features-stories.md)">Kanban features or epics boards</a>. </p>

<p><b>Set team&#39;s card reorder preference </b></p>
<p>You can preserve the backlog priority when you move a card to a new column by setting your team&#39;s <a href="../boards/boards/reorder-cards.md" data-raw-source="[Kanban board card reordering setting](../boards/boards/reorder-cards.md)">Kanban board card reordering setting</a>.  </p>

<p><b>Enable/disable card annotations</b></p>
<p>Turn on or off <a href="../boards/boards/customize-cards.md#annotations" data-raw-source="[task checklists or inline tests](../boards/boards/customize-cards.md#annotations)">task checklists or inline tests</a> for your Kanban board. </p>

<p><b>Configure inline tests</b></p>
<p>Configure how new inline tests are added to the Kanban board: <a href="../boards/boards/customize-cards.md#tests" data-raw-source="[create a new test plan/test suite or choose an existing test plan](../boards/boards/customize-cards.md#tests)">create a new test plan/test suite or choose an existing test plan</a>. </p>

</td>



</tr>
</tbody>
</table>

<a id="scale"></a>

### Scale

<table>
<tbody>
<tr valign="top">
<td width="33%">
<p><b>Add another team</b></p>
<p><a href="../organizations/settings/add-teams.md" data-raw-source="[Add and structure teams](../organizations/settings/add-teams.md)">Add and structure teams</a> and organize work to support team autonomy and organizational alignment. Teams can manage their work independently of one another while the organization gains visibility across all teams. </p>
<img src="_img/features/alm-feature-multiple-teams.png" alt="Multiple teams"/><br/><br/>
<p><b>Set team defaults</b></p>
<p>Several Agile tools reference the team&#39;s default area path, iteration path, and activated sprints to automatically filter the set of work items they display. <a href="../organizations/settings/about-teams-and-settings.md" data-raw-source="[Understand how defaults are used](../organizations/settings/about-teams-and-settings.md)">Understand how defaults are used</a>.</p>

</td>
<td width="33%">


<p><b>Set up a team hierarchy</b></p>
<p>By <a href="../boards/plans/portfolio-management.md" data-raw-source="[configuring your teams and backlogs into an hierarchical structure](../boards/plans/portfolio-management.md)">configuring your teams and backlogs into an hierarchical structure</a>, program owners can more easily track progress across teams, manage portfolios, and generate rollup data. </p>


<p><b>Autonomy and alignment</b></p>
<p>As your organization grows, your tools can grow to support a <a href="../boards/plans/agile-culture.md" data-raw-source="[culture of team autonomy and organizational alignment](../boards/plans/agile-culture.md)">culture of team autonomy and organizational alignment</a>. </p>


<p><b>Scale your tools and practices</b></p>
<p>Incrementally adopt <a href="../boards/plans/practices-that-scale.md" data-raw-source="[practices that scale](../boards/plans/practices-that-scale.md)">practices that scale</a> to create greater rhythm and flow within your organization, engage customers, improve project visibility, and develop a productive workforce.</p>

</td>
<td width="33%">


<p><b>Portfolio management</b></p>
<p>Manage a <a href="../boards/plans/portfolio-management.md" data-raw-source="[portfolio of backlogs](../boards/plans/portfolio-management.md)">portfolio of backlogs</a> and gain insight into each team&#39;s progress as well as the progress of all programs.</p>

![Portfolio management](_img/features/alm-feature-portfolio-management.png)
<br/>


<p><b>Scaled Agile Framework</b></p>
<p>Structure team projects to support <a href="../boards/plans/scaled-agile-framework.md" data-raw-source="[epics, release trains, and multiple backlogs to support the Scaled Agile Framework](../boards/plans/scaled-agile-framework.md)">epics, release trains, and multiple backlogs to support the Scaled Agile Framework</a>. </p>


</td>
</tr>
</tbody>
</table>  


<a id="scrum"></a>

### Scrum



<table>
<tbody>
<tr valign="top">
<td width="33%">


<p><b>Define sprints</b></p>
<p><a href="../boards/sprints/define-sprints.md" data-raw-source="[Schedule and activate your team&#39;s sprints](../boards/sprints/define-sprints.md)">Schedule and activate your team&#39;s sprints</a> to gain access to sprint backlogs and task boards.</p>

<p><b>Select team sprints, set team defaults</b></p>
<p>Several tools reference the team&#39;s default and active iteration paths or sprints. For the Agile tools to work best, each team needs to <a href="../organizations/settings/set-area-paths.md" data-raw-source="[set their team area path(s)](../organizations/settings/set-area-paths.md)">set their team area path(s)</a> and <a href="../organizations/settings/set-iteration-paths-sprints.md" data-raw-source="[iteration paths](../organizations/settings/set-iteration-paths-sprints.md)">iteration paths</a> to support their work tracking activities. </p>


<p><b>Plan sprints</b></p>
<p>Build your sprint backlog, add tasks, and load balance work across your team as you <a href="../boards/sprints/assign-work-sprint.md" data-raw-source="[plan your sprint](../boards/sprints/assign-work-sprint.md)">plan your sprint</a>.</p>


<p><b>Track work on your task board</b></p>
<p>Use your <a href="../boards/sprints/task-board.md" data-raw-source="[task board](../boards/sprints/task-board.md)">task board</a> during your daily Scrum meetings to view  and update progress.  </p>

</td>
<td width="33%">



<p><b>Velocity &amp; forecasting</b></p>
<p>Use <a href="../report/dashboards/team-velocity.md" data-raw-source="[velocity charts](../report/dashboards/team-velocity.md)">velocity charts</a> and <a href="../boards/sprints/forecast.md" data-raw-source="[forecast](../boards/sprints/forecast.md)">forecast</a> tools  to estimate work that can be completed in future sprints. </p>
<img src="_img/features/alm-feature-team-velocity-chart.png" alt="Team velocity chart"/><br/><br/>

<p><b>Sprint burndown charts</b></p>
<p>Monitor progress and review team patterns from <a href="../boards/sprints/sprint-burndown.md" data-raw-source="[sprint burndown charts](../boards/sprints/sprint-burndown.md)">sprint burndown charts</a>.</p>
<img src="_img/features/alm-index-sprint-burndown-widget.png" alt="Sprint burndown chart"/><br/>


</td>
<td width="33%">



<p><b>Manage resources</b></p>
<p>Use <a href="../boards/sprints/set-capacity.md" data-raw-source="[capacity planning tools](../boards/sprints/set-capacity.md)">capacity planning tools</a> to track individual, team, and activity over and under capacity for a sprint.</p>
<img src="../boards/sprints/_img/ALM_DS_CapacityBars_S.png" alt="Capacity bars"/><br/>


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
<img src="../boards/work-items/guidance/_img/ALM_PT_Agile_WF_Bug.png" alt="User story workflow"/><br/>
<br/>


<p><b>Default workflows</b></p>
<p>Each process <a href="../boards/work-items/guidance/choose-process.md#main-distinctions" data-raw-source="[defines the workflow](../boards/work-items/guidance/choose-process.md#main-distinctions)">defines the workflow</a> for each work item type to track progress from newly defined, to in progress, to completed or closed. </p>





</td>
<td width="33%">

<p><b>Kanban workflow</b></p>
<p>You can fully customize your Kanban board to map the workflow your team uses by <a href="../boards/boards/add-columns.md" data-raw-source="[adding and renaming columns](../boards/boards/add-columns.md)">adding and renaming columns</a></p>
<img src="_img/features/alm-feature-kanban-flow.png" alt="Add columns to map your workflow"/><br/><br/>

<p><b>Customize the workflow</b></p>
<p>For Azure DevOps Services: <a href="../organizations/settings/work/customize-process-workflow.md" data-raw-source="[add custom workflow states to support your business tracking needs](../organizations/settings/work/customize-process-workflow.md)">add custom workflow states to support your business tracking needs</a>.  For TFS: <a href="https://msdn.microsoft.com/library/ms194981.aspx" data-raw-source="[Design your custom workflow](https://msdn.microsoft.com/library/ms194981.aspx)">Design your custom workflow</a> by adding states, transitions, reasons, and optional actions.</p>

 <p><b>States  </b></p>
<p>States allow you to <a href="https://msdn.microsoft.com/library/ms194981.aspx" data-raw-source="[track the status of work](https://msdn.microsoft.com/library/ms194981.aspx)">track the status of work</a>. For  example, a bug moves from <strong>Active</strong>, <strong>Resolved</strong>, and <strong>Closed</strong> to correspond to when it&#39;s defined, fixed, and verified as fixed.</p>

<p><b>Transitions</b></p>
<p>Transitions specify the <a href="https://msdn.microsoft.com/library/ms194981.aspx" data-raw-source="[valid progressions and regressions from state to state](https://msdn.microsoft.com/library/ms194981.aspx)">valid progressions and regressions from state to state</a> for a work item type.</p>

<p><b>Reasons</b></p>
<p>Each transition <a href="https://msdn.microsoft.com/library/ms194981.aspx" data-raw-source="[specifies a default reason as well as optional reasons](https://msdn.microsoft.com/library/ms194981.aspx)">specifies a default reason as well as optional reasons</a> for tracking the change in state.  </p>



</td>
<td width="33%">

<p><b>Update fields during workflow changes (TFS)  </b></p>
<p>You can <a href="https://msdn.microsoft.com/library/ms194981.aspx" data-raw-source="[define rules that change a field value](https://msdn.microsoft.com/library/ms194981.aspx)">define rules that change a field value</a> whenever you change the state, perform a transition, or select a reason.   </p>

<p><b>Apply workflow conditional field rules (TFS)  </b></p>
<p>You can define rules that <a href="../reference/xml/apply-rule-work-item-field.md" data-raw-source="[change a field value based on the contents of other fields](../reference/xml/apply-rule-work-item-field.md)">change a field value based on the contents of other fields</a> during workflow changes. </p>


<p><b>Restrict who can make changes during workflow transitions (TFS)  </b></p>
<p>Set a condition field rule that applies to a group to <a href="../reference/xml/apply-rule-work-item-field.md" data-raw-source="[restrict who can make changes to a workflow or a field](../reference/xml/apply-rule-work-item-field.md)">restrict who can make changes to a workflow or a field</a>.  </p>


<p><b>Event-generated workflow changes or field assignments (TFS)</b></p>
<p><a href="https://msdn.microsoft.com/library/ms194990.aspx" data-raw-source="[Add an action](https://msdn.microsoft.com/library/ms194990.aspx)">Add an action</a> to a custom workflow definition to automatically transition work items or specify a field value based on an internal TFS event or external event. </p>

<p><b>Visual workflow design tool (TFS)</b></p>
<p>You can change the workflow or view the workflow state diagram  by using the <a href="https://visualstudiogallery.msdn.microsoft.com/898a828a-af00-42c6-bbb2-530dc7b8f2e1" data-raw-source="[Process Editor](https://visualstudiogallery.msdn.microsoft.com/898a828a-af00-42c6-bbb2-530dc7b8f2e1)">Process Editor</a>, a power tool for Visual Studio. </p>

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
<p>Get notified as changes occur to work items, code reviews, source control files, and builds by setting <a href="../notifications/howto-manage-personal-notifications.md" data-raw-source="[personal notifications](../notifications/howto-manage-personal-notifications.md)">personal notifications</a> or <a href="../notifications/howto-manage-team-notifications.md" data-raw-source="[team notifications](../notifications/howto-manage-team-notifications.md)">team notifications</a>.</p>
<img src="_img/features/features-notifications-option.png" alt="Open Notifications from Organization menu"/><br/><br/>

<p><b>Share queries and sprint plans</b></p>
<p>Email a query or <a href="../boards/sprints/assign-work-sprint.md" data-raw-source="[sprint plan](../boards/sprints/assign-work-sprint.md)">sprint plan</a>.  </p>
<img src="_img/features/alm-feature-email-control.png" alt="Share queries, backlogs, and sprint plans with the email control"/><br/><br/>
<p><b>Quick alerts to team members  </b></p>
<p>Use the <strong><xref href="mention" data-throw-if-not-resolved="False" data-raw-source="@mention"></xref></strong> control to send email to team members to bring them into a discussion around work changes, pull requests, or other items.  </p>
<img src="_img/features/alm-feature-at-mention-control_305.png" alt="@mentions control sends email to team members with links"/><br/>

<p><b>Client feature flag updates</b></p>
<p>Alert flag within the IDE automatically notifies you of the latest client changes.</p>
<img src="_img/features/alm-feature-notifications-in-vs.png" alt="Visual Studio feature notification flag"/><br/><br/>


</td>
<td width="30%">

<p><b>Follow a work item </b></p>
<p>Choose the <img src="../boards/_img/icons/follow-icon.png" alt="Follow icon"/>/<img src="../boards/_img/icons/following-icon.png" alt="Following icon"/> icons to quickly <a href="../boards/work-items/follow-work-items.md" data-raw-source="[start or stop tracking changes made to a work item](../boards/work-items/follow-work-items.md)">start or stop tracking changes made to a work item</a>.  </p>
<img src="_img/features/alm-feature-follows.png" alt="Follow a work item control"/><br/><br/>


<p><b>Follow a pull request</b></p>
<p>To <a href="../boards/work-items/follow-work-items.md" data-raw-source="[track the progress of a single pull request](../boards/work-items/follow-work-items.md)">track the progress of a single pull request</a>, choose the <img src="../boards/_img/icons/follow-icon.png" alt="Follow icon"/> option from the context menu. </p>
<img src="_img/features/features-follow-pull-request.png" alt="Follow a pull request"/><br/><br/>

<p><b>Manage work items you follow  </b></p>
<p>From the <strong>Work&gt;Queries</strong> page you can view the list of work items that you&#39;re following.  </p>
<img src="_img/features/alm-feature-followed-work-items.png" alt="Followed work items list"/><br/><br/>


<p><b>Frequent on-line feature updates</b></p>
<p>Check the <a href="/visualstudio/releasenotes/vs2017-relnotes" data-raw-source="[News](/visualstudio/releasenotes/vs2017-relnotes)">News</a> for product updates, or read about them by accessing the News link in your web portal.</p>

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
<p>To get started working with Git, <a href="../repos/git/create-new-repo.md" data-raw-source="[clone a repository, add code, and create branches in Azure DevOps Services](../repos/git/create-new-repo.md)">clone a repository, add code, and create branches in Azure DevOps Services</a> or <a href="../repos/git/gitquickstart.md" data-raw-source="[Visual Studio](../repos/git/gitquickstart.md)">Visual Studio</a>. Learn how to commit, publish, and conduct a pull request of your changes. </p>
<img src="_img/features/features-git-vs-ui.png" alt="Visual Studio Git UI pages"/><br/><br/>

<p><b>Clone repositories</b></p>
<p>To work locally, you <a href="../repos/git/clone.md" data-raw-source="[clone a repository](../repos/git/clone.md)">clone a repository</a>. </p>

<p><b>Commit changes</b></p>
<p>Enter commit messages and <a href="../repos/git/pushing.md" data-raw-source="[quickly push your local changes to the shared repo](../repos/git/pushing.md)">quickly push your local changes to the shared repo</a>.</p>
<img src="_img/features/alm-feature-git-dev-commit-push.png" alt="Commit and push changes"/><br/><br/>

<p><b>Pull requests</b></p>
<p>Use <a href="../repos/git/pull-requests.md" data-raw-source="[pull requests to review and merge branch code to a master branch](../repos/git/pull-requests.md)">pull requests to review and merge branch code to a master branch</a>.   </p>
<p><b>Sync</b></p>

<p>Quickly <a href="../repos/git/pulling.md" data-raw-source="[sync your local branch with a shared repo](../repos/git/pulling.md)">sync your local branch with a shared repo</a>.</p>


</td>
<td width="33%">
<p><b>Get started using Eclipse</b></p>
<p><a href="../repos/git/share-your-code-in-git-eclipse.md" data-raw-source="[Work with Git repositories](../repos/git/share-your-code-in-git-eclipse.md)">Work with Git repositories</a> using the Team Explorer Everywhere IDE for Eclipse.  </p>

<p><b>Add reviewers to get feedback </b></p>
<p>Use the <a href="../notifications/at-mentions.md" data-raw-source="[**@mention** control to add reviewers](../notifications/at-mentions.md)"><strong>@mention</strong> control to add reviewers</a> to your pull request to get their feedback about your changes.  </p>
<img src="_img/features/alm-feature-at-mention-control_305.png" alt="@mentions control sends email to team members with links"/><br/><br/>


<p><b>Resolve Git merge conflicts</b></p>
<p>Merge conflicts occur when commits have changes to the same files as other newer commits in the branch history. Learn how to <a href="../repos/git/merging.md" data-raw-source="[prevent and resolve merge conflicts](../repos/git/merging.md)">prevent and resolve merge conflicts</a>.   </p>

<p><b>Code search</b></p>
<p>Maximize cross-team collaboration and code sharing by finding code across all the projects to which you have access. Narrow down your results and focus in on code by using <a href="../project/search/overview.md" data-raw-source="[filters, preview code, view history, compare versions, and more](../project/search/overview.md)">filters, preview code, view history, compare versions, and more</a> </p>
<img src="_img/features/features-index-code-search-vsts.png" alt="Search code box"/><br/>

<p><b>Get notified about pull requests</b></p>
<p>Subscribe to email alerts to get notified about <a href="../repos/git/pull-requests.md#notifications" data-raw-source="[new pull requests, changes, approvals, and rejections](../repos/git/pull-requests.md#notifications)">new pull requests, changes, approvals, and rejections</a>.</p>

<p><b>Set branch policies </b></p>
<p>To improve code quality, <a href="../repos/git/branch-policies.md" data-raw-source="[set branch policies to require code reviews or  automatically add reviewers](../repos/git/branch-policies.md)">set branch policies to require code reviews or  automatically add reviewers</a>. </p>

<p><b>Automatically build pull requests </b></p>
<p>Set a branch policy to <a href="../repos/git/branch-policies.md" data-raw-source="[automatically generate a build for a pull request to selected branches](../repos/git/branch-policies.md)">automatically generate a build for a pull request to selected branches</a>.</p>

<p><b>Create Git repositories </b></p>
<p>When you create a project with Git as your version control system, you automatically create a Git repo. You can <a href="../repos/git/repo-rename.md" data-raw-source="[Create additional Git repos](../repos/git/repo-rename.md)">Create additional Git repos</a> from the admin context. </p>


<p><b>Rename a Git repository </b></p>
<p><a href="../repos/git/repo-rename.md" data-raw-source="[Rename Git repos](../repos/git/repo-rename.md)">Rename Git repos</a> from the admin context. </p>

</td>
<td width="33%">

<p><b>Integrate Git development with work tracking  </b></p>
<p>Drive Git development and stay in sync as a team to complete backlog items and tasks using the <a href="../boards/backlogs/connect-work-items-to-git-dev-ops.md" data-raw-source="[Git Development section](../boards/backlogs/connect-work-items-to-git-dev-ops.md)">Git Development section</a>. Add branches, create pull requests, and view all development performed to support the specific work item.  </p>
<img src="_img/features/alm-feature-git-dev-section.png" alt="Work item form Development section"/><br/><br/>


<p><b>Quickly link work items to pull requests </b></p>
<p>Use the <a href="../notifications/add-links-to-work-items.md" data-raw-source="[**#ID** control to link work items](../notifications/add-links-to-work-items.md)"><strong>#ID</strong> control to link work items</a> to your pull request to support tracking work.    </p>

<p><b>Get started using Xcode </b></p>
<p><a href="../repos/git/share-your-code-in-git-xcode.md" data-raw-source="[Work with Git repositories](../repos/git/share-your-code-in-git-xcode.md)">Work with Git repositories</a> using the Xcode IDE.  </p>

<p><b>Git commands</b></p>
<p>Use <a href="../repos/git/command-prompt.md" data-raw-source="[Git command line tools](../repos/git/command-prompt.md)">Git command line tools</a> when you need to perform select manual tasks or to automate work using a script.</p>



<p><b>Bypass a branch policy</b></p>
<p>Grant an <a href="../repos/git/branch-policies.md" data-raw-source="[Exempt from policy enforcement permission](../repos/git/branch-policies.md)">Exempt from policy enforcement permission</a> to a user or group.</p>

<p><b>Rebase a branch</b></p>
<p>Before merging a branch into master, you may choose to first <a href="../repos/git/rebase.md" data-raw-source="[rebase your branch onto the latest commit in master](../repos/git/rebase.md)">rebase your branch onto the latest commit in master</a>.</p>



<p><b>Git permissions</b></p>
<p>Set permissions on a <a href="../organizations/security/permissions.md#git-repo" data-raw-source="[Git project, repository, or branch](../organizations/security/permissions.md#git-repo)">Git project, repository, or branch</a> from the context menu or from the web portal administration page.</p>


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
<p><a href="../repos/tfvc/share-your-code-in-tfvc-vs.md" data-raw-source="[Develop and share your code](../repos/tfvc/share-your-code-in-tfvc-vs.md)">Develop and share your code</a>. Learn how to configure your workspace, check-in your code, compare file changes, and view file history. </p>
<img src="_img/features/features-tfvc-ui-vs.png" alt="Visual Studio Git UI pages"/><br/><br/>

<p><b>Set up local or server workspaces</b></p>
<p><a href="https://msdn.microsoft.com/library/ms181384.aspx" data-raw-source="[Create a local workspace](https://msdn.microsoft.com/library/ms181384.aspx)">Create a local workspace</a> that maps to the code base of interest. </p>


<p><b>Resolve conflicts</b></p>
<p><a href="https://msdn.microsoft.com/library/ms181432.aspx" data-raw-source="[Support for Resolve conflicts that arise](https://msdn.microsoft.com/library/ms181432.aspx)">Support for Resolve conflicts that arise</a> when several people work concurrently on a file.</p>

<p><b>Compare files and folders</b></p>
<p><a href="https://msdn.microsoft.com/library/bb385981.aspx" data-raw-source="[Compare server folders and local folders](https://msdn.microsoft.com/library/bb385981.aspx)">Compare server folders and local folders</a> to each other, and view the differences between the contents of each folder.</p>

</td>
<td width="33%">


<p><b>Track changesets</b></p>
<p>Find information about which <a href="https://msdn.microsoft.com/library/dd405662.aspx" data-raw-source="[branches have received a particular set of changes and when those changes were merged](https://msdn.microsoft.com/library/dd405662.aspx)">branches have received a particular set of changes and when those changes were merged</a>.</p>

<p><b>Request code review</b></p>
<p>Increase overall code quality and reduce the risk of creating bugs by <a href="https://msdn.microsoft.com/library/hh474795.aspx#code_review_request" data-raw-source="[requesting a code review when you check-in code](https://msdn.microsoft.com/library/hh474795.aspx#code_review_request)">requesting a code review when you check-in code</a>.</p>

<p><b>Review history of a file</b></p>
<p><a href="https://msdn.microsoft.com/library/ms245475.aspx" data-raw-source="[Get detailed information about what changes have been made to your files](https://msdn.microsoft.com/library/ms245475.aspx)">Get detailed information about what changes have been made to your files</a>.</p>

<p><b>Suspend work</b></p>
<p><a href="https://msdn.microsoft.com/library/ms181403.aspx" data-raw-source="[Use shelvesets](https://msdn.microsoft.com/library/ms181403.aspx)">Use shelvesets</a> when you need to set aside some or all of your work in progress. </p>

<p><b>Manage branches, isolate risk</b></p>
<p>Use branches and locks to <a href="https://msdn.microsoft.com/library/ms181423.aspx" data-raw-source="[isolate risk introduced by work done by different teams](https://msdn.microsoft.com/library/ms181423.aspx)">isolate risk introduced by work done by different teams</a>.</p>

<p><b>Merge branches</b></p>
<p><a href="https://msdn.microsoft.com/library/ms181428.aspx" data-raw-source="[Integrate work completed in different branches](https://msdn.microsoft.com/library/ms181428.aspx)">Integrate work completed in different branches</a> during certain phases of your project.</p>



<p><b>Set check-in and check-out policies</b></p>
<p>Enforce practices that lead to better code and more efficient group development by <a href="https://msdn.microsoft.com/library/ms182076.aspx" data-raw-source="[setting check-in/check-out rules](https://msdn.microsoft.com/library/ms182076.aspx)">setting check-in/check-out rules</a>.</p>


</td>
<td width="33%">


<p><b>Code search</b></p>
<p>Find code across all the projects to which you have access. Narrow down your results and focus in on code by using <a href="../project/search/overview.md" data-raw-source="[filters, preview code, view history, compare versions, and more](../project/search/overview.md)">filters, preview code, view history, compare versions, and more</a> </p>
<img src="_img/features/features-index-code-search-vsts.png" alt="Search code box"/><br/><br/>



<p><b>Subscribe to alerts when check-ins occur</b></p>
<p>Get notified when someone checks in code to your TFVC project by <a href="https://msdn.microsoft.com/library/ms181407.aspx#alerts" data-raw-source="[subscribing to receive email alerts](https://msdn.microsoft.com/library/ms181407.aspx#alerts)">subscribing to receive email alerts</a>.</p>

<p><b>Version control locks</b></p>
<p><a href="https://msdn.microsoft.com/library/ms181418.aspx" data-raw-source="[Lock files or folders](https://msdn.microsoft.com/library/ms181418.aspx)">Lock files or folders</a> when you need to prevent them from being checked out or modified. </p>


<p><b>Download files from the server</b></p>
<p><a href="https://msdn.microsoft.com/library/ms181387.aspx" data-raw-source="[Get the latest files from the server](https://msdn.microsoft.com/library/ms181387.aspx)">Get the latest files from the server</a> on a regular basis so that the code you develop is compatible with the code developed by others on your team.</p>


<p><b>TFVC permissions</b></p>
<p>Set permissions on <a href="../organizations/security/permissions.md#tfvc" data-raw-source="[select code management tasks](../organizations/security/permissions.md#tfvc)">select code management tasks</a> from the context menu for TFVC files or folders or the admin context for the project.</p>


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
<p>Azure Artifacts is the new name for what was previously Package Management. Azure Artifacts helps you <a href="../artifacts/overview.md" data-raw-source="[manage code sharing by automating common tasks for discovering, consuming, and sharing components](../artifacts/overview.md)">manage code sharing by automating common tasks for discovering, consuming, and sharing components</a>.</p>

<p><b>Create feeds </b></p>
<p><a href="../artifacts/feeds/create-feed.md" data-raw-source="[Create feeds](../artifacts/feeds/create-feed.md)">Create feeds</a> to share code through packages.</p>

<p><b>Move existing file shares to the cloud</b></p>
<p>Eliminate dependencies on on-premises file shares and hosted instances of NuGet.Server by <a href="../artifacts/nuget/move-from-fileshares.md" data-raw-source="[moving your packages to Azure DevOps Services](../artifacts/nuget/move-from-fileshares.md)">moving your packages to Azure DevOps Services</a>.</p>



</td>
<td width="33%">

<p><b>Discover and consume packages </b></p>
<p><a href="../artifacts/nuget/consume.md" data-raw-source="[Consume packages](../artifacts/nuget/consume.md)">Consume packages</a> by connecting to a feed.</p>

<p><b>Publish packages to feeds</b></p>
<p><a href="../artifacts/nuget/publish.md" data-raw-source="[Publish packages](../artifacts/nuget/publish.md)">Publish packages</a> to share code with your team and your organization.</p>

<p><b>Add identities to your feeds </b></p>
<p><a href="../artifacts/feeds/feed-permissions.md" data-raw-source="[Give teams and service identities](../artifacts/feeds/feed-permissions.md)">Give teams and service identities</a> access to your feeds.</p>


</td>
<td width="33%">

<p><b>Bootstrap the developer environment</b></p>
<p>Increase your team&#39;s velocity and decrease the amount of code duplication across your organization. Access a set of tools and conventions for integrating Azure DevOps Services NuGet into your workflow by <a href="../artifacts/nuget/bootstrap-nuget.md" data-raw-source="[getting the NuGet VSS.PackageManagement.Bootstrap package](../artifacts/nuget/bootstrap-nuget.md)">getting the NuGet VSS.PackageManagement.Bootstrap package</a>.</p>


<p><b>Remove a NuGet package from a feed </b></p>
<p>[Unlist or remove a package]<a href="../artifacts/how-to/delete-and-recover-packages.md" data-raw-source="[Delete packages and recover deleted packages from the recycle bin in Azure Artifacts](../artifacts/how-to/delete-and-recover-packages.md)">Delete packages and recover deleted packages from the recycle bin in Azure Artifacts</a> you no longer want users to discover.</p>

<p><b>Secure feeds </b></p>
<p>Control who can <a href="../artifacts/feeds/feed-permissions.md" data-raw-source="[contribute to or consume from a feed](../artifacts/feeds/feed-permissions.md)">contribute to or consume from a feed</a>.</p>
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
<p>Start from a build template and customize your build from there. Build for <a href="../pipelines/apps/windows/dot-net.md" data-raw-source="[Windows](../pipelines/apps/windows/dot-net.md)">Windows</a>, <a href="../pipelines/apps/mobile/xcode-ios.md" data-raw-source="[iOS](../pipelines/apps/mobile/xcode-ios.md)">iOS</a>, Android, Java (Ant, Maven, or Gradle), or Linux using the same domain-specific languages you use every day on your dev machine. <a href="../pipelines/apps/mobile/xamarin.md" data-raw-source="[Build Xamarin apps](../pipelines/apps/mobile/xamarin.md)">Build Xamarin apps</a> for both iOS and Android and run tests on the Xamarin Test Cloud as part of the build.</p>

<p><b>Customize build process using scripts</b></p>
<p><a href="../pipelines/scripts/powershell.md" data-raw-source="[Use a script](../pipelines/scripts/powershell.md)">Use a script</a> to add your team&#39;s business logic to your build process.</p>


<p><b>Build agents and agent pools </b></p>
<p>At least one <a href="../pipelines/agents/agents.md" data-raw-source="[agent](../pipelines/agents/agents.md)">agent</a> is require to build your code. As you scale your system with more code, people, and builds, you&#39;ll need more build agents organized within <a href="../pipelines/agents/pools-queues.md" data-raw-source="[agent pools](../pipelines/agents/pools-queues.md)">agent pools</a>. You can use both on-premises or Microsoft-hosted agent pools.</p>


<p><b>Gated check-in (TFVC, Azure DevOps Services) </b></p>
<p>Use <a href="../pipelines/build/triggers.md#gated" data-raw-source="[gated check-in](../pipelines/build/triggers.md#gated)">gated check-in</a> to protect against breaking changes when checking code into TFVC.  </p>


<p><b>Branch policies (Git)</b></p>
<p>Improve code quality by <a href="../repos/git/branch-policies.md" data-raw-source="[setting branch policies](../repos/git/branch-policies.md)">setting branch policies</a> to ensure build are never broken or getting the right people to review changes. </p>


</td>
<td width="38%">
<p><b>Specify your build steps</b></p>
<p>Add steps to specify what you <a href="../pipelines/tasks/index.md#build" data-raw-source="[want to build](../pipelines/tasks/index.md#build)">want to build</a>, the <a href="../pipelines/tasks/index.md#test" data-raw-source="[tests to run](../pipelines/tasks/index.md#test)">tests to run</a>, and <a href="../pipelines/tasks/index.md" data-raw-source="[all the other steps](../pipelines/tasks/index.md)">all the other steps</a> needed to complete the process.</p>

pipelines\tasks\build\_img
<p><img src="../pipelines/tasks/build/_img/android-build.png" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/gradle.md" data-raw-source="[Build an Android app using Gradle](../pipelines/tasks/build/gradle.md)">Build an Android app using Gradle</a></p>
<p><img src="../pipelines/tasks/build/_img/android-signing.png" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/android-signing.md" data-raw-source="[Sign and align Android APK files](../pipelines/tasks/build/android-signing.md)">Sign and align Android APK files</a></p>
<p><img src="../pipelines/tasks/build/_img/ant.png" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/ant.md" data-raw-source="[Build with Apache Ant](../pipelines/tasks/build/ant.md)">Build with Apache Ant</a> </p>
<p><img src="../pipelines/tasks/build/_img/gradle.png" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/gradle.md" data-raw-source="[Build using a Gradle wrapper script](../pipelines/tasks/build/gradle.md)">Build using a Gradle wrapper script</a>  </p>
<p><img src="../pipelines/tasks/build/_img/grunt.png" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/grunt.md" data-raw-source="[Grunt: The JavaScript Task Runner](../pipelines/tasks/build/grunt.md)">Grunt: The JavaScript Task Runner</a> </p>
<p><img src="https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/Gulp/icon.png?raw=true" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/gulp.md" data-raw-source="[Gulp: Node.js task-based build system](../pipelines/tasks/build/gulp.md)">Gulp: Node.js task-based build system</a></p>
<p><img src="https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/PublishSymbols/icon.png?raw=true" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/index-sources-publish-symbols.md" data-raw-source="[Index source code and publish symbols](../pipelines/tasks/build/index-sources-publish-symbols.md)">Index source code and publish symbols</a></p>
<p><img src="https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/Maven/icon.png?raw=true" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/maven.md" data-raw-source="[Build with Apache Maven](../pipelines/tasks/build/maven.md)">Build with Apache Maven</a></p>
<p><img src="../pipelines/tasks/build/_img/msbuild.png" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/msbuild.md" data-raw-source="[Build with MSbuild](../pipelines/tasks/build/msbuild.md)">Build with MSbuild</a></p>
<p><img src="https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/SonarQubePreBuild/icon.png?raw=true" alt=""/>&#160;&#160;<a href="http://go.microsoft.com/fwlink/?LinkId=620063" data-raw-source="[SonarQube for MSbuild](http://go.microsoft.com/fwlink/?LinkId=620063)">SonarQube for MSbuild</a></p>
<p><img src="../pipelines/tasks/build/_img/visual-studio-build.png" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/visual-studio-build.md" data-raw-source="[Visual Studio and MSbuild](../pipelines/tasks/build/visual-studio-build.md)">Visual Studio and MSbuild</a></p>
<p><img src="../pipelines/tasks/build/_img/xamarin-android.png" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/xamarin-android.md" data-raw-source="[Build an Android app with Xamarin](../pipelines/tasks/build/xamarin-android.md)">Build an Android app with Xamarin</a> </p>
<p><img src="../pipelines/tasks/build/_img/xamarin-ios.png" alt=""/>&#160;&#160;<a href="../pipelines/tasks/build/xamarin-ios.md" data-raw-source="[Build an iOS app with Xamarin on macOS](../pipelines/tasks/build/xamarin-ios.md)">Build an iOS app with Xamarin on macOS</a> </p>


<p><b>Build variables</b></p>
<p>Use <a href="../pipelines/build/variables.md" data-raw-source="[predefined variables](../pipelines/build/variables.md)">predefined variables</a> or add your custom variables when configuring your build definition or your build scripts.</p>


</td>
<td width="30%">


<p><b>Continuous integration builds</b></p>
<p><a href="../pipelines/build/triggers.md#ci" data-raw-source="[Define a CI build](../pipelines/build/triggers.md#ci)">Define a CI build</a> that compiles and tests your solutions whenever your team checks in code.</p>


<p><b>Build summary charts</b></p>
<p>View real-time build status and <a href="../report/add-widget-to-dashboard.md" data-raw-source="[add build summary charts to your dashboards](../report/add-widget-to-dashboard.md)">add build summary charts to your dashboards</a>.  </p>
<img src="_img/features/alm-feature-build-summary-widget.png" alt="build summary chart"/><br/><br/>


<p><b>Code coverage charts </b></p>
<p>From the Code Coverage tab on a Build summary page, you can view percentage of code coverage as well as upload code coverage data in Jacoco or Cobertura formats.</p>


<p><b>Audit changes </b></p>
<p>Determine who <a href="../pipelines/build/history.md" data-raw-source="[changed what in the build definition and when they did it](../pipelines/build/history.md)">changed what in the build definition and when they did it</a>. </p>


<p><b>Build retention policies</b></p>
<p><a href="../pipelines/policies/retention.md" data-raw-source="[Define policies to automatically delete old completed builds ](../pipelines/policies/retention.md)">Define policies to automatically delete old completed builds </a> to minimize clutter.</p>

<p><b>Build permissions</b></p>
<p>Determine who can <a href="../organizations/security/permissions.md#build" data-raw-source="[define, delete, and manage builds](../organizations/security/permissions.md#build)">define, delete, and manage builds</a>.</p>


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
<p>Reduce time-to-market and respond to customer feedback with greater agility by <a href="../pipelines/overview.md" data-raw-source="[automating your release process](../pipelines/overview.md)">automating your release process</a>. Deploy applications across platforms to all environments of the pipeline with just one selection.</p>
<img src="_img/features/alm-feature-release-1.png" alt="Release Manager"/><br/><br />


<p><b>When to use Azure Pipelines or Build &amp; Release in TFS?</b></p>
<p>Evaluate how Azure Pipelines and Build &amp; Release in TFS can help you in <a href="../pipelines/overview.md" data-raw-source="[your development and deployment efforts](../pipelines/overview.md)">your development and deployment efforts</a>.</p>


<p><b>Release definitions</b></p>
<p>Add a release definition by <a href="../pipelines/apps/cd/deploy-webdeploy-webapps.md" data-raw-source="[choosing the build version, target release environments, and tasks](../pipelines/apps/cd/deploy-webdeploy-webapps.md)">choosing the build version, target release environments, and tasks</a>.</p>


<p><b>Release environments</b></p>
<p><a href="../pipelines/process/stages.md" data-raw-source="[Define and clone release environments](../pipelines/process/stages.md)">Define and clone release environments</a>, logical entities that represent where you want to deploy a release, such as a collection of servers, a cloud, multiple clouds, or an app store.</p>


<p><b>Artifacts</b></p>
<p>A release is fundamentally defined by <a href="../pipelines/release/artifacts.md" data-raw-source="[versioned artifacts that make up the release](../pipelines/release/artifacts.md)">versioned artifacts that make up the release</a>. As you deploy the release to various environments, you deploy and validate the same artifacts on all environments. </p>


<p><b>Tasks</b></p>
<p>Automate release deployment by <a href="../pipelines/release/triggers.md#release-triggers" data-raw-source="[defining the events that trigger a release](../pipelines/release/triggers.md#release-triggers)">defining the events that trigger a release</a>.</p>

<p><b>Agents and agent pools</b></p>
<p>Agent pools are the execution containers that specify the security context and runtime environment for the <a href="../pipelines/agents/agents.md" data-raw-source="[agents that run when you deploy a release](../pipelines/agents/agents.md)">agents that run when you deploy a release</a>.</p>

</td>
<td width="33%">
<p><b>Works for any app</b></p>
<p>Deploy <a href="../pipelines/overview.md" data-raw-source="[any type of application across multiple platforms](../pipelines/overview.md)">any type of application across multiple platforms</a> including Windows and Linux, whether on-premises or in the cloud.</p>

<p><b>Approval workflows</b></p>
<p>Streamline your application release workflow by <a href="../pipelines/release/approvals/index.md" data-raw-source="[routing pre- and post-deployment approvals](../pipelines/release/approvals/index.md)">routing pre- and post-deployment approvals</a> to multiple approvers or teams.</p>

<p><b>Release notifications</b></p>
<p>Receive email messages as releases occur. Approvers receive notifications automatically when a release is waiting for approval. </p>

<p><b>Full traceability</b></p>
<p>Monitor the status of your release pipelines and track every deployment in each of the environments. Retain full audit history of all activities performed on a release with detailed release logs and approval tracking.</p>

<p><b>Release logs</b></p>
<p>View or download log files as zip files. Log files contain the status for each step or task of a release, for each of the environments in the release definition. Each completed release--succeeded, failed, or abandoned--<a href="../pipelines/release/define-multistage-release-process.md#monitor-and-track-deployments" data-raw-source="[includes a live log file, details, and history for each step or task](../pipelines/release/define-multistage-release-process.md#monitor-and-track-deployments)">includes a live log file, details, and history for each step or task</a>.</p>

<p><b>Triggers</b></p>
<p>Automate release deployment by <a href="../pipelines/release/triggers.md#release-triggers" data-raw-source="[defining the events that trigger a release](../pipelines/release/triggers.md#release-triggers)">defining the events that trigger a release</a>.</p>

<p><b>Variables</b></p>
<p>Lookup the description for all <a href="../pipelines/process/tasks.md" data-raw-source="[release system, global, and agent variables](../pipelines/process/tasks.md)">release system, global, and agent variables</a>.</p>

</td>
<td width="33%">

<p><b>Release names </b></p>
<p>Specify the <a href="../pipelines/release/index.md#numbering" data-raw-source="[naming and numbering scheme you want used when adding releases](../pipelines/release/index.md#numbering)">naming and numbering scheme you want used when adding releases</a>.</p>

<p><b>Global configuration properties</b></p>
<p>Simplify management of custom values that you use to configure multiple releases by <a href="../pipelines/release/variables.md" data-raw-source="[specifying custom values for any of the tasks in any of the environments of a release definition](../pipelines/release/variables.md)">specifying custom values for any of the tasks in any of the environments of a release definition</a>.</p>

<p><b>View test results</b></p>
<p>Open the <strong>Tests</strong> tab to view a summary of the test results, including pass/fail percentages and run duration. Sort the test results into groups or filter the results to show just passed, failed, or other results.</p>
<img src="_img/features/devops-feature-release-view-tests.png" alt="View test results for a release"/>
<br />

<p><b>Add release summary to dashboard (Azure DevOps Services) </b></p>
<p><a href="../report/dashboards/widget-catalog.md#release-definition-widget" data-raw-source="[Add a release summary chart](../report/dashboards/widget-catalog.md#release-definition-widget)">Add a release summary chart</a> to a team dashboard. </p>

<p><b>Extend and customize</b></p>
<p><a href="../pipelines/release/index.md" data-raw-source="[Create workflows tailored to your process](../pipelines/release/index.md)">Create workflows tailored to your process</a> by customizing our tasks, or extend with your own custom tasks.</p>
<img src="_img/features/alm-feature-release-3.png" alt="Customize release definition process"/><br/><br />

<p><b>Manage permissions</b></p>
<p>Grant or deny permissions to <a href="../pipelines/policies/permissions.md#release-permissions" data-raw-source="[manage release definitions, environments approvers, or release permissions](../pipelines/policies/permissions.md#release-permissions)">manage release definitions, environments approvers, or release permissions</a>. Set permissions for users, groups, or per release definition. </p>

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
<p><a href="../test/index.md" data-raw-source="[Perform exploratory, manual, system, and user acceptance tests for any app, in any language](../test/index.md)">Perform exploratory, manual, system, and user acceptance tests for any app, in any language</a>. Using Visual Studio or 3rd-party test frameworks, you can include automated tests with builds and releases for continuous integration and deployment. </p>

<p><b>Unit testing with Git</b></p>
<p>Create <a href="/visualstudio/test/create-unit-tests-menu" data-raw-source="[unit tests](/visualstudio/test/create-unit-tests-menu)">unit tests</a> and run them frequently to make sure your code is working properly.</p>
<img src="_img/features/alm-feature-test-unittests.png" alt="view tests in test explorer"/><br/><br />

<p><b>Manual test plans and test cases</b></p>
<p>Get started by <a href="../test/create-test-cases.md" data-raw-source="[creating test plans and test cases](../test/create-test-cases.md)">creating test plans and test cases</a> to track manual testing for sprints or milestones.</p>

<p><b>Shared steps and shared parameters</b></p>
<p><a href="https://msdn.microsoft.com/library/dd286655.aspx" data-raw-source="[Create shared steps](https://msdn.microsoft.com/library/dd286655.aspx)">Create shared steps</a> to include often repeated sequence of steps in your manual test cases, such as logging in. Repeat manual tests with different data using <a href="../test/repeat-test-with-different-data.md" data-raw-source="[shared parameters](../test/repeat-test-with-different-data.md)">shared parameters</a>. </p>

</td>
<td width="33%">

<p><b>Coded UI testing</b></p>
<p>Use Visual Studio to create <a href="https://msdn.microsoft.com/library/dd286726.aspx" data-raw-source="[coded UI tests](https://msdn.microsoft.com/library/dd286726.aspx)">coded UI tests</a> to test your application&#39;s user interface.</p>

<p><b>Run test with your builds for continuous integration</b></p>
<p>Use continuous integration builds to <a href="../pipelines/languages/dotnet-core.md#run-your-tests" data-raw-source="[run tests automatically](../pipelines/languages/dotnet-core.md#run-your-tests)">run tests automatically</a>.</p>

<p><b>Review automated test results after a build</b></p>
<p><a href="../pipelines/test/review-continuous-test-results-after-build.md" data-raw-source="[Review your test results](../pipelines/test/review-continuous-test-results-after-build.md)">Review your test results</a> to analyze any problems that were found.</p>

<p><b>Quickly assign configurations to test plan, test suite, or test case  </b></p>
<p>From the context menu of a test plan, test suite, or test case, you can assign a configuration.  </p>
<img src="_img/features/alm-features-test-configuration.png" alt="Assign configuration to test object"/><br/><br/>


</td>
<td width="33%">

<p><b>Exploratory testing</b></p>
<p>Explore user stories without test cases or test steps using [Azure Test Plans and exploratory testing](../test/index.md).</p>
![Exploratory testing](_img/features/features-exploratory-testing.png)  
<br/>
<p>Or, [download and install the Test &amp; Feedback extension](../test/perform-exploratory-tests.md). Capture screenshots, annotate them, and submit bugs while you explore your web app - all directly from your Chrome browser. </p>

<p><b>Record and play back manual tests</b></p>
<p>With Azure Test Plans, you can [record your keystrokes and gestures while you test an application](../test/mtm/record-play-back-manual-tests.md). The next time you run the test, you can play back your actions quickly and accurately.</p>



<p><b>Track test status and test results</b></p>
<p>Quickly <a href="../test/track-test-status.md" data-raw-source="[view the status](../test/track-test-status.md)">view the status</a> of your testing using lightweight charts.</p>
<img src="_img/features/features-test-results.png" alt="Test charts"/><br/><br />


<p><b>Test environments</b></p>
<p><a href="../test/test-different-configurations.md" data-raw-source="[Specify a combination of hardware and software](../test/test-different-configurations.md)">Specify a combination of hardware and software</a> that represents a user or machine environment in which your app runs.</p>

<p><b>Test permissions</b></p>
<p>Set permissions on who can <a href="../organizations/security/set-project-collection-level-permissions.md" data-raw-source="[manage test configurations, test environments, and publish and delete test results](../organizations/security/set-project-collection-level-permissions.md)">manage test configurations, test environments, and publish and delete test results</a>.</p>



</td>
</tr>
</tbody>
</table>

<a id="dashboards"></a>
## Dashboards and reports  

<a id="charts"></a>

### Charts and dashboards

<table>
<tbody>
<tr valign="top">
<td width="33%">

<p><b>Multiple team dashboards</b></p>
<p>Each team can create several <a href="../report/dashboards/dashboards.md" data-raw-source="[team dashboards](../report/dashboards/dashboards.md)">team dashboards</a> to help keep both the team and Stakeholders in sync. Each dashboard tile provides quick access to the progress of builds, status of work items, or latest code changes. </p>
<img src="_img/features/alm-feature-add-a-dashboard.png" alt="Add a dashboard control"/><br/> <br/>


<p><b>Build history charts</b></p>
<p><a href="../report/dashboards/add-charts-to-dashboard.md#build-history" data-raw-source="[Add build history charts to your dashboards](../report/dashboards/add-charts-to-dashboard.md#build-history)">Add build history charts to your dashboards</a>.  </p>
<img src="_img/features/alm-feature-build-summary-widget.png" alt="build summary chart"/><br/> <br/>



<p><b>Test charts</b></p>
<p>Track the status of your <a href="../test/track-test-status.md" data-raw-source="[test progress and test runs](../test/track-test-status.md)">test progress and test runs</a>. Optionally add these charts to a dashboard.  </p>
<img src="_img/features/alm-feature-test-chart.png" alt="Test run chart"/><br/> <br/>

<p><b>Test quality trend charts</b></p>
<p>Add <a href="../report/dashboards/add-charts-to-dashboard.md#test-quality" data-raw-source="[failure and duration charts for tests run as part of your build](../report/dashboards/add-charts-to-dashboard.md#test-quality)">failure and duration charts for tests run as part of your build</a> to your team dashboard. </p>
<img src="_img/features/alm-dashboards-test-quality-failure-duration-charts.png" alt="Test quality failure and duration charts"/><br/> <br/>

</td>
<td width="33%">

<p><b>Restrict or allow team members to manage dashboards (Azure DevOps Services)</b></p>
<p>Set permissions to <a href="../report/dashboards/dashboards.md#manage" data-raw-source="[restrict or allow team members to manage dashboards](../report/dashboards/dashboards.md#manage)">restrict or allow team members to manage dashboards</a>.  </p>


<p><b>Capacity planning and tracking</b></p>
<p>Easily track how much work your team has completed and has left to do in a sprint by adding the <a href="../report/dashboards/widget-catalog.md#sprint-capacity-widget" data-raw-source="[sprint capacity chart widget](../report/dashboards/widget-catalog.md#sprint-capacity-widget)">sprint capacity chart widget</a> to your dashboard.  </p>
<img src="_img/features/alm-feature-capacity-widget.png" alt="Sprint capacity chart"/><br/><br/>


<p><b>Share dashboards with Stakeholders</b></p>
<p>Grant non-licensed users access as Stakeholders (<a href="../organizations/accounts/add-organization-users.md" data-raw-source="[Azure DevOps Services](../organizations/accounts/add-organization-users.md)">Azure DevOps Services</a> | <a href="../organizations/security/change-access-levels.md" data-raw-source="[TFS](../organizations/security/change-access-levels.md)">TFS</a>) so they can view progress, run queries, and contribute ideas.  </p>

<p><b>Velocity charts</b></p>
<p><a href="../report/dashboards/team-velocity.md" data-raw-source="[Team velocity](../report/dashboards/team-velocity.md)">Team velocity</a> tracks the total estimated effort (story points or size) of backlog items (user stories or requirements) completed or still in progress within each sprint. </p>
<img src="_img/features/alm-feature-team-velocity-chart.png" alt="Team velocity chart"/><br/>
<br/>

<p><b>Sprint burndown charts</b></p>
<p>Monitor progress and review team patterns from <a href="../boards/sprints/sprint-burndown.md" data-raw-source="[sprint burndown charts](../boards/sprints/sprint-burndown.md)">sprint burndown charts</a></p>
<img src="_img/features/alm-index-sprint-burndown-widget.png" alt="Sprint burndown chart"/><br/><br/>

<p><b>Add release summary to dashboard (Azure DevOps Services) </b></p>
<p><a href="../report/dashboards/widget-catalog.md#release-definition-widget" data-raw-source="[Add a release summary chart](../report/dashboards/widget-catalog.md#release-definition-widget)">Add a release summary chart</a> to a team dashboard. </p>

</td>
<td width="33%">
<p><b>Edit dashboard mode</b></p>
<p>Add, remove, move, and configure widgets by <a href="../report/dashboards/dashboards.md" data-raw-source="[choosing the Edit dashboard icon](../report/dashboards/dashboards.md)">choosing the Edit dashboard icon</a>. Choose the checkmark icon to exit.  </p>
<img src="../report/dashboards/_img/edit-dashboard-icon.png" alt="Edit dashboard icon"/> | <img src="../report/dashboards/_img/exit-edit-dashboard-mode-icon.png" alt="Exit dashboard edit mode icon"/><br/><br/>

<p><b>Auto-refresh dashboards </b></p>
<p>You can <a href="../report/dashboards/dashboards.md#manage" data-raw-source="[enable auto-refresh for any team dashboard](../report/dashboards/dashboards.md#manage)">enable auto-refresh for any team dashboard</a>, and it automatically updates every five minutes. This is a useful feature for when your dashboard serves as a team wallboard.   </p>


<p><b>Widget catalog</b></p>
<p>Add <a href="../report/dashboards/widget-catalog.md" data-raw-source="[widgets](../report/dashboards/widget-catalog.md)">widgets</a> to your dashboard to provide  information and monitor the data your team needs.</p>
<img src="../report/dashboards/_img/add-widget-icon.png" alt="add a widget icon"/><br/><br/>

<p><b>Work item query charts</b></p>
<p>View the status of work in progress by <a href="../report/dashboards/charts.md" data-raw-source="[charting the results of a flat-list query](../report/dashboards/charts.md)">charting the results of a flat-list query</a>. You can create several types of charts&mdash;such as pie, column, or trend&mdash;for the same query. Optionally add these charts to a dashboard.</p>



<p><b>Drag-n-drop layout</b></p>
<p>Configure the layout to your specifications by <a href="../report/dashboards/dashboards.md" data-raw-source="[dragging tiles into the sequence you want](../report/dashboards/dashboards.md)">dragging tiles into the sequence you want</a>. </p>

<p><b>Cumulative flow diagrams</b></p>
<p>Track the progress of work on your backlogs <a href="../report/dashboards/cumulative-flow.md" data-raw-source="[through the CFD charts](../report/dashboards/cumulative-flow.md)">through the CFD charts</a>.  </p>

<p><b>Power BI dashboards (Azure DevOps Services)</b></p>
<p>You can create dashboards, individual reports, or explore data collected for your Visual Studio Online account once you <a href="../report/powerbi/report-on-vso-with-power-bi-vs.md" data-raw-source="[connect to Power BI](../report/powerbi/report-on-vso-with-power-bi-vs.md)">connect to Power BI</a>. </p>


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
<p>The 3 major building blocks of Power BI are <a href="https://powerbi.microsoft.com/documentation/powerbi-service-basic-concepts/" data-raw-source="[dashboards, reports, and datasets](https://powerbi.microsoft.com/documentation/powerbi-service-basic-concepts/)">dashboards, reports, and datasets</a>. </p>


<p><b>Get started </b></p>
<p>You can <a href="../report/powerbi/report-on-vso-with-power-bi-vs.md" data-raw-source="[create dashboards, individual reports, or explore data](../report/powerbi/report-on-vso-with-power-bi-vs.md)">create dashboards, individual reports, or explore data</a> collected for your organization once you connect to Power BI. </p>




</td>
<td width="50%">

<p><b>Connect to Power BI</b></p>
<p><a href="../report/powerbi/data-connector-connect.md" data-raw-source="[Steps required to authorize Power BI to access your organization](../report/powerbi/data-connector-connect.md)">Steps required to authorize Power BI to access your organization</a>.</p>


<p><b>Available data</b></p>
<p>The <a href="../report/powerbi/data-connector-connect.md" data-raw-source="[Power BI Data Connector](../report/powerbi/data-connector-connect.md)">Power BI Data Connector</a> supports building reports to track status and trend work items.</p>

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
<p>You can <a href="https://msdn.microsoft.com/library/dd380714.aspx" data-raw-source="[analyze the progress and quality of your project by using the out-of-the-box reports in SQL Server Reporting Services](https://msdn.microsoft.com/library/dd380714.aspx)">analyze the progress and quality of your project by using the out-of-the-box reports in SQL Server Reporting Services</a>. These reports aggregate metrics from work items, version control, test results, and builds. They are uploaded when you create a project based on the process - <a href="../boards/work-items/guidance/choose-process.md" data-raw-source="[Agile, Scrum, or CMMI](../boards/work-items/guidance/choose-process.md)">Agile, Scrum, or CMMI</a> - that you choose.   </p>

<p><b>Add Reporting Services reports</b></p>
<p>If you need to add reporting services to a project or on-premises TFS after you&#39;ve created your team projects, you can by <a href="../report/admin/add-reports-to-a-team-project.md" data-raw-source="[adding a report server and uploading reports](../report/admin/add-reports-to-a-team-project.md)">adding a report server and uploading reports</a>.</p>

<p><b>Manage the data warehouse</b></p>
<p>The reporting warehouse is a traditional data warehouse that consists of a <a href="../report/admin/manage-reports-data-warehouse-cube.md" data-raw-source="[relational database and an Analysis Services database](../report/admin/manage-reports-data-warehouse-cube.md)">relational database and an Analysis Services database</a>. You manage it through the following activities:</p>

- <a href="../report/admin/manually-process-data-warehouse-and-cube.md" data-raw-source="[Manually process the data warehouse](../report/admin/manually-process-data-warehouse-and-cube.md)">Manually process the data warehouse</a><br/>- <a href="../report/admin/rebuild-data-warehouse-and-cube.md" data-raw-source="[Rebuild the data warehouse](../report/admin/rebuild-data-warehouse-and-cube.md)">Rebuild the data warehouse</a><br/>- <a href="../report/admin/resolve-schema-conflicts.md" data-raw-source="[Resolve schema conflicts](../report/admin/resolve-schema-conflicts.md)">Resolve schema conflicts</a><br/>- <a href="../report/admin/change-a-process-control-setting.md" data-raw-source="[Change a process control setting](../report/admin/change-a-process-control-setting.md)">Change a process control setting</a><br/><br/>
</td>
<td width="33%">

<p><b>Build reports</b></p>
<p>Build reports track the quality of software under development. By defining tests to run automatically as part of each build definition and instrumenting tests to gather code coverage data, you can gain insight about the quality of the builds, tests, and code.</p>

- <a href="https://msdn.microsoft.com/library/dd380683.aspx" data-raw-source="[Build Quality Indicators](https://msdn.microsoft.com/library/dd380683.aspx)">Build Quality Indicators</a> (Agile &amp; CMMI)<br/>- <a href="https://msdn.microsoft.com/library/dd380643.aspx" data-raw-source="[Build Success Over Time](https://msdn.microsoft.com/library/dd380643.aspx)">Build Success Over Time</a><br/>- <a href="https://msdn.microsoft.com/library/dd380708.aspx" data-raw-source="[Build Summary](https://msdn.microsoft.com/library/dd380708.aspx)">Build Summary</a><br/>
<br/>

<p><b>Test and bug reports</b></p>
<p>Test planning reports support monitoring the test progress and coverage of backlog items or user stories. Bug tracking reports illustrate the team&#39;s capacity to find and resolve bugs.</p>

- <a href="https://msdn.microsoft.com/library/dd380713.aspx" data-raw-source="[Test Case Readiness](https://msdn.microsoft.com/library/dd380713.aspx)">Test Case Readiness</a><br/>- <a href="https://msdn.microsoft.com/library/dd380702.aspx" data-raw-source="[Test Plan Progress](https://msdn.microsoft.com/library/dd380702.aspx)">Test Plan Progress</a><br/>- <a href="https://msdn.microsoft.com/library/dd380736.aspx" data-raw-source="[Bug Status](https://msdn.microsoft.com/library/dd380736.aspx)">Bug Status</a> (Agile &amp; CMMI)<br/>- <a href="https://msdn.microsoft.com/library/dd380674.aspx" data-raw-source="[Bug Trends](https://msdn.microsoft.com/library/dd380674.aspx)">Bug Trends</a> (Agile &amp; CMMI)<br/>- <a href="https://msdn.microsoft.com/library/dd380731.aspx" data-raw-source="[Reactivations](https://msdn.microsoft.com/library/dd380731.aspx)">Reactivations</a> (Agile &amp; CMMI)<br/>
<br/>

<p><b>Required team activities to generate useful reports</b></p>
<p>To gain useful, actionable information from your reports, <a href="../report/admin/review-team-activities-for-useful-reports.md" data-raw-source="[team members must perform certain activities](../report/admin/review-team-activities-for-useful-reports.md)">team members must perform certain activities</a>. </p>


</td>
<td width="33%">

<p><b>Project management </b></p>
<p>Project management reports provide insight into how much work the team is tackling within a sprint or release, and the rate of their progress. By linking work items and updating specific fields as work is performed, you can track the progress of individual stories and be able to more accurately estimate future activities. </p>

<p><em>Scrum reports</em></p>
- <a href="https://msdn.microsoft.com/library/dn641200.aspx">Backlog Overview</a><br/>- <a href="https://msdn.microsoft.com/library/ff731579.aspx">Release Burndown</a><br/>- <a href="https://msdn.microsoft.com/library/ff731588.aspx">Sprint Burndown</a><br/>- <a href="https://msdn.microsoft.com/library/ff731575.aspx">Velocity</a><br/><br/>
<p><em>Agile and CMMI</em></p>

- <a href="https://msdn.microsoft.com/library/dd380678.aspx">Burndown and Burn Rate</a><br/>- <a href="https://msdn.microsoft.com/library/dd380673.aspx">Remaining Work</a><br/>- <a href="https://msdn.microsoft.com/library/ee461517.aspx">Requirements Overview</a> (CMMI)<br/>- <a href="https://msdn.microsoft.com/library/ee461582.aspx">Requirements Progress</a> (CMMI)<br/>- <a href="https://msdn.microsoft.com/library/dd380706.aspx">Status of All Iterations</a> (similar to Velocity)<br/>- <a href="https://msdn.microsoft.com/library/dd380641.aspx">Stories Overview</a>   (Agile)<br/>- <a href="https://msdn.microsoft.com/library/dd380641.aspx">Stories Progress</a> (Agile)<br/>- <a href="https://msdn.microsoft.com/library/ee707132.aspx">Unplanned Work</a><br/>
<br/>

<p><b>Set permissions to view or create reports</b></p>
<p>Enable members of your team to <a href="../report/admin/grant-permissions-to-reports.md" data-raw-source="[view or manage Reporting Services reports](../report/admin/grant-permissions-to-reports.md)">view or manage Reporting Services reports</a>. To create or modify reports, you need to grant them access to read databases. </p>




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
<p>You build your dashboards by adding information tiles or widgets. The <a href="../report/dashboards/widget-catalog.md" data-raw-source="[widget catalog](../report/dashboards/widget-catalog.md)">widget catalog</a> provides a number of predefined widgets.</p>

<p><b>Drag-and-drop widgets</b></p>
<p>Drag widgets, tiles, or charts anywhere on a dashboard to <a href="../report/dashboards/dashboards.md" data-raw-source="[configure the layout you want](../report/dashboards/dashboards.md)">configure the layout you want</a>. </p>

<h4><i>Informational content and other links</i></h4>


<p><b>Markdown widget</b></p>
<p>Adds a configurable tile to your dashboard to <a href="../report/dashboards/widget-catalog.md#markdown-widget" data-raw-source="[display any type of information, guidance, or links](../report/dashboards/widget-catalog.md#markdown-widget)">display any type of information, guidance, or links</a> that you want using markdown syntax.   </p>
<img src="_img/features/alm-feature-markdown-widget.png" alt="Markdown widget"/><br/><br/>


<p><b>Team member </b></p>
<p>Opens the team&#39;s quick dialog to <a href="../report/dashboards/widget-catalog.md#team-members-widget" data-raw-source="[add or remove team members](../report/dashboards/widget-catalog.md#team-members-widget)">add or remove team members</a>.</p>
<img src="_img/features/alm-feature-manage-members-widget.png" alt="Team member widget"/><br/>
<p><b>Team rooms </b></p>
<p>Provides <a href="../report/dashboards/widget-catalog.md#team-room-widget" data-raw-source="[status and access to a team room](../report/dashboards/widget-catalog.md#team-room-widget)">status and access to a team room</a>, an archived space to discuss work in progress, ask questions, share status, and clarify issues that arise.  </p>

<p><b>Visual Studio widget</b></p>
<p><a href="../report/dashboards/widget-catalog.md#visual-studio-widget" data-raw-source="[Provides links to open or download Visual Studio](../report/dashboards/widget-catalog.md#visual-studio-widget)">Provides links to open or download Visual Studio</a>. The Visual Studio IDE client comes with the Team Explorer plug-in which provides quick access to several features (some of which aren&#39;t available through the web portal). </p>


<p><b>Welcome widget</b></p>
<p>Provides quick access to <a href="../report/dashboards/widget-catalog.md#how-to-widget" data-raw-source="[getting started info on how to track work, code, build, and test](../report/dashboards/widget-catalog.md#how-to-widget)">getting started info on how to track work, code, build, and test</a>. </p>
<img src="../report/dashboards/_img/widget-how-to.png" alt="How to links widget"/><br/><br/>

<h4><i>Code widgets</i></h4>

<p><b>Code tile </b></p>
<p>Configurable tile to display <a href="../report/dashboards/widget-catalog.md#code-tile-widget" data-raw-source="[status and links to a Git or TFVC code repository, branch, or folder](../report/dashboards/widget-catalog.md#code-tile-widget)">status and links to a Git or TFVC code repository, branch, or folder</a>.
 </p>

<p><b>Pull request </b></p>
<p>Adds a configurable tile to display <a href="../report/dashboards/widget-catalog.md#pull-request-widget" data-raw-source="[active pull requests requested by the team, or assigned to or requested by the person logged in](../report/dashboards/widget-catalog.md#pull-request-widget)">active pull requests requested by the team, or assigned to or requested by the person logged in</a>. You select the Git repository for the pull requests of interest.  </p>
<img src="_img/features/feature-widget-pull-request.png" alt="Pull request widget"/>


</td>
<td width="33%">


<h4><i>Plan and track work</i></h4>


<p><b>Assigned to me widget  </b></p>
<p>Provides quick access to <a href="../report/dashboards/widget-catalog.md#assigned-to-me-widget" data-raw-source="[work items assigned to the logged in user](../report/dashboards/widget-catalog.md#assigned-to-me-widget)">work items assigned to the logged in user</a>. </p>


<p><b>Chart for work items</b></p>
<p>Adds a configurable tile to display the <a href="../report/dashboards/widget-catalog.md#chart-wit-widget" data-raw-source="[chart for a shared query](../report/dashboards/widget-catalog.md#chart-wit-widget)">chart for a shared query</a>.  </p>
<img src="_img/features/alm-feature-chart-work.png" alt="Chart work widget"/><br/><br/>

<p><b>New work item </b></p>
<p><a href="../report/dashboards/widget-catalog.md#new-work-item-widget" data-raw-source="[Add work items](../report/dashboards/widget-catalog.md#new-work-item-widget)">Add work items</a> pre-scoped to your team&#39;s default area and iteration paths.</p>
<img src="_img/features/alm-feature-new-work-item-widget.png" alt="Add new work item widget"/><br/><br/>


<p><b>Other links widget</b></p>
<p>Provides quick access links from a team dashboard to <a href="../report/dashboards/widget-catalog.md#other-links-widget" data-raw-source="[request feedback, define sprints, and modify your team&#39;s area paths](../report/dashboards/widget-catalog.md#other-links-widget)">request feedback, define sprints, and modify your team&#39;s area paths</a>.</p>
<img src="_img/features/alm-feature-widget-other-links.png" alt="Request feedback"/><br/><br/>

<p><b>Query tile </b></p>
<p>Configurable tile to display the <a href="../report/dashboards/widget-catalog.md#query-tile-widget" data-raw-source="[results and link to a shared query](../report/dashboards/widget-catalog.md#query-tile-widget)">results and link to a shared query</a>. </p>
<img src="_img/features/alm-feature-widget-query-tile.png" alt="Query tile widget"/><br/><br/>

<p><b>Query results </b></p>
<p>Adds a configurable <a href="../report/dashboards/widget-catalog.md#query-results-widget" data-raw-source="[query results list](../report/dashboards/widget-catalog.md#query-results-widget)">query results list</a> to a team dashboard. </p>

<p><b>Requirements quality </b></p>
<p>Displays a configurable widget that you can use to <a href="../report/dashboards/widget-catalog.md#requirements-quality-widget" data-raw-source="[track quality continuously from a build or release definition](../report/dashboards/widget-catalog.md#requirements-quality-widget)">track quality continuously from a build or release definition</a>.</p>

</td>
<td width="33%">


<h4><i>Plan and track work (continued)</i></h4>

<!---
<p><b>Cumulative flow diagram (Azure DevOps Services)  </b></p>
<p>Configurable tile to display the [cumulative flow for a product or portfolio backlog](../report/dashboards/cumulative-flow.md).
</p>
-->

<p><b>Sprint burndown </b></p>
<p>Adds <a href="../report/dashboards/widget-catalog.md#sprint-burndown-widget" data-raw-source="[a burndown chart](../report/dashboards/widget-catalog.md#sprint-burndown-widget)">a burndown chart</a> for tracking a team&#39;s Scrum progress for the current sprint. </p>


<p><b>Sprint capacity </b></p>
<p>Adds <a href="../report/dashboards/widget-catalog.md#sprint-capacity-widget" data-raw-source="[a chart for tracking remaining capacity](../report/dashboards/widget-catalog.md#sprint-capacity-widget)">a chart for tracking remaining capacity</a> when tracking a team&#39;s Scrum progress for the current sprint. </p>
<img src="_img/features/alm-feature-capacity-widget.png" alt="Sprint capacity chart"/><br/><br/>

<p><b>Sprint overview </b></p>
<p>Displays a visual overview of the <a href="../report/dashboards/widget-catalog.md#sprint-overview-widget" data-raw-source="[current sprint progress](../report/dashboards/widget-catalog.md#sprint-overview-widget)">current sprint progress</a> for tracking a team&#39;s Scrum progress for the current sprint, indicating the number of backlog items in progress, completed, or not started.</p>

<p><b>Work links </b></p>
<p>Provides quick access links from a team dashboard to open the <a href="../report/dashboards/widget-catalog.md#work-links-widget" data-raw-source="[team backlog, Kanban board, task board, and queries](../report/dashboards/widget-catalog.md#work-links-widget)">team backlog, Kanban board, task board, and queries</a>.   </p>


<h4><i>Build and test widgets</i></h4>

<p><b>Chart for build history </b></p>
<p>Configurable tile to display the <a href="../report/dashboards/widget-catalog.md#build-history-widget" data-raw-source="[histogram for a specific build definition](../report/dashboards/widget-catalog.md#build-history-widget)">histogram for a specific build definition</a>.
 </p>

<p><b>Deployment status (Azure DevOps Services)</b></p>
<p>Configurable tile that shows you a consolidated view of the <a href="../report/dashboards/widget-catalog.md#deployment-status-widget" data-raw-source="[deployment status and test pass rate across multiple environments for a recent set of builds](../report/dashboards/widget-catalog.md#deployment-status-widget)">deployment status and test pass rate across multiple environments for a recent set of builds</a>.<br/> </p>

<p><b>Release definition overview</b></p>
<p>Configurable tile to view and track the status of a release definition. The widget <a href="../report/dashboards/widget-catalog.md#release-definition-widget" data-raw-source="[shows the release as a series of environments, with the name of the release and the date or time it was started](../report/dashboards/widget-catalog.md#release-definition-widget)">shows the release as a series of environments, with the name of the release and the date or time it was started</a>.
 </p>

<p><b>Test trend results </b></p>
<p>Provides <a href="../report/dashboards/widget-catalog.md#test-results-widget" data-raw-source="[trend of test results](../report/dashboards/widget-catalog.md#test-results-widget)">trend of test results</a>, such as passed or failed tests, for a selected build definition.</p>
<img src="../report/dashboards/_img/widgets-test-trend-results.png" alt="Test results trend widget"/>
<br/>


<h4><i>Extensibility</i></h4>

<p><b>Marketplace widgets</b></p>
<p>You can find additional widgets by browsing the <a href="https://marketplace.visualstudio.com/search?term=webpage%20widget&amp;target=vsts&amp;sortby=relevance." data-raw-source="[Marketplace](https://marketplace.visualstudio.com/search?term=webpage%20widget&amp;target=vsts&amp;sortby=relevance.)">Marketplace</a></p>


<p><b>Dashboard widget SDK  </b></p>
<p><a href="../extend/develop/add-dashboard-widget.md" data-raw-source="[Create a dashboard widget](../extend/develop/add-dashboard-widget.md)">Create a dashboard widget</a> using the REST API service. </p>

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
<p>From the <a href="https://marketplace.visualstudio.com/" data-raw-source="[Marketplace](https://marketplace.visualstudio.com/)">Marketplace</a>, you can extend the functionality available to you by installing free extensions or purchasing a subscription or paid extension. Extensions support adding new capabilities to Visual Studio, Visual Studio Code, Azure DevOps Services, or TFS.  </p>

![Featured extensions for Azure DevOps Services](_img/features/featured-extensions.png)

</td>
<td width="45%">


<p><b>Subscriptions</b></p>
<p><a href="https://visualstudio.microsoft.com/products/how-to-buy-vs" data-raw-source="[Visual Studio subscriptions](https://visualstudio.microsoft.com/products/how-to-buy-vs)">Visual Studio subscriptions</a> are a way for you to get the Visual Studio IDE, team collaboration benefits like Azure DevOps Services and TFS, and subscriber benefits like dev/test use of Windows, Windows Server, and SQL Server. </p>

<p><b>Extensions</b></p>
<p>You can <a href="../marketplace/get-vsts-extensions.md" data-raw-source="[get and quickly install extensions](../marketplace/get-vsts-extensions.md)">get and quickly install extensions</a> to add functionality to Visual Studio, Visual Studio Code, or Azure DevOps Services.</p>

<p><b>Try Azure Test Plans for free</b></p>
<p>You can <a href="../billing/try-additional-features-vs.md" data-raw-source="[Try Azure Test Plans for free](../billing/try-additional-features-vs.md)">start a trial for Azure Test Plans for free</a>.</p>


<p><b>Get extensions for...</b></p>
<ul>
<li><a href="https://marketplace.visualstudio.com/#vsts" data-raw-source="[Azure DevOps Services](https://marketplace.visualstudio.com/#vsts)">Azure DevOps Services</a></li>
<li><a href="https://marketplace.visualstudio.com/#vs" data-raw-source="[Visual Studio](https://marketplace.visualstudio.com/#vs)">Visual Studio</a></li>
<li><a href="https://marketplace.visualstudio.com/#vscode" data-raw-source="[Visual Studio Code](https://marketplace.visualstudio.com/#vscode)">Visual Studio Code</a></li>
</ul>
<br/>

<p><b>Get cloud subscriptions</b></p>
<p>Buy <a href="https://marketplace.visualstudio.com/#VSSubscriptions" data-raw-source="[cloud subscriptions](https://marketplace.visualstudio.com/#VSSubscriptions)">cloud subscriptions</a> in the Marketplace.</p>

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
<p>Learn the basic patterns for <a href="../integrate/get-started/rest/basics.md" data-raw-source="[using the REST APIs](../integrate/get-started/rest/basics.md)">using the REST APIs</a> for Azure DevOps Services and TFS.</p>

<p><b>Authorization</b></p>
<p>Get authorization from your customers to access Azure DevOps Services resources using <a href="../integrate/get-started/Authentication/oauth.md" data-raw-source="[OAuth 2.0](../integrate/get-started/Authentication/oauth.md)">OAuth 2.0</a>.</p>

<p><b>REST API reference</b></p>
<p>Use the <a href="../integrate/index.md" data-raw-source="[REST APIs](../integrate/index.md)">REST APIs</a> to work with Azure DevOps Services and TFS resources.</p>

</td>
<td width="33%">

<p><b>.NET client libraries</b></p>
<p>For .NET developers building Windows apps and services that integrate with Visual Studio Online,
<a href="../integrate/get-started/client-libraries/dotnet.md" data-raw-source="[client libraries](../integrate/get-started/client-libraries/dotnet.md)">client libraries</a> are available
for integrating with work item tracking, version control, build, and other services are now available.
These packages replace the traditional TFS Client OM installer and make it easy to acquire and redistribute
the libraries needed by your app or service.</p>

</td>
<td width="33%">

<p><b>REST API samples</b></p>
<p>Here are a number of <a href="https://github.com/Microsoft/vso-extension-samples" data-raw-source="[samples](https://github.com/Microsoft/vso-extension-samples)">samples</a> that work with the REST APIs directly.</p>

<p><b>C# client library samples</b></p>
<p>Here are a few quick <a href="../integrate/get-started/client-libraries/samples.md" data-raw-source="[samples](../integrate/get-started/client-libraries/samples.md)">samples</a> to help you get started with the client libraries.</p>


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
<p><a href="../service-hooks/overview.md" data-raw-source="[Service hooks](../service-hooks/overview.md)">Service hooks</a> enable you to perform tasks on other services
when events happen in your Visual Studio Online projects</p>

<p><b>Create integrations</b></p>
<p>Integrate other services like <a href="../service-hooks/services/hipchat.md" data-raw-source="[HipChat](../service-hooks/services/hipchat.md)">HipChat</a>,
<a href="../service-hooks/services/slack.md" data-raw-source="[Slack](../service-hooks/services/slack.md)">Slack</a>,
and <a href="../service-hooks/services/uservoice.md" data-raw-source="[UserVoice](../service-hooks/services/uservoice.md)">UserVoice</a> with Azure DevOps
using <a href="../service-hooks/overview.md" data-raw-source="[service hooks](../service-hooks/overview.md)">service hooks</a>.</p>


</td>

<td width="33%">

![service hooks](_img/features/alm-feature-service-hooks.png)

</td>
<td width="33%">

<p><b>Authorize</b></p>
<p><a href="../service-hooks/authorize.md" data-raw-source="[Authorize](../service-hooks/authorize.md)">Authorize</a> other services to access your organization using the industry standard OAuth 2.0.
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
<p><p>Choose your name to access <a href="../organizations/settings/set-your-preferences.md" data-raw-source="[your profile settings](../organizations/settings/set-your-preferences.md)">your profile settings</a> and set your web portal preferences which include language (currently only English is supported for Azure DevOps), date and time pattern, and time zone.</p>
<img src="_img/features/features-global-profile.png" alt="Profile drop down menu"/><br/><br/>


<p><b>Language Interface Packs (LIPs)</b></p>
<p>By using a <a href="https://msdn.microsoft.com/library/ms246590.aspx" data-raw-source="[Windows Language Interface Pack (LIP)](https://msdn.microsoft.com/library/ms246590.aspx)">Windows Language Interface Pack (LIP)</a>, you can install a language version of Windows, and then install various User Interface Language Packs. Language packs switch your English Visual Studio Professional user interface into any of these languages and have a majority of the user interface localized. </p>

</td>
<td width="33%">

<p><b>Localized content</b></p>
<p>Most content that supports Azure DevOps Services and TFS is localized into the following 14 languages.</p>


<ul>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[English](https://msdn.microsoft.com/library/fda2bad5.aspx)">English</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[Brazilian Portuguese](https://msdn.microsoft.com/library/fda2bad5.aspx)">Brazilian Portuguese</a></li>
<li><a href="https://msdn.microsoft.com/v/library/fda2bad5.aspx" data-raw-source="[Chinese Simplified](https://msdn.microsoft.com/v/library/fda2bad5.aspx)">Chinese Simplified</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[Chinese Traditional](https://msdn.microsoft.com/library/fda2bad5.aspx)">Chinese Traditional</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[Czech](https://msdn.microsoft.com/library/fda2bad5.aspx)">Czech</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[German](https://msdn.microsoft.com/library/fda2bad5.aspx)">German</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[French](https://msdn.microsoft.com/library/fda2bad5.aspx)">French</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[Italian](https://msdn.microsoft.com/library/fda2bad5.aspx)">Italian</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[Japanese](https://msdn.microsoft.com/library/fda2bad5.aspx)">Japanese</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[Korean](https://msdn.microsoft.com/library/fda2bad5.aspx)">Korean</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[Polish](https://msdn.microsoft.com/library/fda2bad5.aspx)">Polish</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[Russian](https://msdn.microsoft.com/library/fda2bad5.aspx)">Russian</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[Spanish](https://msdn.microsoft.com/library/fda2bad5.aspx)">Spanish</a></li>
<li><a href="https://msdn.microsoft.com/library/fda2bad5.aspx" data-raw-source="[Turkish](https://msdn.microsoft.com/library/fda2bad5.aspx)">Turkish</a></li>
</ul>

<br/>
<blockquote>Currently, the visualstudio.com content is only available in English.</blockquote>

</td>
<td width="33%">

<p><b>Visual Studio language pack</b></p>
<p>Install the <a href="http://www.microsoft.com/download/details.aspx?id=48157" data-raw-source="[language pack](http://www.microsoft.com/download/details.aspx?id=48157)">language pack</a> to <a href="https://msdn.microsoft.com/library/ms246590.aspx" data-raw-source="[switch the UI display to different languages](https://msdn.microsoft.com/library/ms246590.aspx)">switch the UI display to different languages</a>.  Visual Studio provides localized UI support for these 14 languages.</p>
<ul>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">English</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Brazilian Portuguese</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Chinese Simplified</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Chinese Traditional</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Czech</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">German</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">French</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Italian</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Japanese</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Korean</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Polish</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Russian</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Spanish</a></li>
<li><a href="https://msdn.microsoft.com/library/dd831853.aspx">Turkish</a></li>
</ul>
<br/>

<p><b>Eclipse plug-in language support </b></p>
<p><a href="https://visualstudio.microsoft.com/downloads/download-visual-studio-vs#d-team-explorer-everywhere" data-raw-source="[Install Team Explorer Everywhere](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs#d-team-explorer-everywhere)">Install Team Explorer Everywhere</a>, which includes language support for English, French, German, Japanese, and Simplified Chinese.   </p>

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
<p>Application Insights, an extensible analytics service that monitors your live web application, supports developers to continuously improve the performance and usability of apps. With it you can <a href="https://azure.microsoft.com/documentation/articles/app-insights-overview/" data-raw-source="[detect and diagnose performance issues, and understand what users actually do with your app](https://azure.microsoft.com/documentation/articles/app-insights-overview/)">detect and diagnose performance issues, and understand what users actually do with your app</a>. </p>


<p><b>Web site availability monitoring </b></p>
<p>Know when your site or service goes down by <a href="https://azure.microsoft.com/documentation/articles/app-insights-monitor-web-app-availability/" data-raw-source="[setting up tests and performance thresholds to monitor both uptime and responsiveness](https://azure.microsoft.com/documentation/articles/app-insights-monitor-web-app-availability/)">setting up tests and performance thresholds to monitor both uptime and responsiveness</a>. </p>

<p><b>Web site performance &amp; usage </b></p>
<p>Open the Performance blade to see <a href="https://azure.microsoft.com/documentation/articles/app-insights-monitor-performance-live-website-now/#view-performance-telemetry" data-raw-source="[request, response time, dependency and other data](https://azure.microsoft.com/documentation/articles/app-insights-monitor-performance-live-website-now/#view-performance-telemetry)">request, response time, dependency and other data</a>.</p>


<p><b>Power BI integration</b></p>
<p><a href="https://azure.microsoft.com/blog/application-insights-content-pack-for-power-bi/" data-raw-source="[Get even more flexible views of your telemetry](https://azure.microsoft.com/blog/application-insights-content-pack-for-power-bi/)">Get even more flexible views of your telemetry</a>, and present your web app telemetry alongside data from devices and other business sources.</p>


</td>
<td width="33%">

<p><b>Dashboard</b></p>
<p>Get the full picture with <a href="/azure/application-insights/app-insights-overview" data-raw-source="[customizable dashboards that track application health alongside usage metrics and app crashes](/azure/application-insights/app-insights-overview)">customizable dashboards that track application health alongside usage metrics and app crashes</a>. Within the dashboard, you can filter, search, and drill down to an event instance for more detail or to segment data.</p>
<img src="_img/features/features-app-insights-dashboard-blades.png" alt="Application insight dashboard blades"/><br/><br/>




<p><b>Diagnose failures and exceptions</b></p>
<p>Quickly diagnose causes and <a href="https://azure.microsoft.com/documentation/articles/app-insights-asp-net-exceptions/" data-raw-source="[correlate failed requests with exceptions and other events at both the client and server](https://azure.microsoft.com/documentation/articles/app-insights-asp-net-exceptions/)">correlate failed requests with exceptions and other events at both the client and server</a>.</p>
</td>
<td width="33%">


<p><b>Usage analysis</b></p>
<p>Gain a clear view of <a href="https://azure.microsoft.com/documentation/articles/app-insights-overview-usage/" data-raw-source="[where your users are coming from and how they use your app ](https://azure.microsoft.com/documentation/articles/app-insights-overview-usage/)">where your users are coming from and how they use your app </a>. Add custom instrumentation to determine usage patterns and next version investment areas.  </p>

<p><b>Diagnose dependency issues</b></p>
<p>See how long your application <a href="https://azure.microsoft.com/documentation/articles/app-insights-dependencies/" data-raw-source="[waits for dependencies and how often a dependency call fails](https://azure.microsoft.com/documentation/articles/app-insights-dependencies/)">waits for dependencies and how often a dependency call fails</a>. Dependencies are external components that your app calls such as an HTTP service, database, or file system. </p>


<p><b>Custom data collectors </b></p>
<p>Add custom data collectors to your app using the <a href="https://azure.microsoft.com/documentation/articles/app-insights-api-custom-events-metrics/" data-raw-source="[Application Insights API to customize your telemetry data](https://azure.microsoft.com/documentation/articles/app-insights-api-custom-events-metrics/)">Application Insights API to customize your telemetry data</a>.   </p>


<p><b>Continuous data export</b></p>
<p>Perform custom analysis on your telemetry through <a href="https://azure.microsoft.com/documentation/articles/app-insights-export-telemetry/" data-raw-source="[continuous export of your data](https://azure.microsoft.com/documentation/articles/app-insights-export-telemetry/)">continuous export of your data</a>. </p>



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
<p>Distribute mobile apps for testing, collect user metrics and feedback, and respond to crashes more easily by <a href="https://visualstudio.microsoft.com/app-center/" data-raw-source="[adding HockeyApp to your Agile, continuous integration, and continuous delivery workflows](https://visualstudio.microsoft.com/app-center/)">adding HockeyApp to your Agile, continuous integration, and continuous delivery workflows</a>. </p>

<p><b>Simplified distribution </b></p>
<p><a href="http://support.hockeyapp.net/kb/app-management-2/how-to-organize-development-and-production-apps-for-distribution" data-raw-source="[Manage distribution of development and production versions of your apps](http://support.hockeyapp.net/kb/app-management-2/how-to-organize-development-and-production-apps-for-distribution)">Manage distribution of development and production versions of your apps</a> and use independent bundle identifiers that can run in parallel on the same device.</p>


<p><b>Integrate with Azure DevOps Services and TFS</b></p>
<p><a href="https://visualstudio.microsoft.com/app-center/" data-raw-source="[Integrate HockeyApp directly in Azure DevOps Services or TFS](https://visualstudio.microsoft.com/app-center/)">Integrate HockeyApp directly in Azure DevOps Services or TFS</a> to upload your Android, iOS, or Windows builds. </p>



</td>
<td width="33%">


<p><b>Comprehensive dashboard </b></p>
<p>Manage all your apps, users, and devices from a single dashboard. Monitor crashes and feedback as well. As an admin, you&#39;ll have full control over which user can see and install which app. </p>

![Hockeyapp dashboard](_img/features/features-hockeyapp-dashboard.png)  
<br/>




</td>
<td width="33%">

<p><b>Invite or recruit testers</b></p>
<p><a href="http://support.hockeyapp.net/kb/app-management-2/how-to-invite-beta-testers" data-raw-source="[Invite beta testers and distribute your beta versions](http://support.hockeyapp.net/kb/app-management-2/how-to-invite-beta-testers)">Invite beta testers and distribute your beta versions</a> through the dashboard.</p>


<p><b>Usage</b></p>
<p><a href="http://support.hockeyapp.net/kb/third-party-bug-trackers-services-and-webhooks/how-to-use-hockeyapp-with-status-board" data-raw-source="[Get advanced metrics](http://support.hockeyapp.net/kb/third-party-bug-trackers-services-and-webhooks/how-to-use-hockeyapp-with-status-board)">Get advanced metrics</a> to understand the testing performed on your app. See which devices were tested, which testers used the app for how long, and which language was tested. </p>

<p><b>Crash reports</b></p>
<p>Get the information you need to analyze and respond to crashes by getting <a href="http://support.hockeyapp.net/kb/app-management-2/what-data-is-collected-with-crash-reports" data-raw-source="[symbolicated stack traces and environment details](http://support.hockeyapp.net/kb/app-management-2/what-data-is-collected-with-crash-reports)">symbolicated stack traces and environment details</a>.
 </p>


<p><b>Webhooks</b></p>
<p>Use webhooks to <a href="http://support.hockeyapp.net/kb/third-party-bug-trackers-services-and-webhooks/how-to-use-hockeyapp-webhooks" data-raw-source="[receive notifications about new versions, crash groups, and feedback](http://support.hockeyapp.net/kb/third-party-bug-trackers-services-and-webhooks/how-to-use-hockeyapp-webhooks)">receive notifications about new versions, crash groups, and feedback</a>. </p>


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
<p>Each hub&mdash;<a href="../project/navigation/index.md" data-raw-source="[Home, Code, Work, build, and Test](../project/navigation/index.md)">Home, Code, Work, build, and Test</a>&mdash;supports specialized functions to share information, view and create dashboards, collaborate on code, plan and track work, build and test your applications, plus much, much more.</p>
<img src="_img/features/alm-feature-op-hubs-2.png" alt="Operational hubs"/><br/><br/>

<p><b>Project page </b></p>
<p>To view and quickly navigate to teams, team projects, branches, work items, pull requests and other objects that are relevant to you, use your <a href="../project/navigation/work-across-projects.md" data-raw-source="[Project page](../project/navigation/work-across-projects.md)">Project page</a>. </p>

<p><b>Your profile and preferences</b></p>
<p>Choose your name to access <a href="../organizations/settings/set-your-preferences.md" data-raw-source="[your profile settings](../organizations/settings/set-your-preferences.md)">your profile settings</a>, set preferences, <a href="../repos/git/command-prompt.md#pat" data-raw-source="[create personal access tokens (Azure DevOps Services)](../repos/git/command-prompt.md#pat)">create personal access tokens (Azure DevOps Services)</a>, <a href="../boards/queries/alerts-and-notifications.md" data-raw-source="[set alerts](../boards/queries/alerts-and-notifications.md)">set alerts</a>, and log-in or out.</p>
<img src="_img/features/alm-index-my-profile-menu.png" alt="Profile drop down menu"/><br/><br/>

<p><b>Switch team context</b></p>
<p>Navigate to a different team or project from the top row.</p>
<img src="_img/features/alm-feature-switch-team-context.png" alt="Switch team context"/><br/><br/>


<p><b>Change team settings</b></p>
<p>Customize features to meet your team needs by <a href="../organizations/settings/manage-teams.md" data-raw-source="[configuring your team assets](../organizations/settings/manage-teams.md)">configuring your team assets</a>.</p>
<img src="_img/features/alm-feature-team-settings-gear-icon.png" alt="Switch team context"/><br/><br/>


<p><b>Keyboard shortcuts</b></p>
<p>Increase your productivity by working with <a href="../project/navigation/keyboard-shortcuts.md" data-raw-source="[hot keys and shortcuts](../project/navigation/keyboard-shortcuts.md)">hot keys and shortcuts</a>.</p>

</td>
<td width="33%">


<p><b>Home</b></p>
<p>Provide team guidance through <a href="../project/wiki/markdown-guidance.md" data-raw-source="[Welcome](../project/wiki/markdown-guidance.md)">Welcome</a> (Markdown format) pages and add team <a href="../report/dashboards/dashboards.md" data-raw-source="[dashboards](../report/dashboards/dashboards.md)">dashboards</a> to monitor progress and trends. </p>

<p><b>Code</b></p>
<p>Manage source code using distributed <a href="../repos/git/index.md" data-raw-source="[Git repositories](../repos/git/index.md)">Git repositories</a> or <a href="../repos/tfvc/index.md" data-raw-source="[Team Foundation version control](../repos/tfvc/index.md)">Team Foundation version control</a>.  to </p>

<p><b>Work</b></p>
<p>Plan and track work by <a href="../boards/backlogs/create-your-backlog.md" data-raw-source="[creating a product backlog](../boards/backlogs/create-your-backlog.md)">creating a product backlog</a>, and managing work using <a href="../boards/boards/kanban-basics.md" data-raw-source="[Kanban](../boards/boards/kanban-basics.md)">Kanban</a> or <a href="../boards/sprints/assign-work-sprint.md" data-raw-source="[Scrum](../boards/sprints/assign-work-sprint.md)">Scrum</a> processes. Find work items you want to review or update by <a href="../boards/queries/using-queries.md" data-raw-source="[creating queries](../boards/queries/using-queries.md)">creating queries</a>, or visualize progress by <a href="../report/dashboards/charts.md" data-raw-source="[creating query-based charts](../report/dashboards/charts.md)">creating query-based charts</a>  </p>

<p><b>Build</b></p>
<p><a href="../pipelines/overview.md" data-raw-source="[Define and monitor builds](../pipelines/overview.md)">Define and monitor builds</a> and set up continuous builds to improve the quality of your app. </p>


<p><b>Test</b></p>
<p><a href="../test/create-a-test-plan.md" data-raw-source="[Create and run manual tests](../test/create-a-test-plan.md)">Create and run manual tests</a> for your app.</p>

<p><b>Package (Azure DevOps Services, Preview)</b></p>
<p>Share code as binary assets and control dependencies by <a href="../artifacts/overview.md" data-raw-source="[subscribing to and working with Azure Artifacts feeds](../artifacts/overview.md)">subscribing to and working with Azure Artifacts feeds</a>.</p>

<p><b>Release (Azure DevOps Services, Preview)</b></p>
<p>Manage the release of your app by <a href="../pipelines/overview.md" data-raw-source="[deploying it to a specific environment for each separate release step](../pipelines/overview.md)">deploying it to a specific environment for each separate release step</a>, and by controlling the process through approvals for each step.</p>


<p><b>Code search</b></p>
<p><a href="../project/search/overview.md" data-raw-source="[Search within your code branches (TFVC) and repositories (Git)](../project/search/overview.md)">Search within your code branches (TFVC) and repositories (Git)</a> to find files, commits, and more using powerful filters to obtain rich results. </p>
<img src="_img/features/features-index-code-search-vsts.png" alt="Search code box"/><br/><br/>
<p><b>Find work items</b></p>
<p>When in the Work hub, <a href="../boards/queries/using-queries.md" data-raw-source="[enter IDs or keywords to start a query](../boards/queries/using-queries.md)">enter IDs or keywords to start a query</a> to find  work items that you want to review, triage, or update.</p>
<img src="_img/features/alm-index-search-work-items-vsts.png" alt="Search work item box"/><br/><br/>




</td>
<td width="33%">

<p><b>Collection-project-team structure</b></p>
<p>The <a href="../organizations/projects/about-projects.md" data-raw-source="[collection-project-team structure](../organizations/projects/about-projects.md)">collection-project-team structure</a> provides teams a high-level of autonomy to configure their tools in ways that work for them. It also supports administrative tasks to occur at the appropriate level.</p>
<img src="_img/web-portal-organization-project-team-concept.png" alt="Single collection-project-team conceptual image"/>
<br/>

<p><b>My favorites</b></p>
<p>From any context, you can drag folders, queries, or builds to My favorites when working in the Code, Work, or Build hubs to provide quick access to those items. </p>


<p><b>Team favorites</b></p>
<p>From your team context, drag shared queries, builds, and folders to Team favorites to provide quick access to those items. </p>
<img src="_img/features/alm-index-team-favorites.png" alt="Drag items to team favorites"/><br/><br/>



<p><b>Project admin context</b></p>
<p>Open the admin context to <a href="../organizations/settings/add-teams.md" data-raw-source="[add teams](../organizations/settings/add-teams.md)">add teams</a> and <a href="../organizations/security/change-individual-permissions.md" data-raw-source="[manage permissions](../organizations/security/change-individual-permissions.md)">manage permissions</a>. From any project hub, choose the <img src="../boards/_img/icons/gear_icon.png" alt="gear icon"/> gear icon to open the admin context.</p>
<img src="_img/features/alm-feature-admin-context.png" alt="Admin context"/><br/><br/>


<p><b>Project collection admin context</b></p>
<p>From the collection admin context, you can <a href="../organizations/security/set-project-collection-level-permissions.md" data-raw-source="[manage collection-level permissions](../organizations/security/set-project-collection-level-permissions.md)">manage collection-level permissions</a>, and set build policies, and <a href="../extend/overview.md" data-raw-source="[manage extensions](../extend/overview.md)">manage extensions</a>. Choose the <img src="../boards/_img/icons/gear_icon.png" alt="gear icon"/> gear icon to open the admin context, and then choose DefaultCollection. </p>


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
<p>Find work items based on <a href="https://msdn.microsoft.com/library/cc668120.aspx" data-raw-source="[ID, assignment, changed date, or keyword](https://msdn.microsoft.com/library/cc668120.aspx)">ID, assignment, changed date, or keyword</a>. </p>
<img src="_img/features/alm-index-search-work-items-vsts.png" alt="Search work item box"/><br/><br/>


<p><b>Code search</b></p>
<p><a href="../project/search/overview.md" data-raw-source="[Find code based on keywords and semantic search filters](../project/search/overview.md)">Find code based on keywords and semantic search filters</a> across your Git repositories.</p>
<img src="_img/features/features-index-code-search-vsts.png" alt="Search code box"/><br/>
<p><b>CodeLens search</b></p>
<p><a href="https://msdn.microsoft.com/library/dn269218.aspx" data-raw-source="[Find references and changes to your code, linked bugs, work items, code reviews, and unit tests](https://msdn.microsoft.com/library/dn269218.aspx)">Find references and changes to your code, linked bugs, work items, code reviews, and unit tests</a>.</p>

<p><b>Work item queries</b></p>
<p>Open shared queries or create your own query using the query editor <a href="../boards/queries/using-queries.md" data-raw-source="[to list work items or show hierarchical or dependent items](../boards/queries/using-queries.md)">to list work items or show hierarchical or dependent items</a>.  </p>

&gt;<b>Manage risks and dependencies</b></p>
<p>Link work items to <a href="../boards/queries/link-work-items-support-traceability.md" data-raw-source="[track related work, dependencies, and changes made over time](../boards/queries/link-work-items-support-traceability.md)">track related work, dependencies, and changes made over time</a>.</p>

<p><b>History &amp; auditing</b></p>
<p>Review and query <a href="../boards/queries/history-and-auditing.md" data-raw-source="[work item change history](../boards/queries/history-and-auditing.md)">work item change history</a> to learn of past decisions and support future ones.</p>


<p><b>Bulk add or modify using Excel </b></p>
<p><a href="../boards/backlogs/office/bulk-add-modify-work-items-excel.md" data-raw-source="[Bulk add items to track or modify multiple field values](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)">Bulk add items to track or modify multiple field values</a> using Excel.</p>

</td>
<td width="33%">

<p><b>Charts</b></p>
<p><a href="../report/dashboards/charts.md" data-raw-source="[Turn your queries into a status or trend chart](../report/dashboards/charts.md)">Turn your queries into a status or trend chart</a> and share them with your team, organization, and Stakeholders.</p>
<img src="_img/features/alm-feature-test-chart.png" alt="Create status and trend charts from flat list queries"/><br/><br/>


<p><b>Tags</b></p>
<p><a href="../boards/queries/add-tags-to-work-items.md" data-raw-source="[Add tags to work items](../boards/queries/add-tags-to-work-items.md)">Add tags to work items</a> to filter backlogs and queries. Bulk update work items to add or remove tags: <a href="../boards/backlogs/bulk-modify-work-items.md#tags" data-raw-source="[Azure DevOps Services](../boards/backlogs/bulk-modify-work-items.md#tags)">Azure DevOps Services</a> | <a href="../boards/backlogs/office/bulk-add-modify-work-items-excel.md" data-raw-source="[TFS](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)">TFS</a>. </p>
<img src="_img/features/alm-feature-tags.png" alt="Add tags to filter backlogs, boards, and queries"/><br/><br/>

&lt;p
</td>
<td width="33%">


<p><b>Bulk modify</b></p>
<p><a href="../boards/backlogs/bulk-modify-work-items.md" data-raw-source="[Edit or update multiple work items](../boards/backlogs/bulk-modify-work-items.md)">Edit or update multiple work items</a> from any backlog or query result. Supported tasks include:  </p>
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
<p>List work items based on <a href="../boards/queries/query-by-date-or-current-iteration.md" data-raw-source="[when changes occurred or if they belong to the team&#39;s current sprint](../boards/queries/query-by-date-or-current-iteration.md)">when changes occurred or if they belong to the team&#39;s current sprint</a>. </p>

<p><b>Query by workflow</b></p>
<p><a href="../boards/queries/query-by-workflow-changes.md" data-raw-source="[Find and list work items based on their current state](../boards/queries/query-by-workflow-changes.md)">Find and list work items based on their current state</a>, such as new, in progress, resolved, done, or closed. </p>

<p><b>Query by Kanban board change</b> </p>
<p>Track status and trends of work items based on <a href="../boards/queries/query-by-workflow-changes.md" data-raw-source="[changes made to the Kanban board](../boards/queries/query-by-workflow-changes.md)">changes made to the Kanban board</a>. </p>



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
<p><a href="../organizations/security/permissions.md" data-raw-source="[Add users to built-in groups](../organizations/security/permissions.md)">Add users to built-in groups</a> to grant them access to your project. Optionally, create groups to customize access based on your business requirements.</p>

<p><b>Permission states</b></p>
<p>Understand how <a href="../organizations/security/about-permissions.md" data-raw-source="[Allow, Deny, Not set and other permissions states](../organizations/security/about-permissions.md)">Allow, Deny, Not set and other permissions states</a> control access to features and objects. </p>
<img src="_img/features/alm-feature-permission-states.png" alt="permission states"/><br/><br/>

<p><b>Manage work access (Azure DevOps Services)</b></p>
<p><a href="../organizations/accounts/manage-azure-active-directory-groups.md" data-raw-source="[Control user access with a directory](../organizations/accounts/manage-azure-active-directory-groups.md)">Control user access with a directory</a> to enforce policies about accessing company resources.  </p>

<p><b>Azure Active Directory (Azure DevOps Services) </b></p>
<p>Easily control access to your team&#39;s critical resources and key business assets with <a href="../organizations/accounts/manage-azure-active-directory-groups.md" data-raw-source="[Azure Active Directory groups](../organizations/accounts/manage-azure-active-directory-groups.md)">Azure Active Directory groups</a>.</p>

<p><b>Set up groups (TFS)</b></p>
<p><a href="/azure/devops/server/admin/setup-ad-groups" data-raw-source="[Create Windows or Active Directory groups](/azure/devops/server/admin/setup-ad-groups)">Create Windows or Active Directory groups</a> to manage access to your team projects and collections.  </p>

<p><b>Built-in groups</b></p>
<p>Understand the <a href="../organizations/security/permissions.md#groups" data-raw-source="[permissions granted to built-in groups](../organizations/security/permissions.md#groups)">permissions granted to built-in groups</a> and use them to manage access to your team projects and collections.</p>



</td>
<td width="33%">

<p><b>DevOps permissions</b></p>
<p>Grant or restrict access to: </p>
<ul>
<li><a href="../organizations/security/set-git-tfvc-repository-permissions.md" data-raw-source="[Git repositories](../organizations/security/set-git-tfvc-repository-permissions.md)">Git repositories</a></li>
<li><a href="../repos/git/branch-permissions.md" data-raw-source="[Git branches](../repos/git/branch-permissions.md)">Git branches</a></li>
<li><a href="../organizations/security/set-git-tfvc-repository-permissions.md" data-raw-source="[TFVC source code and folders](../organizations/security/set-git-tfvc-repository-permissions.md)">TFVC source code and folders</a></li>
<li><a href="../pipelines/policies/set-permissions.md" data-raw-source="[Build](../pipelines/policies/set-permissions.md)">Build</a></li>
<li><a href="../organizations/security/set-project-collection-level-permissions.md" data-raw-source="[Test](../organizations/security/set-project-collection-level-permissions.md)">Test</a>)</li>
<li><a href="../pipelines/policies/set-permissions.md" data-raw-source="[Release](../pipelines/policies/set-permissions.md)">Release</a></li>
</ul>
<br/>

<p><b>Work item tracking permissions</b></p>
<p>Control access to specific features by setting permissions for a user or group.</p>

<ul>
<li><a href="../organizations/security/set-permissions-access-work-tracking.md" data-raw-source="[Area and iteration paths](../organizations/security/set-permissions-access-work-tracking.md)">Area and iteration paths</a></li>
<li><a href="../boards/queries/set-query-permissions.md" data-raw-source="[Query permissions](../boards/queries/set-query-permissions.md)">Query permissions</a></li>
<li><a href="../organizations/security/permissions.md#tags" data-raw-source="[Work item tags](../organizations/security/permissions.md#tags)">Work item tags</a></li>
<li><a href="../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions" data-raw-source="[Move work items to another project](../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions)">Move work items to another project</a></li>
<li><a href="../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions" data-raw-source="[Permanently delete work items](../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions)">Permanently delete work items</a></li>
<li><a href="../project/feedback/give-permissions-feedback.md" data-raw-source="[Provide feedback through the Microsoft Feedback client](../project/feedback/give-permissions-feedback.md)">Provide feedback through the Microsoft Feedback client</a></li>
</ul>
<br/>


<p><b>Team admin role and permissions</b></p>
<p>Add users as team administrators to enable them to <a href="../organizations/settings/manage-teams.md" data-raw-source="[configure team settings and manage team assets](../organizations/settings/manage-teams.md)">configure team settings and manage team assets</a>.</p>


<p><b>Manage administrative permissions </b></p>
<p>[Add users to one of the following built-in groups] to provide them permissions assigned to that group: </p>
<ul>
<li><a href="../organizations/security/set-project-collection-level-permissions.md" data-raw-source="[Project Administrators](../organizations/security/set-project-collection-level-permissions.md)">Project Administrators</a>, who manage shared features for a project </li>
<li><a href="../organizations/security/set-project-collection-level-permissions.md" data-raw-source="[Project Collection Administrators](../organizations/security/set-project-collection-level-permissions.md)">Project Collection Administrators</a>, who manage collection-level features </li>
<li><a href="/azure/devops/server/admin/add-administrator-tfs" data-raw-source="[Team Foundation Server Administrators](/azure/devops/server/admin/add-administrator-tfs)">Team Foundation Server Administrators</a>, who manage on-premises application servers </li>
</ul>
<br/>

<p><b>Restrict access</b></p>
<p>You can restrict access to several features and tasks by setting the permission state to Deny to individual users or a security group.</p>


</td>
<td width="33%">


<p><b>Stakeholder access</b></p>
<p><a href="../organizations/security/change-access-levels.md" data-raw-source="[Grant Stakeholders, non-licensed users, limited access](../organizations/security/change-access-levels.md)">Grant Stakeholders, non-licensed users, limited access</a> to contribute ideas and access team dashboards.</p>

<p><b>Query permissions</b></p>
<p>Grant permissions to <a href="../boards/queries/set-query-permissions.md" data-raw-source="[create shared queries and query folders](../boards/queries/set-query-permissions.md)">create shared queries and query folders</a>.</p>
<img src="_img/features/features-query-permissions.png" alt="Query permissions"/><br/><br/>

<p><b>Process permissions</b></p>
<p>To customize a process, add custom fields, or change the layout of a work item form, you must be a member of the Project Collection Administrators group or be <a href="../organizations/security/set-permissions-access-work-tracking.md#process-permissions" data-raw-source="[granted explicit permissions to edit a specific process](../organizations/security/set-permissions-access-work-tracking.md#process-permissions)">granted explicit permissions to edit a specific process</a>.  </p>

<p><b>Valid users</b></p>
<p>Understand how <a href="../organizations/security/about-permissions.md#validusers" data-raw-source="[valid user groups are populated and the permissions they&#39;re granted](../organizations/security/about-permissions.md#validusers)">valid user groups are populated and the permissions they&#39;re granted</a>.</p>


<p><b>Permission reference</b></p>
<p><a href="../organizations/security/permissions.md" data-raw-source="[Provide or restrict access](../organizations/security/permissions.md)">Provide or restrict access</a> for practically any feature, function, or object at the collection or project level. </p>

<p><b>SharePoint permissions (TFS)</b></p>
<p>Grant permissions to <a href="https://msdn.microsoft.com/library/bb558971.aspx" data-raw-source="[view and contribute to SharePoint project portals](https://msdn.microsoft.com/library/bb558971.aspx)">view and contribute to SharePoint project portals</a>.</p>

<p><b>SQL Server reporting permissions (TFS)</b></p>
<p>Grant permissions to <a href="../report/admin/grant-permissions-to-reports.md" data-raw-source="[view and author Excel and SQL Server reports](../report/admin/grant-permissions-to-reports.md)">view and author Excel and SQL Server reports</a>.</p>





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
<p>To get started, <a href="https://visualstudio.microsoft.com/products/free-developer-offers-vs.aspx" data-raw-source="[download and install Visual Studio](https://visualstudio.microsoft.com/products/free-developer-offers-vs.aspx)">download and install Visual Studio</a> an integrated development environment (IDE) that works with Azure DevOps Services and TFS. </p>


<p><b>Migrate from on-premises to hosted</b></p>
<p>You can <a href="https://visualstudio.microsoft.com/articles/adopting-vsts" data-raw-source="[migrate source code and work items](https://visualstudio.microsoft.com/articles/adopting-vsts)">migrate source code and work items</a> from an on-premises TFS to the cloud. </p>

</td>
<td width="33%">

<p><b>Sign up for Azure DevOps Services </b></p>
<p><a href="https://visualstudio.microsoft.com/docs/setup-admin/team-services/sign-up-for-visual-studio-team-services" data-raw-source="[Store your code, tests, and test results in the cloud with Azure DevOps Services](https://visualstudio.microsoft.com/docs/setup-admin/team-services/sign-up-for-visual-studio-team-services)">Store your code, tests, and test results in the cloud with Azure DevOps Services</a>, as well as plan your project and track progress. </p>



<p><b>Install TFS </b></p>
<p><a href="https://visualstudio.microsoft.com/downloads" data-raw-source="[Download and install the latest version of Team Foundation Server](https://visualstudio.microsoft.com/downloads)">Download and install the latest version of Team Foundation Server</a>. TFS provides the collaboration hub to support your teams DevOps tasks. at the center of the Microsoft devops solution. </p>




</td>
<td width="33%">
<p><b>Email configuration (TFS)</b></p>
<p>For feedback requests, alerts, and other special controls to work, you must <a href="/azure/devops/server/admin/setup-customize-alerts" data-raw-source="[configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts)">configure an SMTP server</a> for your on-premises TFS. </p>

<p><b>Automated, scheduled backups (TFS)</b></p>
<p>Reduce the risk of lost data by <a href="/azure/devops/server/admin/backup/config-backup-sched-plan" data-raw-source="[scheduling automated backups of the data store](/azure/devops/server/admin/backup/config-backup-sched-plan)">scheduling automated backups of the data store</a>.</p>

<p><b>Built-in SQL Server database (TFS)</b></p>
<p>For small teams, you can install <a href="/azure/devops/server/install/single-server" data-raw-source="[TFS using SQL Server Express which installs with TFS](/azure/devops/server/install/single-server)">TFS using SQL Server Express which installs with TFS</a>.  </p>


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
<p>A <a href="../boards/work-items/guidance/choose-process.md" data-raw-source="[process defines the building blocks](../boards/work-items/guidance/choose-process.md)">process defines the building blocks</a> of the work item tracking system as well as other sub-systems you access through your project.  </p>


<p><b>Compare and choose a process</b></p>
<p>Compare the three core system processes--<a href="../boards/work-items/guidance/choose-process.md" data-raw-source="[Agile, Scrum, CMMI](../boards/work-items/guidance/choose-process.md)">Agile, Scrum, CMMI</a>--before you choose one to create a project. </p>


<p><b>Agile process </b></p>
<p>Choose <a href="../boards/work-items/guidance/agile-process.md" data-raw-source="[Agile](../boards/work-items/guidance/agile-process.md)">Agile</a> when your team uses Agile planning methods, including Scrum, and tracks development and test activities separately. With Agile, you can track user stories and bugs on the Kanban board, or track bugs and tasks on the task board.</p>
<img src="_img/features/features-agile-wits.png" alt="Agile process work item types"/><br/><br/>

<p><b>Customize a process (Azure DevOps Services) </b></p>
<p>Customizations you make to an inherited process automatically update all team projects that reference that process. You can customize your project as follows:</p>
<ul>
<li><a href="../organizations/settings/work/customize-process-field.md" data-raw-source="[Add and modify fields](../organizations/settings/work/customize-process-field.md)">Add and modify fields</a></li>
<li><a href="../organizations/settings/work/customize-process-form.md" data-raw-source="[Modify the web form layout](../organizations/settings/work/customize-process-form.md)">Modify the web form layout</a></li>
<li><a href="../organizations/settings/work/customize-process-workflow.md" data-raw-source="[Modify the workflow states](../organizations/settings/work/customize-process-workflow.md)">Modify the workflow states</a> </li>
<li><a href="../organizations/settings/work/customize-process-wit.md" data-raw-source="[Add a custom work item type](../organizations/settings/work/customize-process-wit.md)">Add a custom work item type</a> </li>
</ul>

<p><b>Manage processes (Azure DevOps Services) </b></p>
<p><a href="../organizations/settings/work/manage-process.md" data-raw-source="[Create inherited processes and migrate team projects to use them](../organizations/settings/work/manage-process.md)">Create inherited processes and migrate team projects to use them</a>. Set the default process and enable, disable, or delete processes you no longer want to use.   </p>




</td>
<td width="33%">


<p><b>Kanban process tools</b></p>
<p>You can use the Kanban board with any process--Agile, Scrum, CMMI--or project that you select or create. Agile Kanban tools support working with the <a href="../boards/boards/kanban-basics.md" data-raw-source="[Kanban board](../boards/boards/kanban-basics.md)">Kanban board</a>, <a href="../boards/boards/add-task-checklists.md" data-raw-source="[adding task checklists](../boards/boards/add-task-checklists.md)">adding task checklists</a>, <a href="../boards/boards/wip-limits.md" data-raw-source="[setting WIP limits](../boards/boards/wip-limits.md)">setting WIP limits</a>, <a href="../boards/boards/add-columns.md" data-raw-source="[custom columns](../boards/boards/add-columns.md)">custom columns</a>, <a href="../boards/boards/split-columns.md" data-raw-source="[split columns](../boards/boards/split-columns.md)">split columns</a>, <a href="../boards/boards/expedite-work.md" data-raw-source="[custom swimlanes](../boards/boards/expedite-work.md)">custom swimlanes</a>, and <a href="../boards/boards/customize-cards.md" data-raw-source="[customizing cards](../boards/boards/customize-cards.md)">customizing cards</a>. </p>


<p><b>Scrum process</b></p>
<p>Choose <a href="../boards/work-items/guidance/scrum-process.md" data-raw-source="[Scrum](../boards/work-items/guidance/scrum-process.md)">Scrum</a> when your team practices Scrum and you want to track product backlog items (PBIs) and bugs on the Kanban board, or break PBIs and bugs down into tasks on the task board. </p>
<img src="_img/features/features-scrum-wits.png" alt="Scrum process work item types"/><br/><br/>

<p><b>Scrum work items and workflow process guidance</b></p>
<p>Plan and track your work using the <a href="../boards/work-items/guidance/scrum-process-workflow.md" data-raw-source="[work item types and workflow supported by the Scrum process](../boards/work-items/guidance/scrum-process-workflow.md)">work item types and workflow supported by the Scrum process</a>.  </p>

<p><b>Agile work items and workflow process guidance</b></p>
<p>Plan and track your work using the <a href="../boards/work-items/guidance/agile-process-workflow.md" data-raw-source="[work item types and workflow supported by the Agile process](../boards/work-items/guidance/agile-process-workflow.md)">work item types and workflow supported by the Agile process</a>.  </p>

<p><b>Work item field index</b></p>
<p>For descriptions and usage of each field used by the core and inherited processes, see <a href="../boards/work-items/guidance/work-item-field.md" data-raw-source="[Work item field index](../boards/work-items/guidance/work-item-field.md)">Work item field index</a>.   </p>


</td>
<td width="33%">
<p><b>Scrum process tools</b></p>
<p>Scrum processes can be used with any process--Agile, Scrum, CMMI--or project that you select or create. Agile Scrum tools support <a href="../boards/sprints/assign-work-sprint.md" data-raw-source="[sprint planning](../boards/sprints/assign-work-sprint.md)">sprint planning</a>, <a href="../boards/sprints/set-capacity.md" data-raw-source="[capacity planning](../boards/sprints/set-capacity.md)">capacity planning</a>, <a href="../boards/sprints/task-board.md" data-raw-source="[task boards](../boards/sprints/task-board.md)">task boards</a>, and <a href="../boards/sprints/sprint-burndown.md" data-raw-source="[burndown charts](../boards/sprints/sprint-burndown.md)">burndown charts</a>.  </p>


<p><b>Manage processes (Azure DevOps Services) </b></p>
<p><a href="../organizations/security/permissions.md" data-raw-source="[Add users to built-in groups](../organizations/security/permissions.md)">Add users to built-in groups</a> to grant them access to your project. Optionally, create groups to customize access based on your business requirements.</p>

<p><b>CMMI process</b></p>
<p>Choose <a href="../boards/work-items/guidance/cmmi-process.md" data-raw-source="[CMMI](../boards/work-items/guidance/cmmi-process.md)">CMMI</a> when your team follows more formal project methods that require a framework for process improvement and an auditable record of decisions. CMMI supports tracking requirements, change requests, risks, and reviews.</p>
<img src="_img/features/features-cmmi-wits.png" alt="CMMI work item types"/><br/><br/>


<p><b>CMMI work items and workflow process guidance</b></p>
<p>Plan and track your work using the <a href="../boards/work-items/guidance/cmmi-process-workflow.md" data-raw-source="[work item types and workflow supported by the CMMI process](../boards/work-items/guidance/cmmi-process-workflow.md)">work item types and workflow supported by the CMMI process</a>.  </p>


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
<p>A process template is the forerunner and on-premises version of a process. It provides the  building blocks of the work item tracking system as well as other sub-systems you access through your project. Process templates support full <a href="https://msdn.microsoft.com/library/ms243782.aspx" data-raw-source="[customization of all its objects](https://msdn.microsoft.com/library/ms243782.aspx)">customization of all its objects</a>. </p>

<p><b>Manage process templates </b></p>
<p><a href="../boards/work-items/guidance/manage-process-templates.md" data-raw-source="[Download and upload process templates](../boards/work-items/guidance/manage-process-templates.md)">Download and upload process templates</a> to support customization and upgrade of your work tracking experience and team projects. </p>


</td>


<td width="33%">

<p><b>Process template files</b></p>
<p>You customize the initial configuration of team projects by <a href="https://msdn.microsoft.com/library/ms243856.aspx" data-raw-source="[customizing one or more process template files](https://msdn.microsoft.com/library/ms243856.aspx)">customizing one or more process template files</a>. By customizing these files, you can define the initial configuration of all team projects that are created from the process template. </p>


<p><b>Configure Features Wizard</b></p>
<p>Use the Configure Features Wizard to <a href="../reference/configure-features-after-upgrade.md" data-raw-source="[configure team projects after a TFS upgrade to access new features](../reference/configure-features-after-upgrade.md)">configure team projects after a TFS upgrade to access new features</a>.  </p>

</td>
<td width="33%">

<p><b>Changes made to process templates</b></p>
<p>For a catalog of changes, see <a href="../boards/work-items/guidance/changes-to-process-templates.md" data-raw-source="[Changes made to process templates](../boards/work-items/guidance/changes-to-process-templates.md)">Changes made to process templates</a>.</p>



<p><b>Customize the Microsoft Project field mapping file </b></p>
<p>You can <a href="https://msdn.microsoft.com/library/ms404686.aspx" data-raw-source="[customize how work item fields that are defined in Team Foundation map to fields in Microsoft Project](https://msdn.microsoft.com/library/ms404686.aspx)">customize how work item fields that are defined in Team Foundation map to fields in Microsoft Project</a>. And, you can change how specific fields are published.  </p>


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
<p>A <a href="../organizations/projects/create-project.md" data-raw-source="[project](../organizations/projects/create-project.md)">project</a> provides a repository for source code and a place for a group of developers to plan, track progress, and collaborate on building software solutions. A project lives within a project collection. You can grant permissions to and customize a project to support your business needs. </p>

<p><b>Create a project </b></p>
<p>You can <a href="sign-up-invite-teammates.md" data-raw-source="[create a project hosted in the cloud (Azure DevOps Services)](sign-up-invite-teammates.md)">create a project hosted in the cloud (Azure DevOps Services)</a>, avoiding maintenance and administrative overhead, or <a href="../organizations/projects/create-project.md" data-raw-source="[create a project on an on-premises TFS](../organizations/projects/create-project.md)">create a project on an on-premises TFS</a>.</p>


<p><b>Rename a project</b></p>
<p><a href="../organizations/projects/rename-project.md" data-raw-source="[Rename a project](../organizations/projects/rename-project.md)">Rename a project</a> as needed to reflect changes that occur within your org.</p>

<p><b>Delete a project</b></p>
<p>Simplify the navigation to team projects that are in use by <a href="../organizations/projects/delete-project.md" data-raw-source="[deleting team projects you no longer use](../organizations/projects/delete-project.md)">deleting team projects you no longer use</a>. </p>

</td>
<td width="33%">

<p><b>Collection-project-team structure</b></p>
<p>The <a href="../organizations/projects/about-projects.md" data-raw-source="[collection-project-team structure](../organizations/projects/about-projects.md)">collection-project-team structure</a> provides teams a high-level of autonomy to configure their tools in ways that work for them. It also supports administrative tasks to occur at the appropriate level.</p>
<img src="_img/web-portal-organization-project-team-concept.png" alt="Single collection-project-team conceptual image"/>
<br/>

<p><b>Change the process (Azure DevOps Services) </b></p>
<p>You <a href="../organizations/settings/work/manage-process.md" data-raw-source="[change the process of a project](../organizations/settings/work/manage-process.md)">change the process of a project</a> to apply customizations you&#39;ve made to an inherited process. You can <a href="../organizations/settings/work/customize-process.md" data-raw-source="[add and modify fields and modify the layout of each work item type](../organizations/settings/work/customize-process.md)">add and modify fields and modify the layout of each work item type</a> defined for that process.  </p>


</td>
<td width="33%">

<p><b>View your work across teams and team projects</b></p>
<p>From your <a href="../project/navigation/work-across-projects.md" data-raw-source="[Project page](../project/navigation/work-across-projects.md)">Project page</a>, you can view and quickly navigate to teams, team projects, branches, work items, pull requests and other objects that are relevant to you and that are stored in different team projects within the organization or collection. </p>

<p><b>Customize a project (TFS) </b></p>
<p>You customize a project defined on an on-premises TFS by <a href="../reference/customize-work.md" data-raw-source="[modifying definition files for work item types or process configuration, or changing field attributes](../reference/customize-work.md)">modifying definition files for work item types or process configuration, or changing field attributes</a>.  </p>

<p><b>Update a project after an upgrade (TFS)</b></p>
<p>Some features added when you upgrade your on-premises application server may require you to <a href="../reference/configure-features-after-upgrade.md" data-raw-source="[configure features to access them](../reference/configure-features-after-upgrade.md)">configure features to access them</a>. </p>


<p><b>Upload reports (TFS) </b></p>
<p><a href="../report/admin/upload-reports.md" data-raw-source="[Upload the latest reports provided for your process](../report/admin/upload-reports.md)">Upload the latest reports provided for your process</a> or add reports after you&#39;ve already created a project by adding SQL Server Reporting Services.  </p>
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
<p>A team is an organizing unit used to support a number of <a href="../organizations/settings/manage-teams.md" data-raw-source="[team-configurable tools](../organizations/settings/manage-teams.md)">team-configurable tools</a> to plan and manage work and facilitate collaboration.  </p>

<p><b>Add team members</b></p>
<p>Add organizations-<a href="../organizations/accounts/add-team-members.md" data-raw-source="[Azure DevOps Services](../organizations/accounts/add-team-members.md)">Azure DevOps Services</a> | <a href="../organizations/security/add-users-team-project.md" data-raw-source="[TFS](../organizations/security/add-users-team-project.md)">TFS</a>--to a team to enable users to share code, plan and track work, and access other team assets and resources. </p>
<img src="_img/features/alm-feature-manage-members.png" alt="Manage users, add team members"/><br/><br/>


<p><b>Add a team</b></p>
<p>As your organization grows, consider moving from your <a href="../organizations/settings/add-teams.md" data-raw-source="[default team of one to two or more teams](../organizations/settings/add-teams.md)">default team of one to two or more teams</a> to support feature-focused groups within your org.</p>


<p><b>Add a team admin</b></p>
<p>Add users to the team admin role to enable them to <a href="../organizations/settings/add-team-administrator.md" data-raw-source="[Manage teams and configure team tools](../organizations/settings/add-team-administrator.md)">Manage teams and configure team tools</a>. Team settings can only be configured by a team or project admin. </p>


<p><b>Support Stakeholders</b></p>
<p>Members within your org who don&#39;t have a license or contribute to developing the code base <a href="../organizations/security/get-started-stakeholder.md" data-raw-source="[can track project priorities and provide direction, feature ideas, and business alignment to a team](../organizations/security/get-started-stakeholder.md)">can track project priorities and provide direction, feature ideas, and business alignment to a team</a>.  </p>
</td>
<td width="33%">

<p><b>Team dashboards</b></p>
<p>Share progress, status, and guidance with your team using <a href="../report/dashboards/dashboards.md" data-raw-source="[configurable team dashboards](../report/dashboards/dashboards.md)">configurable team dashboards</a>.  </p>
<img src="_img/features/alm-feature-add-a-dashboard-2.png" alt="Team dashboards"/><br/><br/>

<p><b>Team welcome page</b></p>
<p>Provide in-project guidance through the <a href="../project/wiki/markdown-guidance.md" data-raw-source="[Welcome page and other pages you format using Markdown](../project/wiki/markdown-guidance.md)">Welcome page and other pages you format using Markdown</a>.  </p>




<p><b>Setup a team hierarchy</b></p>
<p>By <a href="../boards/plans/portfolio-management.md" data-raw-source="[configuring your teams and backlogs into an hierarchical structure](../boards/plans/portfolio-management.md)">configuring your teams and backlogs into an hierarchical structure</a>, program owners can more easily track progress across teams, manage portfolios, and generate rollup data. </p>

<p><b>Set team defaults</b></p>
<p>Several Agile tools reference the team&#39;s default area path, iteration path, and activated sprints to automatically filter the set of work items they display. Understand how defaults are used](../organizations/settings/about-teams-and-settings.md).</p>

<p><b>Select team sprints</b></p>
<p><a href="../boards/sprints/define-sprints.md" data-raw-source="[Select your team&#39;s sprints](../boards/sprints/define-sprints.md)">Select your team&#39;s sprints</a> to gain access to sprint backlogs and task boards.</p>
<img src="_img/features/features-team-sprints-2.png" alt="Set start and end dates for a sprint"/><br/><br/>
</td>
<td width="33%">

<p><b>Configure team settings</b></p>
<p>Configure, customize, and manage all <a href="../organizations/settings/manage-teams.md" data-raw-source="[team-related activities](../organizations/settings/manage-teams.md)">team-related activities</a></p>




<p><b>Team alerts</b></p>
<p>As changes occur to work items, code reviews, source control files, and builds, your team can automatically <a href="../boards/queries/alerts-and-notifications.md" data-raw-source="[receive email notifications for alerts](../boards/queries/alerts-and-notifications.md)">receive email notifications for alerts</a> that you define.  </p>


<p><b>Team rooms</b></p>
<p>Team rooms, like chat rooms, provide teams with a <a href="../notifications/collaborate-in-a-team-room.md" data-raw-source="[space to discuss work in progress, ask questions, share status, and clarify issues](../notifications/collaborate-in-a-team-room.md)">space to discuss work in progress, ask questions, share status, and clarify issues</a> that arise. Use team rooms to foster and capture communication among team members, both near and far.</p>


<p><b>Team groups</b></p>
<p>A <a href="../organizations/settings/about-teams-and-settings.md#team-group" data-raw-source="[team group is created](../organizations/settings/about-teams-and-settings.md#team-group)">team group is created</a> when you create a team. Use this group in queries or to set permissions for your team.  </p>
</td>
</tr>
</tbody>
</table>




<a id="traceability"></a>


## Traceability


<table>
<tbody>
<tr valign="top">
<td width="50%">


<p><b>Work item history &amp; auditing</b></p>
<p>Review and query <a href="../boards/queries/history-and-auditing.md" data-raw-source="[work item change history](../boards/queries/history-and-auditing.md)">work item change history</a> to learn of past decisions and support future ones. </p>


<p><b>Manage risks and dependencies</b></p>
<p>Link work items to <a href="../boards/queries/link-work-items-support-traceability.md" data-raw-source="[track related work, dependencies, and changes made over time](../boards/queries/link-work-items-support-traceability.md)">track related work, dependencies, and changes made over time</a>. <a href="../boards/queries/using-queries.md" data-raw-source="[Create queries](../boards/queries/using-queries.md)">Create queries</a> based on link type to monitor dependencies.</p>
<img src="_img/features/features-wit-link-tab.png" alt="Links control"/><br/><br/>


<p><b>Rich text comments</b></p>
<p>Describe and comment on work to perform using <a href="../boards/backlogs/add-work-items.md" data-raw-source="[formatted text, hyperlinks, and inline images](../boards/backlogs/add-work-items.md)">formatted text, hyperlinks, and inline images</a>.  </p>

<p><b>Discussion (Azure DevOps Services) </b></p>
<p><a href="../boards/backlogs/add-work-items.md" data-raw-source="[Add or review comments](../boards/backlogs/add-work-items.md)">Add or review comments</a> added to a work item. Start by choosing the <img src="../boards/backlogs/_img/icon-discussions-wi.png" alt="Discussions icon"/> discussion icon.  </p>
<img src="_img/features/alm-feature-add-work-items-discussion.png" alt="Discussion section"/><br/><br/>


<p><b>Storyboard</b></p>
<p><a href="../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md" data-raw-source="[Link your storyboards to you backlog work items](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md)">Link your storyboards to you backlog work items</a>.  </p>

</td>

<td width="50%">

<p><b>Git code changes </b></p>
<p><a href="../repos/git/history.md" data-raw-source="[Get detailed information about what changes have been made to your local and centralized branches and repositories](../repos/git/history.md)">Get detailed information about what changes have been made to your local and centralized branches and repositories</a>, compare files and folders, review history of commits and file changes. </p>

<p><b>Integrate Git development with work tracking (Azure DevOps Services) </b></p>
<p>Drive Git development and stay in sync as a team to complete backlog items and tasks using the <a href="../boards/backlogs/connect-work-items-to-git-dev-ops.md" data-raw-source="[Git Development section](../boards/backlogs/connect-work-items-to-git-dev-ops.md)">Git Development section</a>. Add branches, create pull requests, and view all development performed to support the specific work item.  </p>
<img src="_img/features/alm-feature-git-dev-section.png" alt="Work item form Development section"/><br/><br/>
<p><b>TFVC code changes </b></p>
<p><a href="https://msdn.microsoft.com/library/ms245475.aspx" data-raw-source="[Get detailed information about what changes have been made to your files](https://msdn.microsoft.com/library/ms245475.aspx)">Get detailed information about what changes have been made to your files</a>, compare files and folders, view where and when changesets have been merged, and view file changes using annotate.</p>

<p><b>Build changes</b></p>
<p>Determine who <a href="../pipelines/build/history.md" data-raw-source="[changed what in the build definition and when they did it](../pipelines/build/history.md)">changed what in the build definition and when they did it</a>.</p>

<p><b>Release audit history</b></p>
<p>Retain full audit history of all activities performed on a release with detailed release logs and approval tracking.</p>

<p><b>Release logs</b></p>
<p>View or download log files as zip files. Log files contain the status for each step or task of a release, for each of the environments in the release definition. Each completed release--succeeded, failed, or abandoned--<a href="../pipelines/release/define-multistage-release-process.md#monitor-and-track-deployments" data-raw-source="[includes a live log file, details, and history for each step or task](../pipelines/release/define-multistage-release-process.md#monitor-and-track-deployments)">includes a live log file, details, and history for each step or task</a>. </p>

</td>
</tr>
</tbody>
</table>



## Related articles

We add new features frequently. We'll work to keep this list up-to-date. Other resources you might want to bookmark:
- [Azure DevOps Services - Features update](/../../release-notes.md)
- [Microsoft devops blog](https://blogs.msdn.microsoft.com/devops/)  

<br/>
Get started today using our cloud offering, <a href="https://visualstudio.microsoft.com/team-services/" data-raw-source="[Azure DevOps Services](https://visualstudio.microsoft.com/team-services/)">Azure DevOps Services</a>, or our <a href="https://visualstudio.microsoft.com/downloads/" data-raw-source="[on-premises TFS server](https://visualstudio.microsoft.com/downloads/)">on-premises TFS server</a>.  

<!---   
### We welcome your feedback

Send suggestions on **[UserVoice](https://developercommunity.visualstudio.com/content/idea/post.html?space=21)**, and follow us on **[Twitter](https://twitter.com/AzureDevOps) @AzureDevOps**.

See also our [comprehensive feedback and support page](provide-feedback.md).

--> 
