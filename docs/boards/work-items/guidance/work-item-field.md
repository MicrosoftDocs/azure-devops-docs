---
title: Index of default and system work item fields 
titleSuffix: Azure Boards
description: Index to all fields used in the Agile, Scrum, and CMMI processes/process templates for Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: work-items
ms.technology: devops-agile
ms.assetid: 9720b88e-474c-451b-b3fe-5253ba24a653
ms.topic: conceptual  
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 07/09/2020
---

# Work item field index  

[!INCLUDE [temp](../../includes/version-all.md)]

Use this index to look up a description of each field used to track work items. This reference includes all fields defined within the core system processes/process templates: [Basic](../../get-started/plan-track-work.md), [Agile](agile-process.md), [Scrum](scrum-process.md), and [CMMI](cmmi-process.md). The fields and work item types (WITs) available to you depend on the process you chose when you [created your project](../../../organizations/projects/create-project.md).

::: moniker range="azure-devops"  

To support additional tracking needs, you can [define your own custom work item fields](../../../organizations/settings/work/customize-process.md). 

::: moniker-end  

::: moniker range=">= azure-devops-2019 < azure-devops"  

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

:::row:::
   :::column span="1":::
   ### A
   
   - [Acceptance Criteria](../../queries/titles-ids-descriptions.md) (Scrum)
   - [Accepted By](guidance-code-review-feedback-field-reference.md) 
   - [Accepted Date](guidance-code-review-feedback-field-reference.md)
   - [Activated By](../../queries/query-by-workflow-changes.md)
   - [Activated Date](../../queries/query-by-workflow-changes.md)
   - [Activity](../../queries/query-numeric.md)
   - [Actual Attendee 1-8](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Analysis](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Application Launch Instructions](guidance-code-review-feedback-field-reference.md)
   - [Application Start Information](guidance-code-review-feedback-field-reference.md) 
   - [Application Type](guidance-code-review-feedback-field-reference.md) 
   - [Area ID](../../queries/query-by-area-iteration-path.md) (System)
   - [Area Path](../../queries/query-by-area-iteration-path.md) (System)
   - [Assigned To](../../queries/query-by-workflow-changes.md)
   - [Associated Context](guidance-code-review-feedback-field-reference.md)
   - [Associated Context Code](guidance-code-review-feedback-field-reference.md)
   - [Associated Context Owner](guidance-code-review-feedback-field-reference.md)
   - [Associated Context Type](guidance-code-review-feedback-field-reference.md)
   - [Attached File Count](../../queries/linking-attachments.md)
   - Authorized As (Not used)
   - [Automated Test Id](../../queries/build-test-integration.md) (TCM)
   - [Automated Test Name](../../queries/build-test-integration.md) (TCM) 
   - [Automated Test Storage](../../queries/build-test-integration.md) (TCM)
   - [Automated Test Type](../../queries/build-test-integration.md) (TCM) 
   - [AutomatedTestId](../../queries/build-test-integration.md) (TCM) 
   - [AutomatedTestName](../../queries/build-test-integration.md) (TCM)
   - [Automation Status](../../queries/build-test-integration.md) (TCM)
   
   ### B
   - [Backlog Priority](../../queries/planning-ranking-priorities.md) (Scrum)
   - [Blocked](../../queries/planning-ranking-priorities.md)
   - [Board Column<sup>1</sup>](../../queries/query-by-workflow-changes.md)
   - [Board Column Done<sup>1</sup>](../../queries/query-by-workflow-changes.md)
   - [Board Lane<sup>1</sup>](../../queries/query-by-workflow-changes.md)
   - [Business Value](../../queries/query-numeric.md)
   
   ### C
   - [Called By](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Called Date](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Changed By](../../queries/history-and-auditing.md) (System)
   - [Changed Date](../../queries/history-and-auditing.md) (System)
   - [Closed By](../../queries/query-by-workflow-changes.md) (System)
   - [Closed Date](../../queries/query-by-workflow-changes.md) (System)
   - [Closed Status](guidance-code-review-feedback-field-reference.md)
   - [Closed Status Code](guidance-code-review-feedback-field-reference.md)
   - [Closing Comment](guidance-code-review-feedback-field-reference.md)
   - [Comment Count<sup>2</sup>](../../queries/linking-attachments.md)
   - [Comments](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Committed](../../queries/planning-ranking-priorities.md) (CMMI)
   - [Completed Work](../../queries/query-numeric.md)
   - [Contingency Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Corrective Action Actual Resolution](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Corrective Action Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Created By](../../queries/query-by-workflow-changes.md) (System)
   - [Created Date](../../queries/query-by-workflow-changes.md) (System)
   
   :::column-end:::
   :::column span="1":::
   
   ### D-E-F
   
   - [Discipline](../../queries/query-numeric.md) (CMMI)
   - [Description](../../queries/titles-ids-descriptions.md) (System)
   - [Due Date](../../queries/query-by-date-or-current-iteration.md)
   - [Effort](../../queries/query-numeric.md) 
   - [Escalate](../../queries/planning-ranking-priorities.md) (CMMI)
   - [External Link Count](../../queries/linking-attachments.md#external-link-count) 
   - [Finish Date](../../queries/query-by-date-or-current-iteration.md)
   - [Found In Build](../../queries/build-test-integration.md)  (TCM)
   - [Found In Environment](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   
   ### H
   
   - [History](../../queries/history-and-auditing.md) (System)
   - [How Found](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Hyperlink Count](../../queries/linking-attachments.md#hyper-link-count)
   
   ### I
   
   - [ID](../../queries/titles-ids-descriptions.md) (System)
   - [Impact Assessment](cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)
   - [Impact on Architecture](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Impact on Development](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Impact on Technical Publications](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Impact on Test](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Impact on User Experience](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Integrated in Build](../../queries/build-test-integration.md) (TCM)
   - [Issue](../../queries/build-test-integration.md) (TCM)
   - [Iteration ID](../../queries/query-by-area-iteration-path.md)  (System)
   - [Iteration Path](../../queries/query-by-area-iteration-path.md) (System)
   
   ### J-L-M-N
   
   - [Justification](cmmi/guidance-change-request-field-reference-cmmi.md) (CMMI)
   - [Link Comment](../../queries/linking-attachments.md) (System)
   - [Link Description](../../queries/linking-attachments.md) (System)
   - [Local Data Source](../../queries/build-test-integration.md) (TCM)
   - [Meeting Type](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Minutes](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI) 
   - [Mitigation Plan](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI) 
   - [Mitigation Triggers](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Node Name](../../queries/query-by-area-iteration-path.md) (System)
   
   ### O-P-Q
   
   - [Optional Attendee 1-8](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Original Estimate](../../queries/query-numeric.md)
   - [Parameters](../../queries/build-test-integration.md) (TCM)
   - [Parent<sup>3</sup>](../../queries/linking-attachments.md#parent)
   - [Priority](../../queries/planning-ranking-priorities.md) 
   - [Probability](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Proposed Fix](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI) 
   - [Purpose](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Query Text](../../queries/build-test-integration.md) (TCM)
   
   :::column-end:::
   :::column span="1":::
   ### R
   
   - [Rating](guidance-code-review-feedback-field-reference.md)
   - [Reason](../../queries/query-by-workflow-changes.md) (System)
   - [Related Link Count](../../queries/linking-attachments.md) (System)
   - [Remaining Work](../../queries/query-numeric.md) 
   - [Remote Link Count<sup>4</sup>](../../queries/linking-attachments.md#remote-link-count) (System)
   - [Repro Steps](../../queries/titles-ids-descriptions.md)
   - [Required Attendee 1-8](cmmi/guidance-review-meeting-field-reference-cmmi.md) (CMMI)
   - [Requirement Type](cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)
   - [Requires Review](../../queries/query-numeric.md) (CMMI)
   - [Requires Test](../../queries/query-numeric.md) (CMMI)
   - [Resolution](../../queries/titles-ids-descriptions.md) (Scrum)
   - [Resolved By](../../queries/query-by-workflow-changes.md)
   - [Resolved Date](../../queries/query-by-workflow-changes.md)
   - [Resolved Reason](../../queries/query-by-workflow-changes.md)
   - [Reviewed By](guidance-code-review-feedback-field-reference.md)
   - [Reviewed Date](guidance-code-review-feedback-field-reference.md)
   - [Rev](../../queries/history-and-auditing.md) (System)
   - [Risk](../../queries/planning-ranking-priorities.md) (Agile)
   - [Root Cause](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   
   ### S
   
   - [Severity](../../queries/planning-ranking-priorities.md)
   - [Size](../../queries/query-numeric.md) (CMMI)
   - [Stack Rank](../../queries/planning-ranking-priorities.md)
   - [Start Date](../../queries/query-by-date-or-current-iteration.md)
   - [State](../../queries/query-by-workflow-changes.md) (System)
   - [State Change Date](../../queries/query-by-workflow-changes.md)
   - [State Code](guidance-code-review-feedback-field-reference.md)
   - [Steps](../../queries/build-test-integration.md) (TCM)
   - [Steps to Reproduce](../../queries/titles-ids-descriptions.md) (TCM)
   - [Story Points](../../queries/query-numeric.md) (Agile)
   - [Subject Matter Expert](cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)
   - [Symptom](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [System Info](../../queries/titles-ids-descriptions.md) (TCM) 
   
   ### T
   
   - [Tags](../../queries/add-tags-to-work-items.md)
   - [Target Date](../../queries/query-by-date-or-current-iteration.md)
   - [Target Resolve Date](cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md) (CMMI)
   - [Task Type](../../queries/query-numeric.md) (CMMI)
   - [Team Project](../../queries/titles-ids-descriptions.md) (System) 
   - [Test Suite Audit](../../queries/build-test-integration.md) (TCM)
   - [Test Suite Type](../../queries/build-test-integration.md) (TCM)
   - [Test Suite Type ID](../../queries/build-test-integration.md) (TCM)
   - [Time Criticality](../../queries/planning-ranking-priorities.md)
   - [Title](../../queries/titles-ids-descriptions.md) (System)
   - [Triage](../../queries/planning-ranking-priorities.md) (CMMI)
   
   ### U-V-W
   
   - [User Acceptance Test](cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI)
   - [Value Area](../../queries/planning-ranking-priorities.md)
   - [Watermark](../../queries/history-and-auditing.md) (System)
   - [Work Item Type](../../queries/titles-ids-descriptions.md) (System)  
   
   :::column-end:::
:::row-end:::

> [!NOTE]  
> 1. These fields are available from Azure DevOps Services and TFS 2015.1 or later versions. 
> 2. The Comment Count field is available from Azure DevOps Services and TFS 2017 or later versions. 
> 3. These fields are available from Azure DevOps Services and Azure DevOps Server 2020.
> 4. These fields are available from Azure DevOps Services only.

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
- [About managed queries](../../queries/about-managed-queries.md)
- [Define a query](../../queries/using-queries.md) 
- [Choose a process](choose-process.md)  
- [Reportable fields reference](../../../reference/xml/reportable-fields-reference.md) (on-premises Azure DevOps only)    


