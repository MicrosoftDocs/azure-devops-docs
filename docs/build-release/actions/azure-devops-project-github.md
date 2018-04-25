---
title: Create a CI/CD pipeline for your existing code with the Azure DevOps Project | VSTS Tutorial
description: The DevOps Project makes it easy to get started on Azure. It helps you use your own code and GitHub repository to launch an app on an Azure service of your choice in few quick steps.
services: vsts
documentationcenter: vs-devops-build
ms.author: mlearned
ms.manager: douge
editor: ''
ms.assetid:
ms.workload: web
ms.prod: devops
ms.technology: devops-cicd
ms.tgt_pltfrm: na
ms.devlang: na
ms.topic: tutorial
ms.date: 03/17/2018
ms.author: mlearned
ms.custom: mvc
monikerRange: 'vsts'
---


# Create a CI/CD pipeline for your existing code with the Azure DevOps Project

The Azure DevOps Project presents a simplified experience where you can bring your existing code and Git repository, or choose from one of the sample applications to create a continuous integration (CI) and continuous delivery (CD) pipeline to Azure.

You will:

> [!div class="checklist"]
> * Create an Azure DevOps project
> * Configure access to your GitHub repository and choose a framework
> * Configure VSTS and an Azure subscription 
> * Commit changes to GitHub and automatically deploy to Azure
> * Examine the VSTS CI/CD pipeline
> * Configure Azure Application Insights monitoring

## Prerequisites

* An Azure subscription. You can get one free through [Visual Studio Dev Essentials](https://www.visualstudio.com/dev-essentials/).
* Access to a GitHub or external Git repository that contains .NET, Java, PHP, Node, Python, or static web code.

## Sign in to the Azure portal

The Azure DevOps Project creates a CI/CD pipeline in VSTS.  You can create a **new VSTS** account or use an **existing account**.  The Azure DevOps Project also creates **Azure resources** in the **Azure subscription** of your choice.

1. Sign into the [Microsoft Azure portal](https://portal.azure.com).

1. Choose the **+ New** icon in the left navigation bar, then search for **DevOps project**.  Choose **Create**.

   	![Starting Continuous Delivery](_img/azure-devops-project-github/fullbrowser.png)

1. Select **Bring your own code**.  When you're done, choose **Next**.

## Configure access to your GitHub repository and choose a framework

1. Select **GitHub**.  Optionally, you can choose an **external Git repository**.  Choose your **repository** and **branch** that contains your application.

1. Select your **web framework**.  When you're done, choose **Next**.

   	![.NET framework](_img/azure-devops-project-github/webframework.png)

1. The application framework, which you chose on the previous steps, dictates the type of Azure service deployment target available here.  Select the **target service** of your choice.  When you're done, choose **Next**.

## Configure VSTS and an Azure subscription 

1. Create a **new** VSTS account or choose an **existing** account.  Choose a **name** for your VSTS project.  Select your **Azure subscription**, **location**, and choose a **name** for your application.  When you're done, choose **Done**.

   	![Enter VSTS info](_img/azure-devops-project-github/vstsazureinfo.png)

1. In a few minutes, the **project dashboard** loads in the Azure portal.  A sample application is set up in a repository in your VSTS account, a build executes, and your application deploys to Azure.  This dashboard provides visibility into your GitHub **code repository**, **VSTS CI/CD pipeline**, and your **application in Azure**.  On the right side of the dashboard, select **Browse** to view your running application.

   	![Dashboard view](_img/azure-devops-project-github/dashboardnopreview.png) 
	
The Azure DevOps project automatically configures a CI build and release trigger.  Your code remains in your GitHub or other external repository.  

## Commit changes to GitHub and automatically deploy to Azure 

You're now ready to collaborate with a team on your app with a CI/CD process that automatically deploys your latest work to your web site.  Each change to the GitHub repo initiates a build in VSTS, and a VSTS Release Management definition executes a deployment to Azure.

1.	Make a change to your application, and **commit** the change to your GitHub repository.
2.	In a few moments, a build initiates in VSTS.  You can monitor the build status with the DevOps project dashboard or in the browser with your VSTS account.
3.	Once the build completes, **refresh your application** in the browser to verify you see your changes.

## Examine the VSTS CI/CD pipeline

The Azure DevOps project automatically configured a full VSTS CI/CD pipeline in your VSTS account.  Explore and customize the pipeline as needed.  Follow the steps below to familiarize yourself with the VSTS build and release definitions.

1. Select **Build Pipelines** from the **top** of the Azure DevOps project dashboard.  This link opens a browser tab and opens the VSTS build definition for your new project.

1. Move the mouse cursor to the right of the build definition next to the **Status** field. Select the **ellipsis** that appears.  This action opens a menu where you can perform several activities such as queue a new build, pause a build, and edit the build definition.

1. Select **Edit**.

1. From this view, **examine the various tasks** for your build definition.  The build performs various tasks such as fetching sources from the Git repository, restoring dependencies, and publishing outputs used for deployments.

1. At the top of the build definition, select the **build definition name**.

1. Change the **name** of your build definition to something more descriptive.  Select **Save & queue**, then select **Save**.

1. Under your build definition name, select **History**.  You see an audit trail of your recent changes for the build.  VSTS keeps track of any changes made to the build definition, and allows you to compare versions.

1. Select **Triggers**.  The Azure DevOps project automatically created a CI trigger, and every commit to the repository initiates a new build.  You can optionally choose to include or exclude branches from the CI process.

1. Select **Retention**.  Based on your scenario, you can specify policies to keep or remove a certain number of builds.

1. Select **Build and Release**, then choose **Releases**.  The Azure DevOps project created a VSTS release definition to manage deployments to Azure.

1. On the left-hand side of the browser, select the **ellipsis** next to your release definition, then choose **Edit**.

1. The release definition contains a **pipeline**, which defines the release process.  Under **Artifacts**, select **Drop**.  The build definition you examined in the previous steps produces the output used for the artifact. 

1. To the right-hand side of the **Drop** icon, select the **Continuous deployment trigger**.  This release definition has an enabled CD trigger, which executes a deployment every time there is a new build artifact available.  Optionally, you can disable the trigger, so your deployments require manual execution. 

1. On the left-hand side of the browser, select **Tasks**.  The tasks are the activities your deployment process performs.  In this example, a task was created to deploy to **Azure App service**.

1. On the right-hand side of the browser, select **View releases**.  This view shows a history of releases.

1. Select the **ellipsis** next to one of your releases, and choose **Open**.  There are several menus to explore from this view such as a release summary, associated work items, and tests.

1. Select **Commits**.  This view shows code commits associated with the specific deployment. 

1. Select **Logs**.  The logs contain useful information about the deployment process.  They can be viewed both during and after deployments.

## Configure Azure Application Insights monitoring

With Azure Application insights, you can easily monitor your application's performance and usage.  The Azure DevOps project automatically configured an Application Insights resource for your application.  You can further configure various alerts and monitoring capabilities as needed.

1. Navigate to the **Azure DevOps Project** dashboard in the Azure portal.  On the bottom-right of the dashboard, choose the **Application Insights** link for your app.

1. The **Application Insights** blade opens in the Azure portal.  This view contains usage, performance, and availability monitoring information for your app.

    ![Application Insights](_img/azure-devops-project-github/appinsights.png) 

1. Select **Time range**, and then choose **Last hour**.  Select **Update** to filter the results.  You now see all activity from the last 60 minutes.  Select the **x** to exit time range.

1. Select **Alerts**, then select **+ Add metric alert**.  

1. Enter a **Name** for the alert.

1. Select the drop-down for **Source Alter on**.  Choose your **App Service resource.**

1. The default alert is for a **server response time greater than 1 second**.  Select the **Metric** drop-down to examine the various alert metrics.  You can easily configure a variety of alerts to improve the monitoring capabilities of your app.

1. Select the check-box for **Notify via Email owners, contributors, and readers**.  Optionally, you can perform additional actions when an alert fires by executing an Azure logic app.

1. Choose **Ok** to create the alert.  In a few moments, the alert appears as active on the dashboard.  **Exit** the Alerts area, and navigate back to the **Application Insights blade**.

1. Select **Availability**, then select **+ Add test**. 

1. Enter a **Test name**, then choose **Create**.  A simple ping test is created to verify the availability of your application.  After a few minutes, test results are available, and the Application Insights dashboard displays an availability status.

## Clean up resources

When no longer needed, you can delete the Azure App service and related resources created in this quickstart by using the **Delete** functionality on the Azure DevOps Project dashboard.

## Next steps

When you configured your CI/CD process in this tutorial, a build and release definition were automatically created in your VSTS project. You can modify these build and release definitions to meet the needs of your team. You learned how to:

> [!div class="checklist"]
> * Create an Azure DevOps project
> * Configure access to your GitHub repository and choose a framework
> * Configure VSTS and an Azure subscription 
> * Commit changes to GitHub and automatically deploy to Azure
> * Examine the VSTS CI/CD pipeline
> * Configure Azure Application Insights monitoring

To learn more about the VSTS pipeline see this tutorial:

> [!div class="nextstepaction"]
> [Customize CD process](define-multistage-release-process.md)
