---
title: Data locations for Azure DevOps 
titleSuffix: Azure DevOps Services
description: Learn where your data is stored for Azure DevOps
ms.topic: article
ms.technology: devops-security
ms.author: chcomley
author: chcomley
ms.date: 03/05/2020
monikerRange: 'azure-devops'
---

# Data locations for Azure DevOps

[!INCLUDE [temp](../../includes/version-vsts-only.md)]

You can choose the location for your data during initial sign-up and creation of your organization. Azure DevOps operates in the following geographical locations (“geos”). 

## Data locations

Azure DevOps data is available in the following eight geographies across the world: 

- Australia
- Brazil
- Canada
- Asia Pacific
- Europe
- India
- United Kingdom
- United States

We default your organization to your closest geography. However, you can choose a different geography. Later on, if you change your mind, you can [migrate your organization to a different geography](../accounts/change-organization-location.md). 

## Customer data

Except as noted below, Azure DevOps maintains all customer data within your selected geography. Customer data includes the following data types:
- source code
- work items
- test results
- geo-redundant mirrors and offsite backups

Azure DevOps works with and uses many Microsoft Azure services. For details on customer data retention by location, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/).  

### Profile data 

Azure DevOps stores information that's global in nature, such as user identities and profile information as follows: 
- EU-based users: profile data is in EU data center  
- US-based users: profile data is in US data center 
- Users from all other countries/regions: profile data is in US data center 

## Transferring your data

Except as noted below, Microsoft doesn't transfer customer data outside of your selected geography. 

If needed, you can transfer your data using preview, beta, or other pre-release services. These services typically store your data in the United States, but may store it globally.

> [!NOTE]
Microsoft will transfer your data if it needs to do any of the following actions:
>- provide customer support
>- troubleshoot the service
>- comply with legal requirements

> [!NOTE]
> Microsoft doesn't control or limit the geographies from which you or your users may access your data.

> [!NOTE]
> Because there's only one region in Brazil, customer data is replicated to south-central United States for disaster recovery and load balancing purposes. For more information, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/).

> [!NOTE]
> For builds and releases running on Microsoft-provided macOS agents, your data will be transferred to a third-party data center in the US.

These two data center locations are owned and managed by a third party with information security certification assurances, such as ISO 27001 and SOC 2 Type II report.

## Related articles

- [Get started with Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137)
- [Data protection overview](data-protection.md)
