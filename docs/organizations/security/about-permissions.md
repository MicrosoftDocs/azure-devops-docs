---
title: Get started with permissions, access levels, and security groups 
titleSuffix: Azure DevOps
description: Understand how permissions are managed in Azure DevOps
ms.subservice: azure-devops-security
ms.assetid: 
toc: show
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 03/23/2023  
---

# Get started with permissions, access, and security groups  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When it comes to accessing an Azure DevOps feature, it's helpful to understand the following key concepts. 

- **[About permissions](#permissions)**: 
	- All users added to Azure DevOps are added to one or more default *security groups*. 
	- Security groups are assigned *permissions*, which either allow or deny access to a feature or task. 
	- Members of a security group *inherit the permissions* assigned to the group.
	- Permissions are defined at different levels: organization/collection, project, or object. 
	- Other permissions are managed through *role-based assignments*, such as team administrator, extension management, and various pipeline resource roles.  
	- Administrators can define custom security groups to manage permissions for different functional areas.   

- **[About access levels](#access-levels)**: 
	- All users added to Azure DevOps are assigned to an *access level*, which grants or restricts access to select web portal features.  
	- There are three main access levels: **Stakeholder**, **Basic**, and **Basic + Test Plans**. 
	- Stakeholder access provides free access to an unlimited number of users to a limited set of features. For more information, see [Stakeholder access quick reference](stakeholder-access.md).

::: moniker range="azure-devops"
- **[About preview features](#preview-features)**: 
	- As new features are introduced, users can enable or disable them through **Preview features** to access them. 
	- A small subset of new features is managed at the organization level and enabled or disabled by organization owners.  
::: moniker-end

 
For example, most Azure DevOps users are added to the **Contributors** security group and granted **Basic** access level. The **Contributors** group provides read and write access to repositories, work tracking, pipelines, and more. **Basic** access provides access to all features and tasks for using Azure Boards, Azure Repos, Azure Pipelines, and Azure Artifacts. Users who require access to manage Azure Test Plans need to be granted **Basic + Test Plans** or **Advanced** access. 

Administrators should be added to the Project Collection Administrators or Project Administrators group. Administrators manage security groups and permissions from the web portal, primarily from **Project settings**. Contributors manage permissions for objects they create from the web portal as well.   

For an overview of default permissions, see [Default permissions quick reference](permissions-access.md).  


<a id="security-group-membership" /> 

## Security groups and membership  

With the creation of an organization, collection, or project&mdash;Azure DevOps creates a set of default security groups, which are automatically assigned default permissions. More security groups are defined with the following actions: 
- When you create custom security groups at the following levels: 
	- Project-level
	- Organization- or collection-level
	- Server-level (on-premises only)
- When you add a team, a team security group is created 

> [!TIP]    
> You can't create an object-level security group, but you can assign a custom group to an object-level and assign permissions to that level. To learn more about object-level permissions, see [Set object-level permissions](set-object-level-permissions.md). 

 
### Default security groups 

::: moniker range="azure-devops"

The following security groups are defined by default for each project and organization. You typically add users or groups to the **Readers**, **Contributors**, or **Project Administrators** groups.  

> [!div class="mx-tdBreakAll"]  
> | Project | Organization or Collection| 
> |-------------|----------| 
> |- Build Administrators<br/>- Contributors<br/>- Project Administrators<br/>- Project Valid Users<br/>- Readers<br/>- Release Administrators<br/>- *TeamName* Team |- Project Collection Administrators<br/>-  Project Collection Build Administrators<br/>- Project Collection Build Service Accounts<br/>- Project Collection Proxy Service Accounts<br/>- Project Collection Service Accounts<br/>- Project Collection Test Service Accounts<br/>- Project Collection Valid Users<br/>- Project-Scoped Users<br/>- Security Service Group | 

For a description of each of these groups, see [Security groups, service accounts, and permissions](permissions.md). For default permission assignments made to the most common default security groups, see [Default permissions and access](permissions-access.md). 

::: moniker-end

::: moniker range="< azure-devops"

The following security groups are defined by default for each project and project collection. You typically add users or groups to the **Readers**, **Contributors**, or **Project Administrators** groups.  

> [!Note]  
> The following list indicates the latest groups defined for TFS 2017 and later versions. For earlier versions of Azure DevOps, the list may differ. Only add service accounts to [Azure DevOps service account groups](/azure/devops/server/admin/service-accounts-dependencies). To understand valid user groups, see [Valid user groups](#validusers) later in this article.  

> [!div class="mx-tdBreakAll"]  
> | Project level | Collection level| 
> |-------------|----------| 
> |- Build Administrators<br/>- Contributors<br/>- Project Administrators<br/>- Project Valid Users<br/>- Readers<br/>- Release Administrators<br/>- *TeamName* Team |- Project Collection Administrators<br/>-  Project Collection Build Administrators<br/>- Project Collection Build Service Accounts<br/>- Project Collection Proxy Service Accounts<br/>- Project Collection Service Accounts<br/>- Project Collection Test Service Accounts<br/>- Project Collection Valid Users<br/>- Security Service Group | 

::: moniker-end

> [!TIP] 
> For users tasked with managing project-level features—such as, teams, area and 
> iteration paths, repositories, service hooks, and service end points&mdash;add them to 
> the **Project Administrators** group. 
> For users tasked with managing organization or collection-level features—such as, projects, policies, processes, retention policies, 
> agent and deployment pools, and extensions&mdash;add them to the **Project Collection 
> Administrators** group. To learn more, see [About user, team, project, and organization-level settings](../settings/about-settings.md). 

For a description of each group and each permission, see [Permissions and groups reference, Groups](permissions.md#groups).

### Membership, permission, and access level management  

Azure DevOps controls access through these three inter-connected functional areas:

-   **Membership management** supports adding individual user accounts and groups to default security groups. Each default group is associated with a set of default permissions. All users added to any security group are added to the Valid Users group. A valid user is someone who can connect to a project, collection, or organization.

-   **Permission management** controls access to specific functional tasks at different levels of the system. Object-level permissions set permissions on a file, folder, build pipeline, or a shared query. Permission settings correspond to **Allow**, **Deny**, **Inherited allow**, **Inherited deny**, and **Not set**. To learn more about inheritance, see [Permission inheritance and security groups](#inheritance) later in this article.

-   **Access level management** controls access to web portal features. Based on  what has been purchased for a user, administrators set the user's access level to **Stakeholder**, **Basic**, **Basic + Test**, or **Visual Studio Enterprise** (previously **Advanced**). 

Each functional area uses security groups to simplify management across the deployment. You add users and groups through the web administration context. Permissions are automatically set based on the security group that you add users to, or based on the object, project, collection, or server level to which you add groups.  

::: moniker range="azure-devops"
Security group members can be a combination of users, other groups, and Azure Active Directory groups.  
::: moniker-end
::: moniker range="< azure-devops"
Security group members can be a combination of users, other groups, and Active Directory groups or a Workgroup. 

You can create [local groups or Active Directory (AD) groups to manage your users](/azure/devops/server/admin/setup-ad-groups). 

<!--- If you decide to use groups, make sure that membership in those groups is limited to valid users. Because group membership can be altered by their owners at any time, if those owners did not consider Azure DevOps Server access when they created those groups, their changes to membership can cause unwanted side effects within the server. -->
::: moniker-end
 

<a id="aad" /> 

### Active Directory and Azure Active Directory security groups

You can populate security groups by adding individual users. However, for ease of management, it's easier if you populate these groups by using Azure Active Directory (Azure AD) for Azure DevOps Services and Active Directory (AD) or Windows user groups for Azure DevOps Server.  This method enables you to manage group membership and permissions more efficiently across multiple computers. 
 
If you only have to manage a small set of users, then you can skip this step. However, if you foresee that your organization may grow, you may want to set up AD or Azure AD. Also, if you plan on paying for extra services, you need to set up Azure AD for use with Azure DevOps to support billing.
 
> [!NOTE]
> Without Azure AD, all Azure DevOps users must sign in using Microsoft accounts, and you must manage account access by individual user accounts. Even if you manage account access using Microsoft accounts, you need to set up an [Azure subscription in order to manage billing](../billing/set-up-billing-for-your-organization-vs.md).

::: moniker range="azure-devops"

To set up Azure Active Directory for use with Azure DevOps Services, see [Connect your organization to Azure Active Directory](../accounts/connect-organization-to-azure-ad.md).


> [!NOTE]  
> When your organization is connected to Azure Active Directory, there are a number of organization policies which you can enable or disabled to secure your organization. To learn more, see [About security, authentication, and authorization, Security-policies](about-security-identity.md#security-policies). 

To manage organizational access with Azure AD, refer to the following articles: 

* [Add or delete users using Azure Active Directory](/azure/active-directory/fundamentals/add-users-azure-active-directory)
* [Troubleshoot access with Azure Active Directory](../accounts/faq-azure-access.yml) 

Azure DevOps registers the changes made to an Azure AD group within an hour of that change happening in Azure AD, and refresh any permissions inherited via membership to that group. In addition, any Azure DevOps user can trigger a refresh of their Azure AD membership, along with the inherited permissions in Azure DevOps by signing out and signing in back again, or by triggering a [refresh to reevaluate your permission](request-changes-permissions.md#refresh-or-re-evaluate-your-permissions).  

::: moniker-end

::: moniker range="< azure-devops"

To set up Active Directory for use with Azure DevOps Server, see the following articles:

* [Install Active Directory Domain Services (Level 100)](/windows-server/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-)
* [Active Directory Domain Services Getting Started](/windows-server/identity/ad-ds/ad-ds-getting-started).

Typically, you should install Active Directory prior to installing Azure DevOps Server.

::: moniker-end


 
<a name="validusers"></a>

### Valid user groups

When you add accounts of users directly to a security group, they're automatically added to one of the valid user groups.

::: moniker range="azure-devops"
- Project Collection Valid Users: All members added to an organization-level group.
- Project Valid Users: All members added to a project-level group.
::: moniker-end
::: moniker range=">= azure-devops-2019 < azure-devops"
- *Server*\\Azure DevOps Valid Users: All members added to server-level groups.
- *ProjectCollectionName*\\Project Collection Valid Users: All members added to collection-level groups.
- *ProjectName*\\Project Valid Users: All members added to project-level groups.
::: moniker-end
::: moniker range="< azure-devops-2019"
- *Server*\\Team Foundation Valid Users: All members added to server-level groups.
- *ProjectCollectionName*\\Project Collection Valid Users: All members added to collection-level groups.
- *ProjectName*\\Project Valid Users: All members added to project-level groups.
::: moniker-end

The default permissions assigned to these groups are primarily limited to
read access, such as **View build resources**, **View project-level information**, and **View collection-level information**.

All users that you add to one project can view the objects in other projects within a collection.
If you need to restrict view access, then you can [set restrictions through the area path node](../../organizations/security/set-permissions-access-work-tracking.md).

If you remove or deny the **View instance-level information** permission for one of the valid users groups,
no members of the group are able to access the project, collection, or deployment, depending on the group you set.
<a id="grant-permissions" />  
<a id="access-levels" />


<a id="project-scoped-user-group" /> 

::: moniker range="azure-devops"

### Project-Scoped User group 

By default, users added to an organization can view all organization and project information and settings. This includes viewing list of users, list of projects, billing details, usage data, and more that is accessed through **Organization Settings**. 

[!INCLUDE [project-scoped-users-important-note](../../includes/project-scoped-users-important-note.md)]

To restrict select users, such as Stakeholders, Azure Active Directory guest users, or members of a particular security group, you can enable the **Limit user visibility and collaboration to specific projects** preview feature for the organization. Once that is enabled, any user or group added to the **Project-Scoped Users** group, are restricted from accessing the **Organization Settings** pages, except for **Overview** and **Projects**; and are restricted to accessing only those projects to which they've been added to. 

[!INCLUDE [project-scoped-users-warning](../../includes/project-scoped-users-warning.md)]

To enable this feature, see [Manage or enable features](../../project/navigation/preview-features.md#account-level). 

[!INCLUDE [version-all](./includes/hidden-security-groups.md)]

::: moniker-end


## Access levels 

Access levels control what features are visible to users in the web portal,
and are dependent on user licenses; permissions control a user's ability to connect to Azure DevOps and use features across Azure DevOps. 
If you're trying to give someone access to Agile portfolio management 
or test case management features, 
you want to [change access levels](change-access-levels.md), not permissions. 
 
Setting the access level for users or groups doesn't provide them access to a project or the web portal. Only users or groups added to a team or security group can connect to a project and the web portal. Make sure your users have both the permissions and the access level they need. You do this by making sure they're [added to the project or a team](add-users-team-project.md).

<a name="permission-settings" />

## Permissions   

::: moniker range="azure-devops"

As shown in the following image, security groups defined at the project and collection-level can be assigned to permissions assigned at the object, project, and organization-level.
 
:::image type="content" source="media/about-security/security-groups-permission-management-cloud.png" alt-text="Conceptual image mapping default security groups to permission levels, cloud":::

::: moniker-end

::: moniker range="< azure-devops"

As shown in the following image, security groups defined at the project and collection-level can be assigned to permissions assigned at the object, project, and collection level. You can only define server-level security groups to server-level permissions. 
::: moniker-end

::: moniker range=">= azure-devops-2019 <= azure-devops-2020"
:::image type="content" source="media/about-security/security-groups-permission-management-on-premises.png" alt-text="Conceptual image mapping default security groups to permission levels, on-premises":::

::: moniker-end

::: moniker range="< azure-devops-2019"
![Conceptual image of security groups and permission levels, TFS-2018 and earlier versions](media/permissions/permissions-overview.png) 
::: moniker-end
 
For a description of each default security group, see [Security groups, service accounts, and permissions](permissions.md#groups).


### Permission states 

There are five possible assignments made to a permission. They grant or restrict access as indicated. 
- User or group has permissions to perform a task: 
	- **Allow** 
	- **Inherited allow** 
- User or group doesn't have permission to perform a task: 
	- **Deny** 
	- **Inherited deny** 
	- **Not set** 

Here's what you need to know about permission settings:

- **Allow** or **Deny** explicitly grants or restricts users from performing specific tasks, and are inherited from group membership.

- **Not set** implicitly denies users the ability to perform tasks that require that permission, but allows membership in a group that does have that permission set to take precedence, also known as **Allow (inherited)** or **Inherited allow** and **Deny (inherited)** or **Inherited deny**.

- For most groups and almost all permissions, **Deny** overrides **Allow**. If a user belongs to two groups, and one of them has a specific permission set to **Deny**, that user can't perform tasks that require that permission even if they belong to a group that has that permission set to **Allow**.

	In some cases, members of the **Project Collection Administrators** or **Team Foundation Administrators** groups may always get the permission even if they're denied that permission in a different group. In other cases such as work item deletion or pipelines, being a member of project collection administrators doesn't bypass **Deny** permissions set elsewhere.
	
- Changing a permission for a group changes that permission for all users who are members of that group. In other words, depending on the size of the group, you might affect the ability of hundreds of users to do their jobs by changing just one permission. So make sure you understand the impact before you make a change.

<a name="inheritance"></a>

## Permission inheritance and security groups 

Some permissions are managed through a hierarchy. Within this hierarchy,
permissions can be inherited from the parent or overridden. Security groups assign a set of permissions to those members of the group. For example, members of the **Contributors** group or **Project Administrators** group are assigned the permissions that are set as **Allowed** to those groups. 

If a permission isn't directly allowed or denied for a user, then it may be inherited in two ways.

- Users inherit permissions from the groups to which they belong.
When a permission is allowed for a user directly or through membership in a group that has that permission,
and it's denied, either directly or through group membership,
the permission is denied.

   Members of **Project Collection Administrators** or **Team Foundation Administrators** retain most allowed permissions, even if they belong to other groups that deny those permissions. Work item operation permissions are the exception to this rule.

- Object-level permissions that are assigned for nodes of a hierarchy -
areas, iterations, version control folders, work item query folders -
are inherited down the hierarchy.
That is, a user's permissions that are set at `area-1` get inherited by `area-1/sub-area-1`,
if the same permission isn't explicitly allowed or denied for `area-1/sub-area-1`.
If a permission is set explicitly for an object, like `area-1/sub-area-1`,
then the parent node isn't inherited, regardless of whether it's denied or allowed.
If it's not set, then the permissions for that node are inherited from the closest ancestor
that has the permission explicitly set. Lastly, in the object hierarchy, specificity trumps inheritance. For example, a user whose permissions are explicitly set to **Deny** on 'area-1' but are also explicitly set to **Allow** for 'area-1/sub-area-1' receives an **Allow** on 'area-1/sub-area-1'. 

To understand why a permission is inherited, you can pause over a permission setting, and then choose **Why?** To open a  **Security** page, see [View permissions](view-permissions.md).

::: moniker range="= azure-devops"

> [!NOTE]   
> To enable the **Project Permissions Settings Page** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

::: moniker-end

#### [Preview page](#tab/preview-page) 

::: moniker range="= azure-devops"

> [!div class="mx-imgBorder"]  
> ![Permissions dialog, preview page, Why link annotated.](media/view-permissions/about-permissions-information-preview.png)

A new dialog opens that shows the inheritance information for that permission.  

::: moniker-end

::: moniker range="< azure-devops"

The preview user interface for the Project Permissions Settings Page isn't available for Azure DevOps Server 2020 and earlier versions.  

::: moniker-end

#### [Current page](#tab/current-page) 

> [!div class="mx-imgBorder"]  
> ![Permissions dialog, current page, Why link annotated.](media/about-permissions-why.png)

A new window opens that shows the inheritance information for that permission.  

![Permissions trace dialog.](media/about-permissions-trace.png)

* * *


### When assigning permissions
 
**Do:**  
- Use Azure Active Directory, Active Directory, or Windows security groups when managing lots of users.  
- When adding teams, consider what permissions you want to assign to team leads, scrum masters, and other team members who may need to create and modify area paths, iteration paths, and queries.  
- When adding many teams, consider creating a **Team Administrators** custom group where you allocate a subset of the permissions available to **Project Administrators**.  
- Consider granting the [work item query folders **Contribute**](../../boards/queries/set-query-permissions.md) permission to users or groups that require the ability to create and share work item queries for the project.  

**Don't:**  
- Don't add users to multiple security groups, which contain different permission levels. In certain cases, a **Deny** permission level may override an **Allow** permission level.  
- Don't change the default assignments made to the valid users groups. If you remove or set the **View instance-level information** permission to **Deny** for one of the Valid Users groups, no users in the group are able to access the project, collection, or deployment, depending on the group you set.  
- Don't assign permissions that are noted as 'Assign only to service accounts' to user accounts.

<a id="security-roles" />

## Role-based permissions   

With Role-based permissions, you assign user accounts or security groups to a role, with each role assigned one or more permissions. Here are the primary roles and links to learn more.   

- [Artifact or package feed security roles](../../artifacts/feeds/feed-permissions.md): Roles support various permission levels to edit and manage package feeds.   
- [Marketplace extension Manager role](../../marketplace/grant-permissions.md): Members of the Manager role can install extensions and respond to requests for extensions to be installed.  
- [Pipeline security roles](about-security-roles.md): Several roles are used to manage library resources, project-level and collection-level pipeline resources. 
- [Team administrator role](../settings/manage-teams.md)  Team administrators are able to manage all team tools.   

	> [!NOTE]
	> Members of the Project Administrators or Project Collection Administrators groups can manage all team tools for all teams.

## Preview features 
 
Feature flags control access to select, new features. Periodically, Azure DevOps Services introduces new features by placing them behind a feature flag. Project members and organization owners can enable or disable preview features. For more information, see [Manage or enable features](../../project/navigation/preview-features.md).
 
## Next steps

> [!div class="nextstepaction"]
> [Default permissions and access](permissions-access.md)

## Related articles

::: moniker range="= azure-devops"

- [Troubleshoot access and permission issues](troubleshoot-permissions.md)
- [About security, authentication, and authorization](about-security-identity.md)
- [What is Azure Active Directory?](/azure/active-directory/active-directory-whatis)
- [Get started with Azure AD](/azure/active-directory/get-started-azure-ad)
- [Permissions and groups reference](permissions.md)  
- [Security and permission management tools](security-tools-reference.md)  
- [Add users to an organization](../accounts/add-organization-users.md) 
- [Add and manage security groups](add-manage-security-groups.md)   
- [Manage tokens, namespaces, permissions](manage-tokens-namespaces.md) 
- [How billing works](../billing/overview.md)
- [Set up billing to pay for users, pipelines, and cloud-based load testing in Azure DevOps](../billing/set-up-billing-for-your-organization-vs.md)   
::: moniker-end  


::: moniker range="< azure-devops" 

- [Troubleshoot access and permission issues](troubleshoot-permissions.md)[About security, authentication, and authorization](about-security-identity.md)
- [Active Directory Domain Services Overview](/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview)  
- [AD DS Getting Started](/windows-server/identity/ad-ds/ad-ds-getting-started)
- [Permissions and groups reference](permissions.md)  
- [Security and permission management tools](security-tools-reference.md)  
- [Add users to a team or a project](../../organizations/security/add-users-team-project.md)   
- [Add and manage security groups](add-manage-security-groups.md)   
- [Manage tokens, namespaces, permissions](manage-tokens-namespaces.md)   
- [Permissions and groups reference](permissions.md)  
- [Security and permission management tools](security-tools-reference.md)  
::: moniker-end
 
