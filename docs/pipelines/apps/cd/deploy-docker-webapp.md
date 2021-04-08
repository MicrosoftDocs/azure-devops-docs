---
title: Deploy containerized applications to Web App for Containers
description: Deploy container base web apps to Web App for Containers
ms.assetid: 78815F3C-4347-4C8B-AB4B-F36FC0D41531
ms.topic: quickstart
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 04/08/2021
monikerRange: '> tfs-2018'
---

# Deploy to Azure Web App for Containers

**Azure Pipelines**

With Azure Web App for Containers you can easily deploy and run container-based web apps on Windows and Linux. In this quickstart, we will use Azure Pipelines to build and deploy our sample application to Web App for Containers.

Azure Pipelines enables us to implement a CI/CD workflow to automatically generates build Artifacts and trigger deployment to specific environments. 

:::image type="content" source="azure/media/vscode-git-ci-cd-to-azure.png" alt-text="CI/CD workflow":::

## Get the code

Fork or clone the sample app to follow along with this tutorial.

#### [Java](#tab/java)

```
https://github.com/spring-guides/gs-spring-boot-docker.git
```
#### [JavaScript](#tab/java-script)

```
https://github.com/MicrosoftDocs/pipelines-javascript-docker
```
#### [Python](#tab/python)

```
https://github.com/Microsoft/python-sample-vscode-flask-tutorial/
```
#### [.NET Core](#tab/dotnet-core)

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core-docker
```
* * *

## Define your CI build pipeline

Set up a CI pipeline for [building an image](../../ecosystems/containers/build-image.md) and [pushing it to a container registry](../../ecosystems/containers/push-image.md).

## Prerequisites

You'll need an Azure subscription. You can get one free through [Visual Studio Dev Essentials](https://visualstudio.microsoft.com/dev-essentials/).

[!INCLUDE [create-azure-webapp-to-host-container](../includes/create-azure-webapp-to-host-container.md)]

[!INCLUDE [create-release-azure-webapp-container](../includes/create-release-azure-webapp-container.md)]

## Next steps

* [Set up multi-stage release](../../release/define-multistage-release-process.md)
