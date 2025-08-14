---
title: Task types and usage
description: Learn about tasks in Azure Pipelines pipeline jobs, including setting inputs and controlling run conditions.
ms.topic: conceptual
ms.assetid: 3293E200-6B8C-479D-9EA0-B3E82CE1450F
ms.date: 08/14/2025
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
#customer intent: As an Azure Pipelines creator and user, I want to understand tasks in pipeline jobs so I can select and configure them correctly.
---

# Task types and usage

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines jobs consist of steps, which can be tasks or scripts. A task is a prepackaged script or procedure that performs an action or uses a set of inputs to define pipeline automation. This article describes pipeline tasks and how to use them. For schema information, see the [steps.task](/azure/devops/pipelines/yaml-schema/steps-task) definition.

Azure Pipelines includes many built-in tasks that enable fundamental build and deployment scenarios. For a list of available built-in Azure Pipelines tasks, see the [Azure Pipelines task reference](https://github.com/MicrosoftDocs/azure-devops-yaml-schema-pr/blob/live/task-reference/index.md). You can also install tasks from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops) or create [custom tasks](../../extend/develop/add-build-task.md).

By default, all steps in a job run in sequence in the same context, whether on the host or in a [job container](container-phases.md). You can optionally use [step targets](#target) to control context for individual tasks. To run some tasks in parallel on multiple agents, or without using an agent, see [Specify jobs in your pipeline](phases.md).

## Task management

Tasks are available and installed at the Azure DevOps [organization](../../organizations/accounts/organization-management.md) level. You can only use tasks and task versions that exist for your organization.

You can disable built-in tasks, Marketplace tasks, or both in **Organization Settings** > **Pipelines** > **Settings** under **Task restrictions**. If you disable both built-in and Marketplace tasks, only tasks you install by using the [Node CLI for Azure DevOps](https://www.npmjs.com/package/tfx-cli) are available.

Disabling Marketplace tasks can help improve pipeline security. Under most circumstances, you shouldn't disable built-in tasks. For more information, see [Control available tasks](../security/misc.md#control-available-tasks).

## Custom tasks

The [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops) offers many extensions you can install to extend the Azure Pipelines task catalog. You can also create custom tasks. For more information, see [Add a custom pipelines task extension](../../extend/develop/add-build-task.md).

In YAML pipelines, you refer to tasks by name. If your custom task name matches a built-in task name, the pipeline uses the built-in task. To avoid this situation, you can reference your custom task by using the unique task GUID you assigned when you created the task. For more information, see [Understand task.json components](../../extend/develop/add-build-task.md#understanding-taskjson-components).

<a name="taskversions"></a>
## Task versions

Tasks are versioned, and you must specify the major version of the tasks you use in your pipeline. Specifying the version helps prevent issues when new versions of a task are released.

Pipelines automatically update to use new minor task versions, such as 1.2 to 1.3. Minor task versions are typically backwards compatible, but in some scenarios you might encounter unpredictable errors when a task automatically updates.

If a new major task version such as 2.0 releases, your pipeline continues to use the major version you specified until you edit the pipeline to manually change to the new major version. Build logs provide alerts when new major versions are available. You can only use task versions that exist for your [organization](../../organizations/accounts/organization-management.md).

#### [YAML](#tab/yaml/)

In YAML, you specify the major version by using `@` in the task name. For example, to use version 2 of the `PublishTestResults` task, specify `PublishTestResults@2`. You can specify which minor version to use by providing the full task version number after the `@`, such as `GoTool@0.3.1`.

#### [Classic](#tab/classic/)

In Classic pipelines, each task has a **Version** selector to let you choose the version you want. Consider cloning the pipeline and testing the cloned pipeline with new major task versions. If you select a preview version such as **1.\* Preview**, the version is still under development and might have issues.

If you change the version and have problems with your builds, you can revert the pipeline change from the **History** tab. For release pipelines, the ability to restore to an older version isn't available. You must manually revert the changes to the release pipeline, then save the pipeline.

---

## Task options

#### [YAML](#tab/yaml/)

The following properties are available for YAML pipeline `task` steps. For more information, see the [steps.task](/azure/devops/pipelines/yaml-schema/steps-task) definition.

|Property|Type|Description|
|--------|----|-----------|
|`task`|string|Required as first property. Name of the task to run.|
|`inputs`|string|Inputs for the task, using name/value pairs.|
|`condition`|string|Conditions under which the task runs.|
|`continueOnError`|boolean|Whether to continue running even on failure.|
|`displayName`|string|Human-readable name for the task.|
|`enabled`|boolean|Whether to run this task when the job runs.|
|`env`|string|Variables to map into the process environment, using name/value pairs.|
|`name`|string|ID of the step.|
|`retryCountOnTaskFailure`|string|Number of retries if the task fails.|
|`target`|string|Environment to run this task in.|
|`timeoutInMinutes`|string|The maximum time the task can run before being automatically canceled.|

### Conditions

A task can't determine whether to continue the pipeline job after the task finishes, only provide an ending status such as `succeeded` or `failed`. Downstream tasks and jobs can then set a `condition` based on that status to determine whether to run.

The [conditions](conditions.md) property specifies conditions under which this task runs. By default, a step runs if nothing in its job failed yet and the step immediately preceding it completed.

You can override or customize these defaults by setting the step to run even if or only if a previous dependency fails or has another outcome. You can also define [custom conditions](conditions.md#custom-conditions), which are composed of [expressions](expressions.md).

[!INCLUDE [include](includes/task-run-built-in-conditions.md)]

In the following YAML example, `PublishTestResults@2` runs even if the previous step failed, because of its [succeededOrFailed](expressions.md#succeededorfailed) condition.

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

The `continueOnError` property tells the task whether to continue running and report success regardless of failures. If set to `true`, this property tells the task to ignore a `failed` status and continue running. Downstream steps and jobs treat the task result as `success` when they make their run decisions.

### Enabled

By default, the task runs whenever the job runs. You can set `enabled` to `false` to disable the task. Temporarily disabling the task is useful to remove the task from the process for testing purposes or for specific deployments.

### Retry count on task failure

The `retryCountOnTaskFailure` property specifies the number of times to retry the task if it fails. The default is zero retries.

- The maximum number of retries allowed is 10.
- The wait time before retry increases after each failed attempt, following an exponential backoff strategy. The first retry happens after 1 second, the second retry after 4 seconds, and the tenth retry after 100 seconds.
- Retrying the task doesn't provide idempotency. Side effects of the first try, such as partially creating an external resource, could cause retries to fail.
- No information about the number of retries is made available to the task.
- Task failure adds a warning to the task logs indicating that it failed before retrying the task.
- All retry attempts show in the UI as part of the same task node.

>[!NOTE]
>The `retryCountOnTaskFailure` property requires agent version 2.194.0 or later. On Azure DevOps Server 2022, retries aren't supported for [agentless tasks](./phases.md#agentless-jobs-supported-tasks). For more information, see [Azure DevOps service update November 16, 2021 - Automatic retries for a task](/azure/devops/release-notes/2021/sprint-195-update#automatic-retries-for-a-task) and [Azure DevOps service update June 14, 2025 - Retries for server tasks](/azure/devops/release-notes/2024/sprint-240-update#retries-for-server-tasks).

:::moniker range="> azure-devops-2020"

<a name="step-target"></a>
### Target

Tasks run in an execution context, which is either the agent host or a container. A task can override its context by specifying a `target`. Available options are `host` to target the agent host, and any containers defined in the pipeline. In the following example, `SampleTask@1` runs on the host and `AnotherTask@1` runs in a container.

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
> Pipelines may specify a job level timeout in addition to a task level timeout. If the job level timeout interval elapses before a task completes, the running job terminates, even if the task is configured with a longer timeout interval. For more information, see [Timeouts](phases.md#timeouts).

#### [Classic](#tab/classic/)

<a name="controloptions"></a>
In Classic pipelines, tasks offer several **Control Options**.

:::image type="content" source="media/tasks/task-control-options.png" alt-text="Screenshot that shows the expanded Control Options for a Classic pipeline task.":::

### Enabled

Clear the **Enabled** check box to disable a task. Temporarily disabling the task is useful to remove the task from the process for testing purposes or for specific deployments.

> [!TIP]
> You can also right-click the task in the left pane and select **Disable/Enable selected task(s)** to toggle this setting.

#### Continue on error

Select this option if you want this task to report success even if it fails, possibly allowing dependent tasks in the same job to run. The overall build or deployment can be no more than partially successful. Whether subsequent tasks run also depends on their **Run this task** setting.

#### Number of retries if task failed

Specify the number of retries if this task fails. The default is zero.

- The failing task retries in seconds. The wait time before retry increases after each failed attempt.
- Retrying the task doesn't provide idempotency. Side effects of the first try, such as partially creating an external resource, could cause retries to fail.
- No information about the retry count is made available to the task.
- Task failure adds a warning to the task logs indicating that it failed before retrying the task.
- All retry attempts show in the UI as part of the same task node.

### Timeout

Enter the maximum time in minutes that the task can run before being automatically canceled. The default is `0`, or infinite time. Setting a value other than zero overrides the setting for the parent task job. The timeout period begins when the task starts running, and doesn't include the time the task is queued or is waiting for an agent.

### Run this task

Select one of the following conditions for running this task:

- **Only when all previous tasks have succeeded**. This condition is the default.
- **Even if a previous task has failed, unless the build was canceled**
- **Even if a previous task has failed, even if the build was canceled**
- **Only when a previous task has failed**
- **Custom conditions**, and then enter a [Custom condition](conditions.md#custom-conditions) specifying an expression for when this task should run.

> [!NOTE]
> If you choose to run tasks even when the build is canceled, make sure to specify sufficient time for these tasks to run in the [timeout options](../process/phases.md#timeouts).

---

## Environment variables

You can use environment variables to map system or user-defined information into the task process.

#### [YAML](#tab/yaml/)

A YAML pipeline task can specify an `env` property, which lists name/value strings that represent environment variables.

```yml
- task: AzureCLI@2
  env:
    ENV_VARIABLE_NAME: value
    ENV_VARIABLE_NAME2: value
  ...
```

You can set environment variables by using `script` steps, or by using scripts in command line, Bash, or PowerShell tasks.

The following example runs a `script` step that assigns a value to the `ENV_VARIABLE_NAME` environment variable and echoes the value.

```yml
- script: echo "This is " $ENV_VARIABLE_NAME
  env:
    ENV_VARIABLE_NAME: value
  displayName: 'echo environment variable'
```

The preceding script is functionally the same as running a [Bash@3](/azure/devops/pipelines/tasks/reference/bash-v3) task with a `script` input. The following example uses the `task` syntax.

```yml
- task: Bash@3
  inputs:
    script: echo "This is " $ENV_VARIABLE_NAME
  env:
    ENV_VARIABLE_NAME: value
  displayName: 'echo environment variable'
```

#### [Classic](#tab/classic/)

In Classic pipelines, you can add and edit environment variables in the **Environment Variables** section of the task editor.

:::image type="content" source="media/tasks/task-environment-variables.png" alt-text="Screenshot that shows task Environment Variables.":::

---

<a name="tool-installers"></a>
## Build tool installer tasks

Build tool installer tasks enable your build pipeline to install and control dependencies. You can use build tool installer tasks to:

- Install a tool or runtime for a build, including on [Microsoft-hosted agents](../agents/hosted.md).
- Validate your app or library against multiple versions of a dependency such as Node.js.

For a list of tool installer tasks, see [Tool tasks](https://github.com/MicrosoftDocs/azure-devops-yaml-schema-pr/blob/live/task-reference/index.md#tool-tasks).

### Example: Test and validate an app on multiple versions of Node.js

The following example sets up a build pipeline to run and validate an app on multiple versions of Node.js.

#### [YAML](#tab/yaml/)

1. Create an *azure-pipelines.yml* file that has the following contents in your project's base directory.

```yaml
pool:
  vmImage: windows-latest

strategy:
  matrix:
    node10:
      nodeversion: 10.x
    node12:
      nodeversion: 12.x
  maxParallel: 2

steps:
- task: UseNode@1
  displayName: 'Use Node $(nodeversion)*'
  inputs:
    version: '$(nodeversion)'

- script: 'where node'
  displayName: 'Command Line Script'
```

>[!NOTE]
>For Linux or macOS agents, change `vmImage` to your agent specification, such as `ubuntu-latest`, and change the `script` contents to `which node`.

Save and run the pipeline. The job runs twice, one for each version of Node.js you specified in the `nodeversion` variable.

The [Node.js Tool Installer](/azure/devops/pipelines/tasks/reference/node-tool-v0) downloads the Node.js version if it isn't already on the agent. The [Command Line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) script writes the installed version to the command line.

#### [Classic](#tab/classic/)

1. In the **Agent job** for your Classic pipeline, under **Execution plan**, set **Parallelism** to **Multi-configuration**.
1. Under **Multipliers**, enter *NodeVersionSpec*.
1. Set **Maximum number of agents** to *2*.
1. Add the **Node.js tool installer** task to your pipeline with the following settings:
   - **Task version**: Select **1.\* (preview)**.
   - **Version**: Enter *$(NodeVersionSpec)*.
1. Add the **Command Line** task to your pipeline. Under **Script**:
   - Enter *where node* if you're running on a Windows agent.
   - Enter *which node* if you're running on a macOS or Linux agent.
1. On the [Variables tab](../build/variables.md), define the variable *NodeVersionSpec* with the value *10.x, 12.x*, and select **Settable at queue time**.
1. Select **Save & queue**.
1. On the **Run pipeline** screen, select **Save and run**.

The job runs twice, one for each version of Node.js you specified in the `NodeVersionSpec` variable. The [Node.js tool installer](/azure/devops/pipelines/tasks/reference/node-tool-v0) task downloads the Node.js version if it isn't already on the agent. The [Command Line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) task logs the location of the Node.js version on disk.

---

## Related content

- [Jobs](phases.md)
- [Task groups](../library/task-groups.md)
- [Azure Pipelines task reference](https://github.com/MicrosoftDocs/azure-devops-yaml-schema-pr/blob/live/task-reference/index.md)

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
