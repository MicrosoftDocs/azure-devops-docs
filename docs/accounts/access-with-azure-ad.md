---
title: Team Services - Access with Azure AD | Visual Studio Team Services
description: Azure Active Directory (Azure AD) - Control access to Visual Studio Team Services (VSTS, Visual Studio Online, VSO)
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: c9aecaaf-9dfb-4877-84b4-60da253e3dc2
ms.manager: douge
ms.author: estfan
ms.date: 08/01/2017
---

# Access VSTS with Azure Active Directory (Azure AD)

**Team Services**


Want to authenticate users and control access to 
your Team Services account the same way that you 
can with Microsoft services like Office 365 and Azure? 
If your Team Services account was created with a Microsoft account, 
you can connect your Team Services account to your 
organization's directory (tenant) in 
[Azure Active Directory (Azure AD)](https://azure.microsoft.com/en-us/documentation/articles/active-directory-whatis/). 
You can then sign in to Team Services with the same username 
and password that you use with these Microsoft services. 
You can also enforce policies for accessing 
your team's critical resources and key assets.

> To use existing on-premises identities with Team Services, 
> you can integrate on-premises directories with Azure AD by using 
> [Azure AD Connect](https://azure.microsoft.com/en-us/documentation/articles/active-directory-aadconnect/). 
> To switch your Team Services account to another directory, 
> learn [how to change your directory in Azure AD](change-azure-active-directory-team-services-account.md).

##  How does Azure AD control access to Team Services?

Your Team Services account authenticates users 
through your organization's directory so that 
only users who are members in that directory can 
get access to your Team Services account. 
When users are removed from your directory, 
for example, because they've moved elsewhere, 
they can't access your account anymore. 
Only specific [Azure AD administrators](https://azure.microsoft.com/en-us/documentation/articles/active-directory-assign-admin-roles/) 
can manage users in your directory, 
so they control who can get access to your Team Services account. 

Without Azure AD, you're solely responsible for 
controlling Team Services account access. 
And all users must sign in with Microsoft accounts.

<a name="permissions"></a>
## What do I need to set up an existing Team Services with Azure AD?

You'll need:

*	[Ownership of the Team Services account](#find-owner) that you want to connect to Azure AD. 

*	A ["full" Azure subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/), 
such as a ["Pay-As-You-Go" subscription](https://azure.microsoft.com/en-us/offers/ms-azr-0003p/), 
associated with your organization's Azure AD and at 
least Co-administrator permissions for your subscription. 
You'll need both to make your directory appear in the Azure portal, 
so that you can link your subscription and connect your 
Azure AD to your Team Services account. Learn about 
[Azure subscription Co-administrator permissions](../billing/add-backup-billing-managers.md).

  [Want to use Office 365 Azure AD with Team Services?](#o365aad)

*	(Only needed if you need to add users to Azure AD) Global administrator permissions for your directory so 
you can add current Team Services users to that directory. 
Otherwise, work with your directory's global administrator to add users. 
Learn more about [Azure AD administrators](https://azure.microsoft.com/en-us/documentation/articles/active-directory-assign-admin-roles/).

  To check your permissions, [Sign in to the Azure classic portal](https://manage.windowsazure.com/) with your 
  work or school account. Go to your target directory.

  ![Check that you're a global administrator](_img/manage-work-access/azureadadmin.png)

*	You must add your Microsoft account to your Azure AD. Although directory membership isn't required to 
connect your Team Services account to Azure AD, this will make sure that you can sign in and 
access your Team Services account after connecting to Azure AD. Otherwise, your Microsoft account will not have access to 
your Team Services account.

## What happens to current users?

Your work in Team Services is associated with your sign-in address. 
After your Team Services account is connected to your directory, 
users will continue working seamlessly if their 
sign-in addresses appear in the connected directory. 
If they don't, you'll have to [add those users to your directory](#SetUpCurrentUsers). 
Your organization might have policies about adding users to the directory, 
so find out more first. 

What if we can't use the same sign-in addresses?  You'll have to add these users to the directory with new work or school accounts, 
or if they have existing work or school accounts, they can use those instead. Their work in Team Services 
won't be lost and will stay with their current Team Services sign-in addresses.  You'll have to add them as new 
users to Team Services, reassign access levels, and readd them to any team projects. They can migrate work that they want to keep, 
except for their work history. Learn [how to manage Team Services account users](add-account-users-assign-access-levels-team-services.md).

What happens to tools that use my credentials, like alternate credentials?  Alternate credentials won't work anymore for 
tools that run outside a web browser, like the Git command line tool.  You'll have 
to [set up your credentials](http://support.microsoft.com/kb/2991274/en-us) again for the Team Services account that you connected.


## Manage organization access with Azure AD

[Add Team Services users to your Azure AD](add-users-to-aad.md)  

[Connect Team Services account to Azure AD](connect-account-to-aad.md) 

[Disconnect Team Services account from Azure AD](disconnect-account-from-aad.md)  

[Delete users from Team Services connected to Azure AD](delete-users-from-services-aad.md) 

