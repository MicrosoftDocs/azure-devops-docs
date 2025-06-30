---
title: Migrate your Classic pipeline to YAML
titleSuffix: Azure Pipelines
description: Learn how to migrate from Classic pipelines to YAML.
ms.subservice: azure-devops-pipelines-migrate
ms.topic: quickstart
ms.date: 06/26/2025
monikerRange: azure-devops
---

# Migrate your Classic pipeline to YAML

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure Pipelines lets you manage your CI/CD process as code, making it easier to track changes, compare versions, annotate, and more.

When you convert a Classic pipeline, you’ll end up with two pipelines: a new YAML pipeline and the original Classic one, which can then be retired. Your Classic pipeline's run history remains in the Classic pipeline. 

> [!NOTE]
> You can only export a YAML file from a Classic pipeline created using the classic build designer. If you don’t see an option to export to YAML or JSON, your pipeline likely doesn’t support exporting. Classic release pipelines don’t support YAML export, you’ll need to export each task individually. 

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure**   | - An Azure account with an active [subscription](https://azure.microsoft.com/free/?WT.mc_id=A261C142F). |
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md) if your organization is using a firewall or a proxy server.<br> - A working Classic pipeline.  |

## Create a sample YAML pipeline

Follow these steps to create a starter YAML pipeline, which you’ll later update with code exported from the Classic UI editor:

1. Sign in to your organization, and navigate to your project.

1. Select **Pipelines**, and then select **New pipeline**.

   :::image type="content" source="media/pipelines-new-pipeline.png" alt-text="A screenshot displaying how to create a new pipeline.":::

1. Select your source code location either **GitHub** or **Azure Repos Git**, and then select your repository.

   :::image type="content" source="media/source-code-location.png" alt-text="A screenshot displaying source code locations.":::

1. On the **Configure your pipeline page**, select the **Starter pipeline**.

   :::image type="content" source="media/select-pipeline-template.png" alt-text="A screenshot displaying the available pipeline templates.":::

1. Select **Save and run**, and then enter your commit message. Select **Commit directly to the main branch**, and then select **Save and run** once more. This will start a new run and commit the yaml pipeline to your repository.

   :::image type="content" source="media/commit-save-run.png" alt-text="A screenshot displaying how to save and run a new yaml pipeline.":::

## Export a Classic pipeline to YAML

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Pipelines** > **Pipelines**. 
 
1. Find your Classic pipeline, select the ellipses (...) next to it, and then select **Export to YAML**. Make sure you're in the pipeline definition view, not a specific run, to see the **Export to YAML** option.

    :::image type="content" source="media/export-yaml.png" alt-text="A screenshot displaying how to export a Classic pipeline to YAML.":::

1. Open the downloaded YAML file in your code editor.

1. If your Classic pipeline used variables defined in the Classic UI editor, you’ll need to redefine them either in the YAML file or in the pipeline settings. See [Define variables](../process/variables.md) for more details.

1. Review any `cron` schedules in your YAML file. YAML schedules use UTC by default, while Classic pipelines use your organization’s local time zone. See [Configure schedules for pipelines](../process/scheduled-triggers.md) for more details.

1. Use the **Task Assistant** (the pane on the right side of the editor) to help you add or modify steps in your YAML file.

    :::image type="content" source="media/task-assistant-yaml.png" alt-text="A screenshot displaying how to configure pipeline tasks with the Task Assistant.":::

1. Select **Save and run** once you're done.

## Related content

- [YAML vs Classic Pipelines](../get-started/pipelines-get-started.md#feature-availability)

- [Customize your pipeline](../customize-pipeline.md)

- [YAML pipeline editor](../get-started/yaml-pipeline-editor.md)
