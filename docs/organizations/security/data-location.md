---
title: Data locations for Azure DevOps 
titleSuffix: Azure DevOps Services
description: Learn where your data is stored for Azure DevOps.
ms.topic: article
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.reviewer: jominana
ms.date: 12/15/2023
monikerRange: 'azure-devops'
---

# Data locations for Azure DevOps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can choose the location for your data during initial sign-up and creation of your organization.

## Data locations

Azure DevOps data is available in the following geographical locations:

- Australia
- Brazil
- Canada
- Asia Pacific
- Europe (EU)
- India
- United Kingdom (UK)
- United States (US)

By default, your organization uses the closest location. However, you can choose a different location when you create your organization. If you change your mind later, you can [migrate your organization to a different location](../accounts/change-organization-location.md).

## Customer data

Except [as noted later in this article](#transferring-your-data), Azure DevOps maintains all customer data within your selected geographical location. Customer data includes the following data types:

- Source code
- Work items
- Test results
- Geo-redundant mirrors and offsite backups

Azure DevOps works with and uses many Microsoft Azure services. For more information on customer data retention by location, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/).  

### Profile data

Azure DevOps stores information that's global in nature, such as user identities and profile data, as follows:

- For US-based users: in the US datacenter
- For EU-based users: in the EU datacenter  
- For UK-based users: in the UK datacenter
- For users from all other countries and regions: in the US datacenter

### Token data

Azure DevOps stores token data, such as personal access tokens and Secure Shell (SSH) keys, in a US datacenter.

## Allowlist data for tenant policies

We recommend using groups with your tenant policy allowlists. If you use a named user, be aware that a reference to the named user's identity resides in the US, EU, and Southeast Asia (Singapore).

## Transferring your data

We don't transfer customer data outside your selected location. However, we transfer your data if we need to take any of the following actions:

- Provide customer support
- Troubleshoot the service
- Comply with legal requirements

If necessary, you can transfer your data by using preview, beta, or other prerelease services. These services typically store your data in the United States, but they might store it globally.

> [!NOTE]
> For builds and releases that run on Microsoft-provided macOS agents, your data is transferred to a GitHub datacenter in the United States. GitHub owns and manages this datacenter location with compliance certifications, such as [SOC 1 Type 2 and SOC 2 Type 2](https://github.com/security).

Microsoft doesn't control or limit the locations from which you or your users can access your data.

> [!NOTE]
> Because there's only one region in Brazil, customer data in Brazil is replicated to the South Central US region for disaster recovery and load balancing. For more information, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/).

## Related articles

- [Get started with Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137)
- [Data protection overview](data-protection.md)
