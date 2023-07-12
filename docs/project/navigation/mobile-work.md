---
title: View and update work items via mobile browser 
titleSuffix: Azure DevOps
description: View and update work items from your mobile client when you're using Azure DevOps.
ms.custom: Navigation
ms.subservice: azure-devops-projects
ms.topic: how-to
ms.assetid: 1B91BB7F-1205-4E51-B33C-1349D3117408
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/12/2023
---

#  View and update work items via mobile browser   

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

With the mobile browser and work item form, you gain on-the-go features to stay on top of the latest updates made to work tracking. When you select any work item link on your mobile device, it opens a mobile-friendly version of the work item. From there, you can update the work item or access all work items assigned to you or that you're following.   

:::image type="content" source="media/mobile-work-intro-1.png" alt-text="Screenshot of work item on mobile device."::: 

::: moniker range="azure-devops"

> [!NOTE]  
> The mobile browser supports Azure DevOps work tracking. To sign up for free, go to [Azure DevOps Services](https://www.visualstudio.com/team-services/). The mobile browser is not an app, but a mobile view into select features. There is nothing to download. You access the mobile browser by selecting a link from a work item you receive in your mobile email application.      

::: moniker-end

::: moniker range="< azure-devops"

> [!NOTE]  
> The mobile browser is available for TFS 2018 and Azure DevOps Server 2019 and later versions. For downloads, see [Downloads](https://visualstudio.microsoft.com/downloads/). The mobile browser is not an app, but a mobile view into select features. There is nothing to download. You access the mobile browser by selecting a link from a work item you receive in your mobile email application. 

::: moniker-end

## Open the mobile work item form  

The mobile work item form opens when you select **View work item** from an email you receive from your mobile device. You receive this type of email under the following circumstances:  

- Changes were made to a work item you're following.
- You were **@mentioned** in a discussion.
- A notification email gets sent based on the work item alerts you've set using [Manage personal notifications](../../organizations/notifications/manage-your-personal-notifications.md). 

:::image type="content" source="media/mobile-work-email-notice.png" alt-text="Screenshot of Azure DevOps email notification of email received in mobile client."::: 

## Update a work item

Within the mobile form, you can do almost everything you can do from the [web portal form](../../boards/backlogs/add-work-items.md). Here are the actions you can take in the order they appear in the mobile form: 

*  Add and remove tags
*  View and add to the discussion, select on the comment to add to the discussion
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

- Select any field to edit it and the form changes to a full-screen experience. Some of the most common actions include changing the state of an item, moving to a different area path, adding an attachment, and creating/removing tags are all supported. 
- Select the ![save icon](../../boards/media/icons/icon-save-wi.png) save icon to save your changes. 

### Update status (change State) 
 
To update the state, select the state you want.  

:::image type="content" source="media/mobile-work-change-state.png" alt-text="Screenshot of State change options via mobile browser."::: 

### Add or remove tags 

To add a tag, enter the text you want.  

:::image type="content" source="media/mobile-work-add-tags.png" alt-text="Screenshot of mobile work item form, Add or remove tags.":::

### View history
 
Select **History** to view the work item's history. 

:::image type="content" source="media/mobile-work-view-history.png" alt-text="Screenshot of mobile work item form, View history.":::

## View and open work items in your activity lists 

From within the mobile work item form, you can access your work items. The mobile browser allows you to view and open work items that fall into these categories: 
- **Assigned to me**: lists all work items assigned to you 
- **Following**: lists all work items that you have elected to follow 
- **My activity**: lists all work items that you have recently viewed or updated.

The lists available from each page span all team projects that you work in. 

1. Select the list control from the work item form you opened. 

   :::image type="content" source="media/mobile-work-click-list.png" alt-text="Screenshot of selected list icon.":::

2. Select **Work items**. 

   :::image type="content" source="media/mobile-work-click-work-items.png" alt-text="Screenshot of selected work items.":::

The browser opens to the **Assigned to me** page. From there, you can choose **Following** or **My activity** to access the other pages. For more information, see [View and add work items](../../boards/work-items/view-add-work-items.md). 

:::image type="content" source="media/mobile-work-account-work-items-pages.png" alt-text="Screenshot of the Assigned to me page in the browser."::: 

## Related articles  

More experiences are in the works to improve and expand on the mobile experience. For more information, see the blog post, [The mobile work item form (preview)](https://devblogs.microsoft.com/devops/the-mobile-work-item-form/).
  
- [Set personal notifications](../../organizations/notifications/manage-your-personal-notifications.md)  
- [Set team notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)  
- [Follow a work item](../../boards/work-items/follow-work-items.md)    


### Provide feedback for the mobile experience  

Help us improve the mobile experience. 

To provide feedback, select the list control from the work item form and then select **Send Feedback**. To complete the feedback, select either the smile or frown and optionally enter a comment. 

:::image type="content" source="media/mobile-work-send-feedback.png" alt-text="Screenshot of the mobile work item form, Send feedback.":::
