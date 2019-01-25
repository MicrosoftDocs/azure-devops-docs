---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Flowdock with Azure DevOps Services
description: Use Flowdock with your Azure DevOps Services organization
ms.assetid: 191c21d1-17d7-4d33-9a5f-231bc70edd0f
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Notifications and Flowdock

Azure DevOps Services can post messages to your flow in Flowdock
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

0. Go to your Azure DevOps Services project service hooks page: `https://dev.azure.com/{orgName}/{project_name}/_apps/hub/ms.vss-servicehooks-web.manageServiceHooks-project`

	![Project administration page](./_img/add-service-hook.png)

	Click **Create Subscription**.

1. Choose Flowdock

   <img alt="Flowdock selected in the service dialog box" src="./_img/flowdock/flowdock-service.png" style="border: 1px solid #CCCCCC" />

1. Configure the Azure DevOps Services event that will push a message to Flowdock. 

   <img alt="Configure event" src="./_img/flowdock/configure-event.png" style="border: 1px solid #CCCCCC" />

1. Tell Flowdock what action to take.

   <img alt="Configure action" src="./_img/flowdock/configure-action.png" style="border: 1px solid #CCCCCC" />

1. Test the service hook subscription and finish the wizard.

   <img alt="Test it" src="./_img/flowdock/test.png" style="border: 1px solid #CCCCCC" />

Now messages will be posted to your flow in Flowdock.

<img alt="Messages appear in flow" src="./_img/flowdock/chat-messages.png" style="border: 1px solid #CCCCCC" />

## Pricing
Azure DevOps Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

####Q: Can I programmatically create subscriptions?

A: Yes, see details [here](../create-subscription.md).

####Q: Where can I get more information about Flowdock?

A: At [flowdock.com](https://www.flowdock.com/).

<!-- ENDSECTION -->
