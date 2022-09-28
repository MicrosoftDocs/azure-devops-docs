---
title: Link work items to other objects
titleSuffix: Azure DevOps
description: Learn how to link work items to internal Azure DevOps builds, commits, pull requests, and more, and external objects in Git and Team Foundation Version Control repositories. 
ms.technology: devops-collab 
toc: show
ms.custom: contperf-fy21q2, cross-project, engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 09/28/2021
---

# Link work items to other objects

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

When you link work items to other objects, you maintain an audit trail of related work for your team. All users can add work item links to internal Azure DevOps objects, like build and release pipelines, and external objects, like in Git and Team Foundation Version Control (TFVC) repositories.

You can link work items to the following internal and external devops objects, as illustrated in the following table.
::: moniker range=">= azure-devops-2020"
|Area|Objects |Link to more information |
|---------|-----|---------|
|Build  |Found or integrated in build |
 [Link work items to builds and deployments](../boards/work-items/work-item-deployments-control.md). |
|Release     | Integrated in release        | 
[Configure pipelines to support work tracking automation](../pipelines/integrations/configure-pipelines-work-tracking.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json) |
|Repository   | Pull request, commit, comment, changeset, tag, versioned item | 
- [Azure Boards-GitHub integration](../boards/github/index.md)
- [Link to work items from GitHub commits, pull requests, and issues](../boards/github/link-to-from-github.md)
- [Configure repositories and branches to integrate with work tracking](../repos/git/configure-repos-work-tracking.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json)   |
|Wiki | Wiki page                |  
- [Add & edit wiki pages](../project/wiki/add-edit-wiki.md)
- [Wiki Markdown guidance](../project/wiki/wiki-markdown-guidance.md#link-to-work-items-from-a-wiki-page)       |
::: moniker-end

::: moniker range="<= azure-devops-2019"
|Area|Objects |Link to more information |
|---------|-----|---------|
|Build  |Found or integrated in build |
 [Link work items to builds and deployments](../boards/work-items/work-item-deployments-control.md). |
|Release     | Integrated in release        | 
[Configure pipelines to support work tracking automation](../pipelines/integrations/configure-pipelines-work-tracking.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json) |
|Repository   | Pull request, commit, comment, changeset, tag, versioned item | 
- [Azure Boards-GitHub integration](../boards/github/index.md)
- [Link to work items from GitHub commits, pull requests, and issues](../boards/github/link-to-from-github.md)
- [Configure repositories and branches to integrate with work tracking](../repos/git/configure-repos-work-tracking.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json)   |
::: moniker-end
## Link work items to pull requests
Link your work items to pull request commits, comments, description, and more.

1. Enter `#` to trigger the `#ID` work item picker in your pull request. You see a list of 50 work items that you've recently modified or are assigned to you.

   :::image type="content" source="media/link-pr-to-work-item.png" alt-text="Screenshot of work item list produced when entering # in PR description.":::

2. Enter up to five keywords that match the work item type, ID, or title to narrow the list of suggested work items.

   :::image type="content" source="media/keyword-pr-link.png" alt-text="Screenshot of entering keyword after # and resulting work item in search":::

::: moniker range=">= azure-devops-2020"

### Set work item state in pull request

[!INCLUDE [temp](../includes/set-work-item-state-pull-request.md)]

Azure DevOps considers the following criteria (in this order) when it attempts to set the state of #mentioned work items:
1. State
1. State Category
1. Keyword

#### Criteria logic for work item state
The following table describes the criteria logic for work item state.

| **Criteria**       | **Action**                 |
|--------------------|----------------------------|
| **If** the value matches a state,               | **Then** set it to that state.    |
| **Else If** the value matches a state category, | **Then** set the work item to first state in that category. See the following [note](#category-note).|
| **Else If** the value matches a keyword,        | **Then** set the work item to matching keyword state. See the following [section](#criteria-logic-for-work-item-keyword).  |
| **Else**                                        | Ignore it and do nothing.          |

#### Criteria logic for work item keyword
The following table describes keyword logic, which helps with intent matching. For example, you might enter “Resolves”, but you really meant “Resolved”. 

| **Keyword**                    | **Action**                                                |  
|--------------------------------|:----------------------------------------------------------|
| Proposed, Proposes, Propose    | Set to the first state in the Proposed category.          |  
| InProgress                     | Set to the first state in the In Progress category.       |
| Completed, Completes, Complete | Set to the first state in the Completed category.         |
| Resolved, Resolves, Resolve    | Set to the first state in the Resolved category.          |
| Fixes, Fixed, Fix              | Close work item. Except Bug, which gets set to Resolved.  |

<a id="category-note" />

> [!NOTE]  
> We don't support category matching on projects using a Hosted XML process. Category matching is only available for projects using an inherited process.

::: moniker-end

<a id="link-to-builds" />

[!INCLUDE [temp](../includes/link-work-item-builds-projects.md)]
For more information, see [Link work items to user stories, issues, bugs, and other work items](../boards/backlogs/add-link.md)

[!INCLUDE [temp](../boards/includes/view-linked-objects.md)]

> [!NOTE]
> You can't create a work item query to list linked objects. Work item queries only return work items that are linked to other work items. However, you can create a query that lists work items that contain external links. For more information, see [Query by link or attachment count](../boards/queries/linking-attachments.md).

## Related articles

- [End-to-end traceability](../cross-service/end-to-end-traceability.md)
- [Drive Git development from a work item](..//boards/backlogs/connect-work-items-to-git-dev-ops.md)
- [Link type reference](../boards/queries/link-type-reference.md)
- [Save work with commits](../repos/git/commits.md)
- [View and manage pull requests](../repos/git/pull-requests.md)
