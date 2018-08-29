---
title: Get started using Azure Pipelines
titleSuffix: Azure DevOps Services
description: Learn the basics about Azure Pipelines and how to use it to automatically build and release code.
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: douge
ms.date: 07/06/2018
monikerRange: '>= tfs-2015'
---

# Getting started with Azure Pipelines

You can either use [YAML](../get-started-yaml.md) to define your pipelines or use the [task-based designer](../get-started-designer.md) to do the same. 

When you use YAML, you define your pipeline mostly in code (a YAML file) alongside the rest of the code for your app. 
When you use the task-based designer, you define a **build pipeline** to build and test your code, and then to publish artifacts. You also define a **release pipeline** to consume and deploy those artifacts to deployment targets.

## Using Azure Pipelines with YAML

You can configure your pipelines in a YAML file that exists alongside your code.

> TODO: CAN WE GET SOME INFO ON WHO WOULD USE THIS AND WHY?

1. Connect your GitHub repo directly to Azure DevOps or use Azure Repos to store your project
2. Edit your `azure-pipelines.yaml` file
3. Push your code to your version control repository, this will kick off the default trigger to build and deploy, and monitor the results
4. Your updated, tested, and packaged code is sent to your deployment target

![Pipelines YAML intro image ](../_img/pipelines-image-yaml.png)


If you think the YAML workflow is best for you, take the next step by [creating your first pipeline using YAML](../get-started-yaml.md).

## Using Azure Pipelines with designer (UX)

You can create and configure your build and release pipelines in the Azure DevOps UX with the designer. 

> TODO: CAN WE GET SOME INFO ON WHO WOULD USE THIS AND WHY? Like maybe about TFS users or what applications, etc. 

1. Connect your Git repo to Azure DevOps
2. Use the Azure Pipelines UX (designer) to create your build and release pipelines
3. Push your code to your version control repository
4. Once your code is pushed to the repository your pipeline is triggered, running any tasks such as building or testing code
5. The build creates an artifact that is used by the rest of your pipeline, running any tasks such as deploying to staging or production
6. Your updated, tested, and packaged code is sent to your deployment target

![Pipelines designer intro image](../_img/pipelines-image-designer.png)

If you think the designer workflow is best for you, take the next step by [creating your first pipeline using the designer](../get-started-designer.md).

