---
title: Buy access to TFS or Test hub | Team Foundation Server (TFS)
description: Get more access to Team Foundation Server (TFS) or the Test hub
ms.prod: vs-devops-alm
ms.technology: vs-devops-tfs
ms.assetid: B6BED64A-DA53-4AB0-B200-85F86A869D7B
ms.manager: douge
ms.author: estfan
ms.date: 10/21/2016
---

# Buy access to Team Foundation Server or TFS Test hub

**TFS 2015.2**

> **Required:** TFS 2015.2 or later to buy monthly access

For [TFS](https://www.visualstudio.com/tfs/) 
and [Visual Studio Team Services](https://www.visualstudio.com/team-services/), 
you usually pay per user so they can access your TFS or your Team Services account. 
Some users are free, like [Visual Studio subscribers](https://www.visualstudio.com/vs/pricing/), 
[stakeholders who can access limited features](../quickstart/get-started-stakeholder.md), 
and 5 users in each Team Services account. 
If you need to add more than these users, 
you can just pay monthly for these users in your Team Services account. 
This works for TFS too because each paid 
[Team Services user](https://www.visualstudio.com/team-services/pricing/) 
can also access your TFS. You don't have to use Team Services; 
you can just create a Team Services account to pay for more TFS users.

[Follow these steps to pay monthly for TFS users](#rent-cal).

For users who have TFS client access (CALs) or paid monthly access, 
you can get some additional features on a monthly basis, 
like [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) 
which provides access to the full test capabilities in the Test hub for TFS and Team Services.

[Follow these steps to pay monthly for TFS Test hub access](#test-hub).

To learn more about requirements to access TFS or the Test hub, 
see [Change access levels](../work/connect/change-access-levels.md). 
For more about TFS licensing, see the 
[Team Foundation Server pricing page](https://www.visualstudio.com/team-services/tfs-pricing).

<a id="rent-cal"></a>
## Buy monthly access to TFS

0.	[Sign up for a Team Services account](./team-services/sign-up-for-visual-studio-team-services.md), 
if you don't have one already.

0.	Based on the number of users who need TFS CALs, 
[pay for users who need Basic access](./team-services/buy-basic-access-add-team-services-users.md).

0.	If you haven't already, sign in to your Team Services account 
(```https://{youraccount}.visualstudio.com```). 

0. [Add your users who need Basic access](./team-services/add-account-users-assign-access-levels-team-services.md) 
to your Team Services account so that you can track these users more easily.

	Though these users will get invited to your Team Services account, 
	you're not required to use Team Services.

0.	As TFS administrator, 
now [add these same users to TFS](add-users.md#add-users-team-project), 
and [give them the necessary access](../work/connect/change-access-levels.md).

	**Note** TFS doesn't detect what happens in Team Services 
	so make sure to add these users to TFS and assign them the 
	access that they need.

	If you stop paying for these Team Services users, 
	your TFS administrator should remove those users from TFS.

<a id="test-hub"></a>
## Buy monthly access to the Test hub

0.	[Sign up for a Team Services account](./team-services/sign-up-for-visual-studio-team-services.md), 
if you don't have one already.

0.	Based on the number of users who need TFS CALs, 
[pay for users who need Basic access](./team-services/buy-basic-access-add-team-services-users.md).

0.	[Buy the Test Manager extension](../marketplace/get-vsts-extensions.md#install-extension) 
for users who need Test hub access.

	Test Manager is installed automatically in your Team Services account. 

0.	If you haven't already, sign in to your Team Services account 
(```https://{youraccount}.visualstudio.com```). 

0. [Add your users who need Basic access](./team-services/add-account-users-assign-access-levels-team-services.md) 
to your Team Services account and 
[assign them the Test Manager extension](../marketplace/get-vsts-extensions.md#assign-extension) 
so that you can track these users.

	Though these users will get invited to your Team Services account, 
	you're not required to use Team Services. 
	These users can now download and install the trial version 
	for Visual Studio Test Professional 2015 or later. 
	After they sign in to Visual Studio Test Professional, 
	this product will no longer be under trial.

	**Note** These users must sign in to Visual Studio Test Professional with 
	the same credentials that they used to join your Team Services account.

0.	As TFS administrator, [add these same users to TFS](add-users.md#add-users-team-project) 
if necessary. [Give them Advanced access](../work/connect/change-access-levels.md) 
so they can use the Test hub.

	**Note** TFS doesn't detect what happens in Team Services 
	so make sure these users get Advanced access in TFS.

	If you stop paying for these Team Services users, 
	your TFS administrator should remove those users from TFS.

## Q&A

<!-- BEGINSECTION class="m-qanda" -->

####Q: Why should I pay for Team Services users to access TFS or the Test hub?

A: You get many benefits, for example:

*	Team Services users give you the flexibility 
to access both TFS and Team Services.
*	You get a simpler way to manage users who need temporary access.
*	You get all the purchasing capabilities that Azure offers, 
like payment by credit card and more.

####Q:	Where can I learn more about TFS CALs and access levels for the Test hub?

A: See [Change access levels](../work/connect/change-access-levels.md).

####Q:	Where can I find more Team Services extensions and more info about the Visual Studio Marketplace?

A:	See [Visual Studio Team Services extensions](https://marketplace.visualstudio.com/vsts) 
and [Visual Studio Marketplace Overview](https://www.visualstudio.com/docs/marketplace/overview).

<!-- ENDSECTION --> 

