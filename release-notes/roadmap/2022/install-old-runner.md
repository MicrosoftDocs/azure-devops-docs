---
title: Install old Node runners
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Install old Node runners
hide_comments: true
---

# Install old Node runners

In addition to the built-in tasks, you can use tasks from Marketplace or your own custom tasks in Azure Pipelines. We are in the process of updating the built-in Node tasks to use the new Node 16 runner. We published guidance for external task authors to update their tasks. While we expect a majority of tasks in the Marketplace to be updated, we also expect that some of them will be left behind. It is also likely that you will take some time to update your custom tasks, if you have those. Initially, we will be shipping two agents - one with Node 6, 10, and 16 runners, and one with Node 16 only runner. Depending on what tasks you depend on, you will have the choice to use either of those agents. We will keep the Microsoft-hosted agents to host all the three Node runners for some time.

At some point in 2023 Q1, we will stop shipping the agent with old Node runners. However, we still want to give you a way to run tasks that have not been upgraded. One particular way we will support this is by making the old Node runners available separately to download. You can install these on your agent, and continue to work with the tasks that were not updated. Note that you may not have a choice to run non-upgraded tasks on Microsoft-hosted agents after 2023 Q1.
