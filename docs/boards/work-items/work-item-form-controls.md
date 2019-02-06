---
title: Update status, assign work, and link work items using work item form controls 
titleSuffix: Azure Boards 
description: Use work item form controls to update status, link work items, and more in Azure Boards, Azure DevOps, & Team Foundation Server  
ms.custom: seodec18  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: A9AB9B95-61B4-41E7-AE7A-B96CD4AF9B33  
ms.topic: reference
ms.manager: jillfra
ms.author: kaelli
monikerRange: '>= tfs-2017'
ms.date: 11/19/2018
---

# Work item form controls

[!INCLUDE [temp](../_shared/version-vsts-tfs-2017-on.md)]

Different types of work items track different data. Each work item form contains some standard fields&mdash;such as title, assigned to, and area and iteration path&mdash;as well as fields specific to the type. You can link work items to one another, as well as to changesets and source code files. 

As the following image shows, each work item form comes with a number of controls, fields, and tabs.

![Work item form to track features or user stories](../backlogs/_img/add-work-item-vsts-user-story-form.png)

> [!NOTE]    
>Depending on the process chosen when the project was created&mdash;
[Agile](./guidance/agile-process.md), [Scrum](./guidance/scrum-process.md), or [CMMI](./guidance/cmmi-process.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called user stories (Agile), product backlog items (Scrum), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For an overview of all three processes, see [Choose a process](./guidance/choose-process.md). 
	 
<a id="wi-controls"></a>  

### Work item form controls

| Control                  | Function                      |
|--------------------------|-------------------------------|
| ![Copy to clipboard icon](../backlogs/_img/icon-copy-to-clipboard.png) | Copy URL of work item to clipboard (appears on hover over work item title)  |
| ![Discussions icon](../_img/icons/icon-discussions-wi.png) | Go to Discussions section  |
| ![Actions icon](../_img/icons/actions-icon.png) | Open Actions menu for additional work item tasks           |
| ![Refresh icon](../_img/icons/icon-refresh-wi.png) | Refresh work item with latest changes  |  
| ![Undo icon](../_img/icons/icon-undo-changes-wi.png) | Revert changes to work item           |  
| ![History tab icon](../_img/icons/icon-history-tab-wi.png) | Open History tab        |
| ![Links tab icon](../_img/icons/icon-links-tab-wi.png) | Open Links tab     |
| ![Attachment tab icon](../backlogs/_img/icon-attachments-tab-wi.png) | Open Attachments tab   |
| ![full screen icon](../_img/icons/fullscreen_icon.png) / ![exit full screen icon](../_img/icons/exitfullscreen_icon.png)     | Enter or exit full display mode of a section within the form   |
|![Collapse section icon](../_img/icons/collapse-wi-section.png)/![Expand section icon](../_img/icons/expand-wi-section.png) | Collapse or expand a section within the form   |  
| ![New linked work item icon](../_img/icons/new-linked-work-item.png) | Add new work item and link to existing work item (May appear under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  |  
| ![Change work item type icon](../_img/icons/change-type-icon.png) | [Change work item type](../backlogs/remove-delete-work-items.md) (Appears under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  | 
| ![Change project icon](../_img/icons/change-team-project-icon.png) | [Move work item to a different project](../backlogs/remove-delete-work-items.md) (Appears under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  | 
| ![Clone icon](../_img/icons/clone-icon.png) | [Copy work item and optionally change work item type](../backlogs/copy-clone-work-items.md#copy-clone) (Appears  under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  |  
| ![Email icon](../_img/icons/email-icon.png) | [Email work item](email-work-items.md)  (Appears  under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  |  
| ![Delete icon](../_img/icons/delete_icon.png) | [Recycle work item](../backlogs/remove-delete-work-items.md)  (Appears  under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  | 
| ![Storyboard icon](../_img/icons/storyboard-icon.png) | [Storyboard with PowerPoint](../backlogs/office/storyboard-your-ideas-using-powerpoint.md)  (Appears  under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  | 

<a id="update-work-status">  </a>
## Update work status  
As work progresses, team members can update the state and reassign it as needed. 

<img src="../backlogs/_img/add-work-item-vsts-update-state.png" alt="Product backlog item workflow, Scrum process" style="border: 1px solid #C3C3C3;" />  

While the workflow states differ for different work item types, they usually follow a progression from New or Active to Closed or Done. The following image shows the work flow states for the Agile process user story. If you want to discard a work item, change the state to Removed.  

<table>
<tbody valign="top">
<tr>
<td>
<p><b>Typical workflow progression:</b> </p> 
<ul>
<li>Create a user story in the default state, New.</li>
<li>Change the state from New to Active.</li>
<li>Change the state from Active to Resolved.</li>
<li>Change the state from Resolved to Closed.</li>
</ul>
<br/>
<p><b>Atypical transitions:</b> </p> 
<ul>
<li>Change the state from New to Removed.</li>
<li>Change the state from Removed to New.</li>
<li>Change the state from Active to Removed.</li>
<li>Change the state from Resolved to Active.</li>
<li>Change the state from Closed to Resolved.</li>
</ul>
</td>
<td>
![Product backlog item workflow, Scrum process](./guidance/_img/ALM_PT_Agile_WF_UserStory.png)    
</td>
</tr>
</tbody>
</table>

Removed work items remain in the data store and can be reactivated by changing the State. If you want to permanently remove a work item, you can [delete it](../backlogs/remove-delete-work-items.md). 

With each update, the Reason field also updates and changes are recorded in the History field which you can view through the ![history tab icon](../_img/icons/icon-history-tab-wi.png) **History** tab. To find work items based on their history, see [History & auditing](../queries/history-and-auditing.md).   

<img src="../backlogs/_img/add-work-item-history.png" alt="View change history" style="border: 1px solid #C3C3C3;" />  



<a id="link-wi">  </a>

## Link items to support traceability  
By linking work items using Related or Dependent link types, you can track work that is dependent on other work. Each work item contains one or more tabs with link controls. These controls support linking the work item to one or more objects.  

There are three links controls provided on most forms. The Development and Related Work scoped links controls appear on the Details tab. The ![Links page icon](../_img/icons/icon-links-tab-wi.png) Links tab provides access to all links made to the work item.  

<img src="../../reference/xml/_img/linkscontrol-bug-form-dev-related-links.png" alt="Bug work item form, Agile process, Development and Related links controls" style="border: 1px solid #C3C3C3;" />  


## Add links  

From each links control, you can perform these actions:  

- To open an associated item or object, click the linked item  
- To delete a link, highlight it and click the ![delete icon](../_img/icons/delete_icon.png) delete icon   
- To link to an existing item, or create and link a new work item, select one of the menu options.  

<img src="../../reference/xml/_img/linkscontrol-related-work-menu-options.png" alt="Links control menu of options" style="border: 1px solid #C3C3C3;" />  

To learn more, see [Add links to work items](../backlogs/add-link.md).

<a id="git-development">  </a>
### Development scoped links control  

The Development links control displays all of your development links, whether based on a git or Team Foundation version control (TFVC) repository. It displays links in a set order, and provides calls-to-action that support users to [drive development from a work item](../backlogs/connect-work-items-to-git-dev-ops.md).  

Team Foundation version control (TFVC) lets you link work items to version control changesets or versioned source code files by using the Changeset and Versioned Item link types. When you check in pending changes or use My Work to check in changes, [work items are automatically linked to your changes](../../repos/tfvc/check-your-work-team-codebase.md).  

Git lets you link work items to commits by using the Commit link type. To learn how, see [Manage and commit your changes](../../repos/git/commits.md).  

### Related scoped links control 
The Related Work links control displays links to other work items in a set order on the front page of the form. It supports these link types: Duplicate/Duplicate of, Parent/Child, Predecessor/Successor, Related, and Tests/Tested by. To learn more about different link types, see [Linking, traceability, and managing dependencies](../queries/link-work-items-support-traceability.md).

### Links control tab 

In addition, the Links control tab provides access to all links made to the work item&mdash;both work items and external objects. 

<img src="../backlogs/_img/add-work-item-links.png" alt="Agile process, User Story work item form, Links control tab" style="border: 1px solid #C3C3C3;" />   

<a id="discussion">  </a>
## Add to the discussion  

Add and review comments made about the work being performed by going to the discussion section. This way, you capture all comments within the work item rather than maintaining a long email thread. 

Click the ![Discussions icon](../_img/icons/icon-discussions-wi.png) discussion icon, which indicates how many comments have been added, to move your focus to the discussion section.  Click the ![full screen icon](../_img/icons/fullscreen_icon.png) full screen icon to expand the display of the discussion section within the form.   

<img src="../backlogs/_img/add-work-items-discussion.png" alt="Discussion section" style="border: 1px solid #C3C3C3;" />  

Within the discussion section, you can use the [**@mention** control](../../notifications/at-mentions.md) to notify another team member about the discussion. Simply type **@** and their name. 

::: moniker range="azure-devops" 
> [!NOTE]   
> You can also use group mentions. Simply start type the name of a team or a security group, click the search icon and then select from the options listed.    
::: moniker-end 

To reference a work item, use the [**#ID** control](../../notifications/add-links-to-work-items.md). Type **#** and a list of work items that you've recently referenced will appear from which you can select.  

::: moniker range=">= tfs-2017 <= tfs-2018" 
> [!IMPORTANT]  
> For on-premises TFS, [you must configure an SMTP server](/tfs/server/admin/setup-customize-alerts) in order for team members to receive notifications. 
::: moniker-end 

<a id="copy-url">  </a>
## Copy the URL
From the web portal, simply copy the URL from the web browser address or hover over the title and then click the ![Copy to clipboard icon](../backlogs/_img/icon-copy-to-clipboard.png) copy-to-clipboard icon. For other copy options, see [Copy or clone work items](../backlogs/copy-clone-work-items.md). 
  
<img src="../backlogs/_img/add-work-item-copy-URL.png" alt="Copy hyperlink for a work item from web portal" style="border: 1px solid #C3C3C3;" />  


<a id="start-storyboarding">  </a>
## Start storyboarding  

> [!NOTE]    
> </b>The **Start storyboarding** menu option is only available from the new web form. However, from TFS, you can choose the **Start Storyboarding** link from the **Storyboard** tab from a backlog item, or simply open PowerPoint. See [Storyboard your ideas using PowerPoint](../backlogs/office/storyboard-your-ideas-using-powerpoint.md) for requirements and usage.    

You can storyboard your ideas using PowerPoint to bring your ideas to life with storyboard shapes, text, animation, and all the other features that PowerPoint Storyboarding provides. From any work item, you can open PowerPoint by choosing the Start storyboarding menu option.    

<img src="../backlogs/_img/add-work-item-start-storyboarding.png" alt="Work item form, Start storyboarding menu option" style="border: 1px solid #C3C3C3;" /> 


##Find or list work items  
Type an ID in the Search work items box and then choose the search icon.  

<img src="../backlogs/_img/add-work-items-search-box-id.png" alt="Search work items text box" style="border: 1px solid #C3C3C3;" />  

Use the ![context menu icon](../_img/icons/context_menu.png) context menu to add a filter based on [assignment, status, a keyword, or a work item type](../queries/example-queries.md). 

Or, using the ![context menu icon](../_img/icons/context_menu.png) context menu, add filters to find items based on assignment, status, a keyword, or a work item type. For example, enter **A=@Me T=Task** to list all tasks assigned to you. Use the **=**, **:**, and **-** operators to specify the operations: Equals, Contains, and Not, respectively.  

Once you have a results list, you can [modify the filter criteria to refine your search results](../queries/using-queries.md).

## Related articles

Keep in mind that the work item tracking experience and forms that appear in Visual Studio won't show several of the features that the web portal makes available. To add a field or customize a work item type, see [Customize your work tracking experience](../../reference/customize-work.md). 

See also: 
- [Keyboard shortcuts for work item forms and the Work Items page](work-item-form-keyboard-shortcuts.md)

<!---


From the [New work item widget](../../Report/widget-catalog.md#new-work-item-widget) added to a [team dashboard](../../report/dashboards/dashboards.md), you can choose the type of work item you want to create.  

![Add work item from a New work item widget](../user-guide/_img/features/alm-feature-new-work-item-widget.png)  

If you have a number of product backlog items, user stories, requirements, or tasks that you want to bulk add, you can use [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) or [Project](../backlogs/office/create-your-backlog-tasks-using-project.md).

If you are planning a product suite and managing a portfolio of projects across several teams, you'll want to read [Agile tools, Scale: Manage work across the enterprise](../get-started/what-is-azure-boards.md#scale).
-->