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
ms.date: 03/20/2018
---


# Hosted XML process model  

[!INCLUDE [temp](../../../boards/_shared/version-vsts-only.md)]

<a id="hosted-xml-process-model">  </a>


> [!NOTE]   
> **Feature availability**:  The Hosted XML process model is only supported for select accounts of Azure DevOps Services.  

The Hosted XML process model provides support for customizing work tracking objects and Agile tools for a project by modifying and importing a process template. Updates made to the process template are applied to projects that were created using that process.

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
<li>[Add or modify a field](../../../reference/add-modify-field.md)</li>
<li>[Add a checkbox (Boolean) field](../../../reference/add-modify-field.md#boolean-field)</li>
<li>[Add rules to a field](../../../reference/add-modify-field.md#add-rules)</li>
<li>[Change a field label](../../../reference/add-modify-field.md#change-label)</li>
<li>[Add a custom control field](../../../reference/add-modify-field.md#custom-control)</li>
<li>[Remove a field](../../../reference/add-modify-field.md#change-label) </li>
</ul>
</td>
</tr>
<tr>
<td>Pick lists  </td>
<td>
<ul>
<li>[Area paths](../set-area-paths.md)</li><li>[Iteration paths](../set-iteration-paths-sprints.md)</li>
<li>[State or Reason fields](../../../reference/xml/change-workflow-wit.md)</li>
<li>[Person-name field (add users)](../../security/add-users-team-project.md)</li>
<li>[Add a custom pick list](../../../reference/add-modify-field.md#picklist)</li>
<li>[Predefined field](../../../reference/add-modify-field.md#picklist)</li>
<li>[Resolution State or Failure Type](../../../reference/customize-work.md#test-experience)</li>
<li>[Define global lists](../../../reference/xml/define-global-lists.md) </li>
</ul>
</td>
</tr>
<tr>
<td>Work item types</td>
<td>
<ul>
<li>[Add or modify a work item type](../../../reference/add-modify-wit.md)</li>
<li>[Change the workflow (States, Reasons, Transitions)](../../../reference/xml/change-workflow-wit.md)</li>
<li>[Customize the form](../../../reference/xml/change-work-item-form-layout.md)</li>
<li>[Specify the WIT color](../../../reference/xml/process-configuration-xml-element.md#wit-colors)</li>
<li>[Specify the WIT icon](../../../reference/xml/process-configuration-xml-element.md)</li>
<li>[Specify the workflow state color](../../../reference/xml/process-configuration-xml-element.md#state-colors)</li>
</ul>
</td>
</tr>
<tr>
<td>Backlogs and process configuration  </td>
<td>
<ul>
<li>[Add WITs to backlogs or boards](../../../reference/add-wits-to-backlogs-and-boards.md)</li>
<li>[Add portfolio backlogs](../../../reference/add-portfolio-backlogs.md)</li>
<li>[Configure the quick add panel](../../../reference/xml/process-configuration-xml-element.md#add)</li>
<li>[Configure the default backlog columns](../../../reference/xml/process-configuration-xml-element.md#columns)</li>
<li>[Set maximum number of task board items](../../../reference/xml/process-configuration-xml-element.md#number_items)</li>
<li>[Set default weekend days (Scrum)](../../../reference/xml/process-configuration-xml-element.md#weekend_days) </li>
<li>[Set default bug management behavior](../../../reference/xml/process-configuration-xml-element.md#behaviors)</li>
<li>[Set default hidden backlogs](../../../reference/xml/process-configuration-xml-element.md#behaviors)</li>
<li>[Process configuration](../../../reference/xml/process-configuration-xml-element.md)</li>
<li>[Categories](../../../reference/xml/categories-xml-element-reference.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Process template </td>
<td>
<ul>
<li>[Import a process template](import-process/import-process.md#import-from-TFS)</li>
<li>[Export a process template](import-process/import-process.md#export-process)</li>
<li>[Customize a process template](import-process/customize-process.md)</li>
</ul>
</td>
</tr>
</tbody>
</table>



<a id="hosted-xml-sequence"></a>
 
Use the following sequences when you manage customizations using the Hosted XML process model. This sequence requires you to update your project by updating the process template that it uses. We recommend that you maintain your process templates in a repository for version control.  

[![Export process](_img/cust-wit-form-export-process.png)](import-process/import-process.md#export-process)[![Edit XML definition file(s)](_img/cust-wit-form-edit-def-file.png)](../../../reference/xml/weblayout-xml-elements.md)[![Import process](_img/cust-wit-form-import-process.png)](import-process/import-process.md)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  