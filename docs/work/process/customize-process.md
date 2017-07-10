---
title: Customize a process | Team Services  
description: Your guide to configuring and customizing work tracking processes when connecting to Visual Studio Team Services (VSTS)   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 31CA1DCB-8E3E-4B9E-A64A-D47DF23490A3   
ms.manager: douge
ms.author: kaelli
ms.date: 03/29/2017
---

# Customize a process  

[!INCLUDE [temp](../_shared/process-feature-availability.md)]

Your process provides the building blocks for tracking work. For each work item type (WIT) you want to customize, you do so from the WIT's **Process>Layout** page. If you haven't [created an inherited process](manage-process.md) yet, do that now. You can only customize inherited processes.   

Any changes you make to the inherited process will automatically show up in the team projects that use that process. 

For example, the following image shows the work item form layout for the Bug WIT. From this page, you can add fields, groups, pages, and custom controls. To modify the workflow, you click **States**.

<img src="_img/cprocess-intro.png" alt="Admin context, Process, Work item types, bug type, layout tab" style="border: 1px solid #CCCCCC;" /> 


<a id="what-you-can-customize">  </a>
## What you can customize

You can customize the elements listed below. Some options of inherited elements are locked and can't be customized. To perform any of these actions, you must be a member of the Project Collection Administrators group or be [granted explicit permissions to edit a specific process](manage-process.md#process-permissions).  

>[!NOTE]  
>For a list of limits placed on the number of fields, work item types, backlog levels, and other objects you can customize, see [Work tracking object limits](../customize/object-limits.md). 


### Fields

Choose your inherited process, the work item type and then add and edit fields from the **Layout** page. Customizations are subject to the guidelines and limitations outlined under [What is a field?](customize-process-field.md#field-reference).


<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">![Inherited field](_img/inherited-icon.png) **Inherited fields:**</p>
- [Change the field label](customize-process-field.md#rename-field)    
- [Show/Hide field on form](customize-process-field.md#show-hide-field)     
</div>

<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">**Custom fields:**</p>
- [Add a custom field](customize-process-field.md#add-field)   
- [Add pick list (drop-down menu)](customize-process-field.md#pick-list)   
- [Add person-name/Identity](customize-process-field.md#identity)   
- [Add a rich-text (HTML) field](customize-process-field.md#html)    
- [Add a checkbox (Boolean) field](customize-process-field.md#boolean-field)  
- [Add a custom control](custom-controls-process.md)   
   
</div>

<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">&nbsp;&nbsp;&nbsp;</p>
- [Change the field label](customize-process-field.md#rename-field)  
- [Set Required/Default options](customize-process-field.md#options)   
- [Move the field within the layout](customize-process-form.md#move-field)  
- [Remove field from form](customize-process-field.md#remove-field)      
- [Delete field](customize-process-field.md#delete-field)  
</div>

<div style="clear:left;font-size:100%">
</div>


### Work item types

Choose your inherited process, and then add or edit a work item type from the **Work item types** page.

<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">![Inherited field](_img/inherited-icon.png) **Inherited WITs:**</p>
- [Add/remove custom fields](customize-process-field.md)  
- [Add/remove custom groups](customize-process-form.md#groups)   
- [Add/delete custom pages](customize-process-form.md#pages)    
- [Add/remove a custom control](custom-controls-process.md)     
- [Enable/disable](customize-process-wit.md#enable-disable)  
- </div>

<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">**Custom WITs:**</p>
- [Add custom WIT](customize-process-wit.md#add-wit)     
- [Change color or description](customize-process-wit.md#overview)    
- [Add/remove custom fields](customize-process-field.md)  
- [Add/remove custom groups](customize-process-form.md#groups)    
- [Add/delete custom pages](customize-process-form.md#pages)    
- [Add/remove a custom control](custom-controls-process.md)  
  
</div>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">&nbsp;&nbsp;&nbsp;</p>
- [Add, edit, or remove a workflow state](customize-process-workflow.md#states)   
- [Enable/disable](customize-process-wit.md#enable-disable)        
- [Delete](customize-process-wit.md#destroy)    
</div>

<div style="clear:left;font-size:100%">
</div>


### Web form layout  

Choose your inherited process and the work item type, and then modify the form from the **Layout** page.

<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">![Inherited field](_img/inherited-icon.png) **Inherited groups:**</p>
- [Relabel](customize-process-form.md#groups)   
- [Add/remove custom fields](customize-process-field.md)   
- [Show/hide fields](customize-process-field.md#remove-field)    
</div>


<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">**Custom groups:**</p>
- [Add, modify, re-sequence, delete](customize-process-form.md#groups)    
- [Add/remove custom fields](customize-process-field.md)     
- [Add/Hide a group extension](custom-controls-process.md)   
</div>


<div style="clear:left;font-size:100%">
</div>

<br/>
<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">![Inherited field](_img/inherited-icon.png) **Inherited pages:**</p>
- [Relabel](customize-process-form.md#pages)     
- [Add/remove custom fields](customize-process-field.md)   
- [Add/remove a custom group](customize-process-form.md#groups)  
</div>

<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">**Custom pages:**</p>
- [Add, modify, re-sequence, delete](customize-process-form.md#pages)   
- [Add/delete custom fields](customize-process-field.md)   
- [Add/Hide a page extension](custom-controls-process.md)   
</div>

<div style="clear:left;font-size:100%">
</div>



###Workflow states

Choose your inherited process, the work item type, and then modify the workflow from the **States** page.  

<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">![Inherited field](_img/inherited-icon.png) **Inherited states:**</p>
- [View workflow states](customize-process-workflow.md#hide-state)   
- [Hide a state](customize-process-workflow.md#hide-state)       
</div>

<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">**Custom states:**</p>
- [Add a state](customize-process-workflow.md#add-states)   
- [Edit a state (change color or category)](customize-process-workflow.md#edit-state)   
- [Remove a state](customize-process-workflow.md#remove-state)   
</div>

<div style="clear:left;font-size:100%">
</div>

### Backlogs 
Choose your inherited process, and then modify the backlogs configuration from the **Backlog levels** page. Inherited backlogs aren't locked. 

<div style="float:left;width:210px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">![Inherited field](_img/inherited-icon.png) **Inherited backlogs:**</p>
- [Add a custom WIT](customize-process-backlogs-boards.md)  
- [Change the default WIT](customize-process-backlogs-boards.md)  
- [Rename the requirement backlog](customize-process-backlogs-boards.md#edit-product-backlog)  
- [Rename a portfolio backlog](customize-process-backlogs-boards.md#edit-portfolio-backlog)  
</div>

<div style="float:left;width:300px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:2px;text-align:center;">**Custom backlogs:**</p>
- [Add a portfolio backlog which displays custom WITs](customize-process-backlogs-boards.md#portfolio-backlogs)  
- [Edit or rename a portfolio backlog](customize-process-backlogs-boards.md#edit-portfolio-backlog)    
- [Delete the top-level custom portfolio backlog](customize-process-backlogs-boards.md#edit-portfolio-backlog) 

</div>

<div style="clear:left;font-size:100%">
</div>



<a id="start-customizing">  </a>
## Start customizing  
The easiest way to start customizing a process is to start from the work item of the type you want to customize. 

0. From the web portal, open the WIT you want to customize, open the context menu, and choose the Customize. 

	<img src="_img/cprocess-web-form-user-story-choose-customize.png" alt="Web portal, web form, open context menu, choose Customizee" style="border: 1px solid #CCCCCC;" />  

	- If the team project already uses an inherited process, then the **Layout** page for the corresponding WIT will open. 

		For example, the MyAgile process, User Story WIT, Layout page appears.   

		<img src="_img/cprocess-myagile-user-story-layout.png" alt="Web portal, web form, open context menu, choose Customize" style="border: 1px solid #CCCCCC;" />  

		>[!NOTE]  
		>The **Add custom control** option only appears when [qualifying extensions have been added from the Marketplace](custom-controls-process.md). 

	- If the team project uses a system process, but a valid inherited process has been defined, then you have the option to select which inherited process you want the team project to use. 

	 	<img src="_img/cprocess-choose-inherited-process.png" alt="Web portal, Choose process dialoge" style="border: 1px solid #CCCCCC;" /> 

		Upon choosing, the Layout page for the corresponding process and WIT opens.

	- If the team project uses a system process, and no valid inherited process have been defined, then the system will automatically create an inherited process, labeling it *AccountName_ParentProcessName*&mdash;for example, *fabrikam Agile*&mdash;and automatically update the team project to use the process. You can later [rename the process](manage-process.md#process-naming).  

		After which, the Layout page for the corresponding process and WIT opens.
  
0. From the Layout page, you can customize the WIT. Review the next section for a summary of all the customizations you can make. 

<a id="open-process">  </a>
###Open the Process hub from the user context  

You can also start customizing an inherited process by navigating to the inherited process from the user context. 

0. To open the admin context from the user context, click the ![](../_img/icons/gear_icon.png) gear Settings icon and choose Account settings. 

	>[!IMPORTANT]  
	>If you don't see the Account settings option, then you are working from an on-premises TFS. The Process page isn't supported. You must use the features supported for the On-premises XMl process model as described in [Customize your work tracking experience](../customize/customize-work.md).

	<img src="../process/_img/manage-process-open-account-settings.png" alt="Default Collection Overview, Projects reference processes" style="border: 1px solid #CCCCCC;" /> 

0. Click Process and then select the inherited process you want to customize. If you haven't yet created an inherited process, do that now. See [Create an inherited process](../process/manage-process.md#create-inherited-process).  

	<img src="../process/_img/cpfield-choose-select-process.png" alt="Web portal, Account menu, Turn on new navigation selection" style="border: 1px solid #CCCCCC;" />  

0. From the Work Item Types page, choose the WIT that you want to customize.  

	Here we open Bug for the MyAgile process.</p> 

	<img src="../process/_img/cpfield-choose-wit.png" alt="Process page, WITs" style="border: 1px solid #CCCCCC;" />

### Web versus Visual Studio form layouts 

The customizations you make only impact the work item forms displayed in a web browser. The work item forms displayed in Visual Studio or other [supported clients](../../tools.md) won't reflect any process customizations you make.    


<a id="return-process-overview">  </a>
## Return to the process list  
To return to the Process page, simply click the Process hub or the **All processes** breadcrumb link.   

<img src="_img/cprocess-open-all-processes.png" alt="Return to process overview page" style="border: 1px solid #CCCCCC;" />  

To return to a specific process and choose another WIT to customize, click the process name from the breadcrumb link.  

## Related notes

Keep in mind that all team projects that reference the inherited process that you're customizing will automatically update to contain the modifications you make. 

To customize a single team project, always start by [creating an inherited process and changing the team project to use that process](manage-process.md). Then, all the customizations that you make to the inherited process automatically appear for the team project you migrated.  

See also: 
- [Work tracking object limits](../customize/object-limits.md)
- [Customize the work tracking experience](../customize/customize-work.md) 

<a id="process-rest-api">  </a>
### Programmatically query for processes 

You can determine the processes defined for an account using the REST API: [Processes](../../../integrate/api/tfs/processes.md).

[!INCLUDE [temp](../_shared/help-support-shared.md)]

[!INCLUDE [temp](../_shared/custom-help.md)]




