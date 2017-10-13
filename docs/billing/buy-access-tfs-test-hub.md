---
title: Buy TFS CALs or access to the TFS Test hub | Team Foundation Server (TFS)
description: Buy Team Foundation Server (TFS) client access licenses (CALs) or access to the TFS Test hub 
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: B6BED64A-DA53-4AB0-B200-85F86A869D7B
ms.manager: douge
ms.author: billchi
ms.date: 10/6/2017
---

# Buy access to Team Foundation Server or the TFS Test hub

**TFS 2015.2**

> **Required:** TFS 2015.2 or later to buy monthly access


For [TFS](https://www.visualstudio.com/tfs/) 
and [VSTS](https://www.visualstudio.com/team-services/), 
you usually pay per user so they can access your TFS or your VSTS account. 
Some users are free, like [Visual Studio subscribers](https://www.visualstudio.com/vs/pricing/), 
[stakeholders who can access limited features](../security/get-started-stakeholder.md), 
and 5 users in each VSTS account. 
If you need to add more than these users, 
you can just pay monthly for these users in your VSTS account. 
Paying for VSTS users works for TFS too because each paid 
[VSTS user](https://www.visualstudio.com/team-services/pricing/) 
can also access your TFS. You don't have to use VSTS; 
you can just create a VSTS account to pay for more TFS users.

[Follow these steps to pay monthly for TFS users](#rent-cal).

For users who have TFS client access (CALs) or paid monthly access, 
you can get some additional features on a monthly basis, 
like [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) 
which provides access to the full test capabilities in the Test hub for TFS and VSTS.

[Follow these steps to pay monthly for TFS Test hub access](#test-hub).

To learn more about requirements to access TFS or the Test hub, 
see [Change access levels](../security/change-access-levels.md). 
For more about TFS licensing, see the 
[Team Foundation Server pricing page](https://www.visualstudio.com/team-services/tfs-pricing).

<a id="rent-cal"></a>
## Buy monthly access to TFS

0.	[Sign up for a VSTS account](../accounts/create-account-msa-or-work-student.md), 
if you don't have one already.

0.	Based on the number of users who need TFS CALs, 
[pay for users who need Basic access](buy-basic-access-add-users.md).

0.	If you haven't already, sign in to your VSTS account 
(```https://{youraccount}.visualstudio.com```). 

0. [Add your users who need Basic access](../accounts/add-account-users-assign-access-levels.md) 
to your VSTS account so that you can track these users more easily.

	Though these users will get invited to your VSTS account, 
	you're not required to use VSTS.

0.	As TFS administrator, 
now [add these same users to TFS](../security/add-users-team-project.md#add-users-team-project), 
and [give them the necessary access](../security/change-access-levels.md).

	**Note** TFS doesn't detect what happens in VSTS 
	so make sure to add these users to TFS and assign them the 
	access that they need.

	If you stop paying for these VSTS users, 
	your TFS administrator should remove those users from TFS.

<a id="test-hub"></a>
## Buy monthly access to the Test hub

0.	[Sign up for a VSTS account](../accounts/create-account-msa-or-work-student.md), 
if you don't have one already.

0.	Based on the number of users who need TFS CALs, 
[pay for users who need Basic access](buy-basic-access-add-users.md).

0.	[Buy the Test Manager extension](../marketplace/install-vsts-extension.md#install-extension) 
for users who need Test hub access.

	Test Manager is installed automatically in your VSTS account. 

0.	If you haven't already, sign in to your VSTS account 
(```https://{youraccount}.visualstudio.com```). 

0. [Add your users who need Basic access](../accounts/add-account-users-assign-access-levels.md) 
to your VSTS account and 
[assign them the Test Manager extension](../marketplace/assign-paid-extensions.md) 
so that you can track these users.

	Though these users will get invited to your VSTS account, 
	you're not required to use VSTS. 
	These users can now download and install the trial version 
	for Visual Studio Test Professional 2015 or later. 
	After they sign in to Visual Studio Test Professional, 
	this product will no longer be under trial.

	**Note** These users must sign in to Visual Studio Test Professional with 
	the same credentials that they used to join your VSTS account.

0.	As TFS administrator, [add these same users to TFS](../security/add-users-team-project.md#add-users-team-project) 
if necessary. [Give them Advanced access](../security/change-access-levels.md) 
so they can use the Test hub.

	**Note** TFS doesn't detect what happens in VSTS 
	so make sure these users get Advanced access in TFS.

	If you stop paying for these VSTS users, 
	your TFS administrator should remove those users from TFS.

