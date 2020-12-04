---
title: Historical graphs for agent pools
description: View agent pool usage statistics
ms.topic: conceptual
ms.date: 09/29/2020
monikerRange: 'azure-devops'
---

# Historical graphs for agent pools

Historical graphs for agent pools enables you to view jobs running in your agent pools graphed with agent pool job concurrency over a span of up to 30 days. You can use this information to help decide whether your jobs aren't running because of concurrency limits. If you have many jobs queued or running jobs at the concurrency or online agents limit, you may wish to [purchase additional parallel jobs](../licensing/concurrent-jobs.md) or provision more self-hosted agents.

## Pool consumption report

Historical pool usage data is displayed in the **Pool consumption report** which is on the **Analytics** tab for the agent pool. To access agent pool settings, choose **Organization settings**, **Pipelines**, **Agent pools**, or **Project settings**, **Pipeline**, **Agent pools**. Choose the desired pool, and view the **Analytics** tab.

:::image type="content" source="media/historical-graph-pools/historical-graph-self-hosted.png" alt-text="Self-hosted agent pool historical graph":::

This example shows the usage graphs for a self-hosted agent pool.

To adjust the timeline of the graph, choose **Filter** :::image type="icon" source="../../media/icons/filter-icon.png":::, select the interval drop-down, and choose the desired interval.

:::image type="content" source="media/historical-graph-pools/historical-graph-filter.png" alt-text="Graph duration.":::

For self-hosted agent pools you can view the number of online agents, the number of queued jobs, and the number of running jobs for each graphed interval. For the 1 day interval, you can view data per hour, and for the other intervals you can view it per day. Pool data is aggregated at a granularity of 10 minutes, and the number of running jobs is plotted based on the maximum number of running jobs for the specified interval of time. In this example there are two online agents, but in some areas there are four running jobs due to the way the pool data is aggregated.

:::image type="content" source="media/historical-graph-pools/self-hosted-drill-down.png" alt-text="Self-hosted graph drill-down.":::

## Chart types

There are several types of charts that are displayed in the **Pool consumption report** for an agent pool, depending on the agent pool type.

| Chart type | Description | Agent pool type|
|------------|-------------|----------------|
| Public hosted concurrency | Displays concurrency, queued jobs, and running jobs for public projects | Microsoft-hosted |
| Private hosted concurrency | Displays concurrency, queued jobs, and running jobs for private projects | Microsoft-hosted |
| Agent usage | Displays online agents, queued jobs, and running jobs for self-hosted agents | Scale set agent and self-hosted |
| Private self-hosted concurrency | Displays concurrency, queued jobs, and running jobs for private self-hosted projects | Scale set agent and self-hosted |

**Concurrency** refers to the number of parallel jobs in the organization that apply to the project and agent pool type. For more information, see [Configure and pay for parallel jobs](../licensing/concurrent-jobs.md).

**Online agents** refers to the number of agents online in a [self-hosted agent pool](agents.md#self-hosted-agents.md) or a [scale set agent pool](scale-set-agents.md).
## FAQ

### Why are there more running jobs than there are agents or concurrency?

Pool data is aggregated at a granularity of 10 minutes, and the number of running jobs is plotted based on the maximum number of running jobs for the specified interval of time. Each running job is counted separately, and if multiple jobs complete during the 10 minute interval they contribute to the total count of running jobs for that interval.

### What is the difference between viewing the graphs in Project settings vs Organization settings?

The scope of the data in the graph is determined based on whether the chart is accessed through **Project settings** or **Organization settings**. At the organization level, the chart is plotted using data from pipelines across any project within the organization that have run jobs in that pool. At the project level, the chart is plotted using data from pipelines in that particular project that have run jobs in that pool.

