---
title: Learn about security, authentication, authorization, and security policies  
titleSuffix: Azure DevOps
description: Understand how Azure DevOps manages security through authentication, authorization, and policies 
ms.technology: devops-security
ms.assetid: 
toc: show
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 12/07/2020
---

# About security, authentication, and authorization 

[!INCLUDE [version-all](../../includes/version-all.md)]



Azure DevOps employs a number of security concepts to ensure only those who should have access to features, functions, and data have access. Accounts get access to Azure DevOps through authentication of their security credentials and authorization of their account entitlements to access a feature or function. 

This article builds on the information provided in [About permissions, access, and security groups](about-permissions.md). Administrators benefit from understanding the account types, authentication methods, authorization methods, and policies used to secure Azure DevOps.  

::: moniker range="azure-devops"

---
:::row:::
   :::column span="1":::
      **Account types**
      - Users
      - Organization owner
      - Service accounts
      - Service principals
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
      - Service principals
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


Both our cloud service, Azure DevOps Services, and on-premises server, Azure DevOps Server, support software development projects, from planning through deployment. Azure DevOps uses Microsoft Azure's Platform as a Service infrastructure and many of Azure's services, including Azure SQL databases, to deliver a reliable, globally available service for your development projects.

::: moniker range="azure-devops"
To learn more about the steps Microsoft takes to keep your projects in Azure DevOps Services safe, available, secure, and private, see this white paper, [Azure DevOps Services Data Protection Overview](../../organizations/security/data-protection.md).
::: moniker-end

<a id="accounts" /> 

## Accounts 

While the main types of accounts of interest are the user accounts that you add to your organization or project, Azure DevOps supports other types of accounts to perform various operations. These include the following account types.   


::: moniker range="azure-devops"
- **Organization owner**: The creator of an Azure DevOps Services organization or assigned owner. To learn who is the organization owner for your organization, see [Increase your permissions; find an admin](lookup-organization-owner-admin.md#find-owner). 
- **Service accounts**: Internal Azure DevOps accounts used to support a specific service, such as Agent Pool Service, PipelinesSDK. For descriptions of service accounts, see [Security groups, service accounts, and permissions](permissions.md#collection-level groups). 
- **Service principals**: Internal Azure DevOps accounts to support internal operations. 
- **Job agents**: Internal accounts used to run specific jobs on a regular schedule.
- **Third party accounts**: Accounts that require access to support Web hooks, service connections, or other third-party applications.

::: moniker-end


::: moniker range="< azure-devops"
- **Service accounts**: Internal Azure DevOps accounts used to support a specific service, such as Agent Pool Service, PipelinesSDK. For descriptions of service accounts, see [Security groups, service accounts, and permissions](permissions.md#collection-level groups). 
- **Service principals**: Internal Azure DevOps accounts to support internal operations. 
- **Job agents**: Internal accounts used to run specific jobs on a regular schedule.
- **Third party accounts**: Accounts that require access to support Web hooks, service connections, or other third-party applications.

::: moniker-end

The most effective means for managing accounts is by [adding them to security groups](about-permissions.md#security-group-membership). 

> [!NOTE]  
> The organization owner and members of the Project Collection Administrators group are granted full access to most all features and functions. 
 
 

<a id="authentication" /> 

## Authentication

Authentication verifies an account identity based on the credentials provided when they sign into Azure DevOps. These systems integrate with and rely upon the security features provided by these additional systems:
- Azure Active Directory (Azure AD)
- Microsoft account (MSA)
- Active Directory (AD)

Azure AD and MSA support cloud authentication. We recommend Azure AD when you need to manage a large group of users. Otherwise, if you have a small user base accessing your organization in Azure DevOps, you can simply use Microsoft accounts. For additional information, see [About accessing Azure DevOps with Azure Active Directory (Azure AD)](../accounts/access-with-azure-ad.md).

For on-premises deployments, AD is recommended when managing a large group of users. For additional information, see [Set up groups for use in on-premises deployments](/azure/devops/server/admin/setup-ad-groups).

### Authentication methods, integrating with other services and apps

Other applications and services can integrate with services and resources in Azure DevOps. To access your account without asking for user credentials multiple times, apps can use the following  authentication methods.

- [Personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md) to generate tokens for:  
	- Accessing specific resources or activities, like builds or work items
	- Clients like Xcode and Nuget that require usernames and passwords as basic credentials and don't support Microsoft account and Azure Active Directory features like multi-factor authentication 
	- Accessing [Azure DevOps REST APIs](/rest/api/azure/devops/)

- [OAuth](../../integrate/get-started/authentication/oauth.md) 
to generate tokens for accessing [REST APIs](/rest/api/azure/devops/). The [Accounts](/rest/api/azure/devops/account) 
and [Profiles](/rest/api/azure/devops/profile) 
APIs support only OAuth. 

- [SSH authentication](../../repos/git/use-ssh-keys-to-authenticate.md) 
to generate encryption keys when you use Linux, macOS, 
or Windows running [Git for Windows](https://www.git-scm.com/download/win) 
and can't use 
[Git credential managers](../../repos/git/set-up-credential-managers.md) 
or [personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md) 
for HTTPS authentication.


By default, your account or collection allows access for all authentication methods. 
You can limit access, but you must specifically restrict access for each method. 
When you deny access to an authentication method, 
no app can use that method to access your account. 
Any app that previously had access gets an 
authentication error and can't access your account.

To learn more about how we store your credentials, see [Credential storage for Azure DevOps](credential-storage.md).

To learn more about how to choose the right authentication mechanism, see [Guidance for authentication](../../integrate/get-started/authentication/authentication-guidance.md).

<a id="authorization" /> 

## Authorization

Authorization verifies that the identity which is attempting to connect has the necessary permissions to access a service, feature, function, object, or method. Authorization always occurs after successful authentication. If a connection is not authenticated, it fails before any authorization checking is performed. If authentication of a connection succeeds, a specific action might still be disallowed because the user or group did not have authorization to perform that action.

Authorization depends on the permissions assigned to the account. Permissions are granted either directly to an account, or through membership in a security group or security role. Access levels and feature flags can also grant or restrict access to a feature. To learn more about these authorization methods, see [About permissions, access, and security groups](about-permissions.md). 


<a id="namespaces" /> 

## Security namespaces and permissions 

Security namespaces store data that determines the level of access that Azure DevOps accounts have to perform a specific action on a specific resource. Each family of resources, such as work items or Git repositories, is secured through a unique namespace. Each security namespace contains zero or more access control lists (ACLs). Each ACL contains a token, an inherit flag, and a set of zero or more access control entries (ACEs). Each ACE contains an identity descriptor, an allowed permissions bitmask, and a denied permissions bitmask. 

To learn more, see [Security namespaces and permission reference](namespace-reference.md).  

<a id="security-policies" /> 

## Security policies

::: moniker range="azure-devops"

To secure your organization and code, you can set a number of policies. Specifically, you can enable or disable the following policies: 

- **Privacy policy URL**: Specifies a URL that links to your custom document that describes how you handle both internal and external guest data privacy. To learn more, see [Add a privacy policy URL for your organization](../accounts/add-privacy-policy-url.md).  

### Application connection and security policies
	- **Third-party application access via OAuth**: When enabled, allows third-part applications to connect using OAuth. To learn more, see [Change application connection & security policies for your organization](../accounts/change-application-access-policies.md).
	- **SSH authentication access**: When enabled, allows applications to connect using SSH authentication. To learn more, see [Change application connection & security policies for your organization](../accounts/change-application-access-policies.md) 
	- Allow public projects: When enabled, users can create public projects which allows non-members of a project and users who aren't signed in read-only, limited access to the project's artifacts and services. Learn more at [Make your project public](../public/make-project-public.md) and [Enable anonymous access to projects for your organization](../public/create-public-project.md#enable-anonymous-access-to-projects-for-your-organization). 
	- **Enterprise access to projects**: When disabled, all projects that are shared with your enterprise become private projects which means that they are no longer viewable by all users in your enterprise. 
	- **Restrict organization creation via Azure AD tenant policy** (*Only valid when the organization is backed by Azure Active Directory.*): When enabled, restricts users from creating additional Azure DevOps organizations that would automatically be backed by the Azure AD. To learn how to enable, see [Restrict organization creation via Azure AD tenant policy](../accounts/azure-ad-tenant-policy-restrict-org-creation.md)
	- **Enable Azure Active Directory (Azure AD) Conditional Access Policy (CAP) validation** (*Only valid when the organization is backed by Azure Active Directory.*): When enabled, allows you to set additional conditions on accessing the organization. Depending on which conditions the user satisfies, you can require multi-factor authentication, further checks, or block access. This policy is set to *off* by default and only applies to alternative credentials. This policy doesn't apply for CAPs set in Azure AD, no matter the settings in Azure DevOps. To learn more, see [Change application connection & security policies for your organization](../accounts/change-application-access-policies.md). 

### User policies 
	- **External guest access** (*Only valid when the organization is backed by Azure Active Directory.*):  When enabled, invitations can be sent to email accounts of users who aren't members of the tenant Azure Active Directory through the **Users** page. To learn more, see [Add external users to your organization](../accounts/add-external-user.md).  
	- **Allow team and project administrators to invite new users**: Only valid when the organization is backed by Azure Active Directory. When enabled, team and project administrators can add users through the **Users** page. To learn more, see [Restrict new user invitations from Project and Team Administrators](restrict-invitations.md).   
	- **Request access**: Only valid when the organization is backed by Azure Active Directory. When enabled, users can request access to a resource. A request results in an email notification to the administrators asking for review and access, as needed. To learn more, see [Add external users to your organization](../accounts/add-external-user.md).  
	- **Invite GitHub users**: Only valid when the organization isn't backed by Azure Active Directory. When enabled, administrators can add users based on their GitHub user accounts from the **Users** page.  To learn more, see [Authenticating & inviting GitHub users FAQs](faq-github-authentication.md#github-users) 

<a id="project-scoped-user-group" /> 

### Project-scoped User group 

By default, users added to an organization can view all organization and project information and settings. This includes viewing list of users, list of projects, billing details, usage data, and more that is accessed through **Organization Settings**. 

To restrict select users, such as Stakeholders, Azure Active Directory guest users, or members of a particular security group, you can enable the **Project-Scoped Users well known group to hide settings** preview feature for the organization. Once that is enabled, any user or group added to the **Project-Scoped Users** group, are restricted from accessing the **Organization Settings** pages, except for **Overview** and **Projects**; and are restricted to accessing only those projects to which they've been added to. 

To enable this feature, see [Manage or enable features](../../project/navigation/preview-features.md#account-level). 

### Git repository and branch policies 
	- [Configure repository settings and policies](../../repos/git/repository-settings.md)
	- [Configure branch policies](../../repos/git/branch-policies.md)
	- [Configure branch policy for an external service](../../repos/git/pr-status-policy.md)
	- [Use Azure Functions to create custom branch policies](../../repos/git/create-pr-status-server-with-azure-functions.md) 

::: moniker-end 

::: moniker range="< azure-devops"

To secure your code, you can set a number of Git repository and branch policies. To learn more, see the following articles. 

- [Configure repository settings and policies](../../repos/git/repository-settings.md)
- [Configure branch policies](../../repos/git/branch-policies.md)
- [Configure branch policy for an external service](../../repos/git/pr-status-policy.md)
- [Use Azure Functions to create custom branch policies](../../repos/git/create-pr-status-server-with-azure-functions.md) 

::: moniker-end 

## Azure Repos and Azure Pipelines security 

Since repositories and build and release pipelines pose unique security challenges, additional features beyond those discussed in this article are employed. To learn more, see the following articles. 

- [Securing Azure Pipelines](../../pipelines/security/overview.md)
- [Plan how to secure your YAML pipelines](../../pipelines/security/approach.md)
- [Repository protection](../../pipelines/security/repos.md)
- [Pipeline resources](../../pipelines/security/resources.md)
- [Recommendations to securely structure projects in your pipeline](../../pipelines/security/projects.md)
- [Security through templates](../../pipelines/security/templates.md)
- [How to securely use variables and parameters in your pipeline](../../pipelines/security/inputs.md)
- [Recommendations to secure shared infrastructure in Azure Pipelines](../../pipelines/security/infrastructure.md)
- [Other security considerations](../../pipelines/security/misc.md)
- [Add continuous security validation](../../migrate/security-validation-cicd-pipeline.md)  


 
## Next steps 
> [!div class="nextstepaction"]
> [Permissions and groups reference](permissions.md)

## Related articles
 
- [Default permissions and access assignments](permissions-access.md)
- [Add or delete users using Azure Active Directory](/azure/active-directory/fundamentals/add-users-azure-active-directory)
- [Set up groups for use in on-premises deployments](/azure/devops/server/admin/setup-ad-groups)
- [Setting up HTTPS with Secure Sockets Layer (SSL)](/azure/devops/server/admin/setup-secure-sockets-layer)
- [Default permissions and access assignments](permissions-access.md)

<!-- TODO: Cover how to set permissions for Reporting Services and SharePoint as mainline sections.

Azure DevOps security concepts fall into three general categories: topology, authentication, and authorization. Topology includes where and how on-premises servers are deployed, the network traffic that passes between Azure DevOps servers and clients, and the services that must run on Azure DevOps. Authentication includes the determination of the validity of Azure DevOps users, groups, and services. Authorization includes the determination of whether valid Azure DevOps users, groups, and services have the appropriate permissions to perform actions. Also, you must consider Azure DevOps Server dependencies on other components and services in order to optimize the security of your on-premises network.
When you consider Azure DevOps Server security, you must understand the difference between authentication and authorization.

## Permissions 

Besides configuring permissions for authorization, you might need authorization within source code control and within work items. These permissions are managed separately at the command line, but are integrated as part of the Team Explorer interface. For more information about source control permissions, see Team Foundation Version Control. For more information about work item customization, see Working with Team Foundation Work Items.


### Default permissions set for the Contributors group 

The following image shows the default permission assignments made to the Contributors group.

![Contributor role default permissions](media/contributor-permissions.png)

To learn more about other groups and their permission assignments,
see [Permissions and groups reference](permissions.md).

Permissions can be inherited based on assignments made to a project  
Authorization is based on users and groups, and the permissions assigned directly to both those users and groups and permissions those users and groups might inherit by belonging to one or more Azure DevOps security groups. These users and groups can be Azure AD or AD users and groups. For on-premises deployments, they can also be local Windows users and groups.

Also, for select features, users and groups may need to belong to an access level that grants them access to a feature. 

- Default security groups
- Custom security groups
- Security groups 
- Team groups 
- Azure Active Directory 
- Active Directory (on-premises) 
- Workgroups (on-premises) 
- Windows group 
--> 
