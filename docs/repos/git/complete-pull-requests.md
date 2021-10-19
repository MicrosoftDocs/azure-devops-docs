---
title: Complete, abandon, or revert pull requests
titleSuffix: Azure Repos
description: Respond to comments and complete pull requests in Azure Repos. Learn about completion options, auto-completion, and abandoning or reverting pull requests.
ms.assetid: 4C9DFD24-E894-454A-A080-DA511C90CA74
ms.technology: devops-code-git 
ms.topic: conceptual
ms.author: vijayma
author: vijayma
ms.date: 10/18/2021
monikerRange: '<= azure-devops'
---

# Complete, abandon, or revert pull requests

Update the changes in your pull request in response to comments or to fix issues.

::: moniker range="azure-devops"
To make quick updates, select **Edit** on the **Files** page in your branch on the web.

![Screenshot that shows the Edit button to update code directly in Azure Repos.](./media/complete-pull-requests/edit-file.png)

After updating your files, [commit](commits.md) changes and [push](pushing.md) the updates to the branch in your repo.

You can also immediately apply reviewers' suggested changes by selecting **Apply change** in the comment on the PR **Overview** page. Once you've applied all the changes you want, select **Commit all changes**.

![Screenshot that shows the Apply change button in a PR comment.](./media/complete-pull-requests/apply-change.png)

::: moniker-end

::: moniker range="<= azure-devops-2020"
You can make quick updates to your branch directly from the **Files** tab in **Code** on the web.

![Screenshot that shows the Edit button to update code directly in Azure Repos.](./media/complete-pull-requests/pr-editing-changes.png)
::: moniker-end

## Address comments

Reply to comments and update comment status to let reviewers know how you're addressing their comments and suggestions. 

To resolve a comment without replying, select **Resolve** under the comment. To reply to the comment, type your response in the **Write a reply** field, and select **Reply**. Select **Reply & resolve** to reply to and resolve the comment. Reply to specific reviewers by using `@username` in the reply, and reference work items by using `#workitemID`. You can also reference other PRs by using `!pullrequestID`.

New comments start in **Active** status. Select **Resolve** or **Reply & resolve** to update comment status to **Resolved**.

![Update comments in Azure Repos PRs.](./media/complete-pull-requests/pr-comments-reply-and-resolve.png)

More options are available in the comment resolution dropdown list:

![Screenshot of more options in the comment resolution dropdown list.](./media/complete-pull-requests/pr-comment-resolution.png)

- **Active**: The comment is still under review.
- **Pending**: The issue in this comment will be addressed, but isn't fixed yet.
- **Resolved**: The issue brought up in this comment is fixed.
- **Won't fix**: The suggestion in the comment is noted, but this PR won't address it.
- **Closed**: Discussion for this comment is closed.

:::moniker range=">= azure-devops-2019"

To keep track of files that have already been reviewed, select **More options** next to a file in your PR, and then select **Mark as reviewed**.

:::moniker-end

<a name="complete-the-pull-request"></a>
## Complete a pull request

After the PR gets all required approvals and meets all branch policy requirements, you can complete the PR.

# [Browser](#tab/browser)

::: moniker range="azure-devops"

1. Select **Complete** at upper right to complete the PR. Or select the dropdown arrow next to the **Complete** button, and select one of the following options:

   - **Complete**: Complete the PR now, and merge the changes to the target branch.
   - **Set auto-complete**: Configure the PR to complete and merge once it meets all required branch policies.
   - **Mark as draft**: Return the PR to draft status and remove all votes.
   - **Abandon**: Close the PR without merging the changes.

   ![Screenshot that shows the Complete button options for the PR.](./media/complete-pull-requests/complete-pr-options.png)

1. In the **Complete pull request** pane:

   1. Under **Merge type**, select one of the following options:
      - **Merge (no fast forward)**: Merge with a non-linear history that preserves all commits.
      - **Squash commit**: Merge with a linear history that combines all source commits into a single commit on the target, or [squash merges](merging-with-squash.md) the PR.
      - **Rebase and fast-forward**: Rebase the source commits onto the target and fast-forward.
      - **Semi-linear merge**: Rebase source commits onto the target and create a two-parent merge.
   
      > [!NOTE]
      > Existing policies are still enforced. For example, if your branch currently has a "squash merge only" policy, you have to change that policy if you want to use the other merge types.
   
   1. Select any of the following post-completion options. Some options aren't available for some merge types.
      - **Complete associated work items after merging**: Complete any linked work items.
      - **Delete \<branch name> after merging**: Delete the PR's source branch after merging.
      - **Customize merge commit message**: Add a custom merge commit message. If you select this option, update the [merge commit](merging.md) message.
      - **Override branch policies and enable merge**. Force the merge even if the PR doesn't satisfy all branch policies. This option is only available if you have [Exempt from policy enforcement](branch-policies.md#bypass-branch-policies) permission.
   
   1. Select **Complete merge**.
     
   :::image type="content" source="media/complete-pull-requests/pull-request-complete-merge-2020.png" alt-text="Screenshot that shows the complete PR dialog.":::

::: moniker-end

::: moniker range=">= azure-devops-2019 <= azure-devops-2020"

1. Select **Complete** at upper right to complete the PR. Or, select the dropdown arrow next to the **Complete** button, and select one of the following options:

   ![Screenshot that shows the Complete button options for the PR.](./media/complete-pull-requests/old-complete-pr-options.png)

   - **Complete**: Complete the PR now, and merge the changes to the target branch.
   - **Set auto-complete**: If you have branch policies, configure the PR to complete and merge once it meets all required branch policies.
   - **Abandon**: Close the PR without merging the changes.

1. On the **Complete pull request** screen, enter the message for the [merge commit](merging.md) and update the PR description.

   ![Complete pull request dialog](./media/complete-pull-requests/complete-pr-dialog.png)

1. Select any of the following options:
   - **Complete linked work items after merging** to complete any linked work items.
   - **Delete `<branch name>` after merging** to delete the source branch from the PR.
   - **Squash changes when merging** to [squash merge](merging-with-squash.md) your PR.
   - **Override branch policies and enable merge** to force a branch to merge even if it doesn't satisfy all branch policies. This option is only available if you have [Exempt from policy enforcement](branch-policies.md#bypass-branch-policies) permissions.
     
     
     > [!NOTE]
     > Existing policies are still enforced. For example, if your branch currently has a "squash merge only" policy in place, you have to edit that policy in order to use the other merge types.  

5. Select **Complete merge**.

::: moniker-end

::: moniker range=">= azure-devops-2019"
When you complete the merge, any linked work items automatically update to show the PR completion.

![Screenshot of linked work items showing completed PRs.](./media/complete-pull-requests/pr-workitem-complete.png)

::: moniker-end

::: moniker range="<= tfs-2018"

1. Select **Complete** in the upper right of the PR view to complete your PR after the reviewers approve of the changes.

   ![Complete button for the PR with its drop-down options](./media/complete-pull-requests/old-complete-pr-options.png)

   - **Complete**: Complete the PR now and merge the changes to the target branch.
   - **Set auto-complete**: If you have branch policies, you can choose **Set auto-complete** to configure the PR to close once it meets all branch policies.
   - **Abandon**: Close the PR without merging the changes.

2. In **Complete pull request**, enter the message for the [merge commit](merging.md) and update the PR description.

   ![Complete PR dialog](./media/complete-pull-requests/complete-pr-dialog.png)

3. Select any of the following post-completion options:

   - **Complete linked work items after merging** to complete any linked work items.
   - **Delete `<branch name>` after merging** to delete the source branch from the PR.
   - **Squash changes when merging** to [squash merge](merging-with-squash.md) your PR.
   - **Override branch policies and enable merge** to force a branch to merge even if it doesn't satisfy all branch policies. This option is only available if you have [Exempt from policy enforcement](branch-policies.md#bypass-branch-policies) permissions.

4. Select **Complete merge**.

Linked work items are also updated showing the PR completion.

![Linked Work Items showing completed PRs](./media/complete-pull-requests/pr-workitem-complete.png)

::: moniker-end

::: moniker range=">= tfs-2017"

### Complete automatically

Select **Set auto-complete** from the **Complete** dropdown list to complete and merge the PR changes as soon as conditions satisfy all [branch policies](branch-policies.md). When the PR is completed, you receive an email notification. If a conflict or error prevents PR completion, email notifies you of the issue.

>[!NOTE]
>The **Set auto-complete** option is available in Azure Repos and TFS 2017 and higher when you have branch policies. If you don't see **Set auto-complete**, you don't have any branch policies. For more information, see [Branch policies](branch-policies.md).

By default, a PR that's set to autocomplete waits only on required policies. In the **Enable automatic completion** panel, you can choose to wait on optional policies as well.

![Screenshot that shows changing an optional policy to required in the Enable automatic completion panel.](media/complete-pull-requests/enable-completion.png)

Starting with TFS 2018 Update 2, the PR **Overview** page displays the list of outstanding policy criteria the PR is waiting for. If you set a policy to be required in the **Enable automatic completion** panel, you can set it back to optional on the **Overview** page.

Select **Cancel auto-complete** to turn off autocomplete. 

::: moniker-end 

::: moniker range="azure-devops"
![Screenshot of a P R in autocomplete state.](./media/complete-pull-requests/autocomplete.png)
::: moniker-end 

::: moniker range=">= tfs-2017 <= azure-devops-2020"
![Screenshot of a P R in autocomplete state.](./media/complete-pull-requests/pr-banner-autocomplete.png)
::: moniker-end 

A PR set to autocomplete displays an **Auto-complete** badge on the **Pull requests** page.

![Screenshot showing an autocomplete P R in the P R list.](media/complete-pull-requests/auto-complete-badge.png)

### Abandon your changes

To abandon your changes, select **Abandon** from the dropdown list on the **Complete** button. You can still view the abandoned PR, and it stays linked to work items.

To reactivate an abandoned PR at any time, open the PR from the **Abandoned** tab in the **Pull Request** view, and select **Reactivate** at upper right.


# [Visual Studio](#tab/visual-studio)

To complete a PR, from the **Pull Requests** view in Team Explorer, right-click the PR and select **Open in browser**. On the PR's **Overview** page, select **Complete** or set other options.

# [Azure Command Line](#tab/azure-command-line)

::: moniker range=">= azure-devops-2020"

To complete a PR and merge the changes, update the PR `status` to `completed` with [az repos pr update](/cli/azure/repos/pr#az_repos_pr_update).

For example, to complete PR #21, use:

```azurecli
az repos pr update --id 21 --status completed
```

### Set completion options

You can set PR completion options at PR creation with `az repos pr create`, or update existing PRs with `az repos pr update`. 

PR completion options include:

- `bypass-policy {false, true}`: Whether to bypass any required policies and complete the pull request once it can be merged.
- `bypass-policy-reason`: Reason for bypassing required policies.
- `delete-source-branch {false, true}`: Whether to delete the source branch after the pull request has been completed and merged.
- `merge-commit-message`: Customize the merge commit message.
- `squash {false, true}`: Whether to squash the source commits into a single target commit for merge.
- `transition-work-items {false, true}`: Whether to resolve linked work items when the PR merges.

The following example completes PR #21, deletes its source branch, resolves its linked work items, and adds a merge commit message:

```azurecli
az repos pr update --id 21 --status completed --delete-source-branch true --transition-work-items true --merge-commit-message "This update is complete."
```

### Complete automatically

Set autocomplete to complete a PR automatically when it passes all required approvals and branch policies. You can set autocomplete at PR creation, or update an existing PR.

- To set autocomplete at PR creation, use `az repos pr create --auto-complete true`.
- To update an existing PR to autocomplete, use `az repos pr update --id <PR Id> --auto-complete true`.

### Abandon your changes

To abandon a PR without merging it, use `az repos pr update --id <PR Id> –-status abandoned`. You can reactivate the PR by setting the status to `active`.

::: moniker-end


***


### Resolve merge conflicts

When you complete a PR, Git adds a new *merge commit* to the end of the main branch. This merge commit links the earlier histories of the main branch and the PR source branch. You must resolve any [merge conflicts](merging.md) between the PR branch and the target branch before you can merge the PR.


::: moniker range=">= azure-devops-2019"
### Rebase during PR completion

There are a few situations when rebasing during PR completion isn't possible:

- If a policy on the target branch prohibits using rebase strategies, you need **Override branch policies** permission to rebase.
- If the PR source branch has policies, you can't rebase it. Rebasing would modify the source branch without going through the policy approval process.
- If you used the Merge Conflict Extension to resolve merge conflicts, you can't rebase. Conflict resolutions applied to a three-way merge are seldom successful or valid when rebasing all the PR commits individually.

In all these cases, you can still rebase your branch locally and then push upstream, or squash-merge your changes when you complete the PR.

::: moniker-end

### Multiple merge base issue

In some cases, a PR has more than one true merge base, and this can cause security issues. If the files in the PR have different versions between the merge bases, a multiple merge base warning happens. For more information and remediation, see [Multiple merge bases](about-pull-requests.md#multiple-merge-bases). 


::: moniker range=">= tfs-2017" 
## Revert a PR

To undo the changes from a PR, follow these steps:

1. Open the completed PR and select **Revert**. This action creates a new branch with changes that undo the PR in an existing target branch in your repo.

1. In the **Revert pull request** pane:

   1. Under **Target branch**, select the branch where you want to undo the PR changes.
   1. Under **Topic branch name required**, change the revert PR branch name if you want.
   1. Select **Revert**.

1. On the **New pull request** screen, select **Create**.

1. Merge the new PR to complete the revert.

> [!NOTE]
> The branch created during this revert has a single commit that reverts all the file changes from the original PR. The branch doesn't contain a reverted commit for each of the commits in the original PR.
::: moniker-end

## Next steps

- [Pull request update notifications](pull-request-notifications.md)
- [Change the default branch](change-default-branch.md)
- [Copy changes with cherry-pick](cherry-pick.md)
- [About pull requests and permissions](about-pull-requests.md)
