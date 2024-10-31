---
title: Create Classic releases
description: Learn how to create Classic release pipelines
ms.assetid: 2FF35C3B-FBF9-407F-8467-2D336973E63C
ms.topic: tutorial
ms.author: ronai
author: RoopeshNair
ms.date: 10/31/2024
monikerRange: '<= azure-devops'
---

# Create Classic releases

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]



## Create release pipelines

Releases can be created in several ways:

1. By using a [deployment trigger](triggers.md) to create a release every time a new build artifact is available.

    :::image type="content" source="media/trigger-01.png" alt-text="Continuous deployment triggers":::

1. By using the **Create release** button from within your **Pipelines** > **Releases** to manually create a release pipeline.

    :::image type="content" source="media/create-release-ui.png" alt-text="Create a release pipeline from the UI":::

1. By using the [REST API](/rest/api/azure/devops/release) to create a release definition.

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts). 

## Related articles

- [Release deployment control using approvals](approvals/approvals.md).
- [Release deployment control using gates](approvals/gates.md).
- [Release triggers](triggers.md).
- [Release artifacts and artifact sources](artifacts.md).
- [Add stages, dependencies, & conditions](../process/stages.md).
