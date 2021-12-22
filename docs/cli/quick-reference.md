---
title: Index to az devops CLI examples
titleSuffix: Azure DevOps
description: Index to az devops CLI examples  
ms.topic: conceptual
ms.prod: devops 
ms.technology: devops-reference
ms.manager: mijacobs 
ms.author: kaelli  
author: KathrynEE
monikerRange: '>= azure-devops-2020'
ms.date: 10/26/2021
---

# Index to az devops examples 


[!INCLUDE [temp](../includes/version-all.md)]

Use this index to quickly access examples that showcase use of command line tools.  For a list of commands that support Azure DevOps operations, see the following Azure CLI reference articles: 
- [az artifacts](/cli/azure/azure-cli-reference-for-devops#azure-artifacts)
- [az boards](/cli/azure/azure-cli-reference-for-devops#azure-boards)
- [az devops](/cli/azure/azure-cli-reference-for-devops#azure-devops-organizations)
- [az pipelines](/cli/azure/azure-cli-reference-for-devops#azure-pipelines)
- [az repos](/cli/azure/azure-cli-reference-for-devops#azure-repos)



> [!NOTE]  
> The Azure DevOps Command Line Interface (CLI) is available for Azure DevOps Server 2020 and Azure DevOps Services. 

## Azure Artifacts

- [Universal Packages - download specific files](../artifacts/quickstarts/universal-packages.md#download-specific-files)
- [Create a feed](../artifacts/quickstarts/universal-packages.md) 
- [Download a universal package](../artifacts/quickstarts/universal-packages.md#download-universal-packages) 
- [Publish a universal package](../artifacts/quickstarts/universal-packages.md#publish-universal-packages) 
 
## Azure Boards

 
:::row:::
   :::column span="1":::
      #### Area and Iteration Paths
      - [Add a project area path](../organizations/settings/set-area-paths.md#add-area) 
      - [Add a project iteration](../organizations/settings/set-iteration-paths-sprints.md#add-project-iteration)
      - [Delete or update a project iteration path](../organizations/settings/set-iteration-paths-sprints.md#delete-update-iteration-paths)
      - [List project area paths](../organizations/settings/set-area-paths.md#list-areas) 
      - [List project iteration paths](../organizations/settings/set-iteration-paths-sprints.md#iteration-project-list) 
      - [List team areas paths](../organizations/settings/set-area-paths.md#list-team-area-paths) 
      - [List team iteration paths](../organizations/settings/set-iteration-paths-sprints.md#list-team-iteration-paths) 
      - [Remove area path from a team](../organizations/settings/set-area-paths.md#remove-area-path-from-team)
      - [Rename or move a project area path](../organizations/settings/set-area-paths.md#rename-move-project-area-path) 
      - [Set team area paths](../organizations/settings/set-area-paths.md#set-team-area-paths) 
      - [Set team iteration paths](../organizations/settings/set-iteration-paths-sprints.md#set-team-iteration-paths) 
      #### Queries 
      - [Run work item query](../boards/queries/view-run-query.md#run-a-query-in-azure-boards)
      - [Permanently delete work items](../boards/backlogs/remove-delete-work-items.md#az-boards-cli)  
   :::column-end:::
   :::column span="1":::
      #### Teams
      - [Add a team](../organizations/settings/add-teams.md#add-team)
      - [Delete a team](../organizations/settings/rename-remove-team.md#delete-team)
      - [List team members](../organizations/security/add-users-team-project.md#list-members)
      - [List teams](../organizations/settings/add-teams.md#list-teams) 
      - [Show team details](../organizations/security/add-users-team-project.md#show-details)
      - [Update a team](../organizations/settings/rename-remove-team.md#update-team) 
      #### Work items
      - [Add work items](../boards/work-items/view-add-work-items.md) 
      - [Delete work items](../boards/backlogs/remove-delete-work-items.md#az-boards-cli)  
      - [List supported link types](../boards/queries/link-type-reference.md#list-link-types)
      - [Move work items](../organizations/settings/add-teams.md#move-work-items) 
      - [Show work item details](../boards/backlogs/add-work-items.md#show-work-item) 
      - [Update work items](../boards/backlogs/add-work-items.md#update-work-item) 
   :::column-end:::
:::row-end:::
 
 

## Organizations 

:::row:::
   :::column span="1":::
      #### Banners
      - [Add a new banner](../organizations/settings/manage-banners.md)
      - [List banners](../organizations/settings/manage-banners.md#list-banners)
      - [Remove a banner](../organizations/settings/manage-banners.md#remove-a-banner)
      - [Show banner details](../organizations/settings/manage-banners.md#list-banner-details)
      - [Update a banner](../organizations/settings/manage-banners.md#update-a-banner)
   :::column-end:::
   :::column span="1":::
      #### User accounts
      - [Add a user](../organizations/accounts/add-organization-users.md#add-user)
      - [List users](../organizations/security/export-users-audit-log.md#list-users)
      - [Remove a user](../organizations/accounts/delete-organization-users.md#remove-user)
      - [Update a user](../organizations/accounts/add-organization-users.md#update-user)
      - [Show users](../organizations/accounts/add-organization-users.md#show-users)
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
      - [List agents](../pipelines/agents/agents.md#list-agents)
      - [List agent pools](../pipelines/agents/pools-queues.md#list-agent-pools)
      - [List agent queues](../pipelines/agents/pools-queues.md#list-agent-queues)
      - [Show agent details](../pipelines/agents/agents.md#show-agent-details)
      - [Show agent pool details](../pipelines/agents/pools-queues.md#show-agent-pool-details)
      - [Show agent queue details](../pipelines/agents/pools-queues.md#show-agent-queue-details)

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
      - [Create a variable](../pipelines/process/variables.md#create-variable)
      - [Delete a variable](../pipelines/process/variables.md#delete-variable)
      - [List variables](../pipelines/process/variables.md#list-variables)
      - [Update a variable](../pipelines/process/variables.md#update-variable)

      #### Variable groups
      - [Add variables to a variable group](../pipelines/library/variable-groups.md#create-a-variable-group)
      - [Create a variable group](../pipelines/library/variable-groups.md#create-variable-group)
      - [Delete a variable group](../pipelines/library/variable-groups.md#delete-variable-group)
      - [Delete variables from a variable group](../pipelines/library/variable-groups.md#delete-variables-group)
      - [List variable groups](../pipelines/library/variable-groups.md#list-variable-groups)
      - [List variables in a variable group](../pipelines/library/variable-groups.md#list-variables-group)
      - [Show details for a variable group](../pipelines/library/variable-groups.md#show-variable-group)
      - [Update a variable group](../pipelines/library/variable-groups.md#update-variable-group)
      - [Update variables in a variable group](../pipelines/library/variable-groups.md#update-variables-group)
   :::column-end:::
:::row-end:::

## Azure Repos 

:::row:::
   :::column span="1":::
      #### Create and manage repositories  
      - [Create a Git repository](../repos/git/share-your-code-in-git-cmdline.md)
      - [Import Git repositories](/cli/azure/repos/import)
      - [List repositories](../repos/git/repository-settings.md)
      #### Manage policies
      - [List policies](../repos/git/repository-settings.md#repos-policy-list)
      - [Show policy](../repos/git/repository-settings.md#show-policy)
      - [Manage branch policies](/cli/azure/repos/policy)
      - [Manage approver count policy](/cli/azure/repos/policy/approver-count)
      - [Manage build policies](/cli/azure/repos/policy/build)
      - [Manage case enforcement policy](../repos/git/repository-settings.md#create-case-enforcement-policy)
      - [Manage file size policy](../repos/git/repository-settings.md#create-file-size-policy)
      - [Manage comment-required policy](/cli/azure/repos/policy/comment-required) 
      - [Manage merge strategy policy](/cli/azure/repos/policy/merge-strategy)
      - [Manage required reviewer policy](/cli/azure/repos/policy/required-reviewer)
      - [Create work item linking policy](../repos/git/branch-policies.md#create-wi-policy)
      - [Update work item linking policy](../repos/git/branch-policies.md#update-wi-policy)

   :::column-end:::
   :::column span="1":::
      #### Pull requests
      - [Complete or update a pull request](../repos/git/complete-pull-requests.md#complete-the-pull-request)
      - [Abandon a pull request](../repos/git/complete-pull-requests.md#abandon-pr)
      - [Create a pull request](../repos/git/pull-requests.md#create-pr)
      - [Create a draft pull request](../repos/git/pull-requests.md#draft-pull-requests)
      - [Edit a pull request, add details](../repos/git/pull-requests.md#add-details-pr)
      - [Manage work items associated with a pull request](../repos/git/pull-requests.md#link-work-items-pr)
      - [Manage pull request policies](/cli/azure/repos//pr/policy)
      - [Manage pull request reviewers](/cli/azure/repos/pr/reviewer)
      #### Import and manage references
      - [Create a reference](/cli/azure/repos/ref#az_repos_ref_create)
      - [Delete a reference](/cli/azure/repos/ref#az_repos_ref_delete)
      - [List references](/cli/azure/repos/ref#az_repos_ref_list)
      - [Lock a reference](/cli/azure/repos/ref#az_repos_ref_lock)
      - [Unlock a reference](/cli/azure/repos/ref#az_repos_ref_unlock)
   :::column-end:::
:::row-end:::


## Projects, extensions, and wikis 

:::row:::
   :::column span="1":::
      #### Extensions
      - [Install an extension](../marketplace/install-extension.md) 
      - [List extensions](../marketplace/uninstall-disable-extensions.md#list-extensions) 
      - [List extension information](../marketplace/uninstall-disable-extensions.md#list-extension-information) 
      - [Search for extension in the Marketplace](../marketplace/overview.md#search-extension) 
      - [Uninstall an extension](../marketplace/uninstall-disable-extensions.md#uninstall-extension) 
      - [Enable/disable an extension](../marketplace/uninstall-disable-extensions.md#disable-extension) 
      #### Projects
      - [Create a project](../organizations/projects/create-project.md) 
      - [Delete a project](../organizations/projects/delete-project.md) 
      - [List projects](../organizations/projects/create-project.md#list-projects) 
      - [Show project information](../organizations/projects/create-project.md#show-project) 
      - [Open project in web portal](../organizations/projects/create-project.md#show-project) 
   :::column-end:::
   :::column span="1":::
      #### Wikis 
      - [Open a wiki](../project/wiki/add-edit-wiki.md#open-wiki) 
      - [Get the content of a page or open a page](../project/wiki/add-edit-wiki.md#view-a-wiki-page)  
      - [Add a new page](../project/wiki/add-edit-wiki.md#add-a-wiki-page) 
      - [Edit a page](../project/wiki/add-edit-wiki.md#edit-wiki-page) 
      - [Delete a page](../project/wiki/add-edit-wiki.md#delete-wiki-page) 
      - [Create a wiki](../project/wiki/manage-wikis.md#create-a-wiki)    
      - [Delete a wiki](../project/wiki/manage-wikis.md#delete-a-wiki)  
      - [List all the wikis](../project/wiki/manage-wikis.md#list-wikis)  
      - [Show details of a wiki](../project/wiki/manage-wikis.md#show-wiki) 
   :::column-end:::
:::row-end:::


## Security groups and permissions  

- [Add a member to a security group](../organizations/security/add-manage-security-groups.md)
- [Assign allow or deny permission to specified user or group](../organizations/security/manage-tokens-namespaces.md)
- [Clear all permissions of this token for a user or group](../organizations/security/manage-tokens-namespaces.md)
- [Create a security group](../organizations/security/add-manage-security-groups.md)
- [Delete a security group](../organizations/security/add-manage-security-groups.md)<br/>
- [List tokens for specified user or group and namespace](../organizations/security/manage-tokens-namespaces.md)
- [List all available namespaces for an organization](../organizations/security/manage-tokens-namespaces.md)
- [List security groups](../organizations/security/add-manage-security-groups.md)
- [List the memberships for a group or user](../organizations/security/add-manage-security-groups.md)<br/>
- [Remove a member from a security group](../organizations/security/add-manage-security-groups.md)
- [Reset permission for specified permission bit(s)](../organizations/security/manage-tokens-namespaces.md)
- [Show details of a security group](../organizations/security/add-manage-security-groups.md)
- [Show details of permissions available in each namespace](../organizations/security/manage-tokens-namespaces.md)
- [Show permissions for specified token, namespace and user or group](../organizations/security/manage-tokens-namespaces.md)
- [Update a security group](../organizations/security/add-manage-security-groups.md)

## Service endpoints

- [Create a GitHub service endpoint](service-endpoint.md)
- [Create an Azure RM service endpoint](service-endpoint.md)
- [Create service endpoint using a configuration file](service-endpoint.md)
