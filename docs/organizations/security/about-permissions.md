---
title: About permissions and security groups
titleSuffix: Azure DevOps
description: Learn about permissions and access levels in Azure DevOps via inheritance, security groups, roles, and more.
ms.subservice: azure-devops-security
ms.assetid: 
toc: show
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
ms.date: 08/13/2024
---

# About permissions and security groups

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this article, learn about access levels and permissions via inheritance, security groups, roles, and more in Azure DevOps.

For an overview of default permissions, see [Default permissions quick reference](permissions-access.md).

For more information, see [Security best practices](security-best-practices.md).

## Access levels 

All Azure DevOps users have an *access level*, which grants or restricts access to specific web portal features.  

There are three main access levels: **Stakeholder**, **Basic**, and **Basic + Test Plans**. Stakeholder access provides free access to an unlimited number of users to a limited set of features. For more information, see [Stakeholder access quick reference](stakeholder-access.md).

To give a user access to Agile portfolio management or test case management features, [change access levels](change-access-levels.md), not permissions. For more information, see [About access levels](access-levels.md).
 
## Permissions   

All users in Azure DevOps belong to one or more default *security groups*. Security groups get assigned *permissions* that either **Allow** or **Deny** access to features or tasks.

- Members inherit the permissions assigned to their security group.
- Permissions get defined at different levels: organization/collection, project, or object.
- Some permissions get managed through *role-based assignments* (for example, team administrator, extension management, or pipeline resource roles).
- Administrators can define custom security groups to manage permissions for different functional areas.

For more information, see [Security best practices, Security and user groups](security-best-practices.md#security-and-user-groups).

Managing permissions in Azure DevOps involves two key groups: Project Collection Administrators and Project Administrators.

**Project Collection Administrators:**
- Hold the highest authority within an organization or project collection.
- Perform all operations for the entire collection.
- Manage settings, policies, and processes for the organization.
- Create and manage all projects and extensions.

**Project Administrators:**
- Operate at the project level.
- Manage security groups and permissions from the Project settings in the web portal.
- Contributors handle permissions for specific objects they create within the project.

### Permission states 

Assign permissions to grant or restrict access:

**User or group has permission:**
- Allow
- Allow (inherited)
- Allow (system)

**User or group doesn't have permission:**
- Deny
- Deny (inherited)
- Deny (system)
- Not set

|Permission state  |Description  |
|---------|---------|
|**Allow**   |Explicitly grants users to perform specific tasks, and isn't inherited from group membership.         |
|**Allow (inherited)**    |Grants group members to perform specific tasks.         |
|**Allow (system)**   |Grants permission that takes precedence before user permissions. Uneditable and stored in a configuration database, invisible to users.         |
|**Deny**    |Explicitly restricts users from performing specific tasks, and isn't inherited from group membership. For most groups and almost all permissions, **Deny** overrides **Allow**. If a user belongs to two groups, and one of them has a specific permission set to **Deny**, that user can't perform tasks that require that permission even if they belong to a group that has that permission set to **Allow**.        |
|**Deny (inherited)**    |Restricts group members from performing specific tasks. Overrides an explicit **Allow**.         |  
|**Deny (system)**   | Restricts permission that takes precedence before user permissions. Uneditable and stored in a configuration database, invisible to users.         |
|**Not set**    | Implicitly denies users the ability to perform tasks that require that permission, but allows membership in a group that does have that permission to take precedence, also known as **Allow (inherited)** or **Deny (inherited)**.         |

Members of the **Project Collection Administrators** or **Team Foundation Administrators** groups might always receive permissions even if denied in another group. The following examples explain this scenario further:
- A user might still access project settings or manage users. However, for tasks like work item deletion or pipeline management, being a member of the Project Collection Administrators group doesn't override **Deny** permissions set elsewhere. 
- If a user is denied permission to delete work items in a specific project, they can't delete work items even if they're part of the Project Collection Administrators group. Similarly, if pipeline permissions are denied, they can't manage or run pipelines despite their administrative role.

> [!WARNING]
> When you modify a permission for a group it affects all users in that group. Even a single permission change can impact hundreds of users, so it’s crucial to consider the potential effects before making any adjustments.

## Permission inheritance

Permissions follow a hierarchy, allowing inheritance from a parent node or overriding it.

**Group inheritance:** 

- Users inherit permissions from the groups they belong to. 
- If a user has an **Allow** permission directly or through group membership but also has a **Deny** permission through another group, the **Deny** permission takes precedence. 
- Members of Project Collection Administrators or Team Foundation Administrators retain most allowed permissions, even if they belong to other groups that deny those permissions (except for work item operations).

**Object-level inheritance:** 

Object-level permissions, assigned to nodes like areas, iterations, version control folders, and work item query folders, are inherited down the hierarchy.

**Permission inheritance and specificity rules:**

- Explicit permissions always take precedence over inherited ones.
- Permissions set at a higher-level node are inherited by all subnodes unless explicitly overridden.
- If a permission isn't explicitly allowed or denied for a subnode, it inherits the permission from its parent.
- If a permission is explicitly set for a subnode, the parent’s permission isn't inherited, regardless of whether allowed or denied.

**Specificity:**

In the object hierarchy, specificity trumps inheritance. The most specific permission takes precedence if conflicting permissions exist.

**Example:**

- Explicitly **Deny** on ‘area-1’ (parent node).
- Explicitly **Allow** for ‘area-1/sub-area-1’ (child node).
- In this case, the user receives an **Allow** on ‘area-1/sub-area-1’, overriding the inherited **Deny** from the parent node.

To understand why a permission is inherited, you can pause over a permission setting, and then select **Why?** To open a  **Security** page, see [View permissions](view-permissions.md).

::: moniker range="= azure-devops"

> [!NOTE]   
> To enable the **Project Permissions settings page** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

::: moniker-end

#### [Preview page](#tab/preview-page) 

::: moniker range="= azure-devops"
> [!div class="mx-imgBorder"]  
> ![Screenshot showing Permissions dialog, preview page, Why link annotated.](media/view-permissions/about-permissions-information-preview.png)

A new dialog opens that shows the inheritance information for that permission.  
::: moniker-end

::: moniker range="< azure-devops"
The preview user interface for the Project Permissions settings page isn't available for Azure DevOps Server 2020 and earlier versions.
::: moniker-end

#### [Current page](#tab/current-page) 

> [!div class="mx-imgBorder"]  
> ![Screenshot showing Permissions dialog, current page, Why link annotated.](media/about-permissions-why.png)

A new window shows the inheritance information for that permission.  

![Screenshot showing the Permissions trace dialog.](media/about-permissions-trace.png)

* * *

## Security groups and membership

Security groups assign specific permissions to their members.

With the creation of an organization, collection, or project&mdash;Azure DevOps creates a set of default security groups, which are automatically assigned default permissions. More security groups are defined with the following actions: 
- When you create custom security groups at the following levels: 
	- Project-level
	- Organization- or collection-level
	- Server-level (on-premises only)
- When you add a team, a team security group gets created 

You can't create an object-level security group, but you can assign a custom group to an object-level and assign permissions to that level. For more information, see [Set object-level permissions](set-object-level-permissions.md). 
 
### Default security groups 

Most Azure DevOps users get added to the **Contributors** security group and granted **Basic** access level. The **Contributors** group provides read and write access to repositories, work tracking, pipelines, and more. **Basic** access provides access to all features and tasks for using Azure Boards, Azure Repos, Azure Pipelines, and Azure Artifacts. Users who require access to manage Azure Test Plans need to be granted **Basic + Test Plans** or **Advanced** access. 

::: moniker range="azure-devops"
The following security groups are defined by default for each project and organization. You typically add users or groups to the **Readers**, **Contributors**, or **Project Administrators** groups.  

> [!div class="mx-tdBreakAll"]  
> | Project | Organization or Collection| 
> |-------------|----------| 
> |- Build Administrators<br/>- Contributors<br/>- Project Administrators<br/>- Project Valid Users<br/>- Readers<br/>- Release Administrators<br/>- *TeamName* Team |- Project Collection Administrators<br/>-  Project Collection Build Administrators<br/>- Project Collection Build Service Accounts<br/>- Project Collection Proxy Service Accounts<br/>- Project Collection Service Accounts<br/>- Project Collection Test Service Accounts<br/>- Project Collection Valid Users<br/>- Project-scoped Users<br/>- Security Service Group | 

For a description of each of these groups, see [Security groups, service accounts, and permissions](permissions.md). For default permission assignments made to the most common default security groups, see [Default permissions and access](permissions-access.md). 
::: moniker-end

::: moniker range="< azure-devops"
The following security groups are defined by default for each project and project collection. You typically add users or groups to the **Readers**, **Contributors**, or **Project Administrators** groups.  

Only add service accounts to [Azure DevOps service account groups](/azure/devops/server/admin/service-accounts-dependencies). To understand valid user groups, see [Valid user groups](#valid-user-groups) later in this article.  

> [!div class="mx-tdBreakAll"]  
> | Project level | Collection level| 
> |-------------|----------| 
> |- Build Administrators<br/>- Contributors<br/>- Project Administrators<br/>- Project Valid Users<br/>- Readers<br/>- Release Administrators<br/>- *TeamName* Team |- Project Collection Administrators<br/>-  Project Collection Build Administrators<br/>- Project Collection Build Service Accounts<br/>- Project Collection Proxy Service Accounts<br/>- Project Collection Service Accounts<br/>- Project Collection Test Service Accounts<br/>- Project Collection Valid Users<br/>- Security Service Group | 
::: moniker-end

For users tasked with managing project-level features—such as, teams, area and iteration paths, repositories, service hooks, and service end points&mdash;add them to the **Project Administrators** group.

For users tasked with managing organization or collection-level features—such as, projects, policies, processes, retention policies, agent and deployment pools, and extensions&mdash;add them to the **Project Collection Administrators** group. For more information, see [About user, team, project, and organization-level settings](../settings/about-settings.md).

### Membership, permission, and access level management  

Azure DevOps controls access through these three inter-connected functional areas:

-  **Membership management** supports adding individual user accounts and groups to default security groups. Each default group is associated with a set of default permissions. All users added to any security group are added to the Valid Users group. A valid user is someone who can connect to a project, collection, or organization.
-  **Permission management** controls access to specific functional tasks at different levels of the system. Object-level permissions set permissions on a file, folder, build pipeline, or a shared query. Permission settings correspond to **Allow**, **Deny**, **Inherited allow**, **Inherited deny**, **System allow**, **System deny**, and **Not set**.
-  **Access level management** controls access to web portal features. Based on purchased for a user, administrators set the user's access level to **Stakeholder**, **Basic**, **Basic + Test**, or **Visual Studio Enterprise** (previously **Advanced**). 

Each functional area uses security groups to simplify management across the deployment. You add users and groups through the web administration context. Permissions are automatically set based on the security group that you add users to. Or permissions get based on the object, project, collection, or server level to which you add groups.  

::: moniker range="azure-devops"
Security group members can be a combination of users, other groups, and Microsoft Entra groups.  
::: moniker-end

::: moniker range="< azure-devops"
Security group members can be a combination of users, other groups, and Active Directory groups or a Workgroup. 

You can create [local groups or Active Directory (AD) groups to manage your users](/azure/devops/server/admin/setup-ad-groups). 
::: moniker-end

### Active Directory and Microsoft Entra security groups

You can populate security groups by adding individual users. But, for ease of management, it's more efficient to populate these groups using Microsoft Entra ID for Azure DevOps Services and Active Directory (AD) or Windows user groups for Azure DevOps Server. This approach allows you to manage group membership and permissions more effectively across multiple computers. 
 
If you only need to manage a small set of users, you can skip this step. But, if you anticipate that your organization might grow, consider setting up Active Directory or Microsoft Entra ID. Also, if you plan to use extra services, it's essential to configure Microsoft Entra ID for use with Azure DevOps to support billing.
 
> [!NOTE]
> Without Microsoft Entra ID, all Azure DevOps users must sign in using Microsoft accounts, and you must manage account access by individual user accounts. Even if you manage account access using Microsoft accounts, set up an [Azure subscription to manage billing](../billing/set-up-billing-for-your-organization-vs.md#set-up-billing).

::: moniker range="azure-devops"
To set up Microsoft Entra ID for use with Azure DevOps Services, see [Connect your organization to Microsoft Entra ID](../accounts/connect-organization-to-azure-ad.md).

When your organization is connected to Microsoft Entra ID, you can define and manage various organization policies to enhance security and streamline access to applications. For more information, see [About security, Security-policies](about-security-identity.md#security-policies). 

To manage organizational access with Microsoft Entra ID, see the following articles: 

* [Add or delete users using Microsoft Entra ID](/azure/active-directory/fundamentals/add-users-azure-active-directory)
* [Troubleshoot access with Microsoft Entra ID](../accounts/faq-azure-access.yml) 

Azure DevOps registers the changes that get made to a Microsoft Entra group within an hour of that change in Microsoft Entra ID. Any inherited permissions via group membership get refreshed. To refresh your Microsoft Entra membership and inherited permissions in Azure DevOps, sign out and then sign back in, or [trigger a refresh to reevaluate your permission](request-changes-permissions.md#refresh-or-reevaluate-your-permissions).  
::: moniker-end

::: moniker range="< azure-devops"
To set up Active Directory for use with Azure DevOps Server, see the following articles:

* [Install Active Directory Domain Services (Level 100)](/windows-server/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-)
* [Active Directory Domain Services Getting Started](/windows-server/identity/ad-ds/ad-ds-getting-started).

Install Active Directory before you install Azure DevOps Server.
::: moniker-end

### Valid user groups

When you add accounts of users directly to a security group, they automatically get added to one of the following valid user groups.

::: moniker range="azure-devops"
- **Project Collection Valid Users:** All members added to an organization-level group.
- **Project Valid Users:** All members added to a project-level group.
::: moniker-end
::: moniker range=">= azure-devops-2019 < azure-devops"
- *Server*\\Azure DevOps Valid Users: All members added to server-level groups.
- *ProjectCollectionName*\\Project Collection Valid Users: All members added to collection-level groups.
- *ProjectName*\\Project Valid Users: All members added to project-level groups.
::: moniker-end

The default permissions assigned to these groups primarily provide read access, such as **View build resources**, **View project-level information**, and **View collection-level information**.

All users you add to one project can view the objects in other projects within a collection.
To restrict view access, you can [set restrictions through the area path node](../../organizations/security/set-permissions-access-work-tracking.md).

If you remove or deny the **View instance-level information** permission for one of the Valid Users groups,
no members of the group are able to access the project, collection, or deployment, depending on the group you set.

::: moniker range="azure-devops"

### Project-scoped users group 

By default, users added to an organization can view all organization and project information and settings. These settings include the list of users, the list of projects, billing details, usage data, and more, which you can access through **Organization settings**. 

[!INCLUDE [project-scoped-users-important-note](../../includes/project-scoped-users-important-note.md)]

To restrict specific users, such as Stakeholders, Microsoft Entra guest users, or members of a particular security group, you can enable the **Limit user visibility and collaboration to specific projects** preview feature for the organization. Once enabled, any user or group added to the **Project-scoped Users** group is restricted from accessing the **Organization settings** pages, except for **Overview** and **Projects**. Also, they only have access to the projects to which they're added. 

[!INCLUDE [project-scoped-users-warning](../../includes/project-scoped-users-warning.md)]

For more information, see [Manage preview features](../../project/navigation/preview-features.md). 

[!INCLUDE [version-all](./includes/hidden-security-groups.md)]

::: moniker-end

<a id="security-roles"></a>

## Role-based permissions   

With Role-based permissions, you assign user accounts or security groups to a role, with each role assigned one or more permissions. Here are the primary roles and links to more information.   

- [Artifact or package feed security roles](../../artifacts/feeds/feed-permissions.md): Roles support various permission levels to edit and manage package feeds.   
- [Marketplace extension Manager role](../../marketplace/grant-permissions.md): Members of the Manager role can install extensions and respond to requests for extensions to be installed.  
- [Pipeline security roles](about-security-roles.md): Several roles are used to manage library resources, project-level, and collection-level pipeline resources. 
- [Team administrator role](../settings/manage-teams.md)  Team administrators are able to manage all team tools.   

For more information, see [About security roles](about-security-roles.md).

::: moniker range="azure-devops"
The following image illustrates how security groups defined at the project and collection level can assign permissions to objects, projects, and the organization.
 
:::image type="content" source="media/about-security/security-groups-permission-management-cloud.png" alt-text="Conceptual image mapping default security groups to permission levels, cloud":::
::: moniker-end

::: moniker range="< azure-devops"
The following image illustrates how security groups defined at the project and collection-level can be assigned to permissions assigned at the object, project, and collection level. You can only define server-level security groups to server-level permissions. 

:::image type="content" source="media/about-security/security-groups-permission-management-on-premises.png" alt-text="Conceptual image mapping default security groups to permission levels, on-premises":::
::: moniker-end

Members of the Project Administrators or Project Collection Administrators groups can manage all team tools for all teams.

## Preview features

Feature flags control access to new features. Azure DevOps periodically introduces new features behind a feature flag. Project members and organization owners can enable or disable preview features. For more information, see [Manage or enable features](../../project/navigation/preview-features.md).
 
## Next steps

> [!div class="nextstepaction"]
> [Default permissions and access](permissions-access.md)

## Related articles

::: moniker range="= azure-devops"

- [Troubleshoot access and permission issues](troubleshoot-permissions.md)
- [Learn about security, authentication, and authorization](about-security-identity.md)
- [Reference permissions and groups](permissions.md)  
- [Add and manage security groups](add-manage-security-groups.md)   

::: moniker-end  

::: moniker range="< azure-devops" 

- [Get started with AD DS](/windows-server/identity/ad-ds/ad-ds-getting-started)
- [Reference permissions and groups](permissions.md)  
- [Add users to a team or a project](../../organizations/security/add-users-team-project.md)   
- [Add and manage security groups](add-manage-security-groups.md)   

::: moniker-end
