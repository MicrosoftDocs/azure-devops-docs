---
title: Create a new organization, project collection
titleSuffix: Azure DevOps
ms.custom: seodec18, contperf-fy20q4
description: Create an organization in Azure DevOps Services or create a project collection on-premises with a personal Microsoft account, GitHub account, or work or school account.
ms.technology: devops-accounts
ms.assetid: e2eacd25-e6be-4294-b1da-5529195f30d0
ms.topic: quickstart
ms.author: chcomley
author: chcomley
ms.date: 05/21/2021
monikerRange: '<= azure-devops'
---

# Create an organization or project collection

[!INCLUDE [version-all](../../includes/version-all.md)]

::: moniker range="= azure-devops"

Learn how to create an organization. An organization is used to connect groups of related projects, helping to scale up an enterprise. You can use a personal Microsoft account, GitHub account, or a work or school account. Use your work or school account to *automatically connect* your organization to your Azure Active Directory (Azure AD).

::: moniker-end

::: moniker range="= azure-devops"

> [!NOTE]
> All organizations must be manually created via the web portal. We don't support automated creation of organizations. We do support automated organization configuration, project creation, and resource provisioning via REST API.

<a name="how-sign-up"></a>

## Prerequisites

* Read and understand how to [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).
* Complete the following steps if you want to use only Microsoft accounts with your organization.

     Without Azure AD, you're solely responsible for controlling organization access. And all users must sign in with their Microsoft account.
     [What are other differences?](faq-configure-customize-organization.yml#SignInOrganizationDifferences)

  * If you don't have a Microsoft account, you can create one when you sign up for Azure DevOps.

  * Use your Microsoft account if you don't need to authenticate users for an organization with [Azure AD](/azure/active-directory/fundamentals/active-directory-whatis). All users must sign in to your organization with a Microsoft account.

* Complete the following steps if you want to authenticate users and control organization access through your Azure AD.

  * You need a work or school account that's managed by your Azure AD. If you use Azure or Microsoft 365, you might have one already. If you don't, learn how to [sign up for Azure as an organization](/azure/active-directory/fundamentals/sign-up-organization).
  * To use existing on-premises identities, see [use Azure AD Connect for integrating on-premises directories with Azure AD](/azure/active-directory/hybrid/whatis-hybrid-identity).
  * All users must be members in that directory to access your organization. To add users from other organizations, use [Azure AD B2B collaboration capabilities](/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b).
* Organization names must start with a letter or number, followed by letters, numbers or hyphens, and must end with a letter or number.

::: moniker-end

<a name="SignIn"></a>

::: moniker range="= azure-devops"

[!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

[!INCLUDE [create-organization](../../includes/create-organization.md)]

::: moniker-end

::: moniker range="< azure-devops"

## Create a project collection

A project collection is a container of projects. By grouping projects together, you can manage projects more efficiently and assign the same resources to those projects.

For more information about how to create a project collection, see [create a project collection](/azure/devops/server/admin/manage-project-collections?view=azure-devops&preserve-view=true#create-a-project-collection).

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Create a project](../projects/create-project.md)

## Related articles

* [Rename your organization](rename-organization.md)
* [Change organization time-zone](change-organization-location.md)
* [Change organization owner](change-organization-ownership.md)
* [Delete your organization](delete-your-organization.md)
* [Resolve orphaned organization](resolve-orphaned-organization.md)