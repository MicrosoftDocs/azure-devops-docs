---
title: Pick list queries
titleSuffix: Azure Boards
description: Create queries based on planning, ranking, and priority, integer and picklist fields in Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: boards-queries
ms.technology: devops-agile
ms.prod: devops
ms.assetid: ca05800c-905a-407f-bea8-a7ee32b65973
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: sample
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---

# Query by picklist value

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You use planning, ranking, and priority fields to specify which work the team should complete first.  By ranking and prioritizing work items, all team members gain an understanding of the relative importance of the work that they must accomplish.  

You rank and prioritize work items when you [Create your backlog](../backlogs/create-your-backlog.md).


## Supported operators and macros 
Query clauses that specify a string or integer field can use the operators listed below.
- = , <> , > , < , >= , <=  
- =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field]  
- In, Not In  
- Was Ever  

## Pick list queries 

Most of the planning fields described in the next section are either an integer or string field. For example queries of numeric or rich-text fields, see [Query by numeric fields](query-numeric.md) and [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md).    

<table width="100%">
<tbody valign="top">
<tr>
<th width="50%">Filter for</th>
<th width="50%">Include these query clauses</th>
</tr>
<tr>
<td>List blocked tasks (Scrum)<br/>
(Blocked field is type String) 
</td>
<td>
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;```Work Item Type _ In _ Task```   
```And _ Blocked _ = _ Yes```   
</td>
</tr>
<tr>
<td>Priority 1 bugs
<br/>
(Priority field is type Integer) 
</td>
<td>
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;```Work Item Type _ In _ Bug```    
```And _ Priority _ = _ 1```   
</td>
</tr>
<tr>
<td>
Features and stories that address Architectural areas<br/>
(Value Area field is type String) 
</td>
<td>
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;```Work Item Type _ In _ Feature,User Story```    
```And _ Value Area _ = _ Architectural```  
</td>
</tr>

</tbody>
</table>  

## Fields used to plan and prioritize work  

The following table describes the fields that you can use to plan and prioritize work. Some fields are only valid for a specific process&mdash;[Basic](../get-started/track-issues-tasks.md), [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [CMMI](../work-items/guidance/cmmi-process.md).


<table width="100%">
<thead>
<tr>
  <th width="22%">Field name</th>
  <th width="53%">Description</th>
  <th width="25%">Work item type</th>
</tr>
</thead>
<tbody valign="top">
<tr>
	<td><p>Backlog Priority <sup>1</sup></p></td>
	<td><p>A number usually assigned by a background process used to track the list order of items on a backlog or board in the web portal.</p>
<p>Reference name=Microsoft.VSTS.Common.BacklogPriority, Data type=Double</p>  </td>  
	<td><p>Bug, Epic, Feature, Product backlog item, Task (Scrum)</p></td>
</tr>

<tr>
	<td><p>Blocked</p></td>
	<td><p>Indicates whether a team member is prevented from making progress toward implementing a requirement or task or resolving a bug, change request, or risk. If an issue has been opened to track a blocking problem, a link should be made to the issue.</p><p>You can specify <strong>Yes</strong> or <strong>No</strong>.</p>
<p>Reference name=Microsoft.VSTS.CMMI.Blocked, Data type=String</p>  </td>  
	<td><p>Bug, Change Request, Requirement, Risk, Task (CMMI, Scrum)</p>
</td>
</tr>


<tr>
	<td><p>Committed</p></td>
	<td><p>Indicates whether the requirement is committed in the project or not. You can specify <strong>Yes</strong> or <strong>No</strong>.</p>
<p>Reference name=Microsoft.VSTS.CMMI.Committed, Data type=String</p></td>

	<td><p>Requirement (CMMI)</p></td>
</tr>
<tr>
	<td><p>Escalate</p></td>
	<td><p>Indicates whether the issue is affecting the critical path of the project plan. You can specify <strong>Yes</strong> or <strong>No</strong>.</p> 
<p>Reference name=Microsoft.VSTS.CMMI.Escalate, Data type=String</p></td>
	<td><p>Issue (CMMI)</p></td>
</tr>

<tr>
	<td><p>Priority <sup>1</sup></p></td>
	<td><p>A subjective rating of the bug, issue, task, or test case as it relates to the business. You can specify the following values:</p>
<ul style="list-style-type:none">
<li><p><strong>1</strong>: Product cannot ship without the successful resolution of the work item, and it should be addressed as soon as possible.</p></li>
<li><p><strong>2</strong>: Product cannot ship without the successful resolution of the work item, but it does not need to be addressed immediately.</p></li>
<li><p><strong>3</strong>: Resolution of the work item is optional based on resources, time, and risk.</p></li></ul> 
<p>Reference name=Microsoft.VSTS.Common.Priority, Data type=Integer</p>  </td>
	<td><p>Bug, Change Request, Epic, Feature, Impediment, Issue, Product backlog item, Requirement, Risk, Shared Step, Task, Test Case, User Story</p></td>
</tr>


<tr>
	<td><p>Risk</p></td>
	<td><p>A subjective rating of the relative uncertainty around the successful completion of a user story.</p><p>Defined allowed values are:</p><ul style="list-style-type:none"><li><p><strong>1 - High</strong></p></li><li><p><strong>2 - Medium</strong></p></li><li><p><strong>3 - Low</strong></p></li></ul> 
<p>Reference name=Microsoft.VSTS.Common.Risk, Data type=String</p></td>
	<td><p>Epic, Feature, User Story (Agile) </p></td>
</tr>

<tr>
	<td><p>Severity  <sup>1</sup></p></td>
	<td><p>A subjective rating of the impact of a bug on the project. You can specify the following values:</p><ul style="list-style-type:none"><li><p><strong>1 - Critical</strong></p></li><li><p><strong>2 - High</strong></p></li><li><p><strong>3 - Medium</strong></p></li><li><p><strong>4 - Low</strong></p></li></ul> 
<p>Reference name=Microsoft.VSTS.Common.Severity, Data type=String</p>  </td>
	<td>Bug, Issue (CMMI), Risk (CMMI)</td>
</tr>

<tr>
	<td><p>Stack Rank <sup>2</sup></p></td>
	<td><p>A number, usually assigned by a background process, used to track the list order of items on a backlog or board in the web portal.</p> 
<p>Reference name=Microsoft.VSTS.Common.StackRank, Data type=Double</p></td>
	<td><p>Bug, Epic, Feature, Requirement (CMMI), Risk (CMMI), Task, User Story (Agile) </p>
</td>
</tr>

<tr>
	<td><p>Time Criticality</p></td>
	<td><p>A subjective unit of measure that captures the how the business value decreases over time. Higher values indicate that the epic or feature is inherently more time critical than those items with lower values.</p>
<p>Reference name=Microsoft.VSTS.Common.TimeCriticality, Data type=Double</p>  </td>

	<td>Epic, Feature</td>
</tr>

<tr>
	<td><p>Triage</p></td>
	<td><p>Indicates the type of triage decision that is pending for the work item. You use this field when the work item is in the <strong>Proposed</strong> state.</p><p>You can specify one of the following values:</p><ul><li><p><strong>Pending</strong> (default)</p></li><li><p><strong>More Info</strong></p></li><li><p><strong>Info Received</strong></p></li><li><p><strong>Triaged</strong></p></li></ul>
<p>Reference name=Microsoft.VSTS.Common.Triage, Data type=String</p></td>
	<td><p>CMMI only: Bug, Change Request, Epic, Feature, Issue, Requirement, Task </p></td>
</tr>
<tr>
	<td><p>Value Area  <sup>1</sup></p></td>
	<td><p>The area of customer value addressed by the epic, feature, or backlog item. Values include:</p><ul><li><p><strong>Architectural</strong> &mdash; technical services to implement business features that deliver solution</p></li><li><p><strong>Business</strong> &mdash; services that fulfill customers or stakeholder needs that directly deliver customer value to support the business (Default)</p></li></ul>
<p>Reference name=Microsoft.VSTS.Common.ValueArea, Data type=String</p>  </td>

	<td>Bug, Epic, Feature, Product Backlog Item (Scrum) Requirement (CMMI), User Story (Agile)</td>
</tr>

</tbody>
</table>

####Notes:  
0.  To change the menu selection, see [Add or modify a field, customize a picklist](../../reference/add-modify-field.md).  
0.  The sequence of items on the product backlog page is determined according to where you have added the items or dragged the items on the page. As you drag items, a background process updates either the Backlog Priority (Scrum) or Stack Rank (Agile, CMMI) field which is assigned to `type="Order"` in the ProcessConfiguration file.  


## Related articles 

- [Query by a numeric field](query-numeric.md)   
- [Work item field index](../work-items/guidance/work-item-field.md)  
- [Work item fields and attributes](../work-items/work-item-fields.md).  
 
###More on Backlog Priority or Stack Rank fields

The Backlog Priority and Stack Rank fields don't appear on the work item forms. (To learn why, see [Where is the field on the work item form to order the backlog?](http://blogs.msdn.com/devops/2014/07/08/where-is-the-field-on-the-work-item-form-to-order-the-backlog.aspx).

::: moniker range="azure-devops"  
To add the field to the form, add the Stack Rank field to a work item type ([for the custom process that your project references](../../organizations/settings/work/customize-process-form.md)).

::: moniker-end  

::: moniker range=">= tfs-2015 <= tfs-2018"  
To add the field to the form, [modify the WIT XML definition to add the following control element](../../reference/add-modify-wit.md):

	`<Control FieldName="Microsoft.VSTS.Common.StackRank" Type="FieldControl" Label="Stack Rank" LabelPosition="Left" />`

	or, for Scrum

	`<Control FieldName="Microsoft.VSTS.Common.BacklogPriority" Type="FieldControl" Label="Stack Rank" LabelPosition="Left" />`

::: moniker-end  
 