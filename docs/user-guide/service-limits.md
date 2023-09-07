---
title: Service and rate limits
titleSuffix: Azure DevOps Services
description: Description of limits and rate limits on the Azure DevOps Service
ms.topic: conceptual
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 01/03/2023
---

# Service and rate limits for Azure DevOps Services

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Azure DevOps Services, like many Software-as-a-Service solutions, uses multi-tenancy to reduce costs and to enhance scalability and performance. This leaves users vulnerable to performance issues and even outages when other users of their shared resources have spikes in their consumption. To combat these problems, Azure DevOps Services limits the resources individuals can consume and the number of requests they can make to certain commands. When these limits are exceeded, subsequent requests may be either delayed or blocked. 

This article specifies certain limits placed on the use and configuration of Azure DevOps services. For more information, see 
[Rate limits](../integrate/concepts/rate-limits.md) and [Work tracking, process, and project limits](../organizations/settings/work/object-limits.md). 
 

## Work items

- A long text field can contain 1M characters.
- You can't assign more than 100 tags to a work item.
- You can't add more than 1,000 links to a work item.
- You can't add more than 100 attachments to a work item.
- You can't add an attachment size larger than 60 MB to a work item.
- You can have up to 1,000 tasks on a task board
- You can have up to 10,000 work items on a backlog
- You are limited to 5,000 teams in a project
- You can't create more than 150,000 tag definitions per project


## Area and iteration paths

| Configuration object |  Limit | 
|--------|-------|
| Projects | 1000 per organization for Azure DevOps Services</br>No prescribed limit for on-premises</br>(See also [Work tracking, process, and project limits](../organizations/settings/work/object-limits.md#projects) | 
| Teams | 5,000 per project | 
| Work item tags | 150,000 tag definitions per organization | 
| Area Paths | 10,000 per project | 
| Area Path Depth | 14 | 
| Area Paths per team | 300 | 
| Iteration Paths | 10,000 per project | 
| Iteration Path Depth | 14 | 
| Iteration Paths per team | 300 | 


## Queries

- The execution time limit for queries is 30 seconds. See [Optimization best practices](../integrate/concepts/integration-bestpractices.md#optimize-queries) to improve query performance.
- Query results are limited to 20,000
- Queries are limited in length to 32,000 characters

## Process customization

When customizing the work item types (WITs) defined in the Inheritance or Hosted XML process models, be aware of the limits placed on objects defined in [Work tracking, process, and project limits](../organizations/settings/work/object-limits.md).
 
## Dashboards

A limit is placed on 500 dashboards per project. 

## Wiki

In addition to the usual repository limits (see the [Repository Size Limits](../repos/git/limits.md#repository-size)), Wikis defined for a project are limited to 25 MB per single file. 

## Data import
- Limited to 300 projects per organization
- See [data import documentation](../migrate/migration-overview.md) for details

## Service connections

There are no per-project limits placed on creating service connections. However, there may be limits which are imposed through Azure Active Directory. For additional information, review the following articles:

- [Azure AD service limits and restrictions](/azure/active-directory/enterprise-users/directory-service-limits-restrictions)
- [Azure subscription and service limits, quotas, and constraints](/azure/azure-resource-manager/management/azure-subscription-service-limits)


## Related articles 

- [Rate limits](../integrate/concepts/rate-limits.md)
- [Work tracking, process, and project limits](../organizations/settings/work/object-limits.md)
- [Configure and customize Azure Boards](../boards/configure-customize.md)
- [Usage monitoring](../organizations/accounts/usage-monitoring.md)
