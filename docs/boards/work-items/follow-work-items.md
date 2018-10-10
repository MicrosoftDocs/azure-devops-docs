---
title: Follow work or pull requests
titleSuffix: Azure Boards and TFS
description: Track updates made to a work item or pull request by following it when using Azure Boards or Team Foundation Server 
ms.technology: devops-collab
ms.prod: devops
ms.assetid: 77CAEE8E-BF1A-47DA-9818-A0C52BAC813C
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2017'
ms.date: 09/19/2018
---

# Follow a work item or pull request  


[!INCLUDE [temp](../_shared/dev15-and-ts-version-header.md)] 

::: moniker range="tfs-2017"

> [!NOTE]   
> The **Follow a work item** feature is available from TFS 2017 and later versions. The **Follow a pull request** feature is available from TFS 2017.1 and later versions. To update your on-premises TFS, visit the [Visual Studio downloads page for Team Foundation Server](https://visualstudio.microsoft.com/downloads/#team-foundation-server-2017). 

::: moniker-end

<a id="follow"></a>  

To get notified of changes made to a work item or a pull request, you can elect to follow them. 

This topic shows you how to:

>[!div class="checklist"]  
> * Follow a work item
> * Follow a pull request 
> * Manage work items that you're following


::: moniker range=">= tfs-2017 <= tfs-2018"
[You must configure an SMTP server](/tfs/server/admin/setup-customize-alerts) in order for team members to receive notifications.   
::: moniker-end  

## Follow a work item

When you want to track the progress of a single work item, choose the ![ ](../_img/icons/follow-icon.png) follow icon. This signals the system to notify you when changes are made to the work item.  

<img src="_img/follow-work-item.png" alt="Work item form, Follow icon control" style="border: 1px solid #C3C3C3;" /> 

You'll only receive notifications when other members of your team modifies the work item, such as adding to the discussion, changing a field value, or adding an attachment. 

Notifications are sent to your preferred email address, which [you can change from your user profile](../../notifications/change-email-address.md)

To stop following changes, choose the ![ ](../_img/icons/following-icon.png) following icon.
 
<a id="follow-pr"></a>
## Follow a pull request 

To track the progress of a single pull request, choose the ![ ](../_img/icons/actions-icon.png) actions icon for the pull request, and select the ![ ](../_img/icons/follow-icon.png) **Follow** option. This signals the system to notify you when changes are made to the PR.  

<img src="_img/follow-pull-request.png" alt="Pull Request, context menu, Follow icon option" style="border: 1px solid #C3C3C3;" />  

You'll only receive notifications when other members of your team modifies the PR, such as adding to the discussion or adding an attachment. 

Notifications are sent to your preferred email address, which [you can change from your user profile](../../notifications/change-email-address.md).  

To stop following changes, open the PR context menu and choose the ![ ](../_img/icons/following-icon.png) Following icon. 

## Manage work items that you're following  

You can review and manage all the work items you've selected to follow.

[!INCLUDE [temp](../../_shared/new-navigation.md)]  

# [New navigation](#tab/new-nav)  

::: moniker range="vsts"    

Open **Boards>Queries**, choose **All**, and under **My Queries**, choose **Followed work items**.   

> [!div class="mx-imgBorder"]  
> ![Boards>Queries>All>Followed work items, new nav](_img/follow-work/following-work-items-vert.png)   

From this view, you can view all items you're following across all projects. Also, you can perform similar actions supported with a query results view, such as:
- Refresh the view
- Add or remove visible columns
- Sort the order of specific columns
- Filter results by text or tags 
- Set work item pane
- Enter full screen mode. 


You can also view and manage work that you're following from **Boards>Work Items** and pivot to **Following**. 

> [!div class="mx-imgBorder"]  
> ![Boards>Queries>All>Followed work items, new nav](_img/follow-work/open-work-items-vert.png)   


::: moniker-end    

::: moniker range=">= tfs-2017 <= tfs-2018"    
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end    


# [Previous navigation](#tab/previous-nav)

Open **Work>Queries** and choose **Followed work items**.  

<img src="_img/follows-followed-work-items.png" alt="Followed work items, Follow icon control" style="border: 1px solid #C3C3C3;" />  

From this view, you can view all items you're following across all projects. Also, you can perform similar actions supported with a query results view, such as:
- Refresh the view
- Add or remove visible columns
- Sort the order of specific columns
- Filter results by text or tags 
- Set work item pane
- Enter full screen mode. 

::: moniker range="tfs-2018"  

For TFS 2018.2 and later versions, you can view work you're following from the **Work>Work Items** page. 
![Projects page, Work, Assigned to me page](../../user-guide/_img/org-hub-tfs/organization-home-work-followed.png) 

::: moniker-end    

::: moniker range=">= tfs-2017 <= tfs-2018"   

You can also view and manage work that you're following from your Project pages. To learn more, see [Work across projects](../../project/navigation/work-across-projects.md). 

::: moniker-end 
--- 


## Related articles  

- [Manage personal notifications](../../notifications/howto-manage-personal-notifications.md)  
- [Set team notifications](../../notifications/howto-manage-team-notifications.md)  
- [View and update work items via the mobile work item form](../../project/navigation/mobile-work.md)  


###Q: Can I add someone else to follow a work item or PR?

**A:** You can't add another team member to follow a work item or pull request at this time. You can subscribe them to get notified based on select criteria, such as when a work item is create or modified, or a pull request is created. For details, see [Manage team notifications](../../notifications/howto-manage-team-notifications.md).	

