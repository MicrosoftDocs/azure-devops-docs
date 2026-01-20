---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 1/26/2026
ms.topic: include
---

### Pull Request Notification Improvements

To help teams focus on the most relevant pull request activity, we’ve improved Azure DevOps email notifications to reduce noise and highlight meaningful changes. Several low-value notifications, including draft transitions and auto-complete updates, have been removed entirely. For remaining notifications, we’ve simplified the content to emphasize what changed, such as affected files, while removing redundant details like full reviewer and commit lists. These updates are designed to make pull request emails easier to scan, more actionable, and better aligned with how teams review and collaborate together.

### Pull Request Templates for Multi-Level Branches
[Pull request templates](/azure/devops/repos/git/pull-request-templates?view=azure-devops) will now support a nested folder structure corresponding with multi-level branches. If you open a PR against a branch called `feature/foo/december`, a template will be searched for in the following locations in order of preference:

1.  `<pull request template path>/branches/feature/foo/december.md`
2.  `<pull request template path>/branches/feature/foo.md`  
3.  `<pull request template path>/branches/feature.md`  
    

The most specific template will be applied to the PR, in this case `feature/foo/december.md` if it exists. If not, `feature/foo.md` will be applied, and if that doesn't exist, `feature.md` will be used.

### Breaking Change: Disabling of obsolete TFVC Check-In Policies

In April 2025, [we announced changes](https://devblogs.microsoft.com/devops/tfvc-policies-storage-updates) to how TFVC check-in policies are stored. These changes affect any TFVC projects that use check-in policies such as Build (require the last build to succeed), Work Item (require an associated work item), Changeset Comments (require users to add a comment to their check-in), and others.

Over the past year, we have provided guidance on migrating your existing, obsolete check-in policies to the new storage format and have disabled the creation of new obsolete policies.

In this release, any remaining check-in policies that are still using the old format will be disabled. These policies will no longer function, and you will be required to migrate them to the new format for check-in policies to continue working.

For full details and step-by-step migration guidance, see our [blog post](https://devblogs.microsoft.com/devops/tfvc-policies-storage-updates).