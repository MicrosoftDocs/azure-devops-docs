---
title: Create your first pipeline
titleSuffix: Azure Pipelines & TFS
description: Create your first pipeline using Azure DevOps Services and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 5A8F1A12-72BF-4985-9B27-65CBC08462F7
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 8/23/2018
monikerRange: 'vsts'
---

# Create your first pipeline

**Azure Pipelines**

This is a step-by-step guide to using Azure Pipelines to build a GitHub repository.

## Prerequisites

[!INCLUDE [include](_shared/ci-cd-prerequisites-vsts.md)]

* You need a GitHub account, where you can create a repository.

## Get the sample code

You can use Azure Pipelines to build an app written in any language.
Select a sample repository of your choice from the following languages and fork it into your own GitHub user account:

| Programming language | Repository with a sample app |
|----------------------|----------------------------|
| .NET Core | `https://github.com/MicrosoftDocs/pipelines-dotnet-core` |
| Go | `https://github.com/MicrosoftDocs/pipelines-go` |
| Java | `https://github.com/MicrosoftDocs/pipelines-java` |
| Node.js | `https://github.com/MicrosoftDocs/pipelines-javascript` |
| Python | `https://github.com/MicrosoftDocs/pipelines-python-django` |

You should now have a sample app in your GitHub account.

## Get your first build

1. Sign in to your Azure DevOps organization and navigate to your project.

1. In your project, navigate to the **Pipelines** page. Then choose **New pipeline**.

1. Walk through the steps of the wizard by first selecting **GitHub** as the location of your source code.

   ![Select GitHub](_img/get-started-yaml/new-pipeline.png)

1. For the second step, choose to **Authorize with OAuth** by selecting **Authorize**. You might be redirected to GitHub to sign in. Enter your GitHub credentials.

1. When you're redirected back to Azure Pipelines, select the **sample app** repository.

1. For the third step, Azure Pipelines analyzes the code in your repository. If your repository already contains an `azure-pipelines.yml` file, which is the case for all sample repositories, then this step is skipped. Or else, Azure Pipelines recommends a starter template based on the code in your repository.

1. In the final step, you're shown the YAML file that will be used.

1. Select **Save and run**. Choose the option to **Commit directly to the master branch**.

1. The YAML file is now pushed to your GitHub repository, and a new build is automatically started.

1. Wait for the build to finish.

## Get the status badge

1. In Azure Pipelines, go to the Build page to view the list of pipelines.

1. Select the pipeline that was created for you.

1. In the context menu for the pipeline, select **Status badge**.

   ![Status badge](_img/get-started-yaml/status-badge.png)

1. Copy the sample Markdown from the status badge panel.

## Add the status badge to your repository

Take the following steps in GitHub:

1. Inspect the `azure-pipelines.yml` file at the root of your repository. The YAML file contains the instructions for the pipeline. The next time you change any file in this repository, Azure Pipelines will automatically build your code.

1. Go back to the list of files and select the `Readme.md` file. Then choose **Edit**.

1. Copy the status badge Markdown that you copied in the previous section at the beginning of the `Readme.md` file.

1. Commit the change to the master branch.

1. Notice that the status badge appears in the description of your repository.

Back in Azure Pipelines, observe that a new build is queued. Its status might be either not started or running.

## Next steps

You've just learned the basics of using Azure Pipelines. Now you're ready to further configure your pipeline to run tests, publish test results, create container images, or even deploy the app to a cloud service. Follow a track for the language of your choice:

* [.NET Core](languages/dotnet-core.md)
* [Docker](languages/docker.md)
* [Go](languages/go.md)
* [Java](languages/java.md)
* [Node.js](languages/javascript.md)
* [Python](languages/python.md)

To adjust the timeout of your job, see [Timeouts](process/phases.md#timeouts).

To run your pipeline in a container, see [Container jobs](process/container-phases.md).

For details about building GitHub repositories, see [Build open source projects](build/ci-public.md).
