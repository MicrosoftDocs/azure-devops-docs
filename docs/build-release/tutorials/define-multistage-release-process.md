---
title: Define a multi-stage CD release process | VSTS Tutorial
description: Define a multi-stage continuous deployment (CD) process for your ASP.NET Core app using Visual Studio Team Services
services: vsts
documentationcenter: ''
author: ahomer
manager: douge
editor: ''

ms.assetid: 12F57ADB-49B9-4E21-A346-5EDB1D1EC2F7
ms.service: vsts
ms.devlang: dotnetcore
ms.topic: hero-article
ms.tgt_pltfrm: ''
ms.workload: ''
ms.date: 07/31/2017
ms.custom: mvc
---

# Define your multi-stage continuous deployment (CD) process

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide
a highly customizable continuous deployment service for managing the release
of your applications. A release definition can be used to create a highly
configurable and manageable pipeline for releases to multiple environments
such as development, staging, QA, and production environments; including
requiring approvals at specific stages.

In this tutorial, you learn about:

> [!div class="checklist"]
> * Extending a release definition by adding environments
> * Configuring the environments as a multi-stage release pipeline
> * Modifying the pipeline to suit your testing scenario
> * Adding approvals to your release pipeline
> * Creating and monitoring the deployment to each environment

[What's the difference between a release definition and a release?](../concepts/releases/index.md)

[!INCLUDE [include](_shared/build-prerequisites.md)]

This tutorial requires you to have completed the tutorial 
[]() first. This tutorial extends that one by using the same set of build artifacts
from the build definition. You also need four separate Azure App Services websites
where you will deploy each stage of the app pipeline.

Start by configuring three more Azure App Services web apps so that you have four in all.
Give the new ones names such as **SampleApp-Test**, **SampleApp-QA**, and **SampleApp-Prod**.
You will need to adapt the names so that they are unique in App Services - perhaps
by adding your initials and a number to each one. Use the following steps to create each one.

[!INCLUDE [create-azure-web-app-portal](../apps/_shared/create-azure-web-app-portal.md)]

## Add test, QA, and production environments to the release definition

[TBD]

[Where can I learn more about adding new environments?](../actions/work-with-release-definitions.md#add-envir)

## Configure a fork and join release pipeline

[TBD]

[Where can I learn more about release triggers?](../concepts/definitions/release/triggers.md)

## Add an approval requirement for release to production

[TBD]

[Where can I learn more about approvals?](../concepts/definitions/release/environments.md#approvals)

## Update your code to create a new release

[!INCLUDE [change-aspnet-core-code](../apps/_shared/change-aspnet-core-code.md)]

## Monitor the deployment

Open the **Releases** page from the **Build &amp; Release ** hub.

Wait a few minutes for the build to complete and the release to start.

Refresh the page and, when it appears, select the new release

Open the release summary from the shortcut menu.

Open **Logs** tab and watch deployment of the release. You will see the app deployed to the "dev" environment, and then to the "test" and "qa" environments in parallel

When the release to the "QA" environment has completed, you will see a pop-up indicating that an approval is pending

Notice that the deployment to "prod" has not yet occurred. Approve the release and you see it deployed to the "prod" environment

Open **Summary** tab, view results

Choose environment name, drill down each environment.
