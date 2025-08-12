---
title: Update work items with templates in Azure Boards
titleSuffix: Azure Boards
description: Add and manage Azure DevOps work item templates, update work items, and prepopulate work item fields in the web portal and Visual Studio.
ms.service: azure-devops-boards
ms.assetid: 9b575c05-16f3-4027-aa5a-67b017a0089d
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.custom: work-items
monikerRange: '<= azure-devops'
ms.date: 08/13/2025
#customer intent: As an Azure DevOps developer, I want to use Azure DevOps work item templates, so I can update work items in Azure Boards.
---

# Use work item templates

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)] 

<!--- Supports FWLINK https://go.microsoft.com/fwlink/?LinkId=824070 -->

Work item templates help you quickly create work items with prepopulated values for your commonly used fields. You can use work item templates to create work items or make bulk updates to several work items. This article describes how you can add and manage work item templates from the web portal or from Visual Studio 2015 or earlier versions. For examples that demonstrate how to use the work item templates, see [Sample work item templates](../work-items/work-item-template-examples.md). 

Work item templates are distinct from process templates. For more information, see [About processes and process templates](../work-items/guidance/choose-process.md) or these specific articles for default process templates: [Basic](../get-started/plan-track-work.md&tabs=basic-process), [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [Capability Maturity Model Integration (CMMI)](../work-items/guidance/cmmi-process.md).  

## Prerequisites

| Prerequisite    | Description |
| ----------------|-------------|
| **Permissions** | - To manage work item templates in the web portal, be a member of the team that owns the templates. You can then add, edit, or delete templates as needed. <br>- To use work item templates in the web portal, be a **Contributor** to the project. You can then apply templates to existing work items. |
| **Tools**       | - To add, capture, or edit work item templates by using Visual Studio Team Explorer, install the [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power). These templates only appear in your view of Team Explorer. |

## Supported template tasks

The availability of template task options depends on your client and platform configuration. You can add and manage work item templates from the web portal or from Visual Studio 2015 or earlier versions.

The following table shows the support for tasks in the web portal and Visual Studio 2015 or earlier versions. If you use the **Task** description links to jump to the corresponding sections, be sure to select the content version (**tab**) in the section for your platform configuration, as appropriate.

---  
:::row:::
   :::column span="2":::
      **Task** 
   :::column-end:::
   :::column span="1":::
      **Web portal**
   :::column-end:::
   :::column span="1":::
      **Visual Studio**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Capture a work item as a template](#capture-a-work-item-as-a-template)
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Manage work item templates](#manage-work-item-templates)  
      (Define, edit, delete, copy link, create copy, and rename)
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Copy the link (URL) of a template](#edit-delete-copy-link-or-create-copy)
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Add a work item by using a template](#add-a-work-item-by-using-a-template)
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Define a work item template](#create-a-work-item-template)
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Apply a template to one or more work items](#apply-a-template-to-new-or-existing-work-items)
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Add or remove tags from templates](#add-or-remove-tags-from-templates)
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Define a template with a hyperlink](#define-an-unplanned-work-item-template-with-a-hyperlink) 
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="../media/icons/table-indicator-purple-checkmark.png":::
   :::column-end:::
   :::column span="1":::
          
   :::column-end:::
:::row-end:::
---

### Restrictions for using templates

The templates defined in the web portal are distinct from templates defined through Visual Studio. 

- Web portal templates can only be managed and applied to work items through the web portal.
- Visual Studio templates can only be managed, viewed, and applied to work items in Visual Studio.

However, you can use the URLs of both template types to add work items through the web portal. 

## Capture a work item as a template

Depending on the platform, version, and client you use, you might need to follow different steps to capture a work item. The following sections provide procedures for the web portal and Visual Studio 2015 and earlier versions.

### [Web portal](#tab/browser/)

Azure DevOps assigns a unique GUID identifier to each template captured through the web portal. Use the following procedure to capture a work item as a template through the web portal and access a link for the saved template:

1. From the web portal, open a work item to use as the basis for a template.  

1. At the right, select :::image type="icon" source="../media/icons/actions-icon.png"::: **More actions** > **Templates** > **Capture**:

   :::image type="content" source="media/templates/wi-templates-capture-bug-vsts-s136.png" border="false" alt-text="Screenshot that shows how to select the capture work item field definitions as a template option from the More actions menu." lightbox="media/templates/wi-templates-capture-bug-vsts-s136.png":::

1. In the **Capture Template** dialog, configure the required fields, and any optional fields:

   - **Team**: (Required) Use the dropdown list to select an existing team to associate with the captured template.
   
   - **Name**: (Required) Enter a name for the template.
   
   - **Fields**: Use the :::image type="icon" source="../media/icons/green_plus_icon.png"::: **Add** action to add fields, the :::image type="icon" source="../media/icons/delete_icon.png"::: **Delete** action to remove fields, and adjust any specific field **Value** as needed.

   - **Notes**: Select inside the box to add more information about the template. When you select inside the box, the editing tools display. When you create a new work item from the captured template, your information is added as the first entry in the **Discussion** thread.

   :::image type="content" source="media/templates/capture-template-vsts-s136.png" alt-text="Screenshot that shows how to configure fields on the Capture template dialog in the web portal.":::

1. Select **Save**, and then select **Copy link** to capture the URL for the template.

Use the URL whenever you want to add a work item of the same type with predefined values. Here are some examples:

- Create a work item based on the captured template by pasting the URL link in a browser window.
- Share the URL with others for their own use when adding work items.
- Add the URL as a hyperlink to a [project wiki](../../project/wiki/wiki-create-repo.md).
- Add the URL to a [Markdown widget on a team dashboard](../../report/dashboards/add-markdown-to-dashboard.md#add-the-markdown-widget).

### [Visual Studio 2015](#tab/visual-studio/)

To create work items from templates in Visual Studio or Team Explorer, you can use a work item template file (_.wt_) or similar file. These files are accessible from the **Work Items** page.
 
1. Sign in to Visual Studio.

1. Open or run a query that lists the work item whose fields you want to capture as a template.

1. Right-click the work item, and select **Capture Template**:

   :::image type="content" source="media/wi-templates-te-capture-wi-as-template.png" border="false" alt-text="Screenshot that shows how to capture work item field definitions as a template in Visual Studio with Power Tools.":::

1. In the **Capture Template** dialog, configure the required fields, and optional fields as desired:

   - **Name**: (Required) Enter a name for the template.
   
   - **Fields**: (Required) In the **Includes** column, select the checkbox for any field to include in the template. Adjust any specific field **Value** as needed. If you want to include all fields, use the **Select All** option.

   :::image type="content" source="media/wi-templates-capture-template-dialog-te.png" border="false" alt-text="Screenshot that shows how to configure fields on the Capture template dialog in Visual Studio with Power Tools.":::

1. Select **Save**. The template displays in the **Work Item Templates** section in the **Team Explorer** pane, under the **Templates** root node.  

* * *

## Manage work item templates

For each work item type, you can view and manage the templates defined by your team. Perform various actions on the templates like add, edit, copy, delete, or rename, and get a link to the template. 

### [Web portal](#tab/browser/)

Use the following procedure to access work item templates through the web portal:

1. From the web portal, open **Project settings**.

1. In the **Boards** section, select **Team configuration**. If you need to switch to a different team, use the **Team** selector in the breadcrumb trail for the page. 

1. In the **Boards** page, select the **Templates** section:

   :::image type="content" source="../../media/settings/open-templates-from-project-settings-boards-team.png" border="false" alt-text="Screenshot that shows how to access the list of saved templates in Azure DevOps from Project settings, Boards, Team configuration, Templates." lightbox="../../media/settings/open-templates-from-project-settings-boards-team.png":::

1. Select a work item type, such as **Bug**, **Feature**, or **Test Case** to view or add templates for that type:

   :::image type="content" source="media/templates/templates-bug-type-selected.png" alt-text="Screenshot of templates defined for the Bug work item type.":::

### Create a work item template

Use the following procedure to create a work item template through the web portal:

1. In the work item type page, select :::image type="icon" source="../media/icons/green_plus_icon.png"::: **New template** to create a template from scratch: 
    
   :::image type="content" source="media/wi-templates-new-template.png" alt-text="Screenshot showing how to add a new template for the Bug work item type.":::

1. In the **New Template** dialog, enter a **Name** for the template (required) and optionally add fields with any necessary values.

1. Select **Save**. The **Copy link** option becomes available. You can use this URL to create work items based on the template.

### Edit, delete, copy link, or create copy

After you have a saved template, you can edit or delete the template, create a sharable link to the template, or create a copy of the template.

From the work item type page, select :::image type="icon" source="../media/icons/actions-icon.png"::: the **More actions** for an existing template and then select a menu option:

:::image type="content" source="media/wi-templates-template-action-menu.png" alt-text="Screenshot of the More actions menu options for a selected template."::: 

- **Edit**: To update the template, select **Edit**, make your changes, and select **Save**.

- **Delete**: To remove the template, select **Delete**. In the confirmation dialog, select **Delete**. After you delete a template, you can't recover it.

- **Copy link**: To get a copy of the URL for the template, select **Copy link**. Use the URL whenever you want to add a work item of the same type with predefined values. You can save the URL as a text file, add it to a web page as a hyperlink, copy the link to a shared network, or send it to your team via email. Also, consider [adding a link to the team dashboard](#add-a-template-link-to-a-team-dashboard).

- **Create copy**: To make a copy of the template, select **Create copy**. Enter a name for the template copy, and optionally add, remove, and update fields. Select **Save** when you're done. 

### [Visual Studio 2015](#tab/visual-studio/)

You can use Visual Studio with Power Tools to manage your own work item templates. For each work item type, you can see your defined templates and perform actions like **Add**, **Edit**, **Delete**, and **Copy**. Share your templates with others by sending them the template URL or save the template as a work item template (_.wt_) file.

- Manage **Work Item Templates** from the **Team Explorer** pane. The root **Templates** node represents the parent for all of your templates:

   :::image type="content" source="media/wi-templates-section-te.png" border="false" alt-text="Screenshot that shows how to access templates in Team Explorer with Power Tools.":::
   
   You can create a directory structure under the root node by adding folders.
   
   - Right-click the **Templates** node or another folder and select **New Folder**.

   - You can also drag and drop templates into folders.

- **Cut**, **Copy**, **Paste**, **Rename**, and **Delete** actions: Use these actions on templates and folders with the right-click context menu.
   
   - To edit multiple templates, use **Shift** + **Select** to choose a range of items. You can use **Ctrl** + **Select** to add individual templates to the selected group. Use the right-click context menu on one of the selected items and select the action to apply. The action affects all selected items.

### Define a template  

Use the following procedure to define a work item template in Visual Studio and Team Explorer:

1. In the **Team Explorer** pane, right-click **Templates** and select **New template** to create a template from scratch.

1. In the **Select Work Item Type** dialog, use the dropdown list and select the **Work Item Type** to use for the new template, and select **OK**:

   :::image type="content" source="media/wi-templates-new-template-te.png" border="false" alt-text="Screenshot that shows how to select the work item type in the Select Work Item Type dialog in Visual Studio.":::

1. In the **Save Work Item Template As** dialog, enter a **Name** for template, choose where to locate the template (under **Templates** or in a file), and then select **Save**:  

   :::image type="content" source="media/wi-templates-new-template-save-as-te.png" alt-text="Screenshot of the Save Work Item Template As dialog in Visual Studio.":::

1. After you save the template, you can use the **Copy link** option to capture the URL for the template. Use the URL to create work items based on the template.

### Edit, use, copy, or delete a template

You can perform several other actions on a work item template in Visual Studio and Team Explorer via the right-click context menu.

- **Edit**, **Copy**, **Delete**, and more: In the **Team Explorer** pane **Work Item Templates** section, right-click the work item template and select the desired action: 

	:::image type="content" source="media/wi-templates-context-menu-te.png" border="false" alt-text="Screenshot of the right-click context menu for a work item template in Team Explorer.":::

- **Set default templates**: To make frequently used templates more accessible, you can set a default template for each work item type. Right-click a template and select **Set As Default**. In the **Team Explorer** pane, a checkmark appears on the work item template icon to identify the template as a default. 

### Set your template save location

You can change the primary save location for templates. Use the **Configure** action in the **Team Explorer** pane **Work Item Templates** section. Or, select **Tools** > **Options** > **Microsoft Team Foundation Server** > **Work Item Templates**.

In the dialog, set your template store path. Place your templates in a network location so you can share them with your team.  

* * *

## Add a work item by using a template  

The most common approach for adding a work item by using a template is to open the template link within a browser window.

1. To get the template link, see the [Edit, delete, copy link, create copy](#edit-delete-copy-link-or-create-copy) section.

1. To create the new work item, paste the template link in a browser window, configure the required fields, and save your changes.

## Apply a template to new or existing work items  

You can apply a template to a new or existing work item or do a bulk update of several existing work items.  

### [Web portal](#tab/browser/)

In the web portal, you can apply a template within an open work item or to selected work items.

### Apply a template within a work item 

Use the following procedure to apply a template to a new or existing work item:

1. Open a new work item or an existing work item that you want to update by using the fields defined within a template.

1. Select :::image type="icon" source="../media/icons/actions-icon.png"::: **More actions** > **Templates**, and then select the name of a predefined template: 

   :::image type="content" source="media/templates/apply-template-vsts-s136.png" alt-text="Screenshot that shows how to apply a template to an existing work item within the form.":::

   > [!NOTE]
   > The **Templates** list shows templates defined for teams of which you're a member. If the list is empty, there might not be any templates for the work item type. Refresh your browser to discover the latest available templates.

1. Select **Save** to apply the selected template. Any field changes are noted in the work item **History** field.

### Apply a template to several work items

Use the following procedure to apply a template to selected work items for a bulk update:

1. Select the work items from the **Backlog** or a **Queries** results list. All work items you select must be of the same work item type, such as **Bug** or **Feature**.

1. Select :::image type="icon" source="../media/icons/actions-icon.png"::: **More actions** > **Templates** for one of the selected work items, and select the template to apply. 
 
   :::image type="content" source="media/templates/bulk-apply-template-vsts-s136.png" alt-text="Screenshot that shows how to apply a template to multiple work items for a bulk update.":::

The field changes are automatically applied and the work items saved. Any field changes are noted in the work item **History** field. For more information about bulk updates, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md).

### [Visual Studio 2015](#tab/visual-studio/)

Use the following procedure to apply a template to new or existing work items inVisual Studio: 

1. Open or run a query that lists one or more work items with fields that you want to capture.

1. Select the work items to use for the action. All selected work items must have the same work item type.

1. Right-click one of the selected work items and select **Apply Template**:  

   :::image type="content" source="media/wi-templates-apply-template-options-te.png" alt-text="Screenshot that shows how to select the Apply template action to selected work items in Visual Studio with Power Tools.":::

1. In the **Select the Template to Apply** dialog, select the template to apply, and select **OK**. 

   :::image type="content" source="media/wi-templates-apply-template-dialog-te.png" alt-text="Screenshot of the Select the Template to Apply dialog in Visual Studio with Power Tools.":::

1. Select **Save Results** to save the work item: 

   :::image type="content" source="media/wi-templates-apply-save-work-items-te.png" alt-text="Screenshot that shows how to save changes to the work item in Visual Studio with Power Tools.":::

* * *

## Add or remove tags from templates 

In Visual Studio 2015 or earlier, you can add tags to a template and they're applied to the work item when you use the template. To add two or more tags, separate them with a comma (**,**). This task isn't available in the web portal.

:::image type="content" source="media/templates/edit-template-add-tags.png" alt-text="Screenshot of the Edit template dialog showing how to add or remove tags.":::

If you don't specify tags to remove, then all tags present in a work item remain defined. The tags remain defined even when you apply a work item template to an existing work item. 

## Define an unplanned work item template with a hyperlink  

In Visual Studio 2015 or earlier, you can specify a work item template that defines several field values by using the following syntax. You can use the URL whenever you want to add a work item of the same type with predefined values. This task isn't available in the web portal.

::: moniker range="azure-devops"

```URL
https://dev.azure.com/<Organization_Name>/<Project_Name>/_workItems/create/<Work_Item_Type>?
[FieldReferenceName 1]={FieldValue 1}&
[FieldReferenceName 2]={FieldValue 2}&
[FieldReferenceName 3]={FieldValue 3}&
. . .
```

::: moniker-end
::: moniker range="< azure-devops"

```URL
http://<Server_Name>:8080/tfs/DefaultCollection/<Project_Name>/_workItems/create/<Work_Item_Type>?
[FieldReferenceName 1]={FieldValue 1}&
[FieldReferenceName 2]={FieldValue 2}&
[FieldReferenceName 3]={FieldValue 3}&
. . .
```

::: moniker-end

For example, the following code specifies a work item task with the **Title** _TaskTitle_. The syntax specifies values for the **Assigned To**, **Description**, **Tags**, **Activity**, and **Iteration Path** fields. 

::: moniker range="azure-devops"

```URL
https://dev.azure.com/<Organization_Name>/<Project_Name>/_workItems/create/Task?
[System.Title]=TaskTitle&
[System.AssignedTo]=Jamal+Hartnett&
[System.Description]=<p>Always+include+Remaining+Work+and+links+to+any+related+bugs+or+user+stories.</p>&
[System.Tags]=Web;+Phone;+Service&
[Microsoft.VSTS.Common.Activity]=Development&
[System.IterationPath]=Fabrikam+Fiber%5CIteration+1
``` 

::: moniker-end
::: moniker range="< azure-devops"

```URL
http://<Server_Name>:8080/tfs/DefaultCollection/<Project_Name>/_workItems/create/Task?
[System.AssignedTo]=Jamal+Hartnett&
[System.Description]=<p>Always+include+Remaining+Work+and+links+to+any+related+bugs+or+user+stories.</p>&
[System.Tags]=Web;+Phone;+Service&
[Microsoft.VSTS.Common.Activity]=Development&
[System.IterationPath]=Fabrikam+Fiber%5CIteration+1
``` 

::: moniker-end

> [!NOTE] 
> Some browser clients impose a 2,000 character limit for field values.

You can save the URL as a text file or add the URL to a dashboard or web page as a hyperlink. 

## Add a template link to a team dashboard

You can add links to a Markdown widget on your team dashboard in the web portal. These links open a work item with the template-defined fields predefined.

The following example shows a widget with links to three templates:

:::image type="content" source="media/wi-templates-markdown-widget-with-template-links.png" border="false" alt-text="Screenshot of a Markdown widget with links to templates.":::

For more information, see [Add Markdown to a dashboard, Markdown widgets](../../report/dashboards/add-markdown-to-dashboard.md). 

## Related content

- [Azure Boards FAQs](../faqs.yml) 
- [Sample work item templates](../work-items/work-item-template-examples.md)
