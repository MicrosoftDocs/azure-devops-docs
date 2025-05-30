---
title: Index to Azure DevOps CLI examples
titleSuffix: Azure DevOps
description: Find examples that showcase use of Azure DevOps CLI. This article contains an organized list of resources with examples.
ms.topic: conceptual
ms.subservice: azure-devops-reference
ms.custom: devx-track-azurecli
ms.manager: mijacobs 
ms.author: chcomley  
author: chcomley
monikerRange: 'azure-devops'
ms.date: 05/30/2025
#customer intent: As a team member who uses Azure DevOps CLI, I want to find examples to work from in different kinds areas of Azure DevOps.
---

# Index to Azure DevOps CLI examples

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Use this index to quickly access examples that showcase use of the Azure DevOps Command Line Interface (CLI).

To start using Azure DevOps CLI, see [Get started with Azure DevOps CLI](index.md).

> [!NOTE]  
> The Azure DevOps Command Line Interface (CLI) is only available for use with Azure DevOps Services. The Azure DevOps extension for the Azure CLI doesn't support any version of Azure DevOps Server.

## Azure Artifacts

- [Universal Packages - download specific files](../artifacts/quickstarts/download-universal-packages.md#download-specific-files)
- [Create a feed](../artifacts/quickstarts/universal-packages.md#create-a-feed)
- [Download a universal package](../artifacts/quickstarts/download-universal-packages.md#download-universal-packages)
- [Publish a universal package](../artifacts/quickstarts/universal-packages.md#publish-universal-packages)

## Azure Boards

:::row:::
   :::column span="1":::
      #### Area and Iteration Paths
      - [Add a project area path](../organizations/settings/set-area-paths.md#add-an-area-path)
      - [Add a project iteration](../organizations/settings/set-iteration-paths-sprints.md#add-iterations-and-set-iteration-dates)
      - [Rename or move an iteration](../organizations/settings/set-iteration-paths-sprints.md#rename-or-move-an-iteration)
      - [List project areas](../organizations/settings/set-area-paths.md#list-project-areas)
      - [List project iterations](../organizations/settings/set-iteration-paths-sprints.md#list-project-iterations)
      - [List team areas paths](../organizations/settings/set-area-paths.md#list-team-area-paths)
      - [List team iterations](../organizations/settings/set-iteration-paths-sprints.md#list-team-iterations)
      - [Delete an area path](../organizations/settings/set-area-paths.md#delete-an-area-path)
      - [Rename or move an area path](../organizations/settings/set-area-paths.md#rename-or-move-an-area-path)
      - [Set team area paths](../organizations/settings/set-area-paths.md#set-team-area-paths)
      - [Set team iteration paths](../organizations/settings/set-iteration-paths-sprints.md#select-team-sprints-and-set-the-default-iteration-path)
   :::column-end:::
   :::column span="1":::
      #### Queries
      - [Run work item query](../boards/queries/view-run-query.md#run-a-query-in-azure-boards)
      - [Permanently delete work items](../boards/backlogs/remove-delete-work-items.md#az-boards-cli)  
      #### Work items
      - [Add work items](../boards/work-items/view-add-work-items.md) 
      - [Add or remove work item links](../boards/backlogs/add-link.md#link-a-work-item-to-another-work-item)
      - [Delete work items](../boards/backlogs/remove-delete-work-items.md#az-boards-cli)  
      - [List supported link types](../boards/queries/link-type-reference.md#list-link-types)
      - [Move work items](../boards/work-items/move-work-items.md#move-work-items)
      - [Show work item details](../boards/backlogs/add-work-items.md#show-work-item)
      - [Show work item link details](../boards/backlogs/add-link.md#link-a-work-item-to-another-work-item)
      - [Update work items](../boards/backlogs/add-work-items.md#update-work-item)
   :::column-end:::
:::row-end:::


## Organizations, projects, and collections

:::row:::
   :::column span="1":::
      #### Banners
      - [Add and manage banners](../organizations/settings/manage-banners.md#add-and-manage-banners)
      #### Extensions
      - [Install an extension](../marketplace/install-extension.md)
      - [List extensions](../marketplace/install-extension.md#list-extensions)
      - [List extension information](../marketplace/install-extension.md#list-extension-information)
      - [Uninstall or disable an extension](../marketplace/install-extension.md#uninstall-disable-extension)
      #### Manage wikis
      - [Create a wiki](../project/wiki/manage-wikis.md#create-a-wiki)
      - [Create a wiki from a repo](../project/wiki/wiki-create-repo.md)
      - [Delete a wiki](../project/wiki/manage-wikis.md#delete-a-wiki)
      - [List wikis](../project/wiki/manage-wikis.md#list-wikis)
      - [Publish a repo as a wiki](../project/wiki/publish-repo-to-wiki.md)
      - [View wiki details](../project/wiki/manage-wikis.md#show-wiki)
      #### Projects
      - [Create a project](../organizations/projects/create-project.md)
      - [Delete a project](../organizations/projects/delete-project.md)
      - [List projects](../organizations/projects/create-project.md#list-projects)
      - [Show project information](../organizations/projects/create-project.md?tabs=azure-devops-cli#list-projects-with-cli)
      - [Open project in web portal](../organizations/projects/create-project.md?tabs=azure-devops-cli#show-project-information-in-the-web-portal)
   :::column-end:::
   :::column span="1":::
      #### Teams
      - [Add a team](../organizations/settings/add-teams.md#add-team)
      - [Delete a team](../organizations/settings/rename-remove-team.md#delete-a-team)
      - [List team members](../organizations/security/add-users-team-project.md#list-team-members)
      - [List teams](../organizations/settings/add-teams.md#list-teams)
      - [Show team details](../organizations/security/add-users-team-project.md#show-details)
      - [Rename a team](../organizations/settings/rename-remove-team.md##rename-a-team)
      #### User accounts
      - [Add a user](../organizations/accounts/add-organization-users.md#add-users-to-your-organization)
      - [List users](../organizations/security/export-users-audit-log.md?tabs=azure-devops-cli#list-users)
      - [Remove a user](../organizations/accounts/delete-organization-users.md?tabs=azure-devops-cli#remove-user)
      - [Update a user](../organizations/accounts/add-organization-users.md?tabs=azure-devops-cli#update-a-user)
      - [Show users](../organizations/accounts/add-organization-users.md?tabs=azure-devops-cli#show-users)
      #### Wiki pages
      - [Add a wiki page](../project/wiki/add-edit-wiki.md#add-a-wiki-page)
      - [Delete a wiki page](../project/wiki/add-edit-wiki.md?tabs=azure-devops-cli#delete-wiki-page)
      - [Edit a wiki page](../project/wiki/add-edit-wiki.md?tabs=azure-devops-cli#edit-wiki-page)
      - [Open a wiki](../project/wiki/add-edit-wiki.md?tabs=azure-devops-cli#open-wiki)
      - [View a wiki page](../project/wiki/add-edit-wiki.md?tabs=azure-devops-cli#view-a-wiki-page)
   :::column-end:::
:::row-end:::
 
## Azure Pipelines 

:::row:::
   :::column span="1":::
      #### Add and run a pipeline 
      - [Create a pipeline](../pipelines/get-started/manage-pipelines-with-azure-cli.md)
      - [Run a pipeline](../pipelines/get-started/manage-pipelines-with-azure-cli.md#run-a-pipeline)
      - [Show the details of a pipeline](../pipelines/get-started/manage-pipelines-with-azure-cli.md#show-pipeline)
      - [Update a pipeline](../pipelines/get-started/manage-pipelines-with-azure-cli.md#update-a-pipeline)

      #### Agents, agent pools, agent queues 
      - [List agents](../pipelines/agents/agents.md?tabs=yaml%2Cazure-devops-cli#list-agents)
      - [List agent pools](../pipelines/agents/pools-queues.md?tabs=yaml%2Cazure-devops-cli#list-agent-pools)
      - [List agent queues](../pipelines/agents/pools-queues.md?tabs=yaml%2Cazure-devops-cli#list-agent-queues)
      - [Show agent details](../pipelines/agents/agents.md?tabs=yaml%2Cazure-devops-cli#show-agent-details)
      - [Show agent pool details](../pipelines/agents/pools-queues.md?tabs=yaml%2Cazure-devops-cli#show-agent-pool-details)
      - [Show agent queue details](../pipelines/agents/pools-queues.md?tabs=yaml%2Cazure-devops-cli#show-agent-queue-details)

      #### Artifacts
      - [Download your artifact](../pipelines/artifacts/pipeline-artifacts.md#download-artifacts) 
      - [Publish an artifact to your pipeline](../pipelines/artifacts/pipeline-artifacts.md) 
   :::column-end:::
   :::column span="1":::
      #### Runs
      - [Add tag to pipeline run](../pipelines/process/runs.md#add-tag-to-pipeline-run)
      - [Delete tag from pipeline run](../pipelines/process/runs.md#delete-tag-from-pipeline-run)
      - [List pipeline runs](../pipelines/process/runs.md#list-pipeline-runs)
      - [List pipeline run tags](../pipelines/process/runs.md#list-pipeline-run-tags)
      - [Show pipeline run details](../pipelines/process/runs.md#show-pipeline-run-details)

      #### Variables
      - [Create a variable](../pipelines/process/variables.md?tabs=azure-devops-cli%2Cbatch#create-a-variable)
      - [Delete a variable](../pipelines/process/variables.md?tabs=azure-devops-cli%2Cbatch#delete-a-variable)
      - [List variables](../pipelines/process/variables.md#list-variables)
      - [Update a variable](../pipelines/process/variables.md?tabs=azure-devops-cli%2Cbatch#update-a-variable)

      #### Variable groups
      - [Add variables to a variable group](../pipelines/library/variable-groups.md?tabs=azure-devops-cli%2Cyaml#add-variables-to-a-variable-group)
      - [Create a variable group](../pipelines/library/variable-groups.md#create-a-variable-group)
      - [Delete a variable group](../pipelines/library/variable-groups.md#delete-a-variable-group)
      - [Delete variables from a variable group](../pipelines/library/variable-groups.md?tabs=azure-devops-cli%2Cyaml#delete-variables-from-a-variable-group)
      - [List variable groups](../pipelines/library/variable-groups.md?tabs=azure-devops-cli%2Cyaml#list-variable-groups)
      - [List variables in a variable group](../pipelines/library/variable-groups.md?tabs=azure-devops-cli%2Cyaml#list-variables-in-a-variable-group)
      - [Show details for a variable group](../pipelines/library/variable-groups.md?tabs=azure-devops-cli%2Cyaml#show-details-for-a-variable-group)
      - [Update a variable group](../pipelines/library/variable-groups.md?tabs=azure-devops-cli%2Cyaml#update-a-variable-group)
      - [Update variables in a variable group](../pipelines/library/variable-groups.md?tabs=azure-devops-cli%2Cyaml#update-variables-in-a-variable-group)
   :::column-end:::
:::row-end:::

## Azure Repos

:::row:::
   :::column span="1":::
      #### Create and manage Git repositories  
      - [Create a repository](../repos/git/share-your-code-in-git-cmdline.md)
      - [Delete a repository](../repos/git/delete-existing-repo.md)
      - [Import a repository](../repos/git/import-git-repository.md)
      - [List repositories](../repos/git/repository-settings.md?tabs=azure-devops-cli#list-repositories)
      - [Rename a repository](../repos/git/repo-rename.md)
      - [Show repository details](../repos/git/repository-settings.md?tabs=azure-devops-cli#list-repository-details)
      - [Update a repository](../repos/git/repository-settings.md?tabs=azure-devops-cli#update-a-repository)
      #### Manage repository policies
      - [List repository policies](../repos/git/repository-settings.md?tabs=azure-devops-cli#list-policies)
      - [Show repository policies](../repos/git/repository-settings.md?tabs=azure-devops-cli#show-policy-details)
      - [Manage case enforcement policy](../repos/git/repository-settings.md?tabs=azure-devops-cli#create-case-enforcement-policy)
      - [Manage file size policy](../repos/git/repository-settings.md?tabs=azure-devops-cli#create-file-size-policy)  
      - [Update repository policy](../repos/git/repository-settings.md?tabs=azure-devops-cli#update-policies)
      #### Manage branch policies
      - [List branch policies](../repos/git/branch-policies.md#configure-branch-policies)
      - [Show branch policy](../repos/git/branch-policies.md?tabs=azure-devops-cli#show-details-of-a-policy)
      - [Create policies using a configuration file](/cli/azure/repos/policy#az-repos-policy-create)
      - [Update policies using a configuration file](/cli/azure/repos/policy#az-repos-policy-update)
      - [Manage required reviewer policy](../repos/git/branch-policies.md#require_reviewers)
      - [Manage external required reviewer policies](../repos/git/branch-policies.md#require-approval-from-external-services)
      - [Manage build validation policies](../repos/git/branch-policies.md#build-validation)
      - [Manage comment-required policy](../repos/git/branch-policies.md#check-comment-resolution)
      - [Manage merge strategy policy](../repos/git/branch-policies.md#limit-merge-types)
      - [Create work item linking policy](../repos/git/branch-policies.md?tabs=azure-devops-cli#create-work-item-linking-policy)
      - [Update work item linking policy](../repos/git/branch-policies.md?tabs=azure-devops-cli#update-work-item-linking-policy)
   :::column-end:::
   :::column span="1":::
      #### Pull requests
      - [Create a pull request](../repos/git/pull-requests.md#create-a-new-pull-request)
      - [Create a draft pull request](../repos/git/pull-requests.md#draft-pull-requests)
      - [Edit a pull request, add details](../repos/git/pull-requests.md?tabs=azure-devops-cli#add-or-edit-pull-request-title-and-description)
      - [Add reviewers to a pull request](../repos/git/pull-requests.md#add-and-remove-reviewers)
      - [Link work items to a pull request](../repos/git/pull-requests.md#link-work-items)  
      - [List pull requests](../repos/git/view-pull-requests.md#list-pull-requests)
      - [Define a custom pull request view](../repos/git/view-pull-requests.md#define-custom-pr-view)
      - [Show pull request details](../repos/git/view-pull-requests.md#open-pr)
      - [Set vote on a pull request](../repos/git/review-pull-requests.md#set-vote)
      - [Reset vote on a pull request](../repos/git/review-pull-requests.md)
      - [Complete or update a pull request](../repos/git/complete-pull-requests.md#complete-the-pull-request)
      - [Set pull request completion options](../repos/git/complete-pull-requests.md?tabs=azure-devops-cli#set-completion-options)
      - [Set pull request to autocomplete](../repos/git/complete-pull-requests.md#complete-automatically)
      - [Abandon a pull request](../repos/git/complete-pull-requests.md#abandon-pr)
      - [Manage pull request policies](/cli/azure/repos/pr/policy)
      - [Manage pull request reviewers](/cli/azure/repos/pr/reviewer)
      #### Import and manage references
      - [Create a reference](/cli/azure/repos/ref#az-repos-ref-create)
      - [Delete a reference](/cli/azure/repos/ref##az-repos-ref-delete)
      - [List references](/cli/azure/repos/ref#az-repos-ref-list)
      - [Lock a reference](/cli/azure/repos/ref#az-repos-ref-lock)
      - [Unlock a reference](/cli/azure/repos/ref#az-repos-ref-unlock)
   :::column-end:::
:::row-end:::

## Security groups and permissions  

- [Add a member to a security group](../organizations/security/add-manage-security-groups.md#add-a-member-to-a-group)
- [Assign allow or deny permission to specified user or group](../organizations/security/manage-tokens-namespaces.md#update-permissions)
- [Clear all permissions of this token for a user or group](../organizations/security/manage-tokens-namespaces.md#reset-all-permissions)
- [Create a security group](../organizations/security/add-manage-security-groups.md#create-a-security-group)  
- [Delete a security group](../organizations/security/add-manage-security-groups.md#delete-a-security-group)  
- [List tokens for specified user or group and namespace](../organizations/security/manage-tokens-namespaces.md#list-tokens-for-a-security-namespace)
- [List all available namespaces for an organization](../organizations/security/manage-tokens-namespaces.md#list-security-namespaces)
- [List security groups](../organizations/security/add-manage-security-groups.md#list-security-groups)
- [List the memberships for a group or user](../organizations/security/add-manage-security-groups.md#list-memberships-for-a-group-or-user)  
- [Remove a member from a security group](../organizations/security/add-manage-security-groups.md#remove-a-member-from-a-group)  
- [Reset permission for specified permission bit(s)](../organizations/security/manage-tokens-namespaces.md#reset-permissions)
- [Show details of a security group](../organizations/security/add-manage-security-groups.md#show-security-group-details)
- [Show details of permissions available in each namespace](../organizations/security/manage-tokens-namespaces.md#show-namespace-details)
- [Show permissions for specified token, namespace, and user or group](../organizations/security/manage-tokens-namespaces.md#show-permissions)
- [Update a security group](../organizations/security/add-manage-security-groups.md#update-a-security-group)

## Service endpoints or service connections

- [Create a GitHub service endpoint](service-endpoint.md#create-a-github-service-endpoint)
- [Create an Azure RM service endpoint](service-endpoint.md#create-an-azure-resource-manager-service-endpoint)
- [Create service endpoint using a configuration file](service-endpoint.md#create-service-endpoint-using-a-configuration-file)
- [List service endpoints](/cli/azure/devops/service-endpoint#az-devops-service-endpoint-list)
- [Delete a service endpoint](/cli/azure/devops/service-endpoint#az-devops-service-endpoint-delete)
- [Manage GitHub service endpoints](/cli/azure/devops/service-endpoint/github)
- [Show details of a service endpoint](/cli/azure/devops/service-endpoint#az-devops-service-endpoint-show)
- [Update a service endpoint](/cli/azure/devops/service-endpoint#az-devops-service-endpoint-update)

## Related articles

- [Cross-service integration overview](../cross-service/cross-service-overview.md)
- [witAdmin: Customize and manage objects for tracking work](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)

## Azure CLI reference articles  

- [az artifacts](/cli/azure/artifacts)
- [az boards](/cli/azure/boards)
- [az devops](/cli/azure/devops)
- [az pipelines](/cli/azure/pipelines)
- [az repos](/cli/azure/repos)
