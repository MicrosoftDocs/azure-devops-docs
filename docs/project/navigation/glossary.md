---
title: Key concepts, objects, and terms
titleSuffix: Azure DevOps
description: Understand the key concepts that support navigation and managing projects available with Azure DevOps.
ms.custom: Navigation
ms.subservice: azure-devops-projects 
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 04/22/2024
---

# Project management and navigation glossary   

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 
 
This glossary describes terms used when navigating in the web portal for Azure DevOps. See also the [Agile glossary](../../boards/work-items/agile-glossary.md).

## Backlogs 
An interactive list of work items that corresponds to a team's project plan or roadmap for what the team plans to deliver. The product backlog supports prioritizing work, forecasting work by sprints, and quickly linking work to portfolio backlog items. You can define your backlog items and then manage their status using the Kanban board. 

Teams can customize each backlog. For more information, see [Create your backlog](../../boards/backlogs/create-your-backlog.md).   

::: moniker range=">= azure-devops-2019"
## Analytics views
Analytics views provide a simplified way to specify the filter criteria for a Power BI report based on the Analytics service. The Analytics service is the reporting platform for Azure DevOps Services. 
::: moniker-end

[!INCLUDE [temp](../../includes/glossary-terms/area-paths.md)] 

::: moniker range="azure-devops"

## Audit log

Audit logs contain many changes that occur throughout an Azure DevOps organization. Changes occur when a user or service identity within the organization edits the state of an artifact, including changes to permissions. For more information, see [Access, export, and filter audit logs](../../organizations/audit/azure-devops-auditing.md).

::: moniker-end

## Authentication

Authentication verifies a user's identify based on the credentials provided when they sign into an organization in Azure DevOps. These services/servers typically integrate with and rely upon the security features provided by services such as Active Directory or Microsoft Entra ID. For more information, see [About security, authentication, and authorization](../../organizations/security/about-security-identity.md).

## Authorization

Authorization is the operation that's performed to verify that the identity that's attempting to connect to a service or server instance has the necessary permissions to access a service, feature, function, object, or method. For more information, see [About security, authentication, and authorization](../../organizations/security/about-security-identity.md).

## Boards (Kanban) 
An interactive, electronic sign board that supports visualization of the flow of work from concept to completion and lean methods. Learn more: [Kanban overview](../../boards/boards/kanban-overview.md).

[!INCLUDE [temp](../../includes/glossary-terms/collections.md)] 

## Conditional access

Conditional access provides support for securing Azure DevOps resources backed by a Microsoft Entra tenant. For example, you can enable multifactor authentication to help protect against the risk of compromised credentials. For more information, see [Manage conditional access to Azure DevOps](../../organizations/accounts/change-application-access-policies.md).

[!INCLUDE [temp](../../includes/glossary-terms/dashboards.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/extensions.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/favorites.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/follow.md)] 

## Git repository

A Git repository supports a distributed version control system for tracking changes, reviewing contributions to the code, and more. Each developer has a copy of the source repository on their dev machine. You can add multiple Git repositories to a project. Learn more: [Git Repositories](../../repos/git/index.yml).  

> [!NOTE]   
> Git in Visual Studio and Azure DevOps Services is standard Git. You can use Visual Studio with third-party Git services, and you can also use third-party Git clients with Azure DevOps Services.

## Inheritance

Permissions that aren't directly allowed or denied for a user, might be inherited. For more information, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).   

## Microsoft Authentication Library

The Microsoft Authentication Library (MSAL) enables application developers to acquire tokens from the Microsoft identity platform to authenticate users and access secured web APIs. It can be used to provide secure access to Microsoft Graph, other Microsoft APIs, third-party web APIs, or your own web API. MSAL supports many different application architectures and platforms including .NET, JavaScript, Java, Python, Android, and iOS. For more information, see the [Overview of Microsoft Authentication Library](/azure/active-directory/develop/msal-overview#languages-and-frameworks).

## Namespace 

Each family of Azure DevOps resources (work items, Git repositories, etc.) is secured using a different namespace. Each security namespace contains zero or more ACLs. Each ACL contains a token, an inherit flag, and a set of zero or more ACEs. Each ACE contains an identity descriptor, an allowed permissions bitmask, and a denied permissions bitmask. 

For a list of Azure DevOps namespaces, see [Security namespace and permission reference](../../organizations/security/namespace-reference.md).  

[!INCLUDE [temp](../../includes/glossary-terms/notifications.md)]

## OAuth 

OAuth 2.0 is an industry-standard protocol for authorization. OAuth 2.0 is supported for Azure DevOps Services to authenticate REST APIs. For more information, see [Authorize access to REST APIs with OAuth 2.0](../../integrate/get-started/authentication/oauth.md). 

::: moniker range="azure-devops"

## Organization owner

The person who created the organization or was later assigned as the organization owner. The organization owner has access to all Azure DevOps features and functions, and can grant access to others to features and functions. To look up or change organization owner, see [Change the organization owner](../../organizations/accounts/change-organization-ownership.md).

::: moniker-end

## Personal Access Token (PAT)

Personal access tokens (PATs) are alternate passwords that you can use to authenticate into Azure DevOps. To learn how to create and revoke PATs, see [Authenticate access with personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). 


## Permission

The assignment made to a user or group to use a feature or function. Permissions are assigned to default security groups. For more information, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).

## Permission state

The state assigned to a feature or function to a user's or group's permission. Users have permission to access a feature if their permission is set to **Allow**, **Inherited Allow**, or **System Allow**. They don't have permission when the state is set to **Deny**, **Inherited deny**, **System deny**, or **Not set**. For more information, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).

## Pipelines 

Pipelines are artifacts that you define to run concurrent builds or deploy concurrent releases. Two types of pipelines are supported, private, and hosted. To learn more, see [CI/CD concurrent jobs](../../pipelines/licensing/concurrent-jobs.md). 

![Pipeline concept end-to-end](/azure/devops/pipelines/media/pipeline-concept-end-to-end.png)

[!INCLUDE [temp](../../includes/glossary-terms/plans.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/process.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/projects.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/public-projects.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/queries.md)] 

## Repositories

A source control folder or container you configure to help you track file changes in. You can have any number of repositories on your computer, each stored in their own folder. Each repository is independent, so changes saved in one repository don't affect the contents of another. Learn more: [Create a new Git repo](../../repos/git/creatingrepo.md).    

## Role-based permissions

A security model that limits actions based on membership within a role and permissions assigned to that role. For more information, see [Role-based permissions](../../organizations/security/about-permissions.md#role-based-permissions).

## Security group

A method by which you can organize users and other domain objects to simplify administration of permissions and access. Azure DevOps supports many default security groups and the ability to create custom groups. For more information, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).

## Service account

An account used to monitor or manage select services, such as build or test services.

## Service principal

A service principal is the local representation, or application instance, of a global application object in a single tenant or directory. When an application is given permission to access resources in a tenant (upon registration or consent), a service principal object is created. For more information, see [Application and service principal objects in Microsoft Entra ID](/azure/active-directory/develop/app-objects-and-service-principals) and [service principal and managed identity support in Azure DevOps](../../integrate/get-started/authentication/service-principal-managed-identity.md).

[!INCLUDE [temp](../../includes/glossary-terms/sprints.md)] 

## Sprint backlog 

An interactive list of work items assigned to the same sprint or iteration path for a team. The sprint backlog supports teams that use Scrum methodologies. Learn more: [Sprint planning](../../boards/sprints/assign-work-sprint.md).  

## Stakeholder

A user account granted membership to an organization in an Azure DevOps instance with Stakeholder access. With Stakeholder access, you can add and modify work items, check project status, manage pipelines, and view and manage dashboards. For more information, see [Get started as a Stakeholder](../../organizations/security/get-started-stakeholder.md).
 
[!INCLUDE [temp](../../includes/glossary-terms/taskboard.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/teams.md)] 

## Team group

A security group that is defined when a team is created and automatically populated with members as they're added to the team.

::: moniker range="azure-devops"

## Tenant

A Microsoft Entra ID used to manage access or billing. For more information, see [Change Microsoft Entra tenant.](../../organizations/accounts/change-organization-location.md)

::: moniker-end

[!INCLUDE [temp](../../includes/glossary-terms/tfvc-repo.md)] 

## Valid users

Valid users are users that Azure DevOps recognizes as being able to connect to the account or a project. When you add accounts of users directly to a built-in group or through a Windows, Active Directory, or Microsoft Entra group, they're automatically added to one of the valid user groups. For more information, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).

[!INCLUDE [temp](../../includes/glossary-terms/widgets.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/work-items.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/work-item-types.md)] 
