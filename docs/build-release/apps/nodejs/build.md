---
title: CI build for a Node.js app
description: Define a continuous integration (CI) build process for your Node.js app in Visual Studio Team Services or Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.topic: get-started-article
ms.assetid: F0829366-2AC1-4344-9494-98CACEC38806
ms.manager: douge
ms.author: alewis
ms.date: 08/28/2017
---

# Build your Node.js app

**VSTS | TFS 2017 Update 2**

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide a highly customizable continuous integration (CI) process to automatically build your Node.js web app whenever your team pushes or checks in code. In this tutorial you learn how to define your CI process.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-tfs.md)]

## Import sample app code

[!INCLUDE [include](_shared/import-code.md)]

## Set up continuous integration

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

1. On the **Files** tab of the **Code** hub, click **Set up build**.

 ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to the **Build & Release** hub and asked to **Choose a template**.

1. In the right panel, search for `node`, select **NodeJS with Gulp**, and then click **Apply**.

 ![apply node.js gulp template](_img/apply-nodejs-gulp-template.png)

 You now see all the tasks that were automatically added to the build definition by the template. These are the steps that will automatically run every time check in code.

1. For the **Default agent queue**:

 * **VSTS:** Select _Hosted VS2017_. This is how you can use our pool of agents that have the software you need to build a .NET Core app.

 * **TFS:** Select a queue that includes a [Windows build agent](../../actions/agents/v2-windows.md).

1. Select the **Run gulp** task from the tasks. On the right side, you see the parameters for the task. Under the section JUnit Test Results, select the option to Publish to TFS/Team Services.

1. Click the **Triggers** tab in the build definition. Enable the **Continuous Integration** trigger. This will ensure that the build process is automatically triggered every time you commit a change to your repository.

1. Click **Save and queue** to kick off your first build. On the **Queue build** dialog box, click **Queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.

## View the build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Next steps

[!INCLUDE [include](../_shared/ci-web-app-next-steps.md)]
