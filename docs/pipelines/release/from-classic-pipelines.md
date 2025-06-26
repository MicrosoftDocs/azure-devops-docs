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

## Export your Classic pipeline

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Pipelines** > **Pipelines**. 
 
1. Select your Classic pipeline definition, select the ellipses icon, and then select **Export to YAML**. Make sure you're in the pipeline definition view, not a specific run, to see the **Export to YAML** option.

    :::image type="content" source="media/export-yaml.png" alt-text="Screenshot of context menu, to export your pipeline to YAML.":::

1. Open the downloaded YAML file in your code editor.

1. If your YAML pipeline includes variables defined in the Classic UI, define the variables again in your pipeline settings UI or in your YAML file. For more information, see [Define variables](../process/variables.md).

1. Review any `cron` schedules in your YAML file. By default, `cron` schedules in YAML are in UTC. In Classic pipelines, they are in the organization's timezone. For more information, see [Configure schedules for pipelines](../process/scheduled-triggers.md).

1. Use the Task Assistant to make any other changes to the YAML file. The Task Assistant is a pane on the right side of the screen, which helps you correctly create and modify YAML steps.

    :::image type="content" source="media/task-assistant-yaml.png" alt-text="Configure your pipeline task with Task Assistant.":::

1. **Save and run** your pipeline.

## Clean up resources

If you're not going to use this sample pipeline anymore, delete it from your project. Deletion is permanent and includes all builds and associated artifacts.

1. Select the ellipses (...) and select **Delete**.

2. Enter the name of your pipeline to permanently delete it, and then select **Delete**.

## FAQ

### Is there a task in YAML pipelines to create work items when there's a build failure? 

YAML pipelines don't have a [Create work item on failure setting](../build/options.md#create-a-work-item-on-failure) like classic build pipelines. You have a couple of options for creating this functionality yourself.
- You can use a script or PowerShell task and call the [REST API](/rest/api/azure/devops/pipelines/). 
- You can use Azure CLI to call [az boards work-item create](/cli/azure/boards/work-item#az-boards-work-item-create) in your pipeline. [See an example](../customize-pipeline.md#create-work-item-on-failure) of using the CLI to create a bug on failure.

## Next steps

Learn about the feature differences between YAML and Classic pipelines.

> [!div class="nextstepaction"]
> [Use Azure Pipelines](../get-started/pipelines-get-started.md#feature-availability)

## Related articles

- [Customize your pipeline](../customize-pipeline.md)
- [Learn YAML pipeline editor basics](../get-started/yaml-pipeline-editor.md)
- [Define approvals and checks](../release/approvals/approvals.md)
