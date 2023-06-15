---
title: Develop and share code in TFVC with Visual Studio
titleSuffix: Azure Repos
description: See how to share code in Team Foundation Version Control (TFVC) centralized version control by using Visual Studio.
ms.assetid: 108544c0-c29e-4b3b-9a39-4573cf4a71dc
toc: show
ms.service: azure-devops-repos
ms.topic: quickstart
ms.date: 12/01/2022
ms.custom: kr2b-contr-experiment
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Develop and share code in TFVC with Visual Studio

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Whether your software project is large, small, or brand new, it's best to use version control as early as possible. This article shows you how to get started with Team Foundation Version Control (TFVC), a centralized version control system.

- If you want to work in a distributed version control system, you can instead use [Git with Azure Repos](../../repos/git/share-your-code-in-git-vs.md).

- If you have code you want to migrate into Azure DevOps Services, see [Migration options](../../migrate/migrate-from-tfs.md).

## Prerequisites

- [Sign up for Azure DevOps and create a project](../../organizations/accounts/create-organization.md).

- Install [Visual Studio](https://visualstudio.microsoft.com/downloads).

## Connect to your project

1. In Visual Studio, from the **Home** page of **Team Explorer**, select the **Manage Connections** icon.

1. On the **Connect** page of **Team Explorer**, right-click the project that contains your repository, and select **Connect**.

   ![Screenshot that shows selecting Connect to connect a project.](media/share-your-code-in-tfvc-vs/connect.png)

   If the project you want isn't listed, select **Manage Connections**, select **Connect to a Project**, and then select the project you want. For more information, see [Connect from Visual Studio or Team Explorer](../../organizations/projects/connect-to-projects.md#connect-from-visual-studio-or-team-explorer).

> [!NOTE]
> Some TFVC menu options aren't displayed in Visual Studio until you connect to TFVC.

<a name="workspace"></a>
## Configure your workspace

1. On the **Home** page of Visual Studio **Team Explorer**, select **Configure your workspace** to map the project to a folder on your dev machine.

1. Confirm your workspace path, and select **Map & Get** to map the workspace and get your code.

   ![Screenshot that shows mapping the workspace to get code.](media/share-your-code-in-tfvc-vs/MapAndGet.png)

   Now you can check in source, queue builds, and manage work.

   ![Screenshot shows a success message that verifies that Visual Studio is now connected to your project.](media/share-your-code-in-tfvc-vs/MapWorkspaceSuccess.png)

If you don't see the **Configure your workspace** link, you might already have a workspace on your computer. To see existing workspaces, open **Source Control Explorer**, or look under **Solutions** in **Team Explorer**. For more information, see [Use Source Control Explorer to manage files in TFVC](./use-source-control-explorer-manage-files-under-version-control.md) and [Create and work with workspaces](./create-work-workspaces.md).

![Screenshot that shows Team Explorer, where you can select Source Control Explorer or Manage Workspaces.](media/share-your-code-in-tfvc-vs/OpenSCE_ManageWorkspaces.png)

> [!NOTE]
> TFVC doesn't support workspaces on network drives or UNC paths.

## Add your code to version control

1. To create a new code project to put under TFVC source control, select **New** under **Solutions** in the **Home** page of **Team Explorer**. Put the new solution in your mapped workspace folder, such as *c:\Users\\\<YourName>\\Source\\Workspaces\\YourTeamProject\\*.

   ![Screenshot that shows the Team Explorer Home page with New highlighted under Solutions.](media/share-your-code-in-tfvc-vs/team-explorer-new-solution.png)

   Or, if you already have an app in progress that you want to put under TFVC source control, move the solution into your workspace folder in Windows File Explorer.

   ![Screenshot shows moving your source code to your workspace folder.](media/share-your-code-in-tfvc-vs/IC689415.png)

1. Open your solution in Visual Studio.

   ![Screenshot shows Team Explorer Home page, where you can open your solution in Visual Studio.](media/share-your-code-in-tfvc-vs/open-solution-from-team-explorer-home.png)
   
1. Press Ctrl+Alt+L to open **Solution Explorer**, and in **Solution Explorer**, right-click the solution and select **Add Solution to Source Control**.

   ![Screenshot of adding your solution to source control.](media/share-your-code-in-tfvc-vs/IC682953.png)

1. In the **Add Solution to Source Control** dialog box, review the details, and then select **OK**.

## Check in the solution

1. When you're ready to [check in your code](check-your-work-team-codebase.md), right-click your solution in **Solution Explorer** and select **Check In**.

   ![Screenshot that shows a context menu with Check In selected.](media/share-your-code-in-tfvc-vs/IC682954.png)

1. On the **Pending Changes** page of **Team Explorer**, add a check-in comment and then select **Check in**.

   ![Screenshot that shows a Pending Changes pane with a comment and a Check In button.](media/share-your-code-in-tfvc-vs/IC685248.png)

1. From the **Home** page of **Team Explorer**, select **Source Control Explorer**.

   ![Screenshot that shows the Team Explorer Home page with Source Control Explorer selected.](media/share-your-code-in-tfvc-vs/IC682140.png)

   In **Source Control Explorer**, you can see the solution in TFVC.

   ![Screenshot that shows the solution in Source Control Explorer.](media/share-your-code-in-tfvc-vs/IC689416.png)

Your whole team can work on the code now. All changes are tracked in version control.

## Check in changes

1. When you edit code in Visual Studio that's under TFVC source control, the changed file is automatically checked out. For example, *site.css* is checked out after the `font-size` has been changed to `16px`.

   ![Screenshot that shows Solutions Explorer with the file site.css checked out.](media/share-your-code-in-tfvc-vs/IC682155.png)

1. To compare the modified file with the latest version in source control, right-click the file in **Solution Explorer** and select **Compare**.

   ![Screenshot that shows the Compare option in the Solution Explorer context menu.](media/share-your-code-in-tfvc-vs/IC682955.png)

   The **Diff** window opens, and you can see the difference between the two versions.

   ![Screenshot that shows the compare window, with two versions of the file side by side.](media/share-your-code-in-tfvc-vs/IC682157.png)

1. In **Solution Explorer**, right-click the file and select **Check In** to check in the change.

   ![Screenshot that shows the Check In option in the Solution Explorer context menu.](media/share-your-code-in-tfvc-vs/IC682956.png)

   You can also check in from the code editor or from **Team Explorer**.

1. If you're working on a task or fixing a bug that's tracked as a work item, you can associate that work item with your pending changes. TFVC resolves the bug, closes the task, or links the changeset to the work item.

   ![Screenshot shows Related Work Items in pending changes.](media/share-your-code-in-tfvc-vs/IC682159.png)

1. Add a comment and check in.

   ![Screenshot that shows where you can add a comment and check in the files.](media/share-your-code-in-tfvc-vs/IC685249.png)

1. In **Source Control Explorer**, right-click the file you changed and select **View History** to view its history.

   ![Screenshot that shows View History in the source file context menu.](media/share-your-code-in-tfvc-vs/IC682957.png)

   The **History** window lists all the changesets that include this file.

   ![Screenshot that shows the History window with changesets.](media/share-your-code-in-tfvc-vs/IC682163.png)

## Next steps

- [Get your code reviewed](get-code-reviewed-vs.md)
- [Migrate from Azure DevOps Server into Azure DevOps Services](../../migrate/migrate-from-tfs.md)