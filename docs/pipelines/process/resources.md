---
title: Resources
titleSuffix: Azure Pipelines
description: How to use resources with YAML definitions.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: b3ca305c-b587-4cb2-8ac5-52f6bd46c25e
ms.manager: douge
ms.author: alewis
author: vtbassmatt
ms.date: 09/12/2018
monikerRange: 'vsts'
---

# Resources

**Azure Pipelines**

A resource is anything used by a pipeline that lives outside the pipeline itself. Examples include:

- [secure files](../library/secure-files.md)
- [variable groups](../library/variable-groups.md)
- [service connections](../library/service-endpoints.md)
- [agent pools](../agents/pools-queues.md)
- [other repositories](../yaml-schema.md#repository)
- [containers](../yaml-schema.md#container)

Some resources must be authorized before they can be used. This ensures that only users with sufficient permissions can access potentially sensitive resources such as service connections.

## Resource authorization

When you save a pipeline, resource authorization checks for new and updated resources. If you lack permission to authorize one or more resources, then saving the pipeline will fail.

If you add a new resource to an existing YAML pipeline, Azure Pipelines will pick up the change but may not be able to authorize resources. Your builds may fail until you authorize resources using the troubleshooting steps below.

## Troubleshooting authorization for a YAML pipeline

When you add a new service endpoint or other resource to a pipeline, it must be authorized before it will work. If builds fail with an error message about resource authorization, follow these steps:

1. Navigate to the pipeline in Azure Pipelines.
1. Switch the pipeline's default branch to the branch that includes the new service endpoint reference.
For example, if you've made a change in a branch called `features/add-resource`, then switch the pipeline's default branch to `features/add-resource`.
1. Save the pipeline.
1. Revert back to the prior default branch and save the pipeline again.

### Why does this fix it?

The act of saving the pipeline loads the file from the default branch and authorizes discovered resources.
We're working on a better experience that won't require these steps.
