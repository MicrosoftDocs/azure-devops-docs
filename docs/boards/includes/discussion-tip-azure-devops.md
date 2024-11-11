---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 10/08/2024
---

## Capture comments in the Discussion section 

Use the **Discussion** section to add and review comments made about the work being performed.

:::image type="content" source="../backlogs/media/discussion-section.png" alt-text="Screenshot of Discussion section within a work item form.":::

The rich text editor toolbar appears under the text entry area when you place your cursor in any text box that supports text formatting.

:::image type="content" source="../queries/media/share-plans/discussion-rich-text-editor-toolbar.png" alt-text="Screenshot of Discussion section, New Rich Text Editor toolbar.":::  

> [!NOTE]  
> A Discussion work item field doesn't exist. To query work items with comments from the Discussion area, filter on the [History field](../queries/history-and-auditing.md). The full content of the text entered in the Discussion text box is added to the History field.

### Mention someone, a group, work item, or pull request

Select one of the following icons to open a menu of recent entries where you mentioned someone, linked to a work item, or linked to a pull request. Alternatively, you can open the same menu by entering `@`, `#`, or `!`.

- :::image type="icon" source="../../media/icons/at-mention.png" border="false":::
- :::image type="icon" source="../../media/icons/work-id.png" border="false":::
- :::image type="icon" source="../../media/icons/pr-id.png" border="false":::

:::image type="content" source="../media/discussion-at-mention.png" alt-text="Screenshot of Discussion section, at-mention drop-down menu people-picker.":::

Enter a name or number to filter the menu list to match your entry. Select the entry you want to add. To bring a group into the discussion, enter `@` followed by the group name, such as a team or security group.

### Edit or delete a comment

To edit or delete any of your discussion comments, choose :::image type="icon" source="../../media/icons/edit.png" border="false"::: **Edit** or choose the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and then choose **Delete**.

:::image type="content" source="../media/discussion-edit-delete.png" alt-text="Screenshot of Discussion section where you can choose Edit or Delete actions.":::

::: moniker range="azure-devops-2019"  
> [!NOTE]
> Editing and deleting comments requires Azure DevOps Server 2019 Update 1 or later version.
::: moniker-end

After you update the comment, select **Update**. To delete the comment, confirm that you want to delete it. The **History** tab on the work item form maintains a full audit trail of all edited and deleted comments.

::: moniker range="< azure-devops"

> [!IMPORTANT]  
> For on-premises Azure DevOps Server, [configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) for team members to receive notifications.

::: moniker-end

::: moniker range=">= azure-devops-2020"

### Add a reaction to a comment

Add one or more reactions to a comment by choosing a smiley icon at the upper-right corner of any comment. Choose from the icons at the bottom of a comment next to any existing reactions. To remove your reaction, choose the reaction on the bottom of your comment. The following image shows an example of the experience of adding a reaction, and the display of reactions on a comment.

:::image type="content" source="../media/discussion-comments-reactions.png" alt-text="Screenshot of Discussion section, add a reaction to a comment.":::  

::: moniker-end

::: moniker range=">= azure-devops-2022"

### Save a comment without saving the work item

[!INCLUDE [feature-added-2022-1](../../includes/feature-added-2022-1.md)]

If you only have permissions to add to the **Discussion** of a work item, then you can do so by saving comments. This permission is controlled by Area Path nodes and the **Edit work item comments in this node** permission. For more information, see [Set work tracking permissions, Create child nodes, modify work items under an area or iteration path](../../organizations/security/set-permissions-access-work-tracking.md#set-permissions-area-path).

When you save the comments, you don't need to save the work item.  

:::image type="content" source="../work-items/media/view-add/save-comments-discussion-control.png" alt-text="Screenshot of Discussion section, save comment.":::  

> [!NOTE]
> When you save changes made to the **Discussion** control, only the comment gets saved. No [work item rules](../../organizations/settings/work/rule-reference.md) defined for the work item type are executed.

::: moniker-end
