---
title: Enterprise Live Migrations (ELM) CLI reference
titleSuffix: Azure DevOps
description: Complete command and parameter reference for the Azure DevOps CLI commands you use to run Enterprise Live Migrations (ELM).
ms.subservice: azure-devops-migrate
ms.topic: reference
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/02/2026
#customer intent: As a migration operator, I want a complete reference for ELM CLI commands and parameters so I can run, monitor, and troubleshoot migrations from the command line.
---

# Enterprise Live Migrations (ELM) CLI reference

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article lists the Azure DevOps CLI commands and parameters you use to run Enterprise Live Migrations (ELM), along with status and stage values the CLI returns during a migration.

## Commands

| Command | Required parameters | Optional parameters | HTTP | Description |
|---|---|---|---|---|
<<<<<<< HEAD
| `list` | `--org` | `--project`, `--include-inactive`, `--detect` | GET | List migrations. By default, the CLI returns only active migrations. |
=======
| `list` | `--org` | `--include-inactive`, `--detect` | GET | List migrations. By default, the CLI returns only active migrations. |
>>>>>>> f9ef3d9f08a14dbbea8a24046a11d5c8d497af54
| `status` | `--org`, `--repository-id` | `--detect` | GET | Get detailed status for one migration. |
| `create` | `--org`, `--repository-id`, `--target-repository`, `--target-owner-user-id`, `--service-endpoint-id`, `--agent-pool` | `--validate-only`, `--cutover-date`, `--skip-validation`, `--detect` | POST | Create a new migration. |
| `pause` | `--org`, `--repository-id` | `--detect` | PUT | Pause an active migration. |
| `resume` | `--org`, `--repository-id` | `--validate-only`, `--migration`, `--detect` | PUT | Resume a stopped migration. |
| `cutover set` | `--org`, `--repository-id`, `--date` | `--detect` | PUT | Schedule a cutover date and time. |
<<<<<<< HEAD
| `cutover cancel` | `--org`, `--repository-id` | `--detect` | PUT | Cancel a scheduled cutover. Only valid while stage is `Synchronization`; rejected once stage advances to `Cutover`. Sends the `DateTimeOffset.MinValue` sentinel (`0001-01-01T00:00:00+00:00`) because the server ignores `null` for `scheduledCutoverDate`. |
| `cutover review` | `--org`, `--repository-id` | `--detect` | GET | List cutover failures awaiting approval. |
| `cutover approve` | `--org`, `--repository-id`, `--accept-failures` | `--detect` | PUT | Approve cutover by accepting a count of unresolved failures. Irreversible — no revoke API; recover with `abandon` + recreate. |
| `abandon` | `--org`, `--repository-id` | `--remove-read-only`, `--yes`, `--detect` | DELETE | Permanently delete a migration. Prompts for confirmation. |
=======
| `cutover cancel` | `--org`, `--repository-id` | `--detect` | PUT | Cancel a scheduled cutover. |
| `cutover review` | `--org`, `--repository-id` | | | List cutover failures awaiting approval. |
| `cutover approve` | `--org`, `--repository-id`, `--accept-failures` | | | Approve cutover and skip the listed failures. |
| `abandon` | `--org`, `--repository-id` | `--detect` | DELETE | Permanently delete a migration. Prompts for confirmation. |
>>>>>>> f9ef3d9f08a14dbbea8a24046a11d5c8d497af54

## Parameter details

| Parameter | Type | Used by | Description |
|---|---|---|---|
| `--org` | URL | All | Azure DevOps organization URL, for example `https://dev.azure.com/<org>`. Set this value as a default. |
<<<<<<< HEAD
| `--repository-id` | GUID | All except `list` | Azure Repos repository GUID. Get the value from `az repos show --query id`. Migrations are identified by `repositoryId` only — the API response has no separate migration ID field, and there can be at most one active migration per repository. |
=======
| `--repository-id` | GUID | All except `list` | Azure Repos repository GUID. Get the value from `az repos show --query id`. |
>>>>>>> f9ef3d9f08a14dbbea8a24046a11d5c8d497af54
| `--target-repository` | URL | `create` | Target repository URL, for example `https://<enterprise>.ghe.com/<org>/<repo>`. The server validates this value. |
| `--target-owner-user-id` | string | `create` | GitHub user ID (handle) of the target repository owner. |
| `--service-endpoint-id` | GUID | `create` | Azure DevOps service connection ID that holds the GitHub PAT used to authenticate to the target. |
| `--agent-pool` | string | `create` | Agent pool name for migration work. |
<<<<<<< HEAD
| `--validate-only` | flag | `create`, `resume` | On `create`: run pre-migration checks only. On `resume`: switch to validate-only mode. Validate-only results expire 24 hours after the run succeeds; start (or promote to) the full migration within that window. |
| `--migration` | flag | `resume` | Promote a succeeded validate-only run to a full migration (sets `validateOnly=false` and `statusRequested=active`). Only valid when the previous validate-only run finished with `status: Succeeded`. Mutually exclusive with `--validate-only`. |
| `--cutover-date` | ISO 8601 | `create` | Pre-schedule cutover at creation time, for example `2030-12-31T11:59:00Z`. |
| `--date` | ISO 8601 | `cutover set` | Schedule cutover date and time, for example `2030-12-31T11:59:00Z`. |
| `--skip-validation` | string | `create` | Comma-separated list of validation policies to skip. |
| `--accept-failures` | integer | `cutover approve` | Count of unresolved cutover failures to accept. Must be greater than or equal to `totalUnprocessedCount` returned by `cutover review`. |
| `--remove-read-only` | flag | `abandon` | After cutover, the source Azure DevOps repository is set to read-only. Add this flag to restore write access. Only applies after cutover. |
| `--yes` (`-y`) | flag | `abandon` | Skip the interactive confirmation prompt. Useful for scripted cleanup. |
=======
| `--validate-only` | flag | `create`, `resume` | On `create`: run pre-migration checks only. On `resume`: switch to validate-only mode. |
| `--migration` | flag | `resume` | Switch to full migration mode (clears validate-only). Mutually exclusive with `--validate-only`. |
| `--cutover-date` | ISO 8601 | `create` | Pre-schedule cutover at creation time, for example `2030-12-31T11:59:00Z`. |
| `--date` | ISO 8601 | `cutover set` | Schedule cutover date and time, for example `2030-12-31T11:59:00Z`. |
| `--skip-validation` | string | `create` | Comma-separated list of validation policies to skip. |
| `--accept-failures` | string | `cutover approve` | Comma-separated list of failure IDs to skip when approving cutover. |
>>>>>>> f9ef3d9f08a14dbbea8a24046a11d5c8d497af54
| `--include-inactive` | flag | `list` | Include completed, failed, and suspended migrations. |
| `--detect` | flag | All | Auto-detect organization from the git remote (default: `true`). Use `--detect false` to disable. |

## Migration stages

| Stage | Description |
|---|---|
<<<<<<< HEAD
| Queued | Migration accepted; work hasn't started yet. |
| Validation | Running pre-migration checks. |
| Synchronization | Copying and syncing repository content. |
| Cutover | Running the final sync and transitioning to GitHub. |
| ReviewForCutover | Cutover reached the scheduled time with unresolved failures and is waiting for `cutover approve` (or rescheduling). |
| ReadyForCutover | Approved and waiting for the next ELM job to perform the final cutover. |
=======
| Validation | Running pre-migration checks. |
| Synchronization | Copying and syncing repository content. |
| Cutover | Running the final sync and transitioning to GitHub. |
>>>>>>> f9ef3d9f08a14dbbea8a24046a11d5c8d497af54
| Migrated | Migration complete. GitHub is the system of record. |

## Migration statuses

| Status | Meaning |
|---|---|
| Active | Migration is running. |
<<<<<<< HEAD
| Succeeded | Current phase completed successfully. |
| Completed | Migration reached the terminal `Migrated` stage. |
=======
| Succeeded / Completed | Current phase completed successfully. |
>>>>>>> f9ef3d9f08a14dbbea8a24046a11d5c8d497af54
| Failed | Error occurred. You can resume the migration after fixing the issue. |
| Suspended | Manually paused. You can resume the migration. |

<!-- 
## FAQ

TODO: Add FAQ content or Troubleshooting and FAQ in new article. -->

## Related content

- [Start the migration](start-migration.md)
- [Monitor the migration](monitor-migration.md)
- [Learn about Enterprise Live Migrations](overview.md)
- [Troubleshoot ELM](troubleshoot.md)
