---
title: About security and identity | Team Services & TFS
description: Understand how VSTS and TFS manage security and accounts 
ms.prod: vs-devops-alm
ms.technology: vs-devops-tfs
ms.assetid: 
toc: show
ms.manager: douge
ms.author: kaelli
ms.date: 08/11/2017
---

# About security and identity  

**Team Services | TFS 2017 | TFS 2015** 

<!--- TO BE COMPLETED   --> 

!!! WORK IN PROGRESS !!! 

Answers these questions:  
- What elements are in place to maintain security  
- How are user accounts managed  
- How does authentication work? 
- How are permissions managed? Permission levels - collection, project, group, server   
- What are access levels? How are they managed? 
- Built-in/default groups 
- Other - ssh  
- Active Directory usage  

!!! WORK IN PROGRESS !!! 

The two main security concepts to understand are *Authentication* and *Authorization*. 

Authentication is the verification of the credentials of a connection attempt from a client, server, or process. Authorization is the verification that the identity that is attempting to connect has permissions to access the object or method. Also, for select features, they may need to belong to an access level that grants them access to a feature. 

Authorization always occurs after successful authentication. If a connection is not authenticated, it fails before any authorization checking is performed. If authentication of a connection succeeds, a specific action might still be disallowed because the user or group did not have authorization to perform that action.  

## Authentication

VSTS and TFS security is integrated with and relies upon Azure Active Directory (AAD) or Active Directory (AD) for integrated authentication and the security features of AAD and AD.  

## Authorization

Authorization is based on users and groups, and the permissions assigned directly to both those users and groups and permissions those users and groups might inherit by belonging to other VSTS or TFS security groups. These users and groups can be AAD or AD users and groups. For TFS, they can also be local users and groups.

## Built-in (default) security groups and permissions  

VSTS and TFS are preconfigured with default groups at these levels and permissions defined at corresponding levels: 

> [!div class="mx-tdBreakAll"]  
> | Security groups | Permission levels |  
> |-------------|----------| 
> |-- Team project level<br/>- Collection or Account level<br/>- Server level (TFS only) |- Object-level<br/>- Project-level<br/>- Collection-level<br/>- Server-level (TFS only) |

You can populate these groups by using individual users. However, for ease of management, it's easier if you populate these groups by using AAD or AD security groups. This method enables you to manage group membership and permissions more efficiently across multiple computers.

<table valign="top">
<tr valign="top">
<td>![Conceptual image of permissions and access levels](_img/permissions/permissions-overview.png) </td>
<td><p>**Permission states**</p>
<p>User or group has permissions to perform a task:</p>
<ul>
<li>**Allow**</li>
<li>**Inherited allow**</li>
</ul>
<p>User or group doesn't have permission to perform a task:</p>
<ul>
<li>**Deny**</li>
<li>**Inherited deny**</li>
<li>**Not set**</li>
</ul>

To learn more about inheritance, see [About permissions.md](about-permissions.md#inheritance).
</td>
</tr>
</table>

> [!NOTE]  
> Certain features are only available to users who have the appropriate licensing level for those features. Access to those features is not controlled by permissions
but by membership in an access level. To learn more, see [Access levels](access-levels.md). 

See these topics for more information: 
- [Permissions and groups reference](permissions.md)
- [Access with Azure Active Directory (Azure AD)](../accounts/add-users-to-aad.md). 
- [Set up groups for use in TFS deployments](../tfs-server/admin/setup-ad-groups.md).


## Manage large numbers of users using Active Directory, Azure Active Directory, or Windows groups

If you need to set permissions for large numbers of users,
create a group in Windows, Active Directory, or Azure Active Directory,
add these groups to TFS groups or Team Services groups,
and add the same groups to grant access to additional resources.

<img src="_img/permissions/grant-permissions.png" style="border: 1px solid #CCCCCC" />

Of course, you don't need to grant permissions for reports or the project portal
if your team project doesn't use SQL Server Reporting Services or a SharePoint site.

## Permissions 

Besides configuring permissions for authorization, you might need authorization within source code control and within work items. These permissions are managed separately at the command line, but are integrated as part of the Team Explorer interface. For more information about source control permissions, see Team Foundation Version Control. For more information about work item customization, see Working with Team Foundation Work Items.

<!--- 
VSTS and TFS security concepts fall into three general categories: topology, authentication, and authorization. Topology includes where and how Team Foundation servers are deployed, the network traffic that passes between Team Foundation Server and Team Foundation clients, and the services that must run on Team Foundation Server. Authentication includes the determination of the validity of Team Foundation Server users, groups, and services. Authorization includes the determination of whether valid Team Foundation Server users, groups, and services have the appropriate permissions to perform actions. Also, you must consider Team Foundation Server dependencies on other components and services in order to optimize the security of Team Foundation Server in the network.
When you consider Team Foundation Server security, you must understand the difference between authentication and authorization.


 > [!NOTE] 
 > Permissions are different than access levels.
 > Access levels control what features are visible to users in the web portal,
 > and are dependent on user licenses; permissions control a user's ability to use features across TFS.
 > If you're just trying to give someone access to a team room or to Agile portfolio management
 > and test case management features,
 > you'll want to [change access levels](change-access-levels.md), not permissions.



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
or [personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md) 
for HTTPS authentication.

*	[Personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md) 
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
> you must [revoke them](../accounts/use-personal-access-tokens-to-authenticate.md).


## On-premises TFS 
- [Setting up HTTPS with Secure Sockets Layer (SSL)](../tfs-server/admin/setup-secure-sockets-layer.md)



<!-- TODO: Cover how to set permissions for Reporting Services and SharePoint as mainline sections. -->  