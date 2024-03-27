---
author: ckanyika
ms.author: ckanyika
ms.date: 3/26/2024
ms.topic: include
---

### Azure service connections indicate when a secret has expired

With this sprint, you can now see the expiration status of secrets in Azure service connections. If your tasks show an error due to an expired secret, such as messages with "AADSTS7000222," go to the service connection details page. If you see this message,the service connection's secret has expired:

> [!div class="mx-imgBorder"]
> ![Screenshot of secret has expired.](../../media/236-pipelines-02.png "Screenshot of secret has expired")

To fix the service connection, you can [convert](https://aka.ms/azdo-rm-workload-identity-conversion) it to use workload identity federation. This approach removes the necessity for rotating secrets, offering a more streamlined and secure management process.

### New AzureFileCopy@6 task supports secret-less configurations

You might [block](/azure/storage/common/shared-key-authorization-prevent?tabs=portal) the use of storage account keys and SAS tokens on your storage accounts. In these situations the AzureFileCopy@5 task, which relies on SAS tokens, can't be used.

The new [AzureFileCopy@6](/azure/devops/pipelines/tasks/reference/azure-file-copy-v6) task uses Azure RBAC to access blob storage instead. This requires the identity of the service connection used to have the appropriate RBAC role e.g. [Storage Blob Data Contributor](/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-contributor). See [Assign an Azure role for access to blob data](/azure/storage/blobs/assign-azure-role-data-access?tabs=portal).

The [AzureFileCopy@6](/azure/devops/pipelines/tasks/reference/azure-file-copy-v6) task also supports service connections that use [workload identity federation](https://aka.ms/azdo-rm-workload-identity).

### Resource utilization alerts for Azure Pipeline agents

[Last October](/azure/devops/release-notes/2023/pipelines/sprint-228-update#pipeline-logs-now-contain-resource-utilization), we introduced the ability to monitor memory and disk space utilization by the Pipelines agent.

To inform you about these constraints, we've improved the visibility of resource constraint alerts:

> [!div class="mx-imgBorder"]
> ![Screenshot of Limited memory and disk space warning.](../../media/236-pipelines-01.png "Screenshot of Limited memory and disk space warning")

Should you encounter messages indicating a lack of responsiveness from the agent, it could signify that a task is exceeding the resource capabilities allocated to the agent, potentially causing pipeline job failures. 

> "We stopped hearing from the agent"

To address this, enable [verbose logs](/azure/devops/pipelines/troubleshooting/review-logs#configure-verbose-logs) for more detailed tracking of resource utilization, helping to pinpoint where resources are being exhausted. For those utilizing a self-hosted agent, ensure your agent has sufficient resources.
