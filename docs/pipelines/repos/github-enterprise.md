---
title: Build code from GitHub Enterprise Server
description: Using a GitHub Enterprise Server with Azure Pipelines
ms.topic: reference
ms.date: 07/05/2020
monikerRange: 'azure-devops'
---

# Build GitHub Enterprise Server repositories

You can integrate your on-premises GitHub Enterprise Server with Azure Pipelines. Your on-premises server may be exposed to the Internet or it may not be.

If your GitHub Enterprise Server is reachable from the servers that run Azure Pipelines service, then:
- you can set up classic build and YAML pipelines
- you can configure CI, PR, and scheduled triggers

If your GitHub Enterprise Server is not reachable from the servers that run Azure Pipelines service, then:
- you can only set up classic build pipelines
- you can only start manual or scheduled builds
- you cannot set up YAML pipelines
- you cannot configure CI or PR triggers for your classic build pipelines

If your on-premises server is reachable from Microsoft-hosted agents, then you can use them to run your pipelines. Otherwise, you must set up self-hosted agents that can access your on-premises server and fetch the code.

## Reachable from Azure Pipelines

The first thing to check is whether your GitHub Enterprise Server is reachable from Azure Pipelines service.

1. In your Azure DevOps UI, navigate to your project settings, and select **Service Connections** under **Pipelines**.
2. Select **New service connection** and choose **GitHub Enterprise Server** as the connection type.
3. Enter the required information to create a connection to your GitHub Enterprise Server.
4. Select **Verify** in the service connection panel.

If the verification passes, then the servers that run Azure Pipelines service are able to reach your on-premises GitHub Enterprise Server. You can proceed and set up the connection. Then, you can use this service connection when creating a classic build or YAML pipeline. You can also configure CI and PR triggers for the pipeline. A majority of features in Azure Pipelines that work with GitHub also work with GitHub Enterprise Server. Review the documentation for [GitHub](github.md) to understand these features. Here are some differences:

* The integration between GitHub and Azure Pipelines is made easier through an Azure Pipelines app in GitHub marketplace. This app allows you to set up an integration without having to rely on a particular user's OAuth token. We do not have a similar app that works with GitHub Enterprise Server. So, you must use a PAT, username and password, or OAuth to set up the connection between Azure Pipelines and GitHub Enterprise server.
* When working with GitHub, Azure Pipelines supports a number of security features to validate contributions from external forks. For instance, secrets stored in a pipeline are not made available to a running job. These protections are not available when working with GitHub Enterprise server.
* Comment triggers are not available with GitHub Enterprise server. You cannot use comments in a GitHub Enterprise server repo pull request to trigger a pipeline.
* GitHub Checks are not available in GitHub Enterprise server. All status updates are through basic statuses.

## Not reachable from Azure Pipelines

When the verification of a GitHub Enterprise Server connection as explained in the above section fails, then Azure Pipelines cannot communicate with your server. This is likely caused by how your enterprise network is set up. For instance, a firewall in your network may prevent external traffic from reaching your servers. You have two options in this case:

* Work with your IT department to open a network path between Azure Pipelines and GitHub Enterprise Server. For example, you can add exceptions to your firewall rules to allow traffic from Azure Pipelines to flow through. See the section on [Azure DevOps IPs](#azure-devops-ip-addresses) to see which IP addresses you need to allow. Furthermore, you need to have a public DNS entry for the GitHub Enterprise Server so that Azure Pipelines can resolve the FQDN of your server to an IP address. With all of these changes, attempt to create and verify a GitHub Enterprise Server connection in Azure Pipelines.

* Instead of a using a GitHub Enterprise Server connection, you can use a **[Other Git](../library/service-endpoints.md#external-git-service-connection)** connection. Make sure to uncheck the option to **Attempt accessing this Git server from Azure Pipelines**. With this connection type, you can only configure a classic build pipeline. CI and PR triggers will not work in this configuration. You can only start manual or scheduled pipeline runs.

## Reachable from Microsoft-hosted agents

Another decision you possibly have to make is whether to use Microsoft-hosted agents or self-hosted agents to run your pipelines. This often comes down to whether Microsoft-hosted agents can reach your server. To check whether they can, create a simple pipeline to use Microsoft-hosted agents and make sure to add a step to checkout source code from your server. If this passes, then you can continue using Microsoft-hosted agents.

## Not reachable from Microsoft-hosted agents

If the simple test pipeline mentioned in the above section fails with the error `TF401019: The Git repository with name or identifier <your repo name> does not exist or you do not have permissions for the operation you are attempting`, then the GitHub Enterprise Server is not reachable from Microsoft-hosted agents. This is again probably caused by a firewall blocking traffic from these servers. You have two options in this case:

* Work with your IT department to open a network path between Microsoft-hosted agents and GitHub Enterprise Server. See the section on [networking](../agents/hosted.md#agent-ip-ranges) in Microsoft-hosted agents.

* Switch to using [self-hosted agents](../agents/agents.md) or [scale-set agents](../agents/scale-set-agents.md). These agents can be set up within your network and hence will have access to the GitHub Enterprise Server. These agents only require outbound connections to Azure Pipelines. There is no need to open a firewall for inbound connections. Make sure that the name of the server you specified when creating the GitHub Enterprise Server connection is resolvable from the self-hosted agents.

## Azure DevOps IP addresses

Azure Pipelines sends requests to GitHub Enterprise Server to:

* Query for a list of repositories during pipeline creation (classic and YAML pipelines)
* Look for existing YAML files during pipeline creation (YAML pipelines)
* Check-in YAML files (YAML pipelines)
* Register a webhook during pipeline creation (classic and YAML pipelines)
* Present an editor for YAML files (YAML pipelines)
* Resolve templates and expand YAML files prior to execution (YAML pipelines)
* Check if there are any changes since the last scheduled run (classic and YAML pipelines)
* Fetch details about latest commit and display that in the user interface (classic and YAML pipelines)

You can observe that YAML pipelines fundamentally require communication between Azure Pipelines and GitHub Enterprise Server. Hence, it is not possible to set up a YAML pipeline if the GitHub Enterprise Server is not visible to Azure Pipelines. 

When you use **Other Git** connection to set up a classic pipeline, disable communication between Azure Pipelines service and GitHub Enterprise Server, and use self-hosted agents to build code, you will get a degraded experience:

* You will have to type in the name of the repository manually during pipeline creation
* You cannot use CI or PR triggers as Azure Pipelines cannot register a webhook in GitHub Enterprise Server
* You cannot use scheduled triggers with the option to build only when there are changes
* You cannot view information about the latest commit in the user interface

If you want to set up YAML pipelines or if you want to enhance the experience with classic pipelines, it is important that you enable communication from Azure Pipelines to GitHub Enterprise Server. 

To allow traffic from Azure DevOps to reach your GitHub Enterprise Server, add the IP addresses or service tags specified in [Inbound connections](../../organizations/security/allow-list-ip-url.md#inbound-connections) to your firewall's allow-list. If you use ExpressRoute, make sure to also include [ExpressRoute IP ranges](../../organizations/security/allow-list-ip-url.md#azure-devops-expressroute-connections) to your firewall's allow-list.

## FAQ

Problems related to GitHub Enterprise integration fall into the following categories:

* **[Failing triggers](#failing-triggers):** My pipeline is not being triggered when I push an update to the repo.
* **[Failing checkout](#failing-checkout):** My pipeline is being triggered, but it fails in the checkout step.
* **[Wrong version](#wrong-version):** My pipeline runs, but it is using an unexpected version of the source/YAML.

### Failing triggers

[!INCLUDE [qa](includes/qa2.md)]

* Webhooks are used to communicate updates from GitHub Enterprise to Azure Pipelines. In GitHub Enterprise, navigate to the settings for your repository, then to Webhooks. Verify that the webhooks exist. Usually you should see two webhooks - push, pull_request. If you don't, then you must re-create the service connection and update the pipeline to use the new service connection.
  
* Select each of the webhooks in GitHub Enterprise and verify that the payload that corresponds to the user's commit exists and was sent successfully to Azure DevOps. You may see an error here if the event could not be communicated to Azure DevOps.

* When Azure Pipelines receives a notification from GitHub, it tries to contact GitHub and fetch more information about the repo and YAML file. If the GitHub Enterprise Server is behind a firewall, this traffic may not reach your server. See [Azure DevOps IP Addresses](#azure-devops-ip-addresses) and verify that you have granted exceptions to all the required IP addresses. These IP addresses may have changed since you have originally set up the exception rules.

[!INCLUDE [qa](includes/qa2-1.md)]

[!INCLUDE [qa](includes/qa3.md)]

### Failing checkout

Do you use Microsoft-hosted agents? If so, these agents may not be able to reach your GitHub Enterprise Server. See [Not reachable from Microsoft-hosted agents](#not-reachable-from-microsoft-hosted-agents) for more information.

### Wrong version

[!INCLUDE [qa](includes/qa1.md)]
