---
title: View Classic pipeline history
description: Learn how to determine what changed, when it happened, and who made the changes using the build history in your classic pipelines.
ms.topic: how-to
ms.assetid: AB81E23E-DD84-4BDB-ACD9-AE03D783A303
ms.date: 09/06/2024
monikerRange: '<= azure-devops'
---

# View Classic pipeline history

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Pipelines, you can set up a classic pipeline to build your project. This article will guide you through checking the history of your classic pipeline to see what changed, when it happened, and who made the changes.

## Prerequisites

- Create an Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- A working Classic pipeline. 

## View pipeline history

::: moniker range=" azure-devops"   

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your Classic pipeline, and then select **Edit**.

1. Select the **History** tab to view a list of changes, including who made the changes and when they occurred.

    :::image type="content" source="media/classic-pipeline-history-devops.png" alt-text="A screenshot displaying how to view Classic pipeline history in Azure DevOps Services.":::

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Pipelines**, select your Classic pipeline, and then select **Edit**.

1. Select the **History** tab to view a list of changes, including who made the changes and when they occurred.

    :::image type="content" source="media/classic-pipeline-history.png" alt-text="A screenshot displaying how to view Classic pipeline history.":::

::: moniker-end

4. To take action on a change, select it, select the ellipsis button **...**, and then choose either **Compare Difference** or **Revert Pipeline**.
    
    :::image type="content" source="media/pipeline-history-compare-difference.png" alt-text="A screenshot displaying the Classic pipeline history difference.":::

> [!NOTE]
> When viewing the compare difference in Classic pipeline history, the JSON files are read-only, and you cannot edit the JSON source directly.

## Related content

- [Build multiple branches in Azure Pipelines](ci-build-git.md)

- [Configure build run numbers](../process/run-number.md)

- [Pipeline caching](../release/caching.md)

