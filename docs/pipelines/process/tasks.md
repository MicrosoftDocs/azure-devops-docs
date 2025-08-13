---
title: Task types and usage
description: Learn how to define tasks in your pipeline, set inputs, and control task conditions with Azure DevOps.
ms.topic: conceptual
ms.assetid: 3293E200-6B8C-479D-9EA0-B3E82CE1450F
ms.date: 08/12/2025
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
---

# Task types and usage

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes tasks and how to use them in Azure Pipelines. A task is a prepackaged script or procedure that performs an action or uses a set of inputs to define pipeline automation. For more information, see the [steps.task](/azure/devops/pipelines/yaml-schema/steps-task) definition.

Azure DevOps includes many built-in tasks to enable fundamental build and deployment scenarios. For available built-in Azure Pipelines tasks, see the [Azure Pipelines task reference](../tasks/reference.md). You can also create [custom tasks](../../extend/develop/add-build-task.md) or install tasks from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops).

Pipeline jobs consist of steps, which can be tasks or scripts. By default, all steps in a job run in sequence in the same context, whether on the host or in a [job container](container-phases.md). To run the same set of tasks in parallel on multiple agents, or to run some tasks without using an agent, see [Specify jobs in your pipeline](phases.md). You can also optionally use [step targets](#target) to control context for individual tasks.

## Task management

Tasks are available and installed at the organization level. You can use only tasks and task versions that exist for your [organization](../../organizations/accounts/organization-management.md).

You can disable built-in tasks, Marketplace tasks, or both in **Organization Settings** > **Pipelines** > **Settings** under **Task restrictions**. If you disable both built-in and Marketplace tasks, only tasks you install by using the [Node CLI for Azure DevOps](https://www.npmjs.com/package/tfx-cli) are available.

Disabling Marketplace tasks can help improve pipeline security. Generally, it's not recommended to disable built-in tasks. For more information, see [Control available tasks](../security/misc.md#control-available-tasks).

## Custom tasks

The [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops) offers many extensions you can install to extend the Azure Pipelines task catalog. You can also create custom tasks. For more information, see [Add a custom pipelines task extension](../extend/develop/add-build-task.md).

In YAML pipelines, you refer to tasks by name. If your custom task name matches a built-in or Marketplace task, the built-in or Marketplace task takes precedence. To reference your custom task, you can use the unique task GUID you used to create your custom task. For more information, see [Understand task.json components](../extend/develop/add-build-task.md#understanding-taskjson-components).

<a name="taskversions"></a>
## Task versions

Tasks are versioned, and you must specify the major version of the tasks you use in your pipeline. Specifying the version helps prevent issues when new versions of a task are released.

Pipelines automatically update to use new minor task versions, such as 1.2 to 1.3. Task versions are typically backwards compatible, but in some scenarios you might encounter unpredictable errors when a task automatically updates.

If a new task major version such as 2.0 releases, your pipeline continues to use the major version you specified until you edit the pipeline to manually change to the new major version. Build logs provide alerts when new major versions are available. You can only use task versions that exist for your [organization](../../organizations/accounts/organization-management.md).

#### [YAML](#tab/yaml/)

In YAML, you specify the major version by using `@` in the task name. For example, to use version 2 of the `PublishTestResults` task, specify `PublishTestResults@2`. You can specify which minor version to use by providing the full task version number after the `@`, such as `GoTool@0.3.1`.

#### [Classic](#tab/classic/)

In Classic pipelines, each task has a **Version** selector to let you choose the version you want. Consider cloning the pipeline and testing the cloned pipeline with a new major task version. If you select a preview version such as **1.\* Preview**, the version is still under development and might have issues.

If you change the version and have problems with your builds, you can revert the pipeline change from the **History** tab. For release pipelines, the ability to restore to an older version isn't available. You must manually revert the changes to the release pipeline, then save the pipeline.

---

## Task properties and control options

#### [YAML](#tab/yaml/)

In YAML pipelines, the following properties are available for the `task` component. For more information, see the [steps.task](/azure/devops/pipelines/yaml-schema/steps-task) definition.

```yaml
- task: string # Required as first property. Name of the task to run.
  inputs: # Inputs for the task.
    string: string # Name/value pairs
  condition: string # Evaluate this condition expression to determine whether to run this task.
  continueOnError: boolean # Continue running even on failure?
  displayName: string # Human-readable name for the task.
  enabled: boolean # Run this task when the job runs?
  env: # Variables to map into the process's environment.
    string: string # Name/value pairs
  name: string # ID of the step.
  retryCountOnTaskFailure: string # Number of retries if the task fails.
  target: string | target # Environment in which to run this task.
  timeoutInMinutes: string # Time to wait for this task to complete before the server kills it.
```

A task can't determine whether a pipeline job continues after the task finishes, but it can provide a task status such as `succeeded` or `failed`. Downstream tasks can then set a `condition` based on that status to determine whether to run.

### Conditions

The [conditions](conditions.md) property specifies conditions under which the task runs. By default, a step runs if nothing in its job failed yet and the step immediately preceding it completed.

You can override or customize these defaults by setting the step to run even if or only if a previous dependency fails or has another outcome. You can also define [custom conditions](conditions.md#custom-conditions), which are composed of [expressions](expressions.md).

[!INCLUDE [include](includes/task-run-built-in-conditions.md)]

In the following YAML example, `PublishTestResults@2` runs even if the previous step fails because of its [succeededOrFailed() condition](expressions.md#succeededorfailed).

```yaml
steps:
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.x'
    architecture: 'x64'
- task: PublishTestResults@2
  inputs:
    testResultsFiles: "**/TEST-*.xml"
  condition: succeededOrFailed()
```

### Continue on error

The `continueOnError` property tells the task whether to continue running regardless of its outcome. If set to `true`, this property tells the task to ignore any `failed` status and continue running. Downstream steps and jobs treat the task result as `success` for the purpose of making their run decisions.

### Retry count on task failure

Use `retryCountOnTaskFailure` to specify the number of retries if the task fails. The default is zero retries.

- The maximum number of retries allowed is 10.
- The wait time before retry increases after each failed attempt, following an exponential backoff strategy. The first retry happens after 1 second, the second retry after 4 seconds, and the tenth retry after 100 seconds.
- There's no assumption about the idempotency of the task. If the task had side effects, such as partially creating an external resource, it might fail the second time it runs.
- No information about the retry count is made available to the task.
- Task failure adds a warning to the task logs indicating that it failed before retrying the task.
- All retry attempts show in the UI as part of the same task node.

>[!NOTE]
>The `retryCountOnTaskFailure` property requires agent version 2.194.0 or later. On Azure DevOps Server 2022, retries aren't supported for [agentless tasks](./phases.md#agentless-jobs-supported-tasks). For more information, see [Azure DevOps service update November 16, 2021 - Automatic retries for a task](/azure/devops/release-notes/2021/sprint-195-update#automatic-retries-for-a-task), and [Azure DevOps service update June 14, 2025 - Retries for server tasks](/azure/devops/release-notes/2024/sprint-240-update#retries-for-server-tasks).

:::moniker range="> azure-devops-2020"

### Target

Tasks run in an execution context, which is either the agent host or a container. An individual step can override its context by specifying a `target`. Available options are `host` to target the agent host, and any containers defined in the pipeline. In the following example, the `SampleTask` runs on the host and `AnotherTask` runs in a container.

```yaml
resources:
  containers:
  - container: pycontainer
    image: python:3.11

steps:
- task: SampleTask@1
  target: host
- task: AnotherTask@1
  target: pycontainer
```

::: moniker-end

### Timeout

The timeout period begins when the task starts running, and doesn't include the time the task is queued or is waiting for an agent.

> [!NOTE]
> Pipelines may specify a job level timeout in addition to a task level timeout. If the job level timeout interval elapses before your task completes, the running job terminates, even if the step is configured with a longer timeout interval. For more information, see [Timeouts](phases.md#timeouts).

#### [Classic](#tab/classic/)

<a name="controloptions"></a>
In Classic pipelines, each task offers you the following **Control Options**:

### Enabled

Clear the **Enabled** check box to disable a task. Disabling the task is useful when you want to temporarily take the task out of the process for testing or for specific deployments.

> [!TIP]
> You can also right-click the task in the left pane and select **Disable/Enable selected task(s)** to toggle this setting. Disabled tasks appear with a strikeout through them.

#### Continue on error

Select this option if you want this task to report success even if it fails, possibly allowing dependent tasks in the same job to run. The overall build or deployment can be no more than partially successful. Whether subsequent tasks run also depends on their **Run this task** setting.

#### Number of retries if task failed

Specify the number of retries if this task fails. The default is zero.

- The failing task retries in seconds. The wait time before retry increases after each failed attempt.
- There's no assumption about the idempotency of the task. If the task had side effects, such as partially creating an external resource, it might fail the second time it runs.
- No information about the retry count is made available to the task.
- Task failure adds a warning to the task logs indicating that it failed before retrying the task.
- All retry attempts show in the UI as part of the same task node.

### Timeout

The timeout for this task in minutes. The default is `0`, or infinite timeout. Setting a value other than zero overrides the setting for the parent task job. The timeout period begins when the task starts running, and doesn't include the time the task is queued or is waiting for an agent.

### Run this task

Select the condition for running this task:

- Only when all previous tasks have succeeded
- Even if a previous task has failed, unless the build was canceled
- Even if a previous task has failed, even if the build was canceled
- Only when a previous task has failed
- Custom conditions, and then specify the [custom condition](conditions.md#custom-conditions).

> [!NOTE]
> If you choose to run tasks even when the build is canceled, make sure to specify sufficient time for these tasks to run in the [timeout options](../process/phases.md#timeouts).

---

## Environment variables

#### [YAML](#tab/yaml/)

Each task can specify an `env` property, which is a list of string pairs that represent environment variables mapped into the task process.

:::moniker range="azure-devops"

```yml
- task: AzureCLI@2
  displayName: Azure CLI
  inputs: # Specific to each task
  env:
    ENV_VARIABLE_NAME: value
    ENV_VARIABLE_NAME2: value
  ...
```

Steps can be scripts or tasks. The following example runs a `script` step that assigns a value to the `AZURE_DEVOPS_EXT_PAT` environment variable, which authenticates with Azure DevOps CLI.

```yml
- script: az pipelines variable-group list --output table
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'List variable groups using the script step'
```

The preceding script is functionally the same as running a [Command line task](/azure/devops/pipelines/tasks/reference/cmd-line-v2). The following example uses the task syntax.

```yaml
- task: CmdLine@2
  inputs:
    script: az pipelines variable-group list --output table
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'List variable groups using the command line task'

```

::: moniker range="< azure-devops"

Each task can specify an `env` property, which is a list of string pairs that represent environment variables mapped into the task process.

```yml
- task: Bash@3
  inputs:
     targetType: # specific to each task
  env:
    ENV_VARIABLE_NAME: value
    ENV_VARIABLE_NAME2: value
  ...
```

Steps can be scripts or tasks. The following example runs a `script` step that assigns a value to the `ENV_VARIABLE_NAME` environment variable and echoes the value.

```yml
- script: echo "This is " $ENV_VARIABLE_NAME
  env:
    ENV_VARIABLE_NAME: "my value"
  displayName: 'echo environment variable'
```

The preceding script is functionally the same as running a [Bash@3](/azure/devops/pipelines/tasks/reference/bash-v3) task. The following example uses the task syntax.

```yml
- task: Bash@2
  inputs:
    script: echo "This is " $ENV_VARIABLE_NAME
  env:
    ENV_VARIABLE_NAME: "my value"
  displayName: 'echo environment variable'
```

::: moniker-end

#### [Classic](#tab/classic/)

In Classic pipelines, you can work with environment variables by using the **Output variables** section of the task editor.

:::image type="content" source="media/tasks/task-environment-variables.png" alt-text="Task environment variables.":::

---

<a name="tool-installers"></a>
## Build tool installer tasks

Tool installer tasks enable your build pipeline to install and control your dependencies. You can use tool installer tasks to:

- Install a tool or runtime for your continuous integration (CI) build, even on [Microsoft-hosted agents](../agents/hosted.md).
- Validate your app or library against multiple versions of a dependency such as Node.js.

For a list of tool installer tasks, see [Tool tasks](../tasks/reference.md#tool-tasks).

### Example: Test and validate an app on multiple versions of Node.js

The following example sets up a build pipeline to run and validate an app on multiple versions of Node.js.

#### [YAML](#tab/yaml/)

Create an *azure-pipelines.yml* file in your project's base directory that has the following contents. The [Node.js Tool Installer](/azure/devops/pipelines/tasks/reference/node-tool-v0) downloads the Node.js version if it isn't already on the agent. The [Command Line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) script writes the installed version to the command line.
.

```yaml
steps:
- task: UseNode@1
  displayName: Node install
  inputs:
    version: '16.x' # The version to install
- script: which node
```

#### [Classic](#tab/classic/)

1. In the **Agent job** for your Classic pipeline, under **Execution plan**, set **Parallelism** to **Multi-configuration**.
1. Under **Multipliers**, enter *NodeVersionSpec*.
1. Set **Maximum number of agents** to *2*.
1. Add the following tasks to your pipeline:
   - **Node.js tool installer**. Under **Version Spec**, enter *$(NodeVersionSpec)*
   - **Command Line**. Under **Script**, enter *where node* if you're running on a Windows agent, or *which node* if you're running on a macOS or Linux agent.
1. On the [Variables tab](../build/variables.md), define the variable *NodeVersionSpec* with the value *10.x, 12.x*, and select **Settable at queue time**.
1. Select **Save & queue**.

The [Node.js tool installer](/azure/devops/pipelines/tasks/reference/node-tool-v0) task downloads each Node.js version if they aren't already on the agent. The [Command Line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) task logs the location of the Node.js version on disk.

---

## Related articles

- [Jobs](phases.md)
- [Task groups](../library/task-groups.md)
- [Azure Pipelines task reference](../tasks/reference.md)

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
