---
title: Update your branch history with rebase
titleSuffix: Azure Repos
description: Learn when and how to rebase to update a local branch, force push to update a remote branch, and interactively rebase to squash local commits.
ms.assetid: 7f6312b8-6c98-4f44-9b6e-eecbeafbbaea
ms.service: azure-devops-repos
ms.topic: tutorial
ms.date: 10/18/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Apply changes with rebase

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Git automatically maintains a [history](/devops/develop/git/understand-git-history) of development on a [branch](branch-policies-overview.md) by linking each new [commit](commits.md) to its predecessor. When you [merge](merging.md) one branch into another, the history can become less straightforward. For example, a [no-fast-forward merge](https://git-scm.com/docs/git-merge#_true_merge) combines divergent lines of development by creating a merge commit with multiple predecessors. Conversely, a Git [rebase](https://git-scm.com/docs/git-rebase) combines divergent lines of development without creating a merge commit, which results in a simpler commit history but loses information about the merge. Your choice of [merge type](pulling.md#update-branches-with-merge-or-rebase) is likely influenced by whether you want to preserve a record of the merge or simplify the commit history.

This article discusses when to use a rebase instead of a no-fast-forward merge, and provides procedures for the following tasks:

> [!div class="checklist"]
> * Rebase your local branch
> * Force push your local branch after a rebase
> * Interactive rebase to squash local commits

For an overview of the Git workflow, see [Azure Repos Git tutorial](gitworkflow.md).

## Rebase your local branch

Git [rebase](https://git-scm.com/docs/git-rebase) integrates commits from a source branch into your current local branch (target branch). The source branch remains unchanged. For comparison, Git rebase and other merge types are shown in the following diagram.

:::image type="content" source="media/pulling/merge-types.png" border="true" alt-text="Diagram showing the before and after commits when using Git rebase.":::

Git rebase resequences the commit history of the target branch so that it contains all source branch commits, followed by all target branch commits since the last common commit. Another way to view it is that a rebase replays the changes in your target branch on top of the source branch history. Notably, Git rebase changes the sequence of the existing target branch commits, which isn't the case for the other merge strategies. In the preceding diagram, commit K' contains the same changes as K, but has a new commit ID because it links back to commit E instead of C.

During a rebase, if a source branch change conflicts with a target branch change, Git will prompt you to [resolve the merge conflict](merging.md). You can resolve merge conflicts during a rebase in the same way that you resolve merge conflicts during a merge.

### Rebase vs. no-fast-forward merge

Git rebasing results in a simpler but less exact commit history than a [no-fast-forward](https://git-scm.com/docs/git-merge#_true_merge) merge, otherwise known as a _three-way_ or _true_ merge. When you want a record of a merge in the commit history, use a no-fast-forward merge.

If you're the only person working on a feature or bugfix branch, consider using a rebase to periodically integrate recent `main` branch work into it. That strategy helps ensure that you stay aware of recent work by others and promptly resolve any merge conflicts that arise. By rebasing, you implement your new feature on top of the most recent `main` branch work, which helps maintain a linear commit history.

For more information on Git rebase and when to use it, see [Rebase vs merge](https://git-scm.com/book/en/v2/Git-Branching-Rebasing#_rebase_vs_merge).

### Rebase and force-push guidelines

If you rebase a local branch that you've previously [pushed](pushing.md), and then run the default Git push command again, the push will fail. The default Git push command applies a fast-forward merge to integrate your local branch into the remote branch. That command will fail after a rebase because the rebase alters the sequence of existing commits in your local target branch, so it no longer matches the history of its remote counterpart. In this scenario, a [force push](#force-push-your-local-branch-after-a-rebase) will succeed&mdash;by overwriting the remote branch.

Git rebase and force push are powerful tools, but keep these guidelines in mind when deciding whether to use them:

- Don't rebase a local branch that's been pushed and shared with others, unless you're certain no one is using the shared branch. After a rebase, your local branch will no longer match the history of its remote counterpart.
- Don't force push to a remote branch that's in use by others, since their local version of the remote branch will no longer match the updated remote branch history.
- Your team should agree on the usage scenarios for rebase and force push.

> [!TIP]
> For a collaborative review process, use a [pull request](pull-requests.md) to merge new work into the default branch of a remote repo.

### How to rebase

#### [Visual Studio 2022](#tab/visual-studio-2022)

Visual Studio 2022 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**. Visual Studio 2019 version 16.8 also offers the **Team Explorer** Git user interface. For more information, see the **Visual Studio 2019 - Team Explorer** tab.

[!INCLUDE [How to rebase](includes/rebase-how.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

Visual Studio 2019 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**.

[!INCLUDE [How to rebase](includes/rebase-how.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably.

1. In **Team Explorer**, select **Home** and choose **Branches**.

   :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branches.png" border="true" alt-text="Screenshot of the Branches option in Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branches-lrg.png":::

1. In the **Branches** view, right-click the target branch and select **Checkout**.

   :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-checkout.png" border="true" alt-text="Screenshot of the Checkout option in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-checkout-lrg.png":::

1. Right-click the source branch, and select **Rebase Onto**.

   :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-rebase.png" border="true" alt-text="Screenshot of the Rebase Onto option in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-rebase-lrg.png":::

1. Verify the rebase options and then click **Rebase**.

   :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-rebase-details.png" border="true" alt-text="Screenshot of the rebase details in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-rebase-details-lrg.png":::

1. Visual Studio will display a confirmation message after a successful rebase.

   :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-rebase-confirmation.png" border="true" alt-text="Screenshot of the rebase confirmation message in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-rebase-confirmation-lrg.png":::

   If there are conflicts during the rebase, Visual Studio will notify you. You can either [resolve the conflicts](merging.md?tabs=visual-studio), or cancel the rebase and return to the pre-rebase state.

   :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-rebase-conflict.png" border="true" alt-text="Screenshot of the rebase conflict message in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-rebase-conflict-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

To integrate source branch commits into a target branch, run the `git rebase` command:

```console
git rebase <source branch name> <target branch name>
```

If your current local branch is the target branch, you can simplify the rebase command to:

```console
git rebase <source branch name>
```

Git will notify you if there are conflicts during the rebase. You can either [resolve the conflicts](merging.md?tabs=command-line) and then run `git rebase --continue`, or run `git rebase --abort` to undo the rebase and return to the pre-rebase state.

---

## Force push your local branch after a rebase

If you rebase a local branch that you've previously pushed, a subsequent default Git push will [fail](#rebase-and-force-push-guidelines). Instead, you can force push your local branch to overwrite its remote counterpart so that their commit histories match.

> [!WARNING]
> Never force push a branch that others are working on. For more information, see [Rebase and force push guidelines](#rebase-and-force-push-guidelines).

To force push in Visual Studio, you must first enable the force push option:

1. Go to **Tools** > **Options** > **Source Control** > **Git Global Settings**.

1. Select the **Enable push --force-with-lease** option.

The Git push `--force-with-lease` flag is safer than the `--force` flag because it won't overwrite a remote branch that has commits that aren't integrated within the local branch you're force pushing.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Force push local branch](includes/rebase-force-push.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Force push local branch](includes/rebase-force-push.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably.

1. In **Team Explorer**, select **Home** and then choose **Sync** to open the **Synchronization** view.

   :::image type="content" source="media/rebase/visual-studio-2019/team-explorer/sync.png" border="true" alt-text="Screenshot of the Sync option in Team Explorer in Visual Studio 2019." lightbox="media/rebase/visual-studio-2019/team-explorer/sync-lrg.png":::

1. In the **Synchronization** view, choose **Push** to upload your changes to the remote repo.

   :::image type="content" source="media/rebase/visual-studio-2019/team-explorer/sync-push-option.png" border="true" alt-text="Screenshot of the Push link in the Synchronization view of Team Explorer in Visual Studio 2019." lightbox="media/rebase/visual-studio-2019/team-explorer/sync-push-option-lrg.png":::

1. If the default Git push operation fails, Visual Studio launches the **Git-Push failed** dialog. Choose **Force Push**.

   :::image type="content" source="media/rebase/visual-studio-2019/common/push-failed-dialog.png" border="true" alt-text="Screenshot of the Git-Push failed dialog in Visual Studio 2019." lightbox="media/rebase/visual-studio-2019/common/push-failed-dialog-lrg.png":::

1. Visual Studio will display a confirmation message after a successful push.

   :::image type="content" source="media/rebase/visual-studio-2019/team-explorer/push-confirmation.png" border="true" alt-text="Screenshot of the push confirmation message in Team Explorer in Visual Studio 2019." lightbox="media/rebase/visual-studio-2019/team-explorer/push-confirmation-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

> [!TIP]
> The Git push `--force-with-lease` flag is safer than the `--force` flag because it won't overwrite a remote branch that has commits that aren't integrated within the local branch you're force pushing.

To force push new commits from your local branch to a same-named remote branch:

```console
git push --force-with-lease <remote> <local branch name>
```

If the branch you want to push is your checked out branch, you can simplify the force push command to:

```console
git push --force-with-lease <remote>
```

When you clone a remote repo, Git assigns the alias `origin` as shorthand for the URL of the remote repo that you cloned. Run `git remote -v` to check the `origin` alias value. To add the `origin` alias manually, run `git remote add origin <remote repo url>`. With the `origin` alias, you can further simplify the force push command:

```console
git push --force-with-lease origin
```

If your current local branch tracks a remote branch on `origin`, you can fully abbreviate the force push command:

```console
git push --force-with-lease
```

However, the fully abbreviated push command will fail if your local branch doesn't track a remote branch. Run `git remote show origin` to check the tracked status of your branches.

---

## Interactive rebase to squash local commits

Typically, as you work on a new feature in your local feature branch, you'll create multiple commits. When you're ready to publish the new feature, you might want to consolidate those commits into a single commit to simplify the commit history. You can use an interactive rebase to _squash_ multiple commits into a single commit.

#### [Visual Studio 2022](#tab/visual-studio-2022)

Visual Studio 2022 doesn't support interactive rebasing. Use the Git command line instead.

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

Visual Studio 2019 doesn't support interactive rebasing. Use the Git command line instead.

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Visual Studio 2019 doesn't support interactive rebasing. Use the Git command line instead.

#### [Git Command Line](#tab/git-command-line)

1. Check out the local branch that you want to perform an interactive rebase on.

1. [Commit](/azure/devops/repos/git/commits), stash, or discard any uncommitted changes.

1. Estimate how far back in the commit history you want to go. You don't have to be exact as you'll get to pick out specific commits to squash when you run the interactive rebase command. For example, if you want to squash commits within the last five commits, run:

    ```console
    git rebase -i HEAD~5
    ```

    Git will open an editor that lists the last five commits, starting with the most recent. For example:

    ```
    pick 7068b09 Update README network switch section
    pick 9d247f7 Update README network controller section
    pick 5d7ab9f Fix fiber optic transmitter test
    pick 7b43f3f Add network switch test
    pick 00859d9 Add network controller test
    ```

1. Leave the first line as is. On subsequent lines, to merge a commit with the one above it, change `pick` to `squash`. For example, to combine the top two commits and also the bottom two commits, modify the commit list to:

    ```
    pick 7068b09 Update README network switch section
    squash 9d247f7 Update README network controller section
    pick 5d7ab9f Fix fiber optic transmitter test
    pick 7b43f3f Add network switch test
    squash 00859d9 Add network controller test
    ```

1. Save and close the editor. Git will then open a new editor for each set of merged commits, prompting you to enter a commit message. For each commit set, condense the commit messages down to one message, then save and close the editor. In the preceding example, the squashed commits are condensed with new commit messages:

    ```
    8fcb88f Update README network sections
    ac6d3c0 Fix fiber optic transmitter test
    f0aadc3 Add two network tests
    ```    
    Even though the commit `Fix fiber optic transmitter test` wasn't squashed, it has a new commit ID because it now links to a different predecessor commit.

For more information about interactive rebasing, see [Git rebase interactive mode](https://git-scm.com/docs/git-rebase#_interactive_mode).


---


> [!NOTE]  
> Azure DevOps users can [squash merge](merging-with-squash.md) to condense the commit history of a topic branch during a pull request.


## Next steps

> [!div class="nextstepaction"]
> [Copy changes with cherry-pick](cherry-pick.md)


## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
- [Share code with push](pushing.md)
- [Update code with fetch, merge, and pull](pulling.md)
