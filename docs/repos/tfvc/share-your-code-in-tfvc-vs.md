---
title: Develop and share code in TFVC using Visual Studio
titleSuffix: Azure Repos
description: Learn how to share code in Team Foundation Version Control (TFVC) using Visual Studio. TFVC offers a centralized system.
ms.assetid: 108544c0-c29e-4b3b-9a39-4573cf4a71dc
toc: show
ms.technology: devops-code-tfvc
ms.topic: quickstart
ms.date: 07/14/2022
ms.custom: kr2b-contr-experiment
monikerRange: '<= azure-devops'
---

# Develop and share your code in Team Foundation Version Control using Visual Studio

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

Whether your software project is large, small, or brand new, in most cases you'll be better off if you use version control as early as possible.
Here, we'll show you how to get started with Team Foundation Version Control (TFVC), a centralized system.
If you want to work in a distributed system, you can instead use [Git with Azure Repos](../../repos/git/share-your-code-in-git-vs.md).

Is your code in another place? [Learn how to migrate it here](#migrate).

[!INCLUDE [open-team-project-in-vs](includes/open-team-project-in-vs.md)]

> [!NOTE]
> Some menu options for TFVC may not be displayed in Visual Studio until you [connect Visual Studio to TFVC](../../organizations/projects/connect-to-projects.md#connect-from-visual-studio-or-team-explorer) as described in the previous section.

<a name="workspace"></a>
## Configure your workspace

1. In Visual Studio, configure your workspace.

   ![Screenshot shows the Team Explorer Home page, with the Configure Workspace link.](media/share-your-code-in-tfvc-vs/ConfigureWorkspace.png)

   [I don't see the Configure Workspace link. What do I do next?](#workspace_exists)

2. Confirm your workspace path. Select **Map & Get** to map your workspace and get the source.

   :::image type="content" source="media/share-your-code-in-tfvc-vs/MapAndGet.png" alt-text="Screenshot shows the Team Explorer Home page, with Map and get highlighted.":::

3. Now you can check in source, queue builds, and manage work.

   ![Screenshot shows a success message that verifies that Visual Studio is now connected to your project.](media/share-your-code-in-tfvc-vs/MapWorkspaceSuccess.png)

   > [!NOTE]
   > TFVC is not supported when workspaces are placed on network drives or UNC paths.

## Create a new app

If you already have an app that you want to add to version control, skip to [Add an existing app](#app_add).

In Team Explorer, select **New**.

![Screenshot shows the Team Explorer Home page with New highlighted under Solutions.](media/share-your-code-in-tfvc-vs/team-explorer-new-solution.png)

Now that you've added your app, you can skip to [snapshot your code](#snapshot).

<a name="app_add"></a>
## Add an existing app

### Move and open the solution

1. Close the solution.

2. Open the workspace folder that you created when you [configured your workspace](#workspace).

   ![Screenshot shows Source Control Explorer with your workspace folder selected.](media/share-your-code-in-tfvc-vs/open-workspace-folder-from-source-control-explorer.png)

3. Move the code you want to upload to the workspace folder.

   ![Screenshot shows moving your source code to your workspace folder.](media/share-your-code-in-tfvc-vs/IC689415.png)

4. Open your solution in Visual Studio.

   ![Screenshot shows Team Explorer Home page, where you can open your solution in Visual Studio.](media/share-your-code-in-tfvc-vs/open-solution-from-team-explorer-home.png)

### Add the solution to Azure Repos

1. Press **Ctrl**+**Alt**+**L** to open Solution Explorer.

2. Add your solution to version control.

   ![Screenshot shows a context menu with Add the solution to Source Control selected.](media/share-your-code-in-tfvc-vs/IC682953.png)

3. Check in the solution.

   ![Screenshot shows a context menu with Check In selected.](media/share-your-code-in-tfvc-vs/IC682954.png)

4. Add a comment and check in.

   ![Screenshot shows a Pending Changes pane with a comment and a Check In button.](media/share-your-code-in-tfvc-vs/IC685248.png)

5. Open the source control explorer.

   ![Screenshot shows the Team Explorer Home page with Source Control Explorer selected.](media/share-your-code-in-tfvc-vs/IC682140.png)

   Your solution is now in TFS.

   ![Screenshot shows the result, where your solution in the Source Control Explorer.](media/share-your-code-in-tfvc-vs/IC689416.png)

Your whole team can work on the code now. All your changes are tracked in version control.

<a name="snapshot"></a>
## Snapshot (check in) your code

1. When you edit code in Visual Studio, the changed file is automatically checked out. For example, *Site.css* is checked out after the border color has been changed to #ddd.

   ![Screenshot shows Solutions Explorer with the file Site dot c s s checked out.](media/share-your-code-in-tfvc-vs/IC682155.png)

2. Compare the modified file with the latest version in source control.

   ![Screenshot shows the Compare option in the Solution Explorer context menu.](media/share-your-code-in-tfvc-vs/IC682955.png)

   You can see the difference between the two versions.

   ![Screenshot shows the compare window, with two versions of the file side by side.](media/share-your-code-in-tfvc-vs/IC682157.png)

3. Check in the changes.

   ![Screenshot shows the Check in option in the Solution Explorer context menu.](media/share-your-code-in-tfvc-vs/IC682956.png)

   You can also check in from the code window or Team Explorer.

4. If you're working on a task or fixing a bug that's tracked as a work item, add that work item to your pending changes. Source control resolves the bug or closes the task. It links the changeset to the work item.

   ![Screenshot shows Related Work Items in pending changes.](media/share-your-code-in-tfvc-vs/IC682159.png)

5. Add a comment and check in.

   ![Screenshot shows where you can add a comment and check in the files.](media/share-your-code-in-tfvc-vs/IC685249.png)

6. Select Source Control Explorer.

   ![Screenshot shows Source Control Explorer in the Team Explorer Home page.](media/share-your-code-in-tfvc-vs/IC682161.png)

7. View the history of the file you changed.

   ![Screenshot shows View History in the source file context menu.](media/share-your-code-in-tfvc-vs/IC682957.png)

   All the changesets that include this file are listed.

   ![Screenshot shows the history window with changesets.](media/share-your-code-in-tfvc-vs/IC682163.png)

## Troubleshooting
<a name="migrate"></a>

- My code is somewhere else. Can I migrate it to my TFVC project on Azure DevOps Services?

  Yes. See [Migrate from Team Foundation Server into Azure DevOps Services](../../migrate/migrate-from-tfs.md).

<a name="workspace_exists"></a>

- I don't see the Configure Workspace link shown in the steps above. What do I do next?

  You might already have a workspace on your computer. To see your workspace, open Source Control Explorer, or change your workspace.
  Find out how to [manage files under source control](./use-source-control-explorer-manage-files-under-version-control.md) or [manage workspaces](./create-work-workspaces.md).

  ![Screenshot shows Team Explorer, where you can select Source Control Explorer or Manage Workspaces.](media/share-your-code-in-tfvc-vs/OpenSCE_ManageWorkspaces.png)

## Next steps

> [!div class="nextstepaction"]
> [Get your code reviewed](get-code-reviewed-vs.md)
