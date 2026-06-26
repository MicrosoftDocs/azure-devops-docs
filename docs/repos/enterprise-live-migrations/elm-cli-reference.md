---
title: Enterprise Live Migrations (ELM) CLI reference
titleSuffix: Azure DevOps
description: Complete command and parameter reference for the Azure DevOps CLI commands you use to run Enterprise Live Migrations (ELM).
ms.subservice: azure-devops-migrate
ms.topic: reference
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/26/2026
#customer intent: As a migration operator, I want a complete reference for ELM CLI commands and parameters so I can run, monitor, and troubleshoot migrations from the command line.
---

# Enterprise Live Migrations (ELM) CLI reference

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article lists the Azure DevOps CLI commands and parameters you use to run Enterprise Live Migrations (ELM), along with status and stage values the CLI returns during a migration.

## Commands

### Migration commands

| Command | Required parameters | Optional parameters | HTTP | Description |
|---|---|---|---|---|
| `list` | `--org` | `--project`, `--include-all`, `--detect` | GET | List migrations. By default, the CLI returns only the active migration for each repository. Use `--include-all` to include completed, failed, and suspended migrations. |
| `status` | `--org`, `--repository-id` | `--detect` | GET | Get detailed status for one migration. |
| `create` | `--org`, `--repository-id`, `--target-repository`, `--agent-pool` | `--target-owner-user-id`, `--service-endpoint-id`, `--github-token`, `--validate-only`, `--cutover-date`, `--skip-validation`, `--enable-boards-github-connection`, `--enable-auto-discover-pipelines`, `--pipeline-service-connection-id`, `--detect` | POST | Create a new migration. If you don't pass `--service-endpoint-id`, the CLI checks `ELM_GITHUB_TOKEN` and then runs GitHub device flow to authenticate to the target. |
| `pause` | `--org`, `--repository-id` | `--detect` | PUT | Pause an active migration. |
| `resume` | `--org`, `--repository-id` | `--validate-only`, `--migration`, `--detect` | PUT | Resume a stopped migration. |
| `cutover set` | `--org`, `--repository-id`, `--date` | `--detect` | PUT | Schedule a cutover date and time. The value must be in the future. |
| `cutover cancel` | `--org`, `--repository-id` | `--detect` | PUT | Cancel a scheduled cutover. Only valid while stage is `Synchronization`; rejected once stage advances to `Cutover`. Sends the `DateTimeOffset.MinValue` sentinel (`0001-01-01T00:00:00+00:00`) because the server ignores `null` for `scheduledCutoverDate`. |
| `cutover review` | `--org`, `--repository-id` | `--detect` | GET | List unprocessed items and pipeline-verification requirements awaiting approval. |
| `cutover approve` | `--org`, `--repository-id` | `--accept-failures`, `--pipelines-verified`, `--detect` | PUT | Approve cutover by accepting unprocessed items and/or verifying rewired pipelines. Supply at least one of `--accept-failures` or `--pipelines-verified`. Irreversible — no revoke API; recover with `abandon` + recreate. |
| `abandon` | `--org`, `--repository-id` | `--remove-read-only`, `--yes`, `--detect` | DELETE | Abandon a migration. The migration record isn't purged and pipeline rewiring data is retained, so a later migration can reuse it. Prompts for confirmation unless you pass `--yes`. |

### Pipeline rewiring commands (preview)

Pipeline rewiring re-points pipelines that reference the source Azure Repos repository at the migrated GitHub repository. Rewiring is always available for a migration, in either of two modes:

- **Auto-discover** — pass `--enable-auto-discover-pipelines` together with `--pipeline-service-connection-id` on `create`. The ELM sync job walks the source repository and creates clone definitions for every pipeline that references it.
- **Manual** — enroll specific pipelines after `create` with `pipelines submit`. You can mix both modes and adjust enrollment at any time with `pipelines update`.

| Command | Required parameters | Optional parameters | HTTP | Description |
|---|---|---|---|---|
| `pipelines list` | `--org`, `--repository-id` | `--detect` | GET | List pipeline rewiring configuration and per-pipeline status. |
| `pipelines submit` | `--org`, `--repository-id`, `--pipeline-ids` | `--service-connection-id`, `--repository-mapping`, `--detect` | POST | Enroll specific pipelines for rewiring. |
| `pipelines update` | `--org`, `--repository-id` | `--add-ids`, `--remove-ids`, `--retry-ids`, `--service-connection-id`, `--repository-mapping`, `--detect` | PUT | Bulk add, remove, retry, or change the service connection for enrolled pipelines. At least one update flag is required. |
| `pipelines retry` | `--org`, `--repository-id`, `--pipeline-ids` | `--detect` | PUT | Retry failed pipeline rewiring entries. |
| `pipelines delete` | `--org`, `--repository-id`, `--migration-id` | `--yes`, `--detect` | DELETE | Delete pipeline rewiring data (configuration and cloned definitions) for a migration. Use this to clean up rewiring data for a failed migration; `abandon` alone doesn't remove it. |

## Parameter details

| Parameter | Type | Used by | Description |
|---|---|---|---|
| `--org` | URL | All | Azure DevOps organization URL, for example `https://dev.azure.com/<org>`. Set this value as a default. |
| `--repository-id` | GUID | All except `list` | Azure Repos repository GUID. Get the value from `az repos show --query id`. Migrations are identified by `repositoryId` only — the API response has no separate migration ID field, and there can be at most one active migration per repository. |
| `--target-repository` | URL | `create` | Target repository URL, for example `https://<enterprise>.ghe.com/<org>/<repo>`. Must start with `http://` or `https://`. The server validates this value. |
| `--target-owner-user-id` | string | `create` | GitHub user ID (handle) of the target repository owner. Deprecated and ignored when server-side, token-based owner resolution is enabled. |
| `--service-endpoint-id` | GUID | `create` | Optional. Azure DevOps service connection ID for the GitHub Enterprise Server connection used to sync commits to the target. When set, GitHub device flow is skipped. Independent of user-identity verification — you can still supply `--github-token` or `ELM_GITHUB_TOKEN` alongside it. |
| `--github-token` | string | `create` | Optional GitHub user token (or PAT) for user-identity verification on the target host. If omitted and `--service-endpoint-id` isn't provided, the CLI checks `ELM_GITHUB_TOKEN` and then runs GitHub device flow. |
| `--agent-pool` | string | `create` | Agent pool name for migration work. |
| `--validate-only` | flag | `create`, `resume` | On `create`: run pre-migration checks only. On `resume`: switch to validate-only mode. Validate-only results expire 24 hours after the run succeeds; start (or promote to) the full migration within that window. |
| `--migration` | flag | `resume` | Promote a succeeded validate-only run to a full migration (sets `validateOnly=false` and `statusRequested=active`). Only valid when the previous validate-only run finished with `status: Succeeded`. Mutually exclusive with `--validate-only`. |
| `--cutover-date` | ISO 8601 | `create` | Pre-schedule cutover at creation time, for example `2030-12-31T11:59:00Z`. |
| `--date` | ISO 8601 | `cutover set` | Schedule cutover date and time, for example `2030-12-31T11:59:00Z`. Must be in the future. |
| `--skip-validation` | string | `create` | Comma-separated list of validation policy names, or a non-negative integer bitmask. Policy names (case-insensitive): `None`, `ActivePullRequestCount`, `PullRequestDeltaSize`, `AgentPoolExists`, `MaxFileSize`, `MaxPullRequestSize`, `MaxPushPackSize`, `MaxReferenceNameLength`, `TargetRepositoryDoesNotExist`, `SourceRepositoryContainsLfsObjects`, `SourceRepositoryNotReadOnly`, `BoardsGitHubConnectionProvisioning`, `All`. |
| `--enable-boards-github-connection` (`--enable-boards-gh`) | flag | `create` | Opt in to provisioning the Azure Boards GitHub connection at cutover. Off by default. Requires the Azure Boards GitHub App to be installed on the target GitHub organization before the migration runs. |
| `--enable-auto-discover-pipelines` (`--auto-discover`) | flag | `create` | Opt in to automatic pipeline discovery at cutover. Off by default. Requires `--pipeline-service-connection-id`; the CLI rejects the command if you pass this flag without a service connection. |
| `--pipeline-service-connection-id` (`--pipeline-sc-id`) | GUID | `create` | Project-scoped GitHub service connection ID attached at create time for pipeline rewiring. Required for auto-discovery; optional in manual mode, where it pre-attaches the connection so later `pipelines submit` calls only need `--pipeline-ids`. |
| `--accept-failures` | integer | `cutover approve` | Number of unprocessed migration resources to accept before proceeding with cutover. Supply this and/or `--pipelines-verified`. |
| `--pipelines-verified` | flag | `cutover approve` | Acknowledge that all rewired pipelines were verified. Required when `cutover review` returns `requiresPipelineVerificationAcknowledgment: true`. Can be combined with `--accept-failures` in one call. |
| `--pipeline-ids` | int list | `pipelines submit`, `pipelines retry` | Pipeline definition IDs. Accepts space-separated (`42 43 44`) or comma-separated (`42,43,44`) values. |
| `--service-connection-id` | GUID | `pipelines submit`, `pipelines update` | Project-scoped GitHub service connection ID. Optional on `submit` if a connection was already attached at create time or via `pipelines update`. |
| `--add-ids` / `--remove-ids` / `--retry-ids` | int list | `pipelines update` | Pipeline IDs to add to, remove from, or retry within the rewiring set. |
| `--repository-mapping` | string | `pipelines submit`, `pipelines update` | Repository mapping in the form `<sourceRepoId>=<targetOwner>/<targetRepo>`. The target must be in `owner/repo` form, not a URL. Can be provided multiple times. |
| `--migration-id` | integer | `pipelines delete` | Migration ID used for pipeline rewiring cleanup. Read it from the `Migration NN:` prefix in the `validationIssues` text of `migrations status`. |
| `--remove-read-only` | flag | `abandon` | After cutover, the source Azure DevOps repository is set to read-only. Add this flag to restore write access. Only applies after cutover. |
| `--yes` (`-y`) | flag | `abandon`, `pipelines delete` | Skip the interactive confirmation prompt. Useful for scripted cleanup. |
| `--include-all` | flag | `list` | Return the full migration history per repository, including completed, failed, and suspended migrations. (`--include-inactive` is a deprecated alias.) |
| `--detect` | flag | All | Auto-detect organization from the git remote (default: `true`). Use `--detect false` to disable. |

## Migration stages

| Stage | Description |
|---|---|
| Queued | Migration accepted; work hasn't started yet. |
| Validation | Running pre-migration checks. |
| Synchronization | Copying and syncing repository content. |
| Cutover | Running the final sync and transitioning to GitHub. |
| ReviewForCutover | Cutover reached the scheduled time with unresolved failures and is waiting for `cutover approve` (or rescheduling). |
| ReadyForCutover | Approved and waiting for the next ELM job to perform the final cutover. |
| Migrated | Migration complete. GitHub is the system of record. |

## Migration statuses

| Status | Meaning |
|---|---|
| Active | Migration is running. |
| Succeeded | Current phase completed successfully. |
| Completed | Migration reached the terminal `Migrated` stage. |
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
