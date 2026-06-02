---
title: Start an Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Authenticate into Azure DevOps, validate your repository, and start the initial synchronization for an Enterprise Live Migrations (ELM).
ms.subservice: azure-devops-migrate
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/01/2026
#customer intent: As a migration operator, I want to authenticate, validate, and start an ELM so the initial sync to GitHub Enterprise Cloud begins successfully.
---

# 3. Start the migration

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

After you complete the [prerequisites](prerequisites.md), authenticate into Azure DevOps and start the initial synchronization for your repository. Use the service connection ID you created in the prerequisites when you start the migration.

> [!NOTE]
> All steps in this article use the Azure DevOps CLI. The only exception is checking that your self-hosted Linux agent is online, which you can do from the Azure DevOps portal.

## Authenticate into Azure DevOps

ELM requires authenticated access to Azure DevOps.

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

## Start the agent

Your self-hosted Linux agent must be online and listening before you start a migration.

1. Check the agent status in the Azure DevOps portal under **Project Settings** > **Agent pools**. Select your pool, open the **Agents** tab, and confirm the agent shows as **Online**.
1. If the agent is offline, sign in to the Linux machine where the agent is installed and change to the agent install directory.
1. Start the agent interactively:

   ```bash
   ./run.sh
   ```

1. To run the agent as a service so it stays online across reboots:

   ```bash
   sudo ./svc.sh install
   sudo ./svc.sh start
   ```

For more information, see [Run a self-hosted agent in Linux](../../pipelines/agents/linux-agent.md).

## (Optional) Validate the repository before you start

Run validation first to identify eligibility problems before any data transfers. After you resolve all problems, the repository is ready to sync. You have 24 hours to start the migration before validation expires. If you miss this window, rerun validation.

1. Run validation only:

   ```azurecli
   az devops migrations create --org https://dev.azure.com/<org>
                               --repository-id <repo-guid>
                               --target-repository https://<enterprise>.ghe.com/<org>/<repo>
                               --target-owner-user-id <id>
                               --service-endpoint-id <service-connection-guid>
                               --agent-pool <agent-pool-name>
                               --validate-only
   ```

1. Check validation status:

   ```azurecli
   az devops migrations status --org https://dev.azure.com/<org>
                               --repository-id <repo-guid>
   ```

   For details, see `validationIssues` and `errorMessage` in the output. For current thresholds, see the [validation checks](overview.md#pre-migration-validation-checks).

   > [!IMPORTANT]
   > Proceeding with unresolved validation errors significantly increases the likelihood that the migration fails later. Fix all errors before you continue.

1. After validation succeeds, promote to a full migration:

   ```azurecli
   az devops migrations resume --org https://dev.azure.com/<org>
                               --repository-id <repo-guid>
                               --migration
   ```

   <!-- TODO: Clarify the promote-to-full-migration flow. If validation expired (24 hours), does `resume --migration` re-run validation, fail, or silently start the full sync with stale results? Document the expected behavior and which error appears if validation is stale. -->

## Start the synchronization

Start the synchronization by running the following command. In `--target-repository`, `<repo>` is the GitHub repository name. Choose any available name. It doesn't have to match the Azure DevOps repository name.

<!-- TODO: Clarify two parameter values that aren't documented anywhere:
     1. `--target-owner-user-id` — Is this a GitHub user login (handle), a numeric GitHub user ID, or a GitHub organization slug? Add the format and a how-to-find-it pointer.
     2. `--target-repository` URL — Confirm the canonical hostname format for GitHub Enterprise Cloud with data residency (e.g., `https://<enterprise>.ghe.com/<org>/<repo>` vs. `https://github.<enterprise>.com/...`). Add to the Values to collect checklist in prerequisites.md once confirmed. -->

```azurecli
az devops migrations create --org https://dev.azure.com/<org>
                            --repository-id <repo-guid>
                            --target-repository https://<enterprise>.ghe.com/<org>/<repo>
                            --target-owner-user-id <id>
                            --agent-pool <agent-pool-name>
                            --service-endpoint-id <service-connection-guid>
```

Check status:

```azurecli
az devops migrations status --org https://dev.azure.com/<org>
                            --repository-id <repo-guid>
```

Look for:

- `status` — current migration status (`Active`, `Succeeded`, `Completed`, `Failed`, `Suspended`)
- `stage` — current migration phase (`Validation`, `Synchronization`, `Cutover`, `ReviewForCutover`, `ReadyForCutover`, `Migrated`)
- `validationIssues` — list of precheck failures with error codes and messages
- `errorMessage` — details about the failure

For current thresholds, see the [validation checks](overview.md#pre-migration-validation-checks).

> [!IMPORTANT]
> Unresolved validation errors significantly increase the risk of migration failure. Fix all errors before you proceed.

During the initial sync:

- Azure DevOps remains fully writable. Teams continue working normally.
- GitHub isn't yet the system of record.
- The target GitHub repository is automatically set to private.

> [!IMPORTANT]
> After you start a full migration, you must complete cutover within 21 days. The clock starts when the initial sync begins.

## Next step

> [!div class="nextstepaction"]
> [Monitor the migration](monitor-migration.md)

## Related content

- [Complete prerequisites](prerequisites.md)
- [Cutover to GitHub](cut-over-to-github.md)
- [ELM CLI reference](elm-cli-reference.md)
- [Troubleshoot ELM](troubleshoot.md)
