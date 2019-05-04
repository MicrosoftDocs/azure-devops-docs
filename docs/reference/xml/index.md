---
title: Work item tracking customization 
titleSuffix: Azure DevOps & TFS   
description: Index to topics for customizing your work tracking experience in Azure DevOps Services & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: F6973385-2CEF-403A-B3AA-45DB7C436AF1
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= tfs-2013'
ms.date: 05/06/2019
---

# On-premises XML Process 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

You customize your work tracking experience to support your business and reporting needs. The most common customizations include adding a custom field, modifying a work item form, or adding a custom work item type. 

::: moniker range="azure-devops"  
Most customers use the [Inheritance process model](../../organizations/settings/work/inheritance-process-model.md), which provides a convenient user interface to support customization of the work tracking experience. 

A select few customers use the Hosted XML process model, which requires that they have opted into this method. This model relies on updating XML files and then importing the process template of these files. To learn more, see [Customize your work tracking experience](../../organizations/settings/work/hosted-xml-process-model.md).  
::: moniker-end  

::: moniker range="azure-devops-2019"
With Azure DevOps Server 2019, you have a choice of using the Inheritance process model or the On-premises XML process model to support customizations. The choice is made when you create a project collection and choose the process model for the projects that you'll create in the collection.  For details, see [On-premises XML process model](../on-premises-xml-process-model.md).
::: moniker-end  

::: moniker range="<= tfs-2018"
Team Foundation Server uses the On-premises XML process model to support customizations. This model relies on updating and importing XML files using the **witadmin** command line tool. For details, see [On-premises XML process model](../on-premises-xml-process-model.md).
::: moniker-end  


## Concepts

- [Workflow states & state categories](../../boards/work-items/workflow-and-state-categories.md)
- [Rollup of work and other fields](support-rollup-of-work-and-other-fields.md)

## How-to Guides
- [Add or modify a field](../add-modify-field.md)
- [Apply a field rule](apply-rule-work-item-field.md)
- [Add or modify a work item type](../add-modify-wit.md)
- [Design the work item form](design-work-item-form.md)

## Reference  
  
- [Index to XML element reference](xml-element-reference.md) 
- [All WITD XML elements reference](all-witd-xml-elements-reference.md)
- [All FIELD XML elements reference](all-field-xml-elements-reference.md)  
- [All WORKFLOW XML elements reference](all-workflow-xml-elements-reference.md) 
- [WebLayout and Control elements](weblayout-xml-elements.md)
- [Process configuration XML element reference](process-configuration-xml-element.md)
- [witAdmin command line reference](../witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)

