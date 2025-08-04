---
title: Add Custom Work Item Type to Inherited Process
titleSuffix: Azure DevOps Services
description: Learn how to add a custom work item type for an Inheritance process model and apply it to a project.  
ms.custom: inherited-process
ms.service: azure-devops-boards
ms.assetid: DBF41880-62A4-43A9-9A31-8DB701EB888E
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: "<=azure-devops"
ms.date: 08/04/2025
#customer intent: As a team leader, I want to know how to add a custom work item to my projects in Azure Boards.
---

# Quickstart: Add a custom work item type (Inheritance process)

[!INCLUDE [version-gt-eq-2019](../../../includes/version-gt-eq-2019.md)]

In this quickstart, you create a custom work item type (WIT). In Azure Boards, You use different work item types to plan and track different types of work. The main reason you add a custom WIT is to customize the web form and workflow states to meet specific business use cases. Or, you can customize an existing WIT. Your project contains 9 or more WITs that you can customize, based on the process used to create your project.  

[!INCLUDE [temp](../includes/note-on-prem-link.md)]

For example, you might want to capture customer issues in a custom WIT labeled Ticket.   

:::image type="content" source="media/process/custom-wit-new-ticket-form.png" alt-text="Screenshot shows a custom Ticket work item form.":::

To learn more about what you can customize, see [About process customization and inherited processes](inheritance-process-model.md). 

> [!TIP]    
> To customize a single project, always start by [creating an inherited process and migrating projects to that process](manage-process.md). Then, all the customizations that you make to the inherited process automatically appear for the project you migrated.

## Prerequisites

[!INCLUDE [temp](../includes/process-prerequisites.md)] 

[!INCLUDE [temp](../includes/open-process-admin-context-ts.md)]

## Create inherited process

For more information, see [Create inherited process](manage-process.md#create-an-inherited-process).

<a id="add-wit">  </a>

## Add a work item type

1. From the **Work Item Types** page, choose the :::image type="icon" source="../../../media/icons/blue-add-icon.png"::: **New work item type**.

	:::image type="content" source="media/process/cpwit-add-new-wit.png" alt-text="Screenshot shows the All processes page for the MyAgile process, with Add new work item type highlighted.":::
 
1. Name the WIT and optionally specify a description, icon, and color. The icon and color you specify appear throughout the web portal, including on the work item form and when associated work items appear on a backlog, boards, and query results. 

	:::image type="content" source="media/process/cwit-create-wit-ticket.png" alt-text="Screenshot shows Create new work item type dialog where you can enter a name and other values.":::

	Choose **Create** to save. 

	Each new WIT comes predefined with a **Details** page with the **Description** field, and **Discussion**, **Development**, and **Related Work** groups. Standard elements are also added, but not shown or editable. These elements are included with the header of the form as shown in the following image, and the history, links, and attachment pages. For more information, see [About work items](../../../boards/work-items/about-work-items.md).
 
	:::image type="content" source="media/process/weblayout-system-controls-details-page.png" alt-text="Screenshot shows the WIT header details for the new work item.":::

1. Name the field and select the field type from one of the supported data types. Field names must be unique and no more than 128 characters. For other restrictions, see [What is a field? How are field names used?](inheritance-process-model.md#field-reference) Optionally, add a description.  
	
	This example adds an Integer field labeled **Customer Ticket**. 

    :::image type="content" source="media/process/cpfield-add-field-to-bug-type-integer-up1.png" alt-text="Screenshot shows the Create a field option for a Bug."::: 

	Other data types you can add include: [Picklist](customize-process-field.md#pick-list), [Identity](customize-process-field.md#identity), [Rich-text, HTML](customize-process-field.md#html), and [Checkbox](customize-process-field.md#boolean-field).  
	<a id="options">  </a>  
1. (Optional) On the **Options** tab, indicate if the field is required. Specify a default value.

   :::image type="content" source="media/process/cpfield-bug-customer-ticket-options.png" alt-text="Screenshot shows the Options page where you can make the field required and specify a default value.":::

   If a field is required, users must specify a value for the field in order to save it. The default value you specify is set when you create a work item and every time a work item is opened and the field is empty.

   <a id="layout">  </a>
1. (Optional) On the **Layout** tab, you can enter a different form label than the name of the field. Also, you can choose the page and group where the field appears on the form.  

   This example adds a new field. Choose the :::image type="icon" source="media/process/new-field-icon.png" border="false"::: (**New Field** icon).  

   :::image type="content" source="media/process/cpwit-new-ticket-define.png" alt-text="Screenshot shows the new field option for your new Ticket work item.":::    

1. Here, we add the Customer Ticket field to a new group labeled **Customer focus**. 

   :::image type="content" source="media/process/cpfield-customer-ticket-layout.png" alt-text="Screenshot shows the Layout page where you can specify how the field is displayed."::: 

1. Choose **Add field** to complete adding the field. If you didn't specify its layout location, it gets added to the first group of fields on the layout form.  

   > [!TIP]    
   > After you add a field, you can drag-and-drop it within a page to relocate it on the form. If you have several fields you want to add to a custom page or group, [add those elements first](customize-process-form.md) and then add your fields. 

## Verify the customization you made 

We recommend that you create a test project and apply your customized inherited process to it to verify the changes you made. 

1. Open the **All processes** page, and choose the &hellip; context menu for the process you want to use. Then select **New team project**.  

	::: moniker range="azure-devops"
	:::image type="content" source="media/process/new-team-project-from-inherited-process-menu.png" alt-text="Screenshot shows the Create a project option for a selected process."::: 
	::: moniker-end
	::: moniker range=">= azure-devops-2020 < azure-devops"
	:::image type="content" source="media/add-custom-field/choose-new-team-project.png" alt-text="Screenshot shows the Create a project option for your modified process."::: 
	::: moniker-end

1. The **Create new project** page opens. Fill out the form. 

	::: moniker range="azure-devops"
	:::image type="content" source="media/process/create-test-project-sprint166.png" alt-text="Screenshot shows the Create new project form."::: 
	::: moniker-end
	::: moniker range=">= azure-devops-2020 < azure-devops"
	:::image type="content" source="media/add-custom-field/create-new-project-2020.png" alt-text="Screenshot shows the Create new project page."::: 
	::: moniker-end

1. Open **Work Items**. Select your project, then choose **Work** > **Work Items**. 

   :::image type="content" source="../../../boards/work-items/media/view-add/open-work-items-agile.png" alt-text="Screenshot shows Azure Boards with Work items selected.":::  

1. Select the WIT you customized, in this example, **Ticket**. 

	:::image type="content" source="media/process/add-custom-wit-verify-ticket.png" alt-text="Screenshot shows Work Items with New Work Item selected and the custom Ticket item highlighted."::: 

	If you don't see the custom WIT, refresh your browser to make sure it registers all the custom changes. 

1. Verify that the field you added appears on the form. The :::image type="icon" source="../../../media/icons/required-icon.png" border="false"::: (exclamation mark) icon indicates the field is required.  

   :::image type="content" source="media/process/add-custom-field-verify-ticket-form.png" alt-text="Screenshot shows the Ticket form, with the Customer Ticket field added in the Customer Focus group.":::  

[!INCLUDE [temp](../includes/change-project-to-inherited-process.md)] 

## Q & A

[!INCLUDE [temp](includes/qa-custom-work-item-on-backlog.md)] 

## Next step

> [!div class="nextstepaction"]
> [Customize the web layout](customize-process-form.md) 
> Or
> [Customize the workflow](customize-process-workflow.md)

## Related content 

[!INCLUDE [temp](../includes/note-audit-log-support-process.md)]

- [Customize a project using an inherited process](customize-process.md)
- [Create and manage inherited processes](manage-process.md)
- [Customize the workflow](customize-process-workflow.md)
- [Customize backlogs and boards](customize-process-backlogs-boards.md)
