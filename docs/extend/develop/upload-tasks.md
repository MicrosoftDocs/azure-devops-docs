---
title: Uploading tasks to the Azure DevOps Services or Azure DevOps Server collection
description: Uploading tasks to the Azure DevOps Services or Azure DevOps Server collection using the Cross-platform CLI for Azure DevOps
ms.topic: conceptual
ms.date: 01/20/2022
monikerRange: 'azure-devops'
---

# Uploading tasks to the Azure DevOps Services or Azure DevOps Server collection using the Cross-platform CLI for Azure DevOps

[!INCLUDE [version-all](../../includes/version-all.md)]

Learn how to upload tasks to organization for custom tasks or in-the-box tasks in Azure DevOps Services or Azure DevOps Server using the cross-platform CLI for Azure DevOps (tfx-cli).

For example, this guideline can help to update in-the-box tasks on Azure DevOps Server.

For more information about **tfx-cli**, see the [Node CLI for Azure DevOps on GitHub](https://github.com/Microsoft/tfs-cli).

## Prerequisites

To upload tasks to collection, you need the following software and tools:

- The [latest version](https://nodejs.org/en/download/) of **Node.js**.
- The **Cross-platform CLI for Azure DevOps** to upload tasks.
  - Install **tfx-cli** using `npm`, a component of Node.js by running:

   ```no-highlight
    npm install -g tfx-cli
   ```
- The collection administrator privileges, for creating PAT with permission **Environment (Read & Write)** to be able to upload tasks to the collection.

## Tfx-cli sign in with Personal access token

> [!IMPORTANT]
> You should create [personal access token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with access to Environment (Read & manage).

To connect tfx-cli to collection - you should specify the path to DefaultCollection as URL.

If using the Azure DevOps Services, path to DefaultCollection has template:
`https://{Azure DevOps organization name}.visualstudio.com/DefaultCollection`

For Azure DevOps Server default collection URL will depend on the domain where the server is located and its template will be:
`http://{Azure DevOps Server domain}/DefaultCollection`

> [!TIP]
> If the Azure DevOps Server is hosted on the current computer, you can specify `http://localhost/DefaultCollection` by default.

Enter the following command:

```
~$ tfx login
Copyright Microsoft Corporation

> Service URL: {url}
> Personal access token: xxxxxxxxxxxx
Logged in successfully
```

## Uploading tasks to the collection

> [!TIP]
> If you need to update in-the-box pipeline tasks, you can clone [azure-pipelines-tasks](https://github.com/microsoft/azure-pipelines-tasks) repository, and build required tasks following [the guideline - how to build tasks](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/contribute.md#install-dependencies).

To upload the task to collection using tfx-cli, you should specify the path to the folder with the compiled task.

Now you can start to upload task using `tfx`.

Enter the following command:

```no-highlight
tfx build tasks upload --task-path <PATH_TO_TASK>
```