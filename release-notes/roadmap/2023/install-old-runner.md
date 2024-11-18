---
title: Ability to download and install old runners on self-hosted agents
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Ability to download and install old runners on self-hosted agents
hide_comments: true
---
# Ability to download and install old runners on self-hosted agents

In addition to the built-in tasks, you can use tasks from the [Marketplace](https://marketplace.visualstudio.com/search?target=AzureDevOps&category=Azure%20Pipelines&sortBy=Installs) or your own custom tasks in Azure Pipelines. We are in the process of [updating the built-in Node tasks](../2022/in-the-box-tasks-on-16.md) to use the new Node 16 runner. We [published guidance](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/migrateNode16.md) for external task authors to update their tasks. While we expect a majority of tasks in the Marketplace to be updated, we also expect that some of them will not be updated and will continue to depend on older Node runners. It is also likely that you will take some time to update your custom tasks, if you have those. Initially, we will be shipping two agents - one with Node 6, 10, and 16 runners, and one with the [Node 16 runner only](../2022/node-16-agent.md). Depending on what tasks your pipelines use, you will have the choice to use either of those agents in your self-hosted pools. We will keep  Microsoft-hosted agents on the version with all three Node runners for some time.

At some point in 2023 Q1, we will stop shipping the agent with end-of-life Node runners. However, we still want to give you a way to run tasks that have not been upgraded. One way we will support this is by making the old Node runners available as a separate download. You can install these on your agent, and continue to work with the tasks that were not upgraded. 

> [!NOTE]
> Running non-upgraded tasks on *Microsoft-hosted* agents after 2023 Q1 may not be supported.