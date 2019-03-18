---
title: Build your GitHub repository using the classic editor in Azure Pipelines
description: Learn how to define a continuous integration (CI) build for your GitHub repository using Azure Pipelines
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.assetid: B61506B0-766C-49D1-B991-85BBFCBCD3E6
ms.author: mlearned
author: mlearned
ms.reviewer: dastahel
ms.manager: jillfra
ms.custom: "mvc, seodec18"
ms.date: 06/29/2018
monikerRange: 'azure-devops'
---

# Build a repo using the classic editor

**Azure Pipelines**

::: moniker range="> tfs-2018"
> [!TIP]
> We recommend that you use YAML instead of the classic editor that is explained below. YAML allows you to use the same branching and code review practices for your pipeline as you would for your application code. See [Create your first pipeline](../get-started-yaml.md).
::: moniker-end

## Prerequisites

[!INCLUDE [include](../_shared/ci-cd-prerequisites-vsts.md)]

* You need a GitHub account, where you can create a repository.

## Get the sample code

Azure Pipelines can be used to build an app written in any language. For this guide, we will use a .NET Core sample app. Fork the following repository into your own GitHub account.

`https://github.com/MicrosoftDocs/pipelines-dotnet-core`

You should now have a sample app in your GitHub account.

## Set up CI for your repository

Follow the steps below to configure GitHub as a source for your Azure Pipelines build.

1. Login to your organization in Azure DevOps and navigate to your project.

2. In your project, navigate to the **Pipelines** page, and then choose **New pipeline**.

3. Select **GitHub** for the type of repository.

4. Give your connection a name, and then select the **Authorize using OAuth** button. Optionally you can use a GitHub **personal access token** instead of OAuth.

5. When prompted, sign in to your **GitHub account**. Then select **Authorize** to grant access to your organization. If you already are signed into GitHub in another browser tab, you may not see this step.

6. Choose the repository that contains the sample you forked earlier and select **Continue**.

7. Select the **ASP.NET Core** build template or a template that is appropriate for your application.

8. Choose **Hosted Ubuntu 1604** for Agent pool.

9. Select **Triggers**. Enable **Continuous integration** for your builds. Ensure you include the `master` branch under **Branch filters**. This setting ensures each commit to `master` in GitHub will trigger a build via a GitHub webhook.

10. Select **Save & queue** to save your build pipeline and create the first build.

11. Once the build completes, select the name of the pipeline in the build results page to navigate to the history of builds for that pipeline. Take a note of the `definitionId` in the URL. You will need this to set up the build badge in upcoming steps.

## Get the status badge

1. In the Azure Pipelines page, navigate to the list of pipelines.

1. Select the pipeline that was created for you.

1. In the context menu for the pipeline, select **Status badge**.

   ![Status badge](../_img/get-started-yaml/status-badge.png)

1. Copy the sample markdown from the status badge panel.

## Add a status badge to your repository

In GitHub:

1. Select the _Readme.md_ file, and then choose **Edit**.

1. Copy the status badge Markdown that you copied in the previous section at the beginning of the readme.md file.

1. Commit the change to the master branch.

1. Notice that the status badge appears in the description of your repository.

In Azure Pipelines:

1. Observe that a new build is queued; its status could be either not started or running.

## Q & A

### How do I use a personal access token to authorize the Azure Pipelines to GitHub connection?

See this [article](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) for creating a GitHub personal access token. You can use the token in the Azure Pipelines **Get sources** task of your build or release pipelines by creating a GitHub [service connection](../library/service-endpoints.md) and entering the token.
