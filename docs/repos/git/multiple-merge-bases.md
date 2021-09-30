---
title: Multiple merge bases issue on PR file tab
description: Getting warning about multiple merge bases in your pr
ms.topic: article
ms.technology: devops-code-git
ms.date: 09/22/2021
---

# Multiple merge bases issue on PR file tab

The **Files** tab in the **Pull Request** view detects diffs by three-side comparison. The algorithm takes into account the last commit in the target branch, the last commit in the source branch, and their common merge base. It's a fast, cost-efficient, and reliable method of detecting changes. Unfortunately, in some cases, there is more than one true base. In most repositories this situation is rare, but in large repositories with many active users it may be common.

Multiple bases can be created in the following scenarios.

- Process of cross-merges between different branches.
- Active reuse of feature branches.
- Handling aftermaths of main branch reverts.
- Other non-intuitive and convoluted manipulations with reverts/cherry picks/merges.

## Multiple merge base detection

Multiple merge bases detection was added as a part of security awareness. If there are multiple merge bases, the file-diff algorithm for the UI may not properly detect file changes, depending on which merge base was chosen. The multiple merge base warning only happens if the files affected in PR have different versions between those merge bases. 

## Security concerns when merging from multiple bases

- A malicious user could abuse the UI algorithm to commit malicious changes that wouldn't be present in the PR.
- If changes proposed in the PR are already in the target branch, they would be displayed in the **Files** tab, but they may not trigger the branch policies mapped to folder changes.
- If two developers make changes to the same files from multiple merge bases it may not be present in the pr. That case may create treacherous logic gaps.

## What to do?

First of all, having multiple merge bases isn't necessary bad thing, but it would be better to double check if everything is fine.
To get rid of multiple merge bases, you should tie branches to a single common ancestor. In other words rebase your branch on target, or merge target into the main. That would get rid of warning message and help you check if everything is fine with the actual changes. If you're feeling lacking with git handling, it may be beneficial to soft reset your progress, and stash it. From there you can create new branch or rebase empty one, and apply your changes from a clear point (it may require force push to remote, if your changes already there). 

### General tips

- When preparing pr - create feature branches from latest versions of main/release branch. 
- Avoid to creating branches that not originated directly from stable branches of your repository, unless you're needed to.

### I've fixed the issue but message is reappeared

In large repos, with large numbers of active contributors this issue can be especially inconvenient. The main problem is even if you get rid of multiple bases via merge it may reappear. If somebody will close long-lasting pr - that would create this situation again. Even while build policies and test are running when you have no meanings to complete the PR. Resetting and starting branch as mentioned before may help. Although you mask somebody to verify your results on clear state, if nothing is changed - your changes are probably clear even if situation will repeat itself.
