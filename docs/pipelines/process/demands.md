---
title: Demands
ms.custom: seodec18
description: Configure custom demands for your pipeline in Azure Pipelines, Azure DevOps Server, or Team Foundation Server.
ms.topic: conceptual
ms.assetid: 7C469647-117D-4867-B094-8BC811C0003E
ms.author: sdanie
author: steved0x
ms.date: 07/27/2023
monikerRange: '<= azure-devops'
---

# Specify demands

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

Use demands to make sure that the [capabilities](../agents/agents.md#capabilities) your pipeline needs are present on the agents that run it. Demands are asserted automatically by tasks or manually by you.

> [!NOTE]
>
> Demands and capabilities are designed for use with self-hosted agents so that jobs can be matched with an agent that 
> meets the requirements of the job. When using Microsoft-hosted agents, you select an image for the agent that 
> matches the requirements of the job, so although it is possible to add capabilities to a Microsoft-hosted agent, you don't need 
> to use capabilities with Microsoft-hosted agents.

## Task demands

Some tasks won't run unless one or more demands are met by the agent. For example, the [Visual Studio Build](/azure/devops/pipelines/tasks/reference/vsbuild-v1) task demands that ```msbuild``` and ```visualstudio``` are installed on the agent.

## Manually entered agent demands

You might need to use self-hosted agents with special capabilities. For example, your pipeline may require **SpecialSoftware** on agents in the `Default` pool. Or, if you have multiple agents with different operating systems in the same pool, you may have a pipeline that requires a Linux agent.

# [YAML](#tab/yaml)

:::moniker range=">=azure-devops-2019"

To add a single demand to your YAML build pipeline, add the `demands:` line to the `pool` section.
```yaml
pool:
  name: Default
  demands: SpecialSoftware # exists check for SpecialSoftware
```

Or if you need to add multiple demands, add one per line.

```yaml
pool:
  name: MyPool
  demands:
  - myCustomCapability   # exists check for myCustomCapability
  - Agent.Version -equals 2.144.0 # equals check for Agent.Version 2.144.0
```

Checking for the existence of a capability (exists) and checking for a specific string in a capability (equals) are the only two supported operations for demands.

### Exists operation

The exists operation checks for the presence of a capability with the specific name. The comparison is not case sensitive.

```yaml
pool:
  name: MyPool
  demands: myCustomCapability # exists check for myCustomCapability
 ```

### Equals operation

The equals operation checks for the existince of a capability, and if present, checks its value with the specified value. If the capability is not present or the values don't match, the operation evaluates to false. The comparisons are not case sensitive.

```yaml
pool:
  name: MyPool
  demands: Agent.Version -equals 2.144.0 # equals check for Agent.Version 2.144.0
```

### Agent variables as system capabilities

Self-hosted agents have the following system capabilities with similar names to agent variables, but they are not variables and don't require variable syntax when checking for exists or equals in a demand.

* Agent.Name
* Agent.Version
* Agent.ComputerName
* Agent.HomeDirectory
* Agent.OS
* Agent.OSArchitecture
* Agent.OSVerion (Windows agents only)

For more information, see [YAML schema - Demands](/azure/devops/pipelines/yaml-schema/pool).

:::moniker-end

:::moniker range="<azure-devops-2019"

YAML Pipelines are supported in Azure DevOps Server 2019 and higher.

:::moniker-end

# [Classic](#tab/classic)

In the Tasks tab of the pipeline, add the demand to your agent job.

| Name | Condition | Value |
|---|---|---|
| SpecialSoftware | exists | N/A |
| Agent.OS | equals | Linux |

---

Register each agent that has the capability.

1. In your web browser, navigate to Agent pools:

   [!INCLUDE [agent-pools-tab](../agents/includes/agent-pools-tab.md)]

1. Navigate to the capabilities tab for the agent:
 
   [!INCLUDE [agent-capabilities](../agents/includes/agent-capabilities-tab.md)]

1. Add something like the following entry:

| First box | Second box |
|---|---|
| SpecialSoftware | C:\Program Files (x86)\SpecialSoftware |

> [!TIP]
> For classic non-YAML build definitions, when you manually queue a build you can change the demands on that run.

* * *
