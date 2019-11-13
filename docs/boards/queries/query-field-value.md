---
title: Query by field values
titleSuffix: Azure Boards
description: Create a query by filtering on field values compared to other field values in Azure Boards, Azure DevOps, & TFS
ms.custom: boards-queries
ms.technology: devops-agile
ms.prod: devops
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: sample
monikerRange: '>= tfs-2013'
ms.date: 08/16/2019  
---

# Query by field value comparisons   

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You can create queries based on how one field's value compares to another using the comparison field operators. This is useful to filter work items based on: 
- Is the person who created the work item the same as or different than the person assigned to it, or who closed it
- Which Tasks were closed before or after their Target Date.

## Supported data types 

You can use the comparison field operators&mdash;`=[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field]`&mdash;with the following field data types. The data type you select for the **Field** and the **Value** must match. 
- Boolean (supports `=[Field], <>[Field]`
- Date/Time
- Double, Integer
- GUID
- Identity
- String (excluding Tags)

> [!NOTE]  
> Some combinations of data type and comparison field operator might not make sense to use, such as `Title >=[Field]` or `Assigned To <=[Field]`. 

### Useful filters 

<table width="100%">
<tbody valign="top">
<tr>
<th width="36%">Filter for</th>
<th width="64%">Include these query clauses</th>
</tr>
<tr>
<td>Work items closed by someone other than the person who created the work item<br/></td>
<td>
<code>Created By <strong> <>[Field] </strong> Closed By</code><br/>State<strong> = </strong> Closed</code><br/></td>
</tr>
<tr>
<td>Tasks whose Original Estimate is less than Completed Work
</td>
<td>
<code>Original Estimate <strong> <=[Field] </strong> Completed Work</code><br/></td>
</tr>
<tr>
<td>
Closed tasks completed prior to their target date 
</td>
<td>
<code>Target Date <strong> <=[Field] </strong> Closed Date</code><br/>State<strong> = </strong> Closed</code><br/></td>
</tr>
</tbody>
</table>  


<a id="counts"/>



## Fields that support field comparison

The following table provides an index to those fields that support field comparison queries. 

> [!NOTE]  
> Not all fields listed are supported for all projects or work item types. However, you can customize a process or work item type by adding custom fields which you can use for the purposes of queries and field comparisons. To learn more, see [Add a custom field to a work item type (Inheritance process)](../../organizations/settings/work/add-custom-field.md) or [Add or modify a field (Online XML process)](../../reference/add-modify-field.md).
 
<table>
<tbody valign="top">
<tr>
<td width="33%"><h3>A</h3>
<ul>
<li><a href="titles-ids-descriptions.md>Acceptance Criteria</a> (Scrum)</li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md">Accepted By</a> </li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md">Accepted Date</a></li>
<li><a href="query-by-workflow-changes.md">Activated By</a></li>
<li><a href="query-by-workflow-changes.md">Activated Date</a></li>
<li><a href="query-numeric.md">Activity</a></li>
<li><a href="../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md">Actual Attendee 1-8</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md">Analysis</a> (CMMI)</li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Application Launch Instructions](guidance-code-review-feedback-field-reference.md)">Application Launch Instructions</a></li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Application Start Information](guidance-code-review-feedback-field-reference.md)">Application Start Information</a> </li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Application Type](guidance-code-review-feedback-field-reference.md)">Application Type</a> </li>
<li><a href="query-by-area-iteration-path.md" data-raw-source="[Area Id](query-by-area-iteration-path.md)">Iteration Id</a>  (System)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Assigned To](query-by-workflow-changes.md)">Assigned To</a></li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Associated Context](guidance-code-review-feedback-field-reference.md)">Associated Context</a></li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Associated Context Code](guidance-code-review-feedback-field-reference.md)">Associated Context Code</a></li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Associated Context Owner](guidance-code-review-feedback-field-reference.md)">Associated Context Owner</a></li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Associated Context Type](guidance-code-review-feedback-field-reference.md)">Associated Context Type</a></li>
<li><a href="linking-attachments.md" data-raw-source="[Attached File Count](linking-attachments.md)">Attached File Count</a></li>
<li><a href="build-test-integration.md" data-raw-source="[Automated Test Id](build-test-integration.md)">Automated Test Id</a> (TCM)</li>
<li><a href="build-test-integration.md" data-raw-source="[Automated Test Name](build-test-integration.md)">Automated Test Name</a> (TCM) </li>
<li><a href="build-test-integration.md" data-raw-source="[Automated Test Storage](build-test-integration.md)">Automated Test Storage</a> (TCM)</li>
<li><a href="build-test-integration.md" data-raw-source="[Automated Test Type](build-test-integration.md)">Automated Test Type</a> (TCM) </li>
<li><a href="build-test-integration.md" data-raw-source="[AutomatedTestId](build-test-integration.md)">AutomatedTestId</a> (TCM) </li>
<li><a href="build-test-integration.md" data-raw-source="[AutomatedTestName](build-test-integration.md)">AutomatedTestName</a> (TCM)</li>
<li><a href="build-test-integration.md" data-raw-source="[Automation Status](build-test-integration.md)">Automation Status</a> (TCM)</li>
</ul>
<h3>B</h3>
<ul><li><a href="planning-ranking-priorities.md" data-raw-source="[Backlog Priority](planning-ranking-priorities.md)">Backlog Priority</a> (Scrum)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Blocked](planning-ranking-priorities.md)">Blocked</a></li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Board Column](query-by-workflow-changes.md)">Board Column</a></li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Board Column Done](query-by-workflow-changes.md)">Board Column Done</a></li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Board Lane](query-by-workflow-changes.md)">Board Lane</a></li>
<li><a href="query-numeric.md" data-raw-source="[Business Value](query-numeric.md)">Business Value</a></li>
</ul>
<h3>C</h3>
<ul><li><a href="../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Called By](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md)">Called By</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Called Date](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md)">Called Date</a> (CMMI)</li>
<li><a href="history-and-auditing.md" data-raw-source="[Changed By](history-and-auditing.md)">Changed By</a> (System)</li>
<li><a href="history-and-auditing.md" data-raw-source="[Changed Date](history-and-auditing.md)">Changed Date</a> (System)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Closed By](query-by-workflow-changes.md)">Closed By</a> (System)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Closed Date](query-by-workflow-changes.md)">Closed Date</a> (System)</li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Closed Status](guidance-code-review-feedback-field-reference.md)">Closed Status</a></li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Closed Status Code](guidance-code-review-feedback-field-reference.md)">Closed Status Code</a></li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Closing Comment](guidance-code-review-feedback-field-reference.md)">Closing Comment</a></li>
<li><a href="linking-attachments.md" data-raw-source="[Comment Count](linking-attachments.md)">Comment Count</a></li>
<li><a href="../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Comments](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md)">Comments</a> (CMMI)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Committed](planning-ranking-priorities.md)">Committed</a> (CMMI)</li>
<li><a href="query-numeric.md" data-raw-source="[Completed Work](query-numeric.md)">Completed Work</a></li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Contingency Plan](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Contingency Plan</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Corrective Action Actual Resolution](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Corrective Action Actual Resolution</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Corrective Action Plan](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Corrective Action Plan</a> (CMMI)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Created By](query-by-workflow-changes.md)">Created By</a> (System)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Created Date](query-by-workflow-changes.md)">Created Date</a> (System)</li>
</ul>
</td>
<td width="33%">
<h3>D-E-F</h3>
<ul>
<li><a href="query-numeric.md" data-raw-source="[Discipline](query-numeric.md)">Discipline</a> (CMMI)</li>
<li><a href="query-by-date-or-current-iteration.md" data-raw-source="[Due Date](query-by-date-or-current-iteration.md)">Due Date</a></li>
<li><a href="query-numeric.md" data-raw-source="[Effort](query-numeric.md)">Effort</a> </li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Escalate](planning-ranking-priorities.md)">Escalate</a> (CMMI)</li>
<li><a href="linking-attachments.md#external-link-count" data-raw-source="[External Link Count](linking-attachments.md#external-link-count)">External Link Count</a> </li>
<li><a href="query-by-date-or-current-iteration.md" data-raw-source="[Finish Date](query-by-date-or-current-iteration.md)">Finish Date</a></li>
<li><a href="build-test-integration.md" data-raw-source="[Found In Build](build-test-integration.md)">Found In Build</a>  (TCM)</li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Found In Environment](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Found In Environment</a> (CMMI)</li>
</ul>
<h3>H</h3>
<ul>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[How Found](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">How Found</a> (CMMI)</li>
<li><a href="linking-attachments.md#hyper-link-count" data-raw-source="[Hyperlink Count](linking-attachments.md#hyper-link-count)">Hyperlink Count</a></li>
</ul>
<h3>I</h3>
<ul>
<li><a href="titles-ids-descriptions.md" data-raw-source="[ID](titles-ids-descriptions.md)">ID</a> (System)</li>
<li><a href="../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md" data-raw-source="[Impact Assessment](../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md)">Impact Assessment</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Impact on Architecture](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md)">Impact on Architecture</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Impact on Development](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md)">Impact on Development</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Impact on Technical Publications](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md)">Impact on Technical Publications</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Impact on Test](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md)">Impact on Test</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Impact on User Experience](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md)">Impact on User Experience</a> (CMMI)</li>
<li><a href="build-test-integration.md" data-raw-source="[Integrated in Build](build-test-integration.md)">Integrated in Build</a> (TCM)</li>
<li><a href="build-test-integration.md" data-raw-source="[Issue](build-test-integration.md)">Issue</a> (TCM)</li>
<li><a href="query-by-area-iteration-path.md" data-raw-source="[Iteration Id](query-by-area-iteration-path.md)">Iteration Id</a>  (System)</li>
</ul>
<h3>J-L-M-N</h3>
<ul>
<li><a href="../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Justification](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md)">Justification</a> (CMMI)</li>
<li><a href="linking-attachments.md" data-raw-source="[Link Comment](linking-attachments.md)">Link Comment</a> (System)</li>
<li><a href="linking-attachments.md" data-raw-source="[Link Description](linking-attachments.md)">Link Description</a> (System)</li>
<li><a href="build-test-integration.md" data-raw-source="[Local Data Source](build-test-integration.md)">Local Data Source</a> (TCM)</li>
<li><a href="../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Meeting Type](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md)">Meeting Type</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Minutes](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md)">Minutes</a> (CMMI) </li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Mitigation Plan](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Mitigation Plan</a> (CMMI) </li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Mitigation Triggers](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Mitigation Triggers</a> (CMMI)</li>
<li><a href="query-by-area-iteration-path.md" data-raw-source="[Node Name](query-by-area-iteration-path.md)">Node Name</a> (System)</li>
</ul>
<h3>O-P-Q</h3>
<ul>
<li><a href="../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Optional Attendee 1-8](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md)">Optional Attendee 1-8</a> (CMMI)</li>
<li><a href="query-numeric.md" data-raw-source="[Original Estimate](query-numeric.md)">Original Estimate</a></li>
<li><a href="build-test-integration.md" data-raw-source="[Parameters](build-test-integration.md)">Parameters</a> (TCM)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Priority](planning-ranking-priorities.md)">Priority</a> </li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Probability](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Probability</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Proposed Fix](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Proposed Fix</a> (CMMI) </li>
<li><a href="../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Purpose](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md)">Purpose</a> (CMMI)</li>
<li><a href="build-test-integration.md" data-raw-source="[Query Text](build-test-integration.md)">Query Text</a> (TCM)</li>
</ul>
</td>
<td width="33%"><h3>R</h3>
<ul>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Rating](guidance-code-review-feedback-field-reference.md)">Rating</a></li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Reason](query-by-workflow-changes.md)">Reason</a> (System)</li>
<li><a href="linking-attachments.md" data-raw-source="[Related Link Count](linking-attachments.md)">Related Link Count</a> (System)</li>
<li><a href="query-numeric.md" data-raw-source="[Remaining Work](query-numeric.md)">Remaining Work</a> </li>
<li><a href="linking-attachments.md#remote-link-count" data-raw-source="[Remote Link Count](linking-attachments.md#remote-link-count)">Remote Link Count</a> (System)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Repro Steps](titles-ids-descriptions.md)">Repro Steps</a></li>
<li><a href="../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Required Attendee 1-8](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md)">Required Attendee 1-8</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md" data-raw-source="[Requirement Type](../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md)">Requirement Type</a> (CMMI)</li>
<li><a href="query-numeric.md" data-raw-source="[Requires Review](query-numeric.md)">Requires Review</a> (CMMI)</li>
<li><a href="query-numeric.md" data-raw-source="[Requires Test](query-numeric.md)">Requires Test</a> (CMMI)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Resolution]](titles-ids-descriptions.md)">Resolution]</a> (Scrum)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Resolved By](query-by-workflow-changes.md)">Resolved By</a></li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Resolved Date](query-by-workflow-changes.md)">Resolved Date</a></li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Resolved Reason](query-by-workflow-changes.md)">Resolved Reason</a></li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Reviewed By](guidance-code-review-feedback-field-reference.md)">Reviewed By</a></li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[Reviewed Date](guidance-code-review-feedback-field-reference.md)">Reviewed Date</a></li>
<li><a href="history-and-auditing.md" data-raw-source="[Rev](history-and-auditing.md)">Rev</a> (System)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Risk](planning-ranking-priorities.md)">Risk</a> (Agile)</li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Root Cause](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Root Cause</a> (CMMI)</li>
</ul>
<h3>S</h3>
<ul>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Severity](planning-ranking-priorities.md)">Severity</a></li>
<li><a href="query-numeric.md" data-raw-source="[Size](query-numeric.md)">Size</a> (CMMI)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Stack Rank](planning-ranking-priorities.md)">Stack Rank</a></li>
<li><a href="query-by-date-or-current-iteration.md" data-raw-source="[Start Date](query-by-date-or-current-iteration.md)">Start Date</a></li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[State](query-by-workflow-changes.md)">State</a> (System)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[State Change Date](query-by-workflow-changes.md)">State Change Date</a></li>
<li><a href="../work-items/guidance/guidance-code-review-feedback-field-reference.md" data-raw-source="[State Code](guidance-code-review-feedback-field-reference.md)">State Code</a></li>
<li><a href="build-test-integration.md" data-raw-source="[Steps](build-test-integration.md)">Steps</a> (TCM)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Steps to Reproduce](titles-ids-descriptions.md)">Steps to Reproduce</a> (TCM)</li>
<li><a href="query-numeric.md" data-raw-source="[Story Points](query-numeric.md)">Story Points</a> (Agile)</li>
<li><a href="../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md" data-raw-source="[Subject Matter Expert](../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md)">Subject Matter Expert</a> (CMMI)</li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Symptom](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Symptom</a> (CMMI)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[System Info](titles-ids-descriptions.md)">System Info</a> (TCM) </li>
</ul>
<h3>T</h3>
<ul>
<li><a href="query-by-date-or-current-iteration.md" data-raw-source="[Target Date](query-by-date-or-current-iteration.md)">Target Date</a></li>
<li><a href="../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Target Resolve Date](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Target Resolve Date</a> (CMMI)</li>
<li><a href="query-numeric.md" data-raw-source="[Task Type](query-numeric.md)">Task Type</a> (CMMI)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Team Project](titles-ids-descriptions.md)">Team Project</a> (System) </li>
<li><a href="build-test-integration.md" data-raw-source="[Test Suite Audit](build-test-integration.md)">Test Suite Audit</a> (TCM)</li>
<li><a href="build-test-integration.md" data-raw-source="[Test Suite Type](build-test-integration.md)">Test Suite Type</a> (TCM)</li>
<li><a href="build-test-integration.md" data-raw-source="[Test Suite Type ID](build-test-integration.md)">Test Suite Type ID</a> (TCM)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Time Criticality](planning-ranking-priorities.md)">Time Criticality</a></li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Title](titles-ids-descriptions.md)">Title</a> (System)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Triage](planning-ranking-priorities.md)">Triage</a> (CMMI)</li>
</ul>
<h3>U-V-W</h3>
<ul>
<li><a href="../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md" data-raw-source="[User Acceptance Test](../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md)">User Acceptance Test</a> (CMMI)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Value Area](planning-ranking-priorities.md)">Value Area</a></li>
<li><a href="history-and-auditing.md" data-raw-source="[Watermark](history-and-auditing.md)">Watermark</a> (System)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Work Item Type](titles-ids-descriptions.md)">Work Item Type</a> (System) </li> 
</ul>
</td>
</tr>
</tbody>
</table>


## Related articles 

- [Query index quick reference](query-index-quick-ref.md)
- [Query by title, ID, or description](titles-ids-descriptions.md)
- [Query by assignment or workflow changes](query-by-workflow-changes.md)  
- [Query by date or current iteration](query-by-date-or-current-iteration.md)   
- [Query a numeric field](query-numeric.md)  
- [Query by picklist value](planning-ranking-priorities.md)  


[!INCLUDE [temp](../_shared/rest-apis-queries.md)]
