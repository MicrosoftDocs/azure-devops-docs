---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Jenkins with Azure DevOps Services
description: Use Jenkins with your Azure DevOps Services organization
ms.assetid: 3e9cf797-092f-48da-a515-e4d0cc93c4a1
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Jenkins with Azure DevOps Services

If you use Jenkins to build your apps, you can store your code in Azure DevOps Services
and continue to use Jenkins for your continuous integration builds.
You can trigger a Jenkins build when you push code to your project's
Git repository or when you check code in to Team Foundation version control.

## Configure Jenkins

1. If you haven't already, set up a [Jenkins](http://jenkins-ci.org/) server.

2. If you're setting up Jenkins on-premises, [enable HTTPS](https://wiki.jenkins-ci.org/display/JENKINS/Starting+and+Accessing+Jenkins).

## Set up a Jenkins build

1. In Jenkins, create a new item.

   <img alt="New item link in Jenkins" src="./_img/jenkins/new-item.png" style="border: 1px solid #CCCCCC" />

2. Create the type of build that's appropriate for your project.

   <img alt="Build name and type in Jenkins" src="./_img/jenkins/my-build.png" style="border: 1px solid #CCCCCC" />

3. Set the URL for your Git repository in Azure DevOps Services.
The URL is in the form ```https://dev.azure.com/{orgName}/DefaultCollection/_git/{projectName}```.

   <img alt="Source code management settings with Git selected" src="./_img/jenkins/source-code-management-settings.png" style="border: 1px solid #CCCCCC" />

## Trigger Jenkins from Azure DevOps Services 

1. If you haven't already, enable alternate credentials in your Azure DevOps Services profile.
Be sure to set a secondary user name because you won't be able to use your email account
to connect Azure DevOps Services to Jenkins.

   <img alt="Profile, credentials tab, alternative credentials enabled with a secondary user name" src="./_img/jenkins/alternate-credentials.png" style="border: 1px solid #CCCCCC" />

0. Go to your Azure DevOps Services project service hooks page: `https://dev.azure.com/{orgName}/{projectName}/_apps/hub/ms.vss-servicehooks-web.manageServiceHooks-project`

	![Project administration page](./_img/add-service-hook.png)

	Click **Create Subscription**.

4. Add Jenkins.

   <img alt="Select target service dialog box, Jenkins selected" src="./_img/jenkins/target-service.png" style="border: 1px solid #CCCCCC" />

5. Pick the event from Azure DevOps Services that you want to trigger a Jenkins build.

   <img alt="Configure event dialog box" src="./_img/jenkins/configure-event.png" style="border: 1px solid #CCCCCC" />

6. Configure the action to take in Jenkins.

   <img alt="New service hook subscription dialog box" src="./_img/jenkins/subscription.png" style="border: 1px solid #CCCCCC" />

Now, when that event occurs in Azure DevOps Services, your Jenkins build will be triggered.

## Pricing
Azure DevOps Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Can I build part of my app in Azure DevOps Services and part in Jenkins?

A: Yes. You can trigger a Jenkins build when your Azure DevOps Services build is completed so that you use both systems to build your app.

#### Q: Can I programmatically create subscriptions?

A: Yes, use [REST APIs](../create-subscription.md).

<!-- ENDSECTION -->