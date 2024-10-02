---
title: Manage work items
titleSuffix: Azure Boards 
description:  
ms.custom: devx-track-azurecli
ms.service: azure-devops-boards
ms.assetid: 9474A25E-A9D8-433D-8370-C94624B4ACD6  
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.topic: tutorial
ms.date: 10/02/2024
---

# Manage work items

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Work items help you plan and manage your project by tracking different types of work, such as user stories, product backlog items, tasks, bugs, or issues. Use work items to describe the work to be done, assign tasks, track status, and coordinate efforts within your team.

Once you [create work items](../work-items/view-add-work-items.md), managing work items involves the following key tasks:

- [Update work items](#update-work-items)
- [Link work items](#link-to-a-work-item)
- [Follow work items](#follow-a-work-item)
- [Add attachments](#add-attachments)
- [Delete attachments](#delete-attachments)
- [Restore deleted attachments](#restore-deleted-attachment)
- [Permanently delete attachments](#permanently-delete-attachments)

By effectively managing work items, you can ensure that your project stays on track and that all team members are aligned on the work to be done.

[!INCLUDE [temp](../includes/prerequisites-work-items.md)]

<a id="define-new-work">  </a>

## Update work items

As work progresses, team members can update the state and reassign it as needed. While the workflow states differ for different work item types, they usually follow a progression from New or Active to Completed or Done. 

#### [Browser](#tab/browser/) 

The following image shows the workflow states for a user story. If you want to discard a work item, change the state to Removed, or you can delete it. For more information, see [Move, change, or remove a work item](remove-delete-work-items.md).

> [!div class="mx-imgBorder"]  
> ![Screenshot showing updating the state of a user story.](media/add-work/update-state.png)  

:::row:::
   :::column span="2":::
      **Typical workflow progression:**
      - The product owner creates a user story in the **New** state with the default reason, **New user story**   
      - The team updates the status to **Active** when they decide to complete the work during the sprint  
      - A user story is moved to **Resolved** when the team completes all its associated tasks and unit tests for the story pass.  
      - A user story is moved to the **Closed** state when the product owner agrees that the story is implemented according to the Acceptance Criteria and acceptance tests pass.  
    
**Atypical transitions**: 
      - Change the State from **Active** to **New**.  
      - Change the State from **Resolved** to **Active**.  
      - Change the State from **Resolved** to **New**.  
      - Change the State from **Closed** to **Active**.  
      - Change the State from **New** to **Removed**.  
      - Change the State from **Removed** to **New**.  
   :::column-end:::
   :::column span="2":::
      ![Screenshot of user story workflow, Agile process.](../work-items/guidance/media/alm_pt_agile_wf_userstory.png)  
   :::column-end:::
:::row-end:::

Removed work items remain in the data store and can be reactivated by changing the State.   

With each update, changes are recorded in the History field, which you can view through the **History** tab.  

![Screenshot of viewing change history.](media/add-work-item-history.png)  

To find work items based on their history, see [History & auditing](../queries/history-and-auditing.md).

[!INCLUDE [temp](../includes/discussion-tip.md)] 

### [Visual Studio 2019](#tab/visual-studio/)

You can't update a work item using Visual Studio 2019 at this time.

### [Azure DevOps CLI](#tab/azure-devops-cli) 

::: moniker range="azure-devops"

[Update work item](#update-work-item) | [Show work item details](#show-work-item) 

<a id="update-work-item"></a>  

### Update a work item

You can make updates to your work items with the [az boards work-item update](/cli/azure/boards/work-item#az-boards-work-item-update) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

```azurecli 
az boards work-item update --id
                           [--area]
                           [--assigned-to]
                           [--description]
                           [--discussion]
                           [--fields]
                           [--iteration]
                           [--open]
                           [--org]
                           [--reason]
                           [--state]
                           [--title] 
``` 

### Parameters 

- **id**: Required. The ID of the work item.

### Optional parameters

- **area**: Area the work item is assigned to (for example, **Demos**). 
- **assigned-to**: Name of the person the work item is assigned-to (for example, **fabrikam**). 
- **description**: Description of the work item. 
- **discussion**: Comment to add to a discussion in a work item. 
- **fields**: Space separated "field=value" pairs for custom fields you would like to set. 
- **iteration**: Iteration path of the work item (for example, **DemosIteration 1**). 
- **open**: Open the work item in the default web browser.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **reason**: Reason for the state of the work item. Must be a valid workflow Reason for the work item type.
- **state**: State of the work item (for example, **Active**). Must be a valid workflow State for the work item type.
- **title**: Title of the work item. 

### Example 

The following command updates the title of the bug with the ID 864 and displays the results in the Azure DevOps CLI in table format.

```azurecli 
az boards work-item update --id 864  --title "Fix security issues" --output table

ID    Type    Title                Assigned To          State
----  ------  -------------------  -------------------  -------
864   Bug     Fix security issues  contoso@contoso.com  New
```

<a id="show-work-item"></a>  

#### Add comments to a discussion

Use the **discussion** parameter to add comments to the **Discussion** control of a work item. The following command adds the specified comment to the bug with the ID 864 and opens the bug in your default web browser, where you can view the comment.

```azurecli 
az boards work-item update --id 864  --discussion  "This work item is about 50% complete" --open
```

### Show details for a work item

You can show the details for a work item with the [az boards work-item show](/cli/azure/boards/work-item#az-boards-work-item-show) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

```azurecli 
az boards work-item show --id
                         [--open]
                         [--org] 
``` 

### Parameters 

- **id**: Required. The ID of the work item.
- **open**: Open the work item in the default web browser.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

### Example 

The following command shows details for the bug with the ID 864. It opens in your default web browser and also displays the results in the Azure DevOps CLI in table format.

```azurecli 
az boards work-item show --id 864  --open --output table

ID    Type    Title       Assigned To          State
----  ------  ----------  -------------------  -------
864   Bug     fix-issues  contoso@contoso.com  New 
``` 

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)] 

* * *

### Link to a work item

Add links to work items to show relationships between them and other work items or objects. For example, link a bug to a user story to indicate that the bug is blocking the user story. You can also link work items to commits, pull requests, builds, and other objects.

Set the link relationship to various types, including **Parent**, **Child**, and **Duplicate**.

For more information, see [Link work items to objects](../backlogs/add-link.md).

## Follow a work item

To track the progress of a single work item, select the :::image type="icon" source="../media/icons/follow-icon.png" border="false"::: follow icon. This action notifies you when changes are made to the work item.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing Work item form, Follow icon control.](../work-items/media/follow-work/follow-work-item.png) 

You receive notifications only when other project members modify the work item, such as when they add to the discussion, change a field value, or add an attachment.

Notifications are sent to your preferred email address, which you can [change from your user profile](../../organizations/notifications/change-email-address.md).

To stop following changes, select the :::image type="icon" source="../media/icons/following-icon.png" border="false"::: following icon.

::: moniker range="< azure-devops"

> [!IMPORTANT]
> To support the **follow** feature, configure an [SMTP server](/azure/devops/server/admin/setup-customize-alerts) for team members to receive notifications.

::: moniker-end

<a id="sort"></a>

## Add columns and sort by a column 

Sort your view by any column field selected from the **Column Options** dialog in the web portal. For more information, see [Change column options](../backlogs/set-column-options.md).

[!INCLUDE [temp](../includes/discussion-tip-azure-devops.md)] 

## Copy selected items to the clipboard or email them

To select several items in a sequence, hold down the **Shift** key on a web portal page. To select non-sequential items, use the **Ctrl** key. Then, use **Ctrl+C** to copy the selected items to the clipboard. Alternatively, open the context menu for the selected work items, select the ![actions icon](../media/icons/actions-icon.png), and select an option from the menu.

> [!div class="mx-imgBorder"]
> ![Screenshot of web portal, Work Items page, Following view, Select multiple work items, open context menu.](../work-items/media/view-add/following-context-menu.png)

## Add attachments

1. From your work item, select the **Attachments** tab > **Add attachment**.
   
   :::image type="content" source="media/add-attachment.png" alt-text="Screenshot showing highlighted Attachments button in work item.":::

2. Select the file, select **Open**, and then **Save**. 

The attachment is added to the work item.

## Delete attachments

1. From your work item, select the **Attachments** tab. 
2. Select **more actions** :::image type="icon" source="../media/icons/more-actions.png" border="false"::: > **Delete attachment**.

   :::image type="content" source="media/delete-attachment.png" alt-text="Screenshot showing delete attachment flow.":::

3. Select **Delete** to confirm you want to delete the attachment.

   :::image type="content" source="media/confirm-delete-attachment.png" alt-text="Screenshot showing Delete button for confirming delete action.":::

The attachment is deleted and remains in the Recycle Bin until you either [restore](#restore-deleted-attachment) or [permanently delete](#permanently-delete-attachments) it.

## Restore deleted attachment

1. From **Boards** > **Work items**, select :::image type="icon" source="media/recycle-bin-icon.png" border="false"::: **Recycle Bin**.

   :::image type="content" source="media/work-items-recycle-bin.png" alt-text="Screenshot showing highlighted recycle bin in work items list.":::

2. For the deleted work item, select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **more actions** > **Restore**.

   :::image type="content" source="media/restore-work-item.png" alt-text="Screenshot showing highlighted more actions and Restore buttons.":::

3. Select **Restore** to confirm you want to restore the attachments.

   :::image type="content" source="media/confirm-restore.png" alt-text="Screenshot showing final Restore button selection.":::

The attachment is restored.

## Permanently delete attachments

1. From your work item, select the **Attachments** tab. 
2. Select **more actions** :::image type="icon" source="../media/icons/more-actions.png" border="false"::: > **Permanently delete attachment**.

   :::image type="content" source="media/permanently-delete-attachment.png" alt-text="Screenshot showing permanently delete attachment flow.":::

3. Select **Delete** to confirm you want to permanently delete the attachment.

   :::image type="content" source="media/confirm-permanently-delete-attachment.png" alt-text="Screenshot showing Delete button for confirming permanent delete action.":::

The attachment is permanently deleted and isn't accessible from any other links. 

## Next steps  

> [!div class="nextstepaction"]
> [Create your backlog](create-your-backlog.md) or 
> [Kanban board quickstart](../boards/kanban-quickstart.md) 

## Related articles

- [View the work item field index](../work-items/guidance/work-item-field.md?toc=/azure/devops/boards/work-items/toc.json)
- [Explore work item form controls](../work-items/about-work-items.md#work-item-form-controls)
- [Set up notifications for changes](../../organizations/notifications/manage-your-personal-notifications.md)
- [Create and manage queries](../queries/using-queries.md)
- [Define status and trend charts](../../report/dashboards/charts.md)
- [Use clients that support tracking work items](../../user-guide/tools.md?toc=/azure/devops/boards/work-items/toc.json)
