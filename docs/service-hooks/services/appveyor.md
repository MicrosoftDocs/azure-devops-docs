---
title: AppVeyor with Visual Studio Team Services
description: Use AppVeyor with your Visual Studio Team Services account
ms.assetid: 49541e06-2f8c-40ca-a161-f6ddff6ec83a
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
ms.topic: get-started-article
---

# AppVeyor with Visual Studio Team Services

Set up continuous integration builds in AppVeyor for the code in your Visual Studio Team Services Git repositories.

## Integrate AppVeyor with Team Services

1. If you don't have an AppVeyor account, [sign up](http://ci.appveyor.com/signup) with your Visual Studio Team Services account.

   <img alt="Visual Studio Team Services button on the AppVeyor sign up page" src="./_img/appveyor/sign-up.png" style="border: 1px solid #CCCCCC" />

1. Create a new project.

   <img alt="Create new project" src="./_img/appveyor/appveyor-new-project.png" style="border: 1px solid #CCCCCC" />

1. Add a Git repository from your Visual Studio Team Services account.

   <img alt="Add Visual Studio Team Services Git project" src="./_img/appveyor/appveyor-add-repository.png" style="border: 1px solid #CCCCCC" />

   Now an AppVeyor CI build will start whenever you push code to your repository in Visual Studio Team Services.
   
   <img alt="Build results" src="./_img/appveyor/build-output.png" style="border: 1px solid #CCCCCC" />

## Pricing
Visual Studio Team Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

####Q: Do I need to sign into AppVeyor using my Visual Studio Team Services ID in order to setup this integration?

A: No. If you use an account that's not already assocaited with your Visual Studio ID,
you'll authorize access to your Visual Studio Team Services account when you add Git repositories from Visual Studio Team Services. 

####Q: Does AppVeyor change anything in my Visual Studio Team Services account?

A: Yes. It adds a service hook subscription to your team project.

<img alt="Visual Studio Team Services AppVeyor consumer added" src="./_img/appveyor/appveyor-service-hook.png" style="border: 1px solid #CCCCCC" />

####Q: What happens if I remove the AppVeryor project?

A: The AppVeyor service hook subscription is removed from Visual Studio Team Services.

####Q: Can I get notification of AppVeyor builds in my Visual Studio Team Services team room?

A: Yes, you can set that up in the AppVeyor Notifications page.

<img alt="Configure team room notifications" src="./_img/appveyor/team-room-notification.png" style="border: 1px solid #CCCCCC" />

####Q: If I reconfigure AppVeyor from Visual Studio Team Services, where do I get the webhook ID used by AppVeyor?

A: From the projects settings: 

<img alt="Project settings" src="./_img/appveyor/appveyor-project-settings.png" style="border: 1px solid #CCCCCC" />

####Q: Where can I get more information about AppVeyor?

A: [AppVeyor.com](http://appveyor.com).

<!-- ENDSECTION -->
