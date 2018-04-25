---
title: Protect your Git branches with policies | VSTS & TFS
description: Branch policies provide teams with the means to protect their important branches.
ms.assetid: 5D76697E-16A0-4048-91D1-806FE24C92A3
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: douge
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '>= tfs-2015'
---


#  Improve code quality with branch policies

#### VSTS | TFS 2018 | TFS 2017 | TFS 2015

Branch policies help teams protect their important [branches](tutorial/branches.md) of development. 
Policies enforce your team's code quality and change management standards.

## Configure branch policies

0. Open the **Branches** view in the **Code** area on the web portal while viewing your repo.

	![Open up the Branches view on the web](_img/branches/branches_nav.png)

0. Locate your branch in the view. You can browse the list or you can search for your branch using the **Search all branches** box in the upper right.

0. Open the context menu for the branch by selecting the **...** icon. Select **Branch policies** from the context menu.

	![Open the branch policies from the context menu](_img/branches/branches_context_menu_policy.png)   

0. Configure your desired policies in the **Policies** tab. See the following sections in this article for descriptions for each policy type. Once your policies are configured, select **Save changes** to apply your new policy configuration.

  ![Policies tab](_img/branch-policies/save-policy-changes.png)  



>[!NOTE]
>After you set up a branch policy, you cannot directly push changes to the branch. Changes to the branch are only made through pull requests.

<a name="require_reviewers"></a>
   
## Require a minimum number of reviewers

Code reviews are a best practice for most software development projects. 
To require teams to review their changes before completing a pull request, check **Require a minimum number of reviewers**.

The basic policy requires that a certain number of reviewers approve the code with no rejections.

![Check the Require Code Reviews box](_img/branch-policies/RequireCodeReviews.png)  

- The owner cannot approve their own changes if **Allow users to approve their own changes** is not selected. 
- If any reviewer rejects the changes, the pull request cannot be completed unless the **Allow completion even if some reviewers vote "Waiting" or "Reject"** is selected.
- To reset code reviewer votes when new changes are pushed to the source branch, check **Reset code reviewer votes when there are new changes.**

When the required number of reviewers approve the pull request, it can be completed.

![Pull request status shows that reviewers have approved](_img/branch-policies/ReviewersApproved.png) 

>[!NOTE]
>If you don't expect any problems with your changes and you want your pull request to complete once all policies are met,  you can set the pull request to [automatically complete](pull-requests.md#complete-the-pull-request).   

## Check for linked work items

Require associations between pull requests and a work item to ensure that changes to your branch have [work item management tracking](../work/backlogs/connect-work-items-to-git-dev-ops.md).
Linking work items provides additional context for your changes and ensures that updates go through your work item tracking process.

![Require linked work items in your pull requests](_img/branch-policies/work_item_linking.png)

::: moniker range=">= tfs-2017" 

## Check for comment resolution

Configure a comment resolution policy for your branch by selecting **Check for comment resolution**.

![Check for comment resolution](_img/branch-policies/comment-resolution.png)

For more information on working with pull request comments, see [Pull requests - leave comments](pull-requests.md#leave-comments).



## Enforce a merge strategy

Maintain a consistent branch history by enforcing a merge strategy when a pull request is completed. 
Select **Enforce a merge strategy** and pick an option to require that pull requests merge using that strategy.

![Set merge requirements](_img/branch-policies/merge_requirements.png)

- **No fast-forward merge** - This merges the commit history of the source branch when the pull request closes and creates a merge commit in the target branch. 
- **Squash merge** - Complete all pull requests with a squash merge, creating a single commit in the target branch with the changes from the source branch. [Learn more about squash merging](merging-with-squash.md) and how it affects your branch history.

<a name="build"></a>
<a name="require-the-pull-request-to-build"></a>
  
::: moniker-end 
 
::: moniker range=">= tfs-2015" 

## Build validation

Set a policy requiring changes in a pull request to build successfully with the protected branch before the pull request can be completed.
Even if you're using [continuous integration](https://www.visualstudio.com/learn/what-is-continuous-integration) (CI) on your development branches to catch problems early, build policies reduce 
build breaks and keep your tests results passing. 

When a build validation policy is enabled, a new build is queued when a new pull request is created or when changes are pushed to an existing pull request targeting this branch. The build policy then evaluates the results of the build to determine whether the pull request can be completed.

>[!IMPORTANT]
>Before specifying a build validation policy, you must have a build definition. If you don't have one, see [Create a build definition](../build-release/apps/index.md) and choose the type of build that matches your project type.

![Add build policy](_img/branch-policies/add-build-policy.png)

Choose **Add build policy** and configure the desired options in the **Add build policy** window.

![Build policy settings](_img/branch-policies/build-policy-settings.png)

- Select the build definition from the **Build definition** drop-down. 
- Choose the type of **Trigger** - either **Automatic (whenever the source branch is updated)** or **Manual**.
- Configure the **Policy requirement**. If set to **Required**, builds must complete successfully in order to complete pull requests. Choose **Optional** to provide a notification of the build failure but still allow pull requests to complete.
- Set a build expiration to make sure that updates to your protected branch don't break changes in open pull requests.
  - **Immediately when `branch name` is updated**: This option sets the build policy status in a pull request to failed when the protected branch is updated. You must requeue a build to refresh the build status. This setting ensures that the changes in pull requests build successfully even as the protected branch changes. This option is best for teams that have important branches with a lower volume of changes. Teams working in busy development branches may find it disruptive to wait for a build to complete every time the protected branch is updated.
  - **After `n` hours if `branch name` has been updated**: This option expires the current policy status when the protected branch updates if the passing build is older than the threshold entered. This option is a compromise between always requiring a build when the protected branch updates and never requiring one. This choice is excellent for reducing the number of builds when your protected branch has frequent updates. 
  - **Never**: Updates to the protected branch do not change the policy status. This reduces the number of builds for your branch, but can cause problems when closing pull requests that haven't been updated recently.
- Choose an optional **Display name** for this build policy which is used to identify the policy on the **Branch policies** page. If you don't specify a display name, the build definition name is used.

When the owner pushes changes that build successfully, the policy status is updated. If you have an **Immediately when `branch name` is updated** or **After `n` hours if `branch name` has been updated** build policy chosen, the policy status updates when the protected branch is updated if the most recent build is no longer valid.

::: moniker-end 

::: moniker range="vsts" 

## Require approval from external services

External services can use the PR [Status API](https://go.microsoft.com/fwlink/?linkid=854107) to post detailed status to your PRs. The branch policy for external services brings the ability for those 3rd party services to participate in the PR workflow and establish policy requirements.

![Require approval from external services](_img/branch-policies/external-services.png)

For instructions on configuring this policy, see [Configure a branch policy for an external service](./how-to/pr-status-policy.md).

::: moniker-end 

## Automatically include code reviewers

Designate reviewers for specific directories and files in your repo.

![Enter the path and required reviewers](_img/branch-policies/RequireSpecificReviewers.png)

These reviewers are automatically added to pull requests that change files along those paths. 

![Add automatic reviewers](_img/branch-policies/add-automatic-reviewers.png)

If you select **Required** next to a path entry, then the pull request cannot be completed until:

* Every user added as a reviewer for the path approves the changes.
* At least one person in every group added to the path approves the changes.

![Required reviewers are automatically added](_img/branch-policies/RequiredReviewerAdded.png)

Select **Optional** if you want to add reviewers automatically, but not require their approval to complete the pull request.

When the required reviewers approve the code, you can complete the pull request.

![Pull request status shows that reviewers have approved](_img/branch-policies/RequiredReviewerApproved.png)   
::: moniker range=">= tfs-2015" 

## Bypass branch policies

In some cases, you need to bypass policy requirements so you can push changes to the branch directly. For these situations, grant the **Exempt from policy enforcement** permission to a user or group. You can scope this permission to an entire project, a repo, or a single branch. Manage this permission along the with other [Git permissions](../security/permissions.md#git-repository-permissions-object-level).  

![Exempt from policy enforcement permission](_img/branch-policies/PolicyExemptPermission.png)

>[!IMPORTANT]
> Users with **Exempt from policy enforcement permission** set to allow can complete pull requests even if the branch policy is not satisfied. Use caution when granting this permission, especially
> at the repo and team project level.

::: moniker-end 

::: moniker range=">= tfs-2015" 

## Q & A

<!-- BEGINSECTION class="md-qanda" -->



<a name="how_works"></a>
#### Q: When are the conditions set in branch policies checked?

Branch policies are re-evaluated on the server as changes are pushed and reviewers vote.
If there is a build triggered by the policy, the build status is set to waiting until the build completes.

#### Q: Can I use XAML build definitions in branch policies?
You cannot use [XAML build definitions](https://msdn.microsoft.com/library/ms181715%28v=vs.120%29.aspx) in branch policies.



#### Q: What type of wildcard characters are supported when configuring required code reviewers?
Single asterisks (`*`) are supported, and will match any number of characters, including both forward-slashes (`/`) and back-slashes (`\`).  Question marks (`?`) will match any single character.  

Examples:

* `*.sql` will match all files with the .sql extension
* `/ConsoleApplication/*` will match all files under the folder named ConsoleApplication
* `/.gitattributes` will match the .gitattributes file in the root of the repo
* `*/.gitignore` will match any .gitignore file in the repo

#### Q: Are the required code reviewer paths case-sensitive?
No, branch policies are not case-sensitive at this time.



#### Q: How can I configure multiple users as required reviewers, but only require that one of them approve?
You can [add the users to a group](../accounts/add-team-members-vs.md), and then add the group as a reviewer.  Any member of the group can then approve on behalf of the group to meet the policy requirement.

#### Q: I have the exempt from policy permission set, why am I still seeing policy failures in the pull request status?
Even for users that are exempt from policy enforcement, the configured policies are still evaluated when changes are added to a pull request.  For exempt users, policy status is advisory only and will not block completion of the pull request.

#### Q: Where can I get more information on advanced policy configurations?
Check out the [REST API documentation](http://go.microsoft.com/fwlink/?LinkId=526702) for more details.    

<!-- ENDSECTION --> 

::: moniker-end 
