---
title: Manage attachments to work items
titleSuffix: Azure Boards 
description: Learn how to manage attachments to work items in Azure DevOps.
ms.custom: devx-track-azurecli
ms.service: azure-devops-boards
ms.author: v-catherbund
author: cebundy
monikerRange: '<= azure-devops'
ms.topic: how-to
ms.date: 11/15/2024
---

# Manage attachments to work items

Attachments to work items are a great way to share information with your team. You can attach files, images, and links to work items. You can attach up to 100 files to a work item. Each attachment is limited to 60 MB. You can manage attachments through the web portal by selecting the attachment tab on your work item.
 
This article shows you how to manage attachments to work items in Azure DevOps.
::: moniker range="azure-devops"

:::image type="content" source="../backlogs/media/manage-work-items/attachments-tab-services.png" alt-text="Screenshot showing highlighted Attachments button in work item." :::

Use the Collapse/Expand button to show or hide the attachments.

:::image type="content" source="../backlogs/media/manage-work-items/expand-collapse-attachments.png" alt-text="Screenshot showing highlighted expand or collapse attachments button in work item." :::

To toggle between the list and grid view of attachments, select the **List** or **Grid** icon.

:::image type="content" source="../backlogs/media/manage-work-items/attachments-list-grid-view-buttons-services.png" alt-text="Screenshot showing list and grid view buttons." :::

Once you add an attachment, you can hover over the work item to access the **more actions** :::image type="icon" source="../media/icons/more-actions.png" border="false":::  menu. The more actions menu allows you to:

- preview the attachment
- edit the comment
- copy the attachment link
- download the attachment
- delete attachments
- permanently delete attachments if you have the correct permissions.

::: moniker-end

::: moniker range="< azure-devops"

:::image type="content" source="../backlogs/media/manage-work-items/attachments-tab-server.png" alt-text="Screenshot of highlighted Attachments button in work item." :::

You can choose a list or grid view of attachments. The grid view provides a thumbnail preview of the attachment.   

:::image type="content" source="../backlogs/media/manage-work-items/attachments-list-grid-view-buttons-server.png" alt-text="Screenshot showing list and grid view buttons." :::

Once you add an attachment, you can hover over the work item to access the **more actions** :::image type="icon" source="../media/icons/more-actions-horizontal.png" border="false":::  menu. The more actions menu allows you to:

- preview the attachment
- edit the comment
- download the attachment
- delete attachments


::: moniker-end

### Add attachments

1. From your work item, select the **Attachments** tab > **Add attachment**.
   
   :::image type="content" source="../backlogs/media/add-attachment.png" alt-text="Screenshot showing highlighted Attachments button.":::

2. Select the file, select **Open**, and then **Save**. 

The attachment is added to the work item. To add more attachments, select **+ Add attachment**.

### Add comments to attachments

To add a comment to an attachment:

::: moniker range="azure-devops"

1. Hover over the attachment and select **more actions** :::image type="icon" source="../media/icons/more-actions.png" border="false"::: > **Edit comment**.

   :::image type="content" source="../backlogs/media/manage-work-items/add-comment-attachment.png" alt-text="Screenshot showing add comment to attachment flow.":::

1. Edit your comment and select **Save**.

::: moniker-end

::: moniker range="< azure-devops"

1. Select or hover over the attachment and select **more actions** :::image type="icon" source="../media/icons/more-actions-horizontal.png" border="false"::: > **Edit comment**.

   :::image type="content" source="../backlogs/media/manage-work-items/add-comment-attachment.png" alt-text="Screenshot showing add comment to attachment flow.":::

1. Edit your comment and select **Save**.

::: moniker-end

### Preview attachments


::: moniker range="azure-devops"

### Copy attachment link

To copy the link to an attachment:

Hover over the attachment and select **more actions** :::image type="icon" source="../media/icons/more-actions.png" border="false"::: > **Copy attachment link**.

::: moniker-end

### Download attachments

To download an attachment to your browser's download directory:

::: moniker range="azure-devops"

Hover over the attachment and select **more actions** :::image type="icon" source="../media/icons/more-actions.png" border="false"::: > **Edit comment**.

::: moniker-end

::: moniker range="< azure-devops"

Select or hover over the attachment and select **more actions** :::image type="icon" source="../media/icons/more-actions-horizontal.png" border="false"::: > **Download attachment**.

::: moniker-end

### Delete attachments

To delete an attachment: 

::: moniker range="azure-devops"

1. Hover over the attachment and select **more actions** :::image type="icon" source="../media/icons/more-actions.png" border="false"::: > **Delete attachment**.

1. Select **Delete** to confirm you want to delete the attachment.

   :::image type="content" source="../backlogs/media/confirm-delete-attachment.png" alt-text="Screenshot showing Delete button for confirming delete action.":::

::: moniker-end

::: moniker range="< azure-devops"

1. Select or hover over the attachment and select **more actions** :::image type="icon" source="../media/icons/more-actions-horizontal.png" border="false"::: > **Delete attachment**.

1. Select **Delete** to confirm you want to delete the attachment.

   :::image type="content" source="../backlogs/media/confirm-delete-attachment.png" alt-text="Screenshot showing Delete button for confirming delete action.":::

The deleted attachment cannot be restored and is permanently removed after 28 days. In the meantime, if you have permissions, you can [permanently delete](#permanently-delete-attachments) it.


::: moniker-end

The deleted attachment can't be restored and is permanently removed after 28 days. In the meantime, if you have permissions, you can [permanently delete](#permanently-delete-attachments) it.

::: moniker range="azure-devops"

### Permanently delete attachments

To permanently delete attachments, you need **Permanently delete work items** permissions. This action is typically reserved for situations requiring immediate removal, such as when files are infected. Otherwise, deleted attachments are automatically removed within 28 days.

1. From your work item, select the **Attachments** tab. 
2. Select **more actions** :::image type="icon" source="../media/icons/more-actions.png" border="false"::: > **Permanently delete attachment**.

   :::image type="content" source="../backlogs/media/permanently-delete-attachment.png" alt-text="Screenshot showing permanently delete attachment flow.":::

3. Select **Delete** to confirm you want to permanently delete the attachment.

   :::image type="content" source="../backlogs/media/confirm-permanently-delete-attachment.png" alt-text="Screenshot showing Delete button for confirming permanent delete action.":::

The attachment is permanently deleted and isn't accessible from any other links. 

> [!NOTE]
> This feature is only available in New Boards Hub.

::: moniker-end


## Related articles

