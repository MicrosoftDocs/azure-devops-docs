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


You can perform the following tasks when you work with the On-prem XML process model. 

<div style="float:left;width:245px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Fields</p>

<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Add or modify a field](add-modify-field.md)</li>
<li style="margin-bottom:2px">[Add a checkbox (Boolean) field](add-modify-field.md#boolean-field) (TFS 2017.2)</li>
<li style="margin-bottom:2px">[Add rules to a field](add-modify-field.md#add-rules)</li>
<li style="margin-bottom:2px">[Change a field label](add-modify-field.md#change-label)</li>
<li style="margin-bottom:2px">[Add a custom control field](add-modify-field.md#custom-control)</li>
<li style="margin-bottom:2px">[Remove a field from a form](add-modify-field.md#change-label)</li>
<li style="margin-bottom:2px">[Change a field attribute](add-modify-field.md#change-attribute)</li>
<li style="margin-bottom:2px">[Add fields that integrate with test, build, and version control](add-modify-field.md#integration-fields)</li>

<li style="margin-bottom:2px">[Delete a field](add-modify-field.md#delete-field)</li>
 </ul>
</div>
<div style="float:left;width:245px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Pick lists</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Area paths](set-area-paths.md)</li>
<li style="margin-bottom:2px">[Iteration paths](set-iteration-paths-sprints.md)</li>
<li style="margin-bottom:2px">[Add a custom pick list](add-modify-field.md#picklist)</li>
<li style="margin-bottom:2px">[Modify a pre-defined pick list](add-modify-field.md#picklist)</li>
<li style="margin-bottom:2px">[State or Reason fields (customize workflow)](../reference/change-workflow-wit.md)</li>
<li style="margin-bottom:2px">[Person-name field (add users)](../../setup-admin/add-users.md) </li>
<li style="margin-bottom:2px">[Resolution State & Failure Type](#test-experience)</li>
<li style="margin-bottom:2px">[Define global lists](../reference/define-global-lists.md)</li>
</ul>
</div>
<div style="float:left;width:215px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Work item types</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Add or modify a work item type](add-modify-wit.md)</li>
<li style="margin-bottom:2px">[Change the workflow (States, Reasons, Transitions)](../reference/change-workflow-wit.md)</li>
<li style="margin-bottom:2px">[Customize the form](../reference/change-work-item-form-layout.md)</li>
<li style="margin-bottom:1px">[Specify the WIT color](../reference/process-configuration-xml-element.md#wit-colors)</li>
<li style="margin-bottom:1px">[Specify the WIT icon](../reference/process-configuration-xml-element.md)</li>
<li style="margin-bottom:1px">[Specify the workflow state color](../reference/process-configuration-xml-element.md#state-colors)</li> 
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

<div style="float:left;width:245px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Backlogs & Process configuration</p>

<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Add WITs to backlogs or boards](add-wits-to-backlogs-and-boards.md)</li>
<li style="margin-bottom:2px">[Add portfolio backlogs](add-portfolio-backlogs.md)</li>

<li style="margin-bottom:1px">[Configure the quick add panel](../reference/process-configuration-xml-element.md#add)</li>
<li style="margin-bottom:1px">[Configure the default backlog columns](../reference/process-configuration-xml-element.md#columns)</li>
<li style="margin-bottom:1px">[Set maximum number of task board items](../reference/process-configuration-xml-element.md#number_items)</li>
<li style="margin-bottom:1px">[Set default weekend days (Scrum)](../reference/process-configuration-xml-element.md#weekend_days) </li>
<li style="margin-bottom:1px">[Set default bug management behavior](../reference/process-configuration-xml-element.md#behaviors)  </li> 
<li style="margin-bottom:1px">[Set default hidden backlogs](../reference/process-configuration-xml-element.md#behaviors) </li>
<li style="margin-bottom:2px">[Process configuration](../reference/process-configuration-xml-element.md)</li>
<li style="margin-bottom:2px">[Categories](../reference/categories-xml-element-reference.md)</li>
</ul>

</div>
<div style="float:left;width:245px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Process templates</p>

<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Customize](../reference/process-templates/customize-process.md)</li>
<li style="margin-bottom:2px">[Manage (upload/download)](../guidance/manage-process-templates.md)</li>
<li style="margin-bottom:2px">[Maintenance and upgrade implications](#before-you-customize)</li>

</ul>
</div>

<div style="float:left;width:215px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Link types</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Add a custom link type](../reference/link-type-element-reference.md)</li>
<li style="margin-bottom:2px">[Delete a custom link type](../reference/witadmin/manage-link-types.md)</li>
<li style="margin-bottom:2px">[Deactivate/activate a custom link type](../reference/witadmin/manage-link-types.md)</li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

<a id="on-prem-xml-sequence"></a>
#### Customization sequence for On-premises XML process model

When you manage an on-premises TFS, you perform most customizations using the following sequence. This sequence supports updating the XML definition for WIT, global lists, process configuration, and categories. This sequence supports individual updates through the import of their respective modified XML definition files. We recommend that you maintain your XML definition files in a repository for version control.  


[![Export XML definition file](_img/cust-wit-form-export-def-file.png)](#witadmin)[![Edit XML definition file](_img/cust-wit-form-edit-def-file.png)](../reference/weblayout-xml-elements.md)[![Import WIT definition file](_img/cust-wit-form-import-def-file.png)](#witadmin)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  

In addition, you can use the **witadmin** tool to list objects, rename WITs, permanently remove WITs, and more.  
 
[!INCLUDE [temp](../_shared/process-editor.md)]  


