---
title: Monitor an Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Monitor sync progress, pause and resume, and cancel an Enterprise Live Migrations (ELM) from Azure DevOps to GitHub Enterprise Cloud.
ms.subservice: azure-devops-migrate
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/01/2026
#customer intent: As a migration operator, I want to monitor sync progress and manage in-flight ELM migrations so I can cutover with confidence.
---

# 4. Monitor the migration

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

The initial sync can take several hours or even days to complete, depending on the size of your repository. After the initial synchronization finishes, ELM continues to perform periodic syncs for up to 21 days to capture ongoing updates. During this 21-day window, you must run the cutover to finalize the migration.

> [!NOTE]
> All steps in this article use the Azure DevOps CLI.

To see which repositories are in each phase, run `az devops migrations list` and filter by the `stage` field. Errors surface in the migration status output so you can identify and fix issues before you continue.

<!-- TODO: When the portal experience ships, restore the UX-flavored description: "Throughout the migration workflow, you can select each phase to view the repositories currently in that stage. If errors are detected during a phase, they appear so you can identify and fix issues before you continue." Also confirm the exact CLI filter syntax for `stage` (for example, `--query "[?stage=='Synchronization']"`) and add an example. -->

> [!IMPORTANT]
> **Concurrency limit**: You can have up to 20 active migrations in progress at the same time. To start another migration, complete cutover for at least one active migration first.

<!-- TODO: Confirm the 20-concurrent-migration limit with engineering. Is this per organization, per project, per agent pool, or per tenant? What error does the operator see when they hit the limit? -->

## Track migration status

To list all migrations for your organization:

```azurecli
az devops migrations list --org https://dev.azure.com/<org>
```

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

<!-- TODO: Quantify "on schedule" and "stalled." What's the expected sync cadence (every 30–60 min per cut-over-to-github.md)? At what age of last successful sync should the operator consider the migration stalled and intervene? How many automatic retries does ELM perform before marking the migration Failed? -->

## Resume after a sync error

If sync errors occur, investigate the error details and fix the underlying issue. Then, let ELM resume automatically, or run:

```azurecli
az devops migrations resume --org https://dev.azure.com/<org>
                            --repository-id <repo-guid>
```

## Pause and resume the migration

If you need to temporarily stop a migration and restart it in the same mode:

Pause:

```azurecli
az devops migrations pause --org https://dev.azure.com/<org>
                           --repository-id <repo-guid>
```

Resume:

```azurecli
az devops migrations resume --org https://dev.azure.com/<org>
                            --repository-id <repo-guid>
```

> [!NOTE]
> You can pause a migration for any length of time, but the 21-day cutover window still applies.

## Cancel the migration

At any point during syncing, if you want to stop and delete a migration, run the following command. This action permanently deletes the migration record, and you're prompted to confirm.

```azurecli
az devops migrations abandon --org https://dev.azure.com/<org>
                             --repository-id <repo-guid>
```

If you're abandoning a migration *after* cutover and the source Azure DevOps repository is still in the controlled read-only state, add `--remove-read-only` to lift it. The flag has no effect before cutover.

```azurecli
az devops migrations abandon --org https://dev.azure.com/<org>
                             --repository-id <repo-guid>
                             --remove-read-only
```

To skip the interactive confirmation prompt (for scripted cleanup), add `--yes`.

After you abandon a migration:

- **Source repository**: Your Azure DevOps repository is unchanged and fully writable. No cleanup is required.
- **Audit trail**: The migration record isn't retained, but an audit event is written to record that the migration was abandoned. For more information, see [Audit](overview.md#audit).
- **Starting a new migration**: You can create a new migration for the same source repository, but a short cooldown applies before the new migration can start. If you want to reuse the same target GitHub repository name, first delete the existing GitHub repository. You must have **Delete repository** permission in GitHub to do this.

<!-- TODO: Confirm the exact cooldown duration after `abandon` (engineering says "not immediate" but couldn't quantify). Update this section with the specific wait time (or range) once known. -->

## Next step

> [!div class="nextstepaction"]
> [Cutover to GitHub](cut-over-to-github.md)

## Related content

- [Start the migration](start-migration.md)
- [ELM CLI reference](elm-cli-reference.md)
- [Troubleshoot ELM](troubleshoot.md)
