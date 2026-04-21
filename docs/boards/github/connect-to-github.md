---
title: Connect an Azure Boards or Azure DevOps project to a GitHub repository
titleSuffix: Azure Boards
description: Configure one or more GitHub repositories to integrate with Azure Boards. 
ms.service: azure-devops-boards
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 03/24/2026
ms.custom: sfi-image-nochange, pat-reduction
ai-usage: ai-assisted
---

# Connect Azure Boards to GitHub (cloud) 

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)] 
 
Connect your Azure Boards project to GitHub.com repositories so that commits and pull requests automatically link to work items. This integration lets you plan and track work in Azure Boards while your team develops in GitHub.

After you connect, you can:

- Automatically link commits, branches, and pull requests to work items
- Monitor development progress directly from Azure Boards
- [Use GitHub Copilot with work items](work-item-integration-github-copilot.md) for AI-assisted development

> [!NOTE]   
> Azure Boards supports integration with both GitHub.com and GitHub Enterprise Server. To connect from an on-premises Azure DevOps Server, see [Connect Azure DevOps Server to GitHub Enterprise Server](connect-on-premises-to-github.md).

## Prerequisites 

| Category | Requirements |
|--------------|-------------|
| Permissions | - Member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) If you created the project, you have permissions.<br> - **Administrator** or **owner** of the GitHub repository to connect to. You can connect to multiple GitHub repositories as long as you're an administrator for those repositories. |
| **Project membership** | [Project member](../../organizations/projects/create-project.md). |

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
> If you connect with a PAT, configure single sign-on (SSO) for it on your GitHub account. SSO is required to list repositories from an organization that uses SAML authentication.
 
## Connect Azure Boards to a GitHub repo

1. Sign in to your project (```https://dev.azure.com/{Your_Organization/Your_Project}```).  

1. Select **Project settings** > **GitHub connections**.   

	:::image type="content" source="media/connect-cloud/open-project-settings-github-connections.png" alt-text="Screenshot of open Project Settings>GitHub connections.":::

1. For a first-time connection, select **Connect your GitHub account** to authenticate with your GitHub credentials.

	:::image type="content" source="media/connect-cloud/connect-github-account-first-time.png" alt-text="Screenshot of first time connecting with GitHub credentials.":::

	For subsequent connections, select :::image type="icon" source="../../media/icons/add-light-icon.png" border="false"::: **New connection** and choose your authentication method.

	To connect with a PAT instead, see [Add a GitHub connection using PAT](#github-pat). For GitHub Enterprise Server, see [Register Azure DevOps in GitHub as an OAuth App](#server-github-ent-oauth-register).

## Add a GitHub connection with GitHub credentials 

You can connect up to 1,000 GitHub repositories to an Azure Boards project. 

1. Sign in with your GitHub credentials. Choose an account where you're a repository administrator.

1. Select the GitHub account or organization to connect. Only organizations you own or administer appear in the list.

   If all repositories for an organization are already connected, the following message appears:

   :::image type="content" source="media/connect-cloud/message-all-repositories-already-connected.png" alt-text="Screenshot of message where no more repositories exist to connect.":::

1. Enter your GitHub credentials. If you have two-factor authentication enabled, enter the code sent by GitHub and select **Verify**.

<a id="choose-repositories"></a> 

### Add GitHub repositories 

After you authenticate, select the repositories to connect.

1. The **Add GitHub Repositories** dialog displays and preselects all repositories where you're an administrator in the selected organization. Clear any repositories you don't want to connect.

   :::image type="content" source="media/github/add-github-repos.png" alt-text="Screenshot showing GitHub repos.":::

   > [!TIP]   
   > Connect each GitHub repo to projects in a single Azure DevOps organization to avoid unexpected **AB#** mention linking. For more information, see [Resolve connection issues](#resolve-connection-issues). 

	If all repositories are already connected to the current or another organization, the following message appears:

	:::image type="content" source="media/connect-cloud/message-all-repositories-already-connected.png" alt-text="Screenshot of message where no more repositories exist to connect."::: 

1. Select **Save**.

<a id="confirm-connection"></a> 

### Confirm the connection 

1. On the GitHub page, select **Approve, Install, & Authorize**.

   :::image type="content" source="media/github/approve-install-auth-azure-boards-from-github.png" alt-text="Screenshot showing confirming GitHub repositories.":::

1. Enter your GitHub credentials to confirm.

1.	The new connection displays with the selected repositories listed.

   :::image type="content" source="media/github/repos-list-s154.png" alt-text="Screenshot of list of connected repositories.":::

To change the configuration or manage the Azure Boards app for GitHub, see [Change repository access to Azure Boards](change-azure-boards-app-github-repository-access.md). 

<a id="github-oauth"></a>
<a id="github-pat"></a>

## Add a GitHub connection using PAT   

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

> [!TIP]  
> When you create your GitHub PAT, include these scopes: `repo, read:user, user:email, admin:repo_hook`. 

1. Select **Personal Access Token** in the **New Connection** dialog. 

   :::image type="content" source="media/connect-cloud/connect-with-pat.png" alt-text="Screenshot of New GitHub connection dialog, choosing Personal Access Token.":::

	To create a GitHub PAT, go to [GitHub Developer Settings > Personal access tokens](https://github.com/settings/tokens). 

1. Enter the PAT and select **Connect**. 

   :::image type="content" source="media/github/add-github-connection-dialog-pat.png" alt-text="Screenshot showing entered PAT.":::

1. Select the repositories to connect. For details, see [Add GitHub repositories](#choose-repositories).

1. For a first-time connection, install the Azure Boards app for GitHub. See [Confirm the connection](#confirm-connection).

<a id="server-github-ent-oauth-register"></a>

## Register Azure DevOps in GitHub as an OAuth App

To connect Azure DevOps with your GitHub Enterprise Server using OAuth, register the application as an OAuth App. For more information, see [Create an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/).

<a id="register-services-oauth"></a>

###  Register Azure DevOps Services   

1. Sign in to the web portal for your GitHub Enterprise Server.  

   :::image type="content" source="media/github-ent/sign-in-to-ghe.png" alt-text="Screenshot of sign in for GitHub Enterprise server.":::

1. Open **Settings** > **Developer settings** > **Oauth Apps** > **New OAuth App**. 

   :::image type="content" source="media/github-ent/ghe-settings-dev-oauth.png" alt-text="Screenshot showing sequence for New OAuth App.":::

1. Enter registration information.  

	- **Homepage URL** — Your organization URL.  
	- **Authorization callback URL** — Use the pattern `{Organization URL}/_admin/oauth2/callback`. For example: `https://dev.azure.com/fabrikam/_admin/oauth2/callback`

   :::image type="content" source="media/github-ent/ghe-register-app-services.png" alt-text="Screenshot showing app to register.":::

1. Select **Register application**.

1. Copy the **Client ID** and **Client Secret** that appear for your registered OAuth application. 

   :::image type="content" source="media/github-ent/ghe-register-app-success.png" alt-text="Screenshot of Client ID and Client Secret for the registered OAuth application.":::

<a id="register-services-github-ent-oauth"></a>

### Register your OAuth configuration in Azure DevOps Services

1. Sign in to the web portal for Azure DevOps Services. 

1. Select **Organization settings** > **Oauth configurations** > **Add Oauth configuration**.  

   :::image type="content" source="media/connect-cloud/open-oauth-configuration.png" alt-text="Screenshot of Open Organization Settings, OAuth configurations.":::

1. Enter your information and select **Create**.

	:::image type="content" source="media/connect-cloud/register-oauth-azure-devops.png" alt-text="OAuth configurations dialog.":::

<a id="github-ent-oauth-services"></a>

## Connect Azure DevOps Services to GitHub Enterprise Server

> [!IMPORTANT]  
> Your GitHub Enterprise Server must be accessible from the Internet. Verify that Azure DNS can resolve the server name and that your firewall allows access from [Azure Data Center IP ranges](https://www.microsoft.com/download/details.aspx?id=41653). A common error is:
> 
> *The remote name could not be resolved: 'github-enterprise-server.contoso.com'*
> 
> If you see this error, check your server's accessibility. For more information, see [Azure DNS FAQ](/azure/dns/dns-faq).

1. Select **Project settings** > **GitHub connections** > **GitHub Enterprise Server** for a first-time connection. 

   :::image type="content" source="media/connect-cloud/first-connection-enterprise.png" alt-text="First connection, GitHub Enterprise Server option.":::

   For subsequent connections, select **GitHub Enterprise Server** from the **New GitHub connection** dialog.

   :::image type="content" source="media/connect-cloud/connect-to-enterprise.png" alt-text="Screenshot of New GitHub connection dialog, choose GitHub Enterprise Server.":::

1. Select the authentication method. 

   :::image type="content" source="media/connect-cloud/enterprise-select-authentication-method.png" alt-text="Screenshot showing authentication method dialog.":::

	**Connect with OAuth** — Select the OAuth configuration you registered in [Register your OAuth configuration](#register-services-github-ent-oauth), then select **Connect**. 

	:::image type="content" source="media/connect-cloud/new-github-enterprise-server-dialog-oauth.png" alt-text="Screenshot of New GitHub Enterprise connection, OAuth connection dialog.":::

	<a id="server-github-ent-pat"></a>

	**Connect with a Personal Access Token** — Enter your GitHub Enterprise Server URL and PAT, then select **Connect**.

	:::image type="content" source="media/connect-cloud/new-github-enterprise-server-dialog-pat.png" alt-text="Screenshot of New GitHub Enterprise connection, Personal access token connection dialog.":::

	<a id="server-github-ent-credentials"></a>

	**Connect with GitHub credentials** — Enter your GitHub Enterprise Server URL and administrator credentials, then select **Connect**.

	:::image type="content" source="media/connect-cloud/new-github-enterprise-server-dialog-user-name.png" alt-text="Screenshot of New GitHub Enterprise connection screen, User Name connection dialog.":::

1. The dialog lists all repositories where you have administration rights. Toggle between **Mine** and **All** to find additional repositories, select the ones to add, and then select **Save**.

   :::image type="content" source="media/github-ent/ads-add-ghe-repositories.png" alt-text="Screenshot of repositories listed.":::

   > [!TIP]    
   > Each connection supports only one GitHub organization. To connect repositories from another organization, add a separate connection.  

1. For a first-time connection, install the Azure Boards app for GitHub. See [Confirm the connection](#confirm-connection). 

## Resolve connection issues

The Azure Boards–GitHub integration uses several authentication protocols to maintain the connection. Changes to permission scopes or credentials can disconnect linked GitHub repositories.

For an overview of the integration, see [Azure Boards-GitHub integration](index.md).

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

[!INCLUDE[temp](../includes/github-platform-support.md)]

### Grant Azure Boards organization access 

If the integration isn't working as expected, verify that you granted organization access. 

1. In the GitHub web portal, open **Settings** from your profile menu.  
	:::image type="content" source="media/troubleshoot/choose-settings.png" alt-text="Screenshot of open profile, choose Settings.":::

1. Select **Applications** under **Integrations** > **Authorized OAuth Apps** > **Azure Boards**.

1. Under **Organization access**, select **Grant** for any organization that shows **Access request pending**. 

   :::image type="content" source="media/troubleshoot/organization-access-issues.png" alt-text="Screenshot of Organization access with organizations without access.":::

### Resolve access issues

When the Azure Boards connection to GitHub loses access, a red-X alert appears in the UI. Hover over the alert to confirm the credentials are no longer valid. Remove the connection and create a new one.

:::image type="content" source="media/troubleshoot/failed-connection.png" alt-text="Screenshot of failed connection.":::

- **OAuth connections**:
  - Azure Boards access was denied for one of the repositories.
  - GitHub or Azure DevOps might be unreachable due to a service outage or network issue. Check status: [GitHub](https://status.github.com) | [Azure DevOps](https://status.dev.azure.com/)

	Delete and recreate the connection. GitHub prompts you to reauthorize Azure Boards.   

- **PAT connections**:
  - The PAT was revoked or its permission scopes are insufficient.
  - The user might not have admin permissions on the GitHub repo.  

	Recreate the PAT with the required scopes: `repo, read:user, user:email, admin:repo_hook`. For more information, see [Best practices for using PATs](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#best-practices-for-using-pats).

<a id="ghe-dataimport"></a>

### Resolve broken GitHub Enterprise Server connection  

If you migrated from Azure DevOps Server to Azure DevOps Services with an existing GitHub Enterprise Server connection, work item mentions in GitHub might be delayed or missing because the callback URL is no longer valid.

- **Remove and re-create the connection** — Follow the steps in [Connect Azure DevOps Services to GitHub Enterprise Server](#github-ent-oauth-services).

- **Fix the webhook URL** — In your GitHub repository settings, update the webhook URL to point to the migrated organization: ```https://dev.azure.com/{OrganizationName}/_apis/work/events?api-version=5.2-preview```

<a id="integrate-repo-to-several-organizations"></a>

### Connect to multiple Azure DevOps organizations 

Connecting a GitHub repository to projects in multiple Azure DevOps organizations (for example, dev.azure.com/Contoso and dev.azure.com/Fabrikam) can cause unexpected **AB#** mention behavior. Work item IDs aren't unique across organizations, so **AB#12** could match a work item in either organization. Both organizations might attempt to link to the matching ID, causing confusion.

To avoid this issue, connect each GitHub repository to only one Azure DevOps organization.

> [!NOTE]  
> The Azure Boards app for GitHub prevents connections to multiple organizations. If a repository is connected to the wrong organization, contact that organization's owner to remove the connection before adding it to the correct organization.

<a id="update-wits"></a>

### Update XML definitions for select work item types 

If your organization uses the Hosted XML or on-premises XML process model, update the XML definitions for work item types to display GitHub link types in the **Development** section of work item forms.

For example, to link user stories and bugs to GitHub commits and pull requests from the **Development** section, update the XML definitions for those work item types.

Follow the steps in [Hosted XML process model](../../organizations/settings/work/hosted-xml-process-model.md). For each work item type, find the `Group Label="Development"` section and add the following lines to support **GitHub Commit** and **GitHub Pull Request** link types:  

> [!div class="tabbedCodeSnippets"]
> ```XML
>              <ExternalLinkFilter Type="GitHub Pull Request" />  
>              <ExternalLinkFilter Type="GitHub Commit" />  
> ```

After you update, the section should appear as follows:

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
A: No. Have your users sign out, then sign back in to the organization with their GitHub credentials from a fresh browser session.

### Q: I'm an organization Administrator and I enabled the policy for inviting GitHub users. Why can't I invite new GitHub users?
A: Sign out of Azure DevOps and sign back in to the organization (`dev.azure.com/{organizationName}` or `organizationName.visualstudio.com`) with your GitHub credentials from a fresh browser session.

### Q: I signed in with my GitHub credentials, but why can't I invite GitHub users?
A: Only organization or project Administrators can invite new users. Work with your administrator to get permissions or ask them to add the user.

### Q: Do GitHub Enterprise users get free access to Azure DevOps?
A: For more information, see [User and permissions management FAQs/GitHub Enterprise](../../organizations/accounts/faq-user-and-permissions-management.yml#github-enterprise).

## Next step

> [!div class="nextstepaction"]
> [Link GitHub commits, pull requests, and branches to work items](link-to-from-github.md) 

## Related content

- [Install and configure the Azure Boards app for GitHub](install-github-app.md)
- [Configure status badges to add to GitHub README files](configure-status-badges.md)
- [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md)
- [Build GitHub repositories](../../pipelines/repos/github.md) 
- [Change GitHub repository access](install-github-app.md#change-repository-access)
