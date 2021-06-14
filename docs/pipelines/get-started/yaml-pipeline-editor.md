---
title: Azure Pipelines YAML pipeline editor guide
ms.custom: seodec18
description: Learn how to author and edit pipelines with the YAML pipeline editor
ms.topic: conceptual
ms.date: 06/14/2021
monikerRange: '>=azure-devops-2019'
---

# YAML pipeline editor


## Edit a YAML pipeline

Briefly cover the process of getting into the YAML editor
Also mention the files can be edited in any other editor of choice and checked into the repo

If you use YAML to define your pipelines, you can now take advantage of the new editor features introduced with this release. Whether you are creating a new YAML pipeline or editing an existing YAML pipeline, you will be able to edit the YAML file within the pipeline web editor. Use Ctrl+Space for IntelliSense support as you edit the YAML file. You will see the syntax errors highlighted and also get help on correcting those errors.

:::moniker range="azure-devops-2019"

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-2019.1.png" alt-text="YAML pipeline editor for Azure DevOps Server 2019.1":::

:::moniker-end

:::moniker range=">= azure-devops-2020"

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor.png" alt-text="YAML pipeline editor":::

:::moniker-end

### Keyboard shortcuts

Press Ctrl+Space for Intellisense support while you are editing the YAML pipeline.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-intellisense.png" alt-text="YAML pipeline editor intellisense.":::

Press F1 to display the command palette and view the available Keyboard shortcuts.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-command-palette.png" alt-text="YAML pipeline editor command palette.":::

:::moniker range=">= azure-devops-2020"
## Validate the pipeline

For 2020 and higher, the More actions->Validate

:::moniker-end

:::moniker range=">= azure-devops-2020"

## Download full YAML

For 2020 and higher, download the processed version of the YAML (with "compile time" variable/template expansions?)

:::moniker-end

:::moniker range=">= azure-devops-2019"

## Task assistant

We continue to receive a lot of feedback asking to make it easier to edit YAML files for pipelines. In the previous updates, we added intellisense support. Now we are adding a task assistant to the YAML editor. With this, you will have the same familiar experience for adding a new task to a YAML file as in the classic editor. This new assistant supports most of the common task input types such as pick lists and service connections. To use the new task assistant, select **Edit** on a YAML-based pipeline, and then select the **Task assistant**.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-task-assistant.gif" alt-text="Task assistant for editing YAML pipelines.":::

:::moniker-end

:::moniker range=">= azure-devops-2020"

## Manage pipeline variables

We updated the experience for managing pipeline variables in the YAML editor. You no longer have to go to the classic editor to add or update variables in your YAML pipelines.

:::image type="content" source="(media/yaml-pipeline-editor/yaml-pipeline-editor-manage-variables.png" alt-text="Manage pipeline variables in the YAML editor.":::

:::moniker-end


:::moniker range="azure-devops"

## Templates support

[Templates](../process/templates.md) are a commonly used feature in YAML pipelines. They are an easy way to share pipeline snippets. They are also a powerful mechanism in verifying or enforcing [security and governance](../security/templates.md) through your pipeline.

Azure Pipelines supports a YAML editor which can be handy when editing your pipeline. Previously, the editor did not support templates. Authors of YAML pipelines could not get intellisense assistance when using a template. With this release, we are previewing support for templates in the YAML editor. To enable this preview, [navigate to preview features](../../project/navigation/preview-features.md) in your Azure DevOps organization, and enable **YAML templates editor**.

As you edit your main Azure Pipelines YAML file, you can either _include_ or _extend_ a template. When you type in the name of your template, you will be prompted to validate your template. Once validated, the YAML editor understands the schema of the template including the input parameters.

:::image type="content" source="(media/yaml-pipeline-editor/yaml-pipeline-editor-templates.png" alt-text="YAML template.":::

Post validation, you can choose to navigate into the template. You will be able to make changes to the template using all the features of the YAML editor.

> [!IMPORTANT]
> This feature is in preview. There are known limitations, some of which we are working to address. If the template has required parameters that are not provided as inputs in the main YAML file, then the validation fails and prompts you to provide those inputs. In an ideal experience, the validation should not be blocked and you should be able to fill in the input parameters using intellisense. In addition, you cannot create a new template from the editor. You can only use or edit existing templates.

:::moniker-end


