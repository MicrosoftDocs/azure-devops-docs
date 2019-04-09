---
title: Build and Release Tasks in Azure Pipelines and TFS
ms.custom: seodec18
description: Understand Build and Release tasks in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: conceptual
ms.assetid: 3293E200-6B8C-479D-9EA0-B3E82CE1450F
ms.prod: devops
ms.technology: devops-cicd
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 11/28/2018
monikerRange: '>= tfs-2015'
---

# Tasks for builds and releases

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

A **task** is the building block for defining automation in a
build pipeline, or in a stage of a release pipeline.
A task is simply a packaged script or procedure that has been
abstracted with a set of inputs. 

When you add a task to your build or release pipeline, it may also add a set of **demands** to the pipeline. The demands define the prerequisites that must be installed on the [agent](../agents/agents.md) for the task to run. When you run the build or deployment, an agent that meets these demands will be chosen.

When you queue a build or a deployment, all the tasks are run in sequence, one after the other, on an agent. To run the same set of tasks in parallel on multiple agents, or to run some tasks without using an agent, see [jobs](phases.md).

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
and a custom task, the in-box task will take precedence. You can use a fully-qualified
name for the custom task to avoid this risk:

```yaml
steps:
- task: myPublisherId.myExtensionId.myTaskName@1
```

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

# [YAML](#tab/yaml)

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

# [Designer](#tab/designer)

Each task in a pipeline has a **Version** selector to let you choose the version you want.

If you select a preview version (such as **1.\* Preview**), be aware that this
version is still under development and might have known issues.

If you change the version and have problems with your builds, you can revert the pipeline change from the **History** tab.
The ability to restore to an older version of a release pipeline is not currently available. You must manually revert the changes to the release pipeline, then save the pipeline.

Consider cloning the pipeline and testing the cloned pipeline with the new major task version.

---

<a name="controloptions"></a>
## Task control options

Each task offers you some **Control Options**.

# [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

Control options are available as keys on the `task` section.

```yaml
- task: string  # reference to a task and version, e.g. "VSBuild@1"
  condition: expression     # see below
  continueOnError: boolean  # 'true' if future steps should run even if this step fails; defaults to 'false'
  enabled: boolean          # whether or not to run this step; defaults to 'true'
  timeoutInMinutes: number  # how long to wait before timing out the task
```

The timeout period begins when the task starts running. It does not include the
time the task is queued or is waiting for an agent.

> [!NOTE]
> For the full schema, see [YAML schema for `task`](../yaml-schema.md#task).


### Conditions

[!INCLUDE [include](_shared/task-run-built-in-conditions.md)]
* [Custom conditions](conditions.md) which are composed of [expressions](expressions.md)


::: moniker-end

::: moniker range="<= azure-devops-2019"

YAML pipelines aren't available in TFS.

::: moniker-end

# [Designer](#tab/designer)

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

#### Run this task

Select the condition for running this task:

[!INCLUDE [include](_shared/task-run-built-in-conditions.md)]
* [Custom conditions](conditions.md) which are composed of [expressions](expressions.md)

> [!NOTE]
> If you're running tasks in cases when the build is canceled, then make sure you specify sufficient time for these tasks to run the [pipeline options](../build/options.md#job-cancel-timeout).

### TFS 2015 and newer options

#### Continue on error (partially successful)

Select this option if you want subsequent tasks in the same job to run even if this task fails. The build or deployment will be no better than partially successful.

#### Always run

Select this check box if you want the task to run even if the build or deployment is failing.

---

<h2 id="tool-installers">Build tool installers (Azure Pipelines)</h2>

> **Azure Pipelines preview feature**
>
> To use this capability you must be working on Azure Pipelines and enable the **Task tool installers** [preview feature](../../project/navigation/preview-features.md).

Tool installers enable your build pipeline to install and control your dependencies. Specifically, you can:

* Install a tool or runtime on the fly (even on [Microsoft-hosted agents](../agents/hosted.md)) just in time for your CI build.

* Validate your app or library against multiple versions of a dependency such as Node.js.

For example, you can set up your build pipeline to run and validate your app for multiple versions of Node.js.

### Example: Test and validate your app on multiple versions of Node.js

> [!TIP]
> Want a visual walkthrough? See [our April 19 news release](../archive/news/2017.md#april-19).

# [YAML](#tab/yaml)

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

# [Designer](#tab/designer)

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

![icon](../tasks/tool/_img/node.png) Tool: Node.js Installer

* Version Spec: 

 ```
$(NodeVersionSpec)
```

![icon](../tasks/utility/_img/command-line.png) Utility: Command Line

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

---

### Tool installer tasks

For a list of our tool installer tasks, see [Tool installer tasks](../tasks/index.md#tool).

## Related topics

* [Task jobs](phases.md)
* [Task groups](../library/task-groups.md)
* [Built-in task catalog](../tasks/index.md)
 
[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
