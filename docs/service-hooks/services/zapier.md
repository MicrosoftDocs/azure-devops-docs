---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Zapier with Azure DevOps Services
description: Use Zapier with your Azure DevOps Services organization
ms.assetid: 93b2aed5-2f28-41a3-b1b7-2d88b4feec09
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Zapier with Azure DevOps Services

Use Zapier to connect Azure DevOps Services to other apps for development,
operations, customer connection, sales, marketing and more.
Once you have your Zapier account, just create a zap to send messages
between Azure DevOps Services and those other apps.

## Create a note when code is pushed

Create a zap that responds to an [event](../events.md)
from Visual Studio and triggers an action in another app.
In this case, we create a note in OneNote when code is pushed
to a Git repository in our Azure DevOps Services organization to show how that works.

1. If you don't already have one, [sign up](https://zapier.com/zapbook/visual-studio-online/) for a Zapier account.

2. Create a zap.

   <img alt="Zapier dashboard, make a new zap button" src="./_img/zapier/make-zap.png" style="border: 1px solid #CCCCCC" />

3. Pick the event in Visual Studio that you want to respond to, and then choose the app that you want to trigger and the action you want that app to take.

   <img alt="Choose a trigger and action" src="./_img/zapier/triggered-action.png" style="border: 1px solid #CCCCCC" />

4. Connect to your organization.

   <img alt="Connect and test your organization" src="./_img/zapier/select-visual-studio-online.png" style="border: 1px solid #CCCCCC" />

5. Connect to the app that will respond to the event.

   <img alt="Connect to the action app account" src="./_img/zapier/connect-one-note.png" style="border: 1px solid #CCCCCC" />

6. Authorize Zapier to access your account's resources.

   <img alt="Allow access to the action app account" src="./_img/zapier/authorize.png" style="border: 1px solid #CCCCCC" />

7. You can filter the events coming from Azure DevOps Services for this zap. For example, this zap will only act on code pushes in the master branch of the default repository for this project. Pushes in other projects, other repositories, or other branches of this repository will be ignored by this zap.

   <img alt="Select the branch to trigger on for new code pushes" src="./_img/zapier/filter-triggers.png" style="border: 1px solid #CCCCCC" />

8. Configure the response to the event in the other app.

   <img alt="Configure the action app message" src="./_img/zapier/configure-response.png" style="border: 1px solid #CCCCCC" />

9. Verify that the zap works.

   <img alt="Verify that the zap works" src="./_img/zapier/test.png" style="border: 1px solid #CCCCCC" />

10. Name the zap and turn it on.

   <img alt="Name the zap and turn it on" src="./_img/zapier/turn-zap-on.png" style="border: 1px solid #CCCCCC" />

   Now the zap is set up, you'll get new notes in OneNote each time code is pushed in Azure DevOps Services.

   <img alt="Now the zap is set up" src="./_img/zapier/code-pushed-zap.png" style="border: 1px solid #CCCCCC" />

## Pricing
Azure DevOps Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Can Azure DevOps Services take actions based on events from other apps, too.

A: Yes, you can create a zap to post a message to a team room, queue a build, or add a link to a work item in Azure DevOps Services. Just choose Azure DevOps Services as the app that's taking the action instead of raising the event. 

<img alt="Choose Azure DevOps Services as the action app" src="./_img/zapier/to-vso.png" style="border: 1px solid #CCCCCC" />

#### Q: Why can't I create a zap?

A: If you are not able to create a zap, make sure that:

- Service hooks are enabled on the organization you are trying to create the zap in.
- You are a project administrator (or have the appropriate service hook management permissions) on the project.

#### Q: Why can't I connect to the Azure DevOps Services service?

A: Verify that you are a project administrator for the Azure DevOps Services project you are attempting to create zaps against.

#### Q: Can I programmatically create subscriptions?

A: Yes, see details [here](../create-subscription.md).

#### Q: Where can I get more information about Zapier?

A: At [Zapier for Azure DevOps Services](https://zapier.com/zapbook/visual-studio-online/).

<!-- ENDSECTION -->