---
title: Node.js runners in Agent
ms.topic: concept-article
description: Learn about node.js task runners in Azure Pipelines.
ms.date: 11/12/2025
monikerRange: '<= azure-devops'
---

# Node.js runners in Agent

The Azure Pipelines agent ships with several versions of Node.js libraries to support target tasks that may use different Node.js handlers. 

**Agent will be updated with Node.js 24 by January'2026** . Extension/Custom task authors should update/test their tasks with Node.js 24. 

## Node.js version support

Azure Pipelines will support alternate long term support (LTS) versions of Node.js starting from the upcoming release of Node.js 24. It will be only be supported untill the official support date by Node.js.

The following table lists the Node.js versions that are supported in Azure Pipelines, along with their end-of-support dates and removal dates.

- **End of support** - when the end-of-support date is reached, Node.js versions will not be updated in Agents. Pipelines would emit warnings long before the end of support dates to inform on the same.
- **Removal date** - when the removal date is reached, the node.js version will be removed from new agent versions, and tasks that require these node.js versions may fail to run. The **removal date** will always be at least six months after the **end of support** date.

| Node.js version | End of support in Azure Pipelines | Removal date in Azure Pipelines |
|-----------------|-----------------------------------|---------------------------------|
| 24 | April 2028* | October 2028*|
| 20 | April 2026 | April 2027 |
| 16 | September 2021 | November 2026 |
| 10 | April 2021 | November 2026 |
| 6  | April 2019 | November 2026 |


## Removal date for Node.js 6, 10, and 16

Node.js 6, 10, and 16 have been unsupported in pipelines since their respective end-of-support dates, and pipelines with tasks dependent on these Node.js versions emit warnings when they are run. However, to provide customers with sufficient time to migrate their custom tasks to a supported Node.js version, we have extended the removal date to November 2026.

Please refer the [steps](https://aka.ms/node-runner-guidance) to update/test your tasks to the latest version of Node.js.

## How to run tasks on unsupported Node.js versions

To support backward compatibility for custom tasks with a Node.js version that has reached the end-of-support date, we provide the following self-service methods so that you can manually install the designated Node.js runner:

* Manually install the desired Node.js runner. For more information, see [Node.js runner support](https://github.com/microsoft/azure-pipelines-agent/blob/master/docs/noderunner.md).
* Use the [`NodeTaskRunnerInstaller@0`](/azure/devops/pipelines/tasks/reference/node-task-runner-installer-v0) task in your pipelines that require an outdated Node.js library.
* Install an agent package that includes the desired Node.js libraries.
  
  Azure Pipelines provides two versions of agent packages:

  * `vsts-agent-\`: Packages that support Node.js 6 and Node.js 10 libraries.
  * `pipelines-agent-\`: Packages that don't support Node.js 6 and Node.js 10 libraries. In the future, this version of the package becomes the default agent package.

  If your tasks don't require the Node.js 6 or Node.js 10 library, and you don't want to install the Node.js 6 or Node.js 10 library on your agent machine, you can install the agent from [this documentation, under Alternate Agent Downloads](https://github.com/microsoft/azure-pipelines-agent/releases).
