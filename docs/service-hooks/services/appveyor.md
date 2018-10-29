---
title: AppVeyor with Azure DevOps Services
description: Use AppVeyor with your Azure DevOps Services organization
ms.assetid: 49541e06-2f8c-40ca-a161-f6ddff6ec83a
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# AppVeyor with Azure DevOps Services

Set up continuous integration builds in AppVeyor for the code in your Azure DevOps Services Git repositories.

## Integrate AppVeyor with Azure DevOps Services

1. If you don't have an AppVeyor account, [sign up](http://ci.appveyor.com/signup) with your Azure DevOps Services organization.

   <img alt="Azure DevOps Services button on the AppVeyor sign up page" src="./_img/appveyor/sign-up.png" style="border: 1px solid #CCCCCC" />

1. Create a new project.

   <img alt="Create new project" src="./_img/appveyor/appveyor-new-project.png" style="border: 1px solid #CCCCCC" />

1. Add a Git repository from your Azure DevOps Services organization.

   <img alt="Add Azure DevOps Services Git project" src="./_img/appveyor/appveyor-add-repository.png" style="border: 1px solid #CCCCCC" />

   Now an AppVeyor CI build will start whenever you push code to your repository in Azure DevOps Services.
   
   <img alt="Build results" src="./_img/appveyor/build-output.png" style="border: 1px solid #CCCCCC" />

## Pricing
Azure DevOps Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Do I need to sign into AppVeyor using my Visual Studio ID in order to set up this integration?

A: No. If you use an organization that's not already associated with your Visual Studio ID,
you'll authorize access to your Azure DevOps Services organization when you add Git repositories from Azure DevOps Services. 

#### Q: Does AppVeyor change anything in my Azure DevOps Services organization?

A: Yes. It adds a service hook subscription to your project.

<img alt="Azure DevOps Services AppVeyor consumer added" src="./_img/appveyor/appveyor-service-hook.png" style="border: 1px solid #CCCCCC" />

#### Q: What happens if I remove the AppVeyor project?

A: The AppVeyor service hook subscription is removed from Azure DevOps Services.

#### Q: Can I get notification of AppVeyor builds in my Azure DevOps Services team room?

A: Yes, you can set that up in the AppVeyor Notifications page.

<img alt="Configure team room notifications" src="./_img/appveyor/team-room-notification.png" style="border: 1px solid #CCCCCC" />

#### Q: If I reconfigure AppVeyor from Azure DevOps Services, where do I get the webhook ID used by AppVeyor?

A: From the projects settings: 

<img alt="Project settings" src="./_img/appveyor/appveyor-project-settings.png" style="border: 1px solid #CCCCCC" />

#### Q: Where can I get more information about AppVeyor?

A: [AppVeyor.com](http://appveyor.com).

<!-- ENDSECTION -->
