---
title: Undo changes in your Git repo
titleSuffix: Azure Repos
description: Learn how to discard uncommitted changes, revert changes in shared commits, reset a branch to a previous state, and generally undo changes in a Git repo.
ms.service: azure-devops-repos
ms.topic: how-to
ms.date: 10/18/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Undo changes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

When you want to undo changes in a Git repo, first decide what type of changes you want to undo. For example, you might want to:

- Discard uncommitted changes to a file by reverting the file to its last committed version. You can also revert a file to any committed version.
- Revert a branch to a prior state by resetting it to a previous commit.
- Undo the changes made by a shared commit by creating a new commit that reverses the changes. Because this approach won't rewrite existing commit history, it's suitable for reversing changes made by commits that were pushed and are in use by others.
- Amend your last commit to modify its content or message. For more information, see [How to update your last commit](commits.md#how-to-update-your-last-commit).
- Fix a problem introduced in a prior commit by creating a new [commit](commits.md) that includes the fix. For more information, see [How to create a commit](commits.md#how-to-create-a-commit).

In this article you learn how to:

> [!div class="checklist"]
> * Discard uncommitted changes to a file
> * Revert a branch to a prior state
> * Undo the changes made by a shared commit

## Discard uncommitted changes to a file

If you've made changes to a file but haven't committed those changes, you can use Git [checkout](https://git-scm.com/docs/git-checkout) to quickly discard the changes and revert the file to its last committed version.

Git `checkout` can also revert a file to any committed version, when you specify the commit ID.

> [!WARNING]
> If there's a chance you might want to reapply the changes that Git `checkout` would discard, consider [stashing](howto.yml#i-ve-done-some-work-but-need-to-switch-to-something-else--how-can-i-save-my-work-for-later-without-committing-the-changes-) those changes instead.

#### [Visual Studio 2022](#tab/visual-studio-2022)

Visual Studio 2022 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**. Visual Studio 2019 version 16.8 also offers the **Team Explorer** Git user interface. For more information, see the **Visual Studio 2019 - Team Explorer** tab.

[!INCLUDE [Discard uncommitted changes](includes/undo-discard-uncommited-changes.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

Visual Studio 2019 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**.

[!INCLUDE [Discard uncommitted changes](includes/undo-discard-uncommited-changes.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Visual Studio supports discarding uncommitted changes to a file by reverting the file to its last committed version.

In the **Changes** view of **Team Explorer**, identify the file with the changes that you want to discard. If the file is in the **Staged Changes** section, right-click it and choose **Unstage**. Unstaged files show up in the **Changes** section

:::image type="content" source="media/undo/visual-studio-2019/team-explorer/unstage.png" border="true" alt-text="Screenshot of the context menu options for staged files in Team Explorer in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/team-explorer/unstage-lrg.png":::

If the file is in the **Changes** section, right-click it and choose **Undo Changes** to discard all changes to the file since the last commit.

:::image type="content" source="media/undo/visual-studio-2019/team-explorer/undo-changes.png" border="true" alt-text="Screenshot of the context menu options for changed files in Team Explorer in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/team-explorer/undo-changes-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

You can use the Git `checkout` command to discard uncommitted changes to a file by reverting the file to its last committed version:

```console
git checkout <file>
```

For example, `git checkout README.md` discards uncommitted changes to the `README.md` file.

Git `checkout` also supports reverting a file to a previously committed version when you specify a partial or full commit ID that uniquely identifies a commit:

```console
git checkout <commit ID> <file>
```

For more information about finding a commit ID, see [Find a commit ID](#find-a-commit-id).

> [!NOTE]
> The use of the Git `checkout` command to revert a file differs from its typical use, which is to switch between [branches](./create-branch.md). The `checkout` command output tells you whether it's switching between branches or updating a file, and warns if it's unclear which one you're trying to do.

---

## Revert a branch to a prior state

You can revert a branch to a prior state by using Git [reset](https://git-scm.com/docs/git-reset) to reset the branch to a previous commit. Git `reset` affects all files in all branch folders.

Git `reset` has a few options. The default option is to revert the branch to a previous commit, but retain all the subsequent changes as uncommitted changes. Another option is to revert a branch to a previous commit by discarding all changes to all branch files since that commit.

> [!WARNING]
> Don't reset a branch to a commit prior to the last commit if the last commit has been pushed and shared with others. Doing so will result in your local branch history no longer matching the remote branch history. For shared branches, see [Undo the changes made by a shared commit](#undo-the-changes-made-by-a-shared-commit).

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Revert a branch](includes/undo-revert-branch.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Revert a branch](includes/undo-revert-branch.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

1. In the **Changes** view of **Team Explorer**, choose **Actions > View History** to open the **History** tab for the current branch.

   :::image type="content" source="media/undo/visual-studio-2019/team-explorer/view-history.png" border="true" alt-text="Screenshot of the View History option in the Action menu in the Changes view of Team Explorer in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/team-explorer/view-history-lrg.png":::

1. In the **History** tab for the current branch, right-click the commit you want to reset, and then choose **Reset > Delete Changes (--hard)** to reset the branch to the selected commit and delete all changes to all branch files since that commit. Or, choose **Reset > Keep Changes (--mixed)** to reset the branch to the selected commit and retain all subsequent changes as unstaged changes.

   :::image type="content" source="media/undo/visual-studio-2019/common/reset-hard.png" border="true" alt-text="Screenshot of the Reset option in the context menu for a commit in the History window in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/common/reset-hard-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

You can use Git `reset` to revert a branch to its state in a previous commit. The Git `reset` command can be used with various flags:

- The `--hard` flag tells Git to reset the branch to the specified commit, and to discard all subsequent changes. Be careful with this option since you can lose work using it.
- The `--mixed` flag tells Git to reset the branch to the specified commit, but to keep all subsequent changes as unstaged changes. This option is the default.
- The `--soft` flag tells Git to reset the branch to the specified commit, but to keep all subsequent changes as staged and unstaged changes per their previous state.

A common use of Git `reset` is with the `--hard` option to discard all uncommitted changes in all files since the last commit:

```console
git reset --hard
```

To hard reset a branch to a different commit than the last commit, specify the commit ID or a partial commit ID that uniquely identifies the commit:

```console
git reset --hard <commit ID> 
```

For more information about finding a commit ID, see [Find a commit ID](#find-a-commit-id).

---

<a name="revert"></a>

## Undo the changes made by a shared commit

You can undo the changes made by a commit by using Git [revert](https://git-scm.com/docs/git-revert) to create a new commit that reverses those changes. Git `revert` doesn't delete the original commit. This approach is suitable for undoing the changes made by a shared commit because Git `revert` won't alter the previous commit history, and so local and remote branch histories continue to match.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Undo changes in shared commit](includes/undo-changes-shared-commit.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Undo changes in shared commit](includes/undo-changes-shared-commit.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

1. In the **Changes** view of **Team Explorer**, choose **Actions > View History** to open the **History** tab for the current branch.

   :::image type="content" source="media/undo/visual-studio-2019/team-explorer/view-history.png" border="true" alt-text="Screenshot of the View History option in the Action menu in the Changes view of Team Explorer in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/team-explorer/view-history-lrg.png":::

2. In the **History** tab for the current branch, right-click the commit you want to revert and choose **Revert** to create a new commit that undoes the changes made by the selected commit.

   :::image type="content" source="media/undo/visual-studio-2019/common/revert.png" border="true" alt-text="Screenshot of the Revert option in the context menu for a commit in the History window in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/common/revert-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

You can use the Git `revert` command to undo the changes made by a commit and create a new commit with the reversed changes. The commit whose changes were reversed remains in Git history.

```console
git revert <commit ID>
```

If the revert operation was successful, Git will open an editor window that prompts you to enter a commit message for the new commit.

Git will notify you if there are conflicts during the revert operation. You can either resolve the conflicts and then run `git revert --continue`, or run `git revert --abort` to undo the revert operation.

#### Find a commit ID

You can use the Git `log` command to get the ID of a commit. The `--oneline` flag abbreviates the output.

```console
git log --oneline <branch>
```

The Git `log` command lists the most recent commits first, starting with the commit at the tip of the specified branch (the current branch if unspecified) and then iterates backward through ancestor commits. Each commit ID in the abbreviated output is a partial SHA-1 checksum that uniquely identifies the commit. For example, `git log --oneline main` might output:

```output
e745d06 (HEAD -> main) Add a test initialization class
31da50b Add network switch test
0c14391 Add readme file
32e3946 Add project files.
```

---

## Next steps

> [!div class="nextstepaction"]
> [Review history](review-history.md)

## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
- [Save your work with commits](commits.md)
