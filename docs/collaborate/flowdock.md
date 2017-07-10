---
ms.prod: vs-devops-alm
ms.technology: collaborate
title: Flowdock with Visual Studio Team Services
description: Use Flowdock with your Visual Studio Team Services account
ms.assetid: e7dbe2dd-2e40-4c2a-976f-9e4253b28e3e
ms.manager: douge
ms.author: elbatk
ms.date: 02/14/2017 
ms.topic: get-started-article
---

# Team Services notifications on Flowdock

Visual Studio Team Services can post messages to your flow in Flowdock
so everyone will know when code has been pushed or checked in, 
a build has finished, or a work item has been created or updated.

## Set up a flow

1. If you don't have a Flowdock account, get one [here](https://flowdock.com/signup).

1. In Flowdock, add a flow.

   <img alt="Flowdock page, add icon" src="./_img/flowdock/add-flow.png" style="border: 1px solid #CCCCCC" />

1. Create the flow. 

   <img alt="Create a new flow" src="./_img/flowdock/create-flow.png" style="border: 1px solid #CCCCCC" />

1. Configure the flow.

   <img alt="Configure the flow" src="./_img/flowdock/configure-flow.png" style="border: 1px solid #CCCCCC" />

1. Go to the flow's administration page.

   <img alt="Administer the flow's inbox sources" src="./_img/flowdock/inbox-admin.png" style="border: 1px solid #CCCCCC" />

1. Get the API token.

   <img alt="Copy the API token" src="./_img/flowdock/manage-inbox-sources.png" style="border: 1px solid #CCCCCC" />

## Use a service hook to push messages

1. In Visual Studio Team Services, open your team project's administration page.

1. Add a service hook.

   <img alt="Add service hook" src="./_img/flowdock/add-service-hook.png" style="border: 1px solid #CCCCCC" />

1. Choose Flowdock

   <img alt="Flowdock selected in the service dialog box" src="./_img/flowdock/flowdock-service.png" style="border: 1px solid #CCCCCC" />

1. Configure the Visual Studio Team Services event that will push a message to Flowdock. 

   <img alt="Configure event" src="./_img/flowdock/configure-event.png" style="border: 1px solid #CCCCCC" />

1. Tell Flowdock what action to take.

   <img alt="Configure action" src="./_img/flowdock/configure-action.png" style="border: 1px solid #CCCCCC" />

1. Test the service hook subscription and finish the wizard.

   <img alt="Test it" src="./_img/flowdock/test.png" style="border: 1px solid #CCCCCC" />

Now messages will be posted to your flow in Flowdock.

<img alt="Messages appear in flow" src="./_img/flowdock/chat-messages.png" style="border: 1px solid #CCCCCC" />

## Q & A

<!-- BEGINSECTOIN class="m-qanda" -->

####Q: Can I programmatically create subscriptions?

A: Yes, see details [here](https://www.visualstudio.com/docs/integrate/get-started/service-hooks/create-subscription).

####Q: Where can I get more information about Flowdock?

A: At [flowdock.com](https://www.flowdock.com/).

<!-- ENDSECTION -->