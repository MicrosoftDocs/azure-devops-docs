---
title: Index to work tracking customization topics | Team Services & TFS
description: Index to topics for customizing your work tracking experience in VSTS and and Team Foundation Server (TFS)  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: F6973385-2CEF-403A-B3AA-45DB7C436AF1
ms.manager: douge
ms.author: kaelli
ms.date: 06/23/2017
---

# Customize your work tracking experience 

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013 </b>


How to make this simple? 

## Quickstarts 

- [Add a custom field](add-custom-field.md)
- [Add a custom work item type](add-custom-wit.md)  

## Tutorials  

Tutorials are provided for customizing work tracking based on each of the three supported process models. Customization at this level is made for specific team projects. 

<a id="inheritance"> </a> 
### Inheritance process model  
You can perform the following tasks with the Inheritance process model. 

<div style="float:left;width:235px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Fields</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Add a custom field](../process/customize-process-field.md)</li>
<li style="margin-bottom:2px">[Add a person-name or Identity field](../process/customize-process-field.md#identity)</li>
<li style="margin-bottom:2px">[Add a rich-text field](../process/customize-process-field.md#html)</li>
<li style="margin-bottom:2px">[Add a checkbox (Boolean) field](../process/customize-process-field.md#boolean-field)</li>
<!--- <li style="margin-bottom:2px">Add rules to a field (currently not supported)</li> -->
<li style="margin-bottom:2px">[Change a field label](../process/customize-process-field.md)</li>
<li style="margin-bottom:2px">[Remove a field from a form](../process/customize-process-field.md)</li>
<li style="margin-bottom:2px">[Add a custom control field](../process/custom-controls-process.md)</li>
<li style="margin-bottom:2px">[Delete a field](../process/customize-process-field.md#delete-field)</li>
<li style="margin-bottom:2px">[Review fields](../process/customize-process-field.md#review-fields)</li>
</ul>
</div>
<div style="float:left;width:235px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Pick lists</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Area paths & iteration paths](#shared-resources)</li>
<li style="margin-bottom:2px">[Person-name field (add team members)](../../setup-admin/team-services/add-team-members-vs.md)</li>
<li style="margin-bottom:2px">[State or Reason fields](../process/customize-process-workflow.md)</li>
<li style="margin-bottom:2px">[Add a custom pick list](../process/customize-process-form.md)</li>
<!--- <li style="margin-bottom:2px">Predefined field (not supported) <sup>3</sup></li> -->

</ul>
</div>

<div style="float:left;width:235px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Work item types</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Add or modify a custom field](../process/customize-process-field.md)</li>
<li style="margin-bottom:2px">[Add a custom work item type](../process/customize-process-wit.md)</li>
<li style="margin-bottom:1px">[Specify the WIT color](../process/customize-process-wit.md)</li> 
<li style="margin-bottom:2px">[Customize the workflow (States)](../process/customize-process-workflow.md)</li>
<li style="margin-bottom:2px">[Customize a work item form](../process/customize-process-form.md)</li>
<li style="margin-bottom:2px">[Add a custom control](../process/custom-controls-process.md)</li>

</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

<div style="float:left;width:235px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Backlogs</p>

<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Add custom backlog levels](add-portfolio-backlogs.md)</li>
<li style="margin-bottom:2px">[Add a custom WIT to a backlog](../process/customize-process-backlogs-boards.md)</li>
<li style="margin-bottom:2px">[Show bugs on backlogs/boards](show-bugs-on-backlog.md)</li>
</ul>

</div>

<div style="float:left;width:235px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Process</p>

<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Create & manage an inherited process](../process/manage-process.md)</li>
<li style="margin-bottom:2px">[Customize a process](../process/customize-process.md)</li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>


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


<a id="on-prem-xml-process-model"></a>
### On-premises XML process model 

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
<li style="margin-bottom:2px">[Area paths & iteration paths](set-area-paths.md)</li>
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

## Concepts

- [Default processes/process templates](../guidance/choose-process.md)  

## Reference  

- [Work item field index](../guidance/work-item-field.md)  
- [Changes made to process templates](../guidance/changes-to-process-templates.md) 

### Work tracking   
- [Index to XML element reference](../reference/xml-element-reference.md)  
- [All WITD XML elements reference](../reference/all-witd-xml-elements-reference.md)  
- [All FIELD XML elements reference](../reference/all-field-xml-elements-reference.md)  
- [All WORKFLOW XML elements reference](../reference/all-workflow-xml-elements-reference.md)  
- [All FORM XML elements reference](../reference/all-form-xml-elements-reference.md)  
- [WebLayout and Control elements](../reference/weblayout-xml-elements.md) 
- [Categories XML element reference](../reference/categories-xml-element-reference.md)  
- [Process configuration XML element reference](../reference/process-configuration-xml-element.md) 
 

### Process templates     
- [Index to XML element definitions](../reference/process-templates/process-template-plug-ins-xml-elements-index.md)  
- [Process template plug-in files](../reference/process-templates/overview-process-template-files.md)  
- [Process template XML elements reference](../reference/process-templates/process-template-xml-elements-reference.md)  
- [Define the root tasks](../reference/process-templates/define-root-tasks-process-template-plug-in.md)  



### Command-line tools  

#### witadmin

- [Fields](../reference/witadmin/manage-work-item-fields.md)   
- [Work item types](../reference/witadmin/witadmin-import-export-manage-wits.md)  
  [Categories](../reference/witadmin/witadmin-import-export-categories.md)  
- [Process configuration](../reference/witadmin/witadmin-import-export-process-configuration.md)   
- [Link types](../reference/witadmin/manage-link-types.md)   
- [Global lists](../reference/witadmin/manage-global-lists-for-work-item-types.md)   
- [Global workflow](../reference/witadmin/witadmin-import-export-global-workflow.md)   
- [Work items](../reference/witadmin/remove-work-items-permanently.md)   
- [Client cache](../reference/witadmin/rebuild-client-cache.md)   


#### tcm 
- [Test case management](../reference/witadmin/tcm-customize-manage-test-experience.md)   



### TFS Only 

- [Field data types and attributes](../reference/define-modify-work-item-fields.md) 
 
### Project-to-TFS field mapping 
- [Change how fields map](../reference/add-or-change-how-project-fields-map-to-tfs-fields.md)   
- [Customize the Project field mapping](../reference/customize-project-field-mapping-file.md)   
- [Project field mappings](../reference/field-mappings-in-microsoft-project.md)   
- [Upload/download the Project mapping file](../reference/upload-or-download-the-microsoft-project-mapping-file.md)   


