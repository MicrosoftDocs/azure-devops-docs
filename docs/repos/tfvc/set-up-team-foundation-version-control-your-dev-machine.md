---
title: Team Foundation Version Control on your dev machine
titleSuffix: Azure Repos
description: Set up Team Foundation Version Control on your dev machine
ms.assetid: 15428962-f5fc-4aa4-81dc-7d53a8e3a00c
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Set up Team Foundation Version Control on your dev machine

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]


To set up Team Foundation Version Control (TFVC) on your dev machine, you just need to create a workspace and then add your code.

**Before you start**

-   If you don't have Visual Studio, [get it here](https://visualstudio.microsoft.com/).

-   If you don't have a project, [create](../../organizations/projects/create-project.md) or [get access](../../organizations/public/invite-users-public.md) to one.

## Create a workspace and get the code

From Visual Studio, go to the Team Explorer Connect page (Keyboard: Ctrl + 0, C) and then connect to the project.

![Create a workspace and get the code](media/set-up-team-foundation-version-control-your-dev-machine/IC750752.png)

(If the project you want to open is not listed, choose **Select Projects** and then 
[connect to the project](../../organizations/projects/connect-to-projects.md).)

Map the project to a folder on your dev machine.

![Map the project to a folder on your dev machine](media/set-up-team-foundation-version-control-your-dev-machine/IC677199.png)

Map the workspace and get your code.

![Map the workspace and get your code](media/set-up-team-foundation-version-control-your-dev-machine/IC696633.png)

## Work in a "Main" parent folder

Do you want to prepare for when your team grows large enough to need [branches](./branching-strategies-with-tfvc.md) to manage your work? Put all your code in a parent called Main (for example: `$/MyTeamProject/Main/`).

1.  Go to the Team Explorer Home page (Keyboard: Ctrl + 0, H), and then open **Source Control Explorer**.

2.  In **Source Control Explorer**, select your project in the left pane.

3.  On the menu bar choose **File**, **Source Control**, **New Folder**.

    ![Source control explorer](media/set-up-team-foundation-version-control-your-dev-machine/IC675823.png)

    Name the folder.

    Open the context menu of the `Main` folder and choose **Check in**.

4.  Check in the new folder.

    ![Check in the new folder](media/set-up-team-foundation-version-control-your-dev-machine/IC696634.png)

    Your changeset is checked in.

    ![Your changeset is checked in](media/set-up-team-foundation-version-control-your-dev-machine/IC675825.png)

When your team decides to branch the codebase, you can convert the Main folder to a branch. See [Branch folders and files](branch-folders-files.md).

## Add your code to version control

### Create a new solution under version control

If you've got an idea for a new app, you can use version control from the start. Create a new code project (Keyboard: Ctrl + Shift + N), and add it to TFVC version control:

![Create a new solution under version control](media/set-up-team-foundation-version-control-your-dev-machine/IC696635.png)
> [!TIP]
> We suggest that you put your new project in **c:\Users\\**<em>YourName</em>**\Source\Workspaces\\**.

When the **Choose Source Control** dialog box appears, choose **Team Foundation Version Control**.

When you are ready, [check in your changes](check-your-work-team-codebase.md) (Keyboard: Ctrl + 0, P).

### Put an existing solution under version control

You've already got an app in progress and you want to begin working on it under TFVC version control.

1.  Move your solution into your workspace folder (for example: **c:\\Users\\YourName\\Source\\Workspaces\\YourTeamProject\\Main\\**).

2.  If you have not already done so, open your solution, (Keyboard: Ctrl + Shift + O) and then open Solution Explorer (Keyboard: Ctrl + Alt + L).

3.  Add your solution to source control.

    ![Add your solution to source control](media/set-up-team-foundation-version-control-your-dev-machine/IC675409.png)

4.  On the **Choose Source Control** dialog box, choose **Team Foundation Version Control**.

5.  When you are ready, [check in your changes](check-your-work-team-codebase.md) (Keyboard: Ctrl + 0,P).

## Q & A

-   **Q: I'm really new to all this; can I get more help?**

    **A:** Yes, [let us walk you step by step to get started](share-your-code-in-tfvc-vs.md).

-   **Q: Is your folder structure complex or do you use branches?**

    **A:** If so, you can [create one or more workspaces](create-work-workspaces.md) and then [optimize them to meet your needs](optimize-your-workspace.md).


## Related articles

-  [Set up a CI build](../../pipelines/build/triggers.md) 
-  [Develop your app in Team Foundation version control](develop-your-app-team-foundation-version-control.md)