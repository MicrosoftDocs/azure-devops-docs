---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 04/16/2025
---

::: moniker range=">=azure-devops"

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - An [Azure DevOps project](../../../organizations/projects/create-project.md).<br>   - An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../../licensing/concurrent-jobs.md) or you can request a free tier.  <br> - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../../create-first-pipeline.md). <br> - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp; To create a pipeline, users need to be in the **Contributors** group and the group needs to have *Create build pipeline* permission set to Allow. Members of the [Build Administrators and Project Administrators groups](../../../organizations/security/permissions.md) can also manage pipelines.
| **GitHub** | - A [GitHub](https://github.com) account. <br>   - A [GitHub service connection](../../library/service-endpoints.md) to authorize Azure Pipelines.|
| **Azure** | An [Azure subscription](https://azure.microsoft.com/free/). |

::: moniker-end

::: moniker range="< azure-devops"

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - An [Azure DevOps project](../../../organizations/projects/create-project.md).<br>   - A self-hosted agent. To create one, see [Self-hosted agents](../../agents/agents.md#self-hosted-agents).  <br> - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../../create-first-pipeline.md). <br> - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp; To create a pipeline, users need to be in the **Contributors** group and the group needs to have *Create build pipeline* permission set to Allow. Members of the [Build Administrators and Project Administrators groups](../../../organizations/security/permissions.md) can also manage pipelines.
| **GitHub** | - A [GitHub](https://github.com) account. <br>   - A [GitHub service connection](../../library/service-endpoints.md) to authorize Azure Pipelines.|
| **Azure** | An [Azure subscription](https://azure.microsoft.com/free/). |

::: moniker-end