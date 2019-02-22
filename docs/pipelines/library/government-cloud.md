---
title: Azure Government Cloud deployment
ms.custom: seodec18
description: Understand Azure Government Cloud deployment in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 857AB27D-FA16-44DB-B1C4-CBE946A0A1AD
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2017'
---

# Deploy apps to Azure Government Cloud

**Azure Pipelines | TFS 2017  | TFS 2018**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

[Azure Government Clouds](https://azure.microsoft.com/overview/clouds/government/)
provide private and semi-isolated locations for specific Government or other services, separate from the normal
Azure services. Highest levels of privacy have been adopted for these clouds, including restricted data access policies.

Azure Pipelines is not available in Azure Government Clouds, so there are some special considerations when you
want to deploy apps to Government Clouds because artifact storage, build,
and deployment orchestration must execute outside the Government Cloud.

To enable connection to an Azure Government Cloud, you specify it as the **Environment** parameter when you create an
[Azure Resource Manager service connection](connect-to-azure.md).
You must use the full version of the service connection dialog to manually define the connection.
Before you configure a service connection, you should also ensure you meet all relevant compliance requirements for your application.

You can then use the service connection in your [build and release pipeline tasks](../tasks/index.md).

### Next

* [Deploy an Azure Web App](../apps/cd/deploy-webdeploy-webapps.md)
* [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md)

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
