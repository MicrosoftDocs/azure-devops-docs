---
title: Query by field values in Azure Boards and Azure DevOps
titleSuffix: Azure Boards
description: Learn how to create a query by filtering on field values that are compared to other field values in Azure Boards and Azure DevOps.
ms.custom: boards-queries
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: example-scenario
monikerRange: '<= azure-devops'
ms.date: 10/25/2021  
---

# Query by field value comparisons in Azure Boards and Azure DevOps  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can create queries based on how one field's value compares to another using the comparison field operators. This query is useful to filter work items based on: 
- Is the person who created the work item the same as or different than the person assigned to it? Or, who closed it
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
   
   `Created By <>[Field] Closed By`  
   State = Closed</code>  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Tasks whose Original Estimate is less than Completed Work
   :::column-end:::
   :::column span="1":::
   
   `Original Estimate <=[Field] Completed Work`  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   Closed tasks completed before their target date 
   :::column-end:::
   :::column span="1":::
   
   `Target Date <=[Field] Closed Date`  
   State = Closed</code>  
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
   
   - [Acceptance Criteria](titles-ids-descriptions.md#fields) (Scrum)
   - [Accepted By](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields) 
   - [Accepted Date](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Activated By](query-by-workflow-changes.md#fields)
   - [Activated Date](query-by-workflow-changes.md#fields)
   - [Activity](query-numeric.md#fields)
   - [Actual Attendee 1-8](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Analysis](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Application Launch Instructions](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Application Start Information](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields) 
   - [Application Type](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields) 
   - [Iteration Id](query-by-area-iteration-path.md#fields)  (System)
   - [Assigned To](query-by-workflow-changes.md#fields)
   - [Associated Context](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Associated Context Code](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Associated Context Owner](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Associated Context Type](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Attached File Count](linking-attachments.md#fields)
   - [Automated Test Id](build-test-integration.md#fields) (TCM)
   - [Automated Test Name](build-test-integration.md#fields) (TCM) 
   - [Automated Test Storage](build-test-integration.md#fields) (TCM)
   - [Automated Test Type](build-test-integration.md#fields) (TCM) 
   - [AutomatedTestId](build-test-integration.md#fields) (TCM) 
   - [AutomatedTestName](build-test-integration.md#fields) (TCM)
   - [Automation Status](build-test-integration.md#fields) (TCM)
   
   ### B
   - [Backlog Priority](planning-ranking-priorities.md#fields) (Scrum)
   - [Blocked](planning-ranking-priorities.md#fields)
   - [Board Column](query-by-workflow-changes.md#fields)
   - [Board Column Done](query-by-workflow-changes.md#fields)
   - [Board Lane](query-by-workflow-changes.md#fields)
   - [Business Value](query-numeric.md#fields)
   
   ### C
   - [Called By](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Called Date](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Changed By](history-and-auditing.md#fields) (System)
   - [Changed Date](history-and-auditing.md#fields) (System)
   - [Closed By](query-by-workflow-changes.md#fields) (System)
   - [Closed Date](query-by-workflow-changes.md#fields) (System)
   - [Closed Status](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Closed Status Code](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Closing Comment](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Comment Count](linking-attachments.md#fields)
   - [Comments](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Committed](planning-ranking-priorities.md#fields) (CMMI)
   - [Completed Work](query-numeric.md#fields)
   - [Contingency Plan](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Corrective Action Actual Resolution](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Corrective Action Plan](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Created By](query-by-workflow-changes.md#fields) (System)
   - [Created Date](query-by-workflow-changes.md#fields) (System)
   
   :::column-end:::
   :::column span="1":::
   
   ### D-E-F
   
   - [Discipline](query-numeric.md#fields) (CMMI)
   - [Due Date](query-by-date-or-current-iteration.md#fields)
   - [Effort](query-numeric.md#fields) 
   - [Escalate](planning-ranking-priorities.md#fields) (CMMI)
   - [External Link Count](linking-attachments.md#external-link-count) 
   - [Finish Date](query-by-date-or-current-iteration.md#fields)
   - [Found In Build](build-test-integration.md#fields)  (TCM)
   - [Found In Environment](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   
   ### H
   
   - [How Found](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Hyperlink Count](linking-attachments.md#hyper-link-count)
   
   ### I
   
   - [ID](titles-ids-descriptions.md#fields) (System)
   - [Impact Assessment](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi#fields) (CMMI)
   - [Impact on Architecture](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Impact on Development](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Impact on Technical Publications](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Impact on Test](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Impact on User Experience](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Integrated in Build](build-test-integration.md#fields) (TCM)
   - [Issue](build-test-integration.md#fields) (TCM)
   - [Iteration Id](query-by-area-iteration-path.md#fields)  (System)
   
   ### J-L-M-N
   
   - [Justification](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Link Comment](linking-attachments.md#fields) (System)
   - [Link Description](linking-attachments.md#fields) (System)
   - [Local Data Source](build-test-integration.md#fields) (TCM)
   - [Meeting Type](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Minutes](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI) 
   - [Mitigation Plan](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI) 
   - [Mitigation Triggers](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Node Name](query-by-area-iteration-path.md#fields) (System)
   
   ### O-P-Q
   
   - [Optional Attendee 1-8](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Original Estimate](query-numeric.md#fields)
   - [Parameters](build-test-integration.md#fields) (TCM)
   - [Priority](planning-ranking-priorities.md#fields) 
   - [Probability](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Proposed Fix](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI) 
   - [Purpose](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Query Text](build-test-integration.md#fields) (TCM)
   
   :::column-end:::
   :::column span="1":::
   ### R
   
   - [Rating](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Reason](query-by-workflow-changes.md#fields) (System)
   - [Related Link Count](linking-attachments.md#fields) (System)
   - [Remaining Work](query-numeric.md#fields) 
   - [Remote Link Count](linking-attachments.md#remote-link-count) (System)
   - [Repro Steps](titles-ids-descriptions.md#fields)
   - [Required Attendee 1-8](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Requirement Type](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi#fields) (CMMI)
   - [Requires Review](query-numeric.md#fields) (CMMI)
   - [Requires Test](query-numeric.md#fields) (CMMI)
   - [Resolution](titles-ids-descriptions.md#fields) (Scrum)
   - [Resolved By](query-by-workflow-changes.md#fields)
   - [Resolved Date](query-by-workflow-changes.md#fields)
   - [Resolved Reason](query-by-workflow-changes.md#fields)
   - [Reviewed By](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Reviewed Date](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Rev](history-and-auditing.md#fields) (System)
   - [Risk](planning-ranking-priorities.md#fields) (Agile)
   - [Root Cause](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   
   ### S
   
   - [Severity](planning-ranking-priorities.md#fields)
   - [Size](query-numeric.md#fields) (CMMI)
   - [Stack Rank](planning-ranking-priorities.md#fields)
   - [Start Date](query-by-date-or-current-iteration.md#fields)
   - [State](query-by-workflow-changes.md#fields) (System)
   - [State Change Date](query-by-workflow-changes.md#fields)
   - [State Code](../work-items/guidance/guidance-code-review-feedback-field-reference.md#fields)
   - [Steps](build-test-integration.md#fields) (TCM)
   - [Steps to Reproduce](titles-ids-descriptions.md#fields) (TCM)
   - [Story Points](query-numeric.md#fields) (Agile)
   - [Subject Matter Expert](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi#fields) (CMMI)
   - [Symptom](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [System Info](titles-ids-descriptions.md#fields) (TCM) 
   
   ### T
   
   - [Target Date](query-by-date-or-current-iteration.md#fields)
   - [Target Resolve Date](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Task Type](query-numeric.md#fields) (CMMI)
   - [Team Project](titles-ids-descriptions.md#fields) (System) 
   - [Test Suite Audit](build-test-integration.md#fields) (TCM)
   - [Test Suite Type](build-test-integration.md#fields) (TCM)
   - [Test Suite Type ID](build-test-integration.md#fields) (TCM)
   - [Time Criticality](planning-ranking-priorities.md#fields)
   - [Title](titles-ids-descriptions.md#fields) (System)
   - [Triage](planning-ranking-priorities.md#fields) (CMMI)
   
   ### U-V-W
   
   - [User Acceptance Test](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi#fields) (CMMI)
   - [Value Area](planning-ranking-priorities.md#fields)
   - [Watermark](history-and-auditing.md#fields) (System)
   - [Work Item Type](titles-ids-descriptions.md#fields) (System)  
   
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
