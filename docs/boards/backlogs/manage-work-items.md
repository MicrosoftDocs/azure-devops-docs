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
ms.topic: concept-article
ms.date: 11/11/2024
---

# Manage Work Items in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2020.md)] 
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)] 

Work items help you plan and manage your project by tracking different types of work, such as user stories, product backlog items, tasks, test cases, or bugs. Use work items to describe the work to be done, assign tasks, track status, and coordinate efforts within your team.

This article describes the features that you can use to manage work items in Azure DevOps.


[!INCLUDE [temp](../includes/prerequisites-work-items.md)] 

## Update work items

You can update a work item to change various elements, such as the title, description, state, or assigned team member.

### [Browser](#tab/browser)

Once you select the work item you want to update, you can make changes to the work item form.

# [Visual Studio 2019](#tab/visual-studio)

To update a work item. From the Team Explorer, select a work item. The work item form opens in the web portal where you can make changes to the work item form and save your changes.

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

---

## View and track work items

You can view work items created by you or your team. The **Work items** page offers several personalized pivots and interactive filter functions to streamline listing work items. 

::: moniker range="azure-devops"

You can also view work items from Visual Studio, Azure DevOps CLI, or the REST API.

::: moniker-end

For more information, see [View and add work items](../work-items/view-add-work-items.md).

## Link Work Items

Add links to work items to show relationships between them and other work items or objects. In an Agile scenario, you would typically link features to epics, user stories to features and tasks to user stories in parent-child relationships. There are many other [link types](../../boards/queries/link-type-reference.md) and objects you can link to your work items. For more information, see [Link work items to objects](add-link.md).


::: moniker range="azure-devops"

## Follow a work item

To track the progress of a single work item, select the **Follow** icon 
 :::image type="icon" source="../media/icons/follow-icon.png" border="false":::. This action sends you email alerts when changes are made to the work item.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing Work item form, Follow icon control.](../work-items/media/follow-work/follow-work-item.png) 

You receive notifications when other project members modify the work item, such as adding to the discussion, change a field value, or add an attachment.

You can specify the types of changes you want to be notified about. When you select the settings icon, :::image type="icon" source="../media/icons/settings-icon.png" border="false"::: you can select:

- **Not Subscribed**: Only receive notifications from this work item when you're @mentioned.
- **Subscribed**: Receive notifications for all changes to this work item.
- **Custom**: Specify notifications for:
  - **State Changed**: When the work item changes state
  - **Assigned To Changed**: When the work item is assigned to someone else
  - **Iteration Changed**: When the iteration path changes

Notifications are sent to your preferred email address, which you can [change from your user profile](../../organizations/notifications/change-email-address.md).

To stop following changes, select the  **Following** icon :::image type="icon" source="../media/icons/following-icon.png" border="false":::.

::: moniker-end

## Attachments

You can attach files to work items to provide more context or information. You can attach up to 100 files to a work item. Each attachment is limited to 60 MB. You can manage attachments through the web portal by selecting the attachment tab on your work item.

For more information, see [Manage attachments to work items](../work-items/manage-attachments.md).

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

With the appropriate organization-level permissions, you can create customized inherited *process templates*. All projects that use the customized process template get the customizations made to that process. You can customize which work item types are included in the process template and customize the work item template form. For more information, see [About process customization and inherited processes](../../organizations/settings/work/inheritance-process-model.md) and [Customize a process template](../../reference/process-templates/customize-process.md).


## Delete work items

You can delete work items that are no longer needed. Deleted work items are moved to the Recycle Bin where they can be restored or permanently deleted.

For more information, see, [Remove, delete, or restore work items](remove-delete-work-items.md).


## Reporting and Analytics

Analytics views provide a powerful way to visualize and analyze your work items. You can use  create custom reports and dashboards to track progress, identify trends, and make data-driven decisions.

For more information, see [What is Analytics?](../../report/powerbi/what-is-analytics.md).

## Best Practices

There are best practices to help you effectively manage work items for development processes including:

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