---
title: Change request field reference (CMMI)
titleSuffix: Azure Boards
description: Track change requests for CMMI work items, provide description and reference name  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 1b95abfa-a1cb-4ebd-aff2-843cf6eec333
ms.topic: reference
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.date: 01/20/2017
---

# Change request  field reference (CMMI)

[!INCLUDE [temp](../../../_shared/version-vsts-tfs-all-versions.md)]

You can track change requests for CMMI work items by using these six fields: Justification, Impact on Architecture, Impact on User Experience, Impact on Test, Impact on Development, and Impact on Technical Publications. A description and a reference name for each of the change request fields are provided in the following table. When you open a work item form for a change request, the **Justification** field appears on the **Justification** tab, and all other fields appear on the **Analysis** tab.  
  
 The Change Request work item type is provided only with the [CMMI process](../cmmi-process.md).  
  
 None of these fields are reportable or indexed. They all have a data type of HTML.  
  
> [!div class="mx-tdCol2BreakAll"]
> |**Field name**|**Description**|**Reference name**|  
> |--------------------|---------------------|--------------------|  
> |**Justification**|Why the change has been proposed and what value it would bring to the product and the customer.|Microsoft.VSTS.CMMI.Justification|  
> |**Impact on Architecture**|The impact that the change would have on architecture. You can use this field to describe in detail which sections of the architecture would be affected and how much the change would cost to implement.|Microsoft.VSTS.CMMI.ImpactOnArchitecture|  
> |**Impact on User Experience**|The impact that the change would have on the user experience. You can use this field to describe in detail which sections of the user interface would be affected and how much the change would cost to implement.|Microsoft.VSTS.CMMI.ImpactOnUserExperience|  
> |**Impact on Test**|The impact that the change would have on testing. You can use this field to describe in detail which tests would be affected and how much the change would cost to implement.|Microsoft.VSTS.CMMI.ImpactOnTest|  
> |**Impact on Development**|The impact that the change would have on development and product designs. You can use this field to describe in detail which development areas and designs would be affected and how much the change would cost to implement.|Microsoft.VSTS.CMMI.ImpactOnDevelopment|  
> |**Impact on Technical Publications**|The impact that the change would have on product documentation. You can use this field to describe in detail which sections of documentation would be affected and how much the change would cost to implement.|Microsoft.VSTS.CMMI.ImpactOnTechnicalPublications|  
  
## Related articles 
 [Index of work item fields](../work-item-field.md)