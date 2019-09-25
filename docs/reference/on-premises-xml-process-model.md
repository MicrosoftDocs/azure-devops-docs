---
title: On-premises XML process model
titleSuffix: TFS 
description: Guide to configuring and customizing work tracking features for TFS and the on-premises process model  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
monikerRange: '<= azure-devops-2019'
ms.date: 05/06/2019
---


# On-premises XML process customization

[!INCLUDE [temp](../_shared/version-header-tfs-only.md)]

The On-premises XML process model provides support for customizing work tracking objects and Agile tools for a project. With this model, you can update the XML definition of work item types, the process configuration, categories, and more. You can also update the attributes of fields. 

> [!IMPORTANT]  
> To customize an Azure DevOps Services project, see [About process customization and inherited processes](../organizations/settings/work/inheritance-process-model.md). This article applies to on-premises deployments only.  

::: moniker range="azure-devops-2019"  

For Azure DevOps Server 2019, you have a choice of process models. When you create a project collection, you'll need to choose between On-premises XML process model and Inheritance process model. To learn more, see [Customize work tracking, Choose the process model for your project collection](/azure/devops/reference/customize-work?view=azure-devops-2019#choose-process-model).  

::: moniker-end

## Supported customizations  

You can perform the following tasks when you work with the On-premises XML process model. 

<a id="on-prem-xml-process-model"></a>


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
<li><a href="add-modify-field.md" data-raw-source="[Add or modify a field](add-modify-field.md)">Add or modify a field</a></li>
<li><a href="add-modify-field.md#boolean-field" data-raw-source="[Add a checkbox (Boolean) field](add-modify-field.md#boolean-field)">Add a checkbox (Boolean) field</a> (TFS 2017.2)</li>
<li><a href="add-modify-field.md#add-rules" data-raw-source="[Add rules to a field](add-modify-field.md#add-rules)">Add rules to a field</a></li>
<li><a href="add-modify-field.md#change-label" data-raw-source="[Change a field label](add-modify-field.md#change-label)">Change a field label</a></li>
<li><a href="add-modify-field.md#custom-control" data-raw-source="[Add a custom control field](add-modify-field.md#custom-control)">Add a custom control field</a></li>
<li><a href="add-modify-field.md#change-label" data-raw-source="[Remove a field from a form](add-modify-field.md#change-label)">Remove a field from a form</a></li>
<li><a href="add-modify-field.md#change-attribute" data-raw-source="[Change a field attribute](add-modify-field.md#change-attribute)">Change a field attribute</a></li>
<li><a href="add-modify-field.md#integration-fields" data-raw-source="[Add fields that integrate with test, build, and version control](add-modify-field.md#integration-fields)">Add fields that integrate with test, build, and version control</a></li><li><a href="add-modify-field.md#delete-field" data-raw-source="[Delete a field](add-modify-field.md#delete-field)">Delete a field</a></li> 
</ul>
</td>
</tr>
<tr>
<td>Pick lists  </td>
<td>
<ul>
<li><a href="../organizations/settings/set-area-paths.md" data-raw-source="[Area paths](../organizations/settings/set-area-paths.md)">Area paths</a></li>
<li><a href="../organizations/settings/set-iteration-paths-sprints.md" data-raw-source="[Iteration paths](../organizations/settings/set-iteration-paths-sprints.md)">Iteration paths</a></li>
<li><a href="add-modify-field.md#picklist" data-raw-source="[Add a custom pick list](add-modify-field.md#picklist)">Add a custom pick list</a></li>
<li><a href="add-modify-field.md#picklist" data-raw-source="[Modify a pre-defined pick list](add-modify-field.md#picklist)">Modify a pre-defined pick list</a></li>
<li><a href="xml/change-workflow-wit.md" data-raw-source="[State or Reason fields (customize workflow)](xml/change-workflow-wit.md)">State or Reason fields (customize workflow)</a></li>
<li><a href="../organizations/security/add-users-team-project.md" data-raw-source="[Person-name field (add users)](../organizations/security/add-users-team-project.md)">Person-name field (add users)</a> </li>
<li><a href="customize-work.md#test-experience" data-raw-source="[Resolution State &amp; Failure Type](customize-work.md#test-experience)">Resolution State &amp; Failure Type</a></li>
<li><a href="xml/define-global-lists.md" data-raw-source="[Define global lists](xml/define-global-lists.md)">Define global lists</a> </li>
</ul>
</td>
</tr>
<tr>
<td>Work item types</td>
<td>
<ul>
<li><a href="add-modify-wit.md" data-raw-source="[Add or modify a work item type](add-modify-wit.md)">Add or modify a work item type</a></li>
<li><a href="xml/change-workflow-wit.md" data-raw-source="[Change the workflow (States, Reasons, Transitions)](xml/change-workflow-wit.md)">Change the workflow (States, Reasons, Transitions)</a></li>
<li><a href="xml/change-work-item-form-layout.md" data-raw-source="[Customize the form](xml/change-work-item-form-layout.md)">Customize the form</a></li>
<li><a href="xml/process-configuration-xml-element.md#wit-colors" data-raw-source="[Specify the WIT color](xml/process-configuration-xml-element.md#wit-colors)">Specify the WIT color</a></li>
<li><a href="xml/process-configuration-xml-element.md" data-raw-source="[Specify the WIT icon](xml/process-configuration-xml-element.md)">Specify the WIT icon</a></li>
<li><a href="xml/process-configuration-xml-element.md#state-colors" data-raw-source="[Specify the workflow state color](xml/process-configuration-xml-element.md#state-colors)">Specify the workflow state color</a> </li>
</ul>
</td>
</tr>
<tr>
<td>Backlogs and process configuration  </td>
<td>
<ul>
<li><a href="add-wits-to-backlogs-and-boards.md" data-raw-source="[Add WITs to backlogs or boards](add-wits-to-backlogs-and-boards.md)">Add WITs to backlogs or boards</a></li>
<li><a href="add-portfolio-backlogs.md" data-raw-source="[Add portfolio backlogs](add-portfolio-backlogs.md)">Add portfolio backlogs</a></li>
<li><a href="xml/process-configuration-xml-element.md#add" data-raw-source="[Configure the quick add panel](xml/process-configuration-xml-element.md#add)">Configure the quick add panel</a></li>
<li><a href="xml/process-configuration-xml-element.md#columns" data-raw-source="[Configure the default backlog columns](xml/process-configuration-xml-element.md#columns)">Configure the default backlog columns</a></li>
<li><a href="xml/process-configuration-xml-element.md#number_items" data-raw-source="[Set maximum number of task board items](xml/process-configuration-xml-element.md#number_items)">Set maximum number of task board items</a></li>
<li><a href="xml/process-configuration-xml-element.md#weekend_days" data-raw-source="[Set default weekend days (Scrum)](xml/process-configuration-xml-element.md#weekend_days)">Set default weekend days (Scrum)</a> </li>
<li><a href="xml/process-configuration-xml-element.md#behaviors" data-raw-source="[Set default bug management behavior](xml/process-configuration-xml-element.md#behaviors)">Set default bug management behavior</a> </li>
<li><a href="xml/process-configuration-xml-element.md#behaviors" data-raw-source="[Set default hidden backlogs](xml/process-configuration-xml-element.md#behaviors)">Set default hidden backlogs</a> </li>
<li><a href="xml/process-configuration-xml-element.md" data-raw-source="[Process configuration](xml/process-configuration-xml-element.md)">Process configuration</a></li>
<li><a href="xml/categories-xml-element-reference.md" data-raw-source="[Categories](xml/categories-xml-element-reference.md)">Categories</a> </li>
</ul>
</td>
</tr>
<tr>
<td>Process template </td>
<td>
<ul>
<li><a href="process-templates/customize-process.md" data-raw-source="[Customize](process-templates/customize-process.md)">Customize</a></li>
<li><a href="../boards/work-items/guidance/manage-process-templates.md" data-raw-source="[Manage (upload/download)](../boards/work-items/guidance/manage-process-templates.md)">Manage (upload/download)</a></li>
<li><a href="#before-you-customize" data-raw-source="[Maintenance and upgrade implications](#before-you-customize)">Maintenance and upgrade implications</a> </li>
</ul>
</td>
</tr>
<tr>
<td>Link types </td>
<td>
<ul>
<li><a href="xml/link-type-element-reference.md" data-raw-source="[Add a custom link type](xml/link-type-element-reference.md)">Add a custom link type</a></li>
<li><a href="witadmin/manage-link-types.md" data-raw-source="[Delete a custom link type](witadmin/manage-link-types.md)">Delete a custom link type</a></li>
<li><a href="witadmin/manage-link-types.md" data-raw-source="[Deactivate/activate a custom link type](witadmin/manage-link-types.md)">Deactivate/activate a custom link type</a></li>
</ul>
</td>
</tr>
</tbody>
</table>

<a id="on-prem-xml-sequence"></a>
## Customization sequence   

When you manage an on-premises deployment, you perform most customizations using the following sequence. This sequence supports updating the XML definition for WIT, global lists, process configuration, and categories. This sequence supports individual updates through the import of their respective modified XML definition files. We recommend that you maintain your XML definition files in a repository for version control.  

[![Export XML definition file](_img/cust-wit-form-export-def-file.png)](customize-wit-form.md#witadmin)[![Edit XML definition file](_img/cust-wit-form-edit-def-file.png)](xml/weblayout-xml-elements.md)[![Import WIT definition file](_img/cust-wit-form-import-def-file.png)](customize-wit-form.md#witadmin)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  

In addition, you can use the **witadmin** tool to list objects, rename WITs, permanently remove WITs, and more.  
 

[!INCLUDE [temp](../_shared/process-editor.md)]  


<a id="before-you-customize"></a>
## Maintenance and upgrade implications
Before you customize, you should understand how your customizations may impact your project when you upgrade your application-tier server.  

Upgrades to an on-premises deployment can introduce new features that require updates to the objects used to track work. These objects include work item types, categories, and process configuration. Minimizing changes to the workflow for a WIT or the process configuration can help minimize the work you must do when you upgrade your deployment. 

To minimize the amount of manual work you'll need to do after an upgrade, understand which customizations support an easy update path and which do not. 


### Compatible for quick updating  

With the following customizations, you can use the Configure Features Wizard to automatically apply any changes to your project required for new features.

<ul>
<li>Fields: Add custom fields, customize a pick list, add or modify area and iteration paths, add rules to a field  </li>
<li>WITs: Add custom WITs, change the form layout</li>
<li>Categories: Add custom categories  </li>
<li>Agile tools: Customize the columns on the Kanban board, customize the quick add panel  </li>
<li>Office integration: Add or change how Project fields map to TFS fields   </li>
</ul>

To learn more about the Configure Features Wizard, see [Configure features after an upgrade](configure-features-after-upgrade.md).


### Compatible, but may require manual updates

The Configure Features Wizard requires that specific work item types, workflow states, and fields exist in the project. When you make the following customizations, you might need to modify your custom process for the wizard to run, or you might have to update your project manually. 

<ul>
<li>Fields: Change attributes of an existing field, remove fields that are referenced in the process configuration </li>
<li>WITs: Change the workflow </li>
<li>Agile tools: Change the WITs defined for the Requirement Category, Task Category, or Feature Category.</li>
<li>Agile tools: Change the metastate mapping defined in the process configuration.  </li>
<li>Agile tools: Change a field specified for a <code>TypeField</code> in the process configuration.   </li>
</ul>

In addition, changes you make to WITs or the workflow could require updates to other artifacts provided with your process, such as Excel or SQL Server Reporting Services reports.
 

### Customizations to avoid
You should avoid making the following customizations because they can result in schema conflicts in the data warehouse or cause problems when updating projects after a TFS upgrade. 

*	Fields:  
	*	Change the friendly name of a field (a field specified within a WIT definition file)  
	*	Change one or more reporting attributes, or the attribute to synchronize person names with Active Directory of a default field  
*	WITs: Rename or delete WITs 
*	Categories: Change the name of default categories, or change the WITs specified within default categories  

To learn more about reporting attributes, see [Add or modify work item fields to support reporting](xml/add-or-modify-work-item-fields-to-support-reporting.md).

### Recommended practices  
*	Identify the best options for customizing WITs that support your tracking requirements. When you change objects that track work items, you should identify how these changes will affect existing and future projects.  
*	Put processes and all XML definition files under version control. Do not deploy objects that you define but have not stored in a repository.  
*	Test your customized objects just as you would test your software.  
*	Minimize the number of custom fields that you introduce. Minimize the number of fields that you make reportable.  


## Replace team area path with a team field  
The default configuration for projects associates each team with an area path. If your organization has several teams that work from a common backlog and across many product areas, this configuration might not fit how you want to organize your work. By adding a custom field to represent teams in your organization, you can reconfigure the agile planning tools and pages to support your teams and decouple assignment to teams and area paths.

[Use team fields instead of area paths to support teams](use-team-fields-instead-area-paths.md) describes how to change the default configuration.

## Related articles

- [Customize work](customize-work.md) 
- [witAdmin: Customize and manage objects for tracking work](witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)
