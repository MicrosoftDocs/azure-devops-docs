---
title: Multiple merge bases issue
description: Getting warning about multiple merge bases in your pr
ms.topic: article
ms.technology: devops-code-git
ms.date: 09/22/2021
---
# Multiple merge bases issue.
Pull request "Files" tab detecting diffs by three-side comparison. Algorithm takes into account last commit in target branch, last commit in source branch and their common merge base. It's fast, cost-efficient and reliable method of detecting changes. Unfortunately, is some cases there are more than one of true bases exist. Situation itself rare, but in large repositories with many active users it may be common.
Most of the times multiple bases will be created in following cases:
- Process of cross-merges between different branches.
- Active reuse of feature branches.
- Handling aftermaths of main branch reverts.
- Other non-intuitive and convoluted manipulations with reverts/cherry picks/merges.

## What can go wrong?
Multiple merge bases detection was added as a part of security awareness. If there are multiple merge bases, file-diff algorithm for UI may not properly detect file changes depending on which merge base was chosen. It will only happen if files affected in PR have different versions between those merge bases. 

## Possible problems:
- Ill-intended user may abuse UI algorithm to commit malicious changes that wouldn't be present in pr.
- If changes, presented in pr is already in target branch, they would be present in "files" tab. But they will not trigger some branch policies mapped to folder changes. Which may lead to some frustration?
- If two developers done changes to same files it may not be present in the pr. That case may create treacherous logic gaps.

## What to do?
First of all, having multiple merge bases isn't necessary bad thing, but it would be better to double check if everything is fine.
To get rid of multiple merge bases, you should tie branches to a single common ancestor. In other words rebase your branch on target, or merge target into the main. That would get rid of warning message and help you check if everything is fine with the actual changes. If you're feeling lacking with git handling, it may be beneficial to soft reset your progress, and stash it. From there you can create new branch or rebase empty one, and apply your changes from a clear point (it may require force push to remote, if your changes already there). 

### General tips
- When preparing pr - create feature branches from latest versions of main/release branch. 
- Avoid to creating branches that not originated directly from stable branches of your repository, unless you're needed to.

### I've fixed the issue but message is reappeared.
In large repos, with large numbers of active contributors this issue can be especially inconvenient. The main problem is even if you get rid of multiple bases via merge it may reappear. If somebody will close long-lasting pr - that would create this situation again. Even while build policies and test are running when you have no meanings to complete the PR. Resetting and starting branch as mentioned before may help. Although you mask somebody to verify your results on clear state, if nothing is changed - your changes are probably clear even if situation will repeat itself.
