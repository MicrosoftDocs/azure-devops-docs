---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Bamboo with VSTS
description: Use Atlassian Bamboo with your VSTS account
ms.assetid: a5cb1028-9b46-4106-9fdd-5b8059b4dedd
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Bamboo with VSTS

If you use Bamboo to build your apps, you can store your code in VSTS
and continue to use Bamboo for your continuous integration builds.
You can trigger a Bamboo build when you push code to your team project's
Git repository,  when you check code in to Team Foundation version control,
or when a VSTS build finishes.

## Configure Bamboo

1. If you haven't already, set up a [Bamboo](https://www.atlassian.com/software/bamboo/) server.

2. If you use Bamboo on-premises, [enable HTTPS](https://confluence.atlassian.com/display/BAMBOO/Advanced+actions) on your Bamboo server.

3. If your team project uses Team Foundation version control and not Git, install the [TFS respository add-on](https://marketplace.atlassian.com/search?q=tfs) for Bamboo.

## Enable VSTS basic authentication
1. If you haven't already, enable [alternate credentials](../../git/auth-overview.md#alternate-credentials) in your VSTS profile.
Be sure to set a secondary user name because you won't be able to use your email address
to connect VSTS to Bamboo.

   <img alt="Profile, credentials tab, alternative credentials enabled wiht a secondary user name" src="./_img/bamboo/alternate-credentials.png" style="border: 1px solid #CCCCCC" />

## Set up a Bamboo build plan

1. In Bamboo, create a new plan by choosing **Create** > **Create a new plan** from the menu bar.

2. Under **Link repository to new build plan**, choose **Other** > **Git** and set the URL for your Git repository in VSTS.
The URL is in the form ```https://{VSTS account}.visualstudio.com/DefaultCollection/_git/{team project name}```.

3. Next to **Authentication Type**, choose **Username/password** and enter the [alternate credentials](../../git/auth-overview.md#alternate-credentials) of a VSTS account with read access to the repository. 

   <img alt="Repository settings with Git selected" src="./_img/bamboo/repository-management-settings.png" style="border: 1px solid #CCCCCC" />

## Trigger Bamboo from VSTS 

0. Go to your VSTS project service hooks page: `https://{account_name}.visualstudio.com/{project_name}/_apps/hub/ms.vss-servicehooks-web.manageServiceHooks-project`

	![Team project administration page](./_img/add-service-hook.png)

	Click **Create Subscription**.

3. Add Bamboo.

   <img alt="Select target service dialog box, Bamboo selected" src="./_img/bamboo/target-service.png" style="border: 1px solid #CCCCCC" />

4. Pick the event from VSTS that you want to trigger a build in Bamboo.

   <img alt="Configure event dialog box" src="./_img/bamboo/configure-event.png" style="border: 1px solid #CCCCCC" />

5. Configure the action you want Bamboo to take.

   <img alt="New service hook subscription dialog box" src="./_img/bamboo/subscription.png" style="border: 1px solid #CCCCCC" />

Now, when that event occurs in VSTS, your Bamboo build will be triggered.

## Pricing
VSTS doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Can I build part of my app in VSTS and part in Bamboo?

A: Yes. You can trigger a Bamboo build when your VSTS build is completed so that you use both systems to build your app.

#### Q: Can I programmatically create subscriptions?

A: Yes, use [REST APIs](../create-subscription.md).

<!-- ENDSECTION -->