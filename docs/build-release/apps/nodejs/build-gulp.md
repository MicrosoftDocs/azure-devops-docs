---
title: CI build for a Node.js app with Gulp
description: Define a continuous integration (CI) build process for your Node.js app with Gulp in VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.topic: get-started-article
ms.assetid: F0829366-2AC1-4344-9494-98CACEC38806
ms.manager: douge
ms.author: alewis
ms.date: 08/28/2017
---

# Build your Node.js app with Gulp

**VSTS | TFS 2018 | TFS 2017 Update 3**

Follow these steps to quickly set up a CI process for your Node.js app using Visual Studio Team Services (VSTS) or Team Foundation Server (TFS). The sample app we use here is a Node server that echoes "Hello world". Tests for the app are written using mocha framework. A gulp file is used to run the tests and to convert the results into junit format so that they can be published to VSTS or TFS.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

* While the simplest way to try this quickstart is to use a VSTS account, you can also use a TFS server instead of a VSTS account. Make sure that you have [configured a build agent](../../actions/agents/v2-windows.md) for your team project, and that you have Node and Gulp installed on the agent machine.

## Get sample app code

[!INCLUDE [include](../_shared/get-sample-code-intro.md)]

```
https://github.com/adventworks/nodejs-sample
```

Choose your version control system to get specific instructions for copying the sample app code:

# [VSTS Git](#tab/vstsgit)

[!INCLUDE [include](../_shared/get-sample-code-vsts-tfs-2017-update-2.md)]

# [GitHub](#tab/github)

[!INCLUDE [include](../_shared/get-sample-code-github.md)]

---

[!INCLUDE [include](../_shared/get-sample-code-other-repos-vsts.md)]

## Set up continuous integration

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

1. Create a new build definition.

 # [VSTS or TFS repo](#tab/vsts)

 Navigate to the **Files** tab of the **Code** hub, and then click **Set up build**.

 ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to the **Build & Release** hub and asked to **Select a template** for the new build definition.

 # [GitHub repo](#tab/github)

 Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then click **+ New**. You are asked to **Select a template** for the new build definition.

 ---

1. In the right panel, search for `node`, select **NodeJS with Gulp**, and then click **Apply**.

 ![apply node.js gulp template](_img/apply-nodejs-gulp-template.png)

 You now see all the tasks that were automatically added to the build definition by the template. These are the steps that will automatically run every time you check in code.

1. For the **Default agent queue**:

 * **VSTS:** Select _Hosted VS2017_. This is how you can use our pool of agents that have the software you need to build your app.

 * **TFS:** Select a queue that includes a [Windows build agent](../../actions/agents/v2-windows.md).

1. Click **Get sources** and then:

 # [VSTS or TFS repo](#tab/vsts)

 Observe that the new build definition is automatically linked to your repository.

 # [GitHub repo](#tab/github)

 Select your version control repository. You'll need to authorize access to your repo.

 ---

1. Select the **Run gulp** task from the tasks. On the right side, you see the parameters for the task. Under the section JUnit Test Results, select the option to Publish to TFS/VSTS.

1. Click the **Triggers** tab in the build definition. Enable the **Continuous Integration** trigger. This will ensure that the build process is automatically triggered every time you commit a change to your repository.

1. Click **Save and queue** to kick off your first build. On the **Queue build** dialog box, click **Queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.

[//]: # (TODO:> [!TIP])
[//]: # (TODO:> To learn more about GitHub CI builds, see [Define CI build process for your Git repo](#)

## View the build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Next steps

[!INCLUDE [include](../_shared/ci-web-app-next-steps-with-containers.md)]
