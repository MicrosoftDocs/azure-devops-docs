---
title: Build your GitHub repository
description: Learn how to define a continuous integration (CI) build for your GitHub repository using Visual Studio Team Services
ms.topic: conceptual
ms.prod: devops
ms.service: vsts
ms.custom: mvc
ms.technology: devops-cicd
ms.prod: devops
ms.assetid: B61506B0-766C-49D1-B991-85BBFCBCD3E6
ms.manager: douge
ms.author: mlearned
author: mlearned
ms.reviewer: dastahel
ms.date: 06/29/2018
monikerRange: 'vsts'
---

# Build your GitHub repository

Visual Studio Team Services (VSTS) can perform continuous integration (CI) and continuous delivery (CD) for code in your GitHub repository.

In this tutorial, you learn how to:

> [!div class="checklist"]
> * Set up CI builds for your GitHub repository
> * Add a build status badge to your README file

## Prerequisites

* Before you read this topic, you should understand the type of build you'd like to work with:  [designer](../get-started-designer.md) or [YAML](../get-started-yaml.md).

* You need a GitHub repository with your app. If you do not have one, we recommend forking the [sample .NET Core app](https://github.com/adventworks/dotnetcore-sample) into your own GitHub repo. You must have owner or admin privileges on the repository that you work with.

## Set up CI for your GitHub repository

# [Designer](#tab/designer)

Follow the steps below to configure GitHub as a source for your VSTS build.

> [!IMPORTANT]
> Ensure your browser does not block the pop-up on step 4 below.

1. Navigate to your VSTS account and team project. Select **Build and Release**, and then select **Builds**.
1. Select **New** to create a new build pipeline.
1. Select **GitHub** for the type of repository.
1. Give your connection a name, and then select the **Authorize using OAuth** button. Optionally you can use a GitHub **personal access token** instead of OAuth.
1. When prompted, sign in to your **GitHub account**. Then select **Authorize** to grant access to your VSTS account. If you already are signed into GitHub in another browser tab, you may not see this step.
1. Choose the repository that contains the sample you forked earlier and select **Continue**.
1. Select the **ASP.NET Core** build template or a template that is appropriate for your application.
1. Choose **Hosted VS2017** for Agent queue.
1. Select **Triggers**. Enable **Continuous integration** for your builds. Ensure you include the `master` branch under **Branch filters**. This setting ensures each commit to `master` in GitHub will trigger a build via a GitHub webhook.
1. Select **Save & queue** to save your build pipeline and create the first build.
1. Once the build completes, select the name of the definition in the build results page to navigate to the history of builds for that definition. Take a note of the `definitionId` in the URL. You will need this to set up the build badge in upcoming steps.

# [YAML](#tab/yaml)

> [!IMPORTANT]
> Ensure your browser does not block the pop-up on step 6 below.

1. Ensure that you have a `.vsts-ci.yml` file at the root of your repository in `master` branch. If you started from the [sample .NET Core repo](https://github.com/adventworks/dotnetcore-sample) it already has one. See the various other languages that we support in this documentation for examples of YAML file for the type of app you are interested in.
1. Navigate to your VSTS account and team project. Select **Build and Release**, and then select **Builds**.
1. Select **New** to create a new build pipeline.
1. Select **GitHub** for the type of repository.
1. Give your connection a name, and then select the **Authorize using OAuth** button. Optionally you can use a GitHub **personal access token** instead of OAuth.
1. When prompted, sign in to your **GitHub account**. Then select **Authorize** to grant access to your VSTS account. If you already are signed into GitHub in another browser tab, you may not see this step.
1. Choose the repository that contains the sample you forked earlier and select **Continue**.
1. Select the **YAML** build template.
1. Choose **Hosted VS2017** for Agent queue.
1. For the **YAML path**, select the YAML file at the root of your repo by clicking on the ellipsis next to that field.
1. Select **Save & queue** to save your build pipeline and create the first build.
1. Once the build completes, select the name of the definition in the build results page to navigate to the history of builds for that definition. Take a note of the `definitionId` in the URL. You will need this to set up the build badge in upcoming steps.

---

## Add a build status badge

This section explores possibilities for further integrating VSTS and GitHub. You will create a build badge for the VSTS build pipeline by populating a GitHub readme file with markdown that points to the build badge URL.

1. Navigate to your GitHub account. Select **Code**. Create a Readme.md file unless one already exists.
1. For this step, paste the following markdown into your Readme.md file. Replace the tokens using the name of the build pipeline and the `definitionId` that you obtained above.

    `[![Build status](https://{your-vsts-account}.visualstudio.com/{your-vsts-project}/_apis/build/status/{build-definition-name}?branch=master)](https://{your-vsts-account}.visualstudio.com/{your-vsts-project}/_build/latest?definitionId={definitionId}&branch=master)]`

1. **Commit** your Readme.md file to the repository. The rendered Readme now shows the build badge.
1. Click on the build badge to navigate to the last completed build in VSTS.
1. In the build results page, select the commit id in the **Timeline** tab. This link navigates you directly to the GitHub commit.

## Q & A

### How do I use a personal access token to authorize the VSTS to GitHub connection?

See this [article](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) for creating a GitHub personal access token. You can use the token in the VSTS **Get sources** task of your build or release pipelines by creating a GitHub [service endpoint](../library/service-endpoints.md) and entering the token.

## Next steps

In this tutorial, you learned how to set up and manage CI with GitHub and VSTS.

You learned how to:

> [!div class="checklist"]
> * Set up CI builds for your GitHub repository
> * Display a VSTS build status within a GitHub README file

> [!div class="nextstepaction"]
> [Build multiple branches](ci-build-git.md)
