---
title: Manage Search, indexing
description: Check indexing status, pause, resume, and reindex repositories or collections for Search in Azure DevOps Server.
ms.assetid: 
ms.custom: engagement-fy23
ms.subservice: azure-devops-search
ai-usage: ai-assisted
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 02/18/2026
monikerRange: '< azure-devops'
---

# Manage search indexing

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

You can manage your search extension and indexing status. These actions include the following tasks:
- [Check indexing status](#check-indexing-status)
- [Pause indexing](#pause-indexing)
- [Resume indexing](#resume-indexing)
- [Reindex a repository or collection](#reindex-a-repository-or-collection)

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Permissions** | Member of the [Project Collection Administrators](../../user-guide/project-admin-tutorial.md) group. |
| **Tasks** | Complete [Install and configure Search](install-configure-search.md). |

## Manage indexing

To manage search, run PowerShell and SQL scripts.
You can download all of these scripts from the **[Code-Search GitHub repository](https://github.com/Microsoft/Code-Search)**.
Use the **Download ZIP** option to download all scripts into a local folder on the server that runs the database for Azure DevOps Server.

The PowerShell scripts require the SQL script files.
Make sure the **SqlScripts** folder and its contents are present, along with the PowerShell scripts.

:::image type="content" source="media/administration/script-filesv2.png" alt-text="Screenshot showing download script files for administration." border="true":::

### Check indexing status

To check the indexing status after you configure Search, or after you install the extension for a collection, complete the following steps.

1. Run the `ExtensionInstallIndexingStatus.ps1` script with **administrative privileges** and enter the following information:

   - The SQL server instance name where the Azure DevOps Server configuration database is located.
   - The name of the Azure DevOps Server collection database.
   - The name of the Azure DevOps Server configuration database.
   - The name of the collection.
   - The number of previous days to check indexing status.
 
1. Review the following outputs:

   - **Collection indexing was triggered successfully:** Indicates that indexing is in progress.
   - **Repositories Indexing Completed:** Lists repositories whose indexing completed and is searchable.
   - **Status of repositories currently indexing:** Lists the names of all the repositories that are still being indexed and are partially searchable. It takes some time for indexing to complete.
 
1. Run the `RecentIndexingActivity.ps1` script at intervals for indexing progress. This script takes the same parameters as the `ExtensionInstallIndexingStatus.ps1` script:

   - **Repositories completed fresh indexing:** Shows number of repositories for which indexing completed within the specified time interval.
   - **Count of repositories with fresh indexing in progress:**  Shows the number of repositories for which indexing isn't complete. These repositories are still being indexed and are partially searchable.
   - **Repositories completed continuous indexing:**  Shows the number of commits processed in the specified time interval. The number might not exactly match the total number of pushes to the repository because merges are committed as they're indexed.
   - **Count of repositories with continuous indexing in progress:** Shows the number of repositories for which the commits are still being processed. These repositories show incomplete results until indexing is completed.
   - **Count of indexing job failures:**  Shows the number of indexing jobs that failed. Repositories associated with these indexing jobs could potentially show incomplete results until later indexing jobs for the same repositories patched the failed indexing.

If you encounter any problems, get support on the [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html). 

### Pause indexing

To pause all indexing, run `PauseSearchIndexing.ps1`.
Pausing indexing is useful if there are spikes in CPU utilization after configuring Search.
You're prompted to enter the following information.
* The SQL server instance name where the Azure DevOps Server configuration database is
* The name of the Azure DevOps Server configuration database

### Resume indexing

If you paused indexing, run `ResumeIndexing.ps1` to start it again.
You're prompted to enter the following information.
* The SQL server instance name where the Azure DevOps Server configuration database is
* The name of the Azure DevOps Server configuration database

### Reindex a repository or collection

To reindex a Git or TFVC repository, run the appropriate version of the script, `Re-IndexingRepository.ps1`, for your Azure DevOps Server version.
You're prompted to enter the following information.

* The SQL server instance name where the Azure DevOps Server configuration database is
* The name of the Azure DevOps Server collection database
* The name of the Azure DevOps Server configuration database
* The type of reindexing to execute, either `Git\_Repository` or `TFVC\_Repository`
* The name of the collection
* The name of the repository to reindex

To reindex a **collection**, run the script `TriggerCollectionIndexing.ps1`.
You're prompted to enter the following information.
* The SQL server instance name where the Azure DevOps Server configuration database is
* The name of the Azure DevOps Server collection database
* The name of the Azure DevOps Server configuration database
* The name of the collection
* The entities to reindex, either `All`, `Code`, `WorkItem`, or `Wiki`

## Search limitations

If you do a disaster recovery (DR) operation and move your server back to an earlier snapshot of your SQL database, [reindex all your collections](manage-search.md#reindex-a-repository-or-collection).

## Related content

- [Install and configure Search](install-configure-search.md)
