---
author: gloridelmorales
ms.author: glmorale
ms.date: 5/5/2026
ms.topic: include
---

### Improvements to pull request status checks

We added a new **External** badge to pull request status checks to help you distinguish custom third-party status policies from built-in Azure DevOps branch policies. Previously, external policies looked identical to standard policies like builds or required reviewers, which often caused confusion when a pull request was blocked.

With this update, external status policies are now clearly labeled in the checks experience, and hovering over the badge provides additional details about the policy owner and that it's managed outside of standard branch policies. This helps authors and reviewers quickly understand why a pull request is blocked and resolve issues faster.

> [!div class="mx-imgBorder"]
> [![Screenshot showing the new External badge on a pull request status check.](../../media/273-repos-01.png "Screenshot showing the new External badge on a pull request status check.")](../../media/273-repos-01.png#lightbox)

### Git object count limit removed

The hard limit on the number of Git objects in a repository has been removed. Previously, repositories were capped at 100 million objects, which could be a constraint for very large and active codebases. With this change, repositories can grow without an object count ceiling, improving scalability and longevity.

This especially benefits long-lived, large monorepos with extensive history, a huge number of contributors, and continuous development at scale.
