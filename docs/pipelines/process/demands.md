---
title: Demands
ms.custom: seodec18
description: Configure custom demands for your pipeline in Azure Pipelines, Azure DevOps Server, or Team Foundation Server.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 7C469647-117D-4867-B094-8BC811C0003E
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 07/30/2019
monikerRange: '>= tfs-2015'
---

# Demands

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

Use demands to make sure that the capabilities your pipeline needs are present on the agents that run it. Demands are asserted automatically by tasks or manually by you.

> [!NOTE]
> Demands are only applicable when your pipeline runs on self-hosted agents.

## Task demands

Some tasks won't run unless one or more demands are met by the agent. For example, the [Visual Studio Build](../tasks/build/visual-studio-build.md) task demands that ```msbuild``` and ```visualstudio``` are installed on the agent.

## Manually entered demands

You might need to use self-hosted agents with special capabilities. For example, your pipeline requires **SpecialSoftware** on agents in the `Default` pool.

# [YAML](#tab/yaml)

```yaml
pool:
  name: Default
  demands: SpecialSoftware
```

# [Classic](#tab/classic)

In the options tab of the pipeline, add the demand to your pipeline.

| Name | Type |
|---|---|
| SpecialSoftware | exists |

---

Register each agent that has the capability.

1. In your web browser, navigate to Agent pools:

   [!INCLUDE [agent-pools-tab](../agents/_shared/agent-pools-tab.md)]

1. Navigate to the capabilities tab for the agent:
 
   [!INCLUDE [agent-capabilities](../agents/_shared/agent-capabilities-tab.md)]

1. Add something like the following entry:

| First box | Second box |
|---|---|
| SpecialSoftware | C:\Program Files (x86)\SpecialSoftware |

> [!TIP]
> When you manually queue a build you can change the demands for that run.
