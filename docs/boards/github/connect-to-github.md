---
title: Connect an Azure Boards or Azure DevOps project to a GitHub repository
titleSuffix: Azure Boards
description: Configure one or more GitHub repositories to integrate with Azure Boards. 
ms.service: azure-devops-boards
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 08/22/2024
---

# Connect Azure Boards to GitHub (cloud) 

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)] 
 
Use GitHub.com repositories for your software development and your Azure Boards project to plan and track your work. Connect your project and repo so your GitHub commits and pull requests get linked to your work items in Azure Boards. 

> [!NOTE]   
> Azure Boards and Azure DevOps Services support integration with GitHub.com and GitHub Enterprise Server repositories. If you want to connect from an on-premises Azure DevOps Server, see [Connect Azure DevOps Server to GitHub Enterprise Server](connect-on-premises-to-github.md).

## Prerequisites 

| Category | Requirements |
|--------------|-------------|
| **Permissions** | - Member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) If you created the project, you have permissions.<br> - **Administrator** or **owner** of the GitHub repository to connect to. You can connect to multiple GitHub repositories as long as you're an administrator for those repositories. |
| **Project membership**|  [Project member](../../organizations/projects/create-project.md). |

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
      - [GitHub.com user account (Recommended)](#add-a-github-connection-with-github-credentials)
      - [Personal access token (PAT)](#github-pat)
   :::column-end:::
   :::column span="":::
      - [OAuth (preferred, registration required)](#server-github-ent-oauth-register) 
      - [PAT](#server-github-ent-pat) 
      - [GitHub credentials](#server-github-ent-credentials) 
   :::column-end:::
:::row-end:::
 
> [!NOTE]
> If you choose to connect GitHub with a PAT, configure single sign-on (SSO) for the PAT on your GitHub account. This configuration is necessary to retrieve a list of repositories from an organization with Security Assertion Markup Language (SAML) SSO authentication enabled.
 
## Connect Azure Boards to a GitHub repo

1. Sign in to your project (```https://dev.azure.com/{Your_Organization/Your_Project}```).  

2. Select **Project settings** > **GitHub connections**.   

	:::image type="content" source="media/connect-cloud/open-project-settings-github-connections.png" alt-text="Screenshot of open Project Settings>GitHub connections.":::

3. If this is your first time connecting from the project, select **Connect your GitHub account** to use your GitHub account credentials.

	:::image type="content" source="media/connect-cloud/connect-github-account-first-time.png" alt-text="Screenshot of first time connecting with GitHub credentials.":::

	Otherwise, choose :::image type="icon" source="../../media/icons/add-light-icon.png" border="false"::: **New connection**, and select your authentication method from the **New Connection** dialog.

	When you connect with your GitHub account, use your GitHub credentials to authenticate. To use a PAT, see [Add a GitHub connection using PAT](#github-pat). For connecting to a GitHub Enterprise Server, see [Register Azure DevOps in GitHub as an OAuth App](#server-github-ent-oauth-register).

## Add a GitHub connection with GitHub credentials 

You can connect up to 500 GitHub repositories to an Azure Boards project. 

1. If this is your first time connecting to GitHub from Azure Boards, sign in using your GitHub credentials. Choose an account for which you're a repository administrator.

2. Select the GitHub account or organization you want to connect. Only organizations that you own or are an administrator for are listed.

   If all repositories for an organization are already connected to Azure Boards, you will see the following message:

   :::image type="content" source="media/connect-cloud/message-all-repositories-already-connected.png" alt-text="Screenshot of message where no more repositories exist to connect.":::

3. Enter your GitHub credentials. If you have two-factor authentication enabled, enter the authentication code sent by GitHub and select **Verify**. If not, the system will automatically recognize your GitHub organization as your GitHub account is associated with your Azure DevOps Services account.

<a id="choose-repositories"></a> 

### Add GitHub repositories 

Once authenticated, you can select the repositories you want to connect.

1. The **Add GitHub Repositories** dialog automatically displays and selects all GitHub.com repositories for which you're an administrator in the selected organization. Deselect any repositories that you don't want to include in the integration.

   :::image type="content" source="media/github/add-github-repos.png" alt-text="Screenshot showing GitHub repos.":::

   > [!TIP]   
   > To avoid unexpected **AB#** mention linking, we recommend connecting a GitHub repo to projects within a single Azure DevOps organization. Connecting the same GitHub repo to projects in multiple Azure DevOps organizations can cause issues. For more information, see [Troubleshoot GitHub & Azure Boards integration](connect-to-github.md#resolve-connection-issues). 

	If all repositories are already connected to the current or another organization, the following message displays:

	:::image type="content" source="media/connect-cloud/message-all-repositories-already-connected.png" alt-text="Screenshot of message where no more repositories exist to connect."::: 

2. After making your selections, select **Save**.

<a id="confirm-connection"></a> 

### Confirm the connection 

1. Review the GitHub page that displays and then choose **Approve, Install, & Authorize**.

   :::image type="content" source="media/github/approve-install-auth-azure-boards-from-github.png" alt-text="Screenshot showing confirming GitHub repositories.":::

2. Provide your GitHub credentials to confirm.

3.	When you're done, you should see the new connection with the selected repositories listed.

   :::image type="content" source="media/github/repos-list-s154.png" alt-text="Screenshot of list of connected repositories.":::

To change the configuration or manage the Azure Boards app for GitHub, see  [Change repository access to Azure Boards](change-azure-boards-app-github-repository-access.md). 

<a id="github-oauth"></a>
<a id="github-pat"></a>

## Add a GitHub connection using PAT   

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

We recommend using your GitHub account credentials to connect to your GitHub repository.

> [!TIP]  
> When you create your GitHub PAT, make sure that you include these scopes: `repo, read:user, user:email, admin:repo_hook`. 

1. Choose **Personal Access Token**. 

   :::image type="content" source="media/connect-cloud/connect-with-pat.png" alt-text="Screenshot of New GitHub connection dialog, choosing Personal Access Token.":::

	To create a GitHub PAT, go to [GitHub Developer Settings > Personal access tokens](https://github.com/settings/tokens). 

2. Enter the PAT and select **Connect**. 

   :::image type="content" source="media/github/add-github-connection-dialog-pat.png" alt-text="Screenshot showing entered PAT.":::

3. Select the repositories you want to connect to the project by following the procedures outlined in [Choose the repositories](#choose-repositories) earlier in this article.

4. If it's the first time connecting to a GitHub account or organization from Azure Boards, install the Azure Boards app for GitHub. [Confirm the connection](#confirm-connection) earlier in this article.

<a id="server-github-ent-oauth-register"></a>

## Register Azure DevOps in GitHub as an OAuth App

To use OAuth to connect Azure DevOps with your GitHub Enterprise Server, first register the application as an OAuth App. For more information, see [Create an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/).

<a id="register-services-oauth"></a>

###  Register Azure DevOps Services   

1. Sign into the web portal for your GitHub Enterprise server.  

   :::image type="content" source="media/github-ent/sign-in-to-ghe.png" alt-text="Screenshot of sign in for GitHub Enterprise server.":::

2. Open **Settings** > **Developer settings** > **Oauth Apps** > **New OAuth App**. 

   :::image type="content" source="media/github-ent/ghe-settings-dev-oauth.png" alt-text="Screenshot showing sequence for New OAuth App.":::

3. Enter registration information.  

	For the **Homepage URL**, specify the **Organization URL** of your organization.  
	For the **Authorization callback URL**, use the following pattern to construct the URL.  

	`{Azure DevOps Services Organization URL}/_admin/oauth2/callback`

	For example: 

	`https://dev.azure.com/fabrikam/_admin/oauth2/callback`

   :::image type="content" source="media/github-ent/ghe-register-app-services.png" alt-text="Screenshot showing app to register.":::

4. Select **Register application**.

5. The **Client ID** and **Client Secret** for your registered OAuth application appear. 

   :::image type="content" source="media/github-ent/ghe-register-app-success.png" alt-text="Screenshot of Client ID and Client Secret for the registered OAuth application.":::

<a id="register-services-github-ent-oauth"></a>

### Register your OAuth configuration in Azure DevOps Services

1. Sign into the web portal for Azure DevOps Services. 

2. Add the GitHub Enterprise Oauth configuration to your organization. 

3. In **Organization settings**, select **Oauth configurations** > **Add Oauth configuration**.  

   :::image type="content" source="media/connect-cloud/open-oauth-configuration.png" alt-text="Screenshot of Open Organization Settings, OAuth configurations.":::

4. Enter your information, and then select **Create**.

	:::image type="content" source="media/connect-cloud/register-oauth-azure-devops.png" alt-text="OAuth configurations dialog.":::

<a id="github-ent-oauth-services"></a>

## Connect Azure DevOps Services to GitHub Enterprise Server

> [!IMPORTANT]  
> To connect Azure DevOps Services to your GitHub Enterprise Server, ensure your GitHub Enterprise Server is accessible from the Internet. Verify that Azure DNS can resolve your GitHub Enterprise Server name and that your firewall allows access from Azure Data Center IP addresses. To determine the IP address range, see [Microsoft Azure Data Center IP Ranges](https://www.microsoft.com/download/details.aspx?id=41653). A common error message for connectivity issues is:
> 
> *The remote name could not be resolved: 'github-enterprise-server.contoso.com'*
> 
> If you encounter this error, check your server's accessibility. For more information, see [Azure DNS FAQ](/azure/dns/dns-faq).

1. Select **Project settings** > **GitHub connections** > **GitHub Enterprise Server** for a first-time connection. 

   :::image type="content" source="media/connect-cloud/first-connection-enterprise.png" alt-text="First connection, choose GitHub Enterprise Server.":::

   Or, from the **New GitHub connection** dialog, select **GitHub Enterprise Server**.

   :::image type="content" source="media/connect-cloud/connect-to-enterprise.png" alt-text="Screenshot of New GitHub connection dialog, choose GitHub Enterprise Server.":::

2. Select the authentication method. 

   :::image type="content" source="media/connect-cloud/enterprise-select-authentication-method.png" alt-text="Screenshot showing authentication method dialog.":::

	**Connect with OAuth**  

	Choose the configuration that you set up in [Step 4 of Register your OAuth configuration in Azure DevOps Services](#register-services-github-ent-oauth), and then choose **Connect**. 

	:::image type="content" source="media/connect-cloud/new-github-enterprise-server-dialog-oauth.png" alt-text="Screenshot of New GitHub Enterprise connection, OAuth connection dialog.":::

	<a id="server-github-ent-pat"></a>

	**Connect with a Personal Access Token**  

	Enter the URL for your GitHub Enterprise server and the Personal access token credentials recognized by that server. And then choose **Connect**.

	:::image type="content" source="media/connect-cloud/new-github-enterprise-server-dialog-pat.png" alt-text="Screenshot of New GitHub Enterprise connection, Personal access token connection dialog.":::

	<a id="server-github-ent-credentials"></a>

	**Connect with GitHub credentials**   

	Enter the URL for your GitHub Enterprise server and the administrator account credentials recognized by that server, and then select **Connect**.

	:::image type="content" source="media/connect-cloud/new-github-enterprise-server-dialog-user-name.png" alt-text="Screenshot of New GitHub Enterprise connection screen, User Name connection dialog.":::

3. The dialog lists all repositories for which you have GitHub administration rights. You can toggle between **Mine** and  **All** to determine if others appear, and then check the ones that you want to add. Select **Save** when you're done.

   :::image type="content" source="media/github-ent/ads-add-ghe-repositories.png" alt-text="Screenshot of repositories listed.":::

   > [!TIP]    
   > You can only make a connection to repositories defined under one GitHub organization. To connect a project to other repositories defined in another GitHub organization, you must add another connection.  

4. If it's your first time connecting to a GitHub account or organization from Azure Boards, you also install the Azure Boards app for GitHub. [Confirm the connection](#confirm-connection) earlier in this article. 

## Resolve connection issues

The Azure Boards-GitHub integration uses various authentication protocols to maintain the connection. Changes to a user's permission scope or authentication credentials can revoke the GitHub repositories connected to Azure Boards.

For an overview of the integration supported by the Azure Boards app for GitHub, see [Azure Boards-GitHub integration](index.md).

### Supported authentication options

The following supported authentication options depend on the GitHub platform you are connecting to:

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
      - GitHub credentials
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
      - GitHub credentials
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
      - GitHub credentials
   :::column-end:::
:::row-end:::

[!INCLUDE[temp](../includes/github-platform-support.md)]

### Grant Azure Boards organization access 

If the integration between Azure Boards and GitHub isn't working as expected, verify that you granted organization access. 

1. From GitHub web portal, open **Settings** from your profile menu.  
	:::image type="content" source="media/troubleshoot/choose-settings.png" alt-text="Screenshot of open profile, choose Settings.":::

2. Select **Applications** under **Integrations** > **Authorized OAuth Apps** > **Azure Boards**.

3. Under **Organization access**, resolve any issues that might appear. Select **Grant** to grant access to any organizations that show as having an **Access request pending**. 

   :::image type="content" source="media/troubleshoot/organization-access-issues.png" alt-text="Screenshot of Organization access with organizations without access.":::

### Resolve access issues

When the Azure Boards connection to GitHub loses access, an alert status with a red-X appears in the user interface. Hover over the alert to see that the credentials are no longer valid. To fix the issue, remove the connection and create a new one.

:::image type="content" source="media/troubleshoot/failed-connection.png" alt-text="Screenshot of failed connection.":::

To resolve this issue, consider the following items:  

- **If the connection is using OAuth**:
  - The Azure Boards application had its access denied for one of the repositories.
  - GitHub might be unavailable/unreachable. This unavailability could be because of an outage in either service or an infrastructure/network issue on-premises. You can check service status from the following links:
      - [GitHub](https://status.github.com)  
      - [Azure DevOps](https://status.dev.azure.com/)

	Delete and recreate the connection to the GitHub repository. This recreated connection causes GitHub to prompt to reauthorize Azure Boards.   

- **If the connection is using a PAT:**
  - The PAT was revoked or the required permission scopes changed and are insufficient.
  - The user might not have admin permissions on the GitHub repo.  

	Recreate the PAT and ensure the scope for the token includes the required permissions: `repo, read:user, user:email, admin:repo_hook`. For more information, see [Best practices for using PATs](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#best-practices-for-using-pats).

<a id="ghe-dataimport"></a>

### Resolve broken GitHub Enterprise Server connection  

If you migrated from Azure DevOps Server to Azure DevOps Services with an existing GitHub Enterprise Server connection, your existing connection may not work as expected. Work item mentions within GitHub might be delayed or never appear in Azure DevOps Services because the callback URL associated with GitHub is no longer valid.
Consider the following resolutions:

- **Remove and re-create the connection**:
  Remove and re-create the connection to the GitHub Enterprise Server repository. Follow the sequence of steps provided in [Connect from Azure Boards](connect-to-github.md#github-ent-oauth-services) documentation.

- **Fix the webhook URL**:
  Go to GitHub's repository settings page and edit the webhook URL, pointing to the migrated Azure DevOps organization URL: ```https://dev.azure.com/{OrganizationName}/_apis/work/events?api-version=5.2-preview```

<a id="integrate-repo-to-several-organizations"></a>

### Connect to multiple Azure DevOps organizations 

Connecting your GitHub repository to projects in multiple Azure DevOps organizations, such as dev.azure.com/Contoso and dev.azure.com/Fabrikam, can cause unexpected results with **AB#** mentions. Work item IDs aren't unique across Azure DevOps organizations, so **AB#12** could refer to a work item in either Contoso or Fabrikam. When a work item is mentioned in a commit message or pull request, both organizations might attempt to link to a work item with the matching ID, causing confusion.

To avoid this issue, connect a single GitHub repository to only one Azure DevOps organization.

> [!NOTE]  
> When you connect using the Azure Boards app for GitHub, the app prevents connections to multiple organizations. If a GitHub repository is connected to the wrong Azure DevOps organization, contact the owner of that organization to remove the connection before adding the repository to the correct Azure DevOps organization.

<a id="update-wits"></a>

### Update XML definitions for select work item types 

Update the XML definitions for the work item types if your organization uses the Hosted XML or on-premises XML process model to customize the work tracking experience and link to and view the GitHub link types from the Development section in the work item forms.

For example, to link user stories and bugs to GitHub commits and pull requests from the **Development** section, update the XML definitions for user stories and bugs.

Follow the sequence of tasks provided in [Hosted XML process model](../../organizations/settings/work/hosted-xml-process-model.md) to update the XML definitions. For each work item type, find the `Group Label="Development"` section, and add the following two lines in the code syntax to support the external link types: **GitHub Commit** and **GitHub Pull Request**.  

> [!div class="tabbedCodeSnippets"]
> ```XML
>              <ExternalLinkFilter Type="GitHub Pull Request" />  
>              <ExternalLinkFilter Type="GitHub Commit" />  
> ```

After updating, the section should appear as follows.

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

<a id="faqs"></a>

## FAQs

### Q: Some of my users in Azure DevOps have GitHub identities. Do I need to add them as new GitHub users to my organization?
A: No. Ask your users to sign out and then sign back in to the organization with their GitHub credentials from a fresh browser session. This action will establish their GitHub identities.

### Q: I'm an organization Administrator and I enabled the policy for inviting GitHub users. Why can't I invite new GitHub users?
A: After changing the setting, sign out of Azure DevOps and then sign back in to the organization (`dev.azure.com/{organizationName}` or `organizationName.visualstudio.com`) with your GitHub credentials from a fresh browser session.

### Q: I signed in with my GitHub credentials, but why can't I invite GitHub users?
A: Only organization or project Administrators can invite new users to join the organization. You might not have the required permissions to add new users. Work with your administrator to get the necessary permissions or ask them to add the user for you.

## Next steps

> [!div class="nextstepaction"]
> [Link GitHub commits, pull requests, and branches to work items](link-to-from-github.md) 

## Related articles

- [Install and configure the Azure Boards app for GitHub](install-github-app.md)
- [Configure status badges to add to GitHub README files](configure-status-badges.md)
- [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md)
- [Build GitHub repositories](../../pipelines/repos/github.md) 
- [Change GitHub repository access](install-github-app.md#change-repository-access)
