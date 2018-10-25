---
title: Practical DevOps
titleSuffix: Azure DevOps Services & TFS
description: Source control as automation
ms.prod: devops
ms.technology: devops-dev-manager
ms.article: get-started-article
ms.assetid: 6e6eb784-d8fe-4694-8a62-099085a2dc5f
ms.manager: douge
ms.author: kraigb
author: kraigb
ms.topic: reference
ms.date: 10/25/2018
monikerRange: '>= tfs-2013'
---

# DevOps activities as automation

In the previous articles of this series, you've come to understand that DevOps primarily a series of known processes, and that once you understand your processes clearly, you can intelligently apply automation where it's most effective.

In the second half of this series, we now look at the different groups of activities more closely to understand the levels of automation they can provide. This understanding should enable you to evaluate the different tools you have available for those activities, including the offerings in Azure DevOps.

## Source control as automation

A very important part of the release pipeline, one that's often taken for granted, is source control. A project's source code is the input to the release pipeline, and most developers today accept managing code in a source control system as a matter of course. But it helps you understand the whole of DevOps better if you can clearly see the essential role source control plays in that context. Indeed:

_**The first and perhaps easiest step in automating a release pipeline is to manage your code in a source control repository of some kind.**_

That's right: source control is a form of automation!

This statement may surprise you, because at first glance source control seems quite mundane: it's "just" a way to store code files, right?

But let's back up in time and see what source control actually automates. Chances are you've worked on projects without source control at some point in your career, especially when you were first getting started. In those projects, you likely just had a folder on your local hard drive containing all your code. From there, you may have run a local build to produce the artifacts needed for distribution, which you then manually uploaded to a public web server or perhaps (old school!) shared with others on physical media.

In short, source control is in no way required to produce a customer-ready app and its back-end services. But having only a single local copy of your source code has a number of problems and risks, all of which I imagine you've also experienced directly at some point:

- If your hard drive crashes, you can lose everything.
- A single copy of the source code doesn't maintain any change history, making it very difficult to revert to a prior working state of the project. You often find this out the hard way after making extensive code changes for several hours only to find that you've completely broken the app, and you have no idea which piece of code is causing the problem (or problems!).
- Multiple people working on the code can easily overwrite each other's changes, or introduce breaking changes, without anyone else realizing it.

It's certainly possible to mitigate these risks manually, to some extent. Regular backups, for instance, help guard against code loss and provide a certain degree of history. However, the non-granular nature of whole-project backups makes it very difficult to revert only parts of the project while leaving other changes intact. It's also possible for people on a team to make personal copies of the code to avoid conflicts, but it's then exceptionally tedious to integrate those copies together into a working state. Team members can also communicate breaking changes to others by direct email or other messaging, but this becomes burdensome to do on a consistent basis.

As developers we generally like to avoid such burdens, so we invent creative ways to automate tasks like making backups, sending change notifications, and resolving code conflicts. And that's exactly what source control does.

At a high level, a source control system:

- Maintains a shared repository of all project code on a server, with some kind of automatic backup mechanism.
- Logs changes on a per-file basis, so you can see the entire history for any given file, as well as changes to multiple files that were committed to the repository as a group. This makes it easy to associate build failures and test regressions with specific changes, and to revert individual files or groups of files to any previous state, not just the state of the last backup.
- Stores the code in a place where a build system can detect changes to the repository and automatically trigger a build (continuous integration) and perform immediate integration tests.
- Manages overwrites and conflicts between multiple users, either by requiring developers to lock files for exclusive access while they're working on them, or by having tools that can automatically merge changes and detect conflicts.
- Send automatic notifications to interested developers when certain files change, or when merge conflicts require manual resolution.

In short, source control automates many of the tedious processes involved in maintaining a dependable and auditable repository of a project's code. It's essential for managing project code for both single developers and teams alike, and is the basis for an automated release pipeline.

## Source control in Azure DevOps

Because source control is such a fundamental activity within DevOps, and because it's the starting point for activities like continuous integration, there are many different tools available for this purpose. Your choice, however, greatly affects the options you have for the rest of the DevOps pipeline.

With Azure DevOps, you have two choices for source control, which are collectively branded as Azure Repos:

    - Git, which you've likely heard of because it's one of the most popular source control systems in the world. Git is a "distributed" system, which means that each developer has a complete local copy of the repository and can freely make changes to any file. Changes are then integrated upwards into the master repository from these local copies. Of course, different people are likely to work on the same files at the same time, so Git provides extensive support for merging conflicts during the integration process. Git also makes it very quick and inexpensive to create "branches" to isolate sets of changes from one another, and then integrate those changes together.
    - TFVC (Team Foundation Version Control), in contrast, is a "centralized" system, which means a central server maintains historical data and branches. Developers then "check out" files they wish to work on, make their changes, and "check in" those files to the master repository. This check-out/check-in process generally avoids conflicts.

Learn more about both systems in the article, [Choosing the right version control for your project](../repos/tfvc/comparison-git-tfvc.md).

If you're unsure, then Git is your best choice. Git enjoys extensive support in most developer tools, such as Visual Studio Code, Visual Studio, Xcode, Eclipse, IntelliJ, and more, plus you can always work with Git from the command line. Tooling support for TFVC is found in Visual Studio, Xcode, and Eclipse.

(TODO: more)

> [!div class="nextstepaction"]
> [Automating build and continuous integration](azure-devops-guide-for-managers-07-build-ci.md)
