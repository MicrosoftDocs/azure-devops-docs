---
title: Find or change the geography of your organization
titleSuffix: Azure DevOps Services
ms.custom: references_regions
description: Find your organization's default location and choose your organization's geography location when you create one.
ms.subservice: azure-devops-organizations
ms.assetid: cc4fd0d6-b24f-48ec-8b90-8e5f18e18d65
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 08/26/2025
monikerRange: 'azure-devops'
---

# Find or change your organization geography

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When you [create an organization](create-organization.md) in Azure DevOps, you can choose the geography where your organization gets hosted. You might select your organization's geography based on locality, network latency, or sovereignty requirements for data centers. The default location for your organization is based on the nearest [Microsoft Azure geography](https://azure.microsoft.com/regions) where services are available.

> [!IMPORTANT]
> We're temporarily pausing organization geography moves. Follow [Azure DevOps release notes](https://aka.ms/azuredevops/releasenotes) to get notified of future changes when we resume organization geography changes.

## Find your organization geography

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing a gear icon and Organization settings emphasized.":::

1. Select **Overview**. The geography information is listed further down the page.

   :::image type="content" source="media/change-organization-location/organization-settings-geography.png" alt-text="Screenshot showing the region in Organization settings.":::

## Prerequisites

[!INCLUDE [prerequisites-organization-owner-only](../../includes/prerequisites-organization-owner-only.md)]

## Change organization geography

By default, your organization is associated with the closest geography based on your location.

When organization location moves resume, you can only change your organization's geography to one of the following locations:
- Australia
- Brazil
- Canada
- Asia Pacific
- Europe
- India
- United Kingdom
- United States

<!---REMOVING TEMPORARILY PER SOO, 8/26/2025
However, changing to a different data center (region) within the same geography isn't possible.

To change your organization geography, use [Azure DevOps Virtual Support Agent](https://go.microsoft.com/fwlink/?linkid=2160944).

We can't provide a specific time frame for your organization's relocation due to potential delays from various factors and the automated nature of the migration process. The process might get rescheduled to take place over the weekend to ensure all necessary changes are successfully completed.-->

## Related content

- [Explore worldwide data regions for Azure DevOps](../security/data-location.md)
- [View data locations for Azure DevOps](../security/data-location.md)
- [Learn about data protection](../security/data-protection.md)
- [Connect your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md)
