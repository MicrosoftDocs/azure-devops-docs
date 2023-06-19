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
ms.date: 06/20/2023
---


# Azure Boards-GitHub integration 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Stay aligned and coordinated with Azure Boards and link your code activity and issues from GitHub.

The following video introduces Azure Boards to the GitHub Marketplace.

> [!VIDEO https://learn.microsoft.com/shows/DevOps-Lab/Introducing-Azure-Boards-to-the-GitHub-Marketplace/player]

> [!NOTE]   
> To work with repositories, Azure DevOps only supports integration with GitHub repositories or Azure Repos Git repositories. Integration with other Git repositories isn't supported.  

::: moniker range="azure-devops"

[Sign up for Azure Boards](../get-started/sign-up-invite-teammates.md), and then use your GitHub account to access not only Azure Boards, but all your Microsoft online services.

::: moniker-end

## Supported integration scenarios 

:::moniker range="azure-devops"

Azure Boards and Azure DevOps support integration with GitHub.com and GitHub Enterprise Server repositories.

:::moniker-end

:::moniker range="< azure-devops"

Azure DevOps Server supports integration with GitHub Enterprise Server repositories. 

::: moniker-end

:::moniker range="azure-devops-2020"

> [!NOTE]   
> When you install the Azure DevOps Server 2020.1.1 Patch 2, you can create connections from your Azure DevOps Server to GitHub.com repositories in addition to GitHub Enterprise Server repositories.

:::moniker-end

Azure Boards-GitHub integration supports the following connections:  


| **Environment**  |**Actions**  |
|--------------|--------------|
|**GitHub**   | - Integrate all repositories for a GitHub account or organization, or select repositories.</br> - Add or remove GitHub repositories that participate in the integration and configure the project they connect to.</br>- Suspend Azure Boards-GitHub integration or uninstall the app.      |
|**Azure Boards**   |- Connect one or more GitHub repositories to an Azure Boards project.</br>
- Add or remove GitHub repositories from a GitHub connection within an Azure Boards project.</br> 
- Remove a GitHub connection in its entirety for a project.</br>- Allow a GitHub repository to connect to one or more Azure Boards projects within the same Azure DevOps organization or collection.         |


Azure Boards-GitHub integration supports the following operational tasks:  

- Create links between work items and GitHub commit, pull requests, and issues based on GitHub mentions. 
- Support state transition of work items to a "Done" or "Completed" state when using GitHub mention by using `fix`, `fixes`, or `fixed`. 
- Support full traceability by posting a discussion comment to GitHub when linking from a work item to a GitHub commit, pull requests, or issue. 
- Show linked to GitHub code artifacts within the work item Development section.
- Show linked to GitHub artifacts as annotations on Kanban board cards. 
- Support status badges of Kanban board columns added to GitHub repositories.

The following tasks aren't supported at this time: 
- Query for work items with links to GitHub artifacts. However, you can query for work items with an `External Link Count > 0`. 

## Connect Azure Boards and GitHub repositories 

::: moniker range=">= azure-devops-2022"
Start from either Azure Boards or GitHub to connect them. You can connect up to 250 GitHub repositories to an Azure Boards project. 
::: moniker-end 

::: moniker range="<= azure-devops-2020"
Start from either Azure Boards or GitHub to connect them. You can connect up to 100 GitHub repositories to an Azure Boards project. 
::: moniker-end 

> [!IMPORTANT]   
> We recommend that you use the [Azure Boards app for GitHub](install-github-app.md) to configure and manage your connections to GitHub.com. The app provides a more streamlined configuration experience and has the advantage of authenticating and operating as the app rather than an individual. Once you're connected, you can manage the repositories either from Azure Boards or GitHub.com. 

:::moniker range="azure-devops"

| **Environment**  |**Actions** |
|--------------|--------------|
|**GitHub**   | - [Install and configure the Azure Boards app for GitHub](install-github-app.md)</br>  
- Install the Azure Boards app for GitHub for your GitHub account or organization.</br>
	- Select repositories to participate in the integration.</br>
	- Approve and install the app.</br>
	- [Connect Azure Boards to GitHub (Cloud)](connect-to-github.md).        |
|**Azure Boards**   |- Connect one or more GitHub repositories to an Azure Boards project.</br>
	- Add or remove GitHub repositories from a GitHub connection within an Azure Boards project.</br> 
	- Remove a GitHub connection in its entirety for a project.</br>
	- Allow a GitHub repository to connect to one or more Azure Boards projects within the same Azure DevOps organization or collection. </br>
	- [Connect an Azure Boards project to select GitHub (Cloud) repositories](connect-to-github.md).
	- [Approve and install the Azure Boards app](connect-to-github.md) for GitHub for your GitHub account or organization.        |

:::moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

| **Environment** |**Actions**   |
|--------------|--------------|
|**GitHub**   | - [Install and configure the Azure Boards app for GitHub](install-github-app.md)</br>  
- Select repositories to participate in the integration.</br>
	- Approve and install the app.</br> 
	- [Connect Azure DevOps Server to GitHub Enterprise Server (on-premises).](connect-on-premises-to-github.md).       |
|**Azure Boards**   |- Connect one or more GitHub repositories to an Azure Boards project.</br>
	- Add or remove GitHub repositories from a GitHub connection within an Azure Boards project.</br> 
- Remove a GitHub connection in its entirety for a project.</br>
	- Allow a GitHub repository to connect to one or more Azure Boards projects within the same Azure DevOps organization or collection.</br>
	- [Connect Azure DevOps Server to GitHub Enterprise Server (on-premises)](connect-on-premises-to-github.md).          |

::: moniker-end

## Use features with Azure Boards-GitHub integration

Once Azure Boards and GitHub are connected, you can complete the following tasks: 
- [Link GitHub commits and pull requests to work items](link-to-from-github.md)
- [Configure status badges](configure-status-badges.md)
 
## Add or remove connections 
 
- [Add or remove GitHub repositories](add-remove-repositories.md) from Azure Boards.  
- [Change repository access to Azure Boards](change-azure-boards-app-github-repository-access.md) to change connections, suspend the integration, or uninstall the app.  

## Restrictions 

Only connect a GitHub repository to one Azure DevOps organization and project.  
If you connect the same GitHub repo to projects defined in two or more Azure DevOps organizations, it can lead to unexpected **AB#** mention linking. For more information, see [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md#integrate-repo-to-several-organizations). 
  
## Related articles

- [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md)
- [Build GitHub repositories](../../pipelines/repos/github.md) 
- [Build GitHub Enterprise Server repositories](../../pipelines/repos/github-enterprise.md)
- [Trigger an Azure Pipelines run from GitHub Actions](../../pipelines/ecosystems/github-actions.md)  
- [What's Azure Boards?](../../boards/get-started/what-is-azure-boards.md)
- [About work items](../work-items/about-work-items.md)  
 
