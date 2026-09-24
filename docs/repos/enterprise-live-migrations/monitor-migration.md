---
title: Monitor an Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Monitor sync progress, pause and resume, and cancel an Enterprise Live Migrations (ELM) from Azure DevOps to GitHub Enterprise Cloud.
ms.subservice: azure-devops-migrate
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 08/06/2026
#customer intent: As a migration operator, I want to monitor sync progress and manage in-flight ELM migrations so I can cutover with confidence.
---

# 4. Monitor the migration

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

The initial sync can take several hours or even days to complete, depending on the size of your repository. After the initial synchronization finishes, ELM continues to perform periodic syncs for up to 21 days to capture ongoing updates. During this 21-day window, you must run the cutover to finalize the migration.

To see which repositories are in each phase, run `az devops migrations list` and filter by the `stage` field. Errors surface in the migration status output so you can identify and fix issues before you continue.

> [!IMPORTANT]
> **Concurrency limit**: Each enterprise can have up to 30 active migrations in progress at once, including a maximum of 20 initial migrations. To free capacity for another migration, complete the cutover for an existing migration.

## Track migration status

#### [Azure DevOps CLI](#tab/track-cli)

List all migrations for your organization:

```azurecli
az devops migrations list --org https://dev.azure.com/<org>
```

#### [Azure DevOps portal](#tab/track-portal)

1. In your project, open **Project settings**.
1. Under **Repos**, select **Migration to GitHub**.

---

### Migration stages

| Stage | Description |
|---|---|
| Queued | Migration accepted; work hasn't started yet. |
| Validation | Running pre-migration checks. |
| Synchronization | Copying and syncing repository content. |
| Cutover | Running the final sync and transitioning to GitHub. |
| ReviewForCutover | Cutover reached the scheduled time with unresolved failures and is waiting for `cutover approve` (or rescheduling). |
| ReadyForCutover | Approved and waiting for the next ELM job to perform the final cutover. |
| Migrated | Migration complete. GitHub is the system of record. |

### Migration statuses

| Status | Meaning |
|---|---|
| Active | Migration is running. |
| Succeeded | Current phase completed successfully. |
| Completed | Migration reached the terminal `Migrated` stage. |
| Failed | An error occurred. You can resume after you fix the issue. |
| Suspended | Manually paused. You can resume. |

### What to watch for

- **Last successful sync time** — confirm syncs are running on schedule.
- **Sync state** — identify whether the migration is progressing or stalled.
- **Error conditions** — ELM retries transient failures automatically. Persistent errors require investigation.

## Resume after a sync error

If sync errors occur, investigate the error details and fix the underlying issue. Then, let ELM resume automatically, or use one of the following methods.

#### [Azure DevOps CLI](#tab/error-cli)

```azurecli
az devops migrations resume --org https://dev.azure.com/<org>
                            --repository-id <repo-guid>
```

#### [Azure DevOps portal](#tab/error-portal)

On the migration dashboard, locate the repository, and then select **Resume sync**.

---

## Pause and resume the migration

If you need to temporarily stop a migration and restart it in the same mode:

#### [Azure DevOps CLI](#tab/pause-resume-cli)

To pause the migration, run:

```azurecli
az devops migrations pause --org https://dev.azure.com/<org>
                           --repository-id <repo-guid>
```

To resume the migration, run:

```azurecli
az devops migrations resume --org https://dev.azure.com/<org>
                            --repository-id <repo-guid>
```

#### [Azure DevOps portal](#tab/pause-resume-portal)

On the migration dashboard, locate the repository, select the ellipsis (**...**), and then select **Pause** or **Resume**.

---

> [!NOTE]
> You can pause a migration for any length of time, but the 21-day cutover window still applies.

## Cancel the migration

At any point during syncing, you can stop and delete a migration. This action permanently deletes the migration record.

#### [Azure DevOps CLI](#tab/cancel-cli)

Run the following command. You're prompted to confirm.

```azurecli
az devops migrations abandon --org https://dev.azure.com/<org>
                             --repository-id <repo-guid>
```

After cutover, the Azure DevOps repository is set to read-only. If you want to resume writing to it, add `--remove-read-only` to restore write access. This flag only applies after cutover.

```azurecli
az devops migrations abandon --org https://dev.azure.com/<org>
                             --repository-id <repo-guid>
                             --remove-read-only
```

To skip the interactive confirmation prompt (for scripted cleanup), add `--yes`.

#### [Azure DevOps portal](#tab/cancel-portal)

On the migration dashboard, locate the repository, and then select **Cancel**.

---

After you abandon a migration:

- **Source repository**: Your Azure DevOps repository is unchanged and fully writable. No cleanup is required.
- **Audit trail**: The migration record isn't retained, but an audit event is written to record that the migration was abandoned. For more information, see [Audit](overview.md#audit).
- **Starting a new migration**: You can create a new migration for the same source repository, but a short cooldown applies before the new migration can start. If you want to reuse the same target GitHub repository name, first delete the existing GitHub repository. You must have **Delete repository** permission in GitHub to do this.

## Next step

> [!div class="nextstepaction"]
> [Cutover to GitHub](cut-over-to-github.md)

## Related content

- [Start the migration](start-migration.md)
- [ELM CLI reference](elm-cli-reference.md)
- [Troubleshoot ELM](troubleshoot.md)
