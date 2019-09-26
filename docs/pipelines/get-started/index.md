---
title: Learn how to build and deploy your apps 
titleSuffix: Azure Pipelines
description: Use Azure Pipelines to build and deploy your apps
ms.prod: devops
ms.technology: devops-cicd
ms.assetid:  
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: overview
ms.manager: jillfra
ms.author: elbatk
author: elbatk
monikerRange: 'azure-devops'
ms.date: 05/06/2019
---


# Azure Pipelines

[!INCLUDE [temp](../../_shared/version-tfs-2017-through-vsts.md)]  

Azure Pipelines is a fully featured continuous integration (CI) and continuous delivery (CD) service. It works with your preferred Git provider and can deploy to most major cloud services, which include Azure services. Start with your code on GitHub, GitHub Enterprise Server, GitLab, Bitbucket Cloud, or [Azure Repos](/azure/devops/repos/index). Then you can automate the build, testing, and deployment of your code to Microsoft Azure, Google Cloud Platform, or Amazon Web Services.

Use Azure Pipelines to configure and automate your build and delivery tools and environments in YAML (as configuration as code). Or you can use the classic editor in the Azure DevOps web portal at [https://dev.azure.com](https://dev.azure.com). Azure Pipelines documentation shows you both approaches.

## Videos 

#### Build and deploy your code with Azure Pipelines

<iframe src="https://channel9.msdn.com/Events/Microsoft-Azure/Azure-DevOps-Launch-2018/A101/player" width="640" height="320" allowFullScreen="true" frameBorder="0"></iframe>


#### Continuously build GitHub projects with Azure Pipelines

<iframe src="https://channel9.msdn.com/Events/Microsoft-Azure/Azure-DevOps-Launch-2018/A102/player" width="640" height="320" allowFullScreen="true" frameBorder="0"></iframe>

## 5-Minute Quickstarts  

- [Create your first pipeline](../create-first-pipeline.md)
- [Customize your pipeline](../customize-pipeline.md)

## Tutorials

- [Build GitHub repositories](../repos/github.md)
- [Build Azure Repos Git repositories](../repos/azure-repos-git.md)
- [Build multiple branches](../build/ci-build-git.md)
- [Set up a multi-stage release](../release/define-multistage-release-process.md)


## Concepts 
      
- [Build and release agents](../agents/agents.md)
- [Agent pools](../agents/pools-queues.md)
- [Microsoft-hosted agents](../agents/hosted.md)


## How-to Guides

- [Java to web App](../ecosystems/java-webapp.md)
- [Java to Azure Function](../ecosystems/java-function.md)
- [Cross-platform scripts](../scripts/cross-platform-scripting.md)
- [Run a PowerShell script](../scripts/powershell.md)
- [Run Git commands](../scripts/git-commands.md)

## Troubleshooting

- [Troubleshoot build and release](../troubleshooting.md)
- [Debug deployment issues](../release/variables.md#debug-mode)
- [Troubleshoot Azure connections](../release/azure-rm-endpoint.md)

## Reference 

- [YAML schema](../yaml-schema.md)
- [Tasks](../tasks/index.md)


## Resources 

- [Azure Repos](../../repos/index.yml)
- [Azure Artifacts](../../artifacts/index.md)