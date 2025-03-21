---
title: Release notes
description: Learn about new features in Managed DevOps Pools.
ms.date: 03/21/2025
ms.topic: overview
#Customer intent: As a platform engineer, I want to understand the new features in Managed DevOps Pools.
---

# Release notes

## March 2025

* **Trusted root certificate**: Managed DevOps Pools is adding support so you can configure your pool to add certificates from your Key Vault as a trusted root certificate to your agents, so you don’t have to add a task for it to all the pipelines that use the pool. For more information, see [Key Vault configuration](./configure-security.md#key-vault-configuration).

* **Ubuntu 24.04 Azure Pipelines Image**: Ubuntu 24.04 is supported for [Selected marketplace images](./configure-images.md#selected-marketplace-images) and [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images), and it is coming soon for [Azure Pipelines images](./configure-images.md#azure-pipelines-images).

* **Shorter time for agent allocation**: The Managed DevOps Pools team is making updates to shorten the startup time for [stateless agents](./configure-scaling.md#stateless-pools) (**Fresh agent every time** setting).
