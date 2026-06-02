---
title: Post-migration activities for Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Validate the migrated GitHub repository, review branch rulesets, reclaim mannequins, and prepare teams to work from GitHub after ELM cutover.
ms.subservice: azure-devops-migrate
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/01/2026
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

| Azure DevOps policy | GitHub equivalent | Notes and customer action |
|---|---|---|
| Minimum approval count | Required approving reviews (migrated) | Verify branch patterns and reviewer count after cutover. |
| Reset votes on new push | Dismiss stale reviews (migrated) | Confirm the setting is enabled on protected branches. |
| Build validation | Required status checks (migrated) | Might require updating check names after pipelines are rewired. |
| Merge strategy | Allowed merge methods (migrated) | Validate merge settings (merge/squash/rebase) on the repository. |
| File size restriction | Max file size (migrated) | Large files might require Git LFS (future) or history cleanup. |
| Required reviewers (path-based) | CODEOWNERS + required code owner review (manual) | Create or validate `CODEOWNERS` entries to match path rules. |
| Block force push | Block force pushes (migrated) | Confirm enforcement on protected branches. |
| Block branch deletion | Restrict deletions (migrated) | Confirm branch deletion is blocked where required. |
| Commit author email validation | Commit email pattern checks (partially supported) | Review and adjust patterns after migration to match your policy intent. |
| Auto-complete | Auto-merge (behavior differs) | GitHub auto-merge is enabled per pull request. Validate your preferred workflow. |
| Path length, reserved names, file name restrictions, case enforcement | No direct equivalent | Resolve these issues before migration to meet GitHub limits. |

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

## Features in development

Pipeline rewiring and Azure Boards connection support are still in development. When available, ELM will provision the Azure Boards connection for the migrated repository so teams can link work items from GitHub pull requests by using the `AB#<workItemId>` syntax without completing that connection manually after cutover.

<!-- TODO: When pipeline rewiring ships, document the rewiring command/flow and remove the "Rewire Azure Pipelines" item from overview.md "What you do manually." When Azure Boards connection support ships, document the provisioning behavior and remove the (Future) markers in prerequisites.md and overview.md. -->

## Related content

- [Cutover to GitHub](cut-over-to-github.md)
- [Learn about Enterprise Live Migrations](overview.md)
- [ELM CLI reference](elm-cli-reference.md)
- [Troubleshoot ELM](troubleshoot.md)
