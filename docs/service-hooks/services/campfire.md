---
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
title: Campfire with Visual Studio Team Services
description: Use Campfire with your Visual Studio Team Services account
ms.assetid: 38a3f329-96c5-49a2-a88d-523356c496f0
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
ms.topic: get-started-article
---

# Campfire with Visual Studio Team Services

Post messages to a room in Campfire in response to events from Visual Studio Team Services.
For example, you can post a message when a work item is created or changed, or a build occurs.

## Get a Campfire authorization token

1. If you don't have a Campfire account, get one [here](https://campfirenow.com/signup), and create a room.

2. Copy the token from your Campfire profile page. 

   <img alt="Campfire" src="./_img/campfire/campfire-my-info.png" style="border: 1px solid #CCCCCC" />

## Post messages to a room

1. On the team project page in the service hooks tab, run the subscription wizard.

   <img alt="Add service hook" src="./_img/add-service-hook.png" style="border: 1px solid #CCCCCC" />

3. Configure the Visual Studio Team Services event that will post a message in a Campfire room.

   <img alt="Configure event" src="./_img/campfire/configure-event.png" style="border: 1px solid #CCCCCC" />

4. Configure the action with your Campfire account name, authentication token and room. 

   <img alt="Configure action" src="./_img/campfire/configure-action.png" style="border: 1px solid #CCCCCC" />

5. Test the service hook subscription and finish the wizard. 
   
   <img alt="Test it" src="./_img/campfire/test.png" style="border: 1px solid #CCCCCC" />

    Now the messages are set up. Go to Campfire and see the messages. 

    <img alt="Results" src="./_img/campfire/results.png" style="border: 1px solid #CCCCCC" />

## Pricing
Visual Studio Team Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTON class="m-qanda" -->

####Q: Can I programmatically create subscriptions?

A: Yes, see details [here](http://www.visualstudio.com/integrate/get-started/get-started-service-hooks-creating-and-managing-vsi).

####Q: Where can I get more information about Campfire?

A: At [campfirenow.com](https://campfirenow.com/).

<!-- ENDSECTION -->