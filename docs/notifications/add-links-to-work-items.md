---
title: Link work items & pull requests
titleSuffix: Azure DevOps
description: Learn how to link to work items in discussions and pull requests. 
ms.technology: devops-collab 
toc: show
ms.custom: contperfq2
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 10/29/2020
monikerRange: '>= tfs-2015'
---

# Link work items to external objects in Azure DevOps

[!INCLUDE [temp](../includes/version-ts-tfs-2015-2016.md)]

By linking work items to external objects, such as builds, commits, pull requests, and more, you support your team's ability to maintain an audit trail of related work. From the work item form, **Links** tab, you can view all the objects linked to the work item.
::: moniker range="azure-devops"
In addition, you can automatically close work items when a pull request gets completed and merged.
::: moniker-end

Use the `#ID` control within the following areas:

::: moniker range=">= azure-devops-2020"
- A work item discussion or any rich-text field
- A pull request discussion
- Commit comments
- Changeset or shelveset comments
- Wiki page 
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

:::image type="content" source="media/types-of-work-item-links.png" alt-text="Graph showing the types of work item links.":::

<a id="mention-wit-id">  </a>

::: moniker range="tfs-2015"
> [!NOTE]  
> The `#ID` special control feature is available from TFS 2015 Update 1 and later versions.

::: moniker-end

## Add a link to work items from pull requests, commits, and comments

Enter `#` to trigger the `#ID` work item picker in your pull request comment. See a list of 50 work items you've recently modified or that are assigned to you.

Narrow the list of suggested work items by entering keywords that match the work item type, ID, or title.

![Pull request comment area, enter `#` to invoke work item control](media/ALM_PRD_ID_PR.png)  

To further filter the list, continue to enter keywords until you find a match. You can enter up to five keywords.

> [!NOTE]
> While you can view the links to a work item from the **Links** tab within the work item form, you can't create a work item query to list those links. Work item queries only return work items that are linked to other work items.

You can also use the `#ID` control in pull request discussions, commit comments, changeset comments, and shelveset comments.

::: moniker range="tfs-2015"
> [!NOTE]  
> Requires TFS 2015 Update 2 or a later version.
::: moniker-end

::: moniker range="azure-devops"

## Set work item state in pull request

When you create a PR, you can set the state value of the linked work items in the description. Follow the specific syntax: ``` {state value}: #ID ```.
When you merge the PR, the system reads through the description and updates the work item state. In the following example, we set work items #300 and #301 to Resolved, #323 and #324 to Closed.

:::image type="content" source="media/pr-set-state-of-work-items.png" alt-text="Screenshot of setting work item state within a PR.":::
 
### How it works

The system considers three different criteria when attempting to set the state of #mentioned work items: State, State Category, and keyword. In that order.

  - **If** the value matches a state, **then** set it to that state 
  - **Else If** the value matches a state category, **then** set the work item to first state in that category (see the following note)
  - **Else If** the value matches a keyword, **then** set the work item to matching keyword state (see the following grid)
  - **Else**, ignore it and do nothing

Keyword logic is to help with intent matching. For example, you might enter “Resolves” but you really meant “Resolved”. 

| Keyword   |      Action      | 
|:----------|:-------------|
| Proposed, Proposes, Propose | Set to the first state in the Proposed category  | 
| InProgress | Set to the first state in the In Progress category |
| Completed, Completes, Complete | Set to the first state in the Completed category |
| Resolved, Resolves, Resolve| Set to the first state in the Resolved category |
| Fixes, Fixed, Fix | Close work item (except Bug, which gets set to Resolved) |

> [!NOTE]  
> Category matching isn't supported on projects using a Hosted XML process. Category matching is only available for projects using an inherited process.

::: moniker-end

::: moniker range=">= tfs-2018"

## Add links to work items from a Wiki page

Use the `#ID` control to link to a work item from within a Wiki page.

For more information about the built-in wiki, see [Add & edit wiki pages](../project/wiki/add-edit-wiki.md).

::: moniker-end

## Link work items and GitHub commits, pull requests, and issues

Use the `AB#ID` control to link to a work item from within a GitHub commit, pull request, or issue.

For more information, see [Link GitHub commits, pull requests, and issues to work items](../boards/github/link-to-from-github.md).

## Related articles

- [Link work items to deployments](../boards/queries/linking-attachments.md)
- [Link work items](../boards/backlogs/add-link.md)
- [Save work with commits](../repos/git/commits.md)
- [Pull requests](../repos/git/pullrequest.md)
- [Check in your work to the team code base](../repos/tfvc/check-your-work-team-codebase.md)
