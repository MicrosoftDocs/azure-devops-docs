---
title: Deploy to Azure index to content | Microsoft Docs    
description: Learn how to deploy to Azure using VSTS. Tutorials, references, and other documentation.  
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: BC7FACEF-6E79-4BBA-BF53-07BD27EEB235  
ms.manager: douge
ms.author: kaelli
ms.date: 05/08/2018
monikerRange: '>= tfs-2015'
---

# Deploy to Azure

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](_shared/concept-rename-note.md)]
::: moniker-end

Visual Studio Team Services (VSTS) is Microsoft's DevOps solution for Azure. The Build and Release services provide streamlined experiences to deploy your apps to one of Azure's many services. These services provide a continuous delivery solution if your code is managed in GitHub, VSTS Git or Team Foundation Version Control, or in one of the other Git servers.

## Azure DevOps Project

The Azure DevOps Project makes it easy to get started on Azure. The DevOps project resource helps you launch your favorite app type on the Azure service of your choice in just a few quick steps from the Azure portal. The DevOps Project sets up everything you need for developing, deploying, and monitoring your application. The DevOps Project dashboard lets you monitor code commits, builds, and deployments, all from a single view in the Azure portal.

> [!div class="nextstepaction"]
> [Deploy your code with DevOps Project](/azure/devops-project/azure-devops-project-github)

## Web apps

Azure web apps enable you to build and host web applications in the programming language of your choice without managing infrastructure. They offer auto-scaling and high availability and support both Windows and Linux. You can start directly from the Azure portal and set up an entire pipeline for your web app. You can then customize the build and release pipelines in VSTS to meet the needs of your application.

> [!div class="nextstepaction"]
> [Build and Deploy to Web Apps](targets/webapp.md)

## Virtual machines

Azure virtual machines provide on-demand, high-scale, secure, virtualized infrastructure using Windows, Red Hat, Ubuntu, or another Linux distribution of your choice. If you develop an application that runs on virtual machines, then VSTS has the tools to automate deployment of your app. You group the virtual machines in Azure into a deployment group in VSTS, and then set up a release pipeline to deploy to that group of virtual machines. You can also configure rolling deployment to ensure zero downtime for your customers.

> [!div class="nextstepaction"]
> [Deploy to Windows VMs](apps/cd/deploy-webdeploy-iis-deploygroups.md)

## Web apps for containers

Azure web apps for containers offer the fastest and simplest way for you run a container instance in Azure. VSTS offers the simplest way for you to set up and track the continuous delivery of your container application. You configure your build process in VSTS to automatically publish a container image, and then your release process to automatically deploy your container image to an Azure web app. Furthermore, if you develop a ASP.NET Core application in Visual Studio, you can set up the entire VSTS build and release pipeline from Visual Studio IDE.

> [!div class="nextstepaction"]
> [CI/CD to Containers](apps/cd/deploy-docker-webapp.md)

## And more

The Build and Release services in VSTS provide a number of tasks to provision your Azure infrastructure and to deploy your app to services such as Service Fabric or Kubernetes. Explore these possibilities using the various How-to topics in this documentation.
