---
author: vijayma
ms.author: vijayma
ms.date: 10/18/2022
ms.topic: include
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

1. From the **Git** menu on the menu bar, choose **New Branch...** to open the **Create a new branch** window.

   :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/branches.png" border="true" alt-text="Screenshot of the 'New Branch' option in the Git menu in Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/branches-lrg.png":::

1. In the **Create a new branch** window, enter a descriptive branch name to let others know what work the branch contains. By default, Visual Studio creates your new branch from the current branch. The **Checkout branch** checkbox automatically switches you to the newly created branch. Select **Create**.

   :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/new-local-branch.png" border="true" alt-text="Screenshot of the 'Create a new branch' window in Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/new-local-branch-lrg.png":::

1. Add a README.md file to your cloned repo. In Solution Explorer, you can browse the repo contents using **Folder View** or open Visual Studio solutions in the repo. Git tracks changes made both inside and outside of Visual Studio.

1. When you're satisfied with your changes, save them in Git using a commit. In the **Git Changes** window, enter a message that describes the changes, and then select **Commit All**. **Commit All** commits unstaged changes and skips the staging area. You can choose to stage all files before committing by selecting the stage all + (plus) button at the top of the Changes section in the **Git Changes** window.

   :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/changes.png" border="true" alt-text="Screenshot of the 'Commit All' button in the 'Git Changes' window in Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/changes-lrg.png":::

   Select the commit information link to get further details about the commit.

   :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/commit-created-locally.png" border="true" alt-text="Screenshot showing the commit information link in Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/commit-created-locally-lrg.png":::

> [!NOTE]
> If you have multiple files and you don't want to commit them all, you can right-click each file and choose **Stage**. When you've staged all the files you'd like to commit, select **Commit Staged**. **Commit Staged** replaces **Commit All** when you manually stage your changes.
>
> :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/stage-changes.png" border="true" alt-text="Screenshot of the Stage option in the 'Git Changes' window in Visual Studio 2019." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/stage-changes-lrg.png":::
