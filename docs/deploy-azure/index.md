---
title: Deploy to Azure index to content | Microsoft Docs    
description: Learn how to deploy to Azure using VSTS. Tutorials, references, and other documentation.  
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 125D4C50-1098-4A4D-81B8-97501BE47FC5  
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 05/08/2018
ms.topic: conceptual
layout: LandingPage
monikerRange: '>= tfs-2013'
---


::: moniker range=">= tfs-2015"

# Deploy to Azure

Visual Studio Team Services (VSTS in the cloud) and Team Foundation Services (TFS on-premises) are  Microsoft's DevOps solutions for Azure. Whether you are developing a .NET, Java, Node, PHP, or a Python app, or whether you are targeting app services, virtual machines, or containers in Azure, VSTS helps you set up a highly customizable continuous integration (CI) and continuous delivery (CD) pipeline. Tutorials, references, and other documentation show you how to configure and manage CI/CD for the app of your choice to Azure services.

## 5-Minute Quickstarts

Learn how to build your app and deploy it to your choice of Azure service.

### Use Azure DevOps Project to deploy your App to Azure
<!-- Converting to icon48 format, this gets cleaner in YAML -->
<div class="ico48Case halfStack">
<div class="ico48Link"><a href="../pipelines/apps/cd/azure/azure-devops-project-aspnetcore.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_net.svg"><span>ASP.NET Core</span></a></div>
<div class="ico48Link"><a href="../pipelines/apps/cd/azure/azure-devops-project-go.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_go.svg"><span>Go</span></a></div>
<div class="ico48Link"><a href="../pipelines/apps/cd/azure/azure-devops-project-java.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_java.svg"><span>Java</span></a></div>
<div class="ico48Link"><a href="../pipelines/apps/cd/azure/azure-devops-project-php.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_php.svg"><span>PHP</span></a></div>
<div class="ico48Link"><a href="../pipelines/apps/cd/azure/azure-devops-project-python.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_python.svg"><span>Python</span></a></div>
<div class="ico48Link"><a href="../pipelines/apps/cd/azure/azure-devops-project-nodejs.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_nodejs.svg"><span>Node.js</span></a></div>
<div class="ico48Link"><a href="../pipelines/apps/cd/azure/azure-devops-project-ruby.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/logo_ruby.svg"><span>Ruby</span></a></div>
</div>

### Use VSTS to deploy your App to Azure
<div class="ico48Case halfStack">
<div class="ico48Link"><a href="../pipelines/targets/webapp.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/app-service-web.png"><span>Azure Web App</span></a></div>
<div class="ico48Link"><a href="../pipelines/apps/cd/deploy-webdeploy-iis-deploygroups.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/virtualmachine.png"><span>Windows VM</span></a></div>
<div class="ico48Link"><a href="../pipelines/apps/cd/deploy-docker-webapp.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json"><img width="48" height="48" alt="" src="../pipelines/_img/index/app-service-web.png"><span>Web App for Containers</span></a></div>
</div>

## Step-by-Step Tutorials  

* [Azure DevOps Project for GitHub](../pipelines/actions/azure-devops-project-github.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json)
* [Azure DevOps Project for VMs](../pipelines/actions/azure-devops-project-vms.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json)
* [Azure DevOps Project for SQL Database](../pipelines/actions/azure-devops-project-sqldb.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json)
* [Azure DevOps Project for AKS](../pipelines/actions/azure-devops-project-aks.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json)
* [Azure DevOps Project for Service Fabric](../pipelines/actions/azure-devops-project-servicefabric.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json)
* [Set up multi-stage release](../pipelines/release/define-multistage-release-process.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json)
* [CI builds for Git in VSTS](../pipelines/build/ci-build-git.md?toc=/vsts/deploy-azure/toc.json&bc=/vsts/deploy-azure/breadcrumb/toc.json)
* [Deploy apps to Azure App Service with VSTS and CI/CD](https://docs.microsoft.com/learn/deploy-apps-to-azure/index)

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
- [What is the Azure DevOps Project?](/azure/devops-project/overview)
- [Build and release in VSTS](../pipelines/index.md)

::: moniker-end

::: moniker range="tfs-2013"

**TFS 2013:** We recommend that you [Migrate from XAML builds to new builds](../pipelines/build/migrate-from-xaml-builds.md).

::: moniker-end
