---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: HipChat with Azure DevOps Services
description: Use HipChat with your Azure DevOps Services organization
ms.assetid: 43ef12ac-4541-436c-b6df-343e6e321cf9
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# HipChat with Azure DevOps Services

Post messages to a room in HipChat in response to events from Azure DevOps Services.
For example, when code is pushed, or a build occurs.

Get a HipChat authorization token

1. If you don't have a HipChat account, get one [here](https://hipchat.com/).

2. In HipChat, get a room token. 

   <img alt="Create the token" src="./_img/hipchat/create-hipchat-token.png" style="border: 1px solid #CCCCCC" />

3. Copy the token.

   <img alt="Copy the token" src="./_img/hipchat/hipchat-token.png" style="border: 1px solid #CCCCCC" />

## Post a message to a room

0. Go to your Azure DevOps Services project service hooks page: `https://dev.azure.com/{orgName}/{project_name}/_apps/hub/ms.vss-servicehooks-web.manageServiceHooks-project`

	![Project administration page](./_img/add-service-hook.png)

	Click **Create Subscription**.

3. Choose HipChat.

   <img alt="Select service dialog, HipChat selected" src="./_img/hipchat/hipchat-service.png" style="border: 1px solid #CCCCCC" />

3. Configure the Azure DevOps Services event that you want to post a message in HipChat.

   <img alt="Configure the event" src="./_img/hipchat/configure-event.png" style="border: 1px solid #CCCCCC" />

4. Tell HipChat what to do when the event occurs.

   <img alt="Configure the action" src="./_img/hipchat/configure-action.png" style="border: 1px solid #CCCCCC" />

5. Test the service hook subscription and finish the wizard.

   <img alt="Test it" src="./_img/hipchat/test.png" style="border: 1px solid #CCCCCC" />

Now the messages are setup. Go to HipChat and see the messages appear. 

<img alt="HipChat room" src="./_img/hipchat/hipchat-room.png" style="border: 1px solid #CCCCCC" />

## Pricing
Azure DevOps Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

####Q: Can I programmatically create subscriptions?

A: Yes, see details [here](../create-subscription.md).

####Q: Where can I get more information about HipChat?

A: At [hipchat.com](https://www.hipchat.com/).

<!-- ENDSECTION -->




