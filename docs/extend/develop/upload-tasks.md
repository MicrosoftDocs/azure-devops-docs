---
title: Upload pipeline tasks to Azure DevOps
description: Learn how to upload custom or in-the-box pipeline tasks to Azure DevOps by using the Node CLI for Azure DevOps (tfx-cli).
ms.topic: how-to
ms.custom: UpdateFrequency3
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ai-usage: ai-assisted
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
| **Permissions** | Membership in the **Agent Pool Administrators** group at the organization or collection level. See [Security groups, service accounts, and permissions](../../organizations/security/permissions.md). |
| **Tokens** | A [personal access token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with the scope **Agent Pools (Read & manage)**, or a [Microsoft Entra token](../../integrate/get-started/authentication/entra-oauth.md). Entra tokens are recommended over PATs for better security. |
| **Tools** | [Latest version of Node.js](https://nodejs.org/en/download/) and [tfx-cli](https://github.com/Microsoft/tfs-cli) installed globally: `npm install -g tfx-cli` |

## Sign in with tfx-cli

Sign in to Azure DevOps by using tfx-cli before you upload tasks. For more authentication options, see [Cross-platform CLI authentication for Azure DevOps](../../integrate/get-started/auth/tfs-basic-auth.md).

Run the following command and provide the service URL and PAT when prompted:

```shell
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

```shell
tfx build tasks upload --task-path <PATH_TO_TASK>
```

`PATH_TO_TASK` is the path to the folder that contains the compiled task, including `task.json`.

> [!IMPORTANT]
> Pipeline agents cache tasks by version. If you modify a task and re-upload it with the same version number, agents continue to use the cached copy. Always bump at least the patch version in `task.json` before you upload an updated task.

## Verify the upload

Confirm that your task uploaded successfully:

```shell
tfx build tasks list
```

The output lists all tasks on the server, including the `id`, `name`, and `version` of each task.

## Delete a task

Remove an uploaded task by specifying its ID. Get the task ID from the `tfx build tasks list` output.

```shell
tfx build tasks delete --task-id <TASK_ID>
```

> [!WARNING]
> Deleting a task removes it from the server. Any pipeline that references the deleted task fails on the next run.

## Troubleshooting

| Error | Cause | Fix |
|-------|-------|-----|
| **401 Unauthorized** | PAT expired, revoked, or missing the **Agent Pools (Read & manage)** scope. | Create a new PAT with the correct scope. |
| **403 Forbidden** | Your account isn't in the **Agent Pool Administrators** group. | Ask an organization admin to add you. |
| **Task already exists** | Uploaded the same version that's already on the server. | Bump the patch version in `task.json` and upload again. |

For more information about tfx-cli, see the [Node CLI for Azure DevOps documentation](https://github.com/microsoft/tfs-cli/blob/master/README.md).

## Related content

- [Add a custom pipelines task extension](add-build-task.md)
- [Use personal access tokens to authenticate](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)
- [Node CLI for Azure DevOps (GitHub)](https://github.com/Microsoft/tfs-cli)
