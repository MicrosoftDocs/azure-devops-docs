---
title: Build code from Subversion
description: Using Subversion repo with Azure Pipelines
ms.topic: reference
ms.date: 07/08/2020
monikerRange: 'azure-devops'
---

# Build Subversion repositories

You can integrate your on-premises Subversion server with Azure Pipelines. The Subversion server must be accessible to Azure Pipelines.

> [!NOTE] 
> YAML pipelines do not work with Subversion repositories.

If your server is reachable from the hosted agents, then you can use the hosted agents to run manual, scheduled, or CI builds. Otherwise, you must set up self-hosted agents that can access your on-premises server and fetch the code.

To integrate with Subversion, create a **Subversion** service connection and use that to create a pipeline. CI triggers work through polling. In other words, Azure Pipelines periodically checks the Subversion server if there are any updates to code. If there are, then Azure Pipelines will start a new run.

If the Subversion server cannot be reached from Azure Pipelines, work with your IT department to open a network path between Azure Pipelines and your server. For example, you can add exceptions to your firewall rules to allow traffic from Azure Pipelines to flow through. See the section on [Azure DevOps IPs](#azure-devops-ip-addresses) to see which IP addresses you need to allow. Furthermore, you need to have a public DNS entry for the Subversion server so that Azure Pipelines can resolve the FQDN of your server to an IP address.

### Reachable from Microsoft-hosted agents

A decision you have to make is whether to use Microsoft-hosted agents or self-hosted agents to run your pipelines. This often comes down to whether Microsoft-hosted agents can reach your server. To check whether they can, create a simple pipeline to use Microsoft-hosted agents and make sure to add a step to checkout source code from your server. If this passes, then you can continue using Microsoft-hosted agents.

### Not reachable from Microsoft-hosted agents

If the simple test pipeline mentioned in the above section fails with an error, then the Subversion server is probably not reachable from Microsoft-hosted agents. This is probably caused by a firewall blocking traffic from these servers. You have two options in this case:

* Work with your IT department to open a network path between Microsoft-hosted agents and Subversion server. See the section on [networking](../agents/hosted.md#agent-ip-ranges) in Microsoft-hosted agents.

* Switch to using [self-hosted agents](../agents/agents.md) or [scale-set agents](../agents/scale-set-agents.md). These agents can be set up within your network and hence will have access to the Subversion server. These agents only require outbound connections to Azure Pipelines. There is no need to open a firewall for inbound connections. Make sure that the name of the server you specified when creating the service connection is resolvable from the self-hosted agents.

## Azure DevOps IP addresses

To allow traffic from Azure DevOps to reach your Subversion Server, add the IP addresses or service tags specified in [Inbound connections](../../organizations/security/allow-list-ip-url.md#inbound-connections) to your firewall's allow-list. If you use ExpressRoute, make sure to also include [ExpressRoute IP ranges](../../organizations/security/allow-list-ip-url.md#azure-devops-expressroute-connections) to your firewall's allow-list.

## FAQ

Problems related to Subversion server integration fall into the following categories:

* **[Failing triggers](#failing-triggers):** My pipeline is not being triggered when I push an update to the repo.
* **[Failing checkout](#failing-checkout):** My pipeline is being triggered, but it fails in the checkout step.

### Failing triggers

#### I pushed a change to my server, but the pipeline is not being triggered.

Follow each of these steps to troubleshoot your failing triggers:

* Is your Subversion server accessible from Azure Pipelines? Azure Pipelines periodically polls Subversion server for changes. If the Subversion server is behind a firewall, this traffic may not reach your server. See [Azure DevOps IP Addresses](#azure-devops-ip-addresses) and verify that you have granted exceptions to all the required IP addresses. These IP addresses may have changed since you have originally set up the exception rules.

* Is your pipeline paused or disabled? Open the editor for the pipeline, and then select **Settings** to check. If your pipeline is paused or disabled, then triggers do not work.

#### I did not push any updates to my code, however the pipeline is still being triggered.

* The continuous integration trigger for Subversion works through polling. After each polling interval, Azure Pipelines attempts to contact the Subversion server to check if there have been any updates to the code. If Azure Pipelines is unable to reach the server (possibly due to a network issue), then we start a new run anyway assuming that there might have been code changes. In a few cases, Azure Pipelines may also create a dummy failed build with an error message to indicate that it was unable to reach the server.

### Failing checkout

#### The checkout step fails with the error that the server cannot be resolved.

Do you use Microsoft-hosted agents? If so, these agents may not be able to reach your Bitbucket server. See [Not reachable from Microsoft-hosted agents](#not-reachable-from-microsoft-hosted-agents) for more information.
