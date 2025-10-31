---
title: View agents
description: View the status of agents in Managed DevOps Pools.
ms.date: 11/13/2024
ms.topic: article
---

# View agents

You can view the status of the agents in your pool on the **Agents** pane. You can use this information to find out how many agents are running jobs and to see how many standby agents are online.

## Agents list

To view the status of the agents in your pool, go to your pool and select **Settings** > **Agents**.

:::image type="content" source="media/agents/agents-status.png" lightbox="media/agents/agents-status-expanded.png" alt-text="Screenshot that shows the list of agents and their statuses.":::

The **Agents** list displays the following columns.

| Name | Description |
|------|-------------|
| **Agent Machine Name** | The name of the agent instance. |
| **Image** | The name of the image. For more information, see [Configure images](configure-images.md). |
| **Image version** | The version of the agent image. For more information, see [Configure images](configure-images.md). |
| **Status** | The current status of the agent. For more information about each status type, see [Status](#status). |

## Status

Agents in the **Agents** list can have the following statuses.

| Status | Description |
|--------|-------------|
| **Ready**  | The agent is online and ready to accept jobs. You see this status if you have standby agents configured or stateful pools with a grace period. |
| **NotReady** | A stateful agent job has finished, but the agent isn't ready to accept a new job. |
| **Allocated** | The agent is running a job. |
| **PendingReimage** | The agent job has finished and the agent is ready to be reimaged. This status is typical for stateless agents with **Standby agent mode** enabled. |
| **Reimaging** | The agent is being prepared with a fresh image. This status is typical for stateless agents with **Standby agent mode** enabled. |
| **Starting** | The agent is starting up and should be ready to accept jobs when it finishes starting. |
| **PendingReturn** | The agent is preparing to shut down. This status is typical for stateless agents with **Standby agent mode** disabled. |
| **Returned** | The agent is shut down and is removed from the **Agents** list a few moments later. This status is typical for stateless agents with **Standby agent mode** disabled after they run a job. |

For more information, see [Standby agents](configure-scaling.md#standby-agent-mode) and [Agent state](configure-scaling.md#agent-state).
