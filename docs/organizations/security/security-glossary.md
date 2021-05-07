---
title: Security terms and acronyms defined
titleSuffix: Azure DevOps
description: Key definitions for objects and items used to authenticate and manage users and groups in Azure DevOps
ms.technology: devops-security
ms.assetid: 
ms.topic: conceptual 
ms.custom: has-adal-ref
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 01/25/2021
---

# Security key concepts

[!INCLUDE [version-all](../../includes/version-all.md)]

This article provides definitions for select terms used to manage authentication and permissions for Azure DevOps.
 
## Access control entries (ACE)

An access control entry is an entry in an access control list (ACL) that grants or denies a user or group access to an Azure DevOps resource. For a list of namespaces, ACEs, and management tools, see [Security namespace and permission reference](namespace-reference.md). 


## Access control list (ACL)

An access-control list is a list of permissions attached to an Azure DevOps object, such as . An ACL specifies which users or system processes can view, create, modify, delete, or otherwise manage objects. For a list of namespaces, ACLs, and management tools, see [Security namespace and permission reference](namespace-reference.md). 

## Access level

Access levels correspond to a licensing level to provide access to certain features. Access to these features is managed by membership to an access level. To learn more, see [About access levels](access-levels.md).

<!---
## Anonymous user
An unauthenticated user of a project. The user is visiting a project and has not signed in to Azure DevOps yet.
-->

::: moniker range="azure-devops"

## Audit log

Audit logs contain many changes that occur throughout an Azure DevOps organization. Changes occur when a user or service identity within the organization edits the state of an artifact, including changes to permissions. To learn more, see [Access, export, and filter audit logs](../audit/azure-devops-auditing.md).

::: moniker-end

## Authentication

Authentication verifies a user's identify based on the credentials provided when they sign into an organization in Azure DevOps. These services/servers typically integrate with and rely upon the security features provided by additional services such as Active Directory or Azure Active Directory. To learn more, see [About security, authentication, and authorization](about-security-identity.md).

## Authorization

Authorization refers to the operations performed to verify that the identity which is attempting to connect to a service or server instance has the necessary permissions to access a service, feature, function, object, or method. To learn more, see [About security, authentication, and authorization](about-security-identity.md).

## Azure Active Directory Authentication Libraries

The Azure Active Directory Authentication Library (ADAL) v1.0 enables application developers to authenticate users to cloud or on-premises Active Directory (AD), and obtain tokens for securing API calls.
> [!IMPORTANT]
> **Starting, June 30th, 2020**, we'll no longer add any new features to ADAL and Azure AD Graph. We'll continue to provide technical support and security updates, but won't provide feature updates.
> **Starting June 30th, 2022**, we'll end support for ADAL and Azure AD Graph and won't provide technical support or security updates. Apps using Azure AD Graph after this time will no longer receive responses from the Azure AD Graph endpoint. Apps using ADAL on existing OS versions will continue to work after this time but will not get any technical support or security updates.  

## Basic member

A user account that has been granted membership to an organization in Azure DevOps instance with Basic access. To learn more, see [About access levels](access-levels.md).

[!INCLUDE [temp](../../includes/glossary-terms/collections.md)]

## Conditional access

Conditional access provides support for securing Azure DevOps resources backed by an Azure Active Directory (Azure AD) tenant. For example, you can enable multi-factor authentication to help protect against the risk of compromised credentials. To learn more, see [Manage conditional access to Azure DevOps](../accounts/change-application-access-policies.md).

## Inheritance

Permissions that aren't directly allowed or denied for a user, may be inherited. To learn more, see [Get started with permissions, access, and security groups](../security/about-permissions.md).   

<!---
## Membership 

-->

## Microsoft Authentication Library

The Microsoft Authentication Library (MSAL) enables application developers to acquire tokens from the Microsoft identity platform to authenticate users and access secured web APIs. It can be used to provide secure access to Microsoft Graph, other Microsoft APIs, third-party web APIs, or your own web API. MSAL supports many different application architectures and platforms including .NET, JavaScript, Java, Python, Android, and iOS. For more information, see the [Overview of Microsoft Authentication Library](/azure/active-directory/develop/msal-overview#languages-and-frameworks).

## Namespace 

Each family of Azure DevOps resources (work items, Git repositories, an so on) is secured using a different namespace. Each security namespace contains zero or more ACLs. Each ACL contains a token, an inherit flag and a set of zero or more ACEs. Each ACE contains an identity descriptor, an allowed permissions bitmask and a denied permissions bitmask. 

For a list of Azure DevOps namespaces, see [Security namespace and permission reference](namespace-reference.md).  

## OAuth 

OAuth 2.0 is an industry-standard protocol for authorization. OAuth 2.0 is supported for Azure DevOps Services to authenticate REST APIs. To learn more, see [Authorize access to REST APIs with OAuth 2.0](../../integrate/get-started/authentication/oauth.md). 


<!---

## Organizational project

Projects that are visible to everyone in the Organization (Azure AD tenant).
Everyone in the Organization can discover them and perform limited operations.
Admins control who gets to fully contribute.
-->

::: moniker range="azure-devops"

## Organization owner

The person who created the organization or was later assigned as the organization owner. The organization owner has access to all Azure DevOps features and functions, and can grant access to others to features and functions. To look up or change organization owner, see [Change the organization owner](../accounts/change-organization-ownership.md).

::: moniker-end

## Personal Access Token (PAT)

Personal access tokens (PATs) are alternate passwords that you can use to authenticate into Azure DevOps. To learn how to create and revoke PATs, see [Authenticate access with personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md). 


## Permission

The assignment made to a user or group to use a feature or function. Permissions are assigned to default security groups. To learn more, see [Get started with permissions, access, and security groups](../security/about-permissions.md).

## Permission state

The state assigned to a feature or function to a user's or group's permission. Users have permission to access a feature if their permission is set to **Allow** or **Inherited Allow**. They don't have permission when the state is set to **Deny**, **Inherited deny**, or **Not set**. To learn more, see [Get started with permissions, access, and security groups](../security/about-permissions.md).


## Role-based permissions

A security model that limits actions based on membership within a role and permissions assigned to that role. To learn more, see [About permissions, access, and security groups, Role-based permissions](about-permissions.md#security-roles).

## Security group

A method by which you can organize users and other domain objects to simplify administration of permissions and access. Azure DevOps  support a number of default security groups as well as the ability to create custom groups. To learn more, see [Get started with permissions, access, and security groups](../security/about-permissions.md).

## Service account

An account used to monitor or manage select services, such as build or test services.

## Service principal

A service principal is the local representation, or application instance, of a global application object in a single tenant or directory. When an application is given permission to access resources in a tenant (upon registration or consent), a service principal object is created. To learn more, see [Application and service principal objects in Azure Active Directory](/azure/active-directory/develop/app-objects-and-service-principals).


## Secure Sockets Layer (SSL)

SSL is a protocol used to strengthen the security of cloud-hosted and on-premises applications by configuring it to use Hypertext Transfer Protocol Secure (HTTPS) with Secure Sockets Layer (SSL).

SSL is always used to protect Azure DevOps data. To learn more, see [Data Protection Overview](./data-protection.md).

For on-premises deployments, SSL is optional. To learn more, see [Setting up HTTPS with Secure Sockets Layer (SSL) for Team Foundation Server](/azure/devops/server/admin/setup-secure-sockets-layer).

## Stakeholder

A user account that has been granted membership to an organization in an Azure DevOps instance with Stakeholder access. With Stakeholder access, you can add and modify work items, check project status, manage pipelines, and view and manage dashboards. To learn more, see [Get started as a Stakeholder](get-started-stakeholder.md).

## Team group

A security group that is defined when a team is created and automatically populated with members as they are added to the team.

::: moniker range="azure-devops"

## Tenant

An Azure Active Directory used to manage access or billing. To learn more, see [Change Azure AD tenant](../accounts/change-organization-location.md)

::: moniker-end

## Token  

Tokens are arbitrary strings representing resources in Azure DevOps. Token format differs per resource type, however hierarchy and separator characters are common between all tokens. For details, see [REST API Security](/rest/api/azure/devops/security). 

*Each family of Azure DevOps resources (work items, Git repositories, an so on) is secured using a different namespace. Each security namespace contains zero or more ACLs. Each ACL contains a token, an inherit flag and a set of zero or more ACEs. Each ACE contains an identity descriptor, an allowed permissions bitmask and a denied permissions bitmask*. 

For Azure DevOps Services, you can manage tokens and namespaces using the **az devops security permission** commands. For details, see [Manage tokens and namespaces](manage-tokens-namespaces.md).

For Azure DevOps Server, see [Use TFSSecurity to manage groups and permissions for Azure DevOps](/azure/devops/server/command-line/tfssecurity-cmd). 


<!---
## Trace permission
-->

## Valid users

Valid users are users that are recognized by Azure DevOps as being able to connect to the account or a project. When you add accounts of users directly to a built-in group or through a Windows, Active Directory, or Azure Active Directory group, they are automatically added to one of the valid user groups. To learn more, see [Get started with permissions, access, and security groups](about-permissions.md).



## Related articles

- [Permissions lookup guide](permissions-lookup-guide.md)
- [REST API Security](/rest/api/azure/devops/security)