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

::: moniker range="azure-devops"
If you need to create an organization, see [Create an organization](../organizations/accounts/create-organization.md).
::: moniker-end 

::: moniker range="azure-devops"
When you install Azure DevOps Server, you automatically create a default collection. If you need to create another project collection, see [Manage project collections](/azure/devops/server/admin/manage-project-collections).
::: moniker-end

> [!NOTE]   
> This article provides an overview of tasks a member of the **Project Collection Administrators** group should review and attend to. For information on tasks to be performed by members of the **Project Administrators** group, see [Manage your project](project-admin-tutorial.md).

 
## Add users and set up billing 

### Add users to your organization 

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
- [Add organization users and manage access](../organizations/accounts/add-organization-users.md)  
- [Connect your organization to Azure Active Directory](../organizations/accounts/connect-organization-to-azure-ad.md) 
::: moniker-end 

::: moniker range="< azure-devops" 
- [Get started with permissions, access, and security groups](../organizations/security/about-permissions.md)  
- [About access levels](../organizations/security/access-levels.md)   
- [Add users or groups to an access level](../organizations/security/change-access-levels.md) 
- [Install Active Directory Domain Services (Level 100)](/windows-server/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-)
 
> [!NOTE]  
> Even if you add a user or group to an access level, you must also [add them to a project](../organizations/security/add-users-team-project.md) for them to connect to a project and access features available through a supported client or the web portal. 
::: moniker-end 

::: moniker range="azure-devops"

## Set up billing

All organizations can add up to five users with **Basic** access and unlimited users with **Stakeholder** access. If you need to add more users or pay for additional services or extensions, [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md).  

::: moniker-end

## Manage security and permissions

Access to features and functions is controlled by access-level assignments, permissions, and security groups. To quickly understand the defaults configured for your project, see [Default permissions and access](../organizations/security/permissions-access.md). 

### Add members to the Project Collection Administrators group 

::: moniker range="azure-devops"
The person who creates an organization is automatically added as a member to the **Project Collection Administrators** group. Members of this group have permissions to manage the settings, policies, and processes for the organization, create and manage all projects defined in the organization, and install and manage extensions.   
::: moniker-end
::: moniker range="< azure-devops"
The person who creates a project collection is automatically added as a member to the **Project Collection Administrators** group. Members of this group have permissions to manage the settings, policies, and processes for the organization, create and manage all projects defined in the organization, and install and manage extensions.   
::: moniker-end

It's always a good idea to have more than one person who has administrative privileges. To add a user to this group, see [Change permissions at the organization level,Add members to the Project Collection Administrators group](../organizations/security/change-organization-collection-level-permissions.md#add-members-to-the-project-collection-administrators-group).

### Grant or restrict permissions  

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
 

<a id="project-scoped-user-group" /> 

::: moniker range="azure-devops"

## Limit user visibility for projects using the Project-Scoped Users group 

By default, users added to an organization can view all organization and project information and settings.  

The **Limit user visibility for projects** preview feature for the organization limits user access in two ways:
- Restricting views that display list of users, list of projects, billing details, usage data, and more that is accessed through **Organization Settings**.
- Limiting the set of people or groups that appear through people-picker search selections and the ability to @mention people. 

> [!IMPORTANT]
> The limited visibility features described in this section apply only to interactions through the web portal. With the REST APIs or **azure devops** CLI commands, project members can access the restricted data. 

::: moniker-end 

::: moniker range="azure-devops"

### Limit access to Organization settings 

To restrict select users, such as Stakeholders, Azure Active Directory guest users, or members of a particular security group, you can enable the **Limit user visibility for projects** preview feature for the organization. Once that is enabled, any user or group added to the **Project-Scoped Users** group, are restricted from accessing the **Organization Settings** pages, except for **Overview** and **Projects**; and are restricted to accessing only those projects to which they've been added to. 

To enable this feature, see [Manage or enable features](../project/navigation/preview-features.md#account-level). 

> [!NOTE]  
> All security groups are organization-level entities, even those groups that only have permissions to a specific project. From the web portal, visibility of some security groups may be limited based on user permissions. However, you can discover the names of all groups in an organization using the **azure devops** CLI tool or our REST APIs. To learn more, see [Add and manage security groups](../add-manage-security-groups.md).
::: moniker-end  


::: moniker range="azure-devops"

### Limit visibility within people pickers

For organizations that manage users and groups using Azure Active Directory (Azure AD), people pickers provide support for searching all users and groups added to Azure AD, not just those users and groups added to your project. people pickers support the following Azure DevOps functions: 
- Selection of a user identity from a work tracking identity field such as **Assigned To**  
- Selection of a user or group using **@mention** in a work item discussion or rich-text field, a pull request discussion, commit comments, or changeset or shelveset comments
- Selection of a user or group using **@mention** from a wiki page 

As shown in the following image, you simply start typing into a people picker box until you find a match to a user name or security group.
 
> [!div class="mx-imgBorder"]  
> ![Screenshot of people picker](../notifications/media/at-mention/identity-selector.png)  

> [!WARNING]   
> When the **Limit user visibility for projects** preview feature is enabled for the organization, project-scoped users are unable to search for users who were added to the organization through Azure Active Directory group membership, rather than through an explicit user invitation. This is an unexpected behavior and a resolution is being worked on. To self-resolve this issue, disable the **Limit user visibility for projects** preview feature for the organization.  


Users and groups who are added to the **Project-Scoped Users** group can only see and select users and groups in the project they are connected to from a people picker. To scope people pickers for all project members, see [Limit identity search and selection](#limit-identity-selection). 
::: moniker-end  

::: moniker range="azure-devops"

### Set security policies

Configure the security policies for your organization through the **Organization settings>Policies** page. These policies enable you to grant or restrict the following features: 
- Third-party application access via OAuth 
- SSH authentication
- Creation of public projects
- Invitation of GitHub user accounts

:::image type="content" source="../media/policies/security-policies.png" alt-text="Screenshot of Azure DevOps Security Policies.":::

To learn more, see [Change application connection & security policies for your organization](../organizations/accounts/change-application-access-policies.md). 

::: moniker-end  

::: moniker range="azure-devops"

## Enable preview features for your organization 

As new features are introduced to Azure DevOps Services, you can choose to enable them or not for an organization. Some features are introduced and automatically enabled. You can try them out, provide feedback, and work with those features that meet your requirements.

When you enable a feature at the organization level, you essentially turn it on for all users of your account. Each user can then disable the feature if they so choose. If you disable a feature at the organization level, user settings are not changed. Users can enable or disable the feature on their own. 

To enable or disable a preview feature, see [Manage or enable features](../project/navigation/preview-features.md#account-level). 

The following features are only enabled or disabled at the organization-level:  
- [Limit identity search and selection](#limit-identity-selection)
- [Full Access to Azure Pipelines for Stakeholders](../organizations/security/provide-stakeholder-pipeline-access.md)


<a id="limit-identity-selection" /> 

### Limit identity search and selection  

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


[!INCLUDE [install-manage-extensions](../includes/get-started/install-manage-extensions.md)] 

::: moniker range=">= tfs-2015"

### Install Code Search 

Code Search is a free Marketplace extension that you must install to enable searching across all your source repositories. To learn how, see [Install and configure Search](../project/search/install-configure-search.md).
::: moniker-end 

<!--- TBD

- Analytics
- Install Code Search
- Integrate with other services 
- PReview features
 
--> 
 
::: moniker range="azure-devops"

## Adjust time zone and other organization settings

When you create an organization, you specify the name of your organization and select the region where your organization is hosted. The default **Time zone** is set to *UTC*. You can update the **Time zone** and specify a Privacy URL from the **Organization settings>Overview** page. To learn more about these settings, see the following articles:  

- [Time zone settings and usage](../organizations/settings/timezone-settings-usage.md)
- [Add a privacy policy URL for your organization](../organizations/accounts/add-privacy-policy-url.md)

::: moniker-end 

::: moniker range=">= tfs-2015"  

## Set DevOps policies 

Set policies to support collaboration across your teams, secure your projects, and automatically remove obsolete files. To set policies, review the following articles: 

::: moniker-end  

::: moniker range=">= azure-devops-2019"

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

 

## Review and update notifications

A number of notifications are predefined at the organization or collection level. Notifications are based on subscription rules which you can modify. Subscriptions arise from the following areas:


global-notifications.png
:::image type="content" source="../media/global-notifications.png" alt-text="Screenshot of Azure DevOps global notifications.":::

If users believe they're getting too many notifications, direct them to [opt out of a subscription](../notifications/manage-your-personal-notifications.md).

> [!div class="mx-imgBorder"]  
> ![Personal notifications](media/services/personal-notifications.png)   


::: moniker range="< azure-devops"  

## Configure an SMTP server

In order for team members to receive notifications, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).  

::: moniker-end  
 


## Scale your organization or collection  

- [Plan your organizational structure](plan-your-azure-devops-org-structure.md)  
- [About projects and scaling your organization](../organizations/projects/about-projects.md)
 

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
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)
- [Azure DevOps Server administration](/azure/devops/server/index)

::: moniker-end
