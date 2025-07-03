---
title: About authentication, authorization, and security policies 
titleSuffix: Azure DevOps
description: Learn how Azure DevOps manages security through authentication, authorization, and policies 
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 06/16/2025
---

# About authentication, authorization, and security policies

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure DevOps uses a combination of security concepts to ensure that only authorized users can access its features, functions, and data. Access gets determined by two key processes: authentication, which verifies a user's credentials, and authorization, which grants permissions based on account entitlements. Together, these processes control what each user can do within Azure DevOps.

This article expands on [Get started with permissions, access, and security groups](../security/about-permissions.md) and helps administrators understand the different account types, authentication and authorization methods, and security policies available to protect Azure DevOps environments.

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
      - Microfost Entra token
      - Personal access token
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

Both Azure DevOps supports software development from planning to deployment. Each platform uses Microsoft Azure's Platform as a Service infrastructure and services, including Azure SQL databases, to provide a reliable, globally available service for your projects.

::: moniker range="azure-devops"
For more information about how Microsoft ensures your projects are safe, available, secure, and private, see the [Azure DevOps data protection overview](../../organizations/security/data-protection.md).
::: moniker-end

<a id="accounts"></a> 

## Accounts 

While human user accounts are the primary focus, Azure DevOps also supports various other account types for different operations:

::: moniker range="azure-devops"
- **Organization owner**: The creator of an Azure DevOps Services organization or assigned owner. To find the owner for your organization, see [Look up the organization owner](look-up-organization-owner.md). 
- **Service accounts**: Internal Azure DevOps organization used to support a specific service, such as Agent Pool Service, PipelinesSDK. For descriptions of service accounts, see [Security groups, service accounts, and permissions](permissions.md#collection-level-groups). 
- **Service principals or managed identities**: [Microsoft Entra applications or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) added to your organization to perform actions on behalf of a non-Microsoft application. Some service principals refer to internal Azure DevOps organization to support internal operations. 
- **Job agents**: Internal accounts used to run specific jobs on a regular schedule.
- **Third party accounts**: Accounts that require access to support Web hooks, service connections, or other non-Microsoft applications.

Throughout our security-related articles, "users" refers to all identities added to the Users Hub, which can include human users and service principals.

::: moniker-end

::: moniker range="< azure-devops"
- **Service accounts**: Internal Azure DevOps organization used to support a specific service, such as Agent Pool Service, PipelinesSDK. For descriptions of service accounts, see [Security groups, service accounts, and permissions](permissions.md#collection-level-groups). 
- **Service principals or managed identities**: Microsoft Entra applications or managed identities added to your organization to perform actions on behalf of a non-Microsoft application. Some service principals refer to internal Azure DevOps organization to support internal operations. 
- **Job agents**: Internal accounts used to run specific jobs on a regular schedule.
- **Third party accounts**: Accounts that require access to support Web hooks, service connections, or other non-Microsoft applications.

::: moniker-end

The most effective way to manage accounts is by [adding them to security groups](about-permissions.md#security-groups-and-membership). 

> [!NOTE]  
> The organization owner and members of the Project Collection Administrators group are granted full access to nearly all features and functions. 
 
<a id="authentication"></a> 

## Authentication

Authentication verifies a user's identity based on the credentials provided during sign-in to Azure DevOps. Azure DevOps integrates with several identity systems to manage authentication:

- **Microsoft Entra ID**: Recommended for organizations managing a large group of users. Provides robust, cloud-based authentication and user management.
- **Microsoft account (MSA)**: Suitable for smaller user bases accessing Azure DevOps organizations. Supports cloud authentication.
- **Active Directory (AD)**: Recommended for on-premises deployments with many users, using your existing AD infrastructure.

Microsoft Entra ID and Microsoft accounts both support cloud authentication. For more information, see [About accessing Azure DevOps with Microsoft Entra ID](../accounts/access-with-azure-ad.md).

For on-premises environments, use Active Directory to efficiently manage user access. Learn more in [Set up groups for use in on-premises deployments](/azure/devops/server/admin/setup-ad-groups).

### Authenticate programmatically

Access your Azure DevOps organization programmatically without repeatedly entering your username and password by choosing one of the available [authentication methods](../../integrate/get-started/authentication/authentication-guidance.md). Use the following methods to automate workflows, integrate with REST APIs, or build custom applications:

- Use [OAuth](../../integrate/get-started/authentication/oauth.md) to build applications that perform actions on behalf of users. Users must consent to the app. For new apps, use [Microsoft Entra OAuth](../../integrate/get-started/authentication/entra-oauth.md).
- Use [service principals or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) to automate workflows or build tools that regularly access organization resources. Issue Microsoft Entra tokens on behalf of the application itself.
- Use [Microsoft Entra ID](../../integrate/get-started/authentication/entra.md) for secure, cloud-based authentication and user management.
- Use [personal access tokens (PATs)](../accounts/use-personal-access-tokens-to-authenticate.md) for ad-hoc requests or early prototyping. Avoid PATs for long-term app development, as they're more susceptible to leaks and misuse.

> [!TIP]
> Always [store credentials securely](credential-storage.md) and follow best practices for managing authentication methods.

By default, your organization allows access for all authentication methods. Organization admins can [restrict access to these authentication methods by disabling security policies](../accounts/change-application-access-policies.md). Tenant admins can further [reduce PAT risk by restricting the ways in which they can be created](../accounts/manage-pats-with-policies-for-administrators.md). 
<a id="authorization"></a> 

## Authorization

Authorization determines whether an authenticated identity has the required permissions to access a specific service, feature, function, object, or method in Azure DevOps. Authorization checks always occur after successful authentication—if authentication fails, authorization is never evaluated. Even after authentication, users or groups might be denied access to certain actions if they lack the necessary permissions.

Azure DevOps manages authorization through permissions assigned directly to users or inherited through security groups or roles. Access levels and feature flags can further control access to specific features. To learn more about these authorization methods, see [Get started with permissions, access, and security groups](../security/about-permissions.md).

<a id="namespaces"></a> 

## Security namespaces and permissions 

Security namespaces define user access levels for specific actions on Azure DevOps resources.

- Each resource family, for example, work items or Git repositories, has its own unique namespace.
- Within each namespace, there can be multiple access control lists (ACLs).
    - Each ACL contains a token, an inherit flag, and one or more access control entries (ACEs).
    - Each ACE specifies an identity descriptor, a bitmask for allowed permissions, and a bitmask for denied permissions.

For more information, see [Security namespaces and permission reference](namespace-reference.md).

<a id="security-policies"></a> 

## Security policies

::: moniker range="azure-devops"

To secure your organization and code, organization-level ([Project Collection Administrator](look-up-project-collection-administrators.md)) or tenant-level ([Azure DevOps Administrator](/entra/identity/role-based-access-control/permissions-reference#azure-devops-administrator)) admins can enable or disable various security policies, depending on the policy scope. Key policies to consider include:

- [Specify a privacy policy URL](../accounts/add-privacy-policy-url.md) to describe how you handle internal and external guest data privacy.
- Decide whether users in your organization are [allowed to create public projects](../projects/make-project-public.md).

If your organization is connected to Microsoft Entra ID, you have access to the following other security features:

- [Restrict organization creation to specific users](../accounts/azure-ad-tenant-policy-restrict-org-creation.md).
- [Invite external guests to the organization](../accounts/add-external-user.md).
- [Allow team and project administrators to invite new users](restrict-invitations.md).
- [Enable Conditional Access policy (CAP) validation](../accounts/change-application-access-policies.md#cap-support-on-azure-devops).
- Track [auditing events and streams](../audit/azure-devops-auditing.md) in your organization.

Review and configure these policies to strengthen your organization's security posture and ensure compliance with your data privacy and access requirements.

<a id="project-scoped-user-group"></a> 

### Project-Scoped Users group 

By default, users added to an organization can view all organization and project information and settings, including user lists, project lists, billing details, usage data, and more.

To limit access for specific users—such as Stakeholders, Microsoft Entra guest users, or members of a particular security group—enable the **Limit user visibility and collaboration to specific projects** preview feature for your organization. When this feature is enabled, any user or group added to the **Project-Scoped Users** group is restricted in the following ways:
- Access is limited to the **Overview** and **Projects** pages within **Organization settings**.
- Users can only connect to and view projects they're [explicitly added to](add-users-team-project.md).
- Users can only select user and group identities that are explicitly added to the same project.

For more information, see [Manage your organization: Limit user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group) and [Manage preview features](../../project/navigation/preview-features.md).

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
