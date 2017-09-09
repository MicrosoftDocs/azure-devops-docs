---
title: CI build for a Docker-enabled ASP.NET Core app
description: Define a continuous integration (CI) build process for your a Docker-enabled ASP.NET Core app in Visual Studio Team Services or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 86091275-B110-4800-9CEE-05D9963CC4CD
ms.manager: douge
ms.author: alewis
ms.date: 05/23/2017
---

# Build your Docker-enabled ASP.NET Core app

**VSTS | TFS 2017 Update 2**

[ASP.NET Core](http://www.asp.net/core) is a lean and composable framework for building web and cloud applications. Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide a highly customizable continuous integration (CI) process to automatically build your ASP.NET Core app whenever your team pushes or checks in code. In this tutorial you learn how to define your CI process.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-tfs.md)]

* An Azure subscription. If you don't have one, you can [create one for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).

[!INCLUDE [create-azure-container-registry](../_shared/create-azure-container-registry.md)]

## Get the sample app code

You'll the code for your ASP.NET Core app in a version control system in order to configure CI.
VSTS and TFS integrate with various version control systems such as Git in VSTS and TFS, Team Foundation Version Control, GitHub, and Subversion.

To make it easy for you to follow the steps in this quickstart, import the code for the sample ASP.NET Core app into your own version control repository from the following URL:

```URL
https://github.com/adventworks/dotnetcore-docker-sample
```

* To import the sample app into VSTS/TFS Git repository:

  * On the Code hub for your team project in VSTS/TFS, select the option to Import repository.

  * In the Import a Git repository dialog box, paste the above URL into the Clone URL text box.

  * Click Import to copy the sample code into your Git repo.

* To fork the sample app into your own GitHub repository:

  * Navigate to the above GitHub repository URL in your browser.

  * Select Fork to create your own copy of the repository.

The sample app in this repository is a Visual Studio solution that has two projects - an ASP.NET Core Web Application project and a Unit Test project both targeting .Net Core 1.1 framework. The instructions in this quickstart work for applications targeting .Net Core 2.0 framework as well.

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

1. In the right panel, click **Start with an Empty Process**.

1. For the **Default agent queue**:

   * **VSTS:** Select _Hosted Linux_. This is how you can use our pool of agents that have the software you need to build a .NET Core app.

   * **TFS:** Select a queue that includes a [build agent](../../actions/agents/v2-windows.md) with Docker.

1. Click **Get sources** and then:

  # [VSTS or TFS repo](#tab/vsts)

  Observe that the new build definition is automatically linked to your repository.

  # [GitHub repo](#tab/github)

  Select your version control repository. You'll need to authorize access to your repo.

  > [!TIP]
  > To learn more about GitHub CI builds, see [Define CI build process for your Git repo](../../actions/ci-build-git.md).

  ---

1. Select **+ Add Task** to add another task to the build definition. From the displayed task catalog, select **Docker** task. Change the parameters for this task as follows:

   * **Azure subscription:** Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions connection to your Azure subscription. If you are using VSTS and if you see an **Authorize** button next to the input, click on it to authorize VSTS to connect to your Azure subscription. If you are using TFS or if you do not see
     the desired Azure subscription in the list of subscriptions, see [Azure Resource Manager service endpoint](../../concepts/library/service-endpoints.md#sep-azure-rm) to manually set up the connection.

   ![Authorizing an Azure subscription](../_shared/_img/authorize-azure-subscription-cropped.png)

   * **Azure Container Registry:** Select the Azure container registry that you created above.

   * **Action:** Build an image.

1. Select **+ Add Task** to add another **Docker** task to the build definition.
   Make sure that the task is inserted _after_ the previous **Docker** task. Change the parameters for this task as follows:

   * **Azure subscription:** Same as in previous task.

   * **Azure Container Registry:** Same as in previous task.

   * **Action:** Push an image.

1. Click the **Triggers** tab in the build definition. Enable the **Continuous Integration** trigger. This will ensure that the build process is automatically triggered every time you commit a change to your repository.

1. Click **Save and queue** to kick off your first build. On the **Queue build** dialog box, click **Queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.

## View the build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Next step

> [!div class="nextstepaction"]
> [Deploy your Docker-enabled ASP.NET Core app to Azure web app](../cd/deploy-docker-webapp.md)
