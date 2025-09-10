---
title: Install the Azure Boards App for GitHub
titleSuffix: Azure Boards
description: Use this quickstart to configure the Azure Boards app to connect one or more GitHub repositories to Azure Boards, and change GitHub repo access.  
ms.service: azure-devops-boards
ms.topic: quickstart
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.date: 08/01/2025
#customer intent: As a team leader, I need to know how to install the Azure Boards app for GitHub to link our Boards experience to the GitHub repo functionality.
---

# Install the Azure Boards app for GitHub  

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

In this quickstart, you install the Azure Boards app for GitHub to connect Azure Boards to your GitHub repositories. When you connect Azure Boards projects with GitHub.com repositories, you support linking between GitHub commits and pull requests to work items. You can use GitHub for software development while using Azure Boards to plan and track your work. After you install the Azure Boards app for GitHub on your GitHub account or organization, choose which GitHub repositories you want to connect to from your project.

For an overview of the integration that the Azure Boards app for GitHub supports, see [Azure Boards-GitHub integration](index.md).

## Prerequisites 

| Category | Requirements |
|--------------|-------------|
| **Permissions** | - Member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md). If you created the project, you have permissions.<br> - **Administrator** or **owner** of the GitHub organization for installing the Azure Boards app. <br> - **Read** permissions for the GitHub repository. |
| **Project membership**|  [Project member](../../organizations/projects/create-project.md). |

> [!IMPORTANT]  
> If your repository is already connected by using another authentication type such as OAuth, you must remove that repository from your existing connection before you reconnect it by using the GitHub App. Follow the steps provided in [Add or remove GitHub repositories](#add-remove-repos) later in this article before you configure the GitHub App.
>
> You can connect an Azure DevOps organization to multiple GitHub repositories if you're an administrator for those repositories. You shouldn't connect a GitHub repository to more than one Azure DevOps organization.

## Install and configure the Azure Boards app 

Your installation sequence might vary due to your account configuration. If necessary, follow on screen prompts between the following steps.

1. Go to the Azure Boards app in the [GitHub Marketplace](https://github.com/marketplace/azure-boards). 

1. Under **Plans and pricing**, under **Free**, select **Install**.

1. In **Install & Authorize Azure Boards**, choose the repositories that you want to connect to Azure Boards, then select **Install & Authorize**.

   This example uses **All repositories**: 
   
   :::image type="content" source="media/github-app/install-options.png" alt-text="Screenshot shows Install and Authorize page with all repositories selected.":::

1. Choose the Azure DevOps organization and Azure Boards project you want to connect to GitHub.com.

   :::image type="content" source="media/github-app/choose-azure-boards-project.png" alt-text="Screenshot shows the Setup your Azure Boards project page where you select an org and project.":::

	You can only connect one project at a time. If you have other projects you want to connect, you can do that later as described in [Configure other projects or repositories](#configure) later in this article.

<a id="get-started"></a>

## Give Azure Boards organization access 

If necessary, to grant GitHub access to your Azure DevOps organization, do the following steps. 

1. From the GitHub web portal, open **Settings** from your profile menu.  

   :::image type="content" source="media/troubleshoot/choose-settings.png" alt-text="Screenshot shows the Settings option in your profile.":::
	
1. Select **Applications** under **Integrations**.  

1. Select **Authorized GitHub Apps** > **Azure Boards**. 

   :::image type="content" source="media/troubleshoot/open-azure-boards.png" alt-text="Screenshot shows authorized GitHub apps with Azure Boards highlighted.":::   

1. Under **Organization access**, resolve any issues that might appear. Select **Grant** to grant access to any organizations that show as having an **Access request pending**. 

   :::image type="content" source="media/troubleshoot/organization-access-issues.png" alt-text="Screenshot shows Organization access with organizations without access.":::	

<a id="install"></a>

## Check your Third-party application access policy

Ensure your GitHub organization permits third‑party application access for the Azure Boards app. If third‑party access is restricted, adding repositories from Azure DevOps can show an empty list or produce an error.

To enable access:

1. In GitHub, open your organization and go to Settings > OAuth app policy.

2. Approve the Azure Boards app specifically (recommended), or remove restrictions for all third‑party applications.

   :::image type="content" source="media/github-app/third-party-oauth-app-policy-screen-for-boards-app.png" alt-text="Screenshot shows the third-party application access policy.":::

> [!NOTE] 
> You must be an organization owner or administrator to change this setting.

## Use the connection 

At this point, your Azure Boards-GitHub integration is complete. You can skip the next steps or go through them to understand the features supported with the connection.  

1. On your board, select **New work item** to enter a new work item named "Add badge to README"&mdash;Issue (Basic), User Story (Agile), or Product Backlog Item (Scrum)&mdash;depending on the process model used by your Azure Boards project. 

	A work item titled *Add badge to README* appears on your board. 

1. Open your work item, go to the **Development** section, and select **Add link**.
1. From **Link type**, select **GitHub Pull Request**.
1. Select the repository and enter the pull request ID and an optional comment.
1. Select **Add link**.

   :::image type="content" source="media/troubleshoot/add-link-to-pull-request-2.png" alt-text="Screenshot shows Add link action in user story, showing repository selection and empty boxes for input of pull request ID and optional comment."::: 

	The following actions occur in the background, automatically:

	- Adds a badge to the README file of the first repository in the list of connected GitHub repositories.  
	- Creates a GitHub commit for the update made by adding the badge to the README file.
	- Creates a GitHub pull request to merge the changes made to the README file.  
	- Links the GitHub commit and pull request to the work item created in step 1.  

1. Select the first pull request link from your work item.

   :::image type="content" source="media/github-app/issue-add-badge.png" alt-text="Screenshot shows the issue form for pull request opened in GitHub.":::

   The GitHub pull request opens in a new browser tab.

1. Select **Merge pull request**.

   :::image type="content" source="media/github-app/git-hub-pr-for-badge-b.png" alt-text="Screenshot shows the example pull request in GitHub."::: 

1. Go to your repository README file and view the badge that was added. 

   :::image type="content" source="media/github-app/readme-file-with-badge.png" alt-text="Screenshot shows the GitHub repo with badge added.":::

	For more information, see [Add status badges for your GitHub repo](configure-status-badges.md).

<a id="configure"></a>

## Configure other projects or repositories

You can configure other Azure Boards/Azure DevOps Projects, GitHub.com repositories, or change the current configuration from the Azure Boards app page. For more information, see [Add or remove repositories, or remove a connection from Azure Boards](install-github-app.md#add-remove-repos).

<a id="add-remove-repos"></a>

## Add or remove repositories, or remove a connection from Azure Boards

If you encounter a problem with a connection, we recommend that you remove the connection and start over with a new connection.

::: moniker range=">= azure-devops-2020"

1. From your project in Azure DevOps, go to **Project settings** > **GitHub connections**.

1. To add or remove repositories, select the **More options** ellipses for the connection and choose **Add repositories** or **Remove repositories** from the menu.

   :::image type="content" source="media/connect-cloud/connection-menu.png" alt-text="Screenshot shows the GitHub connection menu of More options.":::

1. To remove all repositories and the connection, choose the **Remove connection** option. Then, choose **Remove** to confirm.

   :::image type="content" source="media/github/remove-connection-confirmation.png" alt-text="Screenshot shows the confirmation removal of GitHub connection.":::  

::: moniker-end

## Change repository access

1. From the GitHub web portal, open **Settings** from your profile menu.

1. Select **Integrations** > **Applications**. Under **Installed GitHub Apps**, select **Configure**.

	:::image type="content" source="media/change-repo-access/open-installed-github-apps.png" alt-text="Screenshot shows the Installed GitHub Apps with Azure Boards and the Configure option.":::

	The Azure Boards configuration page opens. 

1. Scroll down to the **Repository access** section. 

1. Choose the option you want, **All repositories** or **Only select repositories**. 

	If you choose **Only select repositories**, select the repositories you want to participate in integration with Azure Boards. 

	:::image type="content" source="media/change-repo-access/choose-repositories.png" alt-text="Screenshot shows the Repository access, where you can choose selected repositories.":::

1. Select **Save**. 
 
## Suspend or uninstall Azure Boards integration 

1. Starting from step 2 in the previous procedure, scroll down to the **Danger zone** section.

	:::image type="content" source="media/change-repo-access/danger-zone.png" alt-text="Screenshot shows the Danger zone section, with options to suspend and uninstall.":::

1. To suspend the integration, choose **Suspend**. From the confirmation window, choose **OK** to confirm the suspension.

	:::image type="content" source="media/change-repo-access/suspend-confirmation-popup.png" alt-text="Screenshot shows the suspension confirmation dialog.":::
 
	To unsuspend the integration, choose **Unsuspend**.
 
1. To uninstall the Azure Boards app, choose **Uninstall**, and then choose **OK** from the popup confirmation window.

	:::image type="content" source="media/change-repo-access/uninstall-confirmation-popup.png" alt-text="Screenshot shows the uninstall confirmation dialog.":::

## Update Azure Boards-GitHub connections
 
If you change the repositories that the Azure Boards app for GitHub supports, you might get redirected to Azure Boards GitHub connections. A good practice is to remove the repositories in Azure Boards that can no longer connect to GitHub. For more information, see [Add or remove GitHub repositories](#add-remove-repos).

If you uninstall the Azure Boards app for GitHub, the following message displays in Azure Boards, **Project settings** > **GitHub** connections. Choose **Remove connection** to remove all previously made GitHub connections. For more information, see [Add or remove GitHub repositories](#add-remove-repos). 

:::image type="content" source="media/change-repo-access/boards-remove-connection.png" alt-text="Screenshot shows uninstalled Azure Boards GitHub app.":::

## Next steps

> [!div class="nextstepaction"]
> [Link GitHub commits, pull requests, and branches to work items](link-to-from-github.md) 

## Related content
 
- [Drive Git development from a work item](../backlogs/connect-work-items-to-git-dev-ops.md)
- [Change GitHub repository access, or suspend or uninstall the integration](change-azure-boards-app-github-repository-access.md)
- [Configure status badges to add to GitHub README files](configure-status-badges.md)
 
