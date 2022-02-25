---
title: Get started as a project collection administrator or organization owner
titleSuffix:  Azure DevOps
description: Learn how to add contributors and configure policies, settings, and other Azure DevOps options available at the organization or collection level.
ms.technology: devops-new-user 
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 02/25/2022
---

# Manage your organization or project collection

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]  

After you create an organization or project collection, you'll want to add contributors and configure policies, settings, and other options available to you. This article provides an overview of tasks you'll want to review to ensure you're setting up your organization or collection to get maximal use of your services. 

Other resources to review: 
- [Plan your organizational structure](plan-your-azure-devops-org-structure.md)  
- [About projects and scaling your organization](../organizations/projects/about-projects.md)
- 
::: moniker range="azure-devops"
If you need to create an organization, see [Create an organization](../../organizations/accounts/create-organization.md).
::: moniker-end 

::: moniker range="azure-devops"
When you install Azure DevOps Server, you automatically create a default collection. If you need to create another project collection, see [Manage project collections](/azure/devops/server/admin/manage-project-collections).
::: moniker-end



## Add users to your organization 

::: moniker range="azure-devops" 
For large enterprises, the recommended method to manage Azure DevOps users, is to connect Azure DevOps to Azure Active Directory (Azure AD) and manage user access through security groups defined in Azure AD. That way, when you add and remove users or groups from Azure AD, you automatically add and remove these same users and groups from Azure DevOps.  You limit the maintenance of managing permissions and user access. 

For small and large enterprises, you can add users and security groups directly through the web portal **Organization settings>Users** interface. All users added to an organization can be added to one or more projects defined for the organization. 
::: moniker-end 

::: moniker range="< azure-devops" 
For large enterprises, the recommended method to manage Azure DevOps users, is to connect Azure DevOps to Active Directory (AD) and manage user access through security groups defined in AD. That way, when you add and remove users or groups from AD, you automatically add and remove these same users and groups from Azure DevOps. Typically, you should install Active Directory before installing Azure DevOps. You limit the maintenance of managing permissions and user access.

For small and large enterprises, you add users to a server instance through the web portal **Access levels** interface. All users added to the server instance can be added to to one or more projects defined within the project collection(s) defined in the server instance. 
::: moniker-end 

When you add users, you specify their *access level* which determines the features they can use through the web portal. To learn more, review these resources:  
::: moniker range="azure-devops" 
- [Get started with permissions, access, and security groups](../organizations/security/about-permissions.md)  
- [About access levels](../organizations/security/access-levels.md)   
- [Add organization users and manage access](../organizations/accounts/add-organization-user.md)  
- [Connect your organization to Azure Active Directory](../organizations/accounts/connect-organization-to-azure-ad.md) 
::: moniker-end 

::: moniker range="< azure-devops" 
- [Get started with permissions, access, and security groups](../organizations/security/about-permissions.md)  
- [About access levels](../organizations/security/access-levels.md)   
- [Add users or groups to an access level](../organizations/security/change-access-levels.md) 
- [Install Active Directory Domain Services (Level 100)](/windows-server/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-)
 
> [!NOTE]  
> Even if you add a user or group to an access level, you must also [add them to a project](add-users-team-project.md) for them to connect to a project and access features available through a supported client or the web portal. 
::: moniker-end 

::: moniker range="azure-devops"


::: moniker range="< azure-devops"
 
Ensure that all members of your organization or group are added to your organization and project. For small projects, you can [invite users to your project or team](../organizations/security/add-users-team-project.md#invite-users-from-the-summary-page). Larger organizations may want to consider using Azure Active Directory to limit the maintenance of managing permissions and user access. To learn more, see the following articles.

::: moniker-end


::: moniker range="azure-devops"

## Set up billing

All organizations can add up to five users with **Basic** access and unlimited users with **Stakeholder** access. If you need to add more users or pay for additional services or extensions, [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md).  

::: moniker-end

<a id="limit-identity-selection" /> 

## Limit identity search and selection  

For organizations that manage their users and groups using Azure Active Directory (Azure AD), people pickers provide support for searching all users and groups added to Azure AD, not just those added to your project. people pickers support the following Azure DevOps functions: 
- Selection of a user identity from a work tracking identity field such as **Assigned To**
- Selection of a user or group using **@mention** in a work item discussion or rich-text field, a pull request discussion, commit comments, or changeset or shelveset comments
- Selection of a user or group using **@mention** from a wiki page  

As shown in the following image, you simply start typing into a people picker box until you find a match to a user name or security group.
 
> [!div class="mx-imgBorder"]  
> ![Screenshot of people picker](../notifications/media/at-mention/identity-selector.png)  


To limit the identity selection to just those users and groups added to a project, perform the following procedure for your organization and projects. 

1. Enable the **Limit user visibility for projects** preview feature for the organization. To learn how, see [Manage or enable features](../project/navigation/preview-features.md#account-level). 
2. Add the users to your project(s) as described in [Add users to a project or team](../organizations/security/add-users-team-project.md). Users added to a team are automatically added to the project and team group. 
3. Open **Organizations Settings>Security>Permissions** and choose **Project-Scoped Users**. Choose the **Members** tab. Add all users and groups that you want to scope to the project(s) you've added them to. To learn more, see [Set permissions at the project- or collection-level](../organizations/security/change-organization-collection-level-permissions.md). 
	The **Project-Scoped Users** group only appears under the **Permissions>Groups** once **Limit user visibility for projects** preview feature is enabled. 

::: moniker-end  

## Add members to the Project Collection Administrators group 

::: moniker range="azure-devops"
The person who creates an organization is automatically added as a member to the **Project Collection Administrators** group. Members of this group have permissions to manage the settings, policies, and processes for the organization, create and manage all projects defined in the organization, and install and manage extensions.   
::: moniker-end
::: moniker range="< azure-devops"
The person who creates a project collection is automatically added as a member to the **Project Collection Administrators** group. Members of this group have permissions to manage the settings, policies, and processes for the organization, create and manage all projects defined in the organization, and install and manage extensions.   
::: moniker-end

It's always a good idea to have more than one person who has administrative privileges. To add a user to this group, see [Change permissions at the organization level,Add members to the Project Collection Administrators group](../organizations/security/change-organization-collection-level-permissions.md#add-members-to-the-project-collection-administrators-group).
  

::: moniker range="azure-devops"

<a id="limit-identity-selection" /> 

## Limit identity search and selection  

For organizations that manage their users and groups using Azure Active Directory (Azure AD), people pickers provide support for searching all users and groups added to Azure AD, not just those added to your project. people pickers support the following Azure DevOps functions: 
- Selection of a user identity from a work tracking identity field such as **Assigned To**
- Selection of a user or group using **@mention** in a work item discussion or rich-text field, a pull request discussion, commit comments, or changeset or shelveset comments
- Selection of a user or group using **@mention** from a wiki page  

As shown in the following image, you simply start typing into a people picker box until you find a match to a user name or security group.
 
> [!div class="mx-imgBorder"]  
> ![Screenshot of people picker](../notifications/media/at-mention/identity-selector.png)  


To limit the identity selection to just those users and groups added to a project, perform the following procedure for your organization and projects. 

1. Enable the **Limit user visibility for projects** preview feature for the organization. To learn how, see [Manage or enable features](../project/navigation/preview-features.md#account-level). 
2. Add the users to your project(s) as described in [Add users to a project or team](../organizations/security/add-users-team-project.md). Users added to a team are automatically added to the project and team group. 
3. Open **Organizations Settings>Security>Permissions** and choose **Project-Scoped Users**. Choose the **Members** tab. Add all users and groups that you want to scope to the project(s) you've added them to. To learn more, see [Set permissions at the project- or collection-level](../organizations/security/change-organization-collection-level-permissions.md). 
	The **Project-Scoped Users** group only appears under the **Permissions>Groups** once **Limit user visibility for projects** preview feature is enabled. 

::: moniker-end  

::: moniker range=">= tfs-2015"
## Install Code Search 

Code Search is a free Marketplace extension that you must install to enable searching across all your source repositories. 

For on-premises deployments, you must first configure your project collection. To learn how, see [Install and configure Search](../project/search/install-configure-search.md).
::: moniker-end 

<!--- TBD

- Analytics
- Install Code Search
- Integrate with other services 
- PReview features
 
--> 
 
 
## Grant or restrict permissions  

Access to features and functions is controlled by access-level assignments, permissions, and security groups. To quickly understand the defaults configured for your project, see [Default permissions and access](../organizations/security/permissions-access.md). 

::: moniker range="azure-devops"  

> [!NOTE]  
> If the **Project-Scoped Users well known group to hide settings** preview feature is enabled for the organization, users added to the **Project-Scoped Users** group won't be able to access projects that they haven't been added to. To learn more, see [About projects and scaling your organization, Project-scoped Users group](../organizations/projects/about-projects.md#project-scoped-user-group).

::: moniker-end  

To delegate specific tasks to others, add them to a built-in or custom security group or add them to a specific role. To learn more, see the following articles.

- [Add or remove users or groups, manage security groups](../organizations/security/add-remove-manage-user-group-security-group.md)
- [Grant or restrict access to select features and functions](../organizations/security/restrict-access.md)   

To learn more about permissions and security, review the following articles:

- [About security and identity](../organizations/security/about-security-identity.md)  
- [About permissions and groups](../organizations/security/about-permissions.md)  
- [About security roles](../organizations/security/about-security-roles.md)  
- [About access levels](../organizations/security/access-levels.md)  
 
 

::: moniker range=">= tfs-2015"  

## Set DevOps policies 

Set policies to support collaboration across your teams, secure your projects, and automatically remove obsolete files. To set policies, review the following articles: 

::: moniker-end  

::: moniker range=">= azure-devops-2019"

- [Change application access policies for your organization](../organizations/accounts/change-application-access-policies.md)
- [Manage branch policies](../repos/git/branch-policies.md)  
- [Add Team Foundation Version Control (TFVC) check-in policies](../repos/tfvc/add-check-policies.md)  
- [Set build and release pipeline retention policies](../pipelines/policies/retention.md) 
- [Set test retention policies](../test/how-long-to-keep-test-results.md) 
::: moniker-end  

::: moniker range=">= tfs-2015 <= tfs-2018"

- [Manage branch policies](../repos/git/branch-policies.md)  
- [Add TFVC check-in policies](../repos/tfvc/add-check-policies.md)  
- [Set build and release pipeline retention policies](../pipelines/policies/retention.md) 
- [Set test retention policies](../test/how-long-to-keep-test-results.md) 
::: moniker-end  


## Customize work-tracking processes

::: moniker range=">= azure-devops-2019"
  
All work-tracking tools are available immediately after you create a project. Often, one or more users may want to customize the experience to meet one or more business needs. Processes are easily customized through the user interface. However, you may want to establish a methodology for who manages the updates and evaluates requests.

To learn more, see the following articles:

- [About process customization and inherited processes](../organizations/settings/work/inheritance-process-model.md)  
- [Customize a project](../organizations/settings/work/customize-process.md)  
- [Add and manage processes](../organizations/settings/work/manage-process.md)

::: moniker-end  

::: moniker range="<= tfs-2018"

All work-tracking tools are available immediately after you create a project. Often, one or more users may want to customize the experience to meet one or more business needs. But, you may want to establish a methodology for who manages the updates and evaluates requests.

To learn more, see [On-premises XML process model](../reference/on-premises-xml-process-model.md).

::: moniker-end


::: moniker range="< azure-devops"  

## Configure an SMTP server

In order for team members to receive notifications, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).  

::: moniker-end  
 

[!INCLUDE [install-manage-extensions](../includes/get-started/install-manage-extensions.md)] 



## Next steps  

> [!div class="nextstepaction"]
> [Share your project vision](../organizations/projects/project-vision-status.md)

## Related articles

::: moniker range="azure-devops"  

- [Project and team quick reference](../organizations/projects/project-team-quick-reference.md)  
- [Security & identity](../organizations/security/about-security-identity.md)
- [Organization management](../organizations/accounts/organization-management.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)

::: moniker-end

::: moniker range="< azure-devops"  

- [Project and team quick reference](../organizations/projects/project-team-quick-reference.md)  
- [Security & identity](../organizations/security/about-security-identity.md)
- [Organization management](../organizations/accounts/organization-management.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)
- [TFS administration](/azure/devops/server/index)

::: moniker-end
