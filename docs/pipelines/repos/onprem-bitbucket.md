---
title: Build code from on-premises BitBucket server
description: Using on-premises BitBucket with Azure Pipelines
ms.topic: reference
ms.date: 07/05/2020
monikerRange: 'azure-devops'
---

# Build on-premises BitBucket repositories

> [!NOTE]
> To integrate BitBucket Cloud with Azure Pipelines, see [BitBucket Cloud](bitbucket.md).

You can integrate your on-premises BitBucket server or another Git server with Azure Pipelines. Your on-premises server may be exposed to the Internet or it may not be.

If your on-premises server is reachable from the servers that run Azure Pipelines service, then:
- you can set up classic build and configure CI triggers

If your on-premises server is not reachable from the servers that run Azure Pipelines service, then:
- you can set up classic build pipelines and start manual builds
- you cannot configure CI triggers

> [!NOTE] YAML pipelines do not work with on-premises BitBucket repositories.

> [!NOTE] PR triggers are not available with on-premises BitBucket repositories.

If your on-premises server is reachable from the hosted agents, then you can use the hosted agents to run manual, scheduled, or CI builds. Otherwise, you must set up self-hosted agents that can access your on-premises server and fetch the code.

## Reachable from Azure Pipelines

If your on-premises BitBucket server is reachable from Azure Pipelines service, create a **[Other Git](../library/service-endpoints.md#sep-extgit)** service connection and use that to create a pipeline. Check the option to **Attempt accessing this Git server from Azure Pipelines**.

CI triggers work through polling and not through webhooks. In other words, Azure Pipelines periodically checks the BitBucket server if there are any updates to code. If there are, then Azure Pipelines will start a new run.

### Not reachable from Azure Pipelines

If the BitBucket server cannot be reached from Azure Pipelines, you have two options:

1. Work with your IT department to open a network path between Azure Pipelines and on-premises Git server. For example, you can add exceptions to your firewall rules to allow trafic from Azure Pipelines to flow through. See the section on [Azure DevOps IPs](#azure-devops-ip-addresses) to see which IP addresses you need to allow. Furthermore, you need to have a public DNS entry for the BitBucket server so that Azure Pipelines can resolve the FQDN of your server to an IP address.

2. You can use a **[Other Git](../library/service-endpoints.md#sep-extgit)** connection but tell Azure Pipelines not to **attempt accessing this Git server from Azure Pipelines**. CI and PR triggers will not work in this configuration. You can only start manual or scheduled pipeline runs.

### Reachable from Microsoft-hosted agents

Another decision you possibly have to make is whether to use Microsoft-hosted agents or self-hosted agents to run your pipelines. This often comes down to whether Microsoft-hosted agents can reach your server. To check whether they can, create a simple pipeline to use Microsoft-hosted agents and make sure to add a step to checkout source code from your server. If this passes, then you can continue using Microsoft-hosted agents.

### Not reachable from Microsoft-hosted agents

If the simple test pipeline mentioned in the above section fails with the error `TF401019: The Git repository with name or identifier <your repo name> does not exist or you do not have permissions for the operation you are attempting`, then the BitBucket server is not reachable from Microsoft-hosted agents. This is again probably caused by a firewall blocking traffic from these servers. You have two options in this case:

1. Work with your IT department to open a network path between Microsoft-hosted agents and BitBucket server. See the section on [networking](../agents/hosted.md#agent-ip-ranges) in Microsoft-hosted agents.

2. Switch to using [self-hosted agents](../agents/agents.md) or [scale-set agents](../agents/scale-set-agents.md). These agents can be set up within your network and hence will have access to the BitBucket server. These agents only require outbound connections to Azure Pipelines. There is no need to open a firewall for inbound connections. Make sure that the name of the server you specified when creating the GitHub Enterprise Server connection is resolvable from the self-hosted agents.

## Azure DevOps IP addresses

When you use **Other Git** connection to set up a classic pipeline, disable communication between Azure Pipelines service and BitBucket erver, and use self-hosted agents to build code, you will get a degraded experience:

* You will have to type in the name of the repository manually during pipeline creation
* You cannot use CI triggers as Azure Pipelines won't be able to poll for changes to the code
* You cannot use scheduled triggers with the option to build only when there are changes
* You cannot view information about the latest commit in the user interface

If you want to enhance this experience, it is important that you enable communication from Azure Pipelines to GitHub Enterprise Server. 

1. Determine the region your Azure DevOps organization is hosted in. Go to the **Organization settings** in your Azure DevOps UI. The region is listed under **Region** in the **Overview** page.

2. Use the list below to find the appropriate range of IP addresses for your region.

[!INCLUDE [ip-addresses](includes/ip-addresses.md)]

3. Add the corresponding range of IP addresses to your firewall exception rules.

4. Allow Azure Pipelines to attempt accessing the Git server in the **Other Git** service connection.