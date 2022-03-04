---
title: Save your changes with Git commits
titleSuffix: Azure Repos
description: Learn how to use Git commits to save your work into Git version control, by using Visual Studio or the Git command line.
ms.assetid: 223c0064-06ec-433e-8ec2-d73a5435cf23
ms.technology: devops-code-git 
ms.topic: tutorial
ms.date: 03/04/2022
monikerRange: '<= azure-devops'
---

# Save your work with commits

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)]

Git doesn't automatically take snapshots of your work as you modify files in your repo. You must tell Git what changes you want to capture in a snapshot by staging those changes. After staging your changes, you can save the snapshot by making a commit.

This article provides procedures for the following tasks:

> [!div class="checklist"]
> * How Git tracks changes
> * What's in a commit
> * How to stage your changes
> * How to create a commit
> * How to update your last commit

For an overview of the Git workflow, see [Azure Repos Git tutorial](gitworkflow.md).


## How Git tracks changes

As you work in your repo, Git tracks changes to all _tracked_ files. Tracked files are files that are currently staged or were included in the previous commit. Git separates tracked files into three categories:

- Unmodified files - The files you haven't changed since your last commit.
- Modified files - The files you've changed since your last commit but haven't staged for the next commit.
- Staged files - The files you've changed since your last commit and have staged for the next commit.

:::image type="content" source="media/git_file_status_lifecycle.png" border="false" alt-text="Screenshot showing the lifecycle of files in your repo between the three states."::: 

When you create a commit, only staged files and unmodified files are used for the snapshot. Unstaged changes to the modified files are kept, but the snapshot contains the unmodified version of those files. Git doesn't track changes to new files or include new files in the snapshot until you stage them.

Commits are created in your local Git repo. Each commit doesn't have to be perfect, and it might take several commits to accomplish an intended change. Create commits as you work, and when you're done you can [push](pushing.md) your commits to a remote repo to share your work with others.


## What's in a commit

Each [commit](https://docs.github.com/en/rest/reference/git#commits) includes the following information:

- A snapshot of all tracked files in your repo at the time of the commit. A snapshot isn't the changeset or difference between commits, although Git can show the changeset between two commits based on their snapshots. Snapshots support fast switching between [branches](./create-branch.md), and [merging](merging.md) of branches.
- A reference to the parent commit(s). The commit following a branch merge has multiple parents. The first commit in a repo doesn't have a parent.
- A message describing the changes in the commit. You enter the message when you create the commit.

Git uses the snapshot and parent reference(s) of each commit to maintain a complete record of development in your repo. To investigate changes in your code, you can review the [Git history](history.md) of your repo.


<a name="stage-your-changes-and-commit"></a>

## How to stage your changes

To create a snapshot for a commit:
- Stage your new files to let Git know you want them added to the snapshot, and you want Git to track changes to those files going forward.
- Stage your edited files to let Git know you want the modified file version in the snapshot, not the unmodified file version.
- Stage your deleted files to let Git know you want them removed from the snapshot and no longer tracked.

To exclude temp files, log files, or other files from your snapshot, you can configure Git to [ignore specific files](ignore-files.md).
  
> [!NOTE]
> Git natively supports interactive staging of edited files so you can choose to stage specific changed lines or sections within a file. This is useful when you want to save different file edits to different commits.


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison of staging file changes.

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. In the **Git Changes** window, right-click a file in the **Changes** section and choose **Stage** to add it into the **Staged Changes** section.

       :::image type="content" source="media/commits/visual-studio-2019/git-experience/stage-files.png" border="true" alt-text="Screenshot of the Changes option in the 'Git Changes' window in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/git-experience/stage-files-lrg.png":::

       Or, you can stage a changed file by selecting the plus sign next to the file. To stage all changed files in a folder, select the plus sign next to the folder. To stage all changed files in your repo, select the plus sign in the top-right corner of the **Changes** section.

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select the **Home** button and choose **Changes**.

       :::image type="content" source="media/commits/visual-studio-2019/team-explorer/changes.png" border="true" alt-text="Screenshot of the Changes option in Team Explorer in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/changes-lrg.png":::

    2. In the **Changes** view, right-click a file in the **Changes** section and choose **Stage** to add it into the **Staged Changes** section.

       :::image type="content" source="media/commits/visual-studio-2019/team-explorer/stage-files.png" border="true" alt-text="Screenshot of context menu with the 'Stage' option for files in the 'Change' view of Team Explorer in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/stage-files-lrg.png":::

       Or, you can stage a changed file by dragging it from the **Changes** section to the **Staged Changes** section. To stage all changed files in a folder, right-click the folder and choose **Stage**. To stage all changed files in your repo, select the plus sign in the top-right corner of the **Changes** section.

  :::column-end:::
:::row-end:::

You can tell Git to ignore a file by right-clicking it and selecting **Ignore this local item** or **Ignore this extension**. Either command creates a **.gitignore** file in your repo if one doesn't already exist, and adds an entry to it. Ignored files won't appear in the **Changes** section in Visual Studio. However, an **.gitignore** file has no effect on tracked files. For information on how to configure Git to ignore tracked files, see [Ignore files](ignore-files.md). To save time, you can download **.gitignore** templates for various development environments from the GitHub [gitignore](https://github.com/github/gitignore) repo.

> [!NOTE]
> Visual Studio 2019 doesn't support staging just some edits within a file. Visual Studio 2022 supports [staging individual lines](https://devblogs.microsoft.com/visualstudio/introducing-new-git-features-to-visual-studio-2022/#line-staging-interactive-staging) or sections within a file.


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier)

[!INCLUDE [temp](includes/note-new-git-tool.md)] 

Visual Studio keeps track of file changes to your project as you do your work. When you're ready to stage changes, open up the **Changes** view in Team Explorer.

Stage individual file changes by right-clicking a file in the **Change** view and selecting **Stage**.
Staging a change creates a **Staged Changes** section in Team Explorer. Only changes in the **Staged Changes** section are added to the next commit.

:::image type="content" source="media/vs-stage-files.gif" border="false" alt-text="Stage files for your next commit using Team Explorer.":::

> [!NOTE]
> The Team Explorer **Changes** view had **Included Files** and **Excluded Files** sections before Visual Studio 2015 Update 2. The **Changes** view was updated in Visual Studio 2015 Update 2 for better compatibility with other Git tools.

Stage multiple files or folders by selecting them then right-clicking and choosing **Stage** or by dragging and dropping files from the **Changes** list into the **Staged Changes** list.

Ignore files by right-clicking and selecting **Ignore this local item** or **Ignore this extension**. This adds an entry to the **.gitignore** file in your local repo. If the ignored file was added to your repo in an earlier commit, ignoring the file won't remove it from the **Changes** list. See [excluding and ignoring files section](ignore-files.md) for more information on how to ignore files already tracked by Git.


#### [Git Command Line](#tab/git-command-line)

You can stage all tracked and untracked files in your repo that have changed since the last commit by using the  `git add` command with the `--all` flag. However, the `--all` flag won't stage changes to files that you've told Git to [ignore](ignore-files.md).

```
git add --all
```

You can stage changes to specific files with the following command.

```
git add <file path>
```

You can [interactively stage](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---patch) parts of a changed file by using the `--patch` option.

```
git add --patch <file path>
```

Other related Git commands are:

- `git rm` to delete files in your repo and stage the change.
- `git mv` to move or rename files in your repo and stage the change.
- `git status` to review the current status of changes in your repo.

For more information about these commands, see the [tutorial command reference](command-prompt.md#commits) and the [Git command line reference](https://git-scm.com/docs).

> [!TIP]
> After you've staged files and before making a commit, review your staged and unstaged changes by running `git status`.


* * *


## How to create a commit

#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison of creating a commit.

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    In the **Git Changes** window, enter a message that describes the staged changes and then select **Commit Staged**.

    :::image type="content" source="media/commits/visual-studio-2019/git-experience/commit-staged.png" border="true" alt-text="Screenshot showing the commit information link in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/git-experience/commit-all-lrg.png":::

    Select the commit link for information about the commit.

    :::image type="content" source="media/commits/visual-studio-2019/git-experience/commit-confirmation.png" border="true" alt-text="Screenshot showing the commit details link the 'Git Changes' window in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/git-experience/commit-confirmation-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    In the **Changes** view of **Team Explorer**, enter a message that describes the staged changes and then select **Commit Staged**.

    :::image type="content" source="media/commits/visual-studio-2019/team-explorer/commit-staged.png" border="true" alt-text="Screenshot of commit message text and 'Commit Staged' button in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/commit-all-lrg.png":::

    Select the commit link for information about the commit.

    :::image type="content" source="media/commits/visual-studio-2019/team-explorer/commit-confirmation.png" border="true" alt-text="Screenshot showing the commit details link in 'Team Explorer' in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/commit-confirmation-lrg.png":::

  :::column-end:::
:::row-end:::

>[!NOTE]
>If all your changes are unstaged, you can skip staging and directly commit by choosing **Commit All**.
>
>:::row:::
>  :::column span="":::
>
>    **Visual Studio Git** <br>
>
>    :::image type="content" source="media/commits/visual-studio-2019/git-experience/commit-all.png" border="true" alt-text="Screenshot of the 'Commit All' option in the 'Git Changes' window in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/git-experience/commit-all-lrg.png":::
>
>  :::column-end:::
>  :::column span="":::
>
>    **Visual Studio Team Explorer** <br>
>
>    :::image type="content" source="media/commits/visual-studio-2019/team-explorer/commit-all.png" border="true" alt-text="Screenshot of the 'Commit All' option in the  'Changes' view of Team Explorer in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/commit-all-lrg.png":::
>
>  :::column-end:::
>:::row-end:::


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

Open the **Changes** view in Team Explorer.

Enter a commit message describing your changes and select **Commit Staged** to create a new commit that includes the changes listed in the **Staged Changes** section.

:::image type="content" source="media/vscommit.gif" border="false" alt-text="Create a commit from staged items in Visual Studio."::: 

Skip staging files if you just want to commit all changes listed by entering a commit message and selecting **Commit All** when you have no staged changes.

:::image type="content" source="media/vscommitall.gif" border="false" alt-text="Commit all changes without staging them first in Visual Studio.":::

When you commit in Visual Studio you can [push](pushing.md) the commit and [sync](pulling.md) the branch with a remote repo.
These options are available in the drop-down on the **Commit** button.


#### [Git Command Line](#tab/git-command-line)

You can create a commit using the `git commit` command with the `-m` flag to specify a commit message. If you don't provide a commit message, Git will open up an editor so you can enter one.

```
git commit -m "<commit message>"
```

> [!TIP]
> Before making a commit, review your staged and unstaged changes by running `git status`.


* * *


## How to update your last commit

You can change the staged files from your last commit or change its message. Amending a commit is useful if you forgot to stage a file, or your previous commit message has a typo. Git replaces your last commit with a new commit that combines the staged files from both commits and uses the new commit message.

> [!WARNING]
> Don't amend an already [pushed](pushing.md) commit because that will cause sync issues between your local repo and the remote repo. In that situation, use one of these strategies:
> 1. Create and push another commit that fixes the issues caused by the prior commit.
> 1. Undo the prior commit that was pushed, by using `git revert` to create a new commit that [reverts](undo.md) all changes made by the prior commit. Then push the new commit.


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison of amending a commit.

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    In the **Git Changes** window, optionally stage one or more files, enter a commit message, select **Amend**, and then choose **Commit Staged**.

     :::image type="content" source="media/commits/visual-studio-2019/git-experience/amend-commit.png" border="true" alt-text="Screenshot showing the 'Amend Previous Commit' option in the 'Git Changes' window of Visual Studio 2019." lightbox="media/commits/visual-studio-2019/git-experience/amend-commit-lrg.png":::

     The **Git Changes** window supports amending either the commit message, staged files, or both. When you select **Amend**, the identifier SHA for the previous commit is displayed.

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    In the **Changes** view of **Team Explorer**, stage one or more files, enter a commit message, and then choose **Actions > Amend Previous Commit**.

     :::image type="content" source="media/commits/visual-studio-2019/team-explorer/amend-commit.png" border="true" alt-text="Screenshot showing the 'Amend Previous Commit' option in the 'Changes' view of Team Explorer in Visual Studio 2019." lightbox="media/commits/visual-studio-2019/team-explorer/amend-commit-lrg.png":::
    
     **Team Explorer** doesn't support amending just the commit message, you must also amend one or more staged files.

  :::column-end:::
:::row-end:::


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier)

1. Open the **Changes** view in Team Explorer and stage your updated changes. You can amend just the commit message by leaving the staged changes empty.
2. Enter the updated commit message and select **Amend Previous Commit** from the **Actions** drop-down.

 :::image type="content" source="media/vs_amend_commit.png" border="false" alt-text="Amend a commit in Visual Studio.":::


#### [Git Command Line](#tab/git-command-line)

1. Stage your new changes, if any.

1. Use the `git commit` command with the `--amend` option, and the `-m` flag to specify the new commit message.

```
git commit --amend -m "<new message>"
```

* * *


## Next steps

> [!div class="nextstepaction"]
> [Create work in branches](./create-branch.md).


## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
