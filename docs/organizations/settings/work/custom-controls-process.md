---
title: Add a Custom Control to a WIT 
titleSuffix: Azure DevOps Services
description: Customize a process by adding or modifying a custom control for work item type when working in Azure DevOps Services.
ms.custom: inherited-process
ms.service: azure-devops-boards
ms.assetid: 7FC3CF0F-1E2B-4AAE-876C-5E358E7B2B72
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<=azure-devops"
ms.date: 08/20/2025
---

# Add extensions and custom controls to a work item type (Inheritance process)

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article explains how to add rich functionality to your work item forms by using extensions. An extension comes in four flavors, or contribution types. The following controls appear on the web form layout for all inherited and customizable work item types (WITs):

- Field-level contribution (custom controls)
- Group-level contribution 
- Page-level contribution

The fourth type, action-level contributions, on the other hand, appear in the context menu of the web form.  

[!INCLUDE [temp](../includes/note-on-prem-link.md)]

You add all contributions by installing its extension from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab. Or, you can [create your own custom control](../../../extend/get-started/node.md).

For example, you can add the [**Who recently viewed a work item?**](https://marketplace.visualstudio.com/items?itemName=mmanela.vsts-workitem-recentlyviewed) extension. This group-level contribution appears in your work item form as shown.

:::image type="content" source="media/process/custom-controls-group-extension-example-who-recently-viewed.png" alt-text="Screenshot of Work item form, group extension example, Who viewed this.":::

## Prerequisites

[!INCLUDE [temp](../includes/process-prerequisites.md)] 

To add extensions or edit a process, be a member of the Project Collection Administrators group or be [granted explicit permissions to edit a specific process](../../../organizations/security/set-permissions-access-work-tracking.md#process-permissions).

[!INCLUDE [temp](../includes/open-process-admin-context-ts.md)]

[!INCLUDE [temp](../includes/automatic-update-project.md)] 

## Review installed Marketplace extensions

From the **Settings** context, on the **Extensions** tab, you can view the extensions that are already installed. You might need to select **Refresh** to show newly installed extensions.  

:::image type="content" source="media/process/custom-controls-extensions-admin-page-ts.png" alt-text="Screenshot of Organization settings, Extensions page.":::

To learn more about extensions, see [Install extensions](../../../marketplace/install-extension.md).

<a id="add-extension"></a>

## Add a Marketplace extension

You can [browse the Marketplace](https://marketplace.visualstudio.com/search?term=control%20group%20tab%20page&target=vsts&category=Plan%20and%20track&hosting=cloud&sortBy=Relevance) to determine what extensions you want to add.

1. To add an extension to a work item type, choose your inherited process, the WIT, and then choose **Get extensions**.

    :::image type="content" source="media/process/cprocess-choose-extensions.png" alt-text="Screenshot of Process, WIT, Bug, Layout, Get extensions.":::

1. Select the extension you want to add. Here we choose the Work item checklist.

1. Select the organization you want to add it to and choose **Install**.  

    :::image type="content" source="media/process/cprocess-install-extension.png" alt-text="Screenshot of Visual Studio Marketplace, install extension.":::

	> [!IMPORTANT]  
	> Extensions you install are added to all WITs across all processes.

1. Return to the process and WIT, and verify the location of the extension is where you want it. Look for it at the bottom of the middle column and drag it to where you want it on the form.

    :::image type="content" source="media/process/cpfield-add-checklist-extension.png" alt-text="Screenshot of Group extension on the bug work item form.":::

<a id="add-field-control"></a>

## Add a field-level contribution or custom control 

1. Install the [custom control](#add-extension) as discussed in the previous section.  
  
1. Open **Settings** > **Work** > **Process** from a work item form. For details, see [Open organization process settings](add-custom-wit.md#open-process-wit).

1. (Optional) [Add a field](customize-process-field.md#add-custom-field) to associate with the custom control. Alternatively, you can specify an existing field, either inherited or custom. 

1. With the WIT selected, choose **Add custom control**. 

    :::image type="content" source="media/process/cpcontrols-add-custom-control.png" alt-text="Screenshot of Process, WIT, Bug, Layout, Add custom control.":::

	> [!NOTE]
	> If you don't see the **Add custom control** option, then you haven't installed a field-level extension. Or, you might need to refresh your browser to cause your browser to register any new extensions that have been recently installed. 

1. Choose the custom control you want from the menu of options. 

   For example, here we choose the Toggle control that you can associate with a Boolean field.

    :::image type="content" source="media/process/custom-control-add-field-level-control-to-bug.png" alt-text="Screenshot of the Add a custom control dialog, Definition tab.":::

1. Choose the **Options** tab and fill out the dialog box. The options you need to specify depend on the custom control you've selected.

   For example, here we specify the custom field, **Triaged**, and indicate the toggle labels to appear on the form.

    :::image type="content" source="media/process/custom-control-add-field-level-control-to-bug-options-tab.png" alt-text="Screenshot of the Custom control dialog box.":::

1. (Optional) Open the **Layout** tab and specify the label for the field. 
 
   Fill in any other required fields. Review the extension description for guidance. 

1. Verify the working of the custom control by opening a work item of the type you modified. You might need to refresh your browser to see your changes.  

   Here, we show how the control appears by default with the checkbox and then with the toggle control.  

    :::row:::
       :::column span="1":::
       **Boolean field with checkbox**
       :::column-end:::
       :::column span="1":::
       **Boolean field with toggle control**
       :::column-end:::
    :::row-end::: 
    :::row:::
       :::column span="1":::
       :::image type="content" source="media/process/boolean-checkbox.png" alt-text="Screenshot of Boolean field with checkbox.":::
       :::column-end:::
       :::column span="1":::
       :::image type="content" source="media/process/boolean-toggle.png" alt-text="Screenshot of Boolean field with toggle control.":::
       :::column-end:::
    :::row-end:::

<a id="group-level"></a>

## Group-level and page-level contributions

When you add *group-level* and *page-level* contributions, they're automatically added to all WITs defined for all processes, both inherited and custom. You can choose to [hide these contributions from appearing on the form](customize-process-field.md#show-hide-field) for a specific WIT, or move it within the form from the default location. 

If you've installed a group or page contribution, refresh your browser, and then open a work item to view the placement of the contribution on the form. To move or hide the contribution, see [Customize the web layout for a work item type](customize-process-form.md).  

## Action-level contributions

*Action-level* contributions are added to the context menu of inherited and customizable WITs for both system and inherited processes. All action-level contributions are added to all work item types and can't be hidden or removed without [uninstalling or disabling the extension](../../../marketplace/install-extension.md#uninstall-disable-extension).  

For example, the following image shows nine action-level contributions were added and appear in the context menu for the user story.

:::image type="content" source="media/process/custom-control-web-form-user-story-action-level-menu-options.png" alt-text="Screenshot of User story web form, context menu, Action-level options.":::

<a id="process-rest-api"></a>

## Programmatically add custom controls 

You can use these REST APIs to work with extensions:
- [Extend the work item form](../../../extend/develop/add-workitem-extension.md)  
- [Add a custom control to the work item form](../../../extend/develop/custom-control.md)  

## Related content 

[!INCLUDE [temp](../includes/note-audit-log-support-process.md)]

- [Add and manage fields (Inheritance process)](customize-process-field.md)  
- [Add and manage work item types](customize-process-work-item-type.md)
- [Customize the web layout for a work item type](customize-process-form.md)
- [Customize a project using an inherited process](customize-process.md)