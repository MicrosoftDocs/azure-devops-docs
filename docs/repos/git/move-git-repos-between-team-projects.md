---
title: Move Git Repositories Between Projects
description: Explore how to move Git repositories between team projects with full-fidelity history.
ms.topic: how-to
ms.service: azure-devops-repos
ms.assetid: 5CB114EA-EC65-4FF8-BC71-1B7E4B15D921
ms.date: 09/28/2021
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Move Git repositories to another project with full-fidelity history

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

![Git logo](./media/move-git-repos-between-team-projects/git.png)

If you plan to consolidate multiple Azure DevOps projects into one, you're probably wondering what you should do with all the repositories:

* Should you move projects or merge them?
* Should you keep the history or just the most recent projects?

## Prerequisites

[!INCLUDE [azure-repos-prerequisites](includes/azure-repos-prerequisites.md)]

## What's the scenario?

As shown, you need to move the `MigrationDemo` repo from `FabrikamOld` to the new `Fabrikam` team project.

> ![Screenshot that shows the move repo scenario.](./media/move-git-repos-between-team-projects/MoveRepo-Visual.png)

## How do I move?

You have two options for moving, as outlined here. Import functionality is easier, but it's available only in Azure DevOps Services and Team Foundation Server 2017 Update 1 and later.

### Use Import Git repository functionality

When you use the Import Repository feature, you can import a Git repository to your team project from Team Foundation Server, Azure Repos, or any other Git source code provider like GitHub. For more information, see [Import a Git repository to a project](import-git-repository.md).

### Manually migrate the Git repo

#### Create an empty Git repo

From the CODE Explorer, select the repo name. Select **New Repository** from the list, select **Git** as the type, and give it a name.

![Screenshot that shows creating a new repo.](./media/move-git-repos-between-team-projects/MoveRepo-NewRepo.png)

After the repo is created, step-by-step instructions appear to help you get started. Copy the clone URL to your clipboard.

![Screenshot that shows the pane to add new repo information.](./media/move-git-repos-between-team-projects/MoveRepo-NewRepoInfo.png)

> [!IMPORTANT]
> Clear the **Automatically create links for work items mentioned in a commit comment** option if you plan to import from a different project collection or a foreign Git repository. Otherwise, Azure DevOps associates the commits to existing work items of unrelated team projects in the team project collection.

![Screenshot that shows new repo options.](./media/move-git-repos-between-team-projects/MoveRepo-Warning.png)

#### Mirror the repository

Switch to a developer command prompt and path to your local (source) repository for the `MigrationDemo` repo in `FabrikamOld`. Run the `git clone --mirror` command by using the clone URL. The command line is `git clone --mirror https://demo-fabrikam.visualstudio.com/DefaultCollection/Fabrikam/_git/MigrationDemo`.

The `clone --mirror` command is redundant in this case because the remote repository is bare. It's used here as a safe and easy way to set up the remote.

![Screenshot that shows that the Git clone command is done.](./media/move-git-repos-between-team-projects/MoveRepo-Mirror-Done.png)

#### Push the repo

Run the `git push` command to push the local changes to the remote (target) repo.

![Screenshot that shows that the Git push command is done.](./media/move-git-repos-between-team-projects/MoveRepo-Push-Done.png)

The `--mirror` option is used with both the clone and push commands. The option ensures that all branches and other attributes are replicated in the new repo.

#### Validate the new repository

 Switch to the Azure DevOps web portal and validate the new repository and the history in the **CODE** hub.

![Screenshot that shows repo validation in CODE Explorer.](./media/move-git-repos-between-team-projects/MoveRepo-Validate.png)

Verify that all your branches were moved over to the new repo.

#### Configure the new repo

 Verify that the permissions and policies are correctly configured for the new repo. You can configure the security after you create an empty Git repo or at this stage. Reconfigure your builds to connect with the new repo. Lastly, notify users of the original repo to update their remotes in Visual Studio or by running the `git remote set-url origin` command.

> [!div class="tabbedCodeSnippets"]
```Git CLI
> git remote set-url origin https://demo-fabrikam.visualstudio.com/DefaultCollection/Fabrikam/_git/MigrationDemo
```

> [!IMPORTANT]
> Remember to clean up the original project by either deleting the repo (be careful, there's no undo) or locking the branches so that no one accidentally keeps updating it.

For more information on planning your team project collections and team projects, see [TFS Planning, Disaster Avoidance and Recovery, and TFS on Azure Iaas Guide](/archive/blogs/visualstudioalmrangers/library-of-tooling-and-guidance-solutions-aka-msvsarsolutions).
