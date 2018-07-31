---
title: Set up Visual Studio with VSTS
description: Share code with Git and manage work with Agile tools in Visual Studio Team Services (VSTS) for continuous integration and continuous delivery
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: abf70640-8fb2-4def-9237-21276a39b5ad
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/17/2017
monikerRange: 'vsts'
---
# Set up Visual Studio with VSTS

**VSTS**

When you first launch [Visual Studio 2015](https://visualstudio.microsoft.com/products/vs-2015-product-editions), 
you can sign in and connect to [VSTS](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs).

If you have already gone through Visual Studio sign in, or you are using Visual Studio 2017, then [learn how](../../repos/git/gitquickstart.md) to connect to 
your VSTS from the Team Explorer window.

Once connected, you can store or share code in free, unlimited, private, 
cloud-based Git repositories or Team Foundation version control. 
Organize and manage your work using Agile tools for DevOps, 
continuous integration, and continuous delivery so your team can build often, 
test early, and ship faster.

> To set up Visual Studio without VSTS, 
> learn how to [get started here](https://msdn.microsoft.com/library/e2h7fzkw.aspx). 
> To host your own server, 
> learn how to [install and set up Team Foundation Server](/tfs/server/install/get-started).

VSTS is free for 
[up to 5 users with access to Basic features](https://visualstudio.microsoft.com/products/visual-studio-team-services-feature-matrix-vs) 
and for unlimited [Visual Studio subscribers](https://visualstudio.microsoft.com/products/how-to-buy-vs) and 
[Stakeholders who can access limited features](https://visualstudio.microsoft.com/products/visual-studio-team-services-feature-matrix-vs).
Learn [what else you get with VSTS](https://visualstudio.microsoft.com/pricing/visual-studio-team-services-pricing-vs). 
If you want, you can also use VSTS with any IDE or code editor, like:

*	[Eclipse, Android Studio, or IntelliJ](/vsts/java)
*	Xcode (see [Git](../../repos/git/share-your-code-in-git-xcode.md) or [TFVC](../../repos/tfvc/share-your-code-in-tfvc-xcode.md))
*	[Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol)

##	How do I set up Visual Studio 2015 for VSTS during sign in?

0.  [Download and install Visual Studio](https://go.microsoft.com/fwlink/?LinkId=309297&clcid=0x409&slcid=0x409), 
if you don't have the version you want already. 
[Which versions can I use with VSTS?](faq-set-up-vs.md#vs-versions)

	If you have a Visual Studio subscription that 
	includes the Visual Studio IDE, get the version 
	that's available with your subscription.

0.  Start Visual Studio, 
then sign in to create your profile. 

	This profile saves your settings and roams with you 
	when you sign in to Visual Studio on any computer. 
	[Why else should I sign in?](faq-set-up-vs.md#why-sign-in)
	If you're a Visual Studio subscriber, 
	use the sign-in address for your subscription. 

	![Sign in to Visual Studio](_img/set-up-vs/sign-in-visual-studio.png)

	[Can't sign in?](faq-set-up-vs.md#cannot-sign-in)

0.	Enter your sign-in address, 
then enter your password.

0.	Add your Visual Studio profile details. You only have to do this once. 

	![Create your profile](_img/set-up-vs/profile-organization-details.png)

0.	Give your VSTS organization a name, 
and confirm its location. 

	![Name your organization, confirm its location](_img/set-up-vs/profile-organization-details2.png)

	[How can I create a VSTS organization later](faq-set-up-vs.md#WhatIsVSO) or [change its location?](faq-set-up-vs.md#change-location)

0.	Create your first team project to store your code, 
work items, backlog, builds, tests, and other assets. 
Name your team project, select a process to organize your work, 
and choose the version control to manage your code.

	![Create your team project](_img/set-up-vs/create-team-project-vs.png)

	Not sure which to choose? Learn which 
	[process](../../work/work-items/guidance/choose-process.md) 
	and version control ([Git](../../repos/git/overview.md) 
	or [Team Foundation Version Control](../../repos/tfvc/overview.md))
	work best for you.

0.	If you're a new Visual Studio user, you can change your settings here, 
or change them later in Visual Studio options.

	![Change settings, if you want](_img/set-up-vs/hellonewprofile.png)

	These changes are saved with your profile, 
	and your settings roam with you wherever you sign in. 

0.	To view your new VSTS organization, 
	sign in to ```https://{yourorganization}.visualstudio.com```. 

    [Having browser problems with VSTS?](faq-set-up-vs.md#browser-problems)

####	Next

*	[Add users to your VSTS organization](add-organization-users-from-user-hub.md)

*	Add code to [Git](../../repos/git/share-your-code-in-git-vs.md) 
or [Team Foundation](../../repos/tfvc/share-your-code-in-tfvc-vs.md) version control

*	[Create your backlog](../../work/backlogs/create-your-backlog.md) to organize your work, 
	[manage your process](../../organizations/settings/work/manage-process.md), 
	or [customize your process](../../organizations/settings/work/customize-process.md)

