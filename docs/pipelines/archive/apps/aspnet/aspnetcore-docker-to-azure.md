---
title: Deploy an ASP.NET Core app with Docker to Azure
ms.custom: seodec18
description: Learn how you can automatically generate a CI/CD pipeline to deploy an ASP.NET Core web app with Docker using Visual Studio
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 88920723-19B7-4A49-96E1-9618C384F730
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 12/20/2017
monikerRange: '>= tfs-2015'
---


# Use Visual Studio to automatically generate a CI/CD pipeline to deploy an ASP.NET Core web app with Docker to Azure

[!INCLUDE [version-tfs-2015-rtm](../../../_shared/version-tfs-2015-rtm.md)]

[ASP.NET Core](http://www.asp.net/core) is a lean and composable framework for building web and cloud applications, which can be deployed to [Docker containers](https://www.docker.com/what-docker) running on an [Azure Container Service](https://azure.microsoft.com/documentation/articles/container-service-intro/). Visual Studio 2017 RC.3 and newer with the [Continuous Delivery Tools for Visual Studio extension](https://aka.ms/CD4VS) provide an easy way to set up a full continuous integration (CI) and continuous deployment (CD) pipeline for such applications.

[!INCLUDE [temp](../../../apps/aspnet/_shared/ci-cd-description.md)]

## Creating the release pipeline from Visual Studio

1. Make sure you have a Docker-enabled ASP.NET Core solution. See the [Q&A below](#new_solution) if you don't have one yet.
1. If you haven't already done so, add the project to a source control repository in Azure Repos by clicking first on **Add to Source Control** in the Visual Studio status bar (creating a local repository), then following the instructions in the Team Explorer pane to publish to a remote repository in Azure Repos.
1. Select the **Tools > Extensions and Updates...** command, then search for and install the "Continuous Delivery Tools for Visual Studio" extension that matches your version of Visual Studio. (Or install from the [Visual Studio Gallery](https://aka.ms/CD4VS).)
1. In Visual Studio Solution Explorer, right-click the project and select **Configure Continuous Delivery...**.
1. In the Configure Continuous Delivery dialog, select an Azure subscription that has Azure Container Service running. See the [Q&A below](#create_acs) for information on creating the service.
1. Click Create and watch the output window for completion of the process, which will include direct links to the project, build pipeline, and release pipeline. A build will also have been started automatically, so you can monitor the progress of the build and deployment in the Azure Pipelines portal.

> [!Note]
>
> For a detailed walkthrough of manually creating a release pipeline, including the necessary Azure Container Service, see the following article in the Azure documentation: [Continuous Integration and Deployment of Multi-Container Docker Applications to Azure Container Service](https://azure.microsoft.com/documentation/articles/container-service-setup-ci-cd/).

## Explore the release pipeline

1. Navigate to your project using the link in the Visual Studio output window after **Configure Continuous Delivery...** command.
1. Click on the **Pipelines** tab.
1. Click **Builds**, select the build pipeline shown there, and click **Edit**.
   1. The sequence of tasks that appear are what builds the application when code is committed to the repository, and includes tasks to run unit tests.
   1. At the end you'll see tasks that publish the build artifacts to a staging directory. This is the location that the release pipeline monitors, such that when new artifacts appear, the release pipeline will begin a new deployment.
   1. You can examine the artifacts yourself by clicking **Artifacts** and then **Explore**.
   1. You can always customize the build pipeline as desired.

1. Click on **Releases**, select the release pipeline shown there, and click **Edit**.
   1. A release pipeline takes build artifacts as input and produces one or more deployments as output.
   1. On the left side of the editor you'll see three environments named Dev, Test, and Production. This is a typical arrangement for continuous deployment within which you can add additional tests in each environment as well as manual approvals.

1. In the process of setting up the release pipeline, Azure Pipelines will have already queued a build that, when successful, triggered a release. You can examine the results through both the **Builds** and **Releases** tab. If the deployment was successful, you can visit the web site and see it running.

[!INCLUDE [include](../../../apps/aspnet/_shared/commit-build-release.md)]

## Q&A

<h3 id="new_solution">How do I create a Docker-enabled ASP.NET Core solution?</h3>

> [!NOTE]
> 
> Docker-enabled ASP.NET Core projects are supported only in Visual Studio 2017 RC.3 and higher.

1. In Visual Studio, [connect first to a project](../../../../organizations/projects/connect-to-projects.md#visual-studio).
 
1. On the Team Explorer home page under **Solutions**, click **New**. (By connecting to a project first and using the command in Team Explorer, the new project is automatically added to source control in the project.)
 
1. In the **New Project** dialog box, search on "ASP.NET Core".
 
1. Select **ASP.NET Core Web Application (.NET Core)**from the list and click **OK**.
 
1. Select **Web Application** from the template list.
 
1. Check that **Authentication** is set to **No Authentication**. If not, click **Change Authentication** to set it.
 
1. Set **Enable Docker Support**
 
1. Click the **Docker for Windows** link to install Docker.

1. Click **OK** to complete creating the project.

<h3 id="create_acs">How do I create an Azure Container Service?</h3>

Follow the instructions on [Deploy an Azure Container Service cluster](https://azure.microsoft.com/documentation/articles/container-service-deployment/). Alternately, see [Continuous Integration and Deployment of Multi-Container Docker Applications to Azure Container Service](https://azure.microsoft.com/documentation/articles/container-service-setup-ci-cd/). Note that you'll always be asked to create a new resource group for the container service because the service is composed of many separate resources that you'll certainly want to manage as a group.

A key piece of information you need for the service is the public SSH key. Creating this is described in [How to use SSH keys with Windows on Azure](https://azure.microsoft.com/documentation/articles/virtual-machines-linux-ssh-from-windows/#which-key-files-do-you-need-to-create). In this topic, be sure to read both the "Create a private key" and "Create a private key for PuTTY" because the latter describes how to obtain the public SSH key that you need in the Azure portal.

We also recommend that for testing purposes you minimize costs by selecting a small **Agent virtual machine size** in step 3 of the configuration ("Azure Container service settings"). Deploying an Azure Container Service will create a virtual machine in the selected price tier (see [pricing](https://azure.microsoft.com/pricing/details/container-service/)). Because this incurs hourly costs, you'll also want to stop the service after you've completed your evaluation and restart it when you're ready for ongoing use.

### I created an Azure Container Service but it doesn't appear in Visual Studio's Configure Continuous Delivery dialog?

Try reselecting your User account to refresh the dialog, or close it and reopen it. A newly-created Azure Container Service should then appear.

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../../_shared/qa-versions.md)]
::: moniker-end
