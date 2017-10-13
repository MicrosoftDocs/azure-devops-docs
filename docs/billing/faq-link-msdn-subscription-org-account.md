---
title: Troubleshooting linking work or school accounts to MSDN subscriptions
description: Troubleshooting linking work or school accounts to MSDN subscriptions
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: e018c9fc-dfda-488c-a43e-33af6a78932b
ms.manager: douge
ms.author: billchi
ms.date: 10/6/2017
---

# Troubleshooting linking work or school accounts to MSDN subscriptions

**VSTS**


####Q:  Why can't I add my work or school account to my Visual Studio with MSDN subscription?

A:  This feature is only available for Visual Studio subscribers accessing their subscriptions using their personal Microsoft account. If your subscription is already assigned to your work or school account, you should use the same credentials to access other services (such as VSTS and Azure). 

You must also use your Microsoft account, not your work or school account, to sign in to the 
[Visual Studio subscriptions portal (https://my.visualstudio.com)](https://my.visualstudio.com).

####Q:  Can I add more than one work or school account to my subscription?

A:  No, you can add only one work or school account.

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
