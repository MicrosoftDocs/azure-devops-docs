---
title: Add a custom field to an inherited process
titleSuffix: Azure DevOps Services
description: Add a custom work item type for an Inheritance process model and apply to a project  
ms-custom: inherited-process
ms.technology: devops-agile
ms.prod: devops
ms.assetid: DBF41880-62A4-43A9-9A31-8DB701EB888E
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= azure-devops-2019'
ms.date: 02/11/2019
---

# Add a custom work item type (Inheritance process)     

[!INCLUDE [temp](../../../boards/_shared/version-vsts-plus-azdevserver-2019.md)]

You use different work item types (WITs) to plan and track different types of work. The main reason you add a custom WIT is to customize the web form and workflow states to meet specific business use cases. Or, you can customize an existing WIT. Your project contains 9 or more WITs that you can customize, based on the process used to create your project.  

[!INCLUDE [temp](../_shared/note-on-prem-link.md)]

For example, you may want to capture customer issues in a custom WIT labeled Ticket.   

> [!div class="mx-imgBorder"]  
> ![Custom Ticket work item form](_img/process/custom-wit-new-ticket-form.png)

To learn more about what you can customize, see [About process customization and inherited processes](inheritance-process-model.md). 


> [!TIP]    
> To customize a single project, always start by [creating an inherited process and migrating project(s) to that process](manage-process.md). Then, all the customizations that you make to the inherited process automatically appear for the project you migrated.


[!INCLUDE [temp](../_shared/process-prerequisites.md)] 

[!INCLUDE [temp](../_shared/open-process-admin-context-ts.md)]

[!INCLUDE [temp](../_shared/create-inherited-process.md)] 

<a id="add-wit">  </a>
## Add a work item type

0. From the **Work Item Types** page, choose the ![ ](../../../_img/icons/blue-add-icon.png) **New work item type**.

	<img src="_img/process/cpwit-add-new-wit.png" alt="Process, Inherited process, Work Item Types, Add new work item type" style="border: 2px solid #C3C3C3;" />
 
1. Name the WIT and optionally specify a description, icon and color. The icon and color you specify appear throughout the web portal, including on the work item form and when associated work items appear on a backlog, boards, query results, and more. 

	<img src="_img/process/cwit-create-wit-ticket.png" alt="Create new work item type dialog" style="border: 1px solid #C3C3C3;" /> 

	Click **Create** to save. 

	Each new WIT comes predefined with a Details page with the Description field, and Discussion, Development, and Related Work groups. Also added, but not shown nor editable, are the standard elements included with the header of the form as shown in the following image, as well as the history, links, and attachment pages. To learn more, see [About work items](../../../boards/work-items/about-work-items.md).
 
	<img src="_img/process/weblayout-system-controls-details-page.png" alt="WIT header details" style="border: 1px solid #C3C3C3;" /> 

0. Name the field and select the field type from one of the supported data types. Field names must be unique and no more than 128 characters. For additional restrictions, see [What is a field? How are field names used?](inheritance-process-model.md#field-reference). Optionally, add a description.  
	
	Here we add an Integer field labeled Customer Ticket. 

    <img src="_img/process/cpfield-add-field-to-bug-type-integer-up1.png" alt="Add a field to Bug, choose field type" style="border: 1px solid #C3C3C3;" /> 

	Additional data types you can add include: [Picklist](customize-process-field.md#pick-list), [Identity](customize-process-field.md#identity), [Rich-text, HTML](customize-process-field.md#html), and [Checkbox](customize-process-field.md#boolean-field).  
	<a id="options">  </a>  
0.	(Optional) On the **Options** tab, indicate if the field is required and specify a default value. Or leave these blank. 

	<img src="_img/process/cpfield-bug-customer-ticket-options.png" alt="Add a field to Use story, specify options" style="border: 1px solid #C3C3C3;" />  

	By making a field Required, users must specify a value for the field in order to save it. The default value you specify is set when you create a work item as well as every time a work item is opened and the field is empty.

	<a id="layout">  </a>
0.	(Optional) On the **Layout** tab, you can enter a different form label than the name of the field. Also, you can choose the page and group where the field appears on the form.  

	Here we choose to add a new field. Choose the ![ ](_img/process/new-field-icon.png) (**New Field** icon).  

	> [!div class="mx-imgBorder"]  
	> ![New WIT, customize layout](_img/process/cpwit-new-ticket-define.png) 	

1.  Here, we add the Customer Ticket field to a new group labeled Customer focus. 

	<img src="_img/process/cpfield-customer-ticket-layout.png" alt="Add a field to Use story, specify layout" style="border: 1px solid #C3C3C3;" />  

0.	Choose **Add field** to complete adding the field. If you haven't specified it's layout location, it is added to the first group of fields on the layout form.  

	> [!TIP]    
	> Once you've added a field, you can drag-and-drop it within a page to relocate it on the form. If you have several fields you want to add to a custom page or group, then you may want to [add those elements first](customize-process-form.md) and then add your fields. 

## Verify the customization you made 

We recommend that you create a test project and apply your customized  inherited process to it to verify the changes you've made. 

0. Open the **All processes** page, and choose the &hellip; context menu for the process you want to use, and then select **New team project**.   

	> [!div class="mx-imgBorder"]  
	> ![Create a project from the selected process](_img/process/add-new-team-project.png) 

0. The Create new project page opens. Fill out the form. 

	> [!div class="mx-imgBorder"]  
	> ![Create new project form](_img/process/create-test-project.png) 

0.  Open **Work Items**. (1) Check that you have selected the right project, then (2) choose **Work>Work Items**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Work>Work Items](../../../boards/work-items/_img/view-add/open-work-items-agile.png)  

0. Select the WIT you customized. Here we choose **Ticket**. 

	> [!div class="mx-imgBorder"]  
	> ![Work>Work Items page, add new work item, Ticket](_img/process/add-custom-wit-verify-ticket.png) 

	If you don't see the custom WIT, refresh your browser to make sure it registers all the custom changes you've made. 

0.  Verify that the field you added appears on the form. Note that the ![ ](../../../_img/icons/required-icon.png) (exclamation mark) icon indicates the field is required.  

	> [!div class="mx-imgBorder"]  
	> ![Ticket form, Customer Ticket field added to Customer Focus group](_img/process/add-custom-field-verify-ticket-form.png)  


[!INCLUDE [temp](../_shared/change-project-to-inherited-process.md)] 


## Try this next
> [!div class="nextstepaction"]
> [Customize the web layout](customize-process-form.md) 
> Or
> [Customize the workflow](customize-process-workflow.md)

## Related articles 

- [Customize a project using an inherited process](customize-process.md)
- [Create and manage inherited processes](manage-process.md)
- [Customize the workflow states](customize-process-workflow.md). 
- [Customize your backlogs or boards for a process](customize-process-backlogs-boards.md).  

 

  





