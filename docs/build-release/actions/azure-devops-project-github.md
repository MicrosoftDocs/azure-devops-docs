---
title: Create a CI/CD pipeline for your existing code with the Azure DevOps Project | VSTS Tutorial
description: The DevOps Project makes it easy to get started on Azure. It helps you use your own code and GitHub repository to launch an app on an Azure service of your choice in few quick steps.
services: vsts
documentationcenter: ''
author: mlearned
manager: douge
editor: ''

ms.assetid:
ms.workload: web
ms.tgt_pltfrm: na
ms.devlang: na
ms.topic: tutorial
ms.date: 11/13/2017
ms.author: mlearned
ms.custom: mvc
---

# Create a CI/CD pipeline for your existing code with the Azure DevOps Project

The Azure DevOps Project presents a simplified experience where you can bring your existing code and Git repository, or choose from one of the sample applications to create a continuous integration (CI) and continuous delivery (CD) pipeline to Azure.

You will:

> [!div class="checklist"]
> * Create an Azure DevOps project
> * Configure access to your GitHub repository and choose a framework
> * Configure VSTS and an Azure subscription 
> * Commit changes to GitHub and automatically deploy to Azure

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

## Clean up resources

When no longer needed, you can delete the Azure App service created in this tutorial.

## Next steps

When you configured your CI/CD process in this tutorial, a build and release definition were automatically created in your VSTS project. You can modify these build and release definitions to meet the needs of your team. You learned how to:

> [!div class="checklist"]
> * Create an Azure DevOps project
> * Configure access to your GitHub repository and choose a framework
> * Configure VSTS and an Azure subscription 
> * Commit changes to GitHub and automatically deploy to Azure

To learn more about the VSTS pipeline see this tutorial:

> [!div class="nextstepaction"]
> [Customize CD process](define-multistage-release-process.md)