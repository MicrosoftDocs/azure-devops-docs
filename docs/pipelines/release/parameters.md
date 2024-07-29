---
title: Classic process parameters
description: Learn how to link essential task settings as process parameters across your pipeline.
ms.topic: conceptual
ms.assetid: 27AD0094-FDF1-4B36-A82E-B845980984AF
ms.date: 07/25/2024
monikerRange: '<= azure-devops'
---

# Classic process parameters

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

> [!NOTE]
> Process parameters are only available in Classic pipelines. For parameters in YAML pipelines, see [runtime parameters](../process/runtime-parameters.md).

Process parameters are used in Classic pipelines and differ from variables in the types of input they support. Variables only accept string inputs, whereas process parameters support additional data types such as checkboxes and drop-down lists.

Process parameters are a list of essential settings that can be shared across all tasks in your pipeline definition. Having these parameters in one location allows you to quickly edit these arguments without having to click through each task individually. [Templates](../release/env-templates.md) come with a set of predefined process parameters.

> [!NOTE]
> Process parameters are not available in release pipelines.

## Configure process parameters

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select your classic pipeline, and then select **Edit**.

1. Select **Pipeline** under **Tasks**, scroll down to **Parameters**, and configure them as needed.

    :::image type="content" source="../artifacts/media/classic-pipeline-process-parameters.png" alt-text="A screenshot displaying the process parameters in a classic pipeline.":::
    
## Add new process parameters

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select your classic pipeline, and then select **Edit**.

1. Select the task you want to add to the process parameters, and then select **Link settings**. Configure your settings, and then select **Link**.

    :::image type="content" source="../artifacts/media/classic-pipeline-link-process-parameters.png" alt-text="A screenshot showing how to link new task settings to process parameters in a classic pipeline.":::

1. Once linked, you can find your linked task settings under your **Pipeline** > **Parameters**.

    :::image type="content" source="../artifacts/media/classic-pipeline-new-process-parameters.png" alt-text="A screenshot displaying the newly added process parameter in a classic pipeline.":::

## Unlink process parameters

- **Unlink all process parameters**:
    1. Navigate to **Tasks** > **Pipeline** > **Parameters** in your pipeline definition.
    1. Select **Unlink all**.

        :::image type="content" source="../artifacts/media/classic-pipeline-process-parameters-unlink-all.png" alt-text="A screenshot showing how to unlink all parameters in a classic pipeline.":::

- **Unlink a single parameter**:
    1. In your pipeline definition, select the task you want to unlink.
    1. Select **Link settings** from the right panel, and then select **Unlink**.
    
        :::image type="content" source="../artifacts/media/classic-pipeline-process-parameters-unlink.png" alt-text="A screenshot showing how to unlink a single parameter in a classic pipeline.":::

## Related articles

- [Build multiple branches](../build/ci-build-git.md)
- [Pipeline completion triggers (Classic)](../process/pipeline-triggers-classic.md)
- [Pipeline caching](../release/caching.md)



