---
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
title: UserVoice with Visual Studio Team Services
description: Use UserVoice with your Visual Studio Team Services account
ms.assetid: c0f08f71-39cd-48ac-aff0-0618c57229c7
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
ms.topic: get-started-article
---

# UserVoice

Use User Voice to get feedback from your customers and push that feedback directly into your backlog in Visual Studio Team Services.
When your team updates the item in the backlog, the User Voice item is updated, too. 

Link your Visual Studio Team Services account to your UserVoice account.

1. If you don't have a UserVoice account, get one [here](https://www.uservoice.com/for/visual-studio-online/).

2. In UserVoice, go to the integrations page.

	<img alt="Uservoice settings menu, integrations" src="./_img/uservoice/uservoice-integrations-menu.png" style="border: 1px solid #CCCCCC" />

3. Set up a synced service.

	<img alt="Uservoice settings dialog box, integrations tab, sync services link" src="./_img/uservoice/uservoice-sync-services.png" style="border: 1px solid #CCCCCC" />

4. Sync to Visual Studio Team Services.

	<img alt="Uservoice settings dialog box, integrations tab, Visual Studio Team Services link" src="./_img/uservoice/sync-visual-studio-online.png" style="border: 1px solid #CCCCCC" />

5. Link your Visual Studio Team Services account to your UserVoice account. 

	<img alt="Uservoice settings dialog box, integrations tab, link account link" src="./_img/uservoice/uservoice-link-account.png" style="border: 1px solid #CCCCCC" />

	
6. Authorize UserVoice to access your Visual Studio Team Services account. 

	<img alt="Visual Studio Team Services authorization dialog box" src="./_img/uservoice/authorize.png" style="border: 1px solid #CCCCCC" />

## Add an item to your backlog from a UserVoice idea

You can create a work item in Visual Studio Team Services form an idea in UserVoice.
In this case, we're creating a product backlog item. You might want to create a bug in some cases.
Or, if your team uses user stories instead of product backlog items, you can create those.

1. Open an idea in the admin area of UserVoice and then create a work item in Visual Studio.

	<img alt="Uservoice idea, settings menu, create work item" src="./_img/uservoice/uservoice-idea.png" style="border: 1px solid #CCCCCC" />

2. Create the backlog item in Visual Studio Team Services.
The description you type here will be the description of the item in Visual Studio Team Services.

	<img alt="Create work item dialog box in Uservoice" src="./_img/uservoice/uservoice-create-work-item.png" style="border: 1px solid #CCCCCC" />

3. Submit the idea. A link to the item in Visual Studio Team Services shows up on the UserVoice idea.

	<img alt="Uservoice idea with work item" src="./_img/uservoice/idea-with-work-item.png" style="border: 1px solid #CCCCCC" />

4. Follow that link to open the backlog item in Visual Studio Team Services.

	<img alt="Work item in Visual Studio Team Services" src="./_img/uservoice/work-item.png" style="border: 1px solid #CCCCCC" />

## Update a your backlog

When you update your backlog in Visual Studio Team Services, the UserVoice idea is updated, too.

1. Approve the backlog item.

	<img alt="Approved backlog item in Visual Studio Team Services" src="./_img/uservoice/approved-backlog-item.png" style="border: 1px solid #CCCCCC" />

2. Add a comment in the history control.

	<img alt="Work item history" src="./_img/uservoice/work-item-history.png" style="border: 1px solid #CCCCCC" />

3.In UserVoice, refresh the page and you'll see that the item was just updated
and that the comment added in the history control is displayed with the item in UserVoice.
Your customers can see that you're doing this work.

	<img alt="Updated work item in Uservoice idea" src="./_img/uservoice/updated-work-item.png" style="border: 1px solid #CCCCCC" />

## Add comments to items in Visual Studio Team Services from UserVoice

1. In UserVoice, add a note to the linked Visual Studio Team Services item.

	<img alt="Uservoice add note dialog box" src="./_img/uservoice/add-note.png" style="border: 1px solid #CCCCCC" />

2. In Visual Studio Team Services, refresh the work item to see the note in the discussion tab.

	<img alt="Work item discussion tab with note added" src="./_img/uservoice/work-item-discussion.png" style="border: 1px solid #CCCCCC" />

## Pricing
Visual Studio Team Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Can I programmatically create subscriptions?

A: Yes, see details [here](../create-subscription.md).

#### Q: Where can I get more information about UserVoice?

A: At UserVoice for [Visual Studio Team Services](https://www.uservoice.com/for/visual-studio-online/).

<!-- ENDSECTION -->