---
title: Disconnect your VSTS account from your Azure AD
description: Azure Active Directory (Azure AD) - Control access to VSTS (VSTS, Visual Studio Online, VSO)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 3eb744cf-854d-4cbd-b725-c2e070bd922b
ms.manager: douge
ms.author: billchi
ms.date: 11/30/2017
---

#  Disconnect your VSTS account from your directory

**VSTS**

<a name="DisconnectDirectory"></a>

To stop using your organization's directory and return to signing in with Microsoft accounts, 
you can disconnect your VSTS account from your directory. 

For more information, see the [conceptual overview](access-with-azure-ad.md) for using Azure AD with VSTS.


You'll need:

*	[Microsoft accounts](https://signup.live.com/) 
for all users in your VSTS account, 
including yourself as VSTS account owner

*	[VSTS account ownership](faq-change-app-access.md#find-owner) for your Microsoft account 

*	Global administrator permissions in your Azure AD 
for your Microsoft account as the VSTS account owner. You'll need both 
because Azure AD users can't disconnect VSTS accounts from directories. 
You can add Microsoft accounts to a directory as external users. 
Learn about [managing Azure administrators](https://azure.microsoft.com/en-us/documentation/articles/active-directory-assign-admin-roles/).

 > [!NOTE]
 > VSTS will support disconnecting your VSTS account from an Azure directory in the Azure portal in a few weeks.  In the meantime, 
 > you can open a [support case](https://go.microsoft.com/fwlink/?linkid=864081) for someone to walk you through the process.



