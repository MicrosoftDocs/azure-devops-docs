---
ms.technology: devops-agile
ms.prod: devops
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 07/09/2020
---


## Capture comments in the Discussion section 

Use the **Discussion** section to add and review comments made about the work being performed. 

> [!div class="mx-imgBorder"]  
> ![Discussion section within a work item form](/azure/devops/boards/backlogs/media/discussion-section.png)   

The rich text editor tool bar displays below the text entry area when you click your cursor within each text box that can be formatted. 

> [!div class="mx-imgBorder"]  
> ![Discussion section, New Rich Text Editor toolbar](/azure/devops/boards/queries/media/share-plans/discussion-rich-text-editor-toolbar.png)  


> [!NOTE]  
> There is no Discussion work item field. To query work items with comments entered in the Discussion area, you filter on the [**History** field](/azure/devops/boards/queries/history-and-auditing). The full content of the text entered into the Discussion text box is added to the History field. 

### Mention someone, a group, work item, or pull request (:::image type="icon" source="/azure/devops/media/icons/at-mention.png" border="false":::, :::image type="icon" source="/azure/devops/media/icons/work-id.png" border="false":::, or ![pull-request id icon](/azure/devops/media/icons/pr-id.png))

Choose one of these icons &mdash;:::image type="icon" source="/azure/devops/media/icons/at-mention.png" border="false":::, :::image type="icon" source="/azure/devops/media/icons/work-id.png" border="false":::, or ![pull-request id icon](/azure/devops/media/icons/pr-id.png)&mdash; to open a menu of recent entries you've made to mention someone, link to a work item, or link to a pull request. Or, you can simply type <strong>@</strong>, <strong>#</strong>, or <strong>!</strong> to open the same menu.   

> [!div class="mx-imgBorder"]  
> ![Discussion section, @mention drop-down menu](/azure/devops/boards/media/discussion-at-mention.png)


::: moniker range="azure-devops-2019"  

> [!NOTE]   
> This latest version of the rich text editor requires Azure DevOps Server 2019 Update 1 or later version. 

::: moniker-end

Type a name, or enter a number and the menu list will filter to match your entry. Choose the entry you want to add. You can bring a group into the discussion by typing **@** and the group name, such as a team or security group. 

### Edit or delete a comment 

If you need to edit or delete any of your discussion comments, choose :::image type="icon" source="/azure/devops/media/icons/edit.png" border="false"::: <strong>Edit</strong> or choose the :::image type="icon" source="/azure/devops/media/icons/actions-icon.png" border="false"::: actions icon and then choose <strong>Delete</strong>. 

> [!div class="mx-imgBorder"]  
> ![Discussion section, Edit, Delete actions](/azure/devops/boards/media/discussion-edit-delete.png)  

::: moniker range="azure-devops-2019"  

> [!NOTE]   
> The edit/delete feature requires Azure DevOps Server 2019 Update 1 or later version. 

::: moniker-end

After updating the comment, choose **Update**. To delete the comment, you'll need to confirm that you want to delete it. 

A full audit trail of all  edited and deleted comments is maintained in the <strong>History</strong> tab on the work item form. 



::: moniker range=">= azure-devops-2020"

### Add a reaction to a comment 

You can add one or more reactions to any comment. Choose a smiley icon at the upper-right corner of any comment or choose from the icons at the bottom of a comment next to any existing reactions. To remove your reaction, click the reaction on the bottom of your comment. The following shows an example of the experience of adding a reaction, as well as the display of reactions on a comment.

> [!div class="mx-imgBorder"]  
> ![Add reactions to a comment](/azure/devops/release-notes/2019/media/156_09.png)  

::: moniker-end