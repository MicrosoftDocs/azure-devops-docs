---
title: Create an organization
titleSuffix: Azure DevOps
description: Learn how to create an Azure DevOps organization using a personal Microsoft account, GitHub account, or work or school account.
ms.subservice: azure-devops-organizations
ms.assetid: e2eacd25-e6be-4294-b1da-5529195f30d0
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 02/11/2026
monikerRange: 'azure-devops'
#customer intent: As a new Azure DevOps user, I want to create an organization so that I can start managing projects and collaborating with my team.
---

# Create an organization

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Use an organization to connect groups of related projects and help scale up your enterprise. You can use a personal Microsoft account, GitHub account, or a work or school account. When you use your work or school account, you *automatically connect* your organization to your Microsoft Entra ID.

> [!NOTE]
> You must create all organizations manually through the web portal. Automated creation of organizations isn't supported. However, automated organization configuration, project creation, and resource provisioning are supported through the [REST API](/rest/api/azure/devops).

<a name="how-sign-up"></a>

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Azure subscription**| You need an active Azure subscription to create new organizations. Existing organizations and free tier limits aren't affected.|
|**Authentication**| Decide whether you want to use only Microsoft accounts or authenticate users with Microsoft Entra ID. For more information, see [Choosing your organization administrator account type](../../user-guide/plan-your-azure-devops-org-structure.md#choose-your-organization-administrator-account-type).|
|**Planning**| Understand how to [plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).|

<a name="SignIn"></a>

## Create an organization

1. Sign in to [Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137).

1. Select **New organization**.

   :::image type="content" source="../../media/select-new-organization.png" alt-text="Screenshot shows New organization button for selection.":::

1. Enter the name for your organization, select its hosting geography, select an Azure subscription for billing, and then select **Continue**.

   [!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

   :::image type="content" source="media/select-subscription-create-organization.png" alt-text="Screenshot shows creating organization popup with dropdown menu for selecting Azure subscription.":::

   :::image type="content" source="../../media/taking-you-to-your-azure-devops-organization.png" alt-text="Screenshot shows temporary screen taking you to your organization notification.":::

   Congratulations, you're an organization owner!

   Sign in to your organization at any time by using `https://dev.azure.com/{YourOrganization}`.

### Free tier benefits

Your new organization includes the following free tier benefits:

[!INCLUDE [free-tier](../../includes/free-tier.md)]

If you exceed these free tier limits, you pay for extra usage through your linked Azure subscription. For more information, see [What happens when free tier limits are reached?](../billing/billing-faq.yml#q--what-happens-when-free-tier-limits-are-reached-)

## Next steps

> [!div class="nextstepaction"]
> [Create a project](../projects/create-project.md)

## Related content

* [Get started with Azure Repos and Visual Studio](../../repos/git/gitquickstart.md)
* [Rename an organization](rename-organization.md)
* [Change organization time-zone](change-organization-location.md)
* [Change organization owner](change-organization-ownership.md)
* [Delete an organization](delete-your-organization.md)
* [Resolve orphaned organization](resolve-orphaned-organization.md)
