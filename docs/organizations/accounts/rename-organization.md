---
title: Rename your organization
titleSuffix: Azure DevOps Services
description: Learn how to rename your organization and what to do before and after you rename it.
ms.subservice: azure-devops-organizations
ms.assetid: a69f3789-19e9-40c5-ade3-4e11435d452d
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 10/24/2024
monikerRange: 'azure-devops'
---

# Rename your organization in Azure DevOps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can change your organization name (URL) at any time in Azure DevOps. This action allows you to update the URL to better reflect your organization's branding or structure. Changing the organization name updates the URL used to access your Azure DevOps resources, but it doesn't affect your projects, repositories, or other resources within the organization. Follow the steps in this article to rename your organization and ensure a smooth transition for your team.

> [!CAUTION]
> The rename operation affects your organization's connections and individuals who are currently working with your organization. Before you start, meet the [prerequisites](#prerequisites) and find out [what to do after renaming your organization](/troubleshoot/azure/devops/rename-service-url).

## Prerequisites

- **Permissions:** Be an owner of your organization. For more information, see [Change the organization owner](../organizations/accounts/change-organization-ownership.md).
- **Access levels:** Have at least Basic access.
- **Preparation:**
  - Save your work.
  - Ensure other members aren't using the service.

> [!NOTE]
> Wait at least one hour after the most recent rename operation before renaming an organization again.

## Rename your organization

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

2. Select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing a gear icon and Organization settings emphasized.":::

3. Select **Overview**, enter a new name for the organization, and then select **Save**. Move the toggle if you want to use the new URL.

   :::image type="content" source="media/rename-vso-organization/rename-organization-new.png" alt-text="Screenshot showing the Organization tab, Name entry, and Save button all emphasized.":::

   [!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

4. Confirm that you want to rename your organization and save your changes.

   :::image type="content" source="media/rename-vso-organization/VSOConfirmOrganizationRename.png" alt-text="Screenshot showing confirmation screen for organization rename.":::

Your organization is renamed.

## Frequently asked questions (FAQs)

### Q: If I change the organization URL, can I switch back?

A: The organization URL setting is two-way toggle. You can turn on the new domain name URL. You can also turn off the new URL - then, you go back to using old URL format.  

## Related articles

- [Resolve orphaned organization](resolve-orphaned-organization.md)
- [Delete an organization](delete-your-organization.md)
- [Connect your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md)
