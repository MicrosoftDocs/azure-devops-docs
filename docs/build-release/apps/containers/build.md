---
title: CI build for a Docker-enabled app
description: Define a continuous integration (CI) build process for your Docker-enabled app in VSTS or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: E5BEDC1D-0209-40F3-A2AB-591CB7AE97E8
ms.manager: douge
ms.author: alewis
ms.date: 11/8/2017
---

**VSTS | TFS 2018 | TFS 2017 Update 3**

# Build and publish a container for your app

In this quickstart you learn how to define a continuous integration (CI) process for your Docker-enabled application using VSTS. The CI process will publish a new container image to Azure Container Registry every time a change is pushed to the application code.

## Prerequisites

* A CI build set up for your application. See either [Build your Node.js app with Gulp](../nodejs/build-gulp.md) or [Build your ASP.NET Core app](../aspnet/build-aspnet-core.md).

* An Azure subscription. If you don't have one, you can [create one for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).

[!INCLUDE [create-azure-container-registry](../_shared/create-azure-container-registry.md)]

## Modify the build definition

If you created a build definition by following one of the walkthroughs mentioned in the prerequisites above, then your build produces a web deployment file. This is useful to deploy the app to an Azure web app or to an IIS server. However, here the goal is to deploy your app to Azure web apps for containers or to a Kubernetes cluster. So you will instead publish the app as a container.

<!--
The steps for doing this depend on whether your CI process is defined through a YAML file or through the web editor in VSTS.

# [Editor](#tab/editor)
-->

1. Remove the **Archive files** task and the **Publish artifacts** task from the build definition.

1. Select **+ Add Task** to add another task to the build definition. From the displayed task catalog, select the **Docker** task. Specify the following arguments:

   * **Azure subscription:** Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions connection to your Azure subscription. If you are using VSTS and if you see an **Authorize** button next to the input, click on it to authorize VSTS to connect to your Azure subscription. If you are using TFS or if you do not see
     the desired Azure subscription in the list of subscriptions, see [Azure Resource Manager service endpoint](../../concepts/library/service-endpoints.md#sep-azure-rm) to manually set up the connection.

   * **Azure Container Registry:** Select the Azure container registry that you created above.

   * **Action:** Build an image.

1. Select **+ Add Task** to add another **Docker** task to the build definition.
   Make sure that the task is inserted _after_ the previous **Docker** task. Specify the following arguments:

   * **Azure subscription:** Same as in previous task.

   * **Azure Container Registry:** Same as in previous task.

   * **Action:** Push an image.

1. Click **Save and queue** to kick off a build. On the **Save build definition and queue** dialog box, click **Save & queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens. Verify that a Docker container image is built and pushed to the Azure container registry.

<!--
# [Container](#tab/yaml)

This is not yet supported in YAML.
---
-->

## Next step

> [!div class="nextstepaction"]
> [Deploy to Azure Web App for Containers](../cd/deploy-docker-webapp.md)