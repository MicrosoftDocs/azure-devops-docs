---
title: Deploy to an IIS web server on a Windows Virtual Machine
description: Deploy an ASP.NET or Node web deployment package to an IIS web server on a Windows virtual machine using Deployment Groups
ms.assetid: 979E4504-C88A-4D0A-A912-6E5998D87445
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2017'
---

# Deploy to a Windows Virtual Machine

**VSTS | TFS 2018**

We'll show you how to set up continuous deployment of your ASP.NET or Node app to an IIS web server running on Windows using
Visual Studio Team Services (VSTS). You can use the steps in this quickstart as long as your continuous integration process publishes a web deployment package.

![A typical release pipeline for web applications](azure/_shared/_img/vscode-git-ci-cd-to-azure.png)

After you commit and push a code change, it is automatically built and then deployed. The results will automatically show up on your site.

## Define your CI build process

You'll need a continuous integration (CI) build process that publishes your web deployment package. To set up a CI build process, see:

* [Build your ASP.NET 4 app](../aspnet/build-aspnet-4.md)

* [Build your ASP.NET Core app](../../languages/dotnet-core.md)

* [Build your Node app with Gulp](../nodejs/build-gulp.md)

## Prerequisites

### IIS configuration

The configuration varies depending on the type of app you are deploying.

#### ASP.NET app

[!INCLUDE [prepare-aspnet-windows-vm](../_shared/prepare-aspnet-windows-vm.md)]

#### ASP.NET Core app

[!INCLUDE [prepare-aspnetcore-windows-vm](../_shared/prepare-aspnetcore-windows-vm.md)]

#### Node app

Follow the instructions in [this topic](https://github.com/tjanczuk/iisnode) to install and configure IISnode on IIS servers.

[!INCLUDE [create-deployment-group](../_shared/create-deployment-group.md)]

## Define your CD release process

Your CD release process picks up the artifacts published by your CI build and then deploys them to your IIS servers.

1. Do one of the following:

   * If you've just completed a CI build then, in the build's **Summary** tab under **Deployments**,
     choose **Create release** followed by **Yes**. This starts a new release definition that's automatically linked to the build definition.

     ![Creating a new release definition from the build summary](../_shared/_img/release-from-build-summary.png)

   * Open the **Releases** tab of the **Build &amp; Release** hub, open the **+** drop-down
     in the list of release definitions, and choose **Create release definition**.

     ![Creating a new release definition in the Releases page](../_shared/_img/release-from-release-page.png)

1. Select the **IIS Website Deployment** template and choose **Apply**.

1. If you created your new release definition from a build summary, check that the build definition
   and artifact is shown in the **Artifacts** section on the **Pipeline** tab. If you created a new
   release definition from the **Releases** tab, choose the **+ Add** link and select your build artifact.

   ![Selecting the build artifact](../_shared/_img/confirm-or-add-artifact.png)

1. Choose the **Continuous deployment** icon in the **Artifacts** section, check that the continuous deployment trigger is enabled,
   and add a filter to include the **master** branch.

   ![Setting the continuous deployment trigger](../_shared/_img/confirm-or-set-cd-trigger.png)

1. Open the **Tasks** tab and select the **IIS Deployment** phase. For the **Deployment Group**, select the deployment group you created earlier (such as *myIIS*).

   ![IIS deployment group in release definition](../_shared/_img/aspnet-core-to-windows-vm/iis-deployment-group-in-release-definition.png)

1. Save the release definition.

## Create a release to deploy your app

You're now ready to create a release, which means to start the process of running the release definition with the artifacts produced by a specific build. This will result in deploying the build:

[!INCLUDE [simple-create-release](../_shared/simple-create-release.md)]

## Next steps

* [Dynamically create and remove a deployment group](howto-webdeploy-iis-deploygroups.md#depgroup)
* [Apply environment-specific configurations](howto-webdeploy-iis-deploygroups.md#envirconfig)
* [Perform a safe rolling deployment](howto-webdeploy-iis-deploygroups.md#rolling)
* [Deploy a database with your app](howto-webdeploy-iis-deploygroups.md#database)
