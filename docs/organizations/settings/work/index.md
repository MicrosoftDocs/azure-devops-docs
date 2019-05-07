---
title: Customize an inherited process for work tracking
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Add custom fields, work item types, rules, and more to cusomtomize your work tacking objects  
ms.technology: devops-settings
ms.prod: devops
ms.topic: conceptual
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 05/06/2019
---

# Inheritance Process 

[!INCLUDE [temp](../../../_shared/version-azure-devops.md)]

You customize your work tracking experience to support your business and reporting needs. The most common customizations include adding a custom field, modifying a work item form, or adding a custom work item type. 

::: moniker range="azure-devops"  
Most customers use the [Inheritance process model](inheritance-process-model.md), which provides a convenient user interface to support customization of the work tracking experience. 

A select few customers use the Hosted XML process model, which requires that they have opted into this method. This model relies on updating XML files and then importing the process template of these files. To learn more, see [Customize your work tracking experience](hosted-xml-process-model.md).  
::: moniker-end  

::: moniker range="azure-devops-2019"
With Azure DevOps Server 2019, you have a choice of using the Inheritance process model or the On-premises XML process model to support customizations. The choice is made when you create a project collection and choose the process model for the projects that you'll create in the collection.  For details, see [On-premises XML process model](../../../reference/on-premises-xml-process-model.md).
::: moniker-end  


## 5-minute quickstarts

- [Add a custom field](add-custom-field.md)
- [Add a custom work item type](add-custom-wit.md)

## Tutorials

- [Customize a project](customize-process.md)
- [Create and manage a process](manage-process.md)

## How-to guides
  
- [Add and manage fields](customize-process-field.md)
- [Add and manage work item types](customize-process-wit.md)
- [Customize a web form](customize-process-form.md)
- [Customize a workflow](customize-process-workflow.md)
- [Add a custom rule](custom-rules.md)
- [Add a custom control](custom-controls-process.md)
- [Customize backlogs & boards](customize-process-backlogs-boards.md)

## Reference

- [Default permissions & access](../../security/permissions-access.md?toc=/azure/devops/organizations/settings/work/toc.json&bc=/azure/devops/organizations/settings/work/breadcrumb/toc.json)
- [Work tracking object limits](object-limits.md)
- [REST APIS: Processes](/rest/api/vsts/processes/processes)

