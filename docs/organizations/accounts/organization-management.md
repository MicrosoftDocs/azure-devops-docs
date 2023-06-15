---
title: Manage an organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18, contperf-fy22q3
description: Manage an organization, so you can collaborate with others to develop apps, plan and track work, integrate with other services, get more features and extensions.
ms.subservice: azure-devops-organizations
ms.assetid: fa1dbe39-08b1-4eba-886a-33c1aa1e6a83
ms.topic: overview
ms.author: chcomley
author: chcomley
ms.date: 02/22/2022
monikerRange: 'azure-devops'
---

# Organization management overview

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

With an organization, you gain access to Azure DevOps Services, where you can do the following tasks:

* Collaborate with others to develop applications by using our cloud service
* Plan and track your work and code defects and issues
* Set up continuous integration and deployment
* Integrate with other services by using service hooks
* Obtain more features and extensions
* Create one or more projects to segment work

> [!NOTE]
> If you're just getting started, see [Get started managing your organization](../../user-guide/manage-organization-collection.md). For information about managing an on-premises Azure DevOps Server, see [Administrative tasks quick reference](/azure/devops/server/admin/admin-quick-ref).

## Prerequisites

Before you can manage an organization, do the following tasks: 
- [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md) in Azure DevOps Services.
- [Create your organization](create-organization.md) and invite others, so they have access.

## Connect to your organization

Once you've created your organization, you can [connect to your projects](../../organizations/projects/connect-to-projects.md) with tools like Xcode, Eclipse, or Visual Studio, and then add code to your project.

Some clients, like Xcode, Git, and NuGet, require basic credentials (a username and password) to access Azure DevOps. To connect these clients to Azure DevOps, create personal access tokens (PATs) to authenticate your identity. Then, you can use a credential manager to create, store, and secure your tokens. This way, you don't have to reenter them every time you make updates. Or, if you don't want to use a credential manager, you can [create PATs manually](use-personal-access-tokens-to-authenticate.md).

<a id="add-users" />

##  Manage access to your organization

Manage access to your organization by adding users. Manage use of features and tasks with access levels and permissions for each user.

You can add and assign an access level to users one-by-one, which is referred to as [**Direct assignment**](#direct-assignment). You can also set up one or more **[Group rules](#group-rules)** and add and assign access levels to groups of users. 

### *Access*, *access level*, and *permissions*

Understand the following three key definitions when you manage your user base:

* **Access** indicates a user can sign into your organization, and at a minimum view information about your organization.
* **Access levels** grant or restrict access to select web portal features. Access levels enable administrators to provide their user base access to the features they need and only pay for those features.
* **Permissions**, granted through security groups, provide and restrict users from completing specific tasks.

For an overview of default assignments, see [Default permissions and access for Azure DevOps](../security/permissions-access.md).

<a id="add-users-direct" />

### Direct assignment

If you don't manage your user base with Azure AD, as described in the next section, then you can add users through the following ways:

* Add users to your organization from the **Organization settings > Users** page. Only organization owners or members of the Project Collection Administration group can add users at this level. Specify the access level and the project(s) the user gets added to. For more information, see [Add users to your organization or project](add-organization-users.md).

* Add users to one or more teams from the **Project > Summary** page or to a specific team from the **Project settings > Teams > Team** page. Members of the Project Collection Administration or Project Administration groups, or a team administrator can add users to teams.

    > [!div class="mx-imgBorder"]  
    > ![Web portal, Project Overview page, Invite new users dialog box](media/org-manage/invite-members-dialog.png)
  
   Unless users get granted an access level directly or through a group rule, they're assigned the best available access level. If there are no more free Basic slots available, then the user is added as a Stakeholder. The access level can be changed later through the **Organization settings > Users** page.

> [!TIP]
> If you need more than the free users and services included with your organization,
[set up billing for your organization](../billing/set-up-billing-for-your-organization-vs.md).
You can then pay for more users with Basic access, buy more services, and purchase extensions for your organization.

For more information about adding users to your organization, see the following articles:

* [Add users to your organization](add-organization-users.md)
* [Add users to a team](../security/add-users-team-project.md#add-users-to-a-team)
* [Add users to a project](../security/add-users-team-project.md#add-users-to-a-project)



<a id="access-azure-ad" />

### Azure AD

If you manage your users with Azure AD, you can connect your organization to Azure AD and manage access through Azure AD. If you already use Azure AD, [use your directory to authenticate access to Azure DevOps Services](access-with-azure-ad.md).

Do the following tasks, to add users through Azure AD:

1. [Connect your organization to Azure AD](connect-organization-to-azure-ad.md). If you need to set up Azure AD, do that now.  
2. Go to [Azure AD](https://azure.microsoft.com/services/active-directory/) and sign in with your organization account.  
3. [Add organization users to your Azure AD](/azure/active-directory/fundamentals/add-users-azure-active-directory).  
4. [Add an Azure AD group to an Azure DevOps group](manage-azure-active-directory-groups.md).  
5. [Create bulk assignments of access levels for users](add-organization-users.md), or [define group rules and assign access levels](assign-access-levels-by-group-membership.md).

<a id="add-users-notes" />

### Group rules

A best practice is to manage users through security groups. You can use the default security groups, create custom security groups, or reference Azure AD groups. You can use any of these  groups to add and manage user access levels using group rules. For more information, see [Add a group rule to assign access levels and extensions](assign-access-levels-by-group-membership.md).

## Other organization management tasks

:::row:::
   :::column span="1":::
   
   #### Manage access
   
   - [Add external users](add-external-user.md)
   - [Link work accounts to Visual Studio subscriptions](/visualstudio/subscriptions/vs-alternate-identity?toc=%2Fazure%2Fdevops%2Forganizations%2Ftoc.json&bc=%2Fazure%2Fdevops%2Forganizations%2Fbreadcrumb%2Ftoc.json)
   - [Remove users](delete-organization-users.md)
   - [Change app access policies](change-application-access-policies.md)
   - [Authenticate with PATs](use-personal-access-tokens-to-authenticate.md)
   - [Revoke user PATs](admin-revoke-user-pats.md)
   
   #### Manage Azure AD access
   
   - [Remove Azure DevOps users](add-external-user.md)
   - [Disconnect from Azure AD](disconnect-organization-from-azure-ad.md)
   - [Change your Azure AD tenant connection](change-azure-ad-connection.md)
   - [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
   - [About accessing your organization with Azure AD](access-with-azure-ad.md)
   
   #### Manage group-based licensing
   
   - [Add a group rule to assign access levels and extensions](assign-access-levels-by-group-membership.md)
   
   :::column-end:::
   :::column span="1":::
   
   #### Manage organization settings
   
   - [Change organization owner](change-organization-ownership.md)
   - [Rename organization](rename-organization.md)
   - [Delete an organization](delete-your-organization.md)
   - [Recover a deleted organization](recover-your-organization.md)
   - [Change location (region)](change-organization-location.md)
   - [Add privacy policy URL](add-privacy-policy-url.md)
   - [Change time zone](change-time-zone.md)
   
   #### Manage extensions
   
   - [Install extensions](../../marketplace/install-extension.md)
   - [Approve requests for extensions](../../marketplace/request-extensions.md)
   - [Uninstall or disable extensions](../../marketplace/install-extension.md#uninstall-disable-extension)
   :::column-end:::
   :::column span="1":::
   
   #### Manage permissions
   
   - [Change project-level permissions](../security/change-project-level-permissions.md)
   - [Change project collection-level permissions](../security/change-organization-collection-level-permissions.md)  
   - [Add a team admin](../settings/add-team-administrator.md)
   - [Request an increase in permission levels](../security/request-changes-permissions.md)
   - [Grant or restrict permissions](../security/restrict-access.md)
   - [Resources granted to project members](../projects/resources-granted-to-project-members.md)
   
   :::column-end:::
:::row-end:::

## Related articles

* [About access levels](../security/access-levels.md)
* [Default permissions and access](../security/permissions-access.md)
* [Change project-level permissions](../security/change-project-level-permissions.md)
* [Change project collection-level permissions](../security/change-organization-collection-level-permissions.md)
* [Add a user as a team administrator](../settings/add-team-administrator.md)
* [About using Azure AD to authenticate access to Azure DevOps Services](access-with-azure-ad.md)
* [Troubleshoot permissions and access with Azure AD](faq-azure-access.yml)
