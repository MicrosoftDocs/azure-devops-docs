---
ms.prod: vs-devops-alm
ms.technology: collaborate
title: Campfire with Visual Studio Team Services
description: Use Campfire with your Visual Studio Team Services account
ms.assetid: e8eacf20-c396-4b46-8673-a9f139643968
ms.manager: douge
ms.author: elbatk
ms.date: 02/14/2017 
ms.topic: get-started-article
---

# Team Services notifications on Campfire

Post messages to a room in Campfire in response to events from Visual Studio Team Services.
For example, you can post a message when a work item is created or changed, or a build occurs.

## Get a Campfire authorization token

1. If you don't have a Campfire account, get one [here](https://campfirenow.com/signup), and create a room.

2. Copy the token from your Campfire profile page. 

   <img alt="Campfire" src="./_img/campfire/campfire-my-info.png" style="border: 1px solid #CCCCCC" />

## Post messages to a room

1. On the team project page in the service hooks tab, run the subscription wizard.

   <img alt="Add service hook" src="../marketplace/integrate/service-hooks/services/_img/add-service-hook.png" style="border: 1px solid #CCCCCC" />

3. Configure the Visual Studio Team Services event that will post a message in a Campfire room.

   <img alt="Configure event" src="./_img/campfire/configure-event.png" style="border: 1px solid #CCCCCC" />

4. Configure the action with your Campfire account name, authentication token and room. 

   <img alt="Configure action" src="./_img/campfire/configure-action.png" style="border: 1px solid #CCCCCC" />

5. Test the service hook subscription and finish the wizard. 
   
   <img alt="Test it" src="./_img/campfire/test.png" style="border: 1px solid #CCCCCC" />

    Now the messages are set up. Go to Campfire and see the messages. 

    <img alt="Results" src="./_img/campfire/results.png" style="border: 1px solid #CCCCCC" />

## Q & A

<!-- BEGINSECTON class="m-qanda" -->

####Q: Can I programmatically create subscriptions?

A: Yes, see details [here](https://www.visualstudio.com/docs/integrate/get-started/service-hooks/create-subscription).

####Q: Where can I get more information about Campfire?

A: At [campfirenow.com](https://campfirenow.com/).

<!-- ENDSECTION -->