---
title: Migrate your Classic pipeline to YAML
description: Learn how to migrate from Classic pipelines to YAML.
ms.subservice: azure-devops-pipelines-migrate
ms.topic: how-to
ms.date: 02/06/2026
monikerRange: azure-devops
---

# Migrate your Classic pipeline to YAML

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure Pipelines provides a quick, easy, and safe way to automate building and deploying your project across different environments. This article walks you through converting your Classic pipelines to YAML.

> [!IMPORTANT]
> Only Classic pipelines created using the classic build designer can be exported a YAML.
> If you don’t see an option to export to YAML or JSON, your pipeline likely doesn’t support exporting.
> Classic release pipelines don’t support YAML export, you’ll need to export each task individually. 

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - A working [Classic pipeline](create-classic-pipelines).  |

## Create a sample YAML pipeline

Follow these steps to create a starter YAML pipeline, which you’ll later update with the YAML snippet exported from the Classic pipeline editor:

1. Sign in to your organization and navigate to your project.

1. Select **Pipelines**, then select **New pipeline**.

1. Select your source code location either **GitHub** or **Azure Repos Git**, then select your repository.

1. On the **Configure your pipeline** page, select the **Starter pipeline** to start with a minimal pipeline that you can customize as needed.

1. Select **Save and run**, enter a commit message, and then select **Save and run** again to start a new run and commit the YAML pipeline to your repository.

## Export a Classic pipeline to YAML

Follow these steps to export your Classic pipeline to YAML:

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Pipelines**, then find and select your Classic pipeline definition.

1. Select the three vertical dots icon on the top right, and then select **Export to YAML**. A YAML file will be downloaded to your machine.

    :::image type="content" source="media/export-yaml.png" alt-text="A screenshot displaying how to export a Classic pipeline to YAML.":::

> [!NOTE]
> Make sure you're in the pipeline definition view, not a specific run, to see the **Export to YAML** option.

## Update your YAML pipeline

After exporting your Classic pipeline and downloading the *.yml* file to your machine, you’re ready to update the starter YAML pipeline you created earlier. Follow these steps to update your starter YAML pipeline:

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Locate the starter YAML pipeline you created earlier and select it. Delete the content of the starter pipeline.

1. Open the YAML file you downloaded earlier in your code editor.

1. Copy the content of the exported YAML file and paste it into the now empty starter pipeline.

1. You can use the **Task Assistant** (the pane on the right side of the editor) to help you add or modify tasks in your YAML file.

1. Select **Save and run** once you're done to run your new YAML pipeline.

If your Classic pipeline used variables defined in the Classic UI editor, you’ll need to redefine them either in the YAML file or in the pipeline settings. See [Define variables](../process/variables.md) for more details.

You should also review any cron schedules in your YAML file. YAML schedules use UTC by default, while Classic pipelines use your organization’s local time zone. See [Configure schedules for pipelines](../process/scheduled-triggers.md) for more details.

## Related content

- [YAML vs Classic Pipelines](../get-started/pipelines-get-started.md#feature-availability)

- [Customize your pipeline](../customize-pipeline.md)

- [YAML pipeline editor](../get-started/yaml-pipeline-editor.md)
