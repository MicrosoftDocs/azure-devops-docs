---
title: Reliability in Managed DevOps Pools
description: Learn about reliability and disaster recovery options with Managed DevOps Pools.
ms.date: 07/29/2025
ms.topic: reliability-article
#Customer intent: As a developer, I want to understand reliability support for Managed DevOps Pools so that I can respond to and avoid failures to minimize downtime and data loss.
---

# Reliability in Managed DevOps Pools

This article describes reliability support in Managed DevOps Pools, and covers [cross-region disaster recovery](#cross-region-disaster-recovery).

## Availability zones

Managed DevOps Pools doesn't support availability zones at this time.

## Cross-region disaster recovery

The concept of disaster recovery (DR) is about recovering from high-impact events (like natural disasters) that result in downtime and data loss. Regardless of the cause, the best remedy for a disaster is a well-defined and tested DR plan and an application design that actively supports DR. Before you begin to think about creating your disaster recovery plan, see [Recommendations for designing a disaster recovery strategy](/azure/well-architected/reliability/disaster-recovery).

When it comes to DR, Microsoft uses the [shared responsibility model](/azure/reliability/business-continuity-management-program#shared-responsibility-model). In a shared responsibility model, Microsoft ensures that the baseline infrastructure and platform services are available. At the same time, many Azure services don't automatically replicate data or fall back from a failed region to cross-replicate to another enabled region. For those services, you're responsible for setting up a disaster recovery plan that works for your workload.

Managed DevOps Pools instances don't automatically replicate or switch from a failed region to another enabled region. If there's a complete outage of the Azure region that hosts your pool, you need to create a new pool in a different region, and manually update your pipelines to reference the new pool.

### Plan for disaster recovery

Document the configuration of your pools so that you can re-create them if there's an outage. Managed DevOps Pools depends on the following resources:

- The resource group for the replacement pool
- The **Dev Center** and **Dev Center project** for the replacement pool
- The Azure Compute Gallery images (if your pool uses them)

You can save the configuration of your existing pool and create [Azure Resource Manager templates (ARM templates)](./quickstart-arm-template.md), [Bicep templates](./quickstart-bicep.md), or [Azure CLI scripts](./quickstart-azure-cli.md) to re-create your pool. You can use the same settings (except for name and location), and manually update your pipelines to use the new pool. When normal operations resume in the Azure region of your original pool, you can update your pipelines to use the original pool, and delete the new pool and its associated resources.

## Related content

- [Azure reliability documentation](/azure/reliability/overview)
- [Azure DevOps data protection overview](/azure/devops/organizations/security/data-protection)
