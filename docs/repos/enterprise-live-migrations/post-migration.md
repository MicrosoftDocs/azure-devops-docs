---
title: Post-migration activities for Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Validate the migrated GitHub repository, review branch rulesets, reclaim mannequins, and prepare teams to work from GitHub after ELM cutover.
ms.subservice: azure-devops-migrate
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 09/10/2026
#customer intent: As a migration operator, I want to validate the migrated GitHub repository after cutover so that teams can work from GitHub with the expected protections and access.
---

# 6. Complete post-migration tasks

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

After cutover, complete the following post-migration tasks to validate the GitHub repository, restore expected protections, and prepare teams to work from GitHub as the new system of record. Perform these tasks in the GitHub portal.

## Review GitHub branch rulesets

ELM migrates Azure DevOps branch policies to GitHub branch rulesets. After cutover, open **Repository settings** > **Rules** > **Rulesets** and confirm that branch patterns, required reviewers, required status checks, and allowed merge strategies match your expected configuration.

1. Go to **Repository settings** > **Rules** > **Rulesets**.
1. Verify target branch patterns, required reviewers, required status checks, and merge strategies.
1. Test enforcement by opening a test pull request against a protected branch.

> [!NOTE]
> Required status checks that come from Azure DevOps build validation might appear inactive until you update your pipelines to point to the migrated GitHub repository.

### Branch policy migration: high-level mapping

| Azure DevOps policy | ELM support | GitHub equivalent | What you need to do |
|---|---|---|---|
| Minimum approval count | Automatically migrated | Required approving reviews | After cutover, verify that the required number of reviewers on each protected branch matches your Azure DevOps configuration. |
| Reset votes on new push | Automatically migrated | Dismiss stale reviews | Confirm that stale pull request approvals are dismissed when new commits are pushed to the branch. |
| Build validation | Automatically migrated | Required status checks | Verify that all required build checks are present and reporting successfully. If pipelines were rewired or renamed after migration, update the required status check names on the branch protection rule. |
| Merge strategy | Automatically migrated | Allowed merge methods | Confirm that the repository allows only the merge methods your team uses (merge, squash, and/or rebase). |
| File size restriction | Automatically migrated | Max file size limits | Test pushes involving larger files and verify that repository limits align with your governance requirements. Consider Git LFS if repositories contain large binary assets. |
| Required reviewers (path-based) | Manual configuration required | CODEOWNERS + required code owner review | ELM doesn't automatically convert Azure DevOps path-based reviewer rules into a `CODEOWNERS` file. Create or update a `CODEOWNERS` file that reflects your existing ownership model, then enable required code owner reviews in branch protection settings. |
| Block force push | Automatically migrated | Block force pushes | Confirm that force-push protection remains enabled on all protected branches. |
| Block branch deletion | Automatically migrated | Restrict deletions | Verify that protected branches can't be deleted by users. |
| Commit author email validation | Partial support | Commit email pattern checks | GitHub and Azure DevOps implement email validation differently. Review your existing allow/block patterns and confirm they produce the intended enforcement behavior after migration. Test with representative pull requests and commits. |
| Auto-complete | Behavior differs | Auto-merge | GitHub auto-merge isn't identical to Azure DevOps auto-complete. Review how pull requests are completed in your workflow and train users on any behavioral differences before cutover. |
| Path length, reserved names, file name restrictions, case enforcement | Not migrated | No direct equivalent | These Azure DevOps validations don't have a direct GitHub equivalent. Before migration, identify repositories that depend on these restrictions and remediate any files, paths, or naming patterns that might cause issues in GitHub. |

## Validate the migrated repository

Review the migrated repository to confirm that key content, access, and visibility settings match your expectations:

- All branches are present and match Azure DevOps.
- All tags are present and match Azure DevOps.
- Commit history is intact and complete.
- Open pull requests are migrated with their metadata.
- Repository size and file structure match expectations.
- The repository is accessible to the expected teams and users.
- Repository visibility is correct. ELM defaults to **Private**.

## Reclaim mannequins

After migration, follow GitHub's guidance to reclaim mannequins so commits and pull requests are correctly attributed to GitHub user accounts. For more information, see [Reclaiming mannequins for GitHub Enterprise Importer](https://docs.github.com/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer).

## Azure Boards Connection

ELM provisions the Azure Boards Connection for the migrated repository so teams can link work items from GitHub pull requests by using the `AB#<workItemId>` syntax without completing that connection manually after cutover.

## Related content

- [Cutover to GitHub](cut-over-to-github.md)
- [Learn about Enterprise Live Migrations](overview.md)
- [ELM CLI reference](elm-cli-reference.md)
- [Troubleshoot ELM](troubleshoot.md)
