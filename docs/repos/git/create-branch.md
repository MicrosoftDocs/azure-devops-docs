---
title: Create a new Git branch from the web
titleSuffix: Azure Repos
description: Learn about Git branches and how to create a new branch in your local Git repo, Azure Repos Git repo, and GitHub.
ms.assetid: 13783230-7762-4fd0-b392-5187c7f9fe1e
ms.technology: devops-code-git
ms.topic: how-to
ms.date: 03/15/2022
monikerRange: '<= azure-devops'
---

# Create a new Git branch

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)]

The first commit in a new Git repo is the start of the `main` branch. As you work in the `main` branch, you make commits to record your work in that branch. Branching in Git occurs when you create a new line of development that diverges from a prior branch. You might choose to create a new branch to develop and test a new feature before adding it to your `main` branch. The recommended [Git workflow](gitworkflow.md) is to use a new branch for every feature or bugfix. When you switch between branches, Git almost instantly switches the version of your repo files to match the branch you selected. Your [commits](commits.md) are always saved to the current branch, and are isolated from commits in other branches.

For an overview of the Git workflow, see [Azure Repos Git tutorial](gitworkflow.md).


## Create a new branch

> [!NOTE]
> Branch names can't contain ASCII control characters, such as spaces, tildes, and colons. It's common practice to use lowercase characters and to separate words with a hyphen. Forward slashes can be used to group branches. Branch name length shouldn't exceed 250 ASCII characters. To avoid ambiguity between branch names and commit hashes, don't use branch names that consist of 40 hexadecimal characters. For more information on branch naming, see [git-check-ref-format](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-check-ref-format.html) and [Git cross-platform compatibility](os-compatibility.md).

#### [Browser](#tab/browser) 

::: moniker range=">= azure-devops-2020"

You can create branches in **Azure Repos** Git repos, **GitHub** repos, or other hosted Git repos.

#### Azure Repos

1. From your web browser, open the team project for your **Azure DevOps** organization, and then choose **Repos** > **Branches** to open the **Branches** view.

   :::image type="content" source="media/create-branch/browser/azure-repos/repos-branches.png" border="true" alt-text="Screenshot of the Azure DevOps project page with the Repo menu expanded.":::

1. In the **Branches** view, choose **New branch** to launch the **Create a branch** dialog.

   :::image type="content" source="media/create-branch/browser/azure-repos/new-branch.png" border="true" alt-text="Screenshot of the 'New branch' button on the Azure DevOps repo page.":::

1. In the **Create a branch** dialog, enter a unique new branch name, select a base branch for your new branch, optionally link work items, and then choose **Create**.

   :::image type="content" source="media/create-branch/browser/azure-repos/create-branch.png" border="true" alt-text="Screenshot of the 'Create a branch' dialog.":::

   Your new branch shows up in the branch list.

   :::image type="content" source="media/create-branch/browser/azure-repos/branch-list.png" border="true" alt-text="Screenshot of the branch list that shows your new branch.":::

#### GitHub

From your web browser, navigate to the main page of your **GitHub** repo, select a base branch to launch the **Switch branches/tags** dialog, enter a unique new branch name, and then choose **Create branch**.

:::image type="content" source="media/create-branch/browser/github/create-branch.png" border="true" alt-text="Screenshot of the 'Switch branches/tags' dialog on the main page of a GitHub repo.":::

The main page of your repo now shows the files in your new branch.

:::image type="content" source="media/create-branch/browser/github/created-branch.png" border="true" alt-text="Screenshot of your new branch files on the main page of a GitHub repo.":::

::: moniker-end

::: moniker range="< azure-devops-2020 >= azure-devops-2019"

1. View your repo's branches by selecting **Repos** > **Branches** while viewing your repo on the web.

   ![View your branches](media/repos-navigation/repos-branches.png)

1. Select **New branch** in the upper-right corner of the page.

   ![Create branch button](media/branches/create-branch.png)

1. In the **Create a branch** dialog box, enter a name for your new branch, select a branch to base the work off of, and associate any work items.

   :::image type="content" source="media/branches/create-branch-web-2020.png" alt-text="Screenshot that shows the creation of a branch with the new branch dialog.":::

1. Select **Create branch**.

::: moniker-end

::: moniker range="= tfs-2018"

1. View your repo's branches by selecting **Branches** while viewing your repo on the web.

   :::image type="content" source="media/create-branch/branches-nav.png" border="false" alt-text="Branches page.":::

1. Select **New branch** in the upper-right corner of the page.

   :::image type="content" source="media/create-branch/create-branch.png" border="false" alt-text="Create branch button.":::

1. In the **Create a branch** dialog box, enter a name for your new branch, select a branch to base the work off of, and associate any work items.

   :::image type="content" source="media/create-branch/newbranch-dialog.png" border="false" alt-text="Create a branch with the new branch dialog.":::

1. Select **Create branch**.

::: moniker-end

> [!TIP]
> After you've created a remote branch, you can [fetch](pulling.md) it into your local Git repo. At the command prompt, run:<br>
> `git fetch`<br>
> `git switch <remote branch name>`


#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison of how to create a branch.

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. From the **Git** menu on the menu bar, choose **New Branch** to open the **Create a new branch** window.

      :::image type="content" source="media/create-branch/visual-studio-2019/git-experience/branches.png" border="true" alt-text="Screenshot of the 'New Branch' option in the Git menu in Visual Studio 2019." lightbox="media/create-branch/visual-studio-2019/git-experience/branches-lrg.png":::

    2. In the **Create a new branch** window, enter a descriptive branch name to let others know what work the branch contains. By default, Visual Studio creates your new branch from the current branch. The **Checkout branch** checkbox automatically switches you to the newly created branch. Select **Create**.

      :::image type="content" source="media/create-branch/visual-studio-2019/git-experience/new-local-branch.png" border="true" alt-text="Screenshot of the 'Create a new branch' window in Visual Studio 2019." lightbox="media/create-branch/visual-studio-2019/git-experience/new-local-branch-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select the **Home** button and choose **Branches**.

      :::image type="content" source="media/create-branch/visual-studio-2019/team-explorer/branches.png" border="true" alt-text="Screenshot showing the Branches option in Team Explorer in Visual Studio 2019." lightbox="media/create-branch/visual-studio-2019/team-explorer/branches-lrg.png":::

    2. Right-click the default branch, often named `main`, and then choose **New Local Branch From**

      :::image type="content" source="media/create-branch/visual-studio-2019/team-explorer/new-local-branch-menu.png" border="true" alt-text="Screenshot of the 'New Local Branch From' menu option in the context menu of the main branch in Visual Studio 2019." lightbox="media/create-branch/visual-studio-2019/team-explorer/new-local-branch-menu-lrg.png":::

    3. Enter a descriptive branch name to let others know what work the branch contains. Select **Create Branch**.

      :::image type="content" source="media/create-branch/visual-studio-2019/team-explorer/new-local-branch.png" border="true" alt-text="Screenshot of the branch name text and 'Create Branch' button in Visual Studio 2019." lightbox="media/create-branch/visual-studio-2019/team-explorer/new-local-branch-lrg.png":::

  :::column-end:::
:::row-end:::


#### [Visual Studio 2017 & earlier](#tab/visual-studio)

**Visual Studio 2015 & 2017**

1. Open up Team Explorer and go to the **Branches** view.
1. Right-click the parent branch (usually `main`) to base your changes and choose **New Local Branch From...**. 
1. Supply a branch name in the required field and select **Create Branch**. Visual Studio automatically performs a `checkout` to the newly created branch.
   
      :::image type="content" source="media/vsbranch.gif" border="false" alt-text="Creating Git Branches in Visual Studio.":::   


#### [Git Command Line](#tab/git-command-line)

To create a new branch, use the `git branch` command. This command doesn't switch your current branch to the new branch.

```Git CLI
git branch <new branch name>
```

To switch to a branch, use the `git checkout` command.

```Git CLI
git checkout <existing branch name>
```

To create and switch to a branch in one command, use the `git checkout` command with the `-b` flag.

```Git CLI
git checkout -b <existing branch name>
```

> [!TIP]
> You can also use `git switch <existing branch name>` to switch to a new branch. Or, to create and switch to a new branch in one command, use `git switch -c <new branch name>`.


* * *


## Next steps

> [!div class="nextstepaction"]
> [Share code with push](./pushing.md)


## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
