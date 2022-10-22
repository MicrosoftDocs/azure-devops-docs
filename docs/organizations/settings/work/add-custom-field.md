---
title: Add a custom field to an inherited process
titleSuffix: Azure DevOps Services
description: Learn how to add a custom field to the web form of a work item type for an Inheritance process model and apply it to a project. 
ms.custom: inherited-process
ms.service: azure-devops-boards
ms.assetid: D6616411-43D4-4A81-8951-772D98BD1569  
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= azure-devops-2019'
ms.date: 08/03/2022
---

# Add a custom field to a work item type (Inheritance process)    

[!INCLUDE [version-gt-eq-2019](../../../includes/version-gt-eq-2019.md)]

You add a custom field to support tracking data requirements you have that aren't met with the existing set of fields. For example, you can add a custom field to track a customer ticket number. For a list of all fields defined for your organization&mdash;which includes all fields defined for system and inherited processes&mdash;see [View work item fields and attributes](../../../boards/work-items/work-item-fields.md). For a description of each field defined with a system process, see [Work item field index](../../../boards/work-items/guidance/work-item-field.md). 

[!INCLUDE [temp](../includes/note-on-prem-link.md)]

To learn more about what you can customize, see [About process customization and inherited processes](inheritance-process-model.md). 

> [!TIP]    
> To customize a single project, always start by [creating an inherited process and updating your project to that process](manage-process.md). Then, all the customizations that you make to the inherited process automatically appear for the project you migrated.

[!INCLUDE [temp](../includes/process-prerequisites.md)] 

[!INCLUDE [temp](../includes/open-process-admin-context-ts.md)]

[!INCLUDE [temp](../includes/create-inherited-process.md)]

<a id="add-wit">  </a>

## Add a field 

You always add a field to an existing work item type.  

1. From the **Process** page of the selected  inherited process, choose the work item type you want to add the custom field to. 

	Here we choose the Bug WIT. Note the breadcrumb links that allow you to move back to the **All Processes** and **MyAgile** process page. 

	> [!div class="mx-imgBorder"]  
	> ![All Processes-Process-WIT breadcrumb links](media/field/breadcrumbs-bug-wit.png) 

	If the <strong>New field</strong> and other options are disabled, you don't have the necessary permissions to edit the process. See [Set permissions and access for work tracking, Customize an inherited process](../../../organizations/security/set-permissions-access-work-tracking.md#customize-an-inherited-process).
	
1. With the WIT selected, choose the :::image type="icon" source="media/process/new-field-icon.png" border="false"::: <strong>New field</strong>.  

	> [!div class="mx-imgBorder"]  
	> ![Process Work Item Types page, Add a field to a WIT](media/field/bug-new-field.png) 

1. Name the field and select the field type from one of the supported data types. Field names must be unique and no more than 128 characters. For additional restrictions, see [What is a field? How are field names used?](inheritance-process-model.md#field-reference). Optionally, add a Description.  

	> [!NOTE]   
	> Once created, you can't change the field name or data type. 

	Here we add an Integer field labeled Customer Ticket. 

    <img src="media/process/cpfield-add-field-to-bug-type-integer-up1.png" alt="Add a field to Bug, choose field type" /> 

	Additional data types you can add include: [Picklist](customize-process-field.md#add-a-picklist), [Identity](customize-process-field.md#add-an-identity-field), [Rich-text, HTML](customize-process-field.md#add-a-rich-text-html-field), and [Checkbox](customize-process-field.md#add-a-checkbox-field).  

	<a id="options">  </a>  
1.	(Optional) On the **Options** tab, indicate if the field is required and specify a default value. Or leave these blank. 

	<img src="media/process/cpfield-bug-customer-ticket-options.png" alt="Add a field to Use story, specify options" />  

	By making a field Required, users must specify a value for the field in order to save it. The default value you specify is set when you create a work item as well as every time a work item is opened and the field is empty.

	<a id="layout">  </a>
1.	(Optional) On the **Layout** tab, you can enter a different form label than the name of the field. Also, you can choose the page and group where the field appears on the form. 

	Here, we add the Customer Ticket field to a new group labeled Customer focus. 

	<img src="media/process/cpfield-customer-ticket-layout.png" alt="Add a field to Use story, specify layout" />  

1.	Choose **Add field** to complete adding the field. If you haven't specified it's layout location, it is added to the first group of fields on the layout form.  

	> [!TIP]    
	> Once you've added a field, you can drag-and-drop it within a page to relocate it on the form. If you have several fields you want to add to a custom page or group, then you may want to [add those elements first](customize-process-form.md) and then add your fields.  You can't add a field to the gray area within the form where the Assigned To, State, and Reason fields are located. 

<a id="verify">  </a>

## Verify the customization you made 

We recommend that you create a test project and apply your customized  inherited process to it to verify the changes you've made. 

1. Open the **All processes** page, and choose the &hellip; context menu for the process you want to use, and then select **New team project**.  

	::: moniker range="azure-devops"
	> [!div class="mx-imgBorder"]  
	> ![Create a project from the selected process](media/process/new-team-project-from-inherited-process-menu.png) 
	::: moniker-end
	::: moniker range=">= azure-devops-2020 < azure-devops"
	> [!div class="mx-imgBorder"]  
	> ![Create a project from the selected process](media/add-custom-field/choose-new-team-project.png) 
	::: moniker-end
	::: moniker range="azure-devops-2019"
	> [!div class="mx-imgBorder"]  
	> ![Create a project from the selected process](media/process/add-new-team-project.png) 
	::: moniker-end

1. The Create new project page opens. Fill out the form. 

	::: moniker range="azure-devops"
	> [!div class="mx-imgBorder"]  
	> ![Create new project form](media/process/create-test-project-sprint166.png) 
	::: moniker-end
	::: moniker range=">= azure-devops-2020 < azure-devops"
	> [!div class="mx-imgBorder"]  
	> ![Create new project form](media/add-custom-field/create-new-project-2020.png) 
	::: moniker-end
	::: moniker range="azure-devops-2019"
	> [!div class="mx-imgBorder"]  
	> ![Create new project form](media/process/create-test-project.png) 
	::: moniker-end

1.  Open **Work Items**. (1) Check that you have selected the right project, then (2) choose **Work>Work Items**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Work>Work Items](../../../boards/work-items/media/view-add/open-work-items-agile.png)

1. Select the WIT you customized. Here we choose **Bug**. 

	> [!div class="mx-imgBorder"]  
	> ![Work, Work Items Page, Add New Work Item, Bug](media/process/add-custom-field-verify-bug.png) 

1.  Verify that the field you added appears on the form. Note that the :::image type="icon" source="../../../media/icons/required-icon.png" border="false"::: (exclamation mark) icon indicates the field is required.  

	> [!div class="mx-imgBorder"]  
	> ![Bug form, Customer Ticket field added to Customer Focus group](media/process/add-custom-field-verify-bug-form.png) 
	

[!INCLUDE [temp](../includes/change-project-to-inherited-process.md)] 


## Try this next

> [!div class="nextstepaction"]
> [Add a custom work item type](add-custom-wit.md) 
> Or
> [Add or manage fields](customize-process-work-item-type.md)

## Related articles  

[!INCLUDE [temp](../includes/note-audit-log-support-process.md)]

- [View work item fields and attributes](../../../boards/work-items/work-item-fields.md)
- [Add and manage fields for an inherited process](customize-process-field.md#show-hide-field) 
- [Customize a project using an inherited process](customize-process.md)
- [Create and manage inherited processes](manage-process.md)

