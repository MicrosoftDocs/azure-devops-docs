---
title: Migrate from Classic to YAML pipelines
titleSuffix: Azure Pipelines
description: How to migrate from classic pipelines to YAML
ms.topic: quickstart
ms.date: 12/07/2020
monikerRange: azure-devops
---

# Quickstart: Migrate your classic pipeline to YAML

Get started with YAML pipelines by converting your existing Classic pipeline to use YAML. YAML-based pipelines enable you to implement your CI/CD strategy as code. You can use the **Export as YAML** option to export your YAML from an existing Classic pipeline. 


## Prerequisites

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../get-started/pipelines-sign-up.md).
- A working pipeline that uses the Classic user interface editor. 

## Create a new YAML pipeline

Before you get started, it is helpful to have a sample YAML pipeline file in your code. You'll update this YAML pipeline file later with your exported code from the Classic interface editor. 

1. Sign in to your Azure DevOps organization and navigate to your project.

1. In your project, navigate to the Pipelines page. Then choose the action to create a new pipeline.

1. Select GitHub or Azure Repos as the location of your source code.

1. When the list of repositories appears, select your desired repository.

1. Azure Pipelines will analyze your repository and recommend a template. Use with **Starter template**. Select Save and run, then select Commit directly to the main branch, and then choose **Save** and run again.

1. A new run is started. Wait for the run to finish.

## Export your Classic pipeline 

Export your Classic pipeline to a YAML file that you can use in the editor. 

1. Select **Pipelines** in the menu and open your pipeline. 

1. Open the context menu by selecting the ellipses. 

1. Select **Export to YAML**. 

    :::image type="content" source="media/export-yaml.png" alt-text="Export your pipeline to YAML.":::

1. Open the downloaded YAML file in your code editor. 


1. If your YAML pipeline included variables defined in the Classic user interface, you'll need to define the variables again in your pipeline settings UI or in your YAML file. See [Define variables](../process/variables.md) to learn how to set variables in pipelines.

1. Review any `cron` schedules in your YAML file. By default, `cron` schedules in YAML are in UTC. In classic pipelines, they are in the organization's timezone. See [Configure schedules for pipelines](../process/scheduled-triggers.md) to learn more about configuring your pipeline to run on with a `cron` job. 
 
1. Use the Task Assistant to make any other needed changes to the YAML file. The Task Assistant is a pane on the right side of the screen, which helps you correctly create and modify YAML steps. 

    :::image type="content" source="media/task-assistant-yaml.png" alt-text="Configure your pipeline task with Task Assistant.":::    
 
1. Save and run your pipeline. 

## Clean up resources

If you're not going to continue to use this pipeline, delete it from your project.

1. Select the ellipses (...) in the navigation and choose **Delete**. 

1. Enter the name of your pipeline to permanently delete it and save.

## Next steps

Learn about the difference in features between YAML and Classic pipelines. 

> [!div class="nextstepaction"]
> [Use Azure Pipelines](../get-started/pipelines-get-started.md#feature-availability)

