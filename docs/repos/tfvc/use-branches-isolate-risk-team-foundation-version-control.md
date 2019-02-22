---
title: Use branches to isolate risk in Team Foundation Version Control
titleSuffix: Azure Repos
description: Use branches to isolate risk in Team Foundation Version Control
ms.assetid: d74122a4-6a3d-45fb-82b7-3c1494ed4afd
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Use branches to isolate risk in Team Foundation Version Control

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Consider some challenges team members typically face when they work on a software project that is staffed by more than five or ten people:

-   The group has a few (or maybe several) different feature teams, each working on a set of functionality that is reasonably discrete. But each team also depends on functionality built by other teams. You need to isolate the risk of the changes introduced by the work done in each of these teams, and yet eventually, you need to merge all their efforts together into one product.

-   The test team needs a stable version of the code to test, and yet simultaneously, the developers need to continue moving forward with new features that will occasionally destabilize the product.

-   The software has two previous versions and one current version in progress. Even though most of the development effort is invested in the current version, the previous versions must still be supported with occasional releases of service packs, critical fixes and security patches, and other changes.

## In This Section

This section describes the branching and merging tools provided by Team Foundation version control to enable you to meet these and other challenges faced by groups of people who collaborate on a software project.

   [Branch folders and files](branch-folders-files.md)     
Explains the procedure used to create branches by using Team Foundation version control.

   [Branch strategically](branch-strategically.md)     
Your team can create and use branches in version control to optimize your application development strategy.

   [Merge folders and files](merge-folders-files.md)     
Explains the procedure used to merge branches by using Team Foundation version control.

   [View where and when changesets have been merged](view-where-when-changesets-have-been-merged.md)     
Explains how to view and work with actionable diagrams that illustrate where and when merges have occurred.

   [View the branch hierarchy of a project](view-branch-hierarchy-team-project.md)     
Explains how to view and work with an interactive diagram that illustrates the branch hierarchy of your project.

   [Associate a file type with a merge tool](associate-file-type-merge-tool.md)     
Describes the steps used to specify the file type extensions associated with merging.

## Reference

 [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md) 

## Related Sections

   [Compare folders and files](compare-folders-files.md)     
Explains how to compare or diff files, folders, and shelvesets.

   [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md)     
Lists topics about how to resolve merges, check in procedures, and get retrieve conflicts.

## See Also

#### Other Resources

 [Branch strategically](branch-strategically.md) 

[Visual Studio TFS Branching Guide](http://go.microsoft.com/fwlink/?LinkId=191400)
