---
ms.assetid: EEA8E5DA-50B6-427B-B67E-32E926DC4A02
title: Build your Azure cloud service
ms.topic: conceptual
description: Define a continuous integration (CI) build for your Azure cloud service in VSTS or Microsoft Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 01/02/2017
monikerRange: 'vsts'
---


# Build your Azure cloud service

[!INCLUDE [temp](../../_shared/version.md)]

Here we'll show you how to define your continuous integration (CI) process for your Azure cloud service project.

## Get set up

For the instructions in this topic, you need an Azure cloud service project in Visual Studio.

> [!TIP]
> If you don't yet have an app but want to try this out, then see the [Q&A below](#new_solution).

## Define your CI build process

### Create the build definition

<ol>
    [!INCLUDE [include](../../_shared/begin-create-build-definition.md)]

    <li>Select the **Azure Cloud Service** template.</li>


    <li>As the repository source, select the team project, repository, and branch.</li>

    <li>Remove the **Azure Cloud Service Deployment task** from the build definition, since you will be deploying the cloud service later through a release definition.</li>
</ol>

### Enable continuous integration (CI)

On the Triggers tab, enable **continuous integration** (CI). This tells the system to queue a build whenever someone on your team commits or checks in new code.

## Queue and test the build

Save the build definition and queue a new build by selecting the **Queue new build** command. Once the build is done, click **Artifacts** and then **Explore** to see the cloud service package (.cspkg file) produced by the build. This is the package that your release definition will consume to deploy your app.

## Deploy your app

After you've run the build, you're ready to create a release definition to deploy your app to:

* <a href="../cd/deploy-cloudservice-cloudservice.md"><img src="../../tasks/deploy/_img/azure-cloud-service-deployment-icon.png"/> An Azure cloud service</a>

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<h3 id="new_solution">How do I create an Azure cloud service solution?</h3>

0. In Visual Studio, [connect to your team project](../../../user-guide/connect-team-projects.md#visual-studio).

0. On the Team Explorer home page (Keyboard: Ctrl + 0, H), under **Solutions**, click **New**.

0. Select the **Cloud** templates section, and then choose the **Azure Cloud Service** template.

0. When prompted for the roles in the cloud service, choose the **ASP.NET Web role** to the project.

0. When prompted for the type of ASP.NET project for the Web role, choose the **MVC** project.

0. [Commit and push (Git)](../../../git/share-your-code-in-git-vs.md) or [check in (TFVC)](../../../tfvc/share-your-code-in-tfvc-vs.md) your code.

<!-- ENDSECTION -->
