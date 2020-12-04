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

Use this index to quickly access concepts and tasks related to configuring and customizing Azure Boards. 


<a id="concepts" />

## Get started 

- [Define Area Paths](../organizations/settings/set-area-paths.md)  
- [Define Iteration Paths](../organizations/settings/set-iteration-paths-sprints.md)  
- GitHub connection


## Configure team tools 


---
:::row:::
   :::column span="1":::
      **Team**
   :::column-end:::
   :::column span="1":::
      **General**
   :::column-end:::
   :::column span="1":::
      **Kanban boards**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      - [Define Area Paths for a team](../organizations/settings/set-area-paths.md)  
      - [Define Iteration Paths for a team](../organizations/settings/set-iteration-paths-sprints.md)  
      - [Define work item templates](../boards/backlogs/work-item-template.md)  
   :::column-end:::
   :::column span="1":::
      - [Backlogs](../organizations/settings/select-backlog-navigation-levels.md)  
      - [Working days](../organizations/settings/set-working-days.md)  
      - [Working with bugs](../organizations/settings/show-bugs-on-backlog.md)  
   :::column-end:::
   :::column span="1":::
      - [Columns](../boards/boards/add-columns.md)  
      - [WIP limits](../boards/boards/wip-limits.md)    
      - [Definition of Done](../boards/boards/definition-of-done.md)  
      - [Split columns](../boards/boards/split-columns.md)   
      - [Swimlanes](../boards/boards/expedite-work.md)  
      - [Card fields, styles, tag colors, annotations, and card reordering](../boards/boards/customize-cards.md#kanban-board)    
   :::column-end:::
:::row-end:::
---
 
 
## Process customization 

Tasks listed in the following table must be performed by an administrator who has the necessary organization-level permissions, as they affect all users and teams within a project.  

### Customize a project process 

- [Create and manage inherited processes](../organizations/settings/work/manage-process.md)
- [Customize a project using an inherited process](../organizations/settings/work/customize-process.md)
- [Change the reference process from Agile to Scrum](../organizations/settings/work/change-process-agile-to-scrum.md)  
- [Change the reference process from Basic to Agile](../organizations/settings/work/change-process-basic-to-agile.md)  
- [Change the reference process from Scrum to Agile](../organizations/settings/work/change-process-scrum-to-agile.md)  

### Inheritance process 

You customize work item types using the Inheritance process model. 

---
:::row:::
   :::column span="1":::  
      **Field customizations**  
      - [Add a checkbox (Boolean) field](../organizations/settings/work/customize-process-field.md#boolean-field)  
      - [Add/remove custom fields](../organizations/settings/work/customize-process-field.md)
      - [Add/remove custom rules to a field](../organizations/settings/work/custom-rules.md)
      - [Add a person-name/Identity](../organizations/settings/work/customize-process-field.md#identity)
      - [Add a picklist (drop-down menu)](../organizations/settings/work/customize-process-field.md#pick-list)
      - [Add a rich-text (HTML) field](../organizations/settings/work/customize-process-field.md#html)
      - [Change a field label](../organizations/settings/work/customize-process-field.md#rename-field)  
      - [Delete field](../organizations/settings/work/customize-process-field.md#delete-field)  
   :::column-end:::  
   :::column span="1":::  
      **Work item type customizations**  
      - [Add a custom work item type](../organizations/settings/work/customize-process-work-item-type.md#add-wit)  
      - [Add/remove custom fields](../organizations/settings/work/customize-process-field.md)  
      - [Add/remove custom groups](../organizations/settings/work/customize-process-form.md#groups)  
      - [Add/remove custom pages](../organizations/settings/work/customize-process-form.md#pages)  
      - [Add/remove a custom control](../organizations/settings/work/custom-controls-process.md)  
      - [Add custom rules](../organizations/settings/work/custom-rules.md)  
      - [Change the color or description](../organizations/settings/work/customize-process-work-item-type.md#overview)  
      - [Delete a work item type](../organizations/settings/work/customize-process-work-item-type.md#destroy)  
      - [Enable/disable a work item type](../organizations/settings/work/customize-process-work-item-type.md#enable-disable)  
      **Workflow customizations**  
      - [Hide or unhide a state](../organizations/settings/work/customize-process-workflow.md#hide-state)
      - [Add, edit, or remove a workflow state](../organizations/settings/work/customize-process-workflow.md#states)  
      - [Apply rules to workflow states](../organizations/settings/work/apply-rules-to-workflow-states.md)  
   :::column-end:::  
   :::column span="1":::  
      **Backlog and board customizations**  
      - [Add a custom work item type](../organizations/settings/work/customize-process-backlogs-boards.md#edit-product-backlog)   
      ::: moniker range="azure-devops"  
      - [Add an inherited work item type](../organizations/settings/work/customize-process-backlogs-boards.md#add-oob-to-backlog)   
      ::: moniker-end  
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

You customize work item types using either the Inheritance process model or On-premises XML process model, depending on the selection made when [creating the project collection](/azure/devops/server/admin/manage-project-collections?view=azure-devops-2020&preserve-view=true) on which the project is defined.



### On-premises XML process model


<table valign="top">
<tbody valign="top">
<tr>
<td width="33%">
<ul>
<li><a href="add-modify-field.md#boolean-field">Add a checkbox (Boolean) field</a> (TFS 2017.2)</li>
<li><a href="add-modify-field.md">Add a custom field </a></li>
<li><a href="add-modify-field.md#picklist">Add a custom pick list</a></li>
<li><a href="add-modify-field.md">Add or modify a field</a></li>
<li><a href="add-modify-field.md#add-rules">Add rules to a field</a></li>
<li><a href="add-modify-field.md#custom-control">Add a custom control field</a></li>
<li><a href="add-modify-field.md#integration-fields">Add fields that integrate with test, build, and version control</a></li>
<li><a href="xml/change-workflow-wit.md">Add/remove State or Reason fields (customize workflow)</a></li>
</ul>
</td>
<td width="33%">
<ul>
<li><a href="add-modify-field.md#change-attribute">Change a field attribute</a></li>
<li><a href="add-modify-field.md#change-label">Change a field label</a></li>
<li><a href="../organizations/settings/set-area-paths.md">Define Area Paths</a></li>
<li><a href="../organizations/settings/set-iteration-paths-sprints.md">Define Iteration Paths</a></li>
<li><a href="../reference/xml/define-global-lists.md">Define global lists</a> </li>
<li><a href="../reference/add-modify-field.md#delete-field">Delete a field</a></li> 
</ul>
</td>
<td width="34%">
<ul>
<li><a href="add-modify-field.md#picklist">Modify a pre-defined pick list</a></li>
<li><a href="add-modify-field.md#change-label">Remove a field from a form</a></li>
<br/>
</ul>
</td>
</tr>
</tbody>
</table>

::: moniker-end




::: moniker range="<= tfs-2018"

You customize work item types using the On-premises XML process model. For additional customization options, see [On-premises XML process customization](on-premises-xml-process-model.md).

<table valign="top">
<tbody valign="top">
<tr>
<td width="33%">
<ul>
<li><a href="add-modify-field.md">Add a checkbox (Boolean) field</a> (TFS 2017.2)</li>
<li><a href="add-modify-field.md">Add a custom field </a></li>
<li><a href="add-modify-field.md#picklist">Add a custom pick list</a></li>
<li><a href="add-modify-field.md">Add or modify a field</a></li>
<li><a href="add-modify-field.md#add-rules">Add rules to a field</a></li>
<li><a href="add-modify-field.md#custom-control">Add a custom control field</a></li>
<li><a href="add-modify-field.md#integration-fields">Add fields that integrate with test, build, and version control</a></li>
<li><a href="xml/change-workflow-wit.md">Add/remove State or Reason fields (customize workflow)</a></li>
</ul>
</td>
<td width="33%">
<ul>
<li><a href="add-modify-field.md#change-attribute">Change a field attribute</a></li>
<li><a href="add-modify-field.md#change-label">Change a field label</a></li>
<li><a href="../organizations/settings/set-area-paths.md">Define Area Paths</a></li>
<li><a href="../organizations/settings/set-iteration-paths-sprints.md">Define Iteration Paths</a></li>
<li><a href="xml/define-global-lists.md">Define global lists</a> </li>
<li><a href="add-modify-field.md#delete-field">Delete a field</a></li> 
</ul>
</td>
<td width="34%">
<ul>
<li><a href="add-modify-field.md#picklist">Modify a pre-defined pick list</a></li>
<li><a href="add-modify-field.md#change-label">Remove a field from a form</a></li>
<br/>
</ul>
</td>
</tr>
</tbody>
</table>

::: moniker-end


## Related articles
 
- [Work item field index](../boards/work-items/guidance/work-item-field.md)
 