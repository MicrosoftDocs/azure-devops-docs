---
title: Reliability in Managed DevOps Pools
description: Learn about reliability and disaster recovery options with Managed DevOps Pools.
ms.date: 11/05/2024
ms.topic: reliability-article
#Customer intent: As a developer, I want to understand reliability support for Managed DevOps Pools so that I can respond to and/or avoid failures in order to minimize downtime and data loss.
---

# Reliability in Managed DevOps Pools

This article describes reliability support in Managed DevOps Pools, and covers [cross-region disaster recovery](#cross-region-disaster-recovery).

## Availibility zones

Managed DevOps Pools does not support availability zones at this time.

## Cross-region disaster recovery

Disaster recovery (DR) is about recovering from high-impact events such as natural disasters that result in downtime and data loss. Regardless of the cause, the best remedy for a disaster is a well-defined and tested DR plan and an application design that actively supports DR. Before you begin to think about creating your disaster recovery plan, see [Recommendations for designing a disaster recovery strategy](/azure/well-architected/reliability/disaster-recovery). 

When it comes to DR, Microsoft uses the [shared responsibility model](/azure/reliability/business-continuity-management-program#shared-responsibility-model). In a shared responsibility model, Microsoft ensures that the baseline infrastructure and platform services are available. At the same time, many Azure services don't automatically replicate data or fall back from a failed region to cross-replicate to another enabled region. For those services, you are responsible for setting up a disaster recovery plan that works for your workload.

Managed DevOps Pools instances don't automatically replicate or switch from a failed region to another enabled region. In the event of a complete outage of the Azure region that hosts your Managed DevOps Pool, you would need to create a new Managed DevOps Pool in a different region, and manually update your pipelines to reference the new pool.

### Plan for disaster recovery

Document the configuration of your Mananged DevOps Pools so that you can recreate them in the even of an outage. This includes the following resources that Managed DevOps Pools depends on:

- The resource group for the replacement pool
- The dev center and dev center project for the replacement pool
- The Azure Compute Gallery images (if your pool uses them)

You can save the configuration of your existing pool and create [ARM templates](./quickstart-arm-template.md) or Azure CLI scripts to recreate your pool using the same settings (except for name and location), and manually update your pipelines to use the new pool. When normal operations resume in the Azure region of your original pool, you can update your pipelines to use the original pool, and delete the new pool and associated resources.

## Related content

- [Azure reliability documentation](/azure/reliability/overview)
- [Azure DevOps data protection overview](/azure/devops/organizations/security/data-protection)
