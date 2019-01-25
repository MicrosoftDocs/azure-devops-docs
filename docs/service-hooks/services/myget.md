---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: MyGet with Azure DevOps Services
description: Use MyGet with your Azure DevOps Services organization
ms.assetid: 2fcfead5-4f59-4b49-b55d-3199919e21c3
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# MyGet with Azure DevOps Services

Use a MyGet feed for the following integration scenarios with Azure DevOps Services:

- When code is pushed to a Git repository in Azure DevOps Services, MyGet pulls the code, builds it, and adds any resulting NuGet packages to a feed. 
- When a NuGet package is built in Azure DevOps Services, MyGet downloads the package and adds it to a feed.

## Create and configure a MyGet feed

1. If you don't have a MyGet account, get one [here](http://myget.org/).

2. In MyGet, add a feed.

   <img alt="Add a feed" src="./_img/myget/new-feed.png" style="border: 1px solid #CCCCCC" />

3. Configure the feed.

   <img alt="Enter the URL and create the feed" src="./_img/myget/create-feed.png" style="border: 1px solid #CCCCCC" />

## Build and deploy a package when code is pushed

2. Add Azure DevOps Services to your feed as a build source.

   <img alt="Add Azure DevOps Services Git" src="./_img/myget/add-build-source.png" style="border: 1px solid #CCCCCC" />

3. Use your Azure DevOps Services organization.

   <img alt="Enter the name of your organization" src="./_img/myget/vso-account.png" style="border: 1px solid #CCCCCC" />

4. Authorize MyGet to access your organization.

   <img alt="Accept the permission request" src="./_img/myget/authorize.png" style="border: 1px solid #CCCCCC" />

5. Configure the build source.

   <img alt="Link build source" src="./_img/myget/link-build-source.png" style="border: 1px solid #CCCCCC" />

    Now the feed is set up. When code is pushed, view the status of the triggered MyGet builds.

    <img alt="Triggered build" src="./_img/myget/triggered-build.png" style="border: 1px solid #CCCCCC" />

## Deploy a package built on Azure DevOps Services
 
2. Add the Azure DevOps Services build pipeline as a package source for your feed.

   <img alt="Choose Azure DevOps Services build pipeline" src="./_img/myget/add-package-source.png" style="border: 1px solid #CCCCCC" />

3. Use your Azure DevOps Services organization.

   <img alt="Enter your organization name" src="./_img/myget/vso-account.png" style="border: 1px solid #CCCCCC" />

4. Authorize MyGet to access your organization.

   <img alt="Accept the permission request" src="./_img/myget/authorize.png" style="border: 1px solid #CCCCCC" />

5. Choose a build pipeline that includes a NuGet package in the build drop.

   <img alt="Configure build pipeline" src="./_img/myget/configure-build-definition.png" style="border: 1px solid #CCCCCC" />

    You've defined the package source.

    <img alt="The name and source appear in the new feed" src="./_img/myget/completed-feed.png" style="border: 1px solid #CCCCCC" />

## Pricing
Azure DevOps Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Where can I get more information about MyGet?

A: At [myget.org](http://www.myget.org/).

<!-- ENDSECTION -->
