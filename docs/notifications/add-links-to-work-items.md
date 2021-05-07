---
title: Link work items to other objects
titleSuffix: Azure DevOps
description: Learn how to link work items to builds, commits, pull requests, and more. 
ms.technology: devops-collab 
toc: show
ms.custom: contperf-fy21q2
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= tfs-2015'
ms.date: 04/16/2021
---

# Link to work items from other objects

[!INCLUDE [temp](../includes/version-ts-tfs-2015-2016.md)]

By linking to work items from other objects, such as builds, commits, pull requests, and more, you support your team's ability to maintain an audit trail of related work. All users can add links to their work items.

> [!TIP]
> If you're looking for guidance on how to: 
> - link to work items from GitHub, see [Link to work items from GitHub commits, pull requests, and issues](../boards/github/link-to-from-github.md).
> - link your work items to other work items, see [Link work items to user stories, issues, bugs, and other work items](../boards/backlogs/add-link.md).

You can enter `#ID` from within the following areas to link to your work items:

::: moniker range=">= azure-devops-2020"
- A work item discussion or any rich-text field
- A pull request discussion
- Commit comments
- Changeset or shelveset comments
- Wiki pages
::: moniker-end

::: moniker range="azure-devops-2019"
- A work item discussion 
- A pull request discussion
- Commit comments
- Changeset or shelveset comments
- Wiki page 
::: moniker-end

::: moniker range=">= tfs-2015 < tfs-2018"
- A work item discussion 
- A pull request discussion
- Commit comments
- Changeset or shelveset comments
::: moniker-end

The following image shows several types of links that are possible from a work item.

:::image type="content" source="media/types-of-work-item-links.png" alt-text="Graph showing the types of work item links.":::

::: moniker range="azure-devops"

Linking your work items to other objects also produces the following benefits:

- Automatically close work items when a pull request gets completed and merged.
- When you link a query results table to a wiki, it provides links to the number of work items. For more information, see [Wiki markdown guidance](../project/wiki/wiki-markdown-guidance.md#link-to-work-items-from-a-wiki-page).

::: moniker-end

<a id="mention-wit-id">  </a>

::: moniker range="tfs-2015"
> [!NOTE]  
> The `#ID` feature is available from TFS 2015 Update 1 and later versions.

::: moniker-end

<a id="link-wit-id">  </a>

## Link to work items from pull requests, commits, and comments

1. Enter `#` to trigger the `#ID` work item picker in your pull request commits, commit comments, changeset comments, shelveset comments, description, and more. You see a list of 50 work items that you've recently modified or that are assigned to you.

   :::image type="content" source="media/link-pr-to-work-item.png" alt-text="Screenshot of work item list produced when entering # in PR description.":::

2. Narrow the list of suggested work items by entering keywords that match the work item type, ID, or title.

   :::image type="content" source="media/keyword-pr-link.png" alt-text="Screenshot of entering keyword after # and resulting work item in search":::

   To further filter the list, continue to enter keywords until you find a match. You can enter up to five keywords.

> [!NOTE]
> From the work item form, **Links** tab, you can view all the objects linked to the work item. However, you can't create a work item query to list those links. Work item queries only return work items that are linked to other work items.

::: moniker range="tfs-2015"
> [!NOTE]  
> Requires TFS 2015 Update 2 or a later version.
::: moniker-end

<a id="work-item-state-pull-request" />


::: moniker range=">= azure-devops-2020"

## Set work item state in pull request

::: moniker-end

[!INCLUDE [temp](../includes/set-work-item-state-pull-request.md)]

::: moniker range=">= azure-devops-2020"

### How it works

The system considers the following three different criteria (in this order) when attempting to set the state of #mentioned work items: 
- State
- State Category
- keyword

#### Criteria logic

The following table describes the logic.

| **Criteria**                                      | **Action**                                                                                                     |
|------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| **If** the value matches a state,               | **Then** set it to that state.                                                                                  |
| **Else If** the value matches a state category, | **Then** set the work item to first state in that category. See the following [note](#note-category-matching). |
| **Else If** the value matches a keyword,        | **Then** set the work item to matching keyword state. See the following [table](#keyword-action-table).        |
| **Else**                                       | Ignore it and do nothing.                                                                                       |

#### Keyword logic

Keyword logic helps with intent matching. For example, you might enter “Resolves”, but you really meant “Resolved”. 

<a id="keyword-action-table">  </a>

| **Keyword**                    | **Action**                                               |  
|:-------------------------------|:---------------------------------------------------------|
| Proposed, Proposes, Propose    | Set to the first state in the Proposed category.          |  
| InProgress                     | Set to the first state in the In Progress category.       |
| Completed, Completes, Complete | Set to the first state in the Completed category.         |
| Resolved, Resolves, Resolve    | Set to the first state in the Resolved category.          |
| Fixes, Fixed, Fix              | Close work item. Except Bug, which gets set to Resolved. |

<a id="note-category-matching">  </a>

> [!NOTE]  
> Category matching isn't supported on projects using a Hosted XML process. Category matching is only available for projects using an inherited process.

::: moniker-end


<a id="link-to-builds" />

[!INCLUDE [temp](../includes/link-work-item-builds-projects.md)]

::: moniker range=">= tfs-2018"

## Link to work items from a Wiki page

Enter `#` to trigger the `#ID` work item picker from within a Wiki page.

For more information about the built-in wiki, see [Add & edit wiki pages](../project/wiki/add-edit-wiki.md) and [Wiki markdown guidance](../project/wiki/wiki-markdown-guidance.md).

::: moniker-end

## Related articles

- [Link to work items from GitHub commits, pull requests, and issues](../boards/github/link-to-from-github.md)
- [Link work items to user stories, issues, bugs, and other work items](../boards/backlogs/add-link.md)
- [Link work items to deployments](../boards/queries/linking-attachments.md)
- [Save work with commits](../repos/git/commits.md)
- [View and manage pull requests](../repos/git/pull-requests.md)

