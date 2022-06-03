---
title: Review your repo history
titleSuffix: Azure Repos
description: Learn how to review Git history to find out when files changed, who changed them, and what changes were made.
ms.assetid: aed4bd97-378a-45f6-8b13-59143fccfe3b
ms.technology: devops-code-git
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 06/03/2022
---

# Review history

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)]

Git uses [commit metadata](commits.md#whats-in-a-commit) like parent links, author details, and timestamps to track the history of changes in a repo. You can review the Git history to find out when files changed, who changed them, and what changes were made.

When people create and merge feature [branches](./create-branch.md) into a target branch using [pull requests](pull-requests.md), the development history of the target branch might not be a straight chronological line. So, when you review the history of changes to a file on the target branch, keep in mind that the order of commits is influenced by [merge strategy](pulling.md#update-branches-with-merge-or-rebase) and merge date, not just the original date of the changes. For example, the most recent commit on the `main` branch may contain a change that was made weeks ago in a feature branch that was only just merged into the `main` branch using a three-way merge.

In this article you learn how to:

>[!div class="checklist"]
>* Compare file versions
>* Restore files
>* Compare branches

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


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio lets you compare two versions of the same file in the same branch, but doesn't support comparing file versions across branches.

1. In **Solution Explorer**, select a file and choose **Git > View History** from the file's context menu to open the **Git History** tab for the selected file.

    :::image type="content" source="media/review-history/visual-studio-2019/common/view-file-history-option.png" border="true" alt-text="Screenshot of the View History option in the file context menu in Solution Explorer in Visual Studio 2019." lightbox="media/review-history/visual-studio-2019/common/view-file-history-option-lrg.png":::

1. In the **Git History** tab, choose **Compare with Previous** from a commit's context menu to open a **Diff** tab that compares the selected commit with the preceding commit.

    :::image type="content" source="media/review-history/visual-studio-2019/common/compare-with-previous-option.png" border="true" alt-text="Screenshot of the Compare with Previous option in the commit context menu in the commit History view in Visual Studio 2019." lightbox="media/review-history/visual-studio-2019/common/compare-with-previous-option-lrg.png":::

    Or, select two commits and choose **Compare** from either commit's context menu to open a **Diff** tab that compares the two selected commits.

    :::image type="content" source="media/review-history/visual-studio-2019/common/compare-option.png" border="true" alt-text="Screenshot of the Compare Commits option in the commit context menu in the commit History view in Visual Studio 2019." lightbox="media/review-history/visual-studio-2019/common/compare-option-lrg.png":::

    The **Diff** tab shows new, deleted, or modified file lines.

    :::image type="content" source="media/review-history/visual-studio-2019/common/commits-diff.png" border="true" alt-text="Screenshot of the commit diff view in Visual Studio 2019.":::


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier)

1. Right-click the file in Solution Explorer and choose **View History...**. The history window will appear, showing the commit ID, author, date, and description of all changes to the file in your local repo across all branches.   

    :::image type="content" source="media/history/vs-history-view.png" border="false" alt-text="View history in your repo for a file.":::     

1. Find the latest commit for a branch by looking for its name on an arrow to the right of a commit.

1. View changes from the previous version of the file by right-clicking and choosing **Compare with previous...**. View the changes between any two versions by selecting both commits, then right-clicking and select **Compare...**

1. The diff view shows lines removed from the older commit and added in the new one.

    :::image type="content" source="media/history/vs-diff-changes.png" border="false" alt-text="View diff changes in Visual Studio.":::


#### [Git Command Line](#tab/git-command-line)

The [git diff](https://git-scm.com/docs/git-diff) command can compare different versions of the same file from different commits across different branches. The [git log](https://git-scm.com/docs/git-log) command can help you identify the commits that contain the file versions you want to compare.

1. Use `git log` and specify a file to list the commits that changed the file:

    ```cmd
    git log <file>  
    ```
    
    By default, the command output starts with the most recent commit in the current branch, and then iterates backward through ancestor commits by following the parent links in each commit's metadata.

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

    ```cmd
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


* * *


## Restore files

You can restore a specific version of a file from Git history, even if the file was edited, deleted, or renamed in a later commit. Restoring an older version of a file doesn't create a new commit with the change. To update your branch with the restored file version, you'll need to commit the change.


#### [Browser](#tab/browser)

The Azure DevOps team project site lets you revert all changes made by a specific commit, but doesn't support reverting changes to a specific file within the commit.


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Where applicable, we provide a side-by-side comparison of how to restore a specific file version from your repo's Git history.

1. In **Solution Explorer**, select a file and choose **Git > View History** from the file's context menu to open a **Git History** tab for the selected file.

    :::image type="content" source="media/review-history/visual-studio-2019/common/view-file-history-option.png" border="true" alt-text="Screenshot of the View History option in the file context menu in Solution Explorer in Visual Studio 2019." lightbox="media/review-history/visual-studio-2019/common/view-file-history-option-lrg.png":::

1. In the **Git History** tab, select a commit and choose **View Commit Details** from the commit's context menu to open the **Commit Details** view.

    :::image type="content" source="media/review-history/visual-studio-2019/common/view-commit-details-option.png" border="true" alt-text="Screenshot of the View Commit History option in the commit context menu in the commit History view in Visual Studio 2019." lightbox="media/review-history/visual-studio-2019/common/view-commit-details-option-lrg.png":::

1. In the **Commit Details** view, select the file and choose **Open** from the file's context menu to open the previous version of the file in a new tab.

    :::row:::
      :::column span="":::
    
      **Visual Studio Git**
    
      :::image type="content" source="media/review-history/visual-studio-2019/git-experience/open-file-option.png" border="true" alt-text="Screenshot of the Open option in the file context menu in the Commit Details view in Visual Studio 2019." lightbox="media/review-history/visual-studio-2019/git-experience/open-file-option-lrg.png":::
    
      :::column-end:::
      :::column span="":::
    
      **Visual Studio Team Explorer**
    
      :::image type="content" source="media/review-history/visual-studio-2019/team-explorer/open-file-option.png" border="true" alt-text="Screenshot of the Open option in the file context menu in the Commit Details view of Team Explorer in Visual Studio 2019." lightbox="media/review-history/visual-studio-2019/team-explorer/open-file-option-lrg.png":::
    
      :::column-end:::
    :::row-end:::

1. Choose **File > Save As** from the menu bar to save the restored version of the file.

#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier)

To retrieve a previous version of a file that exists in your Visual Studio project:

Right-click the file in Solution Explorer and select **View History**. The Visual Studio **History** view will appear, showing the commits in your repo that updated the file.
   You can filter the commits to find the exact commit with the file version you want to restore. Double click on the version to open it in Visual Studio.

   :::image type="content" source="media/history/vs-history-view.png" border="false" alt-text="View file versions in Visual Studio.":::   

To retrieve a previous version of a file that was deleted in a previous commit:

1. Open the **Changes** view in Team Explorer and select **View History** from the **Actions** drop-down. 

   :::image type="content" source="media/history/team-explorer-changes.png" border="false" alt-text="View changes."::: 

1. Right-click the commit containing the version of the file you want to restore and select **View Commit Details**. 

   :::image type="content" source="media/history/vs-view-commit-details.png" border="false" alt-text="View commit details."::: 

1. Right click the file to restore in the **Commit Details** in Team Explorer and select **Open**.

   :::image type="content" source="media/history/vs-open-deleted-file.png" border="false" alt-text="View deleted files in your Git repo with Visual Studio.":::

>[!NOTE]
>The retrieved version of a file is not automatically saved to your project. To save the retrieved version to your project, select **Save As...** from the **File** menu. If you save the file in your current project, either as a new file or overwriting
an existing one, you'll need to commit your changes to add the previous version to your local branch.


#### [Git Command Line](#tab/git-command-line)

You can use the [git checkout](https://git-scm.com/docs/git-checkout) or [git show](https://git-scm.com/docs/git-show) commands to restore a specific version of a file from Git history.

- [git checkout](https://git-scm.com/docs/git-checkout) reverts a file to a previously committed version if you specify the file and a commit:

    ```cmd
    git checkout <commit> <file>
    ```

    For example, `git checkout 85435fac src/app.ts` will revert the `src/app.ts` file to its version in commit `85435fac`.

- [git show](https://git-scm.com/docs/git-show) prints the contents of a previously committed file version, which you can redirect to an output file:

    ```cmd
    git show <commit>:<file> > <output file>
    ```
    
    For example, `git show 85435fac:src/app.ts > /archive/oldapp.ts` will write the contents of `app.ts` in commit `85435fac` to `/archive/oldapp.ts`.

>[!TIP]
>To find the ID a previous commit, see [Compare file versions](review-history.md?tabs=command-line#compare-file-versions) or [Find a commit ID](undo.md?tabs=command-line#find-a-commit-id).


* * *


## Compare branches

You can compare two branches to review the changes that will result from a [merge](merging.md) or [rebase](rebase.md). The comparison lets you check for merge conflicts and see how changes by others might affect your work.


#### [Browser](#tab/browser)

1. From your web browser, open the team project for your Azure DevOps organization. In the **Repos > Branches** view, select the ellipsis for any branch and choose **Compare branches** to open the **Branch compare** view.

   :::image type="content" source="media/review-history/browser/branch-context-menu.png" border="true" alt-text="Screenshot of the branch context menu in the Branches view on the Azure DevOps project page." lightbox="media/review-history/browser/branch-context-menu-lrg.png":::

1. In the **Branch compare** view, choose the two branches that you want to compare. Select the **Files** tab for a diff view of the new, deleted, or modified lines in each changed file.

   :::image type="content" source="media/review-history/browser/branch-compare.png" border="true" alt-text="Screenshot of the Files tab in the Branch Compare view on the Azure DevOps repo page." lightbox="media/review-history/browser/branch-compare-lrg.png":::

>[!NOTE]
> GitHub supports branch comparison. To compare two branches, append `/compare/<branch1>...<branch2>` to your GitHub repo URL to navigate to the comparison page. The comparison page contains a diff view of each file that differs. For more information on branch comparison in GitHub, see [Comparing branches](https://docs.github.com/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits#comparing-branches).


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 doesn't supports branch comparison. Visual Studio 2022 [supports](/visualstudio/version-control/git-browse-repository?view=vs-2022&preserve-view=true#compare-branches) branch comparison.


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier)

Comparing branches can be done in the web portal, which you can access from the Team Explorer **Home** view in Visual Studio by choosing **Web Portal**.

:::image type="content" source="media/history/vs-browse-web-portal.png" border="false" alt-text="Web portal."::: 

Select **Branches** from the menu under **Code**. Locate your branch and select the **...** icon to view the branch options. Select **Compare branches**.

:::image type="content" source="media/history/compare-branches.png" border="false" alt-text="Compare branches.":::

Select the branch to compare to from the drop-downs at the top. The view will display all changes between the branches.

:::image type="content" source="media/history/comparing-branches.png" border="false" alt-text="Comparing branches.":::


#### [Git Command Line](#tab/git-command-line)

To compare any two local or remote branches, you can use the Git `diff` command specifying the branch names:

```cmd
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

```cmd
git diff <branch1> <branch2> <file>
```

For example, `git diff users/frank/feature origin/main index.html` will only generate a diff for the `index.html` file.


***


## Next steps

>[!div class="nextstepaction"]
>[Understand Git history](history.md)


## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
- [Save your work with commits](commits.md)
