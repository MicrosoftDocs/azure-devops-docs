---
title: Additional configuration options
titleSuffix: TFS 
description: Options to configure or customize after you upgrade an on-premises Team Foundation Server to access all features  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: F89F5890-31E6-47EF-810F-AB75E1AE7E00
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013 <= azure-devops-2019'
ms.date: 04/05/2017
---

<!---
Supports the following FWLINK: Additional configuration options are available - changes: http://go.microsoft.com/fwlink/?LinkID=242982 - 
-->

# Additional configuration options post update

[!INCLUDE [temp](../_shared/version-header-tfs-only.md)]

> [!IMPORTANT]  
>This topic applies only to projects hosted on an on-premises Team Foundation Server (TFS). Projects defined on Azure DevOps Services [update automatically with each service upgrade](/azure/devops/release-notes/index). 


After you update your project with the Configure Features wizard, you have access to the latest features. However, you may need to make some additional configurations or customizations to support your work tracking needs. Also, you have access to some features based on the source control setting selected when your project was created.  

<table>
<tbody valign="top">
<tr>
<th width="15%">Feature</th>
<th width="35%">Usage</th>
<th width="50%">Configuration options</th>
</tr>
<tr>
<td>
Code Review
</td>
<td>
Adds the Code Review Request and Code Review Response work item types (WITs). With them, you can <a href="../repos/tfvc/get-code-reviewed-vs.md" data-raw-source="[request a code review and track code review responses](../repos/tfvc/get-code-reviewed-vs.md)">request a code review and track code review responses</a>.<br/></td>
<td>
<strong>Required:</strong> <a href="/azure/devops/server/admin/setup-customize-alerts" data-raw-source="[Configure an SMTP server for TFS](/azure/devops/server/admin/setup-customize-alerts)">Configure an SMTP server for TFS</a>. <br/>
<strong>Required:</strong> Visual Studio (any version).
<strong>Availability:</strong> Only supported when your project uses Team Foundation version control for source control.
</td></tr>
<tr>
<td>
My Work
</td>
<td>
Adds support for automatic update of bug status when using My Work. Use to automate some activities when <a href="../repos/tfvc/develop-code-manage-pending-changes.md" data-raw-source="[developing code and managing pending changes](../repos/tfvc/develop-code-manage-pending-changes.md)">developing code and managing pending changes</a>.<br/></td>
<td>
<strong>Required:</strong> Visual Studio (any version).
<strong>Availability:</strong> Only supported when your project uses Team Foundation version control for source control.
</td>
</tr>
<tr>
<td>
Feedback
</td>
<td>
You can <a href="../project/feedback/get-feedback.md" data-raw-source="[request feedback](../project/feedback/get-feedback.md)">request feedback</a> from your stakeholders and capture their comments on your working software. Reviewer feedback--in the form of videos, screenshots, type-written comments, and ratings--is captured into work items that you can review and use to create a bug or suggest a new backlog item. 
</td>
<td>
<strong>Required:</strong> Provide <a href="../organizations/security/change-access-levels.md" data-raw-source="[Advanced access](../organizations/security/change-access-levels.md)">Advanced access</a> to users who&#39;ll request feedback.<br/>
<strong>Required:</strong> <a href="/azure/devops/server/admin/setup-customize-alerts" data-raw-source="[Configure an SMTP server for TFS](/azure/devops/server/admin/setup-customize-alerts)">Configure an SMTP server for TFS</a>. <br/>
<strong>Required:</strong> <a href="../project/feedback/give-permissions-feedback.md" data-raw-source="[Grant stakeholders permission](../project/feedback/give-permissions-feedback.md)">Grant stakeholders permission</a>.

</td>
</tr>
<tr>
<td>
Planning Tools
</td>
<td>
These tools provide access to product and sprint backlogs, the Kanban board and task boards, and the ability to add teams.<br/><ul>
<li><a href="../boards/backlogs/create-your-backlog.md" data-raw-source="[Create-your-backlog](../boards/backlogs/create-your-backlog.md)">Create-your-backlog</a> </li>
<li><a href="../boards/boards/kanban-basics.md" data-raw-source="[Kanban basics](../boards/boards/kanban-basics.md)">Kanban basics</a> </li>
<li><a href="../boards/sprints//assign-work-sprint.md" data-raw-source="[Plan a sprint](../boards/sprints//assign-work-sprint.md)">Plan a sprint</a></li>
<li><a href="../boards/sprints//task-board.md" data-raw-source="[Work with the task board](../boards/sprints//task-board.md)">Work with the task board</a>.</li>
</ul> </td>
<td>
<strong>Required:</strong> To work with sprint backlogs and boards, you must <a href="../boards/sprints//define-sprints.md" data-raw-source="[activate the sprints for each team](../boards/sprints//define-sprints.md)">activate the sprints for each team</a>. <br/>
Additional options that you can configure:<br/>
<ul>
<li><a href="../organizations/settings/add-teams.md" data-raw-source="[Add a team or set up a hierarchy of teams](../organizations/settings/add-teams.md)">Add a team or set up a hierarchy of teams</a> </li>
<li><a href="../organizations/settings/set-working-days.md" data-raw-source="[Set team working days off](../organizations/settings/set-working-days.md)">Set team working days off</a></li>
<li><a href="../boards/sprints/define-sprints.md" data-raw-source="[Define additional sprints or releases](../boards/sprints/define-sprints.md)">Define additional sprints or releases</a>.</li>
</ul> 
In addition, you can customize the following options by modifying the <a href="xml/process-configuration-xml-element.md" data-raw-source="[ProcessConfiguration](xml/process-configuration-xml-element.md)">ProcessConfiguration</a> definition:<br/>
<ul>
<li>Add fields to the quick add panel of backlogs</li>
<li>Change the color used to display work items</li>
<li>Change the default columns and column sequence of backlogs</li>
<li>Map metastates to customized WIT workflow states</li>
<li>Change the fields used in Agile tools and charts </li>
</ul> 

For additional customization options, see <a href="customize-work.md" data-raw-source="[Customize work tracking objects](customize-work.md)">Customize work tracking objects</a>.<br/>

If you've upgraded your TFS instance from [TFS 2010](#update-from-2010) or [TFS 2012](#update-from-2012), we recommend you update the workflow for select WITs to get the full functionality of your backlogs and boards. 
</td>
</tr>
<tr>
<td>
Storyboarding
</td>
<td>
With this feature, you can <a href="../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md" data-raw-source="[storyboard your ideas using the Storyboarding add-in to PowerPoint](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md)">storyboard your ideas using the Storyboarding add-in to PowerPoint</a>.<br/></td>
<td>
<strong>Required:</strong> <a href="http://www.microsoftstore.com/store/msstore/pd/PowerPoint-2010/productID.216564300" data-raw-source="[Office PowerPoint 2007 or later](http://www.microsoftstore.com/store/msstore/pd/PowerPoint-2010/productID.216564300)">Office PowerPoint 2007 or later</a><br/>
<strong>Required:</strong> Visual Studio Community (<a href="https://visualstudio.microsoft.com/free-developer-offers/" data-raw-source="[get your free download](https://visualstudio.microsoft.com/free-developer-offers/)">get your free download</a>) or other Visual Studio version installed. 
</td>
</tr>
<tr>
<td>Portfolio Backlogs</td>
<td>With Portfolio Backlogs enabled, you can use the Feature and Epic portfolio backlogs to <a href="../boards/backlogs/organize-backlog.md" data-raw-source="[organize your backlog](../boards/backlogs/organize-backlog.md)">organize your backlog</a> by grouping related items into a hierarchical structure.<br/></td>
<td>
Most of your team will be able to view and create Epics and Features once you&#39;ve enabled the Portfolio Backlogs feature. However, you may need to enable one or more of these backlogs for a team as described in <a href="../boards/backlogs/organize-backlog.md" data-raw-source="[Organize your backlogs](../boards/backlogs/organize-backlog.md)">Organize your backlogs</a>. <br/>

All stakeholders and contributors to your project can view and add items to a portfolio backlog. However, to reorder, reparent, and exercise other portfolio backlog features, you need to have [Advanced access](../organizations/security/change-access-levels.md).<br/>

<p>Other resources you may find useful to manage your teams and backlogs:</p>
<ul>
<li><a href="../boards/plans/portfolio-management.md" data-raw-source="[Set up a hierarchy of teams and backlogs - Portfolio management](../boards/plans/portfolio-management.md)">Set up a hierarchy of teams and backlogs - Portfolio management</a></li>
<li><a href="../boards/plans/scaled-agile-framework.md" data-raw-source="[Implement the Scaled Agile Framework to support epics, release trains, and multiple backlogs](../boards/plans/scaled-agile-framework.md)">Implement the Scaled Agile Framework to support epics, release trains, and multiple backlogs</a></li>
<li><a href="add-portfolio-backlogs.md" data-raw-source="[Add up to 5 levels of portfolio backlogs](add-portfolio-backlogs.md)">Add up to 5 levels of portfolio backlogs</a> </li>
</ul> 
</td>
</tr>
<tr>
<td>
Shared Parameters
</td>
<td>
This feature adds the Shared Parameters work item type (WIT). With it <a href="../test/repeat-test-with-different-data.md" data-raw-source="[you can repeat a test with different data](../test/repeat-test-with-different-data.md)">you can repeat a test with different data</a>. 
</td>
<td>
No additional configurations or customizations required. 
</td>
</tr>


<tr>
<td>
Test Plan and Test Suite
</td>
<td>
This feature adds the Test Plan and Test Suite WITs, and converts existing test plans and test suites to work items. With this feature enabled, you can now customize these WITs like other work items, and create queries to find test plans and test suites.<br/></td>
<td>
To fully manage web-based test plans, you need to have <a href="../organizations/security/change-access-levels.md" data-raw-source="[Advanced access](../organizations/security/change-access-levels.md)">Advanced access</a>.<br/>
You can customize the test plan and test suite WITs in the same way you can customize other WITs. See these topics to learn more: <br/> 
<ul>
<li><a href="add-modify-field.md" data-raw-source="[Field customizations](add-modify-field.md)">Field customizations</a>: Add a custom field, modify a pick list, or add a field rule.</li>
<li><a href="add-modify-wit.md" data-raw-source="[Work item form customizations](add-modify-wit.md)">Work item form customizations</a> : Modify the form layout for the bug, test case, test plan, or test suite.</li>
<li><a href="add-modify-wit.md" data-raw-source="[Workflow customizations](add-modify-wit.md)">Workflow customizations</a> : Modify the workflow definitions for the bug, test case, test plan, or test suite.</li>
<li><a href="witadmin/tcm-customize-manage-test-experience.md" data-raw-source="[Test failure types](witadmin/tcm-customize-manage-test-experience.md)">Test failure types</a>: Specifies the reasons why a test run failed. The default configuration includes: Regression, New Issue, Known Issue, and Unknown.</li>
<li><a href="witadmin/tcm-customize-manage-test-experience.md" data-raw-source="[Test resolution states](witadmin/tcm-customize-manage-test-experience.md)">Test resolution states</a>: Specifies the action to take after a test run failure. The default configuration includes: Needs investigation, Test issue, Product issue, and Configuration issue.</li>
</ul> 
If you add or change the workflow states for the test plan or test suite type definitions, review the <a href="#test-case-management" data-raw-source="[additional configuration requirements when working with  Visual Studio 2013.2 or earlier versions](#test-case-management)">additional configuration requirements when working with  Visual Studio 2013.2 or earlier versions</a>. 
</td>

</tr>

<tr>
<td>
Bug Behavior
</td>
<td>
This feature allows teams to choose whether to track bugs like requirements or like tasks. 
</td>
<td>
To get started, each team must choose their preference as described in <a href="../organizations/settings/show-bugs-on-backlog.md" data-raw-source="[Show bugs on backlogs and boards feature](../organizations/settings/show-bugs-on-backlog.md)">Show bugs on backlogs and boards feature</a>. 
</td>
</tr>
</tbody>
</table>

## Related articles 

If you are the server administrator for TFS and don't actually contribute to a team, then you may want to [remove yourself as a member, and add a project lead as the team administrator](../organizations/security/add-users-team-project.md). (When you ran the Configure Features wizard, the system automatically added your user account as a team administrator for the project.)

If you have updated a project based on v5.0 of MSF for Agile, do the manual updates described in [Update the Workflow for Agile Team Projects](xml/update-the-workflow-for-agile-team-projects.md).

<a id="test-case-management">   </a> 

### Test case management and custom workflow states 
If you add or change the workflow states for the test plan or test suite type definitions, and you work from a Test Manager client provided with Visual Studio 2013.2 or earlier versions, you must also update the process configuration for the project as well. Otherwise, you'll encounter an **Application detected an unexpected fault** error when you connect to your project. 

![Application fault error message after TFS upgrade](_img/ALM_CF_AppFaultErrMsg.png)  

To resolve this error, see [Import and export process configuration [witadmin]](witadmin/witadmin-import-export-process-configuration.md).  

<a id="update-from-2012">   </a> 
### Recommended updates to projects created from TFS 2012 process templates 

There are no additional required customizations to make after updating from TFS 2012 to TFS 2015. However, there are some recommended updates to make to the workflow of specific WITs.

The updates bring your project up to date with the workflow settings that are defined in the latest versions of the default process templates. 

You might want to update the workflow of specific WITs to support missing transitions, additional reasons, and field assignments. Making this update revises the workflow for the following WITs to the latest version of their process template workflow: 

* Scrum 2.0 to Scrum 2013: Product Backlog Item and Bug  
* Agile 6.0 to Agile 2013: User Story  
* CMMI 6.0 to CMMI 2013: Requirement  

For details, see [Upgrade your 2012 project from RTM to Update 2](http://blogs.msdn.com/b/visualstudioalm/archive/2013/04/04/upgrade-your-2012-process-template-from-rtm-to-update-2.aspx). You can learn about additional changes made to enable features from [Changes made to process templates](../boards/work-items/guidance/changes-to-process-templates.md).


If you haven't customized your work item types or process configuration, you can update the items quickly by using **witadmin**. Just [download the latest version of the process template](../boards/work-items/guidance/manage-process-templates.md) that is compatible with the one used to create your project and then [import the updated WITs](witadmin/witadmin-import-export-manage-wits.md).

<a id="update-from-2010">   </a> 
### Recommended updates to projects created from TFS 2010 process templates 

If you've updated a project that was created with an MSF v 5.0 Agile process template, then you'll also want to [manually update the user story and task workflow assignments](xml/update-the-workflow-for-agile-team-projects.md). 

If you don't update the workflow, then the task board provides only two states, Active and Closed. This prevents you and your team from distinguishing between tasks that are in progress from those that haven't been started.

Also, you might want to apply the workflow updates to the User Story as described in [Upgrade your 2012 project from RTM to Update 2](http://blogs.msdn.com/b/visualstudioalm/archive/2013/04/04/upgrade-your-2012-process-template-from-rtm-to-update-2.aspx). 
