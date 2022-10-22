---
title: Rename a Git repo in your project
titleSuffix: Azure Repos
description: You can rename a Git repository in a few steps. Your team will have to take a few more steps to adapt to the change.
ms.assetid: 05971618-4ea9-4997-bb51-2d74211352ef
ms.service: azure-devops-repos
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 02/23/2022
ms.subservice: azure-devops-repos-git
---


#  Rename a Git repository in your project

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)]

You can rename a Git repository in a project from your web browser. After you rename the repo, each member of your team should take a few steps to re-enable their dev machines to connect to the repo on the server.

> [!VIDEO https://www.microsoft.com/en-us/videoplayer/embed/RE4sVSK]

## Prerequisites

- To rename a repository, you must have [Rename Repository permissions](set-git-repository-permissions.md#git-repository) on your Git repo.
::: moniker range=">= azure-devops-2020"
- If you want to use **az repos update** command to rename a repository, be sure to follow the steps in [Get started with Azure DevOps CLI](../../cli/index.md).
::: moniker-end

## Rename the repository


#### [Browser](#tab/browser)

::: moniker range=">= azure-devops-2019"

1. From the web portal, select **Repos**, **Files**.

   ![View your files](media/repos-navigation/repos-files.png)

2. From the repo drop-down, select **Manage repositories**.

   ![Manage repositories](media/repo-mgmt/manage-repositories.png)

3. Select the name of the repository from the **Repositories** list, choose the **...** menu, and then choose **Rename repository**.

   ![Rename repository](media/repo-mgmt/rename-repository.png)

4. Rename the repository by typing the repo's new name and selecting **Rename**.

   ![Rename repository confirm](media/repo-mgmt/rename-repository-confirm.png)

::: moniker-end

::: moniker range="tfs-2018"

1. 1. From the web portal, open the project administration page for your project and select **Version Control**.

   ![Version control settings](media/repo-mgmt/version-control-settings.png)

2. Select the repo you want to rename under **Git repositories** on the left and select **...**. Select **Rename repository...** from the menu.

   ![Rename a repository](media/repo-mgmt/rename-repo-2107.png)

   > [!NOTE]
   > If the **Repositories** pane is not expanded, select **>** to expand it and display the list of repositories.
   >
   >![Repositories pane](media/repo-mgmt/expand-repositories-pane.png)

3. Enter a new repo name in the **Repository name** field in the dialog, then select **Rename**.

   ![Rename repository confirm](media/repo-mgmt/rename-repository-confirm.png)

::: moniker-end


<a name="repos-rename" />

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range="azure-devops" 
[!INCLUDE [az-repos-update](./includes/azure-repos-update.md)]


::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

***

## Update the Git remotes on your dev machines

Git uses remote references to fetch and push changes between your local copy of a repository and the remote version that is stored on the server. After a Git repository or project has been renamed, you should update your remote references. Update your references to that the remote repository URL contains the project and the repository name. 

Each member of your team must update their local Git repos to continue connecting from their dev machines to the repo in the project. The instructions below show how to update the remotes for the **Fabrikam Mobile** repo that was renamed to **Fabrikam**.

<a name="copy_remote_repo_url"></a>

### Get the new URL for the repo

::: moniker range=">= azure-devops-2019"

1. Select **Repos**, **Files**.

   ![View your files](media/repos-navigation/repos-files.png)

2. Select **Clone** in the upper-right corner of the **Files** window and copy the clone URL.

   ![Retrieve the clone URL](./media/clone-repo/clone-repo.png)

::: moniker-end

::: moniker range="tfs-2018"

- Select **Clone** in the upper-right corner of the **Code** window and copy the **Clone URL**.

   ![Retrieve the clone URL](media/repo-mgmt/clone-git-repo.png)

::: moniker-end


### Update your remote in Visual Studio 

1. Connect to the repo.

   ![Connect to the repository](media/repo-rename/RepoConnect.png)
 
2. Open the project settings.
 
   ![Project settings](media/repo-rename/ProjectSettings.png)

3. Open the repo settings.

   ![Repository settings](media/repo-rename/RepoSettings.png)

4. Edit the fetch and push remote references and paste the URL that you [copied from the remote repo](#copy_remote_repo_url).

   ![Edit remote](media/repo-rename/EditRepoSettings.png)

### Update your remote in older versions of Visual Studio from the command prompt

If you use an older version of Visual Studio or work with Git from the command prompt:

1. Open the Git command prompt.

2. Go to the local repository and update the remote to the URL you [copied from the remote repo](#copy_remote_repo_url).

    ```git remote set-url origin {URL_you_copied_from_the_remote_repo}```

### Refresh Team Explorer

1. Refresh Team Explorer.

   ![Refresh Team Explorer](media/repo-rename/RefreshTeamExplorer.png)

2. Team Explorer now shows the updated repo name. 

   ![Team Explorer Updated](media/repo-rename/Result.png)

## Q&A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Can I rename my repo again? Can I reuse an old repo name?

A: Yes

#### Q: What if I named my remote something other than the default origin?

A: If you're using:

 * Visual Studio 2015, then edit the remote with the name you used. 

 * An older version of Visual Studio or the command prompt, then run this command: ```git remote set-url  {remote_name} {URL_you_copied_from_the_remote_repo}```


<!-- ENDSECTION -->


## Related articles

- [Set Git repository settings and policies](repository-settings.md)