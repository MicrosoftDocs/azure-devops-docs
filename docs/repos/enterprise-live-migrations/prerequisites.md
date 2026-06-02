---
title: Prerequisites for Enterprise Live Migrations (ELM)
titleSuffix: Azure DevOps
description: Review the source and target requirements, access, authentication, tooling, and agent setup needed before you start an Enterprise Live Migrations (ELM).
ms.subservice: azure-devops-migrate
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/01/2026
#customer intent: As a migration operator, I want to confirm all ELM prerequisites so I can start a migration without getting blocked on access, tooling, or authentication.
---

# 2. Complete prerequisites

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Before you use ELM, ensure the following requirements are met across Azure DevOps Services and GitHub Enterprise Cloud with data residency.

> [!NOTE]
> Prerequisite setup uses both the Azure DevOps portal and GitHub UI (for one-time tasks such as creating a service connection, registering an agent, and creating a PAT) and the command line (for installing tooling). Each section is labeled so you know where to work.

## Source and target repository requirements

- The migration must originate from Azure DevOps Services (`dev.azure.com`). Azure DevOps Server isn't supported.
- A target GitHub Enterprise Cloud with data residency organization must already exist.
- The target GitHub repository name must not be in use.

To get the Azure DevOps repository GUID, use either method:

<!-- TODO: Decide with Soo whether to keep both methods or pick one. Options: (1) keep both (current) for flexibility; (2) CLI-only — aligns with the rest of the ELM docset, which is CLI-first during private preview; (3) portal-only — easier for operators who haven't installed the Azure DevOps CLI yet. -->

- **Azure DevOps CLI** (recommended):

  ```azurecli
  az repos show --repository <repo-name> --query id -o tsv
  ```

  The command returns the repository GUID. Save it for use when you start the migration.

- **Azure DevOps portal**:

  1. In your Azure DevOps project, go to **Project Settings** > **Repositories**.
  2. Select the repository you want to migrate.
  3. In the browser address bar, copy the GUID that appears after `repositoryId=`. It looks like `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. Save it for use when you start the migration.

## Access requirements

### Azure DevOps Services

- You must have the **Enterprise Live Migrations: Manage Migrations** permission set to **Allow** at the repository level. To check, go to **Project Settings** > **Repositories** > **Security** and confirm your group or user account has this permission. If you don't, contact your Project Collection Administrator (PCA) or Project Administrator (PA) to request access. For more information, see [Set Git repository permissions](../git/set-git-repository-permissions.md).
- If no self-hosted Linux agent is available, a PCA or someone with permission to administer the agent queue must create and register one.
- A user with the appropriate permissions must create the service connection that uses the GitHub PAT.

### GitHub Enterprise Cloud with Data Residency

- A GitHub Enterprise admin must create the personal access token (PAT) and be able to create a service connection in Azure DevOps. The admin then shares the service connection ID with the person running the migration.

<!-- TODO: Pending confirmation, consider expanding this section to the following three bullets:
- You must be a member of the target GitHub enterprise with admin access to the target organization. Enterprise admin access is required to create a PAT with the `admin:enterprise` scope used by ELM.
- The target organization must exist and be ready to receive the migrated repository, including any single sign-on (SSO) configuration and team or user access required after cutover.
- A GitHub Enterprise admin creates the PAT, uses it to create the service connection in Azure DevOps, and then shares the service connection ID with the migration operator.
-->

<!-- TODO: When the Azure Boards connection feature ships, add a requirement here that the Azure Boards GitHub app is installed in the target organization. Confirm with engineering who installs it (GitHub Enterprise admin via GitHub Marketplace?) and link to the install steps. -->

## Authentication setup

Create a PAT in GitHub, then store it in an Azure DevOps service connection.

### Create a PAT in GitHub (GitHub portal)

1. In GitHub, go to **Settings** > **Developer Settings** and select **Personal access tokens**.
1. As a GitHub Enterprise admin, create a classic PAT with the following permissions:

   - `repo` (all)
   - `workflow`
   - `read:org`
   - `read:user`
   - `admin:enterprise` (all)

   <!-- TODO: Confirm the minimum required PAT scopes with engineering. `admin:enterprise (all)` is very broad — is it actually required, or can we drop to a narrower scope (e.g., `read:enterprise` plus `write:org`)? Document which API calls require each scope. -->

1. Copy the PAT and store it securely.
1. Select **Configure SSO** to grant the PAT access to the target organization.

### Create the service connection in Azure DevOps (Azure DevOps portal)

1. Sign in to your Azure DevOps organization.
1. Go to **Project Settings** > **Pipelines** > **Service connections**.
1. Select **New service connection**, choose **GitHub Enterprise Server**, and then select **Next**.
1. For **Authentication method**, select **Personal Access Token**.
1. Enter the GitHub Enterprise URL and paste the GitHub PAT from the previous procedure.
1. Verify and save the service connection.
1. Open the service connection and copy the ID. You need this ID when you start the migration.

For more information, see [Service connections in Azure Pipelines](../../pipelines/library/service-endpoints.md).

## Required tooling

The steps in this section use the command line. Install the Azure CLI and the Azure DevOps CLI extension on the machine you use to run migration commands.

1. Install the Azure CLI. For more information, see [How to install the Azure CLI](/cli/azure/install-azure-cli).

   For example, open Visual Studio Code and run:

   ```powershell
   winget install -e --id Microsoft.AzureCLI
   ```

1. Install the Azure DevOps CLI extension. For more information, see [Get started with Azure DevOps CLI](../../cli/index.md).
1. Install the ELM extension:

   ```azurecli
   az extension add -n azure-devops
   ```

   <!-- TODO: The phrase "ELM extension" is misleading. `azure-devops` is the standard Azure DevOps CLI extension that happens to expose the `az devops migrations` commands. Confirm whether a dedicated ELM extension is planned. If not, rename this step to "Install (or update) the Azure DevOps CLI extension" and remove the duplication with step 2 just above. -->

1. Verify the extension is loaded:

   ```azurecli
   az devops migrations --help
   ```

1. To update an existing installation:

   ```azurecli
   az extension update -n azure-devops
   ```

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

## Values to collect

Use this checklist to collect the values you need before you start the migration.

| Field | Example | Your value |
|---|---|---|
| Azure DevOps organization URL | `https://dev.azure.com/myorg` |  |
| Azure DevOps project name | `MyProject` |  |
| Azure DevOps repository name | `my-repo` |  |
| Azure DevOps repository GUID | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |  |
| Target GitHub organization URL | `https://contoso.ghe.com/MyOrg` |  |
| Target repository name | `MyProject-MyRepo` |  |
| Service connection ID | `cd32d354-xxxx-xxxx-xxxx-xxxx` |  |
| GitHub PAT for the service connection | `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |  |
| Self-hosted Linux agent pool name | `Default` |  |
| GitHub user ID | `MyHandle` |  |

## Next step

> [!div class="nextstepaction"]
> [Start the migration](start-migration.md)

## Related content

- [Learn about Enterprise Live Migrations](overview.md)
- [Start the migration](start-migration.md)
- [ELM CLI reference](elm-cli-reference.md)
