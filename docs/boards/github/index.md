---
title: Azure Boards-GitHub integration 
titleSuffix: Azure Boards
description: Manage code in GitHub and link to GitHub commits, pull requests, and issues in Azure Boards
ms.custom: boards-get-started 
ms.service: azure-devops-boards
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'
ms.date: 06/19/2023
---


# About Azure Boards-GitHub integration 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Stay aligned and coordinated with Azure Boards and link your code activity and issues from GitHub. 

## Integrate Azure Boards and GitHub

:::moniker range=">= azure-devops-2022"
Azure Boards and Azure DevOps support integration with GitHub.com and GitHub Enterprise Server repositories.

You can start from either Azure Boards or GitHub to integrate and connect up to 250 GitHub repositories to an Azure Boards project. 

- [Install and configure the Azure Boards app for GitHub](install-github-app.md)
- [Connect an Azure Boards project to one or more GitHub repositories](connect-to-github.md)

:::moniker-end

::: moniker range="< azure-devops-2022"
Azure DevOps Server supports integration with GitHub Enterprise Server repositories. 

You can start from either Azure Boards or GitHub to integrate and connect up to 100 GitHub repositories to an Azure Boards project. 
::: moniker-end
:::moniker range="azure-devops-2020"
> [!NOTE]   
> When you install the Azure DevOps Server 2020.1.1 Patch 2, you can create connections from your Azure DevOps Server to GitHub.com repositories in addition to GitHub Enterprise Server repositories.
:::moniker-end
::: moniker range="< azure-devops-2022"
- [Install and configure the Azure Boards app for GitHub](install-github-app.md)</br>   
- [Approve and install the Azure Boards app](connect-to-github.md)
- [Connect Azure DevOps Server to GitHub Enterprise Server (on-premises)](connect-on-premises-to-github.md)

::: moniker-end

> [!IMPORTANT]   
> We recommend that you use the [Azure Boards app for GitHub](install-github-app.md) to configure and manage your connections to GitHub.com. The app provides a more streamlined configuration experience and has the advantage of authenticating and operating as the app rather than an individual. Once you're connected, you can manage the repositories either from Azure Boards or GitHub.com.

## Use integration features

You can do the following tasks with Azure Boards-GitHub integration:

- [Transition work items to a "Done" or "Completed" state with `fix`, `fixes`, or `fixed` in GitHub](link-to-from-github.md#use-ab-to-link-from-github-to-azure-boards-work-items). 
- [Post a comment to a GitHub commit, pull request, or issue when linked to a work item.](https://docs.github.com/en/get-started/quickstart/communicating-on-github) 
- [Link from a work item to a GitHub commit, pull request, or issue](link-to-from-github.md#add-link-from-a-work-item-to-a-github-commit-pull-request-or-issue).
- [View GitHub objects on a Kanban board](link-to-from-github.md#view-github-objects-on-kanban-board). 
- [Configure status badges](configure-status-badges.md)
- [Manage GitHub repository access](install-github-app.md#change-repository-access)
- [Troubleshoot Azure Boards-GitHub integration](connect-to-github.md#resolve-connection-issues)
- [Enable DevSecOps with Azure and GitHub](/devops/devsecops/enable-devsecops-azure-github?branch=main)

## Add or remove connections 
 
- [Add or remove GitHub repositories](install-github-app.md#add-or-remove-repositories-or-remove-a-connection-from-azure-boards) from Azure Boards.  
- [Change repository access to Azure Boards](install-github-app.md#change-repository-access) to change connections, suspend the integration, or uninstall the app.  

## Restrictions 

- Only connect a GitHub repository to one Azure DevOps organization and project.  
If you connect the same GitHub repo to projects defined in two or more Azure DevOps organizations, it can lead to unexpected **AB#** mention linking. For more information, see [Troubleshoot GitHub & Azure Boards integration](connect-to-github.md#resolve-connection-issues). 
- Azure DevOps can only integrate with GitHub repositories or Azure Repos Git repositories. Integration with other Git repositories isn't supported.
- You can't query for work items with links to GitHub artifacts. However, you can query for work items with an `External Link Count > 0`.
  
## Related articles

- [Build GitHub repositories](../../pipelines/repos/github.md) 
- [Build GitHub Enterprise Server repositories](../../pipelines/repos/github-enterprise.md)
- [What's Azure Boards?](../../boards/get-started/what-is-azure-boards.md)
- [About work items](../work-items/about-work-items.md)
