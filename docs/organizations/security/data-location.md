---
title: Data locations for Azure DevOps 
titleSuffix: Azure DevOps Services
description: Learn where your data is stored for Azure DevOps
ms.topic: article
ms.technology: devops-security
ms.author: chcomley
author: chcomley
ms.date: 08/18/2021
monikerRange: 'azure-devops'
---

# Data locations for Azure DevOps

[!INCLUDE [temp](../../includes/version-vsts-only.md)]

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

- source code
- work items
- test results
- geo-redundant mirrors and offsite backups

Azure DevOps works with and uses many Microsoft Azure services. For more information and details on customer data retention by location, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/).  

### Profile data

Azure DevOps stores information that's global in nature, such as user identities and profile information as follows:

- EU-based users: profile data is in EU data center  
- US-based users: profile data is in US data center
- Users from all other countries and regions: profile data is in US data center

## Allow list data for tenant policies

We recommend using groups with your tenant policy allow list(s). If you use a named user, be aware that a reference to the named user's identity will reside in the United States, Europe (EU), and Southeast Asia (Singapore).

## Transferring your data

We don't transfer customer data outside of your selected geography. However, we will transfer your data if we need to do any of the following actions:

- provide customer support
- troubleshoot the service
- comply with legal requirements

If needed, you can transfer your data using preview, beta, or other pre-release services. These services typically store your data in the United States, but may store it globally.

> [!NOTE]
> For builds and releases running on Microsoft-provided macOS agents, your data will be transferred to a third-party data center in the US. This data center location is owned and managed by a third party with information security certification assurances, such as ISO 27001 and SOC 2 Type II report.

Microsoft doesn't control or limit the geographies from which you or your users may access your data.

> [!NOTE]
> Because there's only one region in Brazil, customer data is replicated to south-central United States for disaster recovery and load balancing purposes. For more information, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/).

## Related articles

- [Get started with Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137)
- [Data protection overview](data-protection.md)
