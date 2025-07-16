---
author: gloridelmorales
ms.author: glmorale
ms.date: 7/17/2025
ms.topic: include
---

### Advanced Security properly picks up on default branch changes and deleted branches

In previous releases, [February 12](/azure/devops/release-notes/2025/sprint-251-update#github-advanced-security-updates-for-default-branch-changes) and [February 24](/azure/devops/release-notes/2025/sprint-252-update#deleted-branches-removed-from-advanced-security-branch-picker), we announced features that helped manage branch changes in your repository. 

For deleted branch changes, these are specifically to manage pull request branches that are subsequently deleted. Previously, this feature didn't support regular branches that are scanned then later deleted. In this sprint, we addressed those issues to ensure the feature now works as intended.