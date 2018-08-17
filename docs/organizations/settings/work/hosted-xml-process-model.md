---
title: Hosted XML process model 
titleSuffix: Azure DevOps Services
description: Guide to configuring and customizing work tracking features for the Hosted XML process model 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
monikerRange: 'vsts'
ms.date: 03/20/2018
---


# Hosted XML process model  

[!INCLUDE [temp](../../../_shared/version-vsts-only.md)]

<a id="hosted-xml-process-model">  </a>


> [!NOTE]   
> **Feature availability**:  The Hosted XML process model is only supported for select accounts of Azure DevOps Services.  


The Hosted XML process model provides support for customizing work tracking objects and Agile tools for a project by modifying and importing a process template. Updates made to the process template are applied to projects that were created using that process.

You can perform the following tasks with the Hosted XML process model. 

> [!div class="mx-tdBreakAll"]  
> |Fields  |Pick lists   |   Work item types |
> |-------------|----------|---------|
> |- [Add or modify a field](../../../reference/add-modify-field.md)<br/>- [Add a checkbox (Boolean) field](../../../reference/add-modify-field.md#boolean-field)<br/>- [Add rules to a field](../../../reference/add-modify-field.md#add-rules)<br/>- [Change a field label](../../../reference/add-modify-field.md#change-label)<br/>- [Add a custom control field](../../../reference/add-modify-field.md#custom-control)<br/>- [Remove a field](../../../reference/add-modify-field.md#change-label) |-[Area paths](../set-area-paths.md)<br/>- [Iteration paths](../set-iteration-paths-sprints.md)<br/>- [State or Reason fields] (../../../reference/xml/change-workflow-wit.md)](../../../reference/xml/change-workflow-wit.md)<br/>- [Person-name field (add users)](../../security/add-users-team-project.md)<br/>- [Add a custom pick list](../../../reference/add-modify-field.md#picklist)<br/>- [Predefined field](../../../reference/add-modify-field.md#picklist)<br/>- [Resolution State or Failure Type](../../../reference/customize-work.md#test-experience)<br/>- [Define global lists](../../../reference/xml/define-global-lists.md) |-[Add or modify a work item type](../../../reference/add-modify-wit.md)<br/>- [Change the workflow (States, Reasons, Transitions)](../../../reference/xml/change-workflow-wit.md)<br/>- [Customize the form](../../../reference/xml/change-work-item-form-layout.md)<br/>- [Specify the WIT color](../../../reference/xml/process-configuration-xml-element.md#wit-colors)<br/>- [Specify the WIT icon](../../../reference/xml/process-configuration-xml-element.md)<br/>- [Specify the workflow state color](../../../reference/xml/process-configuration-xml-element.md#state-colors) |




> [!div class="mx-tdBreakAll"]  
> | Backlogs and process configuration | Process template |  
> |----------|---------|   
> |- [Add WITs to backlogs or boards](../../../reference/add-wits-to-backlogs-and-boards.md)<br/>- [Add portfolio backlogs](../../../reference/add-portfolio-backlogs.md)<br/>- [Configure the quick add panel](../../../reference/xml/process-configuration-xml-element.md#add)<br/>- [Configure the default backlog columns](../../../reference/xml/process-configuration-xml-element.md#columns)<br/>- [Set maximum number of task board items](../../../reference/xml/process-configuration-xml-element.md#number_items)<br/>- [Set default weekend days (Scrum)](../../../reference/xml/process-configuration-xml-element.md#weekend_days) <br/>- [Set default bug management behavior](../../../reference/xml/process-configuration-xml-element.md#behaviors)<br/>- [Set default hidden backlogs](../../../reference/xml/process-configuration-xml-element.md#behaviors)<br/>- [Process configuration](../../../reference/xml/process-configuration-xml-element.md)<br/>- [Categories](../../../reference/xml/categories-xml-element-reference.md) |- [Import a process template](import-process/import-process.md#import-from-TFS)<br/>- [Export a process template](import-process/import-process.md#export-process)<br/>- [Customize a process template](import-process/customize-process.md) |



<a id="hosted-xml-sequence"></a>
 
Use the following sequences when you manage customizations using the Hosted XML process model. This sequence requires you to update your project by updating the process template that it uses. We recommend that you maintain your process templates in a repository for version control.  

[![Export process](_img/cust-wit-form-export-process.png)](import-process/import-process.md#export-process)[![Edit XML definition file(s)](_img/cust-wit-form-edit-def-file.png)](../../../reference/xml/weblayout-xml-elements.md)[![Import process](_img/cust-wit-form-import-process.png)](import-process/import-process.md)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  