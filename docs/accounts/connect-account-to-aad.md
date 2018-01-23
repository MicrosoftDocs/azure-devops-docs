---
title: Connect VSTS account to Azure Active Directory (Azure AD)
description: Connect VSTS account to Azure Active Directory (Azure AD)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.manager: douge
ms.author: chcomley
ms.date: 12/11/2017
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

0.  [Sign in to the Azure portal](https://portal.azure.com/) 
with your personal Microsoft account as the VSTS account owner.

	[Why am I asked to choose between a "work or school account" and a "personal account"?](faq-azure-access.md#ChooseOrgAcctMSAcct)

0.  If you haven't already, 
[link your VSTS account](../billing/set-up-billing-for-your-account-vs.md) 
to the Azure subscription associated with your directory.

0.	Browse to your VSTS account by selecting **All services**, typing **Team Services** into the **Filter** box, and choosing **Team Services accounts**. If you have recently browsed to **Team Services accounts** you can select it from the recently accessed services on the left.

    ![Azure Portal, Team Services accounts](_img/manage-work-access/browse-to-team-services.png)

0. Select your account.

    ![Azure portal, VSTS, select your account](_img/manage-work-access/select-team-services-account.png)

0.	Choose **Connect**.

    ![Configure your account](_img/manage-work-access/azureconfigurevso.png)

0. Choose **Yes** to confirm.

    ![Connect your account](_img/manage-work-access/azureconnectdirectory1.png)

0.	Your account is now connected to your organization's directory.

	![Account is now connected to your directory](_img/manage-work-access/azureconnectdirectory3.png)



0.	To check that users can access your VSTS account, 
invite a user from your directory to your VSTS account 
and confirm that they can sign in.

0.  If you use the Git command line tool, the tenant cache for the [Git Credential 
Manager may need to be cleared](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/blob/master/Docs/Faq.md#q-why-is-gitexe-failing-to-authenticate-after-linkingunlinking-your-visual-studio-team-services-account-from-azure-active-directory).
Deleting the **%LocalAppData%\GitCredentialManager\tenant.cache** file on each client 
machine will resolve the issue.

0.  If you use alternate credentials with tools that run outside a web browser, 
those tools won't work anymore. 
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





