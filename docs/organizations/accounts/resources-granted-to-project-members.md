---
title: Resources granted to project members in VSTS
titleSuffix: VSTS
description: Security and data access considerations when you add a user as a member of a project in VSTS, resources granted, additional groups and scopes, and account-level resources
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 
toc: show
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 05/01/2018
monikerRange: 'vsts'
---
# Resources granted to project members

**VSTS**

The team project is a container and security boundary for your software development assets: work items, code, builds, etc.
When you add someone as a member of a project, you are also trusting that person with some additional privileges.
A project member has access to account-level resources and additional groups (or scopes) beyond the project.
If someone is not already a member of your account, when you add them to a project, you implicitly grant them this additional access.

## Additional groups & scopes

Under the hood, a project member belongs to one or more [project-related security groups](../../organizations/security/about-security-identity.md#security-groups-and-permissions) such as "Project Valid Users" and "Project Contributors".
That person is also a member of an account-level group known as "Project Collection Valid Users".
Also, that person's identity appears in the [identity service](../../organizations/security/about-security-identity.md#authentication) which backs the account.
Accounts backed by [Azure Active Directory](/azure/active-directory/) can have [native identities](/azure/active-directory/add-users-azure-active-directory) or [guest identities](/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b), which grant different levels of access.

## Account-level resources

Project members have access to resources beyond the specific project.
Those resources are:

* Information about other members, including their email address and other contact details, that is hidden from non-members.
* The Settings area, including security groups and permissions.
* All installed extensions, including paid extensions (if you assign a license).
* [Process](../../organizations/settings/work/manage-process.md) metadata from all processes in the account, which includes the work item types, its fields and picklist items. Picklist items could show sensitive information such as release dates, as shown in the image below:

  ![Edit field release in feature](_img/edit-field-release-in-feature.png)

* When the WIT Client OM is used, which includes the usage of Excel and VS integration with VSTS, it stores sensitive information in a cache on the local disk. This cache includes the metadata of all processes in the account and the identities and group memberships of all members of the account.

## The trust decision

These resources and groups are required for the proper functioning of a member of a project.
Your collaborators are typically colleagues and others with whom you have an existing relationship.
Before you add someone from outside this trusted group, think carefully about whether they should have access to the items mentioned above.
