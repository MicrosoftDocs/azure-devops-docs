---
title: Use #ID to link work items in discussions & pull requests 
titleSuffix: VSTS & TFS
description: Link to work items in discussions and pull requests 
ms.prod: devops
ms.technology: devops-collab
ms.assetid: 
toc: show
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 03/01/2018
monikerRange: '>= tfs-2015'
---



# Use #ID to link to work items  

**VSTS | TFS 2018 | TFS 2017 | TFS 2015.1**

::: moniker range=">= tfs-2015"
Use the **#ID** control to quickly link objects to work items.     

::: moniker-end

<a id="mention-wit-id">  </a>

::: moniker range=">= tfs-2013 <= tfs-2015"
> [!NOTE]  
> The **#ID** special control feature is available from TFS 2015.1 and later versions.    

::: moniker-end

::: moniker range=">= tfs-2015"
## Link a pull request to a work item 

When leaving a code comment in a pull request, you can type **#** to trigger the **#ID** work item picker. The picker displays a list of 50 work items that you have recently modified or that are assigned to you. 

You can narrow the list of suggested work items by entering keywords that match the work item type, ID, or title, or you can enter the exact work item ID.

<img src="_img/ALM_PRD_ID_PR.png" alt="Pull request comment area, type # to invoke work item control" style="border: 1px solid #CCCCCC;" />     

To further filter the list, continue entering keywords until you've found a match. You can enter up to five keywords.   

::: moniker-end


::: moniker range=">= tfs-2015"

## Link to work items in pull requests, comments, and commits
 
You can also use the **#ID** control in pull request discussions, commit comments, changeset comments, and shelveset comments. 
::: moniker-end

::: moniker range="tfs-2015"
> [!NOTE]  
> Requires TFS 2015.2 or a later version.   

::: moniker-end


::: moniker range="vsts || >= tfs-2018"

## Link to work items from a Wiki page
 
You can use the **#ID** control to link to a work item from within a Wiki page.   

To learn more about the built-in wiki, see [Add & edit wiki pages](../collaborate/add-edit-wiki.md). 

::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
## Related articles

- [Link work items](../work/backlogs/add-link.md)
- [Save work with commits](../git/tutorial/commits.md)
- [Pull requests](../git/tutorial/pullrequest.md)
- [Check in your work to the team code base](../tfvc/check-your-work-team-codebase.md) 

::: moniker-end