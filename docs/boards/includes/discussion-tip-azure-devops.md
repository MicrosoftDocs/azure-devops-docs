---
ms.service: azure-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 07/06/2026
---

## Capture comments in the Discussion section 

Use the **Discussion** section to collaborate on work items by adding and reviewing comments.

:::image type="content" source="../backlogs/media/discussion-section.png" alt-text="Screenshot of Discussion section within a work item form.":::

When you place your cursor in a text box that supports formatting, the rich-text editor toolbar appears.

:::image type="content" source="../queries/media/share-plans/discussion-rich-text-editor-toolbar.png" alt-text="Screenshot of Discussion section, Rich Text Editor toolbar.":::  

> [!NOTE]  
> A Discussion work item field doesn't exist. To query work items with comments from the Discussion area, filter on the [History field](../queries/history-and-auditing.md). The full content of the text entered in the Discussion text box is added to the History field.

### Mention someone, a group, work item, or pull request

Use one of the following icons to open recent entries for people, work items, or pull requests:

- :::image type="icon" source="../../media/icons/at-mention.png":::
- :::image type="icon" source="../../media/icons/work-id.png":::
- :::image type="icon" source="../../media/icons/pr-id.png":::

You can open the same menu with keyboard shortcuts: at-mention **@**, hashtag **#**, and exclamation point **!**.

:::image type="content" source="../media/discussion-at-mention.png" alt-text="Screenshot of Discussion section, at-mention drop-down menu people-picker.":::

Enter a name or number to filter the list, and then select the item you want to add. To mention a group, enter **@** followed by the group name, such as a team or security group.

### Edit or delete a comment

To update or remove one of your comments, select **Edit** :::image type="icon" source="../../media/icons/edit.png"::: or select **More actions** (:::image type="icon" source="../../media/icons/actions-icon.png":::) and then select **Delete**:

:::image type="content" source="../media/discussion-edit-delete.png" alt-text="Screenshot of Discussion section where you can choose Edit or Delete actions.":::

After you change a comment, select **Update**. To remove a comment, confirm deletion. The **History** tab maintains an audit trail of all edited and deleted comments.

::: moniker range="< azure-devops"

> [!IMPORTANT]  
> For on-premises Azure DevOps Server, configure an SMTP server so team members can receive notifications.

::: moniker-end

::: moniker range="<=azure-devops"

### Add a reaction to a comment

Add one or more reactions to a comment by selecting an emoji on the comment. To remove your reaction, select the same reaction again. The following image shows an example of adding and viewing reactions on a comment.

:::image type="content" source="../media/discussion-comments-reactions.png" alt-text="Screenshot of Discussion section, add a reaction to a comment.":::  

::: moniker-end

::: moniker range=">= azure-devops-2022"

### Save a comment without saving the work item

[!INCLUDE [feature-added-2022-1](../../includes/feature-added-2022-1.md)]

If you only have permissions to add to the **Discussion** of a work item, then you can do so by saving comments. This permission is controlled by Area Path nodes and the **Edit work item comments in this node** permission. For more information, see [Set work tracking permissions - Create child nodes, modify work items under an area or iteration path](../../organizations/security/set-permissions-access-work-tracking.md#set-permissions-area-path).

When you save comments, you don't need to save the work item.  

:::image type="content" source="../work-items/media/view-add/save-comments-discussion-control.png" alt-text="Screenshot of Discussion section, save comment.":::  

> [!NOTE]
> When you save changes made to the **Discussion** control, only the comment is saved. No [work item rules](../../organizations/settings/work/rule-reference.md) defined for the work item type are executed.

::: moniker-end
