---
title: Create an organization
titleSuffix: Azure DevOps
ms.custom: seodec18, contperf-fy20q4, contperf-fy22q3
description: Learn how to create an organization or project collection with a personal Microsoft account, GitHub account, or work or school account.
ms.subservice: azure-devops-organizations
ms.assetid: e2eacd25-e6be-4294-b1da-5529195f30d0
ms.topic: quickstart
ms.author: chcomley
author: chcomley
ms.date: 02/14/2022
monikerRange: '<= azure-devops'
---

# Create an organization

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="= azure-devops"

Use an organization to connect groups of related projects, and help to scale up your enterprise. You can use a personal Microsoft account, GitHub account, or a work or school account. Use your work or school account to *automatically connect* your organization to your Azure Active Directory (Azure AD).

::: moniker-end

::: moniker range="= azure-devops"

> [!NOTE]
> All organizations must be manually created via the web portal. We don't support automated creation of organizations. We do support automated organization configuration, project creation, and resource provisioning via [REST API](/rest/api/azure/devops).

<a name="how-sign-up"></a>

## Prerequisites

* Understand how to [plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).
* Determine whether you want to use only Microsoft accounts or authenticate users with Azure AD. For more information, see [Choosing your organization administrator account type](../../user-guide/plan-your-azure-devops-org-structure.md#choose-your-organization-administrator-account-type).

::: moniker-end

<a name="SignIn"></a>

::: moniker range="= azure-devops"

[!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

[!INCLUDE [create-organization](../../includes/create-organization.md)]

::: moniker-end

::: moniker range="< azure-devops"

## Create a project collection

A project collection is a container of projects. By grouping projects together, you can manage projects more efficiently and assign the same resources to those projects.

For more information about how to create a project collection, see [Create a project collection](/azure/devops/server/admin/manage-project-collections?view=azure-devops&preserve-view=true#create-a-project-collection).

::: moniker-end

::: moniker range="azure-devops"

With your organization, the following aspects are included in the free tier:

[!INCLUDE [free-tier](../../includes/free-tier.md)]

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Create a project](../projects/create-project.md)

## Related articles

* [Get started with Azure Repos and Visual Studio](../../repos/git/gitquickstart.md)
* [Rename your organization](rename-organization.md)
* [Change organization time-zone](change-organization-location.md)
* [Change organization owner](change-organization-ownership.md)
* [Delete your organization](delete-your-organization.md)
* [Resolve orphaned organization](resolve-orphaned-organization.md)
