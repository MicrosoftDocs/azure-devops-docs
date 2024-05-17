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

When migration completes, an email gets sent to the organization owner and at this point, anyone with access can sign in to the newly migrated Azure DevOps Services organization. But, before you make the organization available to all users, you should complete the common tasks listed within this article.

## Spot check 

Immediately after the organization becomes available, take a small team and do spot checks on the organization. We recommend that this team consists of the project collection administrators. This check shouldn't be in-depth, but rather making sure that major pieces from your collection were brought over.

- **Source code:** Verify that your source code repositories migrated correctly. 
- **Build history:** Ensure your build history made it over. 
- **Area paths:** Confirm that all area paths are still present. 

These quick checks help you catch any missing or incomplete data before opening the organization to your entire user base. 

## Rename organization (optional) 

In the [Get started phase](migration-get-started.md), you might have already created organizations with the final Azure DevOps Services organization names that you want to use. If this is your final migration, you can rename your newly migrated Azure DevOps Services organization to that desired name. For more information, see [Rename your organization](../organizations/accounts/rename-organization.md). 

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

If you have an existing GitHub Enterprise Server connection associated with your Azure DevOps Server, it doesn't work as expected. Work items mentioned within GitHub might be delayed or never show up in Azure DevOps Services. This problem occurs because the callback URL associated with GitHub is no longer valid. 

To resolve the problem, consider the following tasks: 

- **Remove and re-create the connection:** Remove and re-create the connection to the GitHub Enterprise Server repository. Follow the sequence of steps provided in Connect from Azure Boards documentation. 
- **Fix the webhook URL:** Go to GitHub's repository settings page and edit the webhook URL to point to the migrated Azure DevOps Services organization URL: `https://dev.azure.com/{OrganizationName}/_apis/work/events?api-version=5.2-preview`. 

For more information, see [Configure and customize Azure Boards](../boards/configure-customize.md).

## Review permissions  

Your organization includes five free users with [Basic](https://visualstudio.microsoft.com/products/visual-studio-team-services-feature-matrix-vs) access. For more information, see [Add organization users and manage access](../organizations/accounts/add-organization-users.md). 

## Notify your teams  

After your builds are running and license subscription is configured, we recommend that you open the organization to all users for validation. Then individual users can ensure that all the content is in place, has the right access level, and they can pull code.  

Users of TFVC with local workspaces must remap their workspaces against the new organization, and Git users must reconfigure their remotes to pull code.  

If anything is missing from the migrated organization, [contact Support](https://visualstudio.microsoft.com/support/).  

## Next steps 

> [!div class="nextstepaction"]
> [Get Azure DevOps Services extensions (optional)](https://marketplace.visualstudio.com/azuredevops?utm_source=ms&utm_medium=guide&utm_campaign=vstsdataimportguide)

## Related articles 

- [Validate and prepare for migration](migration-validate.md)
- [Prepare for test run](migration-prepare-test-run.md) 
- [Do test run migration](migration-test-run.md)
- [Migrate to Azure DevOps Services](migration-migrate.md)
