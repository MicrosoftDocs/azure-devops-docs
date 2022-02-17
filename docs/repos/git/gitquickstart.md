---
title: Get started with Git and Visual Studio 
titleSuffix: Azure Repos
description: Learn how to get started developing your code with Azure Repos, Visual Studio, and Git command-line.
ms.assetid: d7dcb364-056f-421b-8896-0304cddf12fe
ms.technology: devops-code-git 
ms.topic: conceptual
ms.date: 12/10/2021
monikerRange: '<= azure-devops'
---

# Get started with Git in Azure Repos

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)] 

Get started with developing your code using Azure Repos and Git repositories. You can use Visual Studio or Git commands to clone a repository, define local branches, commit and push changes, and sync with others. If you need to create or import a repository, see [Create a new Git repo in your project](create-new-repo.md) or [Import a Git repository](import-git-repository.md).

>[!NOTE]
>This article describes how to use Visual Studio to manage Azure Repos Git repositories. Using similar procedures, you can use Visual Studio to manage GitHub repositories. To clone a GitHub repository, get the URL as described in [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

For an overview of the Git workflow, see [Azure Repos Git tutorial](gitworkflow.md).

[!INCLUDE [temp](includes/note-new-git-tool.md)]


<a name="prerequisites"></a>

## Prerequisites

[!INCLUDE [azure-repos-prerequisites](includes/azure-repos-prerequisites.md)]

To learn more about permissions and access, see [Default Git repository and branch permissions](../../organizations/security/default-git-permissions.md) and [About access levels](../../organizations/security/access-levels.md).


<a name="clone"></a>

## Get your code

You can [clone](clone.md) a remote Git repository to create a local copy of it. Cloning creates both a copy of the source code for you to work with and version control information so Git can manage the source code.

If you prefer to create a local repository without cloning, see [Create a new Git repo](creatingrepo.md). After creating your local repository you can proceed to [commit](#commit), [share](#push), and [sync](#pull) your work.

#### [Visual Studio 2019](#tab/visual-studio-2019)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. You can exercise Git features from either interface interchangeably. Below, we provide a side-by-side comparison for cloning a repository.

> [!NOTE]
> One advantage of connecting to a project through **Team Explorer** is you gain access to the Work Items hub. For an overview of **Team Explorer** features, see [Navigate in Visual Studio Team Explorer](../../user-guide/work-team-explorer.md).

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. From the **Git** menu on the menu bar, choose **Clone Repository...**

      :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/clone-repo.png" border="true" alt-text="Screenshot of the 'Clone Repository' option in the Git menu in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/clone-repo-lrg.png":::

    2. In the **Clone a repository** window, enter the remote repo location and the folder path for the cloned repo. If you don't know the remote repo location, select **Azure DevOps** from **Browse a repository** options.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/specify-repo.png" border="true" alt-text="Screenshot of the 'Clone Repository' window in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/specify-repo-lrg.png":::

    3. Select **Clone**. After you’ve cloned a Git repository, Visual Studio detects the repository and adds it to your list of Local Repositories in the Git menu.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/local-repositories.png" border="true" alt-text="Screenshot of the 'Local Repositories' option in the Git menu in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/local-repositories-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select **Connect** to open the **Connect** page, and then choose **Manage Connections** > **Connect to Project**.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/manage-connections.png" border="true" alt-text="Screenshot of the 'Connect to a Project' link in Team Explorer in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/manage-connections-lrg.png":::

    2. In the **Connect to a Project** window, choose the repo you want to clone and select **Clone**. If you don't see your repo, select **Add Azure DevOps Server** to add a server that hosts a repo. You can filter the list to find your repo.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/connect-add-server.png" border="true" alt-text="Screenshot of the 'Connect to a Project' window in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/connect-add-server-lrg.png":::

    3. Verify the location for the cloned repo on your computer, and then select **Clone**.

   :::column-end:::
:::row-end:::

[!INCLUDE [project-urls](../../includes/project-urls.md)]


#### [Visual Studio 2017](#tab/visual-studio-2017)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

1. In Team Explorer, select **Connect** to open the **Connect** page, and then choose **Manage Connections** > **Connect to Project**.

   ![Cloning Azure DevOps Server Git repositories in Visual Studio](media/gitquickstart/visual-studio-2017/manage-connections.png) 

1. In **Connect to a Project**, select the repo you want to clone and select **Clone**. If you don't see your repo, select **Add Azure DevOps Server** to add a server that hosts a repo. You can filter the list to find your repo.

   ![Cloning a Git Repository from a connected organization in Azure Repos](media/gitquickstart/visual-studio-2017/connect-add-server.png)

   [!INCLUDE [project-urls](../../includes/project-urls.md)]

1. Verify the location of the cloned repo on your computer and select **Clone**.

 
#### [Visual Studio 2015](#tab/visual-studio-2015)

1. In Team Explorer, open up the Connect page by choosing **Projects and My Teams** then **Manage Connections**    

   ![Cloning Git repositories in Visual Studio](media/manageConnections.png) 

2. Choose **Connect**, select your organization, choose the projects you want to work on, then
click **Connect**.   

3. Right click on the project and click **Clone...**. Then enter a local folder on your drive to store the downloaded code.      

   ![Cloning a Git Repository from a connected organization in Azure DevOps](media/cloneVsRepo.png)

#### [Visual Studio 2013](#tab/visual-studio-2013)


1. Go to your team's project page (`https://dev.azure.com/{yourorganization}/{yourteamproject}`) and then open Visual Studio to connect to your project.  Click **Allow** if prompted to open Visual Studio.

	![Click Home, then Open in Visual Studio](media/get-started/GoHomeOpenInVisualStudio.png)

2. Sign in to Azure DevOps Services from Visual Studio.

3. Clone the repository to your computer.

	![Click the Clone Repository link](media/get-started/VSClone1.png)
	
4. The clone URL is automatically populated and a default local path is provided.  Change the local path to the location where you want to store your repo.  Click **Clone** to start copying the repo locally.

	![Click the Clone button](media/get-started/VSClone2.png)  


#### [Git Command Line](#tab/command-line)

1. [Download and install Git](http://git-scm.com/download) and the [Git Credential Manager](set-up-credential-managers.md) for your platform.

1. Open the Azure DevOps Services web portal in your browser by going to `https://<your account name>.visualstudio.com`.

1. Open the Azure DevOps Services web portal in your browser by navigating to `https://<your account name>.visualstudio.com` and find your Git repository. Copy the clone URL from the **Clone** pop-up.   

   ![Finding the Clone URL for your Git Repository in Azure Repos](media/gitquickstart/visual-studio-2017/clone-url.png)

   [!INCLUDE [project-urls](../../includes/project-urls.md)]

1. At the command prompt, go to the folder where you want the code stored on your local computer.

1. From the command prompt, run `git clone` followed by the clone URL, as shown in the following example.

	> [!div class="tabbedCodeSnippets"]
	```Git CLI
	> git clone https://dev.azure.com/fabrikam-fiber/_git/FabrikamFiber
	```

   Git downloads and creates your own copy of the code in a new folder for you.

* * *
<a name="commit"></a>

## Commit your work

Git [branches](./create-branch.md) isolate your changes from other work in the project.
The recommended [Git workflow](gitworkflow.md) is to use a new branch for every feature or fix you work on.
You make [commits](commits.md) in your local Git repository to save your changes on that branch.


#### [Visual Studio 2019](#tab/visual-studio-2019)

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. From the **Git** menu on the menu bar, choose **New Branch...** to open the **Create a new branch** window.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/branches.png" border="true" alt-text="Screenshot of the 'New Branch' option in the Git menu in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/branches-lrg.png":::

    2. In the **Create a new branch** window, enter a descriptive branch name to let others know what work the branch contains. By default, Visual Studio creates your new branch from the current branch. The **Checkout branch** checkbox automatically switches you to the newly created branch. Select **Create**.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/new-local-branch.png" border="true" alt-text="Screenshot of the 'Create a new branch' window in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/new-local-branch-lrg.png":::

    3. Add a README.md file to your cloned repo. In Solution Explorer, you can browse the repo contents using **Folder View** or open Visual Studio solutions in the repo. Git tracks changes made both inside and outside of Visual Studio.

    4. When you're satisfied with your changes, save them in Git using a commit. In the **Git Changes** window, enter a message that describes the changes, and then select **Commit All**. **Commit All** commits unstaged changes and skips the staging area. You can choose to stage all files before committing by selecting the stage all + (plus) button at the top of the Changes section in the **Git Changes** window.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/changes.png" border="true" alt-text="Screenshot of the 'Commit All' button in the 'Git Changes' window in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/changes-lrg.png":::

      Select the commit information link to get further details about the commit.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/commit-created-locally.png" border="true" alt-text="Screenshot showing the commit information link in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/commit-created-locally-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select the **Home** button and choose **Branches**.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/branches.png" border="true" alt-text="Screenshot showing the Branches option in Team Explorer in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/branches-lrg.png":::

    2. Right-click the default branch, often named `main`, and then choose **New Local Branch From...**

      :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/new-local-branch-menu.png" border="true" alt-text="Screenshot of the 'New Local Branch From' menu option in the context menu of the main branch in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/new-local-branch-menu-lrg.png":::

    3. Enter a descriptive branch name to let others know what work the branch contains. Select **Create Branch**.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/new-local-branch.png" border="true" alt-text="Screenshot of the branch name text and 'Create Branch' button in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/new-local-branch-lrg.png":::

    4. Add an README.md file to your cloned repo. From the **Home** view of **Team Explorer**, you can browse the repo contents using **Show Folder View** or open Visual Studio solutions in the repo. Git tracks changes made both inside and outside of Visual Studio.
    
    5. When you're satisfied with your changes, save them in Git using a commit. Open the **Changes** view of **Team Explorer** by selecting the **Home** button and choosing **Changes**.
    
      :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/changes.png" border="true" alt-text="Screenshot of the Changes option in Team Explorer in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/changes-lrg.png":::

    6. Enter a message that describes the commit, and then select **Commit All**.

      :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/commit-all.png" border="true" alt-text="Screenshot of commit message text and 'Commit All' button in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/commit-all-lrg.png":::

  :::column-end:::
:::row-end:::

>[!NOTE]
>If you have multiple files and you don't want to commit them all, you can right-click each file and choose **Stage**. When you've staged all the files you'd like to commit, select **Commit Staged**. **Commit Staged** replaces **Commit All** when you manually stage your changes.
>
>:::row:::
>  :::column span="":::
>
>    **Visual Studio Git** <br>
>
>    :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/stage-changes.png" border="true" alt-text="Screenshot of the Stage option in the 'Git Changes' window in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/stage-changes-lrg.png":::
>
>  :::column-end:::
>  :::column span="":::
>
>    **Visual Studio Team Explorer** <br>
>
>    :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/stage-changes.png" border="true" alt-text="Screenshot of the Stage option in the changed-file context menu in Team Explorer in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/stage-changes-lrg.png":::
>
>  :::column-end:::
>:::row-end:::


#### [Visual Studio 2017](#tab/visual-studio-2017)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

1. In **Team Explorer**, select the **Home** button and choose **Branches**. 

   ![Screenshot showing Branches in Team Explorer.](media/gitquickstart/visual-studio-2017/branches.png)

1. Right-click the main branch and choose **New Local Branch From**.

   ![Creating a Local Branch off the Main branch in Visual Studio](media/gitquickstart/visual-studio-2017/new-local-branch-menu.png)  

1. Enter a descriptive branch name for your work to remind you and others what kind of work is in the branch. Select **Create Branch**.

   ![Enter a descriptive branch name and select Create Branch.](media/gitquickstart/visual-studio-2017/new-local-branch.png) 

1. Make changes to your files in the cloned repo. From the Team Explorer **Home** view, you can open Visual Studio solutions in the repo or browse the repo contents using **Show Folder View**. Git keeps track of changes made to your code both inside and outside of Visual Studio.

1. When you're satisfied with the changes, save them in Git using a commit. Open the **Changes** view from Team Explorer by selecting the **Home** button and choosing **Changes**.

   ![Screenshot that shows opening the Changes view.](media/gitquickstart/visual-studio-2017/changes.png)

1. Enter a message that describes the commit, and select **Commit All**.

   ![Commit All](media/gitquickstart/visual-studio-2017/commit-all.png)

   >[!NOTE]
   >If you have multiple files and you don't want to commit them all, you can right-click each file and choose **Stage**. When you have staged all the files you would like to commit, select **Commit Staged**. **Commit Staged** replaces **Commit All** when you manually stage your changes before the commit.
   >
   >![Stage files](media/gitquickstart/visual-studio-2017/stage-changes.png)

#### [Visual Studio 2015](#tab/visual-studio-2015)


1. In Team Explorer, click the drop down and choose **Branches**. Right click the main branch and choose **New Local Branch From...**    

   ![Creating a Local Branch off the main branch in Visual Studio](media/newVSBranch.png)  


   Choose a descriptive branch name for your work to remind you and others what kind of work is in the branch. 

2. Make changes to your files in the cloned repo. From the Team Explorer **Home** view, you can open up Visual Studio solutions in the repo or browse the repo contents using the  **Show Folder View** link. Git keeps track of changes made to your code both inside and outside of Visual Studio.

3. When you are satisfied with the changes, save them in Git using a commit. Open up the 
   **Changes** view from Team Explorer. Stage the changes to add to your next commit by right-clicking the files and selecting **Stage**, add a message describing the commit, then select **Commit Staged**.    

   ![Committing changes to a Git branch in Visual Studio](media/vs_update2_changes.png)

#### [Visual Studio 2013](#tab/visual-studio-2013)


1. Go to your team's project page (`https://dev.azure.com/{yourorganization}/{yourteamproject}`) and then open Visual Studio to connect to your project.  Click **Allow** if prompted to open Visual Studio.

	![Click Home, then Open in Visual Studio](media/get-started/GoHomeOpenInVisualStudio.png)

2. Sign in to Azure DevOps from Visual Studio.

3. Clone the repository to your computer.

	![Click the Clone Repository link](media/get-started/VSClone1.png)
	
4. The clone URL is automatically populated and a default local path is provided.  Change the local path to the location where you want to store your repo.  Click **Clone** to start copying the repo locally.

	![Click the Clone button](media/get-started/VSClone2.png)  


#### [Git Command Line](#tab/command-line)

1. Create a branch where you make your changes to the code. If you're collaborating with someone using a branch they've created, you can skip to the following `git checkout` step.

	> [!div class="tabbedCodeSnippets"]
	```Git CLI
	> git branch ReadMeFix
    ```

   Choose a descriptive branch name for your work to remind you and others what kind of work is in the branch.

1. Check out your branch so you can start working in it.

	> [!div class="tabbedCodeSnippets"]
	```Git CLI
	> git checkout ReadMeFix
    ```

   You can also use the `checkout` command to start working on a branch that other team members are already working in.

1. Make changes using your favorite tools on the code.

1. When you're satisfied with the changes, even if you aren't ready to share the work, save them in Git using a commit. Your changes won't be shared until you push them, as described in the following section.

	> [!div class="tabbedCodeSnippets"]
	```Git CLI
	> git commit -a -m "Descriptive message"
    ```

   This command saves your changes locally to a new [commit](commits.md) in Git. Make sure to give the commit a short message that describes your changes after `-m`.

* * *
<a name="push"></a>

## Share your changes

After you've added one or more commits to a branch and you're ready to share those changes with others, [push](pushing.md) your commits so others can see them.

Once you've pushed your commits, you can create a [pull request](pull-requests.md). A pull request lets others know you'd like to have your changes reviewed. After approval, a pull request typically adds your changes to the default branch of the remote repository.


#### [Visual Studio 2019](#tab/visual-studio-2019)

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    1. In the **Git Changes** window, select the up-arrow push button to push your commit.

       :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-changes-window.png" border="true" alt-text="Screenshot of the up-arrow push button in the 'Git Changes' window of Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-changes-window-lrg.png":::

       Or, you can push your changes from the **Git Repository** window. To open the **Git Repository** window, select the outgoing / incoming link in the **Git Changes** window.

       :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-repositories-window.png" border="true" alt-text="Screenshot of the 'outgoing / incoming' link in the 'Git Changes' window, and the Push link in the 'Git Repository' window of Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-repositories-window-lrg.png":::

       Or, you can push your changes from the **Git** menu on the menu bar.

       :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-menu.png" border="true" alt-text="Screenshot of the Push option from the Git menu in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/push-commit-git-menu-lrg.png":::

    2. Create a pull request so that others can review your changes. If you've just pushed your changes from the **Git Changes** window, you can select the **Create a Pull Request** link to open a web browser where you can create a new pull request in the Azure Repos web portal.

       :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-git-changes-window.png" border="true" alt-text="Screenshot of the 'Create a Pull Request' link in the 'Git Changes' window in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-git-changes-window-lrg.png":::
       
       Or, if you've just pushed your changes from the **Git Repository** window, you can select the **Create a Pull Request link** at the top of that window.

       :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-git-repository-window.png" border="true" alt-text="Screenshot of the 'Create a Pull Request' link in the 'Git Repository' window in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-git-repository-window-lrg.png":::
       
       Or, you can right-click any branch in the **Git Repository** window and select **Create Pull Request**.

       :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-from-branch-git-repository-window.png" border="true" alt-text="Screenshot of the 'Create a Pull Request' menu option from the branch context menu in the 'Git Repository' window in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/create-pull-request-from-branch-git-repository-window-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select **Home** and then choose **Sync** to open **Synchronization**.
    
       :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/sync.png" border="true" alt-text="Screenshot of the Sync option in Team Explorer in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/sync-lrg.png":::
    
       You can also go to the **Synchronization** view from **Changes** by choosing **Sync** immediately after making a commit.
    
       :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/commit-created-locally.png" border="true" alt-text="Screenshot of the Sync link that appears after making a commit in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/commit-created-locally-lrg.png":::
    
    2. In the **Synchronization** view, choose **Push** to upload your commit to the remote repo. If this is your first push to the repo, you'll see the message: `The current branch does not track a remote branch...`, which lets you know that your commit was pushed to a new branch on the remote repo and that future commits pushed from the current branch will be uploaded to that remote branch.
    
       :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/push-to-origin.png" border="true" alt-text="Screenshot of the Push link in the Synchronization view of Team Explorer in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/push-to-origin-lrg.png":::

    3. Create a pull request so that others can review your changes. Open **Pull Requests** in **Team Explorer** by selecting **Home** and choosing **Pull Requests**.
    
       :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/pull-requests.png" border="true" alt-text="Screenshot of the 'Pull Requests' option in Team Explorer in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/pull-requests-lrg.png":::
    
    4. In **Pull Requests**, you can view pull requests opened by you, assigned to you, and you can create new pull requests. Select **New Pull Request** to open a web browser where you can create a new pull request in the Azure Repos web portal.
    
       :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/new-pull-request.png" border="true" alt-text="Screenshot of the 'New Pull Request' link in the Pull Requests view of Team Explorer in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/new-pull-request-lrg.png":::

  :::column-end:::
:::row-end:::
    
When the pull request opens in the Azure Repos web portal, verify your source and destination branches. In this example, we want to merge commits from the `add-readme-file` branch into the `main` branch. Enter a title and optional description, specify any reviewers, optionally associate any work items, and then select **Create**.

:::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/create-pull-request.png" border="true" alt-text="Screenshot of the 'New Pull Request' form in the Azure Repos web portal.":::

For more information on pull requests, see the [Pull request](pull-requests.md) tutorial.


#### [Visual Studio 2017](#tab/visual-studio-2017)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

1. In Team Explorer, select **Home** and then choose **Sync** to open **Synchronization**.

   ![Synchronization](media/gitquickstart/visual-studio-2017/sync.png)

   You can also go to the **Synchronization** view from **Changes** by choosing **Sync** immediately after making a commit.

   ![Choose Sync immediately after making a commit.](media/gitquickstart/visual-studio-2017/commit-created-locally.png)

1. Select **Push** to share your commit with the remote repository.

   ![Push](media/gitquickstart/visual-studio-2017/push-to-origin.png)

   If this push is your first to the repository, you'll see the following message: `The current branch does not track a remote branch. Push your changes to a new branch on the origin remote and set the upstream branch.` Select **Push** to push your changes to a new branch on the remote repository and set the upstream branch. The next time you push changes, you'll see the list of commits.

1. Create a pull request so that others can review your changes. Open **Pull Requests** in Team Explorer by selecting **Home** and choosing **Pull Requests**.

   ![Pull Requests](media/gitquickstart/visual-studio-2017/pull-requests.png)

1. In **Pull Requests**, you can view pull requests opened by you, assigned to you, and you can create new pull requests. Select **New Pull Request** to open a web browser where you can create the new pull request in the Azure Repos web portal.

   ![Select New Pull Request.](media/gitquickstart/visual-studio-2017/new-pull-request.png)

1. Verify your branches. In this example, we want to merge the commits from the `ReadMeFix` branch into the `main` branch. Enter a title and optional description, specify any reviewers, optionally associate any work items, and then select **Create**.

   ![Create a Pull Request in the web portal](media/gitquickstart/visual-studio-2017/create-pull-request.png)

   For more information on pull requests, see the [pull request](pull-requests.md) tutorial.


#### [Visual Studio 2015](#tab/visual-studio-2015)


1. Open up the **Synchronization** view in Team Explorer. You can see the outgoing commits and share them by clicking **Push** if you are working with a branch that is already shared, or **Publish** if you are working with a newly created local branch.    

   ![Sharing Code in Git using Push in Visual Studio](media/newVsPush.png) 

2. Create a pull request so that others can review your changes. Open **Pull Requests** in Team Explorer, and click **New Pull Request**. Verify the remote branch to merge the changes into, such as `my-feature`.   

   ![Create a Pull Request in Visual Studio](media/newVsPullRequest.png)

3. You can review comments made in your [pull request](pull-requests.md) in a web browser on the Azure Repos pull request page. Once all changes are approved by the
   team, you complete the pull request through the web browser.

#### [Visual Studio 2013](#tab/visual-studio-2013)

To share the changes in your topic branch, you'll need to publish it to the server.

1. Click on the **Sync** link in the successful commit notification to open the Synchronization page.

	![Click Sync to open the Sync page](media/get-started/VSCommitSyncMessage.png)
	
2. On the Sync page, click on the **Publish** link to push the changes on your topic branch to the server.

	![Click Publish to push your changes](media/get-started/VSSyncPublish.png)


#### [Git Command Line](#tab/command-line)

1. Push your branch so that others can see the changes you've saved.

	> [!div class="tabbedCodeSnippets"]
	```Git CLI
	> git push -u origin ReadMeFix
    ```

1. Open the project in the web portal and browse to your repository under the **Code** tab. Select **Create a pull request** to create a pull request for the branch that you pushed.

   ![Creating a new Pull Request in Azure Repos](media/gitquickstart/visual-studio-2017/create-pull-request-web-portal.png)

1. Verify your branches. In this example, we want to merge the commits from the `ReadMeFix` branch into the `main` branch. Enter a title and optional description, specify any reviewers, optionally associate any work items, and select **Create**.

   ![Create a Pull Request in the web portal](media/gitquickstart/visual-studio-2017/create-pull-request.png)

1. Once the changes are approved, complete the pull request.
   A complete pull request adds your changes from the branch into the main branch of the code.

   For more information on pull requests, see the [pull request](pull-requests.md) tutorial.

* * *


<a name="pull"></a>

## Sync with others

You can keep your local branches in sync with their remote counterparts by [pulling](pulling.md) commits created by others. Although Git is good at merging incoming changes with your changes, sometimes you might have to [resolve a merge conflict](merging.md). While you're working on your feature branch, it's a good idea to periodically switch to your `main` branch and pull new commits to keep it current with the remote `main` branch.


#### [Visual Studio 2019](#tab/visual-studio-2019)

:::row:::
  :::column span="":::

    **Visual Studio Git** <br><br>

    In the **Git Changes** window, you can keep your local branch current with its remote counterpart by using the **Fetch**, **Pull**, **Push**, and **Sync** buttons.

    :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/sync-git-changes-window.png" border="true" alt-text="Screenshot of the Fetch, Pull, Push and Sync buttons in the 'Git Changes' window of Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/sync-git-changes-window-lrg.png":::

    From left to right in the previous screenshot, the button controls are:

    - **Fetch** downloads remote commits that aren't in your local branch, but doesn't merge them.
    - **Pull** performs a fetch and then merges the downloaded commits into your local branch.
    - **Push** uploads your unpushed commits to the remote repository, which adds them to the corresponding remote branch.
    - **Sync** performs a **Pull** then a **Push**.

    You can also select **Fetch**, **Pull**, **Push**, and **Sync** from the Git menu.

    :::image type="content" source="media/gitquickstart/visual-studio-2019/git-experience/sync-git-menu.png" border="true" alt-text="Screenshot of the Fetch, Pull, Push and Sync options in the Git menu in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/git-experience/sync-git-menu-lrg.png":::

  :::column-end:::
  :::column span="":::

    **Visual Studio Team Explorer** <br><br>

    1. In **Team Explorer**, select **Home** and choose **Sync** to open **Synchronization**.

       :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/sync.png" border="true" alt-text="Screenshot of the Sync option in 'Team Explorer' in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/sync-lrg.png":::

    2. You can download the latest changes to your branch using the **Pull** link. There are two **Pull** links, one near the top and one in the **Incoming Commits** section. You can use either because they both do the same thing.

       :::image type="content" source="media/gitquickstart/visual-studio-2019/team-explorer/incoming-commits.png" border="true" alt-text="Screenshot of the Pull link in the Synchronization view of Team Explorer in Visual Studio 2019." lightbox="media/gitquickstart/visual-studio-2019/team-explorer/incoming-commits-lrg.png":::

  :::column-end:::
:::row-end:::


#### [Visual Studio 2017](#tab/visual-studio-2017)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

1. In Team Explorer, select **Home** and choose **Sync** to open **Synchronization**.

   ![Synchronization with others.](media/gitquickstart/visual-studio-2017/sync.png)

1. You can download the latest changes to your branch using the **Pull** link. There are two **Pull** links, one near the top and one in the **Incoming Commits** section. You can use either because they both do the same thing.

   ![Download changes to your local repo](media/gitquickstart/visual-studio-2017/incoming-commits.png)

#### [Visual Studio 2015](#tab/visual-studio-2015)


1. Open up the **Sync** view in Team Explorer. You can download the latest changes to the branch you are on using the "Pull" link.   

   ![Using Pull to download changes in Git in Visual Studio](media/newVsPull.png)

#### [Visual Studio 2013](#tab/visual-studio-2013)

1. Open up the **Sync** view in Team Explorer. You can download the latest changes to the branch you are on using the "Pull" link.   

   ![Using Pull to download changes in Git in Visual Studio](media/newVsPull.png)


#### [Git Command Line](#tab/command-line)

1. Switch to the branch where you want to download the changes others have made. 

	> [!div class="tabbedCodeSnippets"]
	```Git CLI
	> git checkout ReadMeFix
    ```

    In this example, you pull changes made by others on your team to the `ReadMeFix` branch to your local copy of the branch.

1. Pull the changes made by others to your local branch.

	> [!div class="tabbedCodeSnippets"]
	```Git CLI
	> git pull
    ```

   Git downloads the changes and merges them with your own changes into your local branch.

* * *

## Related articles

- [Frequently Asked Git Questions](howto.yml)
- [Git experience in Visual Studio](/visualstudio/version-control/git-with-visual-studio)
- [Side-by-side comparison of Git and Team Explorer](/visualstudio/version-control/git-team-explorer-feature-comparison)
