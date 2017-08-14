---
title: CI/CD with VS 2017, Linux App Service, Docker, and Azure Container Registry (ACR) | VSTS Quickstart
description: Leverage Visual Studio 2017 to set up a continuous integration (CI) build for your ASP.NET Core app, and then a continuous deployment (CD) release to an Azure Linux App Service using Visual Studio Team Services (VSTS)
services: vsts
documentationcenter: ''
author: mlearned
manager: douge
editor: ''

ms.assetid: E13DEB83-A128-4704-A051-8465AD39B5AE
ms.service: vsts
ms.devlang: dotnetcore
ms.topic: hero-article
ms.tgt_pltfrm: acs
ms.workload: ''
ms.date: 08/04/2016
ms.custom: mvc
---

# Deploy an ASP.NET Core App to Linux App Service

Visual Studio Team Services (VSTS) provides a highly customizable continuous integration (CI) and continuous deployment (CD) pipeline for your ASP.NET Core apps. This quickstart shows how to set up CI and CD to deploy an ASP.NET Core application to Linux App Service using Docker and [Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/).

![A typical release pipeline for web applications](_img/aspnet-core-to-acr/cicddockerflow.png)

With your CI/CD processes in place, you'll push a change into your team's git repo and the results will automatically show up on your site.

![Screenshot showing ASP.NET Core web app](_img/aspnet-core-to-windows-vm/cicd-get-started-dotnetcore-sample.png)

## Prerequisites

* Make sure you are an administrator of a VSTS account. If you don't have a VSTS account, you can [create one for free](https://go.microsoft.com/fwlink/?LinkId=307137). If you are new to VSTS or Git, see [Create a team project](https://www.visualstudio.com/docs/setup-admin/create-team-project) to create your first team project and learn about Git.
* [Visual Studio 2017](https://www.visualstudio.com/downloads/)    
* [Continuous Delivery Tools for Visual Studio](https://marketplace.visualstudio.com/items?itemName=VSIDEDevOpsMSFT.ContinuousDeliveryToolsforVisualStudio) 

##  Create an Azure Container Registry    
You use [Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/) to host the Docker image that is deployed to Azure App Service.  Follow the steps below to create and configure the registry to store and manage the Docker container.  In later steps, you use VSTS to deploy the Docker container to Linux App Service in Azure.

1.  Sign into your Azure Account at [https://portal.azure.com](https://portal.azure.com).
2.  In the Azure Portal, **click** **New, Containers, then click Azure Container Registry**.    
3.  Choose a **Registry name**, **Resource Group**, and **Location**.    

    ![Container Registry settings](_img/aspnet-core-to-acr/createacr.png)
4.  Choose **Enable** for **Admin user**, then Click **Create**.
5.  Wait for the **Azure Container Registry** deployment to complete.

[!INCLUDE [import-code-aspnet-core](_shared/import-code-aspnet-core-docker.md)] 

##  Clone the solution
Use the following steps to clone the sample solution and open it in Visual Studio 2017.  This allows you to work with the solution in a local development environment.  In upcoming steps, you use Visual Studio 2017 to configure continuous integration and continuous delivery for the web app.

1.  Ensure the import of the code completes successfully.  In the top right-hand corner of your browser click **clone**.  Click **Clone in Visual Studio**.  

    ![Clone from browser](_img/aspnet-core-to-acr/clone.png)    
    ![Clone in Visual Studio](_img/aspnet-core-to-acr/cloneinvs.png)    
2.  Visual Studio 2017 will launch and prompt for credentials.
3.  After authenticating, choose a directory and click **clone** to finish cloning the code to your local environment.

## Install Continuous Delivery (CD) Tools for Visual Studio 2017    
Continuous Delivery (CD) Tools for Visual Studio 2017 helps automate the creation of VSTS to Azure release pipelines.  Optionally, you can extend the generated pipeline to further enhance your CI/CD workflows.

1.  In Visual Studio 2017 click **Tools then click Extensions and Updates**.
2.  In the dialogue, click **Online** and search for **Continuous Delivery Tools for Visual Studio**.
3.  Click **Download**, and once it finishes **close** Visual Studio to finish the install process.
4.  **Restart** Visual Studio and **open** your solution.
5.  In solution explorer **Right Click** your solution and verify you see a **Configure Continuous Delivery** icon.

    ![Connfigure CD icon](_img/aspnet-core-to-acr/vsconfigcdicon.png)    

##  Configure and execute Continuous Delivery (CD) for your app    
Visual Studio 2017 can automate the creation of a CI/CD pipeline.  The CD tooling quickly creates various services in Azure and VSTS.  This automation allows you to enable CI/CD to Azure for your apps by creating full build and release pipelines in VSTS.

1.  In Visual Studio, **right click** your solution and click **Configure Continuous Delivery**.

    ![Connfigure CD from Visual Studio](_img/aspnet-core-to-acr/vsconfigurecd.png)
2.  Choose App Service (Linux) as your **Host Type**.
3.  Choose the **Container Registry** you created earlier.
4.  Accept the default App Service name or click **edit** to choose a new name.
5.  Click **ok**, and monitor the output window for results.  
6.  **Azure resources** including the App Service will be created.  **VSTS resources** such as a build definition, and a release definition will be created in the same team project that contains your source code.  You can monitor the configuration progress in the **Output** window in Visual Studio.    

    ![Visual Studio output window](_img/aspnet-core-to-acr/vsoutputs.png)
7.  A **build** and **release** will then execute.  **Navigate** to the VSTS account and monitor the build and release processes until they complete.  This process may take several minutes.
8.  When the deployment finishes, verify that your changes are live in your web browser: **http://**_your-app-name_**.azurewebsites.net**.
9.  **Note**:  Currently the below work around is required until engineering pushes an update.  You will receive an HTTP 503 error until performing the work around.
10.  **Optionally** you can make changes to the web app code and push them to VSTS.  A new build and release will execute and deploy the changes.

You're now ready to collaborate with a team on an ASP.NET Core app with a CI/CD process that automatically deploys your latest work to your Azure App Service.

##	[TEMPORARY SECTION - ENGINEERING is fixing a bug and we can eventually remove this section/work around]
1.  Currently if you navigate to your App Service, you receive a 503 error.
2.  Navigate to **Container registries** in the Azure Portal.  Copy the values for **Login Server, Username, and Password**.  **Note**:  In later steps you will add the prefix https:// to the value for the Login URL. 
3.  Navigate to the newly created **App Service** in the Azure Portal.
4.  Choose **Docker Container** under the **SETTINGS** section for your App Service.
5.  Choose **Private registry** and configure the details you saved above.  **Note**:  You must place https:// in front of the URL.  Example:  **https://LoginUrlGoesHere**
5.	**Refresh** your App Service URL in a browser.  The web app should now display.  
6.  **Optional:**  Make changes to your website and **push** the changes into VSTS.  A build and release will execute and your changes will be deployed.

## Next Steps    
You've just put your own CI/CD processes in place. You can modify these build and release definitions to meet the needs of your team. To learn more see one of these tutorials:

* [Define your continuous integration (CI) build process](../tutorials/define-ci-build-process.md)
* [Define your continuous deployment (CD) process](../tutorials/define-cd-release-process.md)
* [Define your multi-stage continuous deployment (CD) process](../tutorials/define-multistage-release-process.md)