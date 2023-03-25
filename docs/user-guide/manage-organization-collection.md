---
title: Get started as a project collection administrator or organization owner
titleSuffix:  Azure DevOps
description: Learn how to add contributors and configure policies, settings, and other Azure DevOps options available at the organization or collection level.
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 03/23/2023
---

# Get started managing your organization or project collection

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]  

After you create an organization or project collection, you'll want to add contributors and configure policies, settings, and other options available to you. This article provides an overview of tasks you'll want to review to ensure you're setting up your organization or collection to get maximal use of your services. 

::: moniker range="azure-devops"
Each organization is associated with one and only one collection. If you need to create another organization, see [Plan your organizational structure](plan-your-azure-devops-org-structure.md) and [Create an organization](../organizations/accounts/create-organization.md).
::: moniker-end 

::: moniker range="< azure-devops"
When you install Azure DevOps Server, you automatically create a default collection. If you need to create another project collection, see [Manage project collections](/azure/devops/server/admin/manage-project-collections).
::: moniker-end


> [!NOTE]   
> This article provides an overview of tasks that require membership in the **Project Collection Administrators** group. For information on tasks to be performed by members of a **Project Administrators** group, see [Manage your project](project-admin-tutorial.md).


## Add users to your organization 

::: moniker range="azure-devops" 
For large enterprises, the recommended method to manage Azure DevOps users, is to connect Azure DevOps to Azure Active Directory (Azure AD) and manage user access through security groups defined in Azure AD. That way, when you add and remove users or groups from Azure AD, you automatically add and remove these same users and groups from Azure DevOps.  You limit the maintenance of managing permissions and user access. 

For small and large enterprises, you can add users and security groups directly through the web portal **Organization settings>Users** interface. All users added to an organization can be added to one or more projects defined for the organization. 
::: moniker-end 

::: moniker range="< azure-devops" 
For large enterprises, the recommended method to manage Azure DevOps users, is to connect Azure DevOps to Active Directory (AD) and manage user access through security groups defined in AD. That way, when you add and remove users or groups from AD, you automatically add and remove these same users and groups from Azure DevOps. Typically, you should install Active Directory before installing Azure DevOps. You limit the maintenance of managing permissions and user access.

For small and large enterprises, you add users to a server instance through the web portal **Access levels** interface. All users added to the server instance can be added to one or more projects defined within the project collection(s) defined in the server instance. 
::: moniker-end 

When you add users, you specify their *access level*, which determines the features they can use through the web portal. For more information, review these resources:  
::: moniker range="azure-devops" 
- [Get started with permissions, access, and security groups](../organizations/security/about-permissions.md)  
- [About access levels](../organizations/security/access-levels.md)   
- [Add organization users and manage access](../organizations/accounts/add-organization-users.md)  
- [Connect your organization to Azure Active Directory](../organizations/accounts/connect-organization-to-azure-ad.md)

> [!NOTE]  
> If the **Limit user visibility and collaboration to specific projects** preview feature is enabled for the organization, users added to the **Project-Scoped Users** group won't be able to access projects that they haven't been added to. For more information including important security-related call-outs, see [Limit user visibility for projects and more](#limit-identity-selection) later in this article. 

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

Azure DevOps Services charges for the following services as described in [Pricing for Azure DevOps](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/).  
- Individual services:
	- Microsoft-hosted CI/CD parallel jobs 
	- Self-hosted CI/CD parallel jobs
	- Storage of Azure Artifacts feeds 
- User licenses for **Basic** or **Basic + Test Plans**. 
 
All organizations are granted five free **Basic** licenses and unlimited users with **Stakeholder** access. For information on each access level, see [About access levels](../organizations/security/access-levels.md). 

If your organization requires more than five contributors, then you need to set up billing. Users that have a Visual Studio subscription can be added without incurring any further billing charges. Billing is based on the access level, **Basic** or **Basic + Test Plans**, that you assign to the user. For more information, see [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md).  

::: moniker-end

## Manage security and permissions

Access to select tasks is controlled by permissions and security groups.  

[!INCLUDE [collection-level-permissions](../organizations/security/includes/collection-level-permissions.md)]

For more information about security and setting permissions at the collection-level, review the following articles:

- [Get started with permissions, access, and security groups](../organizations/security/about-permissions.md)   
- [Change permissions at the organization or collection-level](../organizations/security/change-organization-collection-level-permissions.md). 


### Add members to the Project Collection Administrators group 

::: moniker range="azure-devops"
The person who creates an organization is automatically added as a member to the **Project Collection Administrators** group. Members of this group have permissions to manage the settings, policies, and processes for the organization, create and manage all projects that are defined in the organization, and install and manage extensions.   
::: moniker-end
::: moniker range="< azure-devops"
The person who creates a project collection is automatically added as a member to the **Project Collection Administrators** group. Members of this group have permissions to manage the settings, policies, and processes for the organization, create and manage all projects that are defined in the organization, and install and manage extensions.   
::: moniker-end

It's always a good idea to have more than one person who has administrative privileges. To add a user to this group, see [Change permissions at the organization level,Add members to the Project Collection Administrators group](../organizations/security/change-organization-collection-level-permissions.md#add-members-to-the-project-collection-administrators-group).

<a id="project-scoped-user-group" /> 

::: moniker range="azure-devops"

### Limit user visibility for projects and more 

By default, users added to an organization can view all organization and project information and settings.  

[!INCLUDE [project-scoped-users-important-note](../includes/project-scoped-users-important-note.md)]

To restrict select users, such as Stakeholders, Azure Active Directory guest users, or members of a particular security group, you can enable the **Limit user visibility and collaboration to specific projects** preview feature for the organization. Once that is enabled, any user or group added to the **Project-Scoped Users** group, are restricted in the following ways: 

- Restricted users to only access those projects to which they've been explicitly added. 
- Restricts views that display list of users, list of projects, billing details, usage data, and more that is accessed through **Organization Settings**.
- Limits the set of people or groups that appear through people-picker search selections and the ability to **@mention** people. 

[!INCLUDE [project-scoped-users-warning](../includes/project-scoped-users-warning.md)]

To enable this feature, see [Manage or enable features](../project/navigation/preview-features.md#account-level). 

> [!NOTE]  
> All security groups are organization-level entities, even those groups that only have permissions to a specific project. From the web portal, visibility of some security groups may be limited based on user permissions. However, you can discover the names of all groups in an organization using the **azure devops** CLI tool or our REST APIs. For more information, see [Add and manage security groups](../organizations/security/add-manage-security-groups.md).
::: moniker-end  

::: moniker range="azure-devops"
 
<a id="limit-identity-selection" /> 

### Limit identity search and selection  

For organizations that manage users and groups using Azure Active Directory (Azure AD), people pickers support searching all users and groups added to Azure AD, not just those users and groups added to your project. people pickers support the following Azure DevOps functions: 
- Selection of a user identity from a work tracking identity field such as **Assigned To**  
- Selection of a user or group using **@mention** in a work item discussion or rich-text field, a pull request discussion, commit comments, or changeset or shelveset comments
- Selection of a user or group using **@mention** from a wiki page 

As shown in the following image, you simply start typing into a people picker box until you find a match to a user name or security group.
 
> [!div class="mx-imgBorder"]  
> ![Screenshot of people picker](../organizations/notifications/media/at-mention/identity-selector.png)
 
Users and groups who are added to the **Project-Scoped Users** group can only see and select users and groups in the project they're connected to from a people picker. To scope people pickers for all project members, see [Limit user visibility for projects and more](#limit-identity-selection) earlier in this article. 

To limit the identity selection to just those users and groups added to a project, perform the following procedure for your organization and projects. 

1. Enable the **Limit user visibility and collaboration to specific projects** preview feature for the organization. To learn how, see [Manage or enable features](../project/navigation/preview-features.md#account-level). 
2. Add the users to your project(s) as described in [Add users to a project or team](../organizations/security/add-users-team-project.md). Users added to a team are automatically added to the project and team group. 
3. Open **Organizations Settings>Security>Permissions** and choose **Project-Scoped Users**. Choose the **Members** tab. Add all users and groups that you want to scope to the project(s) you've added them to. For more information, see [Set permissions at the project- or collection-level](../organizations/security/change-organization-collection-level-permissions.md). 
	The **Project-Scoped Users** group only appears under the **Permissions>Groups** once **Limit user visibility and collaboration to specific projects** preview feature is enabled. 

::: moniker-end  

::: moniker range="azure-devops"

### Set security policies

Configure the security policies for your organization through the **Organization settings>Policies** page. These policies enable you to grant or restrict the following features: 
- Third-party application access via OAuth 
- SSH authentication
- Creation of public projects
- Invitation of GitHub user accounts

:::image type="content" source="../media/policies/security-policies.png" alt-text="Screenshot of Azure DevOps Security Policies.":::

For more information, see [Change application connection & security policies for your organization](../organizations/accounts/change-application-access-policies.md). 

::: moniker-end  

::: moniker range="azure-devops"

## Enable preview features for your organization 

As new features are introduced to Azure DevOps Services, you can choose to enable them or not for an organization. Some features are introduced and automatically enabled. You can try them out, provide feedback, and work with those features that meet your requirements.

When you enable a feature at the organization level, you essentially turn it on for all users of your account. Each user can then disable the feature if they so choose. If you disable a feature at the organization level, user settings aren't changed. Users can enable or disable the feature on their own. 

To enable or disable a preview feature, see [Manage or enable features](../project/navigation/preview-features.md#account-level). 

The following features are only enabled or disabled at the organization-level:  
- [Limit identity search and selection](#limit-identity-selection)
- [Full Access to Azure Pipelines for Stakeholders](../organizations/security/provide-stakeholder-pipeline-access.md)

::: moniker-end 

## Install and manage extensions 

An extension is an installable unit that adds new capabilities to your projects. Azure DevOps extensions support the following functions:

- Planning and tracking of work items, sprints, scrums, and so on  
- Build and release flows
- Code testing and tracking
- Collaboration among team members

For example, to support [code search](../project/search/functional-code-search.md), install the [Code Search extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search).
 
You want to tell your users about extensions and that they can [request an extension](../marketplace/request-extensions.md). To install and manage extensions, you must be an organization Owner, a member of the **Project Collection Administrators** group. Or, you can get added to the [Manager role for extensions](../marketplace/grant-permissions.md).

### Install Code Search 

Code Search is a free Marketplace extension that you must install to enable searching across all your source repositories. To learn how, see [Install and configure Search](../project/search/install-configure-search.md).

::: moniker range=">= azure-devops-2019 < azure-devops"

### Enable or disable Analytics

The Analytics service is the reporting platform for Azure DevOps, replacing the previous platform based on SQL Server Reporting Services. Built for reporting, Analytics is optimized for fast read-access and server-based aggregations. Use it to answer quantitative questions about the past or present state of your projects.

For more information, see [What is the Analytics service?](../report/powerbi/what-is-analytics.md) and [Install or enable the Analytics service](../report/dashboards/analytics-extension.md).
::: moniker-end 

::: moniker range="azure-devops"

## Adjust time zone and other organization settings

When you create an organization, you specify the name of your organization and select the region where your organization is hosted. The default **Time zone** is set to *UTC*. You can update the **Time zone** and specify a Privacy URL from the **Organization settings>Overview** page. For more information about these settings, see the following articles:  

- [Time zone settings and usage](../organizations/settings/timezone-settings-usage.md)
- [Add a privacy policy URL for your organization](../organizations/accounts/add-privacy-policy-url.md)

::: moniker-end

## Configure DevOps settings 

There are a few settings that you define at the organization-level to support devops work. These include the following items: 

- [Add agent pools](../pipelines/agents/pools-queues.md)
- [Define pipeline retention settings](../pipelines/policies/retention.md#set-collection-level-retention-policies)
- Define repository settings:
	- [Default branch name for new repositories](../repos/git/repository-settings.md#default-branch-name)
	- [Gravatar images](../repos/git/repository-settings.md#gravatar-images).
 
## Customize work-tracking processes

::: moniker range=">= azure-devops-2019"
  
All work-tracking tools are available immediately after you create a project. Often, one or more users may want to customize the experience to meet one or more business needs. Processes are easily customized through the user interface. However, you may want to establish a methodology for who manages the updates and evaluates requests.

For more information, see the following articles:

- [About process customization and inherited processes](../organizations/settings/work/inheritance-process-model.md)  
- [Customize a project](../organizations/settings/work/customize-process.md)  
- [Add and manage processes](../organizations/settings/work/manage-process.md)

::: moniker-end  

::: moniker range="tfs-2018"

All work-tracking tools are available immediately after you create a project. Often, one or more users may want to customize the experience to meet one or more business needs. But, you may want to establish a methodology for who manages the updates and evaluates requests.

For more information, see [On-premises XML process model](../reference/on-premises-xml-process-model.md).

::: moniker-end
 
::: moniker range=">= azure-devops-2019"

## Alert users with information banners

You can quickly communicate with your Azure DevOps users through information banners. Use banners to alert your Azure DevOps users to upcoming changes or events without sending mass emails. To learn how, see [Add and manage information banners](../organizations/settings/manage-banners.md). 
::: moniker-end 

## Review and update notifications

Many notifications are predefined at the organization or collection level. You can disable or modify these subscriptions, or add new subscriptions as described in [Manage notifications for a team, project, or organization](../organizations/notifications/manage-team-group-global-organization-notifications.md).  
 
:::image type="content" source="../media/global-notifications.png" alt-text="Screenshot of Azure DevOps global notifications.":::

::: moniker range="< azure-devops"  

### Configure an SMTP server

In order for team members to receive notifications, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).  

::: moniker-end  

## Scale your organization or collection  

To learn about scaling your organization, review the following articles. 

- [About projects and scaling your organization](../organizations/projects/about-projects.md)
- [Plan your organizational structure](plan-your-azure-devops-org-structure.md)  
 
## Related articles

::: moniker range="azure-devops"  

- [Project and team quick reference](../organizations/projects/project-team-quick-reference.md)  
- [FAQs about signing up and getting started](user-guide-faqs.yml)
- [Organization management](../organizations/accounts/organization-management.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)

::: moniker-end

::: moniker range="< azure-devops"  

- [Project and team quick reference](../organizations/projects/project-team-quick-reference.md)  
- [Security & identity](../organizations/security/about-security-identity.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)
- [Azure DevOps Server administration](/azure/devops/server/index)

::: moniker-end
