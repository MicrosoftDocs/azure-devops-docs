---
title: About inviting external users
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Security and data access considerations when you add an external or outside user to Azure DevOps
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 
toc: show
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/06/2018
monikerRange: 'azure-devops'
---

# About inviting external users to Azure DevOps

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

Learn about security and data access considerations when you're adding guest users to Azure DevOps.

A project is a container and security boundary for your software development assets: work items, code, builds, and so on. When you add someone as a member of a project, you're also trusting that person with additional privileges. A project member has access to organization-level resources and additional groups (or scopes) beyond the project. If someone isn't already a member of your organization, when you add them to a project, you implicitly grant them additional access.

## Additional groups and scopes

Under the hood, a project member belongs to one or more [project-related security groups](../security/about-security-identity.md#security-groups-and-permissions), such as **Project Valid Users"** and **Project Contributors**. That individual is also a member of an organization-level group known as **Project Collection Valid Users**. Their identity appears in the [identity service](../security/about-security-identity.md#authentication) that backs the organization. Organizations that are backed by [Azure Active Directory](/azure/active-directory/) can have [native identities](/azure/active-directory/add-users-azure-active-directory) or [guest identities](/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b), which grant different levels of access.

## Organization-level resources

Project members have access to resources beyond the specific project. Those resources include the following:

* Information about other members, including their email address and other contact details that's hidden from non-members.
* The **Settings** area, including security groups and permissions.
* All installed extensions, including paid extensions (if you assign a license).
* [Process](../settings/work/manage-process.md) metadata from all processes in the organization, including the work item types, its fields, and picklist items. Picklist items can show sensitive information like release dates, as shown in this example:

   ![Edit the private release dates field](../projects/_img/edit-field-release-in-feature.png)

* When the WIT Client object model is used, which includes the use of Microsoft Excel and Visual Studio integration with Azure DevOps, it stores sensitive information in a cache on the local disk. The cache includes the metadata of all processes in the organization and the identities and group memberships of all members of the organization.

## The trust decision

These resources and groups are required for the proper functioning of a member of a project. Your collaborators are typically colleagues and others that you have an existing relationship. Before you add someone from outside this trusted group, think carefully about whether they should have access to the items mentioned in this article.

### Related articles

* [Add external users to Azure DevOps](add-external-user.md)
* [Add members to projects in Azure DevOps](add-team-members.md)
