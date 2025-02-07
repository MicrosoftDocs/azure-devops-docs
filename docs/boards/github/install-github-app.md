---
title: Install the Azure Boards app for GitHub
titleSuffix: Azure Boards
description: Learn how to configure the Azure Boards app to connect one or more GitHub repositories to Azure Boards, and change GitHub repo access.  
ms.service: azure-devops-boards
ms.topic: quickstart
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'
ms.date: 03/01/2024
---

# Install the Azure Boards app for GitHub  

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Install the Azure Boards app for GitHub to connect Azure Boards to your GitHub repositories. When you connect Azure Boards projects with GitHub.com repositories, you support linking between GitHub commits and pull requests to work items. You can use GitHub for software development while using Azure Boards to plan and track your work. 
 
For an overview of the integration that the Azure Boards app for GitHub supports, see [Azure Boards-GitHub integration](index.md). Once you install the Azure Boards app for GitHub on your GitHub account or organization, choose which GitHub repositories you want to connect to from your project.

## Prerequisites 

| Category | Requirements |
|--------------|-------------|
| **Permissions** | - Member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md). If you created the project, you have permissions.<br> - **Administrator** or **owner** of the GitHub organization for installing the Azure Boards app. <br> - **Read** permissions for the GitHub repository. |
| **Project membership**|  [Project member](../../organizations/projects/create-project.md). |

> [!IMPORTANT]  
> If your repository is already connected via another authentication type such as OAuth, you must remove that repository from your existing connection before you re-connect it via the GitHub App. Follow the steps provided in [Add or remove GitHub repositories](#add-remove-repos) later in this article before you configure the GitHub App.
>
> You can connect an Azure DevOps organization to multiple GitHub repositories if you're an administrator for those repositories. However, you shouldn't connect a GitHub repository to more than one Azure DevOps organization.

## Give Azure Boards organization access 

To grant GitHub access to your Azure DevOps organization, do the following steps. 

1. From the GitHub web portal, open **Settings** from your profile menu.  

   :::image type="content" source="media/troubleshoot/choose-settings.png" alt-text="Screenshot of open profile, choose Settings.":::       
	
2. Select **Applications** under **Integrations**.  

3. Select **Authorized GitHub Apps** > **Azure Boards**. 

   :::image type="content" source="media/troubleshoot/open-azure-boards.png" alt-text="Screenshot of Authorized OAuth Apps tab, choose Azure Boards.":::   

4. Under **Organization access**, resolve any issues that might appear. Select **Grant** to grant access to any organizations that show as having an **Access request pending**. 

   :::image type="content" source="media/troubleshoot/organization-access-issues.png" alt-text="Screenshot of Organization access with organizations without access.":::	

<a id="install"></a>

## Install and configure the Azure Boards app 

1. Go to the Azure Boards app in the [GitHub Marketplace](https://github.com/marketplace/azure-boards). 

2. Select **Set up a plan**.

   :::image type="content" source="media/github-app/install-azure-boards-app-from-marketplace.png" alt-text="Screenshot of GitHub Marketplace, Set up a plan button.":::

3. Choose the GitHub organization you want to connect to Azure Boards.

   :::image type="content" source="media/github-app/choose-github-account.png" alt-text="Screenshot showing Install Azure Boards dialog.":::

4. Choose the repositories that you want to connect to Azure Boards. 

   In the following example, we choose to connect to all repositories.
   
   :::image type="content" source="media/github-app/install-options.png" alt-text="Screenshot showing all repositories selected.":::

5. Choose the Azure DevOps organization and Azure Boards project you want to connect to GitHub.com.

   :::image type="content" source="media/github-app/choose-azure-boards-project.png" alt-text="Screenshot of setting up connection dialog.":::

	You can only connect one project at a time. If you have other projects you want to connect, you can do that later as described in [Configure other projects or repositories](#configure) later in this article.

6. To connect with GitHub.com, authorize your Azure Boards organization.

   :::image type="content" source="media/github-app/authorize-azure-boards.png" alt-text="Screenshot of Azure Boards authorization dialog.":::

7. Confirm the GitHub.com repositories that you want to connect. Select each repository you want to connect to. Unselect any repositories that you don't want to participate in the integration.  

   :::image type="content" source="media/github-app/confirm-github-repos.png" alt-text="Screenshot of Confirm your GitHub repositories dialog.":::

<a id="get-started"></a>

## Use the connection 

At this point, your Azure Boards-GitHub integration is complete. You can skip the next steps or go through them to understand the features supported with the connection.  

1. On your board, select **New work item** to enter a new work item named "Add badge to README"&mdash;Issue (Basic), User Story (Agile), or Product Backlog Item (Scrum)&mdash;depending on the process model used by your Azure Boards project. 

	A work item titled *Add badge to README* appears on your board. 

2. Open your work item, go to the **Development** section, and select **Add link**.
3. Select **GitHub Pull Request** from the **Link type** dropdown menu.
4. Select the repository and enter the pull request ID and an optional comment.
5. Select **Add link**.

   :::image type="content" source="media/troubleshoot/add-link-to-pull-request-2.png" alt-text="Screenshot of Add link action in user story, showing repository selection and empty boxes for input of pull request ID and optional comment."::: 

	The following actions occur in the background, automatically:  
	- Adds a badge to the README file of the first repository in the list of connected GitHub repositories.  
	- Creates a GitHub commit for the update made by adding the badge to the README file.
	- Creates a GitHub pull request to merge the changes made to the README file.  
	- Links the GitHub commit and pull request to the work item created in step 1.  

6. Select the first pull request link from your work item.

   :::image type="content" source="media/github-app/issue-add-badge.png" alt-text="Screenshot of issue form for pull request opened in GitHub.":::

   The GitHub pull request opens in a new browser tab.

7. Select **Merge pull request**.

   :::image type="content" source="media/github-app/git-hub-pr-for-badge-b.png" alt-text="Screenshot of example pull request in GitHub."::: 

8. Go to your repository README file and view the badge that was added. 

   :::image type="content" source="media/github-app/readme-file-with-badge.png" alt-text="Screenshot of GitHub repo with badge added.":::

	For more information, see [Configure status badges to add to GitHub README files](configure-status-badges.md).

<a id="configure"></a>

## Configure other projects or repositories

You can configure other Azure Boards/Azure DevOps Projects, GitHub.com repositories, or change the current configuration from the Azure Boards app page. For more information, see [Change GitHub repository access, or suspend or uninstall the integration](install-github-app.md#add-remove-repos).

<a id="add-remove-repos"></a>

## Add or remove repositories, or remove a connection from Azure Boards

If you encounter a problem with a connection, we recommend that you remove the connection and start over with a new connection.  

::: moniker range=">= azure-devops-2020"

1. From your project in Azure DevOps, go to **Project settings** > **GitHub connections**.

2. To add or remove repositories, select the **More options** ellipses for the connection and choose **Add repositories** or **Remove repositories** from the menu. 

   :::image type="content" source="media/connect-cloud/connection-menu.png" alt-text="Screenshot of GitHub connection menu of More options.":::

3. To remove all repositories and the connection, choose the **Remove connection** option. Then, choose **Remove** to confirm.

   :::image type="content" source="media/github/remove-connection-confirmation.png" alt-text="Screenshot of confirmation removal of GitHub connection.":::  

::: moniker-end

::: moniker range="azure-devops-2019"

1. To add or remove repositories, open the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the connection and choose **Add** repositories or **Remove repositories** from the menu. 

   :::image type="content" source="media/github/repo-actions-menu.png" alt-text="Screenshot of add or remove GitHub repos.":::
	
2. To remove all repositories and the connection, choose the **Remove connection** option. Then, choose **Remove** to confirm.

   :::image type="content" source="media/github/remove-connection-confirmation.png" alt-text="Screenshot of confirmation of GitHub connection removal dialog.":::
  
::: moniker-end

## Change repository access

1. Sign into GitHub and open your organization profile settings. 

	`https://github.com/organizations/fabrikam-fiber/settings/profile` 

2. Go to **Installed GitHub Apps** > **Azure Boards** > **Configure**.    
	:::image type="content" source="media/change-repo-access/open-installed-github-apps.png" alt-text="Screenshot of open Organization account, Installed GitHub Apps, Azure Boards, Configure.":::

	The Azure Boards configuration page opens. 

3. Scroll down to the **Repository access** section. 

4. Choose the option you want, **All repositories** or **Only select repositories**. 

	If you choose **Only select repositories**, select the repositories you want to participate in integration with Azure Boards. 

	:::image type="content" source="media/change-repo-access/choose-repositories.png" alt-text="Screenshot of Repository access, choose Only select repositories.":::

5. Select **Save**. 
 
## Suspend or uninstall Azure Boards integration 

1. Starting from step 2 in the previous procedure, scroll down to the **Danger zone** section.

	:::image type="content" source="media/change-repo-access/danger-zone.png" alt-text="Screenshot of Azure Boards configuration, Danger zone section.":::

1. To suspend the integration, choose **Suspend**. From the popup confirmation window, choose **OK** to confirm the suspension.

	:::image type="content" source="media/change-repo-access/suspend-confirmation-popup.png" alt-text="Screenshot of suspension confirmation.":::
 
	To unsuspend the integration, choose **Unsuspend**.  
 
1. To uninstall the Azure Boards app, choose **Uninstall**, and then choose **OK** from the popup confirmation window.  

	:::image type="content" source="media/change-repo-access/uninstall-confirmation-popup.png" alt-text="Screenshot of uninstall confirmation.":::

## Update Azure Boards-GitHub connections
 
If you change the repositories that the Azure Boards app for GitHub supports, you might get redirected to Azure Boards GitHub connections. A good practice is to remove the repositories in Azure Boards that can no longer connect to GitHub. For more information, see [Add or remove GitHub repositories](#add-remove-repos).

If you uninstall the Azure Boards app for GitHub, the following message displays in Azure Boards, **Project settings** > **GitHub** connections. Choose **Remove connection** to remove all previously made GitHub connections. For more information, see [Add/remove GitHub repositories](#add-remove-repos). 

:::image type="content" source="media/change-repo-access/boards-remove-connection.png" alt-text="Screenshot of uninstalled Azure Boards GitHub app.":::

## Next steps

> [!div class="nextstepaction"]
> [Link GitHub commits, pull requests, and branches to work items](link-to-from-github.md) 

## Related articles
 
- [Drive Git development from a work item](../backlogs/connect-work-items-to-git-dev-ops.md)
- [Change GitHub repository access, or suspend or uninstall the integration](change-azure-boards-app-github-repository-access.md)
- [Configure status badges to add to GitHub README files](configure-status-badges.md)
 