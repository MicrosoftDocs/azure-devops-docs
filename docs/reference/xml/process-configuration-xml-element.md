---
title: ProcessConfiguration syntax 
titleSuffix: Azure DevOps & TFS  
description: XML syntax and usage for all ProcessConfiguration elements to support customization of work item types and Agile tool backlogs and boards 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 4314c6ad-d6ca-4cf2-a3c8-46e4e8ed759a
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 12/15/2017  
---

# Process configuration XML element reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)] 

Process configuration defines the default configuration and functional capabilities that your teams can access using the web portal Agile tools. These tools, include the product backlog, sprint backlogs, Kanban board, and task board and are customizable for each team you add to project.

Configuration elements specify the work item types (WITs), default columns, fields used by the tools, and other elements. The main configurations made determine which items will display for the portfolio, product, and sprint backlogs by defining the **PortfolioBacklog**, **RequirementBacklog**, and **TaskBacklog** sections of the process configuration XML definition file. In addition, process configuration defines the workflow mapping of state-to-state category for all WITs that require mapping.

<img src="_img/process-config-xml-element-groups.png" alt="Process configuration XML elements" style="border: 1px solid #C3C3C3;" /> 

For a summary of what you can configure through the user interface, see [Customize work tracking, Add teams and configure their Scrum and Kanban tools](../customize-work.md).

<a id="areas-to-customize">  </a>

Areas that you can customize through ProcessConfiguration:


> [!div class="mx-tdBreakAll"]  
> |Backlogs  |Work item types (WITs)  |Other tools  |  
> |-------------|----------|---------| 
> |- [Configure the quick add panel](#add) <br/>- [Define default columns](#columns) <br/>- [Map state categories for a WIT category](#map)<br/>- [Set number of task board items](#number_items)<br/>- [Set weekend days (Scrum)](#weekend_days) <sup>1</sup><br/>- [Set default Show bugs on backlogs](#behaviors)  <sup>1</sup><br/>- [Set default hidden backlogs](#behaviors) <sup>1</sup>  |- [Specify the WIT color](#wit-colors)<br/>- [Specify the workflow state color](#state-colors)  <sup>2</sup><br/>- [Specify the WIT icon](#wit-icons)  <sup>3</sup> |- [Assign Agile tool fields](#fields)<br/>- [Map tool-specific state categories](#tool_wits) <br/>- [Specify properties](#behaviors) |

**Notes:**
1. Items noted with an asterisk set a default for the project. These items can be changed for each team through [team settings](../../organizations/settings/manage-teams.md).
2. Supported for Hosted XML, and for On-premises XML for TFS 2015.2 or later version.  
3. Supported for Hosted XML, and for On-premises XML for TFS 2017.2 or later version.  

> [!IMPORTANT]  
>If you want to customize your project to add custom work item types to appear on your backlogs or boards or add custom portfolio backlogs, see [Add a work item type to a backlog and board](../add-wits-to-backlogs-and-boards.md) and [Add portfolio backlogs](../add-portfolio-backlogs.md).  

### Update the process configuration 

> [!NOTE]    
>To access the latest version of the process templates, install the latest version of TFS and download the templates using the [Process Template Manager](../../boards/work-items/guidance/manage-process-templates.md).

To update the process configuration for a project, you export the XML definition file, edit it, and then import the file. You export these files either by [exporting a process](../../organizations/settings/work/import-process/import-process.md#export-a-process) or [exporting the process configuration definition file](../witadmin/witadmin-import-export-process-configuration.md).

[![Export ProcessConfig definition file](_img/export-process-step-1.png)](../witadmin/witadmin-import-export-process-configuration.md)[![Edit XML definition file](_img/export-process-step-2.png)](#areas-to-customize)[![Import WIT definition file](_img/export-process-step-3.png)](../witadmin/witadmin-import-export-process-configuration.md)![Refresh and verify changes](_img/export-process-step-4.png)  

[!INCLUDE [temp](../../_shared/process-editor.md)]  

<a id="backlog_page">  </a>

## Configure a backlog

You can customize the following elements for the product backlog, sprint backlogs, and portfolio backlogs:

-   **State category mappings**:&#160;&#160;Map workflow states to state categories  (previously referred to as a metastate). These mappings support the display of all Agile planning tools, including the Kanban and task boards.

-   **Quick add panel**:&#160;&#160;Specify the WITs and work item fields that appear for quickly adding items to the backlog.

    To change the types of work items that are considered backlog items or tasks, you add them to the corresponding category. For an example, see [Add bugs to the task board or backlog](../add-wits-to-backlogs-and-boards.md).

-   **Column fields**: Define the default fields and column sequence.

You configure backlogs within the XML sections that appear in the following sample:

> [!div class="tabbedCodeSnippets"]
```XML
<PortfolioBacklogs>
      <PortfolioBacklog category="Microsoft.EpicCategory" pluralName="Epics" singularName="Epic" workItemCountLimit="1000">
. . . 
      </PortfolioBacklog>
      <PortfolioBacklog category="Microsoft.FeatureCategory" pluralName="Features" singularName="Feature" parent="Microsoft.EpicCategory" workItemCountLimit="1000">
. . . 
      </PortfolioBacklog>
</PortfolioBacklogs>
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Stories" singularName="User Story" workItemCountLimit="1000">
. . . 
</RequirementBacklog>
<TaskBacklog category="Microsoft.TaskCategory" pluralName="Tasks" singularName="Task" workItemCountLimit="1000">
. . . 
</TaskBacklog>
```


> [!NOTE]   
> Depending on the process associated with your ProcessConfiguration file&mdash;[Agile](../../boards/work-items/guidance/agile-process.md), [Scrum](../../boards/work-items/guidance/scrum-process.md), or [CMMI](../../boards/work-items/guidance/cmmi-process.md)&mdash;the `pluralName` for the `RequirementCategory` will correspond to `Stories` (Agile), `Backlog Items` (Scrum), or `Requirements` (CMMI). All three are similar: they describe the customer value to delivered and the work to be performed.  


#### Syntax for PortfolioBacklogs elements

<table>
<thead>
<tr>
<th width="15%"><p>Element</p></th>
<th width="85%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p><strong>PortfolioBacklogs</strong></p></td>
<td><p>Optional. Container element for portfolio backlogs.</p></td>
</tr>
<tr>
<td><p><strong>PortfolioBacklog</strong></p></td>
<td><p>Optional. Up to five instances.</p>
<p>Container element that defines the state category mappings, default columns, and quick add panel for a portfolio backlog.</p>
<pre><code>&lt;PortfolioBacklog category=&quot;PortfolioCategory&quot; parent=&quot;ParentCategory&quot;  
      pluralName=&quot;PluralName&quot; singularName=&quot;SingleName&quot; workItemCountLimit=&quot;MaximumLimit&gt;  
      &lt;States&gt; . . . &lt;/States&gt;  
      &lt;Columns&gt; . . . &lt;/Columns&gt;  
      &lt;AddPanel&gt; . . . &lt;/ AddPanel&gt;  
&lt;/PortfolioBacklog &gt;  
</code></pre>

<p>Assign values to the attributes as described:</p>
<ul>
<li><p><strong>category</strong>: Specify the name of a category that you have defined in the categories definition file for the project that contains the WITs to be associated with this backlog type.</p></li>
<li><p><strong>parent</strong>: Specify the name of the category that represents the parent portfolio backlog within the hierarchy.</p></li>
<li><p><strong>pluralName</strong>: Specify the plural label to use when referring to the WITs associated with this backlog type. For example, Stories, Goals, Initiatives, or Epics.</p></li>
<li><p><strong>singularName</strong>: Specify the singular label to use when referring to the WITs associated with this backlog type. For example, Story, Goal, Initiative, or Epic.</p></li>
<li><p><strong>workItemCountLimit</strong>: Specify an integer. Default is 1000. Backlogs and boards will limit the count of items displayed based on this limit.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>RequirementBacklog</strong></p></td>
<td><p>Required. One instance only.</p>
<p>Container element that defines the state category mappings, default columns, and quick add panel for the product backlog. The product backlog displays all active items in the team's backlog.</p>
<pre><code>&lt;RequirementBacklog category=&quot;RequirementCategory&quot;  
      pluralName=&quot;PluralName&quot; singularName=&quot;SingleName&quot;   
      workItemCountLimit=&quot;MaximumLimit&quot; &gt;  
      &lt;States&gt; . . . &lt;/States&gt;
      &lt;Columns&gt; . . . &lt;/Columns&gt;
      &lt;AddPanel&gt; . . . &lt;/ AddPanel&gt;
&lt;/RequirementBacklog &gt;
</code></pre>
</td>
</tr>
<tr>
<td><p><strong>TaskBacklog</strong></p></td>
<td><p>Required. One instance only.</p>
<p>Container element used to customize the layout of sprint backlogs.</p>
<pre><code>&lt;TaskBacklog category=&quot;Microsoft.TaskCategory&quot; pluralName=&quot;Tasks&quot; 
singularName=&quot;Task workItemCountLimit=&quot;MaximumLimit&quot;&gt;
. . . 
&lt;/TaskBacklog &gt; 
</code></pre>
</td>
</tr>
</tbody>
</table>

#### Implementation notes
::: moniker range="azure-devops"
-   Each backlog is restricted to a total of 1000 work items. You can't modify this limit for Azure DevOps Services.  
::: moniker-end
::: moniker range=">= tfs-2013 <= azure-devops-2019"
-   By default, each backlog is restricted to a total of 1000 work items. For TFS you can change this limit by specifying a value for the `workItemCountLimit` attribute.  
::: moniker-end
-   The values assigned to *CategoryName* must correspond to a category group defined for the project. You [specify category groups in the definition file for Categories](categories-xml-element-reference.md).  
-   You use [portfolio backlogs](../../boards/backlogs/organize-backlog.md) to organize your backlog, view the rollup of backlog items at lower levels, and to view progress across several teams. New and upgraded projects contain two portfolio backlog levels: Features and Epics. You can add up to three additional levels. Only the top level portfolio backlog doesn't specify a parent category.  
-   Your [product backlog](../../boards/backlogs/create-your-backlog.md) corresponds to your project plan, the roadmap for what your team plans to deliver. It lists work items whose WITs belong to the Requirements Category. In order to manage different WITs than those provided by your default project, you can add WITs to the Requirements Category and map the workflow states to state categories.  
-   Your [sprint or iteration backlogs](https://msdn.microsoft.com/library/ee191595) display both the set of requirements that you and your team have committed to in a specific sprint cycle and the tasks that you have linked to those requirements. You link tasks to requirements using the parent-child link type. Because the WITs that appear on these backlogs correspond to the same types that appear on the product backlog, much of the customization work that you do for the product backlog will define the functionality of the sprint backlog.  

<a id="map">  </a>
### Map WIT category workflow states to state categories
Several WITs require their workflow states to be mapped to a state category. Workflow states define how a work item progresses from first activation or creation to closed or complete. For example, the states defined for the Scrum product backlog item define a progression of four states, from **New**, **Approved**, **Committed**, to **Done**, and also includes a fifth state, **Removed**, to account for a state removed from the backlog without being implemented. Workflow states are associated with the `value` attribute. 

State categories, on the other hand, determine how the Agile planning tools treat each workflow state. The primary state categories used by the backlog and task board are **Proposed**, **InProgress**, and **Complete**. State categories are associated with the `type` attribute. To learn more, see  [Workflow states and state categories](../../boards/work-items/workflow-and-state-categories.md). 

By associating each workflow state to a state category, the background operations performed to display the backlog and task boards know how to correctly interpret the status of each work item. For example, the following mappings are defined for the Scrum product backlog.

> [!div class="tabbedCodeSnippets"]
```XML
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Backlog items" singularName="Backlog item">
      <States>
      <State value="New" type="Proposed" />
      <State value="Approved" type="Proposed" />
      <State value="Committed" type="InProgress" />
      <State value="Done" type="Complete" />
      </States>
 . . .
</RequirementBacklog>
```

There are three groups of state categories: Agile, Bug, and Feedback. The following table describes the mapping attributes and values.

#### Syntax for States elements (WIT category)

<table>
<thead>
<tr>
<th width="15%"><p>Element</p></th>
<th width="85%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p><strong>State</strong></p></td>
<td><p>Required. Assigns a workflow state to a state category.</p>

<pre><code>&lt;State value=&quot;ValueName&quot; type=&quot;TypeName&quot; /&gt;</code></pre>

<p>Valid values for <i>ValueName</i> correspond to a value assigned to a <strong>STATE</strong> within the <strong>WORKFLOW</strong> section of those WITs assigned to the category group.</p>
<p>Valid values for <i>TypeName</i> correspond to one of the following enumerated values:</p>
<ul>
<li><p>Agile: Use for all work item types.</p>
<ul>
<li><p><strong>Proposed</strong>: Indicates work items that are new, not yet committed, or not yet being worked on.</p></li>
<li><p><strong>InProgress</strong>: Indicates work items that have been committed or are actively being worked on.</p></li>
<li><p><strong>Complete</strong>: Indicates work items that have been implemented. For the [Kanban board](../../boards/boards/kanban-basics.md) to be valid, at least one workflow state must be mapped to the <strong>Complete</strong> state category.</p>
<p>Once a workflow state transitions to a state that is associated with the <strong>Complete</strong> metastate, the associated work item will fall off the product backlog. However, it will continue to be listed on the Kanban board.</p></li>
</ul>
<p>Work items in a workflow state that aren't mapped to one of the state categories don't appear on the backlog or board.</p></li>
<li><p>Bug: Use only for work item types grouped within the Bug Category. In addition to the Agile state categories, includes the <strong>Resolved</strong> state category which indicates bugs that have been resolved.</p>
<blockquote>**NOTE:**<br/>
You can only assign the <strong>Resolved</strong> state category to a workflow state specified under the <strong>BugWorkItems</strong> element.</blockquote>

</li>
<li><p>Feedback: Use only for work item types grouped within the Feedback Request or Feedback Response categories. <strong>Requested</strong>, <strong>Received</strong>, <strong>Reviewed</strong>, and <strong>Declined</strong>.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>States</strong></p></td>
<td><p>Specifies a collection of <strong>State</strong> elements that associate WIT workflow states with state categories.</p>
<p>Required element for the following parent elements:</p>
<ul>
<li><strong>BugWorkItems</strong></li>
<li><strong>PortfolioBacklog</strong></li>
<li><strong>RequirementBacklog</strong></li>
<li><strong>TaskBacklog</strong></li>
<li><strong>TestPlanWorkItems</strong></li>
<li><strong>TestSuiteWorkItems</strong></li>
<li><strong>FeedbackRequestWorkItems</strong></li>
<li><strong>FeedbackResponseWorkItems</strong></li>
</ul>
</td>
</tr>
</tbody>
</table>

<a id="columns">  </a>
### Set default columns 
Specify which fields you want displayed on each backlog within the **Columns** section. Changes you make through the **Column Options** dialog persist until you change them again.

![Default columns and sequence for backlog page](_img/process-configuration-xml-element-reference/IC660915.png)  

Here's the default configuration defined by the Scrum process template for the product backlog.

> [!div class="tabbedCodeSnippets"]
```XML
<Columns>
      <Column refname="Microsoft.VSTS.Common.Priority" width="400" />
      <Column refname="System.Title" width="400" />
      <Column refname="System.State" width="100" />
      <Column refname="Microsoft.VSTS.Scheduling.Effort" width="50" />
      <Column refname="System.IterationPath" width="200" />
</Columns>
```


#### Syntax for Columns elements
<table>
<thead>
<tr>
<th width="15%"><p>Element</p></th>
<th width="85%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p><strong>Columns</strong></p></td>
<td><p>Specifies a collection of <strong>Column</strong> elements. Required element for the backlog elements: <strong>PortfolioBacklog</strong>, <strong>RequirementBacklog</strong>, and <strong>TaskBacklog</strong>.</p></td>
</tr>
<tr>
<td><p><strong>Column</strong></p></td>
<td><p>Specifies a field to appear as a column on a backlog.</p>

<pre><code>&lt;Column refname=&quot;FieldReferenceName&quot;  width=&quot;FieldWidth&quot; /&gt;</code></pre>
</td>
</tr>
</tbody>
</table>

**Task board column headings**

The column headings that appear on the task board correspond to the workflow states assigned to the default WIT assigned to the Task Category. The column sequence corresponds to the natural progression of the workflow transitions, moving from left to right. To modify the column layout, you modify the workflow for the WIT assigned to the Task Category. The workflow states defined for the default task type in the Task Category must be assigned to a valid state category as described in [Map state categories for a category of work item types](#map).

<a id="add">  </a>

### Customize the quick add panel
You can add fields for any quick add panel. For example, the following example adds **Business Value** to the product backlog panel.

![Backlog panel with Business Value field added](_img/process-configuration-xml-element-reference/IC660916.png)  

The panel only displays fields that are included in the **FIELDS** section of the WIT definition for the WIT selected. For example, if you select the bug WIT, then only Title displays, because Business Value isn't defined for bugs. To add another WIT to the panel, you add it to the Requirements Category as described  in [Add a work item type to a backlog and board](../add-wits-to-backlogs-and-boards.md).

The following code corresponds to the default assignments defined in the Visual Studio Scrum and MSF for Agile process templates.

> [!div class="tabbedCodeSnippets"]
```XML
<AddPanel>
      <Fields>
      <Field refname="System.Title" />
      </Fields>
</AddPanel>
```


#### Syntax for AddPanel elements
<table>
<thead>
<tr>
<th width="15%"><p>Element</p></th>
<th width="85%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p><strong>AddPanel</strong></p></td>
<td><p>Container element used to specify the "quick add" experience, the fields to appear within the panel area where new backlog items are defined.</p></td>
</tr>
<tr>
<td><p><strong>Fields</strong></p></td>
<td><p>Specifies a collection of <strong>Field</strong> elements.</p></td>
</tr>
<tr>
<td><p><strong>Field</strong></p></td>
<td><p>Specifies a work item field to appear within the panel for the product backlog.</p>

<pre><code>&lt;Field refname=&quot;FieldReferenceName&quot;/&gt;</code></pre>

<p>The same field should appear on the work item form of each WIT included in the category for the backlog.</p></td>
</tr>
</tbody>
</table>

<a id="number_items">  </a>

### Set task board number of work items 
For performance reasons, the task board is restricted to display a maximum of 1000 work items. When you open the task board, all work items are loaded into cache. Limiting the number of work items may yield quicker load times. You can change this limit by specifying a value for the `workItemCountLimit` attribute of the **TaskBacklog** element.

For example, you can decrease the limit by specifying `workItemCountLimit="800"`:

> [!div class="tabbedCodeSnippets"]
```XML
<TaskBacklog category="Microsoft.TaskCategory" pluralName="Tasks" singularName="Task" workItemCountLimit="800" >
. . .
</TaskBacklog>
```

<a id="tool_wits">  </a>

## Map state categories for tool-specific work item types

State category mappings are defined for additional WIT categories. For the Scrum process template, this includes mappings for the feedback request and response categories. For the MSF Agile and CMMI process templates, it also includes mappings for the bug category. (Scrum includes bugs in the Requirement Category and therefore defines the state category mappings within the **RequirementBacklog** section.)

> [!div class="tabbedCodeSnippets"]
```XML
<FeedbackRequestWorkItems category="Microsoft.FeedbackRequestCategory" pluralName="Feedback Requests" singularName="Feedback Request">
      <States>
      <State value="Active" type="InProgress" />
      <State value="Closed" type="Complete" />
      </States>
</FeedbackRequestWorkItems>
<FeedbackResponseWorkItems category="Microsoft.FeedbackResponseCategory" pluralName="Feedback Responses" singularName="Feedback Response">
      <States>
      <State value="Active" type="InProgress" />
      <State value="Closed" type="Complete" />
      </States>
</FeedbackResponseWorkItems>
```


The following table describes the additional elements used to define the state category mappings for tool-specific work item types. See [Map state categories for a category of work item types](#map) for information about assigning the actual state values and types. The *CategoryName* must correspond to a category defined for the project.

#### Syntax for tool-specific state category mapping elements

<table>
<thead>
<tr>
<th width="20%"><p>Element</p></th>
<th width="80%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p><strong>BugWorkItems</strong></p></td>
<td><p>Optional. Container element that defines the state category mappings for work item types assigned to the Bug Category. In addition to how these mappings are used in the display of Agile tools, they also control how the <strong>My Work</strong> feature in Team Explorer updates the bug state as developers move bugs using <strong>My Work</strong>. To learn more, see [Get your code reviewed (TFVC)](../../repos/tfvc/get-code-reviewed-vs.md).</p>

<pre><code>&lt;BugWorkItems category=&quot;CategoryName&quot;  
      pluralName=&quot;PluralName&quot; singularName=&quot;SingleName&quot;&gt;
      &lt;States&gt;
. . .
      &lt;/States&gt;
&lt;/BugWorkItems&gt;</code></pre>
</td>
</tr>
<tr>
<td><p><strong>FeedbackRequestWorkItems</strong></p></td>
<td><p>Required. Do not customize. Container element that defines the state category mappings for work item types assigned to the feedback request category.</p>

<pre><code>&lt;FeedbackResponseWorkItems category=&quot;CategoryName&quot;  
      pluralName=&quot;PluralName&quot; singularName=&quot;SingleName&quot;&gt;
      &lt;States&gt;
. . .
      &lt;/States&gt;
&lt;/FeedbackRequestWorkItems&gt;</code></pre>
</td>
</tr>
<tr>
<td><p><strong>FeedbackResponseWorkItems</strong></p></td>
<td><p>Required. Do not customize. Container element that defines the state category mappings for work item types assigned to the feedback response category.</p>

<pre><code>&lt;FeedbackResponseWorkItems category=&quot;CategoryName&quot;  
      pluralName=&quot;PluralName&quot; singularName=&quot;SingleName&quot;&gt;
      &lt;States&gt;
. . .
      &lt;/States&gt;
&lt;/FeedbackResponseWorkItems&gt;</code></pre>
</td>
</tr>
<tr>
<td><p><strong>TestPlanWorkItems</strong></p></td>
<td><p>Only required when you customize the workflow state for Test Plan and you support connections to the project from versions of Test Manager installed with Visual Studio 2013.2 or earlier versions.</p>
<p>Container element that defines the state category mappings for work item types assigned to the Test Plan Category. For example:</p>

<pre><code>&lt;TestPlanWorkItems category=&quot;Microsoft.TestPlanCategory&quot;  
      pluralName=&quot;Test Plans&quot; singularName=&quot;Test Plan&quot;&gt;
       &lt;States&gt;
            &lt;State type=&quot;InProgress&quot; value=&quot;Design&quot; /&gt;
            &lt;State type=&quot;InProgress&quot; value=&quot;Testing&quot; /&gt;
            &lt;State type=&quot;Complete&quot; value=&quot;Signed Off&quot; /&gt;
       &lt;/States&gt;
  &lt;/TestPlanWorkItems&gt;</code></pre>
</td>
</tr>
<tr>
<td><p><strong>TestSuiteWorkItems</strong></p></td>
<td><p>Only required when you customize the workflow state for Test Suite and you support connections to the project from versions of Test Manager installed with Visual Studio 2013.2 or earlier versions.</p>
<p>Container element that defines the state category mappings for work item types assigned to the Test Suite Category. For example:</p>

<pre><code>&lt;TestSuiteWorkItems  
      category=&quot;Microsoft.TestSuiteCategory&quot;  
      pluralName=&quot;Test Suites&quot; singularName=&quot;Test Suite&quot;&gt;
       &lt;States&gt;
            &lt;State type=&quot;Proposed&quot; value=&quot;Authoring&quot; /&gt;
            &lt;State type=&quot;InProgress&quot; value=&quot;Testing&quot; /&gt;
            &lt;State type=&quot;Complete&quot; value=&quot;Completed&quot; /&gt;
       &lt;/States&gt;
  &lt;/TestSuiteWorkItems&gt;</code></pre>

<p></p></td>
</tr>
</tbody>
</table>

> [!NOTE]    
><b>Feature availability: </b>To map state categories for `TestPlanWorkItems` or `TestSuiteWorkItems`, you must upgrade your application-tier server to TFS 2013.3 or later version. Afterwards, you can customize the workflow state of test plans and test suites. To learn more, see [Test Plan and Test Suite features](../new-features-added.md#test-management).  


<a id="fields">  </a>
## Assign Agile tool fields  

You can change the work item fields that are used in calculating capacity, burndown charts, forecasting, and velocity. Any change you make to one of the default assignments should correspond to a change made to the WIT used to define and capture information for that value.

For example, if you change the `refname` assigned to `type="Activity"` then you should include the same field in the WIT definition assigned to the Task Category which captures the activity information.

> [!div class="tabbedCodeSnippets"]
```XML
<TypeFields>
    <TypeField refname="System.AreaPath" type="Team" />
    <TypeField refname="Microsoft.VSTS.Scheduling.RemainingWork" type="RemainingWork" format="format h" />
    <TypeField refname=" Microsoft.VSTS.Common.BacklogPriority" type="Order" />
    <TypeField refname="Microsoft.VSTS.Scheduling.Effort" type="Effort" />
    <TypeField refname="Microsoft.VSTS.Common.Activity" type="Activity" />
    <TypeField refname="Microsoft.VSTS.Feedback.ApplicationStartInformation" type="ApplicationStartInformation" />
    <TypeField refname="Microsoft.VSTS.Feedback.ApplicationLaunchInstructions" type="ApplicationLaunchInstructions" />
    <TypeField refname="Microsoft.VSTS.Feedback.ApplicationType" type="ApplicationType">
        <TypeFieldValues>
            <TypeFieldValue value="Web application" type="WebApp" />
            <TypeFieldValue value="Remote machine" type="RemoteMachine" />
            <TypeFieldValue value="Client application" type="ClientApp" />
        </TypeFieldValues>
    </TypeField>
</TypeFields>
```

#### Syntax for TypeFields elements
<table>
<thead>
<tr>
<th width="15%"><p>Element</p></th>
<th width="85%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p><strong>TypeFields</strong></p></td>
<td><p>Required. Specifies a collection of <strong>TypeField</strong> elements.</p></td>
</tr>
<tr>
<td><p><strong>TypeField</strong></p></td>
<td><p>Required. Specifies the reference name of a field whose value supports a type of activity for a feature area. The fields you specify should correspond to the fields that you use within the WITs used to capture the feature information.</p>

<pre><code>&lt;TypeField refname="FieldReferenceName"  
      type="NameOfType" [format="{0} TimeUnitString"] / &gt;</code></pre>

<p>Specify the format only when `type="RemainingWork"`. You can specify any text string for the <i>TimeUnitString</i> that you want to have appear on the capacity bars on the current sprint backlog and on the task board.</p>
<p><strong>For Agile tools:</strong></p>
<ul>
<li><p><strong>Activity</strong>: Used to support the capacity-by-activity feature. Specify the same field used in the WIT assigned to the Task Category.</p>
<p><strong>Note</strong>: The values displayed by the Capacity tool reflect a union of all values defined for the field in all projects within the project collection instance. Therefore, to restrict the values that appear for sprint Capacity, you must make the values match in all the projects for the field assigned to `type="Activity"`.</p></li>
<li><p><strong>Effort</strong>: Used to calculate the team velocity. Specify the same field used in the WIT assigned to the Requirement Category that you use to capture the estimated level of effort, story points, or size for the amount of work that a backlog item requires to implement.</p></li>
<li><p><strong>Order</strong>: Used to define the sort order for items on the backlogs and boards. The system lists work items according to their ascending order as defined by the field for this type.</p>

<blockquote>**NOTE:**<br/>
You can move items by dragging them up or down the list on a backlog or board. As you move items, a background process updates the field assigned to the `type="Order"`.</blockquote>

</li>
<li><p><strong>RemainingWork</strong>: Used to calculate remaining work and burndown charts. Specify the same field used in the WIT assigned to the Task Category which you use to capture the hours, days, or other unit of measurement that remain to finish a task.</p>
<p>The value that you specify for <strong>format</strong> is used on the sprint backlogs and task boards wherever remaining work is reported. For example, when reporting capacity-by-activity or capacity per team member, or next to the column heading for the task states on the task board.</p>
<p>For <i>TimeUnitString</i>, specify any text string that you want to use to reflect the time value, such as hours or days.</p>
<p>For example, the following values are all valid:</p>
<p>`format="{0} h"`</p>
<p>`format="{0} hours"`</p>
<p>`format="hours {0}"`</p>
<p>`format="time {0}"`</p></li>
<li><p><strong>Team</strong>: Used to associate the backlogs with a team. The default value is System.AreaPath. To decouple teams from area paths, you can specify a different field, as described in [Use team fields instead of area paths to support teams](../use-team-fields-instead-area-paths.md).</p></li>
</ul>
<p><strong>For the feedback request form:</strong></p>

<blockquote>**NOTE:**<br/>
You should not have to change the default assignments made for the following <strong>TypeField</strong> elements. These assignments correspond to the fields used to capture the corresponding information in the WIT assigned to the Feedback Request Category.</blockquote>

<ul>
<li><p><strong>ApplicationStartInformation</strong>: Used to capture the path to execute the application.</p></li>
<li><p><strong>ApplicationLaunchInstructions</strong>: Used to capture launch instructions.</p></li>
<li><p><strong>ApplicationType</strong>: Used to capture the type of application. The types listed correspond to the allowed values specified in the WIT definition for the feedback request.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>TypeFieldValues</strong></p></td>
<td><p>Required for the <strong>TypeFieldValue</strong> when `type="ApplicationType"`.</p>
<p>Specifies a collection of <strong>TypeFieldValue</strong> elements which are used in the feedback request form.</p></td>
</tr>
<tr>
<td><p><strong>TypeFieldValue</strong></p></td>
<td><p>Required. Do not customize.</p>
<p>Specifies the name of an application type to appear on the feedback request form.</p>
<pre><code>&lt;TypeFieldValue value=&quot;ApplicationTypeName&quot; type=&quot;TypeApp&quot;/&gt;</code></pre>
<p>The default assignments correspond to the allowed values specified in the type definition for the feedback request form.</p>
<pre><code>&lt;TypeFieldValues&gt;
      &lt;TypeFieldValue value=&quot;Web application&quot; type=&quot;WebApp&quot; /&gt;
      &lt;TypeFieldValue value=&quot;Remote machine&quot; type=&quot;RemoteMachine&quot; /&gt;
      &lt;TypeFieldValue value=&quot;Client application&quot; type=&quot;ClientApp&quot; /&gt;
&lt;/TypeFieldValues&gt;</code></pre>
</td>
</tr>
</tbody>
</table>

#### Implementation notes
-   If you change a field within the **TypeFields** section, you should make the corresponding change in the WIT definition. For example, if you change the fields assigned to capture work **Effort**, then you should make the same change in the WIT definitions for the product backlog item and bug (for Scrum).

-   You can look up the reference name for a field using this [index](../../boards/work-items/guidance/work-item-field.md).

<a id="weekend_days">  </a>
## Set non-working days 

Non-working days are removed from calculations made by the [capacity planning tool](../../boards/sprints//set-capacity.md) and [burndown charts](../../boards/sprints//sprint-burndown.md). Default processes&mdash;[Agile](../../boards/work-items/guidance/agile-process.md), [Scrum](../../boards/work-items/guidance/scrum-process.md), or [CMMI](../../boards/work-items/guidance/cmmi-process.md)&mdash;specify Saturday and Sunday as non-working days. After you create a project, [each team can set their specific non-working days](../../organizations/settings/set-working-days.md).

> [!div class="tabbedCodeSnippets"]
```XML
<Weekends>
   <DayOfWeek>Saturday</DayOfWeek>
   <DayOfWeek>Sunday</DayOfWeek>
</Weekends>
```

#### Syntax for Weekends elements
<table>
<thead>
<tr>
<th width="15%"><p>Element</p></th>
<th width="85%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p><strong>DayOfWeek</strong></p></td>
<td><p>Required child of the <strong>Weekends</strong> element.</p>
<p>Specifies a day of the week that corresponds to a non-working day.</p>
<pre><code>&lt;DayOfWeek&gt;NameOfADay&lt;/DayOfWeek&gt;</code></pre>
<p>Valid names correspond to the English days of the week: <strong>Sunday</strong>, <strong>Monday</strong>, <strong>Tuesday</strong>, <strong>Wednesday</strong>, <strong>Thursday</strong>, <strong>Friday</strong>, and <strong>Saturday</strong>.</p>

<blockquote>**NOTE:**<br/>
You must specify the day of a week in English, regardless of the installed language of your on-premises TFS.</blockquote>
</td>
</tr>
<tr>
<td><p><strong>Weekends</strong></p></td>
<td><p>Optional. Container element used to specify non-working days.</p>
<p>Specify non-working days when you want to account for non-working days in the calculation of capacity and burndown charts.</p></td>
</tr>
</tbody>
</table>

<a id="wit-colors">  </a>
## Change the color for a work item type

At a glance, you can differentiate WITs when viewing a query result or backlog based on the color and icon assigned to the WIT. The system applies the color defined for the work item type to the [icon specified for the WIT](#wit-icons).  

<img src="../_img/add-modiy-wit-color-icon-state-color.png" alt="Query results showing wit color, icon, and state color" style="border: 1px solid #C3C3C3;" />  

The Scrum process template defines the following color assignments. Similar ones are made for the Agile and CMMI templates.

> [!div class="tabbedCodeSnippets"]
```XML
<WorkItemColors>
      <WorkItemColor primary="FF009CCC" secondary="FFD6ECF2" name="ProductBacklogItem" />
      <WorkItemColor primary="FF773B93" secondary="FFEEE2F2" name="Feature" />
   <WorkItemColor primary="FFFF7B00" secondary="FFFFD7B5" name="Epic" />
      <WorkItemColor primary="FFF2CB1D" secondary="FFF6F5D2" name="Task" />
      <WorkItemColor primary="FFCC293D" secondary="FFFAEAE5" name="Bug" />
      <WorkItemColor primary="FFFF9D00" secondary="FFFCEECF" name="Code Review Request" />
      <WorkItemColor primary="FFFF9D00" secondary="FFFCEECF" name="Code Review Response" />
      <WorkItemColor primary="FFFF9D00" secondary="FFFCEECF" name="Feedback Request" />
      <WorkItemColor primary="FFFF9D00" secondary="FFFCEECF" name="Feedback Response" />
      <WorkItemColor primary="FFFF9D00" secondary="FFFCEECF" name="Impediment" />
      <WorkItemColor primary="FFFF9D00" secondary="FFFCEECF" name="Shared Step" />
      <WorkItemColor primary="FFFF9D00" secondary="FFFCEECF" name="Test Case" />
   <WorkItemColor primary="FFFF9D00" secondary="FFFCEECF" name="Test Plan" />
   <WorkItemColor primary="FFFF9D00" secondary="FFFCEECF" name="Test Suite" />
   <WorkItemColor primary="FFFF9D00" secondary="FFFCEECF" name="Shared Parameter" />
</WorkItemColors>
```


#### Syntax for WorkItemColors elements
<table>
<thead>
<tr>
<th width="15%"><p>Element</p></th>
<th width="85%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p><strong>WorkItemColors</strong></p></td>
<td><p>Optional. Container element for specifying colors for work item types.</p></td>
</tr>
<tr>
<td><p><strong>WorkItemColor</strong></p></td>
<td><p>Specifies the colors used to display a WIT within the web portal. The primary color is used in list displays. The secondary color is no longer referenced, however you must specify it for the syntax to validate.</p>

<p>When specifying the color, always prefix the six-digit Hex color code with **FF** which denotes that the color should be fully visible. </p> 

<pre><code>&lt;WorkItemColor primary=&quot;HexColorCode&quot; secondary=&quot;HexColorCode&quot;  
   name=&quot;witName&quot; /&gt;</code></pre>

</td>
</tr>
</tbody>
</table>

<a id="properties">  </a> 
<a id="behaviors">  </a> 
## Specify properties and behaviors

The first two properties that you can set, `BugsBehavior` and `HiddenBacklogs` set the default value for a project. However, each team can change the behavior through their team settings. The third property `StateColors` defines the colors associated with the workflow states for all WITs. The values you set are used for all teams across a project.   

Example `Properties` configuration:  

> [!div class="tabbedCodeSnippets"]
```XML
 <Properties>  
      <Property name="BugsBehavior" value="AsTasks" />  
      <Property name="HiddenBacklogs" value="Microsoft.EpicCategory" />  
      <Property name="StateColors" value="Active=#FF00FF00,Resolved=#FFFF0000" />
	  <Property name="WorkItemTypeIcons" value="Epic=Icon_Crown,Feature=Icon_Trophy,User Story=icon_book,
		Task=icon_clipboard,Bug=icon_insect,Issue=icon_traffic_cone,
		Test Plan=icon_test_plan,Test Suite=icon_test_suite,Test Case=icon_test_case,Shared Steps=icon_test_step,
		Shared Parameter=icon_test_parameter" />  
  </Properties>  
```

The `BugsBehavior` property determines how bugs, and other WITs defined in the Bug Category, show up on backlogs and boards. Basically, you can configure whether bugs are treated as requirements, as tasks, or not appear on backlogs and boards. For details, see [Show bugs on backlogs and board](../../organizations/settings/show-bugs-on-backlog.md).

The `HiddenBacklogs` property determines which backlogs/portfolio backlogs appear by default. The default is to show just the product backlog and one level of portfolio backlog, the Features backlog. Teams can determine if they want to activate the Epics backlog, or make other changes. For details, see [Organize your backlog, Activate backlog levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).

#### Syntax for Properties elements
<table>
<thead>
<tr>
<th width="15%"><p>Element</p></th>
<th width="85%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p><strong>Properties</strong></p></td>
<td><p>Optional. Container element for specifying default properties and behaviors.</p></td>
</tr>
<tr>
<td><p><strong>Property</strong></p></td>
<td><p>Specifies the default assignment made to new teams or existing teams when updating a project with new features. Teams can choose the behavior they want through their team settings.</p>
<p>Valid property names are:</p>
<ul>
<li><p><strong>BugsBehavior</strong> sets the default for the [Show bugs on backlogs and board](../../organizations/settings/show-bugs-on-backlog.md). Allowed values correspond to:</p>
<p></p>
<ul>
<li><p><strong>AsRequirements</strong> &mdash; Bugs appear on backlogs and boards similar to requirements (default for Scrum process)</p></li>
<li><p><strong>AsTasks</strong> &mdash; Bugs appear on backlogs and boards similar to tasks (default for Agile and CMMI processes)</p></li>
<li><p><strong>Off</strong> &mdash; Bugs don't appear on backlogs or boards</p></li>
</ul>
</li>
<li><p><strong>HiddenBacklogs</strong> specifies the [backlog that's inactive by default](../../organizations/settings/select-backlog-navigation-levels.md).</p></li>

<li><p><strong>StateColors</strong> sets the color values for workflow states. (Requires TFS 2017 or later version) </p>
<a id="state-colors">  </a>
<p>The value for the property is a comma-separated list of state names and hex colors. Prefix the six-digit Hex color code with FF which denotes that the color should be fully visible.</p>
```
<Property name="StateColors" value="stateName1=color1,  
stateName2=color2,..." />
```
<blockquote>**NOTE:**<br/>
<b>Feature availability: </b>You can specify workflow state colors if you use Hosted XML or, for On-premises XML, you have upgraded to TFS 2015.2 or later version.   
</blockquote> 
<p>For additional details, see the next section, [Specify workflow state colors](#workflow-colors).</p></li>
</li> 
<a id="wit-icons">  </a>
<li>
<p><strong>WorkItemTypeIcons</strong> defines the icon to display for each work item type. The icon displays in lists of work items and in work item forms. The default entry for the Agile process is as shown. You can only specify an icon from the [supported list of icons](#supported-icons). </p>
<pre><code>&lt;Property name="WorkItemTypeIcons" 
   value="Epic=Icon_Crown,Feature=Icon_Trophy,  
   User Story=icon_book,Task=icon_clipboard,Bug=icon_insect,  
   Issue=icon_traffic_cone,Test Plan=icon_test_plan,Test Suite=icon_test_suite,  
   Test Case=icon_test_beaker,Shared Steps=icon_test_step,Shared Parameter=icon_test_parameter" /&gt;</code></pre>
<blockquote>**NOTE:**<br/>
<b>Feature availability: </b> You can customize the icons used for work item types if you use Hosted XML or, for On-premises XML, you have upgraded to TFS 2017.2 or later version.     
</blockquote> 
</li>
</ul>
</td>
</tr>
</tbody>
</table>



<a id="workflow-colors">  </a> 
### Specify workflow state colors

> [!NOTE]    
><b>Feature availability: </b> To specify workflow state colors, you must upgrade to TFS 2015.2 or later version.   


The color you associate with your work item states will appear across the product. This includes the following areas:  

- Work item form (web portal, see [New work item experience](../process/new-work-item-experience.md))  
- Work item form links control (web portal, see [LinksControlOptions XML elements reference](linkscontroloptions-xml-elements.md))     
- Cards displayed on the [Kanban board](../../boards/boards/kanban-basics.md) and [task boards](../../boards/sprints//task-board.md) (For settings, see [Customize cards](../../boards/boards/customize-cards.md))       
- All backlogs (add State via column options)  
- Query results (add State via column options)

Here we show how it appears in the work item form:  

<img src="_img/process-config-bug-form-header-state-colors.png" alt="Bug work item form header, State color shown" style="border: 1px solid #C3C3C3;" />  

> [!NOTE]    
>No colors are displayed in the client work item forms or within the old links control within the client form. 

**Details:**
- You must specify the color as an eight-digit hexadecimal value, similar to that used for the color defined for a WIT    
- To add or edit colors, simply reimport your process configuration with the updated property  
- State colors are defined by name across all work item types, i.e., there is no way to have "Active" be one color for User Story and a different color for Bug    
- Unmapped colors are defaulted at runtime based on their meta-state mapping  
- States with no color defined, and no meta-state mapping will show an empty circle.  


<a id="supported-icons">  </a> 
### Specify WIT icons

> [!NOTE]  
> <b>Feature availability: </b> You can customize the icons used for work item types if you use Hosted XML or, for On-premises XML, you have upgraded to TFS 2017.2 or later version.  

The supported set of icons you can specify for a work item type are shown below. 

![icon_airplane, icon_asterisk, icon_book, icon_car, icon_chart, icon_chat_bubble, icon_check_box, icon_clipboard, icon_code_response, icon_code_review](_img/processconfig-wit-icons-one.png) ![icon_color_palette, icon_crown, icon_database_storage, icon_diamond, icon_flame, icon_gavel, icon_gear, icon_gift, icon_government, icon_headphone](_img/processconfig-wit-icons-two.png) ![icon_insect, icon_key, icon_list, icon_megaphone, icon_paint_brush, icon_parachute, icon_response, icon_review, icon_ribbon, icon_sticky_note](_img/processconfig-wit-icons-three.png) ![icon_star, icon_test_beaker, icon_test_parameter, icon_test_plan, icon_test_step, icon_test_suite, icon_traffic_cone, icon_trophy](_img/processconfig-wit-icons-four.png)

> [!NOTE]    
> Icons noted with an asterisk are supported on Azure DevOps Services and TFS 2017.3 and later versions.


The system applies the color defined for the work item type to the icon. Colors and icons appear in the web portal where ever work items are displayed. This includes under **Related work** in PRs, list of links, the **Project** pages as well as **Work** backlogs, boards, queries, and plans.  

For example, here you see a list view&hellip; 

<img src="_img/processconfig-list-wi-with-icons.png" alt="Web portal, list of work items with icons" style="border: 1px solid #C3C3C3;" /> 

and, here the icon is shown within the work item form.
 
<img src="_img/process-config-bug-form-header-bug-icon.png" alt="Bug work item form header, Work item type icon shown" style="border: 1px solid #C3C3C3;" />  


## Related articles

Learn more about the web work item form and how to customize it from these additional topics: 

- [Add or modify a work item type](../add-modify-wit.md)    
- [Customize the new form](../customize-wit-form.md)  
- [WebLayout and Control elements](../../boards/backlogs/add-work-items.md)  
- [On-premises XML process model](../on-premises-xml-process-model.md)   

If you've added a custom WIT and want to add that to either the backlog or task board, you can. You just can't have them appear in both places. Learn how by reading [Add work item types to backlogs and boards](../add-wits-to-backlogs-and-boards.md).

[!INCLUDE [temp](../../_shared/help-support-shared.md)] 