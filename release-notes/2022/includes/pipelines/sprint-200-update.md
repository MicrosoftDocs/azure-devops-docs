---
author: gloridelmorales
ms.author: glmorale
ms.date: 2/28/2022
ms.topic: include
---

### Updates to Azure File Copy task

We are rolling out a new version of Azure File Copy task. This task is used to copy files to Microsoft Azure storage blobs or virtual machines (VMs). The new version has several updates that have been often requested by the community:

* The AzCopy tool's version has been updated to 10.12.2, which has support for file content types. As a result, when you copy PDF, Excel, PPT, or one of the supported mime types, the file's content type is set correctly.

* With the new version of AzCopy, you can also configure a setting to clean the target when the destination type is Azure Blob. Setting this option will delete all the folders/files in that container. Or if a blob prefix is provided, all the folders/files in that prefix will be deleted.

* The new version of the task relies on Az modules that are installed on the agent instead of AzureRM modules. This will remove an unnecessary warning in some cases when using the task.

The changes are part of a major version update for this task. You would have to explicitly update your pipelines to use the new version. We made this choice of updating the major version to ensure that we do not break any pipelines that are still dependent on AzureRM modules.
