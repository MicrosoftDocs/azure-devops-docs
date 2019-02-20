---
title: Create your first pipeline
ms.custom: seodec18
description: Create your first pipeline using Azure DevOps Services and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 5A8F1A12-72BF-4985-9B27-65CBC08462F7
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 11/19/2018
monikerRange: 'azure-devops'
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
| .NET Core | https://github.com/MicrosoftDocs/pipelines-dotnet-core |
| Go | https://github.com/MicrosoftDocs/pipelines-go |
| Java | https://github.com/MicrosoftDocs/pipelines-java |
| Node.js | https://github.com/MicrosoftDocs/pipelines-javascript |
| Python | https://github.com/MicrosoftDocs/pipelines-python-django |

You should now have a sample app in your GitHub account.

## Get your first build

1. Sign in to your Azure DevOps organization and navigate to your project.

1. In your project, navigate to the **Pipelines** page. Then choose **New pipeline**.

1. Walk through the steps of the wizard by first selecting **GitHub** as the location of your source code.

   > [!div class="mx-imgBorder"]
   ![Select GitHub](_img/get-started-yaml/new-pipeline.png)

1. Choose to **Authorize with OAuth** by selecting **Authorize**. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When you're redirected back to Azure Pipelines, select the **sample app** repository.

1. Azure Pipelines will analyze your repository. If your repository already contains an `azure-pipelines.yml` file (which is the case for all sample repositories) then that file will be used. If not, Azure Pipelines recommends a starter template based on the code in your repository.

1. You will be shown the selected YAML file. If you see the **Run** button, choose it and go to the next step. If you see the **Save and run** button, then first select **Commit directly to the master branch**, then choose **Save and run**.

1. Wait for the build to finish.

<a name="get-the-status-badge"></a>
## Add a CI status badge to your repository

Many developers like to show that they're keeping their code quality high by displaying a CI build status badge in their repo.

> [!div class="mx-imgBorder"]
![Status badge shows Azure pipeline succeeded](_img/get-started-yaml/azure-pipelines-succeeded.png)

To copy the status badge to your clipboard:

1. In Azure Pipelines, go to the **Builds** page to view the list of pipelines. Select the pipeline you created in the previous section.

1. In the context menu for the pipeline, select **Status badge**.

   > [!div class="mx-imgBorder"]
   ![Status badge](_img/get-started-yaml/status-badge.png)

1. Copy the sample Markdown from the status badge panel.

Now with the badge Markdown in your clipboard, take the following steps in GitHub:

1. Go to the list of files and select `Readme.md`. Select the pencil icon to edit.

1. Paste the status badge Markdown at the beginning of the file.

1. Commit the change to the `master` branch.

1. Notice that the status badge appears in the description of your repository.

Back in Azure Pipelines, observe that a new build appeared. Each time you make an edit, Azure Pipelines will queue a new build.

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

For details about building GitHub repositories, see [Build GitHub repositories](repos/github.md).

To learn what else you can do in YAML pipelines, see [YAML schema reference](yaml-schema.md).
