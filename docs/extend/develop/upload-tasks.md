---
title: Upload tasks to Azure DevOps collection
description: Upload tasks to Azure DevOps collection using Cross-platform CLI for Azure DevOps
ms.topic: conceptual 
ms.date: 01/20/2022
monikerRange: 'azure-devops'
---

# Upload tasks in Azure DevOps collection using Cross-platform CLI for Azure DevOps

[!INCLUDE [version-all](../../includes/version-all.md)]

Learn how to upload tasks to organization for custom tasks or off-the-shelf tasks in Azure DevOps services or server using the cross-platform CLI for Azure DevOps (tfx-cli).

For example, this guideline can help to update in-the-box tasks on Azure DevOps server.

For more information about **tfx-cli**, see the [Node CLI for Azure DevOps on GitHub](https://github.com/Microsoft/tfs-cli).

## Prerequisites

To upload tasks to collection in Azure DevOps, you need the following software and tools:

- The [latest version](https://nodejs.org/en/download/) of **Node.js**.
- The **Cross-platform CLI for Azure DevOps** to upload tasks.
  - Install **tfx-cli** using `npm`, a component of Node.js by running:

   ```no-highlight
    npm install -g tfx-cli
   ```
- The collection administrator privileges, for create PAT with permission **Environment (Read & Write)** to be able upload tasks to collection.

## Tfx-cli sign in with Personal access token

> [!IMPORTANT]
> You should create [personal access token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with access to Environment (Read & manage).

To connect tfx-cli to your collection - you should specify the path to DefaultCollection as URL.

In case of Azure DevOps services path to DefaultCollection has template:
`https://{your organization}.visualstudio.com/DefaultCollection`

In case of Azure DevOps server it will depend on the domain where the server is located and has template:
`http://{your domain of ADO server}/DefaultCollection`

> [!TIP]
> If the Azure DevOps server is hosted on the current computer, you can specify `http://localhost/DefaultCollection` by default.

```
~$ tfx login
Copyright Microsoft Corporation

> Service URL: {url}
> Personal access token: xxxxxxxxxxxx
Logged in successfully
```

## Upload tasks to Azure DevOps collection

> [!TIP]
> If you need to update in-the-box pipeline tasks, you can clone [azure-pipelines-tasks](https://github.com/microsoft/azure-pipelines-tasks) repo and build required tasks following [the guideline - how to build tasks](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/contribute.md#install-dependencies).

Now you can start to upload task using `tfx`.

Enter the following command:

```no-highlight
tfx build tasks upload --task-path <PATH_TO_TASK>
```