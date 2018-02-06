---
title: CI build for a Docker-enabled app
description: Define a continuous integration (CI) build process for your Docker-enabled app in VSTS or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: E5BEDC1D-0209-40F3-A2AB-591CB7AE97E8
ms.manager: douge
ms.author: alewis
ms.date: 12/11/2017
---

# Build and publish a container for your app

**VSTS | TFS 2018 | TFS 2017.3**

In this quickstart you learn how to adapt a continuous integration (CI) process to publish your Docker-enabled application from VSTS into the Azure Container Registry. At the end of this topic, you'll be ready to continuously deploy your app to Azure web apps for containers.

[//]: # (TODO: or to a Kubernetes cluster.)

## Prerequisites

* You must already have a CI build such as one of these:

 - [Build your ASP.NET Core app](../aspnet/build-aspnet-core.md)
  
 - [Build your Node.js app with Gulp](../nodejs/build-gulp.md)

* An Azure subscription. If you don't have one, you can [create one for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-tfs.md)]

If you use a private agent, then it must have Docker installed on it.

[!INCLUDE [create-azure-container-registry](../_shared/create-azure-container-registry.md)]

[!INCLUDE [include](../../_shared/web-or-yaml.md)]

## Adapt your CI build definition

Here you'll adapt your CI build process so that it publishes your app as a container.

# [Web](#tab/web)

**VSTS | TFS**

Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then edit your build definition. Select **Tasks**, and then add the following tasks:

[!INCLUDE [include](_shared/container-tasks-web.md)]

**Save and queue** the build.

# [YAML](#tab/yaml)

**VSTS**

First create a temporary web build process that includes the two Docker tasks you need. 

1. Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then choose **+ New**. 

1. You're asked to **Select a template** for the new build definition. Select **Empty**.

1. Add the following tasks.

[!INCLUDE [include](_shared/container-tasks-web.md)]

1. In the left panel select **Process**, and then in the right panel select **View YAML**, and then copy the YAML to your clipboard.

1. Navigate to the **Code** hub, choose the **Files** tab, and then choose the repository that contains your app.

1. Select the **.vsts-ci.yml** file, and then choose **Edit**.

1. Move your cursor to the end of the file, add a line, and then and paste the YAML from your clipboard.

1. Delete the `queue`, `name`, and `steps` items so that there is no code between the `docNetCoreCLI` task and the first of the two `Docker` tasks.

1. Navigate to the **Builds** tab of the **Build and Release** hub and queue the build.

---

A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens. Verify that a Docker container image is built and pushed to the Azure container registry.

Now your CI process is set up to publish a new container image to Azure Container Registry every time a change is pushed to the application code.

## Next step

> [!div class="nextstepaction"]
> [Deploy to Azure Web App for Containers](../cd/deploy-docker-webapp.md)