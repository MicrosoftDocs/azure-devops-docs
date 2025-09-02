---
title: Managed DevOps Pools Overview
description: Learn about how you can use Managed DevOps Pools to spin up pools that are tailored to your specific needs.
ms.date: 07/03/2025
ms.topic: overview
#Customer intent: As a platform engineer, I want to understand the benefits of using Managed DevOps Pools.
---

# Overview of Managed DevOps Pools

Managed DevOps Pools empowers development teams to quickly and easily spin up Azure DevOps agent pools that are tailored to a team's specific needs. Managed DevOps Pools implements security best practices and provides ways to balance cost and performance. It also provides paths for the most common scenarios and significantly reduces time spent in creating and maintaining custom pools.

Managed DevOps Pools is an evolution of Azure DevOps Virtual Machine Scale Set agent pools. It simplifies custom pool creation even further by improving the scalability and reliability of custom pools. See [Compare Managed DevOps Pools with Azure Virtual Machine Scale Set agents](./migrate-from-scale-set-agents.md). Managed DevOps Pools is a fully managed service where virtual machines or containers powering the agents live in a Microsoft Azure subscription. They don't live in your own Azure subscription, similar to using Azure DevOps Virtual Machine Scale Set agent pools. For more information, see [Microsoft Managed DevOps Pools architecture overview](./architecture-overview.md).

## Usage scenarios

Managed DevOps Pools:

* Has more powerful agents than the agents that are available in out-of-the-box agents.
* Uses a virtual machine image that you custom make for your CI/CD workload.
* Has agents in the geographical region closest to your dependencies.
* Scales up and down based on your configuration.
* Can maintain the state of your agents up to seven days, so your builds are faster due to cache hits.
* Can run long-running workflows up to two days long. Contact support if your workflow requires running a single job that takes more than two days to complete.
* Can access resources in your company network or isolate your workload to only access specific endpoints.
* Can create agents that have the same software as Azure Pipelines Microsoft-hosted agents.
* Can view all active agents and the status of agent provisioning and reimaging.
* Can attach a data disk so you don't have to use a larger edition just to get more disk space.
* See the [roadmap and features timeline](./features-timeline.md#roadmap) to learn about upcoming features.

## What's new for Managed DevOps Pools GA

* **Managed DevOps Pools is supported in more Azure regions**: Managed DevOps Pools is now available in Sweden Central, Brazil South, Japan East, UAE North, Korea Central, and Norway East, allowing you to use regional resources for optimized performance and compliance. To see the Azure regions that support Managed DevOps Pools in your subscription, [register the `Microsoft.DevOpsInfrastructure` provider in your subscription and view the supported locations](prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription).
* **Integrate with Azure Key Vault**: Managed DevOps Pools offers the ability to fetch certificates from an Azure Key Vault during provisioning. Because of this process, the certificates already exist on the machine by the time it runs your Azure Pipelines. To use this feature, [configure a managed identity on your pool](./configure-identity.md), and grant it permissions to access secrets from your Key Vault. For more information, see [Integrate with Azure Key Vault](./configure-security.md#key-vault-configuration).
* **Proxy support**: You can set up your Managed DevOps Pools to direct network traffic through a proxy. By using an image with a preinstalled proxy, you can run your Azure Pipelines on Managed DevOps Pools behind a proxy, like the current Azure Virtual Machine Scale Set agents offering. This setup enables the agent to retrieve sources and download artifacts, passing the proxy details to tasks that also require proxy settings to access the web. For more information, see [Proxy support](./configure-networking.md#configure-the-azure-devops-agent-to-run-behind-a-proxy).
* **View agent IP address**: You can now view the IP address of the agent in the Initialize job step of your pipeline log. This feature is useful for scenarios such as investigating failing pipelines due to proxies or firewall rules.
* **Move to another resource group or subscription**: You can now move your Managed DevOps Pools to another Azure resource group or to another subscription. For more information, see [Move Azure resources to a new resource group or subscription](/azure/azure-resource-manager/management/move-resource-group-and-subscription).
* **Ubuntu 24.04 support**: We added support for Ubuntu 24.04 by adding three images to [Selected marketplace images](./configure-images.md#selected-marketplace-images) and enabling bring-your-own Ubuntu 24.04 images using [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images).

## Benefits

Managed DevOps Pools provides the following benefits when you create, configure, and manage Azure DevOps agent pools in the cloud:

* **Time spent on management**: Managed DevOps Pools is designed to reduce time spent managing CI/CD infrastructure, which frees up platform engineering or development team cycles to focus on other problems.
* **Team-specific pools**: Because users can easily create new pools, platform engineering teams can easily create multiple team-specific pools. This process prevents teams from noisy neighbor situations and tailors pools to suit the needs of individual teams.
* **Worry-free self-service**: Platform Engineering can choose to empower development teams to create their own custom pools without compromising on governance, by allowing the use of curated images and networks.
* **Azure cost**: Managed DevOps pools help optimize your Azure cost based on your CI/CD workload's unique needs.
* **Scalable**: Managed DevOps pools are scalable, up to thousands of agents running simultaneously.
* **Reliable**: Your developers experience less downtime, because Managed DevOps pools have high uptime.
* **Security**: Your pool's agents have the security of Microsoft's best practices, and you can use features to further secure your pool.

## Get started

To start using Managed DevOps Pools, see [Get started with Managed DevOps Pools](./quickstart-azure-portal.md).

## Related content

See what users are saying about Managed DevOps Pools. The following links take you to the respective author's external sites outside of Microsoft Learn.

* [A first look at revolutionizing your cloud deployments with Azure Managed DevOps Pools](https://www.azureviking.com/post/a-first-look-at-revolutionizing-your-cloud-deployments-with-azure-managed-devops-pools) by Haflidi Fridthjofsson
* [A first look at using Azure Managed DevOps Pools](https://blogs.blackmarble.co.uk/rfennell/a-first-look-at-using-azure-mdp/) by Richard Fennell
* [Azure DevOps Managed DevOps pools](https://bjompen.com/#/posts/azdo.mdp?id=azure-devops-managed-devops-pools) by bjompen
* [Deploying in a private Azure environment using Managed DevOps Pools](https://logcorner.com/deploying-in-a-private-azure-environment-using-managed-devops-pools/) by Gora Leye
* [Managed DevOps Pools: Simplifying Self-Hosted Azure Pipeline Agents](https://blog.almguru.com/managed-devops-pools-simplifying-self-hosted-azure-pipeline-agents-cd5f9c60640c) by Vladimir Gusarov
* [Simplify Azure DevOps agent management with Managed DevOps Pools](https://johnlokerse.dev/2024/10/14/simplify-azure-devops-agent-management-with-managed-devops-pools/) by John Lokerse
* [Simplifying Build Farms with Managed DevOps Pools for Azure DevOps](https://mattvsts.github.io/2024/09/11/managed-devops-pools/) by Matteo Emili
