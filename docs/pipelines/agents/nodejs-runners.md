---
title: Node.js runners in Azure Pipelines Agent
ms.topic: concept-article
description: Learn about node.js task runners in Azure Pipelines.
ms.date: 11/14/2025
monikerRange: '<= azure-devops'
---

# Node.js runners in Azure Pipelines Agent

The Azure Pipelines agent ships with several versions of Node.js libraries to support target tasks that may use different Node.js handlers. 

> [!NOTE]
> The Azure Pipelines Agent will be shipped with Node.js 24 starting January 2026. Extension/custom task authors should [update/test their tasks with Node.js 24](../../extend/develop/add-build-task.md#q-how-can-i-upgrade-my-task-to-the-latest-nodejs-version). 

## Node.js version support

Azure Pipelines will support alternate long term support (LTS) versions of Node.js starting from the upcoming release of Node.js 24. It will be only be supported untill the official support date by Node.js.

The following table lists the Node.js versions that are supported in Azure Pipelines, along with their end-of-support dates and removal dates.

| Node.js version | End of support in Azure Pipelines | Removal date in Azure Pipelines |
|-----------------|-----------------------------------|---------------------------------|
| 24 (Available in agent January 2026) | April 2028<sup>1</sup> | October 2028<sup>1</sup>|
| 20 | April 2026 | April 2027 |
| 16 | September 2021 | November 2026 |
| 10 | April 2021 | November 2026 |
| 6  | April 2019 | November 2026 |

- **End of support in Azure Pipelines** - when the end-of-support date is reached, Node.js versions will not be updated in Agents. Pipelines would emit warnings long before the end of support dates to inform on the same.
- **Removal date in Azure Pipelines** - when the removal date is reached, the node.js version will be removed from new agent versions, and tasks that require these node.js versions may fail to run. The **removal date** will always be at least six months after the **end of support** date.

## Removal date for Node.js 6, 10, and 16

Node.js 6, 10, and 16 have been unsupported in pipelines since their respective end-of-support dates, and pipelines with tasks dependent on these Node.js versions emit warnings when they are run. However, to provide customers with sufficient time to migrate their custom tasks to a supported Node.js version, we have extended the removal date to November 2026.

For information on updating and testing your custom tasks to the current version of Node.js, see [How can I upgrade my task to the latest Node.js version](../../extend/develop/add-build-task.md#q-how-can-i-upgrade-my-task-to-the-latest-nodejs-version).

## How to run tasks on unsupported Node.js versions

To support backward compatibility for custom tasks with a Node.js version that has reached the end-of-support date, we provide the following self-service methods so that you can manually install the designated Node.js runner:

* Manually install the desired Node.js runner. For more information, see [Node.js runner support](https://github.com/microsoft/azure-pipelines-agent/blob/master/docs/noderunner.md).
* Use the [`NodeTaskRunnerInstaller@0`](/azure/devops/pipelines/tasks/reference/node-task-runner-installer-v0) task in your pipelines that require an outdated Node.js library.
* Install an agent package that includes the desired Node.js libraries.
  
  Azure Pipelines provides two versions of agent packages:

  * `vsts-agent-\`: Packages that support Node.js 6 and Node.js 10 libraries.
  * `pipelines-agent-\`: Packages that don't support Node.js 6 and Node.js 10 libraries. In the future, this version of the package becomes the default agent package.

  If your tasks don't require the Node.js 6 or Node.js 10 library, and you don't want to install the Node.js 6 or Node.js 10 library on your agent machine, you can install the agent from [this documentation, under Alternate Agent Downloads](https://github.com/microsoft/azure-pipelines-agent/releases).
