---
title: Deploy a Docker container app
description: Set up continuous deployment (CD) of a Docker-enabled app to an Azure Web App in Azure Pipelines or Team Foundation Server (TFS)
ms.assetid: 78815F3C-4347-4C8B-AB4B-F36FC0D41531
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.manager: mijacobs
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 08/30/2019
monikerRange: '> tfs-2018'
---

# Deploy to an Azure Web App for Containers

**Azure Pipelines**

We'll show you how to set up continuous deployment of your Docker-enabled app to an Azure Web App using
Azure Pipelines.

For example, you can continuously deliver your app to a Windows VM hosted in Azure.

![A typical release pipeline for web applications](azure/_shared/_img/vscode-git-ci-cd-to-azure.png)

After you commit and push a code change, it is automatically built and then deployed. The results will automatically show up on your site.

## Get the code

If you want some sample code that works with this guidance, [import](../../../repos/git/import-git-repository.md) (into Azure DevOps) or fork (into GitHub) the following repository, based on the desired runtime.

#### [Java](#tab/java)

[!INCLUDE [include](../../ecosystems/_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/spring-guides/gs-spring-boot-docker.git
```
#### [JavaScript](#tab/java-script)

[!INCLUDE [include](../../ecosystems/_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/MicrosoftDocs/pipelines-javascript-docker
```
#### [Python](#tab/python)

[!INCLUDE [include](../../ecosystems/_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/Microsoft/python-sample-vscode-flask-tutorial/
```
#### [.NET Core](#tab/dotnet-core)

[!INCLUDE [include](../../ecosystems/_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core-docker
```
* * *

## Define your CI build pipeline

Set up a CI pipeline for [building an image](../../ecosystems/containers/build-image.md) and [pushing it to a container registry](../../ecosystems/containers/push-image.md).

## Prerequisites

You'll need an Azure subscription. You can get one free through [Visual Studio Dev Essentials](https://visualstudio.microsoft.com/dev-essentials/).

[!INCLUDE [create-azure-webapp-to-host-container](../_shared/create-azure-webapp-to-host-container.md)]

[!INCLUDE [create-release-azure-webapp-container](../_shared/create-release-azure-webapp-container.md)]

## Next steps

* [Set up multi-stage release](../../release/define-multistage-release-process.md)
