---
title: Historical graph for agent pools
description: View agent pool usage statistics
ms.topic: conceptual
ms.date: 09/29/2020
monikerRange: 'azure-devops'
---

# Historical graph for agent pools

Historical graphs for agent pools enables you to view jobs running in your agent pools graphed with agent pool job concurrency over a span of up to 30 days. You can use this information to help decide whether your jobs aren't running because of concurrency limits.

## View historical graphs

Historical graphs for agents pools is viewed on the **Analytics** tab for the agent pool. To access agent pool settings, choose **Organization settings**, **Pipelines**, **Agent pools**, or **Project settings**, **Pipeline**, **Agent pools**. Choose the desired pool, and view the **Analytics** tab.

:::image type="content" source="media/historical-graph-pools/historical-graph-self-hosted.png" alt-text="Self-hosted agent pool historical graph":::

This example shows the usage graphs for a self-hosted agent pool.

To adjust the timeline of the graph, choose **Filter** :::image type="icon" source="../../media/icons/filter-icon.png":::, select the interval drop-down, and choose the desired interval.

:::image type="content" source="media/historical-graph-pools/historical-graph-filter.png" alt-text="Graph duration.":::

For self-hosted agent pools you can view the number of online agents, the number of queued jobs, and the number of running jobs for each graphed interval. For the 1 day interval, you can view data per hour, and for the other intervals you can view it per day.

:::image type="content" source="media/historical-graph-pools/self-hosted-drill-down.png" alt-text="Self-hosted graph drill-down.":::

