---
title: Multiple merge bases issue
description: Getting warning about multiple merge bases in your pr
ms.topic: article
ms.technology: devops-code-git
ms.date: 09/22/2021
---
# Multiple merge bases issue.
Pull request "Files" tab detecting diffs by three-side comparison of last commit in target branch, last commit in source branch and their common merge base. It is fast, cost-efficient and generally reliable method of detecting changes. Unfortunately, is some cases there are more than one of true bases exist. Situation itself, usually pretty rare, but in large repositories with a lot of active users it may be very common.
Most of the times multiple bases will be created in a process of cross-merges between different branches, active reuse of feature branches, handling affects of master reverts, and so on.

## What can go wrong?
Multiple merge bases detection was added as a part of security awareness. If there are multiple merge bases, file-diff algorithm for UI may not properly detect file changes depending on which merge base was chosen. It will only happen if files affected in PR has different versions between those merge bases. 

## Possible problems:
- Ill-intended user may use this to abuse UI algorithm to commit malicious changes that would not be present in pr.
- If changes, presented in pr is already in target branch, they would be present in "files" tab. But will not be present in actual merge commit therefore they may not trigger branch policies. Which may lead to some frustration.
- If two developers done changes to same files  - some of those changes might counteract others and this will not be present in the PR. 

## What to do?
First of all, having multiple merge bases isn't necessary bad thing, but it would be better to double check if everything is fine.
To get rid of multiple merge bases you should bring target and source branch to single common ancestor. In other words rebase your branch on target, or merge target into the main. That would get rid of warning message and help you check if everything is alright with the actual changes. If you are feeling lacking with git handling, it may be beneficial to soft reset your progress, create stash of it and rebase empty branch/create new one, and apply your changes on a clear point.

### General tips
- When preparing pr - create feature branches from latest versions of master/release branch. 
- Avoid creating branches that not originated directly from stable branches of your repository (main/release/dev etc), unless you are absolutely needed to.

### Message will not go away.
In large repos with large numbers of active contributors this issue may be especially inconvenient. The main problem is even if you get rid of multiple bases via merge, it is not the fact that somebody will close long-lasting pr and create this situation again, while build policies and test are running. Resetting and starting branch as mentioned before may help. Although you mask somebody to verify your results on clear state, if nothing is changed - your changes are probably clear even if situation will repeat itself.
