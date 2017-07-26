---
title: CI/CD of ASP.NET Core application to Azure web app
description: Set up a continuous integration (CI) build for your ASP.NET Core application, and then a continuous deployment (CD) release to Azure web app using Visual Studio Team Services
services: vsts
documentationcenter: ''
author: alewis
manager: douge
editor: ''

ms.assetid:
ms.service: vsts
ms.workload: web
ms.tgt_pltfrm: na
ms.devlang: na
ms.topic: get-started-article
ms.date: 06/24/2017
ms.author: alewis
ms.custom: mvc
---

# CI/CD of ASP.NET Core app to Azure web app

Visual Studio Team Services (VSTS) provides a highly customizable continuous integration (CI) and continuous deployment (CD) pipeline for your
ASP.NET Core apps. This quickstart shows how to set up CI and CD to deploy an ASP.NET Core application to an Azure web app.
You will use the Azure portal to configure a basic CI/CD pipeline. You will then use the VSTS portal to view and extend the CI/CD pipeline.

_TODO: Architecture diagram_

[!INCLUDE [prerequisites](_shared/prerequisites.md)]

[!INCLUDE [create-azure-web-app](_shared/create-azure-web-app.md)]

[!INCLUDE [import-code-aspnet-core](_shared/import-code-aspnet-core.md)]

## Configure continuous delivery

1. Log into the Azure portal and open the eb app's blade. Choose **Continuous Delivery** and then choose **Configure**.

   ![Starting Continuous Delivery configuration](_img/aspnet-core-to-azure-webapp/continuous-delivery-intro.png)

1. Select **Choose repository** and select **Visual Studio Team Services** for the code repository. Select the project, repository, and branch into which your imported the sample code. When you're done, choose **OK**.
 
   ![Configuring the source code repository](_img/aspnet-core-to-azure-webapp/continuous-delivery-repository.png)

1. Select **Configure Continuous Delivery** and choose **ASP.NET Core**. When you're done, choose **OK**.

   ![Configuring the app type](_img/aspnet-core-to-azure-webapp/continuous-delivery-apptype.png)

1. Skip the other two steps - **Test** and **Deploy** - and choose **OK** to complete the configuration of continuous delivery.

   ![Completing the configuration](_img/aspnet-core-to-azure-webapp/continuous-delivery-complete.png)

1. When you choose **OK**, Azure Continuous Delivery configures and kicks off a build and deployment in VSTS.
   When the build completes, the deployment is automatically initiated.
   After a while, the deployment is completed. Choose **Refresh Logs** to see this in the **Activity Log**.

   ![Viewing the log when deployment is complete](_img/aspnet-core-to-azure-webapp/continuous-delivery-log2.png)

1. Open a new browser window and navigate to your web at _your-app-name_**.azurewebsites.net**.

   ![The web app deployed](_img/aspnet-core-to-azure-webapp/app-deployed.png)

## Review the pipeline in VSTS

1. In the "Successfully set up Continuous Delivery..." log entry in the **Continuous Delivery** blade, choose the **Build Definition** link.

   ![Opening the generated build definition](_img/aspnet-core-to-azure-webapp/review-links-build.png)

1. This opens the VSTS portal and takes you to the build definition summary. A **build definition** is a concept in VSTS that defines the CI process. The build definition summary shows recent builds that have been completed or that are in progress. Choose **Edit** to see how the CI process is defined.

   ![The build definition status](_img/aspnet-core-to-azure-webapp/build-status.png)

1. A build definition consists of tasks that should be run as part of a build. When you configured the CI/CD from Azure Continuous Delivery, a number of tasks have been added to the build definition. These tasks automate the compilation and testing of your ASP.NET Core application. You will also notice that the parameters for each of these tasks have been populated for you.

   ![The generated build definition](_img/aspnet-core-to-azure-webapp/build-definition.png)

1. Back in the Azure portal, in the "Successfully set up Continuous Delivery..." log entry, choose the **Release Definition** link.

  ![Opening the generated release definition](_img/aspnet-core-to-azure-webapp/review-links-release.png)

1. This opens the VSTS portal again and takes you to the summary of releases. A **release definition** is a concept in VSTS that defines the CD process. The release definition summary shows recent releases that have been completed or that are in progress. Choose **Edit** to see how the CD process is defined.

   ![The release definition status](_img/aspnet-core-to-azure-webapp/release-status.png)

1. A release definition consists of a pipeline of one or more environments, and each environment defines a set of tasks that automate deployment.
   When you configured the CI/CD from Azure Continuous Delivery, a simple release definition with a single environment named **Production** has been set up for you automatically.
   Choose this environment from the **Tasks** drop-down list.

   ![The release definition pipeline](_img/aspnet-core-to-azure-webapp/release-pipeline.png)

1.  This environment consists of a single task for deploying the Azure web app.

   ![The generated release definition](_img/aspnet-core-to-azure-webapp/release-definition.png)

1. You can modify the parameters or add additional tasks to both the build and release definition to meet the CI/CD needs of your application. You can also extend the release definition to include multiple stages. For more information about how to extend the CI/CD pipeline, see the tutorials on **Create a build definition** and **Create a release definition**.

## Update to redeploy the code

Now that you have a completely automated CI/CD pipeline, any changes you make to the application are automatically built and deployed by VSTS. To try this, make a change to the app and commit that change to the Git repository.

You can use Visual Studio to connect and push commits into your VSTS Git repo. (See [Share code with push](https://www.visualstudio.com/docs/git/tutorial/pushing).) However, VSTS also features a web-based editor to so that you can quickly commit small changes to source code directly in your browser.

1. In the Azure portal, open the **Overview** blade for your web app and choose **Stop**.
   You must stop an ASP.NET Core app before you can update it.  

   ![Stopping the app in the Azure portal](_img/aspnet-core-to-azure-webapp/stop-app.png)

1. Navigate to the **Code** hub in the VSTS portal. Change the code in **Views/Home/Index.cshtml** file by selecting the **Edit** action.

   ![Editing the code in the VSTS editor](_img/aspnet-core-to-azure-webapp/edit-in-vsts.png)

1. Add the following line of text above the carousel display in the page:

   ```
   <h1>Demo of ASP.NET Core CI/CD!!</h1>
   ```

   ![Adding the new code in the VSTS editor](_img/aspnet-core-to-azure-webapp/add-code.png)

1. Commit your changes in Git. This change triggers a CI build, and when the build completes, it triggers an automatic deployment to Azure web app.

   ![Committing the new code in the VSTS editor](_img/aspnet-core-to-azure-webapp/commit-code.png)

1. Go to the **Build &amp; Release** hub and open the **Releases** tab. Wait until the new release is complete.

   ![Waiting for the deployment to complete](_img/aspnet-core-to-azure-webapp/wait-for-release.png)

1. In the Azure portal, in the **Overview** blade for your web app, choose **Start**.

   ![Stopping the app in the Azure portal](_img/aspnet-core-to-azure-webapp/stop-app.png)

1.  Navigate to the web app URL in a new browser window to see the app with the new page title deployed.

   ![Viewing the updated app](_img/aspnet-core-to-azure-webapp/updated-app.png)
