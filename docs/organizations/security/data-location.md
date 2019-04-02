---
title: Azure DevOps - data location
description: Learn where your data is stored for Azure DevOps
ms.prod: devops
ms.topic: article
ms.technology: devops-whitepapers
ms.author: chcomley
author: chcomley
ms.manager: jillfra
ms.date: 03/25/2019
monikerRange: 'azure-devops'
---

# Data locations for Azure DevOps

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]

Azure DevOps operates in the geographical locations (“geos”) listed below. To determine where customer data is stored, you can choose the location of the organization during initial sign up and creation of the organization.

## Data locations

Your data is stored within the following locations:

- Australia
- Brazil
- Canada
- East Asia
- Europe
- India
- United Kingdom
- United States

Azure DevOps stores information that is global in nature, such as user identities and profile information, in a data center located in the United States. All customer data, such as source code, work items, and test results, as well as the geo-redundant mirrors and offsite backups, are maintained within the selected geography.

> [!NOTE]
> Because there is only one region in Brazil, customer data is replicated to south-central United States for disaster recovery and load balancing purposes. For more information, see the [Azure data center map](http://azuredatacentermap.azurewebsites.net/).

For builds and releases configured to run on Microsoft-provided macOS agents, Azure DevOps stores associated customer data in the United States in a data center that is owned and managed by a third party with reduced information security certification assurances.

Azure DevOps works with and uses many Microsoft Azure services. For details on customer data retention by location, see the [Azure data center map](http://azuredatacentermap.azurewebsites.net/).

## Transferring your data

Microsoft does not transfer customer data outside the selected region, except when it is necessary for Microsoft to provide customer support, troubleshoot the service, or comply with legal requirements. In such a case, you configure an organization to enable such transfer of your data using preview, beta, or other pre-release services, which typically store your data in the United States, but may store it globally.

> [!NOTE]
> Microsoft does not control or limit the regions from which you or your users may access your data.

## Related articles

- [Get started with Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137)
- [Data protection overview](data-protection.md)


