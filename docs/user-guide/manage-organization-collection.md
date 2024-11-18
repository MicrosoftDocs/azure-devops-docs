---
title: Get started as a project collection administrator or organization owner
titleSuffix:  Azure DevOps
description: Learn how to add contributors and configure policies, settings, and other Azure DevOps options available at the organization or collection level.
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 06/22/2023
---

# Manage your organization or collection

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]  

After you create an organization or project collection, add contributors and configure policies, settings, and other options available to you. This article provides an overview of tasks to ensure you set up your organization or collection to get maximal use of your services. 

::: moniker range="azure-devops"
Each organization is associated with one and only one collection. If you need to create another organization, see [Plan your organizational structure](plan-your-azure-devops-org-structure.md) and [Create an organization](../organizations/accounts/create-organization.md).
::: moniker-end 

::: moniker range="< azure-devops"
When you install Azure DevOps Server, you automatically create a default collection. If you need to create another project collection, see [Manage project collections](/azure/devops/server/admin/manage-project-collections).
::: moniker-end

> [!NOTE]   
> This article provides an overview of tasks that require membership in the **Project Collection Administrators** group. For information on tasks performed by members of a **Project Administrators** group, see [Manage your project](project-admin-tutorial.md).

## Add users to your organization 

::: moniker range="azure-devops" 
For large enterprises, connect Azure DevOps to Microsoft Entra ID and use its security groups to control user access. This way, you can sync users and groups between Microsoft Entra ID and Azure DevOps, and reduce the overhead of managing permissions and user access.

You can add users and security groups to your organization through the web portal **Organization settings > Users** interface, regardless of the size of your enterprise. You can also assign these users and groups to one or more projects within your organization.
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
- [Connect your organization to Microsoft Entra ID](../organizations/accounts/connect-organization-to-azure-ad.md)

> [!NOTE]  
> If the **Limit user visibility and collaboration to specific projects** preview feature is turned on the organization, users added to the **Project-Scoped Users** group can't access projects that they haven't been added to. For more information including important security-related call-outs, see [Limit user visibility for projects and more](#limit-identity-selection), later in this article. 

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

Azure DevOps charges for the following services as described in [Pricing for Azure DevOps](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/).  
- Individual services:
	- Microsoft-hosted CI/CD parallel jobs 
	- Self-hosted CI/CD parallel jobs
	- Storage of Azure Artifacts feeds 
- User licenses for **Basic** or **Basic + Test Plans**. 
 
All organizations are granted five free **Basic** licenses and unlimited users with **Stakeholder** access. For information on each access level, see [About access levels](../organizations/security/access-levels.md). 

If your organization requires more than five contributors, then you need to set up billing. Users that have a Visual Studio subscription can be added without incurring any further billing charges. Billing is based on the access level, **Basic** or **Basic + Test Plans**, that you assign to the user. For more information, see [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing).  

::: moniker-end

## Manage security and permissions

Permissions and security groups control access to specific tasks.  

[!INCLUDE [collection-level-permissions](../organizations/security/includes/collection-level-permissions.md)]

For more information about security and setting permissions at the collection-level, review the following articles:

- [Get started with permissions, access, and security groups](../organizations/security/about-permissions.md)   
- [Change permissions at the organization or collection-level](../organizations/security/change-organization-collection-level-permissions.md). 


### Add members to the Project Collection Administrators group 

::: moniker range="azure-devops"
When you create an organization, you become a member of the **Project Collection Administrators** group. This group has the authority to manage the organization’s settings, policies, and processes. It can also create and manage all the projects and extensions in the organization. 
::: moniker-end
::: moniker range="< azure-devops"
The person who creates a project collection is automatically added as a member to the **Project Collection Administrators** group. Members of this group have permissions to manage the settings, policies, and processes for the organization. Members can also create and manage all projects defined in the organization, and install and manage extensions.   
::: moniker-end

It's always a good idea to have more than one person who has administrative privileges. [Look up a **Project Collection Administrator**](../organizations/security/look-up-project-collection-administrators.md) and then ask them to add you to the group.

<a id="project-scoped-user-group"></a> 

::: moniker range="azure-devops"

### Limit user visibility for projects and more 

By default, users added to an organization can view all organization and project information and settings.  

[!INCLUDE [project-scoped-users-important-note](../includes/project-scoped-users-important-note.md)]

To restrict select users, such as Stakeholders, Microsoft Entra guest users, or members of a particular security group, you can turn on the **Limit user visibility and collaboration to specific projects** preview feature for the organization. Once turned on, any user or group added to the **Project-Scoped Users** group, are restricted in the following ways: 

- Restricted users to only access those projects to which they're added. 
- Restricts views that display list of users, list of projects, billing details, usage data, and more that is accessed through **Organization Settings**.
- Limits the set of people or groups that appear through people-picker search selections and the ability to **@mention** people. 

[!INCLUDE [project-scoped-users-warning](../includes/project-scoped-users-warning.md)]

For more information, see [Manage preview features](../project/navigation/preview-features.md). 

All security groups are organization-level entities, even those groups that only have permissions to a specific project. From the web portal, visibility of some security groups might be limited based on user permissions. However, you can discover the names of all groups in an organization using the **azure devops** CLI tool or our REST APIs. For more information, see [Add and manage security groups](../organizations/security/add-manage-security-groups.md).
::: moniker-end  

::: moniker range="azure-devops"
 
<a id="limit-identity-selection"></a> 

### Limit identity search and selection  

With Microsoft Entra ID, you can use people pickers to search for any user or group in your organization, not just the ones in your current project. People pickers support the following Azure DevOps functions: 
- Selection of a user identity from a work tracking identity field such as **Assigned To**  
- Selection of a user or group using **@mention** in a work item discussion or rich-text field, a pull request discussion, commit comments, or changeset or shelveset comments
- Selection of a user or group using **@mention** from a wiki page 

As shown in the following image, you simply start typing into a people picker box until you find a match to a user name or security group.

   :::image type="content" source="../organizations/notifications/media/at-mention/identity-selector.png" alt-text="Screenshot of people picker.":::
 
Users and groups who are added to the **Project-Scoped Users** group can only see and select users and groups in the project they're connected to from a people picker. To scope people pickers for all project members, see [Limit user visibility for projects and more](#limit-identity-selection) earlier in this article. 

To limit the identity selection to only users and groups added to a project, perform the following procedure for your organization and projects. 

1. Turn on the **Limit user visibility and collaboration to specific projects** preview feature for the organization. For more information, see [Manage preview features](../project/navigation/preview-features.md).  
2. Add the users to your project as described in [Add users to a project or team](../organizations/security/add-users-team-project.md). Users added to a team are automatically added to the project and team group. 
3. Open **Organizations settings** > **Security** > **Permissions** and choose **Project-Scoped Users**. Select the **Members** tab. 
4. Add all users and groups that you want to scope to the project they're added to. For more information, see [Set permissions at the project- or collection-level](../organizations/security/change-organization-collection-level-permissions.md). 
	The **Project-Scoped Users** group only appears under the **Permissions>Groups** once **Limit user visibility and collaboration to specific projects** preview feature is turned on. 

::: moniker-end  

::: moniker range="azure-devops"

### Set security policies

Configure the security policies for your organization through the **Organization settings>Policies** page. These policies let you grant or restrict the following features: 
- Non-microsoft application access via OAuth 
- SSH authentication
- Creation of public projects
- Invitation of GitHub user accounts

:::image type="content" source="../media/policies/security-policies.png" alt-text="Screenshot of Azure DevOps Security Policies.":::

For more information, see [Change application connection & security policies for your organization](../organizations/accounts/change-application-access-policies.md). 

::: moniker-end

## Manage extensions 

An extension is an installable unit that adds new capabilities to your projects. Azure DevOps extensions support the following functions:

- Planning and tracking of work items, sprints, scrums, and so on  
- Build and release flows
- Code testing and tracking
- Collaboration among team members

For example, to support [code search](../project/search/functional-code-search.md), install the [Code Search extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search).
 
You want to tell your users about extensions and that they can [request an extension](../marketplace/request-extensions.md). To install and manage extensions, you must be an organization Owner, a member of the **Project Collection Administrators** group. Or, you can get added to the [Manager role for extensions](../marketplace/grant-permissions.md).

### Install Code Search 

Code Search is a free Marketplace extension that lets you search across all your source repositories. For more information, see [Install and configure Search](../project/search/install-configure-search.md).

::: moniker range=" < azure-devops"

### Turn on Analytics

The Analytics service is the reporting platform for Azure DevOps, replacing the previous platform based on SQL Server Reporting Services. Analytics is built for reporting and optimized for fast read-access and server-based aggregations. Use it to answer quantitative questions about the past or present state of your projects.

For more information, see [What is the Analytics service?](../report/powerbi/what-is-analytics.md) and [Turn on the Analytics service](../report/dashboards/analytics-extension.md).
::: moniker-end 

::: moniker range="azure-devops"

## Adjust time zone and other organization settings

When you create an organization, you specify the name of your organization and select the region where your organization is hosted. The default **Time zone** is set to *UTC*. You can update the **Time zone** and specify a Privacy URL from the **Organization settings>Overview** page. For more information about these settings, see the following articles:  

- [Time zone settings and usage](../organizations/settings/timezone-settings-usage.md)
- [Add a privacy policy URL for your organization](../organizations/accounts/add-privacy-policy-url.md)

::: moniker-end

## Configure DevOps settings 

Use the following settings, which get defined at the organization-level, to support your work. 

- [Add agent pools](../pipelines/agents/pools-queues.md)
- [Define pipeline retention settings](../pipelines/policies/retention.md#set-collection-level-retention-policies)
- Define repository settings:
	- [Default branch name for new repositories](../repos/git/repository-settings.md#default-branch-name)
	- [Gravatar images](../repos/git/repository-settings.md#gravatar-images).
 
## Customize work-tracking processes
  
All work-tracking tools are available immediately after you create a project. Often, one or more users might want to customize the experience to meet one or more business needs. Processes are easily customized through the user interface. However, you might want to establish a methodology for who manages the updates and evaluates requests.

For more information, see the following articles:

- [About process customization and inherited processes](../organizations/settings/work/inheritance-process-model.md)  
- [Customize a project](../organizations/settings/work/customize-process.md)  
- [Add and manage processes](../organizations/settings/work/manage-process.md)

## Alert users with information banners

Communicate with your Azure DevOps users quickly through information banners. Use banners to alert your Azure DevOps users to upcoming changes or events without sending mass emails. For more information, see [Add and manage information banners](../organizations/settings/manage-banners.md). 

## Review and update notifications

Many notifications are predefined at the organization or collection level. You can [manage subscriptions or add new subscriptions](../organizations/notifications/manage-team-group-global-organization-notifications.md).  

::: moniker range="< azure-devops"  

### Configure an SMTP server

For team members to receive notifications, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).  

::: moniker-end  

## Scale your organization or collection  

To learn about scaling your organization, see the following articles. 

- [About projects and scaling your organization](../organizations/projects/about-projects.md)
- [Plan your organizational structure](plan-your-azure-devops-org-structure.md)  
 
## Related articles

::: moniker range="azure-devops"  

- [About projects](../organizations/projects/about-projects.md)  
- [FAQs about signing up and getting started](user-guide-faqs.yml)
- [Organization management](../organizations/accounts/organization-management.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)

::: moniker-end

::: moniker range="< azure-devops"  

- [About projects](../organizations/projects/project-team-quick-reference.md)  
- [Security & identity](../organizations/security/about-security-identity.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)
- [Azure DevOps Server administration](/azure/devops/server/index)

::: moniker-end
