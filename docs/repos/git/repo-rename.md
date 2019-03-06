---
title: Rename a Git repo in your project
titleSuffix: Azure Repos
description: You can rename a Git repository in a few steps, but be aware that your team will have to take a few more steps to adapt to the change.
ms.assetid: 05971618-4ea9-4997-bb51-2d74211352ef
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 11/02/2018
monikerRange: '>= tfs-2017'
---


#  Rename a Git repository in your project
#### Azure Repos | TFS 2018 | TFS 2017 | VS 2017 | VS 2015

You can rename a Git repository in a project from your web browser. After you rename the repo, each member of your team will have to take a few steps to re-enable their dev machines to connect to the repo on the server.

>[!NOTE]
>The steps in this article refer to Azure Repos and TFS 2017 and higher. For TFS 2015, see [Rename a Git repository in TFS 2015](repo-rename-tfs2015.md).

## Rename the repo in the web

> [!IMPORTANT]
> This step requires [Rename Repository permissions](../../organizations/security/set-git-tfvc-repository-permissions.md#git-repository) on your Git repo.

::: moniker range=">= azure-devops-2019"

1. Select **Repos**, **Files**.

  ![View your files](_img/repos-navigation/repos-files.png)

1. From the repo drop-down, select **Manage repositories**.

  ![Manage repositories](_img/repo-mgmt/manage-repositories.png)

1. Select the name of the repository from the **Repositories** list, choose the **...** menu, and then choose **Rename repository**.

  ![Rename repository](_img/repo-mgmt/rename-repository.png)

1. Rename the repository by typing the repo's new name and selecting **Rename**.

  ![Rename repository confirm](_img/repo-mgmt/rename-repository-confirm.png)

::: moniker-end

::: moniker range="<= tfs-2018"

1. Open the project administration page while working in your project on the web and select **Version Control**.

   ![Version control settings](_img/repo-mgmt/version-control-settings.png)

1. Select the repo you want to rename under **Git repositories** on the left and select **...**. Select **Rename repository...** from the menu.

   ![Rename a repository](_img/repo-mgmt/rename-repo-2107.png)

   >[!NOTE]
   >If the **Repositories** pane is not expanded, select **>** to expand it and display the list of repositories.
   >
   >![Repositories pane](_img/repo-mgmt/expand-repositories-pane.png)

1. Enter a new repo name in the **Repository name** field in the dialog, then select **Rename**.

  ![Rename repository confirm](_img/repo-mgmt/rename-repository-confirm.png)

::: moniker-end

## Update the Git remotes on your dev machines

Git uses remote references to fetch and push changes between your local copy of a repository and the remote version stored on the server. After a Git repository or project has been renamed, your remote references need to updated. This is due to the fact that the remote repository URL contains the project and the repository name. 

Each member of your team must update their local Git repos to continue connecting from their dev machines to the repo in the project. The instructions below show how to update the remotes for the **Fabrikam Mobile** repo that was renamed to **Fabrikam**.

<a name="copy_remote_repo_url"></a>
### Get the new URL for the repo

::: moniker range=">= azure-devops-2019"

1. Select **Repos**, **Files**.

  ![View your files](_img/repos-navigation/repos-files.png)

1. Select **Clone** in the upper-right corner of the **Files** window and copy the clone URL.

   ![Retrieve the clone URL](../get-started/_img/clone-repo/clone-repo.png)

::: moniker-end

::: moniker range="<= tfs-2018"

1. Select **Clone** in the upper-right corner of the **Code** window and copy the **Clone URL**.

  ![Retrieve the clone URL](_img/repo-mgmt/clone-git-repo.png)

::: moniker-end

### Update your remote in Visual Studio 2015 or 2017

1. Connect to the repo.

 ![Connect to the repository](_img/repo-rename/RepoConnect.png)
 
2. Open the project settings.
 
 ![Project settings](_img/repo-rename/ProjectSettings.png)

3. Open the repo settings.

 ![Repository settings](_img/repo-rename/RepoSettings.png)

4. Edit the fetch and push remote references and paste the URL that you [copied from the remote repo](#copy_remote_repo_url).

 ![Edit remote](_img/repo-rename/EditRepoSettings.png)

### Update your remote in older versions of Visual Studio from the command prompt

If you use an older version of Visual Studio or work with Git from the command prompt:

1. Open the Git command prompt.

2. Go to the local repository and update the remote to the URL you [copied from the remote repo](#copy_remote_repo_url).

    ```git remote set-url origin {URL_you_copied_from_the_remote_repo}```

### Refresh Team Explorer

1. Refresh Team Explorer.

 ![Refresh Team Explorer](_img/repo-rename/RefreshTeamExplorer.png)

2. Team Explorer now shows the updated repo name. 

 ![Team Explorer Updated](_img/repo-rename/Result.png)

## Q&A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Can I rename my repo again? Can I re-use an old repo name?

A: Yes

#### Q: What if I named my remote something other than the default origin?

A: If you are using:

 * Visual Studio 2015, then edit the remote with the name you used. 

 * An older version of Visual Studio or the command prompt, then run this command: ```git remote set-url  {remote_name} {URL_you_copied_from_the_remote_repo}```


<!-- ENDSECTION -->
