---
title: Requirements field reference (CMMI)
titleSuffix: VSTS & TFS
description: Definition of fields used to track requirements in the CMMI process for Visual Studio Team Services & Team Foundation Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: c2c4f0c8-0d7f-4087-b115-2ca10cf3c998
ms.topic: reference
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.date: 01/24/2017
---
# Requirements field reference (CMMI)
[!INCLUDE [temp](../../../_shared/dev15-version-header.md)]

When you create a team project using the [CMMI process](../cmmi-process.md), you can define fields to track requirements to be developed and their importance to the overall product.  
  
 For more information about data types and field attributes, see [Define and modify work item fields](../../../customize/reference/define-modify-work-item-fields.md).  
  
|**Field name**|**Description**|**Data type**|**Reportable type**|**Index**|  
|--------------------|---------------------|-------------------|--------------------------------------------------------|----------------------------------------------|  
|**Requirement Type**|The kind of requirement to implement. You can specify one of the following values (see note 1):<br /> -   **Business Objective**<br />-   **Feature** (default)<br />-   **Functional**<br />-   **Interface**<br />-   **Operational**<br />-   **Quality of Service**<br />-   **Safety**<br />-   **Scenario**<br />-   **Security**<br />Reference Name=Microsoft.VSTS.CMMI.RequirementType|String|Dimension|False|  
|**Impact Assessment**|The customer impact of not implementing this requirement. You might include details from the Kano model about whether this requirement is in the surprise, required, or obvious categories.<br />Reference Name=Microsoft.VSTS.CMMI.ImpactAssessmentHtml|HTML|None|False|  
|**User Acceptance Test**|The status of the user acceptance test for a requirement. You can specify one of the following values (1):<br /><br /> -   **Pass** (default)<br />-   **Fail**<br />-   **Not Ready**<br />-   **Ready**<br />-   **Skipped**<br />-   **Info Received**<br /><br /> You specify **Not Ready** when the requirement is in the **Active** state, and you specify **Ready** when the requirement is in the **Resolved** state.<br />Reference Name=Microsoft.VSTS.CMMI.UserAcceptanceTest|String|None|False|  
|**Subject matter experts**|The names of one to three team members who are familiar with the customer area that this requirement represents.<br/><br /> You can specify the names of valid team members only.<br />Reference Name=Microsoft.VSTS.CMMI.SubjectMatterExpert1 &hellip;Microsoft.VSTS.CMMI.SubjectMatterExpert3|String|None|False|  
  
 **Notes:**  
  
1.  To change the menu selection, see [Customize a pick list](../../../customize/add-modify-field.md).  
  
## Related articles
 [Index of work item fields](../work-item-field.md)