---
title: Bugs, issues, & risks field reference (CMMI)
titleSuffix: Azure Boards
description: Tracks the information with regards to bugs, issues, and risks - Team Foundation Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 66d150ac-736f-4dde-8a2b-382c50d9e4f4
ms.topic: reference
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.date: 01/20/2017
---

# Bugs, issues, and risks field reference (CMMI)

[!INCLUDE [temp](../../../_shared/version-vsts-tfs-all-versions.md)]

The following fields track information about bugs, issues, and risks. These work item types are defined within the process template for the [CMMI process](../cmmi-process.md).  
  
##  <a name="bugs"></a> Bug tracking fields  
 These fields are neither reported nor indexed.  
  
> [!div class="mx-tdCol2BreakAll"]
> |**Field name**|**Description**|**Data type**|  
> |--------------------|--------------|-------------------|  
> |**Symptom**|The unexpected behavior.<br/>Reference name=Microsoft.VSTS.CMMI.Symptom|HTML|  
> |**Proposed Fix**|The proposed change to fix the reported problem.<br/>Reference name=Microsoft.VSTS.CMMI.ProposedFix|HTML|  
> |**Found in Environment**|The software setup and configuration where the bug was found.<br/>Reference name=Microsoft.VSTS.CMMI.FoundInEnvironment|String|  
> |**Root Cause**|The cause of the error. You can specify one of the following values:<br /><br /-   **Coding Error**<br/>-   **Design Error**<br/>-   **Specification Error**<br/>-   **Communication Error**<br/>-   **Unknown**<br/><br/>To change the menu selection, see [Customize a picklist](../../../../reference/add-modify-field.md).<br/>Reference name=Microsoft.VSTS.CMMI.RootCause|String|  
> |**How Found**|How the bug was found. For example, a bug might have been found during a customer review or through ad hoc testing.<br/>Reference name=Microsoft.VSTS.CMMI.HowFound|String|  
  
##  <a name="issues"></a> Issue tracking fields  
 These fields are neither reported nor indexed.  
  
|**Field name**|**Description**|**Data type**| 
|--------------------|---------------------|-------------------------|  
|**Analysis**|The root cause of the issue and one or more solutions that might resolve it.<br/>Reference name=Microsoft.VSTS.CMMI.Analysis|HTML|  
|**Corrective Action Actual Resolution**|What the team actually did to correct the issue.<br/>Reference name=Microsoft.VSTS.CMMI.CorrectiveActionActualResolution|HTML|  
|**Corrective Action Plan**|The proposed corrective action on which the team has agreed.<br/>Reference name=Microsoft.VSTS.CMMI.CorrectiveActionPlan|HTML|
|**Target Resolve Date**|The date when the issue becomes critical and starts to affect the critical path of the project plan.<br/>Reference name=Microsoft.VSTS.CMMI.TargetResolveDate|DateTime|  
  
##  <a name="risks"></a> Risk tracking fields  
 These fields are neither reported nor indexed.  
  
|**Field name**|**Description**|**Data type**|  
|--------------------|---------------------|-------------------|  
|**Contingency Plan**|The actions to take if the risk occurs.<br /><br /> You can create and link tasks to the Risk work item to track the work that the team must complete to implement the contingency plan. Also, you can create an Issue work item to track one or more issues on which the risk has an impact.<br/>Reference name=Microsoft.VSTS.CMMI.ContingencyPlan|HTML|  
|**Mitigation Plan**|The actions to take to reduce the probability or impact of the risk.<br /><br /> You can create and link tasks to the Risk work item to track the work that the team must complete to implement the mitigation plan.<br/>Reference name=Microsoft.VSTS.CMMI.MitigationPlan|HTML|  
|**Mitigation Triggers**|The conditions or events that determine how the team might mitigate a risk. For example, the triage team might authorize and obtain a reserve generator if the weather forecast is predicting an ice storm or hurricane to hit within 50 miles of the office within the next four days.<br/>Reference name=Microsoft.VSTS.CMMI.MitigationTriggers|HTML|  
|**Probability**|A number that indicates the chance that the risk will occur. A valid probability number is between 1 and 99, where 99 indicates that the risk is almost certain to occur.<br/>Reference name=Microsoft.VSTS.CMMI.Probability|Integer|  
  
## Related articles
 [Index of work item fields](../work-item-field.md)