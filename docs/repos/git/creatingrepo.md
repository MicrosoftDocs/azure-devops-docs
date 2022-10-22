---
title: Create a new Git repo
titleSuffix: Azure Repos
description: Learn how to create a new Git repo using Visual Studio or Git command line and connect it to Azure Repos.
ms.assetid: 83c20dac-85c6-4fa0-93b5-912d5477246a
ms.service: azure-devops-repos
ms.topic: tutorial
ms.date: 03/31/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

#  Create a new Git repo

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)]

A Git repository, or repo, tracks changes to files within a folder. You can create any number of local Git repos on your computer, each stored in its own folder. Each Git repo that you create is independent of other Git repos, so changes you make in one repo won't affect the others.

A Git repo stores every version of every file in the repo, unless you tell Git to ignore a file. Git saves file versions efficiently, so storing a large number of versions doesn't necessarily require a lot of disk space. Git supports comparing file versions, merging different versions, switching between versions, and much more. You can use Git to manage your source code, regardless of whether your code files are inside or outside of a Visual Studio solution. To share your work, you can connect your local Git repo to a remote Git repo that others can access. The remote repo can be an **Azure Repos** Git repo, a **GitHub** repo, or other hosted Git repo.

This article provides procedures for the following tasks:

> [!div class="checklist"]
> * Create a local Git repo from a new solution
> * Create a local Git repo from an existing solution
> * Create a local Git repo in an empty folder
> * Connect a local Git repo to an **Azure Repos** Git repo
> * Connect a local Git repo to a **GitHub** repo

For an overview of the Git workflow, see [Azure Repos Git tutorial](gitworkflow.md).


## Prerequisites for access to Azure Repos

[!INCLUDE [azure-repos-prerequisites](includes/azure-repos-prerequisites.md)]


## Create a local Git repo from a new solution

Create a local Git repo when you create a new Visual Studio solution.

#### [Visual Studio 2019](#tab/visual-studio-2019/)

Visual Studio 2019 doesn't support creating a new Git repo when creating a solution. Instead, create your Visual Studio solution, then follow the steps in [Create a local Git repo from an existing solution](#create-a-local-git-repo-from-an-existing-solution).


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier/)

[!INCLUDE [temp](includes/note-new-git-tool.md)]  

Create a new Git repo for your new Visual Studio solution by selecting **Create new Git repository** when creating the solution:

![Select Create new Git repository when creating a new solution](media/vscreategitrepo.png) 


#### [Git Command Line](#tab/command-line)

Git command line doesn't support creating a new Visual Studio solution. Instead, create your new solution using Visual Studio, then follow the steps in [Create a local Git repo from an existing solution](#create-a-local-git-repo-from-an-existing-solution).


***


## Create a local Git repo from an existing solution

Create a local Git repo to track file changes in your existing Visual Studio solution.

#### [Visual Studio 2019](#tab/visual-studio-2019/)

1. In **Solution Explorer**, right-click the solution name, or right-click any item in the **Folder** view of **Solution Explorer**, and then select **Create Git Repository**. Or, choose **Add to Source Control** on the status bar in the lower right-hand corner of Visual Studio, and then select **Git**. If you don't see these options, then your code is already in a Git repo.

   :::image type="content" source="media/creatingrepo/visual-studio-2019/common/create-git-repository-solution-explorer.png" border="true" alt-text="Screenshot of the 'Create Git repository' option in the Solution Explorer context menu in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/common/create-git-repository-solution-explorer-lrg.png":::

   Or, choose **Git > Create Git Repository** from the menu bar to launch the **Create a Git repository** window. If you don't see this option, then your code is already in a Git repo.

   :::image type="content" source="media/creatingrepo/visual-studio-2019/common/create-git-repository-git-menu.png" border="true" alt-text="Screenshot of the 'Create Git Repository' option in the Git menu from the menu bar of Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/common/create-git-repository-git-menu-lrg.png":::

2. This step only applies to the Visual Studio Git version control experience: in the **Create a Git repository** window, choose **Local only**, verify the local path is correct, and then choose **Create**.

   :::image type="content" source="media/creatingrepo/visual-studio-2019/git-experience/create-git-repo-window.png" border="true" alt-text="Screenshot of the 'Create a Git repository' window with the 'Local only' option selected in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/git-experience/create-git-repo-window-lrg.png":::

   **Team Explorer** doesn't launch the **Create a Git repository** window, and assumes you want a local Git repo.

You've now created a local Git repo in the Visual Studio solution folder and committed your code into that repo. Your local Git repo contains both your Visual Studio solution and Git resources.

:::image type="content" source="media/creatingrepo/visual-studio-2019/common/file-explorer-git-folder.png" border="true" alt-text="Screenshot of the Git folder, Git ignore file, and Git attributes file in Windows file explorer." lightbox="media/creatingrepo/visual-studio-2019/common/file-explorer-git-folder-lrg.png":::


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier/)

To create a repo from an existing solution not in version control, select the **Publish** button in the bottom-right of the lower status bar ![Visual Studio publish button](media/share-your-code-in-git-vs/visual-studio-2013-2015/publish-status-bar.png).
This creates a new Git repo in the same directory as your solution and opens up the **Publish** view in Team Explorer so you can [push](pushing.md) your code to Azure Repos or 
another remote Git repository.

![Publishing a solution to a new remote Git repository in Visual Studio Team Explorer](media/vspublish.gif)


#### [Git Command Line](#tab/command-line)

1. If you haven't already, [download and install Git](http://git-scm.com/download). When prompted during the install, enable [Git Credential Manager](set-up-credential-managers.md).

1. At the command prompt, go to the root folder that contains your existing Visual Studio solution and run the following commands. These commands create a local Git repo in the Visual Studio solution folder and commit your code into that repo.

    > [!div class="tabbedCodeSnippets"]
    ```Git CLI
    > git init
    > git add .
    > git commit -m "first commit"
    > git branch -m main
    ```


***


## Create a local Git repo in an empty folder


#### [Visual Studio 2019](#tab/visual-studio-2019/)

You can create a new local repo in an empty folder from **Team Explorer**.

1. Under **Local Git Repositories** in the **Connect** view of **Team Explorer**, choose **New**.

   :::image type="content" source="media/creatingrepo/visual-studio-2019/team-explorer/new-git-repo.png" border="true" alt-text="Screenshot of the new repository option in the 'Local Git Repositories' section of the 'Connect' view of 'Team Explorer' in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/team-explorer/new-git-repo-lrg.png":::

1. Enter a folder path where the repo will be created. The specified folder must be empty, or not exist. Choose **Create**.

   :::image type="content" source="media/creatingrepo/visual-studio-2019/team-explorer/create-new-git-repo.png" border="true" alt-text="Screenshot of the new repository path and Create button in the 'Local Git Repositories' section of the 'Connect' view of 'Team Explorer' in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/team-explorer/create-new-git-repo-lrg.png":::

1. You've now created a new local Git repo. To view the folder contents, right-click the new repo entry and select **Open in File Explorer**.

   :::image type="content" source="media/creatingrepo/visual-studio-2019/team-explorer/create-new-git-repo-entry.png" border="true" alt-text="Screenshot of the new repository entry and its context menu in the 'Local Git Repositories' section of the 'Connect' view of 'Team Explorer' in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/team-explorer/create-new-git-repo-entry-lrg.png":::

   Your new local Git repo only contains Git resources.

   :::image type="content" source="media/creatingrepo/visual-studio-2019/team-explorer/file-explorer-git-folder.png" border="true" alt-text="Screenshot of the new repository folder in Windows File explorer showing a .git folder, a .gitignore file, and a .gitattributes file." lightbox="media/creatingrepo/visual-studio-2019/team-explorer/file-explorer-git-folder-lrg.png":::


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier/)

1. Open the **Connect** view in Team Explorer by choosing **Projects** then **Manage Connections** from the context menu. 
2. Under **Local Git Repositories**, select **New** and enter a folder where the repo will be created. This directory must be empty.  
3. Select **Create** to create the repo.

   ![Creating a new local Git repository in Visual Studio Team Explorer](media/CreateNewRepoVS.png)</ol>


#### [Git Command Line](#tab/command-line/)

1. If you haven't already, [download and install Git](http://git-scm.com/download). When prompted during the install, enable [Git Credential Manager](set-up-credential-managers.md).

1. At the command prompt, go to the empty folder and run the following command to create a new local Git repo.

    > [!div class="tabbedCodeSnippets"]
    ```Git CLI
    > git init
    ```

1. When you've added files to the folder, add them to the Git repo by running the following commands.

    > [!div class="tabbedCodeSnippets"]
    ```Git CLI
    > git add .
    > git commit -m "first commit"
    > git branch -m main
    ```


***


<a name="remotes"></a>

## Connect a local Git repo to an **Azure Repos** Git repo

You can share your code with others by connecting your local Git repo to an **Azure Repos** Git repo.


#### [Visual Studio 2019](#tab/visual-studio-2019/)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison for publishing your work to an **Azure Repos** Git repo.

> [!NOTE]
> One advantage of connecting to a project through **Team Explorer** is you gain access to the Work Items hub. For an overview of **Team Explorer** features, see [Navigate in Visual Studio Team Explorer](../../user-guide/work-team-explorer.md).

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. In **Solution Explorer**, right-click the solution name, or right-click any item in the **Folder** view of **Solution Explorer** and then select **Push to Git service** to launch the **Create a Git repository** window.

       :::image type="content" source="media/creatingrepo/visual-studio-2019/git-experience/push-to-git-service-solution-explorer.png" border="true" alt-text="Screenshot of the 'Push to Git service' menu option in the Git menu on the menu bar in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/git-experience/push-to-git-service-solution-explorer-lrg.png":::

       Or, choose **Git > Push to Git service** from the menu bar to launch the **Create a Git repository** window.

       :::image type="content" source="media/creatingrepo/visual-studio-2019/git-experience/push-to-git-service-git-menu.png" border="true" alt-text="Screenshot of the 'Push to Git service' option in the in Visual Studio 2019 context menu." lightbox="media/creatingrepo/visual-studio-2019/git-experience/push-to-git-service-git-menu-lrg.png":::

    2. Open a browser and navigate to your **Azure DevOps** project by using a URL in the form of `https://dev.azure.com/<OrganizationName>/<ProjectName>`. If you don't have a project yet, [create one](/azure/devops/organizations/projects/create-project).<br>
    
    3. In your **Azure DevOps** project, [create](/azure/devops/repos/git/create-new-repo) an empty Git repo without a README file. Copy the clone URL from the **Clone Repository** popup.

       :::image type="content" source="media/creatingrepo/visual-studio-2019/common/azure-clone-repo-popup.png" border="true" alt-text="Screenshot of the 'Clone Repository' popup from the Azure DevOps project site." lightbox="media/creatingrepo/visual-studio-2019/common/azure-clone-repo-popup-lrg.png":::

    4. In the **Create a Git repository** window, choose **Existing remote** and enter the repo clone URL from the previous step, and then choose **Push**. For more information on how to create a new **Azure DevOps** repo, see [Create a new Git repo in your project](/azure/devops/repos/git/create-new-repo?view=azure-devops&preserve-view=true).

       :::image type="content" source="media/creatingrepo/visual-studio-2019/git-experience/create-git-repo-window-remote.png" border="true" alt-text="Screenshot of the 'Create a Git repository' window, with the URL of an empty Azure repo, in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/git-experience/create-git-repo-window-remote-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In the **Push to Azure Dev Ops Services** section of the **Synchronization** view in **Team Explorer**, select the **Publish Git Repo** button.

       :::image type="content" source="media/creatingrepo/visual-studio-2019/team-explorer/publish-git-repo-team-explorer.png" border="true" alt-text="Screenshot of the 'Push' view of 'Team Explorer' in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/team-explorer/publish-git-repo-team-explorer-lrg.png":::<br><br>

    2. Choose your **Azure DevOps** account, organization, and a repo name, and then select **Publish Repository**.

       :::image type="content" source="media/creatingrepo/visual-studio-2019/team-explorer/publish-git-repo-details-team-explorer.png" border="true" alt-text="Screenshot of the Azure DevOps account, organization, and repo name options and the 'Publish Repository' button in the 'Synchronization' view of 'Team Explorer' in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/team-explorer/publish-git-repo-details-team-explorer-lrg.png":::

       This step creates a new project in your **Azure DevOps** account with the same name that you selected for the repo. To create the repo in an existing project, select **Advanced** next to the **Repository name**, and then choose a project.

       Your code is now in a **Azure Repos** Git repo. You can view your code on the web by selecting **See it on the web**.

       :::image type="content" source="media/creatingrepo/visual-studio-2019/team-explorer/view-git-repo-on-web.png" border="true" alt-text="Screenshot of the 'See it on the web' link in the 'Home' view of 'Team Explorer' in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/team-explorer/view-git-repo-on-web-lrg.png":::

   :::column-end:::
:::row-end:::

[!INCLUDE [project-urls](../../includes/project-urls.md)]


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier/)

To connect a local repository to a hosted remote Git repository to share your work, go the **Settings** page in Team Explorer. Select **Repository Settings**.
Under **Remotes**, select **Add**.

![Add a remote for a repo in Visual Studio Team Explorer](media/add_remote_vs.png)

Enter `origin` in the **Name** field and enter the [clone URL](clone.md#clone_url) for your repo in the **Fetch** field. 
Make sure that **Push matches fetch** is checked and select **Save**. 


#### [Git Command Line](#tab/command-line/)

::: moniker range="azure-devops"
> [!NOTE]
> You can also create an **Azure Repos** Git repo from the command line by using the [Azure CLI](/cli/azure/repos?view=azure-cli-lates&preserve-view=truet#az-repos-create).

::: moniker-end

1. Open a browser and navigate to your **Azure DevOps** project using a URL in the form of `https://dev.azure.com/<OrganizationName>/<ProjectName>`. If you don't have a project yet, [create one](/azure/devops/organizations/projects/create-project).

1. In your **Azure DevOps** project, [create](/azure/devops/repos/git/create-new-repo) an empty Git repo without a README file. Copy the clone URL from the **Clone Repository** popup.

    :::image type="content" source="media/creatingrepo/visual-studio-2019/common/azure-clone-repo-popup.png" border="true" alt-text="Screenshot of the 'Clone Repository' popup from the Azure DevOps project site.":::

1. To publish your local commit to **Azure repos**, run the following commands at the command prompt in your local git repo folder, using the clone URL from the previous step.

    > [!div class="tabbedCodeSnippets"]
    ```Git CLI
    > git init 
    > git remote add origin <clone URL> 
    > git add .
    > git status   
    > git commit -m "initial commit"  
    > git push -u origin main 
    ```

   Your code is now published to the `main` branch of then **Azure Repos** Git repo.

[!INCLUDE [project-urls](../../includes/project-urls.md)]


* * *


## Connect a local Git repo to a **GitHub** repo

You can also share your code with others by connecting your local Git repo to a **GitHub** repo.


#### [Visual Studio 2019](#tab/visual-studio-2019/)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably. Below, we provide a side-by-side comparison for publishing your work to a **GitHub** repo.

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. In **Solution Explorer**, right-click the solution name, or right-click any item in the **Folder** view of **Solution Explorer**, and then select **Push to Git service** to launch the **Create a Git repository** window.

       :::image type="content" source="media/creatingrepo/visual-studio-2019/git-experience/push-to-git-service-solution-explorer.png" border="true" alt-text="Screenshot of the 'Push to Git service' menu option in the Git menu on the menu bar in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/git-experience/push-to-git-service-solution-explorer-lrg.png":::

       Or, choose **Git > Push to Git service** from the menu bar to launch the **Create a Git repository** window.

       :::image type="content" source="media/creatingrepo/visual-studio-2019/git-experience/push-to-git-service-git-menu.png" border="true" alt-text="Screenshot of the 'Push to Git service' option in the in Visual Studio 2019 context menu." lightbox="media/creatingrepo/visual-studio-2019/git-experience/push-to-git-service-git-menu-lrg.png":::

    2. In the **Create a Git repository** window, choose **GitHub**, select your **GitHub** account, owner name, and a new repo name, and then choose **Push**.

       :::image type="content" source="media/creatingrepo/visual-studio-2019/git-experience/create-git-repo-window-remote-github.png" border="true" alt-text="Screenshot of the 'Create a Git repository' window, with the URL of an empty GitHub repo, in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/git-experience/create-git-repo-window-remote-github-lrg.png":::

       This step creates a new repo in your **GitHub** account with content from your local repo.

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In the **Publish to GitHub** section of the **Synchronization** view in **Team Explorer**, select your **GitHub** account, owner name, and a new repo name, and then choose **Publish**.

       :::image type="content" source="media/creatingrepo/visual-studio-2019/team-explorer/publish-github-repo-details-team-explorer.png" border="true" alt-text="Screenshot of the GitHub account, name, and repo name options and the 'Publish' button in the 'Synchronization' view of 'Team Explorer' in Visual Studio 2019." lightbox="media/creatingrepo/visual-studio-2019/team-explorer/publish-github-repo-details-team-explorer-lrg.png":::

       This step creates a new repo in your **GitHub** account with content from your local repo.

   :::column-end:::
:::row-end:::


#### [Visual Studio 2017 & earlier](#tab/visual-studio-2017-earlier/)

To connect a local repository to a hosted remote Git repository to share your work, go the **Settings** page in Team Explorer. Select **Repository Settings**.
Under **Remotes**, select **Add**.

![Add a remote for a repo in Visual Studio 2017 Team Explorer](media/creatingrepo/visual-studio-2017/team-explorer/add-remote-repo.png)

Enter `origin` in the **Name** field and enter the [clone URL](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository) for your repo in the **Fetch** field. 
Make sure that **Push matches fetch** is checked and select **Save**. 


#### [Git Command Line](#tab/command-line/)

> [!NOTE]
> You can also create a **GitHub** repo from the command line by using the [GitHub CLI](https://cli.github.com/manual/gh_repo_create).

1. Open a browser and navigate to your **GitHub** account. If you don't have a **GitHub** account yet, [create one](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account).

1. In your **GitHub** account, [create](https://docs.github.com/en/get-started/quickstart/create-a-repo) an empty Git repo without added files. Copy the clone URL from the **Quick setup** page.

    :::image type="content" source="media/creatingrepo/visual-studio-2019/common/github-clone-repo.png" border="true" alt-text="Screenshot of the new repo 'Quick setup' page on the GitHub site.":::

1. To publish your local commit to **GitHub**, run the following commands at the command prompt in your local git repo folder, using the clone URL from the previous step.

    > [!div class="tabbedCodeSnippets"]
    ```Git CLI
    > git remote add origin <clone URL>
    > git push -u origin main
    ```

   Your code is now published to the `main` branch of your **GitHub** repo.


* * *


## Next steps

> [!div class="nextstepaction"]
> [Save work with commits](commits.md)


## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
