---
title: Azure Pipelines YAML pipeline editor guide
description: Learn how to author and edit pipelines with the YAML pipeline editor
ms.topic: reference
ms.date: 06/18/2021
author: steved0x
ms.author: sdanie
monikerRange: '>=azure-devops-2019'
---

# YAML pipeline editor

Azure Pipelines provides a YAML pipeline editor based on the [Monaco Editor](https://github.com/microsoft/monaco-editor) that you can use to author and edit your pipelines from the Azure DevOps portal. The editor provides tools like Intellisense support and a task assistant to provide guidance when editing a pipeline.

:::moniker range="azure-devops-2019"

> [!IMPORTANT]
> The YAML pipeline editor was introduced in Azure DevOps Server 2019 Update 1. If you are using Azure DevOps Server 2019 RTW, the YAML pipeline editor described in this article is not available, but you can edit your YAML using the text editor of your choice and check it into your pipeline's repository.

:::moniker-end
## Edit a YAML pipeline

:::moniker range="= azure-devops-2019"

To access the YAML pipeline editor, choose **Pipelines**, **Builds**, and select the pipeline to edit.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-builds-2019.1.png" alt-text="Azure Pipelines builds in Azure DevOps Server 2019 Update 1.":::

Choose **Edit** to edit your pipeline in the YAML pipeline editor.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-edit-2019.1.png" alt-text="Azure Pipelines YAML edit button in Azure DevOps Server 2019 Update 1.":::

Edit your pipeline using [Intellisense](#keyboard-shortcuts) and the [task assistant](#task-assistant) for guidance.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-2019.1.png" alt-text="YAML pipeline editor in Azure DevOps Server 2019.1.":::

:::moniker-end

:::moniker range=">= azure-devops-2020"

To access the YAML pipeline editor, choose **Pipelines** and select the pipeline to edit. You can browse pipelines by **Recent**, **All**, and **Runs**. For more information, see [Pipelines landing page](multi-stage-pipelines-experience.md#pipelines-landing-page).

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-landing-page.png" alt-text="Azure Pipelines landing page.":::

Choose **Edit** to edit your pipeline in the YAML pipeline editor.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-edit.png" alt-text="Azure Pipelines YAML edit button.":::

Edit your pipeline using [Intellisense](#keyboard-shortcuts) and the [task assistant](#task-assistant) for guidance.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor.png" alt-text="YAML pipeline editor.":::

:::moniker-end

Choose **Save** to save your pipeline. You can commit directly to your branch, or create a new branch and optionally start a pull request.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-save.png" alt-text="YAML pipeline editor save window.":::

### Keyboard shortcuts

The YAML pipeline editor provides several types of keyboard shortcuts.

Press Ctrl+Space for Intellisense support while you are editing the YAML pipeline.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-intellisense.png" alt-text="YAML pipeline editor intellisense.":::

Press F1 (Fn+F1 on Mac) to display the command palette and view the available keyboard shortcuts.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-command-palette.png" alt-text="YAML pipeline editor command palette.":::

## Task assistant

The task assistant provides a method for adding tasks to your YAML pipeline.

To display the task assistant, edit your YAML pipeline and choose **Show assistant**.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-show.png" alt-text="Show ask assistant for editing YAML pipelines.":::

To hide the task assistant, choose **Hide assistant**.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-hide.png" alt-text="Hide task assistant for editing YAML pipelines.":::

To use the task assistant, browse or search for tasks in the **Tasks** pane. 

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-search.png" alt-text="Task assistant search.":::

Select the desired task and configure its inputs.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-add.png" alt-text="Task assistant add.":::

Choose **Add** to insert the task YAML into your pipeline.

:::moniker range="= azure-devops-2019"

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-task-added-2019.1.png" alt-text="Task assistant added in Azure DevOps Server 2019.":::

Edit the inserted YAML to make additional configuration changes to the task.

:::moniker-end

:::moniker range=">= azure-devops-2020"

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-task-added.png" alt-text="Task assistant added.":::

You can edit the YAML to make additional configuration changes to the task, or you can choose **Settings** above the task in the YAML pipeline editor to configure the inserted task in the task assistant.

:::moniker-end

:::moniker range=">= azure-devops-2020"

## Validate and Download full YAML

When editing a YAML pipeline, you can validate your changes by choosing **More actions**, **Validate**. You can use this feature to catch syntax errors in your pipeline that will prevent it from starting.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-validate.png" alt-text="Validate and Download full YAML.":::

You can also [preview the fully parsed YAML document without committing or running the pipeline](/azure/devops/release-notes/2020/sprint-165-update#preview-fully-parsed-yaml-document-without-committing-or-running-the-pipeline) by choosing **More actions**, **Download full YAML**.

**Download full YAML** calls the [Runs](/rest/api/azure/devops/pipelines/runs/run%20pipeline?view=azure-devops-rest-6.1&preserve-view=true) Azure DevOps REST API for Azure Pipelines, and initiates a download of the rendered YAML from the editor.

:::moniker-end

## Manage pipeline variables

Use variables to store values or encrypted secrets separately from your repository.

:::moniker range=">= azure-devops-2020"

To manage pipeline variables, edit your YAML pipeline and choose **Variables**.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-variables-button.png" alt-text="Manage pipeline variables button.":::

Choose **New variable** to add your first variable and **Add** :::image type="icon" source="../../media/icons/add-dark-icon.png"::: to add subsequent variables. Choose the variable name to edit the variable, and hover the mouse over the variable and choose **Delete** :::image type="icon" source="../../media/icons/delete-icon-bin.png"::: to delete a variable.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-manage-variables.png" alt-text="Manage pipeline variables in the YAML editor.":::

In addition to managing your variables directly from the YAML pipeline editor, you can also manage them in the pipeline settings UI.

:::moniker-end

:::moniker range="= azure-devops-2019"

When using Azure DevOps 2019 Update 1, you can manage your pipeline variables using the pipeline settings UI.

:::moniker-end

:::moniker range=">= azure-devops-2019"

To manage YAML pipeline variables in the pipeline settings UI, edit the pipeline and choose **More actions**, **Triggers**.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-settings-ui-menu.png" alt-text="Pipeline settings UI menu.":::

Choose **Variables** to manage your pipeline variables.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-settings-ui-variables.png" alt-text="Pipeline settings UI for variables.":::

:::moniker-end

For more information on working with pipeline variables, see [Define variables](../process/variables.md).

:::moniker range="= azure-devops"

## Templates support

[Templates](../process/templates.md) are a commonly used feature in YAML pipelines. They are an easy way to share pipeline snippets. They are also a powerful mechanism in verifying or enforcing [security and governance](../security/templates.md) through your pipeline.

Azure Pipelines supports a YAML editor which can be handy when editing your pipeline. Previously, the editor did not support templates. Authors of YAML pipelines could not get intellisense assistance when using a template. With this release, we are previewing support for templates in the YAML editor. To enable this preview, [navigate to preview features](../../project/navigation/preview-features.md) in your Azure DevOps organization, and enable **YAML templates editor**.

As you edit your main Azure Pipelines YAML file, you can either _include_ or _extend_ a template. When you type in the name of your template, you will be prompted to validate your template. Once validated, the YAML editor understands the schema of the template including the input parameters.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-templates.png" alt-text="YAML template.":::

Post validation, you can choose to navigate into the template. You will be able to make changes to the template using all the features of the YAML editor.

> [!IMPORTANT]
> This feature is in preview. There are known limitations, some of which we are working to address. If the template has required parameters that are not provided as inputs in the main YAML file, then the validation fails and prompts you to provide those inputs. In an ideal experience, the validation should not be blocked and you should be able to fill in the input parameters using intellisense. In addition, you cannot create a new template from the editor. You can only use or edit existing templates.

:::moniker-end

## Next steps

* [Learn how to navigate and view your pipelines](multi-stage-pipelines-experience.md)
* [Create your first pipeline](../create-first-pipeline.md)
* [Customize your pipeline](customize-pipeline.md)
