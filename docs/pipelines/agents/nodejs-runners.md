---
title: Node.js runners in Azure Pipelines Agent
ms.topic: concept-article
description: Learn about Node.js task runners in Azure Pipelines.
ms.date: 09/10/2026
monikerRange: '<= azure-devops'
---

# Node.js runners in Azure Pipelines Agent

The Azure Pipelines agent ships with several versions of Node.js libraries to support target tasks that may use different Node.js handlers. 

> [!WARNING]
> Node.js 6, 10, and 16 are end of life and will be removed from the agent on **November 24, 2026**. The Azure Pipelines agent already includes Node.js 24. Extension and custom task authors should [update their tasks with Node.js 24](../../extend/develop/add-build-task.md#q-how-can-i-upgrade-my-task-to-the-latest-nodejs-version) to avoid any impact on Pipelines that use these tasks.

## Node.js version support

The following table lists the Node.js versions that are supported in Azure Pipelines, along with their end-of-support dates and removal dates.

| Node.js version | End of support in Azure Pipelines | Removal date in Azure Pipelines |
|-----------------|-----------------------------------|---------------------------------|
| 24 | April 2028[<sup>1</sup>](#note1) | October 2028[<sup>1</sup>](#note1)|
| 20 | April 2026 | April 2027 |
| 16 | September 2021 | November 24, 2026 |
| 10 | April 2021 | November 24, 2026 |
| 6  | April 2019 | November 24, 2026 |

- **End of support in Azure Pipelines** - when the end-of-support date is reached, the Node.js version will not be updated in the Azure Pipelines Agent. The end-of-support date is based on the official [Node.js support schedule](https://nodejs.org/en/about/releases/).
- **Removal date in Azure Pipelines** - when the removal date is reached, the Node.js version will be removed from new agent versions, and tasks that require these Node.js versions may fail to run. The removal date will always be at least six months after the end-of-support date.

Pipelines emit warnings to inform users of upcoming end-of-support or removal dates.

Starting with Node.js 24, the Azure Pipelines agent includes only alternate long-term support (LTS) versions of Node.js.

<a name="note1"></a>
<sup>1</sup>The end-of-support and removal dates for Node.js 24 align with the official [Node.js support schedule](https://nodejs.org/en/about/releases/) as of November 2025. These dates are subject to change based on future announcements from the Node.js team.

## Removal date for Node.js 6, 10, and 16

Node.js 6, 10, and 16 have been unsupported in pipelines since their respective end-of-support dates. Pipelines with tasks that depend on these Node.js versions currently emit warnings when they run. To give you enough time to migrate your custom tasks to a supported Node.js version, we extended the removal date to **November 24, 2026**.

For information on updating and testing your custom tasks to the current version of Node.js, see [How can I upgrade my task to the latest Node.js version](../../extend/develop/add-build-task.md#q-how-can-i-upgrade-my-task-to-the-latest-nodejs-version).

::: moniker range="azure-devops"

## Test tasks before end-of-life Node.js runners are removed

Use the organization-level **Restrict out of support Node.js versions in pipeline tasks** setting to assess how removing Node.js 6, 10, and 16 from the agent affects your pipelines. The setting is disabled by default. When you enable it, affected tasks run with a newer available Node.js runner instead of their declared end-of-life runner.

This setting helps you identify and update impacted pipelines before Node.js 6, 10, and 16 are removed from the agent on **November 24, 2026**. It doesn't remove the runners from the agent.

### Prerequisites for this feature

You need [Agent version 4.278.0](https://github.com/microsoft/azure-pipelines-agent/releases/tag/v4.278.0) or later for the preceding setting.

### Enable the setting

1. Go to **Organization settings** > **Pipelines** > **Settings**.
1. Under **Task restrictions**, enable **Restrict out of support Node.js versions in pipeline tasks**.

   :::image type="content" source="media/nodejs-runners/restrict-end-of-life-node-versions.png" alt-text="Screenshot showing the setting enabled to restrict out-of-support Node.js versions in pipeline tasks.":::

1. Run your pipelines and review the logs for warnings about tasks that depend on end-of-life Node.js versions.

### Behavior when the setting is enabled

For each task that declares a Node.js 6, 10, or 16 execution handler, the agent:

1. Prevents the task from using its declared end-of-life Node.js runner.
1. Selects a newer available runner, preferring Node.js 24 and then Node.js 20.
1. Logs a warning that identifies the affected task and explains that it might fail or behave unexpectedly.
1. Runs the task with the selected runner, or fails the task if no compatible newer runner is available.

The setting applies to Microsoft-hosted and self-hosted agents and to tasks that run on the agent host or in a container.

> [!IMPORTANT]
> Running a task with a newer Node.js version doesn't make the task compatible with that version. Test affected pipelines, and update custom tasks to use a current Node.js runner. For migration guidance, see [How can I upgrade my task to the latest Node.js version](../../extend/develop/add-build-task.md#q-how-can-i-upgrade-my-task-to-the-latest-nodejs-version).

::: moniker-end

## How to run tasks on unsupported Node.js versions

To maintain backward compatibility for custom tasks using a Node.js version that is no longer supported or has been removed, we offer these self-service options so you can install the required Node.js runner:

* Manually install the desired Node.js runner. For more information, see [Node.js runner support](https://github.com/microsoft/azure-pipelines-agent/blob/master/docs/noderunner.md).
* Use the [`NodeTaskRunnerInstaller@0`](/azure/devops/pipelines/tasks/reference/node-task-runner-installer-v0) task in your pipelines that require an outdated Node.js library.
* Install an agent package that includes the desired Node.js libraries.
  
  Azure Pipelines provides two versions of agent packages:

  * `vsts-agent-\`: Packages that support Node.js 6 and Node.js 10 libraries.
  * `pipelines-agent-\`: Packages that don't support Node.js 6 and Node.js 10 libraries. In the future, this version of the package becomes the default agent package.
 
  > [!NOTE]
  > The `pipelines-agent` package doesn't include Node.js 16. Extension and custom task authors should [update and test their tasks with Node.js 24](../../extend/develop/add-build-task.md#q-how-can-i-upgrade-my-task-to-the-latest-nodejs-version).

  If your tasks don't require the Node.js 6 or Node.js 10 library, and you don't want to install the Node.js 6 or Node.js 10 library on your agent machine, you can install the agent from [this documentation, under Alternate Agent Downloads](https://github.com/microsoft/azure-pipelines-agent/releases).

::: moniker range="azure-devops"

## FAQ

### What happens to tasks that use Node.js 6, 10, or 16 when I enable the setting?

The agent blocks the task's declared end-of-life runner and tries to run the task with Node.js 24, or with Node.js 20 if Node.js 24 isn't available or usable. The pipeline log identifies the affected task and displays a warning. If no newer usable runner is available, the task fails.

Scripts and applications that use Node.js aren't affected solely because they use Node.js. The setting applies to the Node.js execution handler declared by an Azure Pipelines task.

### Why did my pipeline start failing after I enabled the setting?

The Pipeline may be using task(s) that aren't compatible with the newer Node.js runner. Review the task warning and error in the pipeline log to identify the affected task.

- For a built-in task, update the pipeline to use the latest task major version.
- For a Marketplace task, check for an updated version or contact the extension publisher.
- For a custom task, update its execution handler and dependencies to a current Node.js version. For more information, see [How can I upgrade my task to the latest Node.js version](../../extend/develop/add-build-task.md#q-how-can-i-upgrade-my-task-to-the-latest-nodejs-version).
- For a self-hosted agent, ensure that the Agent version is updated to v 4.278.0 or later.

Until the end-of-life runners are removed, you can temporarily disable the organization setting while you update the task. Disabling the setting isn't a long-term solution because Node.js 6, 10, and 16 are scheduled for removal on November 24, 2026.

### Does the setting remove Node.js 6, 10, or 16 from my agents?

No. The setting prevents pipeline tasks from selecting those runners so you can test the effect of their upcoming removal. It doesn't uninstall files from an agent.

### Can I continue to use an unsupported Node.js runner?

Keeping an end-of-life runtime has security and compatibility risks, so update the task instead. For temporary self-hosted-agent options, see [How to run tasks on unsupported Node.js versions](#how-to-run-tasks-on-unsupported-nodejs-versions).

### Does the setting affect Azure DevOps Server?

No. The organization setting is not available in Azure DevOps Server.

::: moniker-end

## See also

- [Task types and usage](../process/tasks.md)
- [Azure Pipelines agents](agents.md)
- [Add a custom pipelines task extension](../../extend/develop/add-build-task.md)
