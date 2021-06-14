---
title: Azure Pipelines YAML pipeline editor guide
ms.custom: seodec18
description: Learn how to author and edit pipelines with the YAML pipeline editor
ms.topic: conceptual
ms.date: 06/14/2021
monikerRange: '>=azure-devops-2019'
---

# YAML pipeline editor

Azure Pipelines provides a YAML pipeline editor that you can use to author and edit your pipelines from the Azure DevOps portal. Intellisense support and the task assistant provide guidance when editing a pipeline.

:::moniker range="azure-devops-2019"

> [!IMPORTANT]
> The YAML pipeline editor was introduced in Azure DevOps Server 2019 Update 1. If you are using Azure DevOps Server 2019 RTW you can edit your YAML using the text editor of your choice and check it into your pipeline's repository.

:::moniker-end
## Edit a YAML pipeline

To access the YAML pipeline editor, navigate to your YAM pipeline and choose **Edit**.

:::moniker range="azure-devops-2019"

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-2019.1.png" alt-text="YAML pipeline editor for Azure DevOps Server 2019.1":::

:::moniker-end

:::moniker range=">= azure-devops-2020"

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor.png" alt-text="YAML pipeline editor":::

:::moniker-end

:::moniker range=">= azure-devops-2019"

### Keyboard shortcuts

The YAML pipeline provides several types of keyboard shortcuts.

* Press Ctrl+Space for Intellisense support while you are editing the YAML pipeline.
  :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-intellisense.png" alt-text="YAML pipeline editor intellisense.":::
* Press F1 to display the command palette and view the available keyboard shortcuts.
  :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-command-palette.png" alt-text="YAML pipeline editor command palette.":::

## Task assistant

The task assistant supports most of the common task input types such as pick lists and service connections. To use the new task assistant, select **Edit** on a YAML-based pipeline, and search for tasks in the **Tasks** pane.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-task-assistant.gif" alt-text="Task assistant for editing YAML pipelines.":::

:::moniker-end

:::moniker range=">= azure-devops-2020"

## Manage pipeline variables

Add moniker note for how to do it in classic editor for previous versions

To manage pipeline variables, edit your YAM pipeline and choose **Variables**.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-manage-variables.png" alt-text="Manage pipeline variables in the YAML editor.":::

:::moniker-end

:::moniker range="azure-devops"

## Templates support

[Templates](../process/templates.md) are a commonly used feature in YAML pipelines. They are an easy way to share pipeline snippets. They are also a powerful mechanism in verifying or enforcing [security and governance](../security/templates.md) through your pipeline.

Azure Pipelines supports a YAML editor which can be handy when editing your pipeline. Previously, the editor did not support templates. Authors of YAML pipelines could not get intellisense assistance when using a template. With this release, we are previewing support for templates in the YAML editor. To enable this preview, [navigate to preview features](../../project/navigation/preview-features.md) in your Azure DevOps organization, and enable **YAML templates editor**.

As you edit your main Azure Pipelines YAML file, you can either _include_ or _extend_ a template. When you type in the name of your template, you will be prompted to validate your template. Once validated, the YAML editor understands the schema of the template including the input parameters.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-templates.png" alt-text="YAML template.":::

Post validation, you can choose to navigate into the template. You will be able to make changes to the template using all the features of the YAML editor.

> [!IMPORTANT]
> This feature is in preview. There are known limitations, some of which we are working to address. If the template has required parameters that are not provided as inputs in the main YAML file, then the validation fails and prompts you to provide those inputs. In an ideal experience, the validation should not be blocked and you should be able to fill in the input parameters using intellisense. In addition, you cannot create a new template from the editor. You can only use or edit existing templates.

:::moniker-end





