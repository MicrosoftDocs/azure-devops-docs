---
title: Permissions and access frequently asked questions
description: Learn about frequently asked questions (FAQs) on permissions and access in Azure DevOps.
ms.technology: devops-security
ms.assetid: 
ms.topic: troubleshooting
ms.author: chcomley
author: chcomley
ms.date: 03/10/2021
monikerRange: 'azure-devops'
---

# Permissions and access to Azure DevOps FAQs

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

See the following frequently asked questions (FAQs) and answers for access and permissions in Azure DevOps. For troubleshooting information, see Troubleshoot access and permission issues.

## Q: Why can't users access some features?

A: They may need a different [access level](access-levels.md#supported-access-levels) assigned. This is in addition to permissions granted through security groups. For example, [Stakeholder](access-levels.md#stakeholder-access) access level provides partial support to select features, allowing users to view and modify work items, but not to use all features.

## Q: How do I find my admin?

A: See [Find your administrator](lookup-organization-owner-admin.md).

## Q: I added a user to my project. Why can't they see the project?

A: To view a [project](permissions.md#project-level-groups), users must have the [**view project level information permission** set to **allow**](set-project-collection-level-permissions.md#set-permissions-at-the-project--or-collection-level).

## Q: I accidentally removed my permissions, and am unable to grant them again. What should I do?

A: The only way to resolve this scenario is to [find your project/org administrator](lookup-organization-owner-admin.md) and ask them to grant the permission again.

## Q: How do I remove users from Azure DevOps?

A: See [How to remove users from Azure DevOps](../accounts/delete-organization-users.md).

## Q: Why can't I create an organization?

A: Contact your administrator to determine if your organization is using [the Azure AD tenant policy to restrict new organization creation](../accounts/azure-ad-tenant-policy-restrict-org-creation.md).

## Q: Why can't guest users search for Azure Active Directory users?

A: By default, [Azure AD guests can't search the Azure AD in the manner required by Azure DevOps](../accounts/faq-azure-access.md#q-why-are-no-identities-found-when-i-try-to-add-users-from-azure-ad-to-my-azure-devops-organization).

## Related articles

- Troubleshoot access and permission issues in Azure DevOps
- [Azure access FAQs](../accounts/faq-azure-access.md)

