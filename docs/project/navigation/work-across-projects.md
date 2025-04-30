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
ms.date: 01/27/2025
--- 


# Work across projects

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

When you work on several projects, you can use specific pages to support your cross-project work. These pages provide quick access and filter functions to help you manage your tasks within a single project or across multiple projects.

For more information, see [Switch project, repository, or team](go-to-project-repo.md) or [Work across projects FAQs](../work-across-projects-faqs.yml).

For example, you can quickly access and navigate to the following artifacts defined across projects:

- **Projects**: View all projects defined for an organization in Azure DevOps.
- **Work items**: Access work items assigned to you.
- **Pull requests**: See pull requests you initiated or that are relevant to you across all team projects you work in.
- **Favorites**: Access artifacts—such as projects, teams, repositories, shared queries, and more—that you marked as favorite.

## Prerequisites 
 
[!INCLUDE [prerequisites-contributor-only](../../includes/prerequisites-contributor-only.md)]
 
::: moniker range="azure-devops"  
> [!NOTE]  
> Users added to the **Project-Scoped Users** group can only access those projects they're explicitly added to. For more information, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 
::: moniker-end  

## View and open work items

To view work items assigned to you across projects, choose the :::image type="icon" source="../../media/icons/inbox.png" border="false"::: inbox icon, and then choosing **Work Items**. 

> [!div class="mx-imgBorder"]  
> ![Screenshot show View of work assigned to you across projects.](media/projects-page/view-work-across-projects.png) 

To view work items assigned to you for a specific project, [open **Boards>Work items>Assigned to me**](../../boards/work-items/view-add-work-items.md). 

### Work you're following

Choose **Following** to open the page that lists all the work items [you marked to follow](../../boards/work-items/follow-work-items.md). To stop following an item and remove it from your list, choose the ![followed icon](../../media/icons/icon-followed.png) following icon.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Inbox > Work items pane > Following.](media/projects-page/account-home-work-following.png)  
::: moniker-end

### My activity

Choose **My activity** to open the page that lists all work items that you recently viewed or updated.  

> [!div class="mx-imgBorder"]  
> ![Screenshot of Inbox > Work items pane > My activity.](media/projects-page/account-work-my-activity.png) 

::: moniker-end 

### Filter the list of work items

Similar to the Favorites page, you can filter the work pages by typing a keyword in the *Filter your work items...* box. The list filters based on keyword matches to the work item ID, title, state, or team project name.

## View and open pull requests

To view pull requests you created  or that are assigned to you across projects, choose the :::image type="icon" source="../../media/icons/inbox.png" border="false"::: inbox icon, and then choosing **Pull requests**. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of pull requests assigned to you across projects.](media/projects-page/view-pull-requests-vert.png)

## View and open favorites 

You can view favorites you set across projects. For more information about working with favorites, see [Set personal or team favorites](set-favorites.md).

Choose the :::image type="icon" source="../../media/icons/inbox.png" border="false"::: inbox icon, and then choosing **Favorites**. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of items you've favorited across projects.](media/favorites/open-favorites-page-vnav.png) 

## Related articles

- [Work across projects FAQs](../work-across-projects-faqs.yml)
- [Manage or enable features](preview-features.md)  
- [Connect to team projects](../../organizations/projects/connect-to-projects.md)  
