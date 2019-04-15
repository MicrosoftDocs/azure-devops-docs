---
title: Changes made to process templates
titleSuffix: Azure Boards  
description: Summary of changes made to Agile, Scrum, and CMMI process templates to support updating existing projects after a TFS upgrade  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 1541C32C-FD7A-4415-A282-06DF14D1F688 
ms.topic: reference 
ms.manager: jillfra
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
<p>Predefined Shared Queries are no longer created upon project creation. The definitions for Shared Queries have been removed from the process template. Shared Queries defined in custom process templates are created. You can also add Shared Queries to a process template as described in [Add work item queries to a process template](../../../reference/process-templates/add-work-item-queries-process-template.md).</p>
</td>
</tr>

<tr>
<td>
<p>TFS 2017</p>
</td>
<td>
<p>Added the **WebLayout** section within the **FORM** section of all work item type (WIT) definitions. This section supports the new work item tracking experience in the web portal. It includes the **SystemControls** section and the new **LinksControlOptions** for managing link relationships.  To learn more, see [New work item experience](../../../reference/process/new-work-item-experience.md), [WebLayout and Control elements](../../../reference/xml/weblayout-xml-elements.md), and [LinksControlOptions XML elements (Web form)](../../../reference/xml/linkscontroloptions-xml-elements.md).</p>
<p>**Note**: When you upgrade an on-premises TFS to TFS 2017, the new web form is automatically available when you add projects to a collection. For existing projects, an admin is required to [enable the new form](../../../reference/manage-new-form-rollout.md). The reason the new form isn't automatically enabled for existing projects is to prevent overwriting customizations made to existing WIT definitions.</p>
</td>
</tr>
<tr>
<td>
<p>TFS 2015</p>
</td>
<td>
<p>Added the Bugs Behavior feature, and enhancements to the Planning Tools and Portfolio Backlogs features. Several enhancements were made to support the [Scaled Agile Framework (SAFe)](../../plans/scaled-agile-framework.md).</p>
<h4>The changes introduced support the following feature additions or enhancements:</h4>
<ul>
<li>Process template names have been changed to Agile, CMMI, and Scrum and have been repurposed as locked, system templates. You can export these templates for customization, but you can no longer overwrite these templates with your changes. </li>
<li>Second-level portfolio backlog, Epic, plus configurable option for teams to activate portfolio backlogs. </li>
<li>Team configurable option to choose which backlogs and portfolio backlogs are active.  </li>
<li>Tracking Time Criticality of portfolio backlog items. Time Criticality captures how the business value decreases over time for a Feature or Epic. Higher values indicate that the item is inherently more time critical than those items with lower values. </li>
<li>Tracking the Value Area for portfolio backlog and backlog items. The Value Area differentiates items based on work performed to support Architectural requirements or Business needs. </li>
<li>Support [any-to-any workflow transitions](choose-process.md#workflow-states) on Agile boards.  </li>
<li>Team configurable option to choose to track bugs on backlogs and boards either as requirements or as tasks. This necessitated adding fields to the bug WIT definition as well as adding a process configuration behavior.  </li>
</ul>
<h4>The following changes were made to the default process templates:  </h4>
<ul>
<li>WITs added: Epic</li>
<li>Miscellaneous WIT changes: 
<ul>
<li>Feature: Added ```Time Criticality```, ```Effort```, and ```Value Area``` fields; added workflow transition from ```Active``` to ```Removed```</li> 
<li>Bug: Added fields and workflow states to support the show bugs on backlog and boards team-configurable option</li> 
<li>Minor layout changes to  WIT forms to reflect additions of new fields; added ```ID``` field to all forms</li> 
<li>Added WIT ```refname``` attribute to all WIT definitions</li> 
</ul>
</li>
<li>Categories: Added Epic Category </li>
<li>Process configuration changes: 
<ul>
<li>Added Epic portfolio backlog</li> 
<li>Feature: Added ```Effort``` and ```Value Area``` fields to the default columns of the backlog  </li> 
<li>Requirement Category backlog: Added ```Value Area``` to the default columns of the backlog </li> 
<li>Increased the default work item count limits on all boards to 1000</li> 
<li>Added new properties to specify the default behavior for new teams </li>
</ul> </li>
<li>ProcessTemplate changes: Process template names no longer specify the version or year; Agile, CMMI, Scrum</li> 
</ul>

<h4>Changes made to Agile WIT definitions: </h4>
<ul>
<li>User Story: 
<ul>
<li>Added ```Acceptance Criteria```, ```Priority``` and ```Value Area``` fields</li>
<li>Added transitions from ```Active``` to ```Removed``` and ```Resolved``` to ```Removed```  </li>
<li>Removed rules that populated ```Activated By``` and ```Activated Date``` fields when state=```Resolved```  </li>
</ul>
</li>
<li>Bug:
<ul>
<li> Added ```Activity```, ```Story Points```, ```Original Work```, ```Completed Work```, ```Remaining Work```, ```Severity```, and ```Value Area``` fields</li>
<li>Added ```New``` state and corresponding workflow transitions</li>
<li>Added several field rules to copy or set defaults during state transitions </li>
<li>Added ```Fixed and verified``` as a Resolved Reason </li>
</ul>
</li>
<li>Task: Added rule to empty ```Remaining Work``` field  to support zeroing out the field when the State is set to ```Closed``` </li>
</ul>
<h4>Changes made to CMMI WIT definitions: </h4>
<ul>
<li>Requirement: 
<ul>
<li>Added ```Acceptance Criteria```, ```Priority``` and ```Value Area``` fields</li>
<li>Added transitions from ```Active``` to ```Removed``` and ```Resolved``` to ```Removed```  </li>
<li>Removed rules that populated ```Activated By``` and ```Activated Date``` fields when state=```Resolved```  </li>
</ul>
</li>
<li>Bug: Added ```Size```, ```Discipline```, ```Original Work```, ```Completed Work```, and ```Value Area``` fields  </li>
</ul>
<h4>Changes made to Scrum WIT definitions: </h4>
<ul>
<li>Product backlog item: Added ```Priority``` and ```Value Area``` fields; added transition from ```Committed``` to ```Removed``` </li>
<li>Bug: Added ```Activity```, ```Remaining Work```, ```Priority```, and ```Value Area``` fields; added rule to zero out ```Remaining Work``` when ```State=Done```.  </li>
<li>Task: Added rule to require ```Remaining Work``` when ```State=In Progress```; removed ```Backlog Priority``` field from work item form  </li>
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
<li>Scrum - Bug and Product backlog item: Removed the ```Backlog Priority``` field</li>
<li>Agile - Bug: Added the ```Story Points``` field; User Story: Removed the ```Stack Rank``` field </li>
<li>CMMI: Added the ```Size``` field to the Bug definition. Removed the ```Stack Rank``` field from the Requirement definition.</li>
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
<p>Added support for the Shared Parameters feature which allows you to [run tests with different data](../../../test/repeat-test-with-different-data.md). </p>
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
<li>Process configuration changes: Replaced AgileConfiguration and CommonConfiguration with a single file, [ProcessConfiguration](../../../reference/xml/process-configuration-xml-element.md), supports these additional features: portfolio backlogs, color assignment to WITs, tags added to the default columns on all backlog pages. </li>
<li>Build changes: Removed the build templates from the build plug-in. You now access build templates through the user interface <a href="https://msdn.microsoft.com/library/dd647547(v=vs.120).aspx">Use the Default Template for your build process</a>. </li>
<li>Reporting Services updates: Backlog Overview (Scrum), <a href="https://msdn.microsoft.com/library/dd380648.aspx">Stories Overview</a> and <a href="https://msdn.microsoft.com/library/dd380641.aspx">Stories Progress</a> (Agile), and <a href="https://msdn.microsoft.com/library/ee461517.aspx">Requirements Overview</a> and <a href="https://msdn.microsoft.com/library/ee461582.aspx">Requirements Progress</a> (CMMI). These updates reflect changes required with the introduction of the Feature portfolio backlog work item type as described in this blog post: <a href="http://blogs.msdn.com/devops/2013/10/22/update-your-overview-and-progress-reports-to-support-the-portfolio-backlogs.aspx">Update your Overview and Progress reports to support the Portfolio backlogs</a>.   
<p>To update your project with the latest reports, see [Upload reports to a project](../../../Report/admin/upload-reports.md).</p>
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

![State diagram for Product Backlog Item](_img/tfs-vso-state-diagram-product-backlog-item.png)  

<p>To apply the changes to your existing projects, you need to replace the <strong>WORKFLOW</strong> sections defined for each of the updated work item types with the new definitions. You can do this by modifying the work item type definition. See [Design the Workflow](../../../reference/xml/change-workflow-wit.md) and [Import, export, and manage Work Item Types](../../../reference/witadmin/witadmin-import-export-manage-wits.md
) .</p>
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
<li>Many work item forms have been updated to display the larger font for the ```Title``` field and a two column layout of tab groups </li>
<li>
<p>Maintained mnemonic support only for the following fields: ```Area Path, Assigned To, History, Iteration Path, State,``` and ```Title```. Mnemonics have been removed from all other fields within the type definitions.</p>
</li>
</ul>
</li>

<li>Categories added: Code Review Request Category, Code Review Response Category, Feedback Request Category, Feedback Response Category, and Hidden Types Category</li>
<li>Process configuration: Added CommonConfiguration and AgileConfiguration definition files to support Agile planning tools, code review, feedback, and My Work.</li>
<li>Build plug-in: Added a new build process template. When you upgrade from earlier versions of Team Foundation Server, you can continue to use [legacy build processes](https://msdn.microsoft.com/library/dd647548.aspx). 
</li>
<li>
Process template plug-in: Added ```version``` element to support updating projects when configuring new features.
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
<p>The ```Removed``` state was added to the workflow state for the Bug, Product Backlog Item, and Task type definitions, which supports removing cut items from the backlog. </p>
</li>
<li>
<p>Added the ```Storyboards``` tab to the Product Backlog Item type definition.</p>
</li>
<li>
<p>Added the [Backlog Overview report](https://msdn.microsoft.com/library/dn641200.aspx) to the set of SQL Server Reporting Services reports, similar to the Agile [Stories Overview report](https://msdn.microsoft.com/library/dd380648.aspx).</p>
</li>
</ul>

<h4>The following changes were made to the Agile process:</h4>
<ul>
<li>
<p>The ```New``` state was added as the initial state for User Stories and Tasks. This change was introduced to support transitioning User Stories and Tasks from a ```New``` state to an ```Active``` state. Without the ```New``` state, User Stories assigned to an iteration remain on the product backlog until they are resolved, which is not a desired or expected behavior. See <a href="https://msdn.microsoft.com/library/hh500412(v=vs.110).aspx">Update the Workflow for Agile Team Projects</a>. </p>
</li>
<li>
<p>To support removing cut work items from the backlog, the ```Removed``` state was added to the workflow state for the following work item types: User Story and Task.  </p>
</li>
<li>
<p>Added the ```Storyboards``` tab to the User Story WIT.</p>
</li>
<li>
<p>The Product Planning and Iteration Backlog Excel workbooks have been removed. The Agile planning tools replace this functionality.</p>
</li>
</ul>
<h4>The following changes were made to the CMMI process:</h4>
<ul>
<li>Requirement: Added the ```Size``` field used in calculating team velocity and forecast; added the ```Storyboards``` tab </li>
<li>Shared queries: Added  Corrective Action and Mitigation Action. </li>
</ul>
</td>
</tr>
</tbody>
</table>

 
##Related upgrade notes

To update your existing projects hosted on an on-premises TFS to access new features, [run the Configure Features wizard](../../../reference/configure-features-after-upgrade.md). In the event that you're upgrading from a much earlier version of TFS or you've customized your project, you'll need to make some manual updates.  

See the following resources as they relate to updating your project:  

- [Update a customized process template to access new features](../../../reference/update-customized-process-template.md)
- [Add features using a manual update process](../../../reference/add-features-manually.md)
- [Before you upgrade TFS](../../../reference/upgrade-tfs-2008-or-2010.md)
- [Additional configuration options](../../../reference/additional-configuration-options.md)
- [Upload reports to a project](../../../Report/admin/upload-reports.md)
