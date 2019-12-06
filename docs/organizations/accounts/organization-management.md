---
title: About creating and managing organization
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Collaborate with others to develop apps by using our cloud service, plan and track work, integrate with other services, and get more features or extensions.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: fa1dbe39-08b1-4eba-886a-33c1aa1e6a83
ms.topic: overview
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.date: 06/12/2019
monikerRange: '>= tfs-2013'
---

# About organization management in Azure DevOps

[!INCLUDE [version-vsts-tfs-all-versions](../../_shared/version-vsts-tfs-all-versions.md)]

With an organization, you gain access to the platform in which you can do the following:

* Collaborate with others to develop applications by using our cloud service.
* Plan and track your work as well as code defects and issues.
* Set up continuous integration and deployment.
* Integrate with other services by using service hooks.
* Obtain additional features and extensions.

## Create your organization

Before you get started, read [Plan your organizational structure in Azure DevOps](../../user-guide/plan-your-azure-devops-org-structure.md). Then, you can [create your organization](create-organization.md) and invite others so they can access your organization.

Choose Git or Team Foundation Server as your version control,
so that Azure DevOps can create your project for code and other assets,
like builds, tests, and work items. If you're starting with Visual Studio
as your development environment, you can create your organization when you
[set up Visual Studio](set-up-vs.md).

Your organization includes five free users
with Basic access, plus unlimited Visual Studio
subscribers and Stakeholders at no extra charge.
Your organization also includes free monthly amounts
of additional services such as build and deployment.

## Connect to your organization

When your organization is created,
[connect to your projects](../../organizations/projects/connect-to-projects.md)
with tools like Xcode, Eclipse, or Visual Studio,
and add code to your project.

Some clients, like Xcode, Git, and NuGet, require basic credentials
(a username and password) for you to access Azure DevOps.
To connect these clients to Azure DevOps,
create personal access tokens to authenticate your identity.
Use a credential manager to create, store, and secure your tokens,
so you don't have to reenter them every time you push.
Or if you don't want to use a credential manager, you can
[create personal access tokens manually](use-personal-access-tokens-to-authenticate.md).

## Access with Azure AD

You can manage your user base with Azure Active Directory (Azure AD). With Azure AD), you can control access the same way that you do with Microsoft services like Office 365 and Microsoft Azure. 

Azure AD is optional, however, if your enterprise already uses a directory managed by Azure AD, you can [use your directory to authenticate access to Azure DevOps Services](access-with-azure-ad.md). Recommended practice for managing large user bases is to use Azure AD.  

The process of adding users to projects when managing them through Azure AD is as follows: 

1. First,[connect your organization to Azure AD](connect-organization-to-azure-ad.md). If you need to set up Azure AD, do that now. Go to [Azure Active Directory](https://azure.microsoft.com/services/active-directory/) and sign in with your organization account.  
2. [Add organization users to your Azure AD](add-users-to-azure-ad.md)
3. [Add an Azure AD group to an Azure DevOps group](manage-azure-active-directory-groups.md)

Other related articles include: 
- [Add organization users to your Azure Active Directory](add-users-to-azure-ad.md) 
- [Change your Azure AD instance](change-organization-location.md)
- [Restrict organization creation with an Azure Active Directory tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)

## Add users and assign access

If you don't use Azure AD to manage your user base, then you can add them through the following ways to collaborate on your project. 

- Add users to your organization from the **Organization Settings>Users** page. Only organization owners or members of the Project Collection Administration group can add users at this level. Or, if a user has their **Edit instance-level permission** set to **Allow**. 

	At this level, you specify the access level and the project(s) the user is added to. For details, see [Add users to your organization or project](add-organization-users.md).

- Add users to one or more teams from the **Project>Summary** page or to a specific team from the **Project Settings>Teams>Team** page. Members of the Project Collection Administration or Project Administration groups, or a team administrator can add users to teams. Or, if a user has their **Edit project-level permission** set to **Allow**.  

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Project Overview page, Invite new users dialog box](_img/org-manage/invite-members-dialog.png)
  
	Users added to teams which haven't been added to the organization are assigned the best available access level allowed, either Basic or Stakeholder. If there are no more free Basic slots available, then the user is added as a Stakeholder. The access level can be changed later through the manage users interface. 

For details, see the following articles: 

- [Add users to your organization or project](add-organization-users.md)
- [Add members to teams or projects](add-team-members.md) 


## Set up billing

If you need more than the free users and amounts
of services included with your organization,
[set up billing for your organization](../billing/set-up-billing-for-your-organization-vs.md).
You can then pay for more users with Basic access,
buy more services, and purchase extensions for your organization.



## Related articles

- [About access levels](../security/access-levels.md) 
- [Default permissions and access](../security/permissions-access.md) 
- [Set permissions at the project- or collection-level](../security/(set-project-collection-level-permissions.md) 
- [Add a user as a team administrator](../settings/add-team-administrator.md)
- [Use Azure AD to authenticate access to Azure DevOps Services](access-with-azure-ad.md)
- [Troubleshoot permissions and access with Azure AD](faq-azure-access.md)