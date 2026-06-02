---
title: Review and comment on pull requests
titleSuffix: Azure Repos
description: Learn how to review pull requests in Azure Repos, including how to request a Copilot code review, comment, suggest changes, and vote.
ms.service: azure-devops-repos
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 05/27/2026
ms.subservice: azure-devops-repos-git
ms.custom: sfi-image-nochange
ai-usage: ai-assisted
---

# Review pull requests

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

When you create a [pull request](pull-requests.md) (PR) and specify required and optional reviewers, Azure Repos notifies the reviewers that your PR is ready for review. All required reviewers must approve the changes in your PR before the changes can merge into the target branch. For PRs that change critical branches like `main`, your team might have [branch policies](branch-policies.md) that specify the reviewers or require a minimum number of reviewers. If branch policies add optional reviewers to your PR, you can keep them, require them, or remove them. If branch policies add required reviewers to your PR, you can't make them optional or remove them. For information about assigning reviewers through branch policies, see [Automatically include code reviewers](branch-policies.md#include-code-reviewers).

When you review a PR, give constructive feedback that's precise and easy to understand. For more information, see [Pull request feedback](about-pull-requests.md#quality-feedback-for-pull-requests).

You can only review Azure DevOps PRs in the web portal by using your browser.

## Prerequisites

::: moniker range="azure-devops"

| Category | Requirements |
|--|--|
| **Project** | An [Azure DevOps project](../../organizations/projects/create-project.md). If you don't have a project, create one or [sign up for free](../../user-guide/sign-up-invite-teammates.md). |
| **Services** | **Repos** enabled in your project. If the **Repos** hub doesn't display, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md). |
| **Access levels** | At least **Basic** access. For public projects, users with **Stakeholder** access have full access to **Azure Repos**. |
| **Permissions** | Membership in the Azure DevOps project that contains the PR. If you aren't a project member, [get added](../../organizations/accounts/add-organization-users.md). For more information, see [Default Git repository and branch permissions](../../organizations/security/default-git-permissions.md) and [About access levels](../../organizations/security/access-levels.md). |

::: moniker-end

::: moniker range="<azure-devops"

| Category | Requirements |
|--|--|
| **Services** | **Repos** enabled in your project. If the **Repos** hub doesn't display, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md). |
| **Access levels** | At least **Basic** access. |
| **Permissions** | Membership in the Azure DevOps project that contains the PR. If you aren't a project member, [get added](../../organizations/security/add-users-team-project.md). For more information, see [Default Git repository and branch permissions](../../organizations/security/default-git-permissions.md) and [About access levels](../../organizations/security/access-levels.md). |

::: moniker-end

::: moniker range="azure-devops"

You can manage PRs in Azure DevOps Services by using the [Azure DevOps command line interface (CLI)](../../cli/index.md). The Azure DevOps CLI is available when you install the [Azure CLI](/cli/azure/) and the Azure DevOps extension. For a list of CLI commands to manage PRs, see the [`az repos pr`](/cli/azure/repos/pr) commands.

::: moniker-end

## Review changes

Pull requests let designated reviewers examine, discuss, and vote on proposed changes before those changes merge into a target branch. If the same files are changed on both the source and target branches, you might see merge conflicts. Carefully analyze conflicts and edit the files manually to apply the right changes from each branch. Taking all changes from only the source or only the target with a single click can cause you to lose required changes. You can resolve conflicts in Azure DevOps or in a development tool like Visual Studio.

For more information, see [Resolve merge conflicts](/azure/devops/repos/git/merging?view=azure-devops&tabs=visual-studio-2019&preserve-view=true).

### Request a Copilot code review

You can ask GitHub Copilot to review a pull request alongside human reviewers. Copilot posts comments and suggestions directly on the changed code, so you can address common issues before a human reviewer signs off.

To request a review, open a pull request and select **Request** next to **GitHub Copilot** in the **Reviewers** section. Copilot always leaves a **Comment** review, so its feedback doesn't satisfy required-reviewer policies and doesn't block merging.

This feature is in limited public preview and requires sign-up. For setup, billing, and limits, see [Get started with Copilot code review for pull requests](copilot-code-reviews.md).

### Review changes as a human reviewer

The following steps describe how reviewers of PRs in Azure Repos can navigate through a PR to understand the proposed changes:

1. From your web browser, open the team project for your Azure DevOps organization. Choose **Repos** > **Pull requests** to list the PRs. A newly opened PR defaults to the **Overview** tab.

1. The **Overview** tab of a PR shows the title, description, reviewers, linked work items, history, status, and comments. Read the PR description to see the proposed changes. View the comments to understand the issues raised by other reviewers.
    >[!NOTE]
    >Each file is marked with a "+" sign or a "rename, edit" label next to its name to indicate the type of change. When a file has more than 50 percent changes, Git considers it *renamed*. This threshold is the default for Git repositories and can't be changed.
    
    :::image type="content" source="media/review-pull-requests/2022/overview-tab.png" border="true" alt-text="Screenshot of the Azure Repos PR overview tab.":::
    
1. Select the **Files** tab to review all content changes in the PR's source branch. The initial view shows a summary view of all file changes. Choose the **View** button next to a file to view only that file's changes. If the file was modified, the **View** button opens a diff view. If the file was added or deleted, the **View** button opens a content pane.

    :::image type="content" source="media/review-pull-requests/2022/files-tab.png" border="true" alt-text="Screenshot of a change summary view in the Files tab of a PR." lightbox="media/review-pull-requests/2022/files-tab-lrg.png":::

    >[!NOTE]
    >For performance reasons, the summary view doesn't show changes for a file that's larger than 0.5 MB.

1. In a diff view for a file, you can select either a **Side-by-side** or **Inline** diff layout.

    :::image type="content" source="media/review-pull-requests/2022/files-tab-diff-view.png" border="true" alt-text="Screenshot of a side-by-side diff view in the Files tab of a PR." lightbox="media/review-pull-requests/2022/files-tab-diff-view-lrg.png":::

    >[!TIP]
    >For any *single* file that's larger than 5 MB, the diff view shows truncated file content. For a diff view of the full content, download and review such files by using a local diff tool.

    Use the left-hand file tree to view another file, or select the root of the file tree to see a summary view of all file changes.

1. To review the changeset introduced by specific [pushes](pushing.md) to the source branch, select one or more changesets from the changes dropdown list. When you select one or more changesets, the diff view updates to show only the changes from the selected changesets. This feature is useful when changes are pushed to the PR since your last review and you just want to see the new changes. The changes dropdown list names each changeset with the commit message from the final commit in each push operation.

    :::image type="content" source="media/review-pull-requests/2022/files-tab-changes-dropdown.png" border="true" alt-text="Screenshot of the changeset section dropdown in the Files tab of a PR." lightbox="media/review-pull-requests/2022/files-tab-changes-dropdown-lrg.png":::

    >[!TIP]
    >Hold the **Shift** key when selecting multiple changesets from the changes dropdown list.

1. Choose the **Updates** tab to view all pushed changesets and to confirm you didn't miss any source-branch changes. The changesets are numbered and the most recent changeset appears at the top of the list. Each changeset shows the commits that were pushed in that push operation. A force-pushed changeset doesn't overwrite the changeset history and appears in the changeset list like any other changeset.

    :::image type="content" source="media/review-pull-requests/2022/updates-tab.png" border="true" alt-text="Screenshot of a changeset list in the Updates tab of a PR." lightbox="media/review-pull-requests/2022/updates-tab-lrg.png":::

1. Choose the **Commits** tab to view the commit history of the source branch after it diverged from the target branch. The commit history in the **Commits** tab is overwritten if the PR author force-pushes a different commit history, so the commits shown in the **Commits** tab might differ from the commits shown in the **Updates** tab.

    :::image type="content" source="media/review-pull-requests/2022/commits-tab.png" border="true" alt-text="Screenshot of a commit list in the Commits tab of a PR." lightbox="media/review-pull-requests/2022/commits-tab-lrg.png":::

<a id="address-comments"></a>

## Use comments

PR authors and reviewers can communicate with each other by adding and responding to PR comments. When you review a PR, use comments to point out problems with the proposed changes, [suggest changes](#suggest-changes-in-comments), and respond to previous comments. Aim for constructive feedback that's precise and easy to understand. Address recipients directly by using their `@username`. Reference work items by using `#workitemID` and other PRs by using `!pullrequestID`. Sometimes, PR authors create comments for themselves for documentation purposes.

### Provide feedback in comments

If your feedback applies to a specific line or range of lines in a file, add a comment at that location within the file:

1. In the **Files** tab of a PR, hover over the line you want to comment on and select the comment button :::image type="icon" source="media/review-pull-requests/2022/new-comment-icon.png"::: to open an inline comment box. You can also select multiple lines and then select the comment button that appears when you hover over those lines.

    :::image type="content" source="media/review-pull-requests/2022/files-tab-comment-icon.png" border="true" alt-text="Screenshot of the comment icon in an Azure Repos PR." lightbox="media/review-pull-requests/2022/files-tab-comment-icon-lrg.png":::

1. Enter your comment in the comment box and choose **Comment**.

    :::image type="content" source="media/review-pull-requests/2022/files-tab-comment-box.png" border="true" alt-text="Screenshot of the comment box in the Files tab of an Azure Repos PR." lightbox="media/review-pull-requests/2022/files-tab-comment-box-lrg.png":::

If your feedback applies to the entire file, add a file-level comment by selecting **Add comment** from the file options menu:

:::image type="content" source="media/review-pull-requests/2022/files-tab-file-comment.png" border="true" alt-text="Screenshot of the file tree context menu in the Files tab of an Azure Repos PR.":::

To provide general feedback unrelated to a specific file, add a comment in the **Overview** tab:

:::image type="content" source="media/review-pull-requests/2022/overview-tab-comment-box.png" border="true" alt-text="Screenshot of a comment box in the Overview tab of an Azure Repos PR." lightbox="media/review-pull-requests/2022/overview-tab-comment-box-lrg.png":::

PR reviewers can also use comments to [suggest changes](#suggest-changes-in-comments) to specific file lines, as described in the next section.

### Suggest changes in comments

Use comments to suggest replacement text for one or more lines in a file:

1. In the **Files** tab of a PR, hover over the line you want to comment on and select the comment button :::image type="icon" source="media/review-pull-requests/2022/new-comment-icon.png"::: to open an inline comment box. You can also select multiple lines and then select the comment button that appears when you hover over those lines. If accepted, your suggested content replaces the line or lines that your comment was added to.

    :::image type="content" source="media/review-pull-requests/2022/files-tab-comment-icon.png" border="true" alt-text="Screenshot of the comment icon in an Azure Repos PR." lightbox="media/review-pull-requests/2022/files-tab-comment-icon-lrg.png":::

1. Select the light bulb icon under the comment box to make your suggested changes in the comment box within a fenced code block, and then choose **Comment**. You don't see a light bulb icon if you add a comment to the original code (left-hand side) of a side-by-side diff view.

    :::image type="content" source="media/review-pull-requests/2022/files-tab-comment-box-suggestion.png" border="true" alt-text="Screenshot showing how to make a suggested change in the Files tab of an Azure Repos PR." lightbox="media/review-pull-requests/2022/files-tab-comment-box-suggestion-lrg.png":::

PR authors can accept your suggestion by:

1. Choosing **Apply changes** to stage the change in readiness for a commit.

    :::image type="content" source="media/review-pull-requests/2022/files-tab-comment-box-apply-changes.png" border="true" alt-text="Screenshot showing how to accept a suggested change in the Files tab of an Azure Repos PR." lightbox="media/review-pull-requests/2022/files-tab-comment-box-apply-changes-lrg.png":::

1. Choosing **Commit all changes** to commit all staged changes. PR authors can unstage a suggestion by choosing **Undo change**.

    :::image type="content" source="media/review-pull-requests/2022/files-tab-comment-box-commit-changes.png" border="true" alt-text="Screenshot showing how to commit all changes in the Files tab of an Azure Repos PR." lightbox="media/review-pull-requests/2022/files-tab-comment-box-commit-changes-lrg.png":::

### Edit or delete comments

Edit or delete your comment by hovering over the comment and choosing the *edit* or *delete* icon:

:::image type="content" source="media/review-pull-requests/2022/files-tab-edit-delete-comment.png" border="true" alt-text="Screenshot showing the edit and delete buttons in a PR comment." lightbox="media/review-pull-requests/2022/files-tab-edit-delete-comment-lrg.png":::

### Like comments

PR authors and reviewers can *like* their own or someone else's comment by hovering over the comment and choosing the thumbs-up icon:

:::image type="content" source="media/review-pull-requests/2022/files-tab-like-comment.png" border="true" alt-text="Screenshot showing the like button in a PR comment." lightbox="media/review-pull-requests/2022/files-tab-like-comment-lrg.png":::

Comments with likes show a filled-in thumbs-up icon and the number of likes. Hover over the thumbs-up icon to see the list of people who liked the comment.

:::image type="content" source="media/review-pull-requests/2022/files-tab-comment-like-count.png" border="true" alt-text="Screenshot showing the count of comment likes in a PR comment." lightbox="media/review-pull-requests/2022/files-tab-comment-like-count-lrg.png":::

### Reply to comments

PR authors should reply to comments to let the reviewers know how they're addressing feedback and suggestions:

1. To reply to a comment, type your response in the **Write a reply** field. Address recipients directly by using their `@username`. Reference work items by using `#workitemID` and other PRs by using `!pullrequestID`.

    :::image type="content" source="media/review-pull-requests/2022/comment-reply.png" border="true" alt-text="Screenshot showing where to reply to a PR comment.":::

1. After entering your response, select **Reply & resolve** if your response is final. Otherwise, select **Reply**.

    :::image type="content" source="media/review-pull-requests/2022/comment-reply-resolve.png" alt-text="Screenshot showing how to reply to or resolve a PR comment.":::

    If you select **Reply & resolve**, the comment status changes to **Resolved**. PR authors can also directly change a comment's status, as described in the next section.

### Change comment status

New comments start with an **Active** status. PR authors update the status during the review process to indicate how they addressed reviewer feedback and suggestions. PR authors can select a comment status from the status dropdown list:

:::image type="content" source="media/review-pull-requests/2022/comment-status-dropdown.png" border="true" alt-text="Screenshot of the comment status options in a PR comment.":::

- **Active**: The default status for new comments.
- **Pending**: The issue in this comment is under review and awaits something else.
- **Resolved**: The issue in this comment is addressed.
- **Won't fix**: The issue in this comment is noted but won't be fixed.
- **Closed**: The discussion in this comment is closed.

PR authors and reviewers can track PR progress by [filtering](#filter-comments) on comment status, as described in the next section.

### Filter comments

You can select which comments or updates show on the **Overview** tab by selecting a filter option from the comment filter dropdown list. For example, select the **What's new** filter option to see new comments and updates since you last opened the PR. Each filter option shows the number of items for its category.

:::image type="content" source="media/review-pull-requests/2022/overview-tab-filter-comments.png" border="true" alt-text="Screenshot showing the comment filter options in the Overview tab of a PR." lightbox="media/review-pull-requests/2022/overview-tab-filter-comments-lrg.png":::

## Edit files

For convenience, PR authors can edit files directly in Azure Repos. For example, you might accept a reviewer's suggested code change and want to make similar changes elsewhere.

1. Select **Repos > Files**, select the PR source branch, select a file, and then choose **Edit**.

    :::image type="content" source="media/review-pull-requests/2022/file-edit.png" border="true" alt-text="Screenshot of the Edit button to update a file in Azure Repos." lightbox="media/review-pull-requests/2022/file-edit-lrg.png":::

1. Make your changes in the editor, and then choose **Commit** to open the **Commit** dialog.

    :::image type="content" source="media/review-pull-requests/2022/file-commit.png" border="true" alt-text="Screenshot of the Commit button in Azure Repos.":::

1. In the **Commit** dialog, edit the commit message if necessary, and then choose **Commit** to [commit](commits.md) and [push](pushing.md) the changes to your PR.

    :::image type="content" source="media/review-pull-requests/2022/file-commit-2.png" border="true" alt-text="Screenshot of the Commit dialog in Azure Repos.":::

## Track reviewed files

PR reviewers can keep track of reviewed files by choosing **Mark as reviewed** from the file options menu, or by selecting the checkbox next to a file or folder:

:::image type="content" source="media/review-pull-requests/2022/files-tab-mark-reviewed.png" border="true" alt-text="Screenshot of the mark-as-reviewed option in the file options menu in the Files tab of a PR." lightbox="media/review-pull-requests/2022/files-tab-mark-reviewed-lrg.png":::

<a id="set-vote"></a>

## Vote on PR changes

#### [Browser](#tab/browser)

PR reviewers can vote on a PR by selecting a vote option from the vote dropdown list. The reviewer icon on the PR page indicates the vote.

:::image type="content" source="media/review-pull-requests/2022/pr-vote-options.png" border="true" alt-text="Screenshot of the vote options in an Azure Repos PR." lightbox="media/review-pull-requests/2022/pr-vote-options-lrg.png":::

The voting options are:

- **Approve**: Approves the proposed changes in the PR. This option is a vote and doesn't complete the PR.
- **Approve with suggestions**: Approves the proposed changes with optional suggestions for improvement. This option is a vote and doesn't complete the PR.
- **Wait for author**: Asks the author to review the reviewer comments. The PR author should let the reviewers know to re-review the code after they address the comments. If a required reviewer sets this option, the vote blocks PR approval.
- **Reject**: Indicates that the changes aren't acceptable. When you choose this option, add a comment explaining why. If a required reviewer sets this option, the vote blocks PR approval.
- **Reset feedback**: Clears your vote. The absence of a vote doesn't prevent a PR from being [completed](#complete-a-pr).

#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

To vote on whether to approve a PR, use the [`az repos pr set-vote`](/cli/azure/repos/pr#az-repos-pr-set-vote) command.

```azurecli
az repos pr set-vote --id
                     --vote {approve, approve-with-suggestions, reject, reset, wait-for-author}
                     [--detect {false, true}]
                     [--org]
                     [--subscription]
```

##### Parameters

| Parameter | Required | Description |
|-|-|
| `--id`           | Yes | Pull request ID |
| `--vote`         | Yes | New vote value for the pull request (accepted values: `approve`, `approve-with-suggestions`, `reject`, `reset`, or `wait-for-author`) |
| `--detect`       | No  | Automatically detect organization (accepted values: `false`, `true`) |
| `--organization` | Yes, if a default org isn't set and the git config file doesn't specify the org | Azure DevOps organization URL, or set a default org using: [`az devops configure -d organization=<organization URL>`](/cli/azure/devops#az-devops-configure) |
| `--subscription` | No | Name or ID of an Azure subscription, or set a default subscription using: [`az account set -s <name or ID>`](/cli/azure/account#az-account-set) |

##### Examples

The following command votes to approve PR #21. The command returns a table.

```azurecli
az repos pr set-vote --id 21 --vote approve --output table
```

```output
Name            Email                ID                                    Vote      Required
--------------  ------------------- -------------------------------------  --------  ----------
Jamal Hartnett  jamalh@fabrikam.com  00000000-0000-0000-0000-000000000000  Approved  False
```

The following command removes your vote. The command returns a table.

```azurecli
az repos pr set-vote --id 21 --vote reset --output table
```

```output
Name            Email                ID                                    Vote      Required
--------------  ------------------- -------------------------------------  --------  ----------
Jamal Hartnett  jamalh@fabrikam.com  00000000-0000-0000-0000-000000000000            False
```

::: moniker-end

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

::: moniker-end

***

## Complete a PR

PR authors can select a PR resolution option:

:::image type="content" source="media/review-pull-requests/2022/pr-resolution-options.png" border="true" alt-text="Screenshot of the PR resolution options in an Azure Repos PR." lightbox="media/review-pull-requests/2022/pr-resolution-options-lrg.png":::

- **Complete**: Complete the PR now if all required reviewers approved it and all required branch policies are met.
- **Set auto-complete**: Auto-complete the PR when all required reviewers approve it and all required branch policies are met.
- **Mark as draft**: Set the PR to draft status to indicate it isn't ready for review. For a draft PR, select **Publish** to remove draft status and mark it ready for review.
- **Abandon**: Close the PR. For an abandoned PR, select **Reactivate** to restore it.

For more information, see [Complete the pull request](complete-pull-requests.md).

## Next step

>[!div class="nextstepaction"]
>[Complete the pull request](complete-pull-requests.md)
 

## Related articles

- [Get started with Copilot code review for pull requests](copilot-code-reviews.md)
- [Pull request update notifications](pull-request-notifications.md)
- [About pull requests and permissions](about-pull-requests.md)
