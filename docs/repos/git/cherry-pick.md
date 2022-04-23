---
title: Copy changes to a branch with cherry-pick
titleSuffix: Azure Repos
description: Learn how to cherry-pick to copy specific commits from one branch to another within a Git repository.
ms.assetid: 5bf5a8d2-9ff2-4d89-b59f-484a3c14021a
ms.technology: devops-code-git
ms.topic: how-to
ms.date: 04/22/2022
monikerRange: '<= azure-devops'
---

# Copy changes with cherry-pick

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)]

Git [cherry-pick](https://git-scm.com/docs/git-cherry-pick) copies the changes from one or more source branch [commits](commits.md) to a target branch. Unlike [merge](merging.md) or [rebase](rebase.md), cherry-pick lets you select specific source branch commits. For each source branch commit that you cherry-pick, Git creates a corresponding commit on the target branch.

You can cherry-pick to tackle these common tasks:

- Deploy a specific feature from one branch to another.
- Copy work that you committed on the wrong branch.
- Apply a bug fix on multiple branches.

For an overview of the Git workflow, see [Azure Repos Git tutorial](gitworkflow.md).

## Cherry-pick a commit

#### [Browser](#tab/browser/)

#### Azure Repos

Azure Repos provides limited support for cherry-picking, and only for the purpose of creating a pull request to apply a hotfix on a target branch. For more information, see [Improving Azure DevOps cherry-picking](https://devblogs.microsoft.com/devops/improving-azure-devops-cherry-picking/).

The **Cherry-pick** option in the pull request menu in Azure Repos does the following:

1. Creates a new topic branch from the pull request's target branch.
1. Cherry-picks *all* changes from the pull request's source branch to the new topic branch.
1. Prompts you to create a new pull request to merge the new topic branch into another target branch.

For a step-by-step tutorial, see [Create a new pull request with cherry-pick](/azure/devops/repos/git/pull-requests?view=azure-devops&tabs=browser&preserve-view=true#add-updates-with-cherry-pick).

#### GitHub

The GitHub web interface doesn't support cherry-picking, but [GitHub Desktop](https://desktop.github.com) does. For step-by-step guidance on how to cherry-pick in GitHub Desktop, see [Cherry-picking a commit](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/cherry-picking-a-commit).

#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison of how to cherry-pick to copy changes from a source branch to a target branch.

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. Choose **Git > Manage Branches** to open the **Git Repository** window.

       :::image type="content" source="media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu.png" border="true" alt-text="Screenshot of the Manage Branches option in the Git menu of Visual Studio 2019." lightbox="media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu-lrg.png":::

    2. In the **Git Repository** window, right-click the target branch and choose **Checkout**.

       :::image type="content" source="media/cherry-pick/visual-studio-2019/git-experience/branch-checkout.png" border="true" alt-text="Screenshot of the Checkout option in the branch context menu in the Git Repository window in Visual Studio 2019." lightbox="media/cherry-pick/visual-studio-2019/git-experience/branch-checkout-lrg.png":::

    3. In the **Branches** view, right-click the source branch and choose **View History** to open a commit **History** tab.

       :::image type="content" source="media/cherry-pick/visual-studio-2019/git-experience/view-branch-history.png" border="true" alt-text="Screenshot of the View History option in the Branches view of the Git Repository window in Visual Studio 2019." lightbox="media/cherry-pick/visual-studio-2019/git-experience/view-branch-history-lrg.png":::

    4. In the **History** tab, right-click the commit you want to cherry-pick and choose **Cherry-Pick**. Visual Studio doesn't support cherry-picking more than one commit at a time, so you'll need to repeat this step for each commit that you want to cherry-pick.

       :::image type="content" source="media/cherry-pick/visual-studio-2019/git-experience/cherry-pick-commit.png" border="true" alt-text="Screenshot of the Cherry-Pick option within the commit context menu in the Git Repository window in Visual Studio 2019." lightbox="media/cherry-pick/visual-studio-2019/git-experience/cherry-pick-commit-lrg.png":::

       Visual Studio creates a new target branch commit that contains the changes from the cherry-picked commit. If the cherry-pick operation doesn't complete successfully, Visual Studio will notify you.

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select the **Home** button and choose **Branches**.

       :::image type="content" source="media/create-branch/visual-studio-2019/team-explorer/branches.png" border="true" alt-text="Screenshot of the Branches option in Team Explorer in Visual Studio 2019." lightbox="media/create-branch/visual-studio-2019/team-explorer/branches-lrg.png":::

    2. In the **Branches** view, right-click the target branch and choose **Checkout**.

       :::image type="content" source="media/cherry-pick/visual-studio-2019/team-explorer/branch-checkout.png" border="true" alt-text="Screenshot of the Checkout option in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/cherry-pick/visual-studio-2019/team-explorer/branch-checkout-lrg.png":::

    3. In the **Branches** view, right-click the source branch and choose **View History** to open a commit **History** tab.

       :::image type="content" source="media/cherry-pick/visual-studio-2019/team-explorer/view-branch-history.png" border="true" alt-text="Screenshot of the View History option in the Branches view of Team Explorer in Visual Studio 2019." lightbox="media/cherry-pick/visual-studio-2019/team-explorer/view-branch-history-lrg.png":::

    4. In the **History** tab, right-click the commit you want to cherry-pick and choose **Cherry-Pick**. Visual Studio doesn't support cherry-picking more than one commit at a time, so you'll need to repeat this step for each commit that you want to cherry-pick.

       :::image type="content" source="media/cherry-pick/visual-studio-2019/team-explorer/cherry-pick-commit.png" border="true" alt-text="Screenshot of the Cherry-Pick option within the commit context menu in the History tab in Visual Studio 2019." lightbox="media/cherry-pick/visual-studio-2019/team-explorer/cherry-pick-commit-lrg.png":::

       Visual Studio creates a new target branch commit that contains the changes from the cherry-picked commit. If the cherry-pick operation doesn't complete successfully, Visual Studio will notify you.

  :::column-end:::
:::row-end:::

#### [Visual Studio 2017](#tab/visual-studio-2017)

1. Open up Team Explorer and check out the branch you want to cherry-pick changes into using the **Branches** view.
2. Right-click the branch containing the changes you want and select **View History...**.
3. Right-click the commit you want to cherry-pick and select **Cherry-pick**.

    Visual Studio copies the changes made in that commit into a new one on your current branch.
    :::image type="content" source="media/vscherrypick.gif" border="false" alt-text="Cherry pick from inside Visual Studio.":::

Repeat this process for each commit you need to bring over to your current branch.


#### [Git Command Line](#tab/git-command-line)

1. Use the `git log` command to list source branch commits. The `--oneline` flag abbreviates the commit info.

    ```cmd
    git log --oneline <source branch>
    ```

    Git lists the most recent commits first. Each commit ID is a partial SHA-1 hash that uniquely identifies the commit. For example:

    ```
    e745d06 (HEAD -> add-network-controller) Add a test initialization class
    a89f48e (origin/add-network-controller) Add fiber optic transceiver test
    31da50b Add network switch test
    e74baa2 (origin/main, origin/HEAD, test-fiber-optic-transmitter, main) Add readme content
    0c14391 Add readme file
    32e3946 Add project files.
    ```

1. Make a note of the ID of the commit that you want to cherry-pick.

1. Checkout the target branch, if it isn't already checked out.

    ```cmd
    git checkout <target branch> 
    ```

1. [Commit](/azure/devops/repos/git/commits), stash, or discard any uncommitted changes.

1. To cherry-pick a single commit:

    ```cmd
    git cherry-pick <commit ID> 
    ```

    To cherry-pick multiple commits, separate the commit IDs with spaces. The commits will be applied in the order that you enter them:

    ```cmd
    git cherry-pick <commit1 ID> <commit2 ID> <commit3 ID> 
    ```

    To cherry-pick an inclusive range of commits, use the `^..` [dot range notation](https://git-scm.com/docs/gitrevisions#_dotted_range_notations):

    ```cmd
    git cherry-pick <oldest-commit ID>^..<newest-commit ID> 
    ```

    When you cherry-pick multiple commits, the default cherry-pick command creates a corresponding sequence of new target branch commits. To tell Git to stage and not commit the target branch changes, use the `-n` flag:
    
    ```cmd
    git cherry-pick -n <commit1 ID> <commit2 ID>
    ```
    Then, you can manually create a single commit to contain all changes from the cherry-pick operation.
    
Git will notify you if there are merge conflicts during the cherry-pick operation. You can either [resolve the conflicts](merging.md?tabs=command-line) and then run `git cherry-pick --continue`, or run `git cherry-pick --abort` to undo the cherry-pick operation.


* * *


## Next steps

> [!div class="nextstepaction"]
> [Undo changes](undo.md)


## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
- [Apply changes with rebase](rebase.md)
- [Update code with fetch, merge, and pull](pulling.md)
