---
title: Create an organization
titleSuffix: Azure DevOps
description: Learn how to create an organization or project collection with a personal Microsoft account, GitHub account, or work or school account.
ms.subservice: azure-devops-organizations
ms.assetid: e2eacd25-e6be-4294-b1da-5529195f30d0
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 10/23/2024
monikerRange: '<= azure-devops'
---

# Create an organization

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use an organization to connect groups of related projects and help scale up your enterprise. You can use a personal Microsoft account, GitHub account, or a work or school account. Using your work or school account *automatically connects* your organization to your Microsoft Entra ID.

> [!NOTE]
> All organizations must be manually created via the web portal. Automated creation of organizations is not supported. However, we do support automated organization configuration, project creation, and resource provisioning via the [REST API](/rest/api/azure/devops).

<a name="how-sign-up"></a>

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Authentication**| Determine whether you want to use only Microsoft accounts or authenticate users with Microsoft Entra ID. For more information, see [Choosing your organization administrator account type](../../user-guide/plan-your-azure-devops-org-structure.md#choose-your-organization-administrator-account-type).|
|**Planning**| Understand how to [plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).|

<a name="SignIn"></a>

## Create an organization

1. Sign in to [Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137).

1. Select **New organization**.

   :::image type="content" source="../../media/select-new-organization.png" alt-text="Screenshot shows New organization button for selection.":::

1. Enter the name for your organization, select its hosting geography, and then select **Continue**.

   [!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

   :::image type="content" source="../../media/name-your-organization.png" alt-text="Screenshot shows Creating an organization in Azure DevOps, highlighted Continue button.":::

   :::image type="content" source="../../media/taking-you-to-your-azure-devops-organization.png" alt-text="Screenshot shows temporary screen taking you to your organization notification.":::

   Congratulations, you're an organization owner!

Sign in to your organization at any time, `https://dev.azure.com/{yourorganization}`.

With your organization, the following aspects are included in the free tier:

[!INCLUDE [free-tier](../../includes/free-tier.md)]

## Next steps

> [!div class="nextstepaction"]
> [Create a project](../projects/create-project.md)

## Related articles

* [Get started with Azure Repos and Visual Studio](../../repos/git/gitquickstart.md)
* [Rename an organization](rename-organization.md)
* [Change organization time-zone](change-organization-location.md)
* [Change organization owner](change-organization-ownership.md)
* [Delete an organization](delete-your-organization.md)
* [Resolve orphaned organization](resolve-orphaned-organization.md)
