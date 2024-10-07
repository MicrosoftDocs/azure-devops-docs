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
ms.date: 10/07/2024
monikerRange: 'azure-devops'
---

# Find or change your organization geography

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When you [create an organization](create-organization.md) in Azure DevOps, you can choose the geography your organization gets hosted in. You might choose your organization's geography based on locality and network latency, or because you have sovereignty requirements for data centers. Your organization's default location is based on the closest [Microsoft Azure geography](https://azure.microsoft.com/regions) where Azure DevOps is available.

> [!WARNING]
> We're temporarily unable to process migration requests until January 13, 2025. We apologize for any inconvenience and appreciate your understanding. Migration requests will resume January 14.

## Find your organization geography

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing a gear icon and Organization settings emphasized.":::

1. Select **Overview**. The geography is listed lower on the page.

      :::image type="content" source="media/change-organization-location/organization-settings-geography.png" alt-text="Screenshot showing the region in Organization settings.":::

## Prerequisites

You must be an owner of your organization to change its location. For more information, see [Change the organization owner](change-organization-ownership.md).

## Change organization geography

> [!IMPORTANT]
> A change is only possible between the following geographies:
> 
- Australia
- Brazil
- Canada
- Asia Pacific
- Europe
- India
- United Kingdom
- United States

> By default, your organization is associated with the closest geography based on your location. However, changing to a different data center (region) within the same geography isn't possible.

To change your organization geography, use [Azure DevOps Virtual Support Agent](https://go.microsoft.com/fwlink/?linkid=2160944).

We can't provide a specific time frame for your organization's relocation due to potential delays from various factors and the automated nature of the migration process. The process might be rescheduled to take place over the weekend until all necessary changes are successfully completed.

## Related articles

- [Worldwide data regions for Azure DevOps](../security/data-location.md)
- [Data locations for Azure DevOps](../security/data-location.md)
- [Data protection overview](../security/data-protection.md)
- [Connect your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md)
