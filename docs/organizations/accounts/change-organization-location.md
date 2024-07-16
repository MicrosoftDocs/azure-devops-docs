---
title: Find or change the region of your organization
titleSuffix: Azure DevOps Services
ms.custom: references_regions
description: Find your organization's default location or update your organization's region in Azure DevOps.
ms.subservice: azure-devops-organizations
ms.assetid: cc4fd0d6-b24f-48ec-8b90-8e5f18e18d65
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 07/16/2024
monikerRange: 'azure-devops'
---

# Find or change your organization region

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When you [create an organization](create-organization.md) in Azure DevOps, you can choose the region your organization gets hosted in. You might choose your organization's region based on locality and network latency, or because you have sovereignty requirements for data centers. Your organization's default location is based on the closest [Microsoft Azure region](https://azure.microsoft.com/regions) where Azure DevOps is available.

## Find your organization region

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing a gear icon and Organization settings emphasized.":::

3. Select **Overview**. The region is listed lower on the page.

   :::image type="content" source="media/change-organization-location/organization-settings-geography.png" alt-text="Screenshot showing the region in Organization settings.":::

## Prerequisites

You must be an owner of your organization to change its location. For more information, see [Change the organization owner](change-organization-ownership.md).

## Change organization region

> [!IMPORTANT]
> A change is only possible between the following regions:
>
> - Australia
> - Brazil
> - Canada
> - Asia Pacific
> - Europe
> - India
> - United Kingdom
> - United States
>
> By default, your organization is associated with the closest region based on your location. However, changing to a different data center within the same region isn't possible.

To change your organization region, use [Azure DevOps Virtual Support Agent](https://go.microsoft.com/fwlink/?linkid=2163146).

Currently, we can't provide a specific time frame for your organization's relocation, as the migration process might experience potential delays stemming from various factors, and is automated in nature. The process could be rescheduled to take place over the weekend until all necessary changes are successfully completed.

## Related articles

- [Worldwide data regions for Azure DevOps](../security/data-location.md)
- [Data locations for Azure DevOps](../security/data-location.md)
- [Data protection overview](../security/data-protection.md)
- [Connect your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md)
