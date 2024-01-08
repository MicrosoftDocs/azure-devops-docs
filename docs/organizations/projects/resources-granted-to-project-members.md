---
title: Resources granted to project members
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Learn about security and data access considerations and resources granted when you add members to a project or organization 
ms.subservice: azure-devops-projects
ms.assetid: 
toc: show
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/17/2021
---

# Resources granted to project members

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

An Azure DevOps project is a container and security boundary for your software development assets: work items, code, builds, etc.
When you add someone as a member of a project, you're also trusting that person with some more privileges.
A project member has access to organization-level resources and other groups (or scopes) beyond the project.
If someone isn't already a member of your organization, when you add them to a project, you implicitly grant them this additional access.  

 
::: moniker range="azure-devops"  

> [!NOTE]  
> If the **Limit user visibility and collaboration to specific projects** preview feature is enabled for the organization, users added to the **Project-Scoped Users** group won't be able to access projects that they haven't been added to. For more information and important security-related call-outs, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 

::: moniker-end  


## More groups and scopes

Under the hood, a project member belongs to one or more [project-related security groups](../security/about-permissions.md#security-group-membership) such as "Project Valid Users" and "Project Contributors."
That person is also a member of an organization-level group known as "Project Collection Valid Users."
Also, that person's identity appears in the [identity service](../security/about-security-identity.md#authentication), which backs the organization. 
User accounts backed by [Microsoft Entra ID](/azure/active-directory/) can have [native identities](/azure/active-directory/add-users-azure-active-directory) or [guest identities](/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b), which grant different levels of access.

## Organization-level resources 

Project members have access to resources beyond the specific project. 
Resources include those defined at the organization-level (cloud) or project collection level (on-premises):

* Information about other members, including their email address and other contact details hidden from nonmembers.
* The Settings area, including security groups and permissions.
* All installed extensions.
* [Process](../settings/work/manage-process.md) metadata from all processes in the organization, which includes the work item types, its fields and picklist items. Picklist items could show sensitive information such as release dates, as shown in the following image:

  ![Edit field release in feature](media/edit-field-release-in-feature.png)

* When the WIT Client OM is used, which includes the usage of Excel and Visual Studio integration, it stores sensitive information in a cache on the local disk. The cache includes the metadata of all processes in the organization and the identities and group memberships of all members of the organization.
* When a user gets added to the project-level Build Administrators group, they can create pipelines, which run with project collection account-wide scope. A pipeline with project collection scope might access resources in another project, such as Git repositories, that the user can't access. Change the access by [removing the Read permission from Project Collection Build Service](../../repos/git/set-git-repository-permissions.md#pcbs-has-read-by-default)).

## The trust decision

These resources and groups are required for the proper functioning of a member of a project.
Your collaborators are typically colleagues and others with whom you have an existing relationship.
Before you add someone from outside this trusted group, think carefully about whether they should have access to the previously mentioned items.
