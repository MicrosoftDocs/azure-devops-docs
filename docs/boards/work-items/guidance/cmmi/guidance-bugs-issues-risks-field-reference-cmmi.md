---
title: Track bugs, issues, & risks in Azure Boards
titleSuffix: Azure Boards
description: Learn how to track information about bugs, issues, and risks in Azure Boards.
ms.service: azure-devops-boards 
ms.assetid: 66d150ac-736f-4dde-8a2b-382c50d9e4f4
ms.topic: conceptual
ms.author: chcomley
author: chcomley 
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
---

# Bugs, issues, and risks in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../../../includes/version-lt-eq-azure-devops.md)]

The following fields track information about bugs, issues, and risks. These work item types are defined in the process template for the [CMMI process](../cmmi-process.md).

<a id="fields"></a>
<a name="bugs"></a>

## Bug tracking fields

The following fields aren't reported or indexed.

> [!div class="mx-tdCol2BreakAll"]
> |**Field name**|**Description**|**Data type**|
> |--------------------|--------------|-------------------|
> |**Symptom**|The unexpected behavior. Reference name=`Microsoft.VSTS.CMMI.Symptom`|HTML|
> |**Proposed Fix**|The proposed change to correct the reported problem. Reference name=`Microsoft.VSTS.CMMI.ProposedFix`|HTML|
> |**Found in Environment**|The software setup and configuration where the bug was found. Reference name=`Microsoft.VSTS.CMMI.FoundInEnvironment`|String|
> |**Root Cause**|The cause of the error. Typical values include:<br/>- **Coding Error**<br/>- **Design Error**<br/>- **Specification Error**<br/>- **Communication Error**<br/>- **Unknown**<br/><br/>To edit the picklist, see [Customize a picklist](../../../../reference/add-modify-field.md). Reference name=`Microsoft.VSTS.CMMI.RootCause`|String|
> |**How Found**|How the bug was discovered (for example, during a customer review or ad-hoc testing). Reference name=`Microsoft.VSTS.CMMI.HowFound`|String|

<a name="issues"></a>

## Issue tracking fields

The following fields aren't reported or indexed.

|**Field name**|**Description**|**Data type**|
|--------------------|---------------------|-------------------------|
|**Analysis**|The root cause analysis and one or more proposed solutions. Reference name=`Microsoft.VSTS.CMMI.Analysis`|HTML|
|**Corrective Action Actual Resolution**|What the team actually did to resolve the issue. Reference name=`Microsoft.VSTS.CMMI.CorrectiveActionActualResolution`|HTML|
|**Corrective Action Plan**|The agreed-upon corrective action the team plans to implement. Reference name=`Microsoft.VSTS.CMMI.CorrectiveActionPlan`|HTML|
|**Target Resolve Date**|The target date by which the team expects to resolve the issue or when the issue becomes critical for the project plan. Reference name=`Microsoft.VSTS.CMMI.TargetResolveDate`|DateTime|

<a name="risks"></a>

## Risk tracking fields

The following fields aren't reported or indexed.

|**Field name**|**Description**|**Data type**|
|--------------------|---------------------|-------------------|
|**Contingency Plan**|Actions to take if the risk occurs. You can link tasks to the Risk work item to track work needed to implement the contingency plan. You can also create an Issue work item to track one or more issues affected by the risk. Reference name=`Microsoft.VSTS.CMMI.ContingencyPlan`|HTML|
|**Mitigation Plan**|Actions to reduce the probability or impact of the risk. Link tasks to the Risk work item to track mitigation work. Reference name=`Microsoft.VSTS.CMMI.MitigationPlan`|HTML|
|**Mitigation Triggers**|Conditions or events that cause the team to execute the mitigation plan (for example, a near-term weather forecast that would justify procuring a backup generator). Reference name=`Microsoft.VSTS.CMMI.MitigationTriggers`|HTML|
|**Probability**|A number indicating the chance the risk occurs (valid values: 1–99, where 99 indicates the risk is almost certain). Reference name=`Microsoft.VSTS.CMMI.Probability`|Integer|

## Related content

- [Index of work item fields](../work-item-field.md)
