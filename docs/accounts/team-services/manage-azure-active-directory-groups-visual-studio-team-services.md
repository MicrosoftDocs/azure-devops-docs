---
title: Team Services - Access with Azure AD groups | Visual Studio Team Services
description: Team Services - Access with Azure Active Directory (Azure AD, AAD) groups in Visual Studio Team Services (Visual Studio Online, VSO, VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 882E6E07-F407-478A-9DCC-9324493CBE11
ms.manager: douge
ms.author: estfan
ms.date: 12/01/2016
---

# Team Services: Access with Azure Active Directory (Azure AD) groups

**Team Services**

Do you want an easier way to control who can access your team's 
critical resources and key business assets in Team Services? 
If you already use Microsoft services like Office 365 or 
[Azure Active Directory (Azure AD)](https://www.microsoft.com/en-us/server-cloud/products/azure-active-directory/), 
you can use the same identities with your Team Services account. 
[Azure AD works with your Team Services account](manage-organization-access-for-your-account-vs.md) 
to control access and authenticate users through your organization's directory. 

When you organize directory members with 
[Azure AD groups](https://azure.microsoft.com/en-us/documentation/articles/active-directory-manage-groups), 
you can reuse those groups to manage permissions 
in bulk for your Team Services account. 
Just add those groups to the Team Services group that you want. 
For example, add them to built-in groups like 
Project Collection Administrators or Contributors, 
or manually-created groups like your project management team. 
Azure AD group members will inherit permissions from the Team Services group,
so you don't have to manage group members one at a time.

Not familiar with Azure AD, 
but want to check it out? Learn more about 
[Azure AD benefits](https://azure.microsoft.com/en-us/documentation/articles/active-directory-whatis/)
and differences in how you 
[control Team Services account access with Microsoft accounts or with Azure AD](manage-organization-access-for-your-account-vs.md).

## Before you start

*   Your Team Services account must be connected 
to your organization's directory (tenant) in Azure AD. 
[My account uses Microsoft accounts only. Can I switch to Azure AD?](#ChangeMSA)

*   You must be a Team Services project administrator, 
project collection administrator, or account owner. 
You must also have at least Basic access, not Stakeholder.

*	To create and manage Azure AD groups, 
you must have tenant administrator permissions 
or have the tenant administrator delegate those permissions to you in the 
[Azure classic portal](https://manage.windowsazure.com) 
or [Azure portal](https://portal.azure.com).

##	Add an Azure AD group to a Team Services group

0.	Sign in to your Visual Studio Team Services account 
(```https://{youraccount}.visualstudio.com```).

	[Why am I asked to choose between my work or school account and my personal account?](#ChooseOrgAcctMSAcct)

0.	Go to your team project collection or team project, 
depending on the Team Services group that you want to work on.

0.  Go to the control panel by choosing the gear icon in the top navigation bar and **Security** in the menu.

0.	Select the Team Services group where you want to add your Azure AD group.

    ![Select a Team Services group. Go to Members, Add](./_img/manage-azure-ad-groups/VSOGroupAddMemberButton.png)

0.	Find the Azure AD group that you want to add. Just start typing the group's name, alias, 
or display name. Then select the group to add it.  You can get more details about a group and its members by choosing 
the contact card icon to the right of the name.

    ![Browse directory for groups](./_img/manage-azure-ad-groups/AddAADGroupPanelBrowse.png)
    
    You [invite guests into your Azure AD](https://blogs.msdn.microsoft.com/visualstudioalm/2017/05/11/inviting-directory-guests-to-aad-backed-vsts-accounts) 
    and into your Azure AD backed Team Services accounts, without waiting for them 
    to accept, which in turn allows you 
    to add those guests to your account, grant access to projects, assign extensions, etc.

0.	Add more groups, or save your changes if you're done.


##	Q&A

<!-- BEGINSECTION class="md-qanda" -->

<a name="ChangeMSA"></a>
####Q: My account uses Microsoft accounts only. Can I switch to Azure AD?

A: Yes, but before you switch, make sure that Azure AD meets your needs 
for sharing work items, code, resources, 
and other assets with your team and partners. 

Learn more about the differences in how you 
[control access with Microsoft accounts or with Azure AD, and how to switch](manage-organization-access-for-your-account-vs.md)
when you're ready.

####Q: Why can't I assign Team Services permissions directly to an Azure AD group?

A: Because these groups are created and managed in Azure, 
you can't assign Team Services permissions directly 
or secure version control paths to these groups. 
You'll get an error if you try to assign permissions directly.

But, you can add an Azure AD group to the Team Services 
group that has the permissions you want. Or, 
you can assign these permissions to the Team Services group instead.
Azure AD group members will inherit permissions from 
the Team Services group where you add them. 

####Q: Can I manage Azure AD groups in Team Services?

A: No, because these groups are created and managed in Azure. 
Team Services doesn't store or sync member status for Azure AD groups. 
So, to manage Azure AD groups, use the 
[Azure classic portal](https://manage.windowsazure.com)
or [Azure portal](https://portal.azure.com), Microsoft Identity Manager (MIM), 
or the group management tools that your organization supports.

####Q: How do I tell the difference between a Team Services group and an Azure AD group?

A: On the group's identity card, check the group's source:

![To find the group's source, check the group's identity card](./_img/manage-azure-ad-groups/CheckIdentitySourceAAD.png)

####Q:	 Why doesn't the Users hub show all Azure AD group members?

A: These users have to sign in to your Team Services 
account before they appear in the Users hub. 

<a name="AssignLicenses"></a>
####Q:	 How do I assign account access to Azure AD group members? 

A: When these group members sign in to your Team Services account for the first time, 
Team Services assigns an access level to them automatically. If they have 
[Visual Studio subscriptions](add-account-users-assign-access-levels-team-services.md#EligibleMSDNSubscriptions), 
Team Services assigns the respective access level to them. 
Otherwise, Team Services assigns them the next "best available" 
[access level](https://www.visualstudio.com/pricing/visual-studio-online-feature-matrix-vs) 
in this order: Basic, Stakeholder
 
If you don't have enough access levels for all Azure AD group members, 
those members who sign in will get a Stakeholder access.

####Q: Why doesn't the Security tab show all members when I select an Azure AD group?

A: The Security tab shows Azure AD group members 
only after they sign in to your Team Services account 
and have an access level assigned to them. 

To see all Azure AD group members, use the 
[Azure classic portal](https://manage.windowsazure.com), 
[Azure portal](https://portal.azure.com), Microsoft Identity Manager (MIM), 
or the group management tools that your organization supports. 

####Q:	 Why doesn't the team members widget show all Azure AD group members?

A: The team members widget shows only users who previously 
signed in to your Team Services account.

####Q:	 Why doesn't the team capacity pane show all Azure AD group members?

A: The team capacity pane shows only users who previously 
signed in to your Team Services account.
To set capacity, manually add users to your team.

####Q:	 Why doesn't the team room show offline users?

A: The team room shows Azure AD group members, 
but only when they're online.

####Q:	 Why doesn't Team Services reclaim access levels from users who aren't Azure AD group members anymore? 

A: Team Services doesn't automatically 
reclaim access levels from these users. 
To manually remove their access, go to the Users hub.

####Q:	 Can I assign work items to Azure AD group members who haven't signed in?

A: You can assign work items to any Azure AD member who has permissions 
for your Team Services account. 
This also adds that member to your Team Services account. 
When you add users this way, they'll automatically appear 
in the Users hub with the best available 
access level and in the security settings, too.

####Q: Can I use Azure AD groups to query work items using the "In Group" clause?

A: No, querying on Azure AD groups is unsupported.

####Q:	 Can I use Azure AD groups to set up field rules in my work item templates?

A: No, but read more here about our 
[process customization plans](https://blogs.msdn.com/b/visualstudioalm/archive/2015/07/27/visual-studio-online-process-customization-update.aspx).

<a name="remove-user-azure-ad-group"></a>
####Q: Why am I asked to remove a user from an Azure AD group when I delete that user from my Team Services account?

A: Users can belong to your Team Services account, 
both as individuals and as members of Azure AD groups 
that were added to Team Services groups in your Team Services account. 
These users can still access your Team Services account while they're members of these Azure AD groups. 

To block all access for these users, 
please remove them from Azure AD groups in your Team Services account, 
or remove these groups from your Team Services account. 
Although we'd like to make it possible to block 
access completely or make exceptions for such users, 
Team Services doesn't currently have this capability.

####Q:	 How do I remove an Azure AD group from Team Services?

A: Go to your team project collection or team project.  Then, go to the control panel by choosing the gear icon in the 
top navigation bar and **Security** in the menu.

Find the Azure AD group, then delete that group from your Team Services account.

![Find the Azure Active Directory group, delete from Team Services](./_img/manage-azure-ad-groups/DeleteAADGroupFromVSO.png)

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]

####Q:	 Where can I ask more questions or send suggestions?

A: We'd love to hear from you. For help from the Microsoft Developer Community,
visit the [Visual Studio Team Services forum](https://social.msdn.microsoft.com/Forums/en-US/home?forum=TFService).
For suggestions, visit
[Visual Studio UserVoice](https://visualstudio.uservoice.com/forums/330519-team-services).

<!-- ENDSECTION -->