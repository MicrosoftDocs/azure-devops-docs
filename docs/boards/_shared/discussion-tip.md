---
ms.topic: include
---


::: moniker range=">= tfs-2017" 

## Capture comments in the Discussion section 

Use the **Discussion** section to add and review comments made about the work being performed. 

> [!div class="mx-imgBorder"]  
> ![Discussion section within a work item form](/azure/devops/boards/backlogs/_img/discussion-section.png)   

::: moniker-end 

::: moniker range=">= azure-devops-2019"

The rich text editor tool bar displays below the text entry area when you click your cursor within each text box that can be formatted. 

> [!div class="mx-imgBorder"]  
> ![Discussion section, New Rich Text Editor toolbar](/azure/devops/boards/queries/_img/share-plans/discussion-rich-text-editor-toolbar.png)  

### Mention someone, a group, work item, or pull request (![ ](/azure/devops/_img/icons/at-mention.png), ![ ](/azure/devops/_img/icons/work-id.png), or ![pull-request id icon](/azure/devops/_img/icons/pr-id.png))

Choose one of these icons &mdash;![ ](/azure/devops/_img/icons/at-mention.png), ![ ](/azure/devops/_img/icons/work-id.png), or ![pull-request id icon](/azure/devops/_img/icons/pr-id.png)&mdash; to open a menu of recent entries you've made to mention someone, link to a work item, or link to a pull request. Or, you can simply type <strong>@</strong>, <strong>#</strong>, or <strong>!</strong> to open the same menu.   

> [!div class="mx-imgBorder"]  
> ![Discussion section, @mention drop-down menu](/azure/devops/boards/_shared/_img/discussion-at-mention.png)  

::: moniker-end

::: moniker range="azure-devops-2019"  

> [!NOTE]   
> This latest version of the rich text editor requires Azure DevOps Server 2019 Update 1 or later version. 

::: moniker-end

::: moniker range=">= azure-devops-2019"  

Type a name, or enter a number and the menu list will filter to match your entry. Choose the entry you want to add. You can bring a group into the discussion by typing **@** and the group name, such as a team or security group. 

### Edit or delete a comment 

If you need to edit or delete any of your discussion comments, choose ![ ](/azure/devops/_img/icons/edit.png) <strong>Edit</strong> or choose the ![ ](/azure/devops/_img/icons/actions-icon.png) actions icon and then choose <strong>Delete</strong>. 

> [!div class="mx-imgBorder"]  
> ![Discussion section, Edit, Delete actions](/azure/devops/boards/_shared/_img/discussion-edit-delete.png)  

::: moniker-end

::: moniker range="azure-devops-2019"  

> [!NOTE]   
> The edit/delete feature requires Azure DevOps Server 2019 Update 1 or later version. 

::: moniker-end

::: moniker range=">= azure-devops-2019"  

After updating the comment, choose <strong>Update</strong>. To delete the comment, you'll need to confirm that you want to delete it. 

A full audit trail of all  edited and deleted comments is maintained in the <strong>History</strong> tab on the work item form. 

::: moniker-end  

::: moniker range=">= tfs-2017 <= tfs-2018" 

Use the [<strong>@mention</strong> control](/azure/devops/notifications/at-mentions) to notify another team member about the discussion. Simply type **@** and their name. To reference a work item, use the [**#ID** control](/azure/devops/notifications/add-links-to-work-items). Type **#** and a list of work items that you've recently referenced will appear from which you can select.  

To reference a work item, use the **#ID** control. Type **#** and a list of work items that you've recently referenced will appear from which you can select.  

> [!IMPORTANT]  
> For on-premises Azure DevOps Server or TFS, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) in order for team members to receive notifications.

Note that you can't edit or delete comments once they've been entered. 

::: moniker-end 






