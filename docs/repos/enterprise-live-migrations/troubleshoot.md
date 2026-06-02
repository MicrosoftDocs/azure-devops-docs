---
title: Troubleshoot Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Resolve creation, validation, synchronization, cutover, CLI, and post-migration errors for Enterprise Live Migrations (ELM).
ms.subservice: azure-devops-migrate
ms.topic: troubleshooting
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/02/2026
#customer intent: As a migration operator, I want to diagnose and resolve ELM errors so I can complete the migration successfully.
---

# Troubleshoot Enterprise Live Migrations (ELM)

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Use this article to diagnose and resolve common errors that occur during an Enterprise Live Migration (ELM). For most failures, check the `errorMessage` field in the JSON output of `az devops migrations status`.

## Creation errors

| Symptom | Likely cause | Resolution |
|---|---|---|
| `403 Forbidden` on `migrations create` | Insufficient Azure DevOps permissions. | Confirm you have the **Enterprise Live Migrations: Manage Migrations** permission. |
| Target repository already under migration | Another migration exists for the same target. | Wait for it to complete or abandon it, and then try again. |
| `TargetRepositoryDoesNotExist` precheck fails | The target GitHub repository already exists (often because a prior migration was abandoned without cleanup). | Delete the target GitHub repository and run `migrations create` again. If you intentionally want to reuse a non-empty target, pass `--skip-validation TargetRepositoryDoesNotExist`, but only after confirming the existing contents are safe to overwrite. |
| Target repository in incompatible state | Target isn't empty or was used by a different source repo. | Use an empty target repository. If you previously canceled a migration, delete the target repo and try again. |
| Wrong org in `--org` | Auto-detect overrode `--org`. | Add `--detect false` to the command, or update the default org. |
| `The migrations command is not recognized` | Azure DevOps CLI extension isn't installed or is outdated. | Install or update the Azure DevOps CLI extension, and then verify the command is available before starting again. |

## Validation errors

If your migration is in **Failed** status during the **Validation** stage, it usually indicates an eligibility issue. Check `errorMessage` in the JSON output.

| Symptom | Likely cause | Resolution |
|---|---|---|
| Validation results expired (24 hours) before full migration started | Validation window timed out. | Run validation again and begin the full migration within 24 hours. |
| File too large (>400 MB) | An individual file in history exceeds the limit. | Remove the large file from history or move it to Git LFS (future), and then run validation again. |
| Reference name too long (>255 bytes) | A branch or tag name exceeds GitHub's limit. | Rename or delete the reference before migration. |
| Agent pool not found | Named agent pool doesn't exist. | Confirm the agent pool name in Azure DevOps and make sure the migration operator can access it. |
| `POLICY_ERROR` | Transient error in the validation engine. | Retry the migration with `az devops migrations resume`. |

<!-- TODO: `POLICY_ERROR` is vague. What triggers it? (rate limit? policy evaluation timeout? specific validator failure?), how many retries are reasonable before escalating, and any companion fields in the status output that disambiguate the cause. -->

## Synchronization errors

If your migration is in **Failed** status during the **Synchronization** stage, check `errorMessage` in the JSON output.

| Symptom | Likely cause | Resolution |
|---|---|---|
| Sync stalled (last sync time is stale) | Transient connectivity or rate-limit issue. | ELM retries automatically. If sync is stalled for more than one hour, resume manually with `az devops migrations resume`. |
| Commits missing in GitHub | Sync was interrupted. | Check status. Resume the migration if `status: Failed` or `status: Suspended`. |

## Cutover errors

If your migration is in **Failed** status during the **Cutover** stage, check `errorMessage` in the JSON output.

| Symptom | Likely cause | Resolution |
|---|---|---|
| Azure DevOps repo stuck in read-only state | Cutover failed partway through. | Contact the ELM team. Don't attempt to manually re-enable Azure DevOps write access. |

<!-- TODO: "Contact the ELM team" appears here but no support channel is documented anywhere in the docset. Add a support/contact section (preview support email, internal escalation alias, or Developer Community link) and link to it from every "Contact the ELM team" instruction. -->

## Common CLI and configuration issues

| Symptom | Likely cause | Resolution |
|---|---|---|
| Requests go to wrong host (for example, `codedev.ms`) | Auto-detect is picking up a different Git remote. | Add `--detect false` to all commands. |
| Requests go to old org URL | Stale default org in config. | Run `az devops configure --defaults organization=https://dev.azure.com/<org>`. |
| `az devops migrations` command not found | Azure DevOps extension isn't installed or is outdated. | Install or update: `az extension add -n azure-devops` or `az extension update -n azure-devops`. |
| Active-state error on resume | Migration is already active. | Pause first with `az devops migrations pause`, and then resume. |
| Wrong repository migrated | Wrong repository GUID used. | Always verify with `az repos show --query id` before creating a migration. |

## Post-migration issues

| Symptom | Likely cause | Resolution |
|---|---|---|
| Pipelines fail after cutover | Pipeline definitions still reference the Azure DevOps repo. | Update the pipeline definitions to reference the migrated GitHub repository. Verify that related service connections, triggers, and required status checks point to the correct source. |
| Branch rulesets not enforcing expected policies | Ruleset migration is incomplete, or CI checks are inactive. | Review rulesets in repository settings. Update required status check names after rewiring pipelines. |
| Users can't access GitHub repo | Users aren't added to the GitHub organization. | Add users to the GitHub organization. |
| Commits not linked to GitHub profiles | Email address mismatch between Azure DevOps and GitHub. | If a user's Azure DevOps email differs from their GitHub email, commits don't automatically link to their GitHub profile. This affects all platform migrations, not just ELM. |
| Submodule URLs pointing to Azure DevOps | Submodule references weren't updated. | Manually update `.gitmodules` to point to GitHub repository URLs. |

## Where to look for logs and signals

| What you need | Where to find it |
|---|---|
| Migration status and stage | `az devops migrations status --org <url> --repository-id <guid>` |
| Full JSON output with error details | `az devops migrations status ... -o json` |
| Validation failure details | `validationIssues` field in JSON status output |
| List of all migrations (including inactive) | `az devops migrations list --org <url> --include-inactive` |
| Azure DevOps repository GUID | `az repos show --org <url> --project <proj> --repository <name> --query id -o tsv` |

## Command, parameter, status, and stage reference

For the full list of CLI commands, parameters, migration stages, and migration statuses, see [ELM CLI reference](elm-cli-reference.md).

## Related content

- [Learn about Enterprise Live Migrations](overview.md)
- [Monitor the migration](monitor-migration.md)
- [Cutover to GitHub](cut-over-to-github.md)
- [Complete post-migration tasks](post-migration.md)
- [ELM CLI reference](elm-cli-reference.md)
