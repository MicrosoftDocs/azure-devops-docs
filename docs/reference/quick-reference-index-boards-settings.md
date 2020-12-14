---
title: Quick reference index to Azure Boards settings 
titleSuffix: Azure Boards
description: Index to concepts and tasks for configuring and customizing Azure Boards.
ms.custom: quick-reference-index
ms.technology: devops-agile
ms.assetid:
ms.topic: reference
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 12/07/2020
---

# Quick reference index for Azure Boards settings 

[!INCLUDE [temp](../boards/includes/version-all.md)]

Use this index to quickly access concepts and tasks related to configuring and customizing Azure Boards. If you're new to the Azure Boards, see [What is Azure Boards?](../boards/get-started/what-is-azure-boards.md). 

<a id="concepts" />

## Get started  

::: moniker range=">= azure-devops-2019"

You can start using Azure Boards without configuring or customizing anything. However, as your organization grows, you'll find it beneficial to add teams, define area paths and iteration paths. If you use GitHub for your source code repository, you may want to connect Azure Boards to GitHub. If you are tasked with administrating a project for several teams, we recommend you review the following articles. 

- [Customize work tracking overview](customize-work.md)
- [Add a team](../organizations/settings/add-teams.md)
- [Define Area Paths](../organizations/settings/set-area-paths.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
- [Define Iteration Paths](../organizations/settings/set-iteration-paths-sprints.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
- [Configure and customize Azure Boards](../boards/configure-customize.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
- [Connect Azure Boards to GitHub](../boards/github/connect-to-github.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json) 
- [Set process permissions](../organizations/security/set-permissions-access-work-tracking.md#process-permissions)  
::: moniker-end

::: moniker range="< azure-devops-2019"

You can start using Azure Boards without configuring or customizing anything. However, as your organization grows, you'll find it beneficial to add teams, define area paths and iteration paths. If you are tasked with administrating a project for several teams, we recommend you review the following articles. 


- [Customize work tracking overview](customize-work.md)
- [Add a team](../organizations/settings/add-teams.md)
- [Define Area Paths](../organizations/settings/set-area-paths.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
- [Define Iteration Paths](../organizations/settings/set-iteration-paths-sprints.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
- [Configure and customize Azure Boards](../boards/configure-customize.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
- [Set process permissions](../organizations/security/set-permissions-access-work-tracking.md#process-permissions)  
::: moniker-end 

## Configure team tools 

Each team administrator can configure the following elements for their team, backlogs, or boards. For an introduction to configuring team tools, see [Manage and configure team tools](..//organizations/settings/manage-teams.md).

---
:::row:::
   :::column span="1":::
      **General**
      - [Define Area Paths for a team](../organizations/settings/set-area-paths.md)  
      - [Define Iteration Paths for a team](../organizations/settings/set-iteration-paths-sprints.md)  
      - [Define work item templates](../boards/backlogs/work-item-template.md)  
      - [Backlogs](../organizations/settings/select-backlog-navigation-levels.md)  
      - [Working days](../organizations/settings/set-working-days.md)  
      - [Working with bugs](../organizations/settings/show-bugs-on-backlog.md)  
   :::column-end:::
   :::column span="1":::
      **Kanban boards**
      - [Columns](../boards/boards/add-columns.md)  
      - [WIP limits](../boards/boards/wip-limits.md)    
      - [Definition of Done](../boards/boards/definition-of-done.md)  
      - [Split columns](../boards/boards/split-columns.md)   
      - [Swimlanes](../boards/boards/expedite-work.md)  
      - [Card fields, styles, tag colors, annotations, and card reordering](../boards/boards/customize-cards.md#kanban-board)    
   :::column-end:::
:::row-end:::
---
 
 
## Process and project customization 

You customize your work tracking experience to support your business and reporting needs. The most common customizations include adding a custom field, modifying a work item form, or adding a custom work item type. Process customization tasks must be performed by an administrator who has the necessary organization-level permissions, as they affect all users and teams within a project.  


::: moniker range="azure-devops"

You customize Azure Boards work tracking using the Inheritance process model which uses a WYSIWYG user interface to customize work tracking objects and tools. For select organizations who migrated to Azure DevOps Services using the data migration tool for Azure DevOps, the Hosted XML process model is used. This model relies on modifying and importing process templates to customize work tracking objects and tools. 

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

You customize Azure Boards work tracking using either the Inheritance process model or On-premises XML process model, depending on the selection made when [creating the project collection](/azure/devops/server/admin/manage-project-collections?view=azure-devops-2020&preserve-view=true) on which the project is defined.

::: moniker-end


::: moniker range="< azure-devops-2019"

You customize Azure Boards work tracking using the On-premises XML process model. This model requires editing XML definition files and uploading the modified files to the server.  

::: moniker-end

::: moniker range=">= azure-devops-2019"

## Inheritance process model 

With the Inheritance process, you apply a process to a project. 
 
::: moniker-end
::: moniker range=">= azure-devops-2020"
- [Create and manage inherited processes](../organizations/settings/work/manage-process.md)
- [Customize a project using an inherited process](../organizations/settings/work/customize-process.md)
- [Change the reference process from Agile to Scrum](../organizations/settings/work/change-process-agile-to-scrum.md)  
- [Change the reference process from Basic to Agile](../organizations/settings/work/change-process-basic-to-agile.md)  
- [Change the reference process from Scrum to Agile](../organizations/settings/work/change-process-scrum-to-agile.md)  
::: moniker-end

::: moniker range="azure-devops-2019"
- [Create and manage inherited processes](../organizations/settings/work/manage-process.md)
- [Customize a project using an inherited process](../organizations/settings/work/customize-process.md) 
::: moniker-end

 
::: moniker range="azure-devops"

The Inheritance process model supports the following customization tasks. 


---
:::row:::
   :::column span="1":::
      **Fields** 
      - [Add a checkbox (Boolean) field](../organizations/settings/work/customize-process-field.md#boolean-field)  
      - [Add/remove custom fields](../organizations/settings/work/customize-process-field.md)
      - [Add/remove custom rules to a field](../organizations/settings/work/custom-rules.md)
      - [Add a person-name/Identity](../organizations/settings/work/customize-process-field.md#identity)
      - [Add a picklist (drop-down menu)](../organizations/settings/work/customize-process-field.md#pick-list)
      - [Add a rich-text (HTML) field](../organizations/settings/work/customize-process-field.md#html)
      - [Change a field label](../organizations/settings/work/customize-process-field.md#rename-field)  
      - [Delete field](../organizations/settings/work/customize-process-field.md#delete-field)  
            
            
      **Work item types**
      - [Add a custom work item type](../organizations/settings/work/customize-process-work-item-type.md#add-wit)  
      - [Add/remove custom fields](../organizations/settings/work/customize-process-field.md)  
      - [Add/remove custom groups](../organizations/settings/work/customize-process-form.md#groups)  
      - [Add/remove custom pages](../organizations/settings/work/customize-process-form.md#pages)  
      - [Add/remove a custom control](../organizations/settings/work/custom-controls-process.md)  
      - [Add custom rules](../organizations/settings/work/custom-rules.md)  
      - [Change the color or description](../organizations/settings/work/customize-process-work-item-type.md#overview)  
      - [Delete a work item type](../organizations/settings/work/customize-process-work-item-type.md#destroy)  
      - [Enable/disable a work item type](../organizations/settings/work/customize-process-work-item-type.md#enable-disable)  
   :::column-end:::
   :::column span="1":::
      **Workflow customizations**  
      - [Hide or unhide a state](../organizations/settings/work/customize-process-workflow.md#hide-state)
      - [Add, edit, or remove a workflow state](../organizations/settings/work/customize-process-workflow.md#states)  
      - [Apply rules to workflow states](../organizations/settings/work/apply-rules-to-workflow-states.md) 
            
            
      **Backlogs and boards**  
      - [Add a custom work item type to a board](../organizations/settings/work/customize-process-backlogs-boards.md#edit-product-backlog)   
      - [Add an inherited work item type](../organizations/settings/work/customize-process-backlogs-boards.md#add-oob-to-backlog)   
      - [Change the default work item type](../organizations/settings/work/customize-process-backlogs-boards.md#edit-product-backlog) 
      - [Rename a backlog](../organizations/settings/work/customize-process-backlogs-boards.md#edit-product-backlog)  
      - [Add a portfolio backlog which displays custom work item types](../organizations/settings/work/customize-process-backlogs-boards.md#add-portfolio-backlog)   
      - [Edit or rename a portfolio backlog](../organizations/settings/work/customize-process-backlogs-boards.md#edit-portfolio-backlog)   
      - [Delete the top-level custom portfolio backlog](../organizations/settings/work/customize-process-backlogs-boards.md#edit-portfolio-backlog)  
   :::column-end:::
:::row-end:::
---
 
::: moniker-end


::: moniker range=">= azure-devops-2019 < azure-devops"

The Inheritance process model supports the following customization tasks. 
---
:::row:::
   :::column span="1":::
      **Fields** 
      - [Add a checkbox (Boolean) field](../organizations/settings/work/customize-process-field.md#boolean-field)  
      - [Add/remove custom fields](../organizations/settings/work/customize-process-field.md)
      - [Add/remove custom rules to a field](../organizations/settings/work/custom-rules.md)
      - [Add a person-name/Identity](../organizations/settings/work/customize-process-field.md#identity)
      - [Add a picklist (drop-down menu)](../organizations/settings/work/customize-process-field.md#pick-list)
      - [Add a rich-text (HTML) field](../organizations/settings/work/customize-process-field.md#html)
      - [Change a field label](../organizations/settings/work/customize-process-field.md#rename-field)  
      - [Delete field](../organizations/settings/work/customize-process-field.md#delete-field)  
            
            
      **Work item types**
      - [Add a custom work item type](../organizations/settings/work/customize-process-work-item-type.md#add-wit)  
      - [Add/remove custom fields](../organizations/settings/work/customize-process-field.md)  
      - [Add/remove custom groups](../organizations/settings/work/customize-process-form.md#groups)  
      - [Add/remove custom pages](../organizations/settings/work/customize-process-form.md#pages)  
      - [Add/remove a custom control](../organizations/settings/work/custom-controls-process.md)  
      - [Add custom rules](../organizations/settings/work/custom-rules.md)  
      - [Change the color or description](../organizations/settings/work/customize-process-work-item-type.md#overview)  
      - [Delete a work item type](../organizations/settings/work/customize-process-work-item-type.md#destroy)  
      - [Enable/disable a work item type](../organizations/settings/work/customize-process-work-item-type.md#enable-disable)  
   :::column-end:::
   :::column span="1":::
      **Workflow customizations**  
      - [Hide or unhide a state](../organizations/settings/work/customize-process-workflow.md#hide-state)
      - [Add, edit, or remove a workflow state](../organizations/settings/work/customize-process-workflow.md#states)  
      - [Apply rules to workflow states](../organizations/settings/work/apply-rules-to-workflow-states.md)    
            
            
      **Backlogs and boards**  
      - [Add a custom work item type to a board](../organizations/settings/work/customize-process-backlogs-boards.md#edit-product-backlog)   
      - [Change the default work item type](../organizations/settings/work/customize-process-backlogs-boards.md#edit-product-backlog) 
      - [Rename a backlog](../organizations/settings/work/customize-process-backlogs-boards.md#edit-product-backlog)  
      - [Add a portfolio backlog which displays custom work item types](../organizations/settings/work/customize-process-backlogs-boards.md#add-portfolio-backlog)   
      - [Edit or rename a portfolio backlog](../organizations/settings/work/customize-process-backlogs-boards.md#edit-portfolio-backlog)   
      - [Delete the top-level custom portfolio backlog](../organizations/settings/work/customize-process-backlogs-boards.md#edit-portfolio-backlog)  
   :::column-end:::
:::row-end:::
---
 
::: moniker-end

::: moniker range="azure-devops"

## Hosted XML process model

With the Hosted XML process model, you customize work tracking objects and Agile tools by modifying and importing a process template. Updates made to the process template are applied to projects that were created using that process.

> [!NOTE]   
> The Hosted XML process model is only supported for organizations that have migrated to Azure DevOps using the data migration tool for Azure DevOps.

---
:::row:::
   :::column span="1":::
      **Fields** 
      - [Add or modify a field](add-modify-field.md)  
      - [Add a checkbox (Boolean) field](add-modify-field.md#boolean-field)  
      - [Add rules to a field](add-modify-field.md#add-rules)  
      - [Change a field label](add-modify-field.md#change-label)  
      - [Add a custom control field](add-modify-field.md#custom-control)  
      - [Remove a field](add-modify-field.md#change-label)  
      - [Define global lists](xml/define-global-lists.md)  
            
            
      **Work item types**
      - [Add or modify a work item type](add-modify-wit.md)
      - [Customize the form](xml/change-work-item-form-layout.md)
      - [Specify the work item type color](xml/process-configuration-xml-element.md#wit-colors)
      - [Specify the work item type icon](xml/process-configuration-xml-element.md)
      - [Customize the workflow (States, Reasons, Transitions)](xml/change-workflow-wit.md)  
      - [Specify the workflow state color](xml/process-configuration-xml-element.md#state-colors)
   :::column-end:::
   :::column span="1":::
      **Backlogs and boards**
      - [Add WITs to backlogs or boards](add-wits-to-backlogs-and-boards.md)  
      - [Add portfolio backlogs](add-portfolio-backlogs.md)  
      - [Configure the quick add panel](xml/process-configuration-xml-element.md#add)  
      - [Configure the default backlog columns](xml/process-configuration-xml-element.md#columns)  
      - [Set maximum number of task board items](xml/process-configuration-xml-element.md#number_items)  
      - [Set default weekend days (Scrum)](xml/process-configuration-xml-element.md#weekend_days)  
      - [Set default bug management behavior](xml/process-configuration-xml-element.md#behaviors)  
      - [Set default hidden backlogs](xml/process-configuration-xml-element.md#behaviors)  
      - [Change process configuration](xml/process-configuration-xml-element.md)  
      - [Add custom categories](xml/categories-xml-element-reference.md)  
            
            
      **Process templates** 
      - [Import a process template](../organizations/settings/work/import-process/import-process.md#import-from-TFS) 
      - [Export a process template](../organizations/settings/work/import-process/import-process.md#export-process) 
      - [Customize a process template](../organizations/settings/work/import-process/customize-process.md)  
   :::column-end:::
:::row-end:::
---
  
::: moniker-end 

::: moniker range="< azure-devops"

## On-premises XML process model

With the On-premises XML process model, you modify the XML definition of work item types, the process configuration, categories, and more. You can also update the attributes of fields or exercise one of the [witadmin commands](witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md). 

:::row:::
   :::column span="1":::
      **Fields**
      - [Add a checkbox (Boolean) field (TFS 2017.2)](add-modify-field.md#boolean-field)  
      - [Add a custom field](add-modify-field.md)  
      - [Add or modify a pick list](add-modify-field.md#picklist)   
      - [Modify a field](add-modify-field.md)  
      - [Add rules to a field](add-modify-field.md#add-rules)   
      - [Add a custom control field](add-modify-field.md#custom-control)  
      - [Add fields that integrate with test, build, and version control](add-modify-field.md#integration-fields)  
            
            
      **Work item types**
      - [Add or modify a work item type](add-modify-wit.md)
      - [Customize the form](xml/change-work-item-form-layout.md)
      - [Specify the work item type color](xml/process-configuration-xml-element.md#wit-colors)
      - [Specify the work item type icon](xml/process-configuration-xml-element.md)
      - [Customize the workflow (States, Reasons, Transitions)](xml/change-workflow-wit.md)  
      - [Specify the workflow state color](xml/process-configuration-xml-element.md#state-colors)
   :::column-end:::
   :::column span="1":::
      **Backlogs and boards**
      - [Add WITs to backlogs or boards](add-wits-to-backlogs-and-boards.md)  
      - [Add portfolio backlogs](add-portfolio-backlogs.md)  
      - [Configure the quick add panel](xml/process-configuration-xml-element.md#add)  
      - [Configure the default backlog columns](xml/process-configuration-xml-element.md#columns)  
      - [Set maximum number of task board items](xml/process-configuration-xml-element.md#number_items)  
      - [Set default weekend days (Scrum)](xml/process-configuration-xml-element.md#weekend_days)  
      - [Set default bug management behavior](xml/process-configuration-xml-element.md#behaviors)  
      - [Set default hidden backlogs](xml/process-configuration-xml-element.md#behaviors)  
      - [Change process configuration](xml/process-configuration-xml-element.md)  
      - [Add custom categories](xml/categories-xml-element-reference.md)  
   :::column-end:::
:::row-end:::
---
 
::: moniker-end
 


## Related articles
 
- [Work item field index](../boards/work-items/guidance/work-item-field.md)
- [witadmin command-line tool](witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)
- [Naming restrictions and conventions](../organizations/settings/naming-restrictions.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
- [Work tracking, process, and project limits](../organizations/settings/work/object-limits.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)