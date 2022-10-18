---
title: Review your repo history
titleSuffix: Azure Repos
description: Learn how to review Git history to find out when files changed, who changed them, and what changes were made.
ms.assetid: aed4bd97-378a-45f6-8b13-59143fccfe3b
ms.service: azure-devops-repos
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 10/18/2022
ms.subservice: azure-devops-repos-git
---

# Review history

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Git uses [commit metadata](commits.md#whats-in-a-commit) like parent links, author details, and timestamps to track the history of changes in a repo. You can review the Git history to find out when files changed, who changed them, and what changes were made.

When people create and merge feature [branches](./create-branch.md) into a target branch using [pull requests](pull-requests.md), the development history of the target branch might not be a straight chronological line. So, when you review the history of changes to a file on the target branch, keep in mind that the order of commits is influenced by [merge strategy](pulling.md#update-branches-with-merge-or-rebase) and merge date, not just the original date of the changes. For example, the most recent commit on the `main` branch may introduce a change that was made weeks ago in a feature branch that was only just merged into the `main` branch using a three-way merge.

In this article you learn how to:

>[!div class="checklist"]
>* Compare file versions
>* Restore files
>* Compare branches

To learn how to use Visual Studio 2022 with Git, see [How Visual Studio makes version control easy with Git](/visualstudio/version-control/git-with-visual-studio).

## Compare file versions

When you want to figure out how and when a particular file change occurred, you might need to compare different versions of the same file from different commits, possibly in different branches.

#### [Browser](#tab/browser)

The Azure DevOps team project site lets you compare two versions of the same file from commits in the same branch, but doesn't support comparing file versions across branches.

1. From your web browser, open the team project for your Azure DevOps organization. In the **Repo > Files** view, select a file and choose the **Compare** tab.

   :::image type="content" source="media/review-history/browser/file-version-compare.png" border="true" alt-text="Screenshot of the File Compare view on the Azure DevOps project page." lightbox="media/review-history/browser/file-version-compare-lrg.png":::

1. In the **Compare** tab, choose the two commits that contain the file versions you want to compare. The diff view shows any new, deleted, or modified file lines.

   :::image type="content" source="media/review-history/browser/select-commits-for-compare.png" border="true" alt-text="Screenshot of the Compare options in the File Compare view on the Azure DevOps repo page.":::

>[!NOTE]
> GitHub lets you compare two versions of the same file from different commits across different branches. To compare, append `/compare/<commit1>..<commit2>` to your GitHub repo URL to navigate to the comparison page. The comparison page contains a diff view of each file that differs. For more information on commit comparison in GitHub, see [Comparing commits](https://docs.github.com/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits#comparing-commits).

#### [Visual Studio 2022](#tab/visual-studio-2022)

Visual Studio 2022 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**. Visual Studio 2019 version 16.8 also offers the **Team Explorer** Git user interface. For more information, see the **Visual Studio 2019 - Team Explorer** tab.

[!INCLUDE [Compare file versions](includes/review-history-compare-file-versions.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

Visual Studio 2019 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**.

[!INCLUDE [Compare file versions](includes/review-history-compare-file-versions.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Team Explorer doesn't provide support for this feature.

#### [Git Command Line](#tab/git-command-line)

The [git diff](https://git-scm.com/docs/git-diff) command can compare different versions of the same file from different commits across different branches. The [git log](https://git-scm.com/docs/git-log) command can help you identify the commits that contain the file versions you want to compare.

1. Use `git log` and specify a file to list the commits that changed the file:

    ```console
    git log <file>  
    ```
    
    By default, the command output starts with the most recent commit in the current branch, and then iterates backward through ancestor commits (regardless of branch) by following the parent links in each commit's metadata. 

    Here's an example of output for the command `git log index.html`:

    ```output
    commit bbc3b679197b659544a6f8070c79fb535b496613
    Date:   Thu Jun 30 13:42:50 2021 -0400

        update landing page

    commit e5402fe710c25eca1b96a4e238eee9c01ed41c6a
    Date:   Thu Jun 30 13:42:23 2021 -0400
    
        initial commit
    ```

1. Use `git diff` and specify a file and two commits to see how the committed file versions differ:

    ```console
    git diff <commit1> <commit2> <file>
    ```

    Here's an example of output for the command `git diff bbc3b67 e5402fe index.html`:

    ```output
    -   <link rel="stylesheet" href="app.cs"/>   
    +   <link rel="stylesheet" href="fabrikam.cs"/>
    ```

    The output shows that one line was deleted and one line was added.

##### Limit Git log output

To [limit](https://git-scm.com/docs/git-log#_commit_limiting)] the commits that `git log` lists, you can filter by author, date, message, changed content, and more. For example:

- `git log --author=frank@fabrikam.com index.html` only lists commits by the specified author.

- `git log --since="2022-5-1"` only lists commits created after the specified date.

- `git log --before="yesterday"` only lists commits created before the specified relative date.

- `git log --grep="css change"` only lists commits with the specified text in their message.

- `git log -S"myVariable"` only lists commits that introduce or remove the specified string.

- `git log -G"myVar.*"` only lists commits that introduce or remove the specified regex string.

- `git log -3` only lists the last three commits.

##### Format Git log output

You have several [format](https://git-scm.com/docs/git-log#_commit_formatting) options for the commit list. For example:

- `git log --abbrev-commit` lists commits using an abbreviated ID (SHA-1 checksum).

- `git log --oneline` lists each commit in a single-line abbreviated format.

- `git log --patch index.html` lists each commit together with a diff of the changes.

---

## Restore files

You can restore a specific version of a file from Git history, even if the file was edited, deleted, or renamed in a later commit. Restoring an older version of a file doesn't create a new commit with the change. To update your branch with the restored file version, you'll need to commit the change.

#### [Browser](#tab/browser)

The Azure DevOps team project site lets you revert all changes made by a specific commit, but doesn't support reverting changes to a specific file within the commit.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Compare file versions](includes/review-history-compare-file-versions.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Compare file versions](includes/review-history-compare-file-versions.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar.

1. In **Solution Explorer**, select a file and choose **Git > View History** from the file's context menu to open a **Git History** tab for the selected file.

    :::image type="content" source="media/review-history/visual-studio-2019/common/view-file-history-option.png" border="true" alt-text="Screenshot of the View History option in the file context menu in Solution Explorer in Visual Studio 2019." lightbox="media/review-history/visual-studio-2019/common/view-file-history-option-lrg.png":::

1. In the **Git History** tab, select a commit and choose **View Commit Details** from the commit's context menu to open the **Commit Details** view.

    :::image type="content" source="media/review-history/visual-studio-2019/common/view-commit-details-option.png" border="true" alt-text="Screenshot of the View Commit Details option in the commit context menu in the commit History view in Visual Studio 2019." lightbox="media/review-history/visual-studio-2019/common/view-commit-details-option-lrg.png":::

1. In the **Commit Details** view, select the file and choose **Open** from the file's context menu to open the previous version of the file in a new tab.

   :::image type="content" source="media/review-history/visual-studio-2019/team-explorer/open-file-option.png" border="true" alt-text="Screenshot of the Open option in the file context menu in the Commit Details view of Team Explorer in Visual Studio 2019." lightbox="media/review-history/visual-studio-2019/team-explorer/open-file-option-lrg.png":::

1. Choose **File > Save As** from the menu bar to save the restored version of the file.

#### [Git Command Line](#tab/git-command-line)

You can use the [git checkout](https://git-scm.com/docs/git-checkout) or [git show](https://git-scm.com/docs/git-show) commands to restore a specific version of a file from Git history.

- [git checkout](https://git-scm.com/docs/git-checkout) reverts a file to a previously committed version if you specify the file and a commit:

    ```console
    git checkout <commit> <file>
    ```

    For example, `git checkout 85435fac src/app.ts` will revert the `src/app.ts` file to its version in commit `85435fac`.

- [git show](https://git-scm.com/docs/git-show) prints the contents of a previously committed file version, which you can redirect to an output file:

    ```console
    git show <commit>:<file> > <output file>
    ```
    
    For example, `git show 85435fac:src/app.ts > /archive/oldapp.ts` will write the contents of `app.ts` in commit `85435fac` to `/archive/oldapp.ts`.

>[!TIP]
>To find the ID a previous commit, see [Compare file versions](review-history.md?tabs=command-line#compare-file-versions) or [Find a commit ID](undo.md?tabs=command-line#find-a-commit-id).

---

## Compare branches

You can compare any local or remote branches to review the changes that will result from a [merge](merging.md) or [rebase](rebase.md). Branch comparison lets you check for merge conflicts and see how changes by others might affect your work.

Visual Studio 2019 and earlier versions don't support branch comparison, so if you're using one of those versions you can compare branches on the [Git command line](review-history.md?tabs=git-command-line#compare-branches) or using your [web browser](review-history.md?tabs=browser#compare-branches)&mdash;if your repo is hosted in Azure Repos or GitHub. Visual Studio 2022 supports branch comparison, as described in [Compare branches](/visualstudio/version-control/git-browse-repository?view=vs-2022&preserve-view=true#compare-branches).

#### [Browser](#tab/browser)

1. From your web browser, open the team project for your Azure DevOps organization. In the **Repos > Branches** view, select the ellipsis for any branch and choose **Compare branches** to open the **Branch compare** view.

   :::image type="content" source="media/review-history/browser/branch-context-menu.png" border="true" alt-text="Screenshot of the branch context menu in the Branches view on the Azure DevOps project page." lightbox="media/review-history/browser/branch-context-menu-lrg.png":::

1. In the **Branch compare** view, choose the two branches that you want to compare. Select the **Files** tab for a diff view of the new, deleted, or modified lines in each changed file.

   :::image type="content" source="media/review-history/browser/branch-compare.png" border="true" alt-text="Screenshot of the Files tab in the Branch Compare view on the Azure DevOps repo page." lightbox="media/review-history/browser/branch-compare-lrg.png":::

>[!NOTE]
> GitHub supports branch comparison. To compare two branches, append `/compare/<branch1>...<branch2>` to your GitHub repo URL to navigate to the comparison page. The comparison page contains a diff view of each file that differs. For more information on branch comparison in GitHub, see [Comparing branches](https://docs.github.com/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits#comparing-branches).

#### [Visual Studio 2022](#tab/visual-studio-2022)

To compare a branch with the current branch, right-click a branch in the **Branches** pane of your repository, and then select the compare option. The context menu specifies the names of the current and the target branches:

:::image type="content" source="media/review-history/visual-studio-2022/branch-context-menu-inline.png" border="true" alt-text="Screenshot of the branch context menu in the Branches area of Visual Studio 2022." lightbox="media/review-history/visual-studio-2022/branch-context-menu-expanded.png":::

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

Visual Studio 2019 doesn't support branch comparison. However, you can compare branches on the [Git command line](review-history.md?tabs=git-command-line#compare-branches) or using your [web browser](review-history.md?tabs=browser#compare-branches)&mdash;if your repo is hosted in Azure Repos or GitHub.

>[!TIP]
>You can access the web portal from the Team Explorer **Home** view by choosing **Web Portal**.
>
>:::image type="content" source="media/review-history/visual-studio-2019/team-explorer/web-portal-link.png" border="true" alt-text="Screenshot showing the Web Portal link in the Home view of Team Explorer in Visual Studio 2019."::: 

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Visual Studio 2019 doesn't support branch comparison. However, you can compare branches on the [Git command line](review-history.md?tabs=git-command-line#compare-branches) or using your [web browser](review-history.md?tabs=browser#compare-branches)&mdash;if your repo is hosted in Azure Repos or GitHub.

>[!TIP]
>You can access the web portal from the Team Explorer **Home** view by choosing **Web Portal**.
>
>:::image type="content" source="media/review-history/visual-studio-2019/team-explorer/web-portal-link.png" border="true" alt-text="Screenshot showing the Web Portal link in the Home view of Team Explorer in Visual Studio 2019."::: 

#### [Git Command Line](#tab/git-command-line)

To compare any two local or remote branches, you can use the Git `diff` command specifying the branch names:

```console
git diff <branch1> <branch2>
```

Git compares the commit at the tip of one branch with the commit at the tip of the other. The diff output will show the deletions and additions between each file in the two branches.

Here's an example of output for the command `git diff users/frank/feature origin/main`, which compares a local branch with a remote branch:

```output
index 36843b8..03afc4b 100644
--- a/tsapp/index.html
+++ b/tsapp/index.html
@@ -4,7 +4,7 @@
 <head>
     <meta charset="utf-8" />
     <title>TypeScript HTML App</title>
-    <link rel="stylesheet" href="fabrikam-test.css" type="text/css" />
+    <link rel="stylesheet" href="fabrikam.css" type="text/css" />
     <script src="app.js"></script>
 </head>
 ...
--- a/tsapp/app.ts
+++ b/tsapp/app.ts
     constructor(element: HTMLElement) {
         this.element = element;
-        this.element.innerHTML += "The time is: ";
+        this.element.innerHTML += "The time is now: ";
         this.span = document.createElement('span');
         this.element.appendChild(this.span);
         this.span.innerText = new Date().toUTCString();
```

To narrow down comparison to a specific file, specify the file in the `diff` command:

```console
git diff <branch1> <branch2> <file>
```

For example, `git diff users/frank/feature origin/main index.html` will only generate a diff for the `index.html` file.

---

## Next steps

>[!div class="nextstepaction"]
>[Understand Git history](history.md)

## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
- [Save your work with commits](commits.md)
