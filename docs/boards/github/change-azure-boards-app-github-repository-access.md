---
title: Change Azure Boards app for GitHub repository access 
titleSuffix: Azure Boards
description: Change the Azure Boards app GitHub repository access from all access or select repository access. 
ms.technology: devops-agile
ms.topic: how-to
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 07/06/2021
---

# Change GitHub repository access, or suspend or uninstall the integration  

[!INCLUDE[temp](../includes/version-vsts-plus-azdevserver-2019.md)] 

Once you [install the Azure Boards app for GitHub](install-github-app.md), you can change the configuration, suspend operations, or uninstall the app. To learn more about Azure Boards and GitHub, see [GitHub integration overview](index.md). 

[!INCLUDE[temp](../includes/github-platform-support.md)]


## Prerequisites  

The procedures provided in this article only apply when you've installed the Azure Boards app for GitHub. For details, see [Install and configure the Azure Boards app for GitHub](install-github-app.md).

* To manage the Azure Boards integration, you must be the owner or administrator of the GitHub organization. You can connect to multiple GitHub repositories so long as you are an administrator for those repositories.  


## Change repository access

1. Sign into the web portal for your GitHub organization and open **Account settings**. 

	`https://github.com/organizations/fabrikam-fiber/settings/profile` 

1. Choose **Installed GitHub Apps** and then **Configure** next to **Azure Boards**.    
	:::image type="content" source="media/change-repo-access/open-installed-github-apps.png" alt-text="Screenshot of open Organization account, Installed GitHub Apps, Azure Boards, Configure.":::

	The Azure Boards configuration page opens. 

1. Scroll down to the **Repository access** section. 

1. Choose the option you want, **All repositories** or **Only select repositories**. 

	If you choose **Only select repositories**, select the repositories you want to participate in integration with Azure Boards. 

	:::image type="content" source="media/change-repo-access/choose-repositories.png" alt-text="Screenshot of Repository access, choose Only select repositories.":::

1. Choose **Save** when done. 
 
## Suspend or uninstall Azure Boards integration 

1. Starting from step 2 in the previous procedure, scroll down to the **Danger zone** section.

	:::image type="content" source="media/change-repo-access/danger-zone.png" alt-text="Screenshot of Azure Boards configuration, Danger zone section.":::

1. To suspend the integration, choose **Suspend**. From the popup confirmation window, choose **OK** to confirm the suspension.

	:::image type="content" source="media/change-repo-access/suspend-confirmation-popup.png" alt-text="Screenshot of suspension confirmation.":::
 
	To unsuspend the integration, choose **Unsuspend**.  
 
1. To uninstall the Azure Boards app, choose **Uninstall**, and then choose **OK** from the popup confirmation window.  

	:::image type="content" source="media/change-repo-access/uninstall-confirmation-popup.png" alt-text="Screenshot of uninstall confirmation.":::

## Update Azure Boards GitHub connections
 
If you change the repositories that the Azure Boards app for GitHub supports, you may be redirected to Azure Boards GitHub connections. A good practice is to remove the respositories in Azure Boards that can no longer connect to GitHub. For details, see [Add or remove GitHub repositories](add-remove-repositories.md).

If you uninstall the Azure Boards app for GitHub, you'll see the following message in Azure Boards, **Project Settings>GitHub** Connections. Choose **Remove connection** to remove all GitHub connections that have been previously made. See also, [Add or remove GitHub repositories](add-remove-repositories.md). 

:::image type="content" source="media/change-repo-access/boards-remove-connection.png" alt-text="Screenshot of uninstalled Azure Boards GitHub app.":::


## Try this next

> [!div class="nextstepaction"]
> [Add or remove GitHub repositories](add-remove-repositories.md) 


## Related articles
 
- [Connect Azure Boards to GitHub](/azure/devops/boards/github/connect-to-github?view=azure-devops&preserve-view=true)
- [Connect Azure DevOps Server to GitHub Enterprise Server](/azure/devops/boards/github/connect-on-premises-to-github?view=azure-devops-2020&preserve-view=true)
- [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md)