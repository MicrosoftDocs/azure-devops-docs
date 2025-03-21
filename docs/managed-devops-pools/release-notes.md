---
title: Features timeline
description: Learn about new features in Managed DevOps Pools.
ms.date: 03/21/2025
ms.topic: overview
#Customer intent: As a platform engineer, I want to understand the new features in Managed DevOps Pools.
---

# Features timeline

This article provides a history of new features delivered in Managed DevOps Pools. For information on planned features, see [Managed DevOps Pools roadmap](overview.md#roadmap).

## March 2025

* **Trusted root certificates**: Managed DevOps Pools added support so you can configure your pool to add certificates from your Key Vault as a trusted root certificate to your agents, so you don’t have to add a task for it to all the pipelines that use the pool. For more information, see [Key Vault configuration](./configure-security.md#key-vault-configuration).

* **Ubuntu 24.04 Azure Pipelines Image**: Ubuntu 24.04 is supported for [Selected marketplace images](./configure-images.md#selected-marketplace-images) and [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images), and it now supported for [Azure Pipelines images](./configure-images.md#azure-pipelines-images).

* **Shorter time for agent allocation**: The Managed DevOps Pools team made updates to shorten the startup time for [stateless agents](./configure-scaling.md#stateless-pools) (**Fresh agent every time** setting).

## November 2024

* **Managed DevOps Pools supported in more Azure regions**: Managed DevOps Pools is now available in Sweden Central, Brazil South, Japan East, UAE North, Korea Central, and Norway East, allowing you to leverage regional resources for optimized performance and compliance. To see the Azure regions that support Managed DevOps Pools in your subscription, [register the Microsoft.DevOpsInfrastructure provider in your subscription and view the supported locations](prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription).

* **Integrate with Azure Key Vault**: Managed DevOps Pools offers the ability to fetch certificates from an Azure Key Vault during provisioning, which means the certificates will already exist on the machine by the time it runs your Azure pipelines. To use this feature, [configure a managed identity on your pool](./configure-identity.md), and grant it permissions to access secrets from your Key Vault. For more information, see [Integrate with Azure Key Vault](./configure-security.md#key-vault-configuration).

* **Proxy support**: You can set up your Managed DevOps Pools to direct network traffic through a proxy. By using an image with a preinstalled proxy, you can run your Azure pipelines on Managed DevOps Pools behind a proxy, like the current Azure Virtual Machine Scale Set agents offering. This setup enables the agent to retrieve sources and download artifacts, passing the proxy details to tasks that also require proxy settings to access the web. For more information, see [Proxy support](./configure-networking.md#configure-the-azure-devops-agent-to-run-behind-a-proxy).

* **View agent IP address**: You can now view the IP address of the agent in the Initialize job step of your pipeline log, useful for scenarios such as investigating failing pipelines due to proxies or firewall rules.

* **Move to another resource group or subscription**: You now have the option to move your Managed DevOps Pools to another Azure resource group or to another subscription. For more information, see [Move Azure resources to a new resource group or subscription](/azure/azure-resource-manager/management/move-resource-group-and-subscription).

* **Ubuntu 24.04 support**: We've added support for Ubuntu 24.04 by adding three images to [Selected marketplace images](./configure-images.md#selected-marketplace-images) and enabling bring-your-own Ubuntu 24.04 images using [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images). 
