---
title: Learn default and system work item field descriptions
titleSuffix: Azure Boards
description: Learn about all fields used in the Agile and Scrum processes and process templates for Azure Boards and Azure DevOps.
ms.custom: work-items, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 9720b88e-474c-451b-b3fe-5253ba24a653
ms.topic: conceptual  
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 01/17/2023
---

# Field descriptions for default and work item fields used in process templates

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Use this index to look up a description of each field used to track work items. This reference includes all fields defined within the core system processes/process templates: [Basic](../../get-started/plan-track-work.md), [Agile](agile-process.md), [Scrum](scrum-process.md), and [CMMI](cmmi-process.md). The fields and work item types (WITs) available to you depend on the process you chose when you [created your project](../../../organizations/projects/create-project.md).

::: moniker range="azure-devops"  

To support other tracking needs, you can [define your own custom work item fields](../../../organizations/settings/work/customize-process.md). 

::: moniker-end  

::: moniker range=">= azure-devops-2019 < azure-devops"  

To support other tracking needs, you can [define your own custom work item fields](../../../organizations/settings/work/customize-process.md) using the Inheritance process model, or if your project collection is configured to use the On-premises XML process model, then see [Modify or add a custom field](../../../reference/add-modify-field.md).  

::: moniker-end  

::: moniker range="tfs-2018"  

To support other tracking needs, you can [modify or add a custom field](../../../reference/add-modify-field.md). 

::: moniker-end  


::: moniker range=">= azure-devops-2019"  

> [!NOTE]   
> The [Analytics Service](../../../report/powerbi/what-is-analytics.md) doesn't support reporting on plain text and HTML fields. 

::: moniker-end  

## Alphabetical index 

Values in parenthesis indicate the following criteria:

- **System**: Core system field assigned to all work item types for all processes  
- **Agile**: Used only by the [Agile process](agile-process.md)  
- **CMMI**: Used only by the [CMMI process](cmmi-process.md)  
- **Scrum**: Used only by the [Scrum process](scrum-process.md)  
- **TCM**: Used to support Test case management   


:::row:::
   :::column span="1":::
   ### A
   
   - [Acceptance Criteria](../../queries/titles-ids-descriptions.md#fields) (Scrum)
   - [Accepted By](guidance-code-review-feedback-field-reference.md#fields) 
   - [Accepted Date](guidance-code-review-feedback-field-reference.md#fields)
   - [Activated By](../../queries/query-by-workflow-changes.md#fields)
   - [Activated Date](../../queries/query-by-workflow-changes.md#fields)
   - [Activity](../../queries/query-numeric.md#fields)
   - [Actual Attendee 1-8](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Analysis](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Application Launch Instructions](guidance-code-review-feedback-field-reference.md#fields)
   - [Application Start Information](guidance-code-review-feedback-field-reference.md#fields) 
   - [Application Type](guidance-code-review-feedback-field-reference.md#fields) 
   - [Area ID](../../queries/query-by-area-iteration-path.md#fields) (System)
   - [Area Path](../../queries/query-by-area-iteration-path.md#fields) (System)
   - [Assigned To](../../queries/query-by-workflow-changes.md#fields)
   - [Associated Context](guidance-code-review-feedback-field-reference.md#fields)
   - [Associated Context Code](guidance-code-review-feedback-field-reference.md#fields)
   - [Associated Context Owner](guidance-code-review-feedback-field-reference.md#fields)
   - [Associated Context Type](guidance-code-review-feedback-field-reference.md#fields)
   - [Attached File Count](../../queries/linking-attachments.md#fields)
   - Authorized As (Not used)
   - [Automated Test Id](../../queries/build-test-integration.md#fields) (TCM)
   - [Automated Test Name](../../queries/build-test-integration.md#fields) (TCM) 
   - [Automated Test Storage](../../queries/build-test-integration.md#fields) (TCM)
   - [Automated Test Type](../../queries/build-test-integration.md#fields) (TCM) 
   - [AutomatedTestId](../../queries/build-test-integration.md#fields) (TCM) 
   - [AutomatedTestName](../../queries/build-test-integration.md#fields) (TCM)
   - [Automation Status](../../queries/build-test-integration.md#fields) (TCM)
   
   ### B
   - [Backlog Priority](../../queries/planning-ranking-priorities.md#fields) (Scrum)
   - [Blocked](../../queries/planning-ranking-priorities.md#fields)
   - [Board Column](../../queries/query-by-workflow-changes.md#fields)
   - [Board Column Done](../../queries/query-by-workflow-changes.md#fields)
   - [Board Lane](../../queries/query-by-workflow-changes.md#fields)
   - [Business Value](../../queries/query-numeric.md#fields)
   
   ### C
   - [Called By](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Called Date](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Changed By](../../queries/history-and-auditing.md#fields) (System)
   - [Changed Date](../../queries/history-and-auditing.md#fields) (System)
   - [Closed By](../../queries/query-by-workflow-changes.md#fields) (System)
   - [Closed Date](../../queries/query-by-workflow-changes.md#fields) (System)
   - [Closed Status](guidance-code-review-feedback-field-reference.md#fields)
   - [Closed Status Code](guidance-code-review-feedback-field-reference.md#fields)
   - [Closing Comment](guidance-code-review-feedback-field-reference.md#fields)
   - [Comment Count](../../queries/linking-attachments.md#fields)
   - [Comments](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Committed](../../queries/planning-ranking-priorities.md#fields) (CMMI)
   - [Completed Work](../../queries/query-numeric.md#fields)
   - [Contingency Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Corrective Action Actual Resolution](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Corrective Action Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Created By](../../queries/query-by-workflow-changes.md#fields) (System)
   - [Created Date](../../queries/query-by-workflow-changes.md#fields) (System)
   
   :::column-end:::
   :::column span="1":::
   
   ### D-E-F
   
   - [Discipline](../../queries/query-numeric.md#fields) (CMMI)
   - [Description](../../queries/titles-ids-descriptions.md#fields) (System)
   - [Due Date](../../queries/query-by-date-or-current-iteration.md#fields)
   - [Effort](../../queries/query-numeric.md#fields) 
   - [Escalate](../../queries/planning-ranking-priorities.md#fields) (CMMI)
   - [External Link Count](../../queries/linking-attachments.md#external-link-count) 
   - [Finish Date](../../queries/query-by-date-or-current-iteration.md#fields)
   - [Found In Build](../../queries/build-test-integration.md#fields)  (TCM)
   - [Found In Environment](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   
   ### H
   
   - [History](../../queries/history-and-auditing.md#fields) (System)
   - [How Found](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Hyperlink Count](../../queries/linking-attachments.md#hyper-link-count)
   
   ### I
   
   - [ID](../../queries/titles-ids-descriptions.md#fields) (System)
   - [Impact Assessment](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi#fields) (CMMI)
   - [Impact on Architecture](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Impact on Development](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Impact on Technical Publications](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Impact on Test](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Impact on User Experience](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Integrated in Build](../../queries/build-test-integration.md#fields) (TCM)
   - [Issue](../../queries/build-test-integration.md#fields) (TCM)
   - [Iteration ID](../../queries/query-by-area-iteration-path.md#fields)  (System)
   - [Iteration Path](../../queries/query-by-area-iteration-path.md#fields) (System)
   
   ### J-L-M-N
   
   - [Justification](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields) (CMMI)
   - [Link Comment](../../queries/linking-attachments.md#fields) (System)
   - [Link Description](../../queries/linking-attachments.md#fields) (System)
   - [Local Data Source](../../queries/build-test-integration.md#fields) (TCM)
   - [Meeting Type](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Minutes](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI) 
   - [Mitigation Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI) 
   - [Mitigation Triggers](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Node Name](../../queries/query-by-area-iteration-path.md#fields) (System)
   
   ### O-P-Q
   
   - [Optional Attendee 1-8](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Original Estimate](../../queries/query-numeric.md#fields)
   - [Parameters](../../queries/build-test-integration.md#fields) (TCM)
   - [Parent<sup>1</sup>](../../queries/linking-attachments.md#parent)
   - [Priority](../../queries/planning-ranking-priorities.md#fields) 
   - [Probability](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Proposed Fix](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI) 
   - [Purpose](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Query Text](../../queries/build-test-integration.md#fields) (TCM)
   
   :::column-end:::
   :::column span="1":::
   ### R
   
   - [Rating](guidance-code-review-feedback-field-reference.md#fields)
   - [Reason](../../queries/query-by-workflow-changes.md#fields) (System)
   - [Related Link Count](../../queries/linking-attachments.md#fields) (System)
   - [Remaining Work](../../queries/query-numeric.md#fields) 
   - [Remote Link Count<sup>2</sup>](../../queries/linking-attachments.md#remote-link-count) (System)
   - [Repro Steps](../../queries/titles-ids-descriptions.md#fields)
   - [Required Attendee 1-8](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields) (CMMI)
   - [Requirement Type](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi#fields) (CMMI)
   - [Requires Review](../../queries/query-numeric.md#fields) (CMMI)
   - [Requires Test](../../queries/query-numeric.md#fields) (CMMI)
   - [Resolution](../../queries/titles-ids-descriptions.md#fields) (Scrum)
   - [Resolved By](../../queries/query-by-workflow-changes.md#fields)
   - [Resolved Date](../../queries/query-by-workflow-changes.md#fields)
   - [Resolved Reason](../../queries/query-by-workflow-changes.md#fields)
   - [Rev](../../queries/history-and-auditing.md#fields) (System)
   - [Reviewed By](guidance-code-review-feedback-field-reference.md#fields)
   - [Reviewed Date](guidance-code-review-feedback-field-reference.md#fields)
   - [Revised Date](../../queries/history-and-auditing.md#fields) (System, TCM)
   - [Risk](../../queries/planning-ranking-priorities.md#fields) (Agile)
   - [Root Cause](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   
   ### S
   
   - [Severity](../../queries/planning-ranking-priorities.md#fields)
   - [Size](../../queries/query-numeric.md#fields) (CMMI)
   - [Stack Rank](../../queries/planning-ranking-priorities.md#fields)
   - [Start Date](../../queries/query-by-date-or-current-iteration.md#fields)
   - [State](../../queries/query-by-workflow-changes.md#fields) (System)
   - [State Change Date](../../queries/query-by-workflow-changes.md#fields)
   - [State Code](guidance-code-review-feedback-field-reference.md#fields)
   - [Steps](../../queries/build-test-integration.md#fields) (TCM)
   - [Steps to Reproduce](../../queries/titles-ids-descriptions.md#fields) (TCM)
   - [Story Points](../../queries/query-numeric.md#fields) (Agile)
   - [Subject Matter Expert](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi#fields) (CMMI)
   - [Symptom](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [System Info](../../queries/titles-ids-descriptions.md#fields) (TCM) 
   
   ### T
   
   - [Tags](../../queries/add-tags-to-work-items.md)
   - [Target Date](../../queries/query-by-date-or-current-iteration.md#fields)
   - [Target Resolve Date](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) (CMMI)
   - [Task Type](../../queries/query-numeric.md#fields) (CMMI)
   - [Team Project](../../queries/titles-ids-descriptions.md#fields) (System) 
   - [Test Suite Audit](../../queries/build-test-integration.md#fields) (TCM)
   - [Test Suite Type](../../queries/build-test-integration.md#fields) (TCM)
   - [Test Suite Type ID](../../queries/build-test-integration.md#fields) (TCM)
   - [Time Criticality](../../queries/planning-ranking-priorities.md#fields)
   - [Title](../../queries/titles-ids-descriptions.md#fields) (System)
   - [Triage](../../queries/planning-ranking-priorities.md#fields) (CMMI)
   
   ### U-V-W
   
   - [User Acceptance Test](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi#fields) (CMMI)
   - [Value Area](../../queries/planning-ranking-priorities.md#fields)
   - [Watermark](../../queries/history-and-auditing.md#fields) (System)
   - [Work Item Type](../../queries/titles-ids-descriptions.md#fields) (System)  
   
   :::column-end:::
:::row-end:::

> [!NOTE]  
> 1. This field is available from Azure DevOps Services and Azure DevOps Server 2020 and later versions.
> 2. This field is available for Azure DevOps Services only.

By using the system fields or other fields you've added to your project collection, you can enable meaningful cross-project reports and queries. Also, any non-system field that is referenced in the workflow or forms section of the work item type definition must have a **FIELD** element that defines it in the **FIELDS** section of the work item type definition XML file. Also, you must specify any non-system field that you might want to use to generate a query or report in the **FIELDS** section.  


## Field reference articles 

The following articles describe fields that are used in common by several WITs, or those fields that are functionally specific to just one or a few WITs.  

### Fields common to many work types

- [Titles, IDs, and descriptive fields](../../queries/titles-ids-descriptions.md)
- [History and revision changes](../../queries/history-and-auditing.md#fields)
- [Areas and iterations](../../queries/query-by-area-iteration-path.md#fields)
- [Assignments and account-specific fields](../../queries/query-by-workflow-changes.md#fields)
- [Planning, ranking, and priorities](../../queries/planning-ranking-priorities.md#fields)
- [Work estimates, activity, and other numeric fields](../../queries/query-numeric.md#fields)
- [Build and test integration fields](../../queries/build-test-integration.md#fields)
- [Links and attachment related fields](../../queries/linking-attachments.md#fields) 

### Fields used by specific work item types

- [Code Review Request](guidance-code-review-feedback-field-reference.md#fields)
- [Code Review Response](guidance-code-review-feedback-field-reference.md#fields)
- [Feedback Request](guidance-code-review-feedback-field-reference.md#fields)
- [Feedback Response](guidance-code-review-feedback-field-reference.md#fields)
- [Shared Steps](../../queries/build-test-integration.md#fields)
- [Test Case](../../queries/build-test-integration.md#fields)

### Fields used to track CMMI work items

- [Requirements](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi#fields)
- [Bugs](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields)
- [Change Requests](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-change-request-field-reference-cmmi#fields)
- [Issues](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields)
- [Review Meetings](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-review-meeting-field-reference-cmmi#fields)
- [Risks](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md#fields) 
 

## Related articles


::: moniker range=">= azure-devops-2022"  

- [About work item fields](../work-item-fields.md)
- [About managed queries](../../queries/about-managed-queries.md)
- [Define a query](../../queries/using-queries.md) 
- [Choose a process](choose-process.md)  
  
::: moniker-end  

::: moniker range="< azure-devops-2022"  

- [About work item fields](../work-item-fields.md)
- [About managed queries](../../queries/about-managed-queries.md)
- [Define a query](../../queries/using-queries.md) 
- [Choose a process](choose-process.md)  
- [Reportable fields reference](/previous-versions/azure/devops/reference/xml/reportable-fields-reference) (On-premises XML process model only)  

::: moniker-end     

