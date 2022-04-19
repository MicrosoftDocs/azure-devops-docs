---
title: Pull changes to your local Git repo
titleSuffix: Azure Repos
description: Learn how to use Git fetch, merge, rebase, and pull to get code from others by using Visual Studio or the Git command line.
ms.assetid: b06b9f18-b76f-418c-93d0-f12d1f48f3c0
ms.technology: devops-code-git 
ms.topic: tutorial
ms.date: 03/29/2022
monikerRange: '<= azure-devops'
---

# Update code with fetch, merge, and pull

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)]

When there are several contributors to a project, keep your local Git repo updated by downloading and integrating work that others uploaded to the project's remote repo. These Git commands update your local repo:

- Git _fetch_ downloads any new commits that others uploaded to the remote repo. The remote-tracking branches in local repo cache are updated&mdash;local branches remain unchanged.
- Git _merge_ integrates commits from one or more source branches into a target branch.
- Git _rebase_ integrates commits from a source branch into a target branch, but uses a different strategy than Git merge.
- Git _pull_ performs a fetch and then a merge or rebase to integrate fetched commits into your current local branch.

Visual Studio uses a subset of those Git commands when you [synchronize](/visualstudio/version-control/git-fetch-pull-sync) your local repo with a remote repo.

For an overview of the Git workflow, see [Azure Repos Git tutorial](gitworkflow.md).

This article provides procedures for the following tasks:

> [!div class="checklist"]
> * Download changes with _fetch_
> * Update branches with _merge_ or _rebase_
> * Download changes and update branches with _pull_

## Download changes with fetch

Git fetch downloads remote branch commits and referenced file objects that don't exist in your local repo and updates the [remote-tracking](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches) branches in local repo cache. Remote-tracking branches are locally cached read-only copies of remote branches and aren't your local branches. Git fetch doesn't update your local branches. For example, if a remote repo designated by `origin` has a `bugfix3` branch, Git fetch will update the remote-tracking branch named `origin/bugfix3` and not your local `bugfix3` branch. You can use remote-tracking branches to:

- Compare a remote-tracking branch with a local branch to review fetched changes.
- Merge a remote-tracking branch into a local branch.
- Create a new local branch from a remote-tracking branch.


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison of how to perform a Git fetch.

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. In the **Git Changes** window, choose **Fetch**. Then select **outgoing/incoming** to open the **Git Repository** window.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/fetch-git-changes-window.png" border="true" alt-text="Screenshot of the Fetch buttons and Incoming link in the Git Changes window of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/fetch-git-changes-window-lrg.png":::

       You can also choose **Fetch** from the Git menu.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/fetch-git-menu.png" border="true" alt-text="Screenshot of the Fetch option in the Git menu in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/fetch-git-menu-lrg.png":::

    2. In the **Git Repository** window, fetched commits appear in the **Incoming** section. Select a fetched commit to see the list of changed files in that commit. Select a changed file to see a diff view of changed content.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/fetch-git-repository-window.png" border="true" alt-text="Screenshot of the Git Repository menu in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/fetch-git-repository-window-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select **Home** and then choose **Sync** to open the **Synchronization** view.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/sync.png" border="true" alt-text="Screenshot of the Sync option within Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/sync-lrg.png":::

    2. In the **Synchronization** view, choose **Fetch**. Both **Fetch** buttons do the same thing. When downloaded, fetched commits will appear in the **Incoming Commits** section.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/fetch-synchronization-view.png" border="true" alt-text="Screenshot of the Fetch button in the Synchronization view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/fetch-synchronization-view-lrg.png":::

    3. In the **Incoming Commits** section, right-click a commit and then choose **View Commit Details** to see the changed files.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/fetched-synchronization-view.png" border="true" alt-text="Screenshot of the context menu for incoming commits in the Synchronization view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/fetched-synchronization-view-lrg.png":::

    4. In the **Commit Details** window, the changed files are listed in the **Changes** section.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/fetch-commit-details-window.png" border="true" alt-text="Screenshot of the Commit Details window within Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/fetch-commit-details-window-lrg.png":::

       Double-click a changed file to open a diff view of changed content.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/file-diff.png" border="true" alt-text="Screenshot of a file diff window in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/file-diff-lrg.png":::

  :::column-end:::
:::row-end:::

> [!TIP]
> **Fetch** won't delete remote-tracking branches in your local repo cache that no longer have a remote counterpart. To configure Visual Studio to [prune](https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---prune) stale remote-tracking branches during a **Fetch**:
> - Select **Tools** > **Options** > **Source Control** > **Git Global Settings**.
> - Set the **Prune remote branches during fetch** option to `True`.


#### [Visual Studio 2017](#tab/visual-studio-2017)

Visual Studio uses the **Sync** view in Team Explorer to `fetch` changes.
Changes downloaded by `fetch` aren't applied until you **Pull** or **Sync** the changes.

1. In Team Explorer, select the **Home** button and choose **Sync**.

   ![Synchronization view](media/pulling/synchronization-menu.png)

1. In **Synchronization**, select **Fetch** to update the incoming commits list.

   ![Screenshot that shows selecting Fetch.](media/pulling/fetch.png)

   There are two **Fetch** links, one near the top and one in the **Incoming Commits** section. You can use either one.

1. Review the results of the fetch operation under **Incoming Commits**.

   ![Incoming commits](media/pulling/incoming-commits.png)

> [!TIP]
> **Fetch** won't delete remote-tracking branches in your local repo cache that no longer have a remote counterpart. To remove stale remote-tracking branches, configure [Visual Studio to prune remote-tracking branches](git-config.md?tabs=visual-studio#prune-remote-branches-during-fetch) during a **Fetch**.


#### [Git Command Line](#tab/git-command-line)

To download new commits from a specific remote branch, run the Git fetch command:

```cmd
git fetch <remote repo> <remote branch name>
```

To run Git fetch for all remote branches, use:

```cmd
git fetch <remote repo>
```

When you clone a remote repo, Git assigns the alias `origin` as shorthand for the URL of the remote repo that you cloned. Run `git remote -v` to check the `origin` alias value. To add the `origin` alias manually, run `git remote add origin <remote repo url>`. With the `origin` alias, you can simplify the Git fetch command to:

```cmd
git fetch
```

For more information on Git fetch options, see the [Git reference manual](https://git-scm.com/docs/git-fetch#_options).

> [!NOTE]
> By default, Git fetch won't delete remote-tracking branches in your local repo cache that no longer have a remote counterpart. To remove stale remote-tracking branches, run Git fetch with the `--prune` flag, or configure [Git to prune remote-tracking branches](git-config.md?tabs=command-line#prune-remote-branches-during-fetch) during Git fetch.


* * *


After a Git fetch, you can compare a local branch with its corresponding remote-tracking branch to see what changed on the remote branch. If you decide to update your current local branch with fetched changes, you can perform a Git [merge](/azure/devops/repos/git/merging?tabs=visual-studio) or [rebase](/azure/devops/repos/git/rebase?tabs=visual-studio). Or, you can run Git pull, which combines a Git fetch with a Git merge or rebase. Both Git merge and Git rebase update a target branch by applying commits from a source branch onto it. However, Git merge and Git rebase use different strategies. For more information, see [Update branches with merge or rebase](#update-branches-with-merge-or-rebase) and [When to rebase vs. merge](/azure/devops/repos/git/rebase?view=azure-devops&tabs=visual-studio#when-to-rebase-vs-merge&preserve-view=true).

## Update branches with merge or rebase

Git merge and Git rebase integrate commits from a source branch into your current local branch (target branch). Git [merge](https://git-scm.com/docs/git-merge) performs either a [fast-forward](https://git-scm.com/docs/git-merge#_fast_forward_merge) or a [no-fast-forward](https://git-scm.com/docs/git-merge#_true_merge) merge. The no-fast-forward merge is also known as a _three-way_ merge or _true_ merge. Git [rebase](https://git-scm.com/docs/git-rebase) is another type of merge. These merge types are shown in the following diagram.

:::image type="content" source="media/pulling/merge-types.png" border="true" alt-text="Diagram showing the before and after commits when using merge and rebase.":::

Git [merge](https://git-scm.com/docs/git-merge) and Git [rebase](https://git-scm.com/docs/git-rebase) are extensively used in the [Git workflow](gitworkflow.md). When working on a local feature or bugfix branch, it's common practice to:

1. Keep your local `main` branch current with its remote counterpart by periodically [pulling](pulling.md#download-changes-and-update-branches-with-pull) to fetch and merge remote commits.
1. Integrate local `main` branch updates into your local feature branch using a rebase or merge.
1. Back up your work on the local feature branch by [pushing](pushing.md) it to the corresponding remote branch.
1. On feature completion, create a [pull request](pull-requests.md) to merge your remote feature branch into the remote `main` branch.

This approach helps you:

- Stay aware of recent work by others that might affect your work.
- Promptly resolve any conflicts between your work and that of others.
- Apply your new feature on top of up-to-date project content.
- Get a [pull request](pull-requests.md) review of your work.


### Merge

For Git merge, if the tip of the target branch exists within the source branch, the default merge type will be a fast-forward merge. Otherwise, the default merge type will be a no-fast-forward merge.

A [fast-forward](https://git-scm.com/docs/git-merge#_fast_forward_merge) Git merge can never have a [merge conflict](merging.md) because Git won't apply a fast-forward merge if the tip of the target branch has diverged from the source branch. By default, Git uses a fast-forward merge whenever possible. For example, Git will apply a fast-forward merge on a local branch that you only update by pulling from its remote counterpart branch.

A [no-fast-forward](https://git-scm.com/docs/git-merge#_true_merge) Git merge generates a new target branch "merge commit" that integrates source branch changes with target branch changes. The applicable changes are those made after the last commit that's common to both branches. In the preceding diagram, commit C is the last common commit in both branches. If any source branch change conflicts with any target branch change, then Git will prompt you to resolve the merge conflict. The merge commit (L) contains the integrated source branch and target branch changes. The source and target branch tips (K and E) are the parents of the merge commit. In your branch's [commit history](/azure/devops/repos/git/review-history), a merge commit is a useful marker for a merge operation, and clearly shows which branches were merged.

Git merge only modifies the target branch&mdash;the source branch remains unchanged. When you encounter one or more merge conflicts, you must resolve them to complete the merge. Or, you can cancel the merge operation and return the target branch to its prior state.

For more information on merge options and strategies, see the [Git reference manual](https://git-scm.com/docs/git-merge#_options) and [Git merge strategies](https://git-scm.com/docs/merge-strategies).

> [!TIP]
> If the source branch is a remote-tracking branch, ensure that branch is up-to-date by running a Git [fetch](#download-changes-with-fetch) before the merge.


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison of how to perform a Git merge.

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. Choose **Git > Manage Branches** from the menu bar to open the **Git Repository** window.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu.png" border="true" alt-text="Screenshot of the Manage Branches option in the Git menu of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu-lrg.png":::

    2. In the **Git Repository** window, right-click the target branch and select **Checkout**.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/branch-checkout-git-repository-window.png" border="true" alt-text="Screenshot of the Checkout option in the Git Repository window of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/branch-checkout-git-repository-window-lrg.png":::

    3. Right-click the source branch, and select **Merge \<source-branch\> into \<target-branch\>**.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/branch-merge-git-repository-window.png" border="true" alt-text="Screenshot of the Merge option in the Git Repository window of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/branch-merge-git-repository-window-lrg.png":::

    4. Visual Studio will display a confirmation message after a successful merge.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/branch-merge-confirmation.png" border="true" alt-text="Screenshot of the merge confirmation message in the Git Repository window of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/branch-merge-confirmation-lrg.png":::

       If the merge is halted due to merge conflicts, Visual Studio will notify you. Then, you can either [resolve the conflicts](merging.md?tabs=visual-studio), or cancel the merge and return to the pre-merge state.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/branch-merge-conflict.png" border="true" alt-text="Screenshot of the merge conflict message in the Git Repository window of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/branch-merge-conflict-lrg.png":::
    
  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select **Home** and choose **Branches**.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branches.png" border="true" alt-text="Screenshot of the Branches option in Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branches-lrg.png":::

    2. In the **Branches** view, right-click the target branch and select **Checkout**.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-checkout.png" border="true" alt-text="Screenshot of the Checkout option in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-checkout-lrg.png":::

    3. Right-click the source branch, and select **Merge From**.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-merge.png" border="true" alt-text="Screenshot of the Merge From option in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-merge-lrg.png":::

    4. Verify the merge options and then click **Merge**.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-merge-details.png" border="true" alt-text="Screenshot of the merge details in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-merge-details-lrg.png":::

    5. Visual Studio will display a confirmation message after a successful merge.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-merge-confirmation.png" border="true" alt-text="Screenshot of the merge confirmation message in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-merge-confirmation-lrg.png":::

       If there are conflicts during the merge, Visual Studio will notify you. Then, you can either [resolve the conflicts](merging.md?tabs=visual-studio), or cancel the merge and return to the pre-merge state.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-merge-conflict.png" border="true" alt-text="Screenshot of the merge conflict message in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-merge-conflict-lrg.png":::

  :::column-end:::
:::row-end:::


#### [Visual Studio 2017](#tab/visual-studio-2017)

> [!NOTE]
> The `git pull origin main` command combines `git fetch` and `git merge` commands. To do this properly in Visual Studio integration, you'll need to **Sync** in **Team Explorer** to do the `fetch` part. This ensures your local git repository is up to date with its remote origin. 

To merge the latest changes from the main branch to your branch:

1. In Team Explorer, select the **Home** button and choose **Branches**.

1. Check out your target branch. Right-click the target branch, and choose **Merge From**.

   ![Merge from](media/pulling/merge-from-menu.png)

1. Specify a **Merge from branch**, which is `main` in this example, and then select **Merge**.

   ![Merge from main](media/pulling/merge-from.png)

   If there are any merge conflicts, Team Explorer tells you now. [resolve the conflicts](merging.md?tabs=visual-studio) before the next step.

1. Enter a commit message and select **Commit Staged**.
 
   ![Commit merge from main](media/pulling/commit-merge-from-master.png)

1. When you're ready to push your local commits, including your new merge commit, to the remote server, choose **Push** from the **Synchronization** view.

   ![Push](media/pulling/merge-from-master-push.png)


#### [Git Command Line](#tab/git-command-line)

To integrate commits from one or more source branches into your current local branch, run the following Git merge command. For multiple source branches, separate their names with spaces.

```cmd
git merge <source branch name>
```

Git will notify you if there are conflicts during the merge. Then, you can either [resolve the conflicts](merging.md?tabs=command-line) and then run `git merge --continue`, or run `git merge --abort` to undo the merge and return to the pre-merge state.


* * *


### Rebase

Git [rebase](https://git-scm.com/docs/git-rebase) resequences the commit history of the target branch so that it contains all source branch commits, followed by all target branch commits since the last common commit. Another way to view it is that a Git rebase replays the changes in your target branch on top of the source branch history. If any source branch change conflicts with any target branch change, then Git will prompt you to resolve the merge conflict. Git rebase doesn't create a merge commit. Notably, Git rebase changes the sequence of the existing target branch commits, which isn't the case for the other merge strategies. In the preceding [diagram](#update-branches-with-merge-or-rebase), commit K' contains the same changes as K, but has a new commit ID because it links back to commit E instead of C.

Git rebase only modifies the target branch&mdash;the source branch remains unchanged. When you encounter one or more merge conflicts, you must resolve them to complete the rebase. Or, you can cancel the rebase operation and return the target branch to its prior state.

If you're the only person working on your feature or bugfix branch, consider using Git rebase to integrate new `main` branch commits into it. Otherwise, use Git merge. For more information on Git rebase and when to use it, see [Apply changes with rebase](rebase.md) and [Rebase vs merge](https://git-scm.com/book/en/v2/Git-Branching-Rebasing#_rebase_vs_merge).

> [!TIP]
> If the source branch is a remote-tracking branch, ensure that branch is up-to-date by running a Git [fetch](#download-changes-with-fetch) before the rebase.


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison of how to perform a Git rebase.

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. Choose **Git > Manage Branches** to open the **Git Repository** window.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu.png" border="true" alt-text="Screenshot of the Manage Branches option in the Git menu of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu-lrg.png":::

    2. In the **Git Repository** window, right-click the target branch and select **Checkout**.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/branch-checkout-git-repository-window.png" border="true" alt-text="Screenshot of the Checkout option in the branch context menu in the Git Repository window of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/branch-checkout-git-repository-window-lrg.png":::

    3. Right-click the source branch, and select **Rebase \<target-branch\> onto \<source-branch\>**.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/branch-rebase-git-repository-window.png" border="true" alt-text="Screenshot of the Rebase option in the branch context menu in the Git Repository window of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/branch-rebase-git-repository-window-lrg.png":::

    4. Visual Studio will display a confirmation message after a successful rebase.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/branch-rebase-confirmation.png" border="true" alt-text="Screenshot of the rebase confirmation message in the Git Repository window of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/branch-rebase-confirmation-lrg.png":::

       If the rebase is halted due to merge conflicts, Visual Studio will notify you. Then, you can either [resolve the conflicts](merging.md?tabs=visual-studio), or cancel the rebase and return to the pre-rebase state.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/branch-rebase-conflict.png" border="true" alt-text="Screenshot of the rebase conflict message in the Git Repository window of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/branch-rebase-conflict-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select **Home** and choose **Branches**.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branches.png" border="true" alt-text="Screenshot of the Branches option in Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branches-lrg.png":::

    2. In the **Branches** view, right-click the target branch and select **Checkout**.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-checkout.png" border="true" alt-text="Screenshot of the Checkout option in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-checkout-lrg.png":::

    3. Right-click the source branch, and select **Rebase Onto**.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-rebase.png" border="true" alt-text="Screenshot of the Rebase Onto option in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-rebase-lrg.png":::

    4. Verify the rebase options and then click **Rebase**.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-rebase-details.png" border="true" alt-text="Screenshot of the rebase details in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-rebase-details-lrg.png":::

    5. Visual Studio will display a confirmation message after a successful rebase.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-rebase-confirmation.png" border="true" alt-text="Screenshot of the rebase confirmation message in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-rebase-confirmation-lrg.png":::

       If there are conflicts during the rebase, Visual Studio will notify you. Then, you can either [resolve the conflicts](merging.md?tabs=visual-studio), or cancel the rebase and return to the pre-rebase state.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-rebase-conflict.png" border="true" alt-text="Screenshot of the rebase conflict message in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-rebase-conflict-lrg.png":::

  :::column-end:::
:::row-end:::


#### [Visual Studio 2017](#tab/visual-studio-2017)

> [!NOTE]
> The `git pull origin main` command combines `git fetch` and `git merge` commands. To do this properly in Visual Studio integration, you'll need to **Sync** in **Team Explorer** to do the `fetch` part. This ensures your local git repository is up to date with its remote origin. 

To merge the latest changes from the main branch to your branch:

1. In Team Explorer, select the **Home** button and choose **Branches**.

1. Check out your target branch. Right-click the target branch, and choose **Merge From**.

   ![Merge from](media/pulling/merge-from-menu.png)

1. Specify a **Merge from branch**, which is `main` in this example, and then select **Merge**.

   ![Merge from main](media/pulling/merge-from.png)

   If there are any merge conflicts, Team Explorer tells you now. [resolve the conflicts](merging.md?tabs=visual-studio) before the next step.

1. Enter a commit message and select **Commit Staged**.
 
   ![Commit merge from main](media/pulling/commit-merge-from-master.png)

1. When you're ready to push your local commits, including your new merge commit, to the remote server, choose **Push** from the **Synchronization** view.

   ![Push](media/pulling/merge-from-master-push.png)


#### [Git Command Line](#tab/git-command-line)

To integrate the commits from a source branch into a target branch, run the Git [rebase](https://git-scm.com/docs/git-rebase) command:

```cmd
git rebase <source branch name> <target branch name>
```

If your current local branch is the target branch, you can simplify the Git rebase command to:

```cmd
git rebase <source branch name>
```

Git will notify you if there are conflicts during the rebase. Then, you can either [resolve the conflicts](merging.md?tabs=command-line) and then run `git rebase --continue`, or run `git rebase --abort` to undo the rebase and return to the pre-rebase state.


* * *


<a name="pull"></a>

## Download changes and update branches with pull

By default, Git pull combines a Git [fetch](#download-changes-with-fetch) and a Git [merge](/azure/devops/repos/git/merging?tabs=visual-studio) to update your current local branch from its remote counterpart. Optionally, Git pull can perform a Git [rebase](/azure/devops/repos/git/rebase?tabs=visual-studio) instead of a Git merge.  

Unlike Git fetch, Git pull will update your current local branch immediately after downloading new commits from the remote repo. Use Git pull when you know you want to update your current local branch right after a Git fetch.


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison of how to perform a Git pull.

> [!TIP]
> To configure Visual Studio to rebase instead of merge when you **Pull**:
> 1. From the Git menu, go to **Tools** > **Options** > **Source Control** > **Git Global Settings**.
> 1. Set the **Rebase local branch when pulling** option to `True`.

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. In the **Git Changes** window, choose **Pull**.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/pull-git-changes-window.png" border="true" alt-text="Screenshot of the Pull button in the Git Changes window of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/pull-git-changes-window-lrg.png":::

       You can also choose **Pull** from the Git menu.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/pull-git-menu.png" border="true" alt-text="Screenshot of the Pull option in the Git menu in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/pull-git-menu-lrg.png":::

    2. A confirmation message displays when the pull operation completes.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/pull-confirm-git-changes-window.png" border="true" alt-text="Screenshot of the pull confirmation message in the Git Changes window in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/pull-confirm-git-changes-window-lrg.png":::

       If there are conflicts during the merge portion of the pull operation, Visual Studio will notify you. Then, you can either [resolve the conflicts](merging.md?tabs=visual-studio), or cancel the merge and return to the pre-merge state.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/branch-pull-conflict.png" border="true" alt-text="Screenshot of the pull conflict message in the Git Changes window in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/branch-pull-conflict-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select **Home** and choose **Sync** to open the **Synchronization** view.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/sync.png" border="true" alt-text="Screenshot of the Sync option in Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/sync-lrg.png":::

    2. In the **Synchronization** view, choose **Pull**. Both **Pull** buttons do the same thing.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/pull-synchronization-view.png" border="true" alt-text="Screenshot of the Pull options in the Synchronization view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/pull-synchronization-view-lrg.png":::

    3.  Visual Studio will display a confirmation message when the pull operation completes.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/pull-confirm-synchronization-view.png" border="true" alt-text="Screenshot of the pull confirmation message in the Synchronization view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/pull-confirm-synchronization-view-lrg.png":::

       If there are conflicts during the merge portion of the pull operation, Visual Studio will notify you. Then, you can either [resolve the conflicts](merging.md?tabs=visual-studio), or cancel the merge and return to the pre-merge state.

       :::image type="content" source="media/pulling/visual-studio-2019/team-explorer/branch-pull-conflict.png" border="true" alt-text="Screenshot of the pull conflict message in the Synchronization view of Team Explorer in Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/team-explorer/branch-pull-conflict-lrg.png":::

  :::column-end:::
:::row-end:::

> [!NOTE]
> In Visual Studio, **Sync** performs a **Pull** then a **Push** to synchronize a local and remote branch. For more information on **Sync**, see [Use git fetch, pull, push and sync for version control in Visual Studio](/visualstudio/version-control/git-fetch-pull-sync).


#### [Visual Studio 2017](#tab/visual-studio-2017)

Open the Team Explorer and open the Sync view. Then select the **Pull** link under **Incoming Commits** to `pull` remote changes and merge them into your local branch. Pulling
updates files in your open project, so make sure to [commit your changes](commits.md) before pulling.

1. In Team Explorer, select the **Home** button and choose **Sync**.

   ![Synchronization view in Team Explorer.](media/pulling/synchronization-menu.png)

1. In **Synchronization**, choose **Pull** to fetch remote changes and merge them into your local branch.

   ![Screenshot that shows choosing Pull.](media/pulling/pull.png)

   There are two **Pull** links, one near the top and one in the **Incoming Commits** section. You can use either one.

1. Review the confirmation message when the pull operation completes.

   ![Pull operation complete](media/pulling/pull-results.png)

> [!NOTE]
> In Visual Studio, **Sync** performs a **Pull** then a **Push** to synchronize a local and remote branch. For more information on **Sync**, see [Use git fetch, pull, push and sync for version control in Visual Studio](/visualstudio/version-control/git-fetch-pull-sync).


#### [Git Command Line](#tab/git-command-line)

To use fetch and integrate commits from a remote branch into the current working branch, run the Git pull command:

```cmd
git pull <remote repo> <remote branch name>
```

If the remote repo has a branch with the same name branch as your current working branch, you can simplify the Git pull command to:

```cmd
git pull <remote repo>
```

When you clone a remote repo, Git assigns the alias `origin` as shorthand for the URL of the remote repo that you cloned. Run `git remote -v` to check the `origin` alias value. To add the `origin` alias manually, run `git remote add origin <remote repo url>`. With the `origin` alias, you can further simplify the Git pull command to:

```cmd
git pull
```

To use a rebase strategy to integrate commits from a remote branch into the current working branch, run the Git pull command with the `--rebase` flag. For more information on Git pull options, see the [Git reference manual](https://git-scm.com/docs/git-pull#_options).

> [!TIP]
> Git will notify you if there are conflicts during the merge/rebase portion of the Git pull operation. Then, you can [resolve the conflicts](merging.md?tabs=command-line) and then run `git merge --continue` or `git rebase --continue`, or run `git merge --abort` or `git rebase --abort` to undo the merge/rebase.


* * *


## Next steps

> [!div class="nextstepaction"]
> [Share code with push](pushing.md)
> [Resolve merge conflicts](merging.md)


## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
