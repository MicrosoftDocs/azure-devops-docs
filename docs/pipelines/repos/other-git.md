---
title: Build on-premises Git repositories
description: Using a remote on-premises Git server with Azure Pipelines
ms.topic: reference
ms.date: 03/29/2020
monikerRange: 'azure-devops'
---

# Build on-premises Git repositories

You can integrate your on-premises GitHub Enterprise server, BitBucket server or another Git server with Azure Pipelines. Your on-premises server may be exposed to the Internet or it may not be.

If your on-premises server is reachable from the servers that run Azure Pipelines service, then:
- you can set up classic build pipelines and configure CI and scheduled triggers

If your on-premises server is not reachable from the servers that run Azure Pipelines service, then:
- you can set up classic build pipelines and start manual builds
- you cannot configure CI or scheduled triggers for your classic build pipelines

If your on-premises server is reachable from the hosted agents, then you can use the hosted agents to run manual, scheduled, or CI builds. Otherwise, you must set up self-hosted agents that can access your on-premises server and fetch the code.

If you use GitHub Enterprise server that is reachable from the servers that run Azure Pipelines, then
- you can also set up YAML pipelines
- you can also configure PR triggers for your classic or YAML pipelines

### CI triggers

Azure Pipelines polls for changes at a regular interval. For this to work, Azure Pipelines or your Team Foundation Server must be able to resolve the network address of the service or server where your code is stored. For example if there's a firewall blocking the connection, then the CI trigger won't work.

## PR triggers

### Other Git

Pull request triggers are not available for Other/external Git repos.




