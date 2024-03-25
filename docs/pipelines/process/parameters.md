---
title: Process parameters
description: You can link all important fields for tasks used across the build definition as process parameters
ms.topic: conceptual
ms.assetid: 27AD0094-FDF1-4B36-A82E-B845980984AF
ms.date: 06/30/2023
monikerRange: '<= azure-devops'
---

# Process parameters

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

> [!NOTE]
> This guidances does not apply to YAML pipelines. For parameters in YAML pipelines, see [runtime parameters](runtime-parameters.md).
> 

Process parameters are used in classic pipelines and differ from variables in the kind of input supported by them. Variables only take in string inputs while process parameters in addition to string inputs support more data types like check boxes and drop-down list boxes.

You can link all important arguments for tasks used across the build definition as process parameters, which are then shown at one place - the Pipeline view.
This means you can quickly edit these arguments without needing to click through all the tasks.

[Templates](../release/env-templates.md) come with a set of predefined process parameters.

> [!NOTE]
> 
> The **Link** and **Unlink** functionality applies to build pipelines only. It does not apply to release pipelines.

::: moniker range="<=azure-devops"
To link more arguments across all tasks to new or existing process parameters, select **Link** from the task argument.
::: moniker-end

To set a process parameter, edit your pipeline and go to **Tasks** > **Pipeline**. 

:::image type="content" source="media/process-parameter-task.png" alt-text="Screenshot of adding a parameter to a classic task. ":::



::: moniker range="<=azure-devops"
Select **Unlink** if you need to disconnect an argument from a process parameter.
::: moniker-end


