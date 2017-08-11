---
title: On-premises XML process model | TFS
description: Guide to configuring and customizing work tracking features for TFS and the on-premises process model  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 08/02/2017
---



<a id="on-prem-xml-process-model"></a>
# On-premises XML process model 
**TFS 2017 | TFS 2015 | TFS 2013**


<a id="on-prem-xml-sequence"></a>

When you manage an on-premises TFS, you perform most customizations using the following sequence. This sequence supports updating the XML definition for WIT, global lists, process configuration, and categories. This sequence supports individual updates through the import of their respective modified XML definition files. We recommend that you maintain your XML definition files in a repository for version control.  

[![Export XML definition file](_img/cust-wit-form-export-def-file.png)](#witadmin)[![Edit XML definition file](_img/cust-wit-form-edit-def-file.png)](../reference/weblayout-xml-elements.md)[![Import WIT definition file](_img/cust-wit-form-import-def-file.png)](#witadmin)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  

In addition, you can use the **witadmin** tool to list objects, rename WITs, permanently remove WITs, and more.  
 

You can perform the following tasks when you work with the On-prem XML process model. 


> [!div class="mx-tdBreakAll"]  
> |Fields  |Pick lists   |   Work item types |
> |-------------|----------|---------|
> |- [Add or modify a field](add-modify-field.md)<br/>- [Add a checkbox (Boolean) field](add-modify-field.md#boolean-field) (TFS 2017.2)<br/>- [Add rules to a field](add-modify-field.md#add-rules)<br/>- [Change a field label](add-modify-field.md#change-label)<br/>- [Add a custom control field](add-modify-field.md#custom-control)<br/>- [Remove a field from a form](add-modify-field.md#change-label)<br/>- [Change a field attribute](add-modify-field.md#change-attribute)<br/>- [Add fields that integrate with test, build, and version control](add-modify-field.md#integration-fields)<br/>- [Delete a field](add-modify-field.md#delete-field) |- [Area paths](set-area-paths.md)<br/>- [Iteration paths](set-iteration-paths-sprints.md)<br/>- [Add a custom pick list](add-modify-field.md#picklist)<br/>- [Modify a pre-defined pick list](add-modify-field.md#picklist)<br/>- [State or Reason fields (customize workflow)](../reference/change-workflow-wit.md)<br/>- [Person-name field (add users)](../../setup-admin/add-users.md) <br/>- [Resolution State & Failure Type](#test-experience)<br/>- [Define global lists](../reference/define-global-lists.md) |- [Add or modify a work item type](add-modify-wit.md)<br/>- [Change the workflow (States, Reasons, Transitions)](../reference/change-workflow-wit.md)<br/>- [Customize the form](../reference/change-work-item-form-layout.md)<br/>- [Specify the WIT color](../reference/process-configuration-xml-element.md#wit-colors)<br/>- [Specify the WIT icon](../reference/process-configuration-xml-element.md)<br/>- [Specify the workflow state color](../reference/process-configuration-xml-element.md#state-colors) |


> [!div class="mx-tdBreakAll"]  
> |Backlogs & Process configuration  |Process templates  | Link types |
> |-------------|----------|---------|
> |- [Add WITs to backlogs or boards](add-wits-to-backlogs-and-boards.md)<br/>- [Add portfolio backlogs](add-portfolio-backlogs.md)<br/>- [Configure the quick add panel](../reference/process-configuration-xml-element.md#add)<br/>- [Configure the default backlog columns](../reference/process-configuration-xml-element.md#columns)<br/>- [Set maximum number of task board items](../reference/process-configuration-xml-element.md#number_items)<<br/>- [Set default weekend days (Scrum)](../reference/process-configuration-xml-element.md#weekend_days) <br/>- [Set default bug management behavior](../reference/process-configuration-xml-element.md#behaviors) <br/>- [Set default hidden backlogs](../reference/process-configuration-xml-element.md#behaviors) <br/>- [Process configuration](../reference/process-configuration-xml-element.md)<br/>- [Categories](../reference/categories-xml-element-reference.md) |- [Customize](../reference/process-templates/customize-process.md)<br/>- [Manage (upload/download)](../guidance/manage-process-templates.md)<br/>- [Maintenance and upgrade implications](#before-you-customize) |- [Add a custom link type](../reference/link-type-element-reference.md)<br/>- [Delete a custom link type](../reference/witadmin/manage-link-types.md)<br/>- [Deactivate/activate a custom link type](../reference/witadmin/manage-link-types.md) | 



[!INCLUDE [temp](../_shared/process-editor.md)]  


