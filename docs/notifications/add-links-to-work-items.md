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
> You can set up automatic linking and other settings that link work items to Git or GitHub commits, pull requests, builds, and more. To learn how, see the following resources:   
> - [Configure repositories and branches to integrate with work tracking](../repos/git/configure-repos-work-tracking.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json)
> - [Configure pipelines to support work tracking](../pipelines/integrations/configure-pipelines-work-tracking.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json)
> - [Link and view work items to builds and deployments](../boards/work-items/work-item-deployments-control.md)
> - [Link to work items from GitHub commits, pull requests, and issues](../boards/github/link-to-from-github.md).


You can enter `#ID` from within the following areas to link to your work items:

::: moniker range=">= azure-devops-2020"
- A work item discussion or any rich-text field
- Git commit comments and pull request discussions
- TFVC changeset or shelveset comments
- Wiki pages
::: moniker-end

::: moniker range="<= azure-devops-2019"
- A work item discussion 
- Git commit comments and pull request discussions
- TFVC changeset or shelveset comments
::: moniker-end

The following image illustrates the link types that support linking work items to code, build, and release objects. These include All links, except for *Integrated in release* stage, can be made from a work item.

The link types used to link work items to devops objects&mdash;as illustrated in the following image&mdash;are *Build*, *Found in build*, *Integrated in build*, *Integrated in release*  for build and release pipelines; *Branch*, *Commit*, *Pull Request*, and *Tag* for Git repositories, and *Changeset*, *Shelveset* and *VersionedItem* for Team Foundation Version Control (TFVC) repositories. These are all designated as external link types.

:::image type="content" source="media/add-link/conceptual-link-types-devops-objects.png" alt-text="Conceptual image of link types used to link work items to devops objects.":::
 

> [!NOTE]
> From the work item form, **Links** tab, you can [view all the objects linked to the work item](#view-list-links) as described later in this article. However, you can't create a work item query to list those links. Work item queries only return work items that are linked to other work items. However, you can create a query that lists work items that contain external links. To learn how, see [Query by link or attachment count](../../boards/queries/linking-attachments.md).



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


[!INCLUDE [temp](../boards/includes/view-linked-objects.md)]

## Related articles

- [Link to work items from GitHub commits, pull requests, and issues](../boards/github/link-to-from-github.md)
- [Link work items to user stories, issues, bugs, and other work items](../boards/backlogs/add-link.md)
- [Link and view work items to builds and deployments](../boards/work-items/work-item-deployments-control.md)
- [Save work with commits](../repos/git/commits.md)
- [View and manage pull requests](../repos/git/pull-requests.md)

