---
title: Version Control - Move Git repositories between VSTS Team Projects
description: Moving Git Repositories from one VSTS Team Project to another
ms.prod: vs-devops-alm
ms.technology: vs-devops-articles
ms.assetid: 5CB114EA-EC65-4FF8-BC71-1B7E4B15D921
ms.manager: willys
ms.date: 06/01/2016
ms.author: willys
author: willys
---

[comment]: <> (Document was created as part of our team project consolidation and validated with engineers / MVPs in the field.)
[comment]: <> (We considered the `git remote add origin <URL>` command, but clone+push was simple and fast.)

# Move Git repositories between team projects

![](./_img/move-git-repos-between-team-projects/git.png)

Do you plan to consolidate multiple team projects into one? If yes, you are probably wondering what to do with all the repositories. Move or merge them? Keep history or just the tip of the iceberg?

In this article you will learn how to move your Git repositories to another team project, with full-fidelity history. 

## What's the scenario?

As shown, we need to move the MigrationDemo repo, from the FabrikamOld to the new Fabrikam team project.

> ![Move Repo Scenario](./_img/move-git-repos-between-team-projects/MoveRepo-Visual.png)

## How do I move?

You have 2 options as outlined below. Import functionality is easier, but is only available in VSTS and TFS 2017 Update 1 and above.  

### Use Import Git repository functionality
Using Import Repository, you can import a Git repository to your team project from TFS/VSTS or any other Git source code provider like GitHub. 
Review the [import repository documentation](../git/import-git-repository.md) for more details.

### Manually migrate the Git repo in 5 easy steps:

#### Create an empty Git repo. 

From the code explorer, click on the repo name.  Choose **New Repository** from the list, select Git as the type and give it a name.

![Create New Repo](./_img/move-git-repos-between-team-projects/MoveRepo-NewRepo.png)
 
Once the repo is created, you are presented with step-by-step instructions to quickly get started. Copy the `Clone URL` to your clipboard.

![New Repo Information](./_img/move-git-repos-between-team-projects/MoveRepo-NewRepoInfo.png)

> Important - Clear the **Automatically create links for work items mentioned in a commit comment** if you are importing from a different project collection or a foreign git repository. VSTS will otherwise associate the commits to existing work items of unrelated team projects in the team project collection.

![New Repo Options and Links Warning](./_img/move-git-repos-between-team-projects/MoveRepo-Warning.png)

#### Mirror the repository

Switch to a Developer Command Prompt and path to your local (source) repository for the MigrationDemo repo in FabrikamOld. Run the `git clone --mirror` command, using the Clone URL from above.

> Command Line: `git clone --mirror https://demo-fabrikam.visualstudio.com/DefaultCollection/Fabrikam/_git/MigrationDemo`

As shown, the `clone --mirror` is redundant in this case, as the remote repository is bare. It is used here as a safe and easy way to setup the remote.

![Git Clone Command Done](./_img/move-git-repos-between-team-projects/MoveRepo-Mirror-Done.png)

#### Push the repo 

Run the `git push` command to push the local changes to the remote (target) repo.

![Git Push Command Done](./_img/move-git-repos-between-team-projects/MoveRepo-Push-Done.png)

The `--mirror` option is used with both the clone and push command, and ensures that all branches and other attributes are replicated in the new repo.

#### Validate the new repository

 Switch to the VSTS web portal and validate the new repository and the history in the **CODE** hub.

![Repo Validation in CODE Explorer](./_img/move-git-repos-between-team-projects/MoveRepo-Validate.png)

Verify that all your branches were moved over to the new repo.

#### Configure the new repo

 Verify that the permissions and policies are correctly configured for the new repo. You can configure the security after step 1, or at this stage. Reconfigure your builds to connect with the new repo. Lastly, notify users of the original repo to update their remotes in Visual Studio, or running the `git remote set-url origin` command.

> Command line: `git remote set-url origin https://demo-fabrikam.visualstudio.com/DefaultCollection/Fabrikam/_git/MigrationDemo`


> Important - Remember to clean up the original project by either deleting the repo (be careful, there's no undo) or locking the branches so that no one accidentally keeps updating it.

For detailed information on planning your team project collections and team projects refer to the [TFS Planning, Disaster Avoidance and Recovery, and TFS on Azure Iaas Guide](http://vsarplanningguide.codeplex.com/).

> Authors: Jesse Houwing, Mike Fourie, and Willy Schaub

*(c) 2016 Microsoft Corporation. All rights reserved. This document is
provided "as-is." Information and views expressed in this document,
including URL and other Internet Web site references, may change without
notice. You bear the risk of using it.*

*This document does not provide you with any legal rights to any
intellectual property in any Microsoft product. You may copy and use
this document for your internal, reference purposes.*
