---
title: Work item tracking customization 
titleSuffix: Azure DevOps & TFS   
description: Index to topics for customizing your work tracking experience in Azure DevOps Services & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: F6973385-2CEF-403A-B3AA-45DB7C436AF1
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= tfs-2013'
ms.date: 05/31/2018
---

# Customization  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Add a custom field, a custom work item type (WIT) or modify an existing WIT. The method you use depends on whether you use the Inheritance or Hosted XML process models.  


::: moniker range="vsts"
## 5-Minute Quickstarts  

- [Define area paths](../organizations/settings/set-area-paths.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
- [Define iteration paths or sprints](../organizations/settings/set-iteration-paths-sprints.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json) 
- [Add a custom field](../organizations/settings/work/add-custom-field.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)   
- [Add a custom work item type](../organizations/settings/work/add-custom-wit.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)   

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"
## 5-Minute Quickstarts  

- [Define area paths](../organizations/settings/set-area-paths.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
- [Define iteration paths or sprints](../organizations/settings/set-iteration-paths-sprints.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json) 

::: moniker-end

::: moniker range="vsts"
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

- **Inheritance process model**
	- [Customize a project](../organizations/settings/work/customize-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)     
	- [Create and manage a process](../organizations/settings/work/manage-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)    

- **Hosted XML process model**
	- [Supported upgrade operations](../organizations/settings/work/upgrade-support-hosted-to-inherited.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
	- [Clone a Hosted XML process to Inheritance](../organizations/settings/work/upgrade-hosted-to-inherited.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
	- [Change a project from Hosted XML to Inheritance](../organizations/settings/work/change-process-from-hosted-to-inherited.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
	- [Customize a Hosted XML process](../organizations/settings/work/import-process/customize-process.md)  
    - [Import a process](../organizations/settings/work/import-process/import-process.md)

- **On-premises XML process model**
    - [Add or modify a field](add-modify-field.md)
    - [Add or modify a work item type](add-modify-wit.md)

- **Process templates**
    - [Upload or download a process template](../boards/work-items/guidance/manage-process-templates.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
    - [Customize a process template](./process-templates/customize-process.md)  

## Reference  
  
- [Index to XML element reference](xml/xml-element-reference.md) 
- [All WITD XML elements reference](xml/all-witd-xml-elements-reference.md)
- [All FIELD XML elements reference](xml/all-field-xml-elements-reference.md)  
- [All WORKFLOW XML elements reference](xml/all-workflow-xml-elements-reference.md) 
- [WebLayout and Control elements](xml/weblayout-xml-elements.md)
- [Process configuration XML element reference](xml/process-configuration-xml-element.md)

 
## Resources 

- [Work items](../boards/work-items/index.md)
- [Scale & configure teams](../organizations/settings/index.md)
- [Marketplace extensions](../marketplace/install-vsts-extension.md)
- [Extensibility and REST APIs](../extend/overview.md) 