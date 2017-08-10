---
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
title: Bamboo with Visual Studio Team Services
description: Use Atlassian Bamboo with your Visual Studio Team Services account
ms.assetid: a5cb1028-9b46-4106-9fdd-5b8059b4dedd
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
ms.topic: get-started-article
---

# Bamboo with Visual Studio Team Services

If you use Bamboo to build your apps, you can store your code in Visual Studio Team Services
and continue to use Bamboo for your continuous integration builds.
You can trigger a Bamboo build when you push code to your team project's
Git repository,  when you check code in to Team Foundation version control,
or when a Visual Studio Team Services build finishes.

## Configure Bamboo

1. If you haven't already, set up a [Bamboo](https://www.atlassian.com/software/bamboo/) server.

2. If you use Bamboo on-premises, [enable HTTPS](https://confluence.atlassian.com/display/BAMBOO/Advanced+actions) on your Bamboo server.

3. If your team project uses Team Foundation version control and not Git, install the [TFS respository add-on](https://marketplace.atlassian.com/search?q=tfs) for Bamboo.

## Enable Visual Studio Team Services basic authentication
1. If you haven't already, enable [alternate credentials](https://www.visualstudio.com/en-us/integrate/get-started/auth/overview/) in your Visual Studio Team Services profile.
Be sure to set a secondary user name because you won't be able to use your email address
to connect Visual Studio Team Services to Bamboo.

   <img alt="Profile, credentials tab, alternative credentials enabled wiht a secondary user name" src="./_img/bamboo/alternate-credentials.png" style="border: 1px solid #CCCCCC" />

## Set up a Bamboo build plan

1. In Bamboo, create a new plan by choosing **Create** > **Create a new plan** from the menu bar.

2. Under **Link repository to new build plan**, choose **Other** > **Git** and set the URL for your Git repository in Visual Studio Team Services.
The URL is in the form ```https://{Team Services account}.visualstudio.com/DefaultCollection/_git/{team project name}```.

3. Next to **Authentication Type**, choose **Username/password** and enter the [alternate credentials](https://www.visualstudio.com/en-us/integrate/get-started/auth/overview/) of a Visual Studio Team Services account with read access to the repository. 

   <img alt="Repository settings with Git selected" src="./_img/bamboo/repository-management-settings.png" style="border: 1px solid #CCCCCC" />

## Trigger Bamboo from Visual Studio Team Services 

1. Go to your team project's administration page.

   <img alt="Team project administraton icon" src="./_img/admin-700.png" style="border: 1px solid #CCCCCC" />

2. On the Service Hooks tab, create a subscription.

   <img alt="Service hooks page, add icon" src="./_img/add-service-hook.png" style="border: 1px solid #CCCCCC" />

3. Add Bamboo.

   <img alt="Select target service dialog box, Bamboo selected" src="./_img/bamboo/target-service.png" style="border: 1px solid #CCCCCC" />

4. Pick the event from Visual Studio Team Services that you want to trigger a build in Bamboo.

   <img alt="Configure event dialog box" src="./_img/bamboo/configure-event.png" style="border: 1px solid #CCCCCC" />

5. Configure the action you want Bamboo to take.

   <img alt="New service hook subscription dialog box" src="./_img/bamboo/subscription.png" style="border: 1px solid #CCCCCC" />

Now, when that event occurs in Visual Studio Team Services, your Bamboo build will be triggered.

## Pricing
Visual Studio Team Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Can I build part of my app in Visual Studio Team Services and part in Bamboo?

A: Yes. You can trigger a Bamboo build when your Visual Studio Team Services build is completed so that you use both systems to build your app.

#### Q: Can I programmatically create subscriptions?

A: Yes, use [REST APIs](../create-subscription.md).

<!-- ENDSECTION -->