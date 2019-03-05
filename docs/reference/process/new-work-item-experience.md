---
title: New work item web form 
titleSuffix: TFS 
description: The new web form and work item tracking experience supports more integrated and collaborative experiences
ms.technology: devops-agile
ms.prod: devops
ms.assetid: B4CE99F5-BF4C-4B93-89DC-20C5BD9FB54E  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2017 <= azure-devops-2019'
ms.date: 03/20/2018
---

# New work item tracking experience

**TFS 2018 | TFS 2017**  

> [!IMPORTANT]  
> The new form and its corresponding features are available from the web portal for TFS 2017 and later versions.<br/> 
> - For TFS 2017 users, the new form is automatically available when you add projects to a new collection. For existing projects, an admin is required to [enable the new form](../manage-new-form-rollout.md).<br/>
> - For TFS 2015 users, the new form isn't available. You must [upgrade to TFS 2017 or later version](https://visualstudio.microsoft.com/downloads/) to access the new form.  

Work items have received a facelift. To provide a fresher, more modern experience to tracking work, we've replaced our "old and clunky" form. Along with the noticeable responsive form layout, with the nre form you now have access to these features:

- **Discussion control** with a discussion indicator in the banner that summarizes the number of comments in the discussion and from which you can quickly jump to the discussion and add your comments; this control also supports:
	- **@mention** which allows you to quickly add team members to receive an email notification with your comments and a link to the work item in which you mentioned them.
	- **#ID** which provides a quick way to create links to other work items within the Discussion control 
- **Related Work control** that provides a quick method to link to and view linked work items 
- **Development control** where you're able to engage with code changes, pull requests, and builds through interactive experiences as described in [Drive Git development for a work item](../../boards/backlogs/connect-work-items-to-git-dev-ops.md)
- **History page** with improved readability and with indicators for important changes such as reassignment, change of state, discussion comment, and more 
- **Attachment control** that supports drag-and-drop of attachments and attachment preview.
- **Custom control support** that enables adding custom field, group, and page extensions such as multi-value control and toggle control
- Easy copy to clipboard functionality. 

Here's what you'll see when you preview the new form.  

<img src="../../boards/_shared/_img/new-form-user-story-3-col.png" alt="New form for user story" style="border: 2px solid #C3C3C3;" />

For guidance in using the new form features, see [Add work items to plan and track your project](../../boards/backlogs/add-work-items.md).   

## New form features  

### Consistent look and feel  

First off, you'll notice that the form reflects the color of your work item type&mdash;bug, user story, or task. And, we've done away with duplicate titles to cut down on clutter. Whether you're working from a backlog, board, or query&mdash;your experience remains the same.  

<img src="../../boards/_shared/_img/new-form-bug-header.png" alt="New form, bug, header" style="border: 2px solid #C3C3C3;" />

### Great consumption experience  
 
Your data has more structure and organization. Plus, you can focus more easily on areas of interest by collapsing groups to hide details you don't care about. And as you resize the form, it quickly responds to provide you with a great viewing experience even within a limited screen width.  
 
<img src="../../boards/_shared/_img/new-form-exp-resized-user-story-form.png" alt="New form, collapsible groups, responsive form" style="border: 2px solid #C3C3C3;" />


### More viewing area to support core experiences  
 
All the core tabs&mdash;Details, History, Links, and Attachments&mdash;now have more screen space. See [History and auditing](../../boards/queries/history-and-auditing.md) for details on the new History tab.

<img src="../../boards/backlogs/_img/add-work-item-history.png" alt="New form, history tab" style="border: 1px solid #C3C3C3;" />   

<a id="discussion">  </a>
### Discussion  

Use the new Discussion section to add and review comments made about the work being performed. 

Click the ![Discussions icon](../../boards/_img/icons/icon-discussions-wi.png) discussion icon, which indicates how many comments have been added, to move your focus to the discussion section.  Click the ![full screen icon](../../boards/_img/icons/fullscreen_icon.png) full screen icon to expand the display of the discussion section within the form.   

Within the discussion section, you can use the [**@mention** control](../../notifications/at-mentions.md) to notify another team member about the discussion. Simply type **@** and their name. To reference a work item, use the [**#ID** control](../../notifications/add-links-to-work-items.md). Type **#** and a list of work items that you've recently referenced will appear from which you can select.  

<img src="../../boards/backlogs/_img/add-work-items-discussion.png" alt="Discussion section" style="border: 1px solid #C3C3C3;" />  

> [!IMPORTANT]
> For on-premises TFS, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) in order for team members to receive notifications.     

### Access to other tasks

Looking for the toolbar task options? You access them now through the ![](../../_img/icons/actions-icon.png) actions icon.  

<img src="../../boards/backlogs/_img/new-form-action-menu.png" alt="New form, User story, Actions menu" style="border: 1px solid #C3C3C3;" />  

<a id="switch-new">  </a> 
## Switch to the new experience  

Depending on the [opt-in mode your admin selected](../manage-new-form-rollout.md#opt-in), you'll either automatically see the new web form when you open a work item, or you'll have the choice to switch to the new form.  

When you switch, all forms displayed through the web portal for all work item types will now display with the new experiences. 

![User story, Switch to New form](../_img/m-new-form-try-switch.png)
 
As this switch is set on a per-user basis, other users will continue to see the old form until they also choose to switch.  

<a id="switch-back">  </a> 
###Switch back to the old form 

If your admin has enabled opt-in to support switch back. Simply choose the ![](../../_img/icons/actions-icon.png) actions icon to open the context menu to switch back to the old layouts.  

![New web form, user story, Back to old form menu option](../_img/m-new-form-user-story-switch-to-old-form.png)

If you don't see this option, then the new form has been enabled for all users, and switching back is managed by your admin.  

When you switch back, all forms revert to the layout they had previously. If you do choose to switch back, we'd appreciate hearing what didn't work for you with the new form layout.   

## Related articles 

The new form also supports customization through the user interface with the Inheritance process model. To learn more about process models and what's supported with each, see [Customize your work tracking experience](../customize-work.md). 

To manage the rollout of the new form or customize it, see:  
- [Manage new form rollout](../manage-new-form-rollout.md)  
- [Customize the new form](../customize-wit-form.md) (On-premises XML process model)

For guidance in using the new form, see:
- [Add work items to plan and track your project](../../boards/backlogs/add-work-items.md) 
- [Drive Git development for a work item](../../boards/backlogs/connect-work-items-to-git-dev-ops.md) 

For news of upcoming features, or extending the work tracking experience, see these resources:  
- [Azure DevOps Services Features Timeline](/azure/devops/release-notes/index)  
- [REST API, Work Item Types](/rest/api/azure/devops/processdefinitions/work%20item%20types)  


### Will this impact Visual Studio work item forms?  

Not at this time.   