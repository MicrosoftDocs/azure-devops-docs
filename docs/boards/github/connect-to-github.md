---
title: Connect an Azure Boards or Azure DevOps project to a GitHub repository
titleSuffix: Azure Boards
description: Configure one or more GitHub repositories to integrate with Azure Boards 
ms.service: azure-devops-boards
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 07/03/2023
---

# Connect Azure Boards to GitHub (cloud) 

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)] 
 
Use GitHub.com repositories for your software development and your Azure Boards project to plan and track your work. Connect your project and repo so your GitHub commits and pull requests get linked to your work items in Azure Boards. 

> [!NOTE]   
> Azure Boards and Azure DevOps Services support integration with GitHub.com and GitHub Enterprise Server repositories. If you want to connect from an on-premises Azure DevOps Server, see [Connect Azure DevOps Server to GitHub Enterprise Server](connect-on-premises-to-github.md).

## Prerequisites 

* You must have an Azure Boards or Azure DevOps project. If you don't have a project yet, [create one](../get-started/sign-up-invite-teammates.md). 
* You must be a member of the [**Project Administrators** group](../../organizations/security/change-project-level-permissions.md). If you created the project, you have permissions. 
* You must be an administrator or owner of the GitHub repository to connect to. You can connect to multiple GitHub repositories as long as you're an administrator for those repositories.   

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
 
> [!NOTE]
> If you choose to connect Github with PAT, make sure you configure single sign-on (SSO) for the PAT on your GitHub account. This is needed to be able to get a list of repositories of an organization with Security Assertion Markup Language (SAML) SSO authentication configured.
 
## Connect Azure Boards to a GitHub repo.

1. Sign into your Azure DevOps project.  

2. Select **Project settings** > **GitHub connections**.   

	:::image type="content" source="media/connect-cloud/open-project-settings-github-connections.png" alt-text="Screenshot of open Project Settings>GitHub connections.":::

1.	If it's the first time you make a connection from the project, choose **Connect your GitHub account** to use your GitHub account credentials. 

	:::image type="content" source="media/connect-cloud/connect-github-account-first-time.png" alt-text="Screenshot of first time connecting with GitHub credentials.":::

	Otherwise, choose :::image type="icon" source="../../media/icons/add-light-icon.png" border="false"::: **New connection**, and select your authentication method from the **New Connection** dialog.

	When you connect using your GitHub account, use your GitHub account credentials to authenticate. To use PAT, see [Add a GitHub connection using PAT](#github-pat). To connect to a GitHub Enterprise Server, see [Register Azure DevOps in GitHub as an OAuth App](#server-github-ent-oauth-register).

## Add a GitHub connection with GitHub credentials 

You can connect up to 250 GitHub repositories to an Azure Boards project. 

1. 	If it's your first time connecting to GitHub from Azure Boards, you're asked to sign in using your GitHub credentials. Choose an account for which you're a repository administrator. 

2. Choose the GitHub account or organization that you want to connect. Only those organizations that you own or are an administrator for are listed.  

	If all repositories for an organization have already been connected to Azure Boards, you see the following message. 

	:::image type="content" source="media/connect-cloud/message-all-repositories-already-connected.png" alt-text="Screenshot of message where no more repositories exist to connect."::: 

3. Enter your GitHub credentials. If you have two-factor authentication enabled, enter the authentication code that GitHub sent you and choose **Verify**. Otherwise, the system automatically recognizes your GitHub organization as your GitHub account has previously been associated with your Azure DevOps Services account. 

<a id="choose-repositories" /> 

### Choose the repositories 

Once you're authenticated, you can select the repositories you want to connect. 

1. The **Add GitHub Repositories** dialog automatically displays and selects all GitHub.com repositories for which you're an administrator for the organization you selected. Unselect any repositories that you don't want to participate in the integration. 

   :::image type="content" source="media/github/add-github-repos.png" alt-text="Screenshot showing GitHub repos.":::

   > [!TIP]   
   > We recommend that you only connect a GitHub repo to projects defined in a single Azure DevOps organization. Connecting the same GitHub repo to projects defined in two or more Azure DevOps organizations can lead to unexpected **AB#** mention linking. For more information, see [Troubleshoot GitHub & Azure Boards integration](connect-to-github.md#resolve-connection-issues). 

	If all repositories are connected already to the current or other organization, then the following message displays. 

	:::image type="content" source="media/connect-cloud/message-all-repositories-already-connected.png" alt-text="Screenshot of message where no more repositories exist to connect."::: 

2. When you're done, select **Save**.

<a id="confirm-connection" /> 

### Confirm the connection 

1. Review the GitHub page that displays and then choose **Approve, Install, & Authorize**.

   :::image type="content" source="media/github/approve-install-auth-azure-boards-from-github.png" alt-text="Screenshot showing confirming GitHub repositories.":::

2. Provide your GitHub password to confirm.

3.	When you're done, you should see the new connection with the selected repositories listed.

   :::image type="content" source="media/github/repos-list-s154.png" alt-text="Screenshot of list of connected repositories.":::

To change the configuration or manage the Azure Boards app for GitHub, see  [Change repository access to Azure Boards](change-azure-boards-app-github-repository-access.md). 

<a id="github-oauth" />
<a id="github-pat" />

## Add a GitHub connection using PAT   

We recommend that you use your GitHub account credentials to connect to your GitHub repository. However, if you need to use a PAT, do so by following these procedures. 

> [!TIP]  
> When you create your GitHub PAT, make sure that you include these scopes: `repo, read:user, user:email, admin:repo_hook`. 

1. Choose **Personal Access Token**. 

   :::image type="content" source="media/connect-cloud/connect-with-pat.png" alt-text="Screenshot of New GitHub connection dialog, choosing Personal Access Token.":::

	To create a GitHub PAT, go to [GitHub Developer Settings > Personal access tokens](https://github.com/settings/tokens). 

2. Enter the PAT and choose **Connect**. 

   :::image type="content" source="media/github/add-github-connection-dialog-pat.png" alt-text="Screenshot showing entered PAT.":::

3. Choose the repositories you want connected to the project by following the procedures outlined in [Choose the repositories](#choose-repositories) earlier in this article. 

4. If it's the first time connecting to a GitHub account or organization from Azure Boards, you also must install the Azure Boards app for GitHub. [Confirm the connection](#confirm-connection) earlier in this article. 

<a id="server-github-ent-oauth-register" />

## Register Azure DevOps in GitHub as an OAuth App

If you plan to use OAuth to connect Azure DevOps with your GitHub Enterprise Server, you first need to register the application as an OAuth App. For more information, see [Create an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/).

<a id="register-services-oauth" />

###  Register Azure DevOps Services   

1. Sign into the web portal for your GitHub Enterprise server.  

   :::image type="content" source="media/github-ent/sign-in-to-ghe.png" alt-text="Screenshot of sign in for GitHub Enterprise server.":::

2. Open **Settings** > **Developer settings** > **Oauth Apps** > **New OAuth App**. 

   :::image type="content" source="media/github-ent/ghe-settings-dev-oauth.png" alt-text="Screenshot showing sequence for New OAuth App.":::

3. Enter information to register your application.  

	For the <strong>Homepage URL</strong>, specify the <strong>Organization URL</strong> of your organization.  
	For the <strong>Authorization callback URL</strong>, use the following pattern to construct the URL.  

	`{Azure DevOps Services Organization URL}/_admin/oauth2/callback`

	For example: 

	`https://dev.azure.com/fabrikam/_admin/oauth2/callback`

   :::image type="content" source="media/github-ent/ghe-register-app-services.png" alt-text="Screenshot showing app to register.":::

4. Select **Register application**.

5. The **Client ID** and **Client Secret** for your registered OAuth application appear. 

   :::image type="content" source="media/github-ent/ghe-register-app-success.png" alt-text="Screenshot of Client ID and Client Secret for the registered OAuth application.":::

<a id="register-services-github-ent-oauth" />

### Register your OAuth configuration in Azure DevOps Services

1. Sign into the web portal for Azure DevOps Services. 

2. Add the GitHub Enterprise Oauth configuration to your organization. 

3. In **Organization settings**, select **Oauth configurations** > **Add Oauth configuration**.  

   :::image type="content" source="media/connect-cloud/open-oauth-configuration.png" alt-text="Screenshot of Open Organization Settings, OAuth configurations.":::

4. Enter your information, and then select **Create**.

	:::image type="content" source="media/connect-cloud/register-oauth-azure-devops.png" alt-text="OAuth configurations dialog.":::

<a id="github-ent-oauth-services" />

## Connect Azure DevOps Services to GitHub Enterprise Server

> [!IMPORTANT]  
> To connect Azure DevOps Services to your GitHub Enterprise Server, your GitHub Enterprise Server must be sufficiently accessible from the Internet. Make sure Azure DNS can resolve your GitHub Enterprise Server name and your firewall allows access from Azure Data Center IP addresses. To determine the IP address range, see [Microsoft Azure Data Center IP Ranges](https://www.microsoft.com/download/details.aspx?id=41653). A common error message encountered when connectivity issues exist is: 
> 
> *The remote name could not be resolved: 'github-enterprise-server.contoso.com'*
> 
> If you encounter this error, check that your server is accessible. For more information, see [Azure DNS FAQ](/azure/dns/dns-faq). 

1. Select **Project settings** > **GitHub connections** > **GitHub Enterprise Server** for a first-time connection. 

   :::image type="content" source="media/connect-cloud/first-connection-enterprise.png" alt-text="First connection, choose GitHub Enterprise Server.":::

   Or, from the **New GitHub connection** dialog, select **GitHub Enterprise Server**.

   :::image type="content" source="media/connect-cloud/connect-to-enterprise.png" alt-text="Screenshot of New GitHub connection dialog, choose GitHub Enterprise Server.":::

2. Select the authentication method. 

   :::image type="content" source="media/connect-cloud/enterprise-select-authentication-method.png" alt-text="Screenshot showing authentication method dialog.":::

	**Connect with OAuth**  

	Choose the configuration that you set up in [Step 4 of Register your OAuth configuration in Azure DevOps Services](#register-services-github-ent-oauth), and then choose **Connect**. 

	:::image type="content" source="media/connect-cloud/new-github-enterprise-server-dialog-oauth.png" alt-text="Screenshot of New GitHub Enterprise connection, OAuth connection dialog.":::

	<a id="server-github-ent-pat" />

	**Connect with a Personal Access Token**  

	Enter the URL for your GitHub Enterprise server and the Personal access token credentials recognized by that server. And then choose **Connect**.

	:::image type="content" source="media/connect-cloud/new-github-enterprise-server-dialog-pat.png" alt-text="Screenshot of New GitHub Enterprise connection, Personal access token connection dialog.":::

	<a id="server-github-ent-username" />

	**Connect with a Username and Password**   

	Enter the URL for your GitHub Enterprise server and the administrator account credentials recognized by that server, and then select **Connect**.

	:::image type="content" source="media/connect-cloud/new-github-enterprise-server-dialog-user-name.png" alt-text="Screenshot of New GitHub Enterprise connection screen, User Name connection dialog.":::

3. The dialog lists all repositories for which you have GitHub administration rights. You can toggle between **Mine** and  **All** to determine if others appear, and then check the ones that you want to add. Select **Save** when you're done.

   :::image type="content" source="media/github-ent/ads-add-ghe-repositories.png" alt-text="Screenshot of repositories listed.":::

   > [!TIP]    
   > You can only make a connection to repositories defined under one GitHub organization. To connect a project to other repositories defined in another GitHub organization, you must add another connection.  

4. If it's your first time connecting to a GitHub account or organization from Azure Boards, you also install the Azure Boards app for GitHub. [Confirm the connection](#confirm-connection) earlier in this article. 

## Resolve connection issues

The Azure Boards-GitHub integration relies on various authentication protocols to support the connection. Changes to a user's permission scope or authentication credentials can cause revocation of the GitHub repositories connected to Azure Boards. 
 
For an overview of the integration that the Azure Boards app for GitHub supports, see [Azure Boards-GitHub integration](index.md).  

#### Supported authentication options

The following authentication options are supported based on the GitHub platform you want to connect to.  

:::row:::
   :::column span="1":::
      **Platform**
   :::column-end:::
   :::column span="1":::
      **GitHub.com**
   :::column-end:::
   :::column span="1":::
      **GitHub Enterprise Server**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Azure DevOps Services**
   :::column-end:::
   :::column span="1":::
      - GitHub.com user account 
      - Personal access token (PAT)
   :::column-end:::
   :::column span="1":::
      - OAuth  
      - PAT
      - Username plus password
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Azure DevOps Server 2020**
   :::column-end:::
   :::column span="1":::
      Not applicable
   :::column-end:::
   :::column span="1":::
      - PAT 
      - Username plus password
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Azure DevOps Server 2019**
   :::column-end:::
   :::column span="1":::
      Not applicable
   :::column-end:::
   :::column span="1":::
      - OAuth  
      - PAT
      - Username plus password
   :::column-end:::
:::row-end:::

[!INCLUDE[temp](../includes/github-platform-support.md)]

#### Grant Azure Boards organization access 

If the integration between Azure Boards and GitHub isn't working as expected, verify you've granted organization access. 

1. From GitHub web portal, open **Settings** from your profile menu.  
	:::image type="content" source="media/troubleshoot/choose-settings.png" alt-text="Screenshot of open profile, choose Settings.":::

2. Select **Applications** under **Integrations** > **Authorized OAuth Apps** > **Azure Boards**.

3. Under **Organization access**, resolve any issues that may appear. Select **Grant** to grant access to any organizations that show as having an **Access request pending**. 

   :::image type="content" source="media/troubleshoot/organization-access-issues.png" alt-text="Screenshot of Organization access with organizations without access.":::

#### Resolve access issues

When the Azure Boards connection to GitHub no longer has access, it shows an alert status in the user interface with a red-X. Hover over the alert and it indicates that the credentials are no longer valid. To correct the problem, remove the connection and recreate a new connection.

:::image type="content" source="media/troubleshoot/failed-connection.png" alt-text="Screenshot of failed connection.":::

To resolve this issue, consider the following items:  

- **If the connection is using OAuth**:
  - The Azure Boards application had its access denied for one of the repositories.
  - GitHub might be unavailable/unreachable. This unavailability could be because of an outage in either service or an infrastructure/network issue on-premises. You can check service status from the following links:
      - [GitHub](https://status.github.com)  
      - [Azure DevOps](https://status.dev.azure.com/)

	Delete and recreate the connection to the GitHub repository. This recreated connection causes GitHub to prompt to reauthorize Azure Boards.   

- **If the connection is using a PAT:**
  - The PAT may have been revoked or the required permission scopes changed and are insufficient.
  - The user may have lost admin permissions on the GitHub repo.  

	Recreate the PAT and ensure the scope for the token includes the required permissions: `repo, read:user, user:email, admin:repo_hook`. 

<a id="ghe-dataimport" />

#### Resolve broken GitHub Enterprise Server connection  

If you've migrated from Azure DevOps Server to Azure DevOps Services with an existing GitHub Enterprise Server connection, your existing connection won't work as expected. Work item mentions within GitHub may be delayed or never show up in Azure DevOps Services. This problem occurs because the callback url associated with GitHub is no longer valid. 

Consider the following resolutions:

- **Remove and re-create the connection**:
  Remove and re-create the connection to the GitHub Enterprise Server repository. Follow the sequence of steps provided in [Connect from Azure Boards](connect-to-github.md#github-ent-oauth-services) documentation.

- **Fix the webhook url**:
  Go to GitHub's repository settings page and edit the webhook url to point out to the migrated Azure DevOps Services organization url: ```https://dev.azure.com/{OrganizationName}/_apis/work/events?api-version=5.2-preview```

<a id="integrate-repo-to-several-organizations" />

#### Connect to multiple Azure DevOps organizations 

If you connect your GitHub repository to two or more projects that are defined in more than one Azure DevOps organization, such as dev.azure.com/Contoso and dev.azure.com/Fabrikam, you may get unexpected results when using **AB#** mentions to link to work items. This problem occurs because work item IDs aren't unique across Azure DevOps organizations, so **AB#12** can refer to a work item in either the Contoso or Fabrikam organization. So, when a work item is mentioned in a commit message or pull request, both organizations attempt to create a link to a work item with a matching ID (if one exists). 

In general, a user intends an **AB#** mention to link to a single work item in one of the projects. But, if a work item of the same ID exists in both accounts, then links get created for both work items, likely causing confusion.

Currently, there's no way to work around this issue, so we recommend that you connect a single GitHub repository only to a single Azure DevOps organization. 

> [!NOTE]  
> When you make the connection by using the Azure Boards app for GitHub, the app prevents you from connecting to two different organizations. If a GitHub repository is incorrectly connected to the wrong Azure DevOps organization, you must contact the owner of that organization to remove the connection before you can add the repository to the correct Azure DevOps organization.

<a id="update-wits" />

#### Update XML definitions for select work item types 

If your organization uses the Hosted XML or On-premises XML process model to customize the work tracking experience and you want to link to and view the GitHub link types from the Development section in the work item forms, you'll need to update the XML definitions for the work item types. 

For example, if you want to link user stories and bugs to GitHub commits and pull requests from the **Development** section, you need to update the XML definitions for user stories and bugs. 

Follow the sequence of tasks provided in [Hosted XML process model](../../organizations/settings/work/hosted-xml-process-model.md) to update the XML definitions. For each work item type, find the `Group Label="Development"` section, and add the following two lines in the following code syntax to support the external links types: **GitHub Commit** and **GitHub Pull Request**.  

> [!div class="tabbedCodeSnippets"]
> ```XML
>              <ExternalLinkFilter Type="GitHub Pull Request" />  
>              <ExternalLinkFilter Type="GitHub Commit" />  
> ```

When it's updated, the section should appear as follows. 

> [!div class="tabbedCodeSnippets"]
> ```XML
> <Group Label="Development">  
>    <Control Type="LinksControl" Name="Development">  
>       <LinksControlOptions ViewMode="Dynamic" ZeroDataExperience="Development" ShowCallToAction="true">  
>          <ListViewOptions GroupLinks="false">   
>          </ListViewOptions>  
>          <LinkFilters>  
>              <ExternalLinkFilter Type="Build" />  
>              <ExternalLinkFilter Type="Integrated in build" />  
>              <ExternalLinkFilter Type="Pull Request" />  
>              <ExternalLinkFilter Type="Branch" />  
>              <ExternalLinkFilter Type="Fixed in Commit" />  
>              <ExternalLinkFilter Type="Fixed in Changeset" />  
>              <ExternalLinkFilter Type="Source Code File" />  
>              <ExternalLinkFilter Type="Found in build" />  
>              <ExternalLinkFilter Type="GitHub Pull Request" />  
>              <ExternalLinkFilter Type="GitHub Commit" />  
>          </LinkFilters>  
>       </LinksControlOptions>  
>    </Control>  
> </Group>  
> ```

## Next steps

> [!div class="nextstepaction"]
> [Link GitHub commits and pull requests to work items](link-to-from-github.md) 

## Related articles

- [Install and configure the Azure Boards app for GitHub](install-github-app.md)
- [Configure status badges to add to GitHub README files](configure-status-badges.md)
- [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md)
- [Build GitHub repositories](../../pipelines/repos/github.md) 
- [Change GitHub repository access](install-github-app.md#change-repository-access)
