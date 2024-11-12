---
title: View agents
description: View the status of agents in the pool.
ms.date: 10/18/2024
---

# View agents

> [!IMPORTANT]
> Managed DevOps Pools is currently in PREVIEW.
> See the [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) for legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability.

You can view the status of the agents in your pool on the **Agents** pane. You can use this information to get a quick overview of how many agents are running jobs and see how many standby agents are online.

## Agents list

Go to your Managed DevOps Pool and choose **Settings** > **Agents** to view the status of the agents in your pool.

:::image type="content" source="media/agents/agents-status.png" lightbox="media/agents/agents-status-expanded.png" alt-text="Screenshot of list of agents and their status.":::

The **Agents** list displays the following columns.

| Name | Description |
|------|-------------|
| **Agent Machine Name** | The name of the agent instance. |
| **Image** | The name of the image. For more information, see [Configure images](configure-images.md). |
| **Image version** | The version of the agent image. For more information, see [Configure images](configure-images.md). |
| **Status** | The current status of the agent. See [Status](#status) for more information about each status type. |

## Status

Agents in the **Agents** list can have the following statuses.

| Status | Description |
|--------|-------------|
| **Ready**  | The agent is online and is ready to accept jobs. You can expect to see this status if you have standby agents configured or stateful pools with a grace period. |
| **NotReady** | A stateful agent job is complete, but the agent not ready to accept a new job. |
| **Allocated** | The agent is running a job. |
| **PendingReimage** | The agent job is complete and the agent is ready to be reimaged. This status is typical if you have you have your pool configured for stateless agents with standby agent mode enabled. |
| **Reimaging** | The agent is being prepared with a fresh image. This status is typical for stateless agents with standby agent mode enabled. |
| **Starting** | The agent is starting up and should be ready to accept jobs when it completes starting. |
| **PendingReturn** | The agent is preparing to be shut down. This status is typical for stateless agents with standby agent mode disabled. |
| **Returned** | The agent is shut down and will be removed from the **Agents** list in a few moments. This status is typical for stateless agents with standby agent mode disabled after they run a job. |

For more information, see [Standby agents](configure-scaling.md#standby-agent-mode) and [Agent state](configure-scaling.md#agent-state).

