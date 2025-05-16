---
title: Add and Manage Fields for an Inherited Process
titleSuffix: Azure DevOps 
description: Learn how to add and manage fields in the web form of a work item type for an Inheritance process. 
ms.custom: inherited-process
ms.service: azure-devops-boards
ms.assetid: D6616411-43D4-4A81-8951-772D98BD1569  
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.topic: how-to
ms.date: 05/08/2025
---

# Add and manage fields (Inheritance process)   

[!INCLUDE [version-gt-eq-2019](../../../includes/version-gt-eq-2019.md)]

You can customize your work tracking system by adding custom fields or modifying specific attributes of an ![inherited icon](media/process/inherited-icon.png) inherited field. For example, you can add a custom field to capture other data or change the label displayed in the work item form for an inherited field.

[!INCLUDE [temp](../includes/note-on-prem-link.md)]

To view all fields defined for your organization, including system and inherited fields, see [View work item fields and attributes](../../../boards/work-items/work-item-fields.md#review-fields).

After you add a custom field, you can use it to create [queries](../../../boards/queries/using-queries.md), [charts](../../../report/dashboards/charts.md), or [Analytics views and Power BI reports](../../../report/powerbi/create-quick-report.md) to track and analyze related data.

## Prerequisites

[!INCLUDE [temp](../includes/process-prerequisites.md)] 

[!INCLUDE [temp](../includes/open-process-admin-context-ts.md)]
 
[!INCLUDE [temp](../includes/automatic-update-project.md)] 

<a id="open-process-wit">  </a>
<a id="add-field">  </a>
<a id="add-custom-field">  </a>

## Custom field names

When you add a custom field to an inherited process, Azure DevOps assigns it a reference name prefixed with *Custom* and removes any spaces from the field name. For example, a field named "DevOps Triage" is assigned the reference name **Custom.DevOpsTriage**. Spaces aren't allowed in reference names. 

## Add a custom field 

You can add fields and specify the group and page where they should appear. After you add a field, you can drag and drop it within a page to adjust its placement on the form. If you plan to add multiple fields to a custom page or group, [create those pages or groups first](customize-process-form.md) before adding the fields.

Each process can define up to 1,024 fields, including system and inherited fields. Fields can only be added within a page on a form. You can't add fields to the gray area of the form where the Assigned To, State, and Reason fields are located.

1. From the **Process** page of the selected inherited process, select the work item type (WIT) where you want to add the custom field.

   In the following example, we select the Bug WIT. Notice the breadcrumb links that allow you to navigate back to **All Processes** and the **MyAgile** process page.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot shows breadcrumb links for All Processes, Process, and WIT.](media/field/breadcrumbs-bug-wit.png)

   If the **New field** and other options are disabled, you don't have the [necessary permissions to edit the process](../../../organizations/security/set-permissions-access-work-tracking.md#customize-an-inherited-process).

2. With the WIT selected, choose the :::image type="icon" source="media/process/new-field-icon.png" border="false"::: **New field**.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot shows the Process Work Item Types page with the option to add a field to a WIT.](media/field/bug-new-field.png)

3. Name the field and select the field type from one of the supported data types. Optionally, add a description.

   Field names must be unique within the organization. A custom field in one process can't share the same name as a field in another process. For more information, see [What is a field? How are field names used?](inheritance-process-model.md#field-reference).

   In the following example, we add an Integer field type labeled *Customer Ticket*.

   ![Screenshot shows adding a field to the Bug WIT and selecting the Integer field type.](media/process/cpfield-add-field-to-bug-type-integer-up1.png)
<a id="required-default">  </a>

4. (Optional) On the **Options** tab, indicate whether the field is required and specify a default value. If left blank, the field remains optional. When you make a field **Required**, users must specify a value to save the work item. The default value is set when a work item is created or opened, and the field is empty.

   ![Screenshot shows setting options for the Customer Ticket field.](media/process/cpfield-bug-customer-ticket-options.png)
<a id="options">  </a>

5. (Optional) On the **Layout** tab, you can specify a different form label than the field name. You can also choose the page and group where the field appears on the form.

   In the following example, we add the Customer Ticket field to a new group labeled Customer focus.

   ![Screenshot shows adding the Customer Ticket field to the Customer focus group in the layout.](media/process/cpfield-customer-ticket-layout.png)

   > [!NOTE]  
   > While you can change the form label, you must use the field name when adding fields to cards ([Board](../../../boards/boards/customize-cards.md#fields), [Taskboard](../../../boards/sprints/customize-taskboard.md)) or [creating queries](../../../boards/queries/using-queries.md) based on the field.

6. Choose **Add field** to complete the process. If you don't specify a layout location, the system adds the field to the first group of fields on the form.

7. After your changes are complete, open a work item of the customized type to review the updates.

   The following example shows the Customer Ticket field was successfully added to the Status group. If the changes aren't immediately visible, refresh your browser to ensure the updates display correctly. This step ensures the new field is properly integrated into the work item form and ready for use.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot shows the Bug form with the Customer Ticket field added to the Customer focus group.](media/process/cpfield-bug-form-customized-customer-ticket.png)

<a id="pick-list">  </a>
<a id="edit-picklist-inherited"></a>

### Add a picklist  

[Work tracking, process, and project limits](object-limits.md)

::: moniker range=">= azure-devops-2020"

You can add a new field and define a pick list or customize the pick list of an inherited field. 

::: moniker-end

Each organization or collection can define up to 2,048 picklists. Each picklist can contain up to 2,048 items. Picklist items must be 256 or fewer characters. To add dependent picklists, see [Cascading lists](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.cascading-picklists-extension). 

1. Select ![add new field icon](media/process/new-field-icon.png) **New field**, then specify the picklist type&mdash;integer or string&mdash;and then add the items to appear in the picklist. You can add an item and then select **Enter** to add another item. 

	![Screenshot shows Add a field to Bug dialog, Add a custom picklist.](media/process/add-a-field-pick-list-up1.png)  

	To delete an item in the list, highlight the item and then select the ![Delete icon](../../../media/icons/delete_icon.png) delete icon.  

	::: moniker range=">= azure-devops-2020"
	To modify the pick list of an inherited field, choose **Edit** to edit the field. On the **Definition** tab, you can choose to **Add value**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot shows Edit field Priority in User Story dialog, Definition tab.](media/field/edit-priority-picklist.png)   
	
	::: moniker-end

2. (Optional) Specify [required or default values](#required-default) and [choose where the field appears on the form](#options).

	![Screenshot shows Allow values in a custom picklist.](media/process/add-a-field-pick-list-options.png)

<a id="identity">  </a>

### Add an Identity field  

Use an Identity-based field to add a field similar to the Assigned To field. Identity-based fields act in the same way as the Assigned To field, providing a search and identity picker function. When your organization manages users with Microsoft Entra ID or Active Directory, the system synchronizes Identity-based fields with the names defined in these directories. 

Select ![add new field icon](media/process/new-field-icon.png) **New field**, then the field name, Identity type, and optionally a description.

   ![Screenshot shows Add a field to Bug dialog, Definition tab, Add an Identity field.](media/process/cpfield-identity.png)
 
(Optional) Specify [required or default values](#required-default) and [choose where the field appears on the form](#options). 

<a id="html">  </a>

### Add a rich-text, HTML field 

1. Select the WIT you want to add the field to, and then choose the ![add new field icon](media/process/new-field-icon.png) **New field**.  

2. Choose Text (multiple lines) as the type. Here we label the field as Customer request to capture customer comments for product feature requests.   

    ![Screenshot shows Process Work Item Types page, Add a rich-text field to the Bug form.](media/process/cpfield-add-html-field-to-bug.png)

3. The field gets added to the first column under all system-defined rich-text fields, but before the Discussion control.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot shows Bug form, Customer request field added to first column in form.](media/process/customize-process-field-show-custom-html-field-up1.png)

4. (Optional) Specify [required or default values](#required-default) and [choose where the field appears on the form](#options).

<a id="boolean-field">  </a>

### Add a checkbox field  

1. Select the WIT you want to add the field to, and then choose ![add icon](../../../media/icons/green_plus_icon.png) **New field**.  

2. Choose Boolean as the type, and give it a label. Here we label the field as Triaged to track the triage state of the bug.  

	![Screenshot shows adding a boolean field.](media/process/cpfield-add-boolean-field-to-bug.png)   

3. (Optional) Select **Options**, and then specify whether the field is required. 

	![Screenshot shows setting options for boolean field.](media/process/cpfield-edit-boolean-field-options-up1.png)

4. By default, the field gets added to the last group defined in the second column. Select **Layout**, and then drag and drop the field to another group on the form.  

   > [!NOTE]  
   > The field appears as a checkbox in the work item form. Selecting the checkbox indicates a *True* value. If the field displays on the board or Taskboard, the values *True* and *False* show as text instead of a checkbox.

<a id="add-existing-field">  </a>

## Add an existing field to another WIT

Existing fields correspond to any inherited field and custom field defined within the collection. After you add a custom field to one WIT, you can add it to others from the form menu. Or, you can add a field defined for one process to a work item type in another process. Open the work item type and choose the existing field. 

To look up descriptions of any system-defined work item field, see the [Work item field index](../../../boards/work-items/guidance/work-item-field.md).  

In the following example, we add the *Customer Ticket* field to the User Story WIT.

![Screenshot shows adding existing field to a User Story.](media/process/cpfield-add-existing-field.png)

(Optional) Specify [required or default values](#required-default) and [choose where the field appears on the form](#options). 

<a id="rename-field">  </a>

## Relabel a field   

Renaming a field or changing its type isn't supported. However, you can change the label displayed on the work item form from the **Layout** tab. When creating queries, use the field name, not the label.

In the following example, we relabel the *Customer Ticket* field to *Ticket Number*.   
 
![Screenshot shows Layout tab, with relabeled a field.](media/process/cpfield-relabel-customer-ticket.png) 

<a id="modify-description"></a>

## Modify Description help text  

::: moniker range=">= azure-devops-2020"

Description help text appears when users hover over a field in the work item form. You can customize help text for both custom and inherited fields, but the behavior differs by field type:  
- **Inherited fields**: Help text can be customized for each work item type and process.  
- **Custom fields**: Help text is consistent across all work item types and processes.  

::: moniker-end

[!INCLUDE [temp](../../../boards/includes/note-azure-devops-2020-1-updates.md)]

To modify the **Description** help text, choose the work item type you want to modify, choose **Edit** for the field and choose the **Definition** tab. The modified value only affects that field in the process and for that work item type. 

::: moniker range=">= azure-devops-2020"

Here we modify the Story Points field for User Story. 

> [!div class="mx-imgBorder"]  
> ![Edit field dialog, User Story, Story Points field.](media/custom-field/edit-field-dialog-definition-description-help-text.png)

::: moniker-end

<a id="show-hide-remove-field">  </a>

## Show, hide, or remove a field   

::: moniker range=">= azure-devops-2020"

You can choose to show or hide any field or custom control from appearing on a form. If you want to reinstate a field onto the form later, you can unhide These actions differ from the [**Delete**](#delete-field) option, which deletes the field from the organization.

::: moniker-end

> [!NOTE]      
> Data defined for an inherited field, even if you hide it, is maintained in the data store and work item history. You can view a record of it by viewing the history tab for a work item. 
>
> When you remove a custom field from the layout, it gets maintained in the data store but stripped from the history. You can view it from the query results. If you add the field back to the form, then the history gets restored. To delete a custom field from a project collection, see [Delete a field](#delete-field).

<a id="show-hide-field">  </a>

::: moniker range=">= azure-devops-2020"
### Hide a field or custom control
::: moniker-end

1. Open the context menu for the field or control and choose **Hide from layout**.

	![Bug layout, inherited field, open context menu, choose Hide from layout](media/process/cpfield-hide-inherited-field.png) 

1. To add a hidden field or control to the form, choose **Show on layout**.  

<a id="remove-field">  </a>

### Remove a custom field from a form

1. Choose **Remove** from the context menu of the field you want to remove. 

	![Remove field from bug work item type](media/process/cpfield-remove-customer-ticket.png)  

2. Confirm that you want to remove the field.  

	<img src="media/process/customize-process-remove-field-confirm.png" alt="Confirm to remove field from the bug work item form" />   

1. To add a custom field that's been removed, choose **New field** and select **Use an existing field**.  

<a id="revert">  </a>

## Revert field to preset defaults 

You can discard changes you made to an inherited field. From the **Layout** page of the modified work item type, choose the **Revert** option for the field.  

> [!div class="mx-imgBorder"]  
> ![Screenshot shows Layout page, Field context menu, choose Revert option.](media/process/cpfield-revert.png)

<a id="delete-field">  </a>

## Delete a custom field  

With the Inheritance process model, you can only delete custom fields; you can't delete system default fields.

Deleting a field removes all associated data, including historical values. There might be a short delay before data purge jobs begin. During this time, you can attempt to restore the field and recover its data using the [Fields - Update REST API](/rest/api/azure/devops/wit/fields/update). Recovery might be full, partial, or unsuccessful, depending on the remaining data. Use caution when deleting fields, as recovery isn't always possible or complete.

> [!NOTE]  
> This action CANNOT be undone. Delete only fields that aren't in use. Use the **witadmin listfields** command to identify unused fields. For more information, see [Manage work item fields (witadmin)](../../../reference/witadmin/manage-work-item-fields.md).  
> If Analytics is enabled for your organization or collection, you can query Analytics to find where a custom field is in use with the following syntax: 
 
> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/v4.0-preview/WorkItemTypeFields?$filter=FieldReferenceName eq {CustomFieldReferenceName}&$select=WorkItemType
> ``` 

To delete a custom field, do the following steps:

1. Select **Organization settings** > **Process** > **Fields** > :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: **More actions** > **Delete**.  

	![Delete field](media/process/cpfield-delete-field.png) 

	Be a member of the Project Collection Administrators group or [granted explicit permissions to Delete fields](../../../organizations/security/set-permissions-access-work-tracking.md#process-permissions). 

2. Enter the name of the field as shown in the following example, and then confirm by selecting **Delete work item field**.

	![Screenshot shows Delete field, confirmation dialog.](media/process/cpfield-delete-confirmation.png) 
 

## Related articles  

[!INCLUDE [temp](../includes/note-audit-log-support-process.md)]

- [View work item fields and attributes](../../../boards/work-items/work-item-fields.md)
- [Add or modify a custom work item type](customize-process-work-item-type.md)
- [Customize the web layout](customize-process-form.md) 
- [Work tracking, process, and project limits](object-limits.md) 

<!--- 
Commenting this out as it's' in the process of changing 

### Custom field names 

The reference name for any new field you add is prefixed with the name of the inherited process for which it was created. For example, if you add Custom 1 field to MyAgile process, the reference name  is `MyAgile.Custom1`. If you add Custom 2 field to MyAgile-Copy process, the reference name assigned to it is `MyAgile-Copy.Custom2`. 

By adding all customizations to the same base inherited process, you simplify the naming conventions that get applied to a custom fields. This is useful particularly when REST APIs are employed.  

Each ![locked icon](media/process/locked-icon.png) system process&mdash;[Agile](../../../boards/work-items/guidance/agile-process.md), [Scrum](../../../boards/work-items/guidance/scrum-process.md), or [CMMI](../../../boards/work-items/guidance/cmmi-process.md)&mdash;contains 100 or more work item fields. 

-->
