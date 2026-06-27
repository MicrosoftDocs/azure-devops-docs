---
title: Start an Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Authenticate into Azure DevOps, validate your repository, and start the initial synchronization for an Enterprise Live Migrations (ELM).
ms.subservice: azure-devops-migrate
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/26/2026
#customer intent: As a migration operator, I want to authenticate, validate, and start an ELM so the initial sync to GitHub Enterprise Cloud begins successfully.
---

# 3. Start the migration

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

After you complete the [prerequisites](prerequisites.md), authenticate into Azure DevOps and then start the initial synchronization for your repository. Use the service connection ID you created in the prerequisites when you start the migration.

## Prerequisites

| Requirement | Details |
|---|---|
| Azure DevOps Repository GUID | Obtained from the `az repos show --query id` command for your Azure DevOps repository, or from the Azure DevOps portal repository settings. |
| Self-hosted Linux agent | Agent installed and registered in your Azure DevOps project, and running (**Online**) under **Project Settings** > **Agent pools**. |
| Azure DevOps Service connection to GitHub | Created in Azure DevOps with GitHub Enterprise Admin's PAT. |
| GitHub Personal Access Token | Generated with required scopes: `repo`, `admin:org`, `delete_repo`. Token must be valid during migration (up to 21 days). |
| Azure DevOps permissions | The migration operator must have the Enterprise Live Migrations: Manage Migrations permission. |
| Network access | Firewall rules allow the agent machine to communicate with both Azure DevOps (`dev.azure.com`) and GitHub endpoints. |
| (Optional) Pipeline Connection ID | Created from the Azure DevOps service connection for pipeline rewiring. |
| (Optional) Azure Pipelines and Azure Boards | Installed Azure Pipelines and Azure Boards in your target GitHub enterprise. |

If any item is incomplete, see the [prerequisites](prerequisites.md) before you continue.

## Authenticate into Azure DevOps

ELM requires authenticated access to Azure DevOps.

#### [Azure DevOps CLI](#tab/azure-devops-cli)

1. Sign in to the Azure CLI:

   ```azurecli
   az login
   ```

1. Set your default Azure DevOps organization:

   ```azurecli
   az devops configure --defaults organization=https://dev.azure.com/myorg
   ```

   > [!TIP]
   > If your local Git remote points to a different organization, add `--detect false` to all migration commands to prevent autodetection from choosing the wrong organization.

1. Verify your access:

   ```azurecli
   az devops project list
   ```

1. Get the repository GUID:

   ```azurecli
   az repos show --org https://dev.azure.com/<org>
                 --project <project>
                 --repository <repo-name>
                 --query id
                 -o tsv
   ```

#### [Azure DevOps portal](#tab/azure-devops-portal)

1. Sign in to your Azure DevOps organization at `https://dev.azure.com/<org>`.
1. Open the target project, and then select **Project settings**.
1. Select **Repositories** and confirm the repository you plan to migrate is present.
1. Keep the portal open so you can verify agent status later under **Project settings** > **Agent pools**.

---

## Start the agent

Your self-hosted Linux agent must be online and listening before you start a migration.

**Required: Interactive agent startup**

Complete these steps to start the agent interactively. This step is required for the migration.

1. Check the agent status in the Azure DevOps portal under **Project Settings** > **Agent pools**. Select your pool, open the **Agents** tab, and confirm the agent shows as **Online**.
1. If the agent is offline, sign in to the Linux machine where the agent is installed and change to the agent install directory.
1. Start the agent interactively:

   ```bash
   ./run.sh
   ```

The agent runs in the foreground. Keep this terminal session open while the migration is in progress.

**Optional: Production setup - run the agent as a service**

For long-running migrations, configure the agent to run as a system service so it can restart if the machine reboots or the connection drops.

1. To run the agent as a service so it stays online across reboots:

   ```bash
   sudo ./svc.sh install
   sudo ./svc.sh start
   ```

When to use each mode:

- Use service mode for migrations expected to take more than two hours, migrations during off-hours, or scenarios where the machine might reboot or the connection could drop.
- Use interactive mode for quick migrations (less than 30 minutes), attended migrations where you monitor progress, or environments where system services require extra approval.
- Agent mode doesn't affect sync speed. Whether you run `./run.sh` or `sudo ./svc.sh start`, migration speed and data transfer rate are the same.

For more information, see [Run a self-hosted agent in Linux](../../pipelines/agents/linux-agent.md).

### Troubleshoot agent startup

If the agent fails to start or stays offline after you run `./run.sh`, check the following items:

- Permissions: Make sure the agent directory has execute permissions (`chmod +x run.sh`) and the user has write access to the directory.
- Port conflict: Check that the agent listener port isn't used by another process (`netstat -an | grep <agent-port>`).
- Network: Confirm the agent machine can reach `dev.azure.com` and required GitHub endpoints.
- Service startup failure: If you use `sudo ./svc.sh start`, review service logs by using `journalctl -u vstsagent.<org>-<project>-<agent-name>.service`.

## Choose your migration path

Before you start migration, choose your operating path:

- Move fully to GitHub and stop using Azure DevOps for source control.
- Use a hybrid model and move source code to GitHub while continuing to use Azure DevOps for pipelines and/or boards.

For hybrid mode, decide whether ELM rewires Azure Pipelines and creates the Azure Boards connection, or whether your team handles those updates separately.

Also decide whether to validate first and start sync within 24 hours, or let ELM start synchronization automatically after validation succeeds.

## Start the synchronization

#### [Azure DevOps CLI](#tab/elm-cli-start)

Start with this base command for every migration:

```azurecli
az devops migrations create --org https://dev.azure.com/<org>
                            --repository-id <repo-guid>
                            --target-repository https://github.com/<org>/<repo>
                            --github-token <github-pat>
                            --service-endpoint-id <service-connection-guid>
                            --agent-pool <agent-pool-name>
```

In `--target-repository`, `<repo>` is the GitHub repository name. Choose any available name. It doesn't need to match the Azure DevOps repository name.

Add optional parameters based on your migration scenario:

| Scenario | Add this parameter | Result |
|---|---|---|
| Validate before syncing | `--validate-only` | ELM runs validation only. You must start sync within the 24-hour validation window. |
| Automatically start sync after validation | No extra parameter | ELM validates first, then starts synchronization automatically if validation succeeds. |
| Automatically discover and rewire pipelines | `--enable-auto-discover-pipelines` and `--pipeline-service-connection-id <service-connection-id>` | ELM finds pipelines that reference the source repository and rewires them to GitHub. |
| Manually choose pipelines to rewire later | `--pipeline-service-connection-id <service-connection-id>` | ELM prepares migration for manual pipeline rewiring after sync starts. |
| Don't use ELM for pipeline rewiring | Omit both pipeline rewiring parameters | ELM migrates the repository only. You can update pipelines separately. |

Check migration status:

```azurecli
az devops migrations status --org https://dev.azure.com/<org>
                            --repository-id <repo-guid>
```

Look for:

- `status` - current migration status (`Active`, `Succeeded`, `Completed`, `Failed`, `Suspended`)
- `stage` - current migration phase (`Queued`, `Validation`, `Synchronization`, `Cutover`, `ReviewForCutover`, `ReadyForCutover`, `Migrated`)
- `validationIssues` - list of precheck failures with error codes and messages
- `errorMessage` - details about the failure

#### [Azure DevOps portal](#tab/elm-portal-start)

1. In your project, open **Project settings**.
1. Under **Repos**, select **Migration to GitHub**.
1. Select **Start a new migration**.
1. Choose one or more repositories to migrate, and then select **Next**.
1. On the migration details page, provide the following values:
   - **Migrate action**: Select either **Migrate selected repositories after validation** or **Run validation and migrate later**.
   - **Target repository**: Enter the GitHub repository URL in the format `https://<enterpriseUrl>/<orgname>/<repo>`.
   - **GitHub token**: Paste your GitHub personal access token.
   - **Customize target repository names for all selected repos** (optional): Add a prefix and/or suffix. Don't use spaces in repository names.
   - **Service connection**: Select the GitHub service connection created in prerequisites.
   - **Agent pool**: Select the self-hosted Linux agent pool where your migration agent is running.
   - **Create a Boards connection** (optional): Select if you want ELM to create a Boards connection.
   - **Automatically discover and rewire pipelines** (optional): Select to use pipeline rewiring.
   - **Pipeline service connection** (optional): Select the pipeline service connection created in prerequisites.
1. Select **Run validation** or **Start migration**, based on the migrate action you selected.
1. Open the migration details and confirm validation is running.

---

## Validate before syncing

Use this flow if you started migration with `--validate-only` or selected **Run validation and migrate later**.

#### [Azure DevOps CLI](#tab/elm-cli-validate)

1. Start sync within 24 hours after validation succeeds:

   ```azurecli
   az devops migrations resume --org https://dev.azure.com/<org>
                               --repository-id <repo-guid>
                               --migration
   ```

1. Recheck status:

   ```azurecli
   az devops migrations status --org https://dev.azure.com/<org>
                               --repository-id <repo-guid>
   ```

#### [Azure DevOps portal](#tab/elm-portal-validate)

1. In your Azure DevOps project, go to **Project settings** > **Repos** > **Migration to GitHub**.
1. Open the migration that completed validation successfully.
1. Select **Start sync** to promote validation to full synchronization.
1. Confirm the migration status changes to the synchronization stage.

> [!IMPORTANT]
> Proceeding with unresolved validation errors significantly increases the likelihood that migration fails later. Fix all errors before you promote to full migration.

> [!IMPORTANT]
> 24-hour validation window: Each validation is valid for 24 hours from completion. If you don't promote to full migration within this window, validation expires and you must rerun validation.

---

## Manual pipeline rewiring (hybrid mode)

Use this workflow when you choose to rewire pipelines manually.

> [!NOTE]
> The `az devops migrations pipelines` commands (`list`, `submit`, `update`, `retry`, and `delete`) are in preview.

#### [Azure DevOps CLI](#tab/elm-cli-manual-rewire)

1. Find the pipeline definition IDs that reference the migrating repository.

   `az devops migrations pipelines list` reports only the pipelines that are *already enrolled* in rewiring and their rewiring status. Before you submit any pipelines, it returns an empty result, so you can't use it to discover candidate pipelines. To find the definition IDs to rewire, list the pipelines that build from the source repository:

   ```azurecli
   az pipelines list --org $org \
                     --project $project \
                     --repository $rid \
                     --repository-type tfsgit \
                     --query "[].{id:id, name:name}" -o table
   ```

   Use the `id` values from the output as the `--pipeline-ids` in the next step.

   > [!NOTE]
   > `az pipelines list --repository` returns only pipelines whose default trigger repository is the source repository. A pipeline that references the repository through a resource, template, or checkout step (rather than as its primary repository) might not appear here. Include those definition IDs as well if you know they depend on the migrating repository.

1. Submit selected pipeline definition IDs for rewiring (maximum 200 IDs per request):

   ```azurecli
   az devops migrations pipelines submit --org $org \
                                        --repository-id $rid \
                                        --pipeline-ids 42 43 44 \
                                        --service-connection-id $scid
   ```

   `--service-connection-id` is optional if you already attached a connection through `--pipeline-service-connection-id` in `migrations create` or a previous `pipelines update --service-connection-id`.

1. If a pipeline references other repositories, map each source repository to its GitHub target:

   ```azurecli
   az devops migrations pipelines submit --org $org \
                                        --repository-id $rid \
                                        --pipeline-ids 42 43 44 \
                                        --service-connection-id $scid \
                                        --repository-mapping aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa=<GH_ORG>/shared-templates \
                                        --repository-mapping bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb=<GH_ORG>/another-repo
   ```

   Format: `--repository-mapping <sourceRepoId>=<targetOwner>/<targetRepo>` (repeatable).

1. Monitor and adjust the pipeline set:

   ```azurecli
   az devops migrations pipelines list --org $org --repository-id $rid -o table
   ```

   After you submit pipelines, this command lists each enrolled pipeline and its rewiring status:

   | Column | Meaning |
   |---|---|
   | `DefinitionId` | Pipeline definition ID |
   | `Name` | Pipeline name (falls back to the YAML filename if the name isn't available yet) |
   | `Classification` | How the pipeline references the repository |
   | `Status` | Current rewiring state of the pipeline |
   | `ErrorMessage` | Failure detail when the pipeline is in a failed state |

   ```azurecli
   az devops migrations pipelines update --org $org \
                                        --repository-id $rid \
                                        --add-ids 50 51 \
                                        --remove-ids 42 \
                                        --retry-ids 43 \
                                        --service-connection-id $scid
   ```

   - `--add-ids`: add more pipelines.
   - `--remove-ids`: remove pipelines from rewiring.
   - `--retry-ids`: retry pipelines in `Failed` state.
   - At least one of `--add-ids`, `--remove-ids`, `--retry-ids`, `--service-connection-id`, or `--repository-mapping` is required.

   Retry-only shortcut:

   ```azurecli
   az devops migrations pipelines retry --org $org --repository-id $rid --pipeline-ids 43
   ```

1. Review and approve at cutover when stage is `ReviewForCutover`:

   ```azurecli
   az devops migrations cutover review --org $org --repository-id $rid -o table
   ```

   Review key fields:

   | Field | Meaning |
   |---|---|
   | `FailedCount` / `BlockedCount` / `PendingCount` / `TotalUnprocessedCount` | Counts of unprocessed items (failed, blocked, pending, and total) |
   | `RequiresPipelineVerification` (`requiresPipelineVerificationAcknowledgment`) | If `true`, approval must include `--pipelines-verified` |
   | `State` / `Type` / `PullRequestUrl` (from `failedItems[]`) | Per-item failure details |

1. Approve cutover:

   ```azurecli
   az devops migrations cutover approve --org $org \
                                       --repository-id $rid \
                                       --pipelines-verified
   ```

   If you also accept unprocessed items:

   ```azurecli
   az devops migrations cutover approve --org $org \
                                       --repository-id $rid \
                                       --accept-failures 3 \
                                       --pipelines-verified
   ```

   You must supply at least one of `--accept-failures` or `--pipelines-verified`.

#### [Azure DevOps portal](#tab/elm-portal-manual-rewire)

1. In the migration dashboard, open the menu for the migrating repository and select **Rewire pipelines**.
1. Select **Rewire** on the pipelines you want to connect.
1. A blue status indicator shows rewired pipelines.

---

During the initial sync:

- Azure DevOps remains fully writable. Teams continue working normally.
- GitHub isn't yet the system of record.
- The target GitHub repository is automatically set to private.

> [!IMPORTANT]
> After you start a full migration, you must complete cutover within 21 days. The clock starts when initial sync begins.

## Next step

> [!div class="nextstepaction"]
> [Monitor the migration](monitor-migration.md)

## Related content

- [Complete prerequisites](prerequisites.md)
- [Cutover to GitHub](cut-over-to-github.md)
- [ELM CLI reference](elm-cli-reference.md)
- [Troubleshoot ELM](troubleshoot.md)
