---
title: Work item templates
titleSuffix: VSTS & TFS   
description: Add and manage work item templates to pre-populate fields in work item forms in Visual Studio Team Services & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 9b575c05-16f3-4027-aa5a-67b017a0089d
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 03/20/2018
---



# Use templates to add and update work items 

**VSTS | TFS 2018 | TFS 2017 | TFS 2015 | TFS 2013 | Visual Studio** 

<!--- Supports FWLINK http://go.microsoft.com/fwlink/?LinkId=824070 -->

With work item templates you can quickly create work items which have pre-populated values for your team's commonly used fields. For example, you can create a task template that will set the area path, iteration path, and discipline or activity whenever you use it to create a task.  

> [!NOTE]  
> Work item templates are distinct from process templates. For information on process templates, see [Choose a process template](../work-items/guidance/choose-process.md) or these specific topics for the default process templates: [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [CMMI](../work-items/guidance/cmmi-process.md).  


::: moniker range="vsts || >= tfs-2017 <= tfs-2018"
Note that within the browser context or web portal, work item templates are associated with a team. Only those templates defined for a team are accessible when working in a team context, either through a work item form or bulk update context menu.

::: moniker-end

<a id="capture"> </a> 
## Capture a work item as a template

The steps to capture a work item differ based on the platform, version, and client you use.  

# [Browser](#tab/browser)

<a id="team-services-capture" /> 

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"

1. Open a work item with the fields defined that you want to capture, and click the ![Actions icon](../_img/icons/actions-icon.png) actions icon to open the menu. Choose Templates and then Capture.   
   
	<img src="_img/wi-templates-capture-bug-vsts.png" alt="Capture work item field definitions as a template" style="border: 1px solid #CCCCCC;" />

2. Name the template and optionally add and remove fields. Save the template when finished. 

	<img src="_img/wi-templates-capture-template-dialog.png" alt="Capture template dialog" style="border: 1px solid #CCCCCC;" /> 

3. Once you've saved the template, click Copy link to capture the URL for the template that you can use to add work items using the template.

	The URL identifies the team and template ID, for example: 

	```
	http://fabrikamfiber:8080/tfs/DefaultCollection/Fabrikam%20Fiber/Web/_workItems?_a=new&witd=Bug&templateId=15ffa521-7a1d-486e-9f71-a58c0b338d87
	```

4. Use the URL whenever you want to add a work item of the type you've defined with its predefined values.  

	You can save the URL as a text file or add the URL to a [dashboard](#markdown-widget) or web page as a hyperlink. 
 
::: moniker-end


<a id="tfs-portal-capture" />
::: moniker range=">= tfs-2013 <= tfs-2015"


If you connect to an on-premises TFS and primarily create work items working in the web portal, you can create a hyperlink that captures the default values you specify for a template. Click the hyperlink, and it opens the template in the web portal.  

1. From the web portal Queries page, open a new work item. 

	![Open a new work item from the web portal Work page ](_img/wit-template-task.png)    

2. Fill in the default values you want the template to specify. You can leave required fields empty, or place some text in them
	
	Here, we fill in several values, including tags, but leave the Title blank. When you're done, copy the URL for the template. 

	![Define fields and choose Copy the URL](_img/wit-template-task-form-tfs-copy-url.png)    

3. The URL defines each predefined field, for example (line breaks added for clarity): 
	
	```
	http://fabrikamprime:8080/tfs/DefaultCollection/Fabrikam%20Fiber/_workItems/create/Task?%5B
   System.AssignedTo%5D=Jamal+Hartnett&%5B
   System.Description%5D=%3Cp%3EAlways+include+Remaining+Work+and+links+to+any+related+bugs+or+user+stories.%3C%2Fp%3E&%5B
   System.Tags%5D=Web%3B+Phone%3B+Service&%5B
   Microsoft.VSTS.Common.Activity%5D=Development&%5B
   System.IterationPath%5D=Fabrikam+Fiber%5CIteration+1
	``` 

	> [!TIP]  
	> The URL won't contain defaults defined for the work item type. To specify a default field value, see [Add or modify a field](../customize/add-modify-field.md). Also, there's a 2000 character limit recognized by browsers. There's no work around to that limit.   

4. Use the URL whenever you want to add a work item of the type you've defined with its predefined values. 

	You can save the URL as a text file or add the URL to a [dashboard](#markdown-widget) or web page as a hyperlink. 
 
::: moniker-end

# [Visual Studio](#tab/visual-studio) 

<a id="team-explorer-capture" />
If you primarily work in Visual Studio or Team Explorer, and want to create work items from templates that you can access from the Work Items page, you can create work item template files (extension .wt).

You create these files using Work Item Templates, a power tool for Visual Studio, which you can download from [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power). 

1.  Open or run a query that lists the work item whose fields you want to capture.

2. Right-click the work item of the type and whose fields you want to capture, and select Capture Template from the context menu.

	<img src="_img/wi-templates-te-capture-wi-as-template.png" alt="Capture work item field definitions as a template from Visual Studio with Power Tools installed" style="border: 1px solid #CCCCCC;" />

3. In the dialog, use the checkboxes to select all the fields you want to save in the template, and add a name and (optionally) description to the template. 

	<img src="_img/wi-templates-capture-template-dialog-te.png" alt="Capture template dialog from Visual Studio with Power Tools installed" style="border: 1px solid #CCCCCC;" />

4. Save the template and it will appear in the root of the Team Explorer pane under the Templates section.  

---

<a id="add-wi"> </a>
## Add a work item using a template  

The main method for adding a work item using a template is to open the template link within a browser window. You can then share these links through email, a network share, team portal, or a team dashboard or Welcome page.  

### Copy the link to a template 

# [Browser](#tab/browser)

<a id="team-services-copy-link" /> 

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"

1. Click the ![Actions icon](../_img/icons/actions-icon.png) actions icon and choose Copy link.  
   
	<img src="_img/wi-templates-copy-url-vsts.png" alt="Copy link of a template" style="border: 1px solid #CCCCCC;" />

2. Copy the link to a shared network or send to your team via email. Also, consider [adding a link the team dashboard](#markdown-widget).  

	The link is a URL to the web portal, for example:</p> 

	```
	http://fabrikamfiber:8080/tfs/DefaultCollection/Fabrikam%20Fiber/Web/_workItems?_a=new&witd=Bug&templateId=15ffa521-7a1d-486e-9f71-a58c0b338d87
	```

3. Use the URL whenever you want to add a work item of the type you've defined with its predefined values.	

	You can save the URL as a text file or add the URL to a web page as a hyperlink. 

::: moniker-end

<a id="tfs-portal-copy-link" />

::: moniker range=">= tfs-2013 <= tfs-2015"

See [Capture a work item as a template for TFS web portal](#capture).    

::: moniker-end

# [Visual Studio](#tab/visual-studio) 

<a id="team-explorer-copy-link" />

1. You can copy the link to a template which will open in the web portal, by opening the context menu for the template.  

	<img src="_img/wi-templates-copy-URL-te.png" alt="Copy link to template from Visual Studio with Power Tools installed" style="border: 1px solid #CCCCCC;" />

2. Paste the copied link into a web browser to check that it works as expected.    


---
 

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"

<a id="markdown-widget"> </a>
### Add a template link to the dashboard   

You can add links to a markdown widget that appear on your team dashboard in the web portal. These links open a work item with the template defined fields predefined.

::: moniker-end

::: moniker range="tfs-2015"
> [!NOTE]   
> Multiple team dashboards and the Markdown widget are available for VSTS and TFS 2015.2 and later versions. 

::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"

For example, the following widget contains links to three templates.  

<img src="_img/wi-templates-markdown-widget-with-template-links.png" alt="Markdown widget with links to templates" style="border: 1px solid #CCCCCC;" /> 

To learn more about the markdown widget see [Add Markdown to a dashboard, Markdown widgets](../../report/add-markdown-to-dashboard.md).  

::: moniker-end

<a id="apply"> </a>
## Apply a template to existing work item(s)  

You can apply a template to a single work item or perform a bulk update of several work items.  

<a id="team-services-apply" /> 
# [Browser](#tab/browser)

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"
#### Apply a template within a work item form 

1. Open the work item that you want to update using the fields defined within a template, and click the ![actions icon](../_img/icons/actions-icon.png) actions icon to access your menu. Click Templates and then click the name of a pre-defined template.      

	<img src="_img/wi-templates-apply-user-story-template-vsts.png" alt="Apply a template to an existing work item within the form" style="border: 1px solid #CCCCCC;" /> 

	> [!TIP]  
	> Refresh your browser to discover the latest templates that have been added. If you don't see any templates, it may be that there are none defined for the work item type. Click **Manage&#133;** to open the team settings Templates admin page for your team to review or add templates.  

2. Save the work item for the changes to be applied. The fields changed are noted in the History field. </p>

::: moniker-end

::: moniker range="vsts || >= tfs-2013 <= tfs-2018"

#### Apply a template to several work items (bulk update) 

1. To bulk update several work items, first select them from the backlog or a query results list, and then open the actions menu for one of them. All work items you select must be of the same work item type. For example, all user stories or all bugs. 

2. Choose the template to apply. 

	<img src="_img/wi-templates-bulk-update-list-vsts.png" alt="Bulk update several work items" style="border: 1px solid #CCCCCC;" />

3. Field changes are automatically applied and work items saved. To learn more about bulk updates, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md).
  
::: moniker-end 

# [Visual Studio](#tab/visual-studio)

<a id="team-explorer-apply" />

#### Apply a template to one or more work items  

1. Open or run a query that lists the work item(s) whose fields you want to capture.  
2. Right-click the work items&mdash;which must be of the same type&mdash;  and click Apply Template from the context menu.  

	<img src="_img/wi-templates-apply-template-options-te.png" alt="Apply template to selected work item from Visual Studio with Power Tools installed" style="border: 1px solid #CCCCCC;" />

3. Select the template to use and click OK. 

	<img src="_img/wi-templates-apply-template-dialog-te.png" alt="Apply template dialog from Visual Studio with Power Tools installed" style="border: 1px solid #CCCCCC;" />

4.	Save the work item.  

	<img src="_img/wi-templates-apply-save-work-items-te.png" alt="Save changes from Visual Studio with Power Tools installed" style="border: 1px solid #CCCCCC;" />

---

<a id="manage"> </a> 
## Manage work item templates

# [Browser](#tab/browser)  


::: moniker range="vsts || >= tfs-2017 <= tfs-2018"

You can view the list of templates defined for each work item type, and also add, edit, copy, delete, and copy the link of a template. All templates are defined and managed for a team. 
 
<a id="team-services-manage" /> 

You manage templates from the team admin context. All templates are defined for a team. 

### Open the admin context for your team  
 
1. From a web browser, open the web portal administrative context for your team. Here we open the admin page for the Web team. 

	<img src="_img/wit-templates-open-team-admin-context.png" alt="Open team admin context" style="border: 1px solid #CCCCCC;" />  

	If you're not a team administrator, [get added as one](../scale/add-team-administrator.md). Only team or project administrators can change team templates.  

2. Click Templates under the Work hub.  

	<img src="_img/wit-templates-work-templates-page.png" alt="Open Work - Templates page for team" style="border: 1px solid #CCCCCC;" />  

	From here, you can click any work item type to view or add templates for that type.  

### Manage templates for a work item type   

Click the work item type to view the templates defined for each type. 

For example, click User Story to view templates defined to capture user stories.

<img src="_img/wi-templates-user-stories-list.png" alt="Manage user story templates" style="border: 1px solid #CCCCCC;" />  

### Define a template from scratch 

1. From the work item type page, click ![green plus icon](../_img/icons/green_plus_icon.png) New template to create a template from scratch.  

	<img src="_img/wi-templates-new-template.png" alt="Add a user story template" style="border: 1px solid #CCCCCC;" />  

2. Name the template and optionally add and remove fields. Save the template when finished. 

	Once you've saved the template, click Copy link to capture the URL for the template that you can use to add work items using the template.  

### Edit, delete, or copy link to a template  

From the work item type page, click ![actions icon](../_img/icons/actions-icon.png) the actions icon for an existing template to access the menu options to Edit, Delete, or Copy link. 

<img src="_img/wi-templates-template-action-menu.png" alt="Open template action menu" style="border: 1px solid #CCCCCC;" />  

### Copy or duplicate a template  
 

1. To duplicate an existing template, click ![actions icon](../_img/icons/actions-icon.png) the actions icon for an existing template and click Create copy. 

	<img src="_img/wi-templates-copy-template.png" alt="Copy an existing template" style="border: 1px solid #CCCCCC;" />  

2. Name the template and optionally add and remove fields. Save the template when finished. 


::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
Managing work item templates from the web portal is only supported from TFS 2017 and later versions. For TFS 2013 and TFS 2015, you can manage work item templates in Visual Studio 2013 or Visual Studio 2015 by downloading [TFS Power Tools](https://visualstudiogallery.msdn.microsoft.com/898a828a-af00-42c6-bbb2-530dc7b8f2e1). With the Work Item Templates power tool add-in, you can:
- Create and edit work item templates  
- Create and update work items using a template  
- Create a template from an existing work item  
- Bulk-edit work items by applying a template  
- Use templates created in Visual Studio to create work items through the Visual Studio client.  
	
> [!NOTE]  
> Visual Studio 2015 is the last version in which you can install TFS power tools. You can use the Work Item Templates tool whenever you connect to TFS 2015 version or an earlier version. Templates you define through the power tool are separate from those defined through the web portal for TFS.  

::: moniker-end

# [Visual Studio](#tab/visual-studio)
<a id="team-explorer-manage" />
 
If Visual Studio with power tools installed, you can view the list of templates defined for each work item type, and also add, edit, copy, delete, and copy the link of a template.   

You manage templates from the Team Explorer pane.  

![Templates, Team Explorer with power tools installed](_img/wi-templates-section-te.png)  

The root Templates node represents the parent of all of your templates. You may create a directory structure underneath it by adding folders &mdash;right-click on the **Templates** node or a folder and select **New Folder** from the context menu.  

You can cut, copy, paste, rename, and delete templates and folders using the context menu. You may also drag and drop templates into folders. To edit multiple templates, use shift-click to select a range or ctrl-click to add individual templates to your selection, then right-click. 

### Define a template from scratch 

1. From the Templates section, right-click Templates and choosee to create a template from scratch.

	<img src="_img/wi-templates-new-template-te.png" alt="Add a new template, Visual Studio " style="border: 1px solid #CCCCCC;" />  

2. Save the template, provide a Name in the dialog provided.  

	<img src="_img/wi-templates-new-template-save-as-te.png" alt="Add a new template, Visual Studio " style="border: 1px solid #CCCCCC;" />  

	Once you've saved the template, click Copy link to capture the URL for the template that you can use to add work items using the template.  

### Edit, use, copy, or delete a template  
To edit, delete, or perform another action on a template, open its context menu (right-click) and choose the option you want.  

<img src="_img/wi-templates-context-menu-te.png" alt="Open template action menu" style="border: 1px solid #CCCCCC;" />  

To make frequently-used templates more accessible, you can set a default template for each work item type. To do so, right-click on a template in Team Explorer and click **Set As Default**. A checkmark will appear on the icon to indicate that it is now the default. 


### Set your template directory  
To change the directory where templates are stored, click the Configure link, or navigate to it via **Tools>Options>Microsoft Team Foundation Server>Work Item Templates**. Use this dialog to set your template store path. Place your templates in a network location to share them with your team.  

--- 

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"

## Add or remove tags from templates 

<!---
> [!NOTE]  
>**Feature availability**: The ability to add and remove tags from a template is supported from VSTS and TFS 2017 and later versions. 
-->

You can add tags to a template and they'll be applied to the work item when you use the template. 

<img src="_img/wi-templates-add-remove-tags.png" alt="Edit bug template, add or remove tags" style="border: 1px solid #CCCCCC;" />  

If you don't specify tags to remove, then all tags present in a work item will remain defined even when you apply a work item template to an existing work item. 
 
::: moniker-end


::: moniker range="vsts"

## Create links to work items

You can't create templates that contain default links to work items. However, you can use the Marketplace extension, [Work item form one click actions](https://marketplace.visualstudio.com/items?itemName=mohitbagra.witoneclickactions), to create rules that support adding linked work items with a single click. 

Otherwise, you can quickly copy tasks, test cases, bugs, and other items using [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) to apply parent-child links in a tree list. To learn more, see:  
- [Add task checklists](../kanban/add-task-checklists.md)
- [Add, run, and update inline tests](../kanban/add-run-update-tests.md) 
- [Add features and epics](../kanban/kanban-epics-features-stories.md)  

Another option is to use [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) to apply parent-child links in a tree list. 

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

## Templates and links to other work items

You can't create templates that contain default links to work items. However, you can quickly copy tasks, test cases, bugs, and other items using [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) to apply parent-child links in a tree list. To learn more, see:  
- [Add task checklists](../kanban/add-task-checklists.md)
- [Add, run, and update inline tests](../kanban/add-run-update-tests.md) 
- [Add features and epics](../kanban/kanban-epics-features-stories.md)  

Another option is to use [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) to apply parent-child links in a tree list. 

::: moniker-end

 
<!---
Based on the platform or version you use, you can perform the following tasks. 

<table width="85%">
<tr>
<th width="30%">Task </th>
<th width="15%" align="center" valign="bottom">VSTS</th>
<th width="15%" align="center" valign="bottom">TFS 2013, TFS 2015<br/>(web portal)</th>
<th width="15%" align="center" valign="bottom">TFS 2017<br/>(web portal)</th>
<th width="20%" align="center" valign="bottom">VS 2013, VS 2015 <br/>(with power tools <sup>1</sup>) </th>
</tr>

<tbody align="center" valign="top" style="font-size: 95%">

<tr>
<td align="left">[Capture a work item as a template](#capture)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">[Add a work item using a template](#add-wi)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">[Apply templates to work items](#apply)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">[Manage work item templates](#manage)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>
</tbody>
</table>

-->