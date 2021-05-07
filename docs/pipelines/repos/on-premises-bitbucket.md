---
title: Build code from on-premises Bitbucket server
description: Using on-premises Bitbucket with Azure Pipelines
ms.topic: reference
ms.date: 07/05/2020
monikerRange: 'azure-devops'
---

# Build on-premises Bitbucket repositories

> [!NOTE]
> To integrate Bitbucket Cloud with Azure Pipelines, see [Bitbucket Cloud](bitbucket.md).

You can integrate your on-premises Bitbucket server or another Git server with Azure Pipelines. Your on-premises server may be exposed to the Internet or it may not be.

If your on-premises server is reachable from the servers that run Azure Pipelines service, then:
- you can set up classic build and configure CI triggers

If your on-premises server is not reachable from the servers that run Azure Pipelines service, then:
- you can set up classic build pipelines and start manual builds
- you cannot configure CI triggers

> [!NOTE] 
> YAML pipelines do not work with on-premises Bitbucket repositories.

> [!NOTE] 
> PR triggers are not available with on-premises Bitbucket repositories.

If your on-premises server is reachable from the hosted agents, then you can use the hosted agents to run manual, scheduled, or CI builds. Otherwise, you must set up self-hosted agents that can access your on-premises server and fetch the code.

## Reachable from Azure Pipelines

If your on-premises Bitbucket server is reachable from Azure Pipelines service, create a **[Other Git](../library/service-endpoints.md#sep-extgit)** service connection and use that to create a pipeline. Check the option to **Attempt accessing this Git server from Azure Pipelines**.

CI triggers work through polling and not through webhooks. In other words, Azure Pipelines periodically checks the Bitbucket server if there are any updates to code. If there are, then Azure Pipelines will start a new run.

### Not reachable from Azure Pipelines

If the Bitbucket server cannot be reached from Azure Pipelines, you have two options:

* Work with your IT department to open a network path between Azure Pipelines and on-premises Git server. For example, you can add exceptions to your firewall rules to allow traffic from Azure Pipelines to flow through. See the section on [Azure DevOps IPs](#azure-devops-ip-addresses) to see which IP addresses you need to allow. Furthermore, you need to have a public DNS entry for the Bitbucket server so that Azure Pipelines can resolve the FQDN of your server to an IP address.

* You can use a **[Other Git](../library/service-endpoints.md#sep-extgit)** connection but tell Azure Pipelines not to **attempt accessing this Git server from Azure Pipelines**. CI and PR triggers will not work in this configuration. You can only start manual or scheduled pipeline runs.

### Reachable from Microsoft-hosted agents

Another decision you possibly have to make is whether to use Microsoft-hosted agents or self-hosted agents to run your pipelines. This often comes down to whether Microsoft-hosted agents can reach your server. To check whether they can, create a simple pipeline to use Microsoft-hosted agents and make sure to add a step to checkout source code from your server. If this passes, then you can continue using Microsoft-hosted agents.

### Not reachable from Microsoft-hosted agents

If the simple test pipeline mentioned in the above section fails with the error `TF401019: The Git repository with name or identifier <your repo name> does not exist or you do not have permissions for the operation you are attempting`, then the Bitbucket server is not reachable from Microsoft-hosted agents. This is again probably caused by a firewall blocking traffic from these servers. You have two options in this case:

* Work with your IT department to open a network path between Microsoft-hosted agents and Bitbucket server. See the section on [networking](../agents/hosted.md#agent-ip-ranges) in Microsoft-hosted agents.

* Switch to using [self-hosted agents](../agents/agents.md) or [scale-set agents](../agents/scale-set-agents.md). These agents can be set up within your network and hence will have access to the Bitbucket server. These agents only require outbound connections to Azure Pipelines. There is no need to open a firewall for inbound connections. Make sure that the name of the server you specified when creating the service connection is resolvable from the self-hosted agents.

## Azure DevOps IP addresses

When you use **Other Git** connection to set up a classic pipeline, disable communication between Azure Pipelines service and Bitbucket server, and use self-hosted agents to build code, you will get a degraded experience:

* You will have to type in the name of the repository manually during pipeline creation
* You cannot use CI triggers as Azure Pipelines won't be able to poll for changes to the code
* You cannot use scheduled triggers with the option to build only when there are changes
* You cannot view information about the latest commit in the user interface

If you want to enhance this experience, it is important that you enable communication from Azure Pipelines to Bitbucket Server. 

To allow traffic from Azure DevOps to reach your Bitbucket Server, add the IP addresses or service tags specified in [Inbound connections](../../organizations/security/allow-list-ip-url.md#inbound-connections) to your firewall's allow-list. If you use ExpressRoute, make sure to also include [ExpressRoute IP ranges](../../organizations/security/allow-list-ip-url.md#azure-devops-expressroute-connections) to your firewall's allow-list.

Allow Azure Pipelines to attempt accessing the Git server in the **Other Git** service connection.

## FAQ

Problems related to Bitbucket Server integration fall into the following categories:

* **[Failing triggers](#failing-triggers):** My pipeline is not being triggered when I push an update to the repo.
* **[Failing checkout](#failing-checkout):** My pipeline is being triggered, but it fails in the checkout step.

### Failing triggers

#### I pushed a change to my server, but the pipeline is not being triggered.

Follow each of these steps to troubleshoot your failing triggers:

* Is your Bitbucket server accessible from Azure Pipelines? Azure Pipelines periodically polls Bitbucket server for changes. If the Bitbucket server is behind a firewall, this traffic may not reach your server. See [Azure DevOps IP Addresses](#azure-devops-ip-addresses) and verify that you have granted exceptions to all the required IP addresses. These IP addresses may have changed since you have originally set up the exception rules. You can only start manual runs if you used an external Git connection and if your server is not accessible from Azure Pipelines.

* Is your pipeline paused or disabled? Open the editor for the pipeline, and then select **Settings** to check. If your pipeline is paused or disabled, then triggers do not work.

* Have you excluded the branches or paths to which you pushed your changes? Test by pushing a change to an included path in an included branch. Note that paths in triggers are case-sensitive. Make sure that you use the same case as those of real folders when specifying the paths in triggers.

#### I did not push any updates to my code, however the pipeline is still being triggered.

* The continuous integration trigger for Bitbucket works through polling. After each polling interval, Azure Pipelines attempts to contact the Bitbucket server to check if there have been any updates to the code. If Azure Pipelines is unable to reach the Bitbucket server (possibly due to a network issue), then we start a new run anyway assuming that there might have been code changes. In a few cases, Azure Pipelines may also create a dummy failed build with an error message to indicate that it was unable to reach the server.

### Failing checkout

#### When I attempt to start a new run manually, there is a delay of 4-8 minutes before it starts.

* Your Bitbucket server is not reachable from Azure Pipelines. Make sure that you have not selected the option to **attempt accessing this Git server from Azure Pipelines** in the Bitbucket service connection. If that option is selected, Azure Pipelines will attempt to contact to your server and since your server is unreachable, it eventually times out and starts the run anyway. Unchecking that option speeds up your manual runs.

#### The checkout step fails with the error that the server cannot be resolved.

Do you use Microsoft-hosted agents? If so, these agents may not be able to reach your Bitbucket server. See [Not reachable from Microsoft-hosted agents](#not-reachable-from-microsoft-hosted-agents) for more information.
