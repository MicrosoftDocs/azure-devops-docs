---
title: Add a Custom Field to an Inherited Process
titleSuffix: Azure DevOps Services
description: In this quickstart, learn how to add a custom field to the web form of a work item type for an Inheritance process model and apply it to a project. 
ms.custom: inherited-process
ms.service: azure-devops-boards
ms.assetid: D6616411-43D4-4A81-8951-772D98BD1569  
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.date: 07/31/2025
#customer intent: As a team leader, I want to know how to add a custom field to my work items in Azure Boards.
---

# Quickstart: Add a custom field to a work item type (Inheritance process)

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

In this quickstart, you add a custom field to support tracking data requirements you have that aren't met with the existing set of fields. For example, you can add a custom field to track a customer ticket number. For a list of all fields defined for your organization, which includes all fields defined for system and inherited processes, see [List work item fields and attributes](../../../boards/work-items/work-item-fields.md). For a description of each field defined with a system process, see [Default and work item fields used in process templates](../../../boards/work-items/guidance/work-item-field.md). 

[!INCLUDE [temp](../includes/note-on-prem-link.md)]

For more information, see [About process customization and inherited processes](inheritance-process-model.md). 

> [!TIP]    
> To customize a single project, always start by [creating an inherited process and updating your project to that process](manage-process.md). Then, all the customizations that you make to the inherited process automatically appear for the project you migrated.

## Prerequisites

[!INCLUDE [temp](../includes/process-prerequisites.md)] 

[!INCLUDE [temp](../includes/open-process-admin-context-ts.md)]

## Create inherited process

For more information, see [Create inherited process](manage-process.md#create-an-inherited-process).

<a id="add-wit">  </a>

## Add a field 

Do the following steps to add a field to an existing work item type. You can't use the **Steps** control on a custom work item type based on the Test Case work item type.  

1. From the **Process** page of the selected inherited process, choose the work item type (WIT) you want to add the custom field to. 

	This example uses the Bug WIT. The breadcrumb links allow you to move back to the **All Processes** and **MyAgile** process page. 

	:::image type="content" source="media/field/breadcrumbs-bug-wit.png" alt-text="Screenshot shows the process page for MyAgile, showing a bug."::: 

	If the **New field** and other options are disabled, you don't have the necessary permissions to edit the process. See [Customize an inherited process](../../../organizations/security/set-permissions-access-work-tracking.md#customize-an-inherited-process).
	
1. With the WIT selected, choose the :::image type="icon" source="media/process/new-field-icon.png"::: **New field**.  

	:::image type="content" source="media/field/bug-new-field.png" alt-text="Screenshot shows the process page for a WIT with New field highlighted."::: 

1. Name the field and select the field type from one of the supported data types. Field names must be unique and no more than 128 characters. For other restrictions, see [What is a field? How are field names used?](inheritance-process-model.md#field-reference) Optionally, add a description.  

	> [!NOTE]   
	> Once created, you can't change the field name or data type. 

	This example adds an Integer field labeled Customer Ticket. 

    :::image type="content" source="media/process/cpfield-add-field-to-bug-type-integer-up1.png" alt-text="Screenshot shows the Create a field option for a Bug.":::

	Other data types you can add include: [Picklist](customize-process-field.md#add-a-picklist), [Identity](customize-process-field.md#add-an-identity-field), [Rich-text, HTML](customize-process-field.md#add-a-rich-text-html-field), and [Checkbox](customize-process-field.md#add-a-checkbox-field).  

	<a id="options">  </a>  
1. (Optional) On the **Options** tab, indicate if the field is required. Specify a default value.

	:::image type="content" source="media/process/cpfield-bug-customer-ticket-options.png" alt-text="Screenshot shows the Options page where you can make the field required and specify a default value.":::

	By making a field required, users must specify a value for the field in order to save it. The default value you specify is set when you create a work item and every time a work item is opened and the field is empty.

	<a id="layout">  </a>
1. (Optional) On the **Layout** tab, you can enter a different form label than the name of the field. Also, you can choose the page and group where the field appears on the form. 

	This example adds the Customer Ticket field to a new group labeled Customer focus. 

	:::image type="content" source="media/process/cpfield-customer-ticket-layout.png" alt-text="Screenshot shows the Layout page where you can specify how the field is displayed.":::

1. Choose **Add field** to complete adding the field. If you don't specify its layout location, it's added to the first group of fields on the layout form.  

	> [!TIP]    
	> After you add a field, you can drag-and-drop it within a page to relocate it on the form. If you have several fields you want to add to a custom page or group, [add those elements first](customize-process-form.md) and then add your fields. You can't add a field to the gray area within the form where the **Assigned To**, **State**, and **Reason** fields are located. 

<a id="verify">  </a>

## Verify the customization you made 

We recommend that you create a test project and apply your customized inherited process to it to verify the changes you made. 

1. Open the **All processes** page, and choose the &hellip; context menu for the process you want to use. Then select **New team project**.

	::: moniker range="azure-devops"
	:::image type="content" source="media/process/new-team-project-from-inherited-process-menu.png" alt-text="Screenshot shows the create a project option for a selected process."::: 
	::: moniker-end
	::: moniker range=">= azure-devops-2020 < azure-devops"
	:::image type="content" source="media/add-custom-field/choose-new-team-project.png" alt-text="Screenshot shows the create a project option for your modified process."::: 
	::: moniker-end

1. The **Create new project** page opens. Fill out the form. 

	::: moniker range="azure-devops"
	:::image type="content" source="media/process/create-test-project-sprint166.png" alt-text="Screenshot shows the Create new project form."::: 
	::: moniker-end
	::: moniker range=">= azure-devops-2020 < azure-devops"
	:::image type="content" source="media/add-custom-field/create-new-project-2020.png" alt-text="Screenshot shows the Create new project page."::: 
	::: moniker-end

1.  Open **Work Items**. Select your project, then choose **Work** > **Work Items**. 

	:::image type="content" source="../../../boards/work-items/media/view-add/open-work-items-agile.png" alt-text="Screenshot shows Azure Boards with Work items selected.":::

1. Select the WIT you customized, in this example, **Bug**. 

	:::image type="content" source="media/process/add-custom-field-verify-bug.png" alt-text="Screenshot shows New Work Item with the Bug item selected."::: 

1.  Verify that the field you added appears on the form. The :::image type="icon" source="../../../media/icons/required-icon.png"::: (exclamation mark) icon indicates the field is required.  

	:::image type="content" source="media/process/add-custom-field-verify-bug-form.png" alt-text="Screenshot shows the New Bug with the Customer Ticket field added."::: 

[!INCLUDE [temp](../includes/change-project-to-inherited-process.md)] 

## Next steps

> [!div class="nextstepaction"]
> [Add a custom work item type](add-custom-wit.md) 
> Or
> [Add or manage fields](customize-process-work-item-type.md)

## Related content  

[!INCLUDE [temp](../includes/note-audit-log-support-process.md)]

- [View work item fields and attributes](../../../boards/work-items/work-item-fields.md)
- [Add and manage fields for an inherited process](customize-process-field.md#show-hide-field) 
- [Customize a project using an inherited process](customize-process.md)
- [Create and manage inherited processes](manage-process.md)
