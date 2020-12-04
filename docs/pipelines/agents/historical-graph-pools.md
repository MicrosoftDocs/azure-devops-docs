---
title: Historical graphs for agent pools
description: View agent pool usage statistics
ms.topic: conceptual
ms.date: 12/04/2020
monikerRange: 'azure-devops'
---

# Historical graphs for agent pools

Historical graphs for agent pools enables you to view jobs running in your agent pools graphed with agent pool job concurrency over a span of up to 30 days. You can use this information to help decide whether your jobs aren't running because of concurrency limits. If you have many jobs queued or running jobs at the concurrency or online agents limit, you may wish to [purchase additional parallel jobs](../licensing/concurrent-jobs.md) or provision more self-hosted agents.

## Pool consumption report

Historical graphs are displayed in the pool consumption report which is part of the **Analytics** tab for an agent pool. The pool consumption report contains the following charts, depending on the agent pool type.

| Chart type | Description | Agent pool type|
|------------|-------------|----------------|
| Public hosted concurrency | Displays concurrency, queued jobs, and running jobs for public projects | Microsoft-hosted |
| Private hosted concurrency | Displays concurrency, queued jobs, and running jobs for private projects | Microsoft-hosted |
| Agent usage | Displays online agents, queued jobs, and running jobs for self-hosted agents | Scale set agent and self-hosted |
| Private self-hosted concurrency | Displays concurrency, queued jobs, and running jobs for private self-hosted projects | Scale set agent and self-hosted |

The charts in the pool consumption report graph the following data points:

- **Concurrency** - The number of parallel jobs in the organization that apply to the project type (public or private) and agent pool type (Microsoft-hosted or self-hosted). For more information, see [Configure and pay for parallel jobs](../licensing/concurrent-jobs.md).
- **Online agents** - The number of agents online in a [self-hosted agent pool](agents.md#self-hosted-agents.md) or a [scale set agent pool](scale-set-agents.md).
- **Queued jobs** - The number of jobs queued and waiting for an agent.
- **Running jobs** - The number of running jobs.

Pool data is aggregated at a granularity of 10 minutes, and the number of running jobs is plotted based on the maximum number of running jobs for the specified interval of time. Because multiple short-running jobs may complete within the 10 minute timeline, the count of running jobs may sometimes be higher than the concurrency or online agents during that same period.

## Report scope

The pool consumption report can be displayed at organization scope, or project scope. At the organization level, the chart is plotted using data from pipelines across any project within the organization that have run jobs in that pool. At the project level, the chart is plotted using data from pipelines in that particular project that have run jobs in that pool.

- To view the pool consumption report at the organization level, choose **Organization settings**, **Pipelines**, **Agent pools**.
- To view the pool consumption report at the project level, navigate to the desired project and choose **Project settings**, **Pipelines**, **Agent pools**.

From the **Agent pools** view, choose the desired pool, and view the **Analytics** tab. The following example shows the pool consumption report for a self-hosted agent pool.

:::image type="content" source="media/historical-graph-pools/historical-graph-self-hosted.png" alt-text="Self-hosted agent pool historical graph":::

This example shows the usage graphs for the **Azure Pipelines** Microsoft-hosted agent pool.

:::image type="content" source="media/historical-graph-pools/historical-graph-azure-pipelines.png" alt-text="Microsoft-hosted agent pool historical graph":::

## Filtering

To adjust the timeline of the graph, choose **Filter** :::image type="icon" source="../../media/icons/filter-icon.png":::, select the interval drop-down, and choose the desired interval.

:::image type="content" source="media/historical-graph-pools/historical-graph-filter.png" alt-text="Graph duration.":::

For self-hosted agent pools you can view the number of online agents, the number of queued jobs, and the number of running jobs for each graphed interval. For the 1 day interval, you can view data per hour, and for the other intervals you can view it per day. Pool data is aggregated at a granularity of 10 minutes, and the number of running jobs is plotted based on the maximum number of running jobs for the specified interval of time. In this example there are two online agents, but in some areas there are four running jobs due to the way the pool data is aggregated.

:::image type="content" source="media/historical-graph-pools/self-hosted-drill-down.png" alt-text="Self-hosted graph drill-down.":::


## FAQ

### Where does the pool consumption report get the data it displays?

The pool consumption report uses the [Azure DevOps Analytics service](../../report/powerbi/what-is-analytics.md) and the `TaskAgentRequestSnapshots` endpoint. You can query this endpoint using the following URL prefix: `https://analytics.dev.azure.com/{org}/{project_id}/_odata/v4.0-preview/TaskAgentRequestSnapshots`. For more information on query options, see [Query guidelines for Analytics with OData](../../report/extend-analytics/odata-query-guidelines.md).

> [!NOTE]
> The `TaskAgentRequestSnapshots` endpoint is new and not yet documented but you can view information about the data returned by navigating to the endpoint URL: `https://analytics.dev.azure.com/{org}/{project_id}/_odata/v4.0-preview/TaskAgentRequestSnapshots`.

### Why are there more running jobs than there are agents or concurrency?

Pool data is aggregated at a granularity of 10 minutes, and the number of running jobs is plotted based on the maximum number of running jobs for the specified interval of time. Each running job is counted separately, and if multiple jobs complete during the 10 minute interval they contribute to the total count of running jobs for that interval.

### What is the difference between viewing the graphs in Project settings vs Organization settings?

The scope of the data in the graph is determined based on whether the chart is accessed through **Project settings** or **Organization settings**. At the organization level, the chart is plotted using data from pipelines across any project within the organization that have run jobs in that pool. At the project level, the chart is plotted using data from pipelines in that particular project that have run jobs in that pool.

