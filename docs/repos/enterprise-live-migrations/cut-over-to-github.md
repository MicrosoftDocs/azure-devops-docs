---
title: Cutover to GitHub for an Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Schedule and complete cutover from Azure DevOps to GitHub Enterprise Cloud, review unresolved failures, and approve a Review for cutover.
ms.subservice: azure-devops-migrate
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/01/2026
#customer intent: As a migration operator, I want to schedule and run cutover so that GitHub becomes the authoritative system of record.
---

# 5. Cutover to GitHub

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

After the initial sync finishes, your repository is ready for cutover. Complete cutover within 21 days of starting the initial sync.

> [!IMPORTANT]
> Cutover typically completes in under 30 minutes, during which the Azure DevOps repository is read-only. While the repository is read-only, pushes and pull request updates are blocked, but users can still browse and clone. Notify all affected teams before you schedule cutover.

<!-- TODO: Confirm with Soo: (1) the "typically under 30 minutes" duration matches what we say in overview.md and is the current measured/expected behavior; (2) the read-only behavior is accurate — pushes and PR updates blocked, browse and clone still allowed. Adjust if any of those assumptions are wrong. -->

## Before you schedule cutover

Confirm the following conditions:

- Incremental syncs are healthy and current.
- GitHub repository branches, tags, and pull requests are present and correct.
- All affected teams are notified.
- Hardcoded Azure DevOps URLs in pipelines, scripts, and tooling are identified for update.

> [!NOTE]
> Scheduling, monitoring, and approving cutover use the Azure DevOps CLI. After cutover, you validate the migrated repository in the GitHub portal. For more information, see [Complete post-migration tasks](post-migration.md).

## Schedule cutover

```azurecli
az devops migrations cutover set --org https://dev.azure.com/<org>
                                 --repository-id <repo-guid>
                                 --date "YYYY-MM-DDTHH:MM:SSZ"
```

**Time zone guidance**: Append `Z` for UTC, or use an offset such as `-08:00` for Pacific Time. If you omit the time zone, your local time zone is assumed. To avoid ambiguity across teams, include `Z` or an explicit offset.

### Cancel a scheduled cutover

```azurecli
az devops migrations cutover cancel --org https://dev.azure.com/<org>
                                    --repository-id <repo-guid>
```

## What happens during cutover

1. The Azure DevOps repository is placed into a controlled read-only state.
1. ELM performs the final synchronization. Remaining deltas are applied to GitHub.
1. GitHub becomes the authoritative system of record.
1. A banner appears on the Azure DevOps repository page that links users to the new GitHub location.
1. The migration state is marked **Migrated** / **Succeeded**.

## Monitor cutover progress

```azurecli
az devops migrations status --org https://dev.azure.com/<org>
                            --repository-id <repo-guid>
```

Wait until the migration shows `status: Succeeded` and `stage: Migrated`.

> [!NOTE]
> ELM jobs run every 30 to 60 minutes. If you schedule cutover as soon as the migration enters the cutover stage, it might take up to 60 minutes before the cutover job starts.

> [!IMPORTANT]
> After cutover completes, pull requests opened in GitHub aren't synced back to Azure DevOps.

## Review for cutover

If unresolved failures remain when the scheduled cutover time arrives, ELM moves the migration to **ReviewForCutover** instead of continuing automatically. For example, this condition can happen when some pull requests can't be migrated. In this state, you must review the failures and explicitly decide whether to proceed.

### Review cutover failures

```azurecli
az devops migrations cutover review --org https://dev.azure.com/<org>
                                    --repository-id <repo-guid>
```

The command returns a summary of unresolved items:

| Field | Description |
|---|---|
| `failedCount` | Number of items that failed to migrate. |
| `blockedCount` | Number of items blocked by dependencies. |
| `pendingCount` | Number of items still pending. |
| `totalUnprocessedCount` | Total items requiring approval. |
| `unprocessedItems` | Detailed list of unprocessed items with URLs and error messages. |

Review the `failedItems` list carefully so you understand which items aren't migrated if you choose to continue.

### Options in ReviewForCutover

After you review the failures, choose one of the following options:

| Option | What it does | When to use |
|---|---|---|
| Approve and proceed | Accepts the failures and advances to cutover. | You've reviewed all failures and are OK proceeding without those items. |
| Clear cutover date | Resets to **Synchronization**. Migration keeps syncing. | You want to fix the issues first and schedule a new cutover later. |
| Reschedule cutover | Resets to **Synchronization** with a new cutover date. | You want more time. If failures resolve by the new date, cutover proceeds automatically. |
| Delete the migration | Aborts the GitHub migration and marks it as **Failed**. | You want to abandon this migration entirely. |
| Pause the migration | Suspends syncing until you manually resume it. | You need to pause all activity while you investigate. |

<!-- TODO: Document the CLI command to reschedule cutover. Is it `az devops migrations cutover set` again with a new `--date`, or a separate `reschedule` action? The other options in this table map to explicit commands; this one doesn't. -->

### Approve cutover

If you decide to continue, approve the cutover by accepting the number of items to skip:

```azurecli
az devops migrations cutover approve --org https://dev.azure.com/<org>
                                     --repository-id <repo-guid>
                                     --accept-failures <N>
```

Set `<N>` to a value greater than or equal to `totalUnprocessedCount` from the cutover review.

> [!NOTE]
> If new failures appear after you review and before you approve, the command is rejected. Run the review again, note the updated count, and retry the approval.

<!-- TODO: Document the exact error message or error code returned when `cutover approve` is rejected due to new failures, so operators can match it in scripts/automation. -->

After approval, the migration moves to **ReadyForCutover**:

- If a cutover date is already scheduled, cutover proceeds automatically at the scheduled time.
- If no cutover date is set, schedule one to proceed.

## Next step

> [!div class="nextstepaction"]
> [Complete post-migration tasks](post-migration.md)

## Related content

- [Monitor the migration](monitor-migration.md)
- [Learn about Enterprise Live Migrations](overview.md)
- [ELM CLI reference](elm-cli-reference.md)
