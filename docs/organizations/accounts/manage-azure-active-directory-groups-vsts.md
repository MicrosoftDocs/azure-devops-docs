---
title: VSTS - Access with Azure Active Directory groups | VSTS
description: VSTS - Access with Azure Active Directory groups in VSTS (Visual Studio Online, VSO, VSTS)
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 882E6E07-F407-478A-9DCC-9324493CBE11
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 06/26/2018
monikerRange: 'vsts'
---
# VSTS: Access with Azure Active Directory groups

**VSTS**

Do you want an easier way to control who can access your team's critical resources and key business assets in VSTS?
If you already use Microsoft services like Office 365 or 
[Azure Active Directory](https://www.microsoft.com/en-us/server-cloud/products/azure-active-directory/), you can use the same identities with your VSTS organization. 
[Azure Active Directory works with your VSTS organization](access-with-azure-ad.md) 
to control access and authenticate users through your directory. 

When you organize directory members with [Azure Active Directory groups](https://azure.microsoft.com/en-us/documentation/articles/active-directory-manage-groups), you can reuse those groups to manage permissions in bulk for your VSTS organization. Just add those groups to the VSTS group that you want. For example, add them to built-in groups like Project Collection Administrators or Contributors, or manually-created groups like your project management team. Azure Active Directory group members will inherit permissions from the VSTS group,
so you don't have to manage group members one at a time.

Not familiar with Azure Active Directory, but want to check it out? Learn more about 
[Azure Active Directory benefits](https://azure.microsoft.com/en-us/documentation/articles/active-directory-whatis/)
and differences in how you 
[control VSTS organization access with Microsoft accounts or with Azure Active Directory](access-with-azure-ad.md).


## Before you start

* Your VSTS organization must be connected 
to your organization's directory in Azure Active Directory. 
[My organization uses Microsoft accounts only. Can I switch to Azure Active Directory?](faq-azure-access.md#ChangeMSA)
* You must be a VSTS project administrator, 
project collection administrator, or organization owner. 
You must also have at least Basic access, not Stakeholder.
* To create and manage Azure Active Directory groups, 
you must have administrator permissions 
or have the administrator delegate those permissions to you in the 
[Azure portal](https://portal.azure.com).
* Be aware that Azure Active Directory changes may take up to 24 hours for VSTS to see the changes.


##	Add an Azure Active Directory group to a VSTS group

1.	Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).

	[Why am I asked to choose between my work or school account and my personal account?](faq-azure-access.md#ChooseOrgAcctMSAcct)

2.	Go to your team project collection or team project, 
depending on the VSTS group that you want to work on.

3.  Go to the control panel by choosing the gear icon in the top navigation bar and **Security** in the menu.

4.	Select the VSTS group where you want to add your Azure Active Directory group.

    ![Select a VSTS group. Go to Members, Add](_img/manage-azure-ad-groups/vsogroupaddmemberbutton.png)

5.	Find the Azure Active Directory group that you want to add. Just start typing the group's name, alias, 
or display name. Then select the group to add it.  You can get more details about a group and its members by choosing 
the contact card icon to the right of the name.

    ![Browse directory for groups](_img/manage-azure-ad-groups/addaadgrouppanelbrowse.png)
    
    You [invite guests into your Azure Active Directory](https://blogs.msdn.microsoft.com/visualstudioalm/2017/05/11/inviting-directory-guests-to-aad-backed-vsts-organizations) 
    and into your Azure Active Directory backed VSTS organizations, without waiting for them 
    to accept, which in turn allows you 
    to add those guests to your organization, grant access to projects, assign extensions, etc.

6.	Add more groups, or save your changes if you're done.
