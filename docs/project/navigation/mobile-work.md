---
title: View and update work items via mobile browser 
titleSuffix: Azure DevOps
description: View and update work items from your mobile client using Azure DevOps.
ms.custom: Navigation
ms.subservice: azure-devops-projects
ms.topic: how-to
ms.assetid: 1B91BB7F-1205-4E51-B33C-1349D3117408
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 10/03/2024
---

# View and update work items via mobile browser

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use the mobile browser to stay updated on work tracking in Azure DevOps. When you select any work item link on your mobile device, it opens a mobile-friendly version of the work item. From there, you can update the work item or access all work items assigned to you or that you're following.

:::image type="content" source="media/mobile-work-intro-1.png" alt-text="Screenshot of work item on mobile device.":::

::: moniker range="azure-devops"

> [!NOTE]  
> The mobile browser supports Azure DevOps work tracking. To sign up for free, go to [Azure DevOps Services](https://www.visualstudio.com/team-services/). The mobile browser is not an app, but a mobile view into select features. There is nothing to download. You access the mobile browser by selecting a link from a work item you receive in your mobile email application.      

::: moniker-end

::: moniker range="< azure-devops"

> [!NOTE]
> The mobile browser is available for Azure DevOps Server 2019 and later versions. For downloads, see [Downloads](https://visualstudio.microsoft.com/downloads/). The mobile browser is not an app but a mobile view of select features. There is nothing to download. Access the mobile browser by selecting a link from a work item in your mobile email application.

::: moniker-end

## Open the mobile work item form  

The mobile work item form opens when you select **View work item** from an email on your mobile device. You receive this type of email when the following actions occur:

- Changes get made to a work item you're following.
- You're **@mentioned** in a discussion.
- A notification email gets sent based on your work item alerts set using [Manage personal notifications](../../organizations/notifications/manage-your-personal-notifications.md).

:::image type="content" source="media/mobile-work-email-notice.png" alt-text="Screenshot of Azure DevOps email notification of email received in mobile client."::: 

## Update a work item

Within the mobile form, you can perform almost all actions available in the [web portal form](../../boards/backlogs/add-work-items.md). Here are the actions you can take in the order they appear in the mobile form:

- Add and remove tags
- View and add to the discussion by selecting a comment
- View and update any field within the form (Assign to, State, Area, Iteration, Description, and more)
- View and open a link within the Development section
- View History
- View and open a link from the Links tab
- Open and add an attachment from the Attachments tab

Actions not available in the mobile work item form:
- You can't create or add new work items
- You can't initiate a development operation
- You can't add a link

### Interact with mobile form controls  

Mobile form controls operate as follows:

- Select any field to edit it, and the form changes to a full-screen experience. Common actions include:
  - Change the state of an item: Select the desired state from the dropdown menu to update the work item's status.
  - Move to a different area path: Choose a new area path to reassign the work item within the project.
  - Add an attachment: Upload files to the work item to provide more context or resources.
  - Create or remove tags: Enter the text you want in the tag field and press **Enter** to add a tag. To remove a tag, select the "x" next to the tag name.
- Select the ![save icon](../../boards/media/icons/icon-save-wi.png) save icon to save your changes. This action ensures all updates are recorded and reflected in the work item.

### Update status (change State) 
 
To update the state, select the desired state from the dropdown menu. This action changes the work item's status, helping to track its progress. After making your selection, ensure you save your changes by selecting the ![save icon](../../boards/media/icons/icon-save-wi.png) save icon.

:::image type="content" source="media/mobile-work-change-state.png" alt-text="Screenshot of State change options via mobile browser."::: 

### Add or remove tags 

To add a tag, enter the desired text in the tag field and press **Enter**. The tag gets added to the work item. You can add multiple tags by repeating this process. Tags help categorize and filter work items for better organization and tracking.

:::image type="content" source="media/mobile-work-add-tags.png" alt-text="Screenshot of mobile work item form, Add or remove tags.":::

### View history
 
To view the work item's history, select the **History** tab. This action displays a chronological list of all changes made to the work item, including updates to fields, comments, and state transitions.

:::image type="content" source="media/mobile-work-view-history.png" alt-text="Screenshot of mobile work item form, View history.":::

## View and open work items in your activity lists 

From within the mobile work item form, you can access your work items. The mobile browser allows you to view and open work items categorized as follows:
- **Assigned to me**: Lists all work items assigned to you.
- **Following**: Lists all work items that you're following.
- **My activity**: Lists all work items that you recently viewed or updated.

These lists span all team projects that you're involved in, providing a comprehensive view of your work items across projects.

1. Select the list control from the work item form you opened. 

   :::image type="content" source="media/mobile-work-click-list.png" alt-text="Screenshot of selected list icon.":::

2. Select **Work items**. 

   :::image type="content" source="media/mobile-work-click-work-items.png" alt-text="Screenshot of selected work items.":::

When you open the browser, it defaults to the **Assigned to me** page. From there, you can navigate to the **Following** or **My activity** pages to access other work items. For more information, see [View and add work items](../../boards/work-items/view-add-work-items.md).

:::image type="content" source="media/mobile-work-account-work-items-pages.png" alt-text="Screenshot of the Assigned to me page in the browser."::: 

> [!TIP]
> From your mobile device, you can perform most functions in Azure Boards, Azure Repos, Azure Pipelines, Azure Test Plans, and Azure Artifacts, just as you would via the web portal. The following example shows mobile access to Pull Requests.
> :::image type="content" source="../media/mobile-azure-devops-hubs.png" alt-text="Screenshot showing Azure DevOps hubs accessible via mobile browser.":::

## Related articles  

- [View blog post, The mobile work item form (preview)](https://devblogs.microsoft.com/devops/the-mobile-work-item-form/).
- [Set personal notifications](../../organizations/notifications/manage-your-personal-notifications.md)  
- [Set team notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)  
- [Follow a work item](../../boards/work-items/follow-work-items.md)    

### Provide feedback for the mobile experience  

Help us improve the mobile experience.

To provide feedback, select the list control from the work item form and choose **Make a suggestion**. You can also select **Report a bug** or **Contact support** to provide other feedback or get assistance.

:::image type="content" source="media/mobile-work-send-feedback.png" alt-text="Screenshot of the mobile work item form, Send feedback.":::
