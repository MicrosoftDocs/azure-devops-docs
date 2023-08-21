---
title: YAML pipeline editor guide
description: Learn how to author and edit pipelines with the YAML pipeline editor.
ms.topic: reference
ms.date: 08/17/2023
author: steved0x
ms.author: sdanie
monikerRange: '>=azure-devops-2019'
---

# YAML pipeline editor

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Azure Pipelines provides a YAML pipeline editor that you can use to author and edit your pipelines. The YAML editor is based on the [Monaco Editor](https://github.com/microsoft/monaco-editor). The editor provides tools like Intellisense support and a task assistant to provide guidance while you edit a pipeline.

This article shows you how to edit your pipelines using the YAML Pipeline editor, but you can also edit pipelines by modifying the **azure-pipelines.yml** file directly in your pipeline's repository using a text editor of your choice, or by using a tool like Visual Studio Code and the [Azure Pipelines for VS Code](https://github.com/Microsoft/azure-pipelines-vscode) extension.

:::moniker range="azure-devops-2019"

> [!IMPORTANT]
> The YAML pipeline editor was introduced in Azure DevOps Server 2019 Update 1. If you're using Azure DevOps Server 2019 RTW, the YAML pipeline editor described in this article isn't available, but you can edit your YAML using the text editor of your choice and check it into your pipeline's repository.

:::moniker-end

## Edit a YAML pipeline

:::moniker range="= azure-devops-2019"

To access the YAML pipeline editor, do the following steps.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select your project, choose **Pipelines** > **Pipelines**, and then select the pipeline you want to edit.

    :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-builds-2019-1.png" alt-text="Azure Pipelines builds in Azure DevOps Server 2019 Update 1.":::

3. Choose **Edit**.

    :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-edit-2019-1.png" alt-text="Azure Pipelines YAML edit button in Azure DevOps Server 2019 Update 1.":::

4. Make edits to your pipeline using [Intellisense](#use-keyboard-shortcuts) keyboard shortcuts and the [task assistant](#use-task-assistant) for guidance.

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-2019-1.png" alt-text="YAML pipeline editor in Azure DevOps Server 2019.1.":::

:::moniker-end

:::moniker range=">= azure-devops-2020"

To access the YAML pipeline editor, do the following steps.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select your project, choose **Pipelines**, and then select the pipeline you want to edit. You can browse pipelines by **Recent**, **All**, and **Runs**. For more information, see [view and manage your pipelines](../create-first-pipeline.md#view-and-manage-your-pipelines).

    :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-landing-page.png" alt-text="Azure Pipelines landing page.":::

3. Choose **Edit**.

    :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-edit.png" alt-text="Azure Pipelines YAML edit button.":::

4. Make edits to your pipeline using [Intellisense](#use-keyboard-shortcuts) and the [task assistant](#use-task-assistant) for guidance.

    :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor.png" alt-text="YAML pipeline editor.":::

:::moniker-end

5. Choose **Save**. You can commit directly to your branch, or create a new branch and optionally start a pull request.

    :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-save.png" alt-text="YAML pipeline editor save window.":::

### Use keyboard shortcuts

The YAML pipeline editor provides several keyboard shortcuts, which we show in the following examples.

- Choose **Ctrl**+**Space** for Intellisense support while you're editing the YAML pipeline.

    :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-intellisense.png" alt-text="YAML pipeline editor intellisense.":::

- Choose **F1** (**Fn+F1** on Mac) to display the command palette and view the available keyboard shortcuts.

    :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-command-palette.png" alt-text="YAML pipeline editor command palette.":::

## Use task assistant

The task assistant provides a method for adding tasks to your YAML pipeline.

- To display the task assistant, edit your YAML pipeline and choose **Show assistant**.

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-show.png" alt-text="Show ask assistant for editing YAML pipelines.":::

- To hide the task assistant, choose **Hide assistant**.

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-hide.png" alt-text="Hide task assistant for editing YAML pipelines.":::

- To use the task assistant, browse or search for tasks in the **Tasks** pane. 

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-search.png" alt-text="Task assistant search.":::

- Select the desired task and configure its inputs.

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-add.png" alt-text="Task assistant add.":::

- Choose **Add** to insert the task YAML into your pipeline.

:::moniker range="= azure-devops-2019"

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-task-added-2019-1.png" alt-text="Task assistant added in Azure DevOps Server 2019.":::

- Edit the inserted YAML to make more configuration changes to the task.

:::moniker-end

:::moniker range=">= azure-devops-2020"

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-task-assistant-task-added.png" alt-text="Task assistant added.":::

- You can edit the YAML to make more configuration changes to the task, or you can choose **Settings** above the task in the YAML pipeline editor to configure the inserted task in the task assistant.

:::moniker-end

:::moniker range=">= azure-devops-2020"

## Validate

Validate your changes to catch syntax errors in your pipeline that prevent it from starting. Choose **More actions** > **Validate**.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-validate.png" alt-text="Validate and Download full YAML.":::

## Download full YAML

You can [preview the fully parsed YAML document](/azure/devops/release-notes/2020/sprint-165-update#preview-fully-parsed-yaml-document-without-committing-or-running-the-pipeline) without committing or running the pipeline. Choose **More actions** > **Download full YAML**.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-validate.png" alt-text="Validate and Download full YAML.":::

**Download full YAML** [Runs](/rest/api/azure/devops/pipelines/runs/run%20pipeline?view=azure-devops-rest-6.1&preserve-view=true) the Azure DevOps REST API for Azure Pipelines and initiates a download of the rendered YAML from the editor.

:::moniker-end

## Manage pipeline variables

You can manage pipeline variables both from within your YAML pipeline and from the pipeline settings UI.

:::moniker range="= azure-devops-2019"

With Azure DevOps 2019 Update 1, you can manage your pipeline variables using the pipeline settings UI.

:::moniker-end

To manage pipeline variables, do the following steps.

1. Edit your YAML pipeline and choose **Variables** to manage pipeline variables.

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-variables-button.png" alt-text="Manage pipeline variables button.":::

2. Choose from the following functions:
    - **New variable**: to add your first variable.
    - **Add** :::image type="icon" source="../../media/icons/add-dark-icon.png":::: to add subsequent variables. 
    - *Variable name* to edit a variable.
    - **Delete** :::image type="icon" source="../../media/icons/delete-icon-bin.png":::: to delete a variable.

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-manage-variables.png" alt-text="Manage pipeline variables in the YAML editor.":::

To manage pipelines variables in the pipeline settings UI, do the following steps.

1. Edit the pipeline and choose **More actions** > **Triggers**.

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-settings-ui-menu.png" alt-text="Pipeline settings UI menu.":::

2. Choose **Variables**.

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-settings-ui-variables.png" alt-text="Pipeline settings UI for variables.":::

For more information on working with pipeline variables, see [Define variables](../process/variables.md).

## Configure the default agent pool

If a YAML pipeline doesn't specify an agent pool, the agent pool configured in the **Default agent pool for YAML** setting is used. This pool is also used for post-run cleanup tasks.

To view and configure the **Default agent pool for YAML** setting:

1. Edit the pipeline and choose **More actions** > **Triggers**.

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-settings-ui-menu.png" alt-text="Screenshot of the pipeline settings UI menu.":::

2. Choose **YAML**, and select the desired agent pool using the **Default agent pool for YAML** dropdown list.

   :::image type="content" source="media/yaml-pipeline-editor/default-agent-pool-for-yaml.png" alt-text="Screenshot of the default agent pool for YAML pipelines.":::

**Default agent pool for YAML** is configured on a per-pipeline basis.

## Manage settings using the pipeline settings UI

Some YAML pipeline settings are configured using the pipeline settings UI instead of in the YAML file.

1. Edit the pipeline and choose **More actions** > **Triggers**.

   :::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-settings-ui-menu.png" alt-text="Screenshot of the pipeline settings UI menu.":::

2. From the pipeline settings UI, choose the tab of the setting to configure.

   :::image type="content" source="media/yaml-pipeline-editor/pipeline-settings-ui-triggers.png" alt-text="Screenshot of the pipeline settings UI for triggers.":::

:::moniker range=">= azure-devops-2022"

## View and edit templates

[Templates](../process/templates.md) are a commonly used feature in YAML pipelines. They're an easy way to share pipeline snippets and are a powerful mechanism for verifying and enforcing [security and governance](../security/templates.md) in your pipeline.
Previously, the editor didn't support templates, so authors of YAML pipelines couldn't get intellisense assistance. Now Azure Pipelines supports a YAML editor, for which we're previewing support. To enable this preview, [go to preview features](../../project/navigation/preview-features.md) in your Azure DevOps organization, and enable **YAML templates editor**.

> [!IMPORTANT]
> This feature has the following limitations.
>
> * If the template has required parameters that aren't provided as inputs in the main YAML file, then the validation fails and prompts you to provide those inputs.
>
> * You can't create a new template from the editor. You can only use or edit existing templates.

As you edit your main Azure Pipelines YAML file, you can either _include_ or _extend_ a template. As you enter the name of your template, you may be prompted to validate your template. Once validated, the YAML editor understands the schema of the template, including the input parameters.

:::image type="content" source="media/yaml-pipeline-editor/yaml-pipeline-editor-templates.png" alt-text="YAML template.":::

Post validation, you can go into the template by choosing **View template**, which opens the template in a new browser tab. You can make changes to the template using all the features of the YAML editor.

:::moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Customize your pipeline](../customize-pipeline.md)

## Related articles

* [Learn how to navigate and view your pipelines](multi-stage-pipelines-experience.md)
* [Create your first pipeline](../create-first-pipeline.md)
