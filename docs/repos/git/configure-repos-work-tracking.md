---
title: Configure repros and branches to integrate with work tracking
titleSuffix: Azure DevOps
description: Learn how to configure Azure Repos to support integration with Azure Boards and work tracking 
ms.technology: devops-agile 
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2017'
ms.date: 08/02/2021
---
 
# Configure repositories and branches to integrate with work tracking  

[!INCLUDE [temp](../../includes/version-tfs-2017-through-vsts.md)]

To support traceability of your Git code with work tracking, you can exercise one or more features and configure several options.  
 

The following table summarizes the integration points between Azure Boards and Azure Repos, Git. Through various link types, you can track code changes&mdash;commits and pull requests for Git&mdash;that support development of user stories and features. The link types used to construct these links include *Branch , Commit, Pull Request*, and *Tag*. 

:::image type="content" source="media/work-tracking/concept-link-types-repos.png" alt-text="Conceptual image of link types that link work items to Azure Repos Git objects."::: 


:::row:::
   :::column span="1":::
      **Feature**
   :::column-end::: 
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Manually link work items to Git branches, commits, pull requests, and tags  
   :::column-end::: 
   :::column span="2":::
      You can link from a work item or from a Git object. For details, see [Link to work items from other objects, View list of linked objects](../../notifications/add-links-to-work-items.md#view-list-links).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Drive Git development from work item(s) 
   :::column-end::: 
   :::column span="2":::
      You can initiate a Git branch or link to Git commits or pull requests and drive your Git development cycle for a work item from within the work item form.  
      :::image type="content" source="media/work-tracking/development-control-git.png" alt-text="Screenshot of Development control for Git repositories.":::  
      For details, see [Drive Git development from a work item](../../boards/backlogs/connect-work-items-to-git-dev-ops.md?toc=/azure/devops/repos/toc.json&bc=/azure/devops/repos/breadcrumb/toc.json).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Automatically link and transition work items with Git commits  
   :::column-end::: 
   :::column span="2":::
     Enable or disable the following options for a single Git repository. To learn how, see [Configure Git repositories to support work tracking](#configure-git-repos).
      - Automatically create links for work items mentioned in a commit comment 
      - Allow mentions in commit comments to close work items 
      - Remember user preferences for completing work items with pull requests. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Check for linked work items in a Git branch
   :::column-end::: 
   :::column span="2":::
      Encourage traceability by checking for linked work items on pull requests. For details, see [Configure branch policies to support work tracking](#configure-branch-policies).
   :::column-end:::
:::row-end:::
---
::: moniker range=">= tfs-2018"
:::row:::
   :::column span="1":::
      Auto complete work items with pull requests
   :::column-end::: 
   :::column span="2":::
      When you link a work item to a pull request (PR), you have the option to automatically complete those work items when you successfully complete the PR. The system defaults to your selection for future PRs. For details, see [Auto complete of work items with pull requests](../../boards/work-items/auto-complete-work-items-pull-requests.md).
   :::column-end:::
:::row-end:::
--- 
::: moniker-end
:::row:::
   :::column span="1":::
      Query for external links 
   :::column-end::: 
   :::column span="2":::
      You can query for work items that contain links to branches, commits, pull requests or tags. To learn more, see [Query by link or attachment count](../../boards/queries/linking-attachments.md). 
   :::column-end:::
:::row-end:::
--- 

<a id="configure-git-repos" />

## Configure Git repositories to support work tracking 

You can enable several options to automate linking of work items from commits or pull requests. 

To configure the repository, open **Project Settings>Repositories**, choose a repository, and then view the **Settings** tab. 

:::image type="content" source="media/work-tracking/repo-settings-work-tracking.png" alt-text="Screenshot of Project Settings>Repositories>Settings showing work tracking options."::: 

Enable the following options: 

- **Commit mention linking**
	When enabled, commit messages containing `#` followed by a valid work item ID will automatically link the commit to the mentioned work item. Disable this option when pushing a repository previously contained by a different account or service. If you [import a repository](import-git-repository.md), we automatically turn this option off.
- **Commit mention work item resolution**
	Enable this option to support closing work items mentioned in commits with the `Fixes` prefix, for example `Fixes #*WorkItemID*`. 
- **Work item transition preferences**
	When enabled, the default option, the system rembers each user's last choice to complete linked work items during pull request completion. Depending on your team's preference, you may choose to disable this option to discourage users from completing work items with their pull requests. When disabled, users must opt-in to completing work items for each pull request. 


<a id="configure-branch-policies" />

## Configure branch policies to support work tracking

To ensure that changes to a branch have links to work items, you configure the branch policy for a Git repository. 


To configure the branch, open **Project Settings>Repositories**, choose a Git  repository, and then view the **Policies** tab. Scroll down and choose a branch under the **Branch policies** section. Linking work items provides additional context for your changes and ensures that updates go through your work item tracking process.

Turn on the **Check for linked work items** option. 
- Choose **Required** to mandate all pull requests have at least one linked work item in order to be completed. 
- Choose **Optional** to allow pull requests to be completed without linked work items, but issue a warning that there are no linked work items.  



::: moniker range=">= azure-devops-2020"

:::image type="content" source="media/work-tracking/branch-policies-check-linked-work-items.png" alt-text="Screenshot of Project Settings>Repositories>Branch Policies showing check for linked work items option."::: 

::: moniker-end

::: moniker range="< azure-devops-2020"

![Require linked work items in your pull requests](media/branch-policies/work-item-linking-2018.png)

::: moniker-end

## Related articles

- [Link to work items from other objects](../../notifications/add-links-to-work-items.md#view-list-links)  
- [Link type reference](../../boards/queries/link-type-reference.md) 
- [Drive Git development from a work item](../../boards/backlogs/connect-work-items-to-git-dev-ops.md?toc=/azure/devops/repos/toc.json&bc=/azure/devops/repos/breadcrumb/toc.json) 
- [End-to-end traceability](../../cross-service/end-to-end-traceability.md) 