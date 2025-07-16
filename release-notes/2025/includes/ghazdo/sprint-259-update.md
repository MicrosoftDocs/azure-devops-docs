---
author: gloridelmorales
ms.author: glmorale
ms.date: 7/17/2025
ms.topic: include
---

### Advanced Security properly picks up on default branch changes and deleted branches 

In previous releases, [February 12](https://learn.microsoft.com/en-us/azure/devops/release-notes/2025/sprint-251-update#github-advanced-security-updates-for-default-branch-changes) and [February 24](https://learn.microsoft.com/en-us/azure/devops/release-notes/2025/sprint-252-update#deleted-branches-removed-from-advanced-security-branch-picker), we announced features that helped manage branch changes in your repository. 

For deleted branch changes, these are specifically to manage pull request branches that are subsequently deleted. This feature does not currently support regular branches that are scanned then later deleted for some reason.

We found out that these changes weren't properly reflected for many customers, and this release fixes issues that customers were encountering. 