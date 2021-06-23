---
title: Find or change location or region of organization 
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Find your organization's default location or update your organization region in Azure DevOps.
ms.technology: devops-accounts
ms.assetid: cc4fd0d6-b24f-48ec-8b90-8e5f18e18d65
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 06/23/2021
monikerRange: 'azure-devops'
---

# Find or change your organization region

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

When you [create an organization](create-organization.md) in Azure DevOps, you can choose the region your organization is hosted in. You may choose your organization's region based on locality and network latency, or because you have sovereignty requirements for data centers. Your organization's default location is based on the closest [Microsoft Azure region](https://azure.microsoft.com/regions) where Azure DevOps is available.

## Find your organization region

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)
3. Select **Overview**. The region is listed lower on the page.

   ![Find the region under the organization settings](media/change-organization-location/organization-settings-region.png)

## Prerequisites

You must be [the organization Owner](../security/lookup-organization-owner-admin.md) to change your organization region.

## Change organization region

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

To change your organization region, use [Azure DevOps Virtual Support Agent](https://azuredevopsvirtualagent.azurewebsites.net/).

## Related articles

- [Worldwide data regions for Azure DevOps](../security/data-location.md).
