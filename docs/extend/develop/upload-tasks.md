---
title: Uploading tasks to the Azure DevOps collection
description: Uploading tasks to the Azure DevOps collection using the Node CLI for Azure DevOps
ms.topic: conceptual
ms.date: 01/20/2022
monikerRange: 'azure-devops'
---

# Upload tasks to project collection

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to upload tasks to organization for custom tasks or in-the-box tasks in Azure DevOps using the Node CLI for Azure DevOps (tfx-cli).

For example, this guideline can help to update in-the-box tasks on Azure DevOps Server.

> [!IMPORTANT]
> When uploading in-the-box tasks to an on-premises instance, some task capabilities might not be supported due to the old agent version or lack of support on the Azure DevOps Server side.

For more information about **tfx-cli**, see the [Node CLI for Azure DevOps on GitHub](https://github.com/Microsoft/tfs-cli).

## Prerequisites

To upload tasks to project collection, you need prerequisites:

- The [latest version](https://nodejs.org/en/download/) of **Node.js**.
- The **Node CLI for Azure DevOps** to upload tasks.
  - Install **tfx-cli** using `npm`, a component of Node.js by running:

   ```
    npm install -g tfx-cli
   ```
- Permissions to update required project collection, PAT generated with scope **Environment (Read & Write)** to be able to upload tasks to the project collection.
  [!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

## Tfx-cli sign in with personal access token

Sign in to Azure DevOps with tfx-cli to upload pipeline tasks to the project collection.

> [!IMPORTANT]
> A personal access token is required by default for authentication to project collection in Azure DevOps. Create [personal access token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with scope **Environment (Read & manage)**.
> You can use other ways to authorize with tfx-cli. For more information, see [Authenticate in Cross-platform CLI for Azure DevOps](../../integrate/get-started/auth/tfs-basic-auth.md).

To sign in, specify the path to project collection as URL. The default name of the project collection is `DefaultCollection`.

For Azure DevOps Services, path to project collection would have the following format:
`https://{Azure DevOps organization name}.visualstudio.com/DefaultCollection`

For Azure DevOps Server, the default project collection URL depends on the location of the url server and its template:
`http://{Azure DevOps Server url}/DefaultCollection`

Enter the following command and provide requested information:

```
~$ tfx login
```


## Uploading tasks to the project collection

> [!TIP]
> If you need to update in-the-box pipeline tasks, you can clone [azure-pipelines-tasks](https://github.com/microsoft/azure-pipelines-tasks) repository, and build required tasks following [the guideline - how to build tasks](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/contribute.md#install-dependencies).

Now you can start to upload task using `tfx-cli`.

Enter the following command:

```
tfx build tasks upload --task-path <PATH_TO_TASK>
```

> [!NOTE]
> PATH_TO_TASK is the path to the folder with the compiled task. For more information about using tfx-cli, see [Node CLI for Azure DevOps documentation](https://github.com/microsoft/tfs-cli/blob/master/README.md).
