---
title: Security terms in use VSTS & TFS 
description: Key definitions for objects and items used to authenticate and manage users and groups 
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid:  
ms.manager: douge
ms.author: kaelli
ms.date: 12/18/2017
---

# Security glossary 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

The Microsoft Security glossary is a short dictionary of terms used in authenticating users and managing permissions on the Visual Studio Team Services (VSTS) and Team Foundation Server platforms.   

<!--- 
 
## Access control entries - ACE

## Access control list (ACL)

-->

## Access level 
Access levels correspond to a licensing level to provide access to certain features. Access to these features is managed by membership to an access level. To learn more, see [About access levels](access-levels.md). 

<!---
## Anonymous user
An unauthenticated user of a project. The user is visiting a project and has not signed in to VSTS yet.
-->

## Authentication 

Authentication verifies a user's identify based on the credentials provided when they sign into a VSTS account or TFS. These services/servers typically integrate with and rely upon the security features provided by additional services such as Active Directory or Azure Active Directory. To learn more, see [About security and identity](about-security-identity.md). 

## Authorization
Authorization refers to the operations performed to verify that the identity which is attempting to connect to a service or server instance has the necessary permissions to access a service, feature, function, object, or method. To learn more, see [About security and identity](about-security-identity.md). 

## Basic member 
A user account that has been granted membership to a VSTS account or TFS instance with Basic access. To learn more, see [About access levels](access-levels.md). 


## Conditional access  
Conditional access provides support for securing VSTS resources backed by an Azure Active Directory (AAD) tenant. For example, you can enable multi-factor authentication to help protect against the risk of compromised credentials. To learn more, see [Manage conditional access to VSTS](../accounts/manage-conditional-access.md). 

## Inheritance 

Permissions that aren't directly allowed or denied for a user, may be inherited. To learn more, see [About permissions and groups](about-permissions.md).   

<!---
## Membership 


## Namespace (security)

## Organizational project
Projects that are visible to everyone in the Organization (AAD tenant).
Everyone in the Organization can discover them and perform limited operations.
Admins control who gets to fully contribute.
-->

## Permission  
The assignment made to a user or group to use a feature or function. Permissions are assigned to default security groups. To learn more, see [About permissions and groups](about-permissions.md).   

<!---
## Private project

Projects that are visible only to members of the VSTS account hosting the project.
Only account members can discover them.
Admin controls who gets to fully contribute.

## Public project
Projects that are visible to the whole world.
Everyone in the world can discover them and perform limited operations.
Admins control who gets to fully contribute.

## Public user

-->

## Security group 
 
A method by which you can organize users and other domain objects to simplify administration of permissions and access. VSTS and TFS support a number of default security groups as well as the ability to create custom groups. To learn more, see [About permissions and groups](about-permissions.md). 


## Service account  

An account used to monitor or manage select services, such as build or test services. 

## Secure Sockets Layer (SSL)

SSL is a protocol used to strengthen the security of cloud-hosted and on-premises applications by configuring it to use Hypertext Transfer Protocol Secure (HTTPS) with Secure Sockets Layer (SSL).

SSL is always used to protect VSTS data. To learn more, see [Data Protection Overview](https://docs.microsoft.com/vsts/articles/team-services-security-whitepaper).

For on-premises TFS deployments, SSL is optional. To learn more, see [Setting up HTTPS with Secure Sockets Layer (SSL) for Team Foundation Server](../tfs-server/admin/setup-secure-sockets-layer.md).


## Stakeholder

A user account that has been granted membership to a VSTS account or TFS instance with Stakeholder access. With Stakeholder access, you can add and modify work items, check project status, approve releases, and view dashboards. To learn more, see [Get started as a Stakeholder](get-started-stakeholder.md).  
 

## Team group  

A security group that is defined when a team is created and automatically populated with members as they are added to the team. 


## Tenant 
An Azure Active Directory used to manage access or billing. To learn more, see [Change Azure AD tenant](../accounts/change-azure-active-directory-vsts-account.md)


<!---
## Token  


## Trace permission
-->

## Valid users

Valid users are users that are recognized by VSTS or TFS as being able to connect to the account or a team project. When you add accounts of users directly to a built-in group or through a Windows, Active Directory, or Azure Active Directory group, they are automatically added to one of the valid user groups. To learn more, see [About permissions and groups](about-permissions.md). 







