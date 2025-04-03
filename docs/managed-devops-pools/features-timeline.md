---
title: Features timeline and roadmap
description: Learn about new features in Managed DevOps Pools.
ms.date: 03/31/2025
ms.topic: overview
#Customer intent: As a platform engineer, I want to understand the new features in Managed DevOps Pools.
---

# Managed DevOps Pools features timeline and roadmap

## Roadmap

The following section describes new features in development for Managed DevOps Pools.

* **Trusted root certificates**: Managed DevOps Pools is adding support so you can configure your pool to add certificates from your Key Vault as a trusted root certificate to your agents, so you don’t have to add a task for it to all the pipelines that use the pool. For more information, see [Key Vault configuration](./configure-security.md#key-vault-configuration). **Planned for April 2025.**

* **Shorter time for agent allocation**: The Managed DevOps Pools team is making updates to shorten the startup time for [standby agents](./configure-scaling.md#standby-agent-mode) (**Fresh agent every time** setting). **Planned for April 2025.**

* **Log analytics**: Managed DevOps Pools is adding support so you can configure your pools to emit logs into Log analytics. The Log Analytics tool in the Azure portal lets you run and edit log queries against data in the Azure Monitor Logs store. Use Log Analytics to analyze and visualize log data using [Kusto Query Language (KQL)](/azure/azure-monitor/logs/get-started-queries) or the point-and-click experience provided in [Log Analytics simple mode](/azure/azure-monitor/logs/log-analytics-simple-mode). **Planned for April 2025.**

* **Pool creation at the Azure DevOps project level using project level permissions**: To create a Managed DevOps Pool, you must currently be an [Organization-level Agent pools administrator or a Project Collection Administrator in Azure DevOps](./prerequisites.md#verify-azure-devops-permissions). We're enabling a new mode of Managed DevOps Pools creation, requiring only Project-level Agent pools administrator. Managed DevOps Pools created using Project-level Agent pools administrator will be created and enabled only for use in the designated Azure DevOps Project. **Planned for April 2025.**

* **Open access for all pipelines to use a Managed DevOps Pool**: By default, each pipeline must be explicitly authorized to use a newly created Managed DevOps Pool. We're adding an option to enable [Open access for all pipelines](/azure/devops/pipelines/agents/pools-queues#pipeline-permissions) so that administrators don't need to explicitly authorize each pipeline. **Planned for April 2025.**

* **Windows 2025 Azure Pipelines Image**: Windows 2025 is supported for [Selected marketplace images](./configure-images.md#selected-marketplace-images) and [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images), and we're adding it to [Azure Pipelines images](./configure-images.md#azure-pipelines-images).

* **Public Static IP**: We're adding support for public static IP addresses in Managed DevOps Pool to more easily enable access to external resources once [Default outbound access for VMs in Azure is retired](https://azure.microsoft.com/updates?id=default-outbound-access-for-vms-in-azure-will-be-retired-transition-to-a-new-method-of-internet-access). **Planned for June 2025.**

* **Spot Virtual Machines instances**: Reduce your Azure cost [by up to 90%](/azure/architecture/guide/spot/spot-eviction#understand-spot-vm-pricing) by switching your non-time-critical pipelines to Spot Virtual Machines. CI/CD workloads make ideal candidates to use Spot Virtual Machines due to the ephemeral nature of CI/CD agents. For more information on Spot Virtual Machines, see [Spot Virtual Machines overview](https://azure.microsoft.com/products/virtual-machines/spot). **Planned for end of 2025.**

* **Container agents**: We're adding support for provisioning a container and starting the agent inside the container. **Planned for end 2025.**

* **Purge agents**: We're adding the ability for you to manually recycle your agents if desired. **Planned for end of 2025.**

## March 2025

The following features were released in Managed DevOps Pools in March 2025.

* **Managed DevOps Pools supported in more Azure regions**: Managed DevOps Pools is now available in **(Central Asia) Jio Central India** and **(Central Asia) Jio West India**, allowing you to leverage regional resources for optimized performance and compliance. To see the Azure regions that support Managed DevOps Pools in your subscription, [register the Microsoft.DevOpsInfrastructure provider in your subscription and view the supported locations](prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription).

* **Ubuntu 24.04 Azure Pipelines Image**: Ubuntu 24.04 is supported for [Selected marketplace images](./configure-images.md#selected-marketplace-images) and [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images), and it's now supported for [Azure Pipelines images](./configure-images.md#azure-pipelines-images).

## November 2024

The following features were released in Managed DevOps Pools in November 2024.

* **Managed DevOps Pools supported in more Azure regions**: Managed DevOps Pools is now available in Sweden Central, Brazil South, Japan East, UAE North, Korea Central, and Norway East, allowing you to leverage regional resources for optimized performance and compliance. To see the Azure regions that support Managed DevOps Pools in your subscription, [register the Microsoft.DevOpsInfrastructure provider in your subscription and view the supported locations](prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription).

* **Integrate with Azure Key Vault**: Managed DevOps Pools offers the ability to fetch certificates from an Azure Key Vault during provisioning, which means the certificates will already exist on the machine by the time it runs your Azure Pipelines. To use this feature, [configure a managed identity on your pool](./configure-identity.md), and grant it permissions to access secrets from your Key Vault. For more information, see [Integrate with Azure Key Vault](./configure-security.md#key-vault-configuration).

* **Proxy support**: You can set up your Managed DevOps Pools to direct network traffic through a proxy. By using an image with a preinstalled proxy, you can run your Azure Pipelines on Managed DevOps Pools behind a proxy, like the current Azure Virtual Machine Scale Set agents offering. This setup enables the agent to retrieve sources and download artifacts, passing the proxy details to tasks that also require proxy settings to access the web. For more information, see [Proxy support](./configure-networking.md#configure-the-azure-devops-agent-to-run-behind-a-proxy).

* **View agent IP address**: You can now view the IP address of the agent in the Initialize job step of your pipeline log, useful for scenarios such as investigating failing pipelines due to proxies or firewall rules.

* **Move to another resource group or subscription**: You now have the option to move your Managed DevOps Pools to another Azure resource group or to another subscription. For more information, see [Move Azure resources to a new resource group or subscription](/azure/azure-resource-manager/management/move-resource-group-and-subscription).

* **Ubuntu 24.04 support**: We've added support for Ubuntu 24.04 by adding three images to [Selected marketplace images](./configure-images.md#selected-marketplace-images) and enabling bring-your-own Ubuntu 24.04 images using [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images). 

