---
title: Rename your organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to rename your organization and what to do before and after you rename it.
ms.subservice: azure-devops-organizations
ms.assetid: a69f3789-19e9-40c5-ade3-4e11435d452d
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 06/21/2023
monikerRange: 'azure-devops'
---

# Rename your organization in Azure DevOps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can change your organization name (URL) at any time in Azure DevOps.

> [!CAUTION]
> The rename operation affects your organization's connections and individuals who are currently working with your organization. Before you start, find out [what to do before and after renaming your organization](https://support.microsoft.com/kb/2793597).

## Prerequisites

To change your organization URL, you need at least Basic access and organization owner permissions. [How do I find the organization owner?](../security/look-up-organization-owner.md)

> [!NOTE]
> You can't rename an organization within one hour of the most recent rename operation.

## Rename your organization

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

2. Select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing a gear icon and Organization settings emphasized.":::

3. Select **Overview**, enter a new name for the organization, and then select **Save**. Move the toggle if you want to use the new URL.

   :::image type="content" source="media/rename-vso-organization/rename-organization-new.png" alt-text="Screenshot showing the Organization tab, Name entry, and Save button all highlighted with red box.":::

   [!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

4. Confirm that you want to rename your organization and save your changes.

   :::image type="content" source="media/rename-vso-organization/VSOConfirmOrganizationRename.png" alt-text="Screenshot showing confirmation screen for organization rename.":::

Your organization is renamed.

## Frequently asked questions (FAQs)

### Q: If I change the organization URL, can I switch back?

A: The organization URL setting is two-way toggle. You can turn on the new domain name URL. You can also turn off the new URL - then, you go back to using old URL format.  

## Related articles

- [Resolve orphaned organization](resolve-orphaned-organization.md)
- [Delete your organization](delete-your-organization.md)
- [Connect your organization to Azure Active Directory](connect-organization-to-azure-ad.md)
