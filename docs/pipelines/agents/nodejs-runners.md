---
title: Node.js runners in Azure Pipelines Agent
ms.topic: concept-article
description: Learn about Node.js task runners in Azure Pipelines.
ms.date: 11/14/2025
monikerRange: '<= azure-devops'
---

# Node.js runners in Azure Pipelines Agent

The Azure Pipelines agent ships with several versions of Node.js libraries to support target tasks that may use different Node.js handlers. 

> [!NOTE]
> The Azure Pipelines Agent will be shipped with Node.js 24 starting January 2026. Extension/custom task authors should [update/test their tasks with Node.js 24](../../extend/develop/add-build-task.md#q-how-can-i-upgrade-my-task-to-the-latest-nodejs-version). 

## Node.js version support

The following table lists the Node.js versions that are supported in Azure Pipelines, along with their end-of-support dates and removal dates.

| Node.js version | End of support in Azure Pipelines | Removal date in Azure Pipelines |
|-----------------|-----------------------------------|---------------------------------|
| 24 (Available in agent January 2026) | April 2028[<sup>1</sup>](#note1) | October 2028[<sup>1</sup>](#note1)|
| 20 | April 2026 | April 2027 |
| 16 | September 2021 | November 2026 |
| 10 | April 2021 | November 2026 |
| 6  | April 2019 | November 2026 |

- **End of support in Azure Pipelines** - when the end-of-support date is reached, the Node.js version will not be updated in the Azure Pipelines Agent. The end-of-support date is based on the official [Node.js support schedule](https://nodejs.org/en/about/releases/).
- **Removal date in Azure Pipelines** - when the removal date is reached, the Node.js version will be removed from new agent versions, and tasks that require these Node.js versions may fail to run. The removal date will always be at least six months after the end-of-support date.

 Pipelines will emit warnings to inform users of any upcoming end-of-support or removal dates.

The Azure Pipelines Agent will include only alternate long term support (LTS) versions of Node.js starting with the upcoming release of Azure Pipeline Agent with Node.js 24.

<a name="note1"></a>
<sup>1</sup>The end-of-support for Node.js 24 are aligned with the official [Node.js support schedule](https://nodejs.org/en/about/releases/) as of November 2025. These dates are subject to change based on future announcements from the Node.js team.

## Removal date for Node.js 6, 10, and 16

Node.js 6, 10, and 16 have been unsupported in pipelines since their respective end-of-support dates, and pipelines with tasks dependent on these Node.js versions currently emit warnings when they are run. However, to provide customers with sufficient time to migrate their custom tasks to a supported Node.js version, we have extended the removal date to **November 2026**.

For information on updating and testing your custom tasks to the current version of Node.js, see [How can I upgrade my task to the latest Node.js version](../../extend/develop/add-build-task.md#q-how-can-i-upgrade-my-task-to-the-latest-nodejs-version).

## How to run tasks on unsupported Node.js versions

To maintain backward compatibility for custom tasks using a Node.js version that is no longer supported or has been removed, we offer these self-service options so you can install the required Node.js runner:

* Manually install the desired Node.js runner. For more information, see [Node.js runner support](https://github.com/microsoft/azure-pipelines-agent/blob/master/docs/noderunner.md).
* Use the [`NodeTaskRunnerInstaller@0`](/azure/devops/pipelines/tasks/reference/node-task-runner-installer-v0) task in your pipelines that require an outdated Node.js library.
* Install an agent package that includes the desired Node.js libraries.
  
  Azure Pipelines provides two versions of agent packages:

  * `vsts-agent-\`: Packages that support Node.js 6 and Node.js 10 libraries.
  * `pipelines-agent-\`: Packages that don't support Node.js 6 and Node.js 10 libraries. In the future, this version of the package becomes the default agent package.
 
  > [!NOTE]
  > `pipelines-agent` will not be shipped with Node.js 16 starting January 2026. Extension/custom task authors should [update/test their tasks with Node.js 24](../../extend/develop/add-build-task.md#q-how-can-i-upgrade-my-task-to-the-latest-nodejs-version).

  If your tasks don't require the Node.js 6 or Node.js 10 library, and you don't want to install the Node.js 6 or Node.js 10 library on your agent machine, you can install the agent from [this documentation, under Alternate Agent Downloads](https://github.com/microsoft/azure-pipelines-agent/releases).
