---
title: Overview
description: Learn about Managed DevOps Pools.
ms.date: 03/04/2025
ms.topic: overview
#Customer intent: As a platform engineer, I want to understand the benefits of using Managed DevOps Pools.
---

# Overview

Managed DevOps Pools empowers development teams to quickly and easily spin up Azure DevOps agent pools that are tailored to a team's specific needs. Managed DevOps Pools implements security best practices, provides knobs to balance cost and performance, provides paths for the most common scenarios, and significantly reduces time spent in creating and maintaining custom pools.

Managed DevOps Pools is an evolution of Azure DevOps Virtual Machine Scale Set agent pools, simplifying custom pool creation even further, by improving scalability and reliability of custom pools. See [Compare Managed DevOps Pools with Azure Virtual Machine Scale Set agents](./migrate-from-scale-set-agents.md). Managed DevOps Pools is a fully managed service where virtual machines or containers powering the agents live in a Microsoft Azure subscription and not in your own Azure subscription, like when using Azure DevOps Virtual Machine Scale Set agent pools. For more information, see [Microsoft Managed DevOps Pools architecture overview](./architecture-overview.md).

## Usage Scenarios

Manage DevOps Pools:

* Has more powerful agents than those available in the out-of-the-box agents
* Uses a virtual machine image that is custom tailored by you for your CI/CD workload
* Has agents in the geographical region closest to your dependencies
* Scales up and down based on your configuration
* Can maintain state of your agents up to seven days, so your builds are faster due to cache hits 
* Can run long running workflows up to two days long
* Can access resources in your company network or isolate your workload to only access specific endpoints
* Can create agents that have the same software as Azure Pipelines Microsoft-hosted agents
* Can view all active agents and the status of agent provisioning and reimaging
* Can attach a data disk, so you don't have to use a larger SKU just to get more disk space
* See [Roadmap](#roadmap) for features coming up.

## What's new for Managed DevOps Pools GA

**Managed DevOps Pools supported in more Azure regions**: Managed DevOps Pools is now available in Sweden Central, Brazil South, Japan East, UAE North, Korea Central, and Norway East, allowing you to leverage regional resources for optimized performance and compliance. To see the Azure regions that support Managed DevOps Pools in your subscription, [register the Microsoft.DevOpsInfrastructure provider in your subscription and view the supported locations](prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription).

**Integrate with Azure Key Vault**: Managed DevOps Pools offers the ability to fetch certificates from an Azure Key Vault during provisioning, which means the certificates will already exist on the machine by the time it runs your Azure pipelines. To use this feature, [configure a managed identity on your pool](./configure-identity.md), and grant it permissions to access secrets from your Key Vault. For more information, see [Integrate with Azure Key Vault](./configure-security.md#key-vault-configuration).

**Proxy support**: You can set up your Managed DevOps Pools to direct network traffic through a proxy. By using an image with a preinstalled proxy, you can run your Azure pipelines on Managed DevOps Pools behind a proxy, like the current Azure Virtual Machine Scale Set agents offering. This setup enables the agent to retrieve sources and download artifacts, passing the proxy details to tasks that also require proxy settings to access the web. For more information, see [Proxy support](./configure-networking.md#configure-the-azure-devops-agent-to-run-behind-a-proxy).

**View agent IP address**: You can now view the IP address of the agent in the Initialize job step of your pipeline log, useful for scenarios such as investigating failing pipelines due to proxies or firewall rules.

**Move to another resource group or subscription**: You now have the option to move your Managed DevOps Pools to another Azure resource group or to another subscription. For more information, see [Move Azure resources to a new resource group or subscription](/azure/azure-resource-manager/management/move-resource-group-and-subscription).

**Ubuntu 24.04 support**: We've added support for Ubuntu 24.04 by adding three images to [Selected marketplace images](./configure-images.md#selected-marketplace-images) and enabling bring-your-own Ubuntu 24.04 images using [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images). 

## Benefits

Managed DevOps Pools provide the following benefits to creating, configuring, and managing Azure DevOps agent pools in the cloud:

**Time spent in Management**: Managed DevOps Pools is designed to reduce time spent in managing CI/CD infrastructure. This will free up Platform Engineering cycles or Dev Team cycles to focus on other problems.

**Team-specific Pools**: Due to the ease with which new pools can be created, Platform Engineering can very easily create multiple team-specific pools, preventing teams from noisy neighbor situations and tailoring pools to suit the needs of individual teams.

**Worry-free Self-Service**: Platform Engineering can choose to empower development teams to create their own custom pools without compromising on governance, by allowing the use of curated images and networks.

**Azure Cost**: Managed DevOps pools will help optimize your Azure cost based on your CI/CD workload's unique needs.

**Scalable**: Managed DevOps pools are scalable up to thousands of agents running simultaneously.

**Reliable**: Your developers will experience lowest amount of downtime due to the high uptimes of Managed DevOps pools.

**Security**: Your pool's agents are secured by Microsoft's best practices, and has features to further secure your pool.

## Roadmap

The following section describes new features in development for Managed DevOps Pools.

* **Log analytics**: Managed DevOps Pools is adding support so you can configure your pools to emit logs into Log analytics. The Log Analytics tool in the Azure portal lets you run and edit log queries against data in the Azure Monitor Logs store. Use Log Analytics to analyze and visualize log data using [Kusto Query Language (KQL)](/azure/azure-monitor/logs/get-started-queries) or the point-and-click experience provided in [Log Analytics simple mode](/azure/azure-monitor/logs/log-analytics-simple-mode). **Planned for April 2025.**

* **Pool creation at the Azure DevOps project level using project level permissions**: To create a Managed DevOps Pool, you must currently be an [Organization-level Agent pools administrator or a Project Collection Administrator in Azure DevOps](./prerequisites.md#verify-azure-devops-permissions). We're enabling a new mode of Managed DevOps Pools creation, requiring only Project-level Agent pools administrator. Managed DevOps Pools created using Project-level Agent pools administrator will be created and enabled only for use in the designated Azure DevOps Project. **Planned for April 2025.**

* **Open access for all pipelines to use a Managed DevOps Pool**: By default, each pipeline must be explicitly authorized to use a newly created Managed DevOps Pool. We're adding an option to enable [Open access for all pipelines](/azure/devops/pipelines/agents/pools-queues#pipeline-permissions) so that administrators don't need to explicitly authorize each pipeline. **Planned for April 2025.**

* **Spot Virtual Machines instances**: Reduce your Azure cost [by up to 90%](/azure/architecture/guide/spot/spot-eviction#understand-spot-vm-pricing) by switching your non-time-critical pipelines to Spot Virtual Machines. CI/CD workloads make ideal candidates to use Spot Virtual Machines due to the ephemeral nature of CI/CD agents. For more information on Spot Virtual Machines, see [Spot Virtual Machines overview](https://azure.microsoft.com/products/virtual-machines/spot). **Planned for end of 2025.**

* **Container agents**: We're adding support for provisioning a container and starting the agent inside the container. **Planned for end 2025.**

* **Purge agents**: We're adding the ability for you to manually recycle your agents if desired. **Planned for end of 2025.**

## Get Started

To start using Managed DevOps Pools, see [Get started with Managed DevOps Pools](./quickstart-azure-portal.md).

## See also

See what our MVPs are saying about Managed DevOps Pools. The following links take you to the respective author's external sites outside of Microsoft Learn.

* [A first look at revolutionizing your cloud deployments with Azure Managed DevOps Pools](https://www.azureviking.com/post/a-first-look-at-revolutionizing-your-cloud-deployments-with-azure-managed-devops-pools) by Haflidi Fridthjofsson
* [A first look at using Azure Managed DevOps Pools](https://blogs.blackmarble.co.uk/rfennell/a-first-look-at-using-azure-mdp/) by Richard Fennell
* [Azure DevOps Managed DevOps pools](https://bjompen.com/#/posts/azdo.mdp?id=azure-devops-managed-devops-pools) by bjompen
* [Deploying in a private Azure environment using Managed DevOps Pools](https://logcorner.com/deploying-in-a-private-azure-environment-using-managed-devops-pools/) by Gora LEYE
* [Managed DevOps Pools: Simplifying Self-Hosted Azure Pipeline Agents](
https://blog.almguru.com/managed-devops-pools-simplifying-self-hosted-azure-pipeline-agents-cd5f9c60640c) by Vladimir Gusarov
* [Simplify Azure DevOps agent management with Managed DevOps Pools](https://johnlokerse.dev/2024/10/14/simplify-azure-devops-agent-management-with-managed-devops-pools/) by John Lokerse
* [Simplifying Build Farms with Managed DevOps Pools for Azure DevOps](https://mattvsts.github.io/2024/09/11/managed-devops-pools/) by Matteo Emili

