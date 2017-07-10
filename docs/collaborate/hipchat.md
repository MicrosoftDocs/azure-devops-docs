---
ms.prod: vs-devops-alm
ms.technology: collaborate
title: HipChat with Visual Studio Team Services
description: Use HipChat with your Visual Studio Team Services account
ms.assetid: c2d8bdb4-9b30-4d39-b8ad-2a1afc704738
ms.manager: douge
ms.author: elbatk
ms.date: 02/14/2017 
ms.topic: get-started-article
---

# Team Services notifications on HipChat

Post messages to a room in HipChat in response to events from Visual Studio Team Services.
For example, when code is pushed, or a build occurs.

Get a HipChat authorization token

1. If you don't have a HipChat account, get one [here](https://hipchat.com/).

2. In HipChat, get a room token. 

   <img alt="Create the token" src="./_img/hipchat/create-hipchat-token.png" style="border: 1px solid #CCCCCC" />

3. Copy the token.

   <img alt="Copy the token" src="./_img/hipchat/hipchat-token.png" style="border: 1px solid #CCCCCC" />

## Post a message to a room

1. Open the admin page for the team project in Visual Studio Team Services.

2. On the Service Hooks tab, create a subscription.

   <img alt="Create a service hook" src="./_img/hipchat/create-service-hook.png" style="border: 1px solid #CCCCCC" />

3. Choose HipChat.

   <img alt="Select service dialog, HipChat selected" src="./_img/hipchat/hipchat-service.png" style="border: 1px solid #CCCCCC" />

3. Configure the Visual Studio Team Services event that you want to post a message in HipChat.

   <img alt="Configure the event" src="./_img/hipchat/configure-event.png" style="border: 1px solid #CCCCCC" />

4. Tell HipChat what to do when the event occurs.

   <img alt="Configure the action" src="./_img/hipchat/configure-action.png" style="border: 1px solid #CCCCCC" />

5. Test the service hook subscription and finish the wizard.

   <img alt="Test it" src="./_img/hipchat/test.png" style="border: 1px solid #CCCCCC" />

Now the messages are setup. Go to HipChat and see the messages appear. 

<img alt="HipChat room" src="./_img/hipchat/hipchat-room.png" style="border: 1px solid #CCCCCC" />

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

####Q: Can I programmatically create subscriptions?

A: Yes, see details [here](https://www.visualstudio.com/en-us/docs/integrate/get-started/service-hooks/create-subscription).

####Q: Where can I get more information about HipChat?

A: At [hipchat.com](https://www.hipchat.com/).

<!-- ENDSECTION -->




