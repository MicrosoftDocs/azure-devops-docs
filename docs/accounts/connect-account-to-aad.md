---
title: Connect VSTS account to Azure Active Directory (Azure AD)
description: Connect VSTS account to Azure Active Directory (Azure AD)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.manager: douge
ms.author: billchi
ms.date: 10/6/2017
---

#	Connect VSTS account to Azure Active Directory (Azure AD)

**VSTS**

If your VSTS account was created with a Microsoft account, 
you can connect your VSTS account to your 
organization's directory (tenant) in 
[Azure Active Directory (Azure AD)](https://azure.microsoft.com/en-us/documentation/articles/active-directory-whatis/). 
You can then sign in to VSTS with the same username 
and password that you use with these Microsoft services. 
You can also enforce policies for accessing 
your team's critical resources and key assets.

For more information, see the [conceptual overview](access-with-azure-ad.md) for using Azure AD with VSTS.



<a name="ConnectDirectory"></a>
##  Connect your VSTS account to your directory

0.  [Sign in to the Azure classic portal](https://manage.windowsazure.com/) 
with your personal Microsoft account as the VSTS account owner.

	> [!NOTE]
	> You can connect your VSTS account 
	> and your directory only through the Azure classic portal.

	[Why am I asked to choose between a "work or school account" and a "personal account"?](faq-azure-access.md#ChooseOrgAcctMSAcct)

0.  If you haven't already, 
[link your VSTS account](../billing/set-up-billing-for-your-account-vs.md) 
to the Azure subscription associated with your directory.

  Why don't I see a directory when I link my account?  **Directory** shows a directory only when the selected 
  VSTS account is already connected to that directory.  You'll actually connect your account to a directory 
  elsewhere and later in Azure.

  ![No connected directory](_img/_shared/no-directory.png)

  [What if my account is already linked to an Azure subscription?](faq-azure-access.md#subscription-linked-already)

  **Important** Want to use your Azure subscription to bill VSTS purchases?  You can use your linked Azure 
  subscription to bill purchases for your VSTS account, but if your subscription has a 
	[spending limit](https://azure.microsoft.com/en-us/pricing/spending-limits/), you must first remove this 
	spending limit **indefinitely**. Learn [how and why you must remove this spending limit](faq-azure-access.md#remove-spending-limit).

0.	Go to **VSTS**. 
Select your VSTS account.

    ![Azure portal, VSTS, select your account](_img/manage-work-access/azurevso_unconnected.png)

0.	Choose **Configure** > **Connect**.

    ![Configure your account](_img/manage-work-access/azureconfigurevso.png)

    ![Connect your account](_img/manage-work-access/azureconnectdirectory1.png)

0.	From the list of directories associated with the Azure subscription 
that's linked to your VSTS account, 
select the directory that you want to connect. 
Save your changes when you're done.

	![Select your directory](_img/manage-work-access/azureconnectdirectory2.png)

	*	[Why don't I see the directory that I want?](faq-azure-access.md#why-not-my-directory)
	*	[My account's already connected to a directory. What do I do?](faq-azure-access.md#AlreadyConnected)

	![Account is now connected to your directory](_img/manage-work-access/azureconnectdirectory3.png)

	Your account is now connected to your organization's directory.

0.	To check that users can access your VSTS account, 
invite a user from your directory to your VSTS account 
and confirm that they can sign in.

0.  If you use alternate credentials with tools that run outside a web browser, 
like the Git command line tool, those tools won't work anymore. 
You must [set up your credentials](http://support.microsoft.com/kb/2991274/en-us) 
again for the VSTS account that you connected.

0.	If you used a Microsoft account to sign up for a 
[Visual Studio with MSDN subscription](https://www.visualstudio.com/vs/pricing/) 
that includes VSTS as a benefit, 
you can add a work or school account that's 
managed by Azure Active Directory to your subscription. 
Learn [how to link work or school accounts to Visual Studio with MSDN subscriptions](../billing/link-msdn-subscription-to-organizational-account-vs.md).

	[More questions about connecting?](faq-azure-access.md#faq-connect)

**Next:**

*   [Manage users and access](add-account-users-assign-access-levels.md)
*   [Manage access with Azure AD groups](manage-azure-active-directory-groups-vsts.md)


