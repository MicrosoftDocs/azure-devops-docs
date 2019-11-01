---
title: Azure DevOps Service and Rate limits
description: Description of limits and rate limits on the Azure DevOps service
ms.prod: devops
ms.topic: article
ms.technology: devops-new-user
ms.assetid: 3F3BD90B-1D08-4C8F-9CDC-D4B806F65448
ms.manager: mijacobs
ms.date: 07/30/2019
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
---

# Service limits and rate limits

Learn which service limits and rate limits that all projects and organizations are subject to.

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

## Queries
- The execution time limit for queries is 30 seconds. See [optimization best practices](../integrate/concepts/integration-bestpractices.md#optimize-queries) to improve query performance.
- Query results are limited to 20,000
- Queries are limited in length to 32,000 characters

## Process customization

When customizing the work item types (WITs) defined in the Inheritance or Hosted XML process models, be aware of the limits placed on objects defined in this topic. 

- See [Process related limits](../organizations/settings/work/object-limits.md) for details
 
## Wiki

Wikis defined for a project are limited to 1 GB per git repository. 

> [!TIP]    
> To derive the size of a wiki/git repository, download the repo to your local computer, unzip the file, and then open the **Properties** for the corresponding folder.  

## Rate limiting
Azure DevOps Services, like many Software-as-a-Service solutions, uses multi-tenancy to reduce costs and to enhance scalability and performance. This leaves users vulnerable to performance issues and even outages when other users of their shared resources have spikes in their consumption. To combat these problems, Azure DevOps Services limits the resources individuals can consume and the number of requests they can make to certain commands. When these limits are exceeded, subsequent requests may be either delayed or blocked.

See [Rate limits documentation](../integrate/concepts/rate-limits.md) for details

## Data Import
- Limited to to 300 projects per collection
- See [data import documentation](../migrate/index.md) for details

## Next steps 

> [!div class="nextstepaction"]
> - [Review work tracking object limits](../organizations/settings/work/object-limits.md)