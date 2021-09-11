---
title: Git repository settings
titleSuffix: Azure Repos
description: Learn about settings you can set for a Git repository  
ms.assetid: 9336ed18-c239-4394-aa4c-64b6d01130f9
ms.technology: devops-code-git 
ms.topic: conceptual
ms.date: 11/19/2019
monikerRange: '>= tfs-2017'
---

# Git repository settings and policies

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 Update 2**

You can customize your Azure DevOps Git repositories using policy settings. Global options for entire repositories are configured by repository settings.
There are also user-specific and branch-specific controls, covered by [permissions](set-git-repository-permissions.md#git-repository) and [branch policies](branch-policies.md) respectively.  

This topic covers server-side repository settings.
You may also want to learn about client-side [Git preferences](git-config.md).

## View and edit repository settings

#### [Browser](#tab/browser)

::: moniker range=">azure-devops-2019"

1. From your web browser, open the project for your organization in Azure DevOps and choose **Project settings**, **Repositories**, and select your repository.

   :::image type="content" source="media/repository-settings/project-settings-repository-2020.png" alt-text="Screenshot that shows selecting 'Project settings', 'Repositories', and a repo.":::

2. Select **Settings** to view and configure your repository settings.

   :::image type="content" source="media/repository-settings/project-repo-settings-browser-2020.png" alt-text="Screenshot that shows the repo project 'Settings' tab selected.":::

3. Select **Policies** to view and configure project level and cross-repo policies.

   :::image type="content" source="media/repository-settings/project-repo-policies-browser-2020.png" alt-text="Screenshot that shows the repo 'Policies' tab selected.":::

### All repositories settings and policies

Admins have access to a number of settings and policies to customize your project.

#### Default branch name preference

You can choose any legal branch name to use when a repository is initialized, or change it later if necessary. You can access the setting in two ways:

- **Organization settings** - From the DevOps page, select your project > **Organization settings** > **Repositories**, turn on **Default branch name for new repositories**, and type your default branch name.

    :::image type="content" source="media/repository-settings/organization-settings-change-default-branch-name.png" alt-text="Screenshot that shows the 'Organization Settings', 'Repositories', and 'Default branch name for new repositories' selected.":::

-  **Project settings** - From the project page, select **Project settings** > **Repositories** > **Settings**, turn on **Default branch name for new repositories**, and type your default branch name.

    :::image type="content" source="media/repository-settings/project-settings-custom-default-branch-name-2020.png" alt-text="Screenshot that shows the 'Project Settings', 'Repositories', and 'Default branch name for new repositories' selected.":::

If you don't enable this feature, your repositories will be initialized with the Azure Repos default name, *main*.

#### Cross-repo branch policy administration

You can set policies on a specific branch or the default branch across all repositories in their project. For example, an admin could require two minimum reviewers for all pull requests made into every main branch across every repository in their project. You can find the **Add branch protection** feature in the Repos Project Settings.

:::image type="content" source="media/repository-settings/cross-repo-policies.png" alt-text="Screenshot that shows 'Cross-repo policies' selected, and the 'Add branch protection' window displayed.":::

#### Add a policy to block commits based on the commit author email

You can set a push policy to prevent commits from being pushed to a repository for which the commit author email does not match the provided pattern.

:::image type="content" source="media/repository-settings/add-policy-to-block-commits-email.png" alt-text="Screenshot that shows the 'Policies' tab selected, and the 'Commit author email validation' toggle set to on.":::

#### Policy to block files with specified patterns

You can set a policy to prevent commits from being pushed to a repository based on file paths. The file path validation policy will block pushes that match the provided pattern.

:::image type="content" source="media/repository-settings/add-policy-to-block-files-patterns.png" alt-text="Screenshot that shows the 'Policies' tab selected, and the 'File path validation' toggle set to on.":::

::: moniker-end

::: moniker range="<=azure-devops-2019"

1. From your web browser, open the project for your organization in Azure DevOps and choose **Project settings**, **Repositories**, and select your repository.

   ![Screenshot of the 'Project Settings' for your repository.](media/repository-settings/project-repository-settings.png)

2. Select **Options** and **Policies** to view and configure your repository settings.

   ![On Options for FabrikamFiber, the Options and Policies tabs are highlighted, and Options is selected.](media/repository-settings/repository-settings.png)

::: moniker-end

::: moniker range="<= tfs-2017"

1. From your web browser, open the project for your organization in Azure DevOps and choose the gear icon, **Version Control**, and select your repository.

   ![Screenshot that shows the 'Version Control' options for your repository.](media/repository-settings/project-repository-settings-prev-nav.png)

2. Select **options** to view and configure your repository settings.

   ![Screenshot that shows the options UI.](media/repository-settings/repository-settings.png)

::: moniker-end

::: moniker range="tfs-2018"

1. From your web browser, open the project for your organization in Azure DevOps and choose the gear icon, **Version Control**, and select your repository.

   ![Screenshot that shows the 'Version Control' options for your repository.](media/repository-settings/project-repository-settings-prev-nav.png)

2. Select **options** to view and configure your repository settings.

   ![The options UI](media/repository-settings/repository-settings-tfs2018.2.png)

::: moniker-end

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range="> azure-devops-2019"

You can use Azure CLI to configure [Case enforcement](#case-enforcement) and [Maximum file size](#maximum-file-size) policies.

[Create case enforcement policy](#create-case-enforcement-policy) | [Update case enforcement policy](#update-case-enforcement-policy) | [Create file size policy](#create-file-size-policy) | [Update file size policy](#update-file-size-policy)

> [!NOTE]
> If this is your first time using [`az repos`](/cli/azure/repos?view=azure-cli-latest&preserve-view=true) commands, see [Get started with Azure DevOps CLI](../../cli/index.md).

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

#### Parameters

- **blocking**: (Required) Whether the policy should be blocking or not. Accepted values: **false**, **true**
- **enabled**: (Required) Whether the policy is enabled or not. Accepted values: **false**, **true**
- **repository-id**: (Required) ID of the repository on which to apply the policy.
- **detect**: Automatically detect organization. Accepted values: **false**, **true**
- **org** or **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.
- **project** or **-p**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.

#### Example

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

#### Parameters

- **id** or **policy-id**: (Required) ID of the policy.
- **blocking**: Whether the policy should be blocking or not. Accepted values: **false**, **true**
- **detect**: Automatically detect organization. Accepted values: **false**, **true**
- **enabled**: Whether the policy is enabled or not. Accepted values: **false**, **true**
- **org** or **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.
- **project** or **-p**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.
- **repository-id**: (Required) ID of the repository on which to apply the policy.

#### Example

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

### Create file size policy

Use [`az repos policy file-size create`](/cli/azure/repos/policy/file-size?view=azure-cli-latest&preserve-view=true#az_repos_policy_file_size_create) to manage  [Maximum file size](#maximum-file-size) policy.

```azurecli
az repos policy file-size create --blocking {false, true}
                                 --enabled {false, true}
                                 --maximum-git-blob-size
                                 --repository-id
                                 --use-uncompressed-size {false, true}
                                 [--detect {false, true}]
                                 [--org]
                                 [--project]
```

#### Parameters

- **blocking**: (Required) Whether the policy should be blocking or not. Accepted values: **false**, **true**
- **enabled**: (Required) Whether the policy is enabled or not. Accepted values: **false**, **true**
- **maximum-git-blob-size**: (Required) Maximum git blob size in bytes. For example, to specify a 10byte limit, `--maximum-git-blob-size 10.`
- **repository-id**: (Required) ID of the repository on which to apply the policy.
- **use-uncompressed-size**: (Required) Whether to use uncompressed size. Accepted values: **false**, **true**
- **detect**: Automatically detect organization. Accepted values: **false**, **true**
- **org** or **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.
- **project** or **-p**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.

#### Example

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

#### Parameters

- **id** or **policy-id**: (Required) ID of the policy.
- **blocking**: Whether the policy should be blocking or not. Accepted values: **false**, **true**
- **detect**: Automatically detect organization. Accepted values: **false**, **true**
- **enabled**: Whether the policy is enabled or not. Accepted values: **false**, **true**
- **maximum-git-blob-size**: Maximum git blob size in bytes. For example, to specify a 10byte limit, `--maximum-git-blob-size 10.`
- **org** or **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.
- **project** or **-p**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.
- **repository-id**: (Required) ID of the repository on which to apply the policy.
- **use-uncompressed-size**: (Required) Whether to use uncompressed size. Accepted values: **false**, **true**

#### Example

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

## Forking

Controls whether users are able to create new server-side [forks](forks.md).
Disabling this setting will not alter existing forks.

## Work item management

There are two settings in this category.

### Automatically create links for work items mentioned in a commit comment

When turned on, commit messages containing "#" followed by a valid work item ID will automatically link the commit to the mentioned work item.
You should turn this off when pushing a repository previously contained by a different account or service.
Those repositories may have #mentions that don't match the work item IDs in the current account.
If you [import a repository](import-git-repository.md), we automatically turn this option off.

### Remember user preferences for completing work items with pull requests

By default, the option to complete linked work items during pull request completion will remember each user's last choice.
Some teams may have different approaches to closing work items, such as at a standup meeting, and may want to discourage users from completing work items with their pull requests.
By disabling this setting, users must opt-in to completing work items for each pull request.  

## Cross-platform compatibility settings

>[!NOTE]
>Our recommendation is to configure these settings **either** at the project level or each individual repo, but not both. If set at both levels, we will compute whichever setting is the most restrictive and honor that. Configuring these settings at only one level removes this complexity prevents slow downs in Git performance.

### Case enforcement

Git is case-sensitive, meaning that a file called "Foo.txt" is different from a file called "foo.txt".
Windows and macOS default to case-insensitive file systems, meaning that "Foo.txt" and "foo.txt" are the same name.
This can cause problems for users if someone on a case-insensitive system pushes files, folders, branches, or tags that [only differ by letter case](os-compatibility.md).

If most of your users are on Windows or macOS, we recommend turning on this setting.
It will block the introduction of new files, folders, branches, or tags that would cause such a conflict.
The user will have to rewrite their unpushed history to fix the problem, then try the push again.

This setting will not fix a repository which already contains objects that only differ by case.
We recommend fixing such issues before turning the policy on.
You can rename files and folders or re-create [branches](create-branch.md) and [tags](git-tags.md) using new, non-conflicting names.

::: moniker range="azure-devops"

For instructions on configuring this policy using Azure CLI, see [View and edit repository settings](repository-settings.md?tabs=azure-devops-cli#view-and-edit-repository-settings).

::: moniker-end

::: moniker range="azure-devops"

### Restrict File Names

Not all [files names](os-compatibility.md) are allowed on the three major OS file systems (Windows, macOS, and Linux). Developers can push commits to a shared repository that may contain files or folders with names that are invalid on one or more platforms. If these files or folders are fetched and checked out on a platform where they are invalid then the working directory can become corrupted.

This setting will block pushes to your repository that contain files or folders names that are invalid **on any platform**. [See what names are invalid](os-compatibility.md)

### Restrict Path length

Not all [path lengths](os-compatibility.md) are allowed on the three major OS file systems (Windows, macOS, and Linux). Developers can push commits to a shared repository that may contain files or directories with path lengths that are invalid on one or more platforms. If these files or directories are fetched and checked out on a platform where they are invalid then the working directory can become corrupted.

This setting will block pushes to your repository that contain files or directories with path names that are invalid **on any platform**. [See what path lengths are invalid](os-compatibility.md). When enabled, a default value of `248` is selected because that is the highest max length that is 100% supported across all three major platforms. 

The max path value can be modified. For example, if you only have macOS or Linux developers in your organization, then you may optionally choose to set it to highest value that is 100% supported on both platforms (`1016`). You may also optionally choose to set a lower max path value if you wish to enforce certain directory & naming conventions for your organization.

::: moniker-end

## Maximum file size

Large files checked into Git remain in the repository forever, dragging down clone times and increasing disk usage.
We have suggestions for helping you [manage large files](manage-large-files.md).

This setting gives administrators a way to block files over a certain size from entering the repository.
If a push contains a new or updated file larger than the limit configured in this setting, that push will be blocked.
The user will have to rewrite their unpushed history to remove the large file and try the push again.

::: moniker range="azure-devops"

For instructions on configuring this policy using Azure CLI, see [View and edit repository settings](repository-settings.md?tabs=azure-devops-cli#view-and-edit-repository-settings).

::: moniker-end

## Other ways to manage repositories

For branch-specific settings, you should look at [branch policies](branch-policies.md).
These include options like requiring a pull request, a successful build, or a code review.
For user-specific settings, you probably want [permissions](set-git-repository-permissions.md#git-repository).
Permissions allow you to control who can read, write, contribute to pull requests, and other specific actions.


## Related articles

- [Set branch policies](branch-policies.md)
- [Configure Git repository policies using a configuration file](../../cli/policy-configuration-file.md)
- [Default Git permissions (Security)](../../organizations/security/default-git-permissions.md?toc=/azure/devops/repos/toc.json&bc=/azure/devops/repos/breadcrumb/toc.json)
- [Set permissions (Security)](set-git-repository-permissions.md?toc=/azure/devops/repos/toc.json&bc=/azure/devops/repos/breadcrumb/toc.json)  