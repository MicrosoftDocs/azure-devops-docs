---
title: How are security, accounts, membership, and permissions managed?
titleSuffix: Azure DevOps
description: Understand how Azure DevOps manages authentication, authorization, security groups and permissions, security roles, access levels, and default perms 
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

Azure DevOps employs a number of security concepts to ensure only those who should have access to features, functions, and data have access. Accounts get access to Azure DevOps through authentication of their security credentials and authorization of their account entitlements to access a feature or function. The following table summarizes the  various account types supported and the methods used to manage authentication and authorization. 


<!--- 
- Accounts 
- Authentication
- Authorization
- Populate security groups  
- Security namespaces and permissions
- Azure Repos and Azure Pipelines security 
-->



| Accounts | Authentication |Authorization |
|----------------|----------------|----------------|
|&#8226;&nbsp;Users<br/>&#8226;&nbsp;Organization owner<br/>&#8226;&nbsp;Service accounts<br/>&#8226;&nbsp;Service principals<br/>&#8226;&nbsp;Job agents|&#8226;&nbsp;User credentials<br/>&#8226;&nbsp;Windows authentication<br/>&#8226;&nbsp;Two-factor authentication (2FA)<br/>&#8226;&nbsp;SSH key authentication<br/>&#8226;&nbsp;Personal access tokens<br/>&#8226;&nbsp;Oauth<br/>&#8226;&nbsp;Active Directory authentication library  |&#8226;&nbsp;Security group membership<br/>&#8226;&nbsp;Role-based access control<br/>&#8226;&nbsp;Access levels<br/> &#8226;&nbsp;Feature flags<br/>&#8226;&nbsp;Security namespaces & permissions|

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]


Both our cloud service, Azure DevOps Services, and on-premises server, Azure DevOps Server, support software development projects, from planning through deployment. Azure DevOps uses Microsoft Azure's Platform as a Service infrastructure and many of Azure's services, including Azure SQL databases, to deliver a reliable, globally available service for your development projects.

::: moniker range="azure-devops"
To learn more about the steps Microsoft takes to keep your projects in Azure DevOps Services safe, available, secure, and private, see this white paper, [Azure DevOps Services Data Protection Overview](../../organizations/security/data-protection.md).
::: moniker-end


## Accounts 

While the main types of accounts of interest are the user accounts that you add to your organization or project, Azure DevOps supports other types of accounts to perform various operations. These include the following account types:  

- **Organization owner**: The creator of an Azure DevOps Services organization or assigned owner.  
- **Service accounts**: Internal Azure DevOps accounts used to support a specific service, such as Agent Pool Service, PipelinesSDK.  
- **Service principals**: Internal Azure DevOps accounts to to support internal operations. 
- **Job agents**: Internal accounts used to run specific jobs on a regular schedule.
- **Third party accounts**: Accounts that require access to support Web hooks, service connections, or other third-party applications.

The most effective means for managing accounts is by adding them to security groups. 

> [!NOTE]  
> The organization owner and members of the Project Collection Administrators group are granted full access to most all features and functions. 

#### To learn more

See one of the following articles:

- [Create your organization](../accounts/create-organization.md)
- [Change the organization owner](../accounts/change-organization-ownership.md)
- [Add users and manage access](../accounts/add-organization-users.md) 
- [Service accounts](permissions.md) 
 


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

## Authorization

Authorization verifies that the identity which is attempting to connect has the necessary permissions to access a service, feature, function, object, or method. Authorization always occurs after successful authentication. If a connection is not authenticated, it fails before any authorization checking is performed. If authentication of a connection succeeds, a specific action might still be disallowed because the user or group did not have authorization to perform that action.

Authorization depends on the permissions assigned to the account. Permissions are granted either directly to an account, or through membership in a security group or security role. Access levels and feature flags can also grant or restrict access to a feature. 




## Security namespaces and permissions 

Security namespaces store data that determines the level of access that Azure DevOps accounts have to perform a specific action on a specific resource. Each family of resources, such as work items or Git repositories, is secured through a unique namespace. Each security namespace contains zero or more access control lists (ACLs). Each ACL contains a token, an inherit flag, and a set of zero or more access control entries (ACEs). Each ACE contains an identity descriptor, an allowed permissions bitmask, and a denied permissions bitmask. 

To learn more, see [Security namespaces and permission reference](namespace-reference.md).  

#### Permission levels 

Permissions are assigned at various levels based on the structure of the Azure DevOps instance. To learn more, see [About permissions and inheritance](about-permissions.md).  

::: moniker range="azure-devops"
- **Object-level** 
- **Project-level** 
- **Organization-level**  
::: moniker-end

::: moniker range="< azure-devops"
- **Object-level** 
- **Project-level**
- **Collection-level**
- **Server-level**  
::: moniker-end

#### Permission states 

There are five possible assignments made to a permission. They grant or restrict access as indicated. 
- User or group has permissions to perform a task: 
	- **Allow** 
	- **Inherited allow** 
- User or group doesn't have permission to perform a task: 
	- **Deny** 
	- **Inherited deny** 
	- **Not set** 
 


## Azure Repos and Azure Pipelines security 

Since repositories and build and release pipelines pose unique security challenges, additional features beyond those discussed in this article are employed. To learn more, see the following: 

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


 
## Try this next
> [!div class="nextstepaction"]
> [About permissions and inheritance](about-permissions.md)

## Related articles
 
- [Default permissions and access assignments](permissions-access.md)
- [Permissions and groups reference](permissions.md)
- [Default permissions and access for Azure DevOps](permissions-access.md)
- [Add or delete users using Azure Active Directory](/azure/active-directory/fundamentals/add-users-azure-active-directory)
- [Set up groups for use in on-premises deployments](/azure/devops/server/admin/setup-ad-groups)
- [Setting up HTTPS with Secure Sockets Layer (SSL)](/azure/devops/server/admin/setup-secure-sockets-layer)
- [Default permissions and access assignments](permissions-access.md)

<!-- TODO: Cover how to set permissions for Reporting Services and SharePoint as mainline sections.

Azure DevOps security concepts fall into three general categories: topology, authentication, and authorization. Topology includes where and how on-premises servers are deployed, the network traffic that passes between Azure DevOps servers and clients, and the services that must run on Azure DevOps. Authentication includes the determination of the validity of Azure DevOps users, groups, and services. Authorization includes the determination of whether valid Azure DevOps users, groups, and services have the appropriate permissions to perform actions. Also, you must consider Azure DevOps Server dependencies on other components and services in order to optimize the security of your on-premises network.
When you consider Azure DevOps Server security, you must understand the difference between authentication and authorization.

## Permissions 

Besides configuring permissions for authorization, you might need authorization within source code control and within work items. These permissions are managed separately at the command line, but are integrated as part of the Team Explorer interface. For more information about source control permissions, see Team Foundation Version Control. For more information about work item customization, see Working with Team Foundation Work Items.

Azure DevOps controls access through these three inter-connected functional areas:

-   **Membership management** supports adding individual Windows user accounts and groups to default security groups. Also, you can create Azure DevOps security groups. Each default group is associated with a set of default permissions. All users added to any security group are added to the Valid Users group. A valid user is someone who can connect to the project.

-   **Permission management** controls access to specific functional tasks at different levels of the system. Object-level permissions set permissions on a file, folder, build pipeline, or a shared query. Permission settings correspond to **Allow**, **Deny**, **Inherited allow**, **Inherited deny**, and **Not set**. To learn more about inheritance, see [About permissions and groups](about-permissions.md#inheritance).

-   **Access level management** controls access to features provided via the web portal, the web application for Azure DevOps. Based on  what has been purchased for a user, administrators set the user's access  level to Basic, VS Enterprise (previously Advanced), or Stakeholder. 

Each functional area uses groups to simplify management across the deployment. You add users and groups through the web administration context. Permissions are automatically set based on the security group that you add users to, or based on the object, project, collection, or server level to which you add groups. On the other hand, access level management controls access for all users at the server level.

<img src="media/access-groups-permissions.png" alt="Access levels, membership management, and permissions management" style="border: 1px solid #C3C3C3;" />  

You can create local groups or Active Directory (AD) [groups to manage your users](/azure/devops/server/admin/setup-ad-groups). If you decide to use groups, make sure that membership in those groups is limited to valid users. Because group membership can be altered by their owners at any time, if those owners did not consider Azure DevOps Server access when they created those groups, their changes to membership can cause unwanted side effects within the server.

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
