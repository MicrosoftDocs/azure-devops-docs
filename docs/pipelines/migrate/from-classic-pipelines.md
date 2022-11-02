---
title: Migrate from Classic to YAML pipelines
titleSuffix: Azure Pipelines
description: How to migrate from Classic pipelines to YAML.
ms.subservice: azure-devops-pipelines-migrate
ms.topic: quickstart
ms.date: 01/28/2022
monikerRange: azure-devops
---

# Migrate your Classic pipeline to YAML

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Get started with Azure Pipelines by converting your existing Classic pipeline to use YAML. With a YAML-based pipeline, you can implement your CI/CD strategy as code and see its history, compare versions, blame, annotate, and so on.

## Prerequisites

Make sure you have the following items before you begin.

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../get-started/pipelines-sign-up.md).
- A working pipeline that uses the Classic user interface (UI) editor.
- A sample YAML pipeline file in your code. Create a sample YAML pipeline in the following section.

## Create a sample YAML pipeline

Do the following steps to create a sample YAML pipeline, which you'll update later with your exported code from the Classic UI editor.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and select your project.

2. Select **Pipelines**, and then **New pipeline**.

   :::image type="content" source="media/pipelines-new-pipeline.png" alt-text="Two buttons to select for new pipeline creation.":::

3. Select the location for your source code as either **GitHub** or **Azure Repos Git**.

   :::image type="content" source="media/source-code-location.png" alt-text="List of possible selections for your source code.":::

4. Select a repository.

   :::image type="content" source="media/select-repository.png" alt-text="Page where you select a repository for your source code pipeline.":::

5. On the Configure your pipeline page, select **Starter pipeline**.

   :::image type="content" source="media/select-pipeline-template.png" alt-text="List of templates to choose from for configuring your new pipeline.":::

6. Select **Save and run**.

   :::image type="content" source="media/save-run-new-yaml-pipeline.png" alt-text="Review page where you select Save and run.":::

7. Enter your commit message, select **Commit directly to the main branch**, and then choose **Save and run** again. A new run starts and it's committed to the repository. Wait for the run to finish.

   :::image type="content" source="media/commit-save-run.png" alt-text="Commit message to commit to the main branch, and then select Save and run button.":::

## Export your Classic pipeline

Do the following steps to export your Classic pipeline to a YAML file that you can use in the editor.

1. Open your Classic pipeline.

2. Select the ellipses (...), and then select **Export to YAML**.

    :::image type="content" source="media/export-yaml.png" alt-text="Screenshot of context menu, to export your pipeline to YAML.":::

3. Open the downloaded YAML file in your code editor.

4. If your YAML pipeline includes variables defined in the Classic UI, define the variables again in your pipeline settings UI or in your YAML file. For more information, see [Define variables](../process/variables.md).

5. Review any `cron` schedules in your YAML file. By default, `cron` schedules in YAML are in UTC. In Classic pipelines, they are in the organization's timezone. For more information, see [Configure schedules for pipelines](../process/scheduled-triggers.md).

6. Use the Task Assistant to make any other changes to the YAML file. The Task Assistant is a pane on the right side of the screen, which helps you correctly create and modify YAML steps.

    :::image type="content" source="media/task-assistant-yaml.png" alt-text="Configure your pipeline task with Task Assistant.":::

7. **Save and run** your pipeline.

## Clean up resources

If you're not going to use this sample pipeline anymore, delete it from your project. Deletion is permanent and includes all builds and associated artifacts.

1. Select the ellipses (...) and select **Delete**.

2. Enter the name of your pipeline to permanently delete it, and then select **Delete**.

## FAQ

### Is there a task in YAML pipelines to create work items when there is a build failure? 

YAML pipelines don't have a [Create work item on failure setting](../build/options.md#create-a-work-item-on-failure) like classic build pipelines. You have a couple of options for creating this functionality yourself.
- You can use a script or PowerShell task and call the [REST API](/rest/api/azure/devops/pipelines/). 
- You can use Azure CLI to call [az boards work-item create](/cli/azure/boards/work-item#az-boards-work-item-create) in your pipeline. [See an example](../customize-pipeline.md#create-work-item-on-failure) of using the CLI to create a bug on failure.

## Next steps

Learn about the feature differences between YAML and Classic pipelines.

> [!div class="nextstepaction"]
> [Use Azure Pipelines](../get-started/pipelines-get-started.md#feature-availability)

## Related articles

- [Customize your pipeline](../customize-pipeline.md)
- [YAML pipeline editor basics](../get-started/yaml-pipeline-editor.md)
- [Library of assets](../library/index.md)
- [Define approvals and checks](../release/approvals/approvals.md)
