---
title: Save your changes with Git commits
titleSuffix: Azure Repos
description: Learn how to use Git commits to save your work into Git version control, by using Visual Studio or the Git command line.
ms.assetid: 223c0064-06ec-433e-8ec2-d73a5435cf23
ms.service: azure-devops-repos
ms.topic: tutorial
ms.date: 10/19/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Save your work with commits

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Git doesn't automatically take snapshots of your work as you modify files in your repo. You tell Git what file changes you want to capture in a snapshot by staging specific changes. After staging, you save the snapshot by making a commit.

This article provides procedures for the following tasks:

> [!div class="checklist"]
> * How Git tracks changes
> * What's in a commit
> * How to stage your changes
> * How to create a commit
> * How to update your last commit

For an overview of the Git workflow, see [Azure Repos Git tutorial](gitworkflow.md).

## How Git tracks changes

As you work in your repo, Git tracks changes to all _tracked_ files. Tracked files are files that are currently staged or are included in the previous commit. Git separates tracked files into three categories:

- Unmodified files - The files you haven't changed since your last commit.
- Modified files - The files you've changed since your last commit but haven't staged for the next commit.
- Staged files - The files you've changed since your last commit and staged for the next commit.

:::image type="content" source="media/git_file_status_lifecycle.png" border="false" alt-text="Screenshot showing the lifecycle of files in your repo between the three states."::: 

When you create a commit, only staged files and unmodified files are used for the snapshot. Unstaged changes to the modified files are kept, but the snapshot contains the unmodified version of those files. Git doesn't track changes to new files or include new files in the snapshot until you stage them.

Commits are created in your local Git repo. Each commit doesn't have to be perfect, and it might take several commits to accomplish an intended change. Create commits as you work, and when you're done you can [push](pushing.md) your commits to a remote repo to share your work with others.

## What's in a commit

Each [commit](https://docs.github.com/en/rest/reference/git#commits) includes the following information:

- A snapshot of all tracked files in your repo at the time of the commit. A snapshot isn't the difference between commits, although Git uses snapshots to compute the difference. Snapshots enable fast switching between [branches](./create-branch.md) and support [merging](merging.md) branches.
- A reference to the parent commit(s). Most commits have one parent, but the next commit after a branch merge has multiple parents and the first commit in a repo has none.
- A message describing the changes in the commit. You enter the message when you create the commit.

Git uses the snapshot and parent reference(s) of each commit to maintain a complete record of development in the repo. To investigate changes in your code, you can review the [Git history](history.md) of your repo.

<a name="stage-your-changes-and-commit"></a>

## How to stage your changes

To create a snapshot for a commit:
- Stage _new files_ to let Git know you want them added to the snapshot, and you want Git to track changes to those files going forward.
- Stage _edited files_ to let Git know you want the modified file version in the snapshot, not the unmodified file version.
- Stage _deleted files_ to let Git know you want them removed from the snapshot and no longer tracked.

To exclude temp files, log files, or other files from your snapshot, you can configure Git to [ignore specific files](ignore-files.md).
  
> [!NOTE]
> Git supports interactive staging of edited files so you can choose to stage specific changes within a file. This is a useful feature when you want different file edits in different commits.

#### [Visual Studio 2022](#tab/visual-studio-2022)

Visual Studio 2022 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**. Visual Studio 2019 version 16.8 also offers the **Team Explorer** Git user interface. For more information, see the **Visual Studio 2019 - Team Explorer** tab.

[!INCLUDE [How to stage your changes](includes/commits-stage-your-changes.md)]

> [!NOTE]
> Starting with Visual Studio 2022 version 17.3, Visual Studio supports staging partial changes within a file. For more information, see [Stage lines of code in Visual Studio](/visualstudio/version-control/git-line-staging?view=vs-2022&preserve-view=true).

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

Visual Studio 2019 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**.

[!INCLUDE [How to stage your changes](includes/commits-stage-your-changes.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably.

1. In **Team Explorer**, select the **Home** button and choose **Changes**.

   :::image type="content" source="media/commits/visual-studio-2019/team-explorer/changes.png" border="true" alt-text="Screenshot of the Changes option in Team Explorer in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/changes-lrg.png":::

1. In the **Changes** view, right-click a file in the **Changes** section and choose **Stage** to add it into the **Staged Changes** section.

   :::image type="content" source="media/commits/visual-studio-2019/team-explorer/stage-files.png" border="true" alt-text="Screenshot of context menu with the 'Stage' option for files in the 'Change' view of Team Explorer in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/stage-files-lrg.png":::

   Or, you can stage a changed file by dragging it from the **Changes** section to the **Staged Changes** section. To stage all changed files in a folder, right-click the folder and choose **Stage**. To stage all changed files in your repo, select the plus sign in the top-right corner of the **Changes** section.

You can tell Git to ignore a file by right-clicking it and selecting **Ignore this local item** or **Ignore this extension**. Either command creates a **.gitignore** file in your repo if it doesn't exist, and adds an entry to it. Ignored files won't appear in the **Changes** section in Visual Studio. However, the **.gitignore** file has no effect on tracked files. For information on how to configure Git to ignore tracked files, see [Ignore files](ignore-files.md). To save time, you can download **.gitignore** templates for various development environments from the GitHub [gitignore](https://github.com/github/gitignore) repo.

> [!NOTE]
> Visual Studio 2019 doesn't support staging partial changes within a file.

#### [Git Command Line](#tab/git-command-line)

To stage all tracked and untracked files in your repo that have changed since the last commit, use the  `git add` command with the `--all` flag. However, the `--all` flag won't stage files that you've configured Git to [ignore](ignore-files.md).

```console
git add --all
```

You can stage changes to specific files with the following command.

```console
git add <file path>
```

You can [interactively stage](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---patch) parts of a changed file by using the `--patch` option.

```console
git add --patch <file path>
```

Other related Git commands are:

- `git rm` to delete files in your repo and stage the change.
- `git mv` to move or rename files in your repo and stage the change.
- `git status` to review the current status of changes in your repo.

For more information about these commands, see the [tutorial command reference](command-prompt.md#commits) and [Git command line reference](https://git-scm.com/docs).

> [!TIP]
> After you've staged files, review your staged and unstaged changes by running `git status`.

---

## How to create a commit

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [How to create a commit](includes/commits-create-commit.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [How to create a commit](includes/commits-create-commit.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

1. In the **Changes** view of **Team Explorer**, enter a message that describes your staged changes and then select **Commit Staged**.

   :::image type="content" source="media/commits/visual-studio-2019/team-explorer/commit-staged.png" border="true" alt-text="Screenshot of commit message text and 'Commit Staged' button in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/commit-all-lrg.png":::

1. Select the commit link for commit details.

   :::image type="content" source="media/commits/visual-studio-2019/team-explorer/commit-confirmation.png" border="true" alt-text="Screenshot showing the commit details link in 'Team Explorer' in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/commit-confirmation-lrg.png":::

   > [!NOTE]
   > If all your changes are unstaged, you can skip staging and directly commit by choosing **Commit All**.
   >
   > :::image type="content" source="media/commits/visual-studio-2019/team-explorer/commit-all.png" border="true" alt-text="Screenshot of the 'Commit All' option in the  'Changes' view of Team Explorer in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/commit-all-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

You can create a commit using the `git commit` command with the `-m` flag to specify a commit message. If you don't provide a commit message, Git will open up an editor so you can provide one.

```console
git commit -m "<commit message>"
```

> [!TIP]
> Before making a commit, review your staged and unstaged changes by running `git status`.

---

## How to update your last commit

Git supports changing the staged files or message of your last commit. This operation replaces your last commit with a new commit that combines the staged files from both commits and uses the new commit message. Amending a commit is useful if you forgot to stage a file, or your last commit message has a typo.

> [!WARNING]
> Don't amend an already [pushed](pushing.md) commit because that will cause sync issues with your remote repo. For a pushed commit, use one of these strategies:
> - Create and push another commit that fixes the issues caused by the prior commit.
> - Undo the prior commit that was pushed, by using `git revert` to create a new commit that [reverts](undo.md) all changes made by the prior commit. Then push the new commit.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [How to update your last commit](includes/commits-update-last-commit.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [How to update your last commit](includes/commits-update-last-commit.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

In the **Changes** view of **Team Explorer**, stage one or more files, enter a commit message, and then choose **Actions > Amend Previous Commit**.

:::image type="content" source="media/commits/visual-studio-2019/team-explorer/amend-commit.png" border="true" alt-text="Screenshot showing the 'Amend Previous Commit' option in the 'Changes' view of Team Explorer in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/amend-commit-lrg.png":::

**Team Explorer** doesn't support amending the commit message without also amending one or more staged files.

#### [Git Command Line](#tab/git-command-line)

1. Stage your new changes, if any.

1. Use the `git commit` command with the `--amend` option and the `-m` flag to specify the new commit message.

```console
git commit --amend -m "<new message>"
```

---

## Next steps

> [!div class="nextstepaction"]
> [Create work in branches](./create-branch.md)

## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
