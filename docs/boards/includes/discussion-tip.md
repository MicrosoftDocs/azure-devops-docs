---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 06/07/2023
---

<a id="discussion" />
<a id="capture-comments-in-the-discussion-section" />

## Capture comments in the Discussion section 

Use the **Discussion** section to add and review comments made about the work being performed. 

:::image type="content" source="../backlogs/media/discussion-section.png" alt-text="Screenshot showing the Discussion section within a work item form."::: 

::: moniker range=">= azure-devops-2019"

The rich text editor tool bar displays below the text entry area. It appears when you select each text box that supports text formatting. 

:::image type="content" source="../queries/media/share-plans/discussion-rich-text-editor-toolbar.png" alt-text="Screenshot of Discussion section, Rich Text Editor toolbar.":::

> [!NOTE]  
> There isn't a **Discussion** work item field. To query work items with comments entered in the Discussion area, you filter on the [**History** field](../queries/history-and-auditing.md). The full content of the text entered into the Discussion text box is added to the History field. 

### Mention someone, a group, work item, or pull request 

To open a menu of recent entries you've made to mention someone, link to a work item, or link to a pull request, select :::image type="icon" source="../../media/icons/work-id.png" border="false" alt-text="pound sign"::: or :::image type="icon" source="../../media/icons/pr-id.png" border="false" alt-text="P R":::, or enter `@`, `#`, or `!`.

:::image type="content" source="../media/discussion-at-mention.png" alt-text="Screenshot of Discussion section, at-mention drop-down menu.":::

::: moniker-end

::: moniker range=">= azure-devops-2019"

Enter a name or number and the menu list filters to match your entry. Choose the entry you want to add. To bring a group into the discussion, enter `@` and the group name, such as a team or security group. 
### Edit or delete a comment 

To edit or delete any of your discussion comments, choose :::image type="icon" source="../../media/icons/edit.png" border="false"::: **Edit** or choose the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon, and then choose **Delete**. 

:::image type="content" source="../media/discussion-edit-delete.png" alt-text="Screenshot of Discussion section, Edit, Delete actions.":::

::: moniker-end

::: moniker range="azure-devops-2019"  
> [!NOTE]   
> Editing and deleting comments requires Azure DevOps Server 2019 Update 1 or later version. 
::: moniker-end

::: moniker range=">= azure-devops-2019"  

After updating the comment, choose **Update**. To delete the comment, confirm that you want to delete it.

A full audit trail of all  edited and deleted comments is maintained in the **History** tab on the work item form. 

::: moniker-end  

::: moniker range="tfs-2018" 

Use the [**@mention** control](../../organizations/notifications/at-mentions.md) to notify another team member about the discussion. Enter `@` and their name. To reference a work item, use the [**#ID** control](../../organizations/notifications/add-links-to-work-items.md). Enter `#` and a list of work items that you've recently referenced appears from which you can select.  

To reference a work item, use the **#ID** control. Enter `#` and a list of work items that you've recently referenced appears from which you can select.  

You can't edit or delete comments once you've entered them. 

::: moniker-end 

::: moniker range="< azure-devops" 

> [!IMPORTANT]  
> For on-premises Azure DevOps Server, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) for team members to receive notifications.

::: moniker-end 

::: moniker range=">= azure-devops-2020"

### Add a reaction to a comment 

Add one or more reactions to a comment by choosing a smiley icon at the upper-right corner of any comment. Or, choose from the icons at the bottom of a comment next to any existing reactions. To remove your reaction, choose the reaction on the bottom of your comment. The following image shows an example of the experience of adding a reaction and the display of reactions on a comment.

:::image type="content" source="../media/discussion-comments-reactions.png" alt-text="Screenshot of Discussion control, Add reactions to a comment."::: 

::: moniker-end

::: moniker range="azure-devops"

### Save a comment without saving the work item

If you only have permissions to add to the **Discussion** of a work item, then you can do so by saving comments. This permission is controlled by Area Path nodes and the **Edit work item comments in this node** permission. For more information, see [Set work tracking permissions, Create child nodes, modify work items under an area or iteration path](../../organizations/security/set-permissions-access-work-tracking.md#set-permissions-area-path).

Once you save the comments, you don't need to save the work item.  

:::image type="content" source="../work-items/media/view-add/save-comments-discussion-control.png" alt-text="Screenshot of Discussion section, save comment.":::

> [!NOTE] 
> When you save changes made to the **Discussion** control, only the comment is saved. No [work item rules](../../organizations/settings/work/rule-reference.md) defined for the work item type execute.

::: moniker-end
