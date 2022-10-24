---
author: vijayma
ms.author: vijayma
ms.date: 10/18/2022
ms.topic: include
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

1. In the **Git Changes** window, select the up-arrow push button to push your commit.

   :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-changes-window.png" border="true" alt-text="Screenshot of the up-arrow push button in the 'Git Changes' window of Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-changes-window-lrg.png":::

   Or, you can push your changes from the **Git Repository** window. To open the **Git Repository** window, select the outgoing / incoming link in the **Git Changes** window.

   :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-repositories-window.png" border="true" alt-text="Screenshot of the 'outgoing / incoming' link in the 'Git Changes' window, and the Push link in the 'Git Repository' window of Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-repositories-window-lrg.png":::

   Or, you can push your changes from the **Git** menu on the menu bar.

   :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-menu.png" border="true" alt-text="Screenshot of the Push option from the Git menu in Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-menu-lrg.png":::

1. Create a pull request so that others can review your changes. If you've just pushed your changes from the **Git Changes** window, you can select the **Create a Pull Request** link to open a web browser where you can create a new pull request in the Azure Repos web portal.

   :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-git-changes-window.png" border="true" alt-text="Screenshot of the 'Create a Pull Request' link in the 'Git Changes' window in Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-git-changes-window-lrg.png":::

   Or, if you've just pushed your changes from the **Git Repository** window, you can select the **Create a Pull Request link** at the top of that window.

   :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-git-repository-window.png" border="true" alt-text="Screenshot of the 'Create a Pull Request' link in the 'Git Repository' window in Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-git-repository-window-lrg.png":::

   Or, you can right-click any branch in the **Git Repository** window and select **Create Pull Request**.

   :::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-from-branch-git-repository-window.png" border="true" alt-text="Screenshot of the 'Create a Pull Request' menu option from the branch context menu in the 'Git Repository' window in Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-from-branch-git-repository-window-lrg.png":::

When the pull request opens in the Azure Repos web portal, verify your source and destination branches. In this example, we want to merge commits from the `add-readme-file` branch into the `main` branch. Enter a title and optional description, specify any reviewers, optionally associate any work items, and then select **Create**.

:::image type="content" source="../media/gitquickstart/visual-studio-2019/team-explorer/create-pull-request.png" border="true" alt-text="Screenshot of the 'New Pull Request' form in the Azure Repos web portal.":::

For more information on pull requests, see the [Pull request](../pull-requests.md) tutorial.
