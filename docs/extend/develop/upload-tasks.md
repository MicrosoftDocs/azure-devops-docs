---
title: Upload tasks to Azure DevOps collection
description: Upload tasks to Azure DevOps collection using Cross-platform CLI for Azure DevOps
ms.topic: conceptual 
ms.date: 01/20/2022
monikerRange: 'azure-devops'
---

# Upload tasks in Azure DevOps collection using Cross-platform CLI for Azure DevOps

[!INCLUDE [version-all](../../includes/version-all.md)]

## Prerequisites

- You can download the latest version of **Node.js source code**, from the [Node.js source code downloads page](https://nodejs.org/en/download/)
- Install the **Cross-platform CLI for Azure DevOps**
  - Install **tfx-cli** using `npm`, a component of Node.js by running:

   ```no-highlight
    npm i -g tfx-cli 
   ```

    For more information about **tfx-cli**, see the [Node CLI for Azure DevOps on GitHub](https://github.com/Microsoft/tfs-cli).

## Tfx-cli sign in with Personal access token

> [!IMPORTANT]
> You should create [personal access token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with access to Environment (Read & manage).

You should specify the path to DefaultCollection as URL, in case of Azure DevOps server it will depend on the domain where the server is located.

```
~$ tfx login
Copyright Microsoft Corporation

> Service URL: {url}
> Personal access token: xxxxxxxxxxxx
Logged in successfully
```

Examples of valid URLs are:

- `https://yourorganization.visualstudio.com/DefaultCollection`
- `http://localhost/DefaultCollection`

## Upload tasks to Azure DevOps collection

> [!TIP]
> If you need to update default Azure DevOps tasks, you can clone [azure-pipelines-tasks](https://github.com/microsoft/azure-pipelines-tasks) repo and build needed tasks following [the guideline - how to build tasks](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/contribute.md#install-dependencies).

Now you can start to upload task using `tfx`.

Enter the following command:

```no-highlight
tfx build tasks upload --task-path <PATH_TO_TASK>
```