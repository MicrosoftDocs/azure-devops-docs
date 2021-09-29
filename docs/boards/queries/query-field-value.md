---
title: Query by field values
titleSuffix: Azure Boards
description: Create a query by filtering on field values compared to other field values in Azure Boards, Azure DevOps, & TFS
ms.custom: boards-queries
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: example-scenario
monikerRange: '>= tfs-2013'
ms.date: 08/16/2019  
---

# Query by field value comparisons   

[!INCLUDE [temp](../includes/version-all.md)]

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

## Sample filters 

:::row:::
   :::column span="1":::
   **Filter for**
   :::column-end:::
   :::column span="1":::
   **Include these query clauses**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Work items closed by someone other than the person who created the work item  
   :::column-end:::
   :::column span="1":::
   
   `Created By ** <>[Field] ** Closed By`  State** = ** Closed</code>  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Tasks whose Original Estimate is less than Completed Work
   :::column-end:::
   :::column span="1":::
   
   `Original Estimate ** <=[Field] ** Completed Work`  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   Closed tasks completed prior to their target date 
   :::column-end:::
   :::column span="1":::
   
   `Target Date ** <=[Field] ** Closed Date`  State** = ** Closed</code>  
   :::column-end:::
:::row-end:::
  

<a id="counts"/>



## Fields that support field comparison

The following table provides an index to those fields that support field comparison queries. 

> [!NOTE]  
> Not all fields listed are supported for all projects or work item types. However, you can customize a process or work item type by adding custom fields which you can use for the purposes of queries and field comparisons. To learn more, see [Add a custom field to a work item type (Inheritance process)](../../organizations/settings/work/add-custom-field.md) or [Add or modify a field (Online XML process)](../../reference/add-modify-field.md).
 
:::row:::
   :::column span="1":::
   ### A
   
   - [Acceptance Criteria](titles-ids-descriptions.md) (Scrum)
   - [Accepted By](../work-items/guidance/guidance-code-review-feedback-field-reference.md) 
   - [Accepted Date](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Activated By](query-by-workflow-changes.md)
   - [Activated Date](query-by-workflow-changes.md)
   - [Activity](query-numeric.md)
   - [Actual Attendee 1-8](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Analysis](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Application Launch Instructions](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Application Start Information](../work-items/guidance/guidance-code-review-feedback-field-reference.md) 
   - [Application Type](../work-items/guidance/guidance-code-review-feedback-field-reference.md) 
   - [Iteration Id](query-by-area-iteration-path.md)  (System)
   - [Assigned To](query-by-workflow-changes.md)
   - [Associated Context](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Associated Context Code](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Associated Context Owner](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Associated Context Type](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Attached File Count](linking-attachments.md)
   - [Automated Test Id](build-test-integration.md) (TCM)
   - [Automated Test Name](build-test-integration.md) (TCM) 
   - [Automated Test Storage](build-test-integration.md) (TCM)
   - [Automated Test Type](build-test-integration.md) (TCM) 
   - [AutomatedTestId](build-test-integration.md) (TCM) 
   - [AutomatedTestName](build-test-integration.md) (TCM)
   - [Automation Status](build-test-integration.md) (TCM)
   
   ### B
   - [Backlog Priority](planning-ranking-priorities.md) (Scrum)
   - [Blocked](planning-ranking-priorities.md)
   - [Board Column](query-by-workflow-changes.md)
   - [Board Column Done](query-by-workflow-changes.md)
   - [Board Lane](query-by-workflow-changes.md)
   - [Business Value](query-numeric.md)
   
   ### C
   - [Called By](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Called Date](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Changed By](history-and-auditing.md) (System)
   - [Changed Date](history-and-auditing.md) (System)
   - [Closed By](query-by-workflow-changes.md) (System)
   - [Closed Date](query-by-workflow-changes.md) (System)
   - [Closed Status](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Closed Status Code](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Closing Comment](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Comment Count](linking-attachments.md)
   - [Comments](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Committed](planning-ranking-priorities.md) (CMMI)
   - [Completed Work](query-numeric.md)
   - [Contingency Plan](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Corrective Action Actual Resolution](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Corrective Action Plan](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Created By](query-by-workflow-changes.md) (System)
   - [Created Date](query-by-workflow-changes.md) (System)
   
   :::column-end:::
   :::column span="1":::
   
   ### D-E-F
   
   - [Discipline](query-numeric.md) (CMMI)
   - [Due Date](query-by-date-or-current-iteration.md)
   - [Effort](query-numeric.md) 
   - [Escalate](planning-ranking-priorities.md) (CMMI)
   - [External Link Count](linking-attachments.md#external-link-count) 
   - [Finish Date](query-by-date-or-current-iteration.md)
   - [Found In Build](build-test-integration.md)  (TCM)
   - [Found In Environment](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   
   ### H
   
   - [How Found](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Hyperlink Count](linking-attachments.md#hyper-link-count)
   
   ### I
   
   - [ID](titles-ids-descriptions.md) (System)
   - [Impact Assessment](../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)
   - [Impact on Architecture](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Impact on Development](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Impact on Technical Publications](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Impact on Test](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Impact on User Experience](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Integrated in Build](build-test-integration.md) (TCM)
   - [Issue](build-test-integration.md) (TCM)
   - [Iteration Id](query-by-area-iteration-path.md)  (System)
   
   ### J-L-M-N
   
   - [Justification](../work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Link Comment](linking-attachments.md) (System)
   - [Link Description](linking-attachments.md) (System)
   - [Local Data Source](build-test-integration.md) (TCM)
   - [Meeting Type](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Minutes](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI) 
   - [Mitigation Plan](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI) 
   - [Mitigation Triggers](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Node Name](query-by-area-iteration-path.md) (System)
   
   ### O-P-Q
   
   - [Optional Attendee 1-8](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Original Estimate](query-numeric.md)
   - [Parameters](build-test-integration.md) (TCM)
   - [Priority](planning-ranking-priorities.md) 
   - [Probability](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Proposed Fix](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI) 
   - [Purpose](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Query Text](build-test-integration.md) (TCM)
   
   :::column-end:::
   :::column span="1":::
   ### R
   
   - [Rating](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Reason](query-by-workflow-changes.md) (System)
   - [Related Link Count](linking-attachments.md) (System)
   - [Remaining Work](query-numeric.md) 
   - [Remote Link Count](linking-attachments.md#remote-link-count) (System)
   - [Repro Steps](titles-ids-descriptions.md)
   - [Required Attendee 1-8](../work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Requirement Type](../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)
   - [Requires Review](query-numeric.md) (CMMI)
   - [Requires Test](query-numeric.md) (CMMI)
   - [Resolution]](titles-ids-descriptions.md) (Scrum)
   - [Resolved By](query-by-workflow-changes.md)
   - [Resolved Date](query-by-workflow-changes.md)
   - [Resolved Reason](query-by-workflow-changes.md)
   - [Reviewed By](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Reviewed Date](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Rev](history-and-auditing.md) (System)
   - [Risk](planning-ranking-priorities.md) (Agile)
   - [Root Cause](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   
   ### S
   
   - [Severity](planning-ranking-priorities.md)
   - [Size](query-numeric.md) (CMMI)
   - [Stack Rank](planning-ranking-priorities.md)
   - [Start Date](query-by-date-or-current-iteration.md)
   - [State](query-by-workflow-changes.md) (System)
   - [State Change Date](query-by-workflow-changes.md)
   - [State Code](../work-items/guidance/guidance-code-review-feedback-field-reference.md)
   - [Steps](build-test-integration.md) (TCM)
   - [Steps to Reproduce](titles-ids-descriptions.md) (TCM)
   - [Story Points](query-numeric.md) (Agile)
   - [Subject Matter Expert](../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)
   - [Symptom](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [System Info](titles-ids-descriptions.md) (TCM) 
   
   ### T
   
   - [Target Date](query-by-date-or-current-iteration.md)
   - [Target Resolve Date](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Task Type](query-numeric.md) (CMMI)
   - [Team Project](titles-ids-descriptions.md) (System) 
   - [Test Suite Audit](build-test-integration.md) (TCM)
   - [Test Suite Type](build-test-integration.md) (TCM)
   - [Test Suite Type ID](build-test-integration.md) (TCM)
   - [Time Criticality](planning-ranking-priorities.md)
   - [Title](titles-ids-descriptions.md) (System)
   - [Triage](planning-ranking-priorities.md) (CMMI)
   
   ### U-V-W
   
   - [User Acceptance Test](../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)
   - [Value Area](planning-ranking-priorities.md)
   - [Watermark](history-and-auditing.md) (System)
   - [Work Item Type](titles-ids-descriptions.md) (System)  
   
   :::column-end:::
:::row-end:::


## Related articles 

- [Query index quick reference](query-index-quick-ref.md)
- [Query by title, ID, or description](titles-ids-descriptions.md)
- [Query by assignment or workflow changes](query-by-workflow-changes.md)  
- [Query by date or current iteration](query-by-date-or-current-iteration.md)   
- [Query a numeric field](query-numeric.md)  
- [Query by picklist value](planning-ranking-priorities.md)  


[!INCLUDE [temp](../includes/rest-apis-queries.md)]
