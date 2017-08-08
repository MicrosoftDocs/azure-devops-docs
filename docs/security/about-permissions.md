---
title: Permissions | Team Services & TFS
description: Understand how permissions are managed in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-tfs
ms.assetid: 
toc: show
ms.manager: douge
ms.author: kaelli
ms.date: 08/04/2017
---



# Authentication, permissions, and access 

**Team Services | TFS 2017 | TFS 2015** 

<!--- TO BE COMPLETED   --> 

Answers these questions:  
- How does authentication work? 
- How are permissions managed? Permission levels - collection, project, group, server   
- What are access levels? How are they managed? 
- Built-in/default groups 
- Other - ssh  
- Active Directory usage  

 > [!NOTE] 
 > Permissions are different than access levels.
 > Access levels control what features are visible to users in the web portal,
 > and are dependent on user licenses; permissions control a user's ability to use features across TFS.
 > If you're just trying to give someone access to a team room or to Agile portfolio management
 > and test case management features,
 > you'll want to [change access levels](../work/connect/change-access-levels.md), not permissions.


## Manage large numbers of users using Active Directory, Azure Active Directory, or Windows groups

If you need to set permissions for large numbers of users,
create a group in Windows, Active Directory, or Azure Active Directory,
add these groups to TFS groups or Team Services groups,
and add the same groups to grant access to additional resources.

<img src="../setup-admin/_img/permissions/grant-permissions.png" style="border: 1px solid #CCCCCC" />

Of course, you don't need to grant permissions for reports or the project portal
if your team project doesn't use SQL Server Reporting Services or a SharePoint site.

## Tools used to set permissions

You can use the tools listed in the following table to set permissions.
Different tools are used depending on whether you are setting permissions at a server, collection, or team project level.
You use the [TFS web portal administration context](../setup-admin/add-users.md) to set most permissions.  

|Permission level|Web portal security pages |Team Foundation Administration Console|TFSSecurity command-line tool|Tf command-line tool|TFSLabConfig command-line tool|
|---|:---:|:---:|:---:|:---:|:---:|
|[Server-level](../setup-admin/permissions.md#server)||![check mark](../_img/check.png)|![check mark](../_img/check.png)|||
|[Collection-level](../setup-admin/permissions.md#collection)|![check mark](../_img/check.png)|![check mark](../_img/check.png)|![check mark](../_img/check.png)|||
|[Team project and test level](../setup-admin/permissions.md#project_test)|![check mark](../_img/check.png)||![check mark](../_img/check.png)|||
|[Build level](../setup-admin/permissions.md#build)|![check mark](../_img/check.png)||![check mark](../_img/check.png)|||
|[Git repository](../setup-admin/permissions.md#git-repo)|![check mark](../_img/check.png)|||![check mark](../_img/check.png)||
|[Team Foundation Version Control](../setup-admin/permissions.md#tfvc)|![check mark](../_img/check.png)|||![check mark](../_img/check.png)||
|[Area level for work item tracking](../setup-admin/permissions.md#area-permissions)|![check mark](../_img/check.png)||![check mark](../_img/check.png)|||
|[Iteration level for work item tracking](../setup-admin/permissions.md#iteration-path-permissions)|![check mark](../_img/check.png)||![check mark](../_img/check.png)|||
|[Work item query](../setup-admin/permissions.md#query)|![check mark](../_img/check.png)||![check mark](../_img/check.png)|||
|[Work item tags](../setup-admin/permissions.md#tags)|||![check mark](../_img/check.png)|||
|[Alerts](../setup-admin/permissions.md#alerts)|||![check mark](../_img/check.png)|||
|[Release Management](../setup-admin/permissions.md#release_management) |![check mark](../_img/check.png)||||| |
|[Lab Management](../setup-admin/permissions.md#lab)|||||![check mark](../_img/check.png)|


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
A new window will open. It displays the inheritance information for that permission.

<img src="../setup-admin/_img/permissions/inherited-permissions.png" style="border: 1px solid #CCCCCC" />

Some object level Security dialog boxes provide an Inheritance on/off option.
Use this option to disable inheritance for folders, shared queries, and other objects.

<img src="../setup-admin/_img/permissions/turn-on-inheritance.png" style="border: 1px solid #CCCCCC" />

**When assigning permissions**
 
**Do:**  
- Use Windows groups when managing lots of users.  
- Consider granting the [work item quyery folders **Contribute**](#workitemqueryfolders-contiribute-permission) permission to users or groups that require the ability to create and share work item queries for the team project.  
- When adding many teams, consider creating a **Team Administrators** group to TFS where you allocate a subset of the permissions available to **Project Administrators**.  
- When adding teams, consider what permissions you want to assign to team leads, scrum masters, and other team members who may need to create and modify area paths, iteration paths, and queries.  


**Don't:**  
- Don’t add accounts to the team project **Readers** group that you’ve added to the **Project Administrators** group. Because the Readers group denies several permissions that the Project Administrators group allows, and deny takes precedence.  
- Don’t change the default assignments made to the valid users groups. If you remove or set the **View instance-level information** permission to Deny for one of the Valid Users groups, no users in the group will be able to access the team project, collection, or deployment, depending on the group you set.  
- Don’t assign permissions that are noted as ‘Assign only to service accounts’ to user accounts.



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
If you need to restrict view access, then you can [set restrictions through the area path node](../work/how-to/set-permissions-access-work-tracking.md).
For additional methods, see [Restrict access in TFS](../setup-admin/restrict-access-tfs.md).

If you remove or deny the **View instance-level information** permission for one of the Valid Users groups,
no users in the group will be able to access the team project, collection, or deployment, depending on the group you set.

In addition, the `VALIDUSER` element can be used [to allow or restrict access for work item tracking](../setup-admin/restrict-access-tfs.md#work-items).

## SQL Server reports (TFS) 

For information about how to set permissions in Reporting Services,
see [Add administrators to TFS](../setup-admin/add-administrator-tfs.md).


## SharePoint integration (TFS)  

For information about how to set permissions for SharePoint Products integrated with TFS,
see [Add administrators to TFS](../setup-admin/add-administrator-tfs.md).

For more information, see [Determine permission levels and groups in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262690.aspx).


## Authentication methods, integrating with other services and apps 

With VSTS and TFS, other applications and services can integrate with VSTS and TFS services and resources. To access your account without asking for user credentials multiple times, apps can use these authentication methods:

*	[OAuth](/vsts/integrate/get-started/Authentication/oauth) 
to generate tokens for accessing [REST APIs for Team Services and Team Foundation Server](/vsts/integrate/get-started/rest/basics). 
The [Accounts](/vsts/integrate/api/shared/accounts) 
and [Profiles](/vsts/integrate/api/shared/profiles) 
APIs support only OAuth.

*	[Alternate credentials](../git/auth-overview.md#alternate-credentials) 
as a single set of credentials across all tools that don't have 
plug-in, extension, or native support. For example, 
you can use basic authentication to access 
[REST APIs for Team Services and TFS](../integrate/get-started/rest/basics.md), 
but you must turn on alternate credentials.

*	[SSH authentication](../git/use-ssh-keys-to-authenticate.md) 
to generate encryption keys when you use Linux, Mac, 
or Windows running [Git for Windows](http://www.git-scm.com/download/win) 
and can't use 
[Git credential managers](../git/set-up-credential-managers.md) 
or [personal access tokens](use-personal-access-tokens-to-authenticate.md) 
for HTTPS authentication.

*	[Personal access tokens](../setup-admin/team-services/use-personal-access-tokens-to-authenticate.md) 
to generate tokens for: 

	*	Accessing specific resources or activities, like builds or work items
	*	Clients like Xcode and Nuget that require usernames and passwords 
		as basic credentials and don't support Microsoft account 
		and Azure Active Directory features like multi-factor authentication 
	*	Accessing [REST APIs for Team Services and TFS](../../integrate/get-started/rest/basics.md)

By default, your account or collection allows access for all authentication methods. 
You can limit access, but you must specifically restrict access for each method. 
When you deny access to an authentication method, 
no app can use that method to access your account. 
Any app that previously had access will get an 
authentication error and can't access your account.

> To remove access for personal access tokens, 
> you must [revoke them](../setup-admin/team-services/use-personal-access-tokens-to-authenticate.md).





<!-- TODO: Cover how to set permissions for Reporting Services and SharePoint as mainline sections. -->  