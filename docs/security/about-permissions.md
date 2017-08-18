---
title: Permissions | Team Services & TFS
description: Understand how permissions are managed in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-tfs
ms.assetid: 
toc: show
ms.manager: douge
ms.author: kaelli
ms.date: 08/15/2017
---



# Permissions and groups 

<!---
<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b> 
-->

<!--- TO BE COMPLETED   --> 


!!! WORK IN PROGRESS !!! 

<!--- TO BE COMPLETED  ---> 

* Provide the conceptual information about permissions and groups 
* Provide links to other salient topics   

!!! WORK IN PROGRESS !!! 

To access the resources you manage in Team Services or TFS&mdash;like your code, builds, and work&mdash;you need to have permissions to those specific resources.
Permissions may apply to an entire TFS instance, to a collection in that instance, to a team project, or to specific objects in a team project&mdash;builds, areas, iterations, work item queries, tagging, tfvc, git, lab and release management.

Each functional area uses groups to simplify management across the deployment. You add users and groups through the web portal administration context. Permissions are automatically set based on the group that you add users to, or based on the object, project, collection, or server level to which you add groups.


<a id="grant-permissions"  >  </a>  
## Permissions versus access levels  



 > [!NOTE] 
 > Permissions are different than access levels.
 > Access levels control what features are visible to users in the web portal,
 > and are dependent on user licenses; permissions control a user's ability to use features across TFS.
 > If you're just trying to give someone access to a team room or to Agile portfolio management
 > and test case management features,
 > you'll want to [change access levels](change-access-levels.md), not permissions.


Setting the access level for  users or groups doesn't provide them access to a team project or the web portal. Only users or groups added to a team or TFS group can connect to a team project and the web portal. Make sure your users have both the permissions and the access level they need. You do this by making sure they're [added to the team project](../setup-admin/add-users.md) or as a [team member](../work/scale/multiple-teams.md#add-team-members).

TFS controls access through these three inter-connected functional areas:

-   **Access level management** controls access to features provided via the web portal, the web application for TFS. Based on  what has been purchased for a user, administrators set the user's access  level to Basic, Advanced, or Stakeholder (previously labeled Standard, Full, and Limited).

-   **Membership management** supports adding individual Windows user accounts and groups to default TFS groups. Also, you can create TFS groups. Each default TFS group is associated with a set of default permissions. All users added to any TFS group are added to the Valid Users group. A valid user is someone who can connect to the team project.

-   **Permission management** controls access to specific functional tasks at different levels of the system. Object-level permissions set permissions on a file, folder, build definition, or a shared query. Permission settings correspond to **Allow**, **Deny**, **Inherited allow**, **Inherited deny**, and **Not set**.

Each functional area uses groups to simplify management across the deployment. You add users and groups through the TFS web service administration pages. Permissions are automatically set based on the TFS group that you add users to, or based on the object, project, collection, or server level to which you add groups. On the other hand, access level management controls access for all users and groups at the server level.

<img src="../work/connect/_img/access-groups-permissions.png" alt="Access levels, membership management, and permissions management" style="border: 1px solid #CCCCCC;" />  

You can create local groups or Active Directory (AD) [groups to manage your users](../setup-admin/tfs/admin/setup-ad-groups.md). If you decide to use groups, make sure that membership in those groups is limited to TFS users. Because group membership can be altered by their owners at any time, if those owners did not consider TFS when they created those groups, their changes to membership can cause unwanted side effects within TFS.  

Here's what you need to know about permission settings:  

-   **Allow** or **Deny** explicitly grants or restricts users from performing specific tasks, and are usually inherited from group membership.  

-   **Not set** implicitly denies users the ability to perform tasks that require that permission, but allows membership in a group that does have that permission set to take precedence, also known as **Inherited allow** and **Inherited deny**.  

-   For most groups and almost all permissions, **Deny** trumps **Allow**. If a user belongs to two groups, and one of them has a specific permission set to **Deny**, that user will not be able to perform tasks that require that permission even if they belong to a group that has that permission set to **Allow**.  

    For members of the **Project Collection Administrators** or **Team Foundation Administrators** groups, Deny doesn't trump Allow. Permissions assigned to these groups take precedent over any Deny set within any other group to which that member might belong.

-   Changing a permission for a group changes that permission for all users who are granted that permission through their membership in that group. In other words, depending on the size of the group, you might affect the ability of hundreds of users to do their jobs by changing just one permission. So make sure you understand the impact before you make a change.

Two useful tips for understanding the effects of change: The **Member of** tab shows the groups that an individual user or group belongs to. You can also hover over an inherited permission, and a **Why?** icon will appear. If you choose it, a dialog box will open with more information.

<img src="../work/connect/_img/control-panel-contributors-group-permissions.png" alt="Control panel, team project, Security tab, Contributors group, permissions" style="border: 1px solid #CCCCCC;" />  


## Tools used to set permissions

You set most permissions through the web portal. You can use the tools listed in the following table to set permissions.
Different tools are used depending on whether you are setting permissions at a server, collection, or team project level.
You use the [TFS web portal administration context](../setup-admin/add-users.md) to set most permissions.  

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
or [personal access tokens](../setup-admin/team-services/use-personal-access-tokens-to-authenticate.md) 
for HTTPS authentication.

*	[Personal access tokens](../setup-admin/team-services/use-personal-access-tokens-to-authenticate.md) 
to generate tokens for: 

	*	Accessing specific resources or activities, like builds or work items
	*	Clients like Xcode and Nuget that require usernames and passwords 
		as basic credentials and don't support Microsoft account 
		and Azure Active Directory features like multi-factor authentication 
	*	Accessing [REST APIs for Team Services and TFS](../integrate/get-started/rest/basics.md)

By default, your account or collection allows access for all authentication methods. 
You can limit access, but you must specifically restrict access for each method. 
When you deny access to an authentication method, 
no app can use that method to access your account. 
Any app that previously had access will get an 
authentication error and can't access your account.

> To remove access for personal access tokens, 
> you must [revoke them](../setup-admin/team-services/use-personal-access-tokens-to-authenticate.md).





<!-- TODO: Cover how to set permissions for Reporting Services and SharePoint as mainline sections. -->  