---
title: CI build for a Docker-enabled NodeJS app
description: Define a continuous integration (CI) build process for your a Docker-enabled NodeJS app in VSTS or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: E5BEDC1D-0209-40F3-A2AB-591CB7AE97E8
ms.manager: douge
ms.author: alewis
ms.date: 09/27/2017
---

# Build your NodeJS Container app

**VSTS**

In this quickstart you learn how to define CI process for your Docker-enabled NodeJS application using VSTS. The CI process will publish a new container image to Azure Container Registry every time a change is pushed to the application code.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

* An Azure subscription. If you don't have one, you can [create one for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).

[!INCLUDE [create-azure-container-registry](../_shared/create-azure-container-registry.md)]

## Get the sample app code

[!INCLUDE [include](../_shared/get-sample-code-intro.md)]

```URL
https://github.com/adventworks/nodejs-docker-sample
```

# [VSTS or TFS repo](#tab/vsts)

[!INCLUDE [include](../_shared/get-sample-code-vsts-tfs-2017-update-2.md)]

# [GitHub repo](#tab/github)

[!INCLUDE [include](../_shared/get-sample-code-github.md)]

---

The sample app in this repository is a simple NodeJS application with a Dockerfile that defines a [multi-stage build](https://docs.docker.com/engine/userguide/eng-image/multistage-build/). The first stage defines how to build the application and the second stage packages the application as a container image that can be published to a container registry. 

## Set up continuous integration

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

[!INCLUDE [include](../_shared/create-nodejs-docker-build-team-services.md)]

## View the build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Next step

> [!div class="nextstepaction"]
> [Deploy to Azure Web App for Containers](../cd/deploy-docker-webapp.md)
