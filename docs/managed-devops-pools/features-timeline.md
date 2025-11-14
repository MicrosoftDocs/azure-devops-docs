---
title: Features timeline and roadmap
description: Learn about new features in Managed DevOps Pools.
ms.date: 10/09/2025
ms.topic: overview
#Customer intent: As a platform engineer, I want to understand the new features in Managed DevOps Pools.
---

# Managed DevOps Pools features timeline and roadmap

## Roadmap

The following section describes new features in development for Managed DevOps Pools.

* **Service Tag and new IPs**: Managed DevOps Pools control plane is going to add new IP outgoing addresses and is going to publish a service tag to provide a convenient mechanism to allow outbound traffic from Managed DevOps Pools. **Planned for October 2025.**

* **Log analytics**: Managed DevOps Pools is adding support so you can configure your pools to emit logs into Log analytics. The Log Analytics tool in the Azure portal lets you run and edit log queries against data in the Azure Monitor Logs store. Use Log Analytics to analyze and visualize log data using [Kusto Query Language (KQL)](/azure/azure-monitor/logs/get-started-queries) or the point-and-click experience provided in [Log Analytics simple mode](/azure/azure-monitor/logs/log-analytics-simple-mode). **Planned for October 2025.**

* **Purge agents**: We're adding the ability for you to manually recycle your agents if desired. **Planned for October 2025.**

* **Pool Alias**: We're adding the ability to add an Azure DevOps Pool name in addition to the Azure resource name to address [this ask from our community](https://developercommunity.visualstudio.com/t/Managed-Devops-Pools-Custom-agent-pool/10834336). **Planned for October 2025**.

* **Azure Pipelines image versions**: When a new image version breaks your pipeline, you can configure an [image version override demand](./demands.md#imageversionoverride) in every pipeline to [revert to the version used by the last successful pipeline run](./troubleshooting.md#check-to-see-if-there-has-been-an-image-update). With the proposed feature, you can select the image version of an Azure Pipelines image in the Managed DevOps Pools user interface, and pin your pool's image to a specific image version. **Planned for October 2025**.

* **Spot Virtual Machines instances**: Reduce your Azure cost [by up to 90%](/azure/architecture/guide/spot/spot-eviction#understand-spot-vm-pricing) by switching your non-time-critical pipelines to Spot Virtual Machines. CI/CD workloads make ideal candidates to use Spot Virtual Machines due to the ephemeral nature of CI/CD agents. For more information on Spot Virtual Machines, see [Spot Virtual Machines overview](https://azure.microsoft.com/products/virtual-machines/spot). **Planned for early 2026.**

* **Container agents**: We're adding support for provisioning a container and starting the agent inside the container. **Planned for early 2026.**

* **Custom Startup Script**: We are adding the option to run a PowerShell script (Windows) or a shell script (Linux) for every image in a pool before they are assigned to an agent, to enable scenarios such as installing Trusted root CAs, setting environment, etc. **Planned for early 2026**.

## November 2025

* **Public Static IP**: We've added support for public static IP addresses in Managed DevOps Pools to enable access to external resources, to prepare for when [Default outbound access for VMs in Azure is retired](https://azure.microsoft.com/updates?id=default-outbound-access-for-vms-in-azure-will-be-retired-transition-to-a-new-method-of-internet-access). This change with Azure will affect Managed DevOps Pools, Azure Virtual Machine Scale Set agent pools, and self-hosted pools that will create a new virtual network and they will not be able to access anything outside the agent without infrastructure like a NAT gateway. 

   When [Default outbound access for VMs in Azure is retired](https://azure.microsoft.com/updates?id=default-outbound-access-for-vms-in-azure-will-be-retired-transition-to-a-new-method-of-internet-access), all Managed DevOps Pools using a private isolated network will have one static IP address assigned by default. This will incur additional Azure costs for the NAT gateway. For more information, see [Configure Managed DevOps Pools networking: 
Isolated virtual network](./configure.md#isolated-virtual-network).

## October 2025

* **Pool creation at the Azure DevOps project level using project level permissions**: We enabled a new mode of Managed DevOps Pools creation, removing the requirement for organization-level agent pools administrator permission. Creating a pool now requires only project-level permissions for each project where you want to create a Managed DevOps Pool. For more information, see [Prerequisites - Verify Azure DevOps permissions](./prerequisites.md#verify-azure-devops-permissions).

## August 2025

* [Ubuntu 20.04 LTS Standard Support ended May 31, 2025](https://ubuntu.com/blog/ubuntu-20-04-lts-end-of-life-standard-support-is-coming-to-an-end-heres-how-to-prepare). We've removed the Ubuntu 20.04 images from [Selected marketplace images](./configure-images.md#selected-marketplace-images) and [Azure Pipelines images](./configure-images.md#azure-pipelines-images), and starting August 30, 2025, pipelines that are configured to use these deprecated images are unsupported. For more information, see [Managed DevOps Pools image lifecycle](./configure-images.md#image-lifecycle).

## July 2025

* **Windows 2025 Azure Pipelines Image**: Managed DevOps Pools added the [Windows Server 2025 image](https://github.com/actions/runner-images/blob/main/images/windows/Windows2025-Readme.md) to [Azure Pipelines images](./configure-images.md#azure-pipelines-images).

* [Ubuntu 20.04 LTS Standard Support ended May 31, 2025](https://ubuntu.com/blog/ubuntu-20-04-lts-end-of-life-standard-support-is-coming-to-an-end-heres-how-to-prepare), and Managed DevOps Pools removed Ubuntu 20.04 images from [Selected marketplace images](./configure-images.md#selected-marketplace-images) and [Azure Pipelines images](./configure-images.md#azure-pipelines-images). For more information, see [Managed DevOps Pools image lifecycle](./configure-images.md#image-lifecycle).

* **Added support for the UK West region.**

## May 2025

* **Shorter time for agent allocation**: The Managed DevOps Pools team made updates to shorten the startup time for [standby agents](./configure-scaling.md#standby-agent-mode) (**Fresh agent every time** setting). For more information, see [Lifecycle of agents and potential delays in allocation](./configure-scaling.md#lifecycle-of-agents-and-potential-delays-in-allocation).

## April 2025

* **Open access for all pipelines to use a Managed DevOps Pool**: By default, each pipeline must be explicitly authorized to use a newly created Managed DevOps Pool. We're adding an option to enable [Open access for all pipelines](../pipelines/agents/pools-queues.md#pipeline-permissions) so that administrators don't need to explicitly authorize each pipeline. For more information, see [Configure open access for pipelines to your pool](./configure-security.md#configure-open-access-for-pipelines-to-your-pool).

* **Trusted root certificates**: Managed DevOps Pools added support so you can configure your pool to add certificates from your Key Vault as a trusted root certificate to your agents, so you don’t have to add a task for it to all the pipelines that use the pool. For more information, see [Key Vault configuration](./configure-security.md#key-vault-configuration).

## March 2025

The following features were released in Managed DevOps Pools in March 2025.

* **Managed DevOps Pools supported in more Azure regions**: Managed DevOps Pools is now available in **(Asia Pacific) Jio India Central** and **(Asia Pacific) Jio India West**, allowing you to leverage regional resources for optimized performance and compliance. To see the Azure regions that support Managed DevOps Pools in your subscription, [register the Microsoft.DevOpsInfrastructure provider in your subscription and view the supported locations](prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription).

* **Ubuntu 24.04 Azure Pipelines Image**: Ubuntu 24.04 is supported for [Selected marketplace images](./configure-images.md#selected-marketplace-images) and [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images), and it's now supported for [Azure Pipelines images](./configure-images.md#azure-pipelines-images).

## November 2024

The following features were released in Managed DevOps Pools in November 2024.

* **Managed DevOps Pools supported in more Azure regions**: Managed DevOps Pools is now available in Sweden Central, Brazil South, Japan East, UAE North, Korea Central, and Norway East, allowing you to leverage regional resources for optimized performance and compliance. To see the Azure regions that support Managed DevOps Pools in your subscription, [register the Microsoft.DevOpsInfrastructure provider in your subscription and view the supported locations](prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription).

* **Integrate with Azure Key Vault**: Managed DevOps Pools offers the ability to fetch certificates from an Azure Key Vault during provisioning, which means the certificates will already exist on the machine by the time it runs your Azure Pipelines. To use this feature, [configure a managed identity on your pool](./configure-identity.md), and grant it permissions to access secrets from your Key Vault. For more information, see [Integrate with Azure Key Vault](./configure-security.md#key-vault-configuration).

* **Proxy support**: You can set up your Managed DevOps Pools to direct network traffic through a proxy. By using an image with a preinstalled proxy, you can run your Azure Pipelines on Managed DevOps Pools behind a proxy, like the current Azure Virtual Machine Scale Set agents offering. This setup enables the agent to retrieve sources and download artifacts, passing the proxy details to tasks that also require proxy settings to access the web. For more information, see [Proxy support](./configure-networking.md#configure-the-azure-devops-agent-to-run-behind-a-proxy).

* **View agent IP address**: You can now view the IP address of the agent in the Initialize job step of your pipeline log, useful for scenarios such as investigating failing pipelines due to proxies or firewall rules.

* **Move to another resource group or subscription**: You now have the option to move your Managed DevOps Pools to another Azure resource group or to another subscription. For more information, see [Move Azure resources to a new resource group or subscription](/azure/azure-resource-manager/management/move-resource-group-and-subscription).

* **Ubuntu 24.04 support**: We've added support for Ubuntu 24.04 by adding three images to [Selected marketplace images](./configure-images.md#selected-marketplace-images) and enabling bring-your-own Ubuntu 24.04 images using [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images). 

