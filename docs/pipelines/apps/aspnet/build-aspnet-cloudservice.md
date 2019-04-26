---
ms.assetid: EEA8E5DA-50B6-427B-B67E-32E926DC4A02
title: Build your Azure Cloud Service
ms.topic: conceptual
ms.custom: seodec18
description: Define a continuous integration (CI) build for your Azure Cloud Service in Azure Pipelines or Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 01/02/2017
monikerRange: 'azure-devops'
---

# Build your Azure Cloud Service

[!INCLUDE [temp](../../_shared/version.md)]

Here we'll show you how to define your continuous integration (CI) pipeline for your Azure Cloud Service project.

## Get set up

For the instructions in this topic, you need an Azure Cloud Service project in Visual Studio.

> [!TIP]
> If you don't yet have an app but want to try this out, then see the [Q&A below](#new_solution).

## Define your CI build pipeline

### Create the build pipeline

<ol>
    [!INCLUDE [include](../../_shared/begin-create-build-definition.md)]

    <li>Select the **Azure Cloud Service** template.</li>


    <li>As the repository source, select the project, repository, and branch.</li>

    <li>Remove the **Azure Cloud Service Deployment task** from the build pipeline, since you will be deploying the cloud service later through a release pipeline.</li>
</ol>

### Enable continuous integration (CI)

On the Triggers tab, enable **continuous integration** (CI). This tells the system to queue a build whenever someone on your team commits or checks in new code.

## Queue and test the build

Save the build pipeline and queue a new build by selecting the **Queue new build** command. Once the build is done, click **Artifacts** and then **Explore** to see the cloud service package (.cspkg file) produced by the build. This is the package that your release pipeline will consume to deploy your app.

## Deploy your app

After you've run the build, you're ready to create a release pipeline to deploy your app to:

* <a href="../cd/deploy-cloudservice-cloudservice.md"><img src="../../tasks/deploy/_img/azure-cloud-service-deployment-icon.png"/> An Azure Cloud Service</a>

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<h3 id="new_solution">How do I create an Azure Cloud Service solution?</h3>

0. In Visual Studio, [connect to your project](../../../organizations/projects/connect-to-projects.md#visual-studio).

0. On the Team Explorer home page (Keyboard: Ctrl + 0, H), under **Solutions**, click **New**.

0. Select the **Cloud** templates section, and then choose the **Azure Cloud Service** template.

0. When prompted for the roles in the cloud service, choose the **ASP.NET Web role** to the project.

0. When prompted for the type of ASP.NET project for the Web role, choose the **MVC** project.

0. [Commit and push (Git)](../../../repos/git/share-your-code-in-git-vs.md) or [check in (TFVC)](../../../repos/tfvc/share-your-code-in-tfvc-vs.md) your code.

<!-- ENDSECTION -->
