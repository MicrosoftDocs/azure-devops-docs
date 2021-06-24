---
title: Connect a project to a GitHub repository
titleSuffix: Azure Boards
description: Configure one or more GitHub repositories to integrate with Azure Boards 
ms.technology: devops-agile
ms.topic: how-to
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 06/24/2021
---

# Connect Azure Boards to GitHub  

**Azure Boards** | [**Azure DevOps Server 2020 | Azure DevOps Server 2019**](connect-on-premises-to-github.md)

By connecting your Azure Boards project with GitHub.com repositories, you support linking between GitHub commits and pull requests to work items. You can use GitHub for software development while using Azure Boards to plan and track your work.  

When you make the connection from Azure Boards, the list of GitHub repositories correspond to ones that you allow Azure Boards to access. You can limit which repositories Azure Boards can access overall, and limit what a particular project can access or split the management of work across different Azure Boards projects.

> [!NOTE]   
> Azure Boards and Azure DevOps Services support integration with GitHub.com and GitHub Enterprise Server repositories. If you want to connect from an on-premises Azure DevOps Server, see [Connect Azure DevOps Server to GitHub Enterprise Server](connect-on-premises-to-github.md).


## Prerequisites 

* You must connect to an Azure Boards or Azure DevOps project. If you don't have a project yet, [create one](../../boards/get-started/sign-up-invite-teammates.md). 
* You must be a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) and the project's [Contributors group](../../organizations/security/add-users-team-project.md). If you created the project, then you have permissions. 
* You must be an administrator or owner of the GitHub repository you'll be connecting to.  

> [!IMPORTANT]  
> You can connect to multiple GitHub repositories so long as you are an administrator for those repositories. 


## Authentication options

The following authentication options are supported based on the GitHub platform you want to connect to.  

:::row:::
   :::column span="":::
      **GitHub.com**
   :::column-end:::
   :::column span="":::
      **GitHub Enterprise Server**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      - [GitHub.com user account (Recommended)](#server-github-ent-username)
      - [Personal access token (PAT)](#github-pat)
   :::column-end:::
   :::column span="":::
      - [OAuth (preferred, registration required)](#server-github-ent-oauth-register) 
      - [PAT](#server-github-ent-pat) 
      - [Username plus password](#server-github-ent-username) 
   :::column-end:::
:::row-end:::
 

 
## Add a GitHub connection    

1. Sign into Azure Boards. 

1. Choose (1) **Project Settings**> (2) **GitHub connections**.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Integrations](media/github/open-project-settings-github-connections.png)   

1.	Choose Connect your GitHub account. 

	:::image type="content" source="media/connect-cloud/connect-github-account-first-time.png" alt-text="Screenshot of first time connecting with GitHub credentials.":::

	If connecting using PAT, see [Add a GitHub connection using PAT](#github-pat). If connecting to a GitHub Enterprise Server, see [Register Azure DevOps in GitHub as an OAuth App](#server-github-ent-oauth-register).

1. 	If this is your first time connecting to GitHub from Azure Boards, you will be asked to sign in using your GitHub credentials. Choose an account for which you are an administrator for the repositories you want to connect to. 

	:::image type="content" source="media/connect-cloud/choose-github-org.png" alt-text="Screenshot of single sign-on to GitHub organization.":::


	> [!div class="mx-imgBorder"]  
	> ![GitHub sign in dialog](media/github/github-dialog-sign-in.png)  
	If you have enabled two-factor authentication, enter the authentication code that GitHub sent you and choose <strong>Verify</strong>. 

	> [!div class="mx-imgBorder"]  
	> ![GitHub two-factor authentication dialog](media/github/github-dialog-two-factor.png)  

	Otherwise, the system will automatically recognize your GitHub organization as your GitHub account has previously been associated with your Azure DevOps Services account. 

1. The **Add GitHub Repositories** dialog automatically displays and selects all GitHub.com repositories for which you are an administrator. Unselect any repositories that you don't want to participate in the integration. 

	> [!div class="mx-imgBorder"]  
	> ![Choose your GitHub repositories.](media/github/add-github-repos.png)  

	> [!TIP]   
	> We recommend that you only connect a GitHub repo to projects defined in a single Azure DevOps organization. Connecting the same GitHub repo to projects defined in two or more Azure DevOps organizations can lead to unexpected AB# mention linking. For details, see [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md#integrate-repo-to-several-organizations). 

1. When done, choose **Save**.

1. Review the GitHub page that displays and then choose **Approve, Install, & Authorize**.

	> [!div class="mx-imgBorder"]  
	> ![Confirm your GitHub repositories](media/github/approve-install-auth-azure-boards-from-github.png)  

1. Provide your GitHub password to confirm.

1.	When done, you should see the new connection with the selected repositories listed.

	> [!div class="mx-imgBorder"]  
	> ![GitHub repositories connected](media/github/repos-list-s154.png)  




<a id="github-oauth" />
<a id="github-pat" />


## Add a GitHub connection using PAT   

We recommend that you use OAuth to connect to your GitHub repository. However, if you need to use a PAT, you can by following these procedures. 

> [!TIP]  
> When creating your GitHub PAT, make sure that you include these scopes: `repo, read:user, user:email, admin:repo_hook`. 

1. To choose a PAT when connecting a GitHub repository, choose ![plus icon ](../../media/icons/blue-add.png) <strong>New Connection</strong> and then choose the <strong>Click here</strong> link. 

	> [!div class="mx-imgBorder"]  
	> ![Add GitHub repository, choose personal access token](media/github/add-github-connection-dialog-choose-pat.png)   

	To create a GitHub PAT, go to [GitHub Developer Settings>Personal access tokens](https://github.com/settings/tokens). 

1. Enter the PAT and choose <strong>Connect</strong>. 

	> [!div class="mx-imgBorder"]  
	> ![Enter the PAT and choose Connect.](media/github/add-github-connection-dialog-pat.png)  



<a id="server-github-ent-oauth-register" />

## Register Azure DevOps in GitHub as an OAuth App

If you plan to use OAuth to connect Azure DevOps Services or Azure DevOps Server with your GitHub Enterprise Server, you first need to register the application as an OAuth App. For details, see [Creating an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/).


<a id="register-services-oauth" />


###  Register Azure DevOps Services   

1. Sign into the web portal for your GitHub Enterprise server.  

	> [!div class="mx-imgBorder"]  
	> ![Sign into GitHub Enterprise server](media/github-ent/sign-in-to-ghe.png)  

1. Open <strong>Settings>Developer settings>Oauth Apps</strong> and choose <strong>New OAuth App</strong>. 

	> [!div class="mx-imgBorder"]  
	> ![Open Settings>Developer settings>Oauth Apps and choose New OAuth App.](media/github-ent/ghe-settings-dev-oauth.png)  

2. Fill out the form to register your Azure DevOps Server application.  

	For the <strong>Homepage URL</strong>, specify the <strong>Organization URL</strong> of your organization.  
	For the <strong>Authorization callback URL</strong>, use the following pattern to construct the URL.  

	`{Azure DevOps Services Organization URL}/_admin/oauth2/callback`

	For example: 

	`https://dev.azure.com/fabrikam/_admin/oauth2/callback`

	> [!div class="mx-imgBorder"]  
	> ![Register your Azure DevOps Server project](media/github-ent/ghe-register-app-services.png)  

3. Choose <strong>Register application</strong>.

4. Upon success, you'll see a page that provides the <strong>Client ID</strong> and <strong>Client Secret</strong> for your registered OAuth application. 

	> [!div class="mx-imgBorder"]  
	> ![Client ID and Client Secret for your registered OAuth application.](media/github-ent/ghe-register-app-success.png)  

 

<a id="register-services-github-ent-oauth" />


### Register your OAuth configuration in Azure DevOps Services

1. Sign into the web portal for Azure DevOps Services. 

2. Add the GitHub Enterprise Oauth configuration to your organization. 

3. Open <strong>Organization settings>Oauth configurations</strong>, and choose <strong>Add Oauth configuration</strong>.  

	> [!div class="mx-imgBorder"]  
	> ![Organization Settings>OAuth configurations](media/github-ent/add-oauth-configuration-organization.png)  

4. Fill in the form that appears, and then choose <strong>Create</strong>.

	> [!div class="mx-imgBorder"]  
	> ![OAuth configuration dialog](media/github-ent/add-oauth-configuration.png)  


<a id="github-ent-oauth-services" />

## Connect Azure DevOps Services to GitHub Enterprise Server

> [!IMPORTANT]  
> To connect Azure DevOps Services to your GitHub Enterprise Server, your GitHub Enterprise Server must be sufficiently accessible from the Internet. Make sure Azure DNS can resolve your GitHub Enterprise Server name and your firewall allows access from Azure Data Center IP addresses. To determine the IP address range, see [Microsoft Azure Datacenter IP Ranges](https://www.microsoft.com/download/details.aspx?id=41653). A common error message encountered when connectivity issues exist is: 
> 
> *The remote name could not be resolved: 'github-enterprise-server.contoso.com'*
> 
> If you encounter this error, check that your server is accessible. For more information, see [Azure DNS FAQ](/azure/dns/dns-faq). 

1. Choose the :::image type="icon" source="/azure/devops/media/icons/project-icon.png" border="false"::: Azure DevOps logo to open <strong>Projects</strong>, and then choose the Azure Boards project you want to configure to connect to your GitHub Enterprise repositories.

1. Choose (1) <strong>Project Settings</strong>, choose (2) <strong>GitHub connections</strong> and then (3) <strong>Click here</strong> to connect to your GitHub Enterprise organization.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>GitHub connections](media/github-ent/open-project-settings-github-ent-connections-services.png)   

	Choose from one of the following options&mdash;<strong>OAuth</strong>, <strong>Personal Access Token</strong>, <strong>Username and Password</strong>&mdash;based on the credentials you've chosen. 

	> [!div class="mx-imgBorder"]  
	> ![Select authentication method](media/github-ent/select-authentication-method.png) 

	To create a PAT, see [Creating a personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

	> [!TIP]  
	> When creating your GitHub Enterprise Server PAT, make sure that you include these scopes: `repo, admin:repo_hook, read:user, user:email`. 

	### Connect using OAuth  

	Choose the configuration that you set up in [Step 4 of Register your OAuth configuration in Azure DevOps Services](#register-services-github-ent-oauth), and then choose <strong>Connect</strong>. 

	> [!div class="mx-imgBorder"]  
	> ![New GitHub Enterprise connection, OAuth dialog](media/github-ent/new-github-ent-connect-oauth.png)  

	<a id="server-github-ent-pat" />

	### Connect using a Personal Access Token  

	Enter the URL for your GitHub Enterprise server and the <strong>Personal access token</strong> credentials recognized by that server. And then choose <strong>Connect</strong>.

	> [!div class="mx-imgBorder"]  
	> ![Sign in with personal access token.](media/github-ent/ads-add-ghe-pat.png)  

	<a id="server-github-ent-username" />

	### Connect using a Username and Password   

	Enter the URL for your GitHub Enterprise server and the administrator account credentials recognized by that server. And then choose <strong>Connect</strong>.

	> [!div class="mx-imgBorder"]  
	> ![Sign in with username and password.](media/github-ent/ads-add-ghe-user-name.png)  

2. The dialog lists all repositories for which you have GitHub administration rights. You can toggle between <strong>Mine</strong> and  <strong>All</strong> to determine if others appear, and then check the ones that you want to add. Choose <strong>Save</strong> when done.

	> [!div class="mx-imgBorder"]  
	> ![Choose repositories to add.](media/github-ent/ads-add-ghe-repositories.png)  


## Add or remove repositories, or remove a connection 

1. To add or remove repositories, open the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the connection and choose <strong>Add</strong> repositories or <strong>Remove</strong> repositories from the menu. 

	> [!div class="mx-imgBorder"]  
	> ![Add or remove GitHub repositories](media/github/repo-actions-menu.png)  

1. To remove all repositories and the connection, choose the <strong>Remove connection</strong> option. Then, choose <strong>Remove</strong> to confirm.

	> [!div class="mx-imgBorder"]  
	> ![Confirm remove GitHub connection dialog](media/github/remove-connection-confirmation.png)  

## Resolve connection issues

See [Troubleshoot GitHub repository connection](troubleshoot-github-connection.md).

## Try this next

> [!div class="nextstepaction"]
> [Link GitHub commits and pull requests to work items](link-to-from-github.md) 


## Related articles

- [What is Azure Boards?](../../boards/get-started/what-is-azure-boards.md)
- [Install and configure the Azure Boards app for GitHub](install-github-app.md)
- [Configure status badges to add to GitHub README files](configure-status-badges.md)
- [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md)



<!---
> [!NOTE]   
> We recommend that you use the [Azure Boards app for GitHub](install-github-app.md) to configure and manage your connections to GitHub.com. The app provides a more streamlined configuration experience and has the advantage of authenticating and operating as the app rather than an individual. Once you have configured your connection, you can manage the connected repositories either from Azure Boards or GitHub.com. 

-->


<!---

## Add a GitHub connection using OAuth 

1. Sign into Azure Boards. 

1. Choose (1) <strong>Project Settings</strong>, choose (2) <strong>GitHub connections</strong> and then (3) <strong>Connect your GitHub Account</strong>.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Integrations](media/github/open-project-settings-github-connections.png)   

	If connecting using PAT, see [Add a GitHub connection using PAT](#github-pat).
	If connecting to a GitHub Enterprise Server, see [Register Azure DevOps in GitHub as an OAuth App](#server-github-ent-oauth-register).

2. Enter your GitHub account credentials. Choose an account for which you are an administrator for the repositories you want to connect to. 

	> [!div class="mx-imgBorder"]  
	> ![GitHub sign in dialog](media/github/github-dialog-sign-in.png)  
3. If you have enabled two-factor authentication, enter the authentication code that GitHub sent you and choose <strong>Verify</strong>. 

	> [!div class="mx-imgBorder"]  
	> ![GitHub two-factor authentication dialog](media/github/github-dialog-two-factor.png)  

4. Review the GitHub authorization dialog that appears which indicates the information you'll allow Azure Boards to access from GitHub. Choose <strong>Authorize AzureBoards</strong> when ready.

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Integrations](media/github/git-dialog-authorize-boards.png)  

5. In the Add GitHub repositories dialog, you'll see the list of repositories for which you are an administrator. 

	> [!div class="mx-imgBorder"]  
	> ![Add GitHub repositories dialog](media/github/add-all-repos.png)  

	 Check the ones that you want to add and then choose <strong>Save</strong>. When done, you should see the new connection with the selected repository listed.  

	> [!div class="mx-imgBorder"]  
	> ![List of GitHub repositories connected](media/github/repos-list.png)   

> [!TIP]   
> We recommend that you only connect a GitHub repo to projects defined in a single Azure DevOps organization. Connecting the same GitHub repo to projects defined in two or more Azure DevOps organizations can lead to unexpected AB# mention linking. For details, see [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md#integrate-repo-to-several-organizations). 


-->