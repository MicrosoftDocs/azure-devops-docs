---
title: Protect your Git branches with policies
titleSuffix: Azure Repos
description: Branch policies provide teams with the means to protect their important branches.
ms.assetid: 5D76697E-16A0-4048-91D1-806FE24C92A3
ms.technology: devops-code-git 
ms.topic: conceptual
ms.date: 11/11/2021
monikerRange: '>= tfs-2015'
---

# Improve code quality with branch policies

[!INCLUDE [temp](../includes/version-tfs-2015-cloud.md)]

Branch policies help teams protect their important [branches](./create-branch.md) of development.
Policies enforce your team's code quality and change management standards. For an overview of all repository and branch policies and settings, see [Git repository settings and policies](repository-settings.md). 


## Prerequisites 

::: moniker range=">= azure-devops-2020"

- To set branch policies, you must be a member of the Project Administrators security group or have repository-level **Edit policies** permissions. For more information, see [Set Git repository permissions](set-git-repository-permissions.md).
- If you want to use Azure DevOps CLI [az repos](/cli/azure/repos?view=azure-cli-latest&preserve-view=true) commands for the first time, see [Get started with Azure DevOps CLI](../../cli/index.md).
::: moniker-end

::: moniker range="< azure-devops-2020"
- To set branch policies, you must be a member of the Project Administrators security group or have repository-level **Edit policies** permissions. For more information, see [Set Git repository permissions](set-git-repository-permissions.md).
::: moniker-end

## Configure branch policies

Select **Repos** > **Branches** to open the **Branches** page in the web portal.

![Open up the Branches page on the web](media/branches/branches_nav-new-nav.png)

Locate your branch in the page. You can browse the list or you can search for your branch using the **Search all branches** box in the upper right.

![Branches page](media/branches/branches-page.png)

Select the **...** button. Select **Branch policies** from the context menu.

   ![Open the branch policies from the context menu](media/branches/branches_context_menu_policy.png)

::: moniker range=">= azure-devops-2020"

Configure policies on the **Settings** page. See the following sections for descriptions of each policy type.

::: moniker-end

::: moniker range="< azure-devops-2020"

Configure your policies in the **Policies** page. See the following sections for descriptions of each policy type. Select **Save changes** to apply your new policy configuration.

   ![Policies tab](media/branch-policies/save-policy-changes.png)  

::: moniker-end

<a name="require_reviewers"></a>

## Require a minimum number of reviewers

<!--- TBD: Azure CLI az repos policy required-reviewer create and az repos policy required-reviewer update --> 

Code reviews are a best practice for most software development projects.
To require teams to review their changes before completing a pull request, select **Require a minimum number of reviewers**.

The basic policy requires that a certain number of reviewers approve the code with no rejections.

From **Branch** > **Branch Policies**, enable **Require a minimum number of reviewers**.

::: moniker range=">= azure-devops-2020"

:::image type="content" source="media/branch-policies/require-minimum-reviewers-2020.png" alt-text="Enable the Require Code Reviews policy":::

- If **Allow requestors to approve their own changes** is selected, the pull request's creator can vote on its approval. If not, they can still vote **Approve** on their pull request, but their vote won't count toward the **Minimum number of reviewers**.
- By default, anyone with push permissions on the source branch can both add commits and vote on the pull request's approval. By enabling **Prohibit the most recent pusher from approving their own changes**, you can enforce segregation of duties. Having the most recent push automatically makes the pusher's vote not count.
- If any reviewer rejects the changes, the pull request can't complete unless you select **Allow completion even if some reviewers vote to wait or reject**.
- You can reset code reviewer votes when new changes are pushed to the source branch. Select **Reset code reviewer votes when there are new changes**.

::: moniker-end

::: moniker range="< azure-devops-2020"

![Check the Require Code Reviews box](media/branch-policies/require-minimum-number-of-pr-reviews-2018.png)  

- If **Requestors can approve their own changes** isn't selected, the creator of the pull request can still vote **Approve** on their pull request, but their vote won't count toward the **Minimum number of reviewers**.
- If any reviewer rejects the changes, the pull request can't complete unless you select **Allow completion even if some reviewers vote to wait or reject**.
- You can reset code reviewer votes when new changes are pushed to the source branch. Select **Reset code reviewer votes when there are new changes**.

::: moniker-end

The creator can complete the pull request when the required number of reviewers approve it.

> [!NOTE]
> The **Requestors can approve their own changes** setting only applies to the **Require a minimum number of reviewers** policy. It doesn't affect other policies such as [Automatically include code reviewers](#automatically-include-code-reviewers). For example, Jamal Hartnett creates a pull request with the following policies configured:
>
> - **Minimum number of reviewers** requires two reviewers.
> - **Requestors can approve their own changes** isn't set.
> - The **Fabrikam Team** group is a required reviewer, and Jamal is a member of that group.
>
> In this example, since Jamal is part of the **Fabrikam Team** group, his **Approve** vote satisfies the required reviewer policy. The pull request still requires two additional **Approve** votes to satisfy the **Minimum number of reviewers** policy, since his vote doesn't count toward that policy.

<a id="check-linked-wi" />

## Check for linked work items

Require associations between pull requests and a work item to ensure that changes to your branch have [work item management tracking](../../boards/backlogs/connect-work-items-to-git-dev-ops.md). Linking work items provides additional context for your changes and ensures that updates go through your work item tracking process.


#### [Browser](#tab/browser)

From **Project Settings>Repository>Policies>Branch Policies>Branch**, enable the **Check for linked work items** and set to **Require** to require work items be linked to a pull request for the branch in order to be merged. Make the setting **Optional** to warn when there are no linked work items but to allow completion of the pull request. 

::: moniker range=">= azure-devops-2020"

:::image type="content" source="media/branch-policies/check-linked-work-items-2020.png" alt-text="Require linked work items in your pull requests":::

::: moniker-end

::: moniker range="< azure-devops-2020"

![Require linked work items in your pull requests](media/branch-policies/work-item-linking-2018.png)

::: moniker-end
 

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range=">= azure-devops-2020" 

You can use Azure CLI to create and updated work item linking policies for a branch or repository.  

[Create work item linking policy](#create-wi-policy) | [Update work item linking policy](#update-wi-policy)  


<a id="create-wi-policy" /> 

### Create work item linking policy

Use [`az repos policy work-item-linking create`](/cli/azure/repos/policy/work-item-linking?view=azure-cli-latest&preserve-view=true#az_repos_policy_work_item_linking_create) to create a work item linking policy for a repository or one or more branches.

```azurecli
az repos policy work-item-linking create --blocking {false, true}
                                         --branch
                                         --enabled {false, true}
                                         --repository-id
                                         [--branch-match-type {exact, prefix}]
```

**Parameters**

|Parameter|Description|
|---------|-----------|
|`blocking`|(Required) Whether the policy should be blocking or not. Accepted values: `false`, `true`.|
|`branch`|(Required) Branch name to filter results by exact match of branch name. The --repository-id parameter is required to use the branch filter. For example: `--branch main`.|
|`enabled`|(Required) Whether the policy is enabled or not. Accepted values: `false`, `true`.|
|`repository-id`|(Optional) ID of the repository on which to apply the policy. For example `--repository-ID e556f204-53c9-4153-9cd9-ef41a11e3345`.| 
|`branch-match-type`|(Optional) Determines how the branch argument is used to apply a policy. If value is `exact`, the policy is applied on a branch which has an exact match on the `--branch argument`. If value is `prefix` the policy is applied across all branch folders that match the prefix provided by the `--branch argument`. Accepted values: `exact`, `prefix`. Default value: `exact`.| 


<a id="update-wi-policy" /> 

### Update work item linking policy

Use [`az repos policy work-item-linking update`](/cli/azure/repos/policy/work-item-linking?view=azure-cli-latest&preserve-view=true#az_repos_policy_work_item_linking_update) to update a work item linking policy for a repository or one or more branches.

```azurecli
az repos policy work-item-linking update --id
                                         [--blocking {false, true}]
                                         [--branch]
                                         [--branch-match-type {exact, prefix}]
                                         [--enabled {false, true}]
                                         [--repository-id]
```

**Parameters**

|Parameter|Description|
|---------|-----------|
|`id`|(Required) The policy ID. |
|`blocking`|(Optional) Whether the policy should be blocking or not. Accepted values: `false`, `true`.|
|`branch`|(Optional) Branch name to filter results by exact match of branch name. The --repository-id parameter is required to use the branch filter. For example: `--branch main`.|
|`branch-match-type`|(Optional) Determines how the branch argument is used to apply a policy. If value is `exact`, the policy is applied on a branch which has an exact match on the `--branch argument`. If value is `prefix` the policy is applied across all branch folders that match the prefix provided by the `--branch argument`. Accepted values: `exact`, `prefix`. Default value: `exact`.| 
|`enabled`|(Required) Whether the policy is enabled or not. Accepted values: `false`, `true`.|
|`repository-id`|(Optional) ID of the repository on which to apply the policy.  For example `--repository-ID e556f204-53c9-4153-9cd9-ef41a11e3345`.| 


**Example**

The following example updates the policy ID **3** for the **main** branch of the repository for the default configured project. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikamprime project="Fabrikam Fiber"`

```azurecli
>az repos policy work-item-linking update --id 3 --blocking false --branch main --enabled true --repository-id d28cd374-e7f0-4b1f-ad60-f349f155d47c --output table
ID    Name               Is Blocking    Is Enabled    Repository Id                         Branch
----  -----------------  -------------  ------------  ------------------------------------  ---------------
3     Work item linking  False          True          d28cd374-e7f0-4b1f-ad60-f349f155d47c  refs/heads/main
```


::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

***
 

::: moniker range=">= tfs-2017" 

<a id="check-comment-resolution" />

## Check for comment resolution

<!--- TBD: Azure CLI az repos policy comment-required create and az repos policy comment-required update --> 

::: moniker-end

::: moniker range=">= azure-devops-2020" 

Configure a comment resolution policy for your branch by selecting **Check for comment resolution**.

:::image type="content" source="media/branch-policies/check-comment-resolution-2020.png" alt-text="Check for comment resolution":::

For more information on working with pull request comments, see [Pull requests - leave comments](review-pull-requests.md#make-comments).

::: moniker-end

::: moniker range=">= tfs-2017  < azure-devops-2020"

Configure a comment resolution policy for your branch by selecting **Check for comment resolution**.

![Check for comment resolution](media/branch-policies/comment-resolution-2018.png)

For more information on working with pull request comments, see [Pull requests - leave comments](review-pull-requests.md#make-comments).

::: moniker-end

::: moniker range=">= azure-devops-2020"

<a id="limit-merge-types" />

## Limit merge types

<!--- TBD: Azure CLI  az repos policy merge-strategy create and az repos policy merge-strategy update --> 

Maintain a consistent branch history by enforcing a merge strategy when a pull request completes.
Azure Repos has multiple merge strategies, and by default, all of them are allowed.
Select **Limit merge types** to pick which ones you'll allow in your repo.

:::image type="content" source="media/branch-policies/limit-merge-types-2020.png" alt-text="Limit merge types":::

- **Basic merge (no fast-forward)** - creates a merge commit in the target whose parents are the target and source branches.
- **Squash merge** - creates a linear history with a single commit in the target branch with the changes from the source branch. [Learn more about squash merging](merging-with-squash.md) and how it affects your branch history.
- **Rebase and fast-forward** - creates a linear history by replaying source commits onto the target branch with no merge commit.
- **Rebase with merge commit** - replays the source commits onto the target and still creates a merge commit.

<a name="build"></a>
<a name="require-the-pull-request-to-build"></a>
  
::: moniker-end 
 
::: moniker range="< azure-devops-2020"

## Enforce a merge strategy

Maintain a consistent branch history by enforcing a merge strategy when a pull request completes.
Select **Enforce a merge strategy** and pick an option to require that pull requests merge using that strategy.

![Set merge requirements](media/branch-policies/merge-requirements-2018.png)

- **No fast-forward merge** - This option merges the commit history of the source branch when the pull request closes and creates a merge commit in the target branch.
- **Squash merge** - Complete all pull requests with a squash merge, creating a single commit in the target branch with the changes from the source branch. [Learn more about squash merging](merging-with-squash.md) and how it affects your branch history.

<a name="build"></a>
<a name="require-the-pull-request-to-build"></a>
  
::: moniker-end 
 
<a id="build-validation" />

## Build validation

<!--- TBD: Azure CLI  az repos policy build create and az repos policy build update --> 

::: moniker range=">= azure-devops-2020" 

Set a policy requiring changes in a pull request to build successfully with the protected branch before the pull request can be completed.
Build policies reduce breaks and keep your test results passing. Build policies help even if you're using [continuous integration](/devops/develop/what-is-continuous-integration) (CI) on your development branches to catch problems early.

If a build validation policy is enabled, a new build is queued when either a new pull request is created, or if changes are pushed to an existing pull request targeting the branch. The build policy then evaluates the results of the build to determine whether the pull request can be completed.

> [!IMPORTANT]
> Before specifying a build validation policy, you must have a build pipeline. If you don't have one, see [Create a build pipeline](../../pipelines/create-first-pipeline.md) and choose the type of build that matches your project type.

:::image type="content" source="media/branch-policies/build-validation-2020.png" alt-text="Add build policy":::

Choose the **+** button next to **Build validation**.

:::image type="content" source="media/branch-policies/add-build-policy-menu-2020.png" alt-text="Build policy settings":::

1. Select the **Build pipeline**.
1. Optionally set a **Path filter**. Learn more about [path filters](#path-filters) in branch policies.
1. Choose the type of **Trigger**. Select **Automatic (whenever the source branch is updated)** or **Manual**.
1. Select the **Policy requirement**. If you choose **Required**, builds must complete successfully to complete pull requests. Choose **Optional** to provide a notification of the build failure but still allow pull requests to complete.
1. Set a build expiration to make sure that updates to your protected branch don't break changes for open pull requests.

   - **Immediately when `branch name` is updated**: This option sets the build policy status in a pull request to *failed* when the protected branch is updated. Requeue a build to refresh the build status. This setting ensures that the changes in pull requests build successfully even as the protected branch changes. This option is best for teams that have important branches with a lower volume of changes. Teams working in busy development branches may find it disruptive to wait for a build to complete every time the protected branch is updated.
   - **After `n` hours if `branch name` has been updated**: This option expires the current policy status when the protected branch updates if the passing build is older than the threshold entered. This option is a compromise between always requiring a build when the protected branch updates and never requiring one. This choice is excellent for reducing the number of builds when your protected branch has frequent updates.
   - **Never**: Updates to the protected branch don't change the policy status. This value reduces the number of builds for your branch. It can cause problems when closing pull requests that haven't updated recently.
  
1. Enter an optional **Display name** for this build policy. This name identifies the policy on the **Branch policies** page. If you don't specify a display name, the policy uses the build pipeline name.
1. Select **Save**.

When the owner pushes changes that build successfully, the policy status is updated. If you have an **Immediately when `branch name` is updated** or **After `n` hours if `branch name` has been updated** build policy chosen, the policy status updates when the protected branch is updated if the most recent build is no longer valid.

::: moniker-end

::: moniker range="< azure-devops-2020" 

Set a policy requiring changes in a pull request to build successfully with the protected branch before the pull request can be completed.
Build policies reduce breaks and keep your test results passing. Build policies help even if you're using [continuous integration](/devops/develop/what-is-continuous-integration) (CI) on your development branches to catch problems early.

If a build validation policy is enabled, a new build is queued when either a new pull request is created, or if changes are pushed to an existing pull request targeting the branch. The build policy then evaluates the results of the build to determine whether the pull request can be completed.

> [!IMPORTANT]
> Before specifying a build validation policy, you must have a build definition. If you don't have one, see [Create a build definition](/previous-versions/azure/devops/pipelines/apps/) and choose the type of build that matches your project type.

![Add build policy](media/branch-policies/add-build-policy-2018.png)

Choose **Add build policy** and configure your options in **Add build policy**.

![Build policy settings](media/branch-policies/build-policy-settings-2018.png)

1. Select the **Build definition**.
1. Choose the type of **Trigger**. Select **Automatic (whenever the source branch is updated)** or **Manual**.
1. Select the **Policy requirement**. If you choose **Required**, builds must complete successfully to complete pull requests. Choose **Optional** to provide a notification of the build failure but still allow pull requests to complete.
1. Set a build expiration to make sure that updates to your protected branch don't break changes for open pull requests.

   - **Immediately when `branch name` is updated**: This option sets the build policy status in a pull request to *failed* when the protected branch is updated. Requeue a build to refresh the build status. This setting ensures that the changes in pull requests build successfully even as the protected branch changes. This option is best for teams that have important branches with a lower volume of changes. Teams working in busy development branches may find it disruptive to wait for a build to complete every time the protected branch is updated.
   - **After `n` hours if `branch name` has been updated**: This option expires the current policy status when the protected branch updates if the passing build is older than the threshold entered. This option is a compromise between always requiring a build when the protected branch updates and never requiring one. This choice is excellent for reducing the number of builds when your protected branch has frequent updates.
   - **Never**: Updates to the protected branch don't change the policy status. This value reduces the number of builds for your branch. It can cause problems when closing pull requests that haven't updated recently.
  
1. Enter an optional **Display name** for this build policy. This name identifies the policy on the **Branch policies** page. If you don't specify a display name, the policy uses the build definition name.
1. Select **Save**.

When the owner pushes changes that build successfully, the policy status is updated. If you have an **Immediately when `branch name` is updated** or **After `n` hours if `branch name` has been updated** build policy chosen, the policy status updates when the protected branch is updated if the most recent build is no longer valid.

::: moniker-end

::: moniker range=">= azure-devops-2020"

<a name="require-approval-from-external-services"></a>

## Status checks
 
External services can use the PR [Status API](/rest/api/azure/devops/git/pull%20request%20statuses) to post detailed status to your PRs. The branch policy for additional services brings the ability for those third-party services to participate in the PR workflow and establish policy requirements.

:::image type="content" source="media/branch-policies/status-checks-2020.png" alt-text="Require external services to approve":::

For instructions on configuring this policy, see [Configure a branch policy for an external service](pr-status-policy.md).

::: moniker-end 

::: moniker range=">= tfs-2018 < azure-devops-2020"

<a name="require-approval-from-external-services"></a>

## Require approval from external services

External services can use the PR [Status API](/rest/api/azure/devops/git/pull%20request%20statuses) to post detailed status to your PRs. The branch policy for additional services brings the ability for those third-party services to participate in the PR workflow and establish policy requirements.

![Require external services to approve](media/branch-policies/require-approval-from-additional-services-2018.png)

For instructions on configuring this policy, see [Configure a branch policy for an external service](pr-status-policy.md).

::: moniker-end 

<a id="include-code-reviewers" /> 

## Automatically include code reviewers


<!--- TBD: Azure CLI  az repos policy approver-count create and az repos policy approver-count update --> 


Select reviewers for specific directories and files in your repo.

::: moniker range=">= azure-devops-2020"

:::image type="content" source="media/branch-policies/automatically-included-reviewers-2020.png" alt-text="Enter the path and required reviewers":::

::: moniker-end

::: moniker range="< azure-devops-2020"

![Enter the path and required reviewers](media/branch-policies/require-specific-reviewers-2018.png)

::: moniker-end

These reviewers are automatically added to pull requests that change files along those paths. You can also specify an **Activity feed message**.

::: moniker range=">= azure-devops-2020"
:::image type="content" source="media/branch-policies/add-new-reviewer-policy-2020.png" alt-text="Add automatic reviewers":::
::: moniker-end

::: moniker range="< azure-devops-2020"
![Add automatic reviewers](media/branch-policies/automatically-include-reviewers-for-pull-requests-2018.png)
::: moniker-end

If you select **Required**, then the pull request can't be completed until:

- Every user added as a reviewer for the path approves the changes.
- At least one person in every group added to the path approves the changes.
- The number of reviewers specified for every group added to the path approves the changes.

::: moniker range="< azure-devops-2020"
![Required reviewers are automatically added](media/branch-policies/required-reviewer-added.png)
::: moniker-end

Select **Optional** if you want to add reviewers automatically, but not require their approval to complete the pull request.

::: moniker range=">= azure-devops-2020"
You can select **Allow requestors to approve their own changes**.
::: moniker-end

::: moniker range="< azure-devops-2020"
You can select **Requestors can approve their own changes**.
::: moniker-end

When all required reviewers approve the code, you can complete the pull request.

::: moniker range="< azure-devops-2020"
![Pull request status shows that reviewers have approved](media/branch-policies/required-reviewer-approved.png)
::: moniker-end

## Bypass branch policies

In some cases, you need to bypass policy requirements. Bypassing lets you push changes to the branch directly or complete a pull request even if branch policies aren't satisfied. You can grant a permission from the previous list to a user or group. You can scope this permission to an entire project, a repo, or a single branch. Manage this permission along with other [Git permissions](../../organizations/security/permissions.md#git-repository-permissions-object-level).  

::: moniker range=">= azure-devops-2019"
In Azure DevOps Server 2019 and later versions, including the hosted service, there are two permissions that allow users to bypass branch policy in different ways.
**Bypass policies when completing pull requests** applies only to pull requests completion.
**Bypass policies when pushing** applies to pushes from a local repository and edits made on the web.

This [replaces the previous single permission](/azure/devops/release-notes/2018/jul-10-vsts#allow-bypassing-branch-policies-without-giving-up-push-protection).

![Exempt from policy enforcement permission](media/branch-policies/policy-exempt-permission.png)

::: moniker-end

::: moniker range="< azure-devops-2019"

In TFS 2015 through TFS 2018 Update 2, the **Exempt from policy enforcement** permission allows users with this permission to perform the following actions:

- When completing a pull request, opt-in to override policies and complete a pull request even if the current set of branch policies is not satisfied.
- Push directly to a branch even if that branch has branch policies set. Note that when a user with this permission makes a push that would override branch policy, the push automatically bypasses branch policy with no opt-in step or warning.

::: moniker-end

> [!IMPORTANT]
> Use caution when granting the ability to bypass policy, especially
> at the repo and project level.
> Policies are a cornerstone of secure and compliant source code management.


::: moniker range=">= azure-devops-2019"

## Path filters

Several branch policies offer path filters.
If a path filter is set, the policy will only apply when files which match the filter are changed.
Leaving this field blank means that the policy will always apply.

You can specify absolute paths and wildcards.
Examples:
- `/WebApp/Models/Data.cs`
- `/WebApp/*`
- `*.cs`

You can specify multiple paths using `;` as a separator.
Example:
- `/WebApp/Models/Data.cs;ClientApp/Models/Data.cs`

Paths prefixed with `!` are excluded if they would otherwise be included.
Example:
- `/WebApp/*;!/WebApp/Tests/*` - includes all files in `/WebApp` except files in `/WebApp/Tests`
- `!/WebApp/Tests/*` - specifies no files, since nothing is included first

The order of filters is significant.
They're applied left-to-right.

::: moniker-end
 
## Q & A

- [Can I push changes directly to branches that have branch policies?](#can-i-push-changes-directly-to-branches-that-have-branch-policies)
- [What is auto-complete?](#what-is-auto-complete)
- [When are branch policy conditions checked?](#when-are-branch-policy-conditions-checked)
- [Can I use XAML build definitions in branch policies?](#can-i-use-xaml-build-definitions-in-branch-policies)
- [What wildcard characters can I use for required code reviewers?](#what-wildcard-characters-can-i-use-for-required-code-reviewers)
- [Are the required code reviewer paths case-sensitive?](#are-the-required-code-reviewer-paths-case-sensitive)
- [How can I configure multiple users as required reviewers, but require only one of them to approve?](#how-can-i-configure-multiple-users-as-required-reviewers-but-require-only-one-of-them-to-approve)
- [I have the exempt from policy permission. Why do I still see policy failures in the pull request status?](#i-have-the-exempt-from-policy-permission-why-do-i-still-see-policy-failures-in-the-pull-request-status)
 

#### Can I push changes directly to branches that have branch policies?

You can't push changes directly to branches that have *required* branch policies, unless you have permissions to [bypass branch policies](#bypass-branch-policies). Changes to these branches can be made only through [pull requests](pull-requests.md). You can push changes directly to branches that have *optional* branch policies, but no required branch policies.

#### What is auto-complete?

Pull requests into branches with branch policies configured have the **Set auto-complete** button. You can use this option to [automatically complete](complete-pull-requests.md#complete-automatically) the pull request if you don't expect any problems with your changes. Your pull request completes once it fulfills all policies.

<a name="how_works"></a>

#### When are branch policy conditions checked?

Branch policies reevaluate on the server as changes are pushed and reviewers vote. If a build triggers by the policy, the build status is set to waiting until the build completes.

#### Can I use XAML build definitions in branch policies?

No, you can't use XAML build definitions in branch policies.

#### What wildcard characters can I use for required code reviewers?

Single asterisks `*` match any number of characters, including both forward-slashes `/` and back-slashes `\`. Question marks `?` match any single character.

Examples:

* `*.sql` match all files with the *.sql* extension
* `/ConsoleApplication/*` match all files under the folder named *ConsoleApplication*
* `/.gitattributes` match the *.gitattributes* file in the root of the repo
* `*/.gitignore` match any *.gitignore* file in the repo

#### Are the required code reviewer paths case-sensitive?

No, branch policies aren't case-sensitive.

#### How can I configure multiple users as required reviewers, but require only one of them to approve?

You can [add the users to a group](../../organizations/security/add-users-team-project.md), and then add the group as a reviewer.  Any member of the group can then approve to meet the policy requirement.

#### I have the exempt from policy permission. Why do I still see policy failures in the pull request status?

Configured policies are still evaluated for pull request changes. For users that are exempt from policy enforcement, the reported policy status is advisory only. If the exempt user approves, the failure status doesn't block pull request completion.

## Related articles

- [About branches and branch policies](branch-policies-overview.md)
- [Configure Git repository policies using a configuration file](../../cli/policy-configuration-file.md)
- [Default Git permissions (Security)](../../organizations/security/default-git-permissions.md?toc=/azure/devops/repos/toc.json&bc=/azure/devops/repos/breadcrumb/toc.json)
- [Set permissions (Security)](set-git-repository-permissions.md?toc=/azure/devops/repos/toc.json&bc=/azure/devops/repos/breadcrumb/toc.json)
- [Cross-service integration overview](../../cross-service/cross-service-overview.md?toc=/azure/devops/repos/toc.json&bc=/azure/devops/repos/breadcrumb/toc.json)