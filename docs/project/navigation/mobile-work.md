---
title: View and update work items via a mobile browser 
titleSuffix: Azure DevOps
description: View and update work items from your mobile client when using Azure DevOps
ms.custom: Navigation
ms.subservice: azure-devops-projects
ms.topic: how-to
ms.assetid: 1B91BB7F-1205-4E51-B33C-1349D3117408
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 04/04/2022
---

#  View and update work items via the mobile browser   

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

With the mobile browser and work item form, you gain on-the-go features to stay on top of the latest updates made to work tracking. When you click any work item link on your mobile device, it will open a mobile-friendly version of the work item. From there, you can update the work item or access all work items assigned to you or that you're following.   
 
<img src="media/mobile-work-intro-1.png" alt="Mobile work item form" />  

::: moniker range="azure-devops"

> [!NOTE]  
> The mobile browser supports Azure DevOps work tracking. To sign up for free, go to [Azure DevOps Services](https://www.visualstudio.com/team-services/). The mobile browser is not an app, but a mobile view into select features. There is nothing to download. You access the mobile browser by clicking a link from a work item you receive in your mobile email application.      

::: moniker-end

::: moniker range="< azure-devops"

> [!NOTE]  
> The mobile browser is available for TFS 2018 and Azure DevOps Server 2019 and later versions. For downloads, see [Downloads](https://visualstudio.microsoft.com/downloads/). The mobile browser is not an app, but a mobile view into select features. There is nothing to download. You access the mobile browser by clicking a link from a work item you receive in your mobile email application. 

::: moniker-end


<a id="mobile"></a>

## Open the mobile work item form  

The mobile work item form will open when you click **View work item** from an email you receive from your mobile device. You'll receive this type of email under these circumstances:  

- Changes were made to a work item you're following
- You were <strong>@mentioned</strong> in a discussion
- A notification is sent based on the work item alerts you've set using [Manage personal notifications](../../notifications/manage-your-personal-notifications.md). 

<img src="media/mobile-work-email-notice.png" alt="Email received in your mobile client" />  


## Update a work item

Within the mobile form, you can do almost everything you can do from the [web portal form](../../boards/backlogs/add-work-items.md). Here are the actions you can take in the order they appear in the mobile form: 

*  Add and remove tags
*  View and add to the discussion, click on the comment to add to the discussion
*  View and update any field within the form (Assign to, State, Area, Iteration, Description, and more) 
*  View and open a link within the Development section 
*  View History 
*  View and open a link from the Links tab
*  Open and add an attachment from the Attachments tab

Actions not available to you within the mobile work item form: 
*  You can't create or add new work items
*  You can't initiate a development operation 
*  You can't add a link  


### Interact with mobile form controls  

Mobile form controls operate as follows: 

- Click any field to edit it and the form changes to a full-screen experience. For example, some of the most common actions such as changing the state of an item, moving to a different area path, adding an attachment, and creating/removing tags are all supported. 
- When done, click the ![return icon](media/mobile-work-return.png) return option. 
- Remember to click the ![save icon](../../boards/media/icons/icon-save-wi.png) save icon to save your changes!  

### Update status (change State) 
 
To update the state, click the state you want.  
 
<img src="media/mobile-work-change-state.png" alt="Mobile work item form, Change State action" />  

### Add or remove tags 

To add a tag, type the text you want.  
 
<img src="media/mobile-work-add-tags.png" alt="Mobile work item form, Add or remove tags" /> 

### View history
 
Click the History tab to view history. 

<img src="media/mobile-work-view-history.png" alt="Mobile work item form, View history" />  

## View and open work items in your activity lists 

From within the mobile work item form, you can access your work items. The mobile browser allows you to view and open work items which fall into these categories: 
- **Assigned to me**: lists all work items assigned to you 
- **Following**: lists all work items that you have elected to follow 
- **My activity**: lists all work items that you have recently viewed or updated.

The lists available from each page span all team projects that you work in. 

To access a list, first click the list control from the work item form you've opened. 

![Click the list icon](media/mobile-work-click-list.png) 

Then, click **Work items**. 

![Click Work items](media/mobile-work-click-work-items.png)

The browser opens to the **Assigned to me** page. From there, you can choose **Following** or **My activity** to access the other pages. To learn more about the **Work Items** view, see [View and add work items](../../boards/work-items/view-add-work-items.md). 

![The browser opens to the Assigned to me page.](media/mobile-work-account-work-items-pages.png)  

## Related articles  

Additional experiences are in the works to improve and expand on the mobile experience. For more information, see the blog post: [The mobile work item form (preview)](https://devblogs.microsoft.com/devops/the-mobile-work-item-form/).
  
- [Set personal notifications](../../notifications/manage-your-personal-notifications.md)  
- [Set team notifications](../../notifications/manage-team-group-global-organization-notifications.md)  
- [Follow a work item](../../boards/work-items/follow-work-items.md)    


### Provide feedback for the mobile experience  

Help us improve the mobile experience. 

To provide feedback,  choose the list control from the work item form and then click **Send Feedback**. To complete the feedback, select either the smile or frown and optionally enter a comment. 

<img src="media/mobile-work-send-feedback.png" alt="Mobile work item form, Send feedback" />