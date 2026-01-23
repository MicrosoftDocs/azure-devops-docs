---
title: Create Classic pipelines
description: Learn how to create Classic pipeline definitions in Azure Pipelines.
ms.topic: tutorial
ms.author: rabououn
author: ramiMSFT
ms.date: 01/23/2026
monikerRange: '<= azure-devops'
---

# Create Classic pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines enables you set up continuous integration and continuous delivery to automatically build, test, and deploy your applications to a variety of environments.

With Classic pipelines, you configure your pipeline using a visual editor. You can set up tasks to build your project, package your binaries, run tests, and make build outputs available for deployment. This article walks you through creating a Classic pipeline to build a sample project.

## Prerequisites

| **Product**        | **Requirements**  |
|--------------------|-------------------|
| **Azure DevOps**   | - An [Azure DevOps organization](../../organizations/accounts/create-organization.md).<br> - An [Azure DevOps project](../../organizations/projects/create-project.md). |

## Get the code

If you don't have your own project, fork the following repository into your GitHub account:

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core
```

## Create a Classic pipeline 

Classic pipelines allow you to configure your pipeline to perform multiple tasks. For example, you can add tasks to build your project, package binaries, and run tests. Follow these steps to create a Classic pipeline:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Pipelines**, then select **New pipeline**.

1. Select **Use the classic editor** to create a Classic pipeline.

1. Select your repository source and fill in the required fields. In this example, the source is **Azure Repos Git** with the appropriate **Team project**, **Respository**, and **Default branch** selected as shown in the screenshot. Select **Continue** when you're done.

1. Select a template or select **Empty job** to start with a blank pipeline. In this example, select the **ASP.NET** template, then select **Apply**..

1. Modify the tasks as needed, or leave the default configuration. Select **Save & queue** when you're done to queue your pipeline.

    :::image type="content" source="media/classic-pipeline-definition.png" alt-text="A screenshot displaying how to configure a Classic pipeline in Azure Pipelines.":::

1. Select your **Agent pool**, **Agent Specification**, and **Branch**, then select **Save and run**. Your pipeline is then queued and begins running the configured tasks.

    :::image type="content" source="media/queue-classic-pipeline.png" alt-text="A screenshot displaying how to queue a Classic pipeline.":::

## Related content

- [Pipeline caching](caching.md)

- [View Classic pipeline history](history.md)

- [Publish and download pipeline artifacts](../artifacts/pipeline-artifacts.md)
