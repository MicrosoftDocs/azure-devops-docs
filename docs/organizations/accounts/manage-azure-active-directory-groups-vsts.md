---
title: VSTS - Access with Azure AD groups | VSTS
description: VSTS - Access with Azure Active Directory (Azure AD, AAD) groups in VSTS (Visual Studio Online, VSO, VSTS)
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 882E6E07-F407-478A-9DCC-9324493CBE11
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 07/26/2018
monikerRange: 'vsts'
---
# VSTS: Access with Azure Active Directory (Azure AD) groups

**VSTS**

Do you want an easier way to control who can access your team's 
critical resources and key business assets in VSTS? 
If you already use Microsoft services like Office 365 or 
[Azure Active Directory (Azure AD)](https://www.microsoft.com/en-us/server-cloud/products/azure-active-directory/), 
you can use the same identities with your VSTS organization. 
[Azure AD works with your VSTS organization](access-with-azure-ad.md) 
to control access and authenticate users through your Azure Active Directory. 

When you organize directory members with 
[Azure AD groups](/azure/active-directory/fundamentals/active-directory-manage-groups), 
you can reuse those groups to manage permissions 
in bulk for your VSTS organization. 
Just add those groups to the VSTS group that you want. 
For example, add them to built-in groups like 
Project Collection Administrators or Contributors, 
or manually-created groups like your project management team. 
Azure AD group members will inherit permissions from the VSTS group,
so you don't have to manage group members one at a time.

Not familiar with Azure AD, 
but want to check it out? Learn more about 
[Azure AD benefits](/azure/active-directory/fundamentals/active-directory-whatis)
and differences in how you 
[control VSTS organization access with Microsoft accounts or with Azure AD](access-with-azure-ad.md).


## Before you start

* Your VSTS organization must be connected 
to your Azure Active Directory. 
[My organization uses Microsoft accounts only. Can I switch to Azure AD?](faq-azure-access.md#ChangeMSA)
* You must be a VSTS project administrator, 
project collection administrator, or organization owner. 
You must also have at least Basic access, not Stakeholder.
* To create and manage Azure AD groups, 
you must have Azure AD administrator permissions 
or have the directory administrator delegate those permissions to you in the 
[Azure portal](https://portal.azure.com).
* Be aware that Azure AD changes may take up to 24 hours for VSTS to see the changes.


##	Add an Azure AD group to a VSTS group

[!INCLUDE [temp](../../work/_shared/new-agile-hubs-feature.md)]

# [New navigation](#tab/new-nav)

1. Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).

	[Why am I asked to choose between my work or school account and my personal account?](faq-create-organization.md#ChooseOrgAcctMSAcct)

2.  Go to your VSTS admin settings.

    ![Open VSTS admin settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Choose **Security**, select the VSTS group you want to add a member to, choose **Members**, and then choose **Add...**.

   ![Add a member to your selected VSTS group](_img/manage-azure-ad-groups/admin-settings-security-choose-group-add-member.png)
4. Add groups and then save your changes.

    ![Bulk add members to group](_img/manage-azure-ad-groups/bulk-add-groups.png)
 
    You [invite guests into your Azure AD](https://blogs.msdn.microsoft.com/visualstudioalm/2017/05/11/inviting-directory-guests-to-aad-backed-vsts-accounts) 
    and into your Azure AD backed VSTS organizations, without waiting for them 
    to accept, which in turn allows you 
    to add those guests to your organization, grant access to projects, assign extensions, etc.

5.	Add more users or groups, or save your changes if you're done.

# [Previous navigation](#tab/prev-nav)

1.	Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).

	[Why am I asked to choose between my work or school account and my personal account?](faq-azure-access.md#ChooseOrgAcctMSAcct)

2.	Go to your project collection or project, 
depending on the VSTS group that you want to work on.

1.  Go to the control panel by choosing the gear icon in the top navigation bar and **Security** in the menu.

4.	Select the VSTS group where you want to add your Azure AD group.

    ![Select a VSTS group. Go to Members, Add](_img/manage-azure-ad-groups/vsogroupaddmemberbutton.png)

5.	Find the Azure AD user or group that you want to add. Just start typing the name, alias, 
or display name. Then select it. You can get more details about a group and its members by choosing the contact card icon to the right of the name.

    ![Browse directory for groups](_img/manage-azure-ad-groups/addaadgrouppanelbrowse.png)
    
    You [invite guests into your Azure AD](https://blogs.msdn.microsoft.com/visualstudioalm/2017/05/11/inviting-directory-guests-to-aad-backed-vsts-accounts) 
    and into your Azure AD backed VSTS organizations, without waiting for them 
    to accept, which in turn allows you 
    to add those guests to your organization, grant access to projects, assign extensions, etc.

6.	Add more users or groups, or save your changes if you're done.

---