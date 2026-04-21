---
title: View Classic pipeline history
description: Learn how to check your Classic pipeline history to find previous changes.
ms.topic: how-to
ms.assetid: AB81E23E-DD84-4BDB-ACD9-AE03D783A303
ms.date: 12/23/2025
monikerRange: '<= azure-devops'
---

# View Classic pipeline history

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Pipelines, you can create a Classic pipeline to build your project. This article walks you through viewing your Classic pipeline’s history so you can see what changed, when the change occurred, and who made it.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An [Azure DevOps organization](../../organizations/accounts/create-organization.md).<br> - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> - A [Classic pipeline](../ecosystems/dotnet-core.md#create-a-pipeline). |

## View pipeline history

Follow these steps to view your Classic pipeline history:

::: moniker range=" azure-devops"   

1. Sign in to your Azure DevOps organization, then navigate to your project.

2. Select **Pipelines**, select your Classic pipeline, and then select **Edit**.

3. Select the **History** tab to view all changes, including who made each change and when it occurred.

    :::image type="content" source="media/classic-pipeline-history-devops.png" alt-text="A screenshot displaying how to view Classic pipeline history in Azure DevOps Services.":::

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps collection, then navigate to your project.

2. Select **Pipelines**, select your Classic pipeline, and then select **Edit**.

3. Select the **History** tab to view all changes, including who made each change and when it occurred.

    :::image type="content" source="media/classic-pipeline-history-devops-services.png" alt-text="A screenshot displaying how to view Classic pipeline history.":::

::: moniker-end

4. To take action on a specific change, select it, select the ellipsis **...**, and then select **Compare Difference** or **Revert Pipeline**.
    
    :::image type="content" source="media/pipeline-history-compare-difference.png" alt-text="A screenshot displaying the Classic pipeline history difference.":::

> [!NOTE]
> When viewing **Compare difference** in Classic pipeline history, the JSON files shown are read‑only and cannot be edited directly.

## Related content

- [Classic pipelines configuration](options.md)

- [Publish and download pipeline artifacts](../artifacts/pipeline-artifacts.md)

- [Pipeline Caching](caching.md)

