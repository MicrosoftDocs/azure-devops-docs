---
title: Manage work items
titleSuffix: Azure Boards 
description: Learn how to create, update, link, follow, and delete work items, as well as manage attachments and tags.
ms.custom: devx-track-azurecli
ms.service: azure-devops-boards
ms.assetid: 9474A25E-A9D8-433D-8370-C94624B4ACD6  
ms.author: v-catherbund
author: cebundy
monikerRange: '<= azure-devops'
ms.topic: tutorial
ms.date: 10/31/2024
---

# Manage Work Items in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)] 

Work items help you plan and manage your project by tracking different types of work, such as user stories, product backlog items, tasks, test cases, or bugs. Use work items to describe the work to be done, assign tasks, track status, and coordinate efforts within your team.

This article describes the feature that you can use to manage work items in Azure DevOps.


[!INCLUDE [temp](../includes/prerequisites-work-items.md)] 


## Update work items

You can update a work item to change various elements, such as the title, description, state, or assigned team member.

### [Browser](#tab/browser)

Once you select the work item you want to update, you can make changes to the work item form.

# [Visual Studio 2019](#tab/visual-studio)

From the Team Explorer, you can select a work item. The work item form opens in the web portal where you can make changes to the work item form and save your changes.

### [Azure DevOps CLI](#tab/azure-devops-cli)

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

::: moniker range="azure-devops"

To assign a team member to a work item using the Azure DevOps CLI, use the [az boards work-item update](/cli/azure/boards/work-item#az-boards-work-item-update) command.  

```azurecli

az boards work-item update --id <work-item-id> --assigned-to <user-email> --org https://dev.azure.com/<organization-name> --project <project-name>

```

> [!TIP]
> If you set the default organization and project using the `az devops configure` command, you can omit the `--org` and `--project` parameters.

::: moniker-end

## View and track work items

You can view work items created by you or your team. The **Work items** page offers several personalized pivots and interactive filter functions to streamline listing work items. 

::: moniker range="azure-devops"

You can also view work items from Visual Studio, Azure DevOps CLI, or the REST API.

::: moniker-end

For more information, see [View and add work items](../work-items/view-add-work-items.md).

## Link Work Items

Add links to work items to show relationships between them and other work items or objects. In an Agile scenario, you would typically link features to epics, user stories to features and tasks to user stories in parent-child relationships. There are many other [link types](../../boards/queries/link-type-reference.md) and objects you can link to you work item. For more information, see [Link work items to objects](add-link.md).


::: moniker range="azure-devops"

## Follow a work item

To track the progress of a single work item, select the **Follow** icon 
 :::image type="icon" source="../media/icons/follow-icon.png" border="false":::. This action notifies you when changes are made to the work item.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing Work item form, Follow icon control.](../work-items/media/follow-work/follow-work-item.png) 

You receive notifications when other project members modify the work item, such as when they add to the discussion, change a field value, or add an attachment.

You can specify the types of changes you want to be notified about. When you select the settings icon, :::image type="icon" source="../media/icons/settings-icon.png" border="false"::: you can select:

- **Not Subscribed**: Only receive notifications from this work item when you're @mentioned.
- **Subscribed**: Receive notifications for all changes to this work item.
- **Custom**: Specify notifications for:
  - **State Changed**: When the work item changes state.
  - **Assigned To Changed**: When the work item is assigned to someone else.
  - **Iteration Changed**: When the iteration path changes.

Notifications are sent to your preferred email address, which you can [change from your user profile](../../organizations/notifications/change-email-address.md).

To stop following changes, select the  **Following** icon :::image type="icon" source="../media/icons/following-icon.png" border="false":::.

::: moniker-end


## Manage attachments

You can attach up to 100 files to a work item. Each attachment is limited to 60 MB. You can manage attachments through the web portal by selecting the attachment tab on your work item.

::: moniker range="azure-devops"

:::image type="content" source="media/manage-work-items/attachments-tab-services.png" alt-text="Screenshot showing highlighted Attachments button in work item." :::

Use the Collapse/Expand button to show or hide the attachments.

:::image type="content" source="media/manage-work-items/expand-collapse-attachments.png" alt-text="Screenshot showing highlighted expand or collapse attachments button in work item." :::

To toggle between the list and grid view of attachments, select the **List** or **Grid** icon.

:::image type="content" source="media/manage-work-items/attachments-list-grid-view-buttons-services" alt-text="Screenshot showing list and grid view buttons." :::

Once you add an attachment, you can hover over the work item to access the **more actions** :::image type="icon" source="../media/icons/more-actions.png" border="false":::  menu. The more actions menu allows you to:

- preview the attachment
- edit the comment
- copy the attachment link
- download the attachment
- delete attachments
- permanently delete attachments if you have the correct permissions.

::: moniker-end

::: moniker range="< azure-devops"

:::image type="content" source="media/manage-work-items/attachments-tab-server.png" alt-text="Screenshot of highlighted Attachments button in work item." :::

You can choose a list or grid view of attachments. The grid view provides a thumbnail preview of the attachment.   

:::image type="content" source="media/manage-work-items/attachments-list-grid-view-buttons-server" alt-text="Screenshot showing list and grid view buttons." :::

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

   :::image type="content" source="media/manage-work-items/add-comment-attachment.png" alt-text="Screenshot showing add comment to attachment flow.":::

1. Edit your comment and select **Save**.

::: moniker-end

::: moniker range="< azure-devops"

1. Select or hover over the attachment and select **more actions** :::image type="icon" source="../media/icons/more-actions-horizontal.png" border="false"::: > **Edit comment**.

   :::image type="content" source="media/manage-work-items/add-comment-attachment.png" alt-text="Screenshot showing add comment to attachment flow.":::

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

## Work item tags

Tags are keywords that you define to categorize work items. You can add tags to work items to filter backlogs and queries.

To learn how to manage and use tags, see [Add tags to work items](../queries/add-tags-to-work-items.md).


[!INCLUDE [discussion-tip-azure-devops](../includes/discussion-tip-azure-devops.md)]


## Copy or clone work items

Cloning or copying a DevOps work item can be beneficial for several reasons:

- **Efficiency**: Quickly create a new work item with similar details without manually duplicating all the information.
- **Consistency**: Ensure that the new work item retains the same structure, fields, and values as the original, maintaining consistency across similar tasks.
- **Template Usage**: Use an existing work item as a template for new work items, especially for recurring tasks or standard processes.
- **Bulk Operations**: Easily create multiple similar work items for different team members or iterations.
- **Preserve History**: Keep the history and context of the original work item while creating a new instance for tracking separate progress.

For more information, see [Copy or clone work items](copy-clone-work-items.md).

## Move work items between team

You can move work items from one team to another team within the same project. To move work items, you must have the **Edit work items in this node** permission for the target team.

For more information, see [Move work items from one team to another](../work-items/move-work-items.md).

## Customizing Work Item Templates

Project Work items can be customized to track additional information that is important to your team. You can add custom fields, change the layout of the work item form, and add custom rules to enforce processes. This customization can be done by modifying the process templates used by your project. 

There are two ways to customize work item templates:

1. **Work Item Type**: Customize the work item type used by your project. This customization affects only the work item type. For more information, see [Add and manage work item types](../../organizations/settings/work/customize-process-work-item-type.md).
1. **Work Item Template**: Create custom work item templates used by your team based on existing work items. Custom work item templates allow you to prepopulate values in commonly used fields. For more information, see, [Use work item templates](work-item-template.md).

With the appropriate organization-level permissions, you can create customized inherited *process templates*. All projects that use the customized process template get the customizations made to that process. You can customize which work item types are included in the process template and customize the work item attributes. For more information, see [About process customization and inherited processes](../../organizations/settings/work/inheritance-process-model.md).


## Delete work items

You can delete work items that are no longer needed. Deleted work items are moved to the Recycle Bin where they can be restored or permanently deleted.

For more information, see, [Remove, delete, or restore work items](remove-delete-work-items.md).


## Reporting and Analytics

Analytics views provide a powerful way to visualize and analyze your work items. You can use  create custom reports and dashboards to track progress, identify trends, and make data-driven decisions.

## Best Practices

Work items are an integral part of the development process. You can use work items to track different types of work, such as user stories, product backlog items, tasks, test cases, bugs, and more. There are best practices to help you effectively manage work items for development processes including:

- [Agile](../work-items/guidance/agile-process-workflow.md)
- [Scrum](../work-items/guidance/scrum-process-workflow.md)
- [Capability Maturity Model Integration (CMMI)](../work-items/guidance/cmmi-process-workflow.md)


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