---
title: Index of default and system work item fields 
titleSuffix: Azure Boards
description: Index to all fields used in the Agile, Scrum, and CMMI processes/process templates for Azure Boards, Azure DevOps, & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 9720b88e-474c-451b-b3fe-5253ba24a653
ms.topic: reference  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
--- 

# Work item field index  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Use this index to look up a description of each field used to track work items. This reference includes all fields defined within the core system processes/process templates: [Agile](agile-process.md), [Scrum](scrum-process.md), and [CMMI](cmmi-process.md). The fields and work item types (WITs) available to you depend on the process you chose when you [created your project](../../../organizations/projects/create-project.md).

::: moniker range="vsts"  
To support additional tracking needs, you can [define your own custom work item fields](../../../organizations/settings/work/customize-process.md). 
::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2018 || azdevserver-2019"  
To support additional tracking needs, you can [modify or add a custom field](../../../reference/add-modify-field.md). 
::: moniker-end  


## Alphabetical index 
Values in parenthesis indicate the following:

- **System**: Core system field assigned to all work item types for all processes  
- **Agile**: Used only by the [Agile process](agile-process.md)  
- **CMMI**: Used only by the [CMMI process](cmmi-process.md)  
- **Scrum**: Used only by the [Scrum process](scrum-process.md)  
- **TCM**: Used to support Test case management   


<table>
<tbody valign="top">
<tr>
<td width="33%"><h3>A</h3>
<ul>
<li>[Acceptance Criteria](../../queries/titles-ids-descriptions.md) (Scrum)</li>
<li>[Accepted By](guidance-code-review-feedback-field-reference.md) </li>
<li>[Accepted Date](guidance-code-review-feedback-field-reference.md)</li>
<li>[Activated By](../../queries/query-by-workflow-changes.md)</li>
<li>[Activated Date](../../queries/query-by-workflow-changes.md)</li>
<li>[Activity](../../queries/query-numeric.md)</li>
<li>[Actual Attendee 1-8](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)</li>
<li>[Analysis](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
<li>[Application Launch Instructions](guidance-code-review-feedback-field-reference.md)</li>
<li>[Application Start Information](guidance-code-review-feedback-field-reference.md) </li>
<li>[Application Type](guidance-code-review-feedback-field-reference.md) </li>
<li>[Area ID](../../queries/query-by-area-iteration-path.md) (System)</li>
<li>[Area Path](../../queries/query-by-area-iteration-path.md) (System)</li>
<li>[Assigned To](../../queries/query-by-workflow-changes.md)</li>
<li>[Associated Context](guidance-code-review-feedback-field-reference.md)</li>
<li>[Associated Context Code](guidance-code-review-feedback-field-reference.md)</li>
<li>[Associated Context Owner](guidance-code-review-feedback-field-reference.md)</li>
<li>[Associated Context Type](guidance-code-review-feedback-field-reference.md)</li>
<li>[Attached File Count](../../queries/linking-attachments.md)</li>
<li>Authorized As (Not used)</li>
<li>[Automated Test Id](../../queries/build-test-integration.md) (TCM)</li>
<li>[Automated Test Name](../../queries/build-test-integration.md) (TCM) </li>
<li>[Automated Test Storage](../../queries/build-test-integration.md) (TCM)</li>
<li>[Automated Test Type](../../queries/build-test-integration.md) (TCM) </li>
<li>[AutomatedTestId](../../queries/build-test-integration.md) (TCM) </li>
<li>[AutomatedTestName](../../queries/build-test-integration.md) (TCM)</li>
<li>[Automation Status](../../queries/build-test-integration.md) (TCM)</li>
</ul>
<h3>B</h3>
<ul><li>[Backlog Priority](../../queries/planning-ranking-priorities.md) (Scrum)</li>
<li>[Blocked](../../queries/planning-ranking-priorities.md)</li>
<li>[Board Column](../../queries/query-by-workflow-changes.md)</li>
<li>[Board Column Done](../../queries/query-by-workflow-changes.md)</li>
<li>[Board Lane](../../queries/query-by-workflow-changes.md)</li>
<li>[Business Value](../../queries/query-numeric.md)</li>
</ul>
<h3>C</h3>
<ul><li>[Called By](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)</li>
<li>[Called Date](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)</li>
<li>[Changed By](../../queries/history-and-auditing.md) (System)</li>
<li>[Changed Date](../../queries/history-and-auditing.md) (System)</li>
<li>[Closed By](../../queries/query-by-workflow-changes.md) (System)</li>
<li>[Closed Date](../../queries/query-by-workflow-changes.md) (System)</li>
<li>[Closed Status](guidance-code-review-feedback-field-reference.md)</li>
<li>[Closed Status Code](guidance-code-review-feedback-field-reference.md)</li>
<li>[Closing Comment](guidance-code-review-feedback-field-reference.md)</li>
<li>[Comment Count](../../queries/linking-attachments.md)</li>
<li>[Comments](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)</li>
<li>[Committed](../../queries/planning-ranking-priorities.md) (CMMI)</li>
<li>[Completed Work](../../queries/query-numeric.md)</li>
<li>[Contingency Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
<li>[Corrective Action Actual Resolution](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
<li>[Corrective Action Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
<li>[Created By](../../queries/query-by-workflow-changes.md) (System)</li>
<li>[Created Date](../../queries/query-by-workflow-changes.md) (System)</li>
</ul>
</td>
<td width="33%">
<h3>D-E-F</h3>
<ul>
<li>[Discipline](../../queries/query-numeric.md) (CMMI)</li>
<li>[Description](../../queries/titles-ids-descriptions.md) (System)</li>
<li>[Due Date](../../queries/query-by-date-or-current-iteration.md)</li>
<li>[Effort](../../queries/query-numeric.md) </li>
<li>[Escalate](../../queries/planning-ranking-priorities.md) (CMMI)</li>
<li>[External Link Count](../../queries/linking-attachments.md#external-link-count) </li>
<li>[Finish Date](../../queries/query-by-date-or-current-iteration.md)</li>
<li>[Found In Build](../../queries/build-test-integration.md)  (TCM)</li>
<li>[Found In Environment](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
</ul>
<h3>H</h3>
<ul>
<li>[History](../../queries/history-and-auditing.md) (System)</li>
<li>[How Found](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
<li>[Hyperlink Count](../../queries/linking-attachments.md#hyper-link-count)</li>
</ul>
<h3>I</h3>
<ul>
<li>[ID](../../queries/titles-ids-descriptions.md) (System)</li>
<li>[Impact Assessment](cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)</li>
<li>[Impact on Architecture](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)</li>
<li>[Impact on Development](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)</li>
<li>[Impact on Technical Publications](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)</li>
<li>[Impact on Test](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)</li>
<li>[Impact on User Experience](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)</li>
<li>[Integrated in Build](../../queries/build-test-integration.md) (TCM)</li>
<li>[Issue](../../queries/build-test-integration.md) (TCM)</li>
<li>[Iteration Id](../../queries/query-by-area-iteration-path.md)  (System)</li>
<li>[Iteration Path](../../queries/query-by-area-iteration-path.md) (System)</li>
</ul>
<h3>J-L-M-N</h3>
<ul>
<li>[Justification](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)</li>
<li>[Link Comment](../../queries/linking-attachments.md) (System)</li>
<li>[Link Description](../../queries/linking-attachments.md) (System)</li>
<li>[Local Data Source](../../queries/build-test-integration.md) (TCM)</li>
<li>[Meeting Type](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)</li>
<li>[Minutes](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI) </li>
<li>[Mitigation Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI) </li>
<li>[Mitigation Triggers](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
<li>[Node Name](../../queries/query-by-area-iteration-path.md) (System)</li>
</ul>
<h3>O-P-Q</h3>
<ul>
<li>[Optional Attendee 1-8](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)</li>
<li>[Original Estimate](../../queries/query-numeric.md)</li>
<li>[Parameters](../../queries/build-test-integration.md) (TCM)</li>
<li>[Priority](../../queries/planning-ranking-priorities.md) </li>
<li>[Probability](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
<li>[Proposed Fix](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI) </li>
<li>[Purpose](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)</li>
<li>[Query Text](../../queries/build-test-integration.md) (TCM)</li>
</ul>
</td>
<td width="33%"><h3>R</h3>
<ul>
<li>[Rating](guidance-code-review-feedback-field-reference.md)</li>
<li>[Reason](../../queries/query-by-workflow-changes.md) (System)</li>
<li>[Related Link Count](../../queries/linking-attachments.md) (System)</li>
<li>[Remaining Work](../../queries/query-numeric.md) </li>
<li>[Remote Link Count](../../queries/linking-attachments.md#remote-link-count) (System)</li>
<li>[Repro Steps](../../queries/titles-ids-descriptions.md)</li>
<li>[Required Attendee 1-8](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)</li>
<li>[Requirement Type](cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)</li>
<li>[Requires Review](../../queries/query-numeric.md) (CMMI)</li>
<li>[Requires Test](../../queries/query-numeric.md) (CMMI)</li>
<li>[Resolution]](../../queries/titles-ids-descriptions.md) (Scrum)</li>
<li>[Resolved By](../../queries/query-by-workflow-changes.md)</li>
<li>[Resolved Date](../../queries/query-by-workflow-changes.md)</li>
<li>[Resolved Reason](../../queries/query-by-workflow-changes.md)</li>
<li>[Reviewed By](guidance-code-review-feedback-field-reference.md)</li>
<li>[Reviewed Date](guidance-code-review-feedback-field-reference.md)</li>
<li>[Rev](../../queries/history-and-auditing.md) (System)</li>
<li>[Risk](../../queries/planning-ranking-priorities.md) (Agile)</li>
<li>[Root Cause](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
</ul>
<h3>S</h3>
<ul>
<li>[Severity](../../queries/planning-ranking-priorities.md)</li>
<li>[Size](../../queries/query-numeric.md) (CMMI)</li>
<li>[Stack Rank](../../queries/planning-ranking-priorities.md)</li>
<li>[Start Date](../../queries/query-by-date-or-current-iteration.md)</li>
<li>[State](../../queries/query-by-workflow-changes.md) (System)</li>
<li>[State Change Date](../../queries/query-by-workflow-changes.md)</li>
<li>[State Code](guidance-code-review-feedback-field-reference.md)</li>
<li>[Steps](../../queries/build-test-integration.md) (TCM)</li>
<li>[Steps to Reproduce](../../queries/titles-ids-descriptions.md) (TCM)</li>
<li>[Story Points](../../queries/query-numeric.md) (Agile)</li>
<li>[Subject Matter Expert](cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)</li>
<li>[Symptom](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
<li>[System Info](../../queries/titles-ids-descriptions.md) (TCM) </li>
</ul>
<h3>T</h3>
<ul>
<li>[Tags](../../queries/add-tags-to-work-items.md)</li>
<li>[Target Date](../../queries/query-by-date-or-current-iteration.md)</li>
<li>[Target Resolve Date](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)</li>
<li>[Task Type](../../queries/query-numeric.md) (CMMI)</li>
<li>[Team Project](../../queries/titles-ids-descriptions.md) (System) </li>
<li>[Test Suite Audit](../../queries/build-test-integration.md) (TCM)</li>
<li>[Test Suite Type](../../queries/build-test-integration.md) (TCM)</li>
<li>[Test Suite Type ID](../../queries/build-test-integration.md) (TCM)</li>
<li>[Time Criticality](../../queries/planning-ranking-priorities.md)</li>
<li>[Title](../../queries/titles-ids-descriptions.md) (System)</li>
<li>[Triage](../../queries/planning-ranking-priorities.md) (CMMI)</li>
</ul>
<h3>U-V-W</h3>
<ul>
<li>[User Acceptance Test](cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)</li>
<li>[Value Area](../../queries/planning-ranking-priorities.md)</li>
<li>[Watermark](../../queries/history-and-auditing.md) (System)</li>
<li>[Work Item Type](../../queries/titles-ids-descriptions.md) (System) </li> 

</ul>
</td>
</tr>
</tbody>
</table>

<hr/>
<br/>

By using the system fields or other fields you have added to your project collection, you can enable meaningful cross-project reports and queries. In addition, any non-system field that is referenced in the workflow or forms section of the work item type definition must have a **FIELD** element that defines it in the **FIELDS** section of the work item type definition XML file. Also, you must specify any non-system field that you might want to use to generate a query or report in the **FIELDS** section.  


## Field reference topics 

The following articles describe fields that are used in common by several WITs, or those that are functionally specific to just one or a few WITs.  

### Fields common to many work types
- [Titles, IDs, and descriptive fields](../../queries/titles-ids-descriptions.md)
- [History and revision changes](../../queries/history-and-auditing.md)
- [Areas and iterations](../../../organizations/settings/set-area-paths.md)
- [Assignments and account-specific fields](../../queries/query-by-workflow-changes.md)
- [Planning, ranking, and priorities](../../queries/planning-ranking-priorities.md)
- [Work estimates, activity, and other numeric fields](../../queries/query-numeric.md)
- [Build and test integration fields](../../queries/build-test-integration.md)
- [Links and attachment related fields](../../queries/linking-attachments.md) 

### Fields used by specific work item types

- [Code Review Request](guidance-code-review-feedback-field-reference.md)
- [Code Review Response](guidance-code-review-feedback-field-reference.md)
- [Feedback Request](guidance-code-review-feedback-field-reference.md)
- [Feedback Response](guidance-code-review-feedback-field-reference.md)
- [Shared Steps](../../queries/build-test-integration.md)
- [Test Case](../../queries/build-test-integration.md)

### Fields used to track CMMI work items
- [Requirements](cmmi/guidance-requirements-field-reference-cmmi.md)
- [Bugs](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)
- [Change Requests](cmmi/guidance-change-request-field-reference-cmmi.md)
- [Issues](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)
- [Review Meetings](cmmi/guidance-review-meeting-field-reference-cmmi.md)
- [Risks](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) 


<a id="field-reference">  </a>  
## What is a field? How are field names used?  

A work item field name uniquely identifies each work item field. Make sure your field names fall within these guidelines:  

- Field names must be unique within the account/project collection  
- Field names must be 128 or fewer Unicode characters  
- Field names can't contain any leading or trailing spaces, nor two or more consecutive spaces  
- Field names must contain at least one alphabetic character  
- Field names can't contain the following characters: ```.,;'`:~\/\*|?"&%$!+=()[]{}<>```.   

Because custom fields are defined for the account collection, you can't add a custom field to a process with the same field name that you add to another inherited process.  

When adding custom fields, note the following limits:  
*   A maximum of 256 fields can be defined for each WIT  
*   A maximum of 512 fields can be defined per process   


::: moniker range="vsts"  
## Add and modify fields    
To add fields to a process, modify select field attributes, and review fields added to a process, see [Customize a process](../../../organizations/settings/work/customize-process.md).  

Also, you can [view the list of fields defined for an organization](../../../organizations/settings/work/customize-process.md) and the WITs which reference them. 
::: moniker-end  

::: moniker range=">= tfs-2015 <= tfs-2018 || azdevserver-2019"  
## Modify the field name and other field attributes  
You can change the field name, the index, and the report attributes for any field except system fields by using the **witadmin** command-line tool. For more information, see [Manage work item fields-witadmin](../../../reference/witadmin/manage-work-item-fields.md).  
::: moniker-end  

<a id="wi-explorer">  </a>
## Hidden field attributes and the Work Item Field Explorer 

There are several non-changeable and virtually hidden attributes for each field. You can look up the assignments of these fields using the Work Item Field Explorer tool.  

![Work item field explorer](../../../reference/_img/IC633020.png)

For a description of each attribute, see this post: [Work Item Field Attributes - What You Can and Can't Change](http://blogs.msdn.com/b/visualstudioalm/archive/2012/08/17/work-item-field-attributes-what-you-can-and-can-t-change.aspx).

To access the Work Item Field Explorer, you must install the Process Editor (requires that you have installed a version of Visual Studio):
 - For TFS 2017 and later versions, [install the TFS Process Template editor from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=KarthikBalasubramanianMSFT.TFSProcessTemplateEditor). You can use this version of the Process Editor to modify the old-style work item forms. You can't use it to edit forms associated with the [new web forms](../../../reference/process/new-work-item-experience.md). 
 - For TFS 2015 and earlier versions, install [TFS Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power). 



## Related articles

- [Create managed queries](../../queries/example-queries.md)
- [Define a query](../../queries/using-queries.md) 
- [Choose a process](choose-process.md)  
- [Reportable fields reference](../../../reference/xml/reportable-fields-reference.md) (on-premises TFS only)    

You can list the attributes of fields using the [**witadmin listfields** command](../../../reference/witadmin/manage-work-item-fields.md). 
