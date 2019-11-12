---
title: Changes made to process templates
titleSuffix: Azure Boards  
description: Summary of changes made to Agile, Scrum, and CMMI process templates to support updating existing projects after a TFS upgrade  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 1541C32C-FD7A-4415-A282-06DF14D1F688 
ms.topic: reference 
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 04/11/2019
---

# Changes made to process templates  

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

To support the addition of new features, changes are introduced periodically to the core system processes or process template&mdash;[Agile](agile-process.md), [Scrum](scrum-process.md), or [CMMI](cmmi-process.md). A process&mdash;used by the Inheritance process model&mdash;determines the building blocks used to track work. A process template&mdash;used by the Hosted XML and On-premises XML process models&mdash;specifies an interdependent-related set of XML definition files that provide the building blocks and initial configuration for tracking work and other functional areas. For an overview of process models and customization options, see [Customize your work tracking experience](../../../reference/customize-work.md).

> [!NOTE]    
> This article describes changes made to the core system processes with updates made to the on-premises Azure DevOps Server, formerly named Team Foundation Server (TFS). These processes are available for both cloud and on-premises versions of Azure Boards. Projects hosted on Azure Boards [update automatically with each service upgrade](/azure/devops/release-notes/index). Whereas, updates to projects defined on-premises may require running the Configure Feature Wizard after upgrading to a later version.  The Configure Features Wizard has been deprecated for Azure DevOps Server 2019. You can only run the wizard on TFS 2018 and earlier versions.        
If you've customized your project and haven't upgraded your on-premises deployment for a while, you may need to manually apply some changes to gain access to new features. Review the following table to determine which changes may apply to your situation. See [New features added when you upgrade](../../../reference/new-features-added.md) for a description of each feature added with the updates. 


<table>
<tbody valign="top">
<tr>
<th width="22%">Version</th>
<th width="78%">Changes introduced</th>
</tr>

<tr>
<td>
<p>Azure DevOps Server 2019</p>
</td>
<td>
<p>Predefined Shared Queries are no longer created upon project creation. The definitions for Shared Queries have been removed from the process template. Shared Queries defined in custom process templates are created. You can also add Shared Queries to a process template as described in <a href="../../../reference/process-templates/add-work-item-queries-process-template.md" data-raw-source="[Add work item queries to a process template](../../../reference/process-templates/add-work-item-queries-process-template.md)">Add work item queries to a process template</a>.</p>
</td>
</tr>

<tr>
<td>
<p>TFS 2017</p>
</td>
<td>
<p>Added the <strong>WebLayout</strong> section within the <strong>FORM</strong> section of all work item type (WIT) definitions. This section supports the new work item tracking experience in the web portal. It includes the <strong>SystemControls</strong> section and the new <strong>LinksControlOptions</strong> for managing link relationships.  To learn more, see <a href="../../../reference/process/new-work-item-experience.md" data-raw-source="[New work item experience](../../../reference/process/new-work-item-experience.md)">New work item experience</a>, <a href="../../../reference/xml/weblayout-xml-elements.md" data-raw-source="[WebLayout and Control elements](../../../reference/xml/weblayout-xml-elements.md)">WebLayout and Control elements</a>, and <a href="../../../reference/xml/linkscontroloptions-xml-elements.md" data-raw-source="[LinksControlOptions XML elements (Web form)](../../../reference/xml/linkscontroloptions-xml-elements.md)">LinksControlOptions XML elements (Web form)</a>.</p>
<p><strong>Note</strong>: When you upgrade an on-premises TFS to TFS 2017, the new web form is automatically available when you add projects to a collection. For existing projects, an admin is required to <a href="../../../reference/manage-new-form-rollout.md" data-raw-source="[enable the new form](../../../reference/manage-new-form-rollout.md)">enable the new form</a>. The reason the new form isn&#39;t automatically enabled for existing projects is to prevent overwriting customizations made to existing WIT definitions.</p>
</td>
</tr>
<tr>
<td>
<p>TFS 2015</p>
</td>
<td>
<p>Added the Bugs Behavior feature, and enhancements to the Planning Tools and Portfolio Backlogs features. Several enhancements were made to support the <a href="../../plans/scaled-agile-framework.md" data-raw-source="[Scaled Agile Framework (SAFe)](../../plans/scaled-agile-framework.md)">Scaled Agile Framework (SAFe)</a>.</p>
<h4>The changes introduced support the following feature additions or enhancements:</h4>
<ul>
<li>Process template names have been changed to Agile, CMMI, and Scrum and have been repurposed as locked, system templates. You can export these templates for customization, but you can no longer overwrite these templates with your changes. </li>
<li>Second-level portfolio backlog, Epic, plus configurable option for teams to activate portfolio backlogs. </li>
<li>Team configurable option to choose which backlogs and portfolio backlogs are active.  </li>
<li>Tracking Time Criticality of portfolio backlog items. Time Criticality captures how the business value decreases over time for a Feature or Epic. Higher values indicate that the item is inherently more time critical than those items with lower values. </li>
<li>Tracking the Value Area for portfolio backlog and backlog items. The Value Area differentiates items based on work performed to support Architectural requirements or Business needs. </li>
<li>Support <a href="choose-process.md#workflow-states" data-raw-source="[any-to-any workflow transitions](choose-process.md#workflow-states)">any-to-any workflow transitions</a> on Agile boards.  </li>
<li>Team configurable option to choose to track bugs on backlogs and boards either as requirements or as tasks. This necessitated adding fields to the bug WIT definition as well as adding a process configuration behavior.  </li>
</ul>
<h4>The following changes were made to the default process templates:  </h4>
<ul>
<li>WITs added: Epic</li>
<li>Miscellaneous WIT changes: 
<ul>
<li>Feature: Added <code>Time Criticality</code>, <code>Effort</code>, and <code>Value Area</code> fields; added workflow transition from <code>Active</code> to <code>Removed</code></li> 
<li>Bug: Added fields and workflow states to support the show bugs on backlog and boards team-configurable option</li> 
<li>Minor layout changes to  WIT forms to reflect additions of new fields; added <code>ID</code> field to all forms</li> 
<li>Added WIT <code>refname</code> attribute to all WIT definitions</li> 
</ul>
</li>
<li>Categories: Added Epic Category </li>
<li>Process configuration changes: 
<ul>
<li>Added Epic portfolio backlog</li> 
<li>Feature: Added <code>Effort</code> and <code>Value Area</code> fields to the default columns of the backlog  </li> 
<li>Requirement Category backlog: Added <code>Value Area</code> to the default columns of the backlog </li> 
<li>Increased the default work item count limits on all boards to 1000</li> 
<li>Added new properties to specify the default behavior for new teams </li>
</ul> </li>
<li>ProcessTemplate changes: Process template names no longer specify the version or year; Agile, CMMI, Scrum</li> 
</ul>

<h4>Changes made to Agile WIT definitions: </h4>
<ul>
<li>User Story: 
<ul>
<li>Added <code>Acceptance Criteria</code>, <code>Priority</code> and <code>Value Area</code> fields</li>
<li>Added transitions from <code>Active</code> to <code>Removed</code> and <code>Resolved</code> to <code>Removed</code>  </li>
<li>Removed rules that populated <code>Activated By</code> and <code>Activated Date</code> fields when state=<code>Resolved</code>  </li>
</ul>
</li>
<li>Bug:
<ul>
<li> Added <code>Activity</code>, <code>Story Points</code>, <code>Original Work</code>, <code>Completed Work</code>, <code>Remaining Work</code>, <code>Severity</code>, and <code>Value Area</code> fields</li>
<li>Added <code>New</code> state and corresponding workflow transitions</li>
<li>Added several field rules to copy or set defaults during state transitions </li>
<li>Added <code>Fixed and verified</code> as a Resolved Reason </li>
</ul>
</li>
<li>Task: Added rule to empty <code>Remaining Work</code> field  to support zeroing out the field when the State is set to <code>Closed</code> </li>
</ul>
<h4>Changes made to CMMI WIT definitions: </h4>
<ul>
<li>Requirement: 
<ul>
<li>Added <code>Acceptance Criteria</code>, <code>Priority</code> and <code>Value Area</code> fields</li>
<li>Added transitions from <code>Active</code> to <code>Removed</code> and <code>Resolved</code> to <code>Removed</code>  </li>
<li>Removed rules that populated <code>Activated By</code> and <code>Activated Date</code> fields when state=<code>Resolved</code>  </li>
</ul>
</li>
<li>Bug: Added <code>Size</code>, <code>Discipline</code>, <code>Original Work</code>, <code>Completed Work</code>, and <code>Value Area</code> fields  </li>
</ul>
<h4>Changes made to Scrum WIT definitions: </h4>
<ul>
<li>Product backlog item: Added <code>Priority</code> and <code>Value Area</code> fields; added transition from <code>Committed</code> to <code>Removed</code> </li>
<li>Bug: Added <code>Activity</code>, <code>Remaining Work</code>, <code>Priority</code>, and <code>Value Area</code> fields; added rule to zero out <code>Remaining Work</code> when <code>State=Done</code>.  </li>
<li>Task: Added rule to require <code>Remaining Work</code> when <code>State=In Progress</code>; removed <code>Backlog Priority</code> field from work item form  </li>
</ul>

</td>
</tr>

<tr>
<td>
<p>TFS 2013.4</p>
</td>
<td>

<h4>The following changes were made to the WIT definitions: </h4>
<ul>
<li>Scrum - Bug and Product backlog item: Removed the <code>Backlog Priority</code> field</li>
<li>Agile - Bug: Added the <code>Story Points</code> field; User Story: Removed the <code>Stack Rank</code> field </li>
<li>CMMI: Added the <code>Size</code> field to the Bug definition. Removed the <code>Stack Rank</code> field from the Requirement definition.</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>TFS 2013.3</p>
</td>
<td>
<p>Added support for the Test Plan and Test Suite feature to support customization and tracking of these items similar to other work item types. </p>
<h4>The following changes were made to the default process templates:  </h4>
<ul>
<li>WITs added: Test Plan and Test Suite </li>
<li>Categories added: Test Plan Category and Test Suite Category</li>
<li>Category updates: Added  Test Plan and Test Suite to the Hidden Types Category</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>TFS 2013.2</p>
</td>
<td>
<p>Added support for the Shared Parameters feature which allows you to <a href="../../../test/repeat-test-with-different-data.md" data-raw-source="[run tests with different data](../../../test/repeat-test-with-different-data.md)">run tests with different data</a>. </p>
<h4>The following changes were made to the default process templates:  </h4>
<ul>
<li>WITs added: Shared Parameter</li>
<li>Categories added: Shared Parameter Category </li>
<li>Category updates: Added  Shared Parameter to the Hidden Types Category </li>
</ul>
</td>
</tr>
<tr>
<td>
<p>TFS 2013 RTM</p>
</td>
<td>
<p>Added the Portfolio Backlog feature and changes to simplify process configuration management. </p>
<h4>The following changes were made to the default process templates:  </h4>
<ul>

<li>WITs added: Feature</li>
<li>Categories added: Feature Category </li>
<li>Process configuration changes: Replaced AgileConfiguration and CommonConfiguration with a single file, <a href="../../../reference/xml/process-configuration-xml-element.md" data-raw-source="[ProcessConfiguration](../../../reference/xml/process-configuration-xml-element.md)">ProcessConfiguration</a>, supports these additional features: portfolio backlogs, color assignment to WITs, tags added to the default columns on all backlog pages. </li>
<li>Build changes: Removed the build templates from the build plug-in. You now access build templates through the user interface <a href="https://msdn.microsoft.com/library/dd647547(v=vs.120).aspx">Use the Default Template for your build process</a>. </li>
<li>Reporting Services updates: To update your project with the latest reports, see <a href="../../../Report/admin/upload-reports.md" data-raw-source="[Upload reports to a project](../../../Report/admin/upload-reports.md)">Upload reports to a project</a>.</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>TFS 2012.1</p>
</td>
<td>
<p>Added the Portfolio Backlog feature and introduced changes to support Planning Tools. </p>
<h4>Changes to WIT definitions to support status updates via Kanban and taskboards</h4>
<p>Each of the default process templates that TFS provides was updated to support additional regressive transitions. These transitions, shown in red in the following illustration, support moving items back to the backlog when they were incorrectly set to done or resolved. Now when you inadvertently drag a work item on the Kanban board or the taskboard to a resolved or closed state, you can drag it back to an earlier workflow state.</p> 
<p>The following work item types now support any-to-any workflow transitions:</p>

<ul>
<li>Visual Studio Scrum 2.1: Bug, Product Backlog Item, Task</li>
<li>MSF Agile 6.1: Bug, Task, User Story</li>
<li>MSF Scrum 6.1: Bug, Task, Requirement</li>
</ul>

<img src="_img/tfs-vso-state-diagram-product-backlog-item.png" alt="State diagram for Product Backlog Item"/><br/>
<p>To apply the changes to your existing projects, you need to replace the <strong>WORKFLOW</strong> sections defined for each of the updated work item types with the new definitions. You can do this by modifying the work item type definition. See <a href="../../../reference/xml/change-workflow-wit.md" data-raw-source="[Design the Workflow](../../../reference/xml/change-workflow-wit.md)">Design the Workflow</a> and <a href="../../../reference/witadmin/witadmin-import-export-manage-wits.md" data-raw-source="[Import, export, and manage Work Item Types](../../../reference/witadmin/witadmin-import-export-manage-wits.md
)">Import, export, and manage Work Item Types</a> .</p>
</td>
</tr>
<tr>
<td>
<p>TFS 2012 RTM</p>
</td>
<td>
<p>Added the Code Review, My Work, Feedback, Storyboarding, and Planning Tools features. </p>
<h4>The following changes were added to all default process templates:  </h4>
<ul>
<li>WITs added: Code Review Request, Code Review Response, Feedback Request, and Feedback Response</li>
<li>WIT form changes:
<ul>
<li>Many work item forms have been updated to display the larger font for the <code>Title</code> field and a two column layout of tab groups </li>
<li>
<p>Maintained mnemonic support only for the following fields: <code>Area Path, Assigned To, History, Iteration Path, State,</code> and <code>Title</code>. Mnemonics have been removed from all other fields within the type definitions.</p>
</li>
</ul>
</li>

<li>Categories added: Code Review Request Category, Code Review Response Category, Feedback Request Category, Feedback Response Category, and Hidden Types Category</li>
<li>Process configuration: Added CommonConfiguration and AgileConfiguration definition files to support Agile planning tools, code review, feedback, and My Work.</li>
<li>Build plug-in: Added a new build process template. When you upgrade from earlier versions of Team Foundation Server, you can continue to use <a href="https://msdn.microsoft.com/library/dd647548.aspx" data-raw-source="[legacy build processes](https://msdn.microsoft.com/library/dd647548.aspx)">legacy build processes</a>. 
</li>
<li>
Process template plug-in: Added <code>version</code> element to support updating projects when configuring new features.
</li>
<li>
Updated support files that contain forward links to process guidance content to point to the latest content.
</li>
</ul>

<h4>The following changes were made to the Scrum process:</h4>
<ul>
<li>
Removed the Sprint type definition and All Sprints query, whose functionality has been replaced with the Agile planning tools.
</li>
<li>
<p>Removed the Backlog Priority field from the work item form for the Product Backlog type definition. This field is used in the background to track the relative priority of items displayed on the backlog pages. </p>
</li>
<li>
<p>The <code>Removed</code> state was added to the workflow state for the Bug, Product Backlog Item, and Task type definitions, which supports removing cut items from the backlog. </p>
</li>
<li>
<p>Added the <code>Storyboards</code> tab to the Product Backlog Item type definition.</p>
</li>
<li>
<p>Added the <a href="https://msdn.microsoft.com/library/dn641200.aspx" data-raw-source="[Backlog Overview report](https://msdn.microsoft.com/library/dn641200.aspx)">Backlog Overview report</a> to the set of SQL Server Reporting Services reports, similar to the Agile <a href="https://msdn.microsoft.com/library/dd380648.aspx" data-raw-source="[Stories Overview report](https://msdn.microsoft.com/library/dd380648.aspx)">Stories Overview report</a>.</p>
</li>
</ul>

<h4>The following changes were made to the Agile process:</h4>
<ul>
<li>
<p>The <code>New</code> state was added as the initial state for User Stories and Tasks. This change was introduced to support transitioning User Stories and Tasks from a <code>New</code> state to an <code>Active</code> state. Without the <code>New</code> state, User Stories assigned to an iteration remain on the product backlog until they are resolved, which is not a desired or expected behavior. See <a href="https://msdn.microsoft.com/library/hh500412(v=vs.110).aspx">Update the Workflow for Agile Team Projects</a>. </p>
</li>
<li>
<p>To support removing cut work items from the backlog, the <code>Removed</code> state was added to the workflow state for the following work item types: User Story and Task.  </p>
</li>
<li>
<p>Added the <code>Storyboards</code> tab to the User Story WIT.</p>
</li>
<li>
<p>The Product Planning and Iteration Backlog Excel workbooks have been removed. The Agile planning tools replace this functionality.</p>
</li>
</ul>
<h4>The following changes were made to the CMMI process:</h4>
<ul>
<li>Requirement: Added the <code>Size</code> field used in calculating team velocity and forecast; added the <code>Storyboards</code> tab </li>
<li>Shared queries: Added  Corrective Action and Mitigation Action. </li>
</ul>
</td>
</tr>
</tbody>
</table>


## Related upgrade notes

To update your existing projects hosted on an on-premises TFS to access new features, [run the Configure Features wizard](../../../reference/configure-features-after-upgrade.md). In the event that you're upgrading from a much earlier version of TFS or you've customized your project, you'll need to make some manual updates.  

See the following resources as they relate to updating your project:  

- [Update a customized process template to access new features](../../../reference/update-customized-process-template.md)
- [Add features using a manual update process](../../../reference/add-features-manually.md)
- [Before you upgrade TFS](../../../reference/upgrade-tfs-2008-or-2010.md)
- [Additional configuration options](../../../reference/additional-configuration-options.md)
- [Upload reports to a project](../../../Report/admin/upload-reports.md)
