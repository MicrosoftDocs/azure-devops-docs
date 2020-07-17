---
title: Use ID to link work items & pull requests
titleSuffix: Azure DevOps
description: Link to work items in discussions and pull requests 
ms.technology: devops-collab
ms.assetid: 
toc: show
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/30/2019
monikerRange: '>= tfs-2015'
---

# Use #ID to link to work items  

[!INCLUDE [temp](../includes/version-ts-tfs-2015-2016.md)]

The **#ID** control quickly links objects to work items. With this control, you can specify or select a work item ID and it's automatically linked to the object. 

Use the **#ID** control within the following areas:

::: moniker range=">= azure-devops-2020"
- A work item discussion or any rich-text field
- A pull request discussion
- Commit comments
- Changeset or shelveset comments
- Wiki page. 
::: moniker-end

::: moniker range="azure-devops-2019"
- A work item discussion 
- A pull request discussion
- Commit comments
- Changeset or shelveset comments
- Wiki page. 
::: moniker-end

::: moniker range=">= tfs-2015 < tfs-2018"
- A work item discussion 
- A pull request discussion
- Commit comments
- Changeset or shelveset comments. 
::: moniker-end

<a id="mention-wit-id">  </a>

::: moniker range="tfs-2015"
> [!NOTE]  
> The **#ID** special control feature is available from TFS 2015 Update 1 and later versions.

::: moniker-end


## Link a pull request to a work item

Enter **#** to trigger the **#ID** work item picker in your pull request comment. See a list of 50 work items you've recently modified or are assigned to you.

Narrow the list of suggested work items by entering keywords that match the work item type, ID, or title.

![Pull request comment area, enter # to invoke work item control](media/ALM_PRD_ID_PR.png)  

To further filter the list, continue to enter keywords until you've found a match. You can enter up to five keywords.


## Link to work items in pull requests, comments, and commits

You can also use the **#ID** control in pull request discussions, commit comments, changeset comments, and shelveset comments.

::: moniker range="tfs-2015"
> [!NOTE]  
> Requires TFS 2015 Update 2 or a later version.
::: moniker-end

::: moniker range=">= tfs-2018"

## Link to work items from a Wiki page

Use the **#ID** control to link to a work item from within a Wiki page.

For more information about the built-in wiki, see [Add & edit wiki pages](../project/wiki/add-edit-wiki.md).

::: moniker-end


## Related articles

- [Link work items](../boards/backlogs/add-link.md)
- [Save work with commits](../repos/git/commits.md)
- [Pull requests](../repos/git/pullrequest.md)
- [Check in your work to the team code base](../repos/tfvc/check-your-work-team-codebase.md)

