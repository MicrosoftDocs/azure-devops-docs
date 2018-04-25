---
title: Deploy a nginx web server on a Linux Virtual Machine
description: Deploy a web application to an nginx web server on a Linux virtual machine using Deployment Groups
ms.assetid: 9EBB0342-7FD2-473C-9809-9BCA2250CBC3
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2017'
---

# Deploy to a Linux Virtual Machine

**VSTS | TFS 2018**

We'll show you how to set up continuous deployment of your app to an nginx web server running on Ubuntu using
Visual Studio Team Services (VSTS) or Team Foundation Server (TFS) 2018. You can use the steps in this
quickstart for any app as long as your continuous integration process publishes a web deployment package.

![A typical release pipeline for web applications](azure/_shared/_img/vscode-git-ci-cd-to-azure.png)

After you commit and push a code change, it is automatically built and then deployed. The results will
automatically show up on your site.

## Define your CI build process

You'll need a continuous integration (CI) build process that publishes your web application, as well as
a deployment script that can be run locally on the Ubuntu server. To set up a CI build process, see:

* [Build your Node app with Gulp](../nodejs/build-gulp.md)

> Make sure you follow the additional steps in that topic for creating a build to deploy to Linux.

## Prerequisites

You'll need a Linux VM with Nginx web server to deploy the app. The deployment scripts used in the sample repositories
have been tested on Ubuntu 16.04, and we recommend you use the same version of Linux VM for this quickstart.
If you don't already have a Linux VM with Nginx, create one now in Azure using the steps in
[this example](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-cli).

[!INCLUDE [create-linux-deployment-group](../_shared/create-linux-deployment-group.md)]

## Define your CD release process

Your CD release process picks up the artifacts published by your CI build and then deploys them to your nginx servers.

1. Do one of the following to start creating a release definition:

   * If you've just completed a CI build then, in the build's **Summary** tab under **Deployments**,
     choose **Create release** followed by **Yes**. This starts a new release definition that's automatically linked to the build definition.

    ![Creating a new release definition from the build summary](../_shared/_img/release-from-build-summary.png)

   * Open the **Releases** tab of the **Build &amp; Release** hub, open the **+** drop-down
     in the list of release definitions, and choose **Create release definition**.

     ![Creating a new release definition in the Releases page](../_shared/_img/release-from-release-page.png)

1. Choose **Start with an Empty process**.

1. If you created your new release definition from a build summary, check that the build definition and artifact
   is shown in the **Artifacts** section on the **Pipeline** tab. If you created a new release definition from
   the **Releases** tab, choose the **+ Add** link and select your build artifact.

   ![Checking or selecting the build definition and artifact](_img/deploy-linuxvm-deploygroups/confirm-or-add-artifact.png)

1. Choose the **Continuous deployment** icon in the **Artifacts** section, check that the
   continuous deployment trigger is enabled, and add a filter that includes the **master** branch.

   ![Checking or setting the Continuous deployment trigger](_img/deploy-linuxvm-deploygroups/confirm-or-set-cd-trigger.png)

   > Continuous deployment is not enabled by default when you create a new release definition from the **Releases** tab.

1. Open the **Tasks** tab, select the **Agent phase**, and choose **Remove** to remove this phase.

   ![Removing the Agent phase](_img/deploy-linuxvm-deploygroups/remove-agent-phase.png)

1. Choose **...** next to the **Environment 1** deployment process and select **Add deployment group phase**.

   ![Adding a Deployment group phase](_img/deploy-linuxvm-deploygroups/add-deployment-group-phase.png)

1. For the **Deployment Group**, select the deployment group you created earlier such as **myNginx**.

   ![Selecting the deployment group](_img/deploy-linuxvm-deploygroups/select-deployment-group.png)

    The tasks you add to this phase will run on each of the machines in the deployment group you specified.

1. Choose **+** next to the **Deployment group phase** and, in the task catalog, search for and add a
   **Shell Script** task.

   ![Adding a Shell Script task](_img/deploy-linuxvm-deploygroups/add-shellscript-task.png)

1. In the properties of the **Shell Script** task, use the **Browse** button for the **Script Path** to select
   the path to the **deploy.sh** script in the build artifact. For example, when you use the **nodejs-sample**
   repository to build your app, the location of the script is  
   `$(System.DefaultWorkingDirectory)/nodejs-sample/drop/deploy/deploy.sh`

   ![Configuring the Shell Script task](_img/deploy-linuxvm-deploygroups/configure-shellscript-task.png)

1. Save the release definition.

   ![Saving the release definition](_img/deploy-linuxvm-deploygroups/save-definition.png)

## Create a release to deploy your app

You're now ready to create a release, which means to start the process of running the release definition
with the artifacts produced by a specific build. This will result in deploying the build.

[!INCLUDE [simple-create-release](../_shared/simple-create-release.md)]

## Next steps

* [Dynamically create and remove a deployment group](howto-webdeploy-iis-deploygroups.md#depgroup)
* [Apply environment-specific configurations](howto-webdeploy-iis-deploygroups.md#envirconfig)
* [Perform a safe rolling deployment](howto-webdeploy-iis-deploygroups.md#rolling)
* [Deploy a database with your app](howto-webdeploy-iis-deploygroups.md#database)
