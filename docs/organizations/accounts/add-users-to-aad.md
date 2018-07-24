---
title: Add VSTS organization users to your Azure Active Directory
description: Add VSTS organization users to your Azure Active Directory
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 22ed079f-0321-4c8b-ab06-a289450fb557
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/06/2017
monikerRange: 'vsts'
---


<a name="SetUpCurrentUsers"></a>
#  Add VSTS organization users to your Azure Active Directory

**VSTS**

If your VSTS organization was created with a Microsoft account, 
you can connect your VSTS organization to your 
organization's directory (tenant) in 
[Azure Active Directory (Azure AD)](/azure/active-directory/fundamentals/active-directory-whatis). 
You can then sign in to VSTS with the same username 
and password that you use with these Microsoft services. 
You can also enforce policies for accessing 
your team's critical resources and key assets.

For more information, see the [conceptual overview](access-with-azure-ad.md) for using Azure AD with VSTS.

If your users do not already exist in Azure AD:

0.  Sign in to the [Azure classic portal](https://manage.windowsazure.com/) 
or the [Azure portal](https://portal.azure.com) 
as global administrator for your organization's directory. 
See these topics for how to:

	*	[Add users in the Azure classic portal](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-create-users).
	*	[Add users in the Azure portal](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-users-create-azure-portal).

	[Why am I asked to choose between a "work or school account" and a "personal account"?](faq-azure-access.md#ChooseOrgAcctMSAcct)

0.	Add the sign-in addresses for all your VSTS organization users to your directory, 
including yourself as the VSTS organization owner, if not in the directory already. 

  What does an example directory look like?
  
  Suppose Jamal is an Azure AD global administrator at Fabrikam and is in the Fabrikam directory with his 
  work account (jamalhartnett@fabrikam.com). He's also the VSTS organization owner and a user with his Microsoft 
  account (jamalhartnett@live.com). He wants to keep his work history, so he adds his Microsoft account to the 
  Fabrikam directory. If Jamal doesn't need his work history, he can use his work account with VSTS. To free up the access used by his Microsoft account, he must change the VSTS organization owner to his work account. 

  Nicole, another user, has a work organization (nicolezamora@fabrikam.com) that shares the same sign-in address as her 
  Microsoft account, so she will continue to work seamlessly with the same sign-in address.

  Here's what the Fabrikam directory might look like in the Azure classic portal after Jamal adds users from his 
  VSTS organization.
    
  ![Directory after adding users](_img/manage-work-access/azureaddmembers3.png)

  [More questions about setting up users?](faq-azure-access.md#faq-users)

0.  After adding your organization users to your directory, 
connect your VSTS organization to your directory. 

