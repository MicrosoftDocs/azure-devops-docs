---
title: Introduction to Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Learn how Enterprise Live Migrations (ELM) helps you migrate Azure DevOps repositories to GitHub Enterprise Cloud with data residency.
ms.subservice: azure-devops-migrate
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/01/2026
#customer intent: As an Azure DevOps administrator, I want to understand Enterprise Live Migrations so I can plan a migration of my Azure Repos to GitHub Enterprise Cloud.
---

# 1. Learn about Enterprise Live Migrations

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Enterprise Live Migrations (ELM) helps you migrate Azure DevOps repositories to GitHub Enterprise Cloud with data residency with minimal disruption. ELM continuously synchronizes the source and target repositories, so your teams can keep working in Azure DevOps Services until you're ready to cutover.

> [!NOTE]
> ELM is currently in private preview. If you're interested in joining, [sign up here](https://nam.dcv.ms/VeDNq3VRhX).

Run ELM from the command line using the Azure DevOps CLI. All migration operations - validate, start, monitor, pause, resume, cutover, and abandon - happen at the CLI. Use the Azure DevOps portal only for one-time setup tasks such as creating a service connection, registering an agent, and checking permissions.

> [!IMPORTANT]
> ELM only supports migrations from Azure DevOps Services to GitHub Enterprise Cloud with data residency. If you currently use Azure DevOps Server, first migrate to Azure DevOps Services before you use ELM.

## Core capabilities

ELM provides the following core capabilities:

- **Continuous synchronization.** ELM syncs changes from Azure DevOps to GitHub by using incremental sync and delta tracking, so teams can keep working in Azure DevOps until cutover. Plan for a brief read-only window at cutover - typically under 30 minutes for most repositories.
- **Single-repository migrations.** During private preview, you start and manage one migration at a time from the CLI. Run the migration commands for each repository in sequence.
<!-- TODO: When the UX ships, update this bullet (and add a planning/sequencing article) to cover multi-repo selection, migration batches, dependencies, and cutover strategies. CLI users still migrate one repository per command, but the UX will let them select and orchestrate multiple repos. Original bullet to restore/adapt: "**Orchestration through migration plans.** ELM manages orchestration through configurable migration plans that let IT teams define migration batches, dependencies, and cutover strategies." -->
- **End-to-end migration workflow.** ELM tracks repository states through initialization, syncing, cutover, validation, and completion. This model gives you visibility into migration progress and supports troubleshooting.
- **Customer-scheduled cutover.** You choose and schedule the cutover time to switch the system of record from Azure DevOps to GitHub.
- **Migration of code and pull requests.** ELM migrates repository code with history and pull requests. Future releases add support for pipeline rewiring and work item board connections.
<!-- TODO: Track the shipping dates for pipeline rewiring and Azure Boards (work item board) connection support. When each ships, update this bullet, the "What you do manually" list, the GitHub Enterprise admin role row, the prerequisites "Azure Boards is installed in the target organization. (Future)" line, and the cut-over-to-github.md "Features in development" section. -->

## Migration data flow

ELM transfers repository data from the source to GitHub Enterprise Cloud over encrypted channels. It migrates repository contents, history, metadata, and permissions, then uses incremental sync to copy only changes after the initial transfer. ELM doesn't store customer repository content outside the migration process.

## Security and data handling

ELM is designed so your repository content stays under your control and Microsoft retains only the minimum operational data needed to run the migration.

### Data in transit

All communication between Azure DevOps, the self-hosted Linux agent, and GitHub Enterprise Cloud uses TLS-encrypted HTTPS. Repository contents are transferred over encrypted Git protocols. ELM doesn't store customer repository content outside the active migration process.

### PAT handling

The GitHub personal access token (PAT) authorizes ELM to write to your target GitHub repository. Treat it as a secret:

- Store the PAT only in an Azure DevOps service connection. Don't commit it to source control, share it in chat, or paste it into logs.
- Grant only the scopes documented in [Prerequisites](prerequisites.md#authentication-setup) (`repo`, `workflow`, `read:org`, `read:user`, `admin:enterprise`). Don't add broader scopes.
- Set a short expiration on the PAT and rotate it after the migration completes. Revoke it immediately if you suspect exposure.
- Limit who can view or edit the service connection to the migration operator and required administrators.

### What Microsoft retains

ELM stores only operational metadata about your migration—repository IDs, migration status, validation results, error messages, and audit events. ELM doesn't retain your repository contents, commit data, or PAT after the migration completes.

### Audit

ELM writes migration lifecycle events to the Azure DevOps audit log so enterprise administrators can review who started, paused, resumed, scheduled cutover for, or abandoned a migration. Use the audit log to support compliance reviews and to reconstruct the migration timeline if you need to investigate an issue.

To view audit events, go to **Organization settings** > **Auditing** and filter by the **Enterprise Live Migrations** area.

<!-- TODO: Expand this subsection after the next ring rollout. Confirm the exact event names and area filter, list which fields each event records, and add any new events that ship (for example, validate, cutover approve, review-for-cutover). Add operator-visible telemetry (CLI status fields, Azure Pipelines run logs to retain) as a separate "Telemetry" subsection once that story is finalized. -->

## Scope of ELM

### What ELM automates

- Runs pre-migration checks.
- Syncs Git code, including branches, change history, and tags to GitHub.
- Syncs pull requests, including titles, descriptions, comments, and user history.
- Creates the target GitHub repository.
- Migrates branch policies to GitHub branch rulesets.
- Cuts over from Azure DevOps to GitHub.

### What you do manually

- Clean up the Azure DevOps repository before migration (large files, pull requests with 10,000+ files, long ref names).
<!-- TODO: Clarify the 10,000+ files-per-PR threshold. Does ELM fail validation, skip the PR, or warn? Add the exact behavior and remediation (split the PR, exclude, etc.) to both this bullet and the validation checks table. -->
- Create the target GitHub organization.
- Verify the post-migration repository state (branches, tags, history, pull requests).
- Rewire Azure Pipelines to reference the new GitHub repository (future).
- Verify and adjust migrated branch rulesets.
- Update hardcoded Azure DevOps repository URLs in scripts, pipelines, and tooling.
- Set up team and user access in GitHub.
- Migrate or decommission work items, wikis, pipelines, and other non-repository data.

## What ELM migrates

### Data that's migrated

ELM currently migrates the following repository data from Azure DevOps Services to GitHub Enterprise Cloud with data residency:

- Git source, including full commit history
- Branches and tags
- Branch policies, migrated as GitHub branch rulesets
- Pull request metadata, including titles, descriptions, source and target branches, and comments
- User history for pull requests

### Data that isn't migrated

ELM doesn't migrate the following data:

- Work items
- Pipeline definitions
- Releases
- Wikis
- Test plans and test results
- Azure Artifacts
- Git LFS objects (future)

ELM migrates active and merged pull requests, plus pull requests with available branch history. Abandoned pull requests with deleted branches aren't migrated.

## How ELM uses pipelines and what to expect for cost

ELM runs in Azure Pipelines by using a self-hosted Linux agent. During a migration, ELM uses two types of jobs:

- **Initial validation** verifies that the repository is ready to migrate. This job runs once.
- **Sync** copies the repository to GitHub and continues to synchronize changes until cutover.

Your self-hosted Linux agent must stay online and available for the duration of the migration.

### How ELM uses your agent pool

ELM minimizes the impact on your existing pipelines. It uses only one agent at a time, regardless of how many agents are in the pool. For each repository, ELM queues one job at a time, doesn't run jobs in parallel, and typically waits 30 to 60 minutes before queueing the next job so other pipeline work can continue.

In practice, ELM behaves like any other pipeline job and shares capacity with your current builds. It shouldn't take over the entire pool or block unrelated work.

### What to expect for cost

ELM itself is free to use. Your only potential cost comes from Azure Pipelines capacity if your organization exceeds its included parallel job allowance.

Each ELM job can run for up to one hour, but Azure Pipelines billing is based on parallel job capacity, not on the number of agents or minutes used. Because ELM limits itself to one concurrent job, many customers can run migrations within their existing capacity without extra cost. If you exceed your included capacity, you might need to purchase additional parallel jobs. Azure Pipelines also includes free minutes for private projects, so added cost usually applies only after the free tier is exhausted.

## Migration workflow

At a high level, an ELM migration follows these steps. Each step links to detailed instructions.

1. **Learn about Enterprise Live Migrations.** Review this overview to understand what ELM does, what it migrates, and how it fits into your migration plan.
1. **Complete prerequisites.** Verify access, tooling, and authentication, and gather the IDs you need to run migration commands. For more information, see [Complete prerequisites](prerequisites.md).
1. **Start the migration.** Authenticate into Azure DevOps, set your defaults, and use the ELM CLI to start the initial synchronization. For more information, see [Start the migration](start-migration.md).
1. **Monitor the migration.** Watch the initial sync and follow-on incremental syncs. For more information, see [Monitor the migration](monitor-migration.md).
1. **Cutover to GitHub.** Schedule the cutover as soon as you're ready. You must complete cutover within 21 days of starting the full migration (when the initial sync begins). For more information, see [Cutover to GitHub](cut-over-to-github.md).
1. **Complete post-migration tasks.** Confirm everything works after the migration completes. For more information, see [Complete post-migration tasks](post-migration.md).

## Pre-migration validation checks

The following table lists the current tool limits checked during validation and what happens if they aren't addressed.

| Limit | Threshold | If not addressed | Recommended action |
|---|---|---|---|
| Single file size in history | > 400 MB | Validation fails and the migration can't start until the file is removed or moved to Git LFS (future). | Rewrite history to remove the file or migrate it to Git LFS (future), then rerun validation. |
| Push pack size | > 2 GB | Validation fails and the migration can't start until the size is reduced. | Reduce repository size by removing or splitting large commits, migrate large files to Git LFS (future), or rewrite history to remove oversized objects. |
| Branch or tag reference name length | > 255 bytes | Validation fails and the migration can't start until refs are renamed or deleted. | Rename or delete the offending branch or tag, then rerun validation. |
| Validation result freshness | Must start the migration within 24 hours of a successful validate-only run. | You must rerun validation before you start a full migration. | Resume or start the full migration promptly after validation, or rerun validate-only. |
| Cutover scheduling window | Must complete cutover within 21 days of starting the full migration (when the initial sync begins). | The migration can't remain in the syncing state indefinitely. You must complete or cancel cutover within the window or restart the migration. | Plan a cutover date early, keep syncs healthy, and coordinate communications before the window closes. |

<!-- TODO: Confirm the 2 GB push pack size limit with engineering. Is this the GitHub-imposed limit, an ELM-imposed limit, or per-push? Also clarify whether ELM's "future" Git LFS support changes this number. -->

## Key roles and responsibilities

| Role | Description | Responsibilities |
|---|---|---|
| Migration operator (ELM user) | Person running the migration with the CLI | Generate a personal access token (PAT) for migration. Run validation and migration commands by using the Azure CLI. Provide the repository GUID, agent pool, and service connection ID. Monitor migration status and resolve errors. Schedule and run the cutover. |
| Azure DevOps Project Collection Administrator (PCA) and Project Administrator (PA) | Organization-level and project-level admin in Azure DevOps | Grant the **Enterprise Live Migrations: Manage Migrations** permission to the migration operator. Create or manage agent pools. Grant access to agent pools and service connections. |
| Agent pool owner | Person managing build agents | Set up a self-hosted Linux agent. Ensure the agent pool is available and accessible. Maintain agent health during migration. |
| Repository owner or dev team | Team that owns the Azure DevOps repository | Clean up the repository before migration (large files, pull requests, and so on). Validate the migrated repository (branches, pull requests, history). Update pipelines, scripts, and tooling post-migration. |
| GitHub Enterprise admin | Admin of the target GitHub organization | Generate a PAT for migration. Ensure the PAT has required scopes (for example, `repo`, `workflow`, `org`). Create the service connection in Azure DevOps by using the PAT. Share the service connection ID with the migration operator. Ensure the target organization exists and is ready. Grant access to users and configure SSO. Install the Azure Boards GitHub app. |

## Next step

> [!div class="nextstepaction"]
> [Complete prerequisites](prerequisites.md)

## Related content

- [Complete prerequisites](prerequisites.md)
- [ELM CLI reference](elm-cli-reference.md)
