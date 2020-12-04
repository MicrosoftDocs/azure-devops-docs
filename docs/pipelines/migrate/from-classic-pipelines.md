---
title: Migrate from classic pipelines to YAML
titleSuffix: Azure Pipelines
description: How to migrate from classic pipelines to YAML
ms.topic: quickstart
ms.date: 12/04/2020
monikerRange: azure-devops
---

# Quickstart: Migrate your classic pipeline to YAML

Get started with YAML pipelines by using converting your existing classic pipeline to use YAML. YAML-based pipelines enable you to implement your CI/CD strategy as code. 


## Prerequisites

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).
- A working pipeline that uses the Classic user interface editor. 

## Create a new YAML pipeline

Add a sample YAML pipeline for your code. You will update this YAML pipeline file later with your exported code from the classic user interface editor. 

1. Sign in to your Azure DevOps organization and navigate to your project.

1. In your project, navigate to the Pipelines page. Then choose the action to create a new pipeline.

1. Walk through the steps of the wizard by first selecting GitHub or Azure Repos as the location of your source code.

1. When the list of repositories appears, select your desired repository.

1. Azure Pipelines will analyze your repository and recommend a template. Use with **Starter template**. Select Save and run, then select Commit directly to the master branch, and then choose **Save** and run again.

1. A new run is started. Wait for the run to finish.

## Export your classic pipeline 

Export your classic pipeline to a YAML file that you can use in the editor. 

1. Select **Pipelines** in the menu and open your pipeline. 

1. Open the context menu by selecting the ellipses. 

1. Select **Export to YAML**. 

    :::image type="content" source="media/export-yaml.png" alt-text="Export your pipeline to YAML.":::

1. Open the downloaded YAML file in your code editor. 




## Clean up resources

If you're not going to continue to use this pipeline, delete <resources> with the following steps:

1. From the left-hand menu...
2. ...click Delete, type...and then click Delete


## Next steps

Advance to the next article to learn how to create...
> [!div class="nextstepaction"]
> [Next steps button](contribute-get-started-mvc.md)

