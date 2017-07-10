---
title: Add work items | Team Services  
description: Add work items to plan and manage a software project using Agile tools, Scrum, or Kanban when connected to a team project in Visual Studio Team Services (VSTS).   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 9474A25E-A9D8-433D-8370-C94624B4ACD6  
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article 
ms.date: 03/16/2017
---

#Plan and track your project with work items  

**Team Services | TFS 2017 | [Previous versions](add-work-items-tfs.md)**  

>[!IMPORTANT]   
><b>Feature availability: </b>The new work item  experience is currently available from Team Services and the web portal for TFS 2017. This topic describes how to track work using the new form. If you don't see the new form, [your admin may need to enable it](../customize/manage-new-form-rollout.md), or if it's enabled, [you may need to switch to use it](../process/new-work-item-experience.md#switch-new) 
>
>If you connect to TFS 2015 or earlier versions, see [Add work items to plan and track your project (TFS)](add-work-items-tfs.md). </blockquote>  

You add work items to plan and manage your project. You use different types of  work items to track different types of work - such as tasks, features or user stories, test cases and bugs, risks or issues, and more. You can describe the work to be done, assign work, track status, and coordinate efforts within your team.  

Different types of work items are used to track features, user experiences, code defects, tasks, and issues. You can link work items to one another, as well as to changesets and source code files. As the following image shows, each work item form comes with a number of controls, fields, and tabs.  
 
>[!NOTE]  
>Depending on the process you chose when creating your team project&mdash;[Scrum](../guidance/scrum-process.md), 
[Agile](../guidance/agile-process.md), or [CMMI](../guidance/cmmi-process.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called product backlog items (PBIs), user stories, or requirements. All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For an overview of all three processes, see [Choose a process](../guidance/choose-process.md). 

![Work item form to track features or user stories](_img/add-work-item-vsts-user-story-form.png)



<a id="define-new-work">  </a>
##Define new work
You can start adding work items once you connect to a team project. If you don't have a team project yet, create one in [Visual Studio Team Services](../../setup-admin/team-services/set-up-vs.md) or set one up in an [on-premises TFS](../../setup-admin/create-team-project.md).

Here we show how to add work items from the web portal. For additional clients that you can use, see [Clients that support tracking work items](#clients).

1. From a web browser, connect to the team project that you want to work in. For example, the Fabrikam, Inc. team navigates to ```http://fabrikamprime:8080/tfs/DefaultCollection/Fabrikam%20Fiber%20Website/```.  
	If you haven't been added as a team member, [get added now](../scale/multiple-teams.md#add-team-members).

	From the [New work item widget](../../Report/widget-catalog.md#new-work-item-widget) added to a [team dashboard](../../Report/dashboards.md), you can choose the type of work item you want to create.  

	![Add work item from a New work item widget](../../_img/alm-feature-new-work-item-widget.png)  

	Work items you add are automatically scoped to your [team's area and iteration paths](../scale/set-team-defaults.md). To change the team context, see [switch team project or team focus](#switch-team-context).

3. Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

	<img src="_img/add-new-work-item-vsts-user-story.png" alt="Agile process, User story work item form" style="border: 1px solid #CCCCCC;" />  

	You can [add tags to any work item to filter backlogs and queries](../track/add-tags-to-work-items.md).

<a id="update-work-status">  </a>
##Update work status  
As work progresses, team members can update the state and reassign it as needed. 

<img src="_img/add-work-item-vsts-update-state.png" alt="Product backlog item workflow, Scrum process" style="border: 1px solid #CCCCCC;" />  

While the workflow states differ for different work item types, they usually follow a progression from New or Active to Closed or Done. The following image shows the work flow states for the Agile process user story. If you want to discard a work item, change the state to Removed.  

<table>
<tbody valign="top">
<tr>
<td>
<p><b>Typical workflow progression:</b> </p> 
<ul>
<li>Create a user story in the default state, New.</li>
<li>Change the state from New to Active.</li>
<li>Change the state from Active to Resolved.</li>
<li>Change the state from Resolved to Closed.</li>
</ul>
<br/>
<p><b>Atypical transitions:</b> </p> 
<ul>
<li>Change the state from New to Removed.</li>
<li>Change the state from Removed to New.</li>
<li>Change the state from Active to Removed.</li>
<li>Change the state from Resolved to Active.</li>
<li>Change the state from Closed to Resolved.</li>
</ul>
</td>
<td>
![Product backlog item workflow, Scrum process](../guidance/_img/ALM_PT_Agile_WF_UserStory.png)    
</td>
</tr>
</tbody>
</table>

Removed work items remain in the data store and can be reactivated by changing the State. If you want to permanently remove a work item, you can [delete it](remove-delete-work-items.md). 

With each update, the Reason field also updates and changes are recorded in the History field which you can view through the ![history tab icon](../_img/icons/icon-history-tab-wi.png) **History** tab. To find work items based on their history, see [History & auditing](../track/history-and-auditing.md).   

<img src="_img/add-work-item-history.png" alt="View change history" style="border: 1px solid #CCCCCC;" />  



<a id="link-wi">  </a>

##Link items to support traceability  
By linking work items using Related or Dependent link types, you can track work that is dependent on other work. Each work item contains one or more tabs with link controls. These controls support linking the work item to one or more objects.  

There are three links controls provided on most forms. The Development and Related Work scoped links controls appear on the Details tab. The ![Links page icon](../_img/icons/icon-links-tab-wi.png) Links tab provides access to all links made to the work item.  

<img src="../reference/_img/linkscontrol-bug-form-dev-related-links.png" alt="Bug work item form, Agile process, Development and Related links controls" style="border: 1px solid #CCCCCC;" />  


### Add links  

From each links control, you can perform these actions:  

- To open an associated item or object, click the linked item  
- To delete a link, highlight it and click the ![delete icon](../_img/icons/delete_icon.png) delete icon   
- To link to an existing item, or create and link a new work item, select one of the menu options.  

<img src="../reference/_img/linkscontrol-related-work-menu-options.png" alt="Links control menu of options" style="border: 1px solid #CCCCCC;" />  

To learn more, see [Add links to work items](add-link.md).

<a id="git-development">  </a>
### Development scoped links control  

The Development links control displays all of your development links, whether based on a git or Team Foundation version control (TFVC) repository. It displays links in a set order, and provides calls-to-action that support users to [drive development from a work item](../backlogs/connect-work-items-to-git-dev-ops.md).  

Team Foundation version control (TFVC) lets you link work items to version control changesets or versioned source code files by using the Changeset and Versioned Item link types. When you check in pending changes or use My Work to check in changes, [work items are automatically linked to your changes](../../tfvc/check-your-work-team-codebase.md).  

Git lets you link work items to commits by using the Commit link type. To learn how, see [Manage and commit your changes](../../git/tutorial/commits.md).  

### Related scoped links control 
The Related Work links control displays links to other work items in a set order on the front page of the form. It supports these link types: Duplicate/Duplicate of, Parent/Child, Predecessor/Successor, Related, and Tests/Tested by. To learn more about different link types, see [Link work items to support traceability and manage dependencies](../track/link-work-items-support-traceability.md).

### Links control tab 

In addition, the Links control tab provides access to all links made to the work item&mdash;both work items and external objects. 

<img src="_img/add-work-item-links.png" alt="Agile process, User Story work item form, Links control tab" style="border: 1px solid #CCCCCC;" />   

<a id="discussion">  </a>
## Add to the discussion  

Add and review comments made about the work being performed by going to the discussion section. 

Click the ![Discussions icon](../_img/icons/icon-discussions-wi.png) discussion icon, which indicates how many comments have been added, to move your focus to the discussion section.  Click the ![full screen icon](../_img/icons/fullscreen_icon.png) full screen icon to expand the display of the discussion section within the form.   

<img src="_img/add-work-items-discussion.png" alt="Discussion section" style="border: 1px solid #CCCCCC;" />  

Within the discussion section, you can use the [**@mention** control](../productivity/productivity-tips.md#mention-person-id) to notify another team member about the discussion. Simply type **@** and their name. 

To reference a work item, use the [**#ID** control](../productivity/productivity-tips.md#mention-wit-id). Type **#** and a list of work items that you've recently referenced will appear from which you can select.  

>[!IMPORTANT]
>For on-premises TFS, [you must configure an SMTP sever](../../setup-admin/tfs/admin/setup-customize-alerts.md) in order for team members to receive notifications.     


<a id="copy-url">  </a>
## Copy the URL
From the web portal, simply copy the URL from the web browser address or hover over the title and then click the ![Copy to clipboard icon](_img/icon-copy-to-clipboard.png) copy-to-clipboard icon. For other copy options, see [Copy or clone work items](copy-clone-work-items.md). 
  
<img src="_img/add-work-item-copy-URL.png" alt="Copy hyperlink for a work item from web portal" style="border: 1px solid #CCCCCC;" />  



##Related notes

Keep in mind that the work item tracking experience and forms that appear in Visual Studio won't show several of the features that the web portal makes available. To add a field or customize a work item type, see [Customize your work tracking experience](../customize/customize-work.md). 

Once you've added several work items, you can use additional features to get notified of changes, create queries, define status and trend charts, plus more. 


<div style="float:left;width:200px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Process guidance</p> 
- [Choose your process](../guidance/choose-process.md)  
- [Agile](../guidance/agile-process.md)   
- [Scrum](../guidance/scrum-process.md)  
- [CMMI](../guidance/cmmi-process.md)   
- [Work item field index](../guidance/work-item-field.md)    
</div>

<div style="float:left;width:240px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Manage</p> 
- [Create your backlog](create-your-backlog.md)  
- [Copy or clone a work item](copy-clone-work-items.md#copy-clone)   
- [Change, move, or delete a work item](remove-delete-work-items.md)   
- [Pre-populate fields using a template](../productivity/work-item-template.md)   
- [Integrate with Git](../backlogs/connect-work-items-to-git-dev-ops.md)   
- [Productivity tips](../productivity/productivity-tips.md)   
     
</div>

<div style="float:left;width:180px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Track</p>
- [Queries (work items)](../track/using-queries.md)    
- [Charts](../../Report/charts.md)   
- [Dashboards](../../Report/dashboards.md)   
- [Share work plans](../track/share-plans.md)   
- [Follow a work item](../../collaborate/follow-work-items.md)   
- [Alerts](../track/alerts-and-notifications.md)     
- [Tag work items](../track/add-tags-to-work-items.md)   
- [History & audit](../track/history-and-auditing.md)      
</div>



<div style="clear:left;font-size:100%">
</div>


<a id="wi-controls"></a>  

### Work item form controls

| Control                  | Function                      |
|--------------------------|-------------------------------|
| ![Copy to clipboard icon](_img/icon-copy-to-clipboard.png) | Copy URL of work item to clipboard (appears on hover over work item title)  |
| ![Discussions icon](../_img/icons/icon-discussions-wi.png) | Go to Discussions section  |
| ![Actions icon](../_img/icons/actions-icon.png) | Open Actions menu for additional work item tasks           |
| ![Refresh icon](../_img/icons/icon-refresh-wi.png) | Refresh work item with latest changes  |  
| ![Undo icon](../_img/icons/icon-undo-changes-wi.png) | Revert changes to work item           |  
| ![History tab icon](../_img/icons/icon-history-tab-wi.png) | Open History tab        |
| ![Links tab icon](../_img/icons/icon-links-tab-wi.png) | Open Links tab     |
| ![Attachment tab icon](_img/icon-attachments-tab-wi.png) | Open Attachments tab   |
| ![full screen icon](../_img/icons/fullscreen_icon.png) / ![exit full screen icon](../_img/icons/exitfullscreen_icon.png)     | Enter or exit full display mode of a section within the form   |
|![Collapse section icon](../_img/icons/collapse-wi-section.png)/![Expand section icon](../_img/icons/expand-wi-section.png) | Collapse or expand a section within the form   |  
| ![New linked work icon icon](../_img/icons/new-linked-work-item.png) | Add new work item and link to existing work item (May appear under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  |  
| ![Change work item type icon](../_img/icons/change-type-icon.png) | [Change work item type](remove-delete-work-items.md) (Appears under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  | 
| ![Change team project icon](../_img/icons/change-team-project-icon.png) | [Move work item to a different team project](remove-delete-work-items.md) (Appears under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  | 
| ![Clone icon](../_img/icons/clone-icon.png) | [Copy work item and optionally change work item type](copy-clone-work-items.md#copy-clone) (Appears  under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  |  
| ![Email icon](../_img/icons/email-icon.png) | [Email work item](../track/share-plans.md#email-item)  (Appears  under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  |  
| ![Delete icon](../_img/icons/delete_icon.png) | [Recycle work item](remove-delete-work-items.md)  (Appears  under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  | 
| ![Storyboard icon](../_img/icons/storyboard-icon.png) | [Storyboard with PowerPoint](../office/storyboard-your-ideas-using-powerpoint.md)  (Appears  under ![Actions icon](../_img/icons/actions-icon.png) Actions menu)  | 
 

See also [Keyboard shortcuts](../../reference/keyboard-shortcuts.md).

###Plan your project
The quickest way to plan your project is to [create your backlog](../backlogs/create-your-backlog.md). If you have a number of product backlog items, user stories, requirements, or tasks that you want to bulk add, you can use [Excel](../office/bulk-add-modify-work-items-excel.md) or [Project](../office/create-your-backlog-tasks-using-project.md).

If you are planning a product suite and managing a portfolio of projects across several teams, you'll want to read [Agile tools, Scale: Manage work across the enterprise](../overview.md#scale).

<a id="start-storyboarding">  </a>
###Start storyboarding  

>[!NOTE]  
><b>Feature availability: </b>The Start storyboarding menu option is only available from the new web form. However, from TFS, you can click the Start Storyboarding link from the Storyboard tabs from a backlog item, or simply open PowerPoint. See [Storyboard your ideas using PowerPoint](../office/storyboard-your-ideas-using-powerpoint.md) for requirements and usage.    

You can storyboard your ideas using PowerPoint to bring your ideas to life with storyboard shapes, text, animation, and all the other features that PowerPoint Storyboarding provides. From any work item, you can open PowerPoint by choosing the Start storyboarding menu option.    

<img src="_img/add-work-item-start-storyboarding.png" alt="Work item form, Start storyboarding menu option" style="border: 1px solid #CCCCCC;" />  

<!---
###Find or list work items  
Type an ID in the Search work items box and then choose the search icon.  

<img src="_img/add-work-items-search-box-id.png" alt="Search work items text box" style="border: 1px solid #CCCCCC;" />  

Use the ![context menu icon](../_img/icons/context_menu.png) context menu to add a filter based on [assignment, status, a keyword, or a work item type](../track/example-queries.md). 

Or, using the ![context menu icon](../_img/icons/context_menu.png) context menu, add filters to find items based on assignment, status, a keyword, or a work item type. For example, enter **A=@Me T=Task** to list all tasks assigned to you. Use the **=**, **:**, and **–** operators to specify the operations: Equals, Contains, and Not, respectively.  

Once you have a results list, you can [modify the filter criteria to refine your search results](../track/using-queries.md).

--> 


<a id="clients"></a>  
###Clients that support tracking work items  
You can add work items from various clients, such as: 
- From the web portal backlog pages, you can add user stories, backlog items, features, and epics from the [quick add panel](create-your-backlog.md). 
- From the [Team Explorer add-in to Visual Studio](../../connect/work-team-explorer.md), you can add most types of work items from the Work page.  
- If you work in [Eclipse](https://eclipse.org/home/newcomers.php), you can create work items using [Team Explorer Everywhere](https://www.visualstudio.com/products/team-explorer-everywhere-vs). 
- From Test Manager or the web portal, you can [create test cases that automatically link to a user story or product backlog item](../../test/manual-exploratory-testing/getting-started/create-test-cases.md).
- You can create bugs from the web portal, Visual Studio, or when [testing with Test Manager](https://msdn.microsoft.com/library/dd286731.aspx).  

<a id="team-context"></a>
<a id="switch-team-context">  </a>
<a id="new-work-items-defaults">  </a>

[!INCLUDE [temp](../_shared/switch-team-context-work.md)]    


[!INCLUDE [temp](../_shared/help-support-shared.md)]
 