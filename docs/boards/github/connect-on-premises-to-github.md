---
title: Connect an on-premises project to a GitHub Enterprise Server 
titleSuffix: Azure DevOps Server
description: Learn how to configure one or more GitHub repositories to integrate with an Azure Boards on-premises project.
ms.service: azure-devops-boards
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019 < azure-devops'
ms.date: 07/12/2023
---

# Connect Azure DevOps Server to GitHub (on-premises)

[!INCLUDE [version-gt-eq-2019-lt-azure-devops](../../includes/version-gt-eq-2019-lt-azure-devops.md)]

<!--- Supports https://go.microsoft.com/fwlink/?linkid=2095009 --> 

::: moniker range="azure-devops-2020"
When you connect your Azure DevOps Server project to your GitHub repositories, you support linking between GitHub commits and pull requests to work items. You can use GitHub for software development while using Azure Boards to plan and track your work.  

> [!NOTE]   
> On-premises Azure DevOps Server 2020 supports integration with GitHub.com and GitHub Enterprise Server repositories. If you want to connect from Azure DevOps Services, see [Connect Azure Boards to GitHub](./connect-to-github.md?preserve-view=true&view=azure-devops).

::: moniker-end

::: moniker range="azure-devops-2019"
When you connect your Azure DevOps Server project with your GitHub Enterprise Server repositories, you support linking between GitHub commits and pull requests to work items. You can use GitHub Enterprise for software development while using Azure Boards to plan and track your work. 

> [!NOTE]   
> On-premises Azure DevOps Server 2019 supports integration with GitHub Enterprise Server repositories. If you want to connect from Azure DevOps Services, see [Connect Azure Boards to GitHub](./connect-to-github.md?preserve-view=true&view=azure-devops).

::: moniker-end

## Prerequisites 
 
| Category | Requirements |
|--------------|-------------|
| **Permissions** | - Member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) and the project [Contributors group](../../organizations/security/add-users-team-project.md). If you created the project, then you have permissions. <br> - **Administrator** of the GitHub Enterprise Server that you connect to. |
| **Project membership**|  [Project member](../organizations/projects/create-project.md). |
| **Integration with GitHub** | - Azure DevOps Server 2020.1.1 Patch 2. Without this patch, you can only connect to your GitHub Enterprise Server repositories. <br> - [Azure Boards app for GitHub](install-github-app.md) installed on the GitHub organizations or account. |

## Authentication options

The following authentication options are supported. 

::: moniker range="azure-devops-2020"
- [PAT](#server-github-ent-pat)
- [GitHub credentials](#server-github-ent-credentials)

> [!NOTE] 
> OAuth isn't supported for Azure DevOps Server 2020.  
::: moniker-end

::: moniker range="azure-devops-2019"
- [OAuth (Recommended, registration required)](#server-github-ent-oauth-register) 
- [PAT](#server-github-ent-pat)
- [GitHub credentials](#server-github-ent-credentials)
::: moniker-end

<a id="github-oauth"></a>
<a id="github-pat"></a>
<a id="server-github-ent-oauth-register"></a>

::: moniker range="azure-devops-2019"

## Register Azure DevOps in GitHub as an OAuth App

If you plan to use OAuth to connect Azure DevOps Server with your GitHub Enterprise Server, you first need to register the application as an OAuth App. For more information, see [Create an OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

<a id="register-services-oauth"></a>
<a id="register-server-oauth"></a>

###  Register Azure DevOps Server 

1. Sign into the web portal for your GitHub Enterprise server.  

   :::image type="content" source="media/github-ent/sign-in-to-ghe.png" alt-text="Screenshot of sign in for GitHub Enterprise Server.":::

2. Select **Settings** > **Developer settings** > **Oauth Apps** > **New OAuth App**. 

   :::image type="content" source="media/github-ent/ghe-settings-dev-oauth.png" alt-text="Screenshot showing sequence for getting to New OAuth App screen.":::

3. Enter your information to register your Azure DevOps Server application.  

   :::image type="content" source="media/github-ent/ghe-register-app.png" alt-text="Screenshot of Azure DevOps Server project registration."::: 

	For the **Homepage URL**, specify the **Public URL** of your project collection. You can find this URL when you [open the Azure DevOps Administration Console](/azure/devops/server/admin/open-admin-console) and viewing the **Application Tier** node. 

   :::image type="content" source="media/github-ent/app-tier-find-public-url.png" alt-text="Screenshot of Azure DevOps Server Administration Console, Application Tier."::: 

	For the **Authorization callback URL**, use the following pattern to construct the URL. 

	`{Azure DevOps Server Public Url}/{Collection Name}/_admin/oauth2/callback`

	For example: 

	`http://contoso/DefaultCollection/_admin/oauth2/callback`

	`https://tfs.contoso.com/MyCollection/_admin/oauth2/callback`

4. Select **Register application**.

5. A page appears that provides the **Client ID** and **Client Secret** for your registered OAuth application. 

   :::image type="content" source="media/github-ent/ghe-register-app-success.png" alt-text="Screenshot of Client ID and Client Secret for your registered OAuth application.":::

<a id="register-server-github-ent-oauth"></a>

### Register your OAuth configuration in Azure DevOps Server

1. Sign into the web portal for your Azure DevOps Server. 

1. Add the GitHub Enterprise Oauth configuration to your Azure DevOps Server collection. 

2. Select **Admin settings** > **Oauth configurations** > **Add Oauth configuration**.  

   :::image type="content" source="media/github-ent/open-admin-settings-server-oauth-add.png" alt-text="Screenshot showing step sequence to add OAuth configuration.":::

3. Enter your information, and then select **Create**.

   :::image type="content" source="media/github-ent/add-oauth-configuration.png" alt-text="Screenshot of OAuth configuration dialog.":::

<a id="github-ent-oauth-services"></a>
<a id="github-ent-oauth-server"></a>
 
::: moniker-end

## Connect Azure DevOps Server to GitHub Enterprise Server

::: moniker range="azure-devops-2020"
You can connect up to 250 GitHub repositories to an Azure Boards project. 

> [!NOTE]   
> Connection to more than 100 GitHub repositories requires Azure DevOps Server 2020.1 update or later version.  
> Connection to GitHub.com repositories requires Azure DevOps Server 2020.1.1 Patch 2 or later version.
::: moniker-end 

::: moniker range="azure-devops-2019"
You can connect up to 100 GitHub repositories to an Azure Boards project. This limit can't be changed.
 
::: moniker-end 

1. Open the web portal for your Azure DevOps Server.   

2. Select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open  **Projects**, and then choose the Azure Boards project you want to configure to connect to your GitHub Enterprise repositories.

::: moniker range="azure-devops-2020"

3. Select **Project settings** > **GitHub connections**.   

   :::image type="content" source="media/github-ent/open-project-settings-github-connections-2020-1.png" alt-text="Screenshot of open Project Settings>GitHub connections.":::  

4.	If it's the first time making a connection from the project, choose the authentication method you want to use to make the connection: 

	- **Personal Access Token**, for details see [Connect using a Personal Access Token](#github-ent-pat). 
	- **GitHub credentials**, see [Connect using GitHub credentials](#server-github-ent-credentials).

	:::image type="content" source="media/github-ent/connect-github-account-first-time.png" alt-text="Screenshot of first time connecting with GitHub credentials.":::

	Otherwise, select :::image type="icon" source="../../media/icons/add-light-icon.png" border="false"::: **New connection**, and the select your authentication method from the **New Connection** dialog.
::: moniker-end
::: moniker range="azure-devops-2019"

3. Select **Project settings** > **GitHub connections** > **Connect your GitHub Enterprise account** or choose from the other authentication options, which we don't recommend.   

   :::image type="content" source="media/github-ent/open-project-settings-github-connections.png" alt-text="Screenshot of Project settings, selected Integrations.":::   

::: moniker-end

::: moniker range="azure-devops-2019"

#### Connect with OAuth  

Choose the configuration that you set up in [Step 4 of Register your OAuth configuration in Azure DevOps Server](#register-server-github-ent-oauth). Then, select **Connect**. 

   :::image type="content" source="media/github-ent/new-github-ent-connect-oauth.png" alt-text="Screenshot fo New GitHub Enterprise connection, OAuth dialog.":::

::: moniker-end

<a id="server-github-ent-pat"></a> 
<a id="github-ent-pat"></a> 

#### Connect with a Personal Access Token  

1.	To create a PAT, see [Creating a personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

	> [!TIP]  
	> When you create your GitHub PAT, make sure that you include these scopes: `repo, admin:repo_hook, read:user, user:email`. 
	
1.	Enter the URL for your GitHub Enterprise server and the **Personal access token** credentials recognized by that server. And then select **Connect**.

   :::image type="content" source="media/github-ent/ads-add-ghe-pat.png" alt-text="Screenshot of sign in with PAT.":::

<a id="server-github-ent-credentials"></a>

#### Connect with GitHub credentials   

1.	Enter the URL for your GitHub Enterprise server and the administrator account credentials recognized by that server. And then choose **Connect**.

   :::image type="content" source="media/github-ent/ads-add-ghe-user-name.png" alt-text="Screenshot of sign in with GitHub credentials."::: 

2. The dialog lists all repositories for which you have GitHub administration rights. You can toggle between **Mine** and **All** to determine if others appear, and then check the ones that you want to add. Choose **Save** when you're done.

   :::image type="content" source="media/github-ent/ads-add-ghe-repositories.png" alt-text="Screenshot of repositories to select to add."::: 

3. To connect to a GitHub account or organization from Azure Boards for the first time, you also install the Azure Boards app for GitHub. Complete the integration by following the procedures outlined in [Confirm the connection](connect-to-github.md#confirm-connection). 

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

#### Resolve access issues

::: moniker range=">= azure-devops-2020"

When the Azure Boards connection to GitHub no longer has access, it shows an alert status in the user interface with a red-X. Hover over the alert and it indicates that the credentials are no longer valid. To correct the problem, remove the connection and recreate a new connection.

:::image type="content" source="media/troubleshoot/failed-connection.png" alt-text="Screenshot of failed connection.":::

::: moniker-end
 
::: moniker range="azure-devops-2019"
When the Azure Boards connection to GitHub no longer has access, it shows an alert status in the user interface with a red-X that has a tooltip such as, *Unable to connect to GitHub*.
::: moniker-end

Consider the following resolutions:  

- **If the connection is using OAuth**:
  - The Azure Boards application had its access denied for one of the repositories.
  - GitHub might be unavailable/unreachable. This unavailability could be because of an outage in either service or an infrastructure/network issue on-premises. You can check service status from the following links:
      - [GitHub](https://status.github.com)  
      - [Azure DevOps](https://status.dev.azure.com/)

	Delete and recreate the connection to the GitHub repository. This recreated connection causes GitHub to prompt to reauthorize Azure Boards.   

- **If the connection is using a PAT:**
  - The PAT  was revoked or the required permission scopes changed and are insufficient.
  - The user perhaps lost administrative permissions on the GitHub repository.  

	Recreate the PAT and ensure the scope for the token includes the required permissions: `repo, read:user, user:email, admin:repo_hook`. For more information, see [Best practices for using PATs](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#best-practices-for-using-pats).

<a id="update-wits"></a>

#### Update XML definitions for select work item types 

If your organization customizes work tracking using the Hosted XML or on-premises XML process model and wants to integrate GitHub link types into the Development section of work item forms, you must update the XML definitions for the corresponding work item types.

For example, to link user stories and bugs to GitHub commits and pull requests within the **Development** section of work item forms, you must update the XML definitions for these work item types.

To modify the XML definitions, do the steps outlined in [Hosted XML process model](../../organizations/settings/work/hosted-xml-process-model.md). For each work item type:
1. Locate the `Group Label="Development"` section.
2. To support the external link types, **GitHub Commit** and **GitHub Pull Request**, add the following lines of code:

This integration enables seamless tracking of GitHub activities directly from your work items in Azure Boards.

> [!div class="tabbedCodeSnippets"]
> ```XML
>              <ExternalLinkFilter Type="GitHub Pull Request" />  
>              <ExternalLinkFilter Type="GitHub Commit" />  
> ```

When it updates, the section should appear as follows. 

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

- [Learn about Azure Boards?](../../boards/get-started/what-is-azure-boards.md)
- [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md)
- [Build GitHub Enterprise Server repositories](../../pipelines/repos/github-enterprise.md)
