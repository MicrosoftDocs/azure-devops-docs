---
title: Use the Azure portal to create a pipeline
description: Use the Azure portal to create a pipeline
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.author: mlearned
author: mlearned
ms.manager: jillfra
ms.assetid: 3DE9D448-714C-434D-90AB-D50EE9AF91FB
ms.custom: "mvc, seodec18"
ms.date: 05/06/2018
monikerRange: 'azure-devops'
---

# Use the Azure portal

**Azure Pipelines**

The Azure portal presents a simplified experience to create Azure resources and to set up a continuous integration (CI) and continuous delivery (CD) pipeline for your application to those resources. It uses Azure Pipelines, which is the CI/CD solution for Azure, to configure the pipeline.

If you don't have an Azure subscription, you can get one free through [Visual Studio Dev Essentials](https://visualstudio.microsoft.com/dev-essentials/).

## Sign in to the Azure portal

1. Sign into the [Microsoft Azure portal](https://portal.azure.com).

1. Choose the **Create a resource** icon in the left navigation bar, then search for **DevOps project**.  Choose **Create**.

   	![Starting Continuous Delivery configuration](_img/azure-devops-project/fullbrowser.png)

## Select a sample application and Azure service

1. Select the language of your choice. For this example, we will choose **Node.js**.

1. Select from a choice of several application frameworks. The default framework for Node.js is **Express.js**. Leave the default setting, and choose **Next**.

1. **Web App on Windows** is the default deployment target.  The application framework, which you chose on the previous steps, dictates the type of Azure service deployment target available here.  Leave the default service, and then choose **Next**.
 
## Configure an Azure DevOps organization and an Azure subscription

1. Create a **new** Azure DevOps organization or choose an **existing** organization.  Choose a **name** for your Azure DevOps project.  Select your **Azure subscription**, **location**, and choose a **name** for your application.  When you're done, choose **Done**.

   	![Enter Azure Pipelines info](_img/azure-devops-project/vstsazureinfo.png)

2. In a few minutes, the **project dashboard** loads in the Azure portal.  A sample application is set up in a repository in your Azure DevOps organization, a build executes, and your application deploys to Azure.  This dashboard provides visibility into your **code repository**, **Azure Pipelines CI/CD pipeline**, and your **application in Azure**.  On the right side of the dashboard, select **Browse** to view your running application.

   	![Dashboard view](_img/azure-devops-project/dashboardnopreview.png) 
	
The Azure DevOps Project automatically configures a CI build and release trigger.  You're now ready to collaborate with a team on a Node.js app with a CI/CD pipeline that automatically deploys your latest work to your web site.

## Commit code changes and execute CI/CD

The Azure DevOps Project created a Git repository in your Azure Repos or GitHub organization.  Follow the steps below to view the repository and make code changes to your application. Some of these steps will vary depending on the language that you started with.

1. On the left-hand side of the DevOps project dashboard, select the link for your **master** branch.  This link opens a opens a view to the newly created Git repository.

1. To view the repository clone URL, select **Clone** from the top right of the browser. You can clone your Git repository in your favorite IDE.  In the next few steps, you can use the web browser to make and commit code changes directly to the master branch.

1. On the left-hand side of the browser, navigate to the **views/index.pug** file.

1. Select **Edit**, and make a change to the h2 heading.  For example, type **Get started right away with the Azure DevOps Project** or make some other change.

1. Choose **Commit**, then save your changes.

1. In your browser, navigate to the **Azure DevOps project dashboard**.  You should now see a build is in progress.  The changes you just made are automatically built and deployed via an Azure Pipelines CI/CD pipeline.

## Examine the Azure Pipelines CI/CD pipeline

The Azure DevOps Project automatically configured a full Azure Pipelines CI/CD pipeline in your Azure DevOps organization.  Explore and customize the pipeline as needed.  Follow the steps below to familiarize yourself with the Azure Pipelines build and release pipelines.

1. Select **Build Pipelines** from the **top** of the Azure DevOps Project dashboard.  This link opens a browser tab and opens the Azure Pipelines build pipeline for your new project.

1. Move the mouse cursor to the right of the build pipeline next to the **Status** field. Select the **ellipsis** that appears.  This action opens a menu where you can perform several activities such as queue a new build, pause a build, and edit the build pipeline.

1. Select **Edit**.

1. From this view, **examine the various tasks** for your build pipeline.  The build performs various tasks such as fetching sources from the Git repository, restoring dependencies, and publishing outputs used for deployments.

1. At the top of the build pipeline, select the **build pipeline name**.

1. Change the **name** of your build pipeline to something more descriptive.  Select **Save & queue**, then select **Save**.

1. Under your build pipeline name, select **History**.  You see an audit trail of your recent changes for the build.  Azure Pipelines keeps track of any changes made to the build pipeline, and allows you to compare versions.

1. Select **Triggers**.  The Azure DevOps Project automatically created a CI trigger, and every commit to the repository initiates a new build.  You can optionally choose to include or exclude branches from the CI pipeline.

1. Select **Retention**.  Based on your scenario, you can specify policies to keep or remove a certain number of builds.

1. Select **Pipelines**, then choose **Releases**.  The Azure DevOps Project created an Azure Pipelines release pipeline to manage deployments to Azure.

1. On the left-hand side of the browser, select the **ellipsis** next to your release pipeline, then choose **Edit**.

1. The release pipeline contains a **pipeline**, which defines the release pipeline.  Under **Artifacts**, select **Drop**.  The build pipeline you examined in the previous steps produces the output used for the artifact.

1. To the right-hand side of the **Drop** icon, select the **Continuous deployment trigger**.  This release pipeline has an enabled CD trigger, which executes a deployment every time there is a new build artifact available.  Optionally, you can disable the trigger, so your deployments require manual execution.

1. On the left-hand side of the browser, select **Tasks**.  The tasks are the activities your deployment pipeline performs.  In this example, a task was created to deploy to **Azure App service**.

1. On the right-hand side of the browser, select **View releases**.  This view shows a history of releases.

1. Select the **ellipsis** next to one of your releases, and choose **Open**.  There are several menus to explore from this view such as a release summary, associated work items, and tests.

1. Select **Commits**.  This view shows code commits associated with the specific deployment.

1. Select **Logs**.  The logs contain useful information about the deployment pipeline.  They can be viewed both during and after deployments.

## Clean up resources

When no longer needed, you can delete the Azure App service and related resources created in this quickstart by using the **Delete** functionality on the Azure DevOps Project dashboard.

## Next steps

When you configured your CI/CD pipeline in this quickstart, a build and release pipeline was automatically created in your Azure DevOps project. You can modify these build and release pipelines to meet the needs of your team. To learn more see this tutorial:

> [!div class="nextstepaction"]
> [Customize CD pipeline](release/define-multistage-release-process.md)

## Videos

| | |
| --- | --- |
| <iframe width="340" height="190" src="https://www.youtube.com/embed/_YGR9hOR_PI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> | <iframe width="340" height="190" src="https://www.youtube.com/embed/3etwjubReJs?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> |
| <iframe width="340" height="190" src="https://www.youtube.com/embed/itwqMf9aR0w?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> | <iframe width="340" height="190" src="https://www.youtube.com/embed/P72xfZLkFJ0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> |
| | |