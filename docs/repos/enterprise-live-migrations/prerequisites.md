---
title: Prerequisites for Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Review the source and target requirements, access, authentication, tooling, and agent setup needed before you start an Enterprise Live Migrations (ELM).
ms.subservice: azure-devops-migrate
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 08/06/2026
#customer intent: As a migration operator, I want to confirm all ELM prerequisites so I can start a migration without getting blocked on access, tooling, or authentication.
---

# 2. Complete prerequisites

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Before you use ELM, ensure the following requirements are met across Azure DevOps Services and GitHub Enterprise Cloud with data residency.

## Source and target repository requirements

- The migration must originate from Azure DevOps Services (`dev.azure.com`). Azure DevOps Server isn't supported.
- A target GitHub Enterprise Cloud with data residency enterprise (`<enterprise>.ghe.com`) must already exist.
- The target GitHub repository name must not be in use.

To get the Azure DevOps repository GUID, choose one of the following tabs:

### [Azure DevOps CLI](#tab/azure-devops-cli)

```azurecli
az repos show --repository <repo-name> --query id -o tsv
```

The command returns the repository GUID. Save it for use when you start the migration.

### [Azure DevOps portal](#tab/azure-devops-portal)

1. In your Azure DevOps project, go to **Project Settings** > **Repositories**.
1. Select the repository you want to migrate.
1. In the browser address bar, copy the GUID that appears after `repositoryId=`. It looks like `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. Save it for use when you start the migration.

---

## Access requirements

### Azure DevOps Services

| Requirement | Details |
|---|---|
| Enterprise Live Migrations permission | You must have the **Enterprise Live Migrations: Manage Migrations** permission set to **Allow** at the repository level. To check, go to **Project Settings** > **Repositories** > **Security** and confirm your group or user account has this permission. If you don't, contact your Project Collection Administrator (PCA) or Project Administrator (PA) to request access. For more information, see [Set Git repository permissions](../git/set-git-repository-permissions.md). |
| Self-hosted Linux agent availability | If no self-hosted Linux agent is available, a PCA or someone with permission to administer the agent queue must create and register one. |
| Service connection creation permission | A user with the appropriate permissions must create the service connection for pipeline rewiring. |

## Install the Azure DevOps ELM app from GitHub Marketplace 
As a GitHub enterprise admin, install the Azure DevOps ELM app for both your enterprise and the target organization.

1. Go to `https://<enterprise>.ghe.com/apps/external-app/azure-devops-elm`.
1. Select your target enterprise.

   :::image type="content" source="media/complete-prerequisites/select-target-enterprise-elm.png" alt-text="Screenshot of the Azure DevOps ELM installation page with the target enterprise and organizations available for selection.":::

1. Select **Install**.

   :::image type="content" source="media/complete-prerequisites/select-install-azure-devops-elm.png" alt-text="Screenshot of the Azure DevOps ELM enterprise installation page with the migration permission and Install button.":::

1. Return to `https://<enterprise>.ghe.com/apps/external-app/azure-devops-elm`, and then select your target organization.

   :::image type="content" source="media/complete-prerequisites/select-target-organization-elm.png" alt-text="Screenshot of the Azure DevOps ELM installation page with the target organization available for selection.":::

1. Select **All repositories** > **Install**.

   :::image type="content" source="media/complete-prerequisites/select-all-repositories-elm.png" alt-text="Screenshot of the Azure DevOps ELM organization installation page with All repositories selected and the Install button.":::

## Required tooling

The steps in this section use the command line. Install the Azure CLI and the Azure DevOps CLI extension on the machine you use to run migration commands.

1. Install the Azure CLI. For more information, see [How to install the Azure CLI](/cli/azure/install-azure-cli).

   For example, open Visual Studio Code and run:

   ```powershell
   winget install -e --id Microsoft.AzureCLI
   ```

1. Install the Azure DevOps CLI extension. For more information, see [Get started with Azure DevOps CLI](../../cli/index.md):

   ```azurecli
   az extension add -n azure-devops
   ```

   The `az devops migrations` commands ship as part of the standard `azure-devops` extension. There's no separate ELM extension to install.

1. Verify the extension loaded:

   ```azurecli
   az devops migrations --help
   ```

1. To update an existing installation:

   ```azurecli
   az extension update -n azure-devops
   ```

1. (Recommended) Set your Azure DevOps organization as the default so every `migrations` command targets the right host:

   ```azurecli
   az devops configure --defaults organization=https://dev.azure.com/<org>
   ```

   If you skip this step and run commands from a folder where the `git` remote points to a different organization, the CLI's auto-detection picks that remote instead of your `--org` value. To force it off for a single command, add `--detect false`.

## Configure a self-hosted Linux agent

Use the Azure DevOps portal to select or create an agent pool, and then run the agent setup scripts on a Linux machine.

1. In **Project Settings**, go to **Agent pools** under **Pipelines**, choose the pool you want to use for the migration, and save the pool name.
1. If you don't have a pool to use, create a self-hosted Linux agent. For more information, see [Deploy an Azure Pipelines agent on Linux](../../pipelines/agents/linux-agent.md). The short version:

   1. Confirm that you have permission to register an agent. If you're a PCA, you already have this access.
   1. In your Azure DevOps organization settings, go to **Pipelines** > **Agent pools**.
   1. Select the **Default** pool or your self-hosted pool.
   1. Open the **Agents** tab and select **New agent**.
   1. In the **Get the agent** dialog, select **Linux** and download the agent.
   1. On your Linux machine, unpack the agent into the directory of your choice and change to that directory.
   1. Run `./config.sh` and then `./run.sh`.

> [!IMPORTANT]
> You must use a Linux-based agent. Windows-based and macOS-based agents aren't supported.

## Turn on auditing

ELM records migration lifecycle events in the Azure DevOps audit log, including start, pause, resume, scheduled cutover, and abandon actions. Admins can view these events under **Organization settings** > **Auditing**.

## Optional setup for hybrid scenarios

Use this section if you plan to keep using Azure DevOps with GitHub after migration.

### Install Azure Boards on GitHub

If you plan to continue using Azure Boards after migration, a GitHub enterprise admin must install the Azure Boards app in your GitHub organization before migration starts. This app enables ELM to create the Boards connection so teams can link GitHub commits and pull requests back to Azure DevOps work items.

To verify installation, go to `https://<enterpriseUrl>/organizations/<orgName>/settings/installations` and confirm that Azure Boards is listed. If Azure Boards isn't listed, ask a GitHub enterprise admin to install the Azure Boards app in your enterprise app catalog.

### Create a service connection for pipeline rewiring

If you plan to use Azure DevOps and GitHub in a hybrid setup and connect your GitHub repository to Azure Pipelines, complete these steps before starting the migration.

1. Confirm that the Azure Pipelines app is installed in your GitHub enterprise at `https://<enterpriseUrl>/organizations/<orgName>/settings/installations`.
1. If Azure Pipelines isn't listed, ask a GitHub enterprise admin to install the app: `https://<enterprise>.ghe.com/apps/external-app/azure-pipelines`. Select **Configure** and ensure that **Repository access** is set to **All Repositories**.
1. In Azure DevOps, under **Project Settings**, select **Service connections**.
1. Select **New service connection** and choose **GitHub Enterprise Cloud with data residency**.
1. Add your GitHub URL and organization name, and then select **Authorize**.
1. Add a service connection name, and then select **Save**.
1. Open the service connection you created and copy the ID. You need this ID for pipeline rewiring.

### Values to collect for CLI-based migration

Use this checklist if you plan to start and manage migration by using Azure DevOps CLI commands instead of the Azure DevOps UI.

| Field | Example | Your value |
|---|---|---|
| Azure DevOps organization URL | `https://dev.azure.com/<org>` |  |
| Azure DevOps project name | `MyProject` |  |
| Azure DevOps repository name | `my-repo` |  |
| Azure DevOps repository GUID | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |  |
| Target GitHub organization URL | `https://<enterprise>.ghe.com/<org>` |  |
| Target repository name | `MyProject-MyRepo` |  |
| Pipeline connection ID | `9f6aa94e-xxxx-xxxx-xxxx-xxxx` |  |
| Self-hosted Linux agent pool name | `<agent pool name>` |  |

## Next step

> [!div class="nextstepaction"]
> [Start the migration](start-migration.md)

## Related content

- [Learn about Enterprise Live Migrations](overview.md)
- [Start the migration](start-migration.md)
- [ELM CLI reference](elm-cli-reference.md)
