---
title: Git repository settings
titleSuffix: Azure Repos
description: Learn about settings you can set for a Git repository  
ms.assetid: 9336ed18-c239-4394-aa4c-64b6d01130f9
ms.technology: devops-code-git 
ms.topic: conceptual
ms.date: 10/26/2021
monikerRange: '>= tfs-2017' 
---

# Git repository settings and policies

[!INCLUDE [version-tfs-2018-cloud](../includes/version-tfs-2018-cloud.md)]

You can customize your Azure DevOps Git repositories using repository and policy settings. Global options for entire repositories are configured by repository settings. There are also user-specific and branch-specific controls, covered by [permissions](set-git-repository-permissions.md#git-repository) and [branch policies](branch-policies.md) respectively.  

This article covers server-side repository settings. 
You may also want to learn about client-side [Git preferences](git-config.md).

[!INCLUDE [note-tfs-2018.2-update](includes/note-tfs-2018.2-update.md)]  


For branch-specific settings, review [branch policies](branch-policies.md).
These include options like requiring a pull request, a successful build, or a code review.
For user-specific settings, review [permissions](set-git-repository-permissions.md#git-repository).
Permissions allow you to control who can read, write, contribute to pull requests, and other specific actions.
 


<a id="all-repositories-settings-and-policies" />

## Summary of all repository and branch settings 

You can configure various settings and policies for all repositories, for individual repositories, and for individual branches of a repository. These are all set through **Project Settings**. 

> [!NOTE]
> We  recommend you configure repository settings **either** at the project level or for each individual repo, but not both. If set at both level, the system honors the most restrictive setting.  Configuring these settings at only one level removes this complexity and prevents a decrease in Git performance.


### All repository settings  

The following table summarizes the settings you can enable and configure for all Git repositories that are created for a project. 


:::row:::
   :::column span="2":::
      **Setting**
   :::column-end:::
   :::column span="1"::: 
      **Default**
   :::column-end:::
   :::column span="3"::: 
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [**Default branch name for new repositories**](#default-branch-name)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      When enabled, new repositories are initialized with the name of the branch that you specify. You can change the default branch for a particular repository at any time. The default branch name is `main`.
   :::column-end:::
:::row-end:::
::: moniker range="azure-devops"
:::row:::
   :::column span="2":::
      **Allow users to manage permissions for their created branches**
   :::column-end:::
   :::column span="1"::: 
       On  
   :::column-end:::
   :::column span="3"::: 
      New repositories are configured to allow users to manage permissions for their created branches. 
   :::column-end:::
:::row-end:::
::: moniker-end



### Individual repository settings  

The following table summarizes the settings you can enable and configure to customize for each Git repository. 


:::row:::
   :::column span="2":::
      **Setting**
   :::column-end:::
   :::column span="1"::: 
      **Default**
   :::column-end:::
   :::column span="3"::: 
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [**Forks**](#forks)
   :::column-end:::
   :::column span="1"::: 
       On  
   :::column-end:::
   :::column span="3"::: 
      Allow users to create forks from the repository.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Commit mention linking**](#work-item-linking)
   :::column-end:::
   :::column span="1"::: 
       On  
   :::column-end:::
   :::column span="3"::: 
      Automatically create links for work items mentioned in a commit comment. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Commit mention work item resolution**](#work-item-linking)
   :::column-end:::
   :::column span="1"::: 
       On  
   :::column-end:::
   :::column span="3"::: 
      Allow mentions in commit comments to close work items.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Work item transition preferences**](#work-item-linking)
   :::column-end:::
   :::column span="1"::: 
       On  
   :::column-end:::
   :::column span="3"::: 
      Remember user preferences for completing work items with pull requests.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Permissions management**
   :::column-end:::
   :::column span="1"::: 
       On  
   :::column-end:::
   :::column span="3"::: 
      Allow users to manage permissions for the branches they created
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Strict Vote Mode**
   :::column-end:::
   :::column span="1"::: 
       On  
   :::column-end:::
   :::column span="3"::: 
      Enable Strict Vote Mode for repository which requires Contribute permission to vote in Pull Requests.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Disable Repository**
   :::column-end:::
   :::column span="1"::: 
       On  
   :::column-end:::
   :::column span="3"::: 
      Disable access to to the repository (including builds, pull requests, etc) but keep the repository discoverable with a warning.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Searchable branches**
   :::column-end:::
   :::column span="1"::: 
       On  
   :::column-end:::
   :::column span="3"::: 
      Specify up to 5 additional branches to participate in code search, which by default only applies to the default branch.  
:::row-end:::

 
### Repository policies

The following table summarizes the policies you can define to customize a repository or define to initialize all new repositories with these settings. 

:::row:::
   :::column span="2":::
      **Policy**
   :::column-end:::
   :::column span="1"::: 
      **Default**
   :::column-end:::
   :::column span="3"::: 
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [**Commit author email validation**](#commit-author-email)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Block pushes with a commit author email that does not match the specified patterns.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**File path validation**](#file-path-validation)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Block pushes from introducing file paths that match the specified patterns.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Case enforcement**](#case-enforcement)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Avoid case-sensitivity conflicts by blocking pushes that change name casing on files, folders, branches, and tags. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Reserved names**](#reserved-names)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Block pushes that introduce files, folders, or branch names that include platform reserved names or incompatible characters.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Maximum path length**](#max-path-length)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Block pushes that introduce paths that exceed the specified length.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Maximum file size**](#maximum-file-size)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Block pushes that contain new or updated files larger than this limit.
   :::column-end:::
:::row-end:::

 
### Branch policies

The following table summarizes the policies you can define to customize a branch. For more information on configuring these settings, see [Improve code quality with branch policies](branch-policies.md).  

:::row:::
   :::column span="2":::
      **Policy**
   :::column-end:::
   :::column span="1"::: 
      **Default**
   :::column-end:::
   :::column span="3"::: 
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [**Require a minimum number of reviewers**](branch-policies.md#require_reviewers)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Require approval from a specified number of reviewers on pull requests.
   :::column-end:::
:::row-end:::
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="2":::
      [**Check for linked work items**](branch-policies.md#check-linked-wi)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Encourage traceability by checking for linked work items on pull requests
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="2":::
      [**Check for comment resolution**](branch-policies.md#check-comment-resolution)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Check to see that all comments have been resolved on pull requests.
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="2":::
      [**Limit merge types**](branch-policies.md#limit-merge-types)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Control branch history by limiting the available types of merge when pull requests are completed.
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="2":::
      [**Add Build Validation policies**](branch-policies.md#build-validation)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Add one or more policies to validate code by pre-merging and building pull request changes. Can also enable or disable policies.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Add Status Check policies**](branch-policies.md#require-approval-from-external-services)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Add one or more policies to require other services to post successful status to complete pull requests. Can also enable or disable policies.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Automatically included reviewers**](branch-policies.md#include-code-reviewers)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Add one or more policies to designate code reviewers to automatically include when pull requests change certain areas of code. Can also enable or disable policies.
   :::column-end:::
:::row-end:::

 
## Prerequisites 

::: moniker range=">= azure-devops-2020"

- To set branch policies, you must be a member of the Project Administrators security group or have the repository-level permissions set: **Edit policies**. To learn more, see [Set Git repository permissions](set-git-repository-permissions.md).
- If this is your first time using [`az repos`](/cli/azure/repos?view=azure-cli-latest&preserve-view=true) commands, see [Get started with Azure DevOps CLI](../../cli/index.md).
::: moniker-end

::: moniker range="< azure-devops-2020"
- To set branch policies, you must be a member of the Project Administrators security group or have the repository-level permissions set: **Edit policies**. To learn more, see [Set Git repository permissions](set-git-repository-permissions.md).
::: moniker-end

## View and edit repository settings

#### [Browser](#tab/browser)

::: moniker range="> azure-devops-2019"

1. From your web browser, open the project for your organization in Azure DevOps and choose **Project settings**, **Repositories**, and select your repository.

   :::image type="content" source="media/repository-settings/project-settings-repository-2020.png" alt-text="Screenshot that shows selecting 'Project settings', 'Repositories', and a repo.":::

2. Select **Settings** to view and configure your repository settings.

   :::image type="content" source="media/repository-settings/project-repo-settings-browser-2020.png" alt-text="Screenshot that shows the repo project 'Settings' tab selected.":::

3. Select **Policies** to view and configure project level and cross-repo policies.

   :::image type="content" source="media/repository-settings/project-repo-policies-browser-2020.png" alt-text="Screenshot that shows the repo 'Policies' tab selected.":::

::: moniker-end

::: moniker range="azure-devops-2019"

1. From your web browser, open the project and choose **Project settings**, **Repositories**, and select your repository.

   ![Screenshot of the 'Project Settings' for your repository.](media/repository-settings/project-repository-settings.png)

2. Select **Options** and **Policies** to view and configure your repository settings.

   ![On Options for FabrikamFiber, the Options and Policies tabs are highlighted, and Options is selected.](media/repository-settings/repository-settings.png)

::: moniker-end

::: moniker range="tfs-2018"

1. From your web browser, open the project and choose the gear icon, **Version Control**, and select your repository.

   ![Screenshot that shows the 'Version Control' options for your repository.](media/repository-settings/project-repository-settings-prev-nav.png)

2. Select **options** to view and configure your repository settings.

   ![The options UI](media/repository-settings/repository-settings-tfs2018.2.png)

::: moniker-end

::: moniker range="tfs-2017"

1. From your web browser, open the project and choose the gear icon, **Version Control**, and select your repository.

   ![Screenshot that shows the 'Version Control' options for your repository.](media/repository-settings/project-repository-settings-prev-nav.png)

2. Select **Options** to view and configure your repository settings.

   ![Screenshot that shows the options UI.](media/repository-settings/repository-settings.png)

::: moniker-end


#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range="> azure-devops-2020" 

You can use Azure CLI to list and show policies for a branch or repository.  

[List repo policies](#repos-policy-list) | [Show policy](#show-policy)  


<a id="repos-policy-list" /> 

### Repos policy list

Use [`az repos policy list`](/cli/azure/repos/policy/case-enforcement?view=azure-cli-latest&preserve-view=true#az_repos_policy_list) to list policies..

```azurecli
az repos policy List [--branch]
                     [--query-examples]
                     [--repository-id]
                     [--subscription] 
```

#### Parameters

|Parameter|Description|
|---------|-----------|
|`branch`|(Optional) Branch name to filter results by exact match of branch name. The --repository-id parameter is required to use the branch filter. For example: `--branch master`.|
|`query-examples`|(Optional) Recommend JMESPath string for you. You can copy one of the query and paste it after `--query parameter` within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words.|
|`repository-id`|(Optional) ID of the repository to filter results by exact match of the repository ID. For example `--repository-ID e556f204-53c9-4153-9cd9-ef41a11e3345`.| 

#### Example

The following example retrieves the policy ID and name for all policies created for all repositories and branches for the default configured project using `az repos policy list`. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikamprime project="Fabrikam Fiber"`

```azurecli
>az repos policy list --output table
ID    Name                         Is Blocking    Is Enabled    Repository Id                         Branch
----  ---------------------------  -------------  ------------  ------------------------------------  ---------------------
1     Git repository settings      True           True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  All Branches
3     Work item linking            True           True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/main
5     Minimum number of reviewers  True           True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/main
6     Comment requirements         False          True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/main
7     Minimum number of reviewers  True           True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/big-branch
8     Work item linking            False          True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/big-branch
9     Required reviewers           True           True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/new
10    Required reviewers           True           True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/new
11    Required reviewers           True           True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/new
12    Required reviewers           True           True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/main
13    Required reviewers           False          True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/main

```

<a id="show-policy" /> 

### Show policy

Use [`az repos case-enforcement update`](/cli/azure/repos/policy/case-enforcement?view=azure-cli-latest&preserve-view=true#az_repos_policy_case_enforcement_update) to manage [Case enforcement](#case-enforcement) policy.

```azurecli
az repos policy az repos policy show --id policy-id
                     [--query-examples] 
```

#### Parameters

|Parameter|Description|
|---------|-----------|
|`id policy-id`|(Required) ID of the policy. You can retrieve the policy ID using `az repos policy list`.|
|`query-examples`|(Optional) Recommend JMESPath string for you. You can copy one of the query and paste it after `--query parameter` within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words.|  

#### Example

The following example retrieves the IDs of the existing policies using [`az repos policy list`](/cli/azure/repos/policy?view=azure-cli-latest&preserve-view=true#az_repos_policy_list) and then updates the case enforcement policy in the `FabrikamFiber` repository. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`

```azurecli
>az repos policy show --id 1 --output table
ID    Name                     Is Blocking    Is Enabled    Repository Id                         Branch
----  -----------------------  -------------  ------------  ------------------------------------  ------------
1     Git repository settings  True           True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  All Branches

```


::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

***
<!--- ALL REPOSITORY SETTINGS  --> 


<a id="default-branch-name" />

## Default branch name preference

You can choose any legal branch name to use when a repository is initialized, or change it later if necessary. You can access the setting in two ways:

- **Organization settings** - From the DevOps page, select your project > **Organization settings** > **Repositories**, turn on **Default branch name for new repositories**, and type your default branch name.

    :::image type="content" source="media/repository-settings/organization-settings-change-default-branch-name.png" alt-text="Screenshot that shows the 'Organization Settings', 'Repositories', and 'Default branch name for new repositories' selected.":::

-  **Project settings** - From the project page, select **Project settings** > **Repositories** > **Settings**, turn on **Default branch name for new repositories**, and type your default branch name.

    :::image type="content" source="media/repository-settings/project-settings-custom-default-branch-name-2020.png" alt-text="Screenshot that shows the 'Project Settings', 'Repositories', and 'Default branch name for new repositories' selected.":::

If you don't enable this feature, your repositories will be initialized with the Azure Repos default name, *main*.

## Cross-repo branch policy administration

<!--- introduced in sprint 168 but appears to have been removed or is not under Cross-repo policies under Project settings --> 

You can set policies on a specific branch or the default branch across all repositories in their project. For example, an admin could require two minimum reviewers for all pull requests made into every main branch across every repository in their project. You can find the **Add branch protection** feature in the Repos Project Settings.

:::image type="content" source="media/repository-settings/cross-repo-policies.png" alt-text="Screenshot that shows 'Cross-repo policies' selected, and the 'Add branch protection' window displayed.":::




<!--- REPOSITORY SETTINGS  --> 
 
<a id="forks" />

## Forks

Controls whether users are able to create new server-side [forks](forks.md).
Disabling this setting will not alter existing forks.

From **Project Settings>Repository>Settings**, you can enable or disable **Forks**. 

:::image type="content" source="media/repository-settings/forks.png" alt-text="Repository, Settings, Forks. ":::



<a id="work-item-linking" />

## Work item linking
 
From **Project Settings>Repository>Settings**, you can configure settings that manage work item linking.  

:::image type="content" source="media/repository-settings/work-item-linking-repo-settings.png" alt-text="Repository, Settings, Work item configuration. ":::

:::row:::
   :::column span="1":::
      **Setting**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Commit mention linking**
   :::column-end:::
   :::column span="3":::
      When enabled, commit messages containing "#" followed by a valid work item ID will automatically link the commit to the mentioned work item. Disable this setting when pushing a repository previously contained by a different account or service. Those repositories may have `#mentions` that don't match the work item IDs in the current account.
   :::column-end:::
:::row-end:::
::: moniker range=">=azure-devops-2020"
:::row:::
   :::column span="1":::
      **Commit mention work item resolution**
   :::column-end:::
   :::column span="3":::
       Enable this setting to automatically complete those work items when you successfully complete the PR. Or, you can specify the workflow state to transition the work item to upon merging the PR. To learn more, see [Auto-complete work items with pull requests](../../boards/work-items/auto-complete-work-items-pull-requests.md).
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= tfs-2018 <= azure-devops-2019"
:::row:::
   :::column span="1":::
      **Commit mention work item resolution**
   :::column-end:::
   :::column span="3":::
       Enable this setting to automatically complete those work items when you successfully complete the PR. To learn more, see [Auto-complete work items with pull requests](../../boards/work-items/auto-complete-work-items-pull-requests.md).
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="1":::
      **Work item transition preferences**
   :::column-end:::
   :::column span="3":::
      By default, the option to complete linked work items during pull request completion will remember each user's last choice. Some teams may have different approaches to closing work items, such as at a standup meeting, and may want to discourage users from completing work items with their pull requests. By disabling this setting, users must opt-in to completing work items for each pull request. 
   :::column-end:::
:::row-end:::

<!--- TO BE DOCUMENTED  

## Permissions management
## Strict Vote Mode (moniker for azure-devops-2020, added in Sprint 192)  
## Disable Repository
## Searchable branches

--> 


<!--- REPOSITORY POLICIES --> 


<a id="commit-author-email" /> 
<a id="commit-author-email-validation" />

## Commit author email validation 

You can set a push policy to prevent commits from being pushed to a repository for which the commit author email does not match the provided pattern.

:::image type="content" source="media/repository-settings/add-policy-to-block-commits-email.png" alt-text="Screenshot that shows the 'Policies' tab selected, and the 'Commit author email validation' toggle set to on.":::

From **Project Settings>Repository>Policies**, you can enable or disable **Commit author email validation**. 

:::image type="content" source="media/repository-settings/commit-author-email.png" alt-text="Repository, Policies, Commit author email validation. ":::

You can specify exact emails or use wildcards. Multiple email patterns should use ";" as a separator. Email patterns prefixed with "!" are excluded. Order is important.

<a id="file-path-validation" /> 

## File path validation  

You can set a policy to prevent commits from being pushed to a repository based on file paths. The file path validation policy will block pushes that match the provided pattern.

:::image type="content" source="media/repository-settings/add-policy-to-block-files-patterns.png" alt-text="Screenshot that shows the 'Policies' tab selected, and the 'File path validation' toggle set to on.":::

 
<a id="case-enforcement" /> 

## Case enforcement

::: moniker range=">= tfs-2018"
Git is case-sensitive, meaning that a file called "Foo.txt" is different from a file called "foo.txt".
Windows and macOS default to case-insensitive file systems, meaning that "Foo.txt" and "foo.txt" are the same name.
This can cause problems for users if someone on a case-insensitive system pushes files, folders, branches, or tags that [only differ by letter case](os-compatibility.md).

If most of your users are on Windows or macOS, we recommend turning on the **Case enforcement** setting. Case enforcement switches the server from its default case-sensitive mode, where “File.txt” and “file.txt” are distinct, to a Windows and macOS-friendly mode where “File.txt” and “file.txt” are the same file. This setting affects files, folders, branches, and tags. It also prevents contributors from accidentally introducing case-only differences. Enabling case enforcement is recommended when most of your contributors are running Windows or macOS.


It will block the introduction of new files, folders, branches, or tags that would cause such a conflict.
The user will have to rewrite their unpushed history to fix the problem, then try the push again.

This setting will not fix a repository which already contains objects that only differ by case.
We recommend fixing such issues before turning the policy on.
You can rename files and folders or re-create [branches](create-branch.md) and [tags](git-tags.md) using new, non-conflicting names.

::: moniker-end

#### [Browser](#tab/browser)

::: moniker range=">= tfs-2018"

From **Project Settings>Repository>Policies**, you can enable or disable **Case enforcement**.

:::image type="content" source="media/repository-settings/case-enforcement.png" alt-text="Repository, Policies, Case enforcement setting. ":::

::: moniker-end
::: moniker range="<= tfs-2018"
> [!NOTE]   
> The **Case enforcement** policy requires TFS 2018.2 or later version.  
::: moniker-end
 
#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range="> azure-devops-2019" 
 
You can use Azure CLI to configure or update [Case enforcement](#case-enforcement).

[Create case enforcement policy](#create-case-enforcement-policy) | [Update case enforcement policy](#update-case-enforcement-policy) 


### Create case enforcement policy

Use [`az repos case-enforcement create`](/cli/azure/repos/policy/case-enforcement?view=azure-cli-latest&preserve-view=true#az_repos_policy_case_enforcement_create) to manage [Case enforcement](#case-enforcement) policy.

```azurecli
az repos policy case-enforcement create --blocking {false, true}
                                        --enabled {false, true}
                                        --repository-id
                                        [--detect {false, true}]
                                        [--org]
                                        [--project]
```

**Parameters**

- **blocking**: (Required) Whether the policy should be blocking or not. Accepted values: **false**, **true**
- **enabled**: (Required) Whether the policy is enabled or not. Accepted values: **false**, **true**
- **repository-id**: (Required) ID of the repository on which to apply the policy.
- **detect**: Automatically detect organization. Accepted values: **false**, **true**
- **org** or **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.
- **project** or **-p**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.

**Example**

The following example retrieves the IDs of the existing repositories using `az repos list` and then creates a blocking case enforcement policy in the `FabrikamFiber` repository. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`

```azurecli
az repos list --output table
ID                                    Name           Default Branch    Project
------------------------------------  -------------  ----------------  -------------
6589f9e0-082b-4b96-9dfd-8141b7da409c  FabrikamFiber  master            FabrikamFiber

az repos policy case-enforcement create --blocking true --enabled true --repository-id 6589f9e0-082b-4b96-9dfd-8141b7da409c
{

  <Some properties omitted for space>

  },
  "createdDate": "2019-11-19T15:34:38.854450",
  "id": 4,
  "isBlocking": true,
  "isDeleted": false,
  "isEnabled": true,

  <Some properties omitted for space>

}
```

### Update case enforcement policy

Use [`az repos case-enforcement update`](/cli/azure/repos/policy/case-enforcement?view=azure-cli-latest&preserve-view=true#az_repos_policy_case_enforcement_update) to manage [Case enforcement](#case-enforcement) policy.

```azurecli
az repos policy case-enforcement update --id
                                        [--blocking {false, true}]
                                        [--detect {false, true}]
                                        [--enabled {false, true}]
                                        [--org]
                                        [--project]
                                        [--repository-id]
```

**Parameters**

- **id** or **policy-id**: (Required) ID of the policy.
- **blocking**: Whether the policy should be blocking or not. Accepted values: **false**, **true**
- **detect**: Automatically detect organization. Accepted values: **false**, **true**
- **enabled**: Whether the policy is enabled or not. Accepted values: **false**, **true**
- **org** or **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.
- **project** or **-p**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.
- **repository-id**: (Required) ID of the repository on which to apply the policy.

**Example**

The following example retrieves the IDs of the existing policies using [`az repos policy list`](/cli/azure/repos/policy?view=azure-cli-latest&preserve-view=true#az_repos_policy_list) and then updates the case enforcement policy in the `FabrikamFiber` repository. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`

```azurecli
az repos policy list --output table
ID    Name                     Is Blocking    Is Enabled    Repository Id                         Branch
----  -----------------------  -------------  ------------  ------------------------------------  ------------
2     File size restriction    True           False         6589f9e0-082b-4b96-9dfd-8141b7da409c  All Branches
3     Git repository settings  True           True          6589f9e0-082b-4b96-9dfd-8141b7da409c  All Branches
4     Work item linking        False          False         6589f9e0-082b-4b96-9dfd-8141b7da409c  All Branches
5     Path Length restriction  True           False         6589f9e0-082b-4b96-9dfd-8141b7da409c  All Branches

az repos policy case-enforcement update --blocking false --enabled false --policy-id 4 --output table
ID    Name               Is Blocking    Is Enabled    Repository Id                         Branch
----  -----------------  -------------  ------------  ------------------------------------  ------------
4     Work item linking  False          False         6589f9e0-082b-4b96-9dfd-8141b7da409c  All Branches
```


::: moniker-end


[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

***

<a id="reserved-names" />
<a id="max-path-length" />

## Reserved names and Maximum path length

Not all [files names](os-compatibility.md) are allowed on the three major OS file systems (Windows, macOS, and Linux). Developers can push commits to a shared repository that may contain files or folders with names that are invalid on one or more platforms. Working directory can become corrupted if invalid files or folders are fetched and checked out on a platform.

From **Project Settings>Repository>Policies**, you can enable or disable two policies to place restrictions on file names and file paths: **Reserved names** and **Maximum path length**.

:::image type="content" source="media/repository-settings/reserved-names.png" alt-text="Repository, Policies, Reserved names and Maximum path length settings. ":::


The **Reserved names** setting will block pushes to your repository that contain files or folders names that are invalid **on any platform**. [See what names are invalid](os-compatibility.md)

Also, not all [path lengths](os-compatibility.md) are allowed on the three major OS file systems (Windows, macOS, and Linux). Developers can push commits to a shared repository that may contain files or directories with path lengths that are invalid on one or more platforms. If these files or directories are fetched and checked out on a platform where they are invalid then the working directory can become corrupted.

The **Maximum path length** setting will block pushes to your repository that contain files or directories with path names that are invalid **on any platform**. [See what path lengths are invalid](os-compatibility.md). When enabled, a default value of `248` is selected because that is the highest max length that is 100% supported across all three major platforms. 

The max path value can be modified. For example, if you only have macOS or Linux developers in your organization, then you may optionally choose to set it to highest value that is 100% supported on both platforms (`1016`). You may also optionally choose to set a lower max path value if you wish to enforce certain directory & naming conventions for your organization.


 <a id="maximum-file-size" /> 

## Maximum file size

::: moniker range=">= tfs-2018"
Large files checked into Git remain in the repository forever, dragging down clone times and increasing disk usage. We have suggestions for helping you [manage large files](manage-large-files.md).

The **Maximum file size** policy setting gives administrators a way to block files over a certain size from entering the repository.
If a push contains a new or updated file larger than the limit configured in this setting, that push will be blocked.
The user will have to rewrite their unpushed history to remove the large file and try the push again.

::: moniker-end

#### [Browser](#tab/browser)
 
From **Project Settings>Repository>Policies**, you can enable or disable **Maximum file size** and set the maximum 

:::image type="content" source="media/repository-settings/maximum-file-size.png" alt-text="Repository, Policies, Maximum file size setting. ":::

::: moniker range="<= tfs-2018"
> [!NOTE]   
> The **Maximum file size** policy requires TFS 2018.2 or later version.  
::: moniker-end 

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range=">= azure-devops-2020"

### Create file size policy

Use [`az repos policy file-size create`](/cli/azure/repos/policy/file-size?view=azure-cli-latest&preserve-view=true#az_repos_policy_file_size_create) to manage [Maximum file size](#maximum-file-size) policy.

```azurecli
az repos policy file-size create --blocking {false, true}
                                 --enabled {false, true}
                                 --maximum-git-blob-size
                                 --repository-id
                                 --use-uncompressed-size {false, true}

```

**Parameters**

- **blocking**: (Required) Whether the policy should be blocking or not. Accepted values: **false**, **true**
- **enabled**: (Required) Whether the policy is enabled or not. Accepted values: **false**, **true**
- **maximum-git-blob-size**: (Required) Maximum git blob size in bytes. For example, to specify a 10byte limit, `--maximum-git-blob-size 10.`
- **repository-id**: (Required) ID of the repository on which to apply the policy.
- **use-uncompressed-size**: (Required) Whether to use uncompressed size. Accepted values: **false**, **true**


**Example**

The following example retrieves the IDs of the existing repositories using [`az repos list`](/cli/azure/repos?view=azure-cli-latest&preserve-view=true#az_repos_list) and then creates a 1 GB blocking maximum file size policy in the `FabrikamFiber` repository. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`

```azurecli
az repos list --output table
ID                                    Name           Default Branch    Project
------------------------------------  -------------  ----------------  -------------
6589f9e0-082b-4b96-9dfd-8141b7da409c  FabrikamFiber  master            FabrikamFiber

az repos policy file-size create --blocking true --enabled true --maximum-git-blob-size 10485760 --repository-id 6589f9e0-082b-4b96-9dfd-8141b7da409c --use-uncompressed-size true
{

  <Some properties omitted for space>

  },
  "createdDate": "2019-11-19T15:34:38.854450",
  "id": 2,
  "isBlocking": true,
  "isDeleted": false,
  "isEnabled": true,

  <Some properties omitted for space>

}
```

### Update file size policy

Use [`az repos policy file-size update`](/cli/azure/repos/policy/file-size?view=azure-cli-latest&preserve-view=true#az_repos_policy_file_size_delete) to manage [Maximum file size](#maximum-file-size) policy.

```azurecli
az repos policy file-size update --id
                                 [--blocking {false, true}]
                                 [--detect {false, true}]
                                 [--enabled {false, true}]
                                 [--maximum-git-blob-size]
                                 [--org]
                                 [--project]
                                 [--repository-id]
                                 [--use-uncompressed-size {false, true}]
```

**Parameters**

- **id** or **policy-id**: (Required) ID of the policy.
- **blocking**: Whether the policy should be blocking or not. Accepted values: **false**, **true**
- **detect**: Automatically detect organization. Accepted values: **false**, **true**
- **enabled**: Whether the policy is enabled or not. Accepted values: **false**, **true**
- **maximum-git-blob-size**: Maximum git blob size in bytes. For example, to specify a 10byte limit, `--maximum-git-blob-size 10.`
- **org** or **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.
- **project** or **-p**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.
- **repository-id**: (Required) ID of the repository on which to apply the policy.
- **use-uncompressed-size**: (Required) Whether to use uncompressed size. Accepted values: **false**, **true**


**Example**

The following example retrieves the IDs of the existing policies using [`az repos policy list`](/cli/azure/repos/policy?view=azure-cli-latest&preserve-view=true#az_repos_policy_list) and then updates the maximum size of the maximum file size policy in the `FabrikamFiber` repository. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`

```azurecli
az repos policy list --output table
ID    Name                     Is Blocking    Is Enabled    Repository Id                         Branch
----  -----------------------  -------------  ------------  ------------------------------------  ------------
2     File size restriction    True           False         6589f9e0-082b-4b96-9dfd-8141b7da409c  All Branches
3     Git repository settings  True           True          6589f9e0-082b-4b96-9dfd-8141b7da409c  All Branches
4     Work item linking        False          False         6589f9e0-082b-4b96-9dfd-8141b7da409c  All Branches
5     Path Length restriction  True           False         6589f9e0-082b-4b96-9dfd-8141b7da409c  All Branches

az repos policy file-size update --id 2 --maximum-git-blob-size 20971520
{
  
  <Some properties omitted for space>

  "createdDate": "2019-11-19T16:09:32.960070+00:00",
  "id": 2,
  "isBlocking": true,
  "isDeleted": false,
  "isEnabled": true,
  "revision": 5,
  "settings": {
    "maximumGitBlobSizeInBytes": 20971520,
    "scope": [
      {
        "repositoryId": "6589f9e0-082b-4b96-9dfd-8141b7da409c"
      }
    ],
    "useUncompressedSize": true
  },
  
   <Some properties omitted for space>

}
```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)] 

* * *
 


## Next steps

> [!div class="nextstepaction"]
> [Improve code quality with branch policies](branch-policies.md)

## Related articles

- [Set branch policies](branch-policies.md)
- [Configure Git repository policies using a configuration file](../../cli/policy-configuration-file.md)
- [Default Git permissions (Security)](../../organizations/security/default-git-permissions.md?toc=/azure/devops/repos/toc.json&bc=/azure/devops/repos/breadcrumb/toc.json)
- [Set permissions (Security)](set-git-repository-permissions.md?toc=/azure/devops/repos/toc.json&bc=/azure/devops/repos/breadcrumb/toc.json)
- [Cross-service integration overview](../../cross-service/cross-service-overview.md?toc=/azure/devops/repos/toc.json&bc=/azure/devops/repos/breadcrumb/toc.json)