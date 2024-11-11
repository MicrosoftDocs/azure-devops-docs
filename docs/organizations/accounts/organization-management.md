---
title: Manage an organization
titleSuffix: Azure DevOps Services
description: Manage an organization, so you can collaborate with others to develop apps, plan and track work, integrate with other services, get more features and extensions.
ms.subservice: azure-devops-organizations
ms.assetid: fa1dbe39-08b1-4eba-886a-33c1aa1e6a83
ms.topic: overview
ms.author: chcomley
author: chcomley
ms.date: 10/24/2024
monikerRange: 'azure-devops'
---

# Organization management overview

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

With an organization in Azure DevOps Services, you can do the following tasks:

- **Collaborate**: Work with team members to develop applications using our cloud service.
- **Plan and track**: Manage your work, track code defects, and address issues efficiently.
- **Use continuous integration and deployment**: Set up automated builds and deployments to streamline your development process.
- **Integrate**: Connect with other services using service hooks for seamless workflows.
- **Enhance**: Access other features and extensions to extend the capabilities of Azure DevOps.
- **Organize**: Create one or more projects to segment and manage your work effectively.

By using these capabilities, you can enhance your development process and improve collaboration within your team.

> [!NOTE]
> If you're just getting started, see [Get started managing your organization](../../user-guide/manage-organization-collection.md). For information about managing an on-premises Azure DevOps Server, see [Administrative tasks quick reference](/azure/devops/server/admin/admin-quick-ref).

## Prerequisites

To effectively manage an organization, ensure the following tasks are complete: 

**Organization:**
- [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md) in Azure DevOps Services.
- [Create your organization](create-organization.md) and invite team members and grant them access.

## Connect to your organization

Once you create your organization, you can [connect to your projects](../../organizations/projects/connect-to-projects.md) with tools like Xcode, Eclipse, or Visual Studio, and then add code to your project.

Some clients, like Xcode, Git, and NuGet, require basic credentials (a username and password) to access Azure DevOps. To connect these clients to Azure DevOps, you can use one of the following methods:

- **Personal Access Tokens (PATs)**: To authenticate your identity, create PATs. You can use a credential manager to create, store, and secure your tokens, so you don't have to reenter them every time you make updates. If you prefer not to use a credential manager, you can [create PATs manually](use-personal-access-tokens-to-authenticate.md).

- **OAuth**: Use OAuth to generate tokens for accessing Azure DevOps. OAuth tokens provide a more secure and flexible way to authenticate, especially for applications that require access to multiple resources.

- **SSH Keys**: For Git operations, you can use SSH keys to authenticate. SSH keys provide a secure way to connect to your repositories without needing to enter a username and password.

Choose the method that best fits your security and workflow requirements.

<a id="add-users"></a>

##  Manage access to your organization

Manage access to your organization by adding users. Manage use of features and tasks with access levels and permissions for each user.

You can add and assign an access level to users one-by-one, which is referred to as [**Direct assignment**](#direct-assignment). You can also set up one or more **[Group rules](#group-rules)** and add and assign access levels to groups of users. 

### *Access*, *access level*, and *permissions*

Understand the following key definitions when managing your user base in Azure DevOps:

* **Access**: Indicates that a user can sign into your organization and, at a minimum, view information about your organization. Access is the basic level of interaction a user can have with your Azure DevOps environment.
* **Access levels**: Manage access to specific web portal features. Access levels allow administrators to grant users access to the features they need while only paying for those features. For example, users with Basic access can contribute to projects, while users with Stakeholder access can only view and provide feedback.
* **Permissions**: Permissions provide or restrict users from completing specific tasks, which are granted through security groups. Permissions control which actions users can perform within the organization, such as creating projects, editing work items, or managing repositories. By assigning users to different security groups, you can tailor their permissions to match their roles and responsibilities.

For an overview of default assignments, see [Default permissions and access for Azure DevOps](../security/permissions-access.md).

<a id="add-users-direct"></a>

### Direct assignment

If you don't manage your user base with Microsoft Entra ID, as described in the next section, then you can add users through the following ways:

* **Add users to your organization:** Go to **Organization settings > Users**. Only organization owners or members of the Project Collection Administrator group can add users at this level. Specify the access level and the project the user gets added to. For more information, see [Add users to your organization or project](add-organization-users.md).

* **Add users to a team:** Go to **Project** > **Summary** to add users to one or more teams. Or, go to **Project settings** > **Teams** > **Team** to add users to a specific team. Members of the Project Collection Administrator or Project Administrator groups, or a team administrator, can add users to teams.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot shows Web portal, Project Overview page, Invite new users dialog box.](media/org-manage/invite-members-dialog.png)
  
   Unless users are granted an access level directly or through a group rule, they get assigned the best available access level. If there are no more free Basic slots available, the user gets added as a Stakeholder. You can change the access level later via the **Organization settings** > **Users** page.

> [!TIP]
> If you need more than the free users and services included with your organization,
[set up billing for your organization](../billing/set-up-billing-for-your-organization-vs.md#set-up-billing). This allows you to pay for additional users with Basic access, purchase more services, and acquire extensions for your organization.

For more information about adding users to your organization, see the following articles:

* [Add users to your organization](add-organization-users.md)
* [Add users to a team](../security/add-users-team-project.md#add-users-to-a-team)
* [Add users to a project](../security/add-users-team-project.md#add-users-to-a-project)

<a id="access-azure-ad"></a>

<a name='azure-ad'></a>

### Microsoft Entra ID

If you manage your users with Microsoft Entra ID, you can connect your organization to Microsoft Entra ID and manage access through it. If you already use Microsoft Entra ID, [authenticate access to Azure DevOps Services using your directory](access-with-azure-ad.md).

To add users through Microsoft Entra ID, do the following tasks:

1. [Connect your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md)
1. [Add organization users to your Microsoft Entra ID](/azure/active-directory/fundamentals/add-users-azure-active-directory) 
1. [Add a Microsoft Entra group to an Azure DevOps group](manage-azure-active-directory-groups.md)
1. [Create bulk assignments of access levels for users](add-organization-users.md) or [define group rules and assign access levels](assign-access-levels-by-group-membership.md)

<a id="add-users-notes"></a>

### Group rules

A best practice for managing users is to use security groups. You can utilize default security groups, create custom security groups, or reference Microsoft Entra groups. These groups allow you to add and manage user access levels using group rules. For more information, see [Add a group rule to assign access levels and extensions](assign-access-levels-by-group-membership.md).

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
   
   <a name='manage-azure-ad-access'></a>

#### Manage Microsoft Entra ID access
   
   - [Remove Azure DevOps users](add-external-user.md)
   - [Disconnect from Microsoft Entra ID](disconnect-organization-from-azure-ad.md)
   - [Change your Microsoft Entra tenant connection](change-azure-ad-connection.md)
   - [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
   - [About accessing your organization with Microsoft Entra ID](access-with-azure-ad.md)
   
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
   - [Understand resources granted to project members](../projects/resources-granted-to-project-members.md)
   
   :::column-end:::
:::row-end:::

## Related articles

* [Learn about access levels](../security/access-levels.md)
* [Understand default permissions and access](../security/permissions-access.md)
* [Change project-level permissions](../security/change-project-level-permissions.md)
* [Change project collection-level permissions](../security/change-organization-collection-level-permissions.md)
* [Add a user as a team administrator](../settings/add-team-administrator.md)
* [Authenticate access to Azure DevOps Services using Microsoft Entra ID](access-with-azure-ad.md)
* [Troubleshoot permissions and access with Microsoft Entra ID](faq-azure-access.yml)
