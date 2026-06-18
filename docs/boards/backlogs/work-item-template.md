---
title: Update Work Items with Templates in Azure Boards
titleSuffix: Azure Boards
description: Add and manage Azure DevOps work item templates, update work items, and prepopulate work item fields in the web portal and Visual Studio.
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.custom: work-items
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
ms.date: 06/17/2026
#customer intent: As a project member, I want to use Azure DevOps work item templates, so I can update work items in Azure Boards.
---

# Use work item templates

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)] 

<!--- Supports FWLINK https://go.microsoft.com/fwlink/?LinkId=824070 -->

Use work item templates to quickly create work items with predefined field values and apply consistent updates across multiple items. This article explains how to add and manage templates in the web portal and, for legacy environments, in Visual Studio 2015 or earlier. For examples, see [Sample work item templates](../work-items/work-item-template-examples.md).

Use the web portal for the current Azure DevOps experience. Use Visual Studio 2015 with Power Tools only when your environment still depends on Team Explorer-based template management.

Work item templates are different from process templates. For more information, see [About processes and process templates](../work-items/guidance/choose-process.md) and the default process template articles for [Basic](../get-started/plan-track-work.md?tabs=basic-process&preserve-view=true), [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), and [Capability Maturity Model Integration (CMMI)](../work-items/guidance/cmmi-process.md).  

## Choose your workflow

Use this table to choose the right workflow.

| If you want to... | Use... | Why |
| --- | --- | --- |
| Capture, manage, and apply templates in the current experience | **Web portal** (primary) | Team-scoped templates are managed in Azure DevOps.
| Reuse centrally managed defaults for a team and work item type | **Saved templates** | Templates are discoverable and reusable by team members.
| Share a quick link that opens a new work item with predefined values | **Template URLs** | Best for lightweight sharing in dashboards, wikis, or messages.
| Continue a Team Explorer-based legacy workflow | **Visual Studio 2015 with Power Tools** (legacy) | Applies only when your environment still depends on legacy tooling.

## Prerequisites

| Prerequisite    | Description |
| ----------------|-------------|
| Web portal workflow (primary) | - Access to an Azure DevOps organization and project. <br>- To manage templates, be a member of the team that owns the templates. <br>- To use templates, have **Contributor** access to the project. <br>- Use a supported browser and open Azure DevOps in the web portal. |
| Visual Studio 2015 workflow (legacy) | - Use this workflow only when your environment still depends on Team Explorer template management. <br>- Install [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power). <br>- Templates captured in this workflow are user-scoped and appear only in Team Explorer. |

### Restrictions for using templates

Templates defined in the web portal are separate from templates defined in Visual Studio.

| Template type | Scope | Where you can manage and apply it |
| --- | --- | --- |
| Web portal template | Team-scoped | Web portal only |
| Visual Studio template | User-scoped | Visual Studio only |

You can use the URL from either template type to add work items through the web portal.

## Supported template tasks

The availability of template tasks depends on your client and platform configuration. Use the web portal for the primary Azure DevOps workflow. Use Visual Studio 2015 with Power Tools only for legacy scenarios.

The following table summarizes task availability in the web portal and in the legacy Visual Studio workflow.

| Template task | Web portal | Visual Studio |
|---------------|:----------:|:-------------:|
| [Capture a work item as a template](#capture-a-work-item-as-a-template) | ✔️ | ✔️ |
| [Manage work item templates](#manage-work-item-templates) <br>(Define, edit, delete, copy link, create copy, and rename) | ✔️ | ✔️ |
| [Copy the link (URL) of a template](#edit-delete-copy-link-or-create-copy) | ✔️ | ✔️ |
| [Add a work item by using a template](#add-a-work-item-by-using-a-template) | ✔️ | ✔️ |
| [Define a work item template](#create-a-work-item-template) | ✔️ | ✔️ |
| [Apply a template to one or more work items](#apply-a-template-to-new-or-existing-work-items) | ✔️ | ✔️ |
| [Add or remove tags from templates](#add-or-remove-tags-from-templates) |  | ✔️ |
| [Define a template with a hyperlink](#create-a-work-item-from-a-template-url) | ✔️ |  |

## Capture a work item as a template

Use the procedure that matches your client: web portal (primary) or Visual Studio 2015 and earlier (legacy).

#### [Web portal](#tab/browser/)

Each template you capture in the web portal gets a unique GUID. Use the following steps to capture a work item as a template and copy its link.

1. In the web portal, open the work item you want to use as the template source.

1. At the right, select :::image type="icon" source="../media/icons/actions-icon.png"::: **More actions** > **Templates** > **Capture**:

   :::image type="content" source="media/templates/wi-templates-capture-bug-vsts-s136.png" alt-text="Screenshot that shows how to select the capture work item field definitions as a template option from the More actions menu." lightbox="media/templates/wi-templates-capture-bug-vsts-s136.png":::

1. In **Capture Template**, configure required and optional fields:

   - **Team** (required): Select the team to associate with the template.
   
   - **Name** (required): Enter a template name.
   
   - **Fields**: Use :::image type="icon" source="../media/icons/green_plus_icon.png"::: **Add** to include fields, :::image type="icon" source="../media/icons/delete_icon.png"::: **Delete** to remove fields, and set field **Value** as needed.

   - **Notes**: Add template context. When you create a work item from the template, this text appears as the first entry in the **Discussion** thread.

   :::image type="content" source="media/templates/capture-template-vsts-s136.png" alt-text="Screenshot that shows how to configure fields on the Capture template dialog in the web portal.":::

1. Select **Save**, and then select **Copy link** to copy the template URL.

   Use the URL to create work items of the same type with predefined values. For common sharing scenarios, see [Create a work item from a template URL](#create-a-work-item-from-a-template-url) and [Add a template link to a team dashboard](#add-a-template-link-to-a-team-dashboard).

1. Verify the template appears in the selected team's template list for that work item type, and the copied link opens a new work item form with predefined values.

#### [Visual Studio 2015](#tab/visual-studio/)

> [!NOTE]
> This workflow applies to legacy Visual Studio 2015 with Power Tools scenarios.

In Visual Studio or Team Explorer, you can create work items from a work item template file (_.wt_) or similar file. Access these files from the **Work Items** page.
 
1. Sign in to Visual Studio.

1. Open or run a query that lists the work item whose fields you want to capture.

1. Right-click the work item, and select **Capture Template**:

   :::image type="content" source="media/wi-templates-te-capture-wi-as-template.png" border="false" alt-text="Screenshot that shows how to capture work item field definitions as a template in Visual Studio with Power Tools.":::

1. In **Capture Template**, configure required fields and any optional fields:

   - **Name** (required): Enter a template name.
   
   - **Fields** (required): In the **Includes** column, select each field to include. Set field **Value** as needed. To include all fields, use **Select All**.

   :::image type="content" source="media/wi-templates-capture-template-dialog-te.png" border="false" alt-text="Screenshot that shows how to configure fields on the Capture template dialog in Visual Studio with Power Tools.":::

1. Select **Save**. The template appears in **Team Explorer** under **Work Item Templates** > **Templates**.

1. Verify the template is listed under **Team Explorer** > **Work Item Templates**, and that applying it prepopulates the selected fields.

* * *

## Manage work item templates

For each work item type, you can view and manage templates defined by your team. You can add, edit, copy, delete, rename, and copy a template link.

#### [Web portal](#tab/browser/)

Use these steps to open work item templates in the web portal:

1. In the web portal, open **Project settings**.

1. Under **Boards**, select **Team configuration**.

1. If you need a different team, use the **Team** selector in the breadcrumb trail.

1. On the **Boards** page, select **Templates**:

   :::image type="content" source="../../media/settings/open-templates-from-project-settings-boards-team.png" border="false" alt-text="Screenshot that shows how to access the list of saved templates in Azure DevOps from Project settings, Boards, Team configuration, Templates." lightbox="../../media/settings/open-templates-from-project-settings-boards-team.png":::

1. Select a work item type, such as **Bug**, **Feature**, or **Test Case**, to view or add templates for that type:

   :::image type="content" source="media/templates/templates-bug-type-selected.png" alt-text="Screenshot of templates defined for the Bug work item type.":::

##### Create a work item template

Use these steps to create a work item template in the web portal:

1. On the work item type page, select :::image type="icon" source="../media/icons/green_plus_icon.png"::: **New template**:
    
   :::image type="content" source="media/wi-templates-new-template.png" alt-text="Screenshot showing how to add a new template for the Bug work item type.":::

   > [!NOTE]
   > If you plan to use markdown in a large text field, add `<br>` tags to manage line breaks and ensure the markdown renders correctly.

1. In the **New Template** dialog, enter a **Name** (required), and then add any optional fields and values.

1. Select **Save**. The **Copy link** option becomes available.

1. Select **Copy link** to copy the template URL.

1. Verify the template is listed for the selected work item type and that the copied link opens a new work item form with template values.

##### Edit, delete, copy link, or create copy

After you save a template, you can update it, remove it, copy its link, or create a copy.

On the work item type page, select :::image type="icon" source="../media/icons/actions-icon.png"::: **More actions** for a template, and then choose one of these options:

:::image type="content" source="media/wi-templates-template-action-menu.png" alt-text="Screenshot of the More actions menu options for a selected template."::: 

- **Edit**: Select **Edit**, update the template, and then select **Save**.

- **Delete**: Select **Delete**, and then confirm. Deleted templates can't be recovered.

- **Copy link**: Select **Copy link** to copy the template URL. For sharing options, see [Create a work item from a template URL](#create-a-work-item-from-a-template-url) and [Add a template link to a team dashboard](#add-a-template-link-to-a-team-dashboard).

- **Create copy**: Select **Create copy**, enter a name, optionally adjust fields, and then select **Save**.

1. Verify the template list reflects your action (updated values, renamed item, copied template, or removed template).

1. Verify that **Copy link** opens a new work item form with the expected template values.

#### [Visual Studio 2015](#tab/visual-studio/)

> [!NOTE]
> This workflow applies to legacy Visual Studio 2015 with Power Tools scenarios.

Use Visual Studio with Power Tools to manage your personal work item templates. For each work item type, you can view templates and use actions such as **Add**, **Edit**, **Delete**, and **Copy**. You can share templates by sharing the template URL or by saving a work item template (_.wt_) file.

- Manage **Work Item Templates** from the **Team Explorer** pane. The root **Templates** node is the parent for all templates:

   :::image type="content" source="media/wi-templates-section-te.png" border="false" alt-text="Screenshot that shows how to access templates in Team Explorer with Power Tools.":::
   
   You can organize templates into folders under the root node.
   
   - Right-click the **Templates** node or another folder and select **New Folder**.

   - You can also drag and drop templates into folders.

- **Cut**, **Copy**, **Paste**, **Rename**, and **Delete**: Use the right-click context menu on templates and folders.
   
- To edit multiple templates, use **Shift** + **Select** for a range or **Ctrl** + **Select** for individual items. Then open the right-click context menu on one selected item and choose an action. The action applies to all selected items.

##### Define a template

Use these steps to define a work item template in Visual Studio and Team Explorer:

1. In the **Team Explorer** pane, right-click **Templates** and select **New template** to create a template from scratch.

1. In the **Select Work Item Type** dialog, use the dropdown list and select the **Work Item Type** to use for the new template, and select **OK**:

   :::image type="content" source="media/wi-templates-new-template-te.png" border="false" alt-text="Screenshot that shows how to select the work item type in the Select Work Item Type dialog in Visual Studio.":::

1. In the **Save Work Item Template As** dialog, enter a **Name**, choose where to save the template (under **Templates** or in a file), and then select **Save**:

   :::image type="content" source="media/wi-templates-new-template-save-as-te.png" alt-text="Screenshot of the Save Work Item Template As dialog in Visual Studio.":::

1. After you save the template, select **Copy link** to copy the template URL. Use the URL to create work items based on the template.

1. Verify the template appears in your **Work Item Templates** tree and the copied link opens a new work item form with predefined values.

##### Edit, use, copy, or delete a template

You can perform other template actions in Visual Studio and Team Explorer by using the right-click context menu.

- **Edit**, **Copy**, **Delete**, and more: In **Team Explorer** under **Work Item Templates**, right-click a template and select an action:

	:::image type="content" source="media/wi-templates-context-menu-te.png" border="false" alt-text="Screenshot of the right-click context menu for a work item template in Team Explorer.":::

- **Set default templates**: To make frequently used templates easier to access, set a default template for each work item type. Right-click a template and select **Set As Default**. In **Team Explorer**, a checkmark appears on the template icon.

#### Set your template save location

You can change the default save location for templates. Use **Configure** in **Team Explorer** under **Work Item Templates**, or select **Tools** > **Options** > **Microsoft Team Foundation Server** > **Work Item Templates**.

In the dialog, set the template store path. To share templates with your team, use a network location.

* * *

## Add a work item by using a template  

Use the template link in a browser to create a work item with predefined values.

1. Get the template link. For more information, see [Edit, delete, copy link, create copy](#edit-delete-copy-link-or-create-copy).

1. Paste the template link into a browser, complete required fields, and save your changes.

1. Verify the new work item opens with template-defined values populated before you save.

## Apply a template to new or existing work items  

Apply a template to a new or existing work item, or use a template for bulk updates.  

#### [Web portal](#tab/browser/)

In the web portal, you can apply a template in an open work item or across selected work items.

##### Apply a template within a work item

Use these steps to apply a template to a new or existing work item:

1. Open a new or existing work item that you want to update with template-defined values.

1. Select :::image type="icon" source="../media/icons/actions-icon.png"::: **More actions** > **Templates**, and then select the name of a predefined template: 

   :::image type="content" source="media/templates/apply-template-vsts-s136.png" alt-text="Screenshot that shows how to apply a template to an existing work item within the form.":::

   > [!NOTE]
   > The **Templates** list shows templates defined for teams of which you're a member. If the list is empty, there might not be any templates for the work item type. Refresh your browser to discover the latest available templates.

1. Select **Save** to apply the template. Field changes are recorded in the work item **History** field.

1. Verify the fields update in the form and the work item **History** records the saved changes.

##### Apply a template to several work items

Use these steps to apply a template to selected work items for a bulk update:

1. Select work items from the **Backlog** or a **Queries** results list. All selected items must be the same work item type, such as **Bug** or **Feature**.

1. Select :::image type="icon" source="../media/icons/actions-icon.png"::: **More actions** > **Templates** for one of the selected work items, and select the template to apply. 
 
   :::image type="content" source="media/templates/bulk-apply-template-vsts-s136.png" alt-text="Screenshot that shows how to apply a template to multiple work items for a bulk update.":::

   The field changes are applied and saved automatically. Field changes are recorded in the work item **History** field. For more information about bulk updates, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md).

1. Verify each selected work item shows updated field values and corresponding **History** entries.

#### [Visual Studio 2015](#tab/visual-studio/)

> [!NOTE]
> This workflow applies to legacy Visual Studio 2015 with Power Tools scenarios.

Use these steps to apply a template to new or existing work items in Visual Studio:

1. Open or run a query that lists one or more work items to update.

1. Select the work items for the action. All selected work items must have the same work item type.

1. Right-click one of the selected work items and select **Apply Template**:  

   :::image type="content" source="media/wi-templates-apply-template-options-te.png" alt-text="Screenshot that shows how to select the Apply template action to selected work items in Visual Studio with Power Tools.":::

1. In the **Select the Template to Apply** dialog, select the template to apply, and select **OK**:

   :::image type="content" source="media/wi-templates-apply-template-dialog-te.png" alt-text="Screenshot of the Select the Template to Apply dialog in Visual Studio with Power Tools.":::

1. Select **Save Results** to save the work item changes:

   :::image type="content" source="media/wi-templates-apply-save-work-items-te.png" alt-text="Screenshot that shows how to save changes to the work item in Visual Studio with Power Tools.":::

1. Verify the updated field values are retained when you reopen the work item.

* * *

## Add or remove tags from templates 

In Visual Studio 2015 or earlier versions, you can add tags to a template. When you use the template, the tags automatically apply to the work item. To add two or more tags, separate them with a comma (,). You can't add tags in the web portal.

:::image type="content" source="media/templates/edit-template-add-tags.png" alt-text="Screenshot of the Edit template dialog showing how to add or remove tags.":::

If you don't specify tags to remove, all tags in a work item stay defined. The tags stay defined even when you apply a work item template to an existing work item. 

Verify in Visual Studio that the template retains the configured tags and applied work items include those tags after you save.

## Create a work item from a template URL

Create a URL that opens a new work item with predefined field values. Use this approach when you want a shareable shortcut to a common work item configuration.

Use saved templates for reusable, team-managed defaults. Use template URLs when direct link sharing is the primary experience.

- **Use saved templates when** your team needs centrally managed defaults.
- **Use template URLs when** you need lightweight sharing in dashboards, wikis, or messages.

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

The following example creates a **Task** work item with a predefined **Title**, **Assigned To**, **Description**, **Tags**, **Activity**, and **Iteration Path**.

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

You can save the URL as a text file, or add it as a hyperlink on a dashboard or webpage.

Verify opening the URL loads the correct work item type and shows predefined field values in the new work item form.

## Add a template link to a team dashboard

Add template links to a Markdown widget on your team dashboard in the web portal. Each link opens a new work item with predefined template values.

The following example shows a Markdown widget with links to three templates:

:::image type="content" source="media/wi-templates-markdown-widget-with-template-links.png" border="false" alt-text="Screenshot of a Markdown widget with links to templates.":::

For setup steps, see [Add Markdown to a dashboard, Markdown widgets](../../report/dashboards/add-markdown-to-dashboard.md).

## Troubleshoot template issues

- **Templates menu doesn't appear**: Verify that you have access to the project and that you're using the workflow supported by your client.
- **Templates list is empty in the web portal**: Confirm that templates exist for the selected work item type and that you're a member of the team that owns the templates. Refresh the browser to load the latest templates.
- **Can't manage a team template**: Verify that you're a member of the team that owns the template.
- **Can't apply a template to several work items**: Confirm that all selected work items are the same work item type.
- **Visual Studio template options aren't available**: Confirm that you're using the legacy Visual Studio 2015 workflow and that Microsoft Visual Studio Team Foundation Server 2015 Power Tools are installed.
- **Template URL opens without expected values**: Confirm that each field reference name is valid for the target work item type and that values are URL-encoded (for example, spaces as `+` or `%20`).
- **Template URL fails to load**: Confirm that the URL uses the correct organization, project, and work item type, and that you're signed in to an account with project access.
- **Some fields from a template don't populate**: Confirm that the fields still exist on the work item type and aren't restricted by process customization rules.

## Related content

- [Azure Boards FAQs](../faqs.yml) 
- [Sample work item templates](../work-items/work-item-template-examples.md)
- [Bulk modify work items](../backlogs/bulk-modify-work-items.md)
