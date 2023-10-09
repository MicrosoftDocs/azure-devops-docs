---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 10/09/2023
---

When setup asks for your authentication type, choose one of the following authentication types. Agent setup will prompt you for the specific additional information required for each authentication type. For more information, see [Self-hosted agent authentication options](../agent-authentication-options.md).

:::moniker range="azure-devops"

* [**PAT**](../pat-agent-registration.md)
* [**AAD**](../aad-agent-registration.md) (device code flow authentication)
* [**SP**](../sp-agent-registration.md) (Service Principal authentication)

:::moniker-end

:::moniker range="<= azure-devops-2022"

* [**PAT**](../pat-agent-registration.md)
* [**Alternate**](../agent-authentication-options.md#alternate-alt) Connect to Azure DevOps Server or TFS using Basic authentication. After you select **Alternate** you'll be prompted for your credentials.

:::moniker-end
