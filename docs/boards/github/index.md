---
title: Azure Boards Integration With GitHub 
titleSuffix: Azure Boards
description: Take advantage of the integration between GitHub and Azure Boards, manage code in GitHub and link to GitHub commits, pull requests, and issues in Azure Boards.
ms.custom: boards-get-started 
ms.service: azure-devops-boards
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.date: 07/21/2025
#customer intent: As an Azure DevOps developer, I want to use GitHub with Azure Boards, so I can manage code in GitHub and link to GitHub commits, pull requests, and issues in Azure Boards.
---

# What is the Azure Boards-GitHub integration?

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Stay aligned and coordinated with Azure Boards and link your code activity and issues from GitHub. This article provides an overview of the integration between Azure Boards and GitHub.

> [!IMPORTANT]   
> If you want to configure and manage your connections to GitHub.com, use the [Azure Boards app for GitHub](install-github-app.md). The app provides a more streamlined configuration experience and has the advantage of authenticating and operating as the app rather than an individual. After you connect, you can manage the repositories either from Azure Boards or GitHub.com.

## Integration between Azure Boards and GitHub

Azure Boards and Azure DevOps support integration with GitHub.com and GitHub Enterprise Server repositories. You can start from either Azure Boards or GitHub to integrate and connect to GitHub repositories to an Azure Boards project. 

The latest version of Azure DevOps supports up to 1,000 GitHub repository connections. Azure DevOps 2022 supports up to 500 repositories, and earlier versions support up to 100 repositories.

- [Install and configure the Azure Boards app for GitHub](install-github-app.md)

- [Connect an Azure Boards project to one or more GitHub repositories](connect-to-github.md)

::: moniker range="< azure-devops-2022"
- [Connect Azure DevOps Server to GitHub Enterprise Server (on-premises)](connect-on-premises-to-github.md)
::: moniker-end

:::moniker range="azure-devops-2020"

> [!NOTE]   
> When you install the Azure DevOps Server 2020.1.1 Patch 2, you can create connections from your Azure DevOps Server to GitHub.com repositories in addition to GitHub Enterprise Server repositories.

:::moniker-end

## Integration features

Azure Boards-GitHub integration supports the following features:

| Feature | Description | More information |
|---------|-------------|------------------|
| **Transition work items** | Transition work items to a "Done" or "Completed" state with the `fix`, `fixes`, or `fixed` commands in GitHub. | [Use AB# to link from GitHub to Azure Boards work items](link-to-from-github.md#use-ab-to-link-from-github-to-azure-boards-work-items) |
| **Add comments** | Post a comment to a GitHub commit, pull request, or issue when linked to a work item. | [Communicating on GitHub](https://docs.github.com/get-started/using-github/communicating-on-github) | Add work item links to a GitHub branch, commit, or pull request. | [Link GitHub commits, pull requests, branches, and issues to work items in Azure Boards](link-to-from-github.md#link-work-item-to-branch-commit-pr) |
| **View GitHub objects** | Work with GitHub annotations on the board and quickly open linked GitHub commits, pull requests, or issues. | [View GitHub objects on a board](link-to-from-github.md#view-github-objects-on-board) |
| **Configure status badges** | Add Markdown syntax to the GitHub repository _README.md_ file and show your board status. | [Add status badges for your GitHub repo](configure-status-badges.md) |
| **Manage repository access** | Choose whether all repositories or only repositories you specify can participate in the Azure Boards-GitHub integration. | [Change repository access](install-github-app.md#change-repository-access) |
| **Troubleshoot integration** | Troubleshoot any issues in the Azure Boards-GitHub integration with your repositories. | [Resolve connection issues](connect-to-github.md#resolve-connection-issues) |
| **Enable DevSecOps** | Configure support for DevSecOps (or _Secure DevOps_), secure your code with GitHub, so you can safely track your work in Azure Boards. | [Enable DevSecOps with Azure and GitHub](/devops/devsecops/enable-devsecops-azure-github) |

## Connection tasks 

You can complete the following connection tasks with Azure Boards-GitHub integration:

- [Add or remove GitHub repositories](install-github-app.md#add-or-remove-repositories-or-remove-a-connection-from-azure-boards) or remove a connection from Azure Boards.

- [Change repository access to Azure Boards](install-github-app.md#change-repository-access) to change connections, suspend integration, or uninstall the Azure Boards app.

## Restrictions 

The following restrictions apply to Azure Boards-GitHub integration:

- You can connect a GitHub repository to only one Azure DevOps organization and project.  

   If you connect the same GitHub repository to projects defined in two or more Azure DevOps organizations, you might experience unexpected **AB#** mention linking. For more information, see [Troubleshoot Azure Boards-GitHub integration](connect-to-github.md#resolve-connection-issues). 

- Azure DevOps can only integrate with GitHub repositories or Azure Repos Git repositories. Integration with other Git repositories isn't supported.

- You can't query for work items with links to GitHub artifacts. However, you can query for work items with an `External Link Count > 0` setting.

## Related content

- [Build GitHub repositories](../../pipelines/repos/github.md)
- [What is Azure Boards?](../../boards/get-started/what-is-azure-boards.md)
- [Explore work items and work item types](../work-items/about-work-items.md)
