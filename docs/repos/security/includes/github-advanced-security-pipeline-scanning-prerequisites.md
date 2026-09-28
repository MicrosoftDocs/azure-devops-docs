---
ms.topic: include
ms.service: azure-devops-repos
ms.author: laurajiang
author: laurajjiang
ms.date: 09/28/2026
---

| Category | Requirements |
|--------------|-------------|
| **Permissions** | - To view a summary of all alerts for a repository: **Contributor** permissions for the repository.<br>- To dismiss alerts in Advanced Security: **Project administrator** permissions.<br>- To manage permissions in Advanced Security: Member of the [**Project Collection Administrators**](../../../organizations/security/change-organization-collection-level-permissions.md) group or **Advanced Security: manage settings** permission set to *Allow*. |
| **Pipeline tasks** | - In **Organization settings** > **Pipelines** > **Settings** > **Task restrictions**, ensure **Disable Marketplace tasks** is turned off. Code scanning and dependency scanning rely on Azure Pipelines tasks distributed through the Visual Studio Marketplace. If you disable Marketplace tasks, default setup can't run scans, and advanced setup pipelines might report that a task is missing. For more information, see [Task management](/azure/devops/pipelines/process/tasks#task-management). |

For more information about Advanced Security permissions, see [Manage Advanced Security permissions](../github-advanced-security-permissions.md).
