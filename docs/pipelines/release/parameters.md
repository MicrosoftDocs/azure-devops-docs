---
title: Classic process parameters
description: Learn how to link essential task settings as process parameters across your pipeline.
ms.topic: concept-article
ms.assetid: 27AD0094-FDF1-4B36-A82E-B845980984AF
ms.date: 12/16/2025
monikerRange: '<= azure-devops'
---

# Classic process parameters

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

> [!NOTE]
> Process parameters are only available in Classic pipelines. For parameters in YAML pipelines, see [runtime parameters](../process/runtime-parameters.md).

Process parameters are used in Classic pipelines and differ from variables in the types of input they support. Unlike variables, which only accept strings, process parameters support richer data types such as checkboxes and dropdown lists. 

Process parameters are a list of essential settings that can be shared across all tasks in your pipeline definition. They act as central settings for the entire Classic pipeline, making it easy to update values without editing each task. 
Having these parameters in one location allows you to quickly edit these arguments without having to click through each task individually. [Templates](../release/env-templates.md) come with a set of predefined process parameters.

> [!NOTE]
> Process parameters are not available in Classic release pipelines.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An [Azure DevOps organization](../../organizations/accounts/create-organization.md).<br> - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> - A [Classic pipeline](../ecosystems/dotnet-core.md#create-a-pipeline). |

## Add new process parameters

Follow these steps to add new process parameters to your Classic pipeline:

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select your Classic pipeline, then select **Edit**.

1. Select **Tasks**, then under your agent job select the task whose setting you want to expose as a process parameter.

1. Select the *i* icon next to the setting you want to include, then select **Link** in the pop‑up message. 

1. Configure your settings as needed, then select **Link** to add it to your process parameters. Your view may differ depending on the task and the setting you're configuring.

1. Once linked, you can find the parameter under  **Tasks** > **Pipeline** > **Parameters**.

## Configure existing process parameters

Follow these steps to configure existing process parameters in your Classic pipeline:

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select your Classic pipeline, then select **Edit**.

1. Select **Tasks** > **Pipeline**, then scroll down to **Parameters**. Your view may differ depending on your project type and the parameters defined for your tasks. Select the parameter you want to modify and configure it as needed.

    :::image type="content" source="../artifacts/media/modify-existing-process-parameters-classic-pipeline.png" alt-text="A screenshot of existing process parameters shown in a Classic pipeline.":::

## Unlink process parameters

Follow these steps to unlink signle or all existing process parameters in your Classic pipeline:

#### Unlink a single parameter

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select your Classic pipeline, then select **Edit**. 

1. Select the task that you want to unlink, select the link icon next to the parameter, and then select **Unlink** in the pop‑up message.

#### Unlink all process parameters

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select your Classic pipeline, then select **Edit**. 

1. Select **Tasks** > **Pipeline**, then scroll down to **Parameters**.
    
1. Select **Unlink all**, then select **Confirm** to confirm your choice.


## Related content

- [Create Classic release pipelines](releases.md)

- [Classic release triggers](triggers.md)

- [View Classic pipeline history](history.md)




