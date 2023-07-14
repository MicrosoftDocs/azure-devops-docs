---
title: Data locations for Azure DevOps 
titleSuffix: Azure DevOps Services
description: Learn where your data is stored for Azure DevOps
ms.topic: article
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.reviewer: jominana
ms.date: 03/28/2023
monikerRange: 'azure-devops'
---

# Data locations for Azure DevOps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can choose the location for your data during initial sign-up and creation of your organization. Azure DevOps operates in the following geographical locations, or “geos”.

## Data locations

Azure DevOps data is available in the following eight geographies across the world:

- Australia
- Brazil
- Canada
- Asia Pacific
- Europe (EU)
- India
- United Kingdom
- United States (US)

We default your organization to your closest geography. However, you can choose a different geography. If you change your mind afterward, you can [migrate your organization to a different geography](../accounts/change-organization-location.md).

For more information, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/#overview).

## Customer data

Except [as noted](#transferring-your-data), Azure DevOps maintains all customer data within your selected geography. Customer data includes the following data types:

- Source code
- Work items
- Test results
- Geo-redundant mirrors and offsite backups

Azure DevOps works with and uses many Microsoft Azure services. For more information and details on customer data retention by location, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/).  

### Profile data

Azure DevOps stores information that's global in nature, such as user identities and profile information as follows:

- US-based users: profile data is in US data center
- EU-based users: profile data is in EU data center  
- UK-based users: profile data is in UK data center
- Users from all other countries and regions: profile data is in US data center

### Token data

Azure DevOps considers token information, such as personal access tokens (PATs) and SSH keys, global in nature, and stores this information in a US data center.

## Allowlist data for tenant policies

We recommend using groups with your tenant policy allow list(s). If you use a named user, be aware that a reference to the named user's identity resides in the United States, Europe (EU), and Southeast Asia (Singapore).

## Transferring your data

We don't transfer customer data outside of your selected geography. However, we transfer your data if we need to do any of the following actions:

- provide customer support
- troubleshoot the service
- comply with legal requirements

If needed, you can transfer your data using preview, beta, or other prerelease services. These services typically store your data in the United States, but may store it globally.

> [!NOTE]
> For builds and releases running on Microsoft-provided macOS agents, your data will be transferred to a GitHub data center in the US. This data center location is owned and managed by GitHub with compliance certifications, such as SOC 1 & 2 Type II reports available [here](https://github.com/security).

Microsoft doesn't control or limit the geographies from which you or your users may access your data.

> [!NOTE]
> Because there's only one region in Brazil, customer data is replicated to south-central United States for disaster recovery and load balancing purposes. For more information, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/).

## Related articles

- [Get started with Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137)
- [Data protection overview](data-protection.md)
