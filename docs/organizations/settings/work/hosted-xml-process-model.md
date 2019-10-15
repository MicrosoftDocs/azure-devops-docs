---
title: Hosted XML process model 
titleSuffix: Azure DevOps Services
description: Guide to configuring and customizing work tracking features for the Hosted XML process model 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 10/10/2018
---


# Hosted XML process model  

[!INCLUDE [temp](../../../boards/_shared/version-vsts-only.md)]

<a id="hosted-xml-process-model">  </a>


> [!NOTE]   
> **Feature availability**:  The Hosted XML process model is only supported for select accounts of Azure DevOps Services.  

The Hosted XML process model provides support for customizing work tracking objects and Agile tools for a project by modifying and importing a process template. Updates made to the process template are applied to projects that were created using that process.

## Supported customizations

You can perform the following tasks with the Hosted XML process model. 


<table width="80%">
<tbody valign="top">
<tr>
<th width="35%">Area</th>
<th width="65%">Customization support</th>
</tr>
<tr>
<td>Fields  </td>
<td>
<ul>
<li><a href="../../../reference/add-modify-field.md" data-raw-source="[Add or modify a field](../../../reference/add-modify-field.md)">Add or modify a field</a></li>
<li><a href="../../../reference/add-modify-field.md#boolean-field" data-raw-source="[Add a checkbox (Boolean) field](../../../reference/add-modify-field.md#boolean-field)">Add a checkbox (Boolean) field</a></li>
<li><a href="../../../reference/add-modify-field.md#add-rules" data-raw-source="[Add rules to a field](../../../reference/add-modify-field.md#add-rules)">Add rules to a field</a></li>
<li><a href="../../../reference/add-modify-field.md#change-label" data-raw-source="[Change a field label](../../../reference/add-modify-field.md#change-label)">Change a field label</a></li>
<li><a href="../../../reference/add-modify-field.md#custom-control" data-raw-source="[Add a custom control field](../../../reference/add-modify-field.md#custom-control)">Add a custom control field</a></li>
<li><a href="../../../reference/add-modify-field.md#change-label" data-raw-source="[Remove a field](../../../reference/add-modify-field.md#change-label)">Remove a field</a> </li>
</ul>
</td>
</tr>
<tr>
<td>Pick lists  </td>
<td>
<ul>
<li><a href="../set-area-paths.md" data-raw-source="[Area paths](../set-area-paths.md)">Area paths</a></li><li><a href="../set-iteration-paths-sprints.md" data-raw-source="[Iteration paths](../set-iteration-paths-sprints.md)">Iteration paths</a></li>
<li><a href="../../../reference/xml/change-workflow-wit.md" data-raw-source="[State or Reason fields](../../../reference/xml/change-workflow-wit.md)">State or Reason fields</a></li>
<li><a href="../../security/add-users-team-project.md" data-raw-source="[Person-name field (add users)](../../security/add-users-team-project.md)">Person-name field (add users)</a></li>
<li><a href="../../../reference/add-modify-field.md#picklist" data-raw-source="[Add a custom pick list](../../../reference/add-modify-field.md#picklist)">Add a custom pick list</a></li>
<li><a href="../../../reference/add-modify-field.md#picklist" data-raw-source="[Predefined field](../../../reference/add-modify-field.md#picklist)">Predefined field</a></li>
<li><a href="../../../reference/customize-work.md#test-experience" data-raw-source="[Resolution State or Failure Type](../../../reference/customize-work.md#test-experience)">Resolution State or Failure Type</a></li>
<li><a href="../../../reference/xml/define-global-lists.md" data-raw-source="[Define global lists](../../../reference/xml/define-global-lists.md)">Define global lists</a> </li>
</ul>
</td>
</tr>
<tr>
<td>Work item types</td>
<td>
<ul>
<li><a href="../../../reference/add-modify-wit.md" data-raw-source="[Add or modify a work item type](../../../reference/add-modify-wit.md)">Add or modify a work item type</a></li>
<li><a href="../../../reference/xml/change-workflow-wit.md" data-raw-source="[Change the workflow (States, Reasons, Transitions)](../../../reference/xml/change-workflow-wit.md)">Change the workflow (States, Reasons, Transitions)</a></li>
<li><a href="../../../reference/xml/change-work-item-form-layout.md" data-raw-source="[Customize the form](../../../reference/xml/change-work-item-form-layout.md)">Customize the form</a></li>
<li><a href="../../../reference/xml/process-configuration-xml-element.md#wit-colors" data-raw-source="[Specify the WIT color](../../../reference/xml/process-configuration-xml-element.md#wit-colors)">Specify the WIT color</a></li>
<li><a href="../../../reference/xml/process-configuration-xml-element.md" data-raw-source="[Specify the WIT icon](../../../reference/xml/process-configuration-xml-element.md)">Specify the WIT icon</a></li>
<li><a href="../../../reference/xml/process-configuration-xml-element.md#state-colors" data-raw-source="[Specify the workflow state color](../../../reference/xml/process-configuration-xml-element.md#state-colors)">Specify the workflow state color</a></li>
</ul>
</td>
</tr>
<tr>
<td>Backlogs and process configuration  </td>
<td>
<ul>
<li><a href="../../../reference/add-wits-to-backlogs-and-boards.md" data-raw-source="[Add WITs to backlogs or boards](../../../reference/add-wits-to-backlogs-and-boards.md)">Add WITs to backlogs or boards</a></li>
<li><a href="../../../reference/add-portfolio-backlogs.md" data-raw-source="[Add portfolio backlogs](../../../reference/add-portfolio-backlogs.md)">Add portfolio backlogs</a></li>
<li><a href="../../../reference/xml/process-configuration-xml-element.md#add" data-raw-source="[Configure the quick add panel](../../../reference/xml/process-configuration-xml-element.md#add)">Configure the quick add panel</a></li>
<li><a href="../../../reference/xml/process-configuration-xml-element.md#columns" data-raw-source="[Configure the default backlog columns](../../../reference/xml/process-configuration-xml-element.md#columns)">Configure the default backlog columns</a></li>
<li><a href="../../../reference/xml/process-configuration-xml-element.md#number_items" data-raw-source="[Set maximum number of task board items](../../../reference/xml/process-configuration-xml-element.md#number_items)">Set maximum number of task board items</a></li>
<li><a href="../../../reference/xml/process-configuration-xml-element.md#weekend_days" data-raw-source="[Set default weekend days (Scrum)](../../../reference/xml/process-configuration-xml-element.md#weekend_days)">Set default weekend days (Scrum)</a> </li>
<li><a href="../../../reference/xml/process-configuration-xml-element.md#behaviors" data-raw-source="[Set default bug management behavior](../../../reference/xml/process-configuration-xml-element.md#behaviors)">Set default bug management behavior</a></li>
<li><a href="../../../reference/xml/process-configuration-xml-element.md#behaviors" data-raw-source="[Set default hidden backlogs](../../../reference/xml/process-configuration-xml-element.md#behaviors)">Set default hidden backlogs</a></li>
<li><a href="../../../reference/xml/process-configuration-xml-element.md" data-raw-source="[Process configuration](../../../reference/xml/process-configuration-xml-element.md)">Process configuration</a></li>
<li><a href="../../../reference/xml/categories-xml-element-reference.md" data-raw-source="[Categories](../../../reference/xml/categories-xml-element-reference.md)">Categories</a></li>
</ul>
</td>
</tr>
<tr>
<td>Process template </td>
<td>
<ul>
<li><a href="import-process/import-process.md#import-from-TFS" data-raw-source="[Import a process template](import-process/import-process.md#import-from-TFS)">Import a process template</a></li>
<li><a href="import-process/import-process.md#export-process" data-raw-source="[Export a process template](import-process/import-process.md#export-process)">Export a process template</a></li>
<li><a href="import-process/customize-process.md" data-raw-source="[Customize a process template](import-process/customize-process.md)">Customize a process template</a></li>
</ul>
</td>
</tr>
</tbody>
</table>

<a id="add-support-wit" />

## Add release deployment support to a work item type

The release deployments control shows release information for only those work items that have been associated to a commit that is part of a build being released. To add the release deployments control to a work item type, you need to add the following syntax to a work item type XML definition. To learn more about this control, see [Link work items to deployments](../../../boards/work-items/work-item-deployments-control.md). 

> [!div class="tabbedCodeSnippets"]
```XML
<Group Label="Deployment">
    <Control Type="DeploymentsControl" Name="Deployments" />
</Group>
```

This syntax has been been added to the following work item type definitions of the default process templates.

> [!div class="mx-tdBreakAll"]  
> |Agile|Basic|Scrum|CMMI |  
> |-----|-----|-----|-----|  
> |- Bug<br/>- Epic<br/>- Feature<br/>- Issue<br/>- Task<br/>- Test Case<br/>- User Story|- Issue<br/>- Task<br/>- Test Case|- Bug<br/>- Epic<br/>- Feature<br/> - Impediment<br/> - Product Backlog Item<br/>- Task<br/>- Test Case|- Bug<br/>- Change Request<br/>- Epic<br/>- Feature<br/>- Issue<br/>- Requirement<br/>- Review<br/>- Risk<br/>- Task|


<a id="hosted-xml-sequence"></a>
 
## Customization sequence

Use the following sequences when you manage customizations using the Hosted XML process model. This sequence requires you to update your project by updating the process template that it uses. We recommend that you maintain your process templates in a repository for version control.  

[![Export process](_img/cust-wit-form-export-process.png)](import-process/import-process.md#export-process)[![Edit XML definition file(s)](_img/cust-wit-form-edit-def-file.png)](../../../reference/xml/weblayout-xml-elements.md)[![Import process](_img/cust-wit-form-import-process.png)](import-process/import-process.md)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  