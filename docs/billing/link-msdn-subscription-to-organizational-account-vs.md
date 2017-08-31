---
title: Add work or school account to MSDN subscription | VSTS
description: Link work or school account to Visual Studio with MSDN subscriptions for use with VSTS
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vsts-sub-billing
ms.service: vsts-admin
ms.assetid: 185741f9-5305-4fcd-8be9-5e77c413b38a
ms.manager: douge
ms.author: estfan
ms.date: 11/29/2016
---

# Add work or school accounts to Visual Studio with MSDN subscriptions

**VSTS**

If you access your Visual Studio Team Services (VSTS) or Microsoft Azure account with a 
work or school account, but access your Visual Studio subscriptions with a different identity (such as your personal 
Microsoft account), you can link your work or school account to your Visual Studio subscription.

You need an [eligible Visual Studio subscription](../accounts/faq-add-delete-users.md#EligibleMSDNSubscriptions) that 
includes VSTS as a benefit so that other services (VSTS and Azure) can recognize you.

The Visual Studio subscriptions portal (```https://my.visualstudio.com```) requires you to sign-in with the email 
address that was used to access your subscription on the legacy MSDN portal, or the email address that was assigned 
to you by your company’s Visual Studio subscriptions administrator after October 2016. This email address can be either 
your personal Microsoft account or a "work or school account" managed by your organization with Azure Active Directory.

If your Visual Studio subscription is accessed using your Microsoft account, and you’re accessing other services (Visual Studio Team Services or Microsoft Azure) using your work or school account, you can link your personal account to your work or school account in order for the services to recognize you as a Visual Studio subscriber.

To set up the linking between your Microsoft account to your work or school account, sign in to the Visual Studio subscriptions portal (```https://my.visualstudio.com```) with your Microsoft account, and follow the steps below:


<a name="my-visualstudio-com"></a>

0.	Sign in with your Microsoft account to the 
[Visual Studio subscriptions portal (https://my.visualstudio.com)](https://my.visualstudio.com).

	> If you're asked to choose "personal account" 
	> or "work or school account", choose "personal account" (your Microsoft account). 
	>
	> Sometimes you need to choose because your Microsoft account and your work or school 
	> account share the same email address.  Although both identities use the same email address, 
	> they're still separate identities with different profiles, security settings, and permissions.

0.	Go to **Subscriptions** tab.

	![Choose Subscriptions](_img/link-msdn-subscription/choose-subscriptions-my-visual-studio-com-portal.png)

0.	Under **Related Links**, go to **Add alternate account**.

	![Under Related Links, go to Add alternate account](_img/link-msdn-subscription/add-alternate-account-my-visual-studio-com-portal.png)

0.	Enter your work or school account and choose **Add**.

	![Enter your work or school account](_img/link-msdn-subscription/enter-alternate-account-my-visual-studio-com-portal.png)

0.	Use your work or school account to sign in to your VSTS account. 
There may be a slight delay for the information to propagate, so check again 15 minutes later.   (```https://{youraccount}.visualstudio.com```).


##  Q&A

####Q:  Why can't I add my work or school account to my Visual Studio with MSDN subscription?

A:  This feature is only available for Visual Studio subscribers accessing their subscriptions using their personal Microsoft account. If your subscription is already assigned to your work or school account, you should use the same credentials to access other services (such as VSTS and Azure). 

You must also use your Microsoft account, not your work or school account, to sign in to the 
[Visual Studio subscriptions portal (https://my.visualstudio.com)](https://my.visualstudio.com).

####Q:  Can I add more than one work or school account to my subscription?

A:  No, you can add only one work or school account.

<a name="unconfirmed-subscription"></a>
####Q:  Why doesn't VSTS recognize my subscription?

A:	This might happen for different reasons: 

*	You must have an active, valid, and 
[eligible Visual Studio subscription](../accounts/faq-add-delete-users.md#EligibleMSDNSubscriptions) 
that includes VSTS as a benefit.

*	If your Visual Studio subscription is valid and eligible, 
make sure you access the Visual Studio subscriptions portal (```https://my.visualstudio.com```) 
before you sign in to VSTS. 

*	VSTS should automatically recognize your subscription when you sign in. 
If not, try having the VSTS account owner set 
[your access level to "Visual Studio/MSDN Subscriber" in the VSTS account](../accounts/add-account-users-assign-access-levels.md). 

If VSTS still doesn't recognize your subscription, try these other 
[troubleshooting tips](http://blogs.msdn.com/b/visualstudioalm/archive/2014/03/19/visual-studio-online-best-practices-troubleshooting-issues-with-the-quot-eligible-msdn-subscriber-license-type.aspx).

####Q:  Why can't I sign in with my work or school account after adding it to my subscription or getting invited to VSTS?

A:  Check with the VSTS account owner that they've 
[set up Azure Active Directory (Azure AD) access](../accounts/access-with-azure-ad.md) 
between the VSTS account and your organization's 
directory that manages your work or school account.
