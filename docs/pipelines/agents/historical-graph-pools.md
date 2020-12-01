---
title: Historical graphs for agent pools
description: View agent pool usage statistics
ms.topic: conceptual
ms.date: 09/29/2020
monikerRange: 'azure-devops'
---

# Historical graphs for agent pools

Historical graphs for agent pools enables you to view jobs running in your agent pools graphed with agent pool job concurrency over a span of up to 30 days. You can use this information to help decide whether your jobs aren't running because of concurrency limits.

## Pool consumption report

Historical graphs for agents pools is displayed in the **Pool consumption report** which is on the **Analytics** tab for the agent pool. To access agent pool settings, choose **Organization settings**, **Pipelines**, **Agent pools**, or **Project settings**, **Pipeline**, **Agent pools**. Choose the desired pool, and view the **Analytics** tab.

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
| Public hosted concurrency | Displays concurrency, queued jobs, and running jobs | Microsoft-hosted |
| Private hosted concurrency | Displays concurrency, queued jobs, and running jobs | Microsoft-hosted |
| Agent usage | Displays online agents, queued jobs, and running jobs | Scale set agent and self-hosted |
| Private self-hosted concurrency | Displays concurrency, queued jobs, and running jobs | Scale set agent and self-hosted |

## FAQ

### Why are there more running jobs than there are agents or concurrency?

Pool data is aggregated at a granularity of 10 minutes, and the number of running jobs is plotted based on the maximum number of running jobs for the specified interval of time. Each running job is counted separately, and if multiple jobs complete during the 10 minute interval they contribute to the total count of running jibs for that interval.

### What is the difference between viewing the graphs in Project settings vs Organization settings?

The graphs are the same, but when you access agent pools through Project settings you only see the pools that have run jobs from pipelines in your project.