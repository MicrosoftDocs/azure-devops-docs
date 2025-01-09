---
title: Work across projects 
titleSuffix: Azure DevOps
description: How to access work items, pull requests, team projects, and more using your account home page in Azure DevOps
ms.custom: navigation, cross-project
ms.subservice: azure-devops-projects
ms.assetid: B4406575-4D4D-42E3-88FD-93830546B67F
ms.topic: how-to
ms.author: chcomley   
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 01/08/2024
--- 


# Work across projects

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

When you work on several projects, you can use select pages to support your cross-project work. These pages provide quick access and filter functions to support your work within a single project or work you're doing across several projects.

For more information, see [Switch project, repository, or team](go-to-project-repo.md) or [Work across projects FAQs](../work-across-projects-faqs.yml). 

For example, you can quickly access and navigate to the following artifacts defined across projects.  

::: moniker range=">= azure-devops-2019"
- **Projects**: Projects defined for an organization in Azure DevOps
- **Work items**: Work items assigned to you
- **Pull requests**: Pull requests you initiated or that are relevant to you across all team projects you work in
- **Favorites**: Artifacts&mdash;such as projects, teams, repositories, shared queries, and more—that you favorited
::: moniker-end  



## Prerequisites 
 
* Be added to a project as a member of the **Contributors** or administrator security group. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
 
::: moniker range="azure-devops"  
> [!NOTE]  
> Users added to the **Project-Scoped Users** group can only access those projects they've been explicitly added to. For more information, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 
  ::: moniker-end  

## View and open work items

::: moniker range=">= azure-devops-2019"

To view work items assigned to you across projects, choose the :::image type="icon" source="../../media/icons/inbox.png" border="false"::: inbox icon, and then choosing **Work Items**. 

> [!div class="mx-imgBorder"]  
> ![View work assigned to you across projects](media/projects-page/view-work-across-projects.png) 

To view work items assigned to you for a specific project, [open **Boards>Work items>Assigned to me**](../../boards/work-items/view-add-work-items.md). 


::: moniker-end





### Work you're following

Choose **Following** to open the page that lists all the work items [you marked to follow](../../boards/work-items/follow-work-items.md). To stop following an item and remove it from your list, choose the ![followed icon](../../media/icons/icon-followed.png) following icon.

::: moniker range=">= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Screenshot of Inbox > Work items pane > Following.](media/projects-page/account-home-work-following.png)  
::: moniker-end




::: moniker range=">= azure-devops-2019"
### My activity

Choose **My activity** to open the page that lists all work items that you recently viewed or updated.  

> [!div class="mx-imgBorder"]  
> ![Screenshot of Inbox > Work items pane > My activity.](media/projects-page/account-work-my-activity.png) 

::: moniker-end 

### Filter the list of work items

Similar to the Favorites page, you can filter the work pages by typing a keyword in the *Filter your work items...* box. The list filters based on keyword matches to the work item ID, title, state, or team project name.

## View and open pull requests

::: moniker range=">= azure-devops-2019"

To view pull requests you created  or that are assigned to you across projects, choose the :::image type="icon" source="../../media/icons/inbox.png" border="false"::: inbox icon, and then choosing **Pull requests**. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of pull requests assigned to you across projects.](media/projects-page/view-pull-requests-vert.png) 

::: moniker-end  




## View and open favorites 

You can view favorites you set across projects. For more information about working with favorites, see [Set personal or team favorites](set-favorites.md).

::: moniker range=">= azure-devops-2019" 

Choose the :::image type="icon" source="../../media/icons/inbox.png" border="false"::: inbox icon, and then choosing **Favorites**. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of items you've favorited across projects.](media/favorites/open-favorites-page-vnav.png) 

::: moniker-end  





## Related articles

- [Work across projects FAQs](../work-across-projects-faqs.yml)
- [Manage or enable features](preview-features.md)  
- [Connect to team projects](../../organizations/projects/connect-to-projects.md)  
