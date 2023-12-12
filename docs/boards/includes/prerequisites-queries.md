---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 09/07/2021
---


## Prerequisites

::: moniker range="azure-devops"

* You must have **Stakeholder** access to view and run shared queries. All project members have Stakeholder access by default. For more information, see [Change the permissions for a shared query or folder](../queries/set-query-permissions.md).
* You must have **Basic** access or higher to add and save a shared query. 
* You must have your **Contribute** permission set to **Allow** for the folder that you want to add a query to. By default, the **Contributors** group *doesn't* have this permission. 

> [!NOTE]  
> Users with **Stakeholder** access for a public project have full access to query features just like users with **Basic** access. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

::: moniker-end

::: moniker range="< azure-devops"

* By default, all project members and users with **Stakeholder** access can view and run all shared queries. You can change the permissions set for a shared query folder or shared query. For more information, see [Set query permissions](../queries/set-query-permissions.md).  
* To add and save a query under **Shared queries**, you must be granted **Basic** access or higher. Also, you must have your **Contribute** permission set to **Allow** for the folder you want to add the query to. By default, the **Contributors** group doesn't have this permission. 

::: moniker-end
