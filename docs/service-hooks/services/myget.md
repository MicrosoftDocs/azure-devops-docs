---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: MyGet with VSTS
description: Use MyGet with your VSTS account
ms.assetid: 2fcfead5-4f59-4b49-b55d-3199919e21c3
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# MyGet with VSTS

Use a MyGet feed for the following integration scenarios with VSTS:

- When code is pushed to a Git repository in VSTS, MyGet pulls the code, builds it, and adds any resulting NuGet packages to a feed. 
- When a NuGet package is built in VSTS, MyGet downloads the package and adds it to a feed.

## Create and configure a MyGet feed

1. If you don't have a MyGet account, get one [here](http://myget.org/).

2. In MyGet, add a feed.

   <img alt="Add a feed" src="./_img/myget/new-feed.png" style="border: 1px solid #CCCCCC" />

3. Configure the feed.

   <img alt="Enter the URL and create the feed" src="./_img/myget/create-feed.png" style="border: 1px solid #CCCCCC" />

## Build and deploy a package when code is pushed

2. Add VSTS to your feed as a build source.

   <img alt="Add VSTS Git" src="./_img/myget/add-build-source.png" style="border: 1px solid #CCCCCC" />

3. Use your VSTS account.

   <img alt="Enter the name of your VSTS account" src="./_img/myget/vso-account.png" style="border: 1px solid #CCCCCC" />

4. Authorize MyGet to access you VSTS account.

   <img alt="Accept the permission request" src="./_img/myget/authorize.png" style="border: 1px solid #CCCCCC" />

5. Configure the build source.

   <img alt="Link build source" src="./_img/myget/link-build-source.png" style="border: 1px solid #CCCCCC" />

    Now the feed is set up. When code is pushed, view the status of the triggered MyGet builds.

    <img alt="Triggered build" src="./_img/myget/triggered-build.png" style="border: 1px solid #CCCCCC" />

## Deploy a package built on VSTS
 
2. Add the VSTS build definition as a package source for your feed.

   <img alt="Choose VSTS build definition" src="./_img/myget/add-package-source.png" style="border: 1px solid #CCCCCC" />

3. Use your VSTS account.

   <img alt="Enter your VSTS account name" src="./_img/myget/vso-account.png" style="border: 1px solid #CCCCCC" />

4. Authorize MyGet to access your VSTS account.

   <img alt="Accept the permission request" src="./_img/myget/authorize.png" style="border: 1px solid #CCCCCC" />

5. Choose a build definition that includes a NuGet package in the build drop.

   <img alt="Configure build definition" src="./_img/myget/configure-build-definition.png" style="border: 1px solid #CCCCCC" />

    You've defined the package source.

    <img alt="The name and source appear in the new feed" src="./_img/myget/completed-feed.png" style="border: 1px solid #CCCCCC" />

## Pricing
VSTS doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Where can I get more information about MyGet?

A: At [myget.org](http://www.myget.org/).

<!-- ENDSECTION -->
