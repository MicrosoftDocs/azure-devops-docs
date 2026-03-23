---
title: Upload pipeline tasks to Azure DevOps
description: Learn how to upload custom or in-the-box pipeline tasks to Azure DevOps by using the Node CLI for Azure DevOps (tfx-cli).
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 02/26/2026
monikerRange: '<= azure-devops'
---

# Upload pipeline tasks to Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Upload custom or in-the-box pipeline tasks to your Azure DevOps organization or Azure DevOps Server project collection by using the Node CLI for Azure DevOps (tfx-cli).

> [!IMPORTANT]
> When you upload in-the-box tasks to an Azure DevOps Server instance, some task capabilities might not be supported due to the agent version or lack of support on the server side.

For more information about **tfx-cli**, see the [Node CLI for Azure DevOps on GitHub](https://github.com/Microsoft/tfs-cli).

## Prerequisites

| Category | Requirements |
|----------|-------------|
| **Permissions** | Permission to update the organization (Azure DevOps Services) or project collection (Azure DevOps Server). |
| **Tokens** | A [personal access token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with the scope **Environment (Read & Manage)**. |
| **Tools** | [Latest version of Node.js](https://nodejs.org/en/download/) and [tfx-cli](https://github.com/Microsoft/tfs-cli) installed globally: `npm install -g tfx-cli` |

## Sign in with tfx-cli

Sign in to Azure DevOps by using tfx-cli before you upload tasks. For more authentication options, see [Cross-platform CLI authentication for Azure DevOps](../../integrate/get-started/auth/tfs-basic-auth.md).

Run the following command and provide the service URL and PAT when prompted:

```
tfx login
```

Use the service URL that matches your environment:

| Environment | URL format |
|---|---|
| Azure DevOps Services | `https://dev.azure.com/{organization}` |
| Azure DevOps Server | `http://{server}:{port}/DefaultCollection` |


## Upload tasks

> [!TIP]
> If you need to update the in-the-box pipeline tasks, you can clone the [azure-pipelines-tasks](https://github.com/microsoft/azure-pipelines-tasks) repository. Then, build the required tasks by following [the guideline - how to build tasks](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/contribute.md#install-dependencies).

Upload a task by using `tfx-cli`:

```
tfx build tasks upload --task-path <PATH_TO_TASK>
```

> [!NOTE]
> `PATH_TO_TASK` is the path to the folder with the compiled task. For more information about using tfx-cli, see [Node CLI for Azure DevOps documentation](https://github.com/microsoft/tfs-cli/blob/master/README.md).
