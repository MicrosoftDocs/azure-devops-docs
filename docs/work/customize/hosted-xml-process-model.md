---
title: Hosted XML process model | TFS
description: Guide to configuring and customizing work tracking features for the Hosted XML process model 
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 08/02/2017
---



<a id="inheritance"> </a> 
# Hosted XML process model  

**Team Services**

<a id="hosted-xml-process-model">  </a>
### Hosted XML process model  
You can perform the following tasks with the Hosted XML process model. 

<div style="float:left;width:245px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Fields</p>

<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Add or modify a field](add-modify-field.md)</li>
<li style="margin-bottom:2px">[Add a checkbox (Boolean) field](add-modify-field.md#boolean-field) </li>
<li style="margin-bottom:2px">[Add rules to a field](add-modify-field.md#add-rules)</li>
<li style="margin-bottom:2px">[Change a field label](add-modify-field.md#change-label)</li>
<li style="margin-bottom:2px">[Add a custom control field](add-modify-field.md#custom-control)</li>
<li style="margin-bottom:2px">[Remove a field from a form](add-modify-field.md#change-label)</li>
</ul>

</div>

<div style="float:left;width:245px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Pick lists</p>

<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Area paths & iteration paths](#shared-resources)</li>
<li style="margin-bottom:2px">[State or Reason fields (customize workflow)](../reference/change-workflow-wit.md)</li>
<li style="margin-bottom:2px">[Person-name field (add users)](../../setup-admin/add-users.md) </li>
<li style="margin-bottom:2px">[Add a custom pick list](add-modify-field.md#picklist)</li>
<li style="margin-bottom:2px">[Predefined field](add-modify-field.md#picklist)</li>
<li style="margin-bottom:2px">[Resolution State or Failure Type](#test-experience)</li>
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
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Backlogs and process configuration</p>
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
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Process template</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Import a process template](../import-process/import-process.md#import-from-TFS)</li>
<li style="margin-bottom:2px">[Export a process template](../import-process/import-process.md#export-process)</li>
<li style="margin-bottom:2px">[Customize a process template](../import-process/customize-process.md)</li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

<a id="hosted-xml-sequence"></a>
## Customization sequence for Hosted XML process model
 
Use the following sequences when you manage your Team Services through the Hosted XML process model. This sequence requires you to update your team project by updating the process template that it uses. We recommend that you maintain your process templates in a repository for version control.  

[![Export process](_img/cust-wit-form-export-process.png)](../import-process/import-process.md#export-process)[![Edit XML definition file(s)](_img/cust-wit-form-edit-def-file.png)](../reference/weblayout-xml-elements.md)[![Import process](_img/cust-wit-form-import-process.png)](../import-process/import-process.md)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  
