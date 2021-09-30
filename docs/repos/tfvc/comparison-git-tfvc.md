---
title: Git and TFVC version control 
titleSuffix: Azure Repos
description: Choosing which version control to use in Azure Repos
ms.assetid: A4D7295A-22AB-4990-BE68-EF81A1C31F01
ms.technology: devops-code-tfvc
ms.topic: conceptual
ms.date: 05/12/2017
monikerRange: '>= tfs-2015'
---



# Choosing the right version control for your project

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Whether your software project is large or small, using version control as soon as possible is a good idea. Azure Repos supports two types of version control: [Git](../../repos/git/gitquickstart.md)
and [Team Foundation Version Control](./what-is-tfvc.md) (TFVC).
 
<a name="tfvc_or_git_summary"></a>
## Which version control system should I use?
 
Git is the default version control provider for new projects. You should use Git for version control in your projects unless you have a specific need for centralized version control features in TFVC.  

You can use TFVC repos with Git in the same Project so it's easy to add TFVC later if you need centralized version control. To setup a new repo type for an existing project [use these instructions](../../repos/git/team-projects.md).

### Git (distributed)

Git is a distributed version control system. Each developer has a copy of the source repository on their dev machine. Developers can commit each set of changes on their dev machine and perform version control operations such as history and compare without a network connection. Branches are lightweight. When you need to switch contexts, you can create a private local branch. You can quickly switch from one branch to another to pivot among different variations of your codebase. Later, you can merge, publish, or dispose of the branch. 

>[!NOTE]
>Git in Visual Studio, Azure DevOps Services, and TFS is standard Git. You can use Visual Studio with third-party Git services, and you can also use third-party Git clients with TFS.
 
To learn more, see [Git and Azure Repos](../../repos/git/index.yml).

### TFVC (centralized)
 
Team Foundation Version Control (TFVC) is a centralized version control system. Typically, team members have only one version of each file on their dev machines. Historical data is maintained only on the server. Branches are path-based and created on the server.

TFVC has two [workflow models](decide-between-using-local-server-workspace.md):

  - **Server workspaces** - Before making changes, team members publicly check out files. Most operations require developers to be connected to the server. This system facilitates locking workflows. Other systems that work this way include Visual Source Safe, Perforce, and CVS. With server workspaces, you can scale up to very large codebases with millions of files per branch and large binary files.

  - **Local workspaces** - Each team member takes a copy of the latest version of the codebase with them and works offline as needed. Developers check in their changes and resolve conflicts as necessary. Another system that works this way is Subversion.

To learn more, see [TFVC overview](./what-is-tfvc.md)
 
<a name="tfvc_or_git_details"></a>

### Moving from TFVC to Git

If you have existing TFVC repos, you can migrate them to Git repos using the [git-tfs tool](https://github.com/git-tfs/git-tfs). The tool allows you to [migrate a TFVC repo to a Git repo](https://github.com/git-tfs/git-tfs/blob/master/doc/usecases/migrate_tfs_to_git.md) 
in just a couple of commands.

## Git and TFVC capabilities

Need more help to make a choice? These charts might help.

:::row:::
   :::column span="1":::
   Capability
   :::column-end:::
   :::column span="1":::
   TFVC
   :::column-end:::
   :::column span="1":::
   Git
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   Changes
   :::column-end:::
   :::column span="2":::
   Team members can concurrently change files on their dev machines. You [upload (check-in)](check-your-work-team-codebase.md) changesets to the server when you create them. You can upload your changes at any time. However, you might be interrupted by [conflicts](resolve-team-foundation-version-control-conflicts.md).


   You can change the comment of a [changeset](find-view-changesets.md) after you check it in. You can link changesets to work items and associate them with completed builds.
   :::column-end:::
   :::column span="2":::
   Team members can concurrently change files on their dev machines. You create commits on your dev machine independently of contributing them to the team. When you&#39;re ready you must pull the latest commits before you upload (push) yours to the server. When you pull, you might be interrupted by conflicts.


   You can amend the latest local commit. You cannot change older commits. You can link commits to work items and associate them with completed builds.


   You can modify and combine local commits from the command prompt.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Branching
   :::column-end:::
   :::column span="2":::
   
   Path-based branches are used mostly as long-standing constructs to isolate risk of change among feature teams and releases. Team members typically set up an additional workspace for each branch they work on.

   Changes in each branch are independent from each other, so you don&#39;t have to check them in before switching from one branch to another. Merging between sibling branches requires a baseless merge.
   
   You can get visualizations of your branch structures and where your changesets have been merged.

   See [Use branches to isolate risk in Team Foundation Version Control](/azure/devops/repos/tfvc/branching-strategies-with-tfvc).
   :::column-end:::
   :::column span="2":::
   Branching is lightweight and path independent. Many developers create a branch for each new feature they are coding, sometimes on a daily basis. You can quickly switch from one branch to another to pivot among different variations of your codebase. You can create branches that exist only on your dev machine and share them if and when you&#39;re ready. 


   You must commit, branch, stash, or undo changes before switching branches. Merging is simple and independent of the commit that the branch is based on.


   You can compare branches to see which commits exist on which branches.


   See [Use Git branches to switch contexts, suspend work, and isolate risk](/azure/devops/repos/git/branches?view=azure-devops&amp;tabs=visual-studio&preserve-view=true#use-branches-to-manage-development).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Conflict resolution
   :::column-end:::
   :::column span="2":::
   You might have to [resolve conflicts](resolve-team-foundation-version-control-conflicts.md) when you get, check in, merge, or unshelve. You can resolve all types of conflicts in Visual Studio.
   :::column-end:::
   :::column span="2":::
   You might have to resolve conflicts when you pull or merge. You can resolve content conflicts in Visual Studio or from the command prompt.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   File storage
   :::column-end:::
   :::column span="2":::
   You can check in large binary files. You might also want to use [NuGet](https://go.microsoft.com/fwlink/?LinkId=246165) in combination or as an alternative.
   :::column-end:::
   :::column span="2":::
   You can check in small binary files as you would regular files. When working with large binary files, use [Git-LFS](https://devblogs.microsoft.com/devops/announcing-git-lfs-on-all-vso-git-repos/) to store your large binary files in Azure Repos.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   History
   :::column-end:::
   :::column span="2":::
   File history is not replicated on the client dev machine and so can be viewed only when you&#39;re connected to the server. You can [view history](get-history-item.md) in Visual Studio and on the web portal. You can annotate files to see who changed a line, and when they changed it.
   :::column-end:::
   :::column span="2":::
   File history is replicated on the client dev machine and can be viewed even when not connected to the server. You can view history in Visual Studio and on the web portal. You can annotate files to see who changed a line, and when they changed it.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Tag your files
   :::column-end:::
   :::column span="2":::
   You can [apply labels](use-labels-take-snapshot-your-files.md) to a version of one or more files from either Visual Studio or the command prompt. Each file can have label applied to a different version.
   :::column-end::: 
   :::column span="2":::
   You can apply tags from the command prompt to individual commits. View tags in the Visual Studio history window.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Roll back changes
   :::column-end:::
   :::column span="2":::
   You can [roll back one or more changesets](roll-back-changesets.md)
   :::column-end:::
   :::column span="2":::
   You can revert a commit.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Scale
   :::column-end:::
   :::column span="2":::
   You can work on small or very large scale projects using [local workspaces](decide-between-using-local-server-workspace.md#local). Supports massive scale (millions of files per branch and large binary files) projects using [server workspaces](decide-between-using-local-server-workspace.md#when-might-i-need-to-use-a-server-workspace).
   :::column-end:::
   :::column span="2":::
   You can quickly begin small projects. You can scale up to very large projects, but you have to plan ahead to modularize your codebase. You can create multiple repositories in a project.
   :::column-end:::
:::row-end:::



### Server 

:::row:::
   :::column span="1":::
   **Capability**
   :::column-end:::
   :::column span="2":::
   **TFVC**
   :::column-end:::
   :::column span="2":::
   **Git**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Server
   :::column-end:::
   :::column span="2":::
   Azure DevOps Services, TFS
   :::column-end:::
   :::column span="2":::
   Azure DevOps Services, TFS and Git third-party services
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Alerts
   :::column-end:::
   :::column span="2":::
   Team members can [receive email alerts when check-ins occur](check-your-work-team-codebase.md#subscribe-to-alerts).
   :::column-end:::
   :::column span="2":::
   Team members can receive email alerts when commits are pushed to the server. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Auditability
   :::column-end:::
   :::column span="2":::
   Because your team checks in all their work into a centralized system, you can identify which user checked in a [changeset](find-view-changesets.md) and use [compare](compare-files.md) to see what they changed. Looking at a file, you can [annotate](view-file-changes-using-annotate.md) it to identify who changed a block of code, and when they did it.
   :::column-end:::
   :::column span="2":::
   You can identify which user pushed a commit. (Anyone can claim any identity as the author or committer.) You can identify when changes were made and what was changed using history, compare, and annotate.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Builds (automated by TFBuild)
   :::column-end:::
   :::column span="2":::
   You can use all [TFBuild](/azure/devops/pipelines/get-started/what-is-azure-pipelines) capabilities to build any combination of content you want within the project collection.
   :::column-end:::
   :::column span="2":::
   You can use most TFBuild capabilities to build one project at a time, and one or more repositories at a time.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Code reviews
   :::column-end:::
   :::column span="2":::
   Yes; see [Day in the life of an devops Developer: Suspend work, fix a bug, and conduct a code review](share-your-code-in-tfvc-vs.md). For more lightweight discussions, you can also comment on and send email about a changeset from the web portal.
   :::column-end:::
   :::column span="2":::
   Yes; see [Conduct a pull request](../../repos/git/pull-requests.md). For more lightweight discussions, you can also comment on and send email about a commit from the web portal.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Files
   :::column-end:::
   :::column span="2":::
   Each project contains all files under a single root path (for example: **$/FabrikamTFVC**). You can [apply permissions](../../organizations/security/permissions.md) at the file level. You can [lock files](lock-unlock-folders-files.md).

   You can browse your files on the web portal and using [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md) in Visual Studio.

   Your project exists on only one server.
   :::column-end:::
   :::column span="2":::
   
   Each project can contain one or more Git repositories and each Git repository can contain one or more branches. The most granular permissions you can apply are to a repository or a branch. Files cannot be locked.

   You can browse your files on the web portal.

   You can push commits to multiple remote repositories (for example to both your project repository and to your web site hosted on Windows Azure.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Quality gates
   :::column-end:::
   :::column span="2":::
   You can use CI builds, gated check-in builds and check-in policies.
   :::column-end:::
   :::column span="2":::
   You can use CI builds and gated check-in builds through [branch policies](../../repos/git/branch-policies.md).
   :::column-end:::
:::row-end:::



 
### Client

:::row:::
   :::column span="1":::
   **Capability**
   :::column-end:::
   :::column span="2":::
   **TFVC**
   :::column-end:::
   :::column span="2":::
   **Git**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   Client software
   :::column-end:::
   :::column span="2":::
   Visual Studio, Eclipse (with [Team Explorer Everywhere](/previous-versions/visualstudio/visual-studio-2013/gg413285(v=vs.120)))
   :::column-end:::
   :::column span="2":::
   Visual Studio, Eclipse, and other third-party tools
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Files
   :::column-end:::
   :::column span="2":::
   You can browse your files using [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md) in Visual Studio, or using Windows File Explorer or the [command prompt](use-team-foundation-version-control-commands.md).
   :::column-end:::
   :::column span="2":::
   You can browse your files using Windows File Explorer or the command prompt. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Manage work on your dev machine
   :::column-end:::
   :::column span="2":::
   [Pending changes](develop-code-manage-pending-changes.md#use-the-pending-changes-page-to-manage-your-work) and [my work](develop-code-manage-pending-changes.md#use-the-my-work-page-to-manage-your-work) pages.
   :::column-end:::
   :::column span="2":::
   Changes, commits, and branches pages.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Suspend your work
   :::column-end:::
   :::column span="2":::
   You can [suspend from my work page or shelve your changes](suspend-your-work-manage-your-shelvesets.md).
   :::column-end:::
   :::column span="2":::
   You can create a branch from (from Visual Studio or the command prompt) or stash (from the command prompt)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   User interface
   :::column-end:::
   :::column span="2":::
 - **Visual Studio:** Offers all commonly used features and many advanced features.
 - **TFS web portal:** Can browse, comment, annotate, and see history of the codebase.
 - **TF Command prompt:** Installed with Visual Studio. Used for advanced, administrative, and other less common tasks. 
   :::column-end:::
   :::column span="2":::
 - **Visual Studio:** Offers many commonly used features. Features for some common tasks are not yet available.
 - **TFS web portal:** Can browse, comment, annotate, and see history of the codebase.
 - **Third-party command prompt:** You can install it from Visual Studio. Used for some common and many less common tasks.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Visual Studio compatibility
   :::column-end:::
   :::column span="2":::
   You can use all supported [previous versions of Visual Studio](/azure/devops/server/requirements).
   :::column-end:::
   :::column span="2":::
   Git is built in with Visual Studio 2017, 2015, and 2013.

   You can also use Visual Studio 2012 Update 4 (you must also install [Visual Studio Tools for Git](https://go.microsoft.com/fwlink/?LinkID=275845)).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Web portal
   :::column-end:::
   :::column span="2":::
   You can browse your codebase (including branches), view history, annotate and comment on changesets and shelvesets, and perform other tasks such as ad hoc downloading of selected parts of your codebase as a .zip file.
   :::column-end:::
   :::column span="2":::
   You can browse your codebase, view history, compare branches, annotate and comment on commits, and perform other tasks such as ad hoc downloading of selected parts of your codebase as a .zip file.
   :::column-end:::
:::row-end:::


### Integration and migration

:::row:::
   :::column span="1":::
   **Capability**
   :::column-end:::
   :::column span="1":::
   **TFVC**
   :::column-end:::
   :::column span="1":::
   **Git**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Migration path
   :::column-end:::
   :::column span="1":::
   [Git-TFS](https://github.com/git-tfs/git-tfs)
   :::column-end:::
   :::column span="1":::
   [Git-TFS](https://github.com/git-tfs/git-tfs)
   :::column-end:::
:::row-end:::