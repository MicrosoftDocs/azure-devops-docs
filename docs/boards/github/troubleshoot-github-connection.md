---
title: Troubleshoot a GitHub repo connection to an Azure Boards project
titleSuffix: Azure Boards
description: Learn how to resolve connection problems with a GitHub repository and Azure Boards project.  
ms.service: azure-devops-boards
ms.topic: troubleshooting
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 10/20/2021
---

# Troubleshoot an Azure Boards-GitHub integration 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

The Azure Boards-GitHub integration relies on various authentication protocols to support the connection. Changes to a user's permission scope or authentication credentials can cause revocation of the GitHub repositories connected to Azure Boards. 
 
For an overview of the integration that the Azure Boards app for GitHub supports, see [Azure Boards-GitHub integration](index.md).  

## Supported authentication options

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


## Grant Azure Boards organization access 

If the integration between Azure Boards and GitHub isn't working as expected, verify you've granted organization access. 

1. From GitHub web portal, open **Settings** from your profile menu.  
	:::image type="content" source="media/troubleshoot/choose-settings.png" alt-text="Screenshot of open profile, choose Settings.":::

1. Next, choose **Applications** under **Integrations**.  

1. Choose the **Authorized OAuth Apps** tab, and then choose **Azure Boards**.  
	:::image type="content" source="media/troubleshoot/open-azure-boards.png" alt-text="Screenshot of Authorized OAuth Apps tab, choose Azure Boards.":::

1. Under **Organization access**, resolve any issues that may appear. Choose **Grant** to grant access to any organizations that show as having an **Access request pending**. 
	:::image type="content" source="media/troubleshoot/organization-access-issues.png" alt-text="Screenshot of Organization access with organizations without access.":::
 

## Resolve connection issues

::: moniker range=">= azure-devops-2020"
When the Azure Boards connection to GitHub no longer has access, it shows an alert status in the user interface with a red-X. Hover over the alert and it indicates that the credentials are no longer valid. To correct the problem, remove the connection and recreate a new connection.

:::image type="content" source="media/troubleshoot/failed-connection.png" alt-text="Screenshot of failed connection.":::

::: moniker-end
 
::: moniker range="azure-devops-2019"
When the Azure Boards connection to GitHub no longer has access, it shows an alert status in the user interface with a red-X that has a tooltip such as, *Unable to connect to GitHub*.
::: moniker-end

To resolve the problem, consider the following items:  

- **If the connection is using OAuth**:
  - The Azure Boards application had its access denied for one of the repositories.
  - GitHub might be unavailable/unreachable. This unavailability could be because of an outage in either service or an infrastructure/network issue on-prem. You can check service status from the following links:
      - [GitHub](https://status.github.com)  
      - [Azure DevOps](https://status.dev.azure.com/)

	To resolve the first issue, delete and recreate the connection to the GitHub repository. This recreated connection will cause GitHub to prompt to reauthorize Azure Boards.   

- **If the connection is using a PAT:**
  - The PAT may have been revoked or the required permission scopes changed and are insufficient.
  - The user may have lost admin permissions on the GitHub repo.  

	To resolve, recreate the PAT and ensure the scope for the token includes the required permissions: `repo, read:user, user:email, admin:repo_hook`. 




<a id="ghe-dataimport" />

## Resolve broken GitHub Enterprise Server connection  

If you've migrated from Azure DevOps Server to Azure DevOps Services with an existing GitHub Enterprise Server connection, your existing connection won't work as expected. Work item mentions within GitHub may be delayed or never show up in Azure DevOps Services. This problem occurs because the callback url associated with GitHub is no longer valid. 

To resolve the problem, consider the following solutions:

- **Remove and re-create the connection**:
  Remove and re-create the connection to the GitHub Enterprise Server repository. Follow the sequence of steps provided in [Connect from Azure Boards](connect-to-github.md#github-ent-oauth-services) documentation.

- **Fix the webhook url**:
  Go to GitHub's repository settings page and edit the webhook url to point out to the migrated Azure DevOps Services organization url: ```https://dev.azure.com/{OrganizationName}/_apis/work/events?api-version=5.2-preview```
 

::: moniker range="azure-devops"

<a id="integrate-repo-to-several-organizations" />

## Connecting to multiple Azure DevOps organizations 

If you connect your GitHub repository to two or more projects that are defined in more than one Azure DevOps organization, such as dev.azure.com/Contoso and dev.azure.com/Fabrikam, you may get unexpected results when using **AB#** mentions to link to work items. This problem occurs because work item IDs aren't unique across Azure DevOps organizations, so **AB#12** can refer to a work item in either the Contoso or Fabrikam organization. So, when a work item is mentioned in a commit message or pull request, both organizations attempt to create a link to a work item with a matching ID (if one exists). 

In general, a user intends an **AB#** mention to link to a single work item in one of the projects. However, if a work item of the same ID exists in both accounts, then links are created for both work items, likely causing confusion.

Currently, there's no way to work around this issue, so we recommend that you connect a single GitHub repository only to a single Azure DevOps organization. 

> [!NOTE]  
> When making the connection by using the Azure Boards app for GitHub, the app prevents you from connecting to two different organizations. If a GitHub repository is incorrectly connected to the wrong Azure DevOps organization, you'll need to contact the owner of that organization to remove the connection before you'll be able to add the repository to the correct Azure DevOps organization.  

::: moniker-end


<a id="update-wits" />

## Update XML definitions for select work item types 

If your organization uses the Hosted XML or On-premises XML process model to customize the work tracking experience and you want to link to and view the GitHub link types from the Development section in the work item forms, you'll need to update the XML definitions for the work item types. 

For example, if you want to link user stories and bugs to GitHub commits and pull requests from the **Development** section, you need to update the XML definitions for user stories and bugs. 

Follow the sequence of tasks provided in [Hosted XML process model](../../organizations/settings/work/hosted-xml-process-model.md) to update the XML definitions. For each work item type, find the `Group Label="Development"` section, and add the following two lines in the following code syntax to support the external links types: **GitHub Commit** and **GitHub Pull Request**.  


> [!div class="tabbedCodeSnippets"]
> ```XML
>              <ExternalLinkFilter Type="GitHub Pull Request" />  
>              <ExternalLinkFilter Type="GitHub Commit" />  
> ```

When updated, the section should appear as shown. 


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

<a id="ghe-dataimport" />

## Related articles

- [Add or remove GitHub repositories](add-remove-repositories.md)
- [Change repository access to Azure Boards](change-azure-boards-app-github-repository-access.md)  


