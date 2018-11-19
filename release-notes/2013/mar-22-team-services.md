---
title: Team Foundation Service updates - Mar 22
description: VSTS release notes for March 22 2013
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: cb4abbef-5cca-433a-b70d-5c2c759a8dec
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Team Foundation Service updates - Mar 22

We have added improvements to our Git support and test case management for you this sprint.

##Branches View

In this sprint we added a new branches view for team projects using Git. This lets you see:

- All the branches in your repo in one place
- The last commit and who did that commit for each branch
- How far ahead and behind each branch is from the current active branch

For example, in the screenshot below "master" is the current branch. The green bars indicate how many commits that branch has that “master” doesn’t. The red bars indicate how many commits that branch is missing.

![Branches view](_img/3_22_01.png)

You can also compare two branches. View the list of commits and the summary of code diffs that are different between branches.

![Compare branches](_img/3_22_02.png)

**Note:** Unlike most of the recent web access code improvements, this view is specific to team projects using Git. While our goal is to mirror the experiences as much as possible, that doesn’t always make sense. For example, the shelveset view is unique to TFVC. For this branches view, we want to make the most of the features offered by Git and help support common Git workflows.

##Test Case Management

Our web based test runner also got some nice additions this sprint:

- Select multiple test steps and mark them pass/fail in one action
- Double-click a test step to reorder, add or delete steps on the fly
- (See below) Hover over an inline image to view a larger version - no need to open it in a browser window

![Issue with test case](_img/3_22_03.png)

That’s all for this sprint. As always let us know how we're doing on [User Voice](https://visualstudio.uservoice.com/forums/330519-vso), the [MSDN Forums](http://social.msdn.microsoft.com/Forums/TFService/threads), and [Twitter](http://twitter.com/search?q=%23tfservice).

Thanks,

Jamie Cool
