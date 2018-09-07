---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Campfire with Azure DevOps Services
description: Use Campfire with your Azure DevOps Services organization
ms.assetid: 38a3f329-96c5-49a2-a88d-523356c496f0
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Notifications and Campfire

Post messages to a room in Campfire in response to events from Azure DevOps Services.
For example, you can post a message when a work item is created or changed, or a build occurs.

## Get a Campfire authorization token

1. If you don't have a Campfire account, get one [here](https://campfirenow.com/signup), and create a room.

2. Copy the token from your Campfire profile page. 

   <img alt="Campfire" src="./_img/campfire/campfire-my-info.png" style="border: 1px solid #CCCCCC" />

## Post messages to a room

0. Go to your Azure DevOps Services project service hooks page: `https://dev.azure.com/{orgName}/{project_name}/_apps/hub/ms.vss-servicehooks-web.manageServiceHooks-project`

	![Project administration page](./_img/add-service-hook.png)

	Click **Create Subscription**.

3. Configure the Azure DevOps Services event that will post a message in a Campfire room.

   <img alt="Configure event" src="./_img/campfire/configure-event.png" style="border: 1px solid #CCCCCC" />

4. Configure the action with your Campfire account name, authentication token and room. 

   <img alt="Configure action" src="./_img/campfire/configure-action.png" style="border: 1px solid #CCCCCC" />

5. Test the service hook subscription and finish the wizard. 
   
   <img alt="Test it" src="./_img/campfire/test.png" style="border: 1px solid #CCCCCC" />

    Now the messages are set up. Go to Campfire and see the messages. 

    <img alt="Results" src="./_img/campfire/results.png" style="border: 1px solid #CCCCCC" />

## Pricing
Azure DevOps Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTON class="m-qanda" -->

####Q: Can I programmatically create subscriptions?

A: Yes, see details [here](../create-subscription.md).

####Q: Where can I get more information about Campfire?

A: At [campfirenow.com](https://campfirenow.com/).

<!-- ENDSECTION -->