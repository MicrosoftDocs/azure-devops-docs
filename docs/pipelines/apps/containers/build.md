---
title: Build and push a Docker image
description: Learn how to define  a continuous integration (CI) pipeline for your Dockerfile in VSTS or Team Foundation Server (TFS)
ms.topic: quickstart
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: E5BEDC1D-0209-40F3-A2AB-591CB7AE97E8
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.date: 02/20/2018
monikerRange: '>= tfs-2017'
---


# Build and push a Docker image

**VSTS | TFS 2018 | TFS 2017.3**

This quickstart explains how to set up continuous integration (CI) to build a container image and push it to a Docker registry like Azure Container Registry or Docker Hub. At the end of this topic, you'll be ready to continuously deploy your image to a Kubernetes cluster or an Azure Web App for Containers.

[//]: # (TODO: show how to push the image to Docker Hub.)

## Prerequisites

* You must already have a CI build such as one of these:

   - [Build your ASP.NET Core app](../../languages/dotnet-core.md)
   - [Build your Go app](../go/go.md)
   - [Build your Gradle app](../java/build-gradle.md)
   - [Build your Node.js app with Gulp](../nodejs/build-gulp.md)

* An Azure subscription for pushing your container image to Azure Container Registry. If you don't have one, you can [create one for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).

* While the simplest way to try this quickstart is to use a VSTS account, you can also use TFS server. With TFS, make sure that you have [configured a build agent](../../agents/agents.md) with Docker installed.

[!INCLUDE [create-azure-container-registry](../_shared/create-azure-container-registry.md)]

[!INCLUDE [web-or-yaml](../../_shared/web-or-yaml.md)]

## Adapt your CI pipeline

Here you'll adapt your CI pipeline so that it builds and pushes your container image.

# [Web](#tab/web)

**VSTS | TFS**

Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then edit your build pipeline. Select **Tasks**, and then add the following tasks:

[!INCLUDE [include](_shared/container-tasks-web.md)]

**Save and queue** the build.

# [YAML](#tab/yaml)

**VSTS**

First create a temporary web build process that includes the two Docker tasks you need.

1. Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then choose **+ New**.

1. You're asked to **Select a template** for the new build pipeline. Select **Empty**.

1. Add the following tasks.

[!INCLUDE [include](_shared/container-tasks-web.md)]

1. In the left panel select **Process**, and then in the right panel select **View YAML**, and then copy the YAML to your clipboard.

1. Navigate to the **Code** hub, choose the **Files** tab, and then choose the repository that contains your app.

1. Select the **.vsts-ci.yml** file, and then choose **Edit**.

1. Move your cursor to the end of the file, add a line, and then and paste the YAML from your clipboard.

1. Delete the `queue`, `name`, and `steps` items so that there is no code between the `docNetCoreCLI` task and the first of the two `Docker` tasks.

1. Navigate to the **Builds** tab of the **Build and Release** hub and queue the build.

---

A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.
Verify that the Docker container image is built and pushed to your container registry.

Now your CI process is set up to push a new Docker image to a container registry every time a change is pushed to your application code.

## Next steps

> [!div class="nextstepaction"]
> [Deploy to Azure Web App for Containers](../cd/deploy-docker-webapp.md)

> [!div class="nextstepaction"]
> [Deploy using Kubernetes](../cd/azure/deploy-container-kubernetes.md)

## Videos 
> [!VIDEO https://www.youtube.com/embed/X4Puu0BS3GE]