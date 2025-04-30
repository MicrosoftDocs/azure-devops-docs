---
title: About security, authentication, authorization, and security policies 
titleSuffix: Azure DevOps
description: Learn how Azure DevOps manages security through authentication, authorization, and policies 
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 07/11/2024
---

# About security, authentication, and authorization 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure DevOps employs various security concepts to ensure that only authorized users can access features, functions, and data. Users gain access to Azure DevOps through the authentication of their security credentials and the authorization of their account entitlements. The combination of both determine the user's access to specific features or functions. 

This article builds on the information provided in [Get started with permissions, access, and security groups](../security/about-permissions.md). Administrators can benefit from understanding the account types, authentication methods, authorization methods, and policies used to secure Azure DevOps.  

::: moniker range="azure-devops"

---
:::row:::
   :::column span="1":::
      **Account types**
      - Users
      - Organization owner
      - Service accounts
      - Service principals or managed identities
      - Job agents
      
      **Authentication**
      - User credentials
      - Windows authentication
      - Two-factor authentication (2FA)
      - SSH key authentication
      - Personal access tokens
      - Oauth configuration 
      - Active Directory authentication library  
   :::column-end:::
   :::column span="1":::
      **Authorization**
      - Security group membership
      - Role-based access control
      - Access levels
      - Feature flags
      - Security namespaces & permissions    
      
      **Policies**
      - Privacy policy URL
      - Application connection and security policies
      - User policies
      - Git repository and branch policies
   :::column-end:::
:::row-end:::
---
 
::: moniker-end

::: moniker range="< azure-devops"

---
:::row:::
   :::column span="1":::
      **Account types**
      - Users
      - Service accounts
      - Service principals or managed identities
      - Job agents
      
      
      **Authentication**
      - User credentials
      - Windows authentication
      - Two-factor authentication (2FA)
      - SSH key authentication
      - Personal access tokens
      - Oauth configuration 
      - Active Directory authentication library  
   :::column-end:::
   :::column span="1":::
      **Authorization**
      - Security group membership
      - Role-based permissions
      - Access levels
      - Feature flags
      - Security namespaces & permissions    
      
      
      **Policies**
      - Git repository and branch policies
   :::column-end:::
:::row-end:::
---
 
::: moniker-end

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

Both Azure DevOps Services (cloud) and Azure DevOps Server (on-premises) support software development from planning to deployment. Each platform leverages Microsoft Azure's Platform as a Service infrastructure and services, including Azure SQL databases, to provide a reliable, globally available service for your projects.

::: moniker range="azure-devops"
For more information about how Microsoft ensures your Azure DevOps Services projects are safe, available, secure, and private, see the [Azure DevOps Services data protection overview](../../organizations/security/data-protection.md).
::: moniker-end

<a id="accounts"></a> 

## Accounts 

While human user accounts are the primary focus, Azure DevOps also supports various other account types for different operations:

::: moniker range="azure-devops"
- **Organization owner**: The creator of an Azure DevOps Services organization or assigned owner. To find the owner for your organization, see [Look up the organization owner](look-up-organization-owner.md). 
- **Service accounts**: Internal Azure DevOps organization used to support a specific service, such as Agent Pool Service, PipelinesSDK. For descriptions of service accounts, see [Security groups, service accounts, and permissions](permissions.md#collection-level-groups). 
- **Service principals or managed identities**: [Microsoft Entra applications or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) added to your organization to perform actions on behalf of a third-party application. Some service principals refer to internal Azure DevOps organization to support internal operations. 
- **Job agents**: Internal accounts used to run specific jobs on a regular schedule.
- **Third party accounts**: Accounts that require access to support Web hooks, service connections, or other third-party applications.

Throughout our security-related articles, "users" refers to all identities added to the Users Hub, which can include human users and service principals.

::: moniker-end

::: moniker range="< azure-devops"
- **Service accounts**: Internal Azure DevOps organization used to support a specific service, such as Agent Pool Service, PipelinesSDK. For descriptions of service accounts, see [Security groups, service accounts, and permissions](permissions.md#collection-level-groups). 
- **Service principals or managed identities**: Microsoft Entra applications or managed identities added to your organization to perform actions on behalf of a third-party application. Some service principals refer to internal Azure DevOps organization to support internal operations. 
- **Job agents**: Internal accounts used to run specific jobs on a regular schedule.
- **Third party accounts**: Accounts that require access to support Web hooks, service connections, or other third-party applications.

::: moniker-end

The most effective way to manage accounts is by [adding them to security groups](about-permissions.md#security-groups-and-membership). 

> [!NOTE]  
> The organization owner and members of the Project Collection Administrators group are granted full access to nearly all features and functions. 
 
<a id="authentication"></a> 

## Authentication

Authentication verifies an account's identity based on the credentials provided during sign-in to Azure DevOps. These systems integrate with and rely on the security features of the following other systems:
- Microsoft Entra ID
- Microsoft account (MSA)
- Active Directory (AD)

Microsoft Entra ID and MSA support cloud authentication. We recommend using Microsoft Entra ID for managing a large group of users. For a small user base accessing your Azure DevOps organization, Microsoft accounts are sufficient. For more information, see [About accessing Azure DevOps with Microsoft Entra ID](../accounts/access-with-azure-ad.md).

For on-premises deployments, AD is recommended for managing a large group of users. For more information, see [Set up groups for use in on-premises deployments](/azure/devops/server/admin/setup-ad-groups).

### Authentication methods, integrating with other services and apps

Other applications and services can integrate with Azure DevOps. To access your account without repeatedly asking for user credentials, apps can use the following authentication methods:

- [OAuth](../../integrate/get-started/authentication/oauth.md) to generate tokens on users' behalf for accessing [REST APIs](/rest/api/azure/devops/).
  - There are two OAuth app models available: **Azure DevOps OAuth is planned for deprecation in 2026. Use [Microsoft Entra OAuth](../../integrate/get-started/authentication/entra-oauth.md) to build on-behalf-of user apps.**
  - You can also generate Microsoft Entra tokens for ad-hoc operations on your own behalf, for accessing resources like builds or work items or accessing [Azure DevOps REST APIs](/rest/api/azure/devops/).

- [Service principals or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) to generate Microsoft Entra tokens on behalf of an application or service, typically automating workflows that need to access Azure DevOps resources. Most actions traditionally performed by a service account and a PAT can be done using a service principal or managed identity.

- [Personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md) (PATs) to generate tokens on your behalf. PATs might be helpful for clients like Xcode and NuGet that don't support Microsoft accounts or features, like multifactor authentication (MFA).

- [SSH authentication](../../repos/git/use-ssh-keys-to-authenticate.md) to generate encryption keys for yourself when you use Linux, macOS, or Windows running [Git for Windows](https://www.git-scm.com/download/win) and can't use [Git credential managers](../../repos/git/set-up-credential-managers.md) or [PATs](../accounts/use-personal-access-tokens-to-authenticate.md) for HTTPS authentication.

By default, your account or collection allows access for all authentication methods. 
You can limit access by specifically restricting each method. When you deny access to an authentication method, no app can use that method to access your account. Any app that previously had access receives an authentication error and can't access your account.

For more information, see the following articles:
- [Credential storage for Azure DevOps](credential-storage.md).
- [Guidance for authentication](../../integrate/get-started/authentication/authentication-guidance.md).

<a id="authorization"></a> 

## Authorization

Authorization verifies that the identity attempting to connect has the necessary permissions to access a service, feature, function, object, or method. Authorization always occurs after successful authentication. If a connection isn't authenticated, it fails before any authorization checks are performed. Even if authentication succeeds, a specific action might still be disallowed if the user or group lacks authorization.

Authorization depends on the permissions assigned to the user, either directly or through membership in a security group or security role. Access levels and feature flags can also manage access to specific features. For more information about these authorization methods, see [Get started with permissions, access, and security groups](../security/about-permissions.md). 

<a id="namespaces"></a> 

## Security namespaces and permissions 

Security namespaces determine user access levels for specific actions on resources. 
- Each resource family, such as work items or Git repositories, has a unique namespace. 
- Each namespace contains zero or more access control lists (ACLs). 
    - Each ACL includes a token, an inherit flag, and access control entries (ACEs). 
    - Each ACE has an identity descriptor, an allowed permissions bitmask, and a denied permissions bitmask. 

For more information, see [Security namespaces and permission reference](namespace-reference.md).  

<a id="security-policies"></a> 

## Security policies

::: moniker range="azure-devops"

To secure your organization and code, you can set various policies. Specifically, you can enable or disable the following policies: 

### General 

- **Privacy policy URL**: Specifies a URL that links to your custom document that describes how you handle both internal and external guest data privacy. For more information, see [Add a privacy policy URL for your organization](../accounts/add-privacy-policy-url.md).  

### Application connection and security policies

Use the Microsoft Entra tenant policy to restrict creating new organizations to desired users only. This policy is turned off by default and only valid when the organization is connected to Microsoft Entra ID. For more information, see [Restrict organization creation](../accounts/azure-ad-tenant-policy-restrict-org-creation.md).

The following policies determine the access granted to users and applications within your organizations:
- [Non-Microsoft application access via OAuth](../accounts/change-application-access-policies.md#change-application-connection-policies).
- [SSH authentication access](../accounts/change-application-access-policies.md#change-application-connection-policies).
- **Allow public projects**: When enabled, users can create public projects that allow nonmembers of a project and users who aren't signed in read-only, limited access to the project's artifacts and services. For more information, see [Make your project public](../projects/make-project-public.md). 
- **Log Audit events** - Turn on the ability to track [Auditing events and streams](../audit/azure-devops-auditing.md) for your organization.
- [Enable Microsoft Entra Conditional Access Policy (CAP) validation](../accounts/change-application-access-policies.md#cap-support-on-azure-devops).

### User policies 
- **External guest access** (*Only valid when the organization is connected to Microsoft Entra ID.*):  When enabled, invitations can be sent to email accounts of users who aren't members of the tenant's Microsoft Entra ID via the **Users** page. For more information, see [Add external users to your organization](../accounts/add-external-user.md).  
- **Allow team and project administrators to invite new users**: Only valid when the organization is connected to Microsoft Entra ID. When enabled, team and project administrators can add users via the **Users** page. For more information, see [Restrict new user invitations from Project and Team Administrators](restrict-invitations.md).   
- **Request access**: Only valid when the organization is connected to Microsoft Entra ID. When enabled, users can request access to a resource. A request results in an email notification to the administrators asking for review and access, as needed. For more information, see [Add external users to your organization](../accounts/add-external-user.md).  
- **Invite GitHub users**: Only valid when the organization isn't connected to Microsoft Entra ID. When enabled, administrators can add users based on their GitHub user accounts from the **Users** page. For more information, see [Connect to GitHub/FAQs](../../boards/github/connect-to-github.md#faqs). 

<a id="project-scoped-user-group"></a> 

### Project-Scoped Users group 

By default, users added to an organization can view all organization and project information and settings, including user lists, project lists, billing details, usage data, and more. 

To restrict certain users, such as Stakeholders, Microsoft Entra guest users, or members of a specific security group, you can enable the **Limit user visibility and collaboration to specific projects** preview feature for the organization. Once enabled, any user or group added to the **Project-Scoped Users** group, are restricted in the following ways: 
- Can only access the **Overview** and **Projects** pages of **Organization settings**.
- Can only connect and view those projects that they are [added to explicitly](add-users-team-project.md). 
- Can only select user and group identities added explicitly to the project they're connected to. 

For more information, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group) and [Manage preview features](../../project/navigation/preview-features.md). 

[!INCLUDE [project-scoped-users-warning](../../includes/project-scoped-users-warning.md)]

### Git repository and branch policies 

- [Configure repository settings and policies](../../repos/git/repository-settings.md)
- [Configure branch policies](../../repos/git/branch-policies.md)
- [Configure branch policy for an external service](../../repos/git/pr-status-policy.md)
- [Use Azure Functions to create custom branch policies](../../repos/git/create-pr-status-server-with-azure-functions.md) 

::: moniker-end 

::: moniker range="< azure-devops"

To secure your code, you can set various Git repository and branch policies. For more information, see the following articles. 

- [Configure repository settings and policies](../../repos/git/repository-settings.md)
- [Configure branch policies](../../repos/git/branch-policies.md)
- [Configure branch policy for an external service](../../repos/git/pr-status-policy.md)
- [Use Azure Functions to create custom branch policies](../../repos/git/create-pr-status-server-with-azure-functions.md) 

::: moniker-end 

## Azure Repos and Azure Pipelines security 

Since repositories and build and release pipelines pose unique security challenges, other features beyond the features discussed in this article are employed. For more information, see the following articles. 

- [Securing Azure Pipelines](../../pipelines/security/overview.md)
- [Plan how to secure your YAML pipelines](../../pipelines/security/approach.md)
- [Repository protection](../../pipelines/security/misc.md#protect-repositories)
- [Pipeline resources](../../pipelines/security/resources.md)
- [Recommendations to securely structure projects in your pipeline](../../pipelines/security/misc.md#protect-projects)
- [Security through templates](../../pipelines/security/templates.md)
- [How to securely use variables and parameters in your pipeline](../../pipelines/security/inputs.md)
- [Recommendations to secure shared infrastructure in Azure Pipelines](../../pipelines/security/misc.md#protect-shared-infrastructure)
- [Other security considerations](../../pipelines/security/misc.md) 

## Next steps

> [!div class="nextstepaction"]
> [Permissions and groups reference](permissions.md)

## Related articles
 
- [Default permissions and access assignments](permissions-access.md)
- [Add or delete users using Microsoft Entra ID](/azure/active-directory/fundamentals/add-users-azure-active-directory)
- [Set up groups for use in on-premises deployments](/azure/devops/server/admin/setup-ad-groups)
- [Setting up HTTPS with Secure Sockets Layer (SSL)](/azure/devops/server/admin/setup-secure-sockets-layer)
- [Default permissions and access assignments](permissions-access.md)
