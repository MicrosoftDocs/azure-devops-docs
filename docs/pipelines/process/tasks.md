---
title: Build and Release Tasks
ms.custom: seodec18
description: Understand Build and Release tasks in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: conceptual
ms.assetid: 3293E200-6B8C-479D-9EA0-B3E82CE1450F
ms.date: 11/29/2021
monikerRange: '<= azure-devops'
---

# Task types & usage

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [temp](../includes/concept-rename-note.md)]

A **task** is the building block for defining automation in a
pipeline.
A task is simply a packaged script or procedure that has been
abstracted with a set of inputs. 

When you add a task to your pipeline, it may also add a set of **demands** to the pipeline. The demands define the prerequisites that must be installed on the [agent](../agents/agents.md) for the task to run. When you run the build or deployment, an agent that meets these demands will be chosen.

::: moniker range="> azure-devops-2019"

When you run a [job](phases.md), all the tasks are run in sequence, one after the other.
To run the same set of tasks in parallel on multiple agents, or to run some tasks without using an agent, see [jobs](phases.md).

By default, all tasks run in the same context, whether that's on the [host](phases.md) or in a [job container](container-phases.md).
You may optionally use [step targets](#step-target) to control context for an individual task.

Learn more about how to specify properties for a task with the [built-in tasks](../tasks/index.md). 

::: moniker-end

::: moniker range="<= azure-devops-2019"

When you run a [job](phases.md), all the tasks are run in sequence, one after the other, on an agent. To run the same set of tasks in parallel on multiple agents, or to run some tasks without using an agent, see [jobs](phases.md).

::: moniker-end

## Custom tasks

We provide some [built-in tasks](../tasks/index.md) 
to enable fundamental build and deployment scenarios. We have also
provided guidance for [creating your own custom task](../../extend/develop/add-build-task.md).

In addition, [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops)
offers a number of extensions; each of which, when installed to your
subscription or collection, extends the task catalog with one or more tasks.
Furthermore, you can write your own [custom extensions](../../integrate/index.md)
to add tasks to Azure Pipelines or TFS.

::: moniker range=">= azure-devops-2019"

In YAML pipelines, you refer to tasks by name. If a name matches both an in-box task
and a custom task, the in-box task will take precedence. You can use the task GUID or a fully qualified
name for the custom task to avoid this risk:

```yaml
steps:
- task: myPublisherId.myExtensionId.myContributionId.myTaskName@1 #format example
- task: qetza.replacetokens.replacetokens-task.replacetokens@3 #working example
```

To find `myPublisherId` and `myExtensionId`, select **Get** on a task in the marketplace. The values after the `itemName` in your URL string are `myPublisherId` and `myExtensionId`. You can also find the fully qualified name by adding the task to a [Release pipeline](../release/releases.md) and selecting **View YAML** when editing the task. 

::: moniker-end

<a name="taskversions"></a>
## Task versions

Tasks are versioned, and you must specify the major version of the task used in your
pipeline. This can help to prevent issues when new versions of a task are released.
Tasks are typically backwards compatible, but in some scenarios you may
encounter unpredictable errors when a task is automatically updated.

When a new minor version is released (for example, 1.2 to 1.3), your build or release
will automatically use the new version. However, if a new major version is released
(for example 2.0), your build or release will continue to use the major version you specified
until you edit the pipeline and manually change to the new major version.
The build or release log will include an alert that a new major version is available.

You can set which minor version gets used by specifying the full version number of a task after the `@` sign (example: `GoTool@0.3.1`). You can only use task versions that exist for your [organization](../../organizations/accounts/organization-management.md). 


#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

In YAML, you specify the major version using `@` in the task name.
For example, to pin to version 2 of the `PublishTestResults` task:

```yaml
steps:
- task: PublishTestResults@2
```

::: moniker-end

::: moniker range="<= azure-devops-2019"

YAML pipelines aren't available in TFS.

::: moniker-end

#### [Classic](#tab/classic/)
Each task in a pipeline has a **Version** selector to let you choose the version you want.

If you select a preview version (such as **1.\* Preview**), be aware that this
version is still under development and might have known issues.

If you change the version and have problems with your builds, you can revert the pipeline change from the **History** tab.
The ability to restore to an older version of a release pipeline is not currently available. You must manually revert the changes to the release pipeline, then save the pipeline.

Consider cloning the pipeline and testing the cloned pipeline with the new major task version.

* * *

<a name="controloptions"></a>

## Task control options

Each task offers you some **Control Options**.

#### [YAML](#tab/yaml/)

::: moniker range="azure-devops-2019"

Control options are available as keys on the `task` section.

```yaml
- task: string  # reference to a task and version, e.g. "VSBuild@1"
  condition: expression     # see below
  continueOnError: boolean  # 'true' if future steps should run even if this step fails; defaults to 'false'
  enabled: boolean          # whether or not to run this step; defaults to 'true'
  timeoutInMinutes: number  # how long to wait before timing out the task
```

::: moniker-end

::: moniker range=">azure-devops-2019 <azure-devops"

Control options are available as keys on the `task` section.

```yaml
- task: string  # reference to a task and version, e.g. "VSBuild@1"
  condition: expression     # see below
  continueOnError: boolean  # 'true' if future steps should run even if this step fails; defaults to 'false'
  enabled: boolean          # whether or not to run this step; defaults to 'true'
  timeoutInMinutes: number  # how long to wait before timing out the task
  target: string            # 'host' or the name of a container resource to target
```

::: moniker-end

::: moniker range="azure-devops"

Control options are available as keys on the `task` section.

```yaml
- task: string  # reference to a task and version, e.g. "VSBuild@1"
  condition: expression     # see below
  continueOnError: boolean  # 'true' if future steps should run even if this step fails; defaults to 'false'
  enabled: boolean          # whether or not to run this step; defaults to 'true'
  retryCountOnTaskFailure: number # Max number of retries; default is zero
  timeoutInMinutes: number  # how long to wait before timing out the task
  target: string            # 'host' or the name of a container resource to target
```

::: moniker-end

:::moniker range=">= azure-devops-2019"

> [!NOTE]
> A given task or job can't unilaterally decide whether the job/stage continues. What it can do is offer a status of **succeeded** or **failed**, and downstream tasks/jobs each have a condition computation that lets them decide whether to run or not. The default condition which is effectively "run if we're in a successful state".
> 
> **Continue on error** alters this in a subtle way. It effectively "tricks" all downstream steps/jobs into treating any result as "success" for the purposes of making that decision. Or to put it another way, it says "don't consider the failure of this task when you're making a decision about the condition of the containing structure".

The timeout period begins when the task starts running. It does not include the
time the task is queued or is waiting for an agent.

In this YAML, `PublishTestResults@2` will run even if the previous step fails because of the [succeededOrFailed() condition](expressions.md#succeededorfailed).

```yaml
steps:
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.7'
    architecture: 'x64'
- task: PublishTestResults@2
  inputs:
    testResultsFiles: "**/TEST-*.xml"
  condition: succeededOrFailed()
```


### Conditions

[!INCLUDE [include](includes/task-run-built-in-conditions.md)]
* [Custom conditions](conditions.md) which are composed of [expressions](expressions.md)

::: moniker-end

:::moniker range="> azure-devops-2019"

### Step target

Tasks run in an execution context, which is either the agent host or a container.
An individual step may override its context by specifying a `target`.
Available options are the word `host` to target the agent host plus any containers defined in the pipeline.
For example:

```yaml
resources:
  containers:
  - container: pycontainer
    image: python:3.8

steps:
- task: SampleTask@1
  target: host
- task: AnotherTask@1
  target: pycontainer
```

Here, the `SampleTask` runs on the host and `AnotherTask` runs in a container.

::: moniker-end

::: moniker range="azure-devops"

### Number of retries if task failed

Use `retryCountOnTaskFailure` to specify the number of retries if the task fails. The default is zero. 

```yml
- task: <name of task>
   retryCountOnTaskFailure: <max number of retries>
   ...
```

> [!NOTE]
> * Requires agent version 2.194.0 or later. Not supported for [agentless tasks](./phases.md#agentless-tasks).
> * The failing task is retried immediately.
> * There is no assumption about the idempotency of the task. If the task has side-effects (for instance, if it created an external resource partially), then it may fail the second time it is run.
> * There is no information about the retry count made available to the task.
> * A warning is added to the task logs indicating that it has failed before it is retried.
> * All of the attempts to retry a task are shown in the UI as part of the same task node.

::: moniker-end

::: moniker range="<= azure-devops-2019"

YAML pipelines aren't available in TFS.

::: moniker-end

#### [Classic](#tab/classic/)

### Enabled

Clear this check box to disable a task. This is useful
when you want to temporarily take task out of the process for testing or for specific deployments.

> [!TIP]
> You can also right-click the task to toggle this setting.

### Timeout

The timeout for this task in minutes. The default is zero (infinite timeout).
Setting a value other than zero overrides the setting for the parent task job.
The timeout period begins when the task starts running. It does not include the
time the task is queued or is waiting for an agent.

### Azure Pipelines options

#### Continue on error (partially successful)

Select this option if you want subsequent tasks in the same job to possibly run even if this task fails. The build or deployment will be no better than partially successful. Whether subsequent tasks run depends on the **Run this task** setting.

#### Number of retries if task failed

Specify the number of retries if this task fails. The default is zero. 

> [!NOTE]
> * The failing task is retried immediately.
> * There is no assumption about the idempotency of the task. If the task has side-effects (for instance, if it created an external resource partially), then it may fail the second time it is run.
> * There is no information about the retry count made available to the task.
> * A warning is added to the task logs indicating that it has failed before it is retried.
> * All of the attempts to retry a task are shown in the UI as part of the same task node.

#### Run this task

Select the condition for running this task:

[!INCLUDE [include](includes/task-run-built-in-conditions.md)]
* [Custom conditions](conditions.md) which are composed of [expressions](expressions.md)

> [!NOTE]
> If you're running tasks in cases when the build is canceled, then make sure you specify sufficient time for these tasks to run the [pipeline options](../process/phases.md#timeouts).

### TFS 2015 and newer options

#### Continue on error (partially successful)

Select this option if you want subsequent tasks in the same job to run even if this task fails. The build or deployment will be no better than partially successful.

#### Always run

Select this check box if you want the task to run even if the build or deployment is failing.

* * *



## Environment variables

#### [YAML](#tab/yaml/)

:::moniker range="< azure-devops-2019"

YAML pipelines are supported in Azure DevOps Server 2019 and higher.

:::moniker-end

:::moniker range=">= azure-devops-2019"

Each task has an `env` property that is a list of string pairs that represent environment variables mapped into the task process.

```yml
task: AzureCLI@2
displayName: Azure CLI
inputs: # Specific to each task
env:
  ENV_VARIABLE_NAME: value
  ENV_VARIABLE_NAME2: value
  ...
```

The following example runs the `script` step which is a shortcut for the [Command line task](../tasks/utility/command-line.md), followed by the equivalent task syntax. This example assigns a value to the `AZURE_DEVOPS_EXT_PAT` environment variable, which is used to authenticating with Azure DevOps CLI.

```yml
# Using the script shortcut syntax
- script: az pipelines variable-group list --output table
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'List variable groups using the script step'

# Using the task syntax
- task: CmdLine@2
  inputs:
    script: az pipelines variable-group list --output table
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'List variable groups using the command line task'

```

:::moniker-end


#### [Classic](#tab/classic/)

You can work with environment variables using the **Environment Variables** section of the task editor.

:::image type="content" source="media/tasks/task-environment-variables.png" alt-text="Task environment variables.":::


* * *


<h2 id="tool-installers">Build tool installers (Azure Pipelines)</h2>

Tool installers enable your build pipeline to install and control your dependencies. Specifically, you can:

* Install a tool or runtime on the fly (even on [Microsoft-hosted agents](../agents/hosted.md)) just in time for your CI build.

* Validate your app or library against multiple versions of a dependency such as Node.js.

For example, you can set up your build pipeline to run and validate your app for multiple versions of Node.js.

### Example: Test and validate your app on multiple versions of Node.js

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

Create an azure-pipelines.yml file in your project's base directory with the following contents.

```yaml
pool:
  vmImage: 'Ubuntu 16.04'

steps:
# Node install
- task: NodeTool@0
  displayName: Node install
  inputs:
    versionSpec: '6.x' # The version we're installing
# Write the installed version to the command line
- script: which node
```

[Create a new build pipeline](../create-first-pipeline.md) and run it. Observe how the build is run.
The [Node.js Tool Installer](../tasks/tool/node-js.md) downloads the Node.js version if it is not already on the agent. The [Command Line](../tasks/utility/command-line.md) script logs the location of the Node.js version on disk.

::: moniker-end

::: moniker range="<= azure-devops-2019"

YAML pipelines aren't available in TFS.

::: moniker-end

#### [Classic](#tab/classic/)

#### Tasks tab

[Create a new build pipeline](../create-first-pipeline.md) (start with an empty process) to try this out.

Apply the following agent settings:

1. Set **Parallelism** to **Multi-configuration**

2. Specify **Multipliers**:

```
NodeVersionSpec
```

3. Set **Maximum number of agents** to 2

Add these tasks:

![node js installer](../tasks/tool/media/node.png) Tool: Node.js Installer

* Version Spec: 

  ```
  $(NodeVersionSpec)
  ```

![CLI](../tasks/utility/media/command-line.png) Utility: Command Line

* Script (if you're running on a Windows agent)
  ```
  where node
  ```

* Script (if you're running on a macOS or Linux agent)
  ```
  which node
  ```

#### Variables tab

On the [Variables tab](../build/variables.md) define this variable:

|Name|Value|Settable at queue time|
|-|-|-|
|```NodeVersionSpec```|```6.x, 7.x```|Selected|

#### Save & queue

Click **Save & queue**. Observe how two builds are run. The [Node.js Tool Installer](../tasks/tool/node-js.md) downloads each of the Node.js versions if they are not already on the agent. The [Command Line](../tasks/utility/command-line.md) task logs the location of the Node.js version on disk.

* * *

### Tool installer tasks

For a list of our tool installer tasks, see [Tool installer tasks](../tasks/index.md#tool).

::: moniker range=">= azure-devops-2020"

### Disabling in-box and Marketplace tasks

On the organization settings page, you can disable Marketplace tasks, in-box tasks, or both.
Disabling Marketplace tasks can help [increase security](../security/misc.md) of your pipelines.
If you disable both in-box and Marketplace tasks, only tasks you install using [`tfx`](https://www.npmjs.com/package/tfx-cli) will be available.

::: moniker-end

## Related articles

* [Jobs](phases.md)
* [Task groups](../library/task-groups.md)
* [Built-in task catalog](../tasks/index.md)

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
