---
title: Add work or school account to MSDN subscription 
description: Link work or school account to Visual Studio with MSDN subscriptions for use with Visual Studio Team Services
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.manager: douge
ms.author: estfan
ms.date: 11/29/2016
---

#   Add work or school accounts to Visual Studio with MSDN subscriptions

**VSTS**

The Visual Studio subscriptions portal (```https://my.visualstudio.com```) requires you to use 
the email address that you previously used to activate your subscription on the MSDN portal, or you can 
use the email address that was assigned to your subscription (for new subscriptions). 
This email address can be either your personal Microsoft account 
or a "work or school account" managed by your organization with Azure Active Directory.

If your subscription includes Visual Studio Team Services or Microsoft Azure as benefits, 
you can add your work or school account to your subscription so that you can use that account with your benefits, 
**but only for subscriptions that you activated with your Microsoft account**. 
This lets you sign in to your subscription with your Microsoft account, 
but access Team Services, Azure, or Visual Studio with benefits assigned to your work or school account.

> Do you have the same email address for your Microsoft account and your work or school account?
>
> You must still add that email address to your subscription 
> so you can use your work or school account with your benefits. 

Use your Microsoft account to sign in to the Visual Studio subscriptions portal (```https://my.visualstudio.com```), 
and follow the steps below:

<a name="my-visualstudio-com"></a>

0.	Sign in with your Microsoft account to the 
[Visual Studio subscriptions portal (https://my.visualstudio.com)](https://my.visualstudio.com).

	> If you're asked to choose "personal account" 
	> or "work or school account", choose "personal account" (your Microsoft account). 
	>
	> Sometimes you need to choose because your Microsoft account and your work or school 
	> account share the same email address.  Although both identities use the same email address, 
	> they're still separate identities with different profiles, security settings, and permissions.

0.	Go to **Subscriptions**.

	![Choose Subscriptions](_img/link-msdn-subscription/choose-subscriptions-my-visual-studio-com-portal.png)

0.	Under **Related Links**, go to **Add alternate account**.

	> Why don't I see **Related Links** or **Add alternate account**? 
	>  * Your subscription must include Team Services or Azure as benefits.
	>  * You're signed in with your work or school account, 
	>  and your subscription is already associated with that account.  To
	>  add a work or school account, you must sign in with your Microsoft account.  Please 
	>  follow these steps: 
	>    1. Close all browsers.
	>    2. Open a private or incognito browsing session.
	>    3. Sign in to the Visual Studio subscriptions portal with your Microsoft account.  If 
	>    you're asked to choose "personal account" or "work or school account", choose "personal account".

	![Under Related Links, go to Add alternate account](_img/link-msdn-subscription/add-alternate-account-my-visual-studio-com-portal.png)

0.	Enter your work or school account and choose **Add**.

	![Enter your work or school account](_img/link-msdn-subscription/enter-alternate-account-my-visual-studio-com-portal.png)

0.	Use your work or school account to sign in to your Team Services 
account (```https://{youraccount}.visualstudio.com```).


##  Q&A

####Q:  Why can't I add my work or school account to my Visual Studio with MSDN subscription?

A:  Your Visual Studio with MSDN subscription must have as a benefit either Visual Studio Team Services or 
Microsoft Azure.  The Visual Studio with MSDN subscription must have been activated with your Microsoft account. 

You must also use your Microsoft account, not your work or school account, to sign in to the 
[Visual Studio subscriptions portal (https://my.visualstudio.com)](https://my.visualstudio.com).

####Q:  Can I add more than one work or school account to my subscription?

A:  No, you can add only one work or school account.

<a name="unconfirmed-subscription"></a>
####Q:  Why doesn't Team Services recognize my subscription?

A:	This might happen for different reasons: 

*	You must have an active, valid, and 
eligible Visual Studio subscription
that includes Team Services as a benefit.
[//]: # (TODO find new valid target for this old link: [eligible Visual Studio subscription](add-account-users-assign-access-levels-team-services.md#EligibleMSDNSubscriptions) 

*	If your Visual Studio subscription is valid and eligible, 
[make sure to activate your subscription](https://support.microsoft.com/en-us/kb/3011409) 
before you sign in to Team Services. 

*	Team Services should automatically recognize your subscription when you sign in. 
If not, try having the Team Services account owner set 
your access level to "Visual Studio/MSDN Subscriber" in the Team Services account.
[//]: # (TODO find new valid target for this old link: [your access level to "Visual Studio/MSDN Subscriber" in the Team Services account](add-account-users-assign-access-levels-team-services.md)

If Team Services still doesn't recognize your subscription, try these other 
[troubleshooting tips](http://blogs.msdn.com/b/visualstudioalm/archive/2014/03/19/visual-studio-online-best-practices-troubleshooting-issues-with-the-quot-eligible-msdn-subscriber-license-type.aspx).

####Q:  Why can't I sign in with my work or school account after adding it to my subscription or getting invited to Visual Studio Team Services?

A:  Check with the Team Services account owner that they've 
set up Azure Active Directory (Azure AD) access 
between the Team Services account and your organization's 
directory that manages your work or school account.
[//]: # (TODO find new valid target for this old link: [set up Azure Active Directory (Azure AD) access](manage-organization-access-for-your-account-vs.md)