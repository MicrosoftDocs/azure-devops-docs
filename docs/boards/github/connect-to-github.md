---
title: Connect a project in Azure DevOps Services with a GitHub repository  
titleSuffix: Azure Boards
description: Configure one or more GitHub repositories to integrate with Azure Boards 
ms.assetid: 
ms.prod: devops
ms.technology: devops-agile
ms.topic: quickstart
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 03/05/2019
---

# Connect Azure Boards to GitHub  

[!INCLUDE[temp](../_shared/version-vsts-plus-azdevserver-2019.md)] 
::: moniker range="azure-devops"

By connecting your Azure Boards project with GitHub.com repositories, you support linking between GitHub commits and pull requests to work items. You can use GitHub for software development while using Azure Boards to plan and track your work.  
::: moniker-end

::: moniker range="azure-devops-2019"

By connecting your Azure DevOps Server project with your GitHub Enterprise Server repositories, you support linking between GitHub commits and pull requests to work items. You can use GitHub Enterprise for software development while using Azure Boards to plan and track your work. 
::: moniker-end

[!INCLUDE[temp](../_shared/github-platform-support.md)]


## Prerequisites 

::: moniker range="azure-devops"
* You must connect to an Azure Boards or Azure DevOps project. If you don't have a project yet, [create one](../../boards/get-started/sign-up-invite-teammates.md). 
* You must be a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) and the project's [Contributors group](../../organizations/security/add-users-team-project.md). If you created the project, then you have permissions. 
* You must be an administrator or owner of the GitHub repository you'll be connecting to.  

> [!IMPORTANT]  
> You can connect to multiple repositories so long as you are an administrator for those repositories. 
::: moniker-end

::: moniker range="azure-devops-2019"

* You must connect to an Azure Boards or Azure DevOps project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md). 
* You must be a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) and the project's [Contributors group](../../organizations/security/add-users-team-project.md). If you created the project, then you have permissions. 
* You must be an administrator of the GitHub Enterprise Server you'll be connecting to. 
* You must decide the credentials you want to use to connect to your GitHub Enterprise Server. 
	- **OAuth**. This is the recommended authentication method. 
	- **Personal access token**. 
	- **User account and password**. 

::: moniker-end

::: moniker range="azure-devops"
## Add a GitHub connection and repository  

0. Sign into Azure Boards. 

0. Choose (1) **Project Settings**, choose (2) **GitHub connections** and then (3) **Connect your GitHub Account**.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Integrations](_img/github/open-project-settings-github-connections.png)   

0. Enter your GitHub account credentials. Choose an account for which you are an administrator for the repositories you want to connect to. 

	> [!div class="mx-imgBorder"]  
	> ![GitHub sign in dialog](_img/github/github-dialog-sign-in.png)  

0. If you have enabled two-factor authentication, enter the authentication code that GitHub sent you and choose **Verify**. 

	> [!div class="mx-imgBorder"]  
	> ![GitHub two-factor authentication dialog](_img/github/github-dialog-two-factor.png)  

0. Review the GitHub authorization dialog that appears which indicates the information you'll allow Azure Boards to access from GitHub. Choose **Authorize AzureBoards** when ready.

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Integrations](_img/github/git-dialog-authorize-boards.png)  

0. In the Add GitHub repositories dialog, you'll see the list of repositories for which you are an administrator. 

	> [!div class="mx-imgBorder"]  
	> ![Add GitHub repositories dialog](_img/github/add-all-repos.png)  

	 Check the ones that you want to add and then choose **Save**. When done, you should see the new connection with the selected repository listed.  

	> [!div class="mx-imgBorder"]  
	> ![List of GitHub repositories connected](_img/github/repos-list.png)   

> [!TIP]   
> We recommend that you only connect a GitHub repo to projects defined in a single Azure DevOps organization. Connecting the same GitHub repo to projects defined in two or more Azure DevOps organizations can lead to unexpected AB# mention linking. For details, see [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md#integrate-repo-to-several-organizations). 

::: moniker-end


::: moniker range="azure-devops"

## Use a Personal Access Token (PAT) 

We recommend that you use OAuth to connect to your GitHub repository. However, if you need to use a PAT, you can by following these procedures. 

> [!TIP]  
> When creating your GitHub PAT, make sure that you include these scopes: `repo, read:user, user:email, admin:repo_hook`. 

0. To choose a PAT when connecting a GitHub repository, choose ![plus icon ](../../_img/icons/blue-add.png) **New Connection** and then choose the **Click here** link. 

	> [!div class="mx-imgBorder"]  
	> ![Ad GitHub repository, choose personal access token](_img/github/add-github-connection-dialog-choose-pat.png)   

	To create a GitHub PAT, go to [GitHub Developer Settings>Personal access tokens](https://github.com/settings/tokens). 

0. Enter the PAT and choose **Connect**. 

	> [!div class="mx-imgBorder"]  
	> ![Ad GitHub repository, choose personal access token](_img/github/add-github-connection-dialog-pat.png)  

::: moniker-end


::: moniker range="azure-devops-2019"

## Register Azure DevOps Server using OAuth

If you plan to use OAuth to connect Azure DevOps Server with your GitHub Enterprise Server, do that now. For details, see [Creating an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/).

###  Register application in GitHub 

0. Sign into the web portal for your GitHub Enterprise server.  

	> [!div class="mx-imgBorder"]  
	> ![Sign into GitHub Enterprise server](_img/github-ent/sign-in-to-ghe.png)  

0. Open **Settings>Developer settings>Oauth Apps** and choose **New OAuth App**. 

	> [!div class="mx-imgBorder"]  
	> ![Sign into GitHub Enterprise server](_img/github-ent/ghe-settings-dev-oauth.png)  

0. Fill out the form to register your Azure DevOps Server application.  

	For the **Homepage URL**, specify the **Public URL** of your project collection. You can find this URL by [opening the Azure DevOps Administration Console](/azure/devops/server/admin/open-admin-console) and viewing the **Application Tier** node. 

	> [!div class="mx-imgBorder"]  
	> ![Azure DevOps Server Administration Console, Application Tier](_img/github-ent/app-tier-find-public-url.png)  

	For the **Authorization callback URL**, use the following pattern to construct the URL. 

	`{Azure DevOps Server Public Url}/{Collection Name}/ _admin/oauth2/callback`

	For example: 

	`http://contoso/DefaultCollection/_admin/oauth2/callback`

	Or, 

	`https://tfs.contoso.com/MyCollection/_admin/oauth2/callback`

	> [!div class="mx-imgBorder"]  
	> ![Register your Azure DevOps Server project](_img/github-ent/ghe-register-app.png)  

0. Choose **Register application**.

0. Upon success, you'll see a page that provides the **Client ID** and **Client Secret** for your registered OAuth application. 

	> [!div class="mx-imgBorder"]  
	> ![Sign into GitHub Enterprise server](_img/github-ent/ghe-register-app-success.png)  


### Register your OAuth configuration in Azure DevOps Server

0. Sign into the web portal for your Azure DevOps Server. 

0. Add the GitHub Enterprise Oauth configuration to your Azure DevOps Server collection. 

0. Open **Admin settings>Oauth configurations**, and choose **Add Oauth configuration**.  

	> [!div class="mx-imgBorder"]  
	> ![Admin Settings>OAuth configurations](_img/github-ent/open-admin-settings-server-oauth-add.png)  

0. Fill in the form that appears, and then choose **Create**.

	> [!div class="mx-imgBorder"]  
	> ![OAuth configuration dialog](_img/github-ent/add-oauth-configuration.png)  

::: moniker-end


::: moniker range="azure-devops-2019"

## Connect Azure DevOps Server to GitHub Enterprise Server

0. Choose the ![ ](/azure/devops/_img/icons/project-icon.png) Azure DevOps logo to open **Projects**, and then choose the Azure Boards project you want to configure to connect to your GitHub Enterprise repositories.

0. Choose (1) **Project Settings**, choose (2) **GitHub connections** and then (3) **Connect your GitHub Enterprise account**.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Integrations](_img/github-ent/open-project-settings-github-connections.png)   

	Or, choose a **personal access token** or **username and password**, if you are choosing to make your connection with those credentials.

	To create a PAT, see [Creating a personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

	> [!TIP]  
	> When creating your GitHub PAT, make sure that you include these scopes: `repo, admin:repo_hook, read:user, user:email`. 

	**Connect using OAuth**  

	Choose the configuration that you set up in step 1, and then choose **Connect**. 

	> [!div class="mx-imgBorder"]  
	> ![New GitHub Enterprise connection, OAuth dialog](_img/github-ent/new-github-ent-connect-oauth.png)  

	**Connect using a Personal Access Token**  

	Enter the URL for your GitHub Enterprise server and the **Personal access token** credentials recognized by that server. And then choose **Connect**.

	> [!div class="mx-imgBorder"]  
	> ![GitHub sign in dialog](_img/github-ent/ads-add-ghe-pat.png)  

	**Connect using a Username and Password**  

	Enter the URL for your GitHub Enterprise server and the administrator account credentials recognized by that server. And then choose **Connect**.

	> [!div class="mx-imgBorder"]  
	> ![GitHub sign in dialog](_img/github-ent/ads-add-ghe-user-name.png)  

0. The dialog lists all repositories for which you have GitHub administration rights. You can toggle between **Mine** and  **All** to determine if others appear, and then check the ones that you want to add. Choose **Save** when done.

	> [!div class="mx-imgBorder"]  
	> ![New GitHub Enterprise connection, OAuth dialog](_img/github-ent/ads-add-ghe-repositories.png)  

::: moniker-end

## Add or remove repositories, or remove a connection 

0. To add or remove repositories, open the ![ ](../../_img/icons/actions-icon.png) for the connection and choose **Add** repositories or **Remove** repositories from the menu. 

	> [!div class="mx-imgBorder"]  
	> ![Add or remove GitHub repositories](_img/github/repo-actions-menu.png)  

0. To remove all repositories and the connection, choose the **Remove connection** option. Then, choose **Remove** to confirm.

	> [!div class="mx-imgBorder"]  
	> ![Confirm remove GitHub connection dialog](_img/github/remove-connection-confirmation.png)  

## Resolve connection issues

See [Troubleshoot GitHub repository connection](troubleshoot-github-connection.md).

## Try this next
> [!div class="nextstepaction"]
> [Link GitHub commits and pull requests to work items](link-to-from-github.md) 


## Related articles

- [What is Azure Boards?](../../boards/get-started/what-is-azure-boards.md)
- [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md)
