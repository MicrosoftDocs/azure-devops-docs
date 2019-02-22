---
title: Deploy to Azure with Azure DevOps Services and TFS| Microsoft Docs    
description: Learn how to deploy to Azure using Azure Pipelines and TFS Build & Release. Tutorials, references, and other documentation.  
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 125D4C50-1098-4A4D-81B8-97501BE47FC5  
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 07/09/2018
ms.topic: conceptual
layout: LandingPage
monikerRange: '>= tfs-2013'
---


::: moniker range=">= tfs-2015"

# Deploy to Azure

Azure DevOps Services (in the cloud) and Team Foundation Services (on-premises) are  Microsoft's DevOps solutions for Azure. Azure Pipelines (Build & Release in TFS) is the service for automated build and deployment for all cloud providers, especially Azure.

Whether you are developing a .NET, Java, Node, PHP, or a Python app, or whether you are targeting app services, virtual machines, or containers in Azure, Azure Pipelines (Build & Release) helps you set up a highly customizable continuous integration (CI) and continuous delivery (CD) pipeline. Tutorials, references, and other documentation show you how to configure and manage CI/CD for the app of your choice to Azure services.

## 5-Minute Quickstarts

Learn how to build your app and deploy it to your choice of Azure service.

### Use Azure DevOps Projects to deploy your App to Azure
<!-- Converting to icon48 format, this gets cleaner in YAML -->
<div class="ico48Case halfStack">
<div class="ico48Link"><a href="/azure/devops-project/azure-devops-project-aspnet-core"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_net.svg"><span>ASP.NET Core</span></a></div>
<div class="ico48Link"><a href="/azure/devops-project/azure-devops-project-go"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_go.svg"><span>Go</span></a></div>
<div class="ico48Link"><a href="/azure/devops-project/azure-devops-project-java"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_java.svg"><span>Java</span></a></div>
<div class="ico48Link"><a href="/azure/devops-project/azure-devops-project-php"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_php.svg"><span>PHP</span></a></div>
<div class="ico48Link"><a href="/azure/devops-project/azure-devops-project-python"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_python.svg"><span>Python</span></a></div>
<div class="ico48Link"><a href="/azure/devops-project/azure-devops-project-nodejs"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_nodejs.svg"><span>Node.js</span></a></div>
<div class="ico48Link"><a href="/azure/devops-project/azure-devops-project-ruby"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_ruby.svg"><span>Ruby</span></a></div>
</div>

### Use Azure DevOps Services to deploy your App to Azure
<div class="ico48Case halfStack">
<div class="ico48Link"><a href="../pipelines/targets/webapp.md?toc=/azure/devops/deploy-azure/toc.json&bc=/azure/devops/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/app-service-web.png"><span>Azure Web App</span></a></div>
<div class="ico48Link"><a href="../pipelines/apps/cd/deploy-webdeploy-iis-deploygroups.md?toc=/azure/devops/deploy-azure/toc.json&bc=/azure/devops/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/virtualmachine.png"><span>Windows VM</span></a></div>
<div class="ico48Link"><a href="../pipelines/apps/cd/deploy-docker-webapp.md?toc=/azure/devops/deploy-azure/toc.json&bc=/azure/devops/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/app-service-web.png"><span>Web App for Containers</span></a></div>
</div>

## Step-by-Step Tutorials  

* [Azure DevOps Projects for GitHub](/azure/devops-project/azure-devops-project-github)
* [Azure DevOps Projects for VMs](/azure/devops-project/azure-devops-project-vms)
* [Azure DevOps Projects for SQL Database](/azure/devops-project/azure-devops-project-sql-database)
* [Azure DevOps Projects for AKS](/azure/devops-project/azure-devops-project-aks)
* [Azure DevOps Projects for Service Fabric](/azure/devops-project/azure-devops-project-service-fabric)
* [Set up multi-stage release](../pipelines/release/define-multistage-release-process.md?toc=/azure/devops/deploy-azure/toc.json&bc=/azure/devops/deploy-azure/breadcrumb/toc.json)
* [CI builds for Git in VSTS](../pipelines/build/ci-build-git.md?toc=/azure/devops/deploy-azure/toc.json&bc=/azure/devops/deploy-azure/breadcrumb/toc.json)
* [Deploy apps to Azure App Service with VSTS and CI/CD](/azure/app-service)

## Videos

| | |
| --- | --- |
| <iframe src="https://channel9.msdn.com/Events/Connect/2017/T181/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> | <iframe src="https://channel9.msdn.com/Events/Connect/2017/T175/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> |
| <iframe src="https://channel9.msdn.com/Events/Visual-Studio/Visual-Studio-2017-Launch/190/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> | |
| | |

## Resources

- [What is Continuous Integration?](/azure/devops/what-is-continuous-integration)  
- [What is Continuous Delivery?](/azure/devops/what-is-continuous-delivery)  
- [What is DevOps?](/azure/devops/what-is-devops)
- [What is Azure DevOps Projects?](/azure/devops-project/overview)
- [Azure Pipelines](../pipelines/index.md)

::: moniker-end

::: moniker range="tfs-2013"

**TFS 2013:** We recommend that you [Migrate from XAML builds to new builds](../pipelines/build/migrate-from-xaml-builds.md).

::: moniker-end
