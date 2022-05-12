---
title: Undo changes in your Git repo
titleSuffix: Azure Repos
description: Learn how to discard uncommitted changes, revert changes in shared commits, reset a branch to a previous state, and generally undo changes in a Git repo.
ms.technology: devops-code-git
ms.topic: how-to
ms.date: 05/11/2022
monikerRange: '<= azure-devops'
---

# Undo changes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)]

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


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio supports discarding uncommitted changes to a file by reverting the file to its last committed version.

:::row:::
  :::column span="":::

    **Visual Studio Git**

    In the **Git Changes** window, identify the file with the changes that you want to discard. If the file is in the **Staged Changes** section, right-click it and choose **Unstage**. Unstaged files show up in the **Changes** section.

      :::image type="content" source="media/undo/visual-studio-2019/git-experience/unstage.png" border="true" alt-text="Screenshot of the context menu options for staged files in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/git-experience/unstage-lrg.png":::

    If the file is in the **Changes** section, right-click it and choose **Undo Changes** to discard all changes to the file since the last commit.

      :::image type="content" source="media/undo/visual-studio-2019/git-experience/undo-changes.png" border="true" alt-text="Screenshot of the context menu options for changed files in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/git-experience/undo-changes-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer**

    In the **Changes** view of **Team Explorer**, identify the file with the changes that you want to discard. If the file is in the **Staged Changes** section, right-click it and choose **Unstage**. Unstaged files show up in the **Changes** section

      :::image type="content" source="media/undo/visual-studio-2019/team-explorer/unstage.png" border="true" alt-text="Screenshot of the context menu options for staged files in Team Explorer in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/team-explorer/unstage-lrg.png":::

    If the file is in the **Changes** section, right-click it and choose **Undo Changes** to discard all changes to the file since the last commit.

      :::image type="content" source="media/undo/visual-studio-2019/team-explorer/undo-changes.png" border="true" alt-text="Screenshot of the context menu options for changed files in Team Explorer in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/team-explorer/undo-changes-lrg.png":::

  :::column-end:::
:::row-end:::


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier)

Visual Studio supports discarding all uncommitted changes to a file by reverting the file to its version in the last commit.

1. Open up the **Changes** view in Team Explorer.
1. Under the **Changes** section, find the file that you want to restore to the previous version. If your change is staged, remove it from the **Staged Changes** section by right-clicking and selecting **Unstage**.
1. Right-click that file and select **Undo Changes**.

     :::image type="content" source="media/vs_reset_single_file.gif" border="false" alt-text="Screenshot showing how to reset a single file with Git in Visual Studio.":::


#### [Git Command Line](#tab/git-command-line)

You can use the Git `checkout` command to discard uncommitted changes to a file by reverting the file to its last committed version:

```cmd
git checkout <file>
```

For example, `git checkout README.md` discards uncommitted changes to the `README.md` file.

Git `checkout` also supports reverting a file to any committed version, when you specify a commit ID or a partial commit ID that uniquely identifies the commit:

```cmd
git checkout <commit ID> <file>
```

For more information about finding a commit ID, see [Find a commit ID](#find-a-commit-id).

> [!NOTE]
> The use of the Git `checkout` command to revert a file differs from its typical use, which is to switch between [branches](./create-branch.md). The `checkout` command output tells you whether it's switching between branches or updating a file, and warns if it's unclear which one you're trying to do.


* * *


## Revert a branch to a prior state

You can revert a branch to a prior state by using Git [reset](https://git-scm.com/docs/git-reset) to reset the branch to a previous commit. Git `reset` affects all files in all branch folders.

Git `reset` has a few options. The default option is to revert the branch to a previous commit, but retain all the subsequent changes as uncommitted changes. Another option is to revert a branch to a previous commit by discarding all changes to all branch files since that commit.

> [!WARNING]
> Don't reset a branch to a commit prior to the last commit if the last commit has been pushed and shared with others. Doing so will result in your local branch history no longer matching the remote branch history. For shared branches, see [Undo the changes made by a shared commit](#undo-the-changes-made-by-a-shared-commit).


#### [Visual Studio 2019](#tab/visual-studio-2019)

:::row:::
  :::column span="1":::

    **Visual Studio Git** <br><br>

    1. From the menu bar, choose **Git > View Branch History** to open the **History** tab for the current branch.

       :::image type="content" source="media/undo/visual-studio-2019/git-experience/view-history.png" border="true" alt-text="Screenshot of the View Branch History option in the Git menu in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/git-experience/view-history-lrg.png":::

  :::column-end:::
  :::column span="1":::

    **Visual Studio Team Explorer** <br><br>

    1. In the **Changes** view of **Team Explorer**, choose **Actions > View History** to open the **History** tab for the current branch.

       :::image type="content" source="media/undo/visual-studio-2019/team-explorer/view-history.png" border="true" alt-text="Screenshot of the View History option in the Action menu in the Changes view of Team Explorer in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/team-explorer/view-history-lrg.png":::

  :::column-end:::
:::row-end:::

:::row:::
  :::column span="2":::

2. In the **History** tab for the current branch, right-click the commit you want to reset, and then choose **Reset > Delete Changes (--hard)** to reset the branch to the selected commit and delete all changes to all branch files since that commit. Or, choose **Reset > Keep Changes (--mixed)** to reset the branch to the selected commit and retain all subsequent changes as unstaged changes.

    :::image type="content" source="media/undo/visual-studio-2019/common/reset-hard.png" border="true" alt-text="Screenshot of the Reset option in the context menu for a commit in the History window in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/common/reset-hard-lrg.png":::

  :::column-end:::
:::row-end:::

#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier)

1. Open up the **Changes** view in Team Explorer. 
2. Select **Actions** and choose **View History** from the drop-down. 
3. In the history window that appears, right-click the commit to reset the repo to and select **Reset** from the context menu. 
4. Choose **Reset and delete changes...**.

    :::image type="content" source="media/vs_reset_branch.png" border="false" alt-text="Screenshot showing how to reset a branch in Visual Studio.":::


#### [Git Command Line](#tab/git-command-line)

You can use Git `reset` to revert a branch to its state in a previous commit. The Git `reset` command can be used with various flags:

- The `--hard` flag tells Git to reset the branch to the specified commit, and to discard all subsequent changes. Be careful with this option since you can lose work using it.
- The `--mixed` flag tells Git to reset the branch to the specified commit, but to keep all subsequent changes as unstaged changes. This option is the default.
- The `--soft` flag tells Git to reset the branch to the specified commit, but to keep all subsequent changes as staged and unstaged changes per their previous state.

A common use of Git `reset` is with the `--hard` option to discard all uncommitted changes in all files since the last commit:

```cmd
git reset --hard
```

To hard reset a branch to a different commit than the last commit, specify the commit ID or a partial commit ID that uniquely identifies the commit:

```cmd
git reset --hard <commit ID> 
```

For more information about finding a commit ID, see [Find a commit ID](#find-a-commit-id).


* * *


<a name="revert"></a>

## Undo the changes made by a shared commit

You can undo the changes made by a commit by using Git [revert](https://git-scm.com/docs/git-revert) to create a new commit that reverses those changes. Git `revert` doesn't delete the original commit. This approach is suitable for undoing the changes made by a shared commit because Git `revert` won't alter the previous commit history, and so local and remote branch histories continue to match.


#### [Visual Studio 2019](#tab/visual-studio-2019)

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. From the menu bar, choose **Git > View Branch History** to open the **History** tab for the current branch.

         :::image type="content" source="media/undo/visual-studio-2019/git-experience/view-history.png" border="true" alt-text="Screenshot of the View Branch History option in the Git menu in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/git-experience/view-history-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In the **Changes** view of **Team Explorer**, choose **Actions > View History** to open the **History** tab for the current branch.

         :::image type="content" source="media/undo/visual-studio-2019/team-explorer/view-history.png" border="true" alt-text="Screenshot of the View History option in the Action menu in the Changes view of Team Explorer in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/team-explorer/view-history-lrg.png":::

  :::column-end:::
:::row-end:::

2. In the **History** tab for the current branch, right-click the commit you want to revert and choose **Revert** to create a new commit that undoes the changes made by the selected commit.

      :::image type="content" source="media/undo/visual-studio-2019/common/revert.png" border="true" alt-text="Screenshot of the Revert option in the context menu for a commit in the History window in Visual Studio 2019." lightbox="media/undo/visual-studio-2019/common/revert-lrg.png":::


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier)

Open up the **Changes** view in Team Explorer. Select **Actions** and choose **View History** from the drop-down. In the history window that appears, right-click the commit to undo and select **Revert** from the context menu.

:::image type="content" source="media/vs_revert_changes.png" border="false" alt-text="Screenshot showing how to revert changes in Visual Studio.":::


#### [Git Command Line](#tab/git-command-line)

You can use the Git `revert` command to undo the changes made by a commit and create a new commit with the reversed changes. The commit whose changes were reversed remains in Git history.

```cmd
git revert <commit ID>
```

If the revert operation was successful, Git will open an editor window that prompts you to enter a commit message for the new commit.

Git will notify you if there are conflicts during the revert operation. You can either resolve the conflicts and then run `git revert --continue`, or run `git revert --abort` to undo the revert operation.


#### Find a commit ID

You can use the Git `log` command to get the ID of a commit. The `--oneline` flag abbreviates the output.

```cmd
git log --oneline <branch>
```

The `log` command lists most recent commits first. Each commit ID is a partial SHA-1 hash that uniquely identifies the commit. For example, `git log --oneline main` might output:

```
e745d06 (HEAD -> main) Add a test initialization class
31da50b Add network switch test
0c14391 Add readme file
32e3946 Add project files.
```


* * *


## Next steps

> [!div class="nextstepaction"]
> [Review history](review-history.md)


## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
- [Save your work with commits](commits.md)
