---
title: Complete post migration tasks
titleSuffix: Azure DevOps
description: Guidance on how to configure an organization after it migrates to Azure DevOps Services.
ms.topic: conceptual
ms.subservice: azure-devops-migrate
ms.contentid: db186305-0d82-4152-bb04-e7b44b56305f
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 05/17/2024
---

# Complete post migration tasks

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

When migration completes, an email gets sent to the organization owner. At this point, anyone with access can sign in to the newly migrated Azure DevOps Services organization. While the organization is ready for your team members to use, you must do the following post-migration activities.

## Spot check 

Immediately after the organization becomes available, take a small team and do spot checks on the organization. We recommend that this team consists of the project collection administrators. This shouldn't be an in-depth check, but rather making sure that major pieces from your collection were brought over.

- **Source code:** Verify that your source code repositories migrated correctly. 
- **Build history:** Ensure your build history made it over. 
- **Area paths:** Confirm that all area paths are still present. 

These quick checks help you catch any missing or incomplete data before opening the organization to your entire user base. 

## Rename organization (optional) 

In the [Get started phase](migration-get-started.md), you may have preemptively created organizations with the final Azure DevOps Services organization names that you want to use. If this is your final migration, you can rename your newly migrated Azure DevOps Services organization to that desired name. For more information, see [Rename your organization](../organizations/accounts/rename-organization.md). 

## Set up billing 

To pay for users or services in Azure DevOps, like hosted build and deployment agents, you need to set up billing for your organization. If you migrate more than one collection, you should ensure all your organizations are set up for billing with the same Azure subscription, and that your subscription is enabled for [multi-organization billing](../organizations/billing/billing-faq.yml). You can then assign as many Basic users as you need free of charge during the calendar month in which you run the migration. 

## Configure build agents 

If you used automated build or deployment servers in your Azure DevOps Server environment, you can connect them to your Azure DevOps Services organization. As part of the migration, all your build definitions got migrated, but you must reconfigure agents and pools against your new Azure DevOps Services organization.  

For more information, see [Azure Pipelines agents](../pipelines/agents/agents.md).

If you plan to use your existing on-premises private build agents, you must clear their cache, which ensures that you don't encounter any build issues related to older Team Foundation Version Control (TFVC) or Git pointers to your on-premises collection. For more information, see refreshing caches on client computers. 

> [!TIP]
> If you used Release Management in Azure DevOps Server, then your release pipelines and history data migrated. But like with builds, you must reconfigure your agents(link again) and pools against the new organization. 

## Use Azure Artifacts 

Azure Artifacts is included with Azure DevOps Services for all users granted a Basic license. There's no need to install an extension. Your Azure Artifacts data should be available post migration. For more information, see [Azure Artifacts overview](../artifacts/start-using-azure-artifacts.md).

## Customize Azure Boards 

If you have an existing GitHub Enterprise Server connection associated with your Azure DevOps Server, it won't work as expected. Work items mentioned within GitHub might be delayed or never show up in Azure DevOps Services. This problem occurs because the callback URL associated with GitHub is no longer valid. 

To resolve the problem, consider the following tasks: 

- **Remove and re-create the connection:** Remove and re-create the connection to the GitHub Enterprise Server repository. Follow the sequence of steps provided in Connect from Azure Boards documentation. 
- **Fix the webhook URL:** Go to GitHub's repository settings page and edit the webhook URL to point out to the migrated Azure DevOps Services organization URL: `https://dev.azure.com/{OrganizationName}/_apis/work/events?api-version=5.2-preview`. 

For more information, see [Configure and customize Azure Boards](../boards/configure-customize.md).

## Review permissions  

Your organization includes five free users with [Basic](https://visualstudio.microsoft.com/products/visual-studio-team-services-feature-matrix-vs) access. For more information, see [Add organization users and manage access](../organizations/accounts/add-organization-users.md). 

## Notify your teams  

After your builds are running and license subscription is configured, we recommend that you open the organization to all users for validation. Then individual users can ensure that all the content is in place, has the right access level, and they can pull code.  

Users of TFVC with local workspaces must remap their workspaces against the new organization, and Git users must reconfigure their remotes to pull code.  

If anything is missing from the migrated organization, [contact Support]().  

## Next steps 


[Get Azure DevOps Services extensions (optional)](https://marketplace.visualstudio.com/azuredevops?utm_source=ms&utm_medium=guide&utm_campaign=vstsdataimportguide)

## Related articles 

- Validate and prepare for migration(link) 
- Prepare for test run(link) 
- Do test run migration(link) 
- Migrate to Azure DevOps Services(link) 

 














































Once a successful import is completed, an organization is ready to use. However, before you make it available to all users, there are several common tasks you should complete. See the following list of the most typical tasks that should be completed after import, in the recommended order of execution.

> [!NOTE]
> We recommend that you use the [Migration Guide](https://aka.ms/AzureDevOpsImport) to progress through your import. The guide links to the technical documentation as needed.
>
> With the release of Azure DevOps Server 2019 the TFS Database Import Service was rebranded to become data migration tool for Azure DevOps. This includes TfsMigrator becoming the data migration tool or migrator for short. This service still works exactly the same as the old Import Service. If you're on an older version of on-premises with TFS as the branding you can still use this feature to migrate to Azure DevOps as long as you upgrade to one of the supported versions. 


## Immediately after import

Immediately after the organization becomes available, take a small team and perform spot checks on the organization. We recommend that this team consists of the project collection administrators. This shouldn't be an in-depth check, but rather making sure that major pieces from your collection were brought over. Did your source code get imported? Are you seeing your build history? Are all of our area paths still present? It's best to confirm these artifacts are present before opening the organization to the entirety of your user base. 

After you check the organization, consider whether you want to rename it. [Renaming an organization](../organizations/accounts/rename-organization.md) is a simple operation, but it has [large impacts](https://support.microsoft.com/kb/2793597) on users currently using the organization. Some examples being Team Explore connections breaking or bookmarks no longer working. Getting a rename out of the way while it's just a small group of users using the organization allows the rest of the users to come in and configure their connections once. 

## Set up billing

To pay for users or services in Azure DevOps, like hosted build and deployment agents, you need to [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) for your organization. If you import more than one collection, you should ensure all your organizations are set up for billing with the same Azure subscription, and that your subscription is enabled for [multi-organization billing](../organizations/billing/billing-faq.yml). You can then assign as many Basic users as you need free of charge during the calendar month in which you run the import.

## Manage users and access

Your organization includes five free users with [Basic](https://visualstudio.microsoft.com/products/visual-studio-team-services-feature-matrix-vs) access. Basic includes features like Git and Team Foundation version control, tools for Agile planning and Java teams, and more. Also, you can add [Visual Studio subscribers](https://visualstudio.microsoft.com/products/how-to-buy-vs) for free&mdash;they get basic features plus other features&mdash;based on their subscription level. Also, you can add [Stakeholder](../organizations/security/get-started-stakeholder.md) for free, which allows them to have partial access to Agile tools, create work items, and view backlogs and boards.

As Visual Studio subscribers sign in to the organization, they're  automatically detected. For all other users, you need to [assign paid access](../organizations/billing/buy-basic-access-add-users.md). Keep in mind, if you automate access using [group rules](../organizations/accounts/assign-access-levels-by-group-membership.md), the rules only apply to existing users if you [remove direct assignments](../organizations/accounts/assign-access-levels-by-group-membership.md#remove-direct-assignments), which were applied to users during import. 

**Behavior change**&mdash;Starting November 13, 2019, the default access behavior for imports will change. Previously, all imports tried to give users an equivalent access level post import. This means that users that had **_Basic_** received Basic access, and other users started with **_Stakeholder_** access. Once this change happens, all users start out with free **_Stakeholder_** access. **You will continue to be able to assign Basic access to any users who need it at no cost, until the end of the calendar month during which your import is run.** If you have any questions or concerns about this change, feel free to [contact us](mailto:AzureDevOpsImport@microsoft.com?subject=Default%20access%20level%20change).

## Builds

Next, you want to configure your build agents. As part of the migration, all of your build pipelines have been brought over, but agents and pools need to be reconfigured against the new organization. Azure DevOps offers the ability to use a Microsoft-hosted pool of build agents that you can use, or you can connect your self-hosted build agent(s). It's important to note that only one self-hosted build agent is included for free. After that there's a [fee](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/) for having more self-hosted build agents. To pay for Microsoft-hosted and self-hosted build agents, you need to link a subscription to your organization. See the following resources for details on performing this task:

* [Build Agents](../pipelines/agents/agents.md) 

If you plan on using your existing on-premises private build agents, there's one more recommended step that needs to be taken after registering them to your new organization. Clearing their cache ensures that you don't encounter any build issues related to older TFVC or Git pointers to your on-premises collection. See [refreshing caches on client computers](/azure/devops/server/admin/backup/refresh-data-caches) for details on how to accomplish this task. 

## Release management

If you used Release Management in Azure DevOps Server, then your release pipelines and history data are included with your import. However, like builds, you need to reconfigure your [agents](../pipelines/agents/agents.md) and pools against the new organization. 

## Azure Artifacts

Azure Artifacts is included with Azure DevOps Services for all users granted a **Basic** license. There's no need to install an extension. Your Azure Artifacts data should be available post import.  

## Azure Boards

If you have an existing GitHub Enterprise Server connection associated with your Azure DevOps Server, it will not work as expected. Work item mentions, within GitHub, may be delayed or never show up in Azure DevOps Services. This problem occurs because the callback URL associated with GitHub is no longer valid. 

To resolve the problem, consider the following items:

- **Remove and re-create the connection**:
  Remove and re-create the connection to the GitHub Enterprise Server repository. Follow the sequence of steps provided in [Connect from Azure Boards](../boards/github/connect-to-github.md#connect-azure-devops-services-to-github-enterprise-server) documentation.

- **Fix the webhook url**:
  Go to GitHub's repository settings page and edit the webhook url to point out to the migrated Azure DevOps Services organization url: ```https://dev.azure.com/{OrganizationName}/_apis/work/events?api-version=5.2-preview```

## Notify your teams

After your builds are running and license subscription is configured, we recommend that you open up the organization to all users for validation. Then individual users can ensure that all of the content is in place, they have the right access level, and that they can pull code. Be sure to point users to our [documentation](../organizations/accounts/set-up-vs.md) on connecting to Azure DevOps Services from all of our supported IDEs and Team Explorer.  

Users of TFVC with local workspaces need to remap their workspaces against the new organization and Git users have to reconfigure their remotes to be able to pull code. 

If anything is reported as missing from the migrated organization, reach out to [AzureDevOpsImport@microsoft.com](mailto:AzureDevOpsImport@microsoft.com). For other functional issues, reach out to [customer support](https://visualstudio.microsoft.com/support/).
