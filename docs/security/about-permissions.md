---
title: Understand how permissions and groups are defined in VSTS & TFS
description: Understand how permissions are managed in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 
toc: show
ms.manager: douge
ms.author: kaelli
ms.date: 11/28/2017
---

# About permissions and groups 


[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

To access the resources you manage in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)&mdash;like your code, builds, and work&mdash;you need to have permissions to those specific resources. Most permissions are granted through built-in security groups as described in [Permissions and access](permissions-access.md).

Permissions may apply to a specific team project or objects within the team project, such as Git or TFVC repositories, branches, build definitions, area paths, and more. Or, they can apply to an entire VSTS account or TFS collection, or to a TFS instance. Each functional area uses groups to simplify management across the deployment.

You manage security groups and permissions from the web portal administration context. Permissions are automatically set based on the group that you add users to, or based on the object, project, collection, or server level to which you add groups.

## Permission settings 

Here's what you need to know about permission settings:  

-   **Allow** or **Deny** explicitly grants or restricts users from performing specific tasks, and are usually inherited from group membership.  

-   **Not set** implicitly denies users the ability to perform tasks that require that permission, but allows membership in a group that does have that permission set to take precedence, also known as **Allow (inherited)** or **Inherited allow** and **Deny (inherited)** or **Inherited deny**.  

-   For most groups and almost all permissions, **Deny** trumps **Allow**. If a user belongs to two groups, and one of them has a specific permission set to **Deny**, that user will not be able to perform tasks that require that permission even if they belong to a group that has that permission set to **Allow**.  

    For members of the **Project Collection Administrators** or **Team Foundation Administrators** groups, Deny doesn't trump Allow. Permissions assigned to these groups take precedent over any Deny set within any other group to which that member might belong.

-   Changing a permission for a group changes that permission for all users who are members of that group. In other words, depending on the size of the group, you might affect the ability of hundreds of users to do their jobs by changing just one permission. So make sure you understand the impact before you make a change.


<a name="inheritance"></a>
## Inheritance

If a permission isn't directly allowed or denied for a user, then it may be inherited in two ways.
- Users inherit permissions from the groups to which they belong.
When a permission is allowed for a user directly or through membership in a group that has that permission,
and it is denied, either directly or through group membership,
the permission is denied.

	> Members of **Project Collection Administrators** or **Team Foundation Administrators**
	> retain any allowed permissions, even if they belong to other groups that deny those permissions.

- Object-level permissions that are assigned for nodes of a hierarchy -
areas, iterations, version control folders, work item query folders -
are inherited down the hierarchy.
That is, a user's permissions that are set at `area-1` are inherited by `area-1/sub-area-1`,
if the same permission is not explicitly allowed or denied for `area-1/sub-area-1`.
If a permission is set explicitly for an object, like `area-1/sub-area-1`,
then the parent node is not inheritied, regardless of whether it is denied or allowed.
If it's not set, then the permissions for that node are inheritied from the closest ancestor
that has the permission explicitly set.

To understand why a permission is inherited, you can pause over the permission setting, and then choose **Why?**.

###VSTS, TFS 2017 

<img src="_img/about-permissions-why.png" style="border: 1px solid #C3C3C3;" />

A new window opens that shows the inheritance information for that permission.  

<img src="_img/about-permissions-trace.png" style="border: 1px solid #C3C3C3;" />

### TFS 2015, TFS 2013 
<img src="_img/permissions/inherited-permissions.png" style="border: 1px solid #C3C3C3;" />

Some object level Security dialog boxes provide an Inheritance on/off option.
Use this option to disable inheritance for folders, shared queries, and other objects.

<img src="_img/permissions/turn-on-inheritance.png" style="border: 1px solid #C3C3C3;" />

**When assigning permissions**
 
**Do:**  
- Use Windows groups when managing lots of users.  
- Consider granting the [work item query folders **Contribute**](../work/track/set-query-permissions.md) permission to users or groups that require the ability to create and share work item queries for the team project.  
- When adding many teams, consider creating a **Team Administrators** group to TFS where you allocate a subset of the permissions available to **Project Administrators**.  
- When adding teams, consider what permissions you want to assign to team leads, scrum masters, and other team members who may need to create and modify area paths, iteration paths, and queries.  


**Don't:**  
- Don’t add accounts to the team project **Readers** group that you’ve added to the **Project Administrators** group. Because the Readers group denies several permissions that the Project Administrators group allows, and deny takes precedence.  
- Don’t change the default assignments made to the valid users groups. If you remove or set the **View instance-level information** permission to Deny for one of the Valid Users groups, no users in the group will be able to access the team project, collection, or deployment, depending on the group you set.  
- Don’t assign permissions that are noted as ‘Assign only to service accounts’ to user accounts.


<a id="grant-permissions"  >  </a>  
## Permissions versus access levels 

Permissions are different than access levels. Access levels control what features are 
visible to users in the web portal, and are dependent on user licenses; permissions control a user's  ability to use features across TFS. 
If you're just trying to give someone access to a team room or to Agile portfolio management 
and test case management features, 
you'll want to [change access levels](change-access-levels.md), not permissions.

Setting the access level for  users or groups doesn't provide them access to a team project or the web portal. Only users or groups added to a team or TFS group can connect to a team project and the web portal. Make sure your users have both the permissions and the access level they need. You do this by making sure they're [added to the team project or a team](add-users-team-project.md).


## Manage large numbers of users using Active Directory, Azure Active Directory, or Windows groups

If you need to set permissions for large numbers of users,
create a group in Windows, Active Directory, or Azure Active Directory,
add these groups to TFS groups or VSTS groups,
and add the same groups to grant access to additional resources.

<img src="_img/permissions/grant-permissions.png" style="border: 1px solid #C3C3C3;" />

Of course, you don't need to grant permissions for reports or the project portal
if your team project doesn't use SQL Server Reporting Services or a SharePoint site.


<a name="validusers"></a>
## Valid user groups

When you add accounts of users directly to a built-in group or through a Windows group, they are automatically added to one of the valid user groups.
-   *Server*\\Team Foundation Valid Users: All members added to server-level groups.  
-   *ProjectCollectionName*\\Project Collection Valid Users: All members added to collection-level groups.  
-   *TeamProjectName*\\Project Valid Users: All members added to team project-level groups.  

The default permissions assigned to these groups are primarily limited to 
read access, such as **View build resources**, **View project-level 
information**, and **View collection-level information**.

This means that all users that you add to one team project can view the objects in other team projects within a collection.
If you need to restrict view access, then you can [set restrictions through the area path node](../security/set-permissions-access-work-tracking.md).

If you remove or deny the **View instance-level information** permission for one of the Valid Users groups,
no users in the group will be able to access the team project, collection, or deployment, depending on the group you set.


## Tools used to set permissions

You set most permissions through the web portal. You can use the tools listed in the following table to set permissions.
Different tools are used depending on whether you are setting permissions at a server, collection, or team project level.
You use the [web portal administration context](../security/add-users-team-project.md) to set most permissions.  

|Permission level|Web portal security pages |Team Foundation Administration Console|TFSSecurity command-line tool|Tf command-line tool|TFSLabConfig command-line tool|
|---|:---:|:---:|:---:|:---:|:---:|
|[Server-level](permissions.md#server)||![check mark](../_img/check.png)|![check mark](../_img/check.png)|||
|[Collection-level](permissions.md#collection)|![check mark](../_img/check.png)|![check mark](../_img/check.png)|![check mark](../_img/check.png)|||
|[Team project and test level](permissions.md#project_test)|![check mark](../_img/check.png)||![check mark](../_img/check.png)|||
|[Build level](permissions.md#build)|![check mark](../_img/check.png)||![check mark](../_img/check.png)|||
|[Git repository](permissions.md#git-repo)|![check mark](../_img/check.png)|||![check mark](../_img/check.png)||
|[Team Foundation Version Control](permissions.md#tfvc)|![check mark](../_img/check.png)|||![check mark](../_img/check.png)||
|[Area level for work item tracking](permissions.md#area-permissions)|![check mark](../_img/check.png)||![check mark](../_img/check.png)|||
|[Iteration level for work item tracking](permissions.md#iteration-path-permissions)|![check mark](../_img/check.png)||![check mark](../_img/check.png)|||
|[Work item query](permissions.md#query)|![check mark](../_img/check.png)||![check mark](../_img/check.png)|||
|[Work item tags](permissions.md#tags)|||![check mark](../_img/check.png)|||
|[Alerts](permissions.md#alerts)|||![check mark](../_img/check.png)|||
|[Release Management](permissions.md#release_management) |![check mark](../_img/check.png)||||| |
|[Lab Management](permissions.md#lab)|||||![check mark](../_img/check.png)|




## Setting permissions for SharePoint integration (TFS only)    

For information about how to set permissions for SharePoint Products integrated with TFS,
see [Set SharePoint site permissions](../security/set-sharepoint-permissions.md).

For more information, see [Determine permission levels and groups in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262690.aspx).


## Setting permissions for SQL Server reports (TFS only) 

For information about how to set permissions in Reporting Services,
see [Grant permissions to view or create SQL Server reports in TFS](../report/admin/grant-permissions-to-reports.md).


