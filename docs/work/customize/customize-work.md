---
title: Customize your work tracking experience | Team Services & TFS
description: Guide to configuring and customizing work tracking features in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) 
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: D1B44480-F88B-4F35-927A-11ADFBCBAA23
ms.manager: douge
ms.author: kaelli
ms.date: 06/23/2017
---

# Customize your work tracking experience 

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013 </b> 

As you plan and track your project, you'll find you may want to configure a feature or customize your experience to meet your team's tracking needs. You configure teams and team Agile tools through the web portal administration context. The method you use to customize team projects, which impacts all teams, depends on the process model you use.  

Customizations you make occur at one of three levels:   

- **Team project level**: Add or modify work item types, data fields, backlog levels, and other objects shared across teams  
- **Object level**: Grant or restrict access to work tracking tools, which includes setting permissions for objects and the team project and assigning users or groups to specific access levels.  

>[!NOTE]  
>If you're new to tracking work in Team Services or TFS, see [Get started with Agile tools to plan and track work](../overview.md). 



<a id="shared-resources"></a>
## Shared resources  

Each team project provides a number of shared resources that support all teams added to the project. You configure these features through the user interface or the admin context of the web portal. 

<div style="float:left;width:300px;margin:8px;font-size:90%">

<p><b>Area path pick lists</b></p>
<p>Change the [pick list of area paths](set-area-paths.md) to support grouping work items by team, product, or feature area. </p>
![Hierarchical area paths](../../_img/alm-feature-area-paths.png)   


</div>

<div style="float:left;width:300px;margin:8px;font-size:90%">

<p><b>Sprint/iteration pick lists</b></p>
<p>Change the [pick list of iteration paths](../scrum/define-sprints.md) to support grouping work into sprints, milestones, or other event-specific or time-related period. Activate sprints for each team. </p>
![Iterations or sprints](../../_img/alm-feature-define-sprints.png)  
</div>

<div style="clear:left;font-size:100%">
</div>



<div style="float:left;width:300px;margin:8px;font-size:90%">
<p><b>Shared queries</b></p>

<p>Open shared queries or create your own query using the query editor [to list work items or show hierarchical or dependent items](../track/using-queries.md).  </p>
![Shared queries](_img/customize-work-shared-queries-min.png)  
</div>

<div style="float:left;width:300px;margin:8px;font-size:90%">
<p><b>Tags</b></p>
<p>[Add tags to work items](../track/add-tags-to-work-items.md) to filter backlogs and queries</p>
![Add tags to filter backlogs, boards, and queries](_img/alm-feature-tags.png)  
</div>

<div style="clear:left;font-size:100%">
</div>



<a id="process-models"></a>

## Team projects and process customizations  

Your team project determines the objects available to tracking work and the configuration of Agile tools. Specifically, the team project determines the work item types (WITs)&mdash;user stories, tasks, bugs&mdash; and the data fields used to capture information. Customized objects are shared across teams added to the team project.  

>[!NOTE]  
>The method you use to customize work tracking depends on the process model you subscribe to: 
>- **Inheritance**: Supports WSIWIG customization, available for Team Services only  
>- **Hosted XML**: Supports customization through import/export of process templates, available for Team Services only    
>- **On-premises XML**: Supports customization through import/export of XML definition files for work tracking objects      
 
The following table summarizes the differences between the three supported process models. For definitions of the main work tracking objects, see [Agile glossary](../concepts/agile-glossary.md).  

<table width="90%">
<tr valign="bottom">
<th width="50%">Feature </th>
<th >Inheritance</th>
<th >Hosted XML</th>
<th >On-premises XML</th>
</tr>

<tbody valign="top" align="center">

<tr>
<td align="left">WYSIWYG editing</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td> </td>
<td> </td>
</tr>

<tr>
<td align="left">Create inherited custom processes</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td></td>
<td> </td>
</tr>

<tr>
<td align="left">Create custom process templates (see note 1)</td>
<td> </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Inherit changes in system processes (Agile, Scrum, CMMI)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td> </td>
<td> </td>
</tr>


<tr>
<td align="left">Updated process changes automatically apply to team projects</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td> </td>
</tr>

<tr>
<td align="left">Basic customizations supported (fields, workflow, work item types, backlog levels)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Advanced customizations supported (custom link types, global lists, global workflow, team fields)</td>
<td> </td>
<td>(see note 2)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Use the [**witadmin** command-line tools](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md) to edit team projects</td>
<td> </td>
<td> </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Use the **witadmin** command-line tools to list information about team projects</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">REST API (read)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">REST API (write)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td> </td>
<td> </td>
</tr>

</tbody>
</table>

**Notes:**
1. A process determines the building blocks used to track work. A process template specifies an interdependent-related set of XML definition files that provide the building blocks and initial configuration for tracking work and other functional areas.     
2. Hosted XML customization supports adding and updating global lists with a process update (subject to limits on maximum size of each list). To learn more, see [Work tracking object limits](object-limits.md).  

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

>[!NOTE]  
>With the Inheritance process model, you can't modify the pick-lists of pre-defined fields&mdash;such as [Activity](../track/query-numeric.md), [Automation Status](../track/build-test-integration.md), [Discipline](../track/query-numeric.md), [Priority](../track/planning-ranking-priorities.md), plus others.  


#### Customization sequence for Inheritance process model
Use this sequence when you manage your Team Services customization through the Inherited process model. You belong to this phase when your Process user interface appears as shown under [Manage processes](../process/manage-process.md). 

[![Create an inherited process](_img/customize-work-phase2-step1.png)](../process/manage-process.md#create-inherited-process)[![Customize the inherited process](_img/customize-work-phase2-step2.png)](../process/customize-process.md)[![Apply inherited process to team project(s)](_img/customize-work-phase2-step3.png)](../process/manage-process.md#migrate)![Refresh and verify changes](_img/customize-work-phase2-step4.png)  


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
#### Customization sequence for Hosted XML process model
 
Use the following sequences when you manage your Team Services through the Hosted XML process model. This sequence requires you to update your team project by updating the process template that it uses. We recommend that you maintain your process templates in a repository for version control.  

[![Export process](_img/cust-wit-form-export-process.png)](../import-process/import-process.md#export-process)[![Edit XML definition file(s)](_img/cust-wit-form-edit-def-file.png)](../reference/weblayout-xml-elements.md)[![Import process](_img/cust-wit-form-import-process.png)](../import-process/import-process.md)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  


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


<a id="access-permissions"></a>
## Grant or restrict access to work tracking tools  

You can grant or restrict access to select features and functions through the web portal. When you add user accounts to your team, they're automatically added to the Contributor group. They then have access to most of the features they'll need to contribute to code, work tracking, builds, and test. However, the Contributor group doesn't allow users to create shared queries or to add area or iteration paths. You have to grant these permissions separately.  

For a simplified view of the most common, default permissions and access assignments, see [Permissions and access](../../setup-admin/permissions-access.md). If you're new to managing permissions, see [Permissions and groups reference, Inheritance](../../setup-admin/permissions.md#inheritance).

Otherwise, to grant or restrict access to select features or functions, review one of these topics: 
 
<div style="float:left;width:230px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Manage access </p>
- [Add team members (Team Services)](../../setup-admin/team-services/add-team-members-vs.md)    
- [Add team members (TFS)](../scale/multiple-teams.md#add-team-members)    
- [Stakeholder access](../connect/change-access-levels.md)    
- [Advanced access level](../connect/change-access-levels.md)    
 
</div>

<div style="float:left;width:280px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Permissions </p>
- [Area path permissions](../how-to/set-permissions-access-work-tracking.md#set-permissions-area-path)     
- [Process permissions](../process/manage-process.md#process-permissions)   
- [Work item query and folder permissions](../track/set-query-permissions.md)   
- [Dashboard permissions](../../report/dashboards.md#set-permissions)   
- [Plan permissions](../scale/review-team-plans.md#plan-permissions) (Team Services)   
- [Tagging permissions](../../setup-admin/permissions.md#tags)   
- [Test permissions](../../setup-admin/permissions.md#project_test)   
- [Restrict access](../../setup-admin/restrict-access-tfs.md)    
   
</div>


<div style="float:left;width:120px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Shared resources</p>
- [Alerts](../track/alerts-and-notifications.md)    
- [Area paths](set-area-paths.md)   
- [Iteration paths](set-iteration-paths-sprints.md)   
- [Queries](../track/using-queries.md)   
- [Tags](../track/add-tags-to-work-items.md)   
   
</div>

<div style="clear:left;font-size:100%">
</div>




##Related notes

Learn more about how to use work tracking to plan, manage, and monitor your projects:  

- [Configure team settings](../scale/manage-team-assets.md)  
- [**witadmin** command-line tools](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)
- [Agile tools](../overview.md)  
- [Agile project management, get started](../overview.md)   
- [Scrum](../guidance/scrum-process.md) | [Agile](../guidance/agile-process.md) | [CMMI](../guidance/cmmi-process.md) processes and process templates  
- [Configure features after an upgrade](configure-features-after-upgrade.md) (TFS only)    


###Additional options 
Do you want to customize your tools in a way that's not supported?  

Here are a few options available to you:  

- Check out [Marketplace extensions](https://marketplace.visualstudio.com/VSTS) to see if there's a tool available for your purposes  
- Determine if a [Service hook](../../service-hooks/get-started.md) will satisfy your needs  
- Create your own tool using [REST APIs](../../../integrate/api/overview.md)  
- Add your feature request to our [Team Services user voice page](https://visualstudio.uservoice.com/forums/330519-team-services) page.      


<a id="test-experience"></a>
###Customize the test experience (TFS)  

Several WITs support the test experience within the web portal Test hub and Test Manager client. You can customize these WITs as you would any other WIT. The following image illustrates the support link relationships.  

  ![Test management work item types](../guidance/_img/ALM_PT_WITS_TestExperience.png)

See the following resources for additional usage and customization information:

- [Test configurations and test variables](../../test/manual-exploratory-testing/test-different-configurations.md)  
- [Test resolution states](../reference/witadmin/tcm-customize-manage-test-experience.md) (TFS)
- [Failure types](../reference/witadmin/tcm-customize-manage-test-experience.md)  
- [Define the initial test management configuration (process template)](../reference/process-templates/define-initial-configuration-test-manager.md)
- [Query based on build and test integration fields](../track/build-test-integration.md)

<a id="person-name-field"></a>
### Change the pick list for a person-name field  
To add values for fields associated with user accounts such as **Assigned To** add users to a TFS security group or by restricting access to a group or set of users. By default, the list for the Assigned To field contains the account names for all users and groups that have been added to TFS. These accounts are often synchronized with Active Directory. See [Set up groups for use in TFS deployments](../../setup-admin/tfs/admin/setup-ad-groups.md). To limit the names of accounts in a list, see [Limit the number of names that appear in the Assigned To field](#limit-account-names). 

### Less common customizations   
You can only perform the following customizations when working with the Hosted XML or On-premises XML process models. The customizations made to process configuration apply to all teams added to the team project.  

<a id="limits">  </a>
#### Backlog and board limits (Hosted XML, On-premises XML) 

To limit the display load time to acceptable parameters, the task board is restricted to a maximum of 1000 work items. For details, see [Process configuration XML element reference](../reference/process-configuration-xml-element.md). 

You can increase this value up to a maximum of 1500 by specifying a value for the `workItemCountLimit` attribute of the **TaskBacklog** element. For details, see [Process configuration XML element reference](../reference/process-configuration-xml-element.md#backlog_page). 

    <TaskBacklog category="Microsoft.TaskCategory" pluralName="Tasks" singularName="Task" workItemCountLimit="800" >
    . . .
    </TaskBacklog>
 



<a id="assign-fields">  </a>
#### Change field assignments (Hosted XML, On-premises XML) 

You can change the work item fields that are used in calculating capacity, burndown charts, forecasting, and velocity. Any change you make to one of the default assignments should correspond to a change made to the WIT used to define and capture information for that value. 

For example, if you change the `refname` assigned to `type="Activity"` then you should include the same field in the WIT definition assigned to the Task Category which captures the activity information. For details, see [Process configuration XML element reference](../reference/process-configuration-xml-element.md#fields). 

The fields you assign are used by the following tools: 

| Tool | Field type |  
| ----- | ---------- |  
| Task board, capacity tools, sprint burndown | Remaining work | 
| Product and portfolio backlogs | Backlog priority | 
| Velocity and forecast | Effort (maps to Story Points, Effort, or Size) | 
| Task board, capacity tools | Remaining work | 
| Capacity tools | Activity (Task Activity or Discipline) | 


#### Use a team field (On-premises XML)  

Do you want to organize your teams using a team field instead of the area path?  

If your organization has several teams that work from a common backlog and across many product areas, you might want to [customize the team project to support team fields](use-team-fields-instead-area-paths.md). This configuration will still allow teams to work independently, but work can be assigned to teams instead of by product area path.  


<a id="before-you-customize"></a>
### Maintenance and upgrade implications (TFS)
Before you customize, you should understand how your customizations may impact your team project when you upgrade your application-tier server.  

Upgrades to an on-premises TFS can introduce new features that require updates to the objects used to track work. These objects include work item types, categories, and process configuration. Minimizing changes to the workflow for a WIT or the process configuration can help minimize the work you must do when you upgrade your TFS. 

To minimize the amount of manual work you'll need to do after a TFS upgrade, understand which customizations support an easy update path and which do not. 


<div style="float:left;width:350px;margin:8px;font-size:90%">
<p><b>Compatible for quick updating</b></p>
<p>With the following customizations, you can use the Configure Features Wizard to automatically apply any changes to your team project required for new features. </p>

<ul>
<li>Fields: Add custom fields, customize a pick list, add or modify area and iteration paths, add rules to a field  </li>
<li>WITs: Add custom WITs, change the form layout</li>
<li>Categories: Add custom categories  </li>
<li>Agile tools: Customize the columns on the Kanban board, customize the quick add panel  </li>
<li>Office integration: Add or change how Project fields map to TFS fields   </li>
</ul>

<p>To learn more about the Configure Features Wizard, see [Configure features after an upgrade](configure-features-after-upgrade.md).</p>

</div>

<div style="float:left;width:350px;margin:8px;font-size:90%">
<p><b>Compatible, but may require manual updates</b></p>



<p>The Configure Features Wizard requires that specific work item types, workflow states, and fields exist in the team project. When you make the following customizations, you might need to modify your custom process for the wizard to run, or you might have to update your team project manually. </p>

<ul>
<li>Fields: Change attributes of an existing field, remove fields that are referenced in the process configuration </li>
<li>WITs: Change the workflow </li>
<li>Agile tools: Change the WITs defined for the Requirement Category, Task Category, or Feature Category.</li>
<li>Agile tools: Change the metastate mapping defined in the process configuration.  </li>
<li>Agile tools: Change a field specified for a ```TypeField``` in the process configuration.   </li>
</ul>

<p>In addition, changes you make to WITs or the workflow could require updates to other artifacts provided with your process, such as Excel or SQL Server Reporting Services reports.</p>
</div>

<div style="clear:left;font-size:100%">
</div>

 

#### Customizations to avoid
You should avoid making the following customizations because they can result in schema conflicts in the data warehouse or cause problems when updating team projects after a TFS upgrade. 

*	Fields:  
	*	Change the friendly name of a field (a field specified within a WIT definition file)  
	*	Change one or more reporting attributes, or the attribute to synchronize person names with Active Directory of a default field  
*	WITs: Rename or delete WITs 
*	Categories: Change the name of default categories, or change the WITs specified within default categories  

To learn more about reporting attributes, see [Add or modify work item fields to support reporting](http://msdn.microsoft.com/library/ee921481.aspx).

#### Recommended practices  
*	Identify the best options for customizing WITs that support your tracking requirements. When you change objects that track work items, you should identify how these changes will affect existing and future team projects.  
*	Put processes and all XML definition files under version control. Do not deploy objects that you define but have not stored in a repository.  
*	Test your customized objects just as you would test your software.  
*	Minimize the number of custom fields that you introduce. Minimize the number of fields that you make reportable.   


<!---
 


<a id="field-reference">  </a>  
### What is a field? How are field names used?  

For descriptions and usage of each field defined for the core system processes&mdash;[Scrum, Agile, and CMMI system processes](../guidance/choose-process.md)&mdash;see [Work item field index](../guidance/work-item-field.md).  

#### Field names  
A work item field name uniquely identifies each work item field. Make sure your field names fall within these guidelines:  

- Field names must be unique within the account/project collection  
- Field names must be 128 or fewer Unicode characters  
- Field names can't contain any leading or trailing spaces, nor two or more consecutive spaces  
- Field names must contain at least one alphabetic character  
- Field names can't contain the following characters: ```.,;'`:~\/\*|?"&%$!+=()[]{}<>```.   

Because custom fields are defined for the account collection, you can't add a custom field to a process with the same field name that you add to another inherited process.  

#### Customization limits 
When adding custom fields, note the following limits:  
*   A maximum of 256 fields can be defined for each WIT  
*   A maximum of 512 fields can be defined per process   
*   
-->

[add-team-members]: ../scale/multiple-teams.md#add-team-members
[add-team-admin]: ../scale/team-assets.md#add-team-admin

 
  

[!INCLUDE [temp](../_shared/help-support-shared.md)]

<!--- ADDRESS THESE VERBATIMS: 
Configure bug reporting
Add a column to a board 

--> 

