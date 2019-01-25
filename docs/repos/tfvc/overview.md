---
title: Use Team Foundation Version Control
titleSuffix: Azure Repos
description: Use Team Foundation Version Control
ms.assetid: 1d629052-c65d-4c5d-81eb-eaa4413fe285
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: overview
ms.date: 08/29/2017
monikerRange: '>= tfs-2015'
---


# Use Team Foundation Version Control

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Whether your software project is large or small, using version control as soon as possible is a good idea. 
Version control systems are software that help you track changes you make in your code over time. As you edit your code, you tell the version control system to take a snapshot of your files. 
The version control system saves that snapshot permanently so you can recall it later if you need it.

Azure DevOps Services and TFS provide two models of version control: [Git](../../repos/git/overview.md), which is distributed version control, and [Team Foundation Version Control (TFVC)](#team-foundation-version-control), which is centralized version control. This article provides an overview and a starting point for using Team Foundation Version Control. If you're deciding which type of Azure DevOps Services/TFS version control to use, see [Choosing the right version control for your project](comparison-git-tfvc.md).

## Why use version control?

Without version control, you're tempted to keep multiple copies of code on your computer. This is dangerous, as it's easy to change or delete a file in the wrong copy of code, potentially losing work. Version control systems solve this problem by managing all versions of your code but presenting you with a single version at a time.

Version control systems provide the following benefits:

- **Create workflows** - Version control workflows prevent the chaos of everyone using their own development process with different and incompatible tools. Version control systems provide process enforcement and permissions so everyone stays on the same page.
- **Work with versions** - Every version has a description for what the changes in the version do, such as fix a bug or add a feature. These descriptions help you follow changes in your code by version instead of by individual file changes. Code stored in versions can be viewed and restored from version control at any time as needed. This makes it easy to base new work off any version of code.
- **Code together** - Version control synchronizes versions and makes sure that your changes don't conflict with other changes from your team. Your team relies on version control to help resolve and prevent conflicts, even when people make changes at the same time.
- **Keep a history** - Version control keeps a history of changes as your team saves new versions of your code.  This history can be reviewed to find out who, why, and when changes were made. History gives you the confidence to experiment since you can roll back to a previous good version at any time. History lets you base work from any version of code, such as to fix a bug in a previous release.
- **Automate tasks** - Version control automation features save your team time and generate consistent results. You can automate testing, code analysis, and deployment when new versions are saved to version control.

There are plenty of things that can take up your time as a developer: reproducing bugs, learning new tools, and adding new features or content. As the demands of your users scale up, version control helps your team work together and ship on time.

## Team Foundation Version Control

Team Foundation Version Control (TFVC) is a centralized version control system. Typically, team members have only one version of each file on their dev machines. Historical data is maintained only on the server. Branches are path-based and created on the server.

TFVC lets you apply [granular permissions](../../organizations/security/permissions.md) and restrict access down to a file level. Because your team checks in all their work into your Team Foundation server, you can easily audit changes and identify which user checked in a [changeset](find-view-changesets.md). By using [compare](compare-files.md) and [annotate](view-file-changes-using-annotate.md) you can identify the exact changes that they made.

## What do you want to do?

- [Set up your dev machine and get started](set-up-team-foundation-version-control-your-dev-machine.md)    

  Spend a few minutes to set up your dev machine to take advantage of all the benefits of a version-controlled codebase.

- [Choose your workflow model - server or local workspaces](decide-between-using-local-server-workspace.md)

  - **Server workspaces** - Before making changes, team members publicly check out files. Most operations require developers to be connected to the server. This system facilitates locking workflows. Other systems that work this way include Visual Source Safe, Perforce, and CVS. With server workspaces, you can scale up to very large codebases with millions of files per branch and large binary files.

  - **Local workspaces** - Each team member takes a copy of the latest version of the codebase with them and works offline as needed. Developers check in their changes and resolve conflicts as necessary. Another system that works this way is Subversion.

- [Develop your app in a version-controlled codebase](develop-your-app-team-foundation-version-control.md)    

  You don't have to think about version control in most situations. The system supports you when you need to manage and understand your changes.

- [Suspend your work](suspend-your-work-manage-your-shelvesets.md)    

  Sometimes you need to set aside some or all of the work you are doing. Your version control system can take away some of the pain and reduce the time wasted by interruptions.

- [Contribute your work to the team](check-your-work-team-codebase.md) 

  Check in your changes so your team can build upon, test, and release the value you've created.

- [Isolate risk](use-branches-isolate-risk-team-foundation-version-control.md)

  Use branches and locks to isolate risk introduced by work done by different teams.

- [View and manage past versions](view-manage-past-versions.md)  

  One advantage of a version control system is that you can look back in time to get detailed information about what changes have been made to your files.

- [Compare folders and files](compare-folders-files.md) 

  You can compare server folders and local folders to each other, and view the differences between the contents of each folder.

- [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md) 

  A big advantage of using version control is that several people can work concurrently on a file. One drawback is that sometimes you must resolve conflicts. Although it can be frustrating to encounter conflicts, the system provides information and tools to help you understand and resolve conflicts.

- [Work with version control locks](work-version-control-locks.md)     

  When you need to prevent a file or folder from being checked out and altered, you can lock it.

## Related Sections

- [Build and test the app in your automated build system](../../pipelines/overview.md)    

  Install a bit of software to create a build server, and then fill in a few fields to create a Continuous integration (CI) or nightly build process that enables you to leverage the power, convenience, scalability, and reliability of an automated build system to build your app.

- [Naming restrictions in Team Foundation](https://msdn.microsoft.com/library/aa980550)     

  Provides information about naming syntax, conventions, and limitations.

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)     

- [Learn about TFVC permissions](../../organizations/security/permissions.md#tfvc)    

We are not currently republishing the following sections. However, you can read the Visual Studio 2010 version of this guidance.

- [Administering Team Foundation Version Control](administering-team-foundation-version-control.md) 
