---
title: Workflow using multiple phases in Build and Release Management
description: Understand how to configure a workflow using phases in Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.assetid: 497316D5-F657-4FFF-9F31-6DBEE9408D99
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 07/09/2018
monikerRange: '>= tfs-2017'
---

# Multiple phases

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

You can add multiple [phases](phases.md) to a pipeline. By using different phases in a pipeline, you can:

::: moniker range="vsts"

* Partition your process into sections targeting different agent queues
* Partition your process into sections targeting different sets of self-hosted agents using different demands
* Partition your process into sections that run on agents and those that run without an agent
* Publish build artifacts in one phase and consume those in subsequent phases
* Pause the deployment in the middle using a manual intervention task
* Reduce build time by running multiple phases in parallel
* Reduce deployment time by selectively downloading different artifacts in different phases of a deployment process
* [Conditionally execute](conditions.md) a set of tasks

::: moniker-end

::: moniker range="tfs-2018"

* Partition your process into sections targeting different agent queues
* Partition your process into sections targeting different sets of self-hosted agents using different demands
* Partition your process into sections that run on agents and those that run without an agent
* Publish build artifacts in one phase and consume those in subsequent phases
* Pause the deployment in the middle using a manual intervention task
* Reduce deployment time by selectively downloading different artifacts in different phases of a deployment process
* [Conditionally execute](conditions.md) a set of tasks

::: moniker-end

::: moniker range="tfs-2017"

* Partition your process into sections targeting different agent queues
* Partition your process into sections targeting different sets of self-hosted agents using different demands
* Partition your process into sections that run on agents and those that run without an agent
* Pause the deployment in the middle using a manual intervention task

> [!NOTE]
> Phases are not supported in build pipelines in TFS 2017.

::: moniker-end

> [!NOTE]
> Each agent can run only one job at a time. To run multiple jobs in parallel you must configure multiple agents. You also need sufficient [concurrent jobs](../licensing/concurrent-jobs-vsts.md).

# [Web](#tab/web)

To add a new phase, select '...' on the process channel in **Tasks** tab of the pipeline. The conditions and order of execution for a phase are displayed when you select the  phase in the editor.

# [YAML](#tab/yaml)

The syntax for defining multiple phases and their dependencies is:

```yaml
phases:
- phase: string
  dependsOn: string
  condition: string
```

---

## Dependencies

# [Web](#tab/web)

::: moniker range="vsts"
When you specify multiple phases in a build pipeline, they run in parallel by default. You can specify the order in which phases must execute by configuring dependencies between phases. Phase dependencies are not yet supported in release pipelines. Multiple phases in a release pipeline run in sequence.
::: moniker-end

::: moniker range="tfs-2018"
Multiple phases you add to a build or a release pipeline run in sequence. You cannot configure the order of dependencies between phases in this version of TFS.
::: moniker-end

::: moniker range="< tfs-2018"
Multiple phases you add to a release pipeline run in sequence. You cannot configure the order of dependencies between phases in this version of TFS. You cannot also use phases with build pipelines.
::: moniker-end

For example, the pipeline shown below divides the overall release
execution into separate execution phases by using two agent phases
and a [server phase](server-phases.md).

![Configuring a manual intervention step](_img/phases-02.png)

In the example above:

1. The tasks in the first phase of the release run on an agent
   and, after this phase is complete, the agent is released.

1. The server phase contains a Manual Intervention task
   that runs on the VSTS or TFS.
   It does not execute on, or require, an agent or any target servers.
   The Manual Intervention task displays its message and waits for a
   "resume" or "reject" response from the user. In this example, if
   the configured timeout is reached, the task will
   automatically reject the deployment (set the timeout in the control options section to zero if
   you do not want an automated response to be generated).   

1. If the release is resumed, tasks in the third phase run -
   possibly on a different agent. If the release is rejected,
   this phase does not run and the release is marked as failed.

It's important to understand some of the consequences of
phased execution:

* Each phase may use different
  agents. You should not assume that the state from an earlier
  phase is available during subsequent phases.

* The **Continue on Error** and **Always run** options for
  tasks in each phase do not have any effect on tasks in
  subsequent phases. For example, setting
  **Always run** on a task at the end of the first phase will
  not guarantee that tasks in subsequent phases will run.

# [YAML](#tab/yaml)

::: moniker range="vsts"

Example phases that build sequentially:

```yaml
phases:
- phase: Debug
  steps:
  - script: echo hello from the Debug build
- phase: Release
  dependsOn: Debug
  steps:
  - script: echo hello from the Release build
```

Example phases that build in parallel (no dependencies):

```yaml
phases:
- phase: Windows
  queue:
    demands: agent.os -equals Windows_NT
  steps:
  - script: echo hello from Windows
- phase: macOS
  queue:
    demands: agent.os -equals Darwin
  steps:
  - script: echo hello from macOS
- phase: Linux
  queue:
    demands: agent.os -equals Linux
  steps:
  - script: echo hello from Linux
```

Example of fan out:
```yaml
phases:
- phase: InitialPhase
  steps:
  - script: echo hello from initial phase
- phase: SubsequentA
  dependsOn: InitialPhase
  steps:
  - script: echo hello from subsequent A
- phase: SubsequentB
  dependsOn: InitialPhase
  steps:
  - script: echo hello from subsequent B
```

Example of fan in:
```yaml
phases:
- phase: InitialA
  steps:
  - script: echo hello from initial A
- phase: InitialB
  steps:
  - script: echo hello from initial B
- phase: Subsequent
  dependsOn:
  - InitialA
  - InitialB
  steps:
  - script: echo hello from subsequent
```

::: moniker-end
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

::: moniker range=">=tfs-2018"
## Conditions
You can specify the conditions under which each phase runs. By default, a phase runs if it does not depend on any other phase, or if all of the phases that it depends on have completed and succeeded. You can customize this behavior by forcing a phase to run even if a previous phase fails or by specifying a custom condition.

# [Web](#tab/web)

Use the **Run this phase** option on an agent or server phase to run the tasks
  only when specific [conditions](conditions.md) are met. Select a predefined
  condition, or select "custom" and enter an [expression](conditions.md) that evaluates
  to **true** or **false**. Nested expressions can be used, and the
  expressions can access variables available in the release pipeline.

# [YAML](#tab/yaml)

Example to run a phase based upon the status of running a previous phase:

```yaml
phases:
- phase: A
  steps:
  - script: exit 1

- phase: B
  dependsOn: A
  condition: failed()
  steps:
  - script: echo this will run when A fails

- phase: C
  dependsOn:
  - A
  - B
  condition: succeeded('B')
  steps:
  - script: echo this will run when B runs and succeeds
```

Example of using a [custom condition](conditions.md):

```yaml
phases:
- phase: A
  steps:
  - script: echo hello

- phase: B
  dependsOn: A
  condition: and(succeeded(), eq(variables['build.sourceBranch'], 'refs/heads/master'))
  steps:
  - script: echo this only runs for master
```

You can specify that a phase run based on the value of an output variable set in a previous phase. In this case, you can only use variables set in directly dependent phases:

```yaml
phases:
- phase: A
  steps:
  - script: "echo ##vso[task.setvariable variable=skipsubsequent;isOutput=true]false"
    name: printvar

- phase: B
  condition: and(succeeded(), ne(dependencies.A.outputs['printvar.skipsubsequent'], 'true'))
  dependsOn: A
  steps:
  - script: echo hello from B
```

---

::: moniker-end

## Related topics

* [Phases](phases.md)
* [Server phases](server-phases.md)
* [Deployment group phases](deployment-group-phases.md)
