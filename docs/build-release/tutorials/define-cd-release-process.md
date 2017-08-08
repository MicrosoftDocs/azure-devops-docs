---
title: Define your CD release process | VSTS Tutorial
description: Define a continuous deployment (CD) process for your ASP.NET Core app using Visual Studio Team Services
services: vsts
documentationcenter: ''
author: ahomer
manager: douge
editor: ''

ms.assetid: 4D39EC3B-6C48-4ED8-867C-BA6DEA2C29BB
ms.service: vsts
ms.devlang: dotnetcore
ms.topic: hero-article
ms.tgt_pltfrm: ''
ms.workload: ''
ms.date: 07/31/2017
ms.custom: mvc
---

# Define your continuous deployment (CD) process

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide
a highly customizable continuous deployment service for managing the release
of your applications. Your release definition is where you specify the artifacts
to deploy, where and how they are deployed, the additional tasks you want to run
during the deployment, and other factors that influence the release process.

In this tutorial, you learn about:

> [!div class="checklist"]
> * Creating a release definition using a template
> * Configuring the tasks in your release definition
> * Creating a release from your release definition
> * Monitoring the deployment of your release

[What's the difference between a release definition and a release?](../concepts/releases/index.md)

[!INCLUDE [include](_shared/build-prerequisites.md)]

This tutorial requires you to have already created a set of build artifacts
from a build definition. You also need an Azure App Services website where you will
deploy the app.

If you don't already have a build definition that creates a set of artifacts for your app,
work through the tutorial [Define your continuous integration (CI) build process](define-ci-build-process.md) first.

[!INCLUDE [create-azure-web-app-portal](../apps/_shared/create-azure-web-app-portal.md)]

## Create a new release definition

Open build summary and choose **Release**

[What other ways can I create a release definition?](../actions/work-with-release-definitions.md)

Select the **Azure App Service Deployment** template and choose **Apply**

In **Pipeline** tab, choose XXX to open the Continuous Delivery panel, ensure Continuous delivery is turned on (creates release when artifacts updated, for example from build)

Choose XXX icon in environment to open Triggers panel, explore trigger settings (deploy starts when release created)

[Where can I learn more about release triggers?](../concepts/definitions/release/triggers.md)

## Configure the tasks in the release definition

Open the **Tasks** tab and select the **Deploy Azure App Service** task. 

Select your Azure subscription and App Services website.

[Where can I learn more about adding tasks?](../actions/work-with-release-definitions.md#define-processes)

Save the release definition

## Create a release

Choose the **Release** icon and choose **Create release**

Enter description and choose **Queue**

Choose release definition name in information bar to see summary "in progress"

## Monitor the deployment

Open **Logs** tab and watch deployment of the release

Open **Summary** tab, view results

Choose environment name, drill down to environment.
