---
title: Add Team Services account users to your Azure Active Directory
description: Add Team Services account users to your Azure Active Directory
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 22ed079f-0321-4c8b-ab06-a289450fb557
ms.manager: douge
ms.author: estfan
ms.date: 1/19/2017
---

<a name="SetUpCurrentUsers"></a>
#  Add Team Services account users to your Azure Active Directory

**Team Services**

If your Team Services account was created with a Microsoft account, 
you can connect your Team Services account to your 
organization's directory (tenant) in 
[Azure Active Directory (Azure AD)](https://azure.microsoft.com/en-us/documentation/articles/active-directory-whatis/). 
You can then sign in to Team Services with the same username 
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

	[Why am I asked to choose between a "work or school account" and a "personal account"?](#ChooseOrgAcctMSAcct)

0.	Add the sign-in addresses for all your Team Services account users to your directory, 
including yourself as the Team Services account owner, if not in the directory already. 

  What does an example directory look like?
  
  Suppose Jamal is an Azure AD global administrator at Fabrikam and is in the Fabrikam directory with his 
  work account (jamalhartnett@fabrikam.com). He's also the Team Services account owner and a user with his Microsoft 
  account (jamalhartnett@live.com). He wants to keep his work history, so he adds his Microsoft account to the 
  Fabrikam directory.  If Jamal doesn't need his work history, he can use his work account with Team Services. But 
  free up the access used by his Microsoft account, he must change the Team Services account owner to his work account. 

  Nicole, another user, has a work account (nicolezamora@fabrikam.com) that shares the same sign-in address with her 
  Microsoft account, so she will continue to work seamlessly with the same sign-in address.

  Here's what the Fabrikam directory might look like in the Azure classic portal after Jamal adds users from his 
  Team Services account.
    
  ![Directory after adding users](_img/manage-work-access/azureaddmembers3.png)

  [More questions about setting up users?](#faq-users)

0.  After adding your account users to your directory, 
connect your Team Services account to your directory. 


[Troubleshooting Q&A](faq-azure-access.md)
