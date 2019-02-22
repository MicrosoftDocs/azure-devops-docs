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
ms.date: 11/19/2018
---

# Customization  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You customize your work tracking experience to support your business and reporting needs. The most common customizations include adding a custom field, modifying a work item form, or adding a custom work item type. 

::: moniker range="azure-devops"  
Most customers use the [Inheritance process model](../organizations/settings/work/inheritance-process-model.md), which provides a convenient user interface to support customization of the work tracking experience. 

A select few customers use the Hosted XML process model, which requires that they have opted into this method. This model relies on updating XML files and then importing the process template of these files. To learn more, see [Customize your work tracking experience](../organizations/settings/work/hosted-xml-process-model.md).  
::: moniker-end  

::: moniker range="azure-devops-2019"
With Azure DevOps Server 2019, you have a choice of using the Inheritance process model or the On-premises XML process model to support customizations. The choice is made when you create a project collection and choose the process model for the projects that you'll create in the collection.  For details, see [On-premises XML process model](on-premises-xml-process-model.md).
::: moniker-end  

::: moniker range="<= tfs-2018"
Team Foundation Server uses the On-premises XML process model to support customizations. This model relies on updating and importing XML files using the **witadmin** command line tool. For details, see [On-premises XML process model](on-premises-xml-process-model.md).
::: moniker-end  

::: moniker range="azure-devops"
## 5-Minute Quickstarts  

- [Define area paths](../organizations/settings/set-area-paths.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
- [Define iteration paths or sprints](../organizations/settings/set-iteration-paths-sprints.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json) 
- [Add a custom field](../organizations/settings/work/add-custom-field.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)   
- [Add a custom work item type](../organizations/settings/work/add-custom-wit.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)   

::: moniker-end

::: moniker range=">= tfs-2013 <= azure-devops-2019"
## 5-Minute Quickstarts  

- [Define area paths](../organizations/settings/set-area-paths.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
- [Define iteration paths or sprints](../organizations/settings/set-iteration-paths-sprints.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json) 

::: moniker-end

::: moniker range="azure-devops"
## Tutorials 
- [Customize a project](../organizations/settings/work/customize-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)   
- [Create and manage a process](../organizations/settings/work/manage-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json) 

::: moniker-end

## Concepts

- [About areas and iterations](../organizations/settings/about-areas-iterations.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
- [Differences between process models](../organizations/settings/work/import-process/differences.md) 
- [Workflow states & state categories](../boards/work-items/workflow-and-state-categories.md)
- [Inheritance process model](../organizations/settings/work/inheritance-process-model.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)   
- [Hosted XML process model](../organizations/settings/work/hosted-xml-process-model.md)  
- [On-premises XML process model](on-premises-xml-process-model.md)  


## How-to Guides

Use the guidance provided in the following topics based on the process model or process template that you want to customize.  

::: moniker range=">= azure-devops-2019" 

- **Inheritance process model**
	- [Customize a project](../organizations/settings/work/customize-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)     
	- [Create and manage a process](../organizations/settings/work/manage-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)    

::: moniker-end

::: moniker range="azure-devops" 
- **Hosted XML process model**
	- [Supported upgrade operations](../organizations/settings/work/upgrade-support-hosted-to-inherited.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
	- [Clone a Hosted XML process to Inheritance](../organizations/settings/work/upgrade-hosted-to-inherited.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
	- [Change a project from Hosted XML to Inheritance](../organizations/settings/work/change-process-from-hosted-to-inherited.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
	- [Customize a Hosted XML process](../organizations/settings/work/import-process/customize-process.md)  
    - [Import a process](../organizations/settings/work/import-process/import-process.md)

::: moniker-end

::: moniker range="<= azure-devops-2019" 
- **On-premises XML process model**
    - [Add or modify a field](add-modify-field.md)
    - [Add or modify a work item type](add-modify-wit.md)

::: moniker-end

- **Process templates**
    - [Upload or download a process template](../boards/work-items/guidance/manage-process-templates.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
    - [Customize a process template](./process-templates/customize-process.md)  

::: moniker range="<= azure-devops-2019" 
## Reference  
  
- [Index to XML element reference](xml/xml-element-reference.md) 
- [All WITD XML elements reference](xml/all-witd-xml-elements-reference.md)
- [All FIELD XML elements reference](xml/all-field-xml-elements-reference.md)  
- [All WORKFLOW XML elements reference](xml/all-workflow-xml-elements-reference.md) 
- [WebLayout and Control elements](xml/weblayout-xml-elements.md)
- [Process configuration XML element reference](xml/process-configuration-xml-element.md)

::: moniker-end

## Resources 

- [Azure Boards](../boards/index.md)
- [Scale & configure teams](../organizations/settings/index.md)
- [Marketplace extensions](../marketplace/install-extension.md)
- [Extensibility and REST APIs](../extend/overview.md) 