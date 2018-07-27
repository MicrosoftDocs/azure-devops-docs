---
title: Hosted XML process model 
titleSuffix: VSTS
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

**VSTS**

<a id="hosted-xml-process-model">  </a>


> [!NOTE]   
> **Feature availability**:  The Hosted XML process model is only supported for select accounts of Visual Studio Team Services.  


The Hosted XML process model provides support for customizing work tracking objects and Agile tools for a project by modifying and importing a process template. Updates made to the process template are applied to projects that were created using that process.

You can perform the following tasks with the Hosted XML process model. 

> [!div class="mx-tdBreakAll"]  
> |Fields  |Pick lists   |   Work item types |
> |-------------|----------|---------|
> |- [Add or modify a field](add-modify-field.md)<br/>- [Add a checkbox (Boolean) field](add-modify-field.md#boolean-field)<br/>- [Add rules to a field](add-modify-field.md#add-rules)<br/>- [Change a field label](add-modify-field.md#change-label)<br/>- [Add a custom control field](add-modify-field.md#custom-control)<br/>- [Remove a field from a form](add-modify-field.md#change-label) |-[Area paths](../../organizations/settings/set-area-paths.md)<br/>- [Iteration paths](../../organizations/settings/set-iteration-paths-sprints.md)<br/>- [State or Reason fields (customize workflow)](reference/change-workflow-wit.md)<br/>- [Person-name field (add users)](../../organizations/security/add-users-team-project.md)<br/>- [Add a custom pick list](add-modify-field.md#picklist)<br/>- [Predefined field](add-modify-field.md#picklist)<br/>- [Resolution State or Failure Type](customize-work.md#test-experience)<br/>- [Define global lists](reference/define-global-lists.md) |-[Add or modify a work item type](add-modify-wit.md)<br/>- [Change the workflow (States, Reasons, Transitions)](reference/change-workflow-wit.md)<br/>- [Customize the form](reference/change-work-item-form-layout.md)<br/>- [Specify the WIT color](reference/process-configuration-xml-element.md#wit-colors)<br/>- [Specify the WIT icon](reference/process-configuration-xml-element.md)<br/>- [Specify the workflow state color](reference/process-configuration-xml-element.md#state-colors) |




> [!div class="mx-tdBreakAll"]  
> | Backlogs and process configuration | Process template |  
> |----------|---------|   
> |- [Add WITs to backlogs or boards](add-wits-to-backlogs-and-boards.md)<br/>- [Add portfolio backlogs](add-portfolio-backlogs.md)<br/>- [Configure the quick add panel](reference/process-configuration-xml-element.md#add)<br/>- [Configure the default backlog columns](reference/process-configuration-xml-element.md#columns)<br/>- [Set maximum number of task board items](reference/process-configuration-xml-element.md#number_items)<br/>- [Set default weekend days (Scrum)](reference/process-configuration-xml-element.md#weekend_days) <br/>- [Set default bug management behavior](reference/process-configuration-xml-element.md#behaviors)<br/>- [Set default hidden backlogs](reference/process-configuration-xml-element.md#behaviors)<br/>- [Process configuration](reference/process-configuration-xml-element.md)<br/>- [Categories](reference/categories-xml-element-reference.md) |-[Import a process template](import-process/import-process.md#import-from-TFS)<br/>- [Export a process template](import-process/import-process.md#export-process)<br/>- [Customize a process template](import-process/customize-process.md) |



<a id="hosted-xml-sequence"></a>
 
Use the following sequences when you manage your VSTS through the Hosted XML process model. This sequence requires you to update your project by updating the process template that it uses. We recommend that you maintain your process templates in a repository for version control.  

[![Export process](_img/cust-wit-form-export-process.png)](import-process/import-process.md#export-process)[![Edit XML definition file(s)](_img/cust-wit-form-edit-def-file.png)](reference/weblayout-xml-elements.md)[![Import process](_img/cust-wit-form-import-process.png)](import-process/import-process.md)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  