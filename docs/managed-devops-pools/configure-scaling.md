---
title: Configure scaling
description: Learn the different performance options for Managed DevOps Pools and their impact on agent performance.
ms.date: 05/16/2025
---

# Configure scaling

Configure scaling settings to manage the performance and cost of your Managed DevOps Pool. For information on pricing and performance, see [Manage cost and performance](manage-costs.md).

## Agent state

Managed DevOps Pools can be configured as stateless or stateful.

* [Stateless pools](#stateless-pools) - Provide a fresh agent for every job.
* [Stateful pools](#stateful-pools) - Allow sharing of agents between multiple jobs.

The default setting for a Managed DevOps pool is stateless (**Fresh agent every time**) but in some cases teams might want to reuse agents in order to reuse the packages or files created during the previous pipeline run. Build workload is a common scenario where teams want to preserve state and reuse agents. You can achieve stateful pools through Managed DevOps Pools while balancing it with security best practices. By default an agent can be reused for a maximum of 7 days but you can configure it to be recycled sooner.

> [!NOTE]
> Stateless pools or use of the agent state setting **Fresh agent every time** are recommended by security experts as a defense against supply chain attacks.

### Stateless pools

When a stateless agent is configured, a new agent is procured for each job, and is discarded after the job completes.

For the lifecycle of stateless agents and an explanation on how they are used in Azure DevOps pipelines (including potential delays in allocation), see the following [Lifecycle of agents and potential delays in allocation](#lifecycle-of-agents-and-potential-delays-in-allocation) section.

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="media/agent-performance/stateless-agent.png" alt-text="Screenshot of a stateless agent.":::


#### [ARM template](#tab/arm/)

Agents are configured using the `agentProfile` property in the Managed DevOps Pools resource. In the following example, a **Stateless** agent is specified.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-10-19",
            "location": "eastus",
            "properties": {
                ...
                "agentProfile": {
                    "kind": "Stateless"
                }
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

Agents are configured using the `agent-profile` parameter when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

In the following example, a **Stateless** agent is specified with no standby agents.

```azurecli
az mdp pool create \
   --agent-profile agent-profile.json
   # other parameters omitted for space
```

The following example shows the contents of the **agent-profile.json** file.

```json
{
    "Stateless": {}
}
```

* * *

When **Agent state** is set to **Fresh agent every time**, a new agent is procured for each job, and is discarded after the job completes.

### Stateful pools

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="media/agent-performance/stateful-agent.png" alt-text="Screenshot of a stateful agent.":::


#### [ARM template](#tab/arm/)

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-10-19",
            "location": "eastus",
            "properties": {
                ...
                "agentProfile": {
                    "maxAgentLifetime": "7.00:00:00",
                    "gracePeriodTimeSpan": "00:30:00",
                    "kind": "Stateful"
                }
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

Agents are configured using the `agent-profile` parameter when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

In the following example, a **Stateful** agent is specified with a seven day maximum lifetime and a thirty minute grace period.

```azurecli
az mdp pool create \
   --agent-profile agent-profile.json
   # other parameters omitted for space
```

The following example shows the contents of the **agent-profile.json** file.

```json
{
    "Stateful": 
    {
        "maxAgentLifetime": "7.00:00:00",
        "gracePeriodTimeSpan": "00:30:00"
    }
}
```

* * *

When **Same agent can be used by multiple builds** (`"kind": "stateful"` in resources templates or `{ "stateful": {...} }` in Azure CLI) is enabled, agents in the pool are considered to be stateful. Stateful pools are configured using the following settings.

* **Max time to live for standby agents** (`maxAgentLifetime`) configures the maximum duration an agent in a stateful pool can run before it is shut down and discarded. The format for **Max time to live for standby agents** is `dd.hh:mm:ss`. The default value of **Max time to live for standby agents** is set to the maximum allowed duration of seven days (`7.00:00:00`).

* **Grace Period** (`gracePeriodTimeSpan`) configures the amount of time an agent in a stateful pool waits for new jobs before shutting down after all current and queued jobs are complete. The format for **Grace Period** is `dd.hh:mm:ss` and the default is no grace period.

While agents in stateless pools are shut down and discarded after every job, agents in stateful pools continue running if any of the following conditions are met.

* If there is another job queued when the first job completes, Managed DevOps Pools sends that job to the agent that ran the first job instead of shutting it down.
* If there is a grace period configured for the pool, agents wait for new jobs for the duration specified by the grace period before shutting down.
* If [standby agents are enabled](#standby-agent-mode), and the agent image meets the criteria of the active provisioning period, the agent continues to run and wait for jobs.

Running agents in stateful pools are shut down and discarded if they run continuously for the duration specified by **Max time to live for standby agents**, even if the previous conditions are true. For example, if **Max time to live for standby agents** is configured for three days, and **Standby agent mode** is set to **Manual, All Week Scheme (Machines available 24/7)**, the agents are restarted after three continuous days of uptime.

> [!IMPORTANT]
> Agents in stateful pools can still be shut down and discarded after a job completes if there is no grace period, no active provisioning period for standby agents, and no queued jobs matching the agent. Once an agent is discarded, any state is lost.

Grace period enables the most cost effective way of running stateful pools for pipelines with consistent load and does not require the use of standby agent mode to keep agents online and ready to accept jobs.

## Standby agent mode

When you create a pool, **Standby agent mode** is off by default, and there are no standby agents to immediately assign to your pipelines, which might have to wait a few moments, up to 15 minutes, for an agent to be provisioned on demand. For better performance, enable **Standby agent mode** and configure a standby agent schedule that provides capacity for your workload. 

When a standby agent schedule is configured, Managed DevOps Pools periodically compares the count of provisioned agents with the standby agent count specified by the current provisioning scheme, and starts new agents as required to maintain the standby agent count. You can view the current status and count of the agents in your pool using the [Agents](./view-agents.md) pane.

> [!IMPORTANT]
> The provisioning count in a scheme can't be greater than the **Maximum agents** configured in [Pool settings](configure-pool-settings.md#maximum-agents).

Standby agent mode is configured using the following settings:

* **Off** - Standby agent mode is off and agents are provisioned on-demand when jobs are queued.
* [Manual](#manual) - Configure a manual standby schedule.
* [Automatic](#automatic) - Use an automatic standby schedule based on agent usage history and configurable for cost and performance.

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="media/agent-performance/standby-agent-mode.png" alt-text="Screenshot of standby agent mode selection.":::

#### [ARM template](#tab/arm/)

Standby agents are configured using the `resourcePredictionsProfile` section of the `agentProfile` property. Set `"kind": "Manual"` to configure a start from scratch, weekday scheme, or all week scheme, and specify the details of the scheme in the `resourcePredictions` section. Set `"kind": "Automatic"` to configure automatic standby agents. Omit the `ResourcePredictionsProfile` section to disable standby agents. See the following sections for details on how to configure each scaling type.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-10-19",
            "location": "eastus",
            "properties": {
                ...
                "agentProfile": {
                    "kind": "Stateless",
                    "resourcePredictionsProfile": {
                        "kind": "Manual"
                    },
                    "resourcePredictions": {...}
                }
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

Agents are configured using the `agent-profile` parameter when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

Standby agents are configured using the `resourcePredictionsProfile` section of the `agent-profile` parameter. Set `"Manual": {}` to configure a start from scratch, weekday scheme, or all week scheme, and specify the details of the scheme in the `resourcePredictions` section. Set `"Automatic": {}` to configure automatic standby agents. See the following sections for details on how to configure each scaling type.

```azurecli
az mdp pool create \
   --agent-profile agent-profile.json
   # other parameters omitted for space
```

The following example shows the contents of the **agent-profile.json** file.

```json
{
    "Stateless": {},
    "resourcePredictionsProfile": {
        "Manual": {}
    },
    "resourcePredictions": {...}
}
```

* * *

## Manual

Manual mode is best suited for teams that have knowledge of their CI/CD pipelines usage patterns. If you select the manual option, you need to define your pre-provisioning scheme based on your understanding of when agents in the pool are most likely to get used and how many agents are likely to be used, and specify a provisioning count of agents that meet the projected demand.

You can create your own provisioning schedule or choose from one of the predefined schedules, and you can configure the time zone to use for specifying the schedules. The default value for **Pre-provisioning TimeZone** is **(UTC) Coordinated Universal Time**.

Manual standby agent configuration can be configured in one of the following three ways.

* [Start from scratch](#start-from-scratch) - Configure a set of provisioning periods for standby agents
* [Weekday Scheme (Machines available during time period every weekday)](#weekday-scheme) - Configure a start and end time for standby agents to be available each weekday
* [All Week Scheme (Machines available 24/7)](#all-week-scheme) - Configure a fixed number of standby agents to be continuously available

Each of the pre-provisioning quick starts has the following common settings in addition to the specific settings for that quick start.

* **Pre-provisioning TimeZone** allows you to configure the time zone for the times in your pre-provisioning scheme. The default value for **Pre-provisioning TimeZone** is **(UTC) Coordinated Universal Time**.
* **Standby agent percentage** configures the percentage of standby agents you want for each image. You can enter `*` to ensure all images are provisioned equally, or you can specify an integer from 0 to 100 to represent a percentage. If you specify a percentage, the total for all images must equal 100. If you have a single image, specify `*` or 100. **Standby agent percentage** is configured in the `images` section when using ARM templates. For more information, see [Configure images](./configure-images.md).

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="media/agent-performance/manual-standby-mode.png" alt-text="Screenshot of manual standby mode.":::

#### [ARM template](#tab/arm/)

Manual standby agent provisioning is specified in the `resourcePredictionsProfile` section of `agentProfile`, and the details are configured in the `resourcePredictions` section.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-10-19",
            "location": "eastus",
            "properties": {
                ...
                "agentProfile": {
                    "kind": "Stateless",
                    "resourcePredictionsProfile": {
                        "kind": "Manual"
                    },
                    "resourcePredictions": {
                        "timeZone": "Eastern Standard Time",
                        "daysData": [
                            {},
                            {
                                "00:00:00": 1,
                                "04:00:00": 0
                            },
                            {},
                            {},
                            {},
                            {},
                            {}
                        ]
                    }
                }
            }
        }
    ]
}
```

Specify the desired time zone for your scheme using the `timeZone` property. The default is `UTC`. To retrieve a list of time zone names for this property, see [TimeZoneInfo.GetSystemTimeZones Method](/dotnet/api/system.timezoneinfo.getsystemtimezones).

The schedule for the standby agents is defined by the `daysData` list. The `daysData` list can have either one item or seven items.

A `daysData` list with seven items maps to the days of the week, starting with Sunday. Each of these seven items can have zero or more `"time": count` entries, specifying a time in 24 hour format, and a standby agent count. The specified count of standby agents is maintained until the next `"time": count` entry, which can be on the same day, or on a following day.

A `daysData` list with a single item defines an [All Week scheme](#all-week-scheme), where the single `"time": count` entry corresponds to the standby agent count for the entire week.

The following example is a manual standby agent scheme, using `Eastern Standard Time`, with a single agent provisioned Monday through Friday, from 9:00 AM (standby agent count `1`) through 5:00 PM (standby agent count `0`).

```json
{
    "kind": "Stateless",
    "resourcePredictions": {
        "timeZone": "Eastern Standard Time",
        "daysData": [
            {},
            {
                "09:00:00": 1,
                "17:00:00": 0
            },
            {
                "09:00:00": 1,
                "17:00:00": 0
            },
            {
                "09:00:00": 1,
                "17:00:00": 0
            },
            {
                "09:00:00": 1,
                "17:00:00": 0
            },
            {
                "09:00:00": 1,
                "17:00:00": 0
            },
            {}
        ]
    },
    "resourcePredictionsProfile": {
        "kind": "Manual"
    }
}
```

A single `daysData` item contains a dictionary of times and standby agent counts. Each `"time" : count` entry specifies the number of standby agents to schedule starting at the specified time, in 24 hour format. Consecutive `"time" : count` entries specify a sequence of scheduled agent counts for that day.

```json
"daysData": [
    {}, # Schedule of standby agent count adjustments for Sunday
    {   # Schedule of standby agent count adjustments for Monday
        "09:00:00": 1, # Adjust standby agent count to 1
        "17:00:00": 0  # Adjust standby agent count to 0
    },
    {  # Schedule of standby agent count adjustments for Tuesday
        "09:00:00": 1,
        "17:00:00": 0
    },
    {  # Schedule of standby agent count adjustments for Wednesday
        "09:00:00": 1,
        "17:00:00": 0
    },
    {  # Schedule of standby agent count adjustments for Thursday
        "09:00:00": 1,
        "17:00:00": 0
    },
    {  # Schedule of standby agent count adjustments for Friday
        "09:00:00": 1,
        "17:00:00": 0
    },
    {} # Schedule of standby agent count adjustments for Saturday
]
```

Standby agent counts do not automatically reset back to zero at the end of a day or at the end of the week, and specifying an empty `daysData` item does not disable standby agents for that day. An empty `daysData` item means that there are no changes to the standby agent count schedule for that day. To set the standby agent to zero starting at a specific time period, you must explicitly provide a `"time" : count` entry with a `count` of `0`.

#### Examples

To make no adjustment to the standby agent count specified at the conclusion of the previous day (or week if you are configuring the first period of the week), specify a `daysData` item with zero entries.

```json
{
}
```

To schedule a single standby agent to start at `09:00:00` and stop at `17:00:00` (using the time zone specified by the `resourcePredictions` property), specify the following configuration.

```json
{
    "09:00:00": 1,
    "17:00:00": 0
}
```

To schedule a single standby agent starting from midnight through `09:00:00`, followed by 10 standby agents until `17:00:00`, specify the following configuration.

```json
{
    "00:00:00": 1,
    "09:00:00": 10,
    "17:00:00": 0
}
```

To schedule a standby agent to be available starting at `09:00:00` on the specified day, and stopping at `17:00:00` the following day, use two consecutive `daysData` items.

```json
{
    "09:00:00": `1`
},
{
    "17:00:00": 0
}
```

#### [Azure CLI](#tab/azure-cli/)

Agents are configured using the `agent-profile` parameter when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

```azurecli
az mdp pool create \
   --agent-profile agent-profile.json
   # other parameters omitted for space
```

The following example shows the contents of the **agent-profile.json** file.

Manual standby agent provisioning is specified in the `resourcePredictionsProfile` section of the `agent-profile` parameter, and the details are configured in the `resourcePredictions` section.

```json
{
    "Stateless": {},
    "resourcePredictionsProfile": {
        "Manual": {}
    },
    "resourcePredictions": {
        "timeZone": "Eastern Standard Time",
        "daysData": [
            {},
            {
                "00:00:00": 1,
                "04:00:00": 0
            },
            {},
            {},
            {},
            {},
            {}
        ]
    }
}
```

Specify the desired time zone for your scheme using the `timeZone` property. The default is `UTC`. To retrieve a list of time zone names for this property, see [TimeZoneInfo.GetSystemTimeZones Method](/dotnet/api/system.timezoneinfo.getsystemtimezones).

The schedule for the standby agents is defined by the `daysData` list. The `daysData` list can have either one item or seven items.

A `daysData` list with seven items maps to the days of the week, starting with Sunday. Each of these seven items can have zero or more `"time": count` entries, specifying a time in 24 hour format, and a standby agent count. The specified count of standby agents is maintained until the next `"time": count` entry, which can be on the same day, or on a following day.

A `daysData` list with a single item defines an [All Week scheme](#all-week-scheme), where the single `"time": count` entry corresponds to the standby agent count for the entire week.

The following example is a manual standby agent scheme, using `Eastern Standard Time`, with a single agent provisioned Monday through Friday, from 9:00 AM (standby agent count `1`) through 5:00 PM (standby agent count `0`).

```json
{
    "Stateless": {},
    "resourcePredictionsProfile": {
        "Manual": {}
    },
    "resourcePredictions": {
        "timeZone": "Eastern Standard Time",
        "daysData": [
            {},
            {
                "09:00:00": 1,
                "17:00:00": 0
            },
            {
                "09:00:00": 1,
                "17:00:00": 0
            },
            {
                "09:00:00": 1,
                "17:00:00": 0
            },
            {
                "09:00:00": 1,
                "17:00:00": 0
            },
            {
                "09:00:00": 1,
                "17:00:00": 0
            },
            {}
        ]
    }
}
```

A single `daysData` item contains a dictionary of times and standby agent counts. Each `"time" : count` entry specifies the number of standby agents to schedule starting at the specified time, in 24 hour format. Consecutive `"time" : count` entries specify a sequence of scheduled agent counts for that day.

```json
"daysData": [
    {}, # Schedule of standby agent count adjustments for Sunday
    {   # Schedule of standby agent count adjustments for Monday
        "09:00:00": 1, # Adjust standby agent count to 1
        "17:00:00": 0  # Adjust standby agent count to 0
    },
    {  # Schedule of standby agent count adjustments for Tuesday
        "09:00:00": 1,
        "17:00:00": 0
    },
    {  # Schedule of standby agent count adjustments for Wednesday
        "09:00:00": 1,
        "17:00:00": 0
    },
    {  # Schedule of standby agent count adjustments for Thursday
        "09:00:00": 1,
        "17:00:00": 0
    },
    {  # Schedule of standby agent count adjustments for Friday
        "09:00:00": 1,
        "17:00:00": 0
    },
    {} # Schedule of standby agent count adjustments for Saturday
]
```

Standby agent counts do not automatically reset back to zero at the end of a day or at the end of the week, and specifying an empty `daysData` item does not disable standby agents for that day. An empty `daysData` item means that there are no changes to the standby agent count schedule for that day. To set the standby agent to zero starting at a specific time period, you must explicitly provide a `"time" : count` entry with a `count` of `0`.

#### Examples

To make no adjustment to the standby agent count specified at the conclusion of the previous day (or week if you are configuring the first period of the week), specify a `daysData` item with zero entries.

```json
{
}
```

To schedule a single standby agent to start at `09:00:00` and stop at `17:00:00` (using the time zone specified by the `resourcePredictions` property), specify the following configuration.

```json
{
    "09:00:00": 1,
    "17:00:00": 0
}
```

To schedule a single standby agent starting from midnight through `09:00:00`, followed by 10 standby agents until `17:00:00`, specify the following configuration.

```json
{
    "00:00:00": 1,
    "09:00:00": 10,
    "17:00:00": 0
}
```

To schedule a standby agent to be available starting at `09:00:00` on the specified day, and stopping at `17:00:00` the following day, use two consecutive `daysData` items.

```json
{
    "09:00:00": `1`
},
{
    "17:00:00": 0
}
```

* * *

### Start From scratch

If you choose to start from scratch, you can add a list of provisioning periods to serve as your provisioning scheme. Each provisioning period consists of a start day, end day, time zone, start time, end time, and a count. Provisioning periods can't overlap each other.

| Property | Description |
|----------|-------------|
| Multi-day | When checked, you can configure both a Start Day and an End Day for your provisioning scheme. |
| Until next period | When checked, the provisioning period runs from the Start Time until the start of the next provisioning period. |
| Start Day | The day that the provisioning period starts. |
| End Day | The day the provisioning period ends. Required if Multi-Day is checked. |
| Start Time | The time the provisioning period starts. |
| End Time | The time the provisioning period ends. Required unless **Until next period** is checked. |
| Count | The number of standby agents to provision. This number must be greater than zero, and must not be greater than the **Maximum agents** value configured in Pool settings. |

After creating a provisioning period, you can delete or edit the period from the **Pre-provisioning scheme** list.

The following example configures a manual scheme with 1 agent provisioned on Monday mornings from 12:00 AM to 5:00 AM EST.

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="media/agent-performance/manual-scaling-scheme.png" alt-text="Screenshot of manual scaling scheme.":::

#### [ARM template](#tab/arm/)

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-10-19",
            "location": "eastus",
            "properties": {
                ...
                "agentProfile": {
                    "kind": "Stateless",
                    "resourcePredictionsProfile": {
                        "kind": "Manual"
                    },
                    "resourcePredictions": {
                        "timeZone": "Eastern Standard Time",
                        "daysData": [
                            {},
                            {
                                "00:00:00": 1,
                                "04:00:00": 0
                            },
                            {},
                            {},
                            {},
                            {},
                            {}
                        ]
                    }
                }
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

```json
{
    "Stateless": {},
    "resourcePredictionsProfile": {
        "Manual": {}
    },
    "resourcePredictions": {
        "timeZone": "Eastern Standard Time",
        "daysData": [
            {},
            {
                "00:00:00": 1,
                "04:00:00": 0
            },
            {},
            {},
            {},
            {},
            {}
        ]
    }
}
```

* * *

### Weekday scheme

If you choose the weekday scheme, you can specify a start time and end time in which the specified number of standby agents will be on standby each weekday. 

| Property | Description |
|----------|-------------|
| Start Time | The time the provisioning period starts. |
| End Time | The time the provisioning period ends. |
| Provisioning Count | The number of standby agents to provision. This number must be greater than zero, and must not be greater than the **Maximum agents** value configured in Pool settings. |

The following example configures four agents to be used during working hours with 0 agents during non-working hours and weekends, using Eastern Standard Time.

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="media/agent-performance/manual-scaling-weekday-scheme.png" alt-text="Screenshot of weekday scheme.":::

#### [ARM template](#tab/arm/)

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-10-19",
            "location": "eastus",
            "properties": {
                ...
                "agentProfile": {
                    "kind": "Stateless",
                    "resourcePredictionsProfile": {
                        "kind": "Manual"
                    },
                    "resourcePredictions": {
                        "timeZone": "Eastern Standard Time",
                        "daysData": [
                            {},
                            {
                                "09:00:00": 4,
                                "17:00:00": 0
                            },
                            {
                                "09:00:00": 4,
                                "17:00:00": 0
                            },
                            {
                                "09:00:00": 4,
                                "17:00:00": 0
                            },
                            {
                                "09:00:00": 4,
                                "17:00:00": 0
                            },
                            {
                                "09:00:00": 4,
                                "17:00:00": 0
                            },
                            {}
                        ]
                    }
                }
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

```json
{
    "Stateless": {},
    "resourcePredictionsProfile": {
        "Manual": {}
    },
    "resourcePredictions": {
        "timeZone": "Eastern Standard Time",
        "daysData": [
            {},
            {
                "09:00:00": 4,
                "17:00:00": 0
            },
            {
                "09:00:00": 4,
                "17:00:00": 0
            },
            {
                "09:00:00": 4,
                "17:00:00": 0
            },
            {
                "09:00:00": 4,
                "17:00:00": 0
            },
            {
                "09:00:00": 4,
                "17:00:00": 0
            },
            {}
        ]
    }
}
```

* * *

### All Week Scheme

If you choose the all week scheme, you can specify a number of agents you want available 24/7.

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="media/agent-performance/manual-scaling-all-week-scheme.png" alt-text="Screenshot of all week scheme.":::

#### [ARM template](#tab/arm/)

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-10-19",
            "location": "eastus",
            "properties": {
                ...
                "agentProfile": {
                    "kind": "Stateless",
                    "resourcePredictionsProfile": {
                        "kind": "Manual"
                    },
                    "resourcePredictions": {
                        "timeZone": "Eastern Standard Time",
                        "daysData": [
                            {
                                "00:00:00": 1
                            }
                        ]
                    }
                }
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

```json
{
    "Stateless": {},
    "resourcePredictionsProfile": {
        "Manual": {}
    },
    "resourcePredictions": {
        "timeZone": "Eastern Standard Time",
        "daysData": [
            {
                "00:00:00": 1
            }
        ]
    }
}
```

* * *

## Automatic

If you don't know your usage patterns and want to rely on automatic forecasting based on past data, choose **Automatic**. You can balance between cost and agent performance using a slider with the following five options. Managed DevOps Pools runs a query over your past three weeks of historical data (if available), organizing queued sessions of the pool into five minute periods, and assigns the specified percentile (to avoid spikes) to each hour.

* **Most cost effective** (`MostCostEffective`) - 10th percentile
* **More cost effective** (`MoreCostEffective`) - 25th percentile
* **Balanced** (default) (`Balanced`) - 50th percentile
* **More performance** (`MorePerformance`) - 75th percentile
* **Best performance** (`BestPerformance`) - 90th percentile

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="media/agent-performance/automatic-scaling-setting.png" alt-text="Screenshot of automatic scaling setting.":::

#### [ARM template](#tab/arm/)

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-10-19",
            "location": "eastus",
            "properties": {
                ...
                "agentProfile": {
                    "kind": "Stateless",
                    "resourcePredictionsProfile": {
                        "predictionPreference": "Balanced",
                        "kind": "Automatic"
                    }
                }
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

```json
{
    "Stateless": {},
    "resourcePredictionsProfile": {
        "Automatic": {
            "predictionPreference": "Balanced"
        }
    }
}
```

* * *

## Lifecycle of agents and potential delays in allocation

When using a Stateless scheme, ready agents require the Azure DevOps Task Agent to both be installed and set up in order to run an Azure DevOps pipeline. When provisioning new agents, Managed DevOps Pools attempts to download the latest [Azure DevOps agent](https://github.com/microsoft/azure-pipelines-agent/releases) in order to have it already downloaded on buffered agents. Startup, connection, and beginning the job can take anywhere from 10 seconds to a minute depending on the pool's SKU speed, image used, and networking load. Additionally, certain settings in a pipeline job can cause a redownload and running of a different agent, and regressions and rollbacks of the agent can also cause a redownload of the agent. Ready agents will always have a potential delay, as Managed DevOps Pools uses this agent in an "ephemeral" manner, meaning we startup and run the task agent one time per job.

If you are seeing delays in ready agents picking up jobs from Azure DevOps, the following are important to consider:

* Do you have ready agents? - The most common issue is a misunderstanding of when agents should be preprovisioned. When the amount of jobs queued is greater than the buffer on a pool, or jobs are queued when the buffer is set to be empty, then machines must be spun up from scratch.
* Are you using the buffer with multiple images properly? - If you are not specifying which image to use in your pipeline using the ImageOverride demand, jobs will be targeting the first image. This means, depending on your Scaling settings, you might not have as many agents available as you'd expect as some are allocated to other images.
* Are Proxy/VNet/Firewall settings slowing down your pool? - Potential slowness from any network setting will result in agents taking longer to start the agent and connect it to Azure DevOps.
* Are you overriding the agent version? - By default, Managed DevOps pools will run on the most recent Azure DevOps task agent version. Settings in the Pipeline yaml (such as the "Agent.Version" demand) and Azure DevOps org can force pipelines to use older versions of the task agent, requiring a redownload once a machine has been allocated.

## See also

* [Configure pool settings](./configure-pool-settings.md)
* [Manage cost and performance](./manage-costs.md)
