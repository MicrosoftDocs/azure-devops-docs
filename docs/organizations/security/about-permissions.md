---
title: How are permissions and groups defined?
titleSuffix: Azure DevOps
description: Understand how permissions are managed in Azure DevOps
ms.technology: devops-security
ms.assetid: 
toc: show
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 12/07/2020
---

# About permissions, access, and security groups  

[!INCLUDE [version-all](../../includes/version-all.md)]

When it comes to accessing an Azure DevOps feature, there are a few items you need to understand: 

- All users added to Azure DevOps are typically added to one or more *security groups*. 
- Security groups are assigned *permissions* which either allow or deny access to a feature. 
- Members of the security group *inherit the permissions* assigned to the group.
- Each user is also assigned an *access level* which grants or restricts access to select web portal features. 
- Permissions are set at various levels for most objects, such as repositories, pipelines, area paths, and so on. 
- Other permissions are managed through *role-based assignments*, such as team administrator role or 
- And finally, as new features are introduced you may need to enable their *feature flag* to access them. 

For example, individual contributors are added to the Contributors group which provides read and write access to repositories, work tracking, pipelines, and more. Using built-in or custom security groups helps simplify management of permissions across projects. 

Administrators manage security groups and permissions from the web portal administration context. Contributors manage permissions for objects they create or own from the web portal as well. Permissions are automatically set based on the group that you add users to, or based on the object, project, collection, or server-level to which you add users or groups.  

> [!TIP]    
> User accounts that are assigned to more than one security group are restricted to those permissions granting the least access. For example, if you add a user to the Readers group and the Project Administrators group, the effective permissions of the Readers group are enforced for the user. 

To learn more, review the information provided in this article and the following articles:  

- [Default permissions and access](permissions-access.md)  
- [Trace permissions](faq-trace-permissions.md)

<!--- 

For a look at the default permissions assigned to the default security groups. 
To access the resources you manage in Azure DevOps&mdash;such as your code, builds, and work tracking&mdash;you must have permissions for those specific resources. Most permissions are granted through built-in security groups as described in [Permissions and access](permissions-access.md). You can grant or deny permissions to specific users, built-in security groups, or groups defined in Azure Active Directory (Azure AD) if integrated with Azure DevOps, or Active Directory if integrated with TFS. 

Permissions may apply to a specific project or objects within the project, such as Git or TFVC repositories, branches, build pipelines, area paths, and more. Or, they can apply to an entire Azure DevOps organization or TFS collection, or to a TFS instance. Each functional area uses groups to simplify management across the deployment.

- Security groups
- Permissions versus access levels 
- Access levels 
- Permission levels 
- Permission settings
- Permission inheritance and security groups
- Role-based access control 
- Feature flags 

-->


<a id="security-group-membership" /> 

## Security groups and membership  

With the creation of an organization, collection, or project&mdash;Azure DevOps creates a set of default security groups which are automatically assigned default permissions. Additional security groups are defined with the following actions: 
- When you add a custom security group. You can create custom security groups at the following levels: 
	- Project-level
	- Organization- or collection-level
	- Server-level (on-premises only)
- When you add a team, a team security group is created 

::: moniker range="azure-devops"
Security group members can be a combination of users, other groups, and Azure Active Directory groups.  
::: moniker-end
::: moniker range="< azure-devops"
Security group members can be a combination of users, other groups, and Active Directory groups or a Workgroup.  
::: moniker-end

Most users are assigned to the Contributors group for a project to provide them access to the features they need to access. Administrators should be added to the Project Collection Administrators or Project Administrators group. 

 
### Populate security groups

You can populate security groups by adding individual users. However, for ease of management, it's easier if you populate these groups by using Azure Active Directory (Azure AD), Active Directory (AD), or Windows security groups. This method enables you to manage group membership and permissions more efficiently across multiple computers.

::: moniker range="azure-devops"

:::image type="content" source="media/about-security/add-active-directory-groups.png" alt-text="Conceptual image showing adding Azure Active Directory groups to Azure DevOps security groups, cloud":::

::: moniker-end

::: moniker range=">= azure-devops-2019 <= azure-devops-2020"

:::image type="content" source="media/about-security/add-active-directory-groups.png" alt-text="Conceptual image showing adding Active Directory groups to Azure DevOps security groups , on-premises":::

::: moniker-end

::: moniker range="<= tfs-2018"

![Conceptual image showing defining AD groups](media/permissions/grant-permissions.png)

Of course, you don't need to grant permissions for reports or the project portal if your project doesn't use SQL Server Reporting Services or a SharePoint site.
::: moniker-end


 
<a name="validusers"></a>

### Valid user groups

When you add accounts of users directly to a security group, they are automatically added to one of the valid user groups.

::: moniker range="azure-devops"
- Project Collection Valid Users: All members added to an organization-level groups.
- Project Valid Users: All members added to a project-level group.
::: moniker-end
::: moniker range="azure-devops-2019 || azure-devops-2020"
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

This means that all users that you add to one project can view the objects in other projects within a collection.
If you need to restrict view access, then you can [set restrictions through the area path node](../../organizations/security/set-permissions-access-work-tracking.md).

If you remove or deny the **View instance-level information** permission for one of the valid users groups,
no members of the group are able to access the project, collection, or deployment, depending on the group you set.


<a id="grant-permissions"  >  </a>  
<a id="access-levels" />

## Access levels 

Access levels control what features are visible to users in the web portal,
and are dependent on user licenses; permissions control a user's ability to connect to Azure DevOps and use features across Azure DevOps. 
If you're trying to give someone access to Agile portfolio management 
or test case management features, 
you'll want to [change access levels](change-access-levels.md), not permissions. 
 
Setting the access level for users or groups doesn't provide them access to a project or the web portal. Only users or groups added to a team or security group can connect to a project and the web portal. Make sure your users have both the permissions and the access level they need. You do this by making sure they're [added to the project or a team](add-users-team-project.md).


## Permission levels 

::: moniker range="azure-devops"

As shown in the following image, security groups defined at the project and collection-level can be assigned to permissions assigned at the object, project, and collection level. 

:::image type="content" source="media/about-security/security-groups-permission-management-cloud.png" alt-text="Conceptual image mapping default security groups to permission levels, cloud":::

::: moniker-end

::: moniker range="<= azure-devops-2020"

As shown in the following image, security groups defined at the project and collection-level can be assigned to permissions assigned at the object, project, and collection level. You can only define server-level security groups to server-level permissions. 
::: moniker-end

::: moniker range=">= azure-devops-2019 <= azure-devops-2020"
:::image type="content" source="media/about-security/security-groups-permission-management-on-premises.png" alt-text="Conceptual image mapping default security groups to permission levels, on-premises":::

::: moniker-end

::: moniker range="< azure-devops-2019"
![Conceptual image of security groups and permission levels, TFS-2018 and earlier versions](media/permissions/permissions-overview.png) 
::: moniker-end
 
For a description of each default security group, see [Security groups, service accounts, and permissions](permissions.md#groups).


<a id="security-roles" />

## Permission settings

Here's what you need to know about permission settings:

- **Allow** or **Deny** explicitly grants or restricts users from performing specific tasks, and are usually inherited from group membership.

- **Not set** implicitly denies users the ability to perform tasks that require that permission, but allows membership in a group that does have that permission set to take precedence, also known as **Allow (inherited)** or **Inherited allow** and **Deny (inherited)** or **Inherited deny**.

- For most groups and almost all permissions, **Deny** overrides **Allow**. If a user belongs to two groups, and one of them has a specific permission set to **Deny**, that user is not able to perform tasks that require that permission even if they belong to a group that has that permission set to **Allow**.

	For members of the **Project Collection Administrators** or **Team Foundation Administrators** groups, **Deny** doesn't trump **Allow**. Permissions assigned to these groups take precedent over any **Deny** set within any other group to which that member might belong. 
	**Project Collection Administrators** or **Team Foundation Administrators** permissions will not take precedence for work item operations, such as deletion. **Deny** will override **Allow** for these permissions.

- Changing a permission for a group changes that permission for all users who are members of that group. In other words, depending on the size of the group, you might affect the ability of hundreds of users to do their jobs by changing just one permission. So make sure you understand the impact before you make a change.

<a name="inheritance"></a>

## Permission inheritance and security groups 

Some permissions are managed through a hierarchy. Within this hierarchy,
permissions can be inherited from the parent or overridden. Security groups assign a set of permissions to those members of the group. For example, members of the **Contributors** group or **Project Administrators** group are assigned the permissions that are set as **Allowed** to those groups. 

If a permission isn't directly allowed or denied for a user, then it may be inherited in two ways.

- Users inherit permissions from the groups to which they belong.
When a permission is allowed for a user directly or through membership in a group that has that permission,
and it is denied, either directly or through group membership,
the permission is denied.

   Members of **Project Collection Administrators** or **Team Foundation Administrators** retain most allowed permissions, even if they belong to other groups that deny those permissions. Work item operation permissions are the exception to this rule.

- Object-level permissions that are assigned for nodes of a hierarchy -
areas, iterations, version control folders, work item query folders -
are inherited down the hierarchy.
That is, a user's permissions that are set at `area-1` are inherited by `area-1/sub-area-1`,
if the same permission is not explicitly allowed or denied for `area-1/sub-area-1`.
If a permission is set explicitly for an object, like `area-1/sub-area-1`,
then the parent node is not inherited, regardless of whether it is denied or allowed.
If it's not set, then the permissions for that node are inherited from the closest ancestor
that has the permission explicitly set. Lastly, in the object hierarchy, specificity trumps inheritance. For example, a user whose permissions are explicitly set to **Deny** on 'area-1' but are also explicitly set to **Allow** for 'area-1/sub-area-1' will ultimately receive an **Allow** on 'area-1/sub-area-1'. 

To understand why a permission is inherited, you can pause over a permission setting, and then choose **Why?** To open a  **Security** page, see [View permissions](view-permissions.md).

::: moniker range="= azure-devops"

> [!NOTE]   
> To enable the new user interface for the Project Permissions Settings Page, see [Enable preview features](../../project/navigation/preview-features.md).

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

::: moniker range=">= tfs-2017"

> [!div class="mx-imgBorder"]  
> ![Permissions dialog, current page, Why link annotated.](media/about-permissions-why.png)

A new window opens that shows the inheritance information for that permission.  

![Permissions trace dialog.](media/about-permissions-trace.png)

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"

![Permissions dialog, earlier versions, Why link annotated.](media/permissions/inherited-permissions.png)  

Some object level Security dialog boxes provide an Inheritance on/off option.
Use this option to disable inheritance for folders, shared queries, and other objects.

![Permissions trace dialog, earlier versions.](media/permissions/turn-on-inheritance.png)

::: moniker-end

* * *


### When assigning permissions
 
**Do:**  
- Use Windows groups when managing lots of users.  
- Consider granting the [work item query folders **Contribute**](../../boards/queries/set-query-permissions.md) permission to users or groups that require the ability to create and share work item queries for the project.  
- When adding many teams, consider creating a **Team Administrators** custom group where you allocate a subset of the permissions available to **Project Administrators**.  
- When adding teams, consider what permissions you want to assign to team leads, scrum masters, and other team members who may need to create and modify area paths, iteration paths, and queries.  


**Don't:**  
- Don't add users to the project **Readers** group that you've added to the **Project Administrators** group. Because the Readers group denies several permissions that the Project Administrators group allows, and deny takes precedence.  
- Don't change the default assignments made to the valid users groups. If you remove or set the **View instance-level information** permission to Deny for one of the Valid Users groups, no users in the group are able to access the project, collection, or deployment, depending on the group you set.  
- Don't assign permissions that are noted as 'Assign only to service accounts' to user accounts.



## Role-based access control  

With Role-based access control, user accounts are assigned to a role, with each role assigned one or more permissions. The following table lists the artifacts whose permissions are managed by role.  

| Object-level  | Project-level |Collection-level |
|----------------|----------------|----------------|
|&#8226;&nbsp; Secure files<br/>&#8226;&nbsp; Variable groups|&#8226;&nbsp; Agent pools<br/>&#8226;&nbsp; Agent queues<br/>&#8226;&nbsp; Service connections<br/>&#8226;&nbsp; Team administrator|&#8226;&nbsp;Agent pools<br/>&#8226;&nbsp; Deployment pools<br/>&#8226;&nbsp; Marketplace extensions|
 
To learn more, see [About security roles](about-security-roles.md).  



## Feature flags 
 
Access to select, new features are controlled by feature flags. Periodically, Azure DevOps Services introduces new features by placing them behind a feature flag. Features under a private preview require the organization owner to request that the feature be turned on. Other features may be introduced as a preview feature which general users can enable or disable. To learn more, see [Manage or enable features](../../project/navigation/preview-features.md).
 
## Try this next
> [!div class="nextstepaction"]
> []()


## Related articles

::: moniker range="= azure-devops"

- [Permissions and groups reference](permissions.md)  
- [Security and permission management tools](security-tools-reference.md)  
- [Add users to an organization](../accounts/add-organization-users.md) 
- [Add users to a team or a project](../../organizations/security/add-users-team-project.md)   
- [Add and manage security groups](add-manage-security-groups.md)   
- [Manage tokens, namespaces, permissions](manage-tokens-namespaces.md)   
- [Make a user a team admin](../settings/manage-teams.md)  
::: moniker-end  


::: moniker range="< azure-devops"  
- [Permissions and groups reference](permissions.md)  
- [Security and permission management tools](security-tools-reference.md)  
- [Add users to a team or a project](../../organizations/security/add-users-team-project.md)   
- [Add users to an administrator role](/azure/devops/server/admin/add-administrator)   
- [Make a user a team admin](../settings/manage-teams.md)  
- [Change groups and permissions with TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd)
::: moniker-end