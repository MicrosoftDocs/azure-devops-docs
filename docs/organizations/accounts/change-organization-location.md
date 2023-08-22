---
title: Find or change location or geography of organization 
titleSuffix: Azure DevOps Services
ms.custom: seodec18, references_regions
description: Find your organization's default location or update your organization's geography in Azure DevOps.
ms.subservice: azure-devops-organizations
ms.assetid: cc4fd0d6-b24f-48ec-8b90-8e5f18e18d65
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 06/21/2023
monikerRange: 'azure-devops'
---

# Find or change your organization geography

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When you [create an organization](create-organization.md) in Azure DevOps, you can choose the region your organization is hosted in. You may choose your organization's region based on locality and network latency, or because you have sovereignty requirements for data centers. Your organization's default location is based on the closest [Microsoft Azure geography](https://azure.microsoft.com/regions) where Azure DevOps is available.

## Find your organization geography

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing a gear icon and Organization settings emphasized.":::

3. Select **Overview**. The region is listed lower on the page.

   :::image type="content" source="media/change-organization-location/organization-settings-region.png" alt-text="Screenshot showing the region in Organization settings.":::

[!INCLUDE [pca-prerequisite](includes/pca-prerequisite.md)]

## Change organization geography

> [!IMPORTANT]
> A region change is only possible in the following geographies across the world:
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
> We default your organization to your closest geography. Making a change to another data center within your geography isn't possible, for example, changing from EastUS to CentralUS.

To change your organization region, use [Azure DevOps Virtual Support Agent](https://go.microsoft.com/fwlink/?linkid=2163146).

## Related articles

- [Worldwide data regions for Azure DevOps](../security/data-location.md).
