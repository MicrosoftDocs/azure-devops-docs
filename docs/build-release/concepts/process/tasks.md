---
title: Build and Release Tasks in VSTS and TFS
description: Understand Build and Release tasks in Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.topic: conceptual
ms.assetid: 3293E200-6B8C-479D-9EA0-B3E82CE1450F
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 01/19/2018
monikerRange: '>= tfs-2015'
---


# Tasks for builds and releases

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

A **task** is the building block for defining automation in a
build definition, or in an environment of a release definition.
A task is simply a packaged script or procedure that has been
abstracted with a set of inputs. We provide some [built-in tasks](../../tasks/index.md) 
to enable fundamental build and deployment scenarios.

In addition, [Visual Studio Marketplace](https://marketplace.visualstudio.com/VSTS)
offers a number of extensions; each of which, when installed to your
account or collection, extends the task catalog with one or more tasks.
Furthermore, you can write your own [custom extensions](../../../integrate/index.md)
to add tasks to your account in VSTS or your collection in TFS.

When you add a task to your build or release definition, it may also add a set of **demands** to the definition. The demands define the prerequisites that must be installed on the [agent](../agents/agents.md) for the task to run. When you run the build or deployment, an agent that meets these demands will be chosen.

When you queue a build or a deployment, all the tasks are run in sequence, one after the other, on an agent. To run the same set of tasks in parallel on multiple agents, or to run some tasks without using an agent, see [phases](phases.md).

<a name="taskversions"></a>
## Task versions

Each task has a **Version** selector that enables you to specify the major version of the task used in your
build or deployment. This can help to prevent issues when new versions of a task are released.
Tasks are typically backwards compatible, but in some scenarios you may
encounter unpredictable errors when a task is automatically updated.

When a new minor version is released (for example, 1.2 to 1.3), your build or release
will automatically use the new version. However, if a new major version is released
(for example 2.0), your build or release will continue to use the major version you specified
until you edit the definition and manually change to the new major version.
The build or release log will include an alert that a new major version is available.

**Notes:**

* If you select a preview version (such as **1.\* Preview**), be aware that this
  version is still under development and might have known issues.

* If you change the version and have problems with your builds, you can revert the definition change from the **History** tab. 
  The ability to restore to an older version of a release definition is not currently available. You must manually revert the changes to the release definition, then save the definition.

* Consider cloning the definition and testing the cloned definition with the new major task version.

<a name="controloptions"></a>
## Task control options

Each task offers you some **Control Options**.

### Enabled

Clear this check box to disable a task. This is useful
when you want to temporarily take task out of the process for testing or for specific deployments.

> [!TIP]
> You can also right-click the task to toggle this setting.

### Timeout

The timeout for this task in minutes. The default is zero (infinite timeout).
Setting a value other than zero overrides the setting for the parent task phase.

### VSTS options

#### Continue on error (partially successful)

Select this option if you want subsequent tasks in the same phase to possibly run even if this task fails. The build or deployment will be no better than partially successful. Whether subsequent tasks run depends on the **Run this task** setting.

#### Run this task

Select the condition for running this task:

[!INCLUDE [include](_shared/task-run-built-in-conditions.md)]
* [Custom conditions](conditions.md)

> [!NOTE]
> If you're running tasks in cases when the build is canceled, then make sure you specify sufficient time for these tasks to run the [definition options](../../concepts/definitions/build/options.md#job-cancel-timeout).

### TFS 2015 and newer options

#### Continue on error (partially successful)

Select this option if you want subsequent tasks in the same phase to run even if this task fails. The build or deployment will be no better than partially successful.

#### Always run

Select this check box if you want the task to run even if the build or deployment is failing.

<h2 id="tool-installers">Build tool installers (VSTS)</h2>

> **VSTS preview feature**
>
> To use this capability you must be working on VSTS and enable the **Task tool installers** [preview feature](../../../collaborate/preview-features.md) for your account.

Tool installers enable your build process to install and control your dependencies. Specifically, you can:

* Install a tool or runtime on the fly (even on [hosted agents](../agents/hosted.md)) just in time for your CI build.

* Validate your app or library against multiple versions of a dependency such as Node.js.

For example, you can set up your build process to run and validate your app for multiple versions of Node.js. 

### Example: Test and validate your app on multiple versions of Node.js

> [!TIP]
> Want a visual walkthrough? See [our April 19 news release](../../archive/news/2017.md#april-19).

[Create a new build definition](../../actions/ci-cd-part-1.md) (start with an empty process) to try this out.

#### Tasks tab

Add these tasks:

![icon](../../tasks/tool/_img/node.png) Tool: Node Installer

* Version Spec: 

 ```
$(NodeVersionSpec)
```

![icon](../../tasks/utility/_img/command-line.png) Utility: Command Line

* Tool (if you're running on a Windows agent)
 ```
where
```

* Tool (if you're running on a macOS or Linux agent)
 ```
which
```

* Arguments
 ```
node
```

#### Variables tab

On the [Variables tab](../../concepts/definitions/build/variables.md) define this variable:

|Name|Value|Settable at queue time|
|-|-|-|
|```NodeVersionSpec```|```6.x, 7.x```|Selected|

#### Options tab

On the [Options tab](../../concepts/definitions/build/options.md):

0. Enable **Multi-configuration**.

0. Specify **Multipliers**:

 ```
NodeVersionSpec
```

0. (Optional) Select **Parallel** if you have multiple build agents and want to run your builds in parallel.

#### Save & queue

Click **Save & queue**. Observe how two builds are run. The [Node Tool Installer](../../tasks/tool/node-js.md) downloads each of the Node.js versions if they are not already on the agent. The [Command Line](../../tasks/utility/command-line.md) task logs the location of the Node.js version on disk.

### Tool installer tasks

For a list of our tool installer tasks, see [Tool installer tasks](../../tasks/index.md#tool).

## Related topics

* [Task phases](phases.md)
* [Task groups](../library/task-groups.md)
* [Built-in task catalog](../../tasks/index.md)
 
[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
