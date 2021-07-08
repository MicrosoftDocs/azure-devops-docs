---
title: Add or remove GitHub repositories 
titleSuffix: Azure Boards
description: Add or remove GitHub repositories or remove GitHub connection 
ms.technology: devops-agile
ms.topic: how-to
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 07/06/2021
---

# Add or remove GitHub repositories 

[!INCLUDE[temp](../includes/version-vsts-plus-azdevserver-2019.md)] 

Once you make a connection to a GitHub repository from Azure Boards, you can add or remove repositories under the same GitHub account or organization. Or, you can completely remove the connection to all repositories. 

To manage which GitHub repositories can participate in Azure Boards integration, see [Change GitHub repository access, or suspend or uninstall the integration](change-azure-boards-app-github-repository-access.md). 
 

[!INCLUDE[temp](../includes/github-platform-support.md)]


## Prerequisites 
 
* To add repositories to a connection, you must be the person who created the connection.  
* To remove repositories or remove a connection, you must be the person who created the connection or belong to the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md).  
* To add repositories, you must be an administrator or owner of the GitHub repository you'll connect to. You can connect to multiple GitHub repositories so long as you are an administrator for those repositories.  

## Open Project Settings>GitHub Connections

1. Sign into the web portal for your Azure Boards project.  

1. Choose (1) **Project Settings**> (2) **GitHub connections**.   
	::: moniker range="azure-devops"
	:::image type="content" source="media/connect-cloud/open-project-settings-github-connections.png" alt-text="Screenshot of open Project Settings>GitHub connections.":::
	::: moniker-end
	::: moniker range="azure-devops-2019 || azure-devops-2020"
	:::image type="content" source="media/github-ent/open-project-settings-github-connections-2020-1.png" alt-text="Screenshot of open Project Settings>GitHub connections.":::  
	::: moniker-end

## Add or remove repositories, or remove a connection 


> [!TIP]    
> If you encounter a problem with a connection, we recommend that you remove the connection and start over with a new connection.  



::: moniker range=">= azure-devops-2020"
1. To add or remove repositories, choose  :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More options** for the connection and choose **Add repositories** or **Remove repositories** from the menu. 

	:::image type="content" source="media/connect-cloud/connection-menu.png" alt-text="Screenshot of GitHub connection menu of More options.":::
::: moniker-end
::: moniker range="azure-devops-2019"
1. To add or remove repositories, open the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the connection and choose **Add** repositories or **Remove repositories** from the menu. 

	> [!div class="mx-imgBorder"]  
	> ![Add or remove GitHub repositories](media/github/repo-actions-menu.png)  
::: moniker-end
1. To remove all repositories and the connection, choose the **Remove connection** option. Then, choose **Remove** to confirm.

	> [!div class="mx-imgBorder"]  
	> ![Confirm remove GitHub connection dialog](media/github/remove-connection-confirmation.png)  



## Try this next

> [!div class="nextstepaction"]
> [Change GitHub repository access, or suspend or uninstall the integration](change-azure-boards-app-github-repository-access.md)


## Related articles
- [Azure Boards-GitHub integration](index.md)
- [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md)