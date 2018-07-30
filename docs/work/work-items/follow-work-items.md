---
title: Follow work or pull requests
titleSuffix: VSTS & TFS
description: Track updates made to a work item or pull request by following it when using Visual Studio Team Services or Team Foundation Server 
ms.technology: devops-collab
ms.prod: devops
ms.assetid: 77CAEE8E-BF1A-47DA-9818-A0C52BAC813C
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 03/01/2018
---

# Follow a work item or pull request  


[!INCLUDE [temp](../../work/_shared/dev15-and-ts-version-header.md)] 

::: moniker range=">= tfs-2013 <= tfs-2015"

> [!NOTE]   
> The Follow a work item feature is available from TFS 2017 and later versions. The Follow a pull request feature is available from TFS 2017.1 and later versions. To update your on-premises TFS, visit the [Visual Studio downloads page for Team Foundation Server](https://visualstudio.microsoft.com/downloads/#team-foundation-server-2017). 

::: moniker-end

::: moniker range=">= tfs-2017"
<a id="follow"></a>  

To get notified of changes made to a work item or a pull request, you can elect to follow them. 

This topic shows you how to:

>[!div class="checklist"]  
> * Follow a work item
> * Follow a pull request 
> * Manage work items that you're following

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
[You must configure an SMTP sever](/tfs/server/admin/setup-customize-alerts) in order for team members to receive notifications.   
::: moniker-end

::: moniker range="tfs-2017"
> [!NOTE]   
> The Follow a pull request feature is available from TFS 2017.1 and later versions. To update your on-premises TFS, visit the [Visual Studio downloads page for Team Foundation Server](https://visualstudio.microsoft.com/downloads/#team-foundation-server-2017). 
::: moniker-end

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"

## Follow a work item

When you want to track the progress of a single work item, click the ![Follow icon](../_img/icons/follow-icon.png) icon. This signals the system to notify you when changes are made to the work item.  

<img src="_img/follow-work-item.png" alt="VSTS Work item form, Follow icon control" style="border: 1px solid #C3C3C3;" /> 

You'll only receive notifications when other members of your team modifies the work item, such as adding to the discussion, changing a field value, or adding an attachment. 

Notifications are sent to your preferred email address, which [you can change from your user profile](../../notifications/change-email-address.md)

To stop following changes, click the ![Following icon](../_img/icons/following-icon.png) icon.
 
<a id="follow-pr"></a>
## Follow a pull request 

To track the progress of a single pull request, click the ![Follow icon](../_img/icons/follow-icon.png) option from the context menu. This signals the system to notify you when changes are made to the PR.  

<img src="_img/follow-pull-request.png" alt="Pull Request, context menu, Follow icon option" style="border: 1px solid #C3C3C3;" />  

You'll only receive notifications when other members of your team modifies the PR, such as adding to the discussion or adding an attachment. 

Notifications are sent to your preferred email address, which [you can change from your user profile](../../notifications/change-email-address.md).  

To stop following changes, open the PR context menu and click the ![Following icon](../_img/icons/following-icon.png) icon. 

## Manage work items that you're following  

You can review and manage all the work items you've selected to follow from the Followed work items page. You access this page from the **Work>Queries** page. 

<img src="_img/follows-followed-work-items.png" alt="Followed work items, Follow icon control" style="border: 1px solid #C3C3C3;" />  

From this view, you can view all items you're following across all projects within the account. Also, you can perform similar actions supported with a query results view, such as:
- Refresh the view
- Add or remove visible columns
- Sort the order of specific columns
- Filter results by text or tags 
- Set work item pane
- Enter full screen mode. 

However, this view isn't based on a query so you can't modify the parameters of the view. 

You can also view and manage work that you're following from your home pages. To learn more, see [Work across projects](../../project/navigation/work-across-projects.md). 

::: moniker range="vsts"
> [!div class="mx-imgBorder"]  
> ![Account home, Work, Following page](../../user-guide/_img/organization-home-work-following.png)  
::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
![Account home, Work, Assigned to me page](../../user-guide/_img/org-hub-tfs/organization-home-work-followed.png) 
::: moniker-end
  Â    

## Related articles  

- [Manage personal notifications](../../notifications/manage-personal-notifications.md)  
- [Set team notifications](../../notifications/manage-team-notifications.md)  
- [View and update work items via the mobile work item form](../../project/navigation/mobile-work.md)  


###Q: Can I add someone else to follow a work item or PR?

**A:** You can't add another team member to follow a work item or pull request at this time. You can subscribe them to get notified based on select criteria, such as when a work item is create or modified, or a pull request is created. For details, see [Manage team notifications](../../notifications/manage-team-notifications.md).	

::: moniker-end