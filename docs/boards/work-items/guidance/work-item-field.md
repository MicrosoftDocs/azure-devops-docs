---
title: Index of default and system work item fields 
titleSuffix: Azure Boards
description: Index to all fields used in the Agile, Scrum, and CMMI processes/process templates for Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: work-items
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 9720b88e-474c-451b-b3fe-5253ba24a653
ms.topic: reference  
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 10/03/2019
---

# Work item field index  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Use this index to look up a description of each field used to track work items. This reference includes all fields defined within the core system processes/process templates: [Basic](../../get-started/plan-track-work.md), [Agile](agile-process.md), [Scrum](scrum-process.md), and [CMMI](cmmi-process.md). The fields and work item types (WITs) available to you depend on the process you chose when you [created your project](../../../organizations/projects/create-project.md).

::: moniker range="azure-devops"  

To support additional tracking needs, you can [define your own custom work item fields](../../../organizations/settings/work/customize-process.md). 

::: moniker-end  

::: moniker range="azure-devops-2019"  

To support additional tracking needs, you can [define your own custom work item fields](../../../organizations/settings/work/customize-process.md) using the Inheritance process model, or if your project collection is configured to use the On-premises XML process model, then see [Modify or add a custom field](../../../reference/add-modify-field.md).  

::: moniker-end  

::: moniker range="<= tfs-2018"  

To support additional tracking needs, you can [modify or add a custom field](../../../reference/add-modify-field.md). 

::: moniker-end  


::: moniker range=">= azure-devops-2019"  

> [!NOTE]   
> The [Analytics Service](../../../report/powerbi/what-is-analytics.md) doesn't support reporting on plain text and HTML fields at this time. 

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
<li><a href="../../queries/titles-ids-descriptions.md" data-raw-source="[Acceptance Criteria](../../queries/titles-ids-descriptions.md)">Acceptance Criteria</a> (Scrum)</li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Accepted By](guidance-code-review-feedback-field-reference.md)">Accepted By</a> </li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Accepted Date](guidance-code-review-feedback-field-reference.md)">Accepted Date</a></li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Activated By](../../queries/query-by-workflow-changes.md)">Activated By</a></li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Activated Date](../../queries/query-by-workflow-changes.md)">Activated Date</a></li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Activity](../../queries/query-numeric.md)">Activity</a></li>
<li><a href="cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Actual Attendee 1-8](cmmi/guidance-review-meeting-field-reference-cmmi.md)">Actual Attendee 1-8</a> (CMMI)</li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Analysis](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Analysis</a> (CMMI)</li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Application Launch Instructions](guidance-code-review-feedback-field-reference.md)">Application Launch Instructions</a></li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Application Start Information](guidance-code-review-feedback-field-reference.md)">Application Start Information</a> </li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Application Type](guidance-code-review-feedback-field-reference.md)">Application Type</a> </li>
<li><a href="../../queries/query-by-area-iteration-path.md" data-raw-source="[Area ID](../../queries/query-by-area-iteration-path.md)">Area ID</a> (System)</li>
<li><a href="../../queries/query-by-area-iteration-path.md" data-raw-source="[Area Path](../../queries/query-by-area-iteration-path.md)">Area Path</a> (System)</li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Assigned To](../../queries/query-by-workflow-changes.md)">Assigned To</a></li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Associated Context](guidance-code-review-feedback-field-reference.md)">Associated Context</a></li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Associated Context Code](guidance-code-review-feedback-field-reference.md)">Associated Context Code</a></li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Associated Context Owner](guidance-code-review-feedback-field-reference.md)">Associated Context Owner</a></li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Associated Context Type](guidance-code-review-feedback-field-reference.md)">Associated Context Type</a></li>
<li><a href="../../queries/linking-attachments.md" data-raw-source="[Attached File Count](../../queries/linking-attachments.md)">Attached File Count</a></li>
<li>Authorized As (Not used)</li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Automated Test Id](../../queries/build-test-integration.md)">Automated Test Id</a> (TCM)</li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Automated Test Name](../../queries/build-test-integration.md)">Automated Test Name</a> (TCM) </li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Automated Test Storage](../../queries/build-test-integration.md)">Automated Test Storage</a> (TCM)</li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Automated Test Type](../../queries/build-test-integration.md)">Automated Test Type</a> (TCM) </li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[AutomatedTestId](../../queries/build-test-integration.md)">AutomatedTestId</a> (TCM) </li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[AutomatedTestName](../../queries/build-test-integration.md)">AutomatedTestName</a> (TCM)</li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Automation Status](../../queries/build-test-integration.md)">Automation Status</a> (TCM)</li>
</ul>
<h3>B</h3>
<ul><li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Backlog Priority](../../queries/planning-ranking-priorities.md)">Backlog Priority</a> (Scrum)</li>
<li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Blocked](../../queries/planning-ranking-priorities.md)">Blocked</a></li>
<li><a href="../../queries/query-by-workflow-changes.md">Board Column<sup>1</sup></a></li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Board Column Done](../../queries/query-by-workflow-changes.md)">Board Column Done<sup>1</sup></a></li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Board Lane](../../queries/query-by-workflow-changes.md)">Board Lane<sup>1</sup></a></li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Business Value](../../queries/query-numeric.md)">Business Value</a></li>
</ul>
<h3>C</h3>
<ul><li><a href="cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Called By](cmmi/guidance-review-meeting-field-reference-cmmi.md)">Called By</a> (CMMI)</li>
<li><a href="cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Called Date](cmmi/guidance-review-meeting-field-reference-cmmi.md)">Called Date</a> (CMMI)</li>
<li><a href="../../queries/history-and-auditing.md" data-raw-source="[Changed By](../../queries/history-and-auditing.md)">Changed By</a> (System)</li>
<li><a href="../../queries/history-and-auditing.md" data-raw-source="[Changed Date](../../queries/history-and-auditing.md)">Changed Date</a> (System)</li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Closed By](../../queries/query-by-workflow-changes.md)">Closed By</a> (System)</li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Closed Date](../../queries/query-by-workflow-changes.md)">Closed Date</a> (System)</li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Closed Status](guidance-code-review-feedback-field-reference.md)">Closed Status</a></li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Closed Status Code](guidance-code-review-feedback-field-reference.md)">Closed Status Code</a></li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Closing Comment](guidance-code-review-feedback-field-reference.md)">Closing Comment</a></li>
<li><a href="../../queries/linking-attachments.md">Comment Count<sup>2</sup></a></li>
<li><a href="cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Comments](cmmi/guidance-review-meeting-field-reference-cmmi.md)">Comments</a> (CMMI)</li>
<li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Committed](../../queries/planning-ranking-priorities.md)">Committed</a> (CMMI)</li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Completed Work](../../queries/query-numeric.md)">Completed Work</a></li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Contingency Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Contingency Plan</a> (CMMI)</li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Corrective Action Actual Resolution](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Corrective Action Actual Resolution</a> (CMMI)</li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Corrective Action Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Corrective Action Plan</a> (CMMI)</li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Created By](../../queries/query-by-workflow-changes.md)">Created By</a> (System)</li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Created Date](../../queries/query-by-workflow-changes.md)">Created Date</a> (System)</li>
</ul>
</td>
<td width="33%">
<h3>D-E-F</h3>
<ul>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Discipline](../../queries/query-numeric.md)">Discipline</a> (CMMI)</li>
<li><a href="../../queries/titles-ids-descriptions.md" data-raw-source="[Description](../../queries/titles-ids-descriptions.md)">Description</a> (System)</li>
<li><a href="../../queries/query-by-date-or-current-iteration.md" data-raw-source="[Due Date](../../queries/query-by-date-or-current-iteration.md)">Due Date</a></li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Effort](../../queries/query-numeric.md)">Effort</a> </li>
<li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Escalate](../../queries/planning-ranking-priorities.md)">Escalate</a> (CMMI)</li>
<li><a href="../../queries/linking-attachments.md#external-link-count" data-raw-source="[External Link Count](../../queries/linking-attachments.md#external-link-count)">External Link Count</a> </li>
<li><a href="../../queries/query-by-date-or-current-iteration.md" data-raw-source="[Finish Date](../../queries/query-by-date-or-current-iteration.md)">Finish Date</a></li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Found In Build](../../queries/build-test-integration.md)">Found In Build</a>  (TCM)</li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Found In Environment](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Found In Environment</a> (CMMI)</li>
</ul>
<h3>H</h3>
<ul>
<li><a href="../../queries/history-and-auditing.md" data-raw-source="[History](../../queries/history-and-auditing.md)">History</a> (System)</li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[How Found](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">How Found</a> (CMMI)</li>
<li><a href="../../queries/linking-attachments.md#hyper-link-count" data-raw-source="[Hyperlink Count](../../queries/linking-attachments.md#hyper-link-count)">Hyperlink Count</a></li>
</ul>
<h3>I</h3>
<ul>
<li><a href="../../queries/titles-ids-descriptions.md" data-raw-source="[ID](../../queries/titles-ids-descriptions.md)">ID</a> (System)</li>
<li><a href="cmmi/guidance-requirements-field-reference-cmmi.md" data-raw-source="[Impact Assessment](cmmi/guidance-requirements-field-reference-cmmi.md)">Impact Assessment</a> (CMMI)</li>
<li><a href="cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Impact on Architecture](cmmi/guidance-change-request-field-reference-cmmi.md)">Impact on Architecture</a> (CMMI)</li>
<li><a href="cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Impact on Development](cmmi/guidance-change-request-field-reference-cmmi.md)">Impact on Development</a> (CMMI)</li>
<li><a href="cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Impact on Technical Publications](cmmi/guidance-change-request-field-reference-cmmi.md)">Impact on Technical Publications</a> (CMMI)</li>
<li><a href="cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Impact on Test](cmmi/guidance-change-request-field-reference-cmmi.md)">Impact on Test</a> (CMMI)</li>
<li><a href="cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Impact on User Experience](cmmi/guidance-change-request-field-reference-cmmi.md)">Impact on User Experience</a> (CMMI)</li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Integrated in Build](../../queries/build-test-integration.md)">Integrated in Build</a> (TCM)</li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Issue](../../queries/build-test-integration.md)">Issue</a> (TCM)</li>
<li><a href="../../queries/query-by-area-iteration-path.md" data-raw-source="[Iteration Id](../../queries/query-by-area-iteration-path.md)">Iteration Id</a>  (System)</li>
<li><a href="../../queries/query-by-area-iteration-path.md" data-raw-source="[Iteration Path](../../queries/query-by-area-iteration-path.md)">Iteration Path</a> (System)</li>
</ul>
<h3>J-L-M-N</h3>
<ul>
<li><a href="cmmi/guidance-change-request-field-reference-cmmi.md" data-raw-source="[Justification](cmmi/guidance-change-request-field-reference-cmmi.md)">Justification</a> (CMMI)</li>
<li><a href="../../queries/linking-attachments.md" data-raw-source="[Link Comment](../../queries/linking-attachments.md)">Link Comment</a> (System)</li>
<li><a href="../../queries/linking-attachments.md" data-raw-source="[Link Description](../../queries/linking-attachments.md)">Link Description</a> (System)</li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Local Data Source](../../queries/build-test-integration.md)">Local Data Source</a> (TCM)</li>
<li><a href="cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Meeting Type](cmmi/guidance-review-meeting-field-reference-cmmi.md)">Meeting Type</a> (CMMI)</li>
<li><a href="cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Minutes](cmmi/guidance-review-meeting-field-reference-cmmi.md)">Minutes</a> (CMMI) </li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Mitigation Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Mitigation Plan</a> (CMMI) </li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Mitigation Triggers](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Mitigation Triggers</a> (CMMI)</li>
<li><a href="../../queries/query-by-area-iteration-path.md" data-raw-source="[Node Name](../../queries/query-by-area-iteration-path.md)">Node Name</a> (System)</li>
</ul>
<h3>O-P-Q</h3>
<ul>
<li><a href="cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Optional Attendee 1-8](cmmi/guidance-review-meeting-field-reference-cmmi.md)">Optional Attendee 1-8</a> (CMMI)</li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Original Estimate](../../queries/query-numeric.md)">Original Estimate</a></li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Parameters](../../queries/build-test-integration.md)">Parameters</a> (TCM)</li>
<li><a href="../../queries/linking-attachments.md#parent">Parent<sup>3</sup></a></li>
<li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Priority](../../queries/planning-ranking-priorities.md)">Priority</a> </li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Probability](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Probability</a> (CMMI)</li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md">Proposed Fix</a> (CMMI) </li>
<li><a href="cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Purpose](cmmi/guidance-review-meeting-field-reference-cmmi.md)">Purpose</a> (CMMI)</li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Query Text](../../queries/build-test-integration.md)">Query Text</a> (TCM)</li>
</ul>
</td>
<td width="33%"><h3>R</h3>
<ul>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Rating](guidance-code-review-feedback-field-reference.md)">Rating</a></li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Reason](../../queries/query-by-workflow-changes.md)">Reason</a> (System)</li>
<li><a href="../../queries/linking-attachments.md" data-raw-source="[Related Link Count](../../queries/linking-attachments.md)">Related Link Count</a> (System)</li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Remaining Work](../../queries/query-numeric.md)">Remaining Work</a> </li>
<li><a href="../../queries/linking-attachments.md#remote-link-count">Remote Link Count<sup>3</sup></a> (System)</li>
<li><a href="../../queries/titles-ids-descriptions.md" data-raw-source="[Repro Steps](../../queries/titles-ids-descriptions.md)">Repro Steps</a></li>
<li><a href="cmmi/guidance-review-meeting-field-reference-cmmi.md" data-raw-source="[Required Attendee 1-8](cmmi/guidance-review-meeting-field-reference-cmmi.md)">Required Attendee 1-8</a> (CMMI)</li>
<li><a href="cmmi/guidance-requirements-field-reference-cmmi.md" data-raw-source="[Requirement Type](cmmi/guidance-requirements-field-reference-cmmi.md)">Requirement Type</a> (CMMI)</li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Requires Review](../../queries/query-numeric.md)">Requires Review</a> (CMMI)</li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Requires Test](../../queries/query-numeric.md)">Requires Test</a> (CMMI)</li>
<li><a href="../../queries/titles-ids-descriptions.md" data-raw-source="[Resolution]](../../queries/titles-ids-descriptions.md)">Resolution]</a> (Scrum)</li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Resolved By](../../queries/query-by-workflow-changes.md)">Resolved By</a></li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Resolved Date](../../queries/query-by-workflow-changes.md)">Resolved Date</a></li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[Resolved Reason](../../queries/query-by-workflow-changes.md)">Resolved Reason</a></li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Reviewed By](guidance-code-review-feedback-field-reference.md)">Reviewed By</a></li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[Reviewed Date](guidance-code-review-feedback-field-reference.md)">Reviewed Date</a></li>
<li><a href="../../queries/history-and-auditing.md" data-raw-source="[Rev](../../queries/history-and-auditing.md)">Rev</a> (System)</li>
<li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Risk](../../queries/planning-ranking-priorities.md)">Risk</a> (Agile)</li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Root Cause](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Root Cause</a> (CMMI)</li>
</ul>
<h3>S</h3>
<ul>
<li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Severity](../../queries/planning-ranking-priorities.md)">Severity</a></li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Size](../../queries/query-numeric.md)">Size</a> (CMMI)</li>
<li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Stack Rank](../../queries/planning-ranking-priorities.md)">Stack Rank</a></li>
<li><a href="../../queries/query-by-date-or-current-iteration.md" data-raw-source="[Start Date](../../queries/query-by-date-or-current-iteration.md)">Start Date</a></li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[State](../../queries/query-by-workflow-changes.md)">State</a> (System)</li>
<li><a href="../../queries/query-by-workflow-changes.md" data-raw-source="[State Change Date](../../queries/query-by-workflow-changes.md)">State Change Date</a></li>
<li><a href="guidance-code-review-feedback-field-reference.md" data-raw-source="[State Code](guidance-code-review-feedback-field-reference.md)">State Code</a></li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Steps](../../queries/build-test-integration.md)">Steps</a> (TCM)</li>
<li><a href="../../queries/titles-ids-descriptions.md" data-raw-source="[Steps to Reproduce](../../queries/titles-ids-descriptions.md)">Steps to Reproduce</a> (TCM)</li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Story Points](../../queries/query-numeric.md)">Story Points</a> (Agile)</li>
<li><a href="cmmi/guidance-requirements-field-reference-cmmi.md" data-raw-source="[Subject Matter Expert](cmmi/guidance-requirements-field-reference-cmmi.md)">Subject Matter Expert</a> (CMMI)</li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Symptom](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Symptom</a> (CMMI)</li>
<li><a href="../../queries/titles-ids-descriptions.md" data-raw-source="[System Info](../../queries/titles-ids-descriptions.md)">System Info</a> (TCM) </li>
</ul>
<h3>T</h3>
<ul>
<li><a href="../../queries/add-tags-to-work-items.md" data-raw-source="[Tags](../../queries/add-tags-to-work-items.md)">Tags</a></li>
<li><a href="../../queries/query-by-date-or-current-iteration.md" data-raw-source="[Target Date](../../queries/query-by-date-or-current-iteration.md)">Target Date</a></li>
<li><a href="cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md" data-raw-source="[Target Resolve Date](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md)">Target Resolve Date</a> (CMMI)</li>
<li><a href="../../queries/query-numeric.md" data-raw-source="[Task Type](../../queries/query-numeric.md)">Task Type</a> (CMMI)</li>
<li><a href="../../queries/titles-ids-descriptions.md" data-raw-source="[Team Project](../../queries/titles-ids-descriptions.md)">Team Project</a> (System) </li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Test Suite Audit](../../queries/build-test-integration.md)">Test Suite Audit</a> (TCM)</li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Test Suite Type](../../queries/build-test-integration.md)">Test Suite Type</a> (TCM)</li>
<li><a href="../../queries/build-test-integration.md" data-raw-source="[Test Suite Type ID](../../queries/build-test-integration.md)">Test Suite Type ID</a> (TCM)</li>
<li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Time Criticality](../../queries/planning-ranking-priorities.md)">Time Criticality</a></li>
<li><a href="../../queries/titles-ids-descriptions.md" data-raw-source="[Title](../../queries/titles-ids-descriptions.md)">Title</a> (System)</li>
<li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Triage](../../queries/planning-ranking-priorities.md)">Triage</a> (CMMI)</li>
</ul>
<h3>U-V-W</h3>
<ul>
<li><a href="cmmi/guidance-requirements-field-reference-cmmi.md" data-raw-source="[User Acceptance Test](cmmi/guidance-requirements-field-reference-cmmi.md)">User Acceptance Test</a> (CMMI)</li>
<li><a href="../../queries/planning-ranking-priorities.md" data-raw-source="[Value Area](../../queries/planning-ranking-priorities.md)">Value Area</a></li>
<li><a href="../../queries/history-and-auditing.md" data-raw-source="[Watermark](../../queries/history-and-auditing.md)">Watermark</a> (System)</li>
<li><a href="../../queries/titles-ids-descriptions.md" data-raw-source="[Work Item Type](../../queries/titles-ids-descriptions.md)">Work Item Type</a> (System) </li> 
</ul>
</td>
</tr>
</tbody>
</table>
<hr/>
<br/>


####Notes: 

1. These fields are available from Azure DevOps Services and TFS 2015.1 or later versions. 
2. The Comment Count field is available from Azure DevOps Services and TFS 2017 or later versions. 
3. These fields are available from Azure DevOps Services only at this time.

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


## Related articles

- [About work item fields](../work-item-fields.md)
- [Create managed queries](../../queries/example-queries.md)
- [Define a query](../../queries/using-queries.md) 
- [Choose a process](choose-process.md)  
- [Reportable fields reference](../../../reference/xml/reportable-fields-reference.md) (on-premises TFS only)    


