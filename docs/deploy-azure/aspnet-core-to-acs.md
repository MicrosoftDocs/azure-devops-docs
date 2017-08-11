---
title: Deploy your ASP.NET Core app to Azure Container Service | VSTS Quickstart
description: Leverage Visual Studio 2017 to set up a continuous integration (CI) build for your ASP.NET Core app, and then a continuous deployment (CD) release to an Azure Linux App Service using Visual Studio Team Services
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

# Deploy your ASP.NET Core app to Azure Container Service

Visual Studio Team Services (VSTS) provides a highly customizable continuous integration (CI) and continuous deployment (CD) pipeline for your ASP.NET Core apps. This quickstart shows how to set up CI and CD to deploy an ASP.NET Core application to Linux App Service with Docker and Azure Container Registry.

![A typical release pipeline for web applications](../build-release/get-started/_img/ci-cd/part-1/ReleasePipeline.png)

With your CI/CD processes in place, you'll push a change into your team's git repo and the results will automatically show up on your site.

![Screenshot showing ASP.NET Core web app](_img/aspnet-core-to-windows-vm/cicd-get-started-dotnetcore-sample.png)

[!INCLUDE [include](_shared/prerequisites.md)]
* Visual Studio 2017

##  Deploy an Azure Container Registry    
You use [Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/) to manage the Docker image that is deployed to Azure App Service.  Follow the steps below to create and configure the registry.

1.  Sign into your Azure Account at [https://portal.azure.com](https://portal.azure.com)
2.  In the Azure Portal, **click** **New, Containers, then click Azure Container Registry**.
3.  Choose a **Registry name**, **Resource Group**, and **Location**.  
4.  Choose **Enable** for **Admin user**, and Click **Create**.
5.  Wait for the deployment to complete in the Azure Portal before proceeding.

## Create a Docker-enabled ASP.NET Core Web Application    
Use Visual Studio 2017 to quickly create a Docker-enabled ASP.NET Core application.  Visual Studio 2017 will create the required Docker files, and add them to your new solution.   

1. Ensure [Docker for Windows](https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows) is installed on your development machine.
2. After installing Docker for Windows, reboot your machine.  After rebooting, launch **Docker for Windows**.
2. In Visual Studio 2017 create a new **ASP.NET Core Web Application (.NET Core)** by navigating to **file, New Project, Templates, Visual C#, then click Web**.
3. In the ASP.NET Core templates dialogue, Choose **Web Application** and ensure the **Enable Docker Support** checkbox is selected.
4. Click **Ok** to create the project.
5. Once the project is created, click **Build then click Rebuild Solution** and ensure there are no errors.

## Add the solution to source control in VSTS    
To create a CI/CD pipeline, you need to add your source code to VSTS.  If you already have your ASP.NET Core Web Application solution in a VSTS Team Project, you may skip this section.

1.	Ensure your solution is open, and connect Team Explorer to a VSTS account and Team Project.      
2.	**Right click** your solution and click **Add To Source Control**.    
3.	Click **Team Explorer**, and click the **Sync** button.
4.	Click **Publish Git Repo**.
5.	Choose your VSTS account by selecting the appropriate **Team Services Domain**.
6.	Click **Advanced**.
7.	Choose the Team Project that contains the source code.
8.	Accept the default **Repository name** or choose a new name.    
9.	Click **Publish Repository**.  Your solution is now pushed to VSTS.
9.	TODO:  Screenshot for clarity           

## Install Continuous Delivery (CD) Tools for Visual Studio 2017    
Continuous Delivery (CD) Tools for Visual Studio 2017 helps automate the creation of VSTS to Azure release pipelines.  Optionally, you can extend the generated pipeline to further enhance your CI/CD workflows.

1.  In Visual Studio click **Tools then click Extensions and Updates**.
2.  In the dialogue, click **Online** and search for **Continuous Delivery Tools for Visual Studio**.
3.  Click **Download**, and once it finishes **close** Visual Studio to finish the install process.
4.  **Restart** Visual Studio and **open** your solution.
5.  **Right Click** your solution in solution explorer and verify you see a **Configure Continuous Delivery** icon.

##  Configure and execute Continuous Delivery (CD) for your app    
The tools in Visual Studio 2017 automate the creation of a CI/CD pipeline.  The automation quickly creates various services in Azure and VSTS.  This automation allows you to quickly enable CI/CD to Azure for your apps.

1.  In Visual Studio, **right click** your solution and click **Configure Continuous Delivery**.
2.  Choose App Service (Linux) as your **Host Type**.
3.  Choose the **Container Registry** you created earlier.
4.  Accept the default App Service name or click **edit** to choose a new name.
5.  Click **ok**, and monitor the output window for results.  
6.  **Azure resources** including the App Service will be created.  **VSTS resources** such as a build definition, and a release definition will be created in the same team project with your source code.
6.  A **build** and **release** will then execute.  **Navigate** to the VSTS account and monitor the build and release processes until they complete.  This process may take several minutes.
7.  Check the **Azure Portal** for the newly created resource group and Linux based App Service.  Find the new url for the Azure App Service URL by choosing properties on the App Service.
8.  **Verify** the web app is operational in a browser.  **Note**:  Currently the below work around is required until engineering pushes an update.

##	Configure the App Service Docker settings  [ENGINEERING is fixing a bug and we can remove this section/work around]
1.  Currently if you navigate to your App Service, you receive a 503 error.
2.  Navigate to **Container registries** in the Azure Portal.  Copy the values for **Login Server, Username, and Password**.  **Note**:  In later steps you will add the prefix https:// to the value for the Login URL.
3.  Navigate to the newly created **App Service** in the Azure Portal.
4.  Choose **Docker Container** under the **SETTINGS** section for your App Service.
5.  Choose **Private registry** and configure the details you saved above.  **Note**:  You must place https:// in front of the URL.  Example:  **https://LoginUrlGoesHere**
5.	**Refresh** your App Service URL in a browser.  The web app should now display.  
6.  **Optional:**  Make changes to your website and **push** the changes into VSTS.  A build and release will execute and your changes will be deployed.

##  View the configuration of your release pipeline    
The CD tooling for Visual Studio 2017 automated the creation of the CI/CD pipeline.  Follow the steps below to explore the various pieces of the release pipeline.    

1. Open your **VSTS Team Project** in a browser.
2. Navigate to **Build & Release** and locate the newly created build and release definitions.  
3. **Edit** the build and release definitions to view the various tasks that were automatically created.
4. An **Azure Resource Manager** service endpoint was also created in your VSTS project, which connects to a newly created Azure Service Principal.

## Next Steps    
You've just put your own CI/CD processes in place. You can modify these build and release definitions to meet the needs of your team. To learn more see one of these tutorials:

* [Customize CD process](customize-cd-process.md)

* [Manage infrastructure as code](infra-as-code.md)
