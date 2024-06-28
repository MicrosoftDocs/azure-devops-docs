---
title: Use Azure DevOps work item templates to update work items in Azure Boards
titleSuffix: Azure Boards
description: Learn how to add and manage Azure DevOps work item templates to update work items in Azure Boards. Learn to prepopulate work item form fields in Azure DevOps and Visual Studio.
ms.service: azure-devops-boards
ms.assetid: 9b575c05-16f3-4027-aa5a-67b017a0089d
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.custom: work-items
monikerRange: '<= azure-devops'
ms.date: 04/29/2024
---

# Use work item templates

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)] 

<!--- Supports FWLINK https://go.microsoft.com/fwlink/?LinkId=824070 -->

With work item templates, you can quickly create work items with prepopulated values for your team's commonly used fields. You can use work item templates to create work items or make bulk updates to several work items. You can add and manage work item templates from the web portal or from Visual Studio 2015 or earlier versions. For examples showing usage of work item templates, see [Sample work item templates](../work-items/work-item-template-examples.md). 

Work item templates are distinct from process templates. For more information, see [About processes and process templates](../work-items/guidance/choose-process.md) or these specific articles for default process templates: [Basic](../get-started/plan-track-work.md), [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [CMMI](../work-items/guidance/cmmi-process.md).  

## Supported template tasks

The availability of template task options depends on your client and platform version. You can add and manage work item templates from the web portal or from Visual Studio 2015 or earlier versions. For more information, see the [prerequisites](#prerequisites) in this article.

As shown in the following table, a ✔️ indicates the task is available from the web portal or from Visual Studio 2015 or earlier versions. *(Make sure to select the content version based on your platform version)*. 

---  
:::row:::
   :::column span="2":::
      **Task** 
   :::column-end:::
   :::column span="1":::
      Web portal
   :::column-end:::
   :::column span="1":::
      Visual Studio 2015 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Capture a work item as a template](#capture)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Manage work item templates](#manage)  
      (Define, edit, delete, copy link, create copy, and rename)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Copy link (URL) of a template](#edit-delete-copy-link-or-create-copy)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Add a work item using a template](#add-wi)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Define a work item template](#define-template)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Apply a template to one or more work items](#apply)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Add or remove tags from templates](#tags)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Define a template using a hyperlink](#adhoc-template) 
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
          
   :::column-end:::
:::row-end:::
---

> [!TIP]    
> The templates you define through the web portal are distinct from those you define through Visual Studio. Web portal templates can only be managed and applied to work items through the web portal. Similarly, Visual Studio templates can only be managed, viewed, and applied to work items in Visual Studio. But, you can use the URLs of both template types to add work items through the web portal. 

## Prerequisites

- To manage work item templates in the web portal, you need to join the team that owns them. You can then add, edit, or delete templates as needed.

- You need to be a project Contributor and a team member to use work item templates in the web portal. You can then apply templates to existing work items. 

- To add, capture, or edit work item templates through Visual Studio Team Explorer, install the [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power). These templates only appear in your view of Team Explorer. 

<a id="capture"> </a> 

## Capture a work item as a template

Depending on the platform, version, and client you use, you might need to follow different steps to capture a work item.

### [Web portal](#tab/browser/)

<a id="team-services-capture"></a> 

Templates captured through the web portal get assigned a GUID. 

1. From the web portal, open a work item to use as the basis for a template.  

2. Select the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon, and then choose **Templates** > **Capture**.   

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Capture work item field definitions as a template, latest version.](media/templates/wi-templates-capture-bug-vsts-s136.png) 

    Name the template, select the team for which you want to save it under, and optionally define or clear fields. Save the template when finished. 

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Capture template dialog.](media/templates/capture-template-vsts-s136.png) 

3. **Save** the template, and then select **Copy link** to capture the URL for the template. 

4. You can paste the URL link into a browser to create a work item, or provide it to others for their use to add work items. For example, you can add it as a hyperlink to a [project wiki](../../project/wiki/wiki-create-repo.md), a [dashboard via a Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), or other shared network resource.

	Use the URL whenever you want to add a work item of the same type with predefined values.

<a id="tfs-portal-capture"></a> 

### [Visual Studio 2015](#tab/visual-studio/)

<a id="team-explorer-capture"></a>

To create work items from templates in Visual Studio or Team Explorer, you can use work item template files, for example, .wt extension. These files are accessible from the Work Items page.
 
1. Sign in to Visual Studio.

1. Open or run a query that lists the work item whose fields you want to capture.

2. Right-click the work item of the type and whose fields you want to capture, and select **Capture Template** from the context menu.

   :::image type="content" source="media/wi-templates-te-capture-wi-as-template.png" alt-text="Screenshot of Capture work item field definitions as a template from Visual Studio with Power Tools installed.":::

3. In the dialog, use the checkboxes to select all the fields you want to save in the template. Then, add a name and (optionally) description to the template. 

   :::image type="content" source="media/wi-templates-capture-template-dialog-te.png" alt-text="Screenshot of Capture template dialog from Visual Studio with Power Tools installed.":::

4. **Save** the template, which appears in the root of the Team Explorer pane under the Templates section.  

* * *

<a id="manage"> </a> 

## Manage work item templates

For each work item type, you can see and manage the templates that your team defined. You can perform various actions on the templates, such as adding, editing, copying, deleting, renaming, and getting the link. 

### [Web portal](#tab/browser/)

<a id="team-services-manage"></a> 

1. From the web portal, open **Project settings**.

    :::image type="content" source="../../media/settings/open-project-settings-vert-brn.png" alt-text="Screenshot showing project settings button.":::

    Expand **Boards** and choose **Team configuration**. If you need to switch to a different team, use the team selector.

2. Select **Templates**.
3. Choose any work item type to view or add templates for that type.  

<a id="team-services-manage"></a> 

### Manage templates for a work item type

1. Select **Project settings** > **Team configuration** > **Templates**. 
2. Select a work item type to view its defined templates. 

For example, select **User Story** to view templates defined for capturing user stories.

:::image type="content" source="media/templates/templates-user-story-type-selected.png" alt-text="Screenshot of User Story templates selection.":::  

<a id="define-template"></a>

### Create a work item template 

1. From the work item type page, select the ![green plus icon](../media/icons/green_plus_icon.png) **New template** to create a template from scratch.  
    
   :::image type="content" source="media/wi-templates-new-template.png" alt-text="Screenshot showing adding a user story template.":::

2. Name the template and optionally add and remove fields. **Save** the template when you're done. 

3. To get the URL for the template, choose **Copy link**. You can use this URL to create work items based on the template.

### Edit, delete, copy link, or create copy

From the work item type page, choose  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: the actions icon for an existing template to access the menu options to **Edit**, **Delete**, **Copy link**, or **Create copy**.  

:::image type="content" source="media/wi-templates-template-action-menu.png" alt-text="Screenshot of Open template action menu."::: 

- Edit: Select **Edit** and **Save** your changes.
- Delete: Select **Delete**, and then **Delete** again from the template confirmation dialog. Once you delete a template, you can't recover it.
- Copy link: Select **Copy link**. Use the URL whenever you want to add a work item of the same type with predefined values. You can save the URL as a text file, add it to a web page as a hyperlink, copy the link to a shared network, or send to your team via email. Also, consider [adding a link to the team dashboard](#markdown-widget). 
- Create copy: Select **Create copy**. Name the template, optionally add and remove fields, and then **Save** it when you're done. 

### [Visual Studio 2015](#tab/visual-studio/)

<a id="team-explorer-manage"></a>

You can use Visual Studio with power tools to manage your own work item templates. For each work item type, you can see your defined templates and perform various actions on them. You can add, edit, delete, copy, and copy templates. You can share your templates with others by sending them the template URL or saving the template as a `.wt` file.

- Manage templates from the Team Explorer pane.  

	![Templates, Team Explorer with power tools installed](media/wi-templates-section-te.png)  

	The root Templates node represents the parent to all of your templates. You can create a directory structure underneath it by adding folders. Right-click on the **Templates** node or a folder and select **New Folder** from the context menu.  

- Cut, copy, paste, rename, and delete templates and folders using the context menu. You can also drag and drop templates into folders. To edit multiple templates, use shift-click to select a range or ctrl-click to add individual templates to your selection, then right-click. 

### Define a template  

1. From the **Templates** section, right-click **Templates** and choose to create a template from scratch.

   :::image type="content" source="media/wi-templates-new-template-te.png" alt-text="Screenshot of Add a new template, Visual Studio.":::

2. Provide a name in the dialog and **Save** your template.  

   :::image type="content" source="media/wi-templates-new-template-save-as-te.png" alt-text="Screenshot of Provide a Name in the dialog provided.":::

3. Select **Copy link** to capture the URL for the template that you can use to add work items using the template.  

### Edit, use, copy, or delete a template  

- To edit, delete, or complete another action on a template, open its context menu (right-click) and choose the option you want.  

	:::image type="content" source="media/wi-templates-context-menu-te.png" alt-text="Screenshot of Open context menu and choose the option you want.":::  

- To make frequently used templates more accessible, you can set a default template for each work item type. To do so, right-click on a template in Team Explorer and select **Set As Default**. A checkmark appears on the icon to indicate that it's now the default. 

### Set your template directory  

- To change the directory where templates are stored, select the Configure link, or go to it via **Tools** > **Options** > **Microsoft Team Foundation Server** > **Work Item Templates**. Use this dialog to set your template store path. Place your templates in a network location to share them with your team.  

* * *

<a id="add-wi"> </a>

## Add a work item using a template  

The main method used to add a work item using a template is to open the template link within a browser window. To get the template link, see the [Edit, delete, copy link, create copy](#edit-delete-copy-link-or-create-copy) section.

<a id="apply"> </a>

## Apply a template to new or existing work items  

You can apply a template to a single work item or do a bulk update of several work items.  

<a id="team-services-apply"></a>

### [Web portal](#tab/browser/)

### Apply a template within a work item 

1. Open a new work item or an existing work item that you want to update using the fields defined within a template, choose the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon to open the menu, select **Templates**, and then select the name of a predefined template.  

   :::image type="content" source="media/templates/apply-template-vsts-s136.png" alt-text="Screenshot of Apply a template to an existing work item within the form.":::

   Only those templates defined for teams that you belong to appear.  

   > [!TIP]  
   > Refresh your browser to discover the latest templates added. If you don't see any templates, there might not be any for that work item type. 

2. Save the work item for the changes to be applied. The fields changed are noted in the History field.

<a id="apply-multiple"> </a>

### Apply a template to several work items

1. To bulk update several work items, first select them from the backlog or a query results list, and then open the actions menu for one of them. All work items you select must be of the same work item type. For example, all user stories or all bugs. 

2. Choose the template to apply. 
 
   :::image type="content" source="media/templates/bulk-apply-template-vsts-s136.png" alt-text="Screenshot of Bulk update several work items.":::

3. Field changes are automatically applied and work items saved. To learn more about bulk updates, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md).

### [Visual Studio 2015](#tab/visual-studio/)

<a id="team-explorer-apply"></a>

1. Open or run a query that lists one or more work items whose fields you want to capture.  

2. Right-click the work items—which must be of the same type—and choose **Apply Template** from the context menu.  

   :::image type="content" source="media/wi-templates-apply-template-options-te.png" alt-text="Screenshot of Apply template to selected work item from Visual Studio with Power Tools installed.":::

3. Select the template to use and select OK. 

   :::image type="content" source="media/wi-templates-apply-template-dialog-te.png" alt-text="Screenshot of Apply template dialog from Visual Studio with Power Tools installed.":::

4.  Save the work item.  

   :::image type="content" source="media/wi-templates-apply-save-work-items-te.png" alt-text="Screenshot of Save changes from Visual Studio with Power Tools installed.":::

* * *

<a id="tags"> </a>

## Add or remove tags from templates 

You can add tags to a template and they're applied to the work item when you use the template. To add two or more tags, delimit them with a comma (,).

> [!div class="mx-imgBorder"]  
> ![Edit bug template, add or remove tags](media/templates/edit-template-add-tags.png)

If you don't specify tags to remove, then all tags present in a work item remain defined. They remain defined even when you apply a work item template to an existing work item. 

<a id="adhoc-template"> </a>

## Define an unplanned work item template using a hyperlink 

You can specify a work item template that specifies several field values using the following syntax. Use the URL whenever you want to add a work item of the same type with predefined values. 

::: moniker range="azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```URL
> https://dev.azure.com/{OrganizationName}/{ProjectName}/_workItems/create/{WorkItemType}?
> [FieldReferenceName 1]={FieldValue 1}&
> [FieldReferenceName 2]={FieldValue 2}&
> [FieldReferenceName 3]={FieldValue 3}&
> . . .
> ```

::: moniker-end

::: moniker range="< azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```URL
> http://{ServerName}:8080/tfs/DefaultCollection/{ProjectName}/_workItems/create/{WorkItemType}?
> [FieldReferenceName 1]={FieldValue 1}&
> [FieldReferenceName 2]={FieldValue 2}&
> [FieldReferenceName 3]={FieldValue 3}&
> . . .
> ```

::: moniker-end


For example, the following syntax specifies a work item task with title *TaskTitle*. It specifies values for the Assigned To, Description, Tags, Activity, and Iteration Path fields. 

::: moniker range="azure-devops"
> [!div class="tabbedCodeSnippets"]
> ```URL
> https://dev.azure.com/{OrganizationName}/{ProjectName}/_workItems/create/Task?
> [System.Title]=TaskTitle&
> [System.AssignedTo]=Jamal+Hartnett&
> [System.Description]=<p>Always+include+Remaining+Work+and+links+to+any+related+bugs+or+user+stories.</p>&
> [System.Tags]=Web;+Phone;+Service&
> [Microsoft.VSTS.Common.Activity]=Development&
> [System.IterationPath]=Fabrikam+Fiber%5CIteration+1
> ``` 

::: moniker-end

::: moniker range="< azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```URL
> http://{ServerName}:8080/tfs/DefaultCollection/{ProjectName}/_workItems/create/Task?
> [System.AssignedTo]=Jamal+Hartnett&
> [System.Description]=<p>Always+include+Remaining+Work+and+links+to+any+related+bugs+or+user+stories.</p>&
> [System.Tags]=Web;+Phone;+Service&
> [Microsoft.VSTS.Common.Activity]=Development&
> [System.IterationPath]=Fabrikam+Fiber%5CIteration+1
> ``` 

::: moniker-end

> [!TIP] 
> There's a 2000 character limit imposed by some browser clients. 

You can save the URL as a text file or add the URL to a dashboard or web page as a hyperlink. 

<a id="markdown-widget"> </a>

## Add a template link to a team dashboard

You can add links to a Markdown widget that appear on your team dashboard in the web portal. These links open a work item with the template defined fields predefined.

For example, the following widget contains links to three templates.  

![Markdown widget with links to templates](media/wi-templates-markdown-widget-with-template-links.png) 

For more information, see [Add Markdown to a dashboard, Markdown widgets](../../report/dashboards/add-markdown-to-dashboard.md). 

## Related articles

- [Azure Boards FAQs](../faqs.yml) 
- [Sample work item templates](../work-items/work-item-template-examples.md)
